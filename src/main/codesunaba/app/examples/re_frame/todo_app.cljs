(ns codesunaba.app.examples.re-frame.todo-app)

(def re-frame-todo-app-example
  "(ns re-frame-todo-app-example.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [clojure.string :as str]))

;; --- App DB ----

(def default-db {:todos (sorted-map)
                 :showing :all})

;; --- Add Sample Data ----

(defn add-sample-data []
  (rf/dispatch [:add-todo \"Do laundry\"])
  (rf/dispatch [:add-todo \"Wash dishes\"])
  (rf/dispatch [:add-todo \"Buy groceries\"]))

;; --- Utilities ----

(defn allocate-next-id [todos]
  ((fnil inc 0) (last (keys todos))))

;; --- Event Handlers ----

(rf/reg-event-db
 :initialize-db
 (fn [_db _event-v]
   default-db))

(rf/reg-event-db
 :set-showing
 (fn [db [_event-id kw]]
   (assoc-in db [:showing] kw)))

(rf/reg-event-db
 :add-todo
 (fn [db [_event-id text]]
   (let [id (allocate-next-id (:todos db))
         new-todo {:id id, :title text, :done false}]
     (assoc-in db [:todos id] new-todo))))

(rf/reg-event-db
 :toggle-done
 (fn [db [_event-id id]]
   (update-in db [:todos id :done] not)))

(rf/reg-event-db
 :save-todo
 (fn [db [_event-id id title]]
   (assoc-in db [:todos id :title] title)))

(rf/reg-event-db
 :delete-todo
 (fn [db [_event-id id]]
   (update-in db [:todos] dissoc id)))

(rf/reg-event-db
 :complete-all-toggle
 (fn [db _event-v]
   (let [todos (:todos db)
         b (not-every? :done (vals todos))
         g (fn [m id]
             (assoc-in m [id :done] b))
         ids (keys todos)
         updated-todos (reduce g todos ids)]
     (assoc db :todos updated-todos))))

(rf/reg-event-db
 :clear-completed
 (fn [db _event-v]
   (let [todos (:todos db)
         done-ids (->> (vals todos)
                       (filter :done)
                       (map :id))
         updated-todos (reduce dissoc todos done-ids)]
     (assoc db :todos updated-todos))))

;; --- Subscriptions ----

(rf/reg-sub
 :showing
 (fn [db _query-v]
   (:showing db)))

(rf/reg-sub
 :sorted-todos
 (fn [db _query-v]
   (:todos db)))

(rf/reg-sub
 :todos
 :<- [:sorted-todos]
 (fn [sorted-todos _query-v _dyn-v]
   (vals sorted-todos)))

(rf/reg-sub
 :visible-todos
 :<- [:todos]
 :<- [:showing]
 (fn [[todos showing] _query-v _dyn-v]
   (let [filter-fn (case showing
                     :done :done
                     :active (complement :done)
                     :all identity)]
     (filter filter-fn todos))))

(rf/reg-sub
 :all-complete?
 :<- [:todos]
 (fn [todos _query-v _dyn-v]
   (every? :done todos)))

(rf/reg-sub
 :completed-count
 :<- [:todos]
 (fn [todos _query-v _dyn-v]
   (count (filter :done todos))))

(rf/reg-sub
 :footer-counts
 :<- [:todos]
 :<- [:completed-count]
 (fn [[todos completed] _query-v _dyn-v]
   [(- (count todos) completed) completed]))

;; --- Views ----

(defn todo-input [{:keys [title on-save on-stop]}]
  (let [input-text (r/atom title)
        update-text #(reset! input-text %)
        stop #(do (reset! input-text \"\")
                  (when on-stop (on-stop)))
        save #(let [trimmed-text (-> @input-text str str/trim)]
                (if-not (empty? trimmed-text) (on-save trimmed-text))
                (stop))
        key-pressed #(case %
                       \"Enter\" (save)
                       \"Esc\" (stop)
                       \"Escape\" (stop)
                       nil)]
    (fn [{:keys [class placeholder]}]
      [:input {:class class
               :placeholder placeholder
							 ;; :auto-focus true
               :type \"text\"
               :value @input-text
               :on-blur save
               :on-change #(update-text (.. % -target -value))
               :on-key-down #(key-pressed (.. % -key))}])))

(defn todo-item [_props-map]
  (let [editing (r/atom false)]
    (fn [{:keys [id title done]}]
      [:li {:class (str (when done \"completed \")
                        (when @editing \"editing\"))}
       [:div.view
        [:input {:class \"toggle\"
                 :type \"checkbox\"
                 :checked done
                 :on-change #(rf/dispatch [:toggle-done id])}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(rf/dispatch [:delete-todo id])}]]
       (when @editing
         [todo-input {:class \"edit\"
                      :title title
                      :on-save #(rf/dispatch [:save-todo id %])
                      :on-stop #(reset! editing false)}])])))

(defn task-list []
  (let [all-complete? @(rf/subscribe [:all-complete?])
        visible-todos @(rf/subscribe [:visible-todos])]
    [:section.main
     [:input {:id \"toggle-all\"
              :class \"toggle-all\"
              :type \"checkbox\"
              :checked all-complete?
              :on-change #(rf/dispatch [:complete-all-toggle])}]
     [:label {:for \"toggle-all\"} \"Mark all as complete\"]
     [:ul.todo-list
      (for [todo visible-todos]
        ^{:key (:id todo)} [todo-item todo])]]))

(defn footer-controls []
  (let [showing @(rf/subscribe [:showing])
        [active-count done-count] @(rf/subscribe [:footer-counts])
        props-for (fn [kw]
                    {:class (when (= kw showing) \"selected\")
                     :on-click #(rf/dispatch [:set-showing kw])
                     :href (str \"#/\" (name kw))})]
    [:footer.footer
     [:span.todo-count
      [:strong active-count] \" \" (case active-count 1 \"item\" \"items\") \" left\"]
     [:ul.filters
      [:li [:a (props-for :all) \"All\"]]
      [:li [:a (props-for :active) \"Active\"]]
      [:li [:a (props-for :done) \"Completed\"]]]
     (when (pos? done-count)
       [:button.clear-completed {:on-click #(rf/dispatch [:clear-completed])}
        \"Clear completed\"])]))

(defn task-entry []
  [:header.header
   [:h1 \"todos\"]
   [todo-input {:class \"new-todo\"
                :placeholder \"What needs to be done?\"
                :on-save #(rf/dispatch [:add-todo %])}]])

(defn todo-app []
  [:div.wrapper
   [:section.todoapp
    [task-entry]
    (when (seq @(rf/subscribe [:todos]))
      [:div
       [task-list]
       [footer-controls]])]
   [:footer.info
    [:p \"Double-click to edit a todo\"]
    [:p {:style {:margin-top 12
                 :color \"#b83f45\"}}
     \"This example uses Reagent + Re-frame\"]]])

;; --- Render ----

(defn render []
  (rf/dispatch-sync [:initialize-db])
  (add-sample-data)
  (rdom/render [todo-app] (.getElementById js/document \"app\")))

(render)
")

(def re-frame-todo-app-example-css
  ".wrapper {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
	line-height: 1.4em;
	color: #111111;
	min-width: 230px;
	max-width: 550px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: 300;
}

.hidden {
	display: none;
}

.todoapp {
	background: #fff;
	margin: 130px 0 40px 0;
	position: relative;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp h1 {
	position: absolute;
	top: -140px;
	width: 100%;
	font-size: 80px;
	font-weight: 200;
	text-align: center;
	color: #b83f45;
	-webkit-text-rendering: optimizeLegibility;
	-moz-text-rendering: optimizeLegibility;
	text-rendering: optimizeLegibility;
}

.new-todo,
.edit {
	position: relative;
	margin: 0;
	width: 100%;
	font-size: 24px;
	font-family: inherit;
	font-weight: inherit;
	line-height: 1.4em;
	color: inherit;
	padding: 6px;
	border: 1px solid #999;
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.new-todo {
	padding: 16px 16px 16px 60px;
	border: none;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}

.main {
	position: relative;
	z-index: 2;
	border-top: 1px solid #e6e6e6;
}

.toggle-all {
	width: 1px;
	height: 1px;
	border: none; /* Mobile Safari */
	opacity: 0;
	position: absolute;
	right: 100%;
	bottom: 100%;
}

.toggle-all + label {
	width: 60px;
	height: 34px;
	font-size: 0;
	position: absolute;
	top: -52px;
	left: -13px;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}

.todo-list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.todo-list li {
	position: relative;
	font-size: 24px;
	border-bottom: 1px solid #ededed;
}

.todo-list li.editing {
	border-bottom: none;
	padding: 0;
}

.todo-list li.editing .edit {
	display: block;
	width: calc(100% - 43px);
	padding: 12px 16px;
	margin: 0 0 0 43px;
}

.todo-list li.editing .view {
	display: none;
}

.todo-list li .toggle {
	text-align: center;
	width: 40px;
	/* auto, since non-WebKit browsers doesn't support input styling */
	height: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	border: none; /* Mobile Safari */
	-webkit-appearance: none;
	appearance: none;
}

.todo-list li .toggle {
	opacity: 0;
}

.todo-list li label {
	word-break: break-all;
	padding: 15px 15px 15px 60px;
	display: block;
	line-height: 1.2;
	transition: color 0.4s;
	font-weight: 400;
	color: #4d4d4d;
}

.todo-list li.completed label {
	color: #cdcdcd;
	text-decoration: line-through;
}

.todo-list li .destroy {
	display: none;
	position: absolute;
	top: 0;
	right: 10px;
	bottom: 0;
	width: 40px;
	height: 40px;
	margin: auto 0;
	font-size: 30px;
	color: #cc9a9a;
	margin-bottom: 11px;
	transition: color 0.2s ease-out;
	background: none;
	border: none;
}

.todo-list li .edit {
	display: none;
}

.footer {
	padding: 10px 15px;
	height: 44px;
	text-align: center;
	font-size: 15px;
	border-top: 1px solid #e6e6e6;
}

.todo-count {
	float: left;
	text-align: left;
}

.todo-count strong {
	font-weight: 300;
}

.filters {
	margin: 0;
	padding: 0;
	list-style: none;
	position: absolute;
	right: 0;
	left: 0;
}

.filters li {
	display: inline;
}

.filters li a {
	color: inherit;
	margin: 3px;
	padding: 3px 7px;
	text-decoration: none;
	border: 1px solid transparent;
	border-radius: 3px;
}

.filters li a.selected {
	border-color: rgba(175, 47, 47, 0.2);
}

.info {
	margin: 65px auto 0;
	color: #4d4d4d;
	font-size: 11px;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	text-align: center;
}

.info p {
	line-height: 1;
}

.info a {
	color: inherit;
	text-decoration: none;
	font-weight: 400;
}
")

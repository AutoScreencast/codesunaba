(ns codesunaba.app.examples.todo-app)

(def todo-app-example
  "(ns todo-app-example.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

;; --- App State ----

(defonce todos (r/atom (sorted-map)))

(defonce counter (r/atom 0))

;; --- Watch the State ----

(add-watch todos :todos
           (fn [key _atom _old-state new-state]
             (println \"---\" key \"atom changed ---\")
             (println new-state)))

;; --- Utilities ----

(defn add-todo [text]
  (let [id (swap! counter inc)
        new-todo {:id id, :title text, :done false}]
    (swap! todos assoc id new-todo)))

(defn toggle-done [id]
  (swap! todos update-in [id :done] not))

(defn save-todo [id title]
  (swap! todos assoc-in [id :title] title))

(defn delete-todo [id]
  (swap! todos dissoc id))

(defn mmap [m f g]
  (->> m
       (f g)
       (into (empty m))))

(defn complete-all-toggle [b]
  (let [g #(assoc-in % [1 :done] b)]
    (swap! todos mmap map g)))

(defn clear-completed []
  (let [g #(get-in % [1 :done])]
    (swap! todos mmap remove g)))

;; --- Initialize App with Mock Data ----

(defonce init (do
                (add-todo \"Do laundry\")
                (add-todo \"Wash dishes\")
                (add-todo \"Buy groceries\")))

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
                        (when @editing \"editing \"))}
       [:div.view
        [:input {:class \"toggle\"
                 :type \"checkbox\"
                 :checked done
                 :on-change #(toggle-done id)}]
        [:label {:on-double-click #(reset! editing true)} title]
        [:button.destroy {:on-click #(delete-todo id)}]]
       (when @editing
         [todo-input {:class \"edit\"
                      :title title
                      :on-save (fn [text] (save-todo id text))
                      :on-stop #(reset! editing false)}])])))

(defn task-list [showing]
  (let [items (vals @todos)
        filter-fn (case @showing
                    :done :done
                    :active (complement :done)
                    :all identity)
        visible-items (filter filter-fn items)
        all-complete? (every? :done items)]
    [:section.main
     [:input {:id \"toggle-all\"
              :class \"toggle-all\"
              :type \"checkbox\"
              :checked all-complete?
              :on-change #(complete-all-toggle (not all-complete?))}]
     [:label {:for \"toggle-all\"} \"Mark all as complete\"]
     [:ul.todo-list
      (for [todo visible-items]
        ^{:key (:id todo)} [todo-item todo])]]))

(defn footer-controls [showing]
  (let [items (vals @todos)
        done-count (count (filter :done items))
        active-count (- (count items) done-count)
        props-for (fn [kw]
                    {:class (when (= kw @showing) \"selected\")
                     :on-click #(reset! showing kw)
                     :href \"#\"})]
    [:footer.footer
     [:span.todo-count
      [:strong active-count] \" \" (case active-count 1 \"item\" \"items\") \" left\"]
     [:ul.filters
      [:li [:a (props-for :all) \"All\"]]
      [:li [:a (props-for :active) \"Active\"]]
      [:li [:a (props-for :done) \"Completed\"]]]
     (when (pos? done-count)
       [:button.clear-completed {:on-click clear-completed} \"Clear completed\"])]))

(defn task-entry []
  [:header.header
   [:h1 \"todos \"]
   [todo-input {:class \"new-todo\"
                :placeholder \"What needs to be done?\"
                :on-save add-todo}]])

(defn todo-app []
  (let [showing (r/atom :all)] ; showing can be :all, :active, or :done
    (fn []
      [:div.wrapper
       [:section.todoapp
        [task-entry]
        (when (seq @todos)
          [:div
           [task-list showing]
           [footer-controls showing]])]
       [:footer.info
        [:p \"Double-click to edit a todo\"]]])))

;; --- Render ----

(defn render []
  (rdom/render [todo-app] (.getElementById js/document \"app\")))

(render)
")

(def todo-app-example-css
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
	top: -80px;
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

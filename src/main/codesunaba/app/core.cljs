(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["@monaco-editor/react" :default MonacoEditor]))

;; sunaba - Japanese for "sandbox"
;; codesunaba.com is available

(defonce eval-ready? (r/atom false))
(defonce c-state (env/default-compiler-env))

(defonce user-input (r/atom nil))
(defonce evaluated-output (r/atom nil))

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        callback (fn [result]
                   (reset! evaluated-output (:value result)))]
    (cljs/eval-str c-state code "[demo-bootstrap-cljs]" options callback)))

(defn code-editor []
  (let [handle-change (fn [value _event]
                        (reset! user-input value)
                        (compile-it @user-input))]
    (fn []
      [:> MonacoEditor {:height          "50vh"
                        :defaultValue    @user-input
                        :onChange        handle-change
                        :defaultLanguage "clojure"
                        :theme           "vs-dark"
                        :options         {:wordWrap             "on"
                                          :minimap              {:enabled false}
                                          :showUnused           false
                                          :folder               false
                                          :lineNumbersMinChars  3
                                          :fontSize             16
                                          :tabSize              2
                                          :scrollBeyondLastLine false
                                          :automaticLayout      true}}])))

(defn app []
  [:<>
   [:div {:style {:display :flex :justify-content :space-between :margin-bottom 24}}
    [:h1 {:style {:margin-bottom 12}} "Code Sunaba"]
    [:h1 {:style {:color :grey :text-align :right}}
     [:i "a simple ClojureScript sandbox"]]]
   [:h4 {:style {:margin-bottom 12 :color :grey}}
    "Write some ClojureScript code in the code editor below."]
   [:h6 {:style {:margin-bottom 12 :color :grey}}
    "The packages `reagent.core` and `reagent.dom` are supported.
     You can render your components to the DOM using:
     `(.getElementById js/document \"app\")`"]
   (if @eval-ready?
     [:<>
      [code-editor]
      [:pre>code "Output: " [:strong (str @evaluated-output)]]]
     [:p "Preparing the self-hosted CLJS environment..."])])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (.remove (.getElementById js/document "initial"))
  (boot/init c-state {:path "/bootstrap"} #(reset! eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (render))

;; ========================== CODE SAMPLES FOR USER-INPUT ======================

(comment
  (ns example.core
    (:require [reagent.dom :as rdom]))

  (defn app []
    [:h1 "Hello, World!"])

  (defn render []
    (rdom/render [app] (.getElementById js/document "app")))

  (render))

(comment
  (ns example.core
    (:require [clojure.string :as str]
              [reagent.core :as r]
              [reagent.dom :as rdom]))

  (defonce timer (r/atom (js/Date.)))
  (defonce time-color (r/atom "#f34"))
  (defonce time-updater (js/setInterval #(reset! timer (js/Date.)) 1000))

  (defn greeting [message]
    [:h1 message])

  (defn clock []
    (let [time-str (-> @timer .toTimeString (str/split " ") first)]
      [:div.example-clock
       {:style {:color @time-color}}
       time-str]))

  (defn color-input []
    [:div.color-input
     "Time color: "
     [:input {:type "text"
              :value @time-color
              :on-change #(reset! time-color (-> % .-target .-value))}]])

  (defn simple-example []
    [:div
     [greeting "Hello world, it is now"]
     [clock]
     [color-input]])

  (rdom/render [simple-example] (.getElementById js/document "app")))

(comment
  (ns simple-example.core
    (:require [reagent.core :as r]
              [reagent.dom :as rdom]
              [clojure.string :as str]))

 ;; --- App State ----

  (defonce todos (r/atom (sorted-map)))

  (defonce counter (r/atom 0))

 ;; --- Watch the State ----

  (add-watch todos :todos
             (fn [key _atom _old-state new-state]
               (println "---" key "atom changed ---")
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
                  (add-todo "Do laundry")
                  (add-todo "Wash dishes")
                  (add-todo "Buy groceries")))

 ;; --- Views ----

  (defn todo-input [{:keys [title on-save on-stop]}]
    (let [input-text (r/atom title)
          update-text #(reset! input-text %)
          stop #(do (reset! input-text ""
                            (when on-stop (on-stop))))
          save #(let [trimmed-text (-> @input-text str str/trim)]
                  (if-not (empty? trimmed-text) (on-save trimmed-text)
                          (stop)))
          key-pressed #(case %
                         "Enter" (save)
                         "Esc" (stop)
                         "Escape" (stop)
                         nil)]
      (fn [{:keys [class placeholder]}]
        [:input {:class class
                 :placeholder placeholder
                 :auto-focus true
                 :type "text"
                 :value @input-text
                 :on-blur save
                 :on-change #(update-text (.. % -target -value))
                 :on-key-down #(key-pressed (.. % -key))}])))

  (defn todo-item [_props-map]
    (let [editing (r/atom false)]
      (fn [{:keys [id title done]}]
        [:li {:class (str (when done "completed "
                                (when @editing "editing")))}
         [:div.view
          [:input {:class "toggle"
                   :type "checkbox"
                   :checked done
                   :on-change #(toggle-done id)}]
          [:label {:on-double-click #(reset! editing true)} title]
          [:button.destroy {:on-click #(delete-todo id)} "x"]]
         (when @editing
           [todo-input {:class "edit"
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
       [:input {:id "toggle-all"
                :class "toggle-all"
                :type "checkbox"
                :checked all-complete?
                :on-change #(complete-all-toggle (not all-complete?))}]
       [:label {:for "toggle-all"} "Mark all as complete"]
       [:ul.todo-list
        (for [todo visible-items]
          ^{:key (:id todo)} [todo-item todo])]]))

  (defn footer-controls [showing]
    (let [items (vals @todos)
          done-count (count (filter :done items))
          active-count (- (count items) done-count)
          props-for (fn [kw]
                      {:class (when (= kw @showing) "selected")
                       :on-click #(reset! showing kw)
                       :href "#"})]
      [:footer.footer
       [:span.todo-count
        [:strong active-count] " " (case active-count 1 "item" "items") " left"]
       [:ul.filters
        [:li [:a (props-for :all) "All"]]
        [:li [:a (props-for :active) "Active"]]
        [:li [:a (props-for :done) "Completed"]]]
       (when (pos? done-count)
         [:button.clear-completed {:on-click clear-completed} "Clear completed"])]))

  (defn task-entry []
    [:header.header
     [:h1 "todos"]
     [todo-input {:class "new-todo"
                  :placeholder "What needs to be done?"
                  :on-save add-todo}]])

  (defn todo-app []
    (let [showing (r/atom :all)] ; showing can be :all, :active, or :done
      (fn []
        [:div
         [:section.todoapp
          [task-entry]
          (when (seq @todos)
            [:div
             [task-list showing]
             [footer-controls showing]])]
         [:footer.info
          [:p "Double-click to edit a todo"]]])))

 ;; --- Render ----

  (defn render []
    (rdom/render [todo-app] (.getElementById js/document "app")))

  (render))

(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["@monaco-editor/react" :default MonacoEditor]
            [codesunaba.app.hello-world :refer [hello-world-example]]
            [codesunaba.app.color-clock :refer [color-clock-example]]
            [codesunaba.app.todo-app :refer [todo-app-example]]))

;; sunaba - Japanese for "sandbox"
;; codesunaba.com is available

(defonce eval-ready? (r/atom false))
(defonce c-state (env/default-compiler-env))

(defonce user-input (r/atom nil))
(defonce evaluated-output (r/atom nil))

(defn debounce [timer-atom fun delay-in-ms]
  (when @timer-atom
    (js/clearTimeout @timer-atom)
    (reset! timer-atom nil))
  (reset! timer-atom (js/setTimeout fun delay-in-ms)))

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        callback (fn [result]
                   (reset! evaluated-output (:value result)))]
    (cljs/eval-str c-state code "[demo-bootstrap-cljs]" options callback)))

(defn code-editor []
  (let [timer         (atom nil)
        handle-change (fn [value _event]
                        (reset! user-input value)
                        (debounce timer #(compile-it @user-input) 300))]
    (fn []
      [:> MonacoEditor {:height          "50vh"
                        :defaultValue    ""
                        :value           @user-input
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
   [:h6 {:style {:margin-bottom 8 :color :grey}}
    "The packages `reagent.core` and `reagent.dom` are supported."]
   [:h6 {:style {:margin-bottom 16 :color :grey}}
    "You can render your components to the DOM by targeting the `app` node:
	   `(.getElementById js/document \"app\")`"]
   (if @eval-ready?
     [:<>
      [code-editor]
      [:p "Examples: "
       [:button {:on-click #(do (reset! user-input hello-world-example)
                                (compile-it @user-input))}
        "Reagent: \"Hello, World!\""]
       [:span " "]
       [:button {:on-click #(do (reset! user-input color-clock-example)
                                (compile-it @user-input))}
        "Reagent: \"Color Clock\""]
       [:span " "]
       [:button {:on-click #(do (reset! user-input todo-app-example)
                                (compile-it @user-input))}
        "Reagent: \"Todo App\""]]
      [:pre>code "Output: " [:strong (str @evaluated-output)]]]
     [:p "Preparing the self-hosted CLJS environment..."])])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (.remove (.getElementById js/document "initial"))
  (boot/init c-state {:path "/bootstrap"} #(reset! eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (println @user-input)
  (render))

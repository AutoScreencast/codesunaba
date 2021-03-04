(ns codesunaba.app.views.examples
  (:require [codesunaba.app.utils :refer [insert-style-el]]
            [codesunaba.app.examples.hello-world :refer [hello-world-example
                                                         hello-world-example-css]]
            [codesunaba.app.examples.color-clock :refer [color-clock-example
                                                         color-clock-example-css]]
            [codesunaba.app.examples.todo-app :refer [todo-app-example
                                                      todo-app-example-css]]))

(defn examples
  "Shows a sequence of buttons. When one of the buttons is pressed,
   a code example is pushed into the code editor, and it is displayed."
  [state]
  [:p.mt12.mb18
   "Examples:"
   [:button.ml6 {:on-click #(do (swap! state assoc :css-input hello-world-example-css)
                                (swap! state assoc :cljs-input hello-world-example)
                                (insert-style-el (:css-input @state) "sunaba"))}
    "Reagent: “Hello, World!”"]
   [:button.ml6 {:on-click #(do (swap! state assoc :css-input color-clock-example-css)
                                (swap! state assoc :cljs-input color-clock-example)
                                (insert-style-el (:css-input @state) "sunaba"))}
    "Reagent: “Color Clock”"]
   [:button.ml6 {:on-click #(do (swap! state assoc :css-input todo-app-example-css)
                                (swap! state assoc :cljs-input todo-app-example)
                                (insert-style-el (:css-input @state) "sunaba"))}
    "Reagent: “Todo App”"]])

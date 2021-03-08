(ns codesunaba.app.views.examples
  (:require [codesunaba.app.utils :refer [insert-style-el]]
            [codesunaba.app.examples.hello-world :refer [hello-world-example
                                                         hello-world-example-css]]
            [codesunaba.app.examples.color-clock :refer [color-clock-example
                                                         color-clock-example-css]]
            [codesunaba.app.examples.todo-app :refer [todo-app-example
                                                      todo-app-example-css]]
            [codesunaba.app.examples.re-frame.counter :refer [re-frame-counter-example
                                                              re-frame-counter-example-css]]))

(defn handle-click [state example example-css]
  (swap! state assoc :css-input example-css)
  (swap! state assoc :cljs-input example)
  (insert-style-el (:css-input @state) "sunaba"))

(defn examples
  "Shows a sequence of buttons. When one of the buttons is pressed,
   a code example is pushed into the code editor, and it is displayed."
  [state]
  [:p.mt12.mb18
   "Examples:"

   [:button.ml6 {:on-click #(handle-click state hello-world-example hello-world-example-css)}
    "Reagent: “Hello, World!”"]

   [:button.ml6 {:on-click #(handle-click state color-clock-example color-clock-example-css)}
    "Reagent: “Color Clock”"]

   [:button.ml6 {:on-click #(handle-click state todo-app-example todo-app-example-css)}
    "Reagent: “Todo App”"]

   [:button.ml6 {:on-click #(handle-click state re-frame-counter-example re-frame-counter-example-css)}
    "Re-frame: “Counter”"]])

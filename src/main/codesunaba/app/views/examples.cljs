(ns codesunaba.app.views.examples
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [codesunaba.app.utils :refer [insert-style-el clear-all]]
            [codesunaba.app.bp :refer [html-select]]

            [codesunaba.app.examples.fizzbuzz :refer [fizzbuzz-example
                                                      fizzbuzz-example-css]]
            [codesunaba.app.examples.fibonacci :refer [fibonacci-example
                                                       fibonacci-example-css]]

            [codesunaba.app.examples.hello-world :refer [hello-world-example
                                                         hello-world-example-css]]
            [codesunaba.app.examples.counter :refer [counter-example
                                                     counter-example-css]]
            [codesunaba.app.examples.color-clock :refer [color-clock-example
                                                         color-clock-example-css]]
            [codesunaba.app.examples.calculator :refer [calculator-example
                                                        calculator-example-css]]
            [codesunaba.app.examples.tic-tac-toe :refer [tic-tac-toe-example
                                                         tic-tac-toe-example-css]]
            [codesunaba.app.examples.todo-app :refer [todo-app-example
                                                      todo-app-example-css]]

            [codesunaba.app.examples.thinking-in-react :refer [thinking-in-react-example
                                                               thinking-in-react-example-css]]

            [codesunaba.app.examples.re-frame.counter :refer [re-frame-counter-example
                                                              re-frame-counter-example-css]]
            [codesunaba.app.examples.re-frame.color-clock :refer [re-frame-color-clock-example
                                                                  re-frame-color-clock-example-css]]
            [codesunaba.app.examples.re-frame.calculator :refer [re-frame-calculator-example
                                                                 re-frame-calculator-example-css]]
            [codesunaba.app.examples.re-frame.tic-tac-toe :refer [re-frame-tic-tac-toe-example
                                                                  re-frame-tic-tac-toe-example-css]]
            [codesunaba.app.examples.re-frame.todo-app :refer [re-frame-todo-app-example
                                                               re-frame-todo-app-example-css]]

            [codesunaba.app.examples.re-frame.thinking-in-react :refer [re-frame-thinking-in-react-example
                                                                        re-frame-thinking-in-react-example-css]]))

(defn chg [state example example-css]
  (let [app-div (.getElementById js/document "app")]
    (rdom/unmount-component-at-node app-div)
    (swap! state assoc :css-input example-css)
    (swap! state assoc :cljs-input example)
    (insert-style-el (:css-input @state) "sunaba")))

(defn examples
  "Shows a selection box. When one of the selections is chosen,
   a code example is pushed into the code editor, and it is displayed."
  [state]
  (let [value   (r/atom "default")
        handler (fn [event]
                  (let [sel-value (.. event -target -value)]
                    (reset! value sel-value)
                    (case sel-value
                      "fizzbuzz"
                      (chg state fizzbuzz-example fizzbuzz-example-css)
                      "fibonacci"
                      (chg state fibonacci-example fibonacci-example-css)

                      "hello-world"
                      (chg state hello-world-example hello-world-example-css)
                      "counter"
                      (chg state counter-example counter-example-css)
                      "color-clock"
                      (chg state color-clock-example color-clock-example-css)
                      "calculator"
                      (chg state calculator-example calculator-example-css)
                      "tic-tac-toe"
                      (chg state tic-tac-toe-example tic-tac-toe-example-css)
                      "todo-app"
                      (chg state todo-app-example todo-app-example-css)

                      "thinking-in-react"
                      (chg state thinking-in-react-example thinking-in-react-example-css)

                      "re-frame-counter"
                      (chg state re-frame-counter-example re-frame-counter-example-css)
                      "re-frame-color-clock"
                      (chg state re-frame-color-clock-example re-frame-color-clock-example-css)
                      "re-frame-calculator"
                      (chg state re-frame-calculator-example re-frame-calculator-example-css)
                      "re-frame-tic-tac-toe"
                      (chg state re-frame-tic-tac-toe-example re-frame-tic-tac-toe-example-css)
                      "re-frame-todo-app"
                      (chg state re-frame-todo-app-example re-frame-todo-app-example-css)

                      "re-frame-thinking-in-react"
                      (chg state re-frame-thinking-in-react-example re-frame-thinking-in-react-example-css)

                      "default"
                      (clear-all state))))]
    (fn [_state]
      [html-select {:value     @value
                    :on-change handler
                    :minimal   true}
       [:option {:value "default"}
        "Choose a Code Example …"]

       [:optgroup {:label "Pure CLJS"}
        [:option {:value "fizzbuzz"} "FizzBuzz"]
        [:option {:value "fibonacci"} "Fibonacci"]]

       [:optgroup {:label "Reagent"}
        [:option {:value "hello-world"} "Hello, World!"]
        [:option {:value "counter"} "Counter"]
        [:option {:value "color-clock"} "Color Clock"]
        [:option {:value "calculator"} "Calculator"]
        [:option {:value "thinking-in-react"} "Thinking in React"]
        [:option {:value "tic-tac-toe"} "Tic-Tac-Toe"]
        [:option {:value "todo-app"} "Todo App"]]

       [:optgroup {:label "Reagent + js/fetch"}
        [:option {:value "thinking-in-react"} "Thinking in React"]]

       [:optgroup {:label "Reagent + Re-frame"}
        [:option {:value "re-frame-counter"} "Counter"]
        [:option {:value "re-frame-color-clock"} "Color Clock"]
        [:option {:value "re-frame-calculator"} "Calculator"]
        [:option {:value "re-frame-thinking-in-react"} "Thinking in React"]
        [:option {:value "re-frame-tic-tac-toe"} "Tic-Tac-Toe"]
        [:option {:value "re-frame-todo-app"} "Todo App"]]

       [:optgroup {:label "Reagent + Re-frame + cljs-ajax"}
        [:option {:value "re-frame-thinking-in-react"} "Thinking in React"]]])))

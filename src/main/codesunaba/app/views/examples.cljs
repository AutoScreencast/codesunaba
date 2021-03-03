(ns codesunaba.app.views.examples
  (:require [codesunaba.app.examples.hello-world :refer [hello-world-example]]
            [codesunaba.app.examples.color-clock :refer [color-clock-example]]
            [codesunaba.app.examples.todo-app :refer [todo-app-example]]))

(defn examples
  "Shows a sequence of buttons. When one of the buttons is pressed,
   a code example is pushed into the code editor, and it is compiled."
  [{:keys [cljs-input compile-it]}]
  [:p {:style {:margin "12px 0"}}
   "Examples: "
   [:button {:on-click #(do (reset! cljs-input hello-world-example)
                            (compile-it @cljs-input))}
    "Reagent: \"Hello, World!\""]
   [:span " "]
   [:button {:on-click #(do (reset! cljs-input color-clock-example)
                            (compile-it @cljs-input))}
    "Reagent: \"Color Clock\""]
   [:span " "]
   [:button {:on-click #(do (reset! cljs-input todo-app-example)
                            (compile-it @cljs-input))}
    "Reagent: \"Todo App\""]])

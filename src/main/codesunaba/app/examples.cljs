(ns codesunaba.app.examples
  (:require [codesunaba.app.hello-world :refer [hello-world-example]]
            [codesunaba.app.color-clock :refer [color-clock-example]]
            [codesunaba.app.todo-app :refer [todo-app-example]]))

(defn examples
  "Shows a sequence of buttons. When one of the buttons is pressed,
   a code example is pushed into the code editor, and it is compiled."
  [{:keys [user-input compile-it]}]
  [:p {:style {:margin "12px 0"}}
   "Examples: "
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
    "Reagent: \"Todo App\""]])

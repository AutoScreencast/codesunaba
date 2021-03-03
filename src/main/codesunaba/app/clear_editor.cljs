(ns codesunaba.app.clear-editor)

(defn clear-editor [user-input]
  [:div {:style {:display :flex, :justify-content :flex-end}}
   [:button {:style {:background :red
                     :padding "4px 8px"
                     :margin "2px 0"
                     :border 0
                     :color :white}
             :on-click #(reset! user-input nil)}
    "Clear editor"]])

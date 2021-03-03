(ns codesunaba.app.views.clear-editor
  (:require [reagent.dom :as rdom]))

(defn clear-editor [user-input evaluated-output]
  (let [app-div   (.getElementById js/document "app")
        clear-all #(do
                     (reset! user-input nil)
                     (reset! evaluated-output nil)
                     (rdom/unmount-component-at-node app-div))]
    [:div {:style {:display :flex, :justify-content :flex-end}}
     [:button {:style {:background :red
                       :padding "4px 8px"
                       :margin "2px 0"
                       :border 0
                       :color :white}
               :on-click clear-all}
      "Clear editor"]]))

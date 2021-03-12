(ns codesunaba.app.views.header
  (:require [reagent.core :as r]
            [codesunaba.app.utils :refer [clear-all]]
            [codesunaba.app.bp :refer [anchor-button button navbar navbar-group
                                       navbar-heading navbar-divider colors
                                       popover2]]
            [codesunaba.app.views.examples :refer [examples]]))

(defn popover-contents []
  (r/as-element [:div {:style {:padding 24, :width 400, :line-height 1.5}}
                 [:div.mb12 "“Sunaba” (砂場) is Japanese for “sandbox”."]
                 [:div.mb12 "Code Sunaba is a live ClojureScript code sandbox, in which you can write and display React components (using the Reagent wrapper around React)."]
                 [:div.mb12 "The sandbox supports Re-frame for state management, and you can interact with backend APIs using js/fetch or cljs-ajax."]
                 [:div.mb12 "Render your React components to a target div node with id \"app\". You can style your React components using the CSS editor (excluding pseudo-elements)."]
                 [:div "Choose a code example to see more details."]]))

(defn header [_state]
  (let [orange3       (:ORANGE3 colors)
        popover-open? (r/atom false)]
    (fn [state]
      (let [show-output?     (:show-output? @state)
            show-css-editor? (:show-css-editor? @state)
            dark-theme?      (:dark-theme? @state)
            inputs-empty?    (and (empty? (:cljs-input @state))
                                  (empty? (:css-input @state)))]

        [navbar
         [navbar-group
          [popover2 {:interaction-kind :hover
                     :is-open @popover-open?
                     :on-interaction (fn [next-open-state _event]
                                       (reset! popover-open? next-open-state))
                     :content (popover-contents)
                     :placement :bottom-end}
           [navbar-heading {:style {:color orange3
                                    :font-weight :bold
                                    :text-decoration :underline
                                    :cursor :pointer}}
            [:span "Code Sunaba"]]] [navbar-divider]
          [examples state]
          [navbar-divider]
          [button {:text (if show-output? "Hide Output" "Show Output")
                   :on-click #(swap! state update-in [:show-output?] not)
                   :intent :primary
                   :right-icon (if show-output? :eye-off :eye-open)
                   :minimal true}]
          [button {:text (if show-css-editor? "Hide CSS" "Show CSS")
                   :on-click #(swap! state update-in [:show-css-editor?] not)
                   :intent :primary
                   :right-icon (if show-output? :cube-remove :cube-add)
                   :minimal true}]
          [button {:text (if dark-theme? "Light Theme" "Dark Theme")
                   :on-click #(swap! state update-in [:dark-theme?] not)
                   :intent :primary
                   :right-icon (if dark-theme? :flash :moon)
                   :minimal true}]
          [button {:text "Clear All"
                   :on-click #(clear-all state)
                   :intent :danger
                   :right-icon :delete
                   :disabled inputs-empty?
                   :minimal true}]]

         [navbar-group {:align :right}
          [anchor-button {:text "GitHub"
                          :href "https://github.com/AutoScreencast/codesunaba"
                          :target "_blank"
                          :intent :success
                          :minimal true
                          :right-icon :share}]]]))))

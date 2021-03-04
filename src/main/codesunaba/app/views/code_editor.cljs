(ns codesunaba.app.views.code-editor
  (:require [reagent.dom :as rdom]
            ["@monaco-editor/react" :default MonacoEditor]
            [codesunaba.app.utils :refer [debounce insert-style-el]]))

(defn clear-editor [{:keys [state editor-language]}]
  (let [app-div   (.getElementById js/document "app")
        clear-all #(if (= editor-language "css")
                     (swap! state assoc :css-input nil)
                     (do (swap! state assoc :cljs-input nil)
                         (swap! state assoc :evaluated-input nil)
                         (rdom/unmount-component-at-node app-div)))]
    [:div.jc-flex-end
     [:button.clear-button {:on-click clear-all}
      "Clear"]]))

(defn code-editor [{:keys [label width font-size state editor-language]}]
  (let [debounce-timer  (atom nil)
        handle-change   (fn [value _event]
                          (let [css-input (:css-input @state)]
                            (if (= editor-language "css")
                              (debounce debounce-timer
                                        #(do (swap! state assoc :css-input value)
                                             (insert-style-el css-input "sunaba"))
                                        200)
                              (swap! state assoc :cljs-input value))))]
    (fn []
      (let [input (if (= editor-language "css")
                    (:css-input @state)
                    (:cljs-input @state))]
        [:div.mr4 {:style {:width width}}
         [:div.mb6 label]
         [:> MonacoEditor {:height "35vh"
                           :defaultValue ""
                           :value input
                           :onChange handle-change
                           :defaultLanguage editor-language
                           :theme "vs-dark"
                           :options {:wordWrap (if (= editor-language "css")
                                                 "off" "on")
                                     :minimap {:enabled false}
                                     :showUnused false
                                     :folder false
                                     :lineNumbersMinChars (if (= editor-language "css")
                                                            2 3)
                                     :fontSize font-size
                                     :tabSize 2
                                     :scrollBeyondLastLine false
                                     :automaticLayout true}}]
         [clear-editor {:state           state
                        :editor-language editor-language}]]))))

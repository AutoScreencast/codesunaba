(ns codesunaba.app.views.code-editor
  (:require [reagent.dom :as rdom]
            ["@monaco-editor/react" :default MonacoEditor]
            [codesunaba.app.bp :refer [button card]]
            [codesunaba.app.utils :refer [debounce insert-style-el]]))

(defn clear-editor [{:keys [state input editor-language]}]
  (let [app-div   (.getElementById js/document "app")
        clear-all #(if (= editor-language "css")
                     (swap! state assoc :css-input nil)
                     (do (swap! state assoc :cljs-input nil)
                         (swap! state assoc :evaluated-input nil)
                         (rdom/unmount-component-at-node app-div)))]
    [:div.jc-flex-end
     [button {:on-click clear-all
              :text "Clear"
              :intent :danger
              :outlined true
              :disabled (empty? input)
              :right-icon :cross}]]))

(defn code-editor [{:keys [label font-size state editor-language]}]
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
        [card {:elevation 2, :interactive true}
         [:div.jc-space-between-ai-center
          [:div label]
          [clear-editor {:state           state
                         :input           input
                         :editor-language editor-language}]]
         [:div.vspace12]
         [:div.editor
          [:> MonacoEditor {:height "35vh"
                            :defaultValue (if (= editor-language "css")
                                            "/* Enter your CSS */\n"
                                            ";; Enter ClojureScript code or choose an example above\n")
                            :value input
                            :onChange handle-change
                            :defaultLanguage editor-language
                            :theme (if (:dark-theme? @state) "vs-dark" "vs")
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
                                      :automaticLayout true}}]]]))))

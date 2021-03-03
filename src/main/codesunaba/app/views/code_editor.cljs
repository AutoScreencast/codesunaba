(ns codesunaba.app.views.code-editor
  (:require ["@monaco-editor/react" :default MonacoEditor]))

(defn debounce [timer-atom fun delay-in-ms]
  (when @timer-atom
    (js/clearTimeout @timer-atom)
    (reset! timer-atom nil))
  (reset! timer-atom (js/setTimeout fun delay-in-ms)))

(defn code-editor [{:keys [user-input compile-it language]}]
  (let [timer         (atom nil)
        handle-change (fn [value _event]
                        (reset! user-input value)
                        (debounce timer #(compile-it @user-input) 300))]
    (fn []
      [:> MonacoEditor {:height          "50vh"
                        :defaultValue    ""
                        :value           @user-input
                        :onChange        handle-change
                        :defaultLanguage language
                        :theme           "vs-dark"
                        :options         {:wordWrap             "on"
                                          :minimap              {:enabled false}
                                          :showUnused           false
                                          :folder               false
                                          :lineNumbersMinChars  3
                                          :fontSize             16
                                          :tabSize              2
                                          :scrollBeyondLastLine false
                                          :automaticLayout      true}}])))

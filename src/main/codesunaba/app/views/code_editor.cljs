(ns codesunaba.app.views.code-editor
  (:require [clojure.string :as str]
            ["@monaco-editor/react" :default MonacoEditor]))

(defn debounce [timer-atom fun delay-in-ms]
  (when @timer-atom
    (js/clearTimeout @timer-atom)
    (reset! timer-atom nil))
  (reset! timer-atom (js/setTimeout fun delay-in-ms)))

(defn code-editor [{:keys [input compile-it language]}]
  (let [timer         	(atom nil) ; for debounce
        escape-css    	#(-> %
                            (str/replace #"\n" " ")    ; replace newline with a space
                            (str/replace "'" "\\'")    ; replace ' with \'
                            (str/replace "\"" "\\\"")) ; replace " with \"
        insert-style-el (fn [css]
                          (let [sunaba-style  "sunaba-style"
                                prev-style-el (.getElementById js/document sunaba-style)
                                new-style-el (.createElement js/document "style")]
                            (when prev-style-el (.remove prev-style-el))
                            (.setAttribute new-style-el "id" sunaba-style)
                            (set! (.-innerText new-style-el) (escape-css css))
                            (.appendChild (.-head js/document) new-style-el)))
        handle-change 	(fn [value _event]
                         (reset! input value)
                         (case language
                           "clojure" (debounce timer #(compile-it @input) 300)
                           "css"     (debounce timer #(insert-style-el @input) 1000)))]
    (fn []
      [:> MonacoEditor {:height          "50vh"
                        :defaultValue    ""
                        :value           @input
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

(ns codesunaba.app.output)

(defn output [evaluated-output]
  [:pre>code {:style {:white-space "pre-wrap"}}
   "Output: "
   [:strong (binding [*print-length* 100] (pr-str @evaluated-output))]])

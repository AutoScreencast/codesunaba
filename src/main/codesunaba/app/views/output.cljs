(ns codesunaba.app.views.output)

(defn output [evaluated-output]
  [:pre>code.white-space-pre-wrap
   "Output: "
   [:strong (binding [*print-length* 100] (pr-str evaluated-output))]])

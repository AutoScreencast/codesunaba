(ns codesunaba.app.views.output
  (:require [codesunaba.app.bp :refer [card]]))

(defn output [evaluated-output]
  [card {:elevation 2}
   [:pre>code.white-space-pre-wrap
    "Output: "
    [:strong (binding [*print-length* 100] (pr-str evaluated-output))]]])

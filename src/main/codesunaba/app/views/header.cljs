(ns codesunaba.app.views.header)

(defn header []
  [:<>
   [:div {:style {:display :flex :justify-content :space-between :margin-bottom 24}}
    [:h1 {:style {:margin-bottom 12}} "Code Sunaba"]
    [:h1 {:style {:color :grey :text-align :right}}
     [:i "a simple ClojureScript sandbox"]]]
   [:h4 {:style {:margin-bottom 12 :color :grey}}
    "Write some ClojureScript code in the code editor below."]
   [:h6 {:style {:margin-bottom 8 :color :grey}}
    "The packages `reagent.core` and `reagent.dom` are supported."]
   [:h6 {:style {:margin-bottom 16 :color :grey}}
    "You can render your components to the DOM by targeting the `app` node:
	 	   `(.getElementById js/document \"app\")`"]])

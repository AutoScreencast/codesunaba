(ns codesunaba.app.views.header)

(defn header []
  [:<>
   [:div.mb24.jc-space-between-ai-center
    [:h1.tooltip.no-bb.mb12.dodgerblue.bold "Code Sunaba"
     [:div.tooltiptext.position-right.normal "Sunaba is Japanese for “sandbox”"]]
    [:h3.grey.tar
     [:i "“a simple ClojureScript sandbox”"]]]
   [:h4.dimgrey.mb12
    "✍️ Write some ClojureScript code in the code editor below."]
   [:h4.mb12.dimgrey.tooltip
    "☝️ You can create React components using Reagent. They will be
	  rendered below the horizontal line under ‘Output’."
    [:div.tooltiptext
     [:div.mb6 "The packages ‘reagent.core’ and ‘reagent.dom’ are supported."]
     [:div.mb6 "You can render your components to the DOM by targeting the ‘app’ div."]
     [:div.mb6 "CSS styles will apply to the entire page."]]]])

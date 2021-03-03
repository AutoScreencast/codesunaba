(ns codesunaba.app.examples.color-clock)

(def color-clock-example
  "(ns color-clock-example.core
  (:require [clojure.string :as str]
						[reagent.core :as r]
						[reagent.dom :as rdom]))

(defonce timer (r/atom (js/Date.)))
(defonce time-color (r/atom \"red\"))
(defonce time-updater (js/setInterval #(reset! timer (js/Date.)) 1000))

(defn description [message]
  [:h3 message])

(defn clock []
  (let [time-str (-> @timer .toTimeString (str/split \" \") first)]
    [:h1 {:style {:color @time-color, :margin-top 6, :margin-bottom 6}}
      time-str]))

(defn color-input []
  [:h3
   \"Time color: \"
   [:input {:type \"text\"
            :value @time-color
            :on-change #(reset! time-color (.. % -target -value))}]])

(defn color-clock []
  [:div
   [:h1 \"Color Clock\"]
   [:div {:style {:margin-top 12}}]
   [description \"The time is now:\"]
   [clock]
   [color-input]])

(defn render []
  (rdom/render [color-clock] (.getElementById js/document \"app\")))

(render)
")

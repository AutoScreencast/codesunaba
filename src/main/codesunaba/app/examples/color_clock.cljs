(ns codesunaba.app.examples.color-clock)

(def color-clock-example
  "(ns color-clock-example.core
  (:require [clojure.string :as str]
						[reagent.core :as r]
						[reagent.dom :as rdom]))

(defonce timer (r/atom (js/Date.)))
(defonce time-color (r/atom \"red\"))
(defonce time-updater (js/setInterval #(reset! timer (js/Date.)) 1000))

;; --- Views ----

(defn description [message]
  [:h3 message])

(defn clock []
  (let [time-str (-> @timer .toTimeString (str/split \" \") first)]
    [:h1.clock {:style {:color @time-color}}
      time-str]))

(defn color-input []
  [:h3
   \"Time color: \"
   [:input {:type \"text\"
            :value @time-color
            :on-change #(reset! time-color (.. % -target -value))}]])

(defn color-clock []
  [:div.wrapper
   [:h1.header \"Color Clock (Reagent)\"]
   [description \"The time is now:\"]
   [clock]
   [color-input]])

;; --- Render ----

(defn render []
  (rdom/render [color-clock] (.getElementById js/document \"app\")))

(render)
")

(def color-clock-example-css
  ".wrapper {
  margin: 12px;
}

.header {
  margin-bottom: 24px;
}

.clock {
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 4rem;
}
")

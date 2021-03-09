(ns codesunaba.app.examples.re-frame.color-clock)

(def re-frame-color-clock-example
  "(ns re-frame-color-clock-example.core
  (:require [clojure.string :as str]
            [reagent.dom :as rdom]
            [re-frame.core :as rf]))

;; Based on:
;; https://github.com/day8/re-frame/blob/master/examples/simple/src/simple/core.cljs

(defn dispatch-timer-event []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))

(defonce do-timer (js/setInterval dispatch-timer-event 1000))

;; --- Event Handlers ----

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {:time (js/Date.)
    :time-color \"green\"}))

(rf/reg-event-db
 :time-color-change
 (fn [db [_ new-color-value]]
   (assoc db :time-color new-color-value)))

(rf/reg-event-db
 :timer
 (fn [db [_ new-time]]
   (assoc db :time new-time)))

;; --- Subscriptions ----

(rf/reg-sub
 :time
 (fn [db _]
   (:time db)))

(rf/reg-sub
 :time-str
 :<- [:time]
 (fn [t _]
   (-> t
       .toTimeString
       (clojure.string/split \" \")
       first)))

(rf/reg-sub
 :time-color
 (fn [db _]
   (:time-color db)))

;; --- LambdaIsland Naming ----

(def <sub (comp deref rf/subscribe))
(def >evt rf/dispatch)

;; --- Views ----

(defn description [message]
  [:h3 message])

(defn clock []
  [:h1.clock {:style {:color (<sub [:time-color])}}
   (<sub [:time-str])])

(defn color-input []
  [:h3
   \"Time color: \"
   [:input {:type      \"text\"
            :value     (<sub [:time-color])
            :on-change #(>evt [:time-color-change (.. % -target -value)])}]])

(defn color-clock []
  [:div.wrapper
   [:h1.header \"Color Clock\"]
   [description \"The time is now:\"]
   [clock]
   [color-input]])

;; --- Render ----

(defn render []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [color-clock] (.getElementById js/document \"app\")))

(render)
")

(def re-frame-color-clock-example-css
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

(ns codesunaba.app.examples.re-frame.calculator)

(def re-frame-calculator-example
  "(ns re-frame-calculator-example.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]))

;; Based on:
;; https://reactjs.org/docs/lifting-state-up.html

;; --- DB ----

(def default-db {:temp-str \"\"
                 :scale    :c})

;; --- Utilities ----

(def scale-names {:c \"Celcius\", :f \"Fahrenheit\"})

(defn ->c [f] (-> f (- 32) (* 5) (/ 9)))
(defn ->f [c] (-> c (* 9)  (/ 5) (+ 32)))

(defn try-convert [temp-str convert-fn]
  (let [temp-num (js/parseFloat temp-str)]
    (if (js/isNaN temp-num)
      \"\"
      (-> temp-num convert-fn (* 1000) js/Math.round (/ 1000) str))))

(defn celc-str [scale temp-str]
  (if (= scale :f)
    (try-convert temp-str ->c)
    temp-str))

(defn fahr-str [scale temp-str]
  (if (= scale :c)
    (try-convert temp-str ->f)
    temp-str))

;; --- Events ----

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-db
 :update-scale
 (fn [db [_ scale]]
   (assoc db :scale scale)))

(rf/reg-event-db
 :update-temp-str
 (fn [db [_ temp-str]]
   (assoc db :temp-str temp-str)))

;; --- Subscriptions ----

(rf/reg-sub
 :scale
 (fn [db _ _]
   (:scale db)))

(rf/reg-sub
 :temp-str
 (fn [db _ _]
   (:temp-str db)))

(rf/reg-sub
 :celc-str
 :<- [:scale]
 :<- [:temp-str]
 (fn [[scale temp-str] _ _]
   (celc-str scale temp-str)))

(rf/reg-sub
 :celc-num
 :<- [:celc-str]
 (fn [celc-str _ _]
   (js/parseFloat celc-str)))

(rf/reg-sub
 :fahr-str
 :<- [:scale]
 :<- [:temp-str]
 (fn [[scale temp-str] _ _]
   (fahr-str scale temp-str)))

;; --- Views ----

(defn boiling-verdict [{:keys [celc-num]}]
  (if (>= celc-num 100)
    [:p \"Water would boil at this temperature.\"]
    [:p \"Water would not boil at this temperature.\"]))

(defn temp-input [{:keys [temp-str scale on-temp-change]}]
  [:fieldset.mb12
   [:legend \"Enter temperature in \" (scale scale-names) \":\"]
   [:input {:value temp-str
            :on-change #(on-temp-change (.. % -target -value))}]])

(defn calculator []
  (let [celc-change (fn [temp-str]
                      (rf/dispatch [:update-scale :c])
                      (rf/dispatch [:update-temp-str temp-str]))
        fahr-change (fn [temp-str]
                      (rf/dispatch [:update-scale :f])
                      (rf/dispatch [:update-temp-str temp-str]))]
    (fn []
      (let [celc-str @(rf/subscribe [:celc-str])
            celc-num @(rf/subscribe [:celc-num])
            fahr-str @(rf/subscribe [:fahr-str])]
        [:div.wrapper
         [:h1.header \"Calculator (Reagent + Re-frame)\"]
         [temp-input {:temp-str celc-str
                      :scale :c
                      :on-temp-change celc-change}]
         [temp-input {:temp-str fahr-str
                      :scale :f
                      :on-temp-change fahr-change}]
         [boiling-verdict {:celc-num celc-num}]]))))

;; --- Render ----

(defn render []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [calculator] (.getElementById js/document \"app\")))

(render)
")

(def re-frame-calculator-example-css
  ".wrapper {
  margin: 24px;
}

.header {
  font-size: 3rem;
  font-weight: 600;
  color: blueviolet;
  margin-bottom: 18px;
}

.mb12 {
  margin-bottom: 12px;
}
")

(ns codesunaba.app.examples.calculator)

(def calculator-example
  "(ns calculator-example.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

;; --- State ----

(defonce state (r/atom {:temp-str \"\"
                        :scale :c}))

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

;; --- Views ----

(defn boiling-verdict [{:keys [celc-num]}]
  (if (>= celc-num 100)
    [:p \"The water would boil.\"]
    [:p \"The water would not boil.\"]))

(defn temp-input [{:keys [temp-str scale on-temp-change]}]
  [:fieldset.mb12
   [:legend \"Enter temperature in \" (scale scale-names) \":\"]
   [:input {:value temp-str
            :on-change #(on-temp-change (.. % -target -value))}]])

(defn calculator []
  (let [celc-change (fn [temp-str]
                      (swap! state assoc :scale :c)
                      (swap! state assoc :temp-str temp-str))
        fahr-change (fn [temp-str]
                      (swap! state assoc :scale :f)
                      (swap! state assoc :temp-str temp-str))]
    (fn []
      (let [scale (:scale @state)
            temp-str (:temp-str @state)
            celc-str (celc-str scale temp-str)
            celc-num (js/parseFloat celc-str)
            fahr-str (fahr-str scale temp-str)]
        [:div.wrapper
         [:h1.header \"Calculator\"]
         [temp-input {:temp-str celc-str
                      :scale :c
                      :on-temp-change celc-change}]
         [temp-input {:temp-str fahr-str
                      :scale :f
                      :on-temp-change fahr-change}]
         [boiling-verdict {:celc-num celc-num}]]))))

;; --- Render ----

(defn render []
  (rdom/render [calculator] (.getElementById js/document \"app\")))

(render)
")

(def calculator-example-css
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

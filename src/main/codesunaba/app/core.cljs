(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            [reagent.core :as r]
            [reagent.dom :as rdom]))

;; sunaba - Japanese for "sandbox"
;; codesunaba.com is available

(defonce eval-ready? (r/atom false))
(defonce c-state (env/default-compiler-env))

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        callback (fn [result] (println "result: " result))]
    (cljs/eval-str c-state code "[demo-bootstrap-cljs]" options callback)))

(defn app []
  (let [input (r/atom "")]
    (fn []
      [:<>
       [:h1 "Self-hosted ClojureScript"]
       (if @eval-ready?
         [:<>
          [:textarea {:on-change #(reset! input (.. % -target -value))
                      :spell-check false}]
          [:button {:on-click #(do (compile-it @input) (println @input))} "Evaluate"]]
         [:p "Preparing environment..."])])))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (boot/init c-state {:path "/bootstrap"} #(reset! eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (render))

(comment
  (ns simple-example.core
    (:require [reagent.dom :as rdom]))

  (defn app []
    [:h1 "Create Reagent App"])

  (rdom/render [app] (.getElementById js/document "app")))

(comment
  (ns simpleexample.core
    (:require [clojure.string :as str]
              [reagent.core :as r]
              [reagent.dom :as rdom]))

  (defonce timer (r/atom (js/Date.)))
  (defonce time-color (r/atom "#f34"))
  (defonce time-updater (js/setInterval #(reset! timer (js/Date.)) 1000))

  (defn greeting [message]
    [:h1 message])

  (defn clock []
    (let [time-str (-> @timer .toTimeString (str/split " ") first)]
      [:div.example-clock
       {:style {:color @time-color}}
       time-str]))

  (defn color-input []
    [:div.color-input
     "Time color: "
     [:input {:type "text"
              :value @time-color
              :on-change #(reset! time-color (-> % .-target .-value))}]])

  (defn simple-example []
    [:div
     [greeting "Hello world, it is now"]
     [clock]
     [color-input]])

  (rdom/render [simple-example] (.getElementById js/document "app")))

(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [codesunaba.app.views.header :refer [header]]
            [codesunaba.app.views.code-editor :refer [code-editor]]
            [codesunaba.app.views.examples :refer [examples]]
            [codesunaba.app.views.clear-editor :refer [clear-editor]]
            [codesunaba.app.views.output :refer [output]]))

;; sunaba - Japanese for "sandbox"
;; codesunaba.com is available

;; State ======

(defonce eval-ready?      (r/atom false))
(defonce c-state          (env/default-compiler-env))
(defonce cljs-input       (r/atom nil))
(defonce css-input        (r/atom nil))
(defonce evaluated-output (r/atom nil))

;; ============

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        callback (fn [result]
                   (reset! evaluated-output (:value result)))]
    (cljs/eval-str c-state code "[code-sunaba]" options callback)))

(defn app []
  [:<>
   [header]
   (if @eval-ready?
     [:<>
      [examples {:cljs-input cljs-input
                 :compile-it compile-it}]
      [:div {:style {:display :flex}}
       [:div {:style {:width "65%", :margin-right 4}} "ClojureScript"
        [code-editor {:input      cljs-input
                      :compile-it compile-it
                      :language   "clojure"}]
        [clear-editor {:input            cljs-input
                       :evaluated-output evaluated-output
                       :language         "clojure"}]]
       [:div {:style {:width "35%"}} "CSS"
        [code-editor {:input      css-input
                      :compile-it nil
                      :language   "css"}]
        [clear-editor {:input            css-input
                       :evaluated-output nil
                       :language         "css"}]]]
      [output evaluated-output]]
     [:p "Preparing the self-hosted CLJS environment..."])])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (.remove (.getElementById js/document "loading-message"))
  (boot/init c-state {:path "/bootstrap"} #(reset! eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (render))

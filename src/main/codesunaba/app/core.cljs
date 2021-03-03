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
(defonce user-input       (r/atom nil))
(defonce evaluated-output (r/atom nil))

;; ============

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        callback (fn [result]
                   (reset! evaluated-output (:value result)))]
    (cljs/eval-str c-state code "[demo-bootstrap-cljs]" options callback)))

(defn app []
  [:<>
   [header]
   (if @eval-ready?
     [:<>
      [examples {:user-input user-input
                 :compile-it compile-it}]
      [code-editor {:user-input user-input
                    :compile-it compile-it
                    :language   "clojure"}]
      [clear-editor user-input]
      [output evaluated-output]]
     [:p "Preparing the self-hosted CLJS environment..."])])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (.remove (.getElementById js/document "initial"))
  (boot/init c-state {:path "/bootstrap"} #(reset! eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (println @user-input)
  (render))

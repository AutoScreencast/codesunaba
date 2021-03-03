(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [codesunaba.app.header :refer [header]]
            [codesunaba.app.code-editor :refer [code-editor]]
            [codesunaba.app.examples :refer [examples]]
            [codesunaba.app.output :refer [output]]))

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
      [code-editor {:user-input user-input
                    :compile-it compile-it
                    :language   "clojure"}]
      [examples {:user-input user-input
                 :compile-it compile-it}]
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

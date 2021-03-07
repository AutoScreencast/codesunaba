(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            ["react" :as react] ; required for webpack
            ["react-dom" :as react-dom] ; required for webpack
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [codesunaba.app.utils :refer [debounce]]
            [codesunaba.app.views.header :refer [header]]
            [codesunaba.app.views.code-editor :refer [code-editor]]
            [codesunaba.app.views.examples :refer [examples]]
            [codesunaba.app.views.output :refer [output]]))

(defonce c-state (env/default-compiler-env))

(defonce state (r/atom {:eval-ready?      false
                        :cljs-input       nil
                        :css-input        nil
                        :evaluated-output nil}))

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        callback (fn [result]
                   (swap! state assoc :evaluated-output (:value result)))]
    (when code
      (cljs/eval-str c-state code "[code-sunaba]" options callback)
      #_(cljs/compile-str (cljs/empty-state) code #(println (:value %))))))

(defn app []
  (let [debounce-timer (atom nil)
        _ (add-watch state :state
                     (fn [_ _ old-state new-state]
                       (let [old-cljs-input (:cljs-input old-state)
                             new-cljs-input (:cljs-input new-state)]
                         (when (not= old-cljs-input new-cljs-input)
                           (debounce debounce-timer #(compile-it new-cljs-input) 200)))))]
    (fn []
      (let [eval-ready?      (:eval-ready?      @state)
            evaluated-output (:evaluated-output @state)]
        [:<>
         [header]
         (if eval-ready?
           [:<>
            [examples state]
            [:div.flex
             [code-editor {:label           "ClojureScript"
                           :width           "75%"
                           :font-size       14
                           :state           state
                           :editor-language "clojure"}]
             [code-editor {:label           "CSS"
                           :width           "25%"
                           :font-size       12
                           :state           state
                           :editor-language "css"}]]
            [output evaluated-output]]
           [:p "Preparing the self-hosted CLJS environment..."])]))))

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (.remove (.getElementById js/document "loading-message"))
  (boot/init c-state {:path "/bootstrap"} #(swap! state assoc :eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (render))

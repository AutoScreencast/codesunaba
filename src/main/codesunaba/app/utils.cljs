(ns codesunaba.app.utils
  (:require [clojure.string :as str]
            [reagent.dom :as rdom]))

(defn debounce [timer-atom fun delay-in-ms]
  (when @timer-atom
    (js/clearTimeout @timer-atom)
    (reset! timer-atom nil))
  (reset! timer-atom (js/setTimeout fun delay-in-ms)))

(defn insert-style-el [css style-tag-id]
  (let [escape-css     (fn [css]
                         (some-> css
                                 (str/replace #"\n" " ")
                                 (str/replace "'" "\\'")
                                 (str/replace "\"" "\\\"")))
        prev-style-el (.getElementById js/document style-tag-id)
        new-style-el  (.createElement js/document "style")]
    (when prev-style-el (.remove prev-style-el))
    (.setAttribute new-style-el "id" style-tag-id)
    (set! (.-innerText new-style-el) (escape-css css))
    (.appendChild (.-head js/document) new-style-el)))

(defn clear-all [state]
  (let [app-div (.getElementById js/document "app")]
    (rdom/unmount-component-at-node app-div)
    (swap! state assoc :evaluated-output nil)
    (swap! state assoc :css-input nil)
    (swap! state assoc :cljs-input nil)))

(ns codesunaba.app.hello-world)

(def hello-world-example
  "(ns hello-world-example.core
  (:require [reagent.dom :as rdom]))

(defn app []
  [:h1 \"Hello, World!\"])

(defn render []
  (rdom/render [app] (.getElementById js/document \"app\")))

(render)
")

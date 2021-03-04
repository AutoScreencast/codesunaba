(ns codesunaba.app.examples.hello-world)

(def hello-world-example
  "(ns hello-world-example.core
  (:require [reagent.dom :as rdom]))

(defn app []
  [:h1.header \"Hello, World!\"])

(defn render []
  (rdom/render [app] (.getElementById js/document \"app\")))

(render)
")

(def hello-world-example-css
  ".header {
  color: navy;
  font-style: italic;
  font-weight: bold;
  font-size: 6rem;
}
")

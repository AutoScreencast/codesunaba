(ns codesunaba.app.examples.counter)

(def counter-example
  "(ns counter-example.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

;; --- State ----

(defonce state (r/atom {:counter 0}))

;; --- Views ----

(defn app []
  [:<>
   [:h1.header \"Counter (Reagent)\"]
   [:div.wrapper
    [:div.count
     [:button.btn {:on-click #(swap! state update-in [:counter] dec)} \"–\"]
     [:span (:counter @state)]
     [:button.btn {:on-click #(swap! state update-in [:counter] inc)} \"+\"]]
    [:div>button.btn.reset {:on-click #(swap! state assoc :counter 0)} \"Reset\"]]])

;; --- Render ----

(defn render []
  (rdom/render [app] (.getElementById js/document \"app\")))

(render)
")

(def counter-example-css
  ".wrapper {
  width: 120px;
}

.header {
  color: salmon;
  font-size: 3rem;
}

.btn {
  font-size: 1.5rem;
  background: salmon;
  color: white;
  border-radius: 4px;
  border: 0 solid white;
  padding: 6px 12px;
}

.count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  font-size: 1.5rem;
}

.reset {
  width: 100%;
  background: lightgreen;
}
")

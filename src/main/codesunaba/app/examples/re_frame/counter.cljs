(ns codesunaba.app.examples.re-frame.counter)

(def re-frame-counter-example
  "(ns re-frame.counter-example.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]))

;; --- DB ----

(def default-db {:counter 0})

;; --- Events ----

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   default-db))

(rf/reg-event-db
 :increment
 (fn [db _]
   (update-in db [:counter] inc)))

(rf/reg-event-db
 :decrement
 (fn [db _]
   (update-in db [:counter] dec)))

(rf/reg-event-db
 :reset
 (fn [db _]
   (assoc db :counter 0)))

;; --- Subscriptions ----

(rf/reg-sub
 :counter
 (fn [db _ _]
   (:counter db)))

;; --- Views ----

(defn app []
  [:<>
   [:h1.header \"Counter (Reagent + Re-frame)\"]
   [:div.wrapper
    [:div.count
     [:button.btn {:on-click #(rf/dispatch [:decrement])} \"–\"]
     [:span @(rf/subscribe [:counter])]
     [:button.btn {:on-click #(rf/dispatch [:increment])} \"+\"]]
    [:div>button.btn.reset {:on-click #(rf/dispatch [:reset])} \"Reset\"]]])

;; --- Render ----

(defn render []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [app] (.getElementById js/document \"app\")))

(render)
")

(def re-frame-counter-example-css
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

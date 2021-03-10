(ns codesunaba.app.examples.re-frame.thinking-in-react)

(def re-frame-thinking-in-react-example
  "(ns re-frame-thinking-in-react-example.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]))

;; Based on:
;; https://reactjs.org/docs/thinking-in-react.html

;; --- DB ----

(def default-db {:filter-text   \"\"
                 :in-stock-only false
                 :products      []})

;; -- API ----

(def api-endpoint \"https://gist.githubusercontent.com/AutoScreencast/25dc46fe6c7d2f6a9da34cdfd95c866e/raw/06b00740abd3ee1f1cc199477ab8462a1557c519/products.json\")

;; --- Utilities ----

(defn filter-and-group [products filter-text in-stock-only]
  (->> products
       (filter #(str/includes? (:name %) filter-text))
       (filter #(or (not in-stock-only) (:stocked %)))
       (group-by :category)))

;; --- Events ----

(rf/reg-event-db
 :initialize-db
 (fn [_db _event-v]
   default-db))

(rf/reg-event-db
 :success-http-get-products
 (fn [db [_event-id result]]
   (assoc db :products result)))

(rf/reg-event-fx
 :get-products-from-api
 (fn [_cofx _event-v]
   {:http-xhrio {:method          :get
                 :uri             api-endpoint
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:success-http-get-products]}}))

(rf/reg-event-db
 :update-filter-text
 (fn [db [_event-id filter-text]]
   (assoc db :filter-text filter-text)))

(rf/reg-event-db
 :update-in-stock-only
 (fn [db [_event-id in-stock-only]]
   (assoc db :in-stock-only in-stock-only)))

;; --- Subscriptions ----

(rf/reg-sub
 :products
 (fn [db _query-v]
   (:products db)))

(rf/reg-sub
 :filter-text
 (fn [db _query-v]
   (:filter-text db)))

(rf/reg-sub
 :in-stock-only
 (fn [db _query-v]
   (:in-stock-only db)))

(rf/reg-sub
 :grouped-products
 (fn [_query-v _dyn-v]
   [(rf/subscribe [:products])
    (rf/subscribe [:filter-text])
    (rf/subscribe [:in-stock-only])])
 (fn [[products filter-text in-stock-only] _query-v _dyn-v]
   (filter-and-group products filter-text in-stock-only)))

;; --- Views ----

(defn product-category-row [category]
  [:tr>th {:col-span 2} category])

(defn product-row [product]
  (let [styled-name (if (:stocked product)
                      (:name product)
                      [:span.red (:name product)])]
    [:tr
     [:td styled-name]
     [:td.tar (:price product)]]))

(defn product-table []
  (let [grouped-products @(rf/subscribe [:grouped-products])]
    [:table.fw
     [:thead
      [:tr.blue
       [:th.tal \"Name\"]
       [:th.tar \"Price\"]]]
     [:tbody
      (for [[category products-in-category] grouped-products]
        (cons
         ^{:key category} [product-category-row category]
         (for [product products-in-category]
           ^{:key (:name product)} [product-row product])))]]))

(defn search-bar []
  (let [ft @(rf/subscribe [:filter-text])
        iso @(rf/subscribe [:in-stock-only])
        update-ft #(rf/dispatch [:update-filter-text (.. % -target -value)])
        update-iso #(rf/dispatch [:update-in-stock-only (.. % -target -checked)])]
    [:form
     [:input {:type \"text\"
              :placeholder \"Search...\"
              :value ft
              :on-change update-ft}]
     [:p
      [:input {:type \"checkbox\"
               :checked iso
               :on-change update-iso}]
      \" \"
      [:span.iso-label \"Only show products in stock\"]]]))

(defn filterable-product-table []
  [:div.wrapper
   [:h3.header \"“Thinking in React” (Reagent + Re-frame + cljs-ajax)\"]
   [:div.fpt
    [search-bar]
    [product-table]]])

;; --- Render ----

(defn render []
  (rf/dispatch-sync [:initialize-db])
  (rf/dispatch [:get-products-from-api])
  (rdom/render [filterable-product-table] (.getElementById js/document \"app\")))

(render)
")

(def re-frame-thinking-in-react-example-css
  ".wrapper {
  padding: 8px;
  zoom: 2;
  font-family: sans-serif;
}

.header {
  color: darkorchid;
  margin-bottom: 12px;
}

.fpt {
  width: 300px;
}

.iso-label {
  color: green;
  font-size: smaller;
}

.blue { color: blue; }
.red { color: red; }
.tal { text-align: left; }
.tar { text-align: right; }
.fw { width: 100%; }
")

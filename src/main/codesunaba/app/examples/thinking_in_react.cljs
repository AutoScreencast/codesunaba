(ns codesunaba.app.examples.thinking-in-react)

(def thinking-in-react-example
  "(ns thinking-in-react-example.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

;; Based on:
;; https://reactjs.org/docs/thinking-in-react.html

;; --- State ----

(defonce state (r/atom {:filter-text   \"\"
                        :in-stock-only false
                        :products      []}))

;; -- API ----

(defn handler [response]
  (swap! state assoc :products response))

(defn error-handler [err]
  (.log js/console (str \"Error: \" (.-message err))))

(def api-endpoint \"https://gist.githubusercontent.com/AutoScreencast/25dc46fe6c7d2f6a9da34cdfd95c866e/raw/06b00740abd3ee1f1cc199477ab8462a1557c519/products.json\")

(defn get-products-from-api []
  (-> (js/fetch api-endpoint)
      (.then #(.json %))
      (.then #(js->clj % :keywordize-keys true))
      (.then #(handler %))
      (.catch #(error-handler %))))

;; --- Utilities ----

(defn filter-and-group [products filter-text in-stock-only]
  (->> products
       (filter #(str/includes? (:name %) filter-text))
       (filter #(or (not in-stock-only) (:stocked %)))
       (group-by :category)))

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
  (let [ps (:products @state)
        ft (:filter-text @state)
        iso (:in-stock-only @state)
        grouped-products (filter-and-group ps ft iso)]
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
  (let [ft (:filter-text @state)
        iso (:in-stock-only @state)
        update-ft #(swap! state assoc :filter-text (.. % -target -value))
        update-iso #(swap! state assoc :in-stock-only (.. % -target -checked))]
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
   [:h3.header \"“Thinking in React” (Reagent)\"]
   [:div.fpt
    [search-bar]
    [product-table]]])

;; --- Render ----

(defn render []
  (get-products-from-api)
  (rdom/render [filterable-product-table] (.getElementById js/document \"app\")))

(render)
")

(def thinking-in-react-example-css
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

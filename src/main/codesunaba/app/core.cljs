(ns codesunaba.app.core
  (:require [cljs.js :as cljs]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]
            ["react" :as react] ; required for webpack
            ["react-dom" :as react-dom] ; required for webpack
            ["@blueprintjs/core" :as bp] ; required for webpack
            ["@blueprintjs/popover2" :as bppo2] ; required for webpack
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [codesunaba.app.bp :refer [icon colors]]
            [codesunaba.app.utils :refer [debounce]]
            [codesunaba.app.views.header :refer [header]]
            [codesunaba.app.views.code-editor :refer [code-editor]]
            [codesunaba.app.views.output :refer [output]]))

;; Focus management (https://blueprintjs.com/docs/#core/accessibility)
(. bp/FocusStyleManager onlyShowFocusOnTabs)

(defn set-light-bg! []
  (set! (.. js/document -body -style -backgroundColor) (:LIGHT_GRAY4 colors)))

(defn set-dark-bg! []
  (set! (.. js/document -body -style -backgroundColor) (:GRAY1 colors)))

(defonce c-state (env/default-compiler-env))

(defonce state (r/atom {:eval-ready?      false
                        :show-css-editor? true
                        :show-output?     true
                        :dark-theme?      false
                        :cljs-input       nil
                        :css-input        nil
                        :evaluated-output nil}))

#_(add-watch state :log #(do
                           (.log js/console "watching output:" (:evaluated-output %4))
                           (.log js/console "watching output type:" (goog/typeOf (:evaluated-output %4)))))

(defn compile-it [code]
  (let [options  {:eval cljs/js-eval
                  :load (partial boot/load c-state)}
        #_#_callback (fn [result]
                       (swap! state assoc :evaluated-output (:value result)))
        callback (try (fn [result]
                        (let [e (:error result)
                              v (:value result)]
                          (println "--" result)
                          (if e
                            (do
                              #_(println "======== ERROR ========")
                              #_(println "data" (ex-data e))
                              (.log js/console (.-name (ex-cause e)) ":" (.-message (ex-cause e))))
                            (try
                              #_(println "======== RESULT ========")
                              #_(.log js/console "result type:" (goog/typeOf v))
                              (swap! state assoc :evaluated-output v)
                              (catch js/Error err
                                (.log js/console "Caught inner result error:" (.-name err) ":" (.-message err)))))))
                      (catch js/Error err
                        (.log js/console "Caught callback error:" err)))]
    (when code
      (try
        (cljs/eval-str c-state code "[code-sunaba]" options callback)
        (catch js/Error e (.log js/console "eval-str error:" e)))
      #_(cljs/compile-str (cljs/empty-state) code #(println (:value %))))))

(defn app []
  (let [debounce-timer   (atom nil)
        app-div          (.getElementById js/document "app")
        app-div-contents (r/atom nil)
        _ (add-watch state :state
                     (fn [_ _ old-state new-state]
                       (let [old-cljs-input  (:cljs-input old-state)
                             new-cljs-input  (:cljs-input new-state)
                             old-dark-theme? (:dark-theme? old-state)
                             new-dark-theme? (:dark-theme? new-state)]
                         (when (not= old-cljs-input new-cljs-input)
                           (debounce debounce-timer
                                     (fn []
                                       (compile-it new-cljs-input)
                                       (js/setTimeout #(reset! app-div-contents (.-innerHTML app-div)) 200))
                                     200))
                         (when (not= old-dark-theme? new-dark-theme?)
                           (case new-dark-theme?
                             true  (set-dark-bg!)
                             false (set-light-bg!))))))]

    (fn []
      (let [eval-ready?      (:eval-ready?      @state)
            show-css-editor? (:show-css-editor? @state)
            show-output?     (:show-output?     @state)
            dark-theme?      (:dark-theme?      @state)
            evaluated-output (:evaluated-output @state)]
        [:div {:class (when dark-theme? "bp3-dark")}
         [header state]
         (if eval-ready?
           [:<>
            [:div.flex
             [:div {:style {:width (if show-css-editor? "65%" "100%")}}
              [code-editor {:label           "ClojureScript"
                            :font-size       14
                            :state           state
                            :editor-language "clojure"}]]
             (when show-css-editor?
               [:div {:style {:width "35%"}}
                [code-editor {:label           "CSS"
                              :font-size       12
                              :state           state
                              :editor-language "css"}]])]
            (when show-output?
              [output evaluated-output])
            (when (empty? @app-div-contents)
              [:div.app-div-empty-state {:style {:color (:GRAY5 colors)}
                                         :class "bp3-dark"}
               [icon {:icon :heat-grid
                      :icon-size 120}]
               [:div "React components"]
               [:div "will display here"]])]
           [:p#preparing-message "Preparing the self-hosted CLJS environment..."])]))))

(defn render []
  (rdom/render [app] (.getElementById js/document "codesunabaroot")))

(defn ^:export main []
  (set-light-bg!)
  (.remove (.getElementById js/document "loading-message"))
  (boot/init c-state {:path "/bootstrap"} #(swap! state assoc :eval-ready? true))
  (render))

(defn ^:dev/after-load reload! []
  (render))

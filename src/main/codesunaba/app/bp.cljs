(ns codesunaba.app.bp
  (:require ["@blueprintjs/core" :as bp]
            ["@blueprintjs/popover2" :as bppo2]))

;; === Convert Blueprint components ====

(defn ^:private cljs-component [component]
  #(vec (concat [:> component] %&)))

(def button         (cljs-component bp/Button))
(def anchor-button  (cljs-component bp/AnchorButton))
(def icon           (cljs-component bp/Icon))
(def navbar         (cljs-component bp/Navbar))
(def navbar-group   (cljs-component bp/NavbarGroup))
(def navbar-heading (cljs-component bp/NavbarHeading))
(def navbar-divider (cljs-component bp/NavbarDivider))
(def card           (cljs-component bp/Card))
(def html-select    (cljs-component bp/HTMLSelect))
(def dialog         (cljs-component bp/Dialog))
(def h5             (cljs-component bp/H5))
(def tooltip2       (cljs-component bppo2/Tooltip2))
(def popover2
  "Popover2 component.
   Pass target as a child (cannot get Popover2 to work with renderTarget
   function prop). Both content prop and target child should be wrapped
   in (r/as-element...)."
  (cljs-component bppo2/Popover2))

;; === Convert JS props to CLJS ====

(defn ^:private cljs-constant [js-obj]
  (js->clj js-obj :keywordize-keys true))

(def classes   (cljs-constant bp/Classes))
(def elevation (cljs-constant bp/Elevation))
(def intent    (cljs-constant bp/Intent))
(def colors    (cljs-constant bp/Colors))

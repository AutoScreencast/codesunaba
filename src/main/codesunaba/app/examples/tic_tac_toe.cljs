(ns codesunaba.app.examples.tic-tac-toe)

(def tic-tac-toe-example
  "(ns tic-tac-toe-example.core
  (:require [reagent.core :as r]
  					[reagent.dom :as rdom]))

;; --- State ----

(def initial-state {:squares    (vec (repeat 9 nil))
                    :x-is-next? true})

(defonce state (r/atom initial-state))

;; --- Utilities ----

(defn calculate-winner [sqs]
  (let [win [[0 1 2] [3 4 5] [6 7 8]  ; rows
             [0 3 6] [1 4 7] [2 5 8]  ; columns
             [0 4 8] [2 4 6]]]        ; diagonals
    (reduce
     (fn [acc [a b c]]
       (or acc
           (if (and (sqs a)
                    (= (sqs a) (sqs b) (sqs c)))
             (sqs a)
             nil)))
     nil
     win)))

;; --- Views ----

(defn square [{:keys [val on-click disabled?]}]
  [:button.square {:on-click on-click, :disabled disabled?} val])

(defn board []
  (let [squares (:squares @state)
        x-is-next? (:x-is-next? @state)
        next-player (if x-is-next? \"X\" \"O\")
        on-click (fn [idx]
                   (swap! state assoc-in [:squares idx] next-player)
                   (swap! state update-in [:x-is-next?] not))
        status (fn [winner next-player]
                 (if winner
                   (str \"Winner: \" winner)
                   (str \"Next player: \" next-player)))
        disabled? (fn [idx]
                    (boolean (or (squares idx)
                                 (calculate-winner squares))))
        render-square (fn [idx]
                        [square {:val (squares idx)
                                 :on-click #(on-click idx)
                                 :disabled? (disabled? idx)}])]
    [:div.status
     (status (calculate-winner squares) next-player)
     [:div.board-row
      [render-square 0] [render-square 1] [render-square 2]]
     [:div.board-row
      [render-square 3] [render-square 4] [render-square 5]]
     [:div.board-row
      [render-square 6] [render-square 7] [render-square 8]]]))

(defn reset []
  [:button {:on-click #(reset! state initial-state)}
    \"Reset Game\"])

(defn game []
  [:div.wrapper
   [:div.game
    \"Tic Tac Toe (Reagent)\"
    [board]
    [reset]]])

;; --- Render ----

(defn render []
  (rdom/render [game] (.getElementById js/document \"app\")))

(render)
")

(def tic-tac-toe-example-css
  ".wrapper {
	background-color: #444;
	color: white;
  padding: 20px;
	font: 32px \"Century Gothic\", Futura, sans-serif;
}

.game {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.board-row {
	display: flex;
	flex-flow: row nowrap;
}

.square {
	background-color: #444;
	color: white;
	border: 1px solid #999;
	padding: 0;
	font-size: 84px;
	text-align: center;
	width: 100px;
	height: 100px;
}

.square:focus {
	outline: none;
	background-color: #222;
}

.status {
	margin: 20px;
}
")

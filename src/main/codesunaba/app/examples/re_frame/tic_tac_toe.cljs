(ns codesunaba.app.examples.re-frame.tic-tac-toe)

(def re-frame-tic-tac-toe-example
  "(ns re-frame-tic-tac-toe-example.core
	(:require [reagent.dom :as rdom]
	          [re-frame.core :as rf]))

;; --- DB ----

(def default-db {:squares    (vec (repeat 9 nil))
                 :x-is-next? true})

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

;; --- Events ----

(rf/reg-event-db
 :initialize-db
 (fn [_db _event-v]
   default-db))

(rf/reg-event-db
 :update-squares
 (fn [db [_event-id idx]]
   (assoc-in db [:squares idx] (if (:x-is-next? db) \"X\" \"O\"))))

(rf/reg-event-db
 :toggle-x-is-next
 (fn [db _event-v]
   (update-in db [:x-is-next?] not)))

(rf/reg-event-db
 :reset
 (fn [_db _event-v]
  default-db))

;; --- Subscriptions ----

(rf/reg-sub
 :squares
 (fn [db _query-v]
   (:squares db)))

(rf/reg-sub
 :x-is-next?
 (fn [db _query-v]
   (:x-is-next? db)))

(rf/reg-sub
 :status
 :<- [:squares]
 :<- [:x-is-next?]
 (fn [[squares x-is-next?] _query-v]
   (let [winner (calculate-winner squares)]
     (if winner
       (str \"Winner: \" winner)
       (str \"Next player: \" (if x-is-next? \"X\" \"O\"))))))

(rf/reg-sub
 :disabled?
 :<- [:squares]
 (fn [squares [_query-id idx]]
   (boolean (or (squares idx)
                (calculate-winner squares)))))

;; --- Views ----

(defn square [{:keys [val on-click disabled?]}]
  [:button.square {:on-click on-click, :disabled disabled?} val])

(defn board []
  (let [squares @(rf/subscribe [:squares])
        on-click (fn [idx]
                   (rf/dispatch [:update-squares idx])
                   (rf/dispatch [:toggle-x-is-next]))
        status @(rf/subscribe [:status])
        disabled? (fn [idx]
                    @(rf/subscribe [:disabled? idx]))
        render-square (fn [idx]
                        [square {:val (squares idx)
                                 :on-click #(on-click idx)
                                 :disabled? (disabled? idx)}])]
    [:div.status
     status
     [:div.board-row
      [render-square 0] [render-square 1] [render-square 2]]
     [:div.board-row
      [render-square 3] [render-square 4] [render-square 5]]
     [:div.board-row
      [render-square 6] [render-square 7] [render-square 8]]]))

(defn reset []
  [:button {:on-click #(rf/dispatch [:reset])}
    \"Reset Game\"])

(defn game []
  [:div.wrapper
   [:div.game
    \"Tic Tac Toe (Reagent + Re-frame)\"
    [board]
    [reset]]])

;; --- Render ----

(defn render []
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [game] (.getElementById js/document \"app\")))

(render)
")

(def re-frame-tic-tac-toe-example-css
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

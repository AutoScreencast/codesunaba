(ns codesunaba.app.examples.fibonacci)

(def fibonacci-example
  ";; Based on:
;; Programming Clojure (3rd Ed.) by Alex Miller (The Pragmatic Bookshelf), page 90
;; https://pragprog.com/titles/shcloj3/programming-clojure-third-edition/

(defn fibonacci
  ([]
    (concat [0 1] (fibonacci 0 1)))
  ([a b]
    (let [n (+ a b)]
      (lazy-seq
        (cons n (fibonacci b n))))))

;; Get the first 40 Fibonacci numbers
(take 40 (fibonacci))
")

(def fibonacci-example-css
  "")

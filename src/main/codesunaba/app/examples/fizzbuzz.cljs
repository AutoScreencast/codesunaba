(ns codesunaba.app.examples.fizzbuzz)

(def fizzbuzz-example
  ";; Popular Interview Question: FizzBuzz

;; Write a program that outputs the numbers from 1 to 100.
;; But for multiples of 3 output “Fizz” instead of the number, and for the multiples of 5 output “Buzz”. For numbers which are multiples of both 3 and 5 output “FizzBuzz”.

(defn fizzbuzz [n]
  ;; `condp` takes a binary predicate, in this case `#(zero? (rem %2 %1))`
  ;; and tests if the expression in each clause (for example, `15` in the clause
  ;; `15 \"FizzBuzz\"`) is true, outputting the result expression (in this example,
  ;; `\"FizzBuzz\"`)). Note that in the predicate, `%1` refers to the expression
  ;; in the tested clause (for example, `15`), and `%2` refers to the expression
  ;; after the predicate, in this case `n`.
  (condp #(zero? (rem %2 %1)) n
    15 \"FizzBuzz\"
    3  \"Fizz\"
    5  \"Buzz\"
    n))

;; `(range 1 101)` outputs the numbers 1 through 100 in a list.
(map fizzbuzz (range 1 101))
")

(def fizzbuzz-example-css
  "")

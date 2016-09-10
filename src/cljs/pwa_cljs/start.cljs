(ns pwa-cljs.start
  (:require cljsjs.d3))

(def body (.select js/d3 "body"))

(defn add-svg! [el {:keys [width
                           height]}]
  (let [svg (.append el "svg")]
    (-> svg
        (.attr "width" width)
        (.attr "height" height))))


(defn add-circle! [el {:keys [xcord
                              ycord
                              radius
                              colour]}]
  (let [circle (.append el "circle")]
    (-> circle
        (.attr "cx" xcord)
        (.attr "cy" ycord)
        (.attr "r" radius)
        (.style "fill" colour))))

(defn draw-circle! []
  (-> body
      (add-svg! {:width "50" :height "50"})
      (add-circle! {:xcord "25" :ycord "25" :radius "25" :colour "purple"})))

(defn display-numbers! []
  (-> body
      (.selectAll "p")
      (.data (clj->js [1 2 3]))
      (.enter)
      (.append "p")
      (.text (fn[d] d))))

(defn add-circles! [svg-container]
  (-> svg-container
      (.selectAll "circle")
      (.data (clj->js [40 20 10]))
      (.enter)
      (.append "circle")))

(defn draw-concentric-circles! []
  (-> body
      (add-svg! {:width "200" :height "200"})
      (add-circles!)
      (.attr "cx" 50)
      (.attr "cy" 50)
      (.attr "r" (fn[d] d))
      (.style "fill" (fn[d]
                       (cond (= d 40) "green"
                             (= d 20) "red"
                             (= d 10) "blue")))))

(defn render-d3 []
  (draw-circle!)
  (display-numbers!)
  (draw-concentric-circles!))

(defn ^:export init []
  (if (and js/document
           (.-getElementById js/document))
    (render-d3)))


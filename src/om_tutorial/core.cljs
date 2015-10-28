(ns om-tutorial.core
  (:refer-clojure :exclude [var?])
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pprint]
            [sablono.core :refer-macros [html]]
            [reforms.rum :include-macros true :as f]
            [datascript.core :as d]))

(enable-console-print!)

(def conn (d/create-conn {}))

(d/transact! conn
  [{:db/id     -1
    :app/title "Hello, DataScript!"
    :app/count 0}])

(defmulti read om/dispatch)

(defmethod read :app/counter
  [{:keys [state selector]} _ _]
  {:value (d/q '[:find [(pull ?e ?selector) ...]
                 :in $ ?selector
                 :where [?e :app/title]]
            (d/db state) selector)})

(defmulti mutate om/dispatch)

(defmethod mutate 'app/increment
  [{:keys [state]} _ entity]
  {:value  [:app/counter]
   :action (fn []
             (d/transact! state [(update-in entity [:app/count] #(-> % js/parseInt inc))]))})

(defmethod mutate 'app/update
  [{:keys [state]} _ entity]
  {:value  [:app/counter]
   :action (fn [] (d/transact! state [entity]))})

(defui Counter
  static om/IQuery
  (query [this]
    [{:app/counter [:db/id :app/title :app/count]}])
  Object
  (render [this]
    (let [path [:app/counter 0]
          {:keys [:app/title :app/count] :as entity} (get-in (om/props this) path)
          ent  (atom entity)]
      (add-watch ent :counterWatch
        (fn [key ref old new]
          (om/transact! this `[(app/update ~new)])))
      (html
        [:div
         [:h2 title]
         [:span (str "Count: " count)]
         [:button {:onClick
                   (fn [e]
                     (om/transact! this `[(app/increment ~entity)])
                     ;(reset! ent (update-in @ent [:app/count] inc))
                     )} "Click me!"]
         (f/panel "Reforms Example"
           (f/form
            (f/text "Title: " ent [:app/title])
            (f/number "Clicks: " ent [:app/count])))]))))

(def reconciler
  (om/reconciler
    {:state  conn
     :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler
  Counter (gdom/getElement "app"))


#_[:div
   [:h2 title]
   [:span (str "Count: " count)]
   [:button {:onClick
             (fn [e]
               (om/transact! this `[(app/increment ~entity)])
               ;(reset! ent (update-in @ent [:app/count] inc))
               )} "Click me!"]
   (f/with-options {:form {:horizontal (:orientation-horizontal entity)}}
     (f/panel "Reforms Example"
       (f/form
         {:on-submit #(js/alert "Submitted")}
         (f/text "Your app title: " ent [:app/title] :placeholder "Type your app title here")
         (f/number "Your click count: " ent [:app/count])
         (f/form-buttons
           (f/button-primary "Submit" #(js/alert (:app/title @ent)))
           (f/button-default "Cancel" #(js/alert "Cancel!")))
         (f/checkbox "Horizontal form" ent [:orientation-horizontal]))))
   ]


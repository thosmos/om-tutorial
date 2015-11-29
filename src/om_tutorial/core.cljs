(ns om-tutorial.core
  (:require
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [datascript.core :as d]
    [om.dom :as dom])
  (:require-macros
    [cljs-log.core :as l :refer [debug info warn severe]]))

(enable-console-print!)

;; -----------------------------------------------------------------------------
;; DB

(def init-data (d/create-conn {:root  {:db/unique :db.unique/identity}
                               :items {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
                               :current-user {:db/valueType :db.type/ref :db/cardinality :db.cardinality/one}
                               :current-user/email {:db/unique :db.unique/identity}}))

(d/transact! init-data
  [{:db/id -1
    :title "Foo"}
   {:db/id -2
    :title "Bar"}
   {:db/id -3
    :title "Baz"}
   {:db/id -4
    :email "bob.smith@gmail.com"}
   {:root  "my app root"
    :items [-1 -2 -3]
    :current-user -4}])

;; At this point, we could link the current-user entity to every item.
;; But this is not a solution. We want to access the current-user entity
;; by query-lookup and not via attribute we have to add to every item entity.


;; -----------------------------------------------------------------------------
;; read

(defmulti read om/dispatch)


(defmethod read :default
  [{:keys [query state ast]} k _]
  (let [p (js/console.log "read :default" k query)]
    {:value :default-value})
  )

(defmethod read :items
  [{:keys [query state ast]} k _]
  (let [_ (debug "read :items" query)]
    {:value
     ;; Now comes the question - how to do this in datascript?
     ;; simple datascript pull ? nope! -> [:current-user _] is not valid pull syntax
     ;; (get (d/pull st [{k query}] [:root "my app root"]) k) is not a solution
     ;; Solutions:
     ;; - rewrite db->tree for use with datascript
     ;; - rewirte d/pull to use the om.next patterns
     ;; - ?
     [{:db/id "1" :title "default value"}]}))


;; -----------------------------------------------------------------------------
;; Components

(defui Item
  static om/Ident
  (ident [_ {:keys [:db/id]}] id)
  static om/IQuery
  (query [_]
    '[:db/id :title [:current-user _]]) ;; NEW STUFF
  Object
  (render [this]
    (let [{:keys [title current-user]} (om/props this)]
      (dom/li nil
        (dom/div nil title)
        (dom/div nil (:email current-user))))))

(def item (om/factory Item))

(defui ItemTwo
  static om/IQuery
  (query [_]
    '[:db/id :title])
  Object
  (render [this]
    (let [{:keys [:db/id title]} (om/props this)]
      (dom/li nil
        (dom/div nil (str id " - " title))))))

(defui SomeList
  static om/IQuery
  (query [_]
    [{:items (om/get-query ItemTwo)}])
  Object
  (render [this]
    (dom/div
      (dom/h2 nil "A List!")
      (dom/ul nil
        (map (om/factory ItemTwo) (-> this om/props :items))
        ))))

;; -----------------------------------------------------------------------------
;; Setup

(def reconciler
  (om/reconciler
    {:state init-data
     :parser (om/parser {:read read})}))

(om/add-root! reconciler SomeList (gdom/getElement "app"))
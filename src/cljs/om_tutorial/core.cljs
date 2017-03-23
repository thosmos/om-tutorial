(ns om-tutorial.core
  (:require
    [goog.dom :as gdom]
    [om.next :as om :refer-macros [defui]]
    [datascript.core :as d]
    [om.dom :as dom]
    )
  (:require-macros
    [cljs-log.core :as l :refer [debug info warn severe]]))

(enable-console-print!)

;; -----------------------------------------------------------------------------
;; DB

(defonce state (d/create-conn {
                               :db/ident {:db/unique :db.unique/identity}
                               :root {:db/unique :db.unique/identity}
                               :items {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
                               :current-user {:db/valueType :db.type/ref :db/cardinality :db.cardinality/one}
                               :current-user/email {:db/unique :db.unique/identity}}))

(defn init-db []
  (d/transact! state
    [{:db/id -1
      :title "Foo"}
     {:db/id -2
      :title "Bar"}
     {:db/id -3
      :title "Baz"}
     {:db/id -4
      :email "bob.smith@gmail.com"}
     {:db/ident :root
      :root "my app root"
      :items [-1 -2 -3]
      :current-user -4}])

  )


;; -----------------------------------------------------------------------------
;; read

(defn ds-parse [query]
  (let [_ (debug "dslink query" query)]
    (into []
      (for [subq query]
        (let [_ (debug "subq" subq)]
          (if
            (vector? subq)
            (let [val `{~(first subq) [:db/id]}
                  _ (debug "ident" val)
                  ;ident (first subq)
                  ]

              ))
          )))
    query))

(defmulti read om/dispatch)

(defmethod read :current-user
  [{:keys [query state]} k p]
  (let [_ (debug "read :current-user" query)
        db @state
        user (d/pull db query
               (d/q '[:find ?uid .
                      :where
                      [[:db/ident :root] :current-user ?uid]] db))]
    (debug "CURRENT USER?" user)
    {:value user}))

(defmethod read :default
  [{:keys [query state ast]} k _]
  (let [p (js/console.log "read :default" k query)]
    {:value :default-value})
  )

(defmethod read :items
  [{:keys [query state ast]} k _]
  (let [_ (debug "read :items" query ast)
        db @state
        v (ds-parse query)
        ids (d/q '[:find [?ids ...]
                   :where
                   [[:db/ident :root] :items ?ids]] @state)
        items (into [] (for [i ids]
                         (d/pull @state query i)))]
    {:value items}))


;; -----------------------------------------------------------------------------
;; Components

(defui User
  static om/Ident
  (ident [_ {:keys [:db/id]}] [:db/id id])
  static om/IQuery
  (query [_] [:db/id :email])
  Object
  (render [this]
    (let [{:keys [db/id email]} (om/props this)]
      (dom/div nil (str "Id: " id ", Email: " email)))))

(defui Item
  static om/Ident
  (ident [_ {:keys [:db/id]}] [:db/id id])
  static om/IQuery
  (query [_]
    '[:db/id :title])
  Object
  (render [this]
    (let [{:keys [db/id title]} (om/props this)]
      (dom/li nil
        (dom/div nil (str id " - " title))))))

(def item (om/factory Item))

(defui ItemTwo
  static om/IQuery
  (query [_]
    '[:db/id :title])
  Object
  (render [this]
    (let [{:keys [db/id title]} (om/props this)]
      (dom/li nil
        (dom/div nil (str id " - " title))))))

(defui SomeList
  static om/IQuery
  (query [_]
    [{:items (om/get-query Item)}
     {:current-user (om/get-query User)}])
  Object
  (render [this]
    (let [{:keys [items current-user]} (om/props this)]
      (dom/div nil
        (dom/h3 nil "An App!")
        (dom/div nil "Current User: " ((om/factory User) current-user))
        (dom/h3 nil "A List!")
       (dom/ul nil
         (map item items))
       ))))

;; -----------------------------------------------------------------------------
;; Setup

(defonce reconciler
  (om/reconciler
    {:state state
     :parser (om/parser {:read read})}))

(defn render-dom []
  (om/add-root! reconciler SomeList (gdom/getElement "app")))

(defn reload []
  (render-dom))

(defn main []
  (init-db)
  (render-dom))

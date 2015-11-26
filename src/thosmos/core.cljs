(ns thosmos.core
  (:require
    ;[cljs.pprint :refer [pprint]]
    [om.next :as om :refer-macros [defui]]

    )
  (:require-macros
    [cljs-log.core :as l :refer [debug info warn severe]])
  )

(defprotocol IDbIdent
  (db-ident [value]))

(defprotocol ITypeKey
  (type-key [keymap]))

(defprotocol ICollTypeKey
  (coll-key [keymap]))

(defn get-type-key [x]
  )

(defn get-coll-key [x]

  )

(defn get-union
  "Expects a vector of om/IQuery classes"
  [coll-key classes extra-fields])

(defn get-query [x]
  (let [query (om/get-query x)]
    (debug "thosmos.core/get-query")
    (debug "(satisfies? om/IQuery x)" (satisfies? om/IQuery x))
    (debug "(satisfies? TypeKey x)" (satisfies? ITypeKey x))
    (debug "(om/get-query x)" query)
    (debug "(meta (om/get-query x))" (meta query))
    (debug "(goog/isFunction x)" (goog/isFunction x))

    ;;; in advanced, statics will get elided
    ;(when (goog/isFunction x)
    ;  (let [x (js/Object.create (. x -prototype))]
    ;    (when (satisfies? om/IQuery x)
    ;      (let [q (query x)
    ;            c (-> q meta :component)]
    ;        (assert (nil? c) (str "Query violation, " x " reuses " c " query"))
    ;        (with-meta (om/bind-query q (om/params x)) {:component x})))
    ;
    ;    ))

    ;; in advanced, statics will get elided
    (when (goog/isFunction x)
      (let [x (js/Object.create (. x -prototype))]
        (when (satisfies? ITypeKey x)
          (let [t (type-key x)
                c (-> t meta :component)]
            (assert (nil? c) (str "Query violation, " x " reuses " c " typekey"))
            (let [key (with-meta t {:component x})]
              (debug "type-key" key "!!!"))))

        ))

    query
  ))

(defn render
  [this c]
  (js/console.log "thosmos.render called with" this c))
  ;(js/console.log "thosmos.render called with" (pprint this) (pprint c))

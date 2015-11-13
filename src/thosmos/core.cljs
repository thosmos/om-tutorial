(ns thosmos.core
  (:require [cljs.pprint :refer [pprint]]))

(defprotocol ITypeKey
  (type-key [keymap]))

(defn get-query [c]
  (js/console.log "thosmos.get-query called with" c))

(defn render
  [this c]
  (js/console.log "thosmos.render called with" this c)
  ;(js/console.log "thosmos.render called with" (pprint this) (pprint c))
  )

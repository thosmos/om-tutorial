(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pprint]))

(enable-console-print!)

(def conn
  (d/create-conn
    {:list/items     {:db/valueType :db.type/ref :db/cardinality :db.cardinality/many}
     :dashboard/list {:db/valueType :db.type/ref :db/cardinality :db.cardinality/one}}))

(d/transact! conn
  [{:db/id     -1
    :type      :dashboard/post
    :author    "Laura Smith"
    :title     "A Post!"
    :content   "Lorem ipsum dolor sit amet, quem atomorum te quo"
    :favorites 0}
   {:db/id     -2
    :type      :dashboard/photo
    :title     "A Photo!"
    :image     "photo.jpg"
    :caption   "Lorem ipsum"
    :favorites 0}
   {:db/id     -3
    :type      :dashboard/post
    :author    "Jim Jacobs"
    :title     "Another Post!"
    :content   "Lorem ipsum dolor sit amet, quem atomorum te quo"
    :favorites 0}
   {:db/id     -4
    :type      :dashboard/graphic
    :title     "Charts and Stufff!"
    :image     "chart.jpg"
    :favorites 0}
   {:db/id     -5
    :type      :dashboard/post
    :author    "May Fields"
    :title     "Yet Another Post!"
    :content   "Lorem ipsum dolor sit amet, quem atomorum te quo"
    :favorites 0}
   {:db/id      -6
    :type       :dashboard/list
    :list/title "A List of Various Media"
    :list/items [-1 -2 -3 -4 -5]
    }
   {:db/id           -7
    :type            :dashboard/root
    :dashboard/title "The Root"
    :dashboard/list  -6}
   ])

(defui Post
  static om/Ident
  (ident [this {:keys [id]}] id)
  static ts/IKey
  (key [this] {:type :dashboard/post})
  static om/IQuery
  (query [this]
    [:db/id :type :title :author :content]))

(defui Photo
  static om/Ident
  (ident [this {:keys [id]}] id)
  static ts/IKey
  (key [this] {:type :dashboard/photo})
  static om/IQuery
  (query [this]
    [:db/id :type :title :image :caption]))

(defui Graphic
  static om/Ident
  (ident [this {:keys [id]}] id)
  static ts/IKey
  (key [this] {:type :dashboard/graphic})
  static om/IQuery
  (query [this]
    [:db/id :type :title :image]))

(defui ItemList
  static om/Ident
  (ident [this {:keys [id]}] id)
  static ts/IKey
  (key [this] {:type :dashboard/list})
  static om/IQuery
  (query [this]
    [:db/id :list/title {:list/items (ts/get-query [Post Photo Graphic])}])
  Object
  (render [this]
    (dom/div nil
      (get (om/props this) :list/title)
      (ts/render this :list/items))))

(defui Dashboard
  static om/Ident
  (ident [this {:keys [id]}] id)
  static ts/IKey
  (key [this] {:type :dashboard/root})
  static om/IQuery
  (query [this]
    [:db/id :dashboard/title {:dashboard/list (ts/get-query ItemList)}])
  Object
  (render [this]
    (dom/div nil
      (get (om/props this) :dashboard/title)
      (ts/render this ItemList :dashboard/list))))

(defui App
  Object
  (render [this]
    (ts/render this Dashboard)))
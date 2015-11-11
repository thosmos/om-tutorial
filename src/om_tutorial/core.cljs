(ns om-tutorial.core
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(defonce app-state
  (atom
    {:app/title "Om Next example"
     :app/foo "foo msg"
     :app/bar "bar msg"}))

(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state]} key params]
  (let [st @state]
    (if (contains? st key)
      {:value (get st key)}
      {:value :not-found})))

(defmethod read :app/page-content
  [{:keys [parser state selector]} key params]
  {:value (parser {:state state} selector)})

(defmulti mutate om/dispatch)

(defn set-page-params!
  "Sets component page params. Done in transaction in order to force re-render."
  [component page-class]
  (om/set-params! component {:page-query (om/get-query page-class)
                             :page-class page-class
                             :page-factory (om/factory page-class)}))

(defmethod mutate 'app/set-page!
  [{:keys [state]} key {:keys [component class]}]
  {:action #(set-page-params! component class)
   :value [:app/page-content]})

(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read :mutate mutate})}))

(defui FooPage
  static om/IQuery
  (query [this]
    [:app/foo])
  Object
  (render [this]
    (let [{:keys [:app/foo]} (om/props this)]
      (dom/div nil
        (dom/h3 nil "FooPage")
        (dom/h4 nil foo)))))

(defui BarPage
  static om/IQuery
  (query [this]
    [:app/bar])
  Object
  (render [this]
    (let [{:keys [:app/bar]} (om/props this)]
      (dom/div nil
        (dom/h3 nil "BarPage")
        (dom/h4 nil bar)))))

(defui BazPage
  Object
  (render [this]
    (let [{:keys [:app/baz]} (om/props this)]
      (dom/div nil
        (dom/h3 nil "BazPage")
        (dom/h4 nil baz)))))

(defui RootComponent
  static om/IQueryParams
  (params [this]
    {:page-query []
     :page-class nil
     :page-factory nil})
  static om/IQuery
  (query [this]
    '[:app/title {:app/page-content ?page-query}])
  Object
  (set-page! [this class]
    (om/transact! this `[(app/set-page! ~{:component this :class class})]))
  (toggle-page! [this]
    (let [{:keys [page-class]} (om/get-params this)
          new-page (if (= page-class FooPage) BarPage FooPage)]
      (.set-page! this new-page)))
  (render [this]
    (let [{:keys [:app/title :app/page-content]} (om/props this)
          {:keys [page-factory] :as params} (om/get-params this)
          ]
      (dom/div nil
        (dom/h1 nil title)
        (dom/a #js {:href "javascript:void(0)"
                    :onClick #(.toggle-page! this)}
          "toggle page")
        (dom/h3 nil "Page Content")
        ;; don't throw an error if no page to render or page data not found
        (when (and page-factory (not= page-content :not-found))
          (page-factory page-content))

        ((om/factory BazPage) {:app/baz "hello Baz!"})


        ))))

(defn mount-app! []
  (om/add-root! reconciler RootComponent (.getElementById js/document "app")))

(defn ^:export setup! []
  (mount-app!))

(setup!)

;(ns om-tutorial.core
;  (:refer-clojure :exclude [var?])
;  (:require [goog.dom :as gdom]
;            [om.next :as om :refer-macros [defui]]
;            [om.dom :as dom]
;    ;[cljs.pprint :refer [pprint]]
;            [sablono.core :refer-macros [html]]
;            [reforms.rum :include-macros true :as f]
;            [datascript.core :as d]
;            ))
;
;(enable-console-print!)
;
;(def conn (d/create-conn {}))
;
;(def init-state [{:db/id     -1
;                  :app/title "Hello, DataScript!"
;                  :app/count 0}])
;
;(d/transact! conn init-state)
;
;(defmulti read om/dispatch)
;
;(defmethod read :app/counter
;  [{:keys [state selector]} _ _]
;  {:value (d/q '[:find [(pull ?e ?selector) ...]
;                 :in $ ?selector
;                 :where [?e :app/title]]
;            (d/db state) selector)})
;
;(defmulti mutate om/dispatch)
;
;(defmethod mutate 'app/increment
;  [{:keys [state]} _ entity]
;  {:value  [:app/counter]
;   :action (fn []
;             (d/transact! state [(update-in entity [:app/count] #(-> % js/parseInt inc))]))})
;
;(defmethod mutate 'app/update
;  [{:keys [state]} _ entity]
;  {:value  [:app/counter]
;   :action (fn [] (d/transact! state [entity]))})
;
;(defmethod mutate 'app/yeah
;  [{:keys [state]} key entity]
;  (let [st @state]
;    ;(pprint st)
;    {:value  [:app/counter]
;     :action (fn [] (d/transact! state [entity]))}))
;
;(defui Counter
;  static om/IQuery
;  (query [this]
;    [{:app/counter [:db/id :app/title :app/count]}])
;  Object
;  (render [this]
;    (let [path [:app/counter 0]
;          {:keys [:app/title :app/count] :as entity} (get-in (om/props this) path)
;          ent (atom entity)]
;      (add-watch ent :counterWatch
;        (fn [key ref old new]
;          (om/transact! this `[(app/update ~new)])))
;      (html
;        [:div
;         [:h2 title]
;         [:span (str "Count: " count)]
;         [:button {:onClick
;                   (fn [e]
;                     (om/transact! this `[(app/increment ~entity)])
;                     ;(reset! ent (update-in @ent [:app/count] inc))
;                     )} "Click me!"]
;         [:button {:onClick
;                   (fn [e]
;                     (om/transact! this `[(app/yeah {:some "stuff"})])
;                     ;(reset! ent (update-in @ent [:app/count] inc))
;                     )} "Click me too!"]
;         (f/panel "Reforms Example"
;           (f/form
;             (f/text "Title: " ent [:app/title])
;             (f/number "Clicks: " ent [:app/count])))]))))
;
;(def reconciler
;  (om/reconciler
;    {:state  conn
;     :parser (om/parser {:read read :mutate mutate})}))
;
;(def counter (om/factory Counter))
;
;(defui AppView
;  Object
;  (componentWillMount [this]
;    (js/console.log "app-view mounting into DOM")
;    )
;  (render [this]
;
;    (let [props (-> this om/props (select-keys [:uri :msg]))]
;
;      (js/console.log props)
;      (html
;        [:div
;         [:h3 "Hello server rendering!"]
;         [:div (str "url: " (get (om/props this) :uri))]
;         [:div (str "msg: " (get (om/props this) :msg))]
;         ])
;      )
;    ))
;
;(def app-view (om/factory AppView))
;
;(js/ReactDOM.render (app-view {:uri "/hshs" :msg "oh yeah"}) (gdom/getElement "app"))
;
;;(om/add-root! reconciler
;;  Counter (gdom/getElement "app"))
;
;
;(defn ^:export renderit []
;  ;(reset! init-state (js->clj initial-state))
;  ; Render component to markup without reactid
;  ;(reagent.core/render-to-static-markup [main-component])
;  ; Or render component to ready to-go react markup
;  ;(reagent.core/render-to-string [main-component])
;
;  ;(str (js/ReactDOMServer.renderToString (parent))
;  ;  (js/ReactDOMServer.renderToString (counter)))
;
;  ;(js/ReactDOMServer.renderToString (counter @conn))
;  (js/React.renderToString (counter {:app/counter init-state}))
;
;  )
;
;;(pprint (render-to-str))
;
;
;#_[:div
;   [:h2 title]
;   [:span (str "Count: " count)]
;   [:button {:onClick
;             (fn [e]
;               (om/transact! this `[(app/increment ~entity)])
;               ;(reset! ent (update-in @ent [:app/count] inc))
;               )} "Click me!"]
;   (f/with-options {:form {:horizontal (:orientation-horizontal entity)}}
;     (f/panel "Reforms Example"
;       (f/form
;         {:on-submit #(js/alert "Submitted")}
;         (f/text "Your app title: " ent [:app/title] :placeholder "Type your app title here")
;         (f/number "Your click count: " ent [:app/count])
;         (f/form-buttons
;           (f/button-primary "Submit" #(js/alert (:app/title @ent)))
;           (f/button-default "Cancel" #(js/alert "Cancel!")))
;         (f/checkbox "Horizontal form" ent [:orientation-horizontal]))))
;   ]
;

#!/usr/bin/env boot

(def project 'om-tutorial)
(def version "0.1.0-SNAPSHOT")

(set-env!

  :project project
  :version version

  :url "http://clojurous.com"

  :source-paths #{"src/cljs" "src/clj"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.9.0-alpha14"]
                  [org.clojure/clojurescript "1.9.473"]

                  [environ "1.1.0"]
                  [boot-environ "1.1.0"]

                  [cljsjs/react-dom-server "0.14.3-0"]
                  [org.omcljs/om "1.0.0-alpha30"]
                  [sablono "0.6.2"]
                  [datascript "0.15.5"]

                  [adzerk/boot-cljs "1.7.228-2" :scope "test"]
                  [adzerk/boot-cljs-repl "0.3.3" :scope "test"]
                  [adzerk/boot-reload "0.5.1" :scope "test"]
                  [pandeiro/boot-http "0.7.6" :scope "test"]
                  [boot-deps "0.1.6" :scope "dev"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.martinklepsch/boot-garden "1.3.2-0" :scope "test"]

                  ])

(require
  '[boot.core :as c :refer [get-env]]
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[org.martinklepsch.boot-garden :refer [garden]]
  '[boot-deps :refer [ancient]]
  'clojure.java.io)

(deftask build []
  (comp (speak)
    (cljs )
    (garden :styles-var 'om-tutorial.styles/screen
      :output-to "css/garden.css")))

(deftask run []
  (comp (serve :port 3737)
    (watch)
    (cljs-repl)
    (reload)
    (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced}
    garden {:pretty-print false})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none
                       :source-map true
                       :compiler-options {:infer-externs true
                                          :foreign-libs [
                                                         ;{:file "src/js/calc.js"
                                                         ; :provides ["calc"]
                                                         ; :module-type :commonjs}
                                                         ]}}
    reload {:on-jsload 'om-tutorial.core/reload})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
    (run)))

(deftask prod
  "Build a prod."
  []
  (comp
    (production)
    (build)
    (target :dir #{"target"})))


(defn generate-lein-project-file! []
  (let [keep-project true
        pfile (clojure.java.io/file "project.clj")
        pname (or (get-env :project) 'boot-project)
        pvers (or (get-env :version) "0.1.0-SNAPSHOT")
        prop #(when-let [x (get-env %2)] [%1 x])
        head (list* 'defproject pname pvers
               (concat
                 (prop :url :url)
                 (prop :license :license)
                 (prop :description :description)
                 [:dependencies (get-env :dependencies)
                  :source-paths (vec (get-env :source-paths))]))
        proj (pp-str (concat head (mapcat identity (get-env :lein))))]
    (if-not keep-project (.deleteOnExit pfile))
    (spit pfile proj)))

(deftask lein-generate
  "Generate a leiningen `project.clj` file.
  This task generates a leiningen `project.clj` file based on the boot
  environment configuration, including project name and version (generated
  if not present), dependencies, and source paths. Additional keys may be added
  to the generated `project.clj` file by specifying a `:lein` key in the boot
  environment whose value is a map of keys-value pairs to add to `project.clj`."
  []
  (generate-lein-project-file!))
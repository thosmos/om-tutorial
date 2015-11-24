(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {:server-port 3450}
   :build-ids        ["dev"]
   :all-builds
                     [{:id           "dev"
                       :figwheel     true
                       :source-paths ["src"]
                       :compiler     {:main       "om-tutorial.core"
                                      :asset-path "out"
                                      :output-to  "resources/public/main.js"
                                      :output-dir "resources/public/out"
                                      :verbose    true}}]})

(ra/cljs-repl)
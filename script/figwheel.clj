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
                                      :asset-path "js/out-fig"
                                      :output-to  "resources/public/main.js"
                                      :output-dir "resources/public/js/out-fig"
                                      :verbose    true}}]})

(ra/cljs-repl)
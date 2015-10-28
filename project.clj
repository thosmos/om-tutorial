(defproject om-tutorial "0.1.0-SNAPSHOT"
  :description "My first Om program!"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.omcljs/om "1.0.0-alpha11"]
                 [datascript "0.13.2"]
                 [sablono "0.3.4"]
                 [rum-reforms "0.4.0" ]
                 [figwheel-sidecar "0.4.0" :scope "provided"]]
  :clean-targets ["target/"])

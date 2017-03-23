(defproject
  om-tutorial
  "0.1.0-SNAPSHOT"
  :url
  "http://clojurous.com"
  :dependencies
  [[org.clojure/clojure "1.9.0-alpha14"]
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
   [org.martinklepsch/boot-garden "1.3.2-0" :scope "test"]]
  :source-paths
  ["src/cljs" "src/clj"])
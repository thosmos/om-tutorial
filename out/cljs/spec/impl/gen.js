// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__11683__auto__,writer__11684__auto__,opt__11685__auto__){
return cljs.core._write.call(null,writer__11684__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15597 = arguments.length;
var i__12248__auto___15598 = (0);
while(true){
if((i__12248__auto___15598 < len__12247__auto___15597)){
args__12254__auto__.push((arguments[i__12248__auto___15598]));

var G__15599 = (i__12248__auto___15598 + (1));
i__12248__auto___15598 = G__15599;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15596){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15596));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15601 = arguments.length;
var i__12248__auto___15602 = (0);
while(true){
if((i__12248__auto___15602 < len__12247__auto___15601)){
args__12254__auto__.push((arguments[i__12248__auto___15602]));

var G__15603 = (i__12248__auto___15602 + (1));
i__12248__auto___15602 = G__15603;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15600){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15600));
});

var g_QMARK__15604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_15605 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15604){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15604))
,null));
var mkg_15606 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15604,g_15605){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15604,g_15605))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15604,g_15605,mkg_15606){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15604).call(null,x);
});})(g_QMARK__15604,g_15605,mkg_15606))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15604,g_15605,mkg_15606){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15606).call(null,gfn);
});})(g_QMARK__15604,g_15605,mkg_15606))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15604,g_15605,mkg_15606){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15605).call(null,generator);
});})(g_QMARK__15604,g_15605,mkg_15606))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__13489__auto___15626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__13489__auto___15626){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15627 = arguments.length;
var i__12248__auto___15628 = (0);
while(true){
if((i__12248__auto___15628 < len__12247__auto___15627)){
args__12254__auto__.push((arguments[i__12248__auto___15628]));

var G__15629 = (i__12248__auto___15628 + (1));
i__12248__auto___15628 = G__15629;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15626))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15626){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15626),args);
});})(g__13489__auto___15626))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__13489__auto___15626){
return (function (seq15607){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15607));
});})(g__13489__auto___15626))
;


var g__13489__auto___15630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__13489__auto___15630){
return (function cljs$spec$impl$gen$list(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15631 = arguments.length;
var i__12248__auto___15632 = (0);
while(true){
if((i__12248__auto___15632 < len__12247__auto___15631)){
args__12254__auto__.push((arguments[i__12248__auto___15632]));

var G__15633 = (i__12248__auto___15632 + (1));
i__12248__auto___15632 = G__15633;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15630))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15630){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15630),args);
});})(g__13489__auto___15630))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__13489__auto___15630){
return (function (seq15608){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15608));
});})(g__13489__auto___15630))
;


var g__13489__auto___15634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__13489__auto___15634){
return (function cljs$spec$impl$gen$map(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15635 = arguments.length;
var i__12248__auto___15636 = (0);
while(true){
if((i__12248__auto___15636 < len__12247__auto___15635)){
args__12254__auto__.push((arguments[i__12248__auto___15636]));

var G__15637 = (i__12248__auto___15636 + (1));
i__12248__auto___15636 = G__15637;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15634))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15634){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15634),args);
});})(g__13489__auto___15634))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__13489__auto___15634){
return (function (seq15609){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15609));
});})(g__13489__auto___15634))
;


var g__13489__auto___15638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__13489__auto___15638){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15639 = arguments.length;
var i__12248__auto___15640 = (0);
while(true){
if((i__12248__auto___15640 < len__12247__auto___15639)){
args__12254__auto__.push((arguments[i__12248__auto___15640]));

var G__15641 = (i__12248__auto___15640 + (1));
i__12248__auto___15640 = G__15641;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15638))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15638){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15638),args);
});})(g__13489__auto___15638))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__13489__auto___15638){
return (function (seq15610){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15610));
});})(g__13489__auto___15638))
;


var g__13489__auto___15642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__13489__auto___15642){
return (function cljs$spec$impl$gen$set(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15643 = arguments.length;
var i__12248__auto___15644 = (0);
while(true){
if((i__12248__auto___15644 < len__12247__auto___15643)){
args__12254__auto__.push((arguments[i__12248__auto___15644]));

var G__15645 = (i__12248__auto___15644 + (1));
i__12248__auto___15644 = G__15645;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15642))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15642){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15642),args);
});})(g__13489__auto___15642))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__13489__auto___15642){
return (function (seq15611){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15611));
});})(g__13489__auto___15642))
;


var g__13489__auto___15646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__13489__auto___15646){
return (function cljs$spec$impl$gen$vector(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15647 = arguments.length;
var i__12248__auto___15648 = (0);
while(true){
if((i__12248__auto___15648 < len__12247__auto___15647)){
args__12254__auto__.push((arguments[i__12248__auto___15648]));

var G__15649 = (i__12248__auto___15648 + (1));
i__12248__auto___15648 = G__15649;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15646))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15646),args);
});})(g__13489__auto___15646))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__13489__auto___15646){
return (function (seq15612){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15612));
});})(g__13489__auto___15646))
;


var g__13489__auto___15650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__13489__auto___15650){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15651 = arguments.length;
var i__12248__auto___15652 = (0);
while(true){
if((i__12248__auto___15652 < len__12247__auto___15651)){
args__12254__auto__.push((arguments[i__12248__auto___15652]));

var G__15653 = (i__12248__auto___15652 + (1));
i__12248__auto___15652 = G__15653;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15650))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15650){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15650),args);
});})(g__13489__auto___15650))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__13489__auto___15650){
return (function (seq15613){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15613));
});})(g__13489__auto___15650))
;


var g__13489__auto___15654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__13489__auto___15654){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15655 = arguments.length;
var i__12248__auto___15656 = (0);
while(true){
if((i__12248__auto___15656 < len__12247__auto___15655)){
args__12254__auto__.push((arguments[i__12248__auto___15656]));

var G__15657 = (i__12248__auto___15656 + (1));
i__12248__auto___15656 = G__15657;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15654))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15654){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15654),args);
});})(g__13489__auto___15654))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__13489__auto___15654){
return (function (seq15614){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15614));
});})(g__13489__auto___15654))
;


var g__13489__auto___15658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__13489__auto___15658){
return (function cljs$spec$impl$gen$elements(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15659 = arguments.length;
var i__12248__auto___15660 = (0);
while(true){
if((i__12248__auto___15660 < len__12247__auto___15659)){
args__12254__auto__.push((arguments[i__12248__auto___15660]));

var G__15661 = (i__12248__auto___15660 + (1));
i__12248__auto___15660 = G__15661;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15658))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15658),args);
});})(g__13489__auto___15658))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__13489__auto___15658){
return (function (seq15615){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15615));
});})(g__13489__auto___15658))
;


var g__13489__auto___15662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__13489__auto___15662){
return (function cljs$spec$impl$gen$bind(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15663 = arguments.length;
var i__12248__auto___15664 = (0);
while(true){
if((i__12248__auto___15664 < len__12247__auto___15663)){
args__12254__auto__.push((arguments[i__12248__auto___15664]));

var G__15665 = (i__12248__auto___15664 + (1));
i__12248__auto___15664 = G__15665;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15662))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15662),args);
});})(g__13489__auto___15662))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__13489__auto___15662){
return (function (seq15616){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15616));
});})(g__13489__auto___15662))
;


var g__13489__auto___15666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__13489__auto___15666){
return (function cljs$spec$impl$gen$choose(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15667 = arguments.length;
var i__12248__auto___15668 = (0);
while(true){
if((i__12248__auto___15668 < len__12247__auto___15667)){
args__12254__auto__.push((arguments[i__12248__auto___15668]));

var G__15669 = (i__12248__auto___15668 + (1));
i__12248__auto___15668 = G__15669;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15666))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15666),args);
});})(g__13489__auto___15666))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__13489__auto___15666){
return (function (seq15617){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15617));
});})(g__13489__auto___15666))
;


var g__13489__auto___15670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__13489__auto___15670){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15671 = arguments.length;
var i__12248__auto___15672 = (0);
while(true){
if((i__12248__auto___15672 < len__12247__auto___15671)){
args__12254__auto__.push((arguments[i__12248__auto___15672]));

var G__15673 = (i__12248__auto___15672 + (1));
i__12248__auto___15672 = G__15673;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15670))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15670),args);
});})(g__13489__auto___15670))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__13489__auto___15670){
return (function (seq15618){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15618));
});})(g__13489__auto___15670))
;


var g__13489__auto___15674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__13489__auto___15674){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15675 = arguments.length;
var i__12248__auto___15676 = (0);
while(true){
if((i__12248__auto___15676 < len__12247__auto___15675)){
args__12254__auto__.push((arguments[i__12248__auto___15676]));

var G__15677 = (i__12248__auto___15676 + (1));
i__12248__auto___15676 = G__15677;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15674))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15674),args);
});})(g__13489__auto___15674))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__13489__auto___15674){
return (function (seq15619){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15619));
});})(g__13489__auto___15674))
;


var g__13489__auto___15678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__13489__auto___15678){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15679 = arguments.length;
var i__12248__auto___15680 = (0);
while(true){
if((i__12248__auto___15680 < len__12247__auto___15679)){
args__12254__auto__.push((arguments[i__12248__auto___15680]));

var G__15681 = (i__12248__auto___15680 + (1));
i__12248__auto___15680 = G__15681;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15678))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15678),args);
});})(g__13489__auto___15678))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__13489__auto___15678){
return (function (seq15620){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15620));
});})(g__13489__auto___15678))
;


var g__13489__auto___15682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__13489__auto___15682){
return (function cljs$spec$impl$gen$sample(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15683 = arguments.length;
var i__12248__auto___15684 = (0);
while(true){
if((i__12248__auto___15684 < len__12247__auto___15683)){
args__12254__auto__.push((arguments[i__12248__auto___15684]));

var G__15685 = (i__12248__auto___15684 + (1));
i__12248__auto___15684 = G__15685;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15682))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15682),args);
});})(g__13489__auto___15682))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__13489__auto___15682){
return (function (seq15621){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15621));
});})(g__13489__auto___15682))
;


var g__13489__auto___15686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__13489__auto___15686){
return (function cljs$spec$impl$gen$return(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15687 = arguments.length;
var i__12248__auto___15688 = (0);
while(true){
if((i__12248__auto___15688 < len__12247__auto___15687)){
args__12254__auto__.push((arguments[i__12248__auto___15688]));

var G__15689 = (i__12248__auto___15688 + (1));
i__12248__auto___15688 = G__15689;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15686))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15686),args);
});})(g__13489__auto___15686))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__13489__auto___15686){
return (function (seq15622){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15622));
});})(g__13489__auto___15686))
;


var g__13489__auto___15690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__13489__auto___15690){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15691 = arguments.length;
var i__12248__auto___15692 = (0);
while(true){
if((i__12248__auto___15692 < len__12247__auto___15691)){
args__12254__auto__.push((arguments[i__12248__auto___15692]));

var G__15693 = (i__12248__auto___15692 + (1));
i__12248__auto___15692 = G__15693;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15690))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15690),args);
});})(g__13489__auto___15690))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__13489__auto___15690){
return (function (seq15623){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15623));
});})(g__13489__auto___15690))
;


var g__13489__auto___15694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__13489__auto___15694){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15695 = arguments.length;
var i__12248__auto___15696 = (0);
while(true){
if((i__12248__auto___15696 < len__12247__auto___15695)){
args__12254__auto__.push((arguments[i__12248__auto___15696]));

var G__15697 = (i__12248__auto___15696 + (1));
i__12248__auto___15696 = G__15697;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15694))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15694),args);
});})(g__13489__auto___15694))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__13489__auto___15694){
return (function (seq15624){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15624));
});})(g__13489__auto___15694))
;


var g__13489__auto___15698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__13489__auto___15698){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15699 = arguments.length;
var i__12248__auto___15700 = (0);
while(true){
if((i__12248__auto___15700 < len__12247__auto___15699)){
args__12254__auto__.push((arguments[i__12248__auto___15700]));

var G__15701 = (i__12248__auto___15700 + (1));
i__12248__auto___15700 = G__15701;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13489__auto___15698))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13489__auto___15698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__13489__auto___15698),args);
});})(g__13489__auto___15698))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__13489__auto___15698){
return (function (seq15625){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15625));
});})(g__13489__auto___15698))
;

var g__13502__auto___15723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__13502__auto___15723){
return (function cljs$spec$impl$gen$any(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15724 = arguments.length;
var i__12248__auto___15725 = (0);
while(true){
if((i__12248__auto___15725 < len__12247__auto___15724)){
args__12254__auto__.push((arguments[i__12248__auto___15725]));

var G__15726 = (i__12248__auto___15725 + (1));
i__12248__auto___15725 = G__15726;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15723))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15723){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15723);
});})(g__13502__auto___15723))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__13502__auto___15723){
return (function (seq15702){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15702));
});})(g__13502__auto___15723))
;


var g__13502__auto___15727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__13502__auto___15727){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15728 = arguments.length;
var i__12248__auto___15729 = (0);
while(true){
if((i__12248__auto___15729 < len__12247__auto___15728)){
args__12254__auto__.push((arguments[i__12248__auto___15729]));

var G__15730 = (i__12248__auto___15729 + (1));
i__12248__auto___15729 = G__15730;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15727))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15727){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15727);
});})(g__13502__auto___15727))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__13502__auto___15727){
return (function (seq15703){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15703));
});})(g__13502__auto___15727))
;


var g__13502__auto___15731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__13502__auto___15731){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15732 = arguments.length;
var i__12248__auto___15733 = (0);
while(true){
if((i__12248__auto___15733 < len__12247__auto___15732)){
args__12254__auto__.push((arguments[i__12248__auto___15733]));

var G__15734 = (i__12248__auto___15733 + (1));
i__12248__auto___15733 = G__15734;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15731))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15731){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15731);
});})(g__13502__auto___15731))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__13502__auto___15731){
return (function (seq15704){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15704));
});})(g__13502__auto___15731))
;


var g__13502__auto___15735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__13502__auto___15735){
return (function cljs$spec$impl$gen$char(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15736 = arguments.length;
var i__12248__auto___15737 = (0);
while(true){
if((i__12248__auto___15737 < len__12247__auto___15736)){
args__12254__auto__.push((arguments[i__12248__auto___15737]));

var G__15738 = (i__12248__auto___15737 + (1));
i__12248__auto___15737 = G__15738;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15735))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15735){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15735);
});})(g__13502__auto___15735))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__13502__auto___15735){
return (function (seq15705){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15705));
});})(g__13502__auto___15735))
;


var g__13502__auto___15739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__13502__auto___15739){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15740 = arguments.length;
var i__12248__auto___15741 = (0);
while(true){
if((i__12248__auto___15741 < len__12247__auto___15740)){
args__12254__auto__.push((arguments[i__12248__auto___15741]));

var G__15742 = (i__12248__auto___15741 + (1));
i__12248__auto___15741 = G__15742;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15739))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15739){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15739);
});})(g__13502__auto___15739))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__13502__auto___15739){
return (function (seq15706){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15706));
});})(g__13502__auto___15739))
;


var g__13502__auto___15743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__13502__auto___15743){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15744 = arguments.length;
var i__12248__auto___15745 = (0);
while(true){
if((i__12248__auto___15745 < len__12247__auto___15744)){
args__12254__auto__.push((arguments[i__12248__auto___15745]));

var G__15746 = (i__12248__auto___15745 + (1));
i__12248__auto___15745 = G__15746;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15743))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15743){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15743);
});})(g__13502__auto___15743))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__13502__auto___15743){
return (function (seq15707){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15707));
});})(g__13502__auto___15743))
;


var g__13502__auto___15747 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__13502__auto___15747){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15748 = arguments.length;
var i__12248__auto___15749 = (0);
while(true){
if((i__12248__auto___15749 < len__12247__auto___15748)){
args__12254__auto__.push((arguments[i__12248__auto___15749]));

var G__15750 = (i__12248__auto___15749 + (1));
i__12248__auto___15749 = G__15750;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15747))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15747){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15747);
});})(g__13502__auto___15747))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__13502__auto___15747){
return (function (seq15708){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15708));
});})(g__13502__auto___15747))
;


var g__13502__auto___15751 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__13502__auto___15751){
return (function cljs$spec$impl$gen$double(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15752 = arguments.length;
var i__12248__auto___15753 = (0);
while(true){
if((i__12248__auto___15753 < len__12247__auto___15752)){
args__12254__auto__.push((arguments[i__12248__auto___15753]));

var G__15754 = (i__12248__auto___15753 + (1));
i__12248__auto___15753 = G__15754;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15751))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15751){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15751);
});})(g__13502__auto___15751))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__13502__auto___15751){
return (function (seq15709){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15709));
});})(g__13502__auto___15751))
;


var g__13502__auto___15755 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__13502__auto___15755){
return (function cljs$spec$impl$gen$int(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15756 = arguments.length;
var i__12248__auto___15757 = (0);
while(true){
if((i__12248__auto___15757 < len__12247__auto___15756)){
args__12254__auto__.push((arguments[i__12248__auto___15757]));

var G__15758 = (i__12248__auto___15757 + (1));
i__12248__auto___15757 = G__15758;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15755))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15755){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15755);
});})(g__13502__auto___15755))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__13502__auto___15755){
return (function (seq15710){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15710));
});})(g__13502__auto___15755))
;


var g__13502__auto___15759 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__13502__auto___15759){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15760 = arguments.length;
var i__12248__auto___15761 = (0);
while(true){
if((i__12248__auto___15761 < len__12247__auto___15760)){
args__12254__auto__.push((arguments[i__12248__auto___15761]));

var G__15762 = (i__12248__auto___15761 + (1));
i__12248__auto___15761 = G__15762;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15759))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15759){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15759);
});})(g__13502__auto___15759))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__13502__auto___15759){
return (function (seq15711){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15711));
});})(g__13502__auto___15759))
;


var g__13502__auto___15763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__13502__auto___15763){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15764 = arguments.length;
var i__12248__auto___15765 = (0);
while(true){
if((i__12248__auto___15765 < len__12247__auto___15764)){
args__12254__auto__.push((arguments[i__12248__auto___15765]));

var G__15766 = (i__12248__auto___15765 + (1));
i__12248__auto___15765 = G__15766;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15763))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15763){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15763);
});})(g__13502__auto___15763))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__13502__auto___15763){
return (function (seq15712){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15712));
});})(g__13502__auto___15763))
;


var g__13502__auto___15767 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__13502__auto___15767){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15768 = arguments.length;
var i__12248__auto___15769 = (0);
while(true){
if((i__12248__auto___15769 < len__12247__auto___15768)){
args__12254__auto__.push((arguments[i__12248__auto___15769]));

var G__15770 = (i__12248__auto___15769 + (1));
i__12248__auto___15769 = G__15770;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15767))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15767){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15767);
});})(g__13502__auto___15767))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__13502__auto___15767){
return (function (seq15713){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15713));
});})(g__13502__auto___15767))
;


var g__13502__auto___15771 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__13502__auto___15771){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15772 = arguments.length;
var i__12248__auto___15773 = (0);
while(true){
if((i__12248__auto___15773 < len__12247__auto___15772)){
args__12254__auto__.push((arguments[i__12248__auto___15773]));

var G__15774 = (i__12248__auto___15773 + (1));
i__12248__auto___15773 = G__15774;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15771))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15771){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15771);
});})(g__13502__auto___15771))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__13502__auto___15771){
return (function (seq15714){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15714));
});})(g__13502__auto___15771))
;


var g__13502__auto___15775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__13502__auto___15775){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15776 = arguments.length;
var i__12248__auto___15777 = (0);
while(true){
if((i__12248__auto___15777 < len__12247__auto___15776)){
args__12254__auto__.push((arguments[i__12248__auto___15777]));

var G__15778 = (i__12248__auto___15777 + (1));
i__12248__auto___15777 = G__15778;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15775))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15775){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15775);
});})(g__13502__auto___15775))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__13502__auto___15775){
return (function (seq15715){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15715));
});})(g__13502__auto___15775))
;


var g__13502__auto___15779 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__13502__auto___15779){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15780 = arguments.length;
var i__12248__auto___15781 = (0);
while(true){
if((i__12248__auto___15781 < len__12247__auto___15780)){
args__12254__auto__.push((arguments[i__12248__auto___15781]));

var G__15782 = (i__12248__auto___15781 + (1));
i__12248__auto___15781 = G__15782;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15779))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15779){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15779);
});})(g__13502__auto___15779))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__13502__auto___15779){
return (function (seq15716){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15716));
});})(g__13502__auto___15779))
;


var g__13502__auto___15783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__13502__auto___15783){
return (function cljs$spec$impl$gen$string(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15784 = arguments.length;
var i__12248__auto___15785 = (0);
while(true){
if((i__12248__auto___15785 < len__12247__auto___15784)){
args__12254__auto__.push((arguments[i__12248__auto___15785]));

var G__15786 = (i__12248__auto___15785 + (1));
i__12248__auto___15785 = G__15786;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15783))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15783){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15783);
});})(g__13502__auto___15783))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__13502__auto___15783){
return (function (seq15717){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15717));
});})(g__13502__auto___15783))
;


var g__13502__auto___15787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__13502__auto___15787){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15788 = arguments.length;
var i__12248__auto___15789 = (0);
while(true){
if((i__12248__auto___15789 < len__12247__auto___15788)){
args__12254__auto__.push((arguments[i__12248__auto___15789]));

var G__15790 = (i__12248__auto___15789 + (1));
i__12248__auto___15789 = G__15790;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15787))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15787){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15787);
});})(g__13502__auto___15787))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__13502__auto___15787){
return (function (seq15718){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15718));
});})(g__13502__auto___15787))
;


var g__13502__auto___15791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__13502__auto___15791){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15792 = arguments.length;
var i__12248__auto___15793 = (0);
while(true){
if((i__12248__auto___15793 < len__12247__auto___15792)){
args__12254__auto__.push((arguments[i__12248__auto___15793]));

var G__15794 = (i__12248__auto___15793 + (1));
i__12248__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15791))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15791){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15791);
});})(g__13502__auto___15791))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__13502__auto___15791){
return (function (seq15719){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15719));
});})(g__13502__auto___15791))
;


var g__13502__auto___15795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__13502__auto___15795){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15796 = arguments.length;
var i__12248__auto___15797 = (0);
while(true){
if((i__12248__auto___15797 < len__12247__auto___15796)){
args__12254__auto__.push((arguments[i__12248__auto___15797]));

var G__15798 = (i__12248__auto___15797 + (1));
i__12248__auto___15797 = G__15798;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15795))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15795){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15795);
});})(g__13502__auto___15795))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__13502__auto___15795){
return (function (seq15720){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15720));
});})(g__13502__auto___15795))
;


var g__13502__auto___15799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__13502__auto___15799){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15800 = arguments.length;
var i__12248__auto___15801 = (0);
while(true){
if((i__12248__auto___15801 < len__12247__auto___15800)){
args__12254__auto__.push((arguments[i__12248__auto___15801]));

var G__15802 = (i__12248__auto___15801 + (1));
i__12248__auto___15801 = G__15802;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15799))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15799){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15799);
});})(g__13502__auto___15799))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__13502__auto___15799){
return (function (seq15721){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15721));
});})(g__13502__auto___15799))
;


var g__13502__auto___15803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__13502__auto___15803){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15804 = arguments.length;
var i__12248__auto___15805 = (0);
while(true){
if((i__12248__auto___15805 < len__12247__auto___15804)){
args__12254__auto__.push((arguments[i__12248__auto___15805]));

var G__15806 = (i__12248__auto___15805 + (1));
i__12248__auto___15805 = G__15806;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});})(g__13502__auto___15803))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__13502__auto___15803){
return (function (args){
return cljs.core.deref.call(null,g__13502__auto___15803);
});})(g__13502__auto___15803))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__13502__auto___15803){
return (function (seq15722){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15722));
});})(g__13502__auto___15803))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__12254__auto__ = [];
var len__12247__auto___15809 = arguments.length;
var i__12248__auto___15810 = (0);
while(true){
if((i__12248__auto___15810 < len__12247__auto___15809)){
args__12254__auto__.push((arguments[i__12248__auto___15810]));

var G__15811 = (i__12248__auto___15810 + (1));
i__12248__auto___15810 = G__15811;
continue;
} else {
}
break;
}

var argseq__12255__auto__ = ((((0) < args__12254__auto__.length))?(new cljs.core.IndexedSeq(args__12254__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__12255__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__15807_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15807_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq15808){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15808));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__15812_SHARP_){
return (new Date(p1__15812_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map
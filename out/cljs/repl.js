// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14541){
var map__14566 = p__14541;
var map__14566__$1 = ((((!((map__14566 == null)))?((((map__14566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14566):map__14566);
var m = map__14566__$1;
var n = cljs.core.get.call(null,map__14566__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14568_14590 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14569_14591 = null;
var count__14570_14592 = (0);
var i__14571_14593 = (0);
while(true){
if((i__14571_14593 < count__14570_14592)){
var f_14594 = cljs.core._nth.call(null,chunk__14569_14591,i__14571_14593);
cljs.core.println.call(null,"  ",f_14594);

var G__14595 = seq__14568_14590;
var G__14596 = chunk__14569_14591;
var G__14597 = count__14570_14592;
var G__14598 = (i__14571_14593 + (1));
seq__14568_14590 = G__14595;
chunk__14569_14591 = G__14596;
count__14570_14592 = G__14597;
i__14571_14593 = G__14598;
continue;
} else {
var temp__6753__auto___14599 = cljs.core.seq.call(null,seq__14568_14590);
if(temp__6753__auto___14599){
var seq__14568_14600__$1 = temp__6753__auto___14599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14568_14600__$1)){
var c__11937__auto___14601 = cljs.core.chunk_first.call(null,seq__14568_14600__$1);
var G__14602 = cljs.core.chunk_rest.call(null,seq__14568_14600__$1);
var G__14603 = c__11937__auto___14601;
var G__14604 = cljs.core.count.call(null,c__11937__auto___14601);
var G__14605 = (0);
seq__14568_14590 = G__14602;
chunk__14569_14591 = G__14603;
count__14570_14592 = G__14604;
i__14571_14593 = G__14605;
continue;
} else {
var f_14606 = cljs.core.first.call(null,seq__14568_14600__$1);
cljs.core.println.call(null,"  ",f_14606);

var G__14607 = cljs.core.next.call(null,seq__14568_14600__$1);
var G__14608 = null;
var G__14609 = (0);
var G__14610 = (0);
seq__14568_14590 = G__14607;
chunk__14569_14591 = G__14608;
count__14570_14592 = G__14609;
i__14571_14593 = G__14610;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14611 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__11026__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11026__auto__)){
return or__11026__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14611);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14611)))?cljs.core.second.call(null,arglists_14611):arglists_14611));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14572_14612 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14573_14613 = null;
var count__14574_14614 = (0);
var i__14575_14615 = (0);
while(true){
if((i__14575_14615 < count__14574_14614)){
var vec__14576_14616 = cljs.core._nth.call(null,chunk__14573_14613,i__14575_14615);
var name_14617 = cljs.core.nth.call(null,vec__14576_14616,(0),null);
var map__14579_14618 = cljs.core.nth.call(null,vec__14576_14616,(1),null);
var map__14579_14619__$1 = ((((!((map__14579_14618 == null)))?((((map__14579_14618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14579_14618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14579_14618):map__14579_14618);
var doc_14620 = cljs.core.get.call(null,map__14579_14619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14621 = cljs.core.get.call(null,map__14579_14619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14617);

cljs.core.println.call(null," ",arglists_14621);

if(cljs.core.truth_(doc_14620)){
cljs.core.println.call(null," ",doc_14620);
} else {
}

var G__14622 = seq__14572_14612;
var G__14623 = chunk__14573_14613;
var G__14624 = count__14574_14614;
var G__14625 = (i__14575_14615 + (1));
seq__14572_14612 = G__14622;
chunk__14573_14613 = G__14623;
count__14574_14614 = G__14624;
i__14575_14615 = G__14625;
continue;
} else {
var temp__6753__auto___14626 = cljs.core.seq.call(null,seq__14572_14612);
if(temp__6753__auto___14626){
var seq__14572_14627__$1 = temp__6753__auto___14626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14572_14627__$1)){
var c__11937__auto___14628 = cljs.core.chunk_first.call(null,seq__14572_14627__$1);
var G__14629 = cljs.core.chunk_rest.call(null,seq__14572_14627__$1);
var G__14630 = c__11937__auto___14628;
var G__14631 = cljs.core.count.call(null,c__11937__auto___14628);
var G__14632 = (0);
seq__14572_14612 = G__14629;
chunk__14573_14613 = G__14630;
count__14574_14614 = G__14631;
i__14575_14615 = G__14632;
continue;
} else {
var vec__14581_14633 = cljs.core.first.call(null,seq__14572_14627__$1);
var name_14634 = cljs.core.nth.call(null,vec__14581_14633,(0),null);
var map__14584_14635 = cljs.core.nth.call(null,vec__14581_14633,(1),null);
var map__14584_14636__$1 = ((((!((map__14584_14635 == null)))?((((map__14584_14635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14584_14635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14584_14635):map__14584_14635);
var doc_14637 = cljs.core.get.call(null,map__14584_14636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14638 = cljs.core.get.call(null,map__14584_14636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14634);

cljs.core.println.call(null," ",arglists_14638);

if(cljs.core.truth_(doc_14637)){
cljs.core.println.call(null," ",doc_14637);
} else {
}

var G__14639 = cljs.core.next.call(null,seq__14572_14627__$1);
var G__14640 = null;
var G__14641 = (0);
var G__14642 = (0);
seq__14572_14612 = G__14639;
chunk__14573_14613 = G__14640;
count__14574_14614 = G__14641;
i__14575_14615 = G__14642;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__14586 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14587 = null;
var count__14588 = (0);
var i__14589 = (0);
while(true){
if((i__14589 < count__14588)){
var role = cljs.core._nth.call(null,chunk__14587,i__14589);
var temp__6753__auto___14643__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___14643__$1)){
var spec_14644 = temp__6753__auto___14643__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14644));
} else {
}

var G__14645 = seq__14586;
var G__14646 = chunk__14587;
var G__14647 = count__14588;
var G__14648 = (i__14589 + (1));
seq__14586 = G__14645;
chunk__14587 = G__14646;
count__14588 = G__14647;
i__14589 = G__14648;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__14586);
if(temp__6753__auto____$1){
var seq__14586__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14586__$1)){
var c__11937__auto__ = cljs.core.chunk_first.call(null,seq__14586__$1);
var G__14649 = cljs.core.chunk_rest.call(null,seq__14586__$1);
var G__14650 = c__11937__auto__;
var G__14651 = cljs.core.count.call(null,c__11937__auto__);
var G__14652 = (0);
seq__14586 = G__14649;
chunk__14587 = G__14650;
count__14588 = G__14651;
i__14589 = G__14652;
continue;
} else {
var role = cljs.core.first.call(null,seq__14586__$1);
var temp__6753__auto___14653__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___14653__$2)){
var spec_14654 = temp__6753__auto___14653__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14654));
} else {
}

var G__14655 = cljs.core.next.call(null,seq__14586__$1);
var G__14656 = null;
var G__14657 = (0);
var G__14658 = (0);
seq__14586 = G__14655;
chunk__14587 = G__14656;
count__14588 = G__14657;
i__14589 = G__14658;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52604){
var map__52605 = p__52604;
var map__52605__$1 = (((((!((map__52605 == null))))?(((((map__52605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52605):map__52605);
var m = map__52605__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52611_52781 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52612_52782 = null;
var count__52613_52783 = (0);
var i__52614_52784 = (0);
while(true){
if((i__52614_52784 < count__52613_52783)){
var f_52785 = chunk__52612_52782.cljs$core$IIndexed$_nth$arity$2(null,i__52614_52784);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52785], 0));


var G__52786 = seq__52611_52781;
var G__52787 = chunk__52612_52782;
var G__52788 = count__52613_52783;
var G__52789 = (i__52614_52784 + (1));
seq__52611_52781 = G__52786;
chunk__52612_52782 = G__52787;
count__52613_52783 = G__52788;
i__52614_52784 = G__52789;
continue;
} else {
var temp__5735__auto___52790 = cljs.core.seq(seq__52611_52781);
if(temp__5735__auto___52790){
var seq__52611_52791__$1 = temp__5735__auto___52790;
if(cljs.core.chunked_seq_QMARK_(seq__52611_52791__$1)){
var c__4556__auto___52792 = cljs.core.chunk_first(seq__52611_52791__$1);
var G__52793 = cljs.core.chunk_rest(seq__52611_52791__$1);
var G__52794 = c__4556__auto___52792;
var G__52795 = cljs.core.count(c__4556__auto___52792);
var G__52796 = (0);
seq__52611_52781 = G__52793;
chunk__52612_52782 = G__52794;
count__52613_52783 = G__52795;
i__52614_52784 = G__52796;
continue;
} else {
var f_52797 = cljs.core.first(seq__52611_52791__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_52797], 0));


var G__52798 = cljs.core.next(seq__52611_52791__$1);
var G__52799 = null;
var G__52800 = (0);
var G__52801 = (0);
seq__52611_52781 = G__52798;
chunk__52612_52782 = G__52799;
count__52613_52783 = G__52800;
i__52614_52784 = G__52801;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52802 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_52802], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_52802)))?cljs.core.second(arglists_52802):arglists_52802)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52622_52803 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52623_52804 = null;
var count__52624_52805 = (0);
var i__52625_52806 = (0);
while(true){
if((i__52625_52806 < count__52624_52805)){
var vec__52649_52809 = chunk__52623_52804.cljs$core$IIndexed$_nth$arity$2(null,i__52625_52806);
var name_52810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52649_52809,(0),null);
var map__52652_52811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52649_52809,(1),null);
var map__52652_52812__$1 = (((((!((map__52652_52811 == null))))?(((((map__52652_52811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52652_52811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52652_52811):map__52652_52811);
var doc_52813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52652_52812__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52652_52812__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52810], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52814], 0));

if(cljs.core.truth_(doc_52813)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52813], 0));
} else {
}


var G__52819 = seq__52622_52803;
var G__52820 = chunk__52623_52804;
var G__52821 = count__52624_52805;
var G__52822 = (i__52625_52806 + (1));
seq__52622_52803 = G__52819;
chunk__52623_52804 = G__52820;
count__52624_52805 = G__52821;
i__52625_52806 = G__52822;
continue;
} else {
var temp__5735__auto___52823 = cljs.core.seq(seq__52622_52803);
if(temp__5735__auto___52823){
var seq__52622_52824__$1 = temp__5735__auto___52823;
if(cljs.core.chunked_seq_QMARK_(seq__52622_52824__$1)){
var c__4556__auto___52825 = cljs.core.chunk_first(seq__52622_52824__$1);
var G__52827 = cljs.core.chunk_rest(seq__52622_52824__$1);
var G__52828 = c__4556__auto___52825;
var G__52829 = cljs.core.count(c__4556__auto___52825);
var G__52830 = (0);
seq__52622_52803 = G__52827;
chunk__52623_52804 = G__52828;
count__52624_52805 = G__52829;
i__52625_52806 = G__52830;
continue;
} else {
var vec__52659_52832 = cljs.core.first(seq__52622_52824__$1);
var name_52833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52659_52832,(0),null);
var map__52662_52834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52659_52832,(1),null);
var map__52662_52835__$1 = (((((!((map__52662_52834 == null))))?(((((map__52662_52834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52662_52834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52662_52834):map__52662_52834);
var doc_52836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52662_52835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52662_52835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_52833], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_52837], 0));

if(cljs.core.truth_(doc_52836)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_52836], 0));
} else {
}


var G__52840 = cljs.core.next(seq__52622_52824__$1);
var G__52841 = null;
var G__52842 = (0);
var G__52843 = (0);
seq__52622_52803 = G__52840;
chunk__52623_52804 = G__52841;
count__52624_52805 = G__52842;
i__52625_52806 = G__52843;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__52666 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52667 = null;
var count__52668 = (0);
var i__52669 = (0);
while(true){
if((i__52669 < count__52668)){
var role = chunk__52667.cljs$core$IIndexed$_nth$arity$2(null,i__52669);
var temp__5735__auto___52845__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52845__$1)){
var spec_52848 = temp__5735__auto___52845__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52848)], 0));
} else {
}


var G__52849 = seq__52666;
var G__52850 = chunk__52667;
var G__52851 = count__52668;
var G__52852 = (i__52669 + (1));
seq__52666 = G__52849;
chunk__52667 = G__52850;
count__52668 = G__52851;
i__52669 = G__52852;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__52666);
if(temp__5735__auto____$1){
var seq__52666__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52666__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52666__$1);
var G__52854 = cljs.core.chunk_rest(seq__52666__$1);
var G__52855 = c__4556__auto__;
var G__52856 = cljs.core.count(c__4556__auto__);
var G__52857 = (0);
seq__52666 = G__52854;
chunk__52667 = G__52855;
count__52668 = G__52856;
i__52669 = G__52857;
continue;
} else {
var role = cljs.core.first(seq__52666__$1);
var temp__5735__auto___52859__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___52859__$2)){
var spec_52860 = temp__5735__auto___52859__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_52860)], 0));
} else {
}


var G__52861 = cljs.core.next(seq__52666__$1);
var G__52862 = null;
var G__52863 = (0);
var G__52864 = (0);
seq__52666 = G__52861;
chunk__52667 = G__52862;
count__52668 = G__52863;
i__52669 = G__52864;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__52866 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__52867 = cljs.core.ex_cause(t);
via = G__52866;
t = G__52867;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__52690 = datafied_throwable;
var map__52690__$1 = (((((!((map__52690 == null))))?(((((map__52690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52690):map__52690);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52690__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52690__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52690__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52691 = cljs.core.last(via);
var map__52691__$1 = (((((!((map__52691 == null))))?(((((map__52691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52691):map__52691);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52692 = data;
var map__52692__$1 = (((((!((map__52692 == null))))?(((((map__52692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52692):map__52692);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52692__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52693 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52693__$1 = (((((!((map__52693 == null))))?(((((map__52693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52693):map__52693);
var top_data = map__52693__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__52705 = phase;
var G__52705__$1 = (((G__52705 instanceof cljs.core.Keyword))?G__52705.fqn:null);
switch (G__52705__$1) {
case "read-source":
var map__52706 = data;
var map__52706__$1 = (((((!((map__52706 == null))))?(((((map__52706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52706):map__52706);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52706__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__52708 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__52708__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52708,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52708);
var G__52708__$2 = (cljs.core.truth_((function (){var fexpr__52709 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52709.cljs$core$IFn$_invoke$arity$1 ? fexpr__52709.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52709.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52708__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52708__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52708__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52708__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__52710 = top_data;
var G__52710__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52710,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__52710);
var G__52710__$2 = (cljs.core.truth_((function (){var fexpr__52711 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52711.cljs$core$IFn$_invoke$arity$1 ? fexpr__52711.cljs$core$IFn$_invoke$arity$1(source) : fexpr__52711.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__52710__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__52710__$1);
var G__52710__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52710__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52710__$2);
var G__52710__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52710__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52710__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52710__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52710__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__52712 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52712,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52712,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52712,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52712,(3),null);
var G__52715 = top_data;
var G__52715__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__52715);
var G__52715__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__52715__$1);
var G__52715__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__52715__$2);
var G__52715__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__52715__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52715__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__52715__$4;
}

break;
case "execution":
var vec__52716 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52716,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52716,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52716,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52716,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52686_SHARP_){
var or__4126__auto__ = (p1__52686_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__52720 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__52720.cljs$core$IFn$_invoke$arity$1 ? fexpr__52720.cljs$core$IFn$_invoke$arity$1(p1__52686_SHARP_) : fexpr__52720.call(null,p1__52686_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__52721 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__52721__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52721,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__52721);
var G__52721__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52721__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__52721__$1);
var G__52721__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52721__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__52721__$2);
var G__52721__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52721__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__52721__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52721__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__52721__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52705__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__52728){
var map__52729 = p__52728;
var map__52729__$1 = (((((!((map__52729 == null))))?(((((map__52729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52729):map__52729);
var triage_data = map__52729__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52729__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__52733 = phase;
var G__52733__$1 = (((G__52733 instanceof cljs.core.Keyword))?G__52733.fqn:null);
switch (G__52733__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__52734 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__52735 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52736 = loc;
var G__52737 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52738_52944 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52739_52945 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52740_52946 = true;
var _STAR_print_fn_STAR__temp_val__52741_52947 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52740_52946);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52741_52947);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52726_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52726_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52739_52945);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52738_52944);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52734,G__52735,G__52736,G__52737) : format.call(null,G__52734,G__52735,G__52736,G__52737));

break;
case "macroexpansion":
var G__52744 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__52745 = cause_type;
var G__52746 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52747 = loc;
var G__52748 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52744,G__52745,G__52746,G__52747,G__52748) : format.call(null,G__52744,G__52745,G__52746,G__52747,G__52748));

break;
case "compile-syntax-check":
var G__52749 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__52750 = cause_type;
var G__52751 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52752 = loc;
var G__52753 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52749,G__52750,G__52751,G__52752,G__52753) : format.call(null,G__52749,G__52750,G__52751,G__52752,G__52753));

break;
case "compilation":
var G__52754 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__52755 = cause_type;
var G__52756 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52757 = loc;
var G__52758 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52754,G__52755,G__52756,G__52757,G__52758) : format.call(null,G__52754,G__52755,G__52756,G__52757,G__52758));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__52767 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__52768 = symbol;
var G__52769 = loc;
var G__52770 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__52771_52952 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__52772_52953 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__52773_52954 = true;
var _STAR_print_fn_STAR__temp_val__52774_52955 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__52773_52954);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__52774_52955);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52727_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52727_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__52772_52953);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__52771_52952);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__52767,G__52768,G__52769,G__52770) : format.call(null,G__52767,G__52768,G__52769,G__52770));
} else {
var G__52775 = "Execution error%s at %s(%s).\n%s\n";
var G__52776 = cause_type;
var G__52777 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__52778 = loc;
var G__52779 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__52775,G__52776,G__52777,G__52778,G__52779) : format.call(null,G__52775,G__52776,G__52777,G__52778,G__52779));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52733__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

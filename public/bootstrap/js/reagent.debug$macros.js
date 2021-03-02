goog.provide('reagent.debug$macros');
var ret__4785__auto___36798 = (function (){
/**
 * Print with console.log, if it exists.
 */
reagent.debug$macros.log = (function reagent$debug$macros$log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36799 = arguments.length;
var i__4737__auto___36800 = (0);
while(true){
if((i__4737__auto___36800 < len__4736__auto___36799)){
args__4742__auto__.push((arguments[i__4737__auto___36800]));

var G__36801 = (i__4737__auto___36800 + (1));
i__4737__auto___36800 = G__36801;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",-1792886083,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".log",".log",565247729,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))),null,(1),null))], 0))));
}));

(reagent.debug$macros.log.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.log.cljs$lang$applyTo = (function (seq36683){
var G__36684 = cljs.core.first(seq36683);
var seq36683__$1 = cljs.core.next(seq36683);
var G__36685 = cljs.core.first(seq36683__$1);
var seq36683__$2 = cljs.core.next(seq36683__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36684,G__36685,seq36683__$2);
}));

return null;
})()
;
(reagent.debug$macros.log.cljs$lang$macro = true);

var ret__4785__auto___36812 = (function (){
/**
 * Print with console.warn.
 */
reagent.debug$macros.warn = (function reagent$debug$macros$warn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36813 = arguments.length;
var i__4737__auto___36817 = (0);
while(true){
if((i__4737__auto___36817 < len__4736__auto___36813)){
args__4742__auto__.push((arguments[i__4737__auto___36817]));

var G__36818 = (i__4737__auto___36817 + (1));
i__4737__auto___36817 = G__36818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",-1792886083,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".warn",".warn",-2099751158,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",478501764,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",-179485171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Warning: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return null;
}
}));

(reagent.debug$macros.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.warn.cljs$lang$applyTo = (function (seq36697){
var G__36698 = cljs.core.first(seq36697);
var seq36697__$1 = cljs.core.next(seq36697);
var G__36699 = cljs.core.first(seq36697__$1);
var seq36697__$2 = cljs.core.next(seq36697__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36698,G__36699,seq36697__$2);
}));

return null;
})()
;
(reagent.debug$macros.warn.cljs$lang$macro = true);

var ret__4785__auto___36833 = (function (){
reagent.debug$macros.warn_unless = (function reagent$debug$macros$warn_unless(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36834 = arguments.length;
var i__4737__auto___36835 = (0);
while(true){
if((i__4737__auto___36835 < len__4736__auto___36834)){
args__4742__auto__.push((arguments[i__4737__auto___36835]));

var G__36836 = (i__4737__auto___36835 + (1));
i__4737__auto___36835 = G__36836;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","warn","reagent.debug/warn",-503321706,null),null,(1),null)),forms))),null,(1),null))], 0))));
} else {
return null;
}
}));

(reagent.debug$macros.warn_unless.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent.debug$macros.warn_unless.cljs$lang$applyTo = (function (seq36706){
var G__36707 = cljs.core.first(seq36706);
var seq36706__$1 = cljs.core.next(seq36706);
var G__36708 = cljs.core.first(seq36706__$1);
var seq36706__$2 = cljs.core.next(seq36706__$1);
var G__36709 = cljs.core.first(seq36706__$2);
var seq36706__$3 = cljs.core.next(seq36706__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36707,G__36708,G__36709,seq36706__$3);
}));

return null;
})()
;
(reagent.debug$macros.warn_unless.cljs$lang$macro = true);

var ret__4785__auto___36843 = (function (){
/**
 * Print with console.error.
 */
reagent.debug$macros.error = (function reagent$debug$macros$error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36846 = arguments.length;
var i__4737__auto___36849 = (0);
while(true){
if((i__4737__auto___36849 < len__4736__auto___36846)){
args__4742__auto__.push((arguments[i__4737__auto___36849]));

var G__36855 = (i__4737__auto___36849 + (1));
i__4737__auto___36849 = G__36855;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",-1792886083,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".error",".error",1756007195,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",478501764,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",-179485171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",-1426368245,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),forms))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return null;
}
}));

(reagent.debug$macros.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.error.cljs$lang$applyTo = (function (seq36722){
var G__36723 = cljs.core.first(seq36722);
var seq36722__$1 = cljs.core.next(seq36722);
var G__36724 = cljs.core.first(seq36722__$1);
var seq36722__$2 = cljs.core.next(seq36722__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36723,G__36724,seq36722__$2);
}));

return null;
})()
;
(reagent.debug$macros.error.cljs$lang$macro = true);

var ret__4785__auto___36859 = (function (){
/**
 * Print string with console.log
 */
reagent.debug$macros.println = (function reagent$debug$macros$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36860 = arguments.length;
var i__4737__auto___36861 = (0);
while(true){
if((i__4737__auto___36861 < len__4736__auto___36860)){
args__4742__auto__.push((arguments[i__4737__auto___36861]));

var G__36862 = (i__4737__auto___36861 + (1));
i__4737__auto___36861 = G__36862;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",-528007284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),forms))),null,(1),null)))));
}));

(reagent.debug$macros.println.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.println.cljs$lang$applyTo = (function (seq36731){
var G__36732 = cljs.core.first(seq36731);
var seq36731__$1 = cljs.core.next(seq36731);
var G__36733 = cljs.core.first(seq36731__$1);
var seq36731__$2 = cljs.core.next(seq36731__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36732,G__36733,seq36731__$2);
}));

return null;
})()
;
(reagent.debug$macros.println.cljs$lang$macro = true);

var ret__4785__auto___36867 = (function (){
/**
 * Like standard prn, but prints using console.log (so that we get
 * nice clickable links to source in modern browsers).
 */
reagent.debug$macros.prn = (function reagent$debug$macros$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36868 = arguments.length;
var i__4737__auto___36869 = (0);
while(true){
if((i__4737__auto___36869 < len__4736__auto___36868)){
args__4742__auto__.push((arguments[i__4737__auto___36869]));

var G__36870 = (i__4737__auto___36869 + (1));
i__4737__auto___36869 = G__36870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",-528007284,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),forms))),null,(1),null)))));
}));

(reagent.debug$macros.prn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.prn.cljs$lang$applyTo = (function (seq36739){
var G__36740 = cljs.core.first(seq36739);
var seq36739__$1 = cljs.core.next(seq36739);
var G__36741 = cljs.core.first(seq36739__$1);
var seq36739__$2 = cljs.core.next(seq36739__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36740,G__36741,seq36739__$2);
}));

return null;
})()
;
(reagent.debug$macros.prn.cljs$lang$macro = true);

var ret__4785__auto___36871 = /**
 * Useful debugging macro that prints the source and value of x,
 * as well as package name and line number. Returns x.
 */
reagent.debug$macros.dbg = (function reagent$debug$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"x__36748__auto__","x__36748__auto__",327766388,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"dbg ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ns,null,(1),null)),(new cljs.core.List(null,":",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form)),null,(1),null)),(new cljs.core.List(null,": ",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),null,(1),null)),(new cljs.core.List(null,": ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36748__auto__","x__36748__auto__",327766388,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36748__auto__","x__36748__auto__",327766388,null),null,(1),null))], 0))));
});
(reagent.debug$macros.dbg.cljs$lang$macro = true);

var ret__4785__auto___36874 = /**
 * True if assertions are enabled.
 */
reagent.debug$macros.dev_QMARK_ = (function reagent$debug$macros$dev_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return true;
} else {
return false;
}
});
(reagent.debug$macros.dev_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36875 = (function (){
reagent.debug$macros.time = (function reagent$debug$macros$time(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36876 = arguments.length;
var i__4737__auto___36877 = (0);
while(true){
if((i__4737__auto___36877 < len__4736__auto___36876)){
args__4742__auto__.push((arguments[i__4737__auto___36877]));

var G__36879 = (i__4737__auto___36877 + (1));
i__4737__auto___36877 = G__36879;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_);
var label = [ns,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form)))].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"label__36768__auto__","label__36768__auto__",-392030331,null),null,(1),null)),(new cljs.core.List(null,label,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"res__36769__auto__","res__36769__auto__",-335105041,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","console.time","js/console.time",891683584,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__36768__auto__","label__36768__auto__",-392030331,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","console.timeEnd","js/console.timeEnd",274714029,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__36768__auto__","label__36768__auto__",-392030331,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__36769__auto__","res__36769__auto__",-335105041,null),null,(1),null))], 0))));
}));

(reagent.debug$macros.time.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.time.cljs$lang$applyTo = (function (seq36774){
var G__36775 = cljs.core.first(seq36774);
var seq36774__$1 = cljs.core.next(seq36774);
var G__36776 = cljs.core.first(seq36774__$1);
var seq36774__$2 = cljs.core.next(seq36774__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36775,G__36776,seq36774__$2);
}));

return null;
})()
;
(reagent.debug$macros.time.cljs$lang$macro = true);

var ret__4785__auto___36886 = reagent.debug$macros.assert_some = (function reagent$debug$macros$assert_some(_AMPERSAND_form,_AMPERSAND_env,value,tag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,tag,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," must not be nil",null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_some.cljs$lang$macro = true);

var ret__4785__auto___36900 = reagent.debug$macros.assert_component = (function reagent$debug$macros$assert_component(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("comp","reagent-component?","comp/reagent-component?",1494246810,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected a reagent component, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_component.cljs$lang$macro = true);

var ret__4785__auto___36902 = reagent.debug$macros.assert_js_object = (function reagent$debug$macros$assert_js_object(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected a JS object, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_js_object.cljs$lang$macro = true);

var ret__4785__auto___36910 = reagent.debug$macros.assert_new_state = (function reagent$debug$macros$assert_new_state(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected a valid new state, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_new_state.cljs$lang$macro = true);

var ret__4785__auto___36929 = reagent.debug$macros.assert_callable = (function reagent$debug$macros$assert_callable(_AMPERSAND_form,_AMPERSAND_env,value){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ifn?","cljs.core/ifn?",1573873861,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Expected something callable, not ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,value,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(reagent.debug$macros.assert_callable.cljs$lang$macro = true);


//# sourceMappingURL=reagent.debug$macros.js.map

goog.provide('reagent.core$macros');
var ret__4785__auto___37300 = (function (){
/**
 * Bind variables as with let, except that when used in a component
 *   the bindings are only evaluated once. Also takes an optional finally
 *   clause at the end, that is executed when the component is
 *   destroyed.
 */
reagent.core$macros.with_let = (function reagent$core$macros$with_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37301 = arguments.length;
var i__4737__auto___37302 = (0);
while(true){
if((i__4737__auto___37302 < len__4736__auto___37301)){
args__4742__auto__.push((arguments[i__4737__auto___37302]));

var G__37303 = (i__4737__auto___37302 + (1));
i__4737__auto___37302 = G__37303;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("ra","with-let","ra/with-let",-1310105773,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(reagent.core$macros.with_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent.core$macros.with_let.cljs$lang$applyTo = (function (seq37273){
var G__37274 = cljs.core.first(seq37273);
var seq37273__$1 = cljs.core.next(seq37273);
var G__37275 = cljs.core.first(seq37273__$1);
var seq37273__$2 = cljs.core.next(seq37273__$1);
var G__37276 = cljs.core.first(seq37273__$2);
var seq37273__$3 = cljs.core.next(seq37273__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37274,G__37275,G__37276,seq37273__$3);
}));

return null;
})()
;
(reagent.core$macros.with_let.cljs$lang$macro = true);


//# sourceMappingURL=reagent.core$macros.js.map

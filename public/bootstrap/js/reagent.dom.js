goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__34730 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__34731 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__34731);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__34735 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__34736 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__34736);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__34735);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__34730);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__34746 = arguments.length;
switch (G__34746) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__34748 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__34757_34802 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__34758_34803 = null;
var count__34759_34804 = (0);
var i__34760_34805 = (0);
while(true){
if((i__34760_34805 < count__34759_34804)){
var vec__34778_34811 = chunk__34758_34803.cljs$core$IIndexed$_nth$arity$2(null,i__34760_34805);
var container_34812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778_34811,(0),null);
var comp_34813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778_34811,(1),null);
reagent.dom.re_render_component(comp_34813,container_34812);


var G__34814 = seq__34757_34802;
var G__34815 = chunk__34758_34803;
var G__34816 = count__34759_34804;
var G__34817 = (i__34760_34805 + (1));
seq__34757_34802 = G__34814;
chunk__34758_34803 = G__34815;
count__34759_34804 = G__34816;
i__34760_34805 = G__34817;
continue;
} else {
var temp__5735__auto___34818 = cljs.core.seq(seq__34757_34802);
if(temp__5735__auto___34818){
var seq__34757_34819__$1 = temp__5735__auto___34818;
if(cljs.core.chunked_seq_QMARK_(seq__34757_34819__$1)){
var c__4556__auto___34820 = cljs.core.chunk_first(seq__34757_34819__$1);
var G__34821 = cljs.core.chunk_rest(seq__34757_34819__$1);
var G__34822 = c__4556__auto___34820;
var G__34823 = cljs.core.count(c__4556__auto___34820);
var G__34824 = (0);
seq__34757_34802 = G__34821;
chunk__34758_34803 = G__34822;
count__34759_34804 = G__34823;
i__34760_34805 = G__34824;
continue;
} else {
var vec__34785_34825 = cljs.core.first(seq__34757_34819__$1);
var container_34826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_34825,(0),null);
var comp_34827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785_34825,(1),null);
reagent.dom.re_render_component(comp_34827,container_34826);


var G__34828 = cljs.core.next(seq__34757_34819__$1);
var G__34829 = null;
var G__34830 = (0);
var G__34831 = (0);
seq__34757_34802 = G__34828;
chunk__34758_34803 = G__34829;
count__34759_34804 = G__34830;
i__34760_34805 = G__34831;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

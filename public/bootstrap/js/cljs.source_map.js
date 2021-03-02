goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__31204){
var vec__31205 = p__31204;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__31217 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31217,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__31229 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31229,(4),null);
var vec__31232 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31232,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__31261 = segmap;
var map__31261__$1 = (((((!((map__31261 == null))))?(((((map__31261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31261):map__31261);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31261__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31261__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31261__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31261__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__31281 = arguments.length;
switch (G__31281) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__31297 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__32915 = cljs.core.next(segs__$1);
var G__32916 = nrelseg;
var G__32917 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__32915;
relseg__$1 = G__32916;
result__$1 = G__32917;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31297,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31297,(1),null);
var G__32918 = (gline + (1));
var G__32919 = cljs.core.next(lines__$1);
var G__32920 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__32921 = result__$1;
gline = G__32918;
lines__$1 = G__32919;
relseg = G__32920;
result = G__32921;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__31315 = segmap;
var map__31315__$1 = (((((!((map__31315 == null))))?(((((map__31315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31315):map__31315);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31315__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31315__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31315__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31315__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__31314_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__31314_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__31327 = arguments.length;
switch (G__31327) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__31344 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__32942 = cljs.core.next(segs__$1);
var G__32943 = nrelseg;
var G__32944 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__32942;
relseg__$1 = G__32943;
result__$1 = G__32944;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31344,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31344,(1),null);
var G__32946 = (gline + (1));
var G__32947 = cljs.core.next(lines__$1);
var G__32948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__32949 = result__$1;
gline = G__32946;
lines__$1 = G__32947;
relseg = G__32948;
result = G__32949;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__31360){
var vec__31365 = p__31360;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31365,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__31371){
var vec__31374 = p__31371;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31374,(4),null);
var seg = vec__31374;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__31382){
var vec__31385 = p__31382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__31411 = cljs.core.seq(infos);
var chunk__31412 = null;
var count__31413 = (0);
var i__31414 = (0);
while(true){
if((i__31414 < count__31413)){
var info = chunk__31412.cljs$core$IIndexed$_nth$arity$2(null,i__31414);
var segv_32975 = info__GT_segv(info,source_idx,line,col);
var gline_32976 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32977 = cljs.core.count(cljs.core.deref(lines));
if((gline_32976 > (lc_32977 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__31411,chunk__31412,count__31413,i__31414,segv_32975,gline_32976,lc_32977,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_32976 - (lc_32977 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32975], null));
});})(seq__31411,chunk__31412,count__31413,i__31414,segv_32975,gline_32976,lc_32977,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__31411,chunk__31412,count__31413,i__31414,segv_32975,gline_32976,lc_32977,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32976], null),cljs.core.conj,segv_32975);
});})(seq__31411,chunk__31412,count__31413,i__31414,segv_32975,gline_32976,lc_32977,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__32990 = seq__31411;
var G__32991 = chunk__31412;
var G__32992 = count__31413;
var G__32993 = (i__31414 + (1));
seq__31411 = G__32990;
chunk__31412 = G__32991;
count__31413 = G__32992;
i__31414 = G__32993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31411);
if(temp__5735__auto__){
var seq__31411__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31411__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31411__$1);
var G__32998 = cljs.core.chunk_rest(seq__31411__$1);
var G__32999 = c__4556__auto__;
var G__33000 = cljs.core.count(c__4556__auto__);
var G__33001 = (0);
seq__31411 = G__32998;
chunk__31412 = G__32999;
count__31413 = G__33000;
i__31414 = G__33001;
continue;
} else {
var info = cljs.core.first(seq__31411__$1);
var segv_33006 = info__GT_segv(info,source_idx,line,col);
var gline_33007 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_33008 = cljs.core.count(cljs.core.deref(lines));
if((gline_33007 > (lc_33008 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__31411,chunk__31412,count__31413,i__31414,segv_33006,gline_33007,lc_33008,info,seq__31411__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_33007 - (lc_33008 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_33006], null));
});})(seq__31411,chunk__31412,count__31413,i__31414,segv_33006,gline_33007,lc_33008,info,seq__31411__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__31411,chunk__31412,count__31413,i__31414,segv_33006,gline_33007,lc_33008,info,seq__31411__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33007], null),cljs.core.conj,segv_33006);
});})(seq__31411,chunk__31412,count__31413,i__31414,segv_33006,gline_33007,lc_33008,info,seq__31411__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__33015 = cljs.core.next(seq__31411__$1);
var G__33016 = null;
var G__33017 = (0);
var G__33018 = (0);
seq__31411 = G__33015;
chunk__31412 = G__33016;
count__31413 = G__33017;
i__31414 = G__33018;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__31444_33020 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__31445_33021 = null;
var count__31446_33022 = (0);
var i__31447_33023 = (0);
while(true){
if((i__31447_33023 < count__31446_33022)){
var vec__31827_33025 = chunk__31445_33021.cljs$core$IIndexed$_nth$arity$2(null,i__31447_33023);
var source_idx_33026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31827_33025,(0),null);
var vec__31830_33027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31827_33025,(1),null);
var __33028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31830_33027,(0),null);
var lines_33029__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31830_33027,(1),null);
var seq__31834_33034 = cljs.core.seq(lines_33029__$1);
var chunk__31835_33035 = null;
var count__31836_33036 = (0);
var i__31837_33037 = (0);
while(true){
if((i__31837_33037 < count__31836_33036)){
var vec__31934_33043 = chunk__31835_33035.cljs$core$IIndexed$_nth$arity$2(null,i__31837_33037);
var line_33044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31934_33043,(0),null);
var cols_33045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31934_33043,(1),null);
var seq__31939_33046 = cljs.core.seq(cols_33045);
var chunk__31940_33047 = null;
var count__31941_33048 = (0);
var i__31942_33049 = (0);
while(true){
if((i__31942_33049 < count__31941_33048)){
var vec__31965_33052 = chunk__31940_33047.cljs$core$IIndexed$_nth$arity$2(null,i__31942_33049);
var col_33053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31965_33052,(0),null);
var infos_33054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31965_33052,(1),null);
encode_cols(infos_33054,source_idx_33026,line_33044,col_33053);


var G__33055 = seq__31939_33046;
var G__33056 = chunk__31940_33047;
var G__33057 = count__31941_33048;
var G__33058 = (i__31942_33049 + (1));
seq__31939_33046 = G__33055;
chunk__31940_33047 = G__33056;
count__31941_33048 = G__33057;
i__31942_33049 = G__33058;
continue;
} else {
var temp__5735__auto___33059 = cljs.core.seq(seq__31939_33046);
if(temp__5735__auto___33059){
var seq__31939_33060__$1 = temp__5735__auto___33059;
if(cljs.core.chunked_seq_QMARK_(seq__31939_33060__$1)){
var c__4556__auto___33061 = cljs.core.chunk_first(seq__31939_33060__$1);
var G__33066 = cljs.core.chunk_rest(seq__31939_33060__$1);
var G__33067 = c__4556__auto___33061;
var G__33068 = cljs.core.count(c__4556__auto___33061);
var G__33069 = (0);
seq__31939_33046 = G__33066;
chunk__31940_33047 = G__33067;
count__31941_33048 = G__33068;
i__31942_33049 = G__33069;
continue;
} else {
var vec__31972_33070 = cljs.core.first(seq__31939_33060__$1);
var col_33071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972_33070,(0),null);
var infos_33072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31972_33070,(1),null);
encode_cols(infos_33072,source_idx_33026,line_33044,col_33071);


var G__33076 = cljs.core.next(seq__31939_33060__$1);
var G__33077 = null;
var G__33078 = (0);
var G__33079 = (0);
seq__31939_33046 = G__33076;
chunk__31940_33047 = G__33077;
count__31941_33048 = G__33078;
i__31942_33049 = G__33079;
continue;
}
} else {
}
}
break;
}


var G__33082 = seq__31834_33034;
var G__33083 = chunk__31835_33035;
var G__33084 = count__31836_33036;
var G__33085 = (i__31837_33037 + (1));
seq__31834_33034 = G__33082;
chunk__31835_33035 = G__33083;
count__31836_33036 = G__33084;
i__31837_33037 = G__33085;
continue;
} else {
var temp__5735__auto___33087 = cljs.core.seq(seq__31834_33034);
if(temp__5735__auto___33087){
var seq__31834_33088__$1 = temp__5735__auto___33087;
if(cljs.core.chunked_seq_QMARK_(seq__31834_33088__$1)){
var c__4556__auto___33089 = cljs.core.chunk_first(seq__31834_33088__$1);
var G__33090 = cljs.core.chunk_rest(seq__31834_33088__$1);
var G__33091 = c__4556__auto___33089;
var G__33092 = cljs.core.count(c__4556__auto___33089);
var G__33093 = (0);
seq__31834_33034 = G__33090;
chunk__31835_33035 = G__33091;
count__31836_33036 = G__33092;
i__31837_33037 = G__33093;
continue;
} else {
var vec__31977_33094 = cljs.core.first(seq__31834_33088__$1);
var line_33095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31977_33094,(0),null);
var cols_33096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31977_33094,(1),null);
var seq__31983_33099 = cljs.core.seq(cols_33096);
var chunk__31984_33100 = null;
var count__31985_33101 = (0);
var i__31986_33102 = (0);
while(true){
if((i__31986_33102 < count__31985_33101)){
var vec__31999_33103 = chunk__31984_33100.cljs$core$IIndexed$_nth$arity$2(null,i__31986_33102);
var col_33104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31999_33103,(0),null);
var infos_33105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31999_33103,(1),null);
encode_cols(infos_33105,source_idx_33026,line_33095,col_33104);


var G__33107 = seq__31983_33099;
var G__33108 = chunk__31984_33100;
var G__33109 = count__31985_33101;
var G__33110 = (i__31986_33102 + (1));
seq__31983_33099 = G__33107;
chunk__31984_33100 = G__33108;
count__31985_33101 = G__33109;
i__31986_33102 = G__33110;
continue;
} else {
var temp__5735__auto___33115__$1 = cljs.core.seq(seq__31983_33099);
if(temp__5735__auto___33115__$1){
var seq__31983_33116__$1 = temp__5735__auto___33115__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31983_33116__$1)){
var c__4556__auto___33117 = cljs.core.chunk_first(seq__31983_33116__$1);
var G__33118 = cljs.core.chunk_rest(seq__31983_33116__$1);
var G__33119 = c__4556__auto___33117;
var G__33120 = cljs.core.count(c__4556__auto___33117);
var G__33121 = (0);
seq__31983_33099 = G__33118;
chunk__31984_33100 = G__33119;
count__31985_33101 = G__33120;
i__31986_33102 = G__33121;
continue;
} else {
var vec__32005_33124 = cljs.core.first(seq__31983_33116__$1);
var col_33125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32005_33124,(0),null);
var infos_33126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32005_33124,(1),null);
encode_cols(infos_33126,source_idx_33026,line_33095,col_33125);


var G__33129 = cljs.core.next(seq__31983_33116__$1);
var G__33130 = null;
var G__33131 = (0);
var G__33132 = (0);
seq__31983_33099 = G__33129;
chunk__31984_33100 = G__33130;
count__31985_33101 = G__33131;
i__31986_33102 = G__33132;
continue;
}
} else {
}
}
break;
}


var G__33135 = cljs.core.next(seq__31834_33088__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__31834_33034 = G__33135;
chunk__31835_33035 = G__33136;
count__31836_33036 = G__33137;
i__31837_33037 = G__33138;
continue;
}
} else {
}
}
break;
}


var G__33141 = seq__31444_33020;
var G__33142 = chunk__31445_33021;
var G__33143 = count__31446_33022;
var G__33144 = (i__31447_33023 + (1));
seq__31444_33020 = G__33141;
chunk__31445_33021 = G__33142;
count__31446_33022 = G__33143;
i__31447_33023 = G__33144;
continue;
} else {
var temp__5735__auto___33146 = cljs.core.seq(seq__31444_33020);
if(temp__5735__auto___33146){
var seq__31444_33147__$1 = temp__5735__auto___33146;
if(cljs.core.chunked_seq_QMARK_(seq__31444_33147__$1)){
var c__4556__auto___33149 = cljs.core.chunk_first(seq__31444_33147__$1);
var G__33152 = cljs.core.chunk_rest(seq__31444_33147__$1);
var G__33153 = c__4556__auto___33149;
var G__33154 = cljs.core.count(c__4556__auto___33149);
var G__33155 = (0);
seq__31444_33020 = G__33152;
chunk__31445_33021 = G__33153;
count__31446_33022 = G__33154;
i__31447_33023 = G__33155;
continue;
} else {
var vec__32018_33156 = cljs.core.first(seq__31444_33147__$1);
var source_idx_33157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32018_33156,(0),null);
var vec__32021_33158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32018_33156,(1),null);
var __33159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32021_33158,(0),null);
var lines_33160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32021_33158,(1),null);
var seq__32024_33161 = cljs.core.seq(lines_33160__$1);
var chunk__32025_33162 = null;
var count__32026_33163 = (0);
var i__32027_33164 = (0);
while(true){
if((i__32027_33164 < count__32026_33163)){
var vec__32103_33165 = chunk__32025_33162.cljs$core$IIndexed$_nth$arity$2(null,i__32027_33164);
var line_33166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32103_33165,(0),null);
var cols_33167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32103_33165,(1),null);
var seq__32108_33168 = cljs.core.seq(cols_33167);
var chunk__32109_33169 = null;
var count__32110_33170 = (0);
var i__32111_33171 = (0);
while(true){
if((i__32111_33171 < count__32110_33170)){
var vec__32127_33173 = chunk__32109_33169.cljs$core$IIndexed$_nth$arity$2(null,i__32111_33171);
var col_33174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32127_33173,(0),null);
var infos_33175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32127_33173,(1),null);
encode_cols(infos_33175,source_idx_33157,line_33166,col_33174);


var G__33176 = seq__32108_33168;
var G__33177 = chunk__32109_33169;
var G__33178 = count__32110_33170;
var G__33179 = (i__32111_33171 + (1));
seq__32108_33168 = G__33176;
chunk__32109_33169 = G__33177;
count__32110_33170 = G__33178;
i__32111_33171 = G__33179;
continue;
} else {
var temp__5735__auto___33180__$1 = cljs.core.seq(seq__32108_33168);
if(temp__5735__auto___33180__$1){
var seq__32108_33182__$1 = temp__5735__auto___33180__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32108_33182__$1)){
var c__4556__auto___33183 = cljs.core.chunk_first(seq__32108_33182__$1);
var G__33185 = cljs.core.chunk_rest(seq__32108_33182__$1);
var G__33186 = c__4556__auto___33183;
var G__33187 = cljs.core.count(c__4556__auto___33183);
var G__33188 = (0);
seq__32108_33168 = G__33185;
chunk__32109_33169 = G__33186;
count__32110_33170 = G__33187;
i__32111_33171 = G__33188;
continue;
} else {
var vec__32130_33192 = cljs.core.first(seq__32108_33182__$1);
var col_33193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130_33192,(0),null);
var infos_33194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32130_33192,(1),null);
encode_cols(infos_33194,source_idx_33157,line_33166,col_33193);


var G__33198 = cljs.core.next(seq__32108_33182__$1);
var G__33199 = null;
var G__33200 = (0);
var G__33201 = (0);
seq__32108_33168 = G__33198;
chunk__32109_33169 = G__33199;
count__32110_33170 = G__33200;
i__32111_33171 = G__33201;
continue;
}
} else {
}
}
break;
}


var G__33204 = seq__32024_33161;
var G__33205 = chunk__32025_33162;
var G__33206 = count__32026_33163;
var G__33207 = (i__32027_33164 + (1));
seq__32024_33161 = G__33204;
chunk__32025_33162 = G__33205;
count__32026_33163 = G__33206;
i__32027_33164 = G__33207;
continue;
} else {
var temp__5735__auto___33210__$1 = cljs.core.seq(seq__32024_33161);
if(temp__5735__auto___33210__$1){
var seq__32024_33211__$1 = temp__5735__auto___33210__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32024_33211__$1)){
var c__4556__auto___33214 = cljs.core.chunk_first(seq__32024_33211__$1);
var G__33215 = cljs.core.chunk_rest(seq__32024_33211__$1);
var G__33216 = c__4556__auto___33214;
var G__33217 = cljs.core.count(c__4556__auto___33214);
var G__33218 = (0);
seq__32024_33161 = G__33215;
chunk__32025_33162 = G__33216;
count__32026_33163 = G__33217;
i__32027_33164 = G__33218;
continue;
} else {
var vec__32134_33219 = cljs.core.first(seq__32024_33211__$1);
var line_33220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32134_33219,(0),null);
var cols_33221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32134_33219,(1),null);
var seq__32137_33222 = cljs.core.seq(cols_33221);
var chunk__32138_33223 = null;
var count__32139_33224 = (0);
var i__32140_33225 = (0);
while(true){
if((i__32140_33225 < count__32139_33224)){
var vec__32150_33226 = chunk__32138_33223.cljs$core$IIndexed$_nth$arity$2(null,i__32140_33225);
var col_33227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32150_33226,(0),null);
var infos_33228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32150_33226,(1),null);
encode_cols(infos_33228,source_idx_33157,line_33220,col_33227);


var G__33229 = seq__32137_33222;
var G__33230 = chunk__32138_33223;
var G__33231 = count__32139_33224;
var G__33232 = (i__32140_33225 + (1));
seq__32137_33222 = G__33229;
chunk__32138_33223 = G__33230;
count__32139_33224 = G__33231;
i__32140_33225 = G__33232;
continue;
} else {
var temp__5735__auto___33236__$2 = cljs.core.seq(seq__32137_33222);
if(temp__5735__auto___33236__$2){
var seq__32137_33237__$1 = temp__5735__auto___33236__$2;
if(cljs.core.chunked_seq_QMARK_(seq__32137_33237__$1)){
var c__4556__auto___33239 = cljs.core.chunk_first(seq__32137_33237__$1);
var G__33240 = cljs.core.chunk_rest(seq__32137_33237__$1);
var G__33241 = c__4556__auto___33239;
var G__33242 = cljs.core.count(c__4556__auto___33239);
var G__33243 = (0);
seq__32137_33222 = G__33240;
chunk__32138_33223 = G__33241;
count__32139_33224 = G__33242;
i__32140_33225 = G__33243;
continue;
} else {
var vec__32153_33244 = cljs.core.first(seq__32137_33237__$1);
var col_33245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32153_33244,(0),null);
var infos_33246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32153_33244,(1),null);
encode_cols(infos_33246,source_idx_33157,line_33220,col_33245);


var G__33247 = cljs.core.next(seq__32137_33237__$1);
var G__33248 = null;
var G__33249 = (0);
var G__33250 = (0);
seq__32137_33222 = G__33247;
chunk__32138_33223 = G__33248;
count__32139_33224 = G__33249;
i__32140_33225 = G__33250;
continue;
}
} else {
}
}
break;
}


var G__33251 = cljs.core.next(seq__32024_33211__$1);
var G__33252 = null;
var G__33253 = (0);
var G__33254 = (0);
seq__32024_33161 = G__33251;
chunk__32025_33162 = G__33252;
count__32026_33163 = G__33253;
i__32027_33164 = G__33254;
continue;
}
} else {
}
}
break;
}


var G__33255 = cljs.core.next(seq__31444_33147__$1);
var G__33256 = null;
var G__33257 = (0);
var G__33258 = (0);
seq__31444_33020 = G__33255;
chunk__31445_33021 = G__33256;
count__31446_33022 = G__33257;
i__31447_33023 = G__33258;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__32157 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__31399_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31399_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__31400_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__31400_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31403_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__31403_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__32160 = G__32157;
goog.object.set(G__32160,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__32160;
} else {
return G__32157;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__32161 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32161,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32161,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__32165 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32165,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32165,(1),null);
var G__33269 = cljs.core.next(col_map_seq);
var G__33270 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__32165,col,infos,vec__32161,line,col_map){
return (function (v,p__32168){
var map__32169 = p__32168;
var map__32169__$1 = (((((!((map__32169 == null))))?(((((map__32169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32169):map__32169);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32169__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32169__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__32165,col,infos,vec__32161,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__33269;
new_cols = G__33270;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__33276 = cljs.core.next(line_map_seq);
var G__33277 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__33276;
new_lines = G__33277;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__32173_33279 = cljs.core.seq(reverse_map);
var chunk__32174_33280 = null;
var count__32175_33281 = (0);
var i__32176_33282 = (0);
while(true){
if((i__32176_33282 < count__32175_33281)){
var vec__32458_33284 = chunk__32174_33280.cljs$core$IIndexed$_nth$arity$2(null,i__32176_33282);
var line_33285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458_33284,(0),null);
var columns_33286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32458_33284,(1),null);
var seq__32462_33290 = cljs.core.seq(columns_33286);
var chunk__32463_33291 = null;
var count__32464_33292 = (0);
var i__32465_33293 = (0);
while(true){
if((i__32465_33293 < count__32464_33292)){
var vec__32595_33296 = chunk__32463_33291.cljs$core$IIndexed$_nth$arity$2(null,i__32465_33293);
var column_33297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32595_33296,(0),null);
var column_info_33298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32595_33296,(1),null);
var seq__32600_33300 = cljs.core.seq(column_info_33298);
var chunk__32601_33301 = null;
var count__32602_33302 = (0);
var i__32603_33303 = (0);
while(true){
if((i__32603_33303 < count__32602_33302)){
var map__32624_33304 = chunk__32601_33301.cljs$core$IIndexed$_nth$arity$2(null,i__32603_33303);
var map__32624_33305__$1 = (((((!((map__32624_33304 == null))))?(((((map__32624_33304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32624_33304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32624_33304):map__32624_33304);
var gline_33306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624_33305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624_33305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32624_33305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33306], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32600_33300,chunk__32601_33301,count__32602_33302,i__32603_33303,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32624_33304,map__32624_33305__$1,gline_33306,gcol_33307,name_33308,vec__32595_33296,column_33297,column_info_33298,vec__32458_33284,line_33285,columns_33286,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33307], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33285,new cljs.core.Keyword(null,"col","col",-1959363084),column_33297,new cljs.core.Keyword(null,"name","name",1843675177),name_33308], null));
});})(seq__32600_33300,chunk__32601_33301,count__32602_33302,i__32603_33303,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32624_33304,map__32624_33305__$1,gline_33306,gcol_33307,name_33308,vec__32595_33296,column_33297,column_info_33298,vec__32458_33284,line_33285,columns_33286,inverted))
,cljs.core.sorted_map()));


var G__33327 = seq__32600_33300;
var G__33328 = chunk__32601_33301;
var G__33329 = count__32602_33302;
var G__33330 = (i__32603_33303 + (1));
seq__32600_33300 = G__33327;
chunk__32601_33301 = G__33328;
count__32602_33302 = G__33329;
i__32603_33303 = G__33330;
continue;
} else {
var temp__5735__auto___33331 = cljs.core.seq(seq__32600_33300);
if(temp__5735__auto___33331){
var seq__32600_33333__$1 = temp__5735__auto___33331;
if(cljs.core.chunked_seq_QMARK_(seq__32600_33333__$1)){
var c__4556__auto___33334 = cljs.core.chunk_first(seq__32600_33333__$1);
var G__33335 = cljs.core.chunk_rest(seq__32600_33333__$1);
var G__33336 = c__4556__auto___33334;
var G__33337 = cljs.core.count(c__4556__auto___33334);
var G__33338 = (0);
seq__32600_33300 = G__33335;
chunk__32601_33301 = G__33336;
count__32602_33302 = G__33337;
i__32603_33303 = G__33338;
continue;
} else {
var map__32635_33341 = cljs.core.first(seq__32600_33333__$1);
var map__32635_33342__$1 = (((((!((map__32635_33341 == null))))?(((((map__32635_33341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32635_33341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32635_33341):map__32635_33341);
var gline_33343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635_33342__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635_33342__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32635_33342__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33343], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32600_33300,chunk__32601_33301,count__32602_33302,i__32603_33303,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32635_33341,map__32635_33342__$1,gline_33343,gcol_33344,name_33345,seq__32600_33333__$1,temp__5735__auto___33331,vec__32595_33296,column_33297,column_info_33298,vec__32458_33284,line_33285,columns_33286,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33344], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33285,new cljs.core.Keyword(null,"col","col",-1959363084),column_33297,new cljs.core.Keyword(null,"name","name",1843675177),name_33345], null));
});})(seq__32600_33300,chunk__32601_33301,count__32602_33302,i__32603_33303,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32635_33341,map__32635_33342__$1,gline_33343,gcol_33344,name_33345,seq__32600_33333__$1,temp__5735__auto___33331,vec__32595_33296,column_33297,column_info_33298,vec__32458_33284,line_33285,columns_33286,inverted))
,cljs.core.sorted_map()));


var G__33363 = cljs.core.next(seq__32600_33333__$1);
var G__33364 = null;
var G__33365 = (0);
var G__33366 = (0);
seq__32600_33300 = G__33363;
chunk__32601_33301 = G__33364;
count__32602_33302 = G__33365;
i__32603_33303 = G__33366;
continue;
}
} else {
}
}
break;
}


var G__33369 = seq__32462_33290;
var G__33370 = chunk__32463_33291;
var G__33371 = count__32464_33292;
var G__33372 = (i__32465_33293 + (1));
seq__32462_33290 = G__33369;
chunk__32463_33291 = G__33370;
count__32464_33292 = G__33371;
i__32465_33293 = G__33372;
continue;
} else {
var temp__5735__auto___33373 = cljs.core.seq(seq__32462_33290);
if(temp__5735__auto___33373){
var seq__32462_33374__$1 = temp__5735__auto___33373;
if(cljs.core.chunked_seq_QMARK_(seq__32462_33374__$1)){
var c__4556__auto___33377 = cljs.core.chunk_first(seq__32462_33374__$1);
var G__33378 = cljs.core.chunk_rest(seq__32462_33374__$1);
var G__33379 = c__4556__auto___33377;
var G__33380 = cljs.core.count(c__4556__auto___33377);
var G__33381 = (0);
seq__32462_33290 = G__33378;
chunk__32463_33291 = G__33379;
count__32464_33292 = G__33380;
i__32465_33293 = G__33381;
continue;
} else {
var vec__32644_33383 = cljs.core.first(seq__32462_33374__$1);
var column_33384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32644_33383,(0),null);
var column_info_33385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32644_33383,(1),null);
var seq__32649_33386 = cljs.core.seq(column_info_33385);
var chunk__32650_33387 = null;
var count__32651_33388 = (0);
var i__32652_33389 = (0);
while(true){
if((i__32652_33389 < count__32651_33388)){
var map__32670_33390 = chunk__32650_33387.cljs$core$IIndexed$_nth$arity$2(null,i__32652_33389);
var map__32670_33391__$1 = (((((!((map__32670_33390 == null))))?(((((map__32670_33390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32670_33390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32670_33390):map__32670_33390);
var gline_33392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32670_33391__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32670_33391__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32670_33391__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33392], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32649_33386,chunk__32650_33387,count__32651_33388,i__32652_33389,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32670_33390,map__32670_33391__$1,gline_33392,gcol_33393,name_33394,vec__32644_33383,column_33384,column_info_33385,seq__32462_33374__$1,temp__5735__auto___33373,vec__32458_33284,line_33285,columns_33286,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33393], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33285,new cljs.core.Keyword(null,"col","col",-1959363084),column_33384,new cljs.core.Keyword(null,"name","name",1843675177),name_33394], null));
});})(seq__32649_33386,chunk__32650_33387,count__32651_33388,i__32652_33389,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32670_33390,map__32670_33391__$1,gline_33392,gcol_33393,name_33394,vec__32644_33383,column_33384,column_info_33385,seq__32462_33374__$1,temp__5735__auto___33373,vec__32458_33284,line_33285,columns_33286,inverted))
,cljs.core.sorted_map()));


var G__33405 = seq__32649_33386;
var G__33406 = chunk__32650_33387;
var G__33407 = count__32651_33388;
var G__33408 = (i__32652_33389 + (1));
seq__32649_33386 = G__33405;
chunk__32650_33387 = G__33406;
count__32651_33388 = G__33407;
i__32652_33389 = G__33408;
continue;
} else {
var temp__5735__auto___33409__$1 = cljs.core.seq(seq__32649_33386);
if(temp__5735__auto___33409__$1){
var seq__32649_33410__$1 = temp__5735__auto___33409__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32649_33410__$1)){
var c__4556__auto___33411 = cljs.core.chunk_first(seq__32649_33410__$1);
var G__33412 = cljs.core.chunk_rest(seq__32649_33410__$1);
var G__33413 = c__4556__auto___33411;
var G__33414 = cljs.core.count(c__4556__auto___33411);
var G__33415 = (0);
seq__32649_33386 = G__33412;
chunk__32650_33387 = G__33413;
count__32651_33388 = G__33414;
i__32652_33389 = G__33415;
continue;
} else {
var map__32682_33416 = cljs.core.first(seq__32649_33410__$1);
var map__32682_33417__$1 = (((((!((map__32682_33416 == null))))?(((((map__32682_33416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32682_33416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32682_33416):map__32682_33416);
var gline_33418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32682_33417__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32682_33417__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32682_33417__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33418], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32649_33386,chunk__32650_33387,count__32651_33388,i__32652_33389,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32682_33416,map__32682_33417__$1,gline_33418,gcol_33419,name_33420,seq__32649_33410__$1,temp__5735__auto___33409__$1,vec__32644_33383,column_33384,column_info_33385,seq__32462_33374__$1,temp__5735__auto___33373,vec__32458_33284,line_33285,columns_33286,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33419], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33285,new cljs.core.Keyword(null,"col","col",-1959363084),column_33384,new cljs.core.Keyword(null,"name","name",1843675177),name_33420], null));
});})(seq__32649_33386,chunk__32650_33387,count__32651_33388,i__32652_33389,seq__32462_33290,chunk__32463_33291,count__32464_33292,i__32465_33293,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32682_33416,map__32682_33417__$1,gline_33418,gcol_33419,name_33420,seq__32649_33410__$1,temp__5735__auto___33409__$1,vec__32644_33383,column_33384,column_info_33385,seq__32462_33374__$1,temp__5735__auto___33373,vec__32458_33284,line_33285,columns_33286,inverted))
,cljs.core.sorted_map()));


var G__33426 = cljs.core.next(seq__32649_33410__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__32649_33386 = G__33426;
chunk__32650_33387 = G__33427;
count__32651_33388 = G__33428;
i__32652_33389 = G__33429;
continue;
}
} else {
}
}
break;
}


var G__33432 = cljs.core.next(seq__32462_33374__$1);
var G__33433 = null;
var G__33434 = (0);
var G__33435 = (0);
seq__32462_33290 = G__33432;
chunk__32463_33291 = G__33433;
count__32464_33292 = G__33434;
i__32465_33293 = G__33435;
continue;
}
} else {
}
}
break;
}


var G__33437 = seq__32173_33279;
var G__33438 = chunk__32174_33280;
var G__33439 = count__32175_33281;
var G__33440 = (i__32176_33282 + (1));
seq__32173_33279 = G__33437;
chunk__32174_33280 = G__33438;
count__32175_33281 = G__33439;
i__32176_33282 = G__33440;
continue;
} else {
var temp__5735__auto___33443 = cljs.core.seq(seq__32173_33279);
if(temp__5735__auto___33443){
var seq__32173_33444__$1 = temp__5735__auto___33443;
if(cljs.core.chunked_seq_QMARK_(seq__32173_33444__$1)){
var c__4556__auto___33446 = cljs.core.chunk_first(seq__32173_33444__$1);
var G__33448 = cljs.core.chunk_rest(seq__32173_33444__$1);
var G__33449 = c__4556__auto___33446;
var G__33450 = cljs.core.count(c__4556__auto___33446);
var G__33451 = (0);
seq__32173_33279 = G__33448;
chunk__32174_33280 = G__33449;
count__32175_33281 = G__33450;
i__32176_33282 = G__33451;
continue;
} else {
var vec__32689_33452 = cljs.core.first(seq__32173_33444__$1);
var line_33453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32689_33452,(0),null);
var columns_33454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32689_33452,(1),null);
var seq__32695_33455 = cljs.core.seq(columns_33454);
var chunk__32696_33456 = null;
var count__32697_33457 = (0);
var i__32698_33458 = (0);
while(true){
if((i__32698_33458 < count__32697_33457)){
var vec__32797_33462 = chunk__32696_33456.cljs$core$IIndexed$_nth$arity$2(null,i__32698_33458);
var column_33463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797_33462,(0),null);
var column_info_33464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797_33462,(1),null);
var seq__32800_33467 = cljs.core.seq(column_info_33464);
var chunk__32801_33468 = null;
var count__32802_33469 = (0);
var i__32803_33470 = (0);
while(true){
if((i__32803_33470 < count__32802_33469)){
var map__32819_33471 = chunk__32801_33468.cljs$core$IIndexed$_nth$arity$2(null,i__32803_33470);
var map__32819_33472__$1 = (((((!((map__32819_33471 == null))))?(((((map__32819_33471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32819_33471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32819_33471):map__32819_33471);
var gline_33473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819_33472__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33474 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819_33472__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32819_33472__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33473], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32800_33467,chunk__32801_33468,count__32802_33469,i__32803_33470,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32819_33471,map__32819_33472__$1,gline_33473,gcol_33474,name_33475,vec__32797_33462,column_33463,column_info_33464,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33474], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33453,new cljs.core.Keyword(null,"col","col",-1959363084),column_33463,new cljs.core.Keyword(null,"name","name",1843675177),name_33475], null));
});})(seq__32800_33467,chunk__32801_33468,count__32802_33469,i__32803_33470,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32819_33471,map__32819_33472__$1,gline_33473,gcol_33474,name_33475,vec__32797_33462,column_33463,column_info_33464,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted))
,cljs.core.sorted_map()));


var G__33481 = seq__32800_33467;
var G__33482 = chunk__32801_33468;
var G__33483 = count__32802_33469;
var G__33484 = (i__32803_33470 + (1));
seq__32800_33467 = G__33481;
chunk__32801_33468 = G__33482;
count__32802_33469 = G__33483;
i__32803_33470 = G__33484;
continue;
} else {
var temp__5735__auto___33486__$1 = cljs.core.seq(seq__32800_33467);
if(temp__5735__auto___33486__$1){
var seq__32800_33487__$1 = temp__5735__auto___33486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32800_33487__$1)){
var c__4556__auto___33488 = cljs.core.chunk_first(seq__32800_33487__$1);
var G__33489 = cljs.core.chunk_rest(seq__32800_33487__$1);
var G__33490 = c__4556__auto___33488;
var G__33491 = cljs.core.count(c__4556__auto___33488);
var G__33492 = (0);
seq__32800_33467 = G__33489;
chunk__32801_33468 = G__33490;
count__32802_33469 = G__33491;
i__32803_33470 = G__33492;
continue;
} else {
var map__32823_33493 = cljs.core.first(seq__32800_33487__$1);
var map__32823_33494__$1 = (((((!((map__32823_33493 == null))))?(((((map__32823_33493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32823_33493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32823_33493):map__32823_33493);
var gline_33495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823_33494__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823_33494__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32823_33494__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33495], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32800_33467,chunk__32801_33468,count__32802_33469,i__32803_33470,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32823_33493,map__32823_33494__$1,gline_33495,gcol_33496,name_33497,seq__32800_33487__$1,temp__5735__auto___33486__$1,vec__32797_33462,column_33463,column_info_33464,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33496], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33453,new cljs.core.Keyword(null,"col","col",-1959363084),column_33463,new cljs.core.Keyword(null,"name","name",1843675177),name_33497], null));
});})(seq__32800_33467,chunk__32801_33468,count__32802_33469,i__32803_33470,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32823_33493,map__32823_33494__$1,gline_33495,gcol_33496,name_33497,seq__32800_33487__$1,temp__5735__auto___33486__$1,vec__32797_33462,column_33463,column_info_33464,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted))
,cljs.core.sorted_map()));


var G__33502 = cljs.core.next(seq__32800_33487__$1);
var G__33503 = null;
var G__33504 = (0);
var G__33505 = (0);
seq__32800_33467 = G__33502;
chunk__32801_33468 = G__33503;
count__32802_33469 = G__33504;
i__32803_33470 = G__33505;
continue;
}
} else {
}
}
break;
}


var G__33506 = seq__32695_33455;
var G__33507 = chunk__32696_33456;
var G__33508 = count__32697_33457;
var G__33509 = (i__32698_33458 + (1));
seq__32695_33455 = G__33506;
chunk__32696_33456 = G__33507;
count__32697_33457 = G__33508;
i__32698_33458 = G__33509;
continue;
} else {
var temp__5735__auto___33510__$1 = cljs.core.seq(seq__32695_33455);
if(temp__5735__auto___33510__$1){
var seq__32695_33513__$1 = temp__5735__auto___33510__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32695_33513__$1)){
var c__4556__auto___33514 = cljs.core.chunk_first(seq__32695_33513__$1);
var G__33515 = cljs.core.chunk_rest(seq__32695_33513__$1);
var G__33516 = c__4556__auto___33514;
var G__33517 = cljs.core.count(c__4556__auto___33514);
var G__33518 = (0);
seq__32695_33455 = G__33515;
chunk__32696_33456 = G__33516;
count__32697_33457 = G__33517;
i__32698_33458 = G__33518;
continue;
} else {
var vec__32831_33521 = cljs.core.first(seq__32695_33513__$1);
var column_33522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32831_33521,(0),null);
var column_info_33523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32831_33521,(1),null);
var seq__32836_33525 = cljs.core.seq(column_info_33523);
var chunk__32837_33526 = null;
var count__32838_33527 = (0);
var i__32839_33528 = (0);
while(true){
if((i__32839_33528 < count__32838_33527)){
var map__32861_33529 = chunk__32837_33526.cljs$core$IIndexed$_nth$arity$2(null,i__32839_33528);
var map__32861_33530__$1 = (((((!((map__32861_33529 == null))))?(((((map__32861_33529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32861_33529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32861_33529):map__32861_33529);
var gline_33531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861_33530__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861_33530__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861_33530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33531], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32836_33525,chunk__32837_33526,count__32838_33527,i__32839_33528,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32861_33529,map__32861_33530__$1,gline_33531,gcol_33532,name_33533,vec__32831_33521,column_33522,column_info_33523,seq__32695_33513__$1,temp__5735__auto___33510__$1,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33532], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33453,new cljs.core.Keyword(null,"col","col",-1959363084),column_33522,new cljs.core.Keyword(null,"name","name",1843675177),name_33533], null));
});})(seq__32836_33525,chunk__32837_33526,count__32838_33527,i__32839_33528,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32861_33529,map__32861_33530__$1,gline_33531,gcol_33532,name_33533,vec__32831_33521,column_33522,column_info_33523,seq__32695_33513__$1,temp__5735__auto___33510__$1,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted))
,cljs.core.sorted_map()));


var G__33541 = seq__32836_33525;
var G__33542 = chunk__32837_33526;
var G__33543 = count__32838_33527;
var G__33544 = (i__32839_33528 + (1));
seq__32836_33525 = G__33541;
chunk__32837_33526 = G__33542;
count__32838_33527 = G__33543;
i__32839_33528 = G__33544;
continue;
} else {
var temp__5735__auto___33545__$2 = cljs.core.seq(seq__32836_33525);
if(temp__5735__auto___33545__$2){
var seq__32836_33546__$1 = temp__5735__auto___33545__$2;
if(cljs.core.chunked_seq_QMARK_(seq__32836_33546__$1)){
var c__4556__auto___33547 = cljs.core.chunk_first(seq__32836_33546__$1);
var G__33548 = cljs.core.chunk_rest(seq__32836_33546__$1);
var G__33549 = c__4556__auto___33547;
var G__33550 = cljs.core.count(c__4556__auto___33547);
var G__33551 = (0);
seq__32836_33525 = G__33548;
chunk__32837_33526 = G__33549;
count__32838_33527 = G__33550;
i__32839_33528 = G__33551;
continue;
} else {
var map__32872_33553 = cljs.core.first(seq__32836_33546__$1);
var map__32872_33554__$1 = (((((!((map__32872_33553 == null))))?(((((map__32872_33553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32872_33553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32872_33553):map__32872_33553);
var gline_33555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32872_33554__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32872_33554__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32872_33554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33555], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__32836_33525,chunk__32837_33526,count__32838_33527,i__32839_33528,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32872_33553,map__32872_33554__$1,gline_33555,gcol_33556,name_33557,seq__32836_33546__$1,temp__5735__auto___33545__$2,vec__32831_33521,column_33522,column_info_33523,seq__32695_33513__$1,temp__5735__auto___33510__$1,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33556], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33453,new cljs.core.Keyword(null,"col","col",-1959363084),column_33522,new cljs.core.Keyword(null,"name","name",1843675177),name_33557], null));
});})(seq__32836_33525,chunk__32837_33526,count__32838_33527,i__32839_33528,seq__32695_33455,chunk__32696_33456,count__32697_33457,i__32698_33458,seq__32173_33279,chunk__32174_33280,count__32175_33281,i__32176_33282,map__32872_33553,map__32872_33554__$1,gline_33555,gcol_33556,name_33557,seq__32836_33546__$1,temp__5735__auto___33545__$2,vec__32831_33521,column_33522,column_info_33523,seq__32695_33513__$1,temp__5735__auto___33510__$1,vec__32689_33452,line_33453,columns_33454,seq__32173_33444__$1,temp__5735__auto___33443,inverted))
,cljs.core.sorted_map()));


var G__33568 = cljs.core.next(seq__32836_33546__$1);
var G__33569 = null;
var G__33570 = (0);
var G__33571 = (0);
seq__32836_33525 = G__33568;
chunk__32837_33526 = G__33569;
count__32838_33527 = G__33570;
i__32839_33528 = G__33571;
continue;
}
} else {
}
}
break;
}


var G__33572 = cljs.core.next(seq__32695_33513__$1);
var G__33573 = null;
var G__33574 = (0);
var G__33575 = (0);
seq__32695_33455 = G__33572;
chunk__32696_33456 = G__33573;
count__32697_33457 = G__33574;
i__32698_33458 = G__33575;
continue;
}
} else {
}
}
break;
}


var G__33579 = cljs.core.next(seq__32173_33444__$1);
var G__33580 = null;
var G__33581 = (0);
var G__33582 = (0);
seq__32173_33279 = G__33579;
chunk__32174_33280 = G__33580;
count__32175_33281 = G__33581;
i__32176_33282 = G__33582;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map

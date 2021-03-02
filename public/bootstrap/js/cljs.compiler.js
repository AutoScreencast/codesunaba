goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__35199 = s;
var map__35199__$1 = (((((!((map__35199 == null))))?(((((map__35199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35199):map__35199);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__35204 = info;
var map__35205 = G__35204;
var map__35205__$1 = (((((!((map__35205 == null))))?(((((map__35205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35205):map__35205);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__35204__$1 = G__35204;
while(true){
var d__$2 = d__$1;
var map__35216 = G__35204__$1;
var map__35216__$1 = (((((!((map__35216 == null))))?(((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35216):map__35216);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35216__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__37177 = (d__$2 + (1));
var G__37178 = shadow__$2;
d__$1 = G__37177;
G__35204__$1 = G__37178;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__35236){
var map__35237 = p__35236;
var map__35237__$1 = (((((!((map__35237 == null))))?(((((map__35237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35237):map__35237);
var name_var = map__35237__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35237__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__35241 = info;
var map__35241__$1 = (((((!((map__35241 == null))))?(((((map__35241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35241):map__35241);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35241__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__35250 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__35250) : cljs.compiler.munge.call(null,G__35250));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__35293 = arguments.length;
switch (G__35293) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__35326 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__35326.cljs$core$IFn$_invoke$arity$1 ? fexpr__35326.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__35326.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__35336 = cp;
switch (G__35336) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__35341_37211 = cljs.core.seq(s);
var chunk__35342_37212 = null;
var count__35343_37213 = (0);
var i__35344_37214 = (0);
while(true){
if((i__35344_37214 < count__35343_37213)){
var c_37215 = chunk__35342_37212.cljs$core$IIndexed$_nth$arity$2(null,i__35344_37214);
sb.append(cljs.compiler.escape_char(c_37215));


var G__37217 = seq__35341_37211;
var G__37218 = chunk__35342_37212;
var G__37219 = count__35343_37213;
var G__37220 = (i__35344_37214 + (1));
seq__35341_37211 = G__37217;
chunk__35342_37212 = G__37218;
count__35343_37213 = G__37219;
i__35344_37214 = G__37220;
continue;
} else {
var temp__5735__auto___37221 = cljs.core.seq(seq__35341_37211);
if(temp__5735__auto___37221){
var seq__35341_37222__$1 = temp__5735__auto___37221;
if(cljs.core.chunked_seq_QMARK_(seq__35341_37222__$1)){
var c__4556__auto___37225 = cljs.core.chunk_first(seq__35341_37222__$1);
var G__37226 = cljs.core.chunk_rest(seq__35341_37222__$1);
var G__37227 = c__4556__auto___37225;
var G__37228 = cljs.core.count(c__4556__auto___37225);
var G__37229 = (0);
seq__35341_37211 = G__37226;
chunk__35342_37212 = G__37227;
count__35343_37213 = G__37228;
i__35344_37214 = G__37229;
continue;
} else {
var c_37231 = cljs.core.first(seq__35341_37222__$1);
sb.append(cljs.compiler.escape_char(c_37231));


var G__37232 = cljs.core.next(seq__35341_37222__$1);
var G__37233 = null;
var G__37234 = (0);
var G__37235 = (0);
seq__35341_37211 = G__37232;
chunk__35342_37212 = G__37233;
count__35343_37213 = G__37234;
i__35344_37214 = G__37235;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35346 = cljs.core.get_global_hierarchy;
return (fexpr__35346.cljs$core$IFn$_invoke$arity$0 ? fexpr__35346.cljs$core$IFn$_invoke$arity$0() : fexpr__35346.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__35347_37239 = ast;
var map__35347_37240__$1 = (((((!((map__35347_37239 == null))))?(((((map__35347_37239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35347_37239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35347_37239):map__35347_37239);
var env_37241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35347_37240__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_37241))){
var map__35350_37242 = env_37241;
var map__35350_37243__$1 = (((((!((map__35350_37242 == null))))?(((((map__35350_37242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35350_37242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35350_37242):map__35350_37242);
var line_37244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350_37243__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35350_37243__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__35361 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__35363 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__35362 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__35362.cljs$core$IFn$_invoke$arity$1 ? fexpr__35362.cljs$core$IFn$_invoke$arity$1(G__35363) : fexpr__35362.call(null,G__35363));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__35361;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_37244 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_37245)?(column_37245 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__35382 = arguments.length;
switch (G__35382) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37263 = arguments.length;
var i__4737__auto___37264 = (0);
while(true){
if((i__4737__auto___37264 < len__4736__auto___37263)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37264]));

var G__37265 = (i__4737__auto___37264 + (1));
i__4737__auto___37264 = G__37265;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_37266 = (function (){var G__35390 = a;
if((!(typeof a === 'string'))){
return G__35390.toString();
} else {
return G__35390;
}
})();
var temp__5739__auto___37267 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___37267 == null)){
} else {
var sm_data_37268 = temp__5739__auto___37267;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_37268,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__35369_SHARP_){
return (p1__35369_SHARP_ + s_37266.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_37266], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__35401 = cljs.core.seq(xs);
var chunk__35402 = null;
var count__35403 = (0);
var i__35404 = (0);
while(true){
if((i__35404 < count__35403)){
var x = chunk__35402.cljs$core$IIndexed$_nth$arity$2(null,i__35404);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__37286 = seq__35401;
var G__37287 = chunk__35402;
var G__37288 = count__35403;
var G__37289 = (i__35404 + (1));
seq__35401 = G__37286;
chunk__35402 = G__37287;
count__35403 = G__37288;
i__35404 = G__37289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35401);
if(temp__5735__auto__){
var seq__35401__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35401__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35401__$1);
var G__37290 = cljs.core.chunk_rest(seq__35401__$1);
var G__37291 = c__4556__auto__;
var G__37292 = cljs.core.count(c__4556__auto__);
var G__37293 = (0);
seq__35401 = G__37290;
chunk__35402 = G__37291;
count__35403 = G__37292;
i__35404 = G__37293;
continue;
} else {
var x = cljs.core.first(seq__35401__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__37295 = cljs.core.next(seq__35401__$1);
var G__37296 = null;
var G__37297 = (0);
var G__37298 = (0);
seq__35401 = G__37295;
chunk__35402 = G__37296;
count__35403 = G__37297;
i__35404 = G__37298;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq35376){
var G__35377 = cljs.core.first(seq35376);
var seq35376__$1 = cljs.core.next(seq35376);
var G__35378 = cljs.core.first(seq35376__$1);
var seq35376__$2 = cljs.core.next(seq35376__$1);
var G__35379 = cljs.core.first(seq35376__$2);
var seq35376__$3 = cljs.core.next(seq35376__$2);
var G__35380 = cljs.core.first(seq35376__$3);
var seq35376__$4 = cljs.core.next(seq35376__$3);
var G__35381 = cljs.core.first(seq35376__$4);
var seq35376__$5 = cljs.core.next(seq35376__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35377,G__35378,G__35379,G__35380,G__35381,seq35376__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__35419){
var map__35420 = p__35419;
var map__35420__$1 = (((((!((map__35420 == null))))?(((((map__35420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35420):map__35420);
var m = map__35420__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__35449 = arguments.length;
switch (G__35449) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___37320 = arguments.length;
var i__4737__auto___37322 = (0);
while(true){
if((i__4737__auto___37322 < len__4736__auto___37320)){
args_arr__4757__auto__.push((arguments[i__4737__auto___37322]));

var G__37325 = (i__4737__auto___37322 + (1));
i__4737__auto___37322 = G__37325;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__35461_37340 = cljs.core.seq(xs);
var chunk__35462_37341 = null;
var count__35463_37342 = (0);
var i__35464_37343 = (0);
while(true){
if((i__35464_37343 < count__35463_37342)){
var x_37344 = chunk__35462_37341.cljs$core$IIndexed$_nth$arity$2(null,i__35464_37343);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_37344);


var G__37345 = seq__35461_37340;
var G__37346 = chunk__35462_37341;
var G__37347 = count__35463_37342;
var G__37348 = (i__35464_37343 + (1));
seq__35461_37340 = G__37345;
chunk__35462_37341 = G__37346;
count__35463_37342 = G__37347;
i__35464_37343 = G__37348;
continue;
} else {
var temp__5735__auto___37349 = cljs.core.seq(seq__35461_37340);
if(temp__5735__auto___37349){
var seq__35461_37350__$1 = temp__5735__auto___37349;
if(cljs.core.chunked_seq_QMARK_(seq__35461_37350__$1)){
var c__4556__auto___37351 = cljs.core.chunk_first(seq__35461_37350__$1);
var G__37352 = cljs.core.chunk_rest(seq__35461_37350__$1);
var G__37353 = c__4556__auto___37351;
var G__37354 = cljs.core.count(c__4556__auto___37351);
var G__37355 = (0);
seq__35461_37340 = G__37352;
chunk__35462_37341 = G__37353;
count__35463_37342 = G__37354;
i__35464_37343 = G__37355;
continue;
} else {
var x_37356 = cljs.core.first(seq__35461_37350__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_37356);


var G__37357 = cljs.core.next(seq__35461_37350__$1);
var G__37358 = null;
var G__37359 = (0);
var G__37360 = (0);
seq__35461_37340 = G__37357;
chunk__35462_37341 = G__37358;
count__35463_37342 = G__37359;
i__35464_37343 = G__37360;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq35443){
var G__35444 = cljs.core.first(seq35443);
var seq35443__$1 = cljs.core.next(seq35443);
var G__35445 = cljs.core.first(seq35443__$1);
var seq35443__$2 = cljs.core.next(seq35443__$1);
var G__35446 = cljs.core.first(seq35443__$2);
var seq35443__$3 = cljs.core.next(seq35443__$2);
var G__35447 = cljs.core.first(seq35443__$3);
var seq35443__$4 = cljs.core.next(seq35443__$3);
var G__35448 = cljs.core.first(seq35443__$4);
var seq35443__$5 = cljs.core.next(seq35443__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35444,G__35445,G__35446,G__35447,G__35448,seq35443__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35478_37367 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35479_37368 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35480_37369 = true;
var _STAR_print_fn_STAR__temp_val__35481_37370 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35480_37369);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35481_37370);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35479_37368);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35478_37367);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35489 = cljs.core.get_global_hierarchy;
return (fexpr__35489.cljs$core$IFn$_invoke$arity$0 ? fexpr__35489.cljs$core$IFn$_invoke$arity$0() : fexpr__35489.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__35498 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(1),null);
var G__35501 = ns;
var G__35502 = name;
var G__35503 = (function (){
var G__35509 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__35509) : cljs.compiler.emit_constant.call(null,G__35509));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__35501,G__35502,G__35503) : cljs.compiler.emit_record_value.call(null,G__35501,G__35502,G__35503));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__35513 = cljs.core.keys(x);
var G__35514 = cljs.core.vals(x);
var G__35515 = cljs.compiler.emit_constants_comma_sep;
var G__35516 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__35513,G__35514,G__35515,G__35516) : cljs.compiler.emit_map.call(null,G__35513,G__35514,G__35515,G__35516));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__35526 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__35527 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__35526,G__35527) : cljs.compiler.emit_with_meta.call(null,G__35526,G__35527));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__35557 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35557,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__35570 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__35570) : x.call(null,G__35570));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__35578 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__35578) : x.call(null,G__35578));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__35596 = items;
var G__35597 = (function (p1__35593_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__35593_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__35596,G__35597) : cljs.compiler.emit_js_object.call(null,G__35596,G__35597));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__35610){
var map__35612 = p__35610;
var map__35612__$1 = (((((!((map__35612 == null))))?(((((map__35612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35612):map__35612);
var ast = map__35612__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35612__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__35617 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__35617__$1 = (((((!((map__35617 == null))))?(((((map__35617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35617):map__35617);
var cenv = map__35617__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__35622 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__35629 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__35629) : cljs.compiler.es5_GT__EQ_.call(null,G__35629));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__35622,cljs.analyzer.es5_allowed);
} else {
return G__35622;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__35630 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__35630,reserved);
} else {
return G__35630;
}
})();
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__35635_37444 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__35635_37445__$1 = (((G__35635_37444 instanceof cljs.core.Keyword))?G__35635_37444.fqn:null);
switch (G__35635_37445__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__35660){
var map__35661 = p__35660;
var map__35661__$1 = (((((!((map__35661 == null))))?(((((map__35661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35661):map__35661);
var arg = map__35661__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35661__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__35672 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__35672__$1 = (((((!((map__35672 == null))))?(((((map__35672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35672):map__35672);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35672__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__35682){
var map__35684 = p__35682;
var map__35684__$1 = (((((!((map__35684 == null))))?(((((map__35684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35684):map__35684);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__35695_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__35695_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__35698 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__35698) : comma_sep.call(null,G__35698));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__35699 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__35699) : comma_sep.call(null,G__35699));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__35706){
var map__35707 = p__35706;
var map__35707__$1 = (((((!((map__35707 == null))))?(((((map__35707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35707):map__35707);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35707__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35707__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__35713){
var map__35714 = p__35713;
var map__35714__$1 = (((((!((map__35714 == null))))?(((((map__35714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35714):map__35714);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35714__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__35717_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__35717_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__35721 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__35721) : comma_sep.call(null,G__35721));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__35722){
var map__35723 = p__35722;
var map__35723__$1 = (((((!((map__35723 == null))))?(((((map__35723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35723):map__35723);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35723__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___37496 = cljs.core.seq(items);
if(temp__5735__auto___37496){
var items_37497__$1 = temp__5735__auto___37496;
var vec__35728_37498 = items_37497__$1;
var seq__35729_37499 = cljs.core.seq(vec__35728_37498);
var first__35730_37500 = cljs.core.first(seq__35729_37499);
var seq__35729_37501__$1 = cljs.core.next(seq__35729_37499);
var vec__35731_37502 = first__35730_37500;
var k_37503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731_37502,(0),null);
var v_37504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35731_37502,(1),null);
var r_37505 = seq__35729_37501__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_37503),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_37504) : emit_js_object_val.call(null,v_37504)));

var seq__35738_37508 = cljs.core.seq(r_37505);
var chunk__35739_37509 = null;
var count__35740_37510 = (0);
var i__35741_37511 = (0);
while(true){
if((i__35741_37511 < count__35740_37510)){
var vec__35749_37515 = chunk__35739_37509.cljs$core$IIndexed$_nth$arity$2(null,i__35741_37511);
var k_37516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749_37515,(0),null);
var v_37517__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35749_37515,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_37516__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_37517__$1) : emit_js_object_val.call(null,v_37517__$1)));


var G__37526 = seq__35738_37508;
var G__37527 = chunk__35739_37509;
var G__37528 = count__35740_37510;
var G__37529 = (i__35741_37511 + (1));
seq__35738_37508 = G__37526;
chunk__35739_37509 = G__37527;
count__35740_37510 = G__37528;
i__35741_37511 = G__37529;
continue;
} else {
var temp__5735__auto___37530__$1 = cljs.core.seq(seq__35738_37508);
if(temp__5735__auto___37530__$1){
var seq__35738_37531__$1 = temp__5735__auto___37530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35738_37531__$1)){
var c__4556__auto___37532 = cljs.core.chunk_first(seq__35738_37531__$1);
var G__37533 = cljs.core.chunk_rest(seq__35738_37531__$1);
var G__37534 = c__4556__auto___37532;
var G__37535 = cljs.core.count(c__4556__auto___37532);
var G__37536 = (0);
seq__35738_37508 = G__37533;
chunk__35739_37509 = G__37534;
count__35740_37510 = G__37535;
i__35741_37511 = G__37536;
continue;
} else {
var vec__35753_37541 = cljs.core.first(seq__35738_37531__$1);
var k_37542__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753_37541,(0),null);
var v_37543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753_37541,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_37542__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_37543__$1) : emit_js_object_val.call(null,v_37543__$1)));


var G__37549 = cljs.core.next(seq__35738_37531__$1);
var G__37550 = null;
var G__37551 = (0);
var G__37552 = (0);
seq__35738_37508 = G__37549;
chunk__35739_37509 = G__37550;
count__35740_37510 = G__37551;
i__35741_37511 = G__37552;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__35762){
var map__35763 = p__35762;
var map__35763__$1 = (((((!((map__35763 == null))))?(((((map__35763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35763):map__35763);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35763__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35763__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35763__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__35772){
var map__35773 = p__35772;
var map__35773__$1 = (((((!((map__35773 == null))))?(((((map__35773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35773):map__35773);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35773__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__35775){
var map__35776 = p__35775;
var map__35776__$1 = (((((!((map__35776 == null))))?(((((map__35776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35776):map__35776);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__35779){
var map__35784 = p__35779;
var map__35784__$1 = (((((!((map__35784 == null))))?(((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35784):map__35784);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__35795 = cljs.analyzer.unwrap_quote(expr);
var map__35795__$1 = (((((!((map__35795 == null))))?(((((map__35795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35795):map__35795);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__35812 = cljs.analyzer.unwrap_quote(expr);
var map__35812__$1 = (((((!((map__35812 == null))))?(((((map__35812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35812):map__35812);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35812__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35812__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35812__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__35830 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__35830.cljs$core$IFn$_invoke$arity$1 ? fexpr__35830.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__35830.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__35836){
var map__35838 = p__35836;
var map__35838__$1 = (((((!((map__35838 == null))))?(((((map__35838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35838):map__35838);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__35845){
var map__35846 = p__35845;
var map__35846__$1 = (((((!((map__35846 == null))))?(((((map__35846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35846):map__35846);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__35853_37652 = cljs.core.seq(nodes);
var chunk__35854_37653 = null;
var count__35855_37654 = (0);
var i__35856_37655 = (0);
while(true){
if((i__35856_37655 < count__35855_37654)){
var map__35902_37656 = chunk__35854_37653.cljs$core$IIndexed$_nth$arity$2(null,i__35856_37655);
var map__35902_37657__$1 = (((((!((map__35902_37656 == null))))?(((((map__35902_37656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35902_37656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35902_37656):map__35902_37656);
var ts_37658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35902_37657__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__35903_37659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35902_37657__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__35903_37660__$1 = (((((!((map__35903_37659 == null))))?(((((map__35903_37659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35903_37659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35903_37659):map__35903_37659);
var then_37661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903_37660__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__35909_37667 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_37658));
var chunk__35910_37668 = null;
var count__35911_37669 = (0);
var i__35912_37670 = (0);
while(true){
if((i__35912_37670 < count__35911_37669)){
var test_37671 = chunk__35910_37668.cljs$core$IIndexed$_nth$arity$2(null,i__35912_37670);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_37671,":");


var G__37672 = seq__35909_37667;
var G__37673 = chunk__35910_37668;
var G__37674 = count__35911_37669;
var G__37675 = (i__35912_37670 + (1));
seq__35909_37667 = G__37672;
chunk__35910_37668 = G__37673;
count__35911_37669 = G__37674;
i__35912_37670 = G__37675;
continue;
} else {
var temp__5735__auto___37677 = cljs.core.seq(seq__35909_37667);
if(temp__5735__auto___37677){
var seq__35909_37678__$1 = temp__5735__auto___37677;
if(cljs.core.chunked_seq_QMARK_(seq__35909_37678__$1)){
var c__4556__auto___37679 = cljs.core.chunk_first(seq__35909_37678__$1);
var G__37680 = cljs.core.chunk_rest(seq__35909_37678__$1);
var G__37681 = c__4556__auto___37679;
var G__37682 = cljs.core.count(c__4556__auto___37679);
var G__37683 = (0);
seq__35909_37667 = G__37680;
chunk__35910_37668 = G__37681;
count__35911_37669 = G__37682;
i__35912_37670 = G__37683;
continue;
} else {
var test_37686 = cljs.core.first(seq__35909_37678__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_37686,":");


var G__37687 = cljs.core.next(seq__35909_37678__$1);
var G__37688 = null;
var G__37689 = (0);
var G__37690 = (0);
seq__35909_37667 = G__37687;
chunk__35910_37668 = G__37688;
count__35911_37669 = G__37689;
i__35912_37670 = G__37690;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_37661);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_37661);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__37691 = seq__35853_37652;
var G__37692 = chunk__35854_37653;
var G__37693 = count__35855_37654;
var G__37694 = (i__35856_37655 + (1));
seq__35853_37652 = G__37691;
chunk__35854_37653 = G__37692;
count__35855_37654 = G__37693;
i__35856_37655 = G__37694;
continue;
} else {
var temp__5735__auto___37695 = cljs.core.seq(seq__35853_37652);
if(temp__5735__auto___37695){
var seq__35853_37696__$1 = temp__5735__auto___37695;
if(cljs.core.chunked_seq_QMARK_(seq__35853_37696__$1)){
var c__4556__auto___37707 = cljs.core.chunk_first(seq__35853_37696__$1);
var G__37708 = cljs.core.chunk_rest(seq__35853_37696__$1);
var G__37709 = c__4556__auto___37707;
var G__37710 = cljs.core.count(c__4556__auto___37707);
var G__37711 = (0);
seq__35853_37652 = G__37708;
chunk__35854_37653 = G__37709;
count__35855_37654 = G__37710;
i__35856_37655 = G__37711;
continue;
} else {
var map__35918_37713 = cljs.core.first(seq__35853_37696__$1);
var map__35918_37714__$1 = (((((!((map__35918_37713 == null))))?(((((map__35918_37713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35918_37713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35918_37713):map__35918_37713);
var ts_37715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918_37714__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__35919_37716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35918_37714__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__35919_37717__$1 = (((((!((map__35919_37716 == null))))?(((((map__35919_37716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35919_37716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35919_37716):map__35919_37716);
var then_37718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35919_37717__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__35930_37720 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_37715));
var chunk__35931_37721 = null;
var count__35932_37722 = (0);
var i__35933_37723 = (0);
while(true){
if((i__35933_37723 < count__35932_37722)){
var test_37724 = chunk__35931_37721.cljs$core$IIndexed$_nth$arity$2(null,i__35933_37723);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_37724,":");


var G__37725 = seq__35930_37720;
var G__37726 = chunk__35931_37721;
var G__37727 = count__35932_37722;
var G__37728 = (i__35933_37723 + (1));
seq__35930_37720 = G__37725;
chunk__35931_37721 = G__37726;
count__35932_37722 = G__37727;
i__35933_37723 = G__37728;
continue;
} else {
var temp__5735__auto___37731__$1 = cljs.core.seq(seq__35930_37720);
if(temp__5735__auto___37731__$1){
var seq__35930_37733__$1 = temp__5735__auto___37731__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35930_37733__$1)){
var c__4556__auto___37737 = cljs.core.chunk_first(seq__35930_37733__$1);
var G__37738 = cljs.core.chunk_rest(seq__35930_37733__$1);
var G__37739 = c__4556__auto___37737;
var G__37740 = cljs.core.count(c__4556__auto___37737);
var G__37741 = (0);
seq__35930_37720 = G__37738;
chunk__35931_37721 = G__37739;
count__35932_37722 = G__37740;
i__35933_37723 = G__37741;
continue;
} else {
var test_37742 = cljs.core.first(seq__35930_37733__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_37742,":");


var G__37744 = cljs.core.next(seq__35930_37733__$1);
var G__37745 = null;
var G__37746 = (0);
var G__37747 = (0);
seq__35930_37720 = G__37744;
chunk__35931_37721 = G__37745;
count__35932_37722 = G__37746;
i__35933_37723 = G__37747;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_37718);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_37718);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__37750 = cljs.core.next(seq__35853_37696__$1);
var G__37751 = null;
var G__37752 = (0);
var G__37753 = (0);
seq__35853_37652 = G__37750;
chunk__35854_37653 = G__37751;
count__35855_37654 = G__37752;
i__35856_37655 = G__37753;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__35958){
var map__35959 = p__35958;
var map__35959__$1 = (((((!((map__35959 == null))))?(((((map__35959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35959):map__35959);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__35974 = env;
var G__35975 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__35974,G__35975) : cljs.compiler.resolve_type.call(null,G__35974,G__35975));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__35977 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__35966_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__35966_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__35966_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__35982 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__35982,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__35982;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__35986 = env;
var G__35987 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__35986,G__35987) : cljs.compiler.resolve_type.call(null,G__35986,G__35987));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35990_SHARP_){
return cljs.compiler.resolve_type(env,p1__35990_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__36017 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__36018 = cljs.core.seq(vec__36017);
var first__36019 = cljs.core.first(seq__36018);
var seq__36018__$1 = cljs.core.next(seq__36018);
var p = first__36019;
var first__36019__$1 = cljs.core.first(seq__36018__$1);
var seq__36018__$2 = cljs.core.next(seq__36018__$1);
var ts = first__36019__$1;
var first__36019__$2 = cljs.core.first(seq__36018__$2);
var seq__36018__$3 = cljs.core.next(seq__36018__$2);
var n = first__36019__$2;
var xs = seq__36018__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__36026 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__36027 = cljs.core.seq(vec__36026);
var first__36028 = cljs.core.first(seq__36027);
var seq__36027__$1 = cljs.core.next(seq__36027);
var p = first__36028;
var first__36028__$1 = cljs.core.first(seq__36027__$1);
var seq__36027__$2 = cljs.core.next(seq__36027__$1);
var ts = first__36028__$1;
var xs = seq__36027__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__36048 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__36047 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__36047.cljs$core$IFn$_invoke$arity$1 ? fexpr__36047.cljs$core$IFn$_invoke$arity$1(G__36048) : fexpr__36047.call(null,G__36048));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__36053 = arguments.length;
switch (G__36053) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__36077 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36051_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__36051_SHARP_);
} else {
return p1__36051_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__36078 = cljs.core.seq(vec__36077);
var first__36079 = cljs.core.first(seq__36078);
var seq__36078__$1 = cljs.core.next(seq__36078);
var x = first__36079;
var ys = seq__36078__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__36089 = cljs.core.seq(ys);
var chunk__36090 = null;
var count__36091 = (0);
var i__36092 = (0);
while(true){
if((i__36092 < count__36091)){
var next_line = chunk__36090.cljs$core$IIndexed$_nth$arity$2(null,i__36092);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__37884 = seq__36089;
var G__37885 = chunk__36090;
var G__37886 = count__36091;
var G__37887 = (i__36092 + (1));
seq__36089 = G__37884;
chunk__36090 = G__37885;
count__36091 = G__37886;
i__36092 = G__37887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36089);
if(temp__5735__auto__){
var seq__36089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36089__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36089__$1);
var G__37890 = cljs.core.chunk_rest(seq__36089__$1);
var G__37891 = c__4556__auto__;
var G__37892 = cljs.core.count(c__4556__auto__);
var G__37893 = (0);
seq__36089 = G__37890;
chunk__36090 = G__37891;
count__36091 = G__37892;
i__36092 = G__37893;
continue;
} else {
var next_line = cljs.core.first(seq__36089__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__37894 = cljs.core.next(seq__36089__$1);
var G__37895 = null;
var G__37896 = (0);
var G__37897 = (0);
seq__36089 = G__37894;
chunk__36090 = G__37895;
count__36091 = G__37896;
i__36092 = G__37897;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__36100_37898 = cljs.core.seq(docs__$2);
var chunk__36101_37899 = null;
var count__36102_37900 = (0);
var i__36103_37901 = (0);
while(true){
if((i__36103_37901 < count__36102_37900)){
var e_37902 = chunk__36101_37899.cljs$core$IIndexed$_nth$arity$2(null,i__36103_37901);
if(cljs.core.truth_(e_37902)){
print_comment_lines(e_37902);
} else {
}


var G__37903 = seq__36100_37898;
var G__37904 = chunk__36101_37899;
var G__37905 = count__36102_37900;
var G__37906 = (i__36103_37901 + (1));
seq__36100_37898 = G__37903;
chunk__36101_37899 = G__37904;
count__36102_37900 = G__37905;
i__36103_37901 = G__37906;
continue;
} else {
var temp__5735__auto___37907 = cljs.core.seq(seq__36100_37898);
if(temp__5735__auto___37907){
var seq__36100_37909__$1 = temp__5735__auto___37907;
if(cljs.core.chunked_seq_QMARK_(seq__36100_37909__$1)){
var c__4556__auto___37911 = cljs.core.chunk_first(seq__36100_37909__$1);
var G__37912 = cljs.core.chunk_rest(seq__36100_37909__$1);
var G__37913 = c__4556__auto___37911;
var G__37914 = cljs.core.count(c__4556__auto___37911);
var G__37915 = (0);
seq__36100_37898 = G__37912;
chunk__36101_37899 = G__37913;
count__36102_37900 = G__37914;
i__36103_37901 = G__37915;
continue;
} else {
var e_37917 = cljs.core.first(seq__36100_37909__$1);
if(cljs.core.truth_(e_37917)){
print_comment_lines(e_37917);
} else {
}


var G__37919 = cljs.core.next(seq__36100_37909__$1);
var G__37920 = null;
var G__37921 = (0);
var G__37922 = (0);
seq__36100_37898 = G__37919;
chunk__36101_37899 = G__37920;
count__36102_37900 = G__37921;
i__36103_37901 = G__37922;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__36143_SHARP_){
return goog.string.startsWith(p1__36143_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__36162){
var map__36163 = p__36162;
var map__36163__$1 = (((((!((map__36163 == null))))?(((((map__36163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36163):map__36163);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36163__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__36180){
var map__36181 = p__36180;
var map__36181__$1 = (((((!((map__36181 == null))))?(((((map__36181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36181):map__36181);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__36189_37973 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__36190_37974 = null;
var count__36191_37975 = (0);
var i__36192_37976 = (0);
while(true){
if((i__36192_37976 < count__36191_37975)){
var vec__36213_37978 = chunk__36190_37974.cljs$core$IIndexed$_nth$arity$2(null,i__36192_37976);
var i_37979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36213_37978,(0),null);
var param_37980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36213_37978,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_37980);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__37981 = seq__36189_37973;
var G__37982 = chunk__36190_37974;
var G__37983 = count__36191_37975;
var G__37984 = (i__36192_37976 + (1));
seq__36189_37973 = G__37981;
chunk__36190_37974 = G__37982;
count__36191_37975 = G__37983;
i__36192_37976 = G__37984;
continue;
} else {
var temp__5735__auto___37986 = cljs.core.seq(seq__36189_37973);
if(temp__5735__auto___37986){
var seq__36189_37987__$1 = temp__5735__auto___37986;
if(cljs.core.chunked_seq_QMARK_(seq__36189_37987__$1)){
var c__4556__auto___37988 = cljs.core.chunk_first(seq__36189_37987__$1);
var G__37989 = cljs.core.chunk_rest(seq__36189_37987__$1);
var G__37990 = c__4556__auto___37988;
var G__37991 = cljs.core.count(c__4556__auto___37988);
var G__37992 = (0);
seq__36189_37973 = G__37989;
chunk__36190_37974 = G__37990;
count__36191_37975 = G__37991;
i__36192_37976 = G__37992;
continue;
} else {
var vec__36225_37993 = cljs.core.first(seq__36189_37987__$1);
var i_37994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225_37993,(0),null);
var param_37995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225_37993,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_37995);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__38002 = cljs.core.next(seq__36189_37987__$1);
var G__38003 = null;
var G__38004 = (0);
var G__38005 = (0);
seq__36189_37973 = G__38002;
chunk__36190_37974 = G__38003;
count__36191_37975 = G__38004;
i__36192_37976 = G__38005;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__36239_38008 = cljs.core.seq(params);
var chunk__36240_38009 = null;
var count__36241_38010 = (0);
var i__36242_38011 = (0);
while(true){
if((i__36242_38011 < count__36241_38010)){
var param_38036 = chunk__36240_38009.cljs$core$IIndexed$_nth$arity$2(null,i__36242_38011);
cljs.compiler.emit(param_38036);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38036,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38037 = seq__36239_38008;
var G__38038 = chunk__36240_38009;
var G__38039 = count__36241_38010;
var G__38040 = (i__36242_38011 + (1));
seq__36239_38008 = G__38037;
chunk__36240_38009 = G__38038;
count__36241_38010 = G__38039;
i__36242_38011 = G__38040;
continue;
} else {
var temp__5735__auto___38041 = cljs.core.seq(seq__36239_38008);
if(temp__5735__auto___38041){
var seq__36239_38042__$1 = temp__5735__auto___38041;
if(cljs.core.chunked_seq_QMARK_(seq__36239_38042__$1)){
var c__4556__auto___38043 = cljs.core.chunk_first(seq__36239_38042__$1);
var G__38044 = cljs.core.chunk_rest(seq__36239_38042__$1);
var G__38045 = c__4556__auto___38043;
var G__38046 = cljs.core.count(c__4556__auto___38043);
var G__38047 = (0);
seq__36239_38008 = G__38044;
chunk__36240_38009 = G__38045;
count__36241_38010 = G__38046;
i__36242_38011 = G__38047;
continue;
} else {
var param_38048 = cljs.core.first(seq__36239_38042__$1);
cljs.compiler.emit(param_38048);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38048,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38055 = cljs.core.next(seq__36239_38042__$1);
var G__38056 = null;
var G__38057 = (0);
var G__38058 = (0);
seq__36239_38008 = G__38055;
chunk__36240_38009 = G__38056;
count__36241_38010 = G__38057;
i__36242_38011 = G__38058;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__36258_38065 = cljs.core.seq(params);
var chunk__36259_38066 = null;
var count__36260_38067 = (0);
var i__36261_38068 = (0);
while(true){
if((i__36261_38068 < count__36260_38067)){
var param_38072 = chunk__36259_38066.cljs$core$IIndexed$_nth$arity$2(null,i__36261_38068);
cljs.compiler.emit(param_38072);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38072,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38074 = seq__36258_38065;
var G__38075 = chunk__36259_38066;
var G__38076 = count__36260_38067;
var G__38077 = (i__36261_38068 + (1));
seq__36258_38065 = G__38074;
chunk__36259_38066 = G__38075;
count__36260_38067 = G__38076;
i__36261_38068 = G__38077;
continue;
} else {
var temp__5735__auto___38080 = cljs.core.seq(seq__36258_38065);
if(temp__5735__auto___38080){
var seq__36258_38082__$1 = temp__5735__auto___38080;
if(cljs.core.chunked_seq_QMARK_(seq__36258_38082__$1)){
var c__4556__auto___38083 = cljs.core.chunk_first(seq__36258_38082__$1);
var G__38086 = cljs.core.chunk_rest(seq__36258_38082__$1);
var G__38087 = c__4556__auto___38083;
var G__38088 = cljs.core.count(c__4556__auto___38083);
var G__38089 = (0);
seq__36258_38065 = G__38086;
chunk__36259_38066 = G__38087;
count__36260_38067 = G__38088;
i__36261_38068 = G__38089;
continue;
} else {
var param_38090 = cljs.core.first(seq__36258_38082__$1);
cljs.compiler.emit(param_38090);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38090,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38091 = cljs.core.next(seq__36258_38082__$1);
var G__38092 = null;
var G__38093 = (0);
var G__38094 = (0);
seq__36258_38065 = G__38091;
chunk__36259_38066 = G__38092;
count__36260_38067 = G__38093;
i__36261_38068 = G__38094;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__36280 = cljs.core.seq(params);
var chunk__36281 = null;
var count__36282 = (0);
var i__36283 = (0);
while(true){
if((i__36283 < count__36282)){
var param = chunk__36281.cljs$core$IIndexed$_nth$arity$2(null,i__36283);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38100 = seq__36280;
var G__38101 = chunk__36281;
var G__38102 = count__36282;
var G__38103 = (i__36283 + (1));
seq__36280 = G__38100;
chunk__36281 = G__38101;
count__36282 = G__38102;
i__36283 = G__38103;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36280);
if(temp__5735__auto__){
var seq__36280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36280__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36280__$1);
var G__38106 = cljs.core.chunk_rest(seq__36280__$1);
var G__38107 = c__4556__auto__;
var G__38108 = cljs.core.count(c__4556__auto__);
var G__38109 = (0);
seq__36280 = G__38106;
chunk__36281 = G__38107;
count__36282 = G__38108;
i__36283 = G__38109;
continue;
} else {
var param = cljs.core.first(seq__36280__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38110 = cljs.core.next(seq__36280__$1);
var G__38111 = null;
var G__38112 = (0);
var G__38113 = (0);
seq__36280 = G__38110;
chunk__36281 = G__38111;
count__36282 = G__38112;
i__36283 = G__38113;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__36301){
var map__36302 = p__36301;
var map__36302__$1 = (((((!((map__36302 == null))))?(((((map__36302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36302):map__36302);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__36317){
var map__36318 = p__36317;
var map__36318__$1 = (((((!((map__36318 == null))))?(((((map__36318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36318):map__36318);
var f = map__36318__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36318__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_38132__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_38133 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_38132__$1);
var delegate_name_38134 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_38133),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_38134," = function (");

var seq__36326_38136 = cljs.core.seq(params);
var chunk__36327_38137 = null;
var count__36328_38138 = (0);
var i__36329_38139 = (0);
while(true){
if((i__36329_38139 < count__36328_38138)){
var param_38162 = chunk__36327_38137.cljs$core$IIndexed$_nth$arity$2(null,i__36329_38139);
cljs.compiler.emit(param_38162);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38162,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38165 = seq__36326_38136;
var G__38166 = chunk__36327_38137;
var G__38167 = count__36328_38138;
var G__38168 = (i__36329_38139 + (1));
seq__36326_38136 = G__38165;
chunk__36327_38137 = G__38166;
count__36328_38138 = G__38167;
i__36329_38139 = G__38168;
continue;
} else {
var temp__5735__auto___38170 = cljs.core.seq(seq__36326_38136);
if(temp__5735__auto___38170){
var seq__36326_38171__$1 = temp__5735__auto___38170;
if(cljs.core.chunked_seq_QMARK_(seq__36326_38171__$1)){
var c__4556__auto___38172 = cljs.core.chunk_first(seq__36326_38171__$1);
var G__38173 = cljs.core.chunk_rest(seq__36326_38171__$1);
var G__38174 = c__4556__auto___38172;
var G__38175 = cljs.core.count(c__4556__auto___38172);
var G__38176 = (0);
seq__36326_38136 = G__38173;
chunk__36327_38137 = G__38174;
count__36328_38138 = G__38175;
i__36329_38139 = G__38176;
continue;
} else {
var param_38179 = cljs.core.first(seq__36326_38171__$1);
cljs.compiler.emit(param_38179);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38179,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38180 = cljs.core.next(seq__36326_38171__$1);
var G__38181 = null;
var G__38182 = (0);
var G__38183 = (0);
seq__36326_38136 = G__38180;
chunk__36327_38137 = G__38181;
count__36328_38138 = G__38182;
i__36329_38139 = G__38183;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_38133," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_38203 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_38203,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_38134,".call(this,");

var seq__36334_38209 = cljs.core.seq(params);
var chunk__36335_38210 = null;
var count__36336_38211 = (0);
var i__36337_38212 = (0);
while(true){
if((i__36337_38212 < count__36336_38211)){
var param_38217 = chunk__36335_38210.cljs$core$IIndexed$_nth$arity$2(null,i__36337_38212);
cljs.compiler.emit(param_38217);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38217,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38218 = seq__36334_38209;
var G__38219 = chunk__36335_38210;
var G__38220 = count__36336_38211;
var G__38221 = (i__36337_38212 + (1));
seq__36334_38209 = G__38218;
chunk__36335_38210 = G__38219;
count__36336_38211 = G__38220;
i__36337_38212 = G__38221;
continue;
} else {
var temp__5735__auto___38223 = cljs.core.seq(seq__36334_38209);
if(temp__5735__auto___38223){
var seq__36334_38225__$1 = temp__5735__auto___38223;
if(cljs.core.chunked_seq_QMARK_(seq__36334_38225__$1)){
var c__4556__auto___38228 = cljs.core.chunk_first(seq__36334_38225__$1);
var G__38229 = cljs.core.chunk_rest(seq__36334_38225__$1);
var G__38230 = c__4556__auto___38228;
var G__38231 = cljs.core.count(c__4556__auto___38228);
var G__38232 = (0);
seq__36334_38209 = G__38229;
chunk__36335_38210 = G__38230;
count__36336_38211 = G__38231;
i__36337_38212 = G__38232;
continue;
} else {
var param_38235 = cljs.core.first(seq__36334_38225__$1);
cljs.compiler.emit(param_38235);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_38235,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__38236 = cljs.core.next(seq__36334_38225__$1);
var G__38237 = null;
var G__38238 = (0);
var G__38239 = (0);
seq__36334_38209 = G__38236;
chunk__36335_38210 = G__38237;
count__36336_38211 = G__38238;
i__36337_38212 = G__38239;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38133,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_38133,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_38132__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38133,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_38134,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_38133,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__36361){
var map__36362 = p__36361;
var map__36362__$1 = (((((!((map__36362 == null))))?(((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36362):map__36362);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36351_SHARP_){
var and__4115__auto__ = p1__36351_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__36351_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_38298__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_38299 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_38298__$1);
var maxparams_38300 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_38301 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_38299),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_38302 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__36355_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__36355_SHARP_)));
}),cljs.core.seq(mmap_38301));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_38299," = null;");

var seq__36367_38310 = cljs.core.seq(ms_38302);
var chunk__36368_38311 = null;
var count__36369_38312 = (0);
var i__36370_38313 = (0);
while(true){
if((i__36370_38313 < count__36369_38312)){
var vec__36379_38316 = chunk__36368_38311.cljs$core$IIndexed$_nth$arity$2(null,i__36370_38313);
var n_38317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36379_38316,(0),null);
var meth_38318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36379_38316,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_38317," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_38318))){
cljs.compiler.emit_variadic_fn_method(meth_38318);
} else {
cljs.compiler.emit_fn_method(meth_38318);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__38322 = seq__36367_38310;
var G__38323 = chunk__36368_38311;
var G__38324 = count__36369_38312;
var G__38325 = (i__36370_38313 + (1));
seq__36367_38310 = G__38322;
chunk__36368_38311 = G__38323;
count__36369_38312 = G__38324;
i__36370_38313 = G__38325;
continue;
} else {
var temp__5735__auto___38326 = cljs.core.seq(seq__36367_38310);
if(temp__5735__auto___38326){
var seq__36367_38327__$1 = temp__5735__auto___38326;
if(cljs.core.chunked_seq_QMARK_(seq__36367_38327__$1)){
var c__4556__auto___38329 = cljs.core.chunk_first(seq__36367_38327__$1);
var G__38330 = cljs.core.chunk_rest(seq__36367_38327__$1);
var G__38331 = c__4556__auto___38329;
var G__38332 = cljs.core.count(c__4556__auto___38329);
var G__38333 = (0);
seq__36367_38310 = G__38330;
chunk__36368_38311 = G__38331;
count__36369_38312 = G__38332;
i__36370_38313 = G__38333;
continue;
} else {
var vec__36383_38335 = cljs.core.first(seq__36367_38327__$1);
var n_38336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36383_38335,(0),null);
var meth_38337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36383_38335,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_38336," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_38337))){
cljs.compiler.emit_variadic_fn_method(meth_38337);
} else {
cljs.compiler.emit_fn_method(meth_38337);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__38341 = cljs.core.next(seq__36367_38327__$1);
var G__38342 = null;
var G__38343 = (0);
var G__38344 = (0);
seq__36367_38310 = G__38341;
chunk__36368_38311 = G__38342;
count__36369_38312 = G__38343;
i__36370_38313 = G__38344;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38299," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_38300),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_38300)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_38300));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__36387_38348 = cljs.core.seq(ms_38302);
var chunk__36388_38349 = null;
var count__36389_38350 = (0);
var i__36390_38351 = (0);
while(true){
if((i__36390_38351 < count__36389_38350)){
var vec__36408_38352 = chunk__36388_38349.cljs$core$IIndexed$_nth$arity$2(null,i__36390_38351);
var n_38353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408_38352,(0),null);
var meth_38354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408_38352,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_38354))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_38382 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_38382," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_38383 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_38382," = new cljs.core.IndexedSeq(",a_38383,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_38353,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_38300)),(((cljs.core.count(maxparams_38300) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_38382,");"], 0));
} else {
var pcnt_38385 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_38354));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_38385,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_38353,".call(this",(((pcnt_38385 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_38385,maxparams_38300)),null,(1),null)),(2),null))),");");
}


var G__38386 = seq__36387_38348;
var G__38387 = chunk__36388_38349;
var G__38388 = count__36389_38350;
var G__38389 = (i__36390_38351 + (1));
seq__36387_38348 = G__38386;
chunk__36388_38349 = G__38387;
count__36389_38350 = G__38388;
i__36390_38351 = G__38389;
continue;
} else {
var temp__5735__auto___38390 = cljs.core.seq(seq__36387_38348);
if(temp__5735__auto___38390){
var seq__36387_38391__$1 = temp__5735__auto___38390;
if(cljs.core.chunked_seq_QMARK_(seq__36387_38391__$1)){
var c__4556__auto___38392 = cljs.core.chunk_first(seq__36387_38391__$1);
var G__38393 = cljs.core.chunk_rest(seq__36387_38391__$1);
var G__38394 = c__4556__auto___38392;
var G__38395 = cljs.core.count(c__4556__auto___38392);
var G__38396 = (0);
seq__36387_38348 = G__38393;
chunk__36388_38349 = G__38394;
count__36389_38350 = G__38395;
i__36390_38351 = G__38396;
continue;
} else {
var vec__36413_38397 = cljs.core.first(seq__36387_38391__$1);
var n_38398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36413_38397,(0),null);
var meth_38399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36413_38397,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_38399))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_38400 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_38400," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_38401 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_38400," = new cljs.core.IndexedSeq(",a_38401,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_38398,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_38300)),(((cljs.core.count(maxparams_38300) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_38400,");"], 0));
} else {
var pcnt_38403 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_38399));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_38403,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_38398,".call(this",(((pcnt_38403 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_38403,maxparams_38300)),null,(1),null)),(2),null))),");");
}


var G__38404 = cljs.core.next(seq__36387_38391__$1);
var G__38405 = null;
var G__38406 = (0);
var G__38407 = (0);
seq__36387_38348 = G__38404;
chunk__36388_38349 = G__38405;
count__36389_38350 = G__38406;
i__36390_38351 = G__38407;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_38412 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_38302)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_38412,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38299,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38299,".cljs$lang$applyTo = ",cljs.core.some((function (p1__36360_SHARP_){
var vec__36425 = p1__36360_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36425,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36425,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_38302),".cljs$lang$applyTo;");
} else {
}

var seq__36428_38423 = cljs.core.seq(ms_38302);
var chunk__36429_38424 = null;
var count__36430_38425 = (0);
var i__36431_38426 = (0);
while(true){
if((i__36431_38426 < count__36430_38425)){
var vec__36448_38427 = chunk__36429_38424.cljs$core$IIndexed$_nth$arity$2(null,i__36431_38426);
var n_38428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36448_38427,(0),null);
var meth_38429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36448_38427,(1),null);
var c_38432 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_38429));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_38429))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38299,".cljs$core$IFn$_invoke$arity$variadic = ",n_38428,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_38299,".cljs$core$IFn$_invoke$arity$",c_38432," = ",n_38428,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__38442 = seq__36428_38423;
var G__38443 = chunk__36429_38424;
var G__38444 = count__36430_38425;
var G__38445 = (i__36431_38426 + (1));
seq__36428_38423 = G__38442;
chunk__36429_38424 = G__38443;
count__36430_38425 = G__38444;
i__36431_38426 = G__38445;
continue;
} else {
var temp__5735__auto___38449 = cljs.core.seq(seq__36428_38423);
if(temp__5735__auto___38449){
var seq__36428_38455__$1 = temp__5735__auto___38449;
if(cljs.core.chunked_seq_QMARK_(seq__36428_38455__$1)){
var c__4556__auto___38465 = cljs.core.chunk_first(seq__36428_38455__$1);
var G__38469 = cljs.core.chunk_rest(seq__36428_38455__$1);
var G__38470 = c__4556__auto___38465;
var G__38471 = cljs.core.count(c__4556__auto___38465);
var G__38472 = (0);
seq__36428_38423 = G__38469;
chunk__36429_38424 = G__38470;
count__36430_38425 = G__38471;
i__36431_38426 = G__38472;
continue;
} else {
var vec__36464_38473 = cljs.core.first(seq__36428_38455__$1);
var n_38474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464_38473,(0),null);
var meth_38475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464_38473,(1),null);
var c_38478 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_38475));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_38475))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_38299,".cljs$core$IFn$_invoke$arity$variadic = ",n_38474,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_38299,".cljs$core$IFn$_invoke$arity$",c_38478," = ",n_38474,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__38489 = cljs.core.next(seq__36428_38455__$1);
var G__38490 = null;
var G__38491 = (0);
var G__38492 = (0);
seq__36428_38423 = G__38489;
chunk__36429_38424 = G__38490;
count__36430_38425 = G__38491;
i__36431_38426 = G__38492;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_38299,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__36486){
var map__36488 = p__36486;
var map__36488__$1 = (((((!((map__36488 == null))))?(((((map__36488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36488):map__36488);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36488__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36488__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36488__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__36508_38518 = cljs.core.seq(statements);
var chunk__36509_38519 = null;
var count__36510_38520 = (0);
var i__36511_38521 = (0);
while(true){
if((i__36511_38521 < count__36510_38520)){
var s_38522 = chunk__36509_38519.cljs$core$IIndexed$_nth$arity$2(null,i__36511_38521);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_38522);


var G__38523 = seq__36508_38518;
var G__38524 = chunk__36509_38519;
var G__38525 = count__36510_38520;
var G__38526 = (i__36511_38521 + (1));
seq__36508_38518 = G__38523;
chunk__36509_38519 = G__38524;
count__36510_38520 = G__38525;
i__36511_38521 = G__38526;
continue;
} else {
var temp__5735__auto___38528 = cljs.core.seq(seq__36508_38518);
if(temp__5735__auto___38528){
var seq__36508_38529__$1 = temp__5735__auto___38528;
if(cljs.core.chunked_seq_QMARK_(seq__36508_38529__$1)){
var c__4556__auto___38530 = cljs.core.chunk_first(seq__36508_38529__$1);
var G__38531 = cljs.core.chunk_rest(seq__36508_38529__$1);
var G__38532 = c__4556__auto___38530;
var G__38533 = cljs.core.count(c__4556__auto___38530);
var G__38534 = (0);
seq__36508_38518 = G__38531;
chunk__36509_38519 = G__38532;
count__36510_38520 = G__38533;
i__36511_38521 = G__38534;
continue;
} else {
var s_38536 = cljs.core.first(seq__36508_38529__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_38536);


var G__38537 = cljs.core.next(seq__36508_38529__$1);
var G__38538 = null;
var G__38540 = (0);
var G__38541 = (0);
seq__36508_38518 = G__38537;
chunk__36509_38519 = G__38538;
count__36510_38520 = G__38540;
i__36511_38521 = G__38541;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__36524){
var map__36525 = p__36524;
var map__36525__$1 = (((((!((map__36525 == null))))?(((((map__36525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36525):map__36525);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36525__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36525__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36525__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36525__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__36540,is_loop){
var map__36543 = p__36540;
var map__36543__$1 = (((((!((map__36543 == null))))?(((((map__36543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36543):map__36543);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__36550_38567 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__36551_38568 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__36551_38568);

try{var seq__36554_38575 = cljs.core.seq(bindings);
var chunk__36555_38576 = null;
var count__36556_38577 = (0);
var i__36557_38578 = (0);
while(true){
if((i__36557_38578 < count__36556_38577)){
var map__36577_38579 = chunk__36555_38576.cljs$core$IIndexed$_nth$arity$2(null,i__36557_38578);
var map__36577_38580__$1 = (((((!((map__36577_38579 == null))))?(((((map__36577_38579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36577_38579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36577_38579):map__36577_38579);
var binding_38581 = map__36577_38580__$1;
var init_38582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577_38580__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_38581);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_38582,";");


var G__38585 = seq__36554_38575;
var G__38586 = chunk__36555_38576;
var G__38587 = count__36556_38577;
var G__38588 = (i__36557_38578 + (1));
seq__36554_38575 = G__38585;
chunk__36555_38576 = G__38586;
count__36556_38577 = G__38587;
i__36557_38578 = G__38588;
continue;
} else {
var temp__5735__auto___38589 = cljs.core.seq(seq__36554_38575);
if(temp__5735__auto___38589){
var seq__36554_38590__$1 = temp__5735__auto___38589;
if(cljs.core.chunked_seq_QMARK_(seq__36554_38590__$1)){
var c__4556__auto___38591 = cljs.core.chunk_first(seq__36554_38590__$1);
var G__38592 = cljs.core.chunk_rest(seq__36554_38590__$1);
var G__38593 = c__4556__auto___38591;
var G__38594 = cljs.core.count(c__4556__auto___38591);
var G__38595 = (0);
seq__36554_38575 = G__38592;
chunk__36555_38576 = G__38593;
count__36556_38577 = G__38594;
i__36557_38578 = G__38595;
continue;
} else {
var map__36584_38597 = cljs.core.first(seq__36554_38590__$1);
var map__36584_38598__$1 = (((((!((map__36584_38597 == null))))?(((((map__36584_38597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36584_38597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36584_38597):map__36584_38597);
var binding_38599 = map__36584_38598__$1;
var init_38600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36584_38598__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_38599);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_38600,";");


var G__38601 = cljs.core.next(seq__36554_38590__$1);
var G__38602 = null;
var G__38603 = (0);
var G__38604 = (0);
seq__36554_38575 = G__38601;
chunk__36555_38576 = G__38602;
count__36556_38577 = G__38603;
i__36557_38578 = G__38604;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__36550_38567);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__36600){
var map__36603 = p__36600;
var map__36603__$1 = (((((!((map__36603 == null))))?(((((map__36603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36603):map__36603);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36603__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36603__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36603__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___38605 = cljs.core.count(exprs);
var i_38606 = (0);
while(true){
if((i_38606 < n__4613__auto___38605)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_38606) : temps.call(null,i_38606))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_38606) : exprs.call(null,i_38606)),";");

var G__38608 = (i_38606 + (1));
i_38606 = G__38608;
continue;
} else {
}
break;
}

var n__4613__auto___38609 = cljs.core.count(exprs);
var i_38611 = (0);
while(true){
if((i_38611 < n__4613__auto___38609)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_38611) : params.call(null,i_38611)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_38611) : temps.call(null,i_38611)),";");

var G__38612 = (i_38611 + (1));
i_38611 = G__38612;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__36633){
var map__36634 = p__36633;
var map__36634__$1 = (((((!((map__36634 == null))))?(((((map__36634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36634):map__36634);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36634__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36634__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__36650_38613 = cljs.core.seq(bindings);
var chunk__36651_38614 = null;
var count__36652_38615 = (0);
var i__36653_38616 = (0);
while(true){
if((i__36653_38616 < count__36652_38615)){
var map__36662_38617 = chunk__36651_38614.cljs$core$IIndexed$_nth$arity$2(null,i__36653_38616);
var map__36662_38618__$1 = (((((!((map__36662_38617 == null))))?(((((map__36662_38617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36662_38617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36662_38617):map__36662_38617);
var binding_38619 = map__36662_38618__$1;
var init_38620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36662_38618__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_38619)," = ",init_38620,";");


var G__38621 = seq__36650_38613;
var G__38622 = chunk__36651_38614;
var G__38623 = count__36652_38615;
var G__38624 = (i__36653_38616 + (1));
seq__36650_38613 = G__38621;
chunk__36651_38614 = G__38622;
count__36652_38615 = G__38623;
i__36653_38616 = G__38624;
continue;
} else {
var temp__5735__auto___38625 = cljs.core.seq(seq__36650_38613);
if(temp__5735__auto___38625){
var seq__36650_38626__$1 = temp__5735__auto___38625;
if(cljs.core.chunked_seq_QMARK_(seq__36650_38626__$1)){
var c__4556__auto___38627 = cljs.core.chunk_first(seq__36650_38626__$1);
var G__38628 = cljs.core.chunk_rest(seq__36650_38626__$1);
var G__38629 = c__4556__auto___38627;
var G__38630 = cljs.core.count(c__4556__auto___38627);
var G__38631 = (0);
seq__36650_38613 = G__38628;
chunk__36651_38614 = G__38629;
count__36652_38615 = G__38630;
i__36653_38616 = G__38631;
continue;
} else {
var map__36666_38632 = cljs.core.first(seq__36650_38626__$1);
var map__36666_38633__$1 = (((((!((map__36666_38632 == null))))?(((((map__36666_38632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36666_38632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36666_38632):map__36666_38632);
var binding_38634 = map__36666_38633__$1;
var init_38635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36666_38633__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_38634)," = ",init_38635,";");


var G__38636 = cljs.core.next(seq__36650_38626__$1);
var G__38637 = null;
var G__38638 = (0);
var G__38639 = (0);
seq__36650_38613 = G__38636;
chunk__36651_38614 = G__38637;
count__36652_38615 = G__38638;
i__36653_38616 = G__38639;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__36672){
var map__36673 = p__36672;
var map__36673__$1 = (((((!((map__36673 == null))))?(((((map__36673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36673):map__36673);
var expr = map__36673__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36673__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36673__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36673__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__36745 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__36745.cljs$core$IFn$_invoke$arity$1 ? fexpr__36745.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__36745.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__36749 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__36749.cljs$core$IFn$_invoke$arity$1 ? fexpr__36749.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__36749.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__36694 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__36669_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36669_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__36670_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36670_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36694,(1),null);
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_38653 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_38653,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_38654 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_38654,args)),(((mfa_38654 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_38654,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__36781 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__36780 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__36780.cljs$core$IFn$_invoke$arity$1 ? fexpr__36780.cljs$core$IFn$_invoke$arity$1(G__36781) : fexpr__36780.call(null,G__36781));
} else {
return and__4115__auto__;
}
})())){
var fprop_38660 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_38660," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_38660,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_38660," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_38660,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__36783){
var map__36784 = p__36783;
var map__36784__$1 = (((((!((map__36784 == null))))?(((((map__36784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36784):map__36784);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36784__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36784__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__36786){
var map__36787 = p__36786;
var map__36787__$1 = (((((!((map__36787 == null))))?(((((map__36787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36787):map__36787);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__36847 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__36847__$1 = (((((!((map__36847 == null))))?(((((map__36847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36847):map__36847);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36847__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36847__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__36848 = options;
var map__36848__$1 = (((((!((map__36848 == null))))?(((((map__36848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36848):map__36848);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36848__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36848__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36848__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__36850 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__36857 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__36857__$1 = (((((!((map__36857 == null))))?(((((map__36857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36857):map__36857);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36857__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36857__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36850,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__36863_38676 = cljs.core.seq(libs_to_load);
var chunk__36864_38677 = null;
var count__36865_38678 = (0);
var i__36866_38679 = (0);
while(true){
if((i__36866_38679 < count__36865_38678)){
var lib_38680 = chunk__36864_38677.cljs$core$IIndexed$_nth$arity$2(null,i__36866_38679);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_38680)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_38680),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_38680),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_38680),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_38680),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_38680,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_38680),"');");
}

}
}
}


var G__38688 = seq__36863_38676;
var G__38689 = chunk__36864_38677;
var G__38690 = count__36865_38678;
var G__38691 = (i__36866_38679 + (1));
seq__36863_38676 = G__38688;
chunk__36864_38677 = G__38689;
count__36865_38678 = G__38690;
i__36866_38679 = G__38691;
continue;
} else {
var temp__5735__auto___38692 = cljs.core.seq(seq__36863_38676);
if(temp__5735__auto___38692){
var seq__36863_38693__$1 = temp__5735__auto___38692;
if(cljs.core.chunked_seq_QMARK_(seq__36863_38693__$1)){
var c__4556__auto___38694 = cljs.core.chunk_first(seq__36863_38693__$1);
var G__38695 = cljs.core.chunk_rest(seq__36863_38693__$1);
var G__38696 = c__4556__auto___38694;
var G__38697 = cljs.core.count(c__4556__auto___38694);
var G__38698 = (0);
seq__36863_38676 = G__38695;
chunk__36864_38677 = G__38696;
count__36865_38678 = G__38697;
i__36866_38679 = G__38698;
continue;
} else {
var lib_38700 = cljs.core.first(seq__36863_38693__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_38700)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_38700),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_38700),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_38700),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_38700),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_38700,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_38700),"');");
}

}
}
}


var G__38702 = cljs.core.next(seq__36863_38693__$1);
var G__38703 = null;
var G__38704 = (0);
var G__38705 = (0);
seq__36863_38676 = G__38702;
chunk__36864_38677 = G__38703;
count__36865_38678 = G__38704;
i__36866_38679 = G__38705;
continue;
}
} else {
}
}
break;
}

var seq__36915_38710 = cljs.core.seq(node_libs);
var chunk__36916_38711 = null;
var count__36917_38712 = (0);
var i__36918_38713 = (0);
while(true){
if((i__36918_38713 < count__36917_38712)){
var lib_38715 = chunk__36916_38711.cljs$core$IIndexed$_nth$arity$2(null,i__36918_38713);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_38715)," = require('",lib_38715,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__38716 = seq__36915_38710;
var G__38717 = chunk__36916_38711;
var G__38718 = count__36917_38712;
var G__38719 = (i__36918_38713 + (1));
seq__36915_38710 = G__38716;
chunk__36916_38711 = G__38717;
count__36917_38712 = G__38718;
i__36918_38713 = G__38719;
continue;
} else {
var temp__5735__auto___38720 = cljs.core.seq(seq__36915_38710);
if(temp__5735__auto___38720){
var seq__36915_38721__$1 = temp__5735__auto___38720;
if(cljs.core.chunked_seq_QMARK_(seq__36915_38721__$1)){
var c__4556__auto___38722 = cljs.core.chunk_first(seq__36915_38721__$1);
var G__38723 = cljs.core.chunk_rest(seq__36915_38721__$1);
var G__38724 = c__4556__auto___38722;
var G__38725 = cljs.core.count(c__4556__auto___38722);
var G__38726 = (0);
seq__36915_38710 = G__38723;
chunk__36916_38711 = G__38724;
count__36917_38712 = G__38725;
i__36918_38713 = G__38726;
continue;
} else {
var lib_38727 = cljs.core.first(seq__36915_38721__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_38727)," = require('",lib_38727,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__38728 = cljs.core.next(seq__36915_38721__$1);
var G__38729 = null;
var G__38730 = (0);
var G__38731 = (0);
seq__36915_38710 = G__38728;
chunk__36916_38711 = G__38729;
count__36917_38712 = G__38730;
i__36918_38713 = G__38731;
continue;
}
} else {
}
}
break;
}

var seq__36931_38732 = cljs.core.seq(global_exports_libs);
var chunk__36932_38733 = null;
var count__36933_38734 = (0);
var i__36934_38735 = (0);
while(true){
if((i__36934_38735 < count__36933_38734)){
var lib_38736 = chunk__36932_38733.cljs$core$IIndexed$_nth$arity$2(null,i__36934_38735);
var map__36941_38737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_38736));
var map__36941_38738__$1 = (((((!((map__36941_38737 == null))))?(((((map__36941_38737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36941_38737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36941_38737):map__36941_38737);
var global_exports_38739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36941_38738__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_38739,lib_38736);


var G__38740 = seq__36931_38732;
var G__38741 = chunk__36932_38733;
var G__38742 = count__36933_38734;
var G__38743 = (i__36934_38735 + (1));
seq__36931_38732 = G__38740;
chunk__36932_38733 = G__38741;
count__36933_38734 = G__38742;
i__36934_38735 = G__38743;
continue;
} else {
var temp__5735__auto___38744 = cljs.core.seq(seq__36931_38732);
if(temp__5735__auto___38744){
var seq__36931_38745__$1 = temp__5735__auto___38744;
if(cljs.core.chunked_seq_QMARK_(seq__36931_38745__$1)){
var c__4556__auto___38753 = cljs.core.chunk_first(seq__36931_38745__$1);
var G__38754 = cljs.core.chunk_rest(seq__36931_38745__$1);
var G__38755 = c__4556__auto___38753;
var G__38756 = cljs.core.count(c__4556__auto___38753);
var G__38757 = (0);
seq__36931_38732 = G__38754;
chunk__36932_38733 = G__38755;
count__36933_38734 = G__38756;
i__36934_38735 = G__38757;
continue;
} else {
var lib_38759 = cljs.core.first(seq__36931_38745__$1);
var map__36943_38760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_38759));
var map__36943_38761__$1 = (((((!((map__36943_38760 == null))))?(((((map__36943_38760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36943_38760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36943_38760):map__36943_38760);
var global_exports_38762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36943_38761__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_38762,lib_38759);


var G__38763 = cljs.core.next(seq__36931_38745__$1);
var G__38764 = null;
var G__38765 = (0);
var G__38766 = (0);
seq__36931_38732 = G__38763;
chunk__36932_38733 = G__38764;
count__36933_38734 = G__38765;
i__36934_38735 = G__38766;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__36945){
var map__36946 = p__36945;
var map__36946__$1 = (((((!((map__36946 == null))))?(((((map__36946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36946):map__36946);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36946__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__36968){
var map__36969 = p__36968;
var map__36969__$1 = (((((!((map__36969 == null))))?(((((map__36969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36969):map__36969);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36969__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__36978){
var map__36979 = p__36978;
var map__36979__$1 = (((((!((map__36979 == null))))?(((((map__36979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36979):map__36979);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36979__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__36983_38780 = cljs.core.seq(protocols);
var chunk__36984_38781 = null;
var count__36985_38782 = (0);
var i__36986_38783 = (0);
while(true){
if((i__36986_38783 < count__36985_38782)){
var protocol_38784 = chunk__36984_38781.cljs$core$IIndexed$_nth$arity$2(null,i__36986_38783);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_38784)),"}");


var G__38785 = seq__36983_38780;
var G__38786 = chunk__36984_38781;
var G__38787 = count__36985_38782;
var G__38788 = (i__36986_38783 + (1));
seq__36983_38780 = G__38785;
chunk__36984_38781 = G__38786;
count__36985_38782 = G__38787;
i__36986_38783 = G__38788;
continue;
} else {
var temp__5735__auto___38791 = cljs.core.seq(seq__36983_38780);
if(temp__5735__auto___38791){
var seq__36983_38792__$1 = temp__5735__auto___38791;
if(cljs.core.chunked_seq_QMARK_(seq__36983_38792__$1)){
var c__4556__auto___38795 = cljs.core.chunk_first(seq__36983_38792__$1);
var G__38796 = cljs.core.chunk_rest(seq__36983_38792__$1);
var G__38797 = c__4556__auto___38795;
var G__38798 = cljs.core.count(c__4556__auto___38795);
var G__38799 = (0);
seq__36983_38780 = G__38796;
chunk__36984_38781 = G__38797;
count__36985_38782 = G__38798;
i__36986_38783 = G__38799;
continue;
} else {
var protocol_38801 = cljs.core.first(seq__36983_38792__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_38801)),"}");


var G__38803 = cljs.core.next(seq__36983_38792__$1);
var G__38804 = null;
var G__38805 = (0);
var G__38806 = (0);
seq__36983_38780 = G__38803;
chunk__36984_38781 = G__38804;
count__36985_38782 = G__38805;
i__36986_38783 = G__38806;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__36987_38808 = cljs.core.seq(fields__$1);
var chunk__36988_38809 = null;
var count__36989_38810 = (0);
var i__36990_38811 = (0);
while(true){
if((i__36990_38811 < count__36989_38810)){
var fld_38812 = chunk__36988_38809.cljs$core$IIndexed$_nth$arity$2(null,i__36990_38811);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_38812," = ",fld_38812,";");


var G__38814 = seq__36987_38808;
var G__38815 = chunk__36988_38809;
var G__38816 = count__36989_38810;
var G__38817 = (i__36990_38811 + (1));
seq__36987_38808 = G__38814;
chunk__36988_38809 = G__38815;
count__36989_38810 = G__38816;
i__36990_38811 = G__38817;
continue;
} else {
var temp__5735__auto___38826 = cljs.core.seq(seq__36987_38808);
if(temp__5735__auto___38826){
var seq__36987_38827__$1 = temp__5735__auto___38826;
if(cljs.core.chunked_seq_QMARK_(seq__36987_38827__$1)){
var c__4556__auto___38829 = cljs.core.chunk_first(seq__36987_38827__$1);
var G__38830 = cljs.core.chunk_rest(seq__36987_38827__$1);
var G__38831 = c__4556__auto___38829;
var G__38832 = cljs.core.count(c__4556__auto___38829);
var G__38833 = (0);
seq__36987_38808 = G__38830;
chunk__36988_38809 = G__38831;
count__36989_38810 = G__38832;
i__36990_38811 = G__38833;
continue;
} else {
var fld_38834 = cljs.core.first(seq__36987_38827__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_38834," = ",fld_38834,";");


var G__38835 = cljs.core.next(seq__36987_38827__$1);
var G__38836 = null;
var G__38837 = (0);
var G__38838 = (0);
seq__36987_38808 = G__38835;
chunk__36988_38809 = G__38836;
count__36989_38810 = G__38837;
i__36990_38811 = G__38838;
continue;
}
} else {
}
}
break;
}

var seq__36991_38840 = cljs.core.seq(pmasks);
var chunk__36993_38841 = null;
var count__36994_38842 = (0);
var i__36995_38843 = (0);
while(true){
if((i__36995_38843 < count__36994_38842)){
var vec__37009_38844 = chunk__36993_38841.cljs$core$IIndexed$_nth$arity$2(null,i__36995_38843);
var pno_38845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_38844,(0),null);
var pmask_38846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37009_38844,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_38845,"$ = ",pmask_38846,";");


var G__38850 = seq__36991_38840;
var G__38851 = chunk__36993_38841;
var G__38852 = count__36994_38842;
var G__38853 = (i__36995_38843 + (1));
seq__36991_38840 = G__38850;
chunk__36993_38841 = G__38851;
count__36994_38842 = G__38852;
i__36995_38843 = G__38853;
continue;
} else {
var temp__5735__auto___38854 = cljs.core.seq(seq__36991_38840);
if(temp__5735__auto___38854){
var seq__36991_38855__$1 = temp__5735__auto___38854;
if(cljs.core.chunked_seq_QMARK_(seq__36991_38855__$1)){
var c__4556__auto___38857 = cljs.core.chunk_first(seq__36991_38855__$1);
var G__38858 = cljs.core.chunk_rest(seq__36991_38855__$1);
var G__38859 = c__4556__auto___38857;
var G__38860 = cljs.core.count(c__4556__auto___38857);
var G__38861 = (0);
seq__36991_38840 = G__38858;
chunk__36993_38841 = G__38859;
count__36994_38842 = G__38860;
i__36995_38843 = G__38861;
continue;
} else {
var vec__37016_38862 = cljs.core.first(seq__36991_38855__$1);
var pno_38863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37016_38862,(0),null);
var pmask_38864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37016_38862,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_38863,"$ = ",pmask_38864,";");


var G__38866 = cljs.core.next(seq__36991_38855__$1);
var G__38867 = null;
var G__38868 = (0);
var G__38869 = (0);
seq__36991_38840 = G__38866;
chunk__36993_38841 = G__38867;
count__36994_38842 = G__38868;
i__36995_38843 = G__38869;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__37020){
var map__37021 = p__37020;
var map__37021__$1 = (((((!((map__37021 == null))))?(((((map__37021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37021):map__37021);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37021__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__37024_38872 = cljs.core.seq(protocols);
var chunk__37025_38873 = null;
var count__37026_38874 = (0);
var i__37027_38875 = (0);
while(true){
if((i__37027_38875 < count__37026_38874)){
var protocol_38876 = chunk__37025_38873.cljs$core$IIndexed$_nth$arity$2(null,i__37027_38875);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_38876)),"}");


var G__38877 = seq__37024_38872;
var G__38878 = chunk__37025_38873;
var G__38879 = count__37026_38874;
var G__38880 = (i__37027_38875 + (1));
seq__37024_38872 = G__38877;
chunk__37025_38873 = G__38878;
count__37026_38874 = G__38879;
i__37027_38875 = G__38880;
continue;
} else {
var temp__5735__auto___38881 = cljs.core.seq(seq__37024_38872);
if(temp__5735__auto___38881){
var seq__37024_38882__$1 = temp__5735__auto___38881;
if(cljs.core.chunked_seq_QMARK_(seq__37024_38882__$1)){
var c__4556__auto___38883 = cljs.core.chunk_first(seq__37024_38882__$1);
var G__38884 = cljs.core.chunk_rest(seq__37024_38882__$1);
var G__38885 = c__4556__auto___38883;
var G__38886 = cljs.core.count(c__4556__auto___38883);
var G__38887 = (0);
seq__37024_38872 = G__38884;
chunk__37025_38873 = G__38885;
count__37026_38874 = G__38886;
i__37027_38875 = G__38887;
continue;
} else {
var protocol_38888 = cljs.core.first(seq__37024_38882__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_38888)),"}");


var G__38889 = cljs.core.next(seq__37024_38882__$1);
var G__38890 = null;
var G__38891 = (0);
var G__38892 = (0);
seq__37024_38872 = G__38889;
chunk__37025_38873 = G__38890;
count__37026_38874 = G__38891;
i__37027_38875 = G__38892;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__37031_38893 = cljs.core.seq(fields__$1);
var chunk__37032_38894 = null;
var count__37033_38895 = (0);
var i__37034_38896 = (0);
while(true){
if((i__37034_38896 < count__37033_38895)){
var fld_38898 = chunk__37032_38894.cljs$core$IIndexed$_nth$arity$2(null,i__37034_38896);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_38898," = ",fld_38898,";");


var G__38901 = seq__37031_38893;
var G__38902 = chunk__37032_38894;
var G__38903 = count__37033_38895;
var G__38904 = (i__37034_38896 + (1));
seq__37031_38893 = G__38901;
chunk__37032_38894 = G__38902;
count__37033_38895 = G__38903;
i__37034_38896 = G__38904;
continue;
} else {
var temp__5735__auto___38906 = cljs.core.seq(seq__37031_38893);
if(temp__5735__auto___38906){
var seq__37031_38907__$1 = temp__5735__auto___38906;
if(cljs.core.chunked_seq_QMARK_(seq__37031_38907__$1)){
var c__4556__auto___38908 = cljs.core.chunk_first(seq__37031_38907__$1);
var G__38909 = cljs.core.chunk_rest(seq__37031_38907__$1);
var G__38910 = c__4556__auto___38908;
var G__38911 = cljs.core.count(c__4556__auto___38908);
var G__38912 = (0);
seq__37031_38893 = G__38909;
chunk__37032_38894 = G__38910;
count__37033_38895 = G__38911;
i__37034_38896 = G__38912;
continue;
} else {
var fld_38924 = cljs.core.first(seq__37031_38907__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_38924," = ",fld_38924,";");


var G__38926 = cljs.core.next(seq__37031_38907__$1);
var G__38927 = null;
var G__38928 = (0);
var G__38929 = (0);
seq__37031_38893 = G__38926;
chunk__37032_38894 = G__38927;
count__37033_38895 = G__38928;
i__37034_38896 = G__38929;
continue;
}
} else {
}
}
break;
}

var seq__37040_38935 = cljs.core.seq(pmasks);
var chunk__37041_38936 = null;
var count__37042_38937 = (0);
var i__37043_38938 = (0);
while(true){
if((i__37043_38938 < count__37042_38937)){
var vec__37051_38939 = chunk__37041_38936.cljs$core$IIndexed$_nth$arity$2(null,i__37043_38938);
var pno_38940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37051_38939,(0),null);
var pmask_38941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37051_38939,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_38940,"$ = ",pmask_38941,";");


var G__38942 = seq__37040_38935;
var G__38943 = chunk__37041_38936;
var G__38944 = count__37042_38937;
var G__38945 = (i__37043_38938 + (1));
seq__37040_38935 = G__38942;
chunk__37041_38936 = G__38943;
count__37042_38937 = G__38944;
i__37043_38938 = G__38945;
continue;
} else {
var temp__5735__auto___38946 = cljs.core.seq(seq__37040_38935);
if(temp__5735__auto___38946){
var seq__37040_38947__$1 = temp__5735__auto___38946;
if(cljs.core.chunked_seq_QMARK_(seq__37040_38947__$1)){
var c__4556__auto___38948 = cljs.core.chunk_first(seq__37040_38947__$1);
var G__38949 = cljs.core.chunk_rest(seq__37040_38947__$1);
var G__38950 = c__4556__auto___38948;
var G__38951 = cljs.core.count(c__4556__auto___38948);
var G__38952 = (0);
seq__37040_38935 = G__38949;
chunk__37041_38936 = G__38950;
count__37042_38937 = G__38951;
i__37043_38938 = G__38952;
continue;
} else {
var vec__37054_38953 = cljs.core.first(seq__37040_38947__$1);
var pno_38954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37054_38953,(0),null);
var pmask_38955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37054_38953,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_38954,"$ = ",pmask_38955,";");


var G__38957 = cljs.core.next(seq__37040_38947__$1);
var G__38959 = null;
var G__38960 = (0);
var G__38961 = (0);
seq__37040_38935 = G__38957;
chunk__37041_38936 = G__38959;
count__37042_38937 = G__38960;
i__37043_38938 = G__38961;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__37059){
var map__37060 = p__37059;
var map__37060__$1 = (((((!((map__37060 == null))))?(((((map__37060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37060):map__37060);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__37073){
var map__37075 = p__37073;
var map__37075__$1 = (((((!((map__37075 == null))))?(((((map__37075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37075):map__37075);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__35171__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__35171__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__37101 = cljs.core.seq(table);
var chunk__37102 = null;
var count__37103 = (0);
var i__37104 = (0);
while(true){
if((i__37104 < count__37103)){
var vec__37120 = chunk__37102.cljs$core$IIndexed$_nth$arity$2(null,i__37104);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37120,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37120,(1),null);
var ns_38970 = cljs.core.namespace(sym);
var name_38971 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__38972 = seq__37101;
var G__38973 = chunk__37102;
var G__38974 = count__37103;
var G__38975 = (i__37104 + (1));
seq__37101 = G__38972;
chunk__37102 = G__38973;
count__37103 = G__38974;
i__37104 = G__38975;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37101);
if(temp__5735__auto__){
var seq__37101__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37101__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37101__$1);
var G__38979 = cljs.core.chunk_rest(seq__37101__$1);
var G__38980 = c__4556__auto__;
var G__38981 = cljs.core.count(c__4556__auto__);
var G__38982 = (0);
seq__37101 = G__38979;
chunk__37102 = G__38980;
count__37103 = G__38981;
i__37104 = G__38982;
continue;
} else {
var vec__37123 = cljs.core.first(seq__37101__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37123,(1),null);
var ns_38983 = cljs.core.namespace(sym);
var name_38984 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__38985 = cljs.core.next(seq__37101__$1);
var G__38986 = null;
var G__38987 = (0);
var G__38988 = (0);
seq__37101 = G__38985;
chunk__37102 = G__38986;
count__37103 = G__38987;
i__37104 = G__38988;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__37132 = arguments.length;
switch (G__37132) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_38990 = cljs.core.first(ks);
var vec__37133_38991 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_38990);
var top_38992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37133_38991,(0),null);
var prefix_SINGLEQUOTE__38993 = vec__37133_38991;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_38990)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__38993) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_38992)) || (cljs.core.contains_QMARK_(known_externs,top_38992)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__38993)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_38992);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__38993)),";");
}
} else {
}

var m_38994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_38990);
if(cljs.core.empty_QMARK_(m_38994)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__38993,m_38994,top_level,known_externs);
}

var G__38995 = cljs.core.next(ks);
ks = G__38995;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map

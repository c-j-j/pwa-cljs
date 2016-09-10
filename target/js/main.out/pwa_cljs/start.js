// Compiled by ClojureScript 1.8.51 {:static-fns true, :optimize-constants true}
goog.provide('pwa_cljs.start');
goog.require('cljs.core');
pwa_cljs.start.body = d3.select("body");
pwa_cljs.start.add_svg_BANG_ = (function pwa_cljs$start$add_svg_BANG_(el,p__12204){
var map__12207 = p__12204;
var map__12207__$1 = ((((!((map__12207 == null)))?((((map__12207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12207):map__12207);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12207__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12207__$1,cljs.core.cst$kw$height);
var svg = el.append("svg");
return svg.attr("width",width).attr("height",height);
});
pwa_cljs.start.add_circle_BANG_ = (function pwa_cljs$start$add_circle_BANG_(el,p__12209){
var map__12212 = p__12209;
var map__12212__$1 = ((((!((map__12212 == null)))?((((map__12212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12212):map__12212);
var xcord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12212__$1,cljs.core.cst$kw$xcord);
var ycord = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12212__$1,cljs.core.cst$kw$ycord);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12212__$1,cljs.core.cst$kw$radius);
var colour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12212__$1,cljs.core.cst$kw$colour);
var circle = el.append("circle");
return circle.attr("cx",xcord).attr("cy",ycord).attr("r",radius).style("fill",colour);
});
pwa_cljs.start.draw_circle_BANG_ = (function pwa_cljs$start$draw_circle_BANG_(){
return pwa_cljs.start.add_circle_BANG_(pwa_cljs.start.add_svg_BANG_(pwa_cljs.start.body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"50",cljs.core.cst$kw$height,"50"], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xcord,"25",cljs.core.cst$kw$ycord,"25",cljs.core.cst$kw$radius,"25",cljs.core.cst$kw$colour,"purple"], null));
});
pwa_cljs.start.display_numbers_BANG_ = (function pwa_cljs$start$display_numbers_BANG_(){
return pwa_cljs.start.body.selectAll("p").data(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))).enter().append("p").text((function (d){
return d;
}));
});
pwa_cljs.start.add_circles_BANG_ = (function pwa_cljs$start$add_circles_BANG_(svg_container){
return svg_container.selectAll("circle").data(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(40),(20),(10)], null))).enter().append("circle");
});
pwa_cljs.start.draw_concentric_circles_BANG_ = (function pwa_cljs$start$draw_concentric_circles_BANG_(){
return pwa_cljs.start.add_circles_BANG_(pwa_cljs.start.add_svg_BANG_(pwa_cljs.start.body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"200",cljs.core.cst$kw$height,"200"], null))).attr("cx",(50)).attr("cy",(50)).attr("r",(function (d){
return d;
})).style("fill",(function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(40))){
return "green";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(20))){
return "red";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(10))){
return "blue";
} else {
return null;
}
}
}
}));
});
pwa_cljs.start.render_d3 = (function pwa_cljs$start$render_d3(){
pwa_cljs.start.draw_circle_BANG_();

pwa_cljs.start.display_numbers_BANG_();

return pwa_cljs.start.draw_concentric_circles_BANG_();
});
pwa_cljs.start.init = (function pwa_cljs$start$init(){
if(cljs.core.truth_((function (){var and__6532__auto__ = document;
if(cljs.core.truth_(and__6532__auto__)){
return document.getElementById;
} else {
return and__6532__auto__;
}
})())){
return pwa_cljs.start.render_d3();
} else {
return null;
}
});
goog.exportSymbol('pwa_cljs.start.init', pwa_cljs.start.init);

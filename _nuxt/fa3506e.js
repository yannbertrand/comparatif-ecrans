(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{229:function(t,e,n){"use strict";n.r(e);n(22);var r=n(5),v={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("ecrans",t.params.slug1).fetch();case 2:return e.t0=e.sent,e.next=5,t.$content("ecrans",t.params.slug2).fetch();case 5:return e.t1=e.sent,n=[e.t0,e.t1],console.log(n),e.abrupt("return",{ecrans:n});case 9:case"end":return e.stop()}}),e)})))()}},_=n(33),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("section",{staticClass:"sticky top-0 p-6 flex w-screen bg-white border-b mb-2",attrs:{id:"recherche"}},[n("nuxt-link",{attrs:{to:{name:"index",query:t.$route.query}}},[t._v("\n      🔙 Recherche 🔎\n    ")])],1),t._v(" "),n("section",{staticClass:"flex justify-center"},[t._m(0),t._v(" "),t._l(t.ecrans,(function(e){return n("section",{key:e.slug,staticClass:"ecran"},[n("div",{staticClass:"w-56 h-48"},[n("img",{attrs:{src:e.slug+"/1.png",alt:"Photo de l'écran "+e.nom.commercial}})]),t._v(" "),n("p",[t._v(t._s(e.marque)+" "+t._s(e.nom.commercial))]),t._v(" "),n("p",[t._v(t._s(e.dalle))]),t._v(" "),n("p",[t._v(t._s(e.format))]),t._v(" "),n("p",[t._v(t._s(e.taille)+'"')]),t._v(" "),n("p",[t._v(t._s(e.resolution))]),t._v(" "),n("p",[t._v(t._s(e.gamut))]),t._v(" "),n("p",[t._v(t._s(e.contraste)+":1")]),t._v(" "),n("p",[t._v(t._s(e.luminosite)+" cd/m2")]),t._v(" "),n("p",[t._v(t._s(e.raffraichissement)+" images par secondes")]),t._v(" "),e.thunderbolt3?n("p",[t._v(t._s(e.thunderbolt3)+"W")]):n("p",[t._v("Non")]),t._v(" "),n("p",[t._v(t._s(e.plus.join(", ")))]),t._v(" "),n("p",[t._v(t._s(e.prix)+"€")])])}))],2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"text-right mx-auto px-4 -mx-2 lg:-mx-2 justify-evenly items-center"},[n("div",{staticClass:"h-48"}),t._v(" "),n("div",[n("strong",[t._v("Nom")])]),t._v(" "),n("div",[n("strong",[t._v("Dalle")])]),t._v(" "),n("div",[n("strong",[t._v("Format")])]),t._v(" "),n("div",[n("strong",[t._v("Taille")])]),t._v(" "),n("div",[n("strong",[t._v("Résolution")])]),t._v(" "),n("div",[n("strong",[t._v("Gamut de couleurs")])]),t._v(" "),n("div",[n("strong",[t._v("Contraste moyen")])]),t._v(" "),n("div",[n("strong",[t._v("Luminosité moyenne")])]),t._v(" "),n("div",[n("strong",[t._v("Rafraîchissement")])]),t._v(" "),n("div",[n("strong",[t._v("Thunderbolt 3")])]),t._v(" "),n("div",[n("strong",[t._v("Plus")])]),t._v(" "),n("div",[n("strong",[t._v("Prix")])])])}],!1,null,null,null);e.default=component.exports}}]);
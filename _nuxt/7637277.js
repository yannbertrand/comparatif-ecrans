(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{226:function(t,e,r){"use strict";r.r(e);r(101),r(36),r(105),r(21);var o=r(5),l={fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.storePreferences();case 2:return r=e.sent,o=t.$content("ecrans").sortBy("prix","desc").where(t.where(r)),e.next=6,o.fetch();case 6:t.ecrans=e.sent;case 7:case"end":return e.stop()}}),e)})))()},data:function(){var t,e,r,o,l,n,v;return{ecrans:[],dalle:(null===(t=this.$route.query)||void 0===t?void 0:t.dalle)||"",taille:(null===(e=this.$route.query)||void 0===e?void 0:e.taille)||"",format:(null===(r=this.$route.query)||void 0===r?void 0:r.format)||"",resolution:(null===(o=this.$route.query)||void 0===o?void 0:o.resolution)||"",gamut:(null===(l=this.$route.query)||void 0===l?void 0:l.gamut)||"",contraste:(null===(n=this.$route.query)||void 0===n?void 0:n.contraste)||"",luminosite:(null===(v=this.$route.query)||void 0===v?void 0:v.luminosite)||""}},methods:{rechercheMinMax:function(t){if(""!==t){var e={};if("-"===t[0])e.$lt=parseInt(t.substring(1));else if("+"===t[0])e.$gte=parseInt(t.substring(1));else{var r=t.split("-");e.$between=[parseInt(r[0]),parseInt(r[1])]}return e}},storePreferences:function(){var t=this,e=["dalle","taille","format","resolution","gamut","contraste","luminosite"].reduce((function(e,r){return t[r]&&(e[r]=t[r]),e}),{});return this.$router.push({query:e}),e},where:function(t){return{dalle:t.dalle,taille:t.taille?parseInt(t.taille):void 0,format:t.format,resolution:t.resolution?this.rechercheMinMax(t.resolution):void 0,gamut:t.gamut,contraste:t.contraste?this.rechercheMinMax(t.contraste):void 0,luminosite:t.luminosite?this.rechercheMinMax(t.luminosite):void 0}}}},n=r(33),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("section",{staticClass:"sticky top-0 p-6 flex w-screen bg-white border-b mb-2",attrs:{id:"recherche"}},[r("label",{staticClass:"flex-auto",attrs:{id:"dalle"}},[t._v("\n      Dalle"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.dalle,expression:"dalle"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.dalle=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"IPS"}},[t._v("IPS")]),t._v(" "),r("option",{attrs:{value:"VA"}},[t._v("VA")]),t._v(" "),r("option",{attrs:{value:"OLED"}},[t._v("OLED")])])]),t._v(" "),r("label",{staticClass:"flex-auto",attrs:{id:"taille"}},[t._v("\n      Taille"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.taille,expression:"taille"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.taille=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"24"}},[t._v("24")]),t._v(" "),r("option",{attrs:{value:"27"}},[t._v("27")]),t._v(" "),r("option",{attrs:{value:"32"}},[t._v("32")])]),t._v('\n      "\n    ')]),t._v(" "),r("label",{staticClass:"flex-auto",attrs:{id:"format"}},[t._v("\n      Format"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.format,expression:"format"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.format=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"16/9"}},[t._v("16/9")]),t._v(" "),r("option",{attrs:{value:"16/10"}},[t._v("16/10")]),t._v(" "),r("option",{attrs:{value:"21/9"}},[t._v("21/9")]),t._v(" "),r("option",{attrs:{value:"32/9"}},[t._v("32/9")])])]),t._v(" "),r("label",{staticClass:"flex-auto",attrs:{id:"resolution"}},[t._v("\n      Résolution"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.resolution,expression:"resolution"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.resolution=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"-160"}},[t._v("- de 160")]),t._v(" "),r("option",{attrs:{value:"160-179"}},[t._v("160-179")]),t._v(" "),r("option",{attrs:{value:"180-199"}},[t._v("180-199")]),t._v(" "),r("option",{attrs:{value:"200-219"}},[t._v("200-219")]),t._v(" "),r("option",{attrs:{value:"+220"}},[t._v("+ de 220")])]),t._v("\n      ppi\n    ")]),t._v(" "),r("label",{staticClass:"flex-auto",attrs:{id:"gamut"}},[t._v("\n      Gamut de couleurs"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.gamut,expression:"gamut"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.gamut=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"DCI-P3"}},[t._v("DCI-P3")]),t._v(" "),r("option",{attrs:{value:"sRGB"}},[t._v("sRGB")])])]),t._v(" "),r("label",{staticClass:"flex-auto",attrs:{id:"contraste"}},[t._v("\n      Contraste"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.contraste,expression:"contraste"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.contraste=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"-1000"}},[t._v("- de 1000:1")]),t._v(" "),r("option",{attrs:{value:"1000-1099"}},[t._v("1000:1 - 1099:1")]),t._v(" "),r("option",{attrs:{value:"1100-1199"}},[t._v("1100:1 - 1199:1")]),t._v(" "),r("option",{attrs:{value:"1200-1299"}},[t._v("1200:1 - 1299:1")]),t._v(" "),r("option",{attrs:{value:"+1300"}},[t._v("+ de 1300:1")])])]),t._v(" "),r("label",{staticClass:"flex-auto",attrs:{id:"luminosite"}},[t._v("\n      Luminosité"),r("br"),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.luminosite,expression:"luminosite"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.luminosite=e.target.multiple?r:r[0]},t.$fetch]}},[r("option",{attrs:{value:""}}),t._v(" "),r("option",{attrs:{value:"-300"}},[t._v("- de 300")]),t._v(" "),r("option",{attrs:{value:"300-399"}},[t._v("300-399")]),t._v(" "),r("option",{attrs:{value:"400-499"}},[t._v("400-499")]),t._v(" "),r("option",{attrs:{value:"+500"}},[t._v("+ de 500")])]),t._v("\n      cd/m2\n    ")])]),t._v(" "),r("section",{staticClass:"mx-auto px-4 w-screen text-center flex flex-wrap -mx-1 lg:-mx-4",attrs:{id:"liste"}},t._l(t.ecrans,(function(e){return r("div",{key:e.slug,staticClass:"my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"},[r("article",{staticClass:"overflow-hidden rounded-lg shadow-lg"},[r("nuxt-link",{attrs:{to:{path:e.slug,query:t.$route.query}}},[r("img",{staticClass:"block w-full h-64 object-contain",attrs:{src:e.slug+"/1.png",alt:"Photo du "+e.nom.commercial,width:"437",height:"256"}})]),t._v(" "),r("h2",{staticClass:"text-lg font-black"},[t._v("\n          "+t._s(e.marque)+" "+t._s(e.nom.commercial)+"\n        ")]),t._v(" "),r("p",[t._v(t._s(e.prix.toFixed(2))+"€")])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);
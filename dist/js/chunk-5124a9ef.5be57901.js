(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5124a9ef"],{"1dde":function(t,r,o){var n=o("d039"),e=o("b622"),c=o("2d00"),a=e("species");t.exports=function(t){return c>=51||!n((function(){var r=[],o=r.constructor={};return o[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},3109:function(t,r,o){"use strict";o.r(r);var n=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{staticClass:"about"},[o("h2",[t._v("產品列表")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("| "),o("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v("| "),o("router-link",{attrs:{to:"/products"}},[t._v("Products")]),t._v("| "),o("router-link",{attrs:{to:"/cart"}},[t._v("Cart")]),t._v("| "),o("router-link",{attrs:{to:"/admin"}},[t._v("後台登入")])],1),o("table",t._l(t.products,(function(r){return o("tr",{key:r.id},[o("td",[t._v(t._s(r.title))]),o("td",[t._v(t._s(r.content))]),o("td",[o("router-link",{attrs:{to:"/product/"+r.id}},[t._v("連結")])],1)])})),0)])},e=[],c=(o("99af"),{data:function(){return{products:[]}},created:function(){var t=this;t.axios.get("".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/ec/products")).then((function(r){t.products=r.data.data}))}}),a=c,i=o("2877"),u=Object(i["a"])(a,n,e,!1,null,null,null);r["default"]=u.exports},"65f0":function(t,r,o){var n=o("861d"),e=o("e8b5"),c=o("b622"),a=c("species");t.exports=function(t,r){var o;return e(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!e(o.prototype)?n(o)&&(o=o[a],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===r?0:r)}},8418:function(t,r,o){"use strict";var n=o("c04e"),e=o("9bf2"),c=o("5c6c");t.exports=function(t,r,o){var a=n(r);a in t?e.f(t,a,c(0,o)):t[a]=o}},"99af":function(t,r,o){"use strict";var n=o("23e7"),e=o("d039"),c=o("e8b5"),a=o("861d"),i=o("7b0b"),u=o("50c4"),s=o("8418"),d=o("65f0"),f=o("1dde"),v=o("b622"),l=o("2d00"),p=v("isConcatSpreadable"),b=9007199254740991,_="Maximum allowed index exceeded",h=l>=51||!e((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=f("concat"),k=function(t){if(!a(t))return!1;var r=t[p];return void 0!==r?!!r:c(t)},w=!h||!y;n({target:"Array",proto:!0,forced:w},{concat:function(t){var r,o,n,e,c,a=i(this),f=d(a,0),v=0;for(r=-1,n=arguments.length;r<n;r++)if(c=-1===r?a:arguments[r],k(c)){if(e=u(c.length),v+e>b)throw TypeError(_);for(o=0;o<e;o++,v++)o in c&&s(f,v,c[o])}else{if(v>=b)throw TypeError(_);s(f,v++,c)}return f.length=v,f}})},e8b5:function(t,r,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-5124a9ef.5be57901.js.map
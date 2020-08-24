(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259664fb"],{"159b":function(t,e,a){var o=a("da84"),r=a("fdbc"),c=a("17c2"),i=a("9112");for(var n in r){var s=o[n],l=s&&s.prototype;if(l&&l.forEach!==c)try{i(l,"forEach",c)}catch(d){l.forEach=c}}},1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.changePageEvent(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,o){return a("li",{key:o,staticClass:"page-item",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changePageEvent(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.changePageEvent(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},r=[],c={props:["pages"],methods:{changePageEvent:function(t){this.$emit("changepage",t),console.log(t)}}},i=c,n=a("2877"),s=Object(n["a"])(i,o,r,!1,null,null,null);e["a"]=s.exports},"17c2":function(t,e,a){"use strict";var o=a("b727").forEach,r=a("a640"),c=a("ae40"),i=r("forEach"),n=c("forEach");t.exports=i&&n?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,a){var o=a("d039"),r=a("b622"),c=a("2d00"),i=r("species");t.exports=function(t){return c>=51||!o((function(){var e=[],a=e.constructor={};return a[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fae":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal("new")}}},[t._v("建立新的產品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.origin_price))]),a("td",[t._v(t._s(e.price))]),a("td",[e.enabled?a("span",{staticClass:"text-primary"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal("update",e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.openModal("delete",e)}}},[t._v("刪除")])])])])})),0)]),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[t._l(5,(function(e){return a("div",{key:e+"img",staticClass:"form-group"},[a("label",{attrs:{for:"img"+e}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.imageUrl[e-1],expression:"copyProduct.imageUrl[i - 1]"}],staticClass:"form-control",attrs:{id:"img"+e,type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.copyProduct.imageUrl[e-1]},on:{input:function(a){a.target.composing||t.$set(t.copyProduct.imageUrl,e-1,a.target.value)}}})])})),a("img",{staticClass:"img-fluid",attrs:{alt:"",src:t.copyProduct.imageUrl[0]}}),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片")]),a("input",{staticClass:"form-control",attrs:{type:"file",id:"file"},on:{change:t.uploadFile}})])],2),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.title,expression:"copyProduct.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.copyProduct.title},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.category,expression:"copyProduct.category"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入分類"},domProps:{value:t.copyProduct.category},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.unit,expression:"copyProduct.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.copyProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.origin_price,expression:"copyProduct.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.copyProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.price,expression:"copyProduct.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.copyProduct.price},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.description,expression:"copyProduct.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.copyProduct.description},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.content,expression:"copyProduct.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.copyProduct.content},on:{input:function(e){e.target.composing||t.$set(t.copyProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.copyProduct.enabled,expression:"copyProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox"},domProps:{checked:Array.isArray(t.copyProduct.enabled)?t._i(t.copyProduct.enabled,null)>-1:t.copyProduct.enabled},on:{change:function(e){var a=t.copyProduct.enabled,o=e.target,r=!!o.checked;if(Array.isArray(a)){var c=null,i=t._i(a,c);o.checked?i<0&&t.$set(t.copyProduct,"enabled",a.concat([c])):i>-1&&t.$set(t.copyProduct,"enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.copyProduct,"enabled",r)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.copyProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.delProduct}},[t._v("確認刪除")])])])])]),a("page-component",{attrs:{pages:t.pagination},on:{changepage:t.getProduct}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"120"}},[t._v("售價")]),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),a("th",{attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],c=(a("99af"),a("4160"),a("a434"),a("159b"),a("9062")),i=a.n(c),n=a("1799"),s={components:{Loading:i.a,pageComponent:n["a"]},props:["token"],data:function(){return{products:[],copyProduct:{imageUrl:[]},pagination:{},filePath:"",isLoading:!1}},created:function(){var t=this;t.getProduct()},methods:{openModal:function(t,e){switch(t){case"new":this.copyProduct={imageUrl:[]},$("#productModal").modal("show");break;case"update":this.copyProduct=Object.assign({},e),$("#productModal").modal("show");break;case"delete":$("#delProductModal").modal("show"),this.copyProduct=Object.assign({},e);break}},getProduct:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this;e.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/products?page=").concat(t);e.axios.defaults.headers.common.Authorization="Bearer ".concat(e.token),e.axios.get(a).then((function(t){e.pagination=t.data.meta.pagination,e.products=t.data.data,e.isLoading=!1})).catch((function(t){console.log(t)}))},updateProduct:function(){var t=this;if(t.isLoading=!0,t.copyProduct.id){t.products.forEach((function(e,a){e.id===t.copyProduct.id&&(t.products[a]=t.copyProduct)})),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token);var e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/product/").concat(t.copyProduct.id);t.axios.patch(e,t.copyProduct).then((function(e){console.log(e),t.isLoading=!1})).catch((function(t){console.log(t)}))}else{t.copyProduct.id=(new Date).getTime(),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token);var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/product");t.axios.post(a,t.copyProduct).then((function(e){console.log(e),t.products.push(t.copyProduct),t.copyProduct={imageUrl:[]},t.isLoading=!1,t.getProduct()})).catch((function(t){console.log(t)}))}$("#productModal").modal("hide")},delProduct:function(){var t=this,e="";t.products.forEach((function(a,o){t.copyProduct.id===a.id&&(e=o)})),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token);var a="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/ec/product/").concat(t.copyProduct.id);t.axios.delete(a).then((function(t){console.log(t)})),t.products.splice(e,1),t.copyProduct={imageUrl:[]},$("#delProductModal").modal("hide")},uploadFile:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io","/api/").concat("87c11b32-8e80-4b1b-aaaa-2c44664c537e","/admin/storage"),a=document.querySelector("#file").files[0],o=new FormData;o.append("file",a),t.axios.defaults.headers.common.Authorization="Bearer ".concat(t.token),t.axios.post(e,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),t.copyProduct.imageUrl.push(e.data.data.path)}))}}},l=s,d=a("2877"),u=Object(d["a"])(l,o,r,!1,null,null,null);e["default"]=u.exports},4160:function(t,e,a){"use strict";var o=a("23e7"),r=a("17c2");o({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"65f0":function(t,e,a){var o=a("861d"),r=a("e8b5"),c=a("b622"),i=c("species");t.exports=function(t,e){var a;return r(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?o(a)&&(a=a[i],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var o=a("c04e"),r=a("9bf2"),c=a("5c6c");t.exports=function(t,e,a){var i=o(e);i in t?r.f(t,i,c(0,a)):t[i]=a}},"99af":function(t,e,a){"use strict";var o=a("23e7"),r=a("d039"),c=a("e8b5"),i=a("861d"),n=a("7b0b"),s=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),f=a("2d00"),m=p("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=f>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=u("concat"),y=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:c(t)},P=!h||!b;o({target:"Array",proto:!0,forced:P},{concat:function(t){var e,a,o,r,c,i=n(this),u=d(i,0),p=0;for(e=-1,o=arguments.length;e<o;e++)if(c=-1===e?i:arguments[e],y(c)){if(r=s(c.length),p+r>v)throw TypeError(g);for(a=0;a<r;a++,p++)a in c&&l(u,p,c[a])}else{if(p>=v)throw TypeError(g);l(u,p++,c)}return u.length=p,u}})},a434:function(t,e,a){"use strict";var o=a("23e7"),r=a("23cb"),c=a("a691"),i=a("50c4"),n=a("7b0b"),s=a("65f0"),l=a("8418"),d=a("1dde"),u=a("ae40"),p=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!p||!f},{splice:function(t,e){var a,o,d,u,p,f,b=n(this),y=i(b.length),P=r(t,y),C=arguments.length;if(0===C?a=o=0:1===C?(a=0,o=y-P):(a=C-2,o=v(m(c(e),0),y-P)),y+a-o>g)throw TypeError(h);for(d=s(b,o),u=0;u<o;u++)p=P+u,p in b&&l(d,u,b[p]);if(d.length=o,a<o){for(u=P;u<y-o;u++)p=u+o,f=u+a,p in b?b[f]=b[p]:delete b[f];for(u=y;u>y-o+a;u--)delete b[u-1]}else if(a>o)for(u=y-o;u>P;u--)p=u+o-1,f=u+a-1,p in b?b[f]=b[p]:delete b[f];for(u=0;u<a;u++)b[u+P]=arguments[u+2];return b.length=y-o+a,d}})},a640:function(t,e,a){"use strict";var o=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&o((function(){a.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,a){var o=a("83ab"),r=a("d039"),c=a("5135"),i=Object.defineProperty,n={},s=function(t){throw t};t.exports=function(t,e){if(c(n,t))return n[t];e||(e={});var a=[][t],l=!!c(e,"ACCESSORS")&&e.ACCESSORS,d=c(e,0)?e[0]:s,u=c(e,1)?e[1]:void 0;return n[t]=!!a&&!r((function(){if(l&&!o)return!0;var t={length:-1};l?i(t,1,{enumerable:!0,get:s}):t[1]=1,a.call(t,d,u)}))}},b727:function(t,e,a){var o=a("0366"),r=a("44ad"),c=a("7b0b"),i=a("50c4"),n=a("65f0"),s=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,d=4==t,u=6==t,p=5==t||u;return function(f,m,v,g){for(var h,b,y=c(f),P=r(y),C=o(m,v,3),_=i(P.length),x=0,w=g||n,L=e?w(f,_):a?w(f,0):void 0;_>x;x++)if((p||x in P)&&(h=P[x],b=C(h,x,y),t))if(e)L[x]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return x;case 2:s.call(L,h)}else if(d)return!1;return u?-1:l||d?d:L}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},e8b5:function(t,e,a){var o=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-259664fb.af7ebf12.js.map
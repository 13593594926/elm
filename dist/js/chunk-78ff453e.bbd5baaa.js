(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ff453e"],{"064b":function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"1e4b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-sticky",[r("app-header",{directives:[{name:"show",rawName:"v-show",value:t.top<300,expression:"top < 300"}]},[r("div",{attrs:{slot:"left"},slot:"left"},[t._v("elm.me")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],attrs:{slot:"right"},on:{click:function(e){return t.$router.push("/home/profile")}},slot:"right"},[r("van-icon",{attrs:{name:"manager-o"}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.id,expression:"!id"}],attrs:{slot:"right"},on:{click:function(e){return t.$router.push("/login")}},slot:"right"},[t._v(" 登录|注册 ")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.top>=300,expression:"top >= 300"}],on:{click:t.topto}},[t._v("双击回到顶部")])],1),r("h3",[t._v("当前定位城市")]),r("p",{on:{click:function(e){return t.$router.push("/detail?id="+t.guess.id)}}},[t._v(t._s(t.guess.name))]),r("h3",[t._v("热门城市")]),r("van-grid",{attrs:{"column-num":4}},t._l(t.hot,(function(e,n){return r("van-grid-item",{key:n,attrs:{text:e.name},on:{click:function(r){return t.$router.push("/detail?id="+e.id)}}})})),1),r("hr"),r("van-index-bar",{attrs:{"index-list":t.keys}},t._l(t.keys,(function(e,n){return r("van-index-anchor",{key:n,attrs:{index:e}},[r("p",{staticStyle:{paddingTop:"46px"}},[t._v(t._s(e))]),r("van-grid",{attrs:{"column-num":4}},t._l(t.group[e],(function(e,n){return r("van-grid-item",{key:n,attrs:{text:e.name},on:{click:function(r){return t.$router.push("/detail?id="+e.id)}}})})),1)],1)})),1)],1)},o=[],i=(r("fe8a"),r("e18c"),r("af86"),r("6a61"),r("cf7f")),a=r("7c15"),c=r("71c2"),u={name:"demo",props:[],components:{appHeader:c["a"]},data:function(){return{guess:{},hot:[],group:{},keys:[],top:0,id:localStorage.getItem("user_id")||0}},computed:{},watch:{},methods:{city:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n,o,i,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["d"])("guess");case 2:return r=e.sent,n=r.data,t.guess=n,e.next=7,Object(a["d"])("group");case 7:return o=e.sent,i=o.data,t.keys=Object.keys(i).sort(),t.group=i,e.next=13,Object(a["d"])("hot");case 13:c=e.sent,u=c.data,t.hot=u;case 16:case"end":return e.stop()}}),e)})))()},sstop:function(){this.top=document.documentElement.scrollTop},topto:function(){document.documentElement.scrollTop=0}},created:function(){},mounted:function(){this.city(),window.addEventListener("scroll",this.sstop)}},s=u,l=(r("74fd"),r("9ca4")),f=Object(l["a"])(s,n,o,!1,null,"9e0eb038",null);e["default"]=f.exports},"3ec4":function(t,e,r){},6694:function(t,e,r){"use strict";var n=r("c081"),o=r.n(n);o.a},"6a61":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=E(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==r&&n.call(x,i)&&(w=x);var b=g.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:G}}function G(){return{value:e,done:!0}}return m.prototype=b.constructor=g,g.constructor=m,m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"71c2":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"header"}},[t._t("left",[t._v("返回")]),t._t("title"),t._t("right")],2)},o=[],i={name:"demo",props:[],components:{},data:function(){return{}},computed:{},watch:{},methods:{}},a=i,c=(r("6694"),r("9ca4")),u=Object(c["a"])(a,n,o,!1,null,"1cc1f710",null);e["a"]=u.exports},"74fd":function(t,e,r){"use strict";var n=r("3ec4"),o=r.n(n);o.a},af86:function(t,e,r){var n=r("d890"),o=r("064b"),i=r("a133"),a=r("0fc1"),c=r("90fb"),u=c("iterator"),s=c("toStringTag"),l=i.values;for(var f in o){var h=n[f],p=h&&h.prototype;if(p){if(p[u]!==l)try{a(p,u,l)}catch(v){p[u]=l}if(p[s]||a(p,s,f),o[f])for(var d in i)if(p[d]!==i[d])try{a(p,d,i[d])}catch(v){p[d]=i[d]}}}},c081:function(t,e,r){},cf7f:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("e18c");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},fe8a:function(t,e,r){var n=r("1c8b"),o=r("3553"),i=r("cbab"),a=r("efe2"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})}}]);
//# sourceMappingURL=chunk-78ff453e.bbd5baaa.js.map
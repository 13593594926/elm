(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c5c38e8"],{"3e60":function(t,r,e){},6694:function(t,r,e){"use strict";var n=e("c081"),o=e.n(n);o.a},"6a61":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(F){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new G(n||[]);return a._invoke=E(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==e&&n.call(x,a)&&(w=x);var _=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;function a(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,r,e){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return P()}e.method=o,e.arg=a;while(1){var i=e.delegate;if(i){var c=O(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?d:h,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}return g.prototype=_.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new k(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),u(_,c,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"71c2":function(t,r,e){"use strict";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"header"}},[t._t("left",[t._v("返回")]),t._t("title"),t._t("right")],2)},o=[],a={name:"demo",props:[],components:{},data:function(){return{}},computed:{},watch:{},methods:{}},i=a,c=(e("6694"),e("9ca4")),u=Object(c["a"])(i,n,o,!1,null,"1cc1f710",null);r["a"]=u.exports},b3b1:function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"profile"},[e("van-sticky",[e("app-header",[e("div",{attrs:{slot:"left"},on:{click:function(r){return t.$router.go(-1)}},slot:"left"},[e("van-icon",{attrs:{name:"arrow-left"}})],1),e("div",{attrs:{slot:"title"},slot:"title"},[t._v("我的")]),e("div",{attrs:{slot:"right"},slot:"right"})])],1),e("van-card",{scopedSlots:t._u([{key:"thumb",fn:function(){return[e("van-image",{attrs:{round:"",src:"//elm.cangdu.org/img/"+t.data.avatar}})]},proxy:!0},{key:"desc",fn:function(){return[e("div",[e("h3",[t._v(t._s(t.data.username))]),e("p",[e("van-icon",{attrs:{name:"phone"}}),t._v("暂无绑定手机号")],1)]),e("div",[e("van-icon",{attrs:{name:"arrow"}})],1)]},proxy:!0}])}),e("van-grid",{attrs:{"column-num":3}},[e("van-grid-item",{attrs:{text:"我的余额"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span",[e("b",{staticStyle:{color:"#f90"}},[t._v(t._s(t.data.balance))]),t._v("元")])]},proxy:!0}])}),e("van-grid-item",{attrs:{text:"我的优惠"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span",[e("b",{staticStyle:{color:"#ff5f3e"}},[t._v(t._s(t.data.gift_amount))]),t._v("个")])]},proxy:!0}])}),e("van-grid-item",{attrs:{text:"我的积分"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("span",[e("b",{staticStyle:{color:"#6ac20b"}},[t._v(t._s(t.data.point))]),t._v("分")])]},proxy:!0}])})],1),e("div",{staticClass:"list",staticStyle:{marginTop:"10px"}},[e("van-notice-bar",{attrs:{background:"#fff",color:"#000","left-icon":"friends",text:"我的订单"}}),e("van-notice-bar",{attrs:{background:"#fff",color:"#000","left-icon":"shopping-cart",text:"积分商城"}}),e("van-notice-bar",{attrs:{background:"#fff",color:"#000","left-icon":"balance-list",text:"饿了么会员卡"}}),e("van-notice-bar",{staticStyle:{"margin-top":"0.1rem"},attrs:{background:"#fff",color:"#000","left-icon":"phone-circle",text:"服务中心"}}),e("van-notice-bar",{attrs:{background:"#fff",color:"#000","left-icon":"down",text:"下载饿了么"}})],1)],1)},o=[],a=(e("6a61"),e("cf7f")),i=e("71c2"),c=e("7c15"),u={name:"demo",props:[],components:{appHeader:i["a"]},data:function(){return{id:localStorage.getItem("user_id")||0,data:{}}},computed:{},watch:{},methods:{get:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var e,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["h"])(t.id);case 2:e=r.sent,n=e.data,t.data=n,console.log(t.data);case 6:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.get()}},s=u,f=(e("c6bd"),e("9ca4")),l=Object(f["a"])(s,n,o,!1,null,"aa2b29b4",null);r["default"]=l.exports},c081:function(t,r,e){},c6bd:function(t,r,e){"use strict";var n=e("3e60"),o=e.n(n);o.a},cf7f:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("e18c");function n(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}}}]);
//# sourceMappingURL=chunk-7c5c38e8.88b8b6e7.js.map
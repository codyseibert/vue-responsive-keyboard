!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-responsive-keyboard",[],e):"object"==typeof exports?exports["vue-responsive-keyboard"]=e():t["vue-responsive-keyboard"]=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(1);var n=r(6)(r(7),r(70),"data-v-3c8194d4",null);t.exports=n.exports},function(t,e,r){var n=r(2);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);r(4)("f32655aa",n,!0)},function(t,e,r){e=t.exports=r(3)(void 0),e.push([t.id,".responsive-keyboard[data-v-3c8194d4]{border-radius:10px;background-color:#cccfd5;display:flex;flex-direction:column;padding:10px;font-family:Helvetica}.responsive-keyboard .row[data-v-3c8194d4]{flex:1;display:flex;padding-bottom:10px}.responsive-keyboard .key[data-v-3c8194d4]{display:flex;width:6.896551724137931%;background-color:#000;color:#fff;border-radius:5px;margin-right:5px;text-align:center;vertical-align:middle;justify-content:center;align-items:center;overflow:hidden}.responsive-keyboard.light .key[data-v-3c8194d4]{color:#000;background-color:#fff;border:1px solid #000}.responsive-keyboard .key.delete[data-v-3c8194d4]{width:13.793103448275861%}.responsive-keyboard .key.tab[data-v-3c8194d4]{width:14.793103448275861%}.responsive-keyboard .key.caps[data-v-3c8194d4]{width:16.49310344827586%}.responsive-keyboard .key.return[data-v-3c8194d4]{width:15.793103448275861%}.responsive-keyboard .key.shift[data-v-3c8194d4]{width:17.79310344827586%}.responsive-keyboard .key.command[data-v-3c8194d4]{width:7.793103448275862%}.responsive-keyboard .key.space[data-v-3c8194d4]{width:28%}.responsive-keyboard .bottom .key[data-v-3c8194d4]{width:6.5%}.responsive-keyboard .bottom .key.command[data-v-3c8194d4]{width:8%}.responsive-keyboard .bottom .key.space[data-v-3c8194d4]{width:33%}",""])},function(t,e){function r(t,e){var r=t[1]||"",a=t[3];if(!a)return r;if(e&&"function"==typeof btoa){var i=n(a),s=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[r].concat(s).concat([i]).join("\n")}return[r].join("\n")}function n(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+r+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=f[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(i(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var s=[],a=0;a<r.parts.length;a++)s.push(i(r.parts[a]));f[r.id]={id:r.id,refs:1,parts:s}}}}function a(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(p)return y;n.parentNode.removeChild(n)}if(_){var i=l++;n=v||(v=a()),e=s.bind(null,n,i,!1),r=s.bind(null,n,i,!0)}else n=a(),e=o.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function s(t,e,r,n){var a=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=k(e,a);else{var i=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function o(t,e){var r=e.css,n=e.media,a=e.sourceMap;if(n&&t.setAttribute("media",n),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document,u=r(5),f={},d=c&&(document.head||document.getElementsByTagName("head")[0]),v=null,l=0,p=!1,y=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){p=r;var a=u(t,e);return n(a),function(e){for(var r=[],i=0;i<a.length;i++){var s=a[i],o=f[s.id];o.refs--,r.push(o)}e?(a=u(t,e),n(a)):a=[];for(var i=0;i<r.length;i++){var o=r[i];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete f[o.id]}}}};var k=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var r=[],n={},a=0;a<e.length;a++){var i=e[a],s=i[0],o=i[1],c=i[2],u=i[3],f={id:t+":"+a,css:o,media:c,sourceMap:u};n[s]?n[s].parts.push(f):r.push(n[s]={id:s,parts:[f]})}return r}},function(t,e){t.exports=function(t,e,r,n){var a,i=t=t||{},s=typeof t["default"];"object"!==s&&"function"!==s||(a=t,i=t["default"]);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),r&&(o._scopeId=r),n){var c=Object.create(o.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),o.computed=c}return{esModule:a,exports:i,options:o}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(8),i=n(a),s=r(65),o=n(s),c=r(61),u=n(c);e["default"]={props:["type","colorMap"],watch:{colorMap:function(){this.refresh()}},methods:{resize:function(){var t=this.$el.parentElement.clientWidth;this.$el.style.width=t-20+"px",this.$el.style.height=(t-20)/2.54+"px",this.$el.style.fontSize=t/50+"px"},getKey:function(t){return this.$el.querySelector('.responsive-keyboard .key[data-key="'+t+'"]')},refresh:function(){var t=!0,e=!1,r=void 0;try{for(var n,a=(0,u["default"])((0,o["default"])(this.colorMap));!(t=(n=a.next()).done);t=!0){var s=(0,i["default"])(n.value,2),c=s[0],f=s[1],d=this.getKey(c);d.style.backgroundColor=f}}catch(v){e=!0,r=v}finally{try{!t&&a["return"]&&a["return"]()}finally{if(e)throw r}}}},mounted:function(){window.addEventListener("resize",this.resize),this.refresh(),this.resize()},unmounted:function(){window.removeEventListener("resize",this.resize)}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var a=r(9),i=n(a),s=r(61),o=n(s);e["default"]=function(){function t(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var s,c=(0,o["default"])(t);!(n=(s=c.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(u){a=!0,i=u}finally{try{!n&&c["return"]&&c["return"]()}finally{if(a)throw i}}return r}return function(e,r){if(Array.isArray(e))return e;if((0,i["default"])(Object(e)))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,r){t.exports={"default":r(10),__esModule:!0}},function(t,e,r){r(11),r(57),t.exports=r(59)},function(t,e,r){r(12);for(var n=r(23),a=r(27),i=r(15),s=r(54)("toStringTag"),o="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<o.length;c++){var u=o[c],f=n[u],d=f&&f.prototype;d&&!d[s]&&a(d,s,u),i[u]=i.Array}},function(t,e,r){"use strict";var n=r(13),a=r(14),i=r(15),s=r(16);t.exports=r(20)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,a(1)):"keys"==e?a(0,r):"values"==e?a(0,t[r]):a(0,[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,r){var n=r(17),a=r(19);t.exports=function(t){return n(a(t))}},function(t,e,r){var n=r(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){"use strict";var n=r(21),a=r(22),i=r(37),s=r(27),o=r(38),c=r(15),u=r(39),f=r(53),d=r(55),v=r(54)("iterator"),l=!([].keys&&"next"in[].keys()),p="@@iterator",y="keys",_="values",k=function(){return this};t.exports=function(t,e,r,h,m,x,b){u(r,e,h);var g,C,w,S=function(t){if(!l&&t in L)return L[t];switch(t){case y:return function(){return new r(this,t)};case _:return function(){return new r(this,t)}}return function(){return new r(this,t)}},O=e+" Iterator",j=m==_,M=!1,L=t.prototype,T=L[v]||L[p]||m&&L[m],E=T||S(m),P=m?j?S("entries"):E:void 0,A="Array"==e?L.entries||T:T;if(A&&(w=d(A.call(new t)),w!==Object.prototype&&w.next&&(f(w,O,!0),n||o(w,v)||s(w,v,k))),j&&T&&T.name!==_&&(M=!0,E=function(){return T.call(this)}),n&&!b||!l&&!M&&L[v]||s(L,v,E),c[e]=E,c[O]=k,m)if(g={values:j?E:S(_),keys:x?E:S(y),entries:P},b)for(C in g)C in L||i(L,C,g[C]);else a(a.P+a.F*(l||M),e,g);return g}},function(t,e){t.exports=!0},function(t,e,r){var n=r(23),a=r(24),i=r(25),s=r(27),o="prototype",c=function(t,e,r){var u,f,d,v=t&c.F,l=t&c.G,p=t&c.S,y=t&c.P,_=t&c.B,k=t&c.W,h=l?a:a[e]||(a[e]={}),m=h[o],x=l?n:p?n[e]:(n[e]||{})[o];l&&(r=e);for(u in r)f=!v&&x&&void 0!==x[u],f&&u in h||(d=f?x[u]:r[u],h[u]=l&&"function"!=typeof x[u]?r[u]:_&&f?i(d,n):k&&x[u]==d?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e[o]=t[o],e}(d):y&&"function"==typeof d?i(Function.call,d):d,y&&((h.virtual||(h.virtual={}))[u]=d,t&c.R&&m&&!m[u]&&s(m,u,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(26);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,a){return t.call(e,r,n,a)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(28),a=r(36);t.exports=r(32)?function(t,e,r){return n.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(29),a=r(31),i=r(35),s=Object.defineProperty;e.f=r(32)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),a)try{return s(t,e,r)}catch(o){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(30);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(32)&&!r(33)(function(){return 7!=Object.defineProperty(r(34)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){t.exports=!r(33)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,r){var n=r(30),a=r(23).document,i=n(a)&&n(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},function(t,e,r){var n=r(30);t.exports=function(t,e){if(!n(t))return t;var r,a;if(e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;if("function"==typeof(r=t.valueOf)&&!n(a=r.call(t)))return a;if(!e&&"function"==typeof(r=t.toString)&&!n(a=r.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){t.exports=r(27)},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){"use strict";var n=r(40),a=r(36),i=r(53),s={};r(27)(s,r(54)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(s,{next:a(1,r)}),i(t,e+" Iterator")}},function(t,e,r){var n=r(29),a=r(41),i=r(51),s=r(48)("IE_PROTO"),o=function(){},c="prototype",u=function(){var t,e=r(34)("iframe"),n=i.length,a="<",s=">";for(e.style.display="none",r(52).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(a+"script"+s+"document.F=Object"+a+"/script"+s),t.close(),u=t.F;n--;)delete u[c][i[n]];return u()};t.exports=Object.create||function(t,e){var r;return null!==t?(o[c]=n(t),r=new o,o[c]=null,r[s]=t):r=u(),void 0===e?r:a(r,e)}},function(t,e,r){var n=r(28),a=r(29),i=r(42);t.exports=r(32)?Object.defineProperties:function(t,e){a(t);for(var r,s=i(e),o=s.length,c=0;o>c;)n.f(t,r=s[c++],e[r]);return t}},function(t,e,r){var n=r(43),a=r(51);t.exports=Object.keys||function(t){return n(t,a)}},function(t,e,r){var n=r(38),a=r(16),i=r(44)(!1),s=r(48)("IE_PROTO");t.exports=function(t,e){var r,o=a(t),c=0,u=[];for(r in o)r!=s&&n(o,r)&&u.push(r);for(;e.length>c;)n(o,r=e[c++])&&(~i(u,r)||u.push(r));return u}},function(t,e,r){var n=r(16),a=r(45),i=r(47);t.exports=function(t){return function(e,r,s){var o,c=n(e),u=a(c.length),f=i(s,u);if(t&&r!=r){for(;u>f;)if(o=c[f++],o!=o)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){var n=r(46),a=Math.min;t.exports=function(t){return t>0?a(n(t),9007199254740991):0}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){var n=r(46),a=Math.max,i=Math.min;t.exports=function(t,e){return t=n(t),t<0?a(t+e,0):i(t,e)}},function(t,e,r){var n=r(49)("keys"),a=r(50);t.exports=function(t){return n[t]||(n[t]=a(t))}},function(t,e,r){var n=r(23),a="__core-js_shared__",i=n[a]||(n[a]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(23).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(28).f,a=r(38),i=r(54)("toStringTag");t.exports=function(t,e,r){t&&!a(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(49)("wks"),a=r(50),i=r(23).Symbol,s="function"==typeof i,o=t.exports=function(t){return n[t]||(n[t]=s&&i[t]||(s?i:a)("Symbol."+t))};o.store=n},function(t,e,r){var n=r(38),a=r(56),i=r(48)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,r){var n=r(19);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n=r(58)(!0);r(20)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var n=r(46),a=r(19);t.exports=function(t){return function(e,r){var i,s,o=String(a(e)),c=n(r),u=o.length;return c<0||c>=u?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===u||(s=o.charCodeAt(c+1))<56320||s>57343?t?o.charAt(c):i:t?o.slice(c,c+2):(i-55296<<10)+(s-56320)+65536)}}},function(t,e,r){var n=r(60),a=r(54)("iterator"),i=r(15);t.exports=r(24).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||i.hasOwnProperty(n(e))}},function(t,e,r){var n=r(18),a=r(54)("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(r){}};t.exports=function(t){var e,r,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=s(e=Object(t),a))?r:i?n(e):"Object"==(o=n(e))&&"function"==typeof e.callee?"Arguments":o}},function(t,e,r){t.exports={"default":r(62),__esModule:!0}},function(t,e,r){r(11),r(57),t.exports=r(63)},function(t,e,r){var n=r(29),a=r(64);t.exports=r(24).getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},function(t,e,r){var n=r(60),a=r(54)("iterator"),i=r(15);t.exports=r(24).getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||i[n(t)]}},function(t,e,r){t.exports={"default":r(66),__esModule:!0}},function(t,e,r){r(67),t.exports=r(24).Object.entries},function(t,e,r){var n=r(22),a=r(68)(!0);n(n.S,"Object",{entries:function(t){return a(t)}})},function(t,e,r){var n=r(42),a=r(16),i=r(69).f;t.exports=function(t){return function(e){for(var r,s=a(e),o=n(s),c=o.length,u=0,f=[];c>u;)i.call(s,r=o[u++])&&f.push(t?[r,s[r]]:s[r]);return f}}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{"class":{"responsive-keyboard":!0,light:"light"===t.type}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"key",attrs:{"data-key":"`"}},[t._v("`")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"1"}},[t._v("1")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"2"}},[t._v("2")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"3"}},[t._v("3")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"4"}},[t._v("4")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"5"}},[t._v("5")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"6"}},[t._v("6")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"7"}},[t._v("7")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"8"}},[t._v("8")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"9"}},[t._v("9")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"0"}},[t._v("0")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"-"}},[t._v("-")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"+"}},[t._v("+")]),t._v(" "),r("div",{staticClass:"key delete",attrs:{"data-key":"delete"}},[t._v("delete")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"key tab",attrs:{"data-key":"tab"}},[t._v("tab")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"q"}},[t._v("Q")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"w"}},[t._v("W")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"e"}},[t._v("E")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"r"}},[t._v("R")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"t"}},[t._v("T")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"y"}},[t._v("Y")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"u"}},[t._v("U")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"i"}},[t._v("I")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"o"}},[t._v("O")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"p"}},[t._v("P")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"["}},[t._v("[")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"]"}},[t._v("]")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"\\"}},[t._v("\\")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"key caps",attrs:{"data-key":"caps-lock"}},[t._v("caps lock")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"a"}},[t._v("A")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"s"}},[t._v("S")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"d"}},[t._v("D")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"f"}},[t._v("F")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"g"}},[t._v("G")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"h"}},[t._v("H")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"j"}},[t._v("J")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"k"}},[t._v("K")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"l"}},[t._v("L")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":";"}},[t._v(";")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"'"}},[t._v("'")]),t._v(" "),r("div",{staticClass:"key return",attrs:{"data-key":"return"}},[t._v("return")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"key shift",attrs:{"data-key":"shift"}},[t._v("shift")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"z"}},[t._v("Z")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"x"}},[t._v("X")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"c"}},[t._v("C")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"v"}},[t._v("V")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"b"}},[t._v("B")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"n"}},[t._v("N")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"m"}},[t._v("M")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":","}},[t._v(",")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"."}},[t._v(".")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"/"}},[t._v("/")]),t._v(" "),r("div",{staticClass:"key shift",attrs:{"data-key":"shift"}},[t._v("shift")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row bottom"},[r("div",{staticClass:"key",attrs:{"data-key":"fn"}},[t._v("fn")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"control"}},[t._v("control")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"alt"}},[t._v("alt")]),t._v(" "),r("div",{staticClass:"key command",attrs:{"data-key":"command-left"}},[t._v("command")]),t._v(" "),r("div",{staticClass:"key space",attrs:{"data-key":"space"}},[t._v("space")]),t._v(" "),r("div",{staticClass:"key command",attrs:{"data-key":"command-right"}},[t._v("command")]),t._v(" "),r("div",{staticClass:"key",attrs:{"data-key":"alt"}},[t._v("alt")])])}]}}])});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~b1f96ece"],{"8c4f":function(t,e,r){"use strict";
/*!
  * vue-router v3.1.3
  * (c) 2019 Evan You
  * @license MIT
  */function n(t,e){0}function o(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function i(t,e){return e instanceof t||e&&(e.name===t.name||e._name===t._name)}function a(t,e){for(var r in e)t[r]=e[r];return t}var u={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,i=e.data;i.routerView=!0;var u=o.$createElement,s=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;while(o&&o._routerRoot!==o){var d=o.$vnode&&o.$vnode.data;d&&(d.routerView&&h++,d.keepAlive&&o._inactive&&(l=!0)),o=o.$parent}if(i.routerViewDepth=h,l)return u(f[s],i,n);var v=p.matched[h];if(!v)return f[s]=null,u();var y=f[s]=v.components[s];i.registerRouteInstance=function(t,e){var r=v.instances[s];(e&&r!==t||!e&&r===t)&&(v.instances[s]=e)},(i.hook||(i.hook={})).prepatch=function(t,e){v.instances[s]=e.componentInstance},i.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==v.instances[s]&&(v.instances[s]=t.componentInstance)};var m=i.props=c(p,v.props&&v.props[s]);if(m){m=i.props=a({},m);var g=i.attrs=i.attrs||{};for(var w in m)y.props&&w in y.props||(g[w]=m[w],delete m[w])}return u(y,i,n)}};function c(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}var s=/[!'()*]/g,p=function(t){return"%"+t.charCodeAt(0).toString(16)},f=/%2C/g,h=function(t){return encodeURIComponent(t).replace(s,p).replace(f,",")},l=decodeURIComponent;function d(t,e,r){void 0===e&&(e={});var n,o=r||v;try{n=o(t||"")}catch(a){n={}}for(var i in e)n[i]=e[i];return n}function v(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=l(r.shift()),o=r.length>0?l(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function y(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return h(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(h(e)):n.push(h(e)+"="+h(t)))})),n.join("&")}return h(e)+"="+h(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var m=/\/?$/;function g(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=w(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:k(e,o),matched:t?x(t):[]};return r&&(a.redirectedFrom=k(r,o)),Object.freeze(a)}function w(t){if(Array.isArray(t))return t.map(w);if(t&&"object"===typeof t){var e={};for(var r in t)e[r]=w(t[r]);return e}return t}var b=g(null,{path:"/"});function x(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function k(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||y;return(r||"/")+i(n)+o}function R(t,e){return e===b?t===e:!!e&&(t.path&&e.path?t.path.replace(m,"")===e.path.replace(m,"")&&t.hash===e.hash&&E(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&E(t.query,e.query)&&E(t.params,e.params)))}function E(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return"object"===typeof n&&"object"===typeof o?E(n,o):String(n)===String(o)}))}function O(t,e){return 0===t.path.replace(m,"/").indexOf(e.path.replace(m,"/"))&&(!e.hash||t.hash===e.hash)&&_(t.query,e.query)}function _(t,e){for(var r in e)if(!(r in t))return!1;return!0}function A(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function C(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function j(t){return t.replace(/\/\//g,"/")}var S=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},$=Y,T=I,P=M,L=H,q=X,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t,e){var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(r=U.exec(t))){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?D(k):m?".*":"[^"+z(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function M(t,e){return H(I(t,e))}function B(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function H(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=n||{},u=a.pretty?B:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!==typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(S(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!e[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?V(f):u(f),!e[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function z(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function D(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function F(t,e){return t.keys=e,t}function N(t){return t.sensitive?"":"i"}function J(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return F(t,e)}function K(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(Y(t[o],e,r).source);var i=new RegExp("(?:"+n.join("|")+")",N(r));return F(i,e)}function Q(t,e,r){return X(I(t,r),e,r)}function X(t,e,r){S(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=z(u);else{var c=z(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var p=z(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",F(new RegExp("^"+i,N(r)),e)}function Y(t,e,r){return S(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?J(t,e):S(t)?K(t,e,r):Q(t,e,r)}$.parse=T,$.compile=P,$.tokensToFunction=L,$.tokensToRegExp=q;var W=Object.create(null);function G(t,e,r){e=e||{};try{var n=W[t]||(W[t]=$.compile(t));return e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function Z(t,e,r,n){var o="string"===typeof t?{path:t}:t;if(o._normalized)return o;if(o.name)return a({},t);if(!o.path&&o.params&&e){o=a({},o),o._normalized=!0;var i=a(a({},e.params),o.params);if(e.name)o.name=e.name,o.params=i;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=G(u,i,"path "+e.path)}else 0;return o}var c=C(o.path||""),s=e&&e.path||"/",p=c.path?A(c.path,s,r||o.append):s,f=d(c.query,o.query,n&&n.options.parseQuery),h=o.hash||c.hash;return h&&"#"!==h.charAt(0)&&(h="#"+h),{_normalized:!0,path:p,query:f,hash:h}}var tt,et=[String,Object],rt=[String,Array],nt=function(){},ot={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:rt,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),i=o.location,u=o.route,c=o.href,s={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,y=u.redirectedFrom?g(null,Z(u.redirectedFrom),null,r):u;s[v]=R(n,y),s[d]=this.exact?s[v]:O(n,y);var m=function(t){it(t)&&(e.replace?r.replace(i,nt):r.push(i,nt))},w={click:it};Array.isArray(this.event)?this.event.forEach((function(t){w[t]=m})):w[this.event]=m;var b={class:s},x=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:m,isActive:s[d],isExactActive:s[v]});if(x){if(1===x.length)return x[0];if(x.length>1||!x.length)return 0===x.length?t():t("span",{},x)}if("a"===this.tag)b.on=w,b.attrs={href:c};else{var k=at(this.$slots.default);if(k){k.isStatic=!1;var E=k.data=a({},k.data);for(var _ in E.on=E.on||{},E.on){var A=E.on[_];_ in w&&(E.on[_]=Array.isArray(A)?A:[A])}for(var C in w)C in E.on?E.on[C].push(w[C]):E.on[C]=m;var j=k.data.attrs=a({},k.data.attrs);j.href=c}else b.on=w}return t(this.tag,b,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ut(t){if(!ut.installed||tt!==t){ut.installed=!0,tt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",u),t.component("RouterLink",ot);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var ct="undefined"!==typeof window;function st(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){pt(o,i,a,t)}));for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function pt(t,e,r,n,o,i){var a=n.path,u=n.name;var c=n.pathToRegexpOptions||{},s=ht(a,o,c.strict);"boolean"===typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var p={path:s,regex:ft(s,c),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?j(i+"/"+n.path):void 0;pt(t,e,r,n,p,o)})),e[p.path]||(t.push(p.path),e[p.path]=p),void 0!==n.alias)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var l=f[h];0;var d={path:l,children:n.children};pt(t,e,r,d,o,p.path||"/")}u&&(r[u]||(r[u]=p))}function ft(t,e){var r=$(t,[],e);return r}function ht(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]?t:null==e?t:j(e.path+"/"+t)}function lt(t,e){var r=st(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t){st(t,n,o,i)}function u(t,r,a){var u=Z(t,r,!1,e),c=u.name;if(c){var s=i[c];if(!s)return p(null,u);var f=s.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof u.params&&(u.params={}),r&&"object"===typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=G(s.path,u.params,'named route "'+c+'"'),p(s,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(dt(v.regex,u.path,u.params))return p(v,u,a)}}return p(null,u)}function c(t,r){var n=t.redirect,o="function"===typeof n?n(g(t,r,null,e)):n;if("string"===typeof o&&(o={path:o}),!o||"object"!==typeof o)return p(null,r);var a=o,c=a.name,s=a.path,f=r.query,h=r.hash,l=r.params;if(f=a.hasOwnProperty("query")?a.query:f,h=a.hasOwnProperty("hash")?a.hash:h,l=a.hasOwnProperty("params")?a.params:l,c){i[c];return u({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r)}if(s){var d=vt(s,t),v=G(d,l,'redirect route with path "'+d+'"');return u({_normalized:!0,path:v,query:f,hash:h},void 0,r)}return p(null,r)}function s(t,e,r){var n=G(r,e.params,'aliased route with path "'+r+'"'),o=u({_normalized:!0,path:n});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,p(a,e)}return p(null,e)}function p(t,r,n){return t&&t.redirect?c(t,n||r):t&&t.matchAs?s(t,r,t.matchAs):g(t,r,n,e)}return{match:u,addRoutes:a}}function dt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"===typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}function vt(t,e){return A(t,e.parent?e.parent.path:"/",!0)}var yt=ct&&window.performance&&window.performance.now?window.performance:Date;function mt(){return yt.now().toFixed(3)}var gt=mt();function wt(){return gt}function bt(t){return gt=t}var xt=Object.create(null);function kt(){var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,"");window.history.replaceState({key:wt()},"",e),window.addEventListener("popstate",(function(t){Et(),t.state&&t.state.key&&bt(t.state.key)}))}function Rt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=Ot(),a=o.call(t,e,r,n?i:null);a&&("function"===typeof a.then?a.then((function(t){Tt(t,i)})).catch((function(t){0})):Tt(a,i))}))}}function Et(){var t=wt();t&&(xt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ot(){var t=wt();if(t)return xt[t]}function _t(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function At(t){return St(t.x)||St(t.y)}function Ct(t){return{x:St(t.x)?t.x:window.pageXOffset,y:St(t.y)?t.y:window.pageYOffset}}function jt(t){return{x:St(t.x)?t.x:0,y:St(t.y)?t.y:0}}function St(t){return"number"===typeof t}var $t=/^#\d/;function Tt(t,e){var r="object"===typeof t;if(r&&"string"===typeof t.selector){var n=$t.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var o=t.offset&&"object"===typeof t.offset?t.offset:{};o=jt(o),e=_t(n,o)}else At(t)&&(e=Ct(t))}else r&&At(t)&&(e=Ct(t));e&&window.scrollTo(e.x,e.y)}var Pt=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}();function Lt(t,e){Et();var r=window.history;try{e?r.replaceState({key:wt()},"",t):r.pushState({key:bt(mt())},"",t)}catch(n){window.location[e?"replace":"assign"](t)}}function qt(t){Lt(t,!0)}function Ut(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function It(t){return function(e,r,n){var i=!1,a=0,u=null;Mt(t,(function(t,e,r,c){if("function"===typeof t&&void 0===t.cid){i=!0,a++;var s,p=zt((function(e){Ht(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),r.components[c]=e,a--,a<=0&&n()})),f=zt((function(t){var e="Failed to resolve async component "+c+": "+t;u||(u=o(t)?t:new Error(e),n(u))}));try{s=t(p,f)}catch(l){f(l)}if(s)if("function"===typeof s.then)s.then(p,f);else{var h=s.component;h&&"function"===typeof h.then&&h.then(p,f)}}})),i||n()}}function Mt(t,e){return Bt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Bt(t){return Array.prototype.concat.apply([],t)}var Vt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Ht(t){return t.__esModule||Vt&&"Module"===t[Symbol.toStringTag]}function zt(t){var e=!1;return function(){var r=[],n=arguments.length;while(n--)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Dt=function(t){function e(e){t.call(this),this.name=this._name="NavigationDuplicated",this.message='Navigating to current location ("'+e.fullPath+'") is not allowed',Object.defineProperty(this,"stack",{value:(new t).stack,writable:!0,configurable:!0})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error);Dt._name="NavigationDuplicated";var Ft=function(t,e){this.router=t,this.base=Nt(e),this.current=b,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function Nt(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function Jt(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n;r++)if(t[r]!==e[r])break;return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function Kt(t,e,r,n){var o=Mt(t,(function(t,n,o,i){var a=Qt(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Bt(n?o.reverse():o)}function Qt(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function Xt(t){return Kt(t,"beforeRouteLeave",Wt,!0)}function Yt(t){return Kt(t,"beforeRouteUpdate",Wt)}function Wt(t,e){if(e)return function(){return t.apply(e,arguments)}}function Gt(t,e,r){return Kt(t,"beforeRouteEnter",(function(t,n,o,i){return Zt(t,o,i,e,r)}))}function Zt(t,e,r,n,o){return function(i,a,u){return t(i,a,(function(t){"function"===typeof t&&n.push((function(){te(t,e.instances,r,o)})),u(t)}))}}function te(t,e,r,n){e[r]&&!e[r]._isBeingDestroyed?t(e[r]):n()&&setTimeout((function(){te(t,e,r,n)}),16)}Ft.prototype.listen=function(t){this.cb=t},Ft.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Ft.prototype.onError=function(t){this.errorCbs.push(t)},Ft.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(o)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach((function(e){e(t)})))}))},Ft.prototype.confirmTransition=function(t,e,r){var a=this,u=this.current,c=function(t){!i(Dt,t)&&o(t)&&(a.errorCbs.length?a.errorCbs.forEach((function(e){e(t)})):(n(!1,"uncaught error during route navigation:"),console.error(t))),r&&r(t)};if(R(t,u)&&t.matched.length===u.matched.length)return this.ensureURL(),c(new Dt(t));var s=Jt(this.current.matched,t.matched),p=s.updated,f=s.deactivated,h=s.activated,l=[].concat(Xt(f),this.router.beforeHooks,Yt(p),h.map((function(t){return t.beforeEnter})),It(h));this.pending=t;var d=function(e,r){if(a.pending!==t)return c();try{e(t,u,(function(t){!1===t||o(t)?(a.ensureURL(!0),c(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(c(),"object"===typeof t&&t.replace?a.replace(t):a.push(t)):r(t)}))}catch(n){c(n)}};Ut(l,d,(function(){var r=[],n=function(){return a.current===t},o=Gt(h,r,n),i=o.concat(a.router.resolveHooks);Ut(i,d,(function(){if(a.pending!==t)return c();a.pending=null,e(t),a.router.app&&a.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},Ft.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach((function(r){r&&r(t,e)}))};var ee=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior,i=Pt&&o;i&&kt();var a=re(this.base);window.addEventListener("popstate",(function(t){var r=n.current,o=re(n.base);n.current===b&&o===a||n.transitionTo(o,(function(t){i&&Rt(e,t,r,!0)}))}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){Lt(j(n.base+t.fullPath)),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){qt(j(n.base+t.fullPath)),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(re(this.base)!==this.current.fullPath){var e=j(this.base+this.current.fullPath);t?Lt(e):qt(e)}},e.prototype.getCurrentLocation=function(){return re(this.base)},e}(Ft);function re(t){var e=decodeURI(window.location.pathname);return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var ne=function(t){function e(e,r,n){t.call(this,e,r),n&&oe(this.base)||ie()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router,r=e.options.scrollBehavior,n=Pt&&r;n&&kt(),window.addEventListener(Pt?"popstate":"hashchange",(function(){var e=t.current;ie()&&t.transitionTo(ae(),(function(r){n&&Rt(t.router,r,e,!0),Pt||se(r.fullPath)}))}))},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){ce(t.fullPath),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){se(t.fullPath),Rt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ae()!==e&&(t?ce(e):se(e))},e.prototype.getCurrentLocation=function(){return ae()},e}(Ft);function oe(t){var e=re(t);if(!/^\/#/.test(e))return window.location.replace(j(t+"/#"+e)),!0}function ie(){var t=ae();return"/"===t.charAt(0)||(se("/"+t),!1)}function ae(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";t=t.slice(e+1);var r=t.indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else r>-1&&(t=decodeURI(t.slice(0,r))+t.slice(r));return t}function ue(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function ce(t){Pt?Lt(ue(t)):window.location.hash=t}function se(t){Pt?qt(ue(t)):window.location.replace(ue(t))}var pe=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){i(Dt,t)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Ft),fe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=lt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Pt&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new ee(this,t.base);break;case"hash":this.history=new ne(this,t.base,this.fallback);break;case"abstract":this.history=new pe(this,t.base);break;default:0}},he={currentRoute:{configurable:!0}};function le(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function de(t,e,r){var n="hash"===r?"#"+e:e;return t?j(t+"/"+n):n}fe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},he.currentRoute.get=function(){return this.history&&this.history.current},fe.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null)})),!this.app){this.app=t;var r=this.history;if(r instanceof ee)r.transitionTo(r.getCurrentLocation());else if(r instanceof ne){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},fe.prototype.beforeEach=function(t){return le(this.beforeHooks,t)},fe.prototype.beforeResolve=function(t){return le(this.resolveHooks,t)},fe.prototype.afterEach=function(t){return le(this.afterHooks,t)},fe.prototype.onReady=function(t,e){this.history.onReady(t,e)},fe.prototype.onError=function(t){this.history.onError(t)},fe.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},fe.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},fe.prototype.go=function(t){this.history.go(t)},fe.prototype.back=function(){this.go(-1)},fe.prototype.forward=function(){this.go(1)},fe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},fe.prototype.resolve=function(t,e,r){e=e||this.history.current;var n=Z(t,e,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=de(a,i,this.mode);return{location:n,route:o,href:u,normalizedTo:n,resolved:o}},fe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(fe.prototype,he),fe.install=ut,fe.version="3.1.3",ct&&window.Vue&&window.Vue.use(fe),e["a"]=fe}}]);
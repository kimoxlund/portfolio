(function(t){function n(n){for(var o,r,s=n[0],c=n[1],u=n[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(o=!1)}o&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},i={"app~d0ae3f07":0},a=[];function r(t){return s.p+"js/"+({"views~33d48c78":"views~33d48c78"}[t]||t)+"."+{"views~33d48c78":"1cc1ac8b"}[t]+".js"}function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[],e=i[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=i[t]=[n,o]}));n.push(e[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var u=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(l);var e=i[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,e[1](u)}i[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var p=u;a.push([0,"chunk-vendors~253ae210","chunk-vendors~a1f3e5b9","chunk-vendors~678f84af","chunk-vendors~fdc6512a","chunk-vendors~cf55716b","chunk-vendors~d2305125"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"146e":function(t,n,e){},"30ae":function(t,n,e){"use strict";e("c965")},3194:function(t,n,e){},"3c18":function(t,n,e){},5108:function(t,n,e){"use strict";e("b6ec")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-view",style:t.gradient,attrs:{id:"app"}},[e("nav-toggle",{attrs:{navToggled:t.navOpen},on:{onClick:function(n){t.navOpen=!t.navOpen}}}),e("div",{staticClass:"ui-nav",style:t.navPush},[e("transition",{attrs:{appear:"",css:!1},on:{enter:t.navEnter}},[e("navigation")],1)],1),e("transition",{attrs:{appear:"",css:!1,mode:"out-in"},on:{enter:t.enter,leave:t.leave}},[e("router-view")],1)],1)},a=[],r=(e("99af"),e("b680"),e("cffa")),s={name:"App",components:{},data:function(){return{navOpen:!1,navTransform:-100,hue:this.$route.meta.h,saturation:this.$route.meta.s,luminance:this.$route.meta.l,opacity:1}},created:function(){this.hue=188,this.luminance=40,this.saturation=35},methods:{enter:function(t,n){r["a"].set(t,{opacity:0,y:30}),r["a"].to(t,{opacity:1,y:0,duration:.5,ease:"sine.out",onComplete:n})},leave:function(t,n){r["a"].to(t,{opacity:0,y:-30,duration:.5,ease:"sine.in",onComplete:n})},navEnter:function(t,n){r["a"].set(t,{opacity:0}),r["a"].to(t,{opacity:1,y:0,duration:1,delay:.5,ease:"sine.out",onComplete:n})}},computed:{state:function(){return this.$store.state},isProject:function(){return this.$route.meta},isScrolled:function(){return this.state.scrolled},gradient:function(){return{background:"radial-gradient(farthest-corner at -15% -25%, hsl(".concat(this.hue,", ").concat(this.saturation,"%, ").concat(this.luminance,"%) 0%, var(--blue-5) 80%)")}},navPush:function(){return{transform:"translateY(".concat(this.navTransform,"%")}}},watch:{$route:function(){this.navOpen=!1},isProject:function(t){r["a"].to(this.$data,{hue:t.h.toFixed(0),saturation:t.s,luminance:t.l,duration:3})},isScrolled:function(t){t?r["a"].to(this.$data,{luminance:this.$route.meta.l-10,duration:2}):r["a"].to(this.$data,{luminance:this.$route.meta.l,duration:2})},navOpen:function(t){t?r["a"].to(this.$data,{navTransform:0,duration:.5}):r["a"].to(this.$data,{navTransform:-100,duration:.5,delay:.5})}}},c=s,u=(e("034f"),e("2877")),l=Object(u["a"])(c,i,a,!1,null,null,null),p=l.exports,f=e("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("d3b7"),e("3ca3"),e("ddb0");var d=e("8c4f");o["a"].use(d["a"]);var h=[{path:"/",name:"Kim Oxlund",meta:{project:!1,h:0,s:30,l:40},component:function(){return e.e("views~33d48c78").then(e.bind(null,"bb51"))}},{path:"/canwach",name:"CanWaCH",meta:{project:!0,h:358,s:87,l:33},component:function(){return e.e("views~33d48c78").then(e.bind(null,"657a"))}},{path:"/unicorn-app",name:"Unicorn App",meta:{project:!0,h:333,s:81,l:50},component:function(){return e.e("views~33d48c78").then(e.bind(null,"573a"))}},{path:"/pepfar",name:"President's Emergency Fund For AIDS Relief",meta:{project:!0,h:207,s:100,l:25},component:function(){return e.e("views~33d48c78").then(e.bind(null,"443d"))}},{path:"/ltsa",name:"LTSA",meta:{project:!0,h:222,s:54,l:40},component:function(){return e.e("views~33d48c78").then(e.bind(null,"3df1"))}},{path:"/humana",name:"Humana",meta:{project:!0,h:95,s:49,l:30},component:function(){return e.e("views~33d48c78").then(e.bind(null,"fa08"))}},{path:"/recbc",name:"Real Estate Council of BC",meta:{project:!0,h:214,s:100,l:40},component:function(){return e.e("views~33d48c78").then(e.bind(null,"3320"))}},{path:"/whiteleaf-interior",name:"Whiteleaf Interior Painting",meta:{project:!0,h:173,s:6,l:39},component:function(){return e.e("views~33d48c78").then(e.bind(null,"2490"))}},{path:"/athena-pathways",name:"Athena Pathways",meta:{project:!0,h:249,s:80,l:60},component:function(){return e.e("views~33d48c78").then(e.bind(null,"9f47"))}}],m=new d["a"]({routes:h}),g=m,v=e("3835"),y=(e("4fad"),e("2f62"));o["a"].use(y["a"]);var b=new y["a"].Store({state:{bg:"",h:188,s:35,l:35,project:!1,scrolled:!1},mutations:{setPage:function(t,n){for(var e=0,o=Object.entries(n);e<o.length;e++){var i=Object(v["a"])(o[e],2),a=i[0],r=i[1];t[a]=r}},setScroll:function(t,n){t.scrolled=n}}}),w=e("8dc2"),x=e("a584"),_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"scrollContainer",class:[t.project?"ui-content":"ui-content ui-content--narrow"]},[e("intersect",{on:{enter:t.onEnter,leave:t.onLeave}},[e("div")]),e("div",{staticClass:"page-title"},[e("h1",[t._v(t._s(t.title))])]),e("div",{staticClass:"page",class:[t.project?"page":"page page--narrow"]},[t._t("default")],2)],1)},P=[],j=e("760e"),$={components:{Intersect:j["a"]},props:{title:String},created:function(){this.$store.commit("setPage",this.$route.meta)},destroyed:function(){this.$store.commit("setPage",this.$route.meta)},mounted:function(){this.$refs.scrollContainer.scrollTop=0},computed:{project:function(){return this.$store.state.project}},methods:{onEnter:function(){this.$store.commit("setScroll",!1)},onLeave:function(){this.$store.commit("setScroll",!0)}}},C=$,z=(e("f321"),Object(u["a"])(C,_,P,!1,null,null,null)),O=z.exports,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{attrs:{role:"navigation"}},[e("ol",{ref:"nav",staticClass:"nav-list"},t._l(t.navigation,(function(n,o){return e("nav-link",{key:o,attrs:{to:n.to,title:n.title},on:{onAnimation:t.setPointPosition},nativeOn:{mouseenter:function(n){return t.$emit("onHover",o)},click:function(n){return t.$emit("onClick",o)}}},[e("nav-point",{ref:"point",refInFor:!0,attrs:{mousePosition:t.mousePosition,position:n.position},on:{onInit:t.setPointPosition}})],1)})),1),e("svg",{staticClass:"nav-path"},[e("polyline",{staticClass:"nav-polyline",attrs:{points:t.polyline}})])])},T=[],Z=(e("13d5"),e("d81d"),e("07ac"),e("a15b"),e("159b"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"nav-item",style:t.random},[e("router-link",{staticClass:"nav-link",attrs:{to:t.to}},[t._t("default"),e("span",{staticClass:"nav-title",style:{opacity:t.opacity}},[t._v(t._s(t.title))])],2)],1)}),E=[],S={data:function(){return{opacity:1,left:0}},props:{to:String,title:String},mounted:function(){this.$emit("onInit",this)},computed:{isProject:function(){return this.$route.meta.project},random:function(){return{left:"".concat(this.left,"%")}}},watch:{isProject:function(t){var n=this;t?r["a"].to(this.$data,{opacity:.5,duration:1*Math.random()}):r["a"].to(this.$data,{opacity:1,duration:1*Math.random()}),t?r["a"].to(this.$data,{left:Math.floor(11*Math.random()+40),duration:2*Math.random()+.5,onUpdate:function(){n.$emit("onAnimation",n)}}):r["a"].to(this.$data,{left:Math.floor(40*Math.random()+20),duration:2*Math.random()+.5,onUpdate:function(){n.$emit("onAnimation",n)}})}}},M=S,B=(e("5108"),Object(u["a"])(M,Z,E,!1,null,null,null)),A=B.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"nav-point",style:t.shadow})},I=[],R={data:function(){return{proximityMax:1,proximityThreshold:300,opacity:0}},props:{to:String,mousePosition:{type:Object,default:function(){return{x:0,y:0}}},position:{type:Object,default:function(){return{x:0,y:0}}}},mounted:function(){this.$emit("onInit",this)},computed:{closestPoint:function(){return{x:this.position.x,y:this.position.y}},distance:function(){return Math.sqrt((this.mousePosition.x-this.position.x)*(this.mousePosition.x-this.position.x)+(this.mousePosition.y-this.position.y)*(this.mousePosition.y-this.position.y))},proximity:function(){var t=(0-this.proximityMax)/(this.proximityThreshold-0),n=this.proximityMax-0*t,e=t*this.distance+n;return e<=0?0:e},shadow:function(){return{boxShadow:"0 0 80px "+Math.floor(40*this.proximity)+"px hsla("+Math.floor(31*Math.random()+220)+",100%,50%,1), 0 0 20px "+Math.floor(5*this.proximity)+"px hsla(240,100%,100%,1)",transform:"scale("+Math.max(1,2.125*this.proximity)+")"}}}},F=R,H=(e("5a33"),Object(u["a"])(F,L,I,!1,null,null,null)),N=H.exports,U={components:{"nav-link":A,"nav-point":N},data:function(){return{navigation:[{to:"/",title:"Home",position:{x:0,y:0}},{to:"/ltsa",title:"LTSA",position:{x:0,y:0}},{to:"/recbc",title:"RECBC",position:{x:0,y:0}},{to:"/athena-pathways",title:"Athena Pathways",position:{x:0,y:0}},{to:"/whiteleaf-interior",title:"Whiteleaf Interior",position:{x:0,y:0}},{to:"/pepfar",title:"PEPFAR",position:{x:0,y:0}},{to:"/canwach",title:"CanWaCH",position:{x:0,y:0}}],mousePosition:{x:0,y:0},scrollPosition:{left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop}}},mounted:function(){var t=this;window.addEventListener("mousemove",this.setMousePosition);var n=new ResizeObserver((function(){t.setPointPosition()}));n.observe(this.$refs.nav)},computed:{coordinates:function(){return this.navigation.map((function(t){return Object.values(t.position)})).reduce((function(t,n){return t.concat(n)}),[])},polyline:function(){return this.coordinates.join(" ")}},methods:{setMousePosition:function(){this.mousePosition.x=event.clientX,this.mousePosition.y=event.clientY},setPointPosition:function(){var t=this;this.$refs.point.forEach((function(n,e){var o=n.$el.getBoundingClientRect();t.navigation[e].position={x:o.left+o.width/2+t.scrollPosition.left,y:o.top+o.height/2+t.scrollPosition.top}}))}}},W=U,q=(e("9028"),Object(u["a"])(W,k,T,!1,null,null,null)),V=q.exports,Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"nav-toggle",on:{click:function(n){return t.$emit("onClick")},hover:function(n){t.navToggled=!t.navToggled}}},[e("svg",{attrs:{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg"}},[e("polyline",{staticClass:"nav-toggle-polyline",attrs:{points:t.zigZag1}}),e("polyline",{staticClass:"nav-toggle-polyline",attrs:{points:t.zigZag2}})]),e("div",{staticClass:"nav-toggle-text"},[t._v("Menu")])])},D=[],J={data:function(){return{zigZag1Top:100,zigZag1Bottom:100,zigZag2Top:200,zigZag2Bottom:200}},props:{navToggled:Boolean},computed:{zigZag1:function(){return"0,".concat(this.zigZag1Top," 100,").concat(this.zigZag1Bottom," 200,").concat(this.zigZag1Top," 300,").concat(this.zigZag1Bottom)},zigZag2:function(){return"0,".concat(this.zigZag2Top," 100,").concat(this.zigZag2Bottom," 200,").concat(this.zigZag2Top," 300,").concat(this.zigZag2Bottom)}},watch:{navToggled:function(t){t?r["a"].to(this.$data,{zigZag1Top:50,zigZag1Bottom:150,zigZag2Top:150,zigZag2Bottom:250,duration:.3}):r["a"].to(this.$data,{zigZag1Top:100,zigZag1Bottom:100,zigZag2Top:200,zigZag2Bottom:200,duration:.3})}}},K=J,G=(e("d802"),Object(u["a"])(K,Y,D,!1,null,null,null)),X=G.exports,Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("figure",[e("v-lazy-image",{attrs:{src:t.src,"src-placeholder":t.placeholder,alt:t.alt}}),t.caption?e("figcaption",[t._v(t._s(t.caption))]):t._e()],1)},tt=[],nt={props:{src:String,placeholder:String,alt:String,caption:String}},et=nt,ot=(e("30ae"),Object(u["a"])(et,Q,tt,!1,null,"0ffb6091",null)),it=ot.exports,at=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"case-meta"},[t.meta.agency?e("dl",[e("dt",[t._v("Agency")]),t._l(t.meta.agency,(function(n,o){return e("dd",{key:o},[t._v(t._s(n))])}))],2):t._e(),t.meta.role?e("dl",[e("dt",[t._v("My Role")]),t._l(t.meta.role,(function(n,o){return e("dd",{key:o},[t._v(t._s(n))])}))],2):t._e(),t.meta.tech?e("dl",[e("dt",[t._v("Tech")]),t._l(t.meta.tech,(function(n,o){return e("dd",{key:o},[t._v(t._s(n))])}))],2):t._e(),t.meta.url?e("div",{staticClass:"case-link"},[e("page-link",{attrs:{text:"Launch Project",url:t.meta.url,target:"_blank",rel:"nofollow noopener"}})],1):t._e()])},rt=[],st={props:{meta:Object}},ct=st,ut=(e("7310"),Object(u["a"])(ct,at,rt,!1,null,null,null)),lt=ut.exports,pt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{staticClass:"page-link",style:t.zigZag,attrs:{href:t.url,target:t.target,rel:t.rel},on:{mouseover:function(n){t.hover=!0},mouseleave:function(n){t.hover=!1}}},[t._v(" "+t._s(t.text)+" ")])},ft=[],dt={data:function(){return{hover:!1,zigZagTop:0,zigZagBottom:100}},props:{text:String,url:String,target:String,rel:String},computed:{zigZag:function(){return{backgroundImage:"url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='0,".concat(this.zigZagTop," 100,").concat(this.zigZagBottom," 200,").concat(this.zigZagTop,"' fill='none' stroke='hsl(229, 100%, 67%)' stroke-width='15' /%3E%3C/svg%3E\")")}}},watch:{hover:function(t){t?r["a"].to(this.$data,{zigZagTop:10,zigZagBottom:10,duration:.3}):r["a"].to(this.$data,{zigZagTop:0,zigZagBottom:100,duration:.3})}}},ht=dt,mt=(e("fc13"),Object(u["a"])(ht,pt,ft,!1,null,null,null)),gt=mt.exports;o["a"].use(w["VLazyImagePlugin"]),o["a"].use(x["a"],{config:{id:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GA_KEY}},g),o["a"].component("page",O),o["a"].component("navigation",V),o["a"].component("nav-toggle",X),o["a"].component("case-image",it),o["a"].component("case-meta",lt),o["a"].component("page-link",gt),o["a"].config.productionTip=!1,new o["a"]({router:g,store:b,render:function(t){return t(p)}}).$mount("#app")},"5a33":function(t,n,e){"use strict";e("bb62")},7310:function(t,n,e){"use strict";e("3c18")},"785d":function(t,n,e){},"85ec":function(t,n,e){},9028:function(t,n,e){"use strict";e("db78")},b6ec:function(t,n,e){},bb62:function(t,n,e){},c965:function(t,n,e){},d802:function(t,n,e){"use strict";e("146e")},db78:function(t,n,e){},f321:function(t,n,e){"use strict";e("3194")},fc13:function(t,n,e){"use strict";e("785d")}});
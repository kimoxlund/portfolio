/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */(function(e,t,n){"use strict";function $(n){u=t.documentElement;a=t.body;z();yt=this;n=n||{};Nt=n.constants||{};if(n.easing)for(var r in n.easing)V[r]=n.easing[r];It=n.edgeStrategy||"set";Et={beforerender:n.beforerender,render:n.render};St=n.forceHeight!==!1;St&&(Tt=n.scale||1);Ct=n.mobileDeceleration||x;Pt=n.smoothScrolling!==!1;Ht=n.smoothScrollingDuration||T;Bt={targetTop:yt.getScrollTop()};qt=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})();if(qt){wt=t.getElementById("skrollr-body");wt&&st();J();pt(u,[g,w],[y])}else pt(u,[g,b],[y]);yt.refresh();ot(e,"resize orientationchange",function(){var e=u.clientWidth,t=u.clientHeight;if(t!==Mt||e!==Ot){Mt=t;Ot=e;_t=!0}});var i=W();(function s(){G();Wt=i(s)})();return yt}var r={get:function(){return yt},init:function(e){return yt||new $(e)},VERSION:"0.6.22"},i=Object.prototype.hasOwnProperty,s=e.Math,o=e.getComputedStyle,u,a,f="touchstart",l="touchmove",c="touchcancel",h="touchend",p="skrollable",d=p+"-before",v=p+"-between",m=p+"-after",g="skrollr",y="no-"+g,b=g+"-desktop",w=g+"-mobile",E="linear",S=1e3,x=.004,T=200,N="start",C="end",k="center",L="bottom",A="___skrollable_id",O=/^(?:input|textarea|button|select)$/i,M=/^\s+|\s+$/g,_=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,D=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,P=/^([a-z\-]+)\[(\w+)\]$/,H=/-([a-z])/g,B=function(e,t){return t.toUpperCase()},j=/[\-+]?[\d]*\.?[\d]+/g,F=/\{\?\}/g,I=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,q=/[a-z\-]+-gradient/g,R="",U="",z=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(!o)return;var t=o(a,null);for(var n in t){R=n.match(e)||+n==n&&t[n].match(e);if(R)break}if(!R){R=U="";return}R=R[0];if(R.slice(0,1)==="-"){U=R;R={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[R]}else U="-"+R.toLowerCase()+"-"},W=function(){var t=e.requestAnimationFrame||e[R.toLowerCase()+"RequestAnimationFrame"],n=mt();if(qt||!t)t=function(t){var r=mt()-n,i=s.max(0,1e3/60-r);return e.setTimeout(function(){n=mt();t()},i)};return t},X=function(){var t=e.cancelAnimationFrame||e[R.toLowerCase()+"CancelAnimationFrame"];if(qt||!t)t=function(t){return e.clearTimeout(t)};return t},V={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(e<=.5083)t=3;else if(e<=.8489)t=9;else if(e<=.96208)t=27;else{if(!(e<=.99981))return 1;t=91}return 1-s.abs(3*s.cos(e*t*1.028)/t)}};$.prototype.refresh=function(e){var r,i,s=!1;if(e===n){s=!0;bt=[];Ft=0;e=t.getElementsByTagName("*")}else e=[].concat(e);r=0;i=e.length;for(;r<i;r++){var o=e[r],u=o,a=[],f=Pt,l=It;if(!o.attributes)continue;var c=0,h=o.attributes.length;for(;c<h;c++){var d=o.attributes[c];if(d.name==="data-anchor-target"){u=t.querySelector(d.value);if(u===null)throw'Unable to find anchor target "'+d.value+'"';continue}if(d.name==="data-smooth-scrolling"){f=d.value!=="off";continue}if(d.name==="data-edge-strategy"){l=d.value;continue}var v=d.name.match(_);if(v===null)continue;var m={props:d.value,element:o};a.push(m);var g=v[1];g&&(m.constant=g.substr(1));var y=v[2];if(/p$/.test(y)){m.isPercentage=!0;m.offset=(y.slice(0,-1)|0)/100}else m.offset=y|0;var b=v[3],w=v[4]||b;if(!b||b===N||b===C){m.mode="absolute";b===C?m.isEnd=!0:m.isPercentage||(m.offset=m.offset*Tt)}else{m.mode="relative";m.anchors=[b,w]}}if(!a.length)continue;var E,S,x;if(!s&&A in o){x=o[A];E=bt[x].styleAttr;S=bt[x].classAttr}else{x=o[A]=Ft++;E=o.style.cssText;S=ht(o)}bt[x]={element:o,styleAttr:E,classAttr:S,anchorTarget:u,keyFrames:a,smoothScrolling:f,edgeStrategy:l};pt(o,[p],[])}ft();r=0;i=e.length;for(;r<i;r++){var T=bt[e[r][A]];if(T===n)continue;Y(T);et(T)}return yt};$.prototype.relativeToAbsolute=function(e,t,n){var r=u.clientHeight,i=e.getBoundingClientRect(),s=i.top,o=i.bottom-i.top;t===L?s-=r:t===k&&(s-=r/2);n===L?s+=o:n===k&&(s+=o/2);s+=yt.getScrollTop();return s+.5|0};$.prototype.animateTo=function(e,t){t=t||{};var r=mt(),i=yt.getScrollTop();Dt={startTop:i,topDiff:e-i,targetTop:e,duration:t.duration||S,startTime:r,endTime:r+(t.duration||S),easing:V[t.easing||E],done:t.done};if(!Dt.topDiff){Dt.done&&Dt.done.call(yt,!1);Dt=n}return yt};$.prototype.stopAnimateTo=function(){Dt&&Dt.done&&Dt.done.call(yt,!0);Dt=n};$.prototype.isAnimatingTo=function(){return!!Dt};$.prototype.setScrollTop=function(t,n){jt=n===!0;qt?Rt=s.min(s.max(t,0),xt):e.scrollTo(0,t);return yt};$.prototype.getScrollTop=function(){return qt?Rt:e.pageYOffset||u.scrollTop||a.scrollTop||0};$.prototype.getMaxScrollTop=function(){return xt};$.prototype.on=function(e,t){Et[e]=t;return yt};$.prototype.off=function(e){delete Et[e];return yt};$.prototype.destroy=function(){var e=X();e(Wt);at();pt(u,[y],[g,b,w]);var t=0,i=bt.length;for(;t<i;t++)it(bt[t].element);u.style.overflow=a.style.overflow="auto";u.style.height=a.style.height="auto";wt&&r.setStyle(wt,"transform","none");yt=n;wt=n;Et=n;St=n;xt=0;Tt=1;Nt=n;Ct=n;kt="down";Lt=-1;Ot=0;Mt=0;_t=!1;Dt=n;Pt=n;Ht=n;Bt=n;jt=n;Ft=0;It=n;qt=!1;Rt=0;Ut=n};var J=function(){var r,i,o,p,d,v,m,g,y,b,w,E;ot(u,[f,l,c,h].join(" "),function(e){var u=e.changedTouches[0];p=e.target;while(p.nodeType===3)p=p.parentNode;d=u.clientY;v=u.clientX;b=e.timeStamp;O.test(p.tagName)||e.preventDefault();switch(e.type){case f:r&&r.blur();yt.stopAnimateTo();r=p;i=m=d;o=v;y=b;break;case l:O.test(p.tagName)&&t.activeElement!==p&&e.preventDefault();g=d-m;E=b-w;yt.setScrollTop(Rt-g,!0);m=d;w=b;break;default:case c:case h:var a=i-d,S=o-v,x=S*S+a*a;if(x<49){if(!O.test(r.tagName)){r.focus();var T=t.createEvent("MouseEvents");T.initMouseEvent("click",!0,!0,e.view,1,u.screenX,u.screenY,u.clientX,u.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);r.dispatchEvent(T)}return}r=n;var N=g/E;N=s.max(s.min(N,3),-3);var C=s.abs(N/Ct),k=N*C+.5*Ct*C*C,L=yt.getScrollTop()-k,A=0;if(L>xt){A=(xt-L)/k;L=xt}else if(L<0){A=-L/k;L=0}C*=1-A;yt.animateTo(L+.5|0,{easing:"outCubic",duration:C})}});e.scrollTo(0,0);u.style.overflow=a.style.overflow="hidden"},K=function(){var e=u.clientHeight,t=lt(),n,r,i,o,a,f,l,c,h,p,d;c=0;h=bt.length;for(;c<h;c++){n=bt[c];r=n.element;i=n.anchorTarget;o=n.keyFrames;a=0;f=o.length;for(;a<f;a++){l=o[a];p=l.offset;d=t[l.constant]||0;l.frame=p;if(l.isPercentage){p*=e;l.frame=p}if(l.mode==="relative"){it(r);l.frame=yt.relativeToAbsolute(i,l.anchors[0],l.anchors[1])-p;it(r,!0)}l.frame+=d;St&&!l.isEnd&&l.frame>xt&&(xt=l.frame)}}xt=s.max(xt,ct());c=0;h=bt.length;for(;c<h;c++){n=bt[c];o=n.keyFrames;a=0;f=o.length;for(;a<f;a++){l=o[a];d=t[l.constant]||0;l.isEnd&&(l.frame=xt-l.offset+d)}n.keyFrames.sort(gt)}},Q=function(e,t){var n=0,s=bt.length;for(;n<s;n++){var o=bt[n],u=o.element,a=o.smoothScrolling?e:t,f=o.keyFrames,l=f[0].frame,c=f[f.length-1].frame,h=a<l,g=a>c,y=f[h?0:f.length-1],b,w;if(h||g){if(h&&o.edge===-1||g&&o.edge===1)continue;pt(u,[h?d:m],[d,v,m]);o.edge=h?-1:1;switch(o.edgeStrategy){case"reset":it(u);continue;case"ease":a=y.frame;break;default:case"set":var E=y.props;for(b in E)if(i.call(E,b)){w=rt(E[b].value);r.setStyle(u,b,w)}continue}}else if(o.edge!==0){pt(u,[p,v],[d,m]);o.edge=0}var S=0,x=f.length-1;for(;S<x;S++)if(a>=f[S].frame&&a<=f[S+1].frame){var T=f[S],N=f[S+1];for(b in T.props)if(i.call(T.props,b)){var C=(a-T.frame)/(N.frame-T.frame);C=T.props[b].easing(C);w=nt(T.props[b].value,N.props[b].value,C);w=rt(w);r.setStyle(u,b,w)}break}}},G=function(){if(_t){_t=!1;ft()}var e=yt.getScrollTop(),t,i=mt(),s;if(Dt){if(i>=Dt.endTime){e=Dt.targetTop;t=Dt.done;Dt=n}else{s=Dt.easing((i-Dt.startTime)/Dt.duration);e=Dt.startTop+s*Dt.topDiff|0}yt.setScrollTop(e,!0)}else if(!jt){var o=Bt.targetTop-e;o&&(Bt={startTop:Lt,topDiff:e-Lt,targetTop:e,startTime:At,endTime:At+Ht});if(i<=Bt.endTime){s=V.sqrt((i-Bt.startTime)/Ht);e=Bt.startTop+s*Bt.topDiff|0}}qt&&wt&&r.setStyle(wt,"transform","translate(0, "+ -Rt+"px) "+Ut);if(jt||Lt!==e){kt=e>Lt?"down":e<Lt?"up":kt;jt=!1;var u={curTop:e,lastTop:Lt,maxTop:xt,direction:kt},a=Et.beforerender&&Et.beforerender.call(yt,u);if(a!==!1){Q(e,yt.getScrollTop());Lt=e;Et.render&&Et.render.call(yt,u)}t&&t.call(yt,!1)}At=i},Y=function(e){var t=0,n=e.keyFrames.length;for(;t<n;t++){var r=e.keyFrames[t],i,s,o,u={},a;while((a=D.exec(r.props))!==null){o=a[1];s=a[2];i=o.match(P);if(i!==null){o=i[1];i=i[2]}else i=E;s=s.indexOf("!")?Z(s):[s.slice(1)];u[o]={value:s,easing:V[i]}}r.props=u}},Z=function(e){var t=[];I.lastIndex=0;e=e.replace(I,function(e){return e.replace(j,function(e){return e/255*100+"%"})});if(U){q.lastIndex=0;e=e.replace(q,function(e){return U+e})}e=e.replace(j,function(e){t.push(+e);return"{?}"});t.unshift(e);return t},et=function(e){var t={},n,r;n=0;r=e.keyFrames.length;for(;n<r;n++)tt(e.keyFrames[n],t);t={};n=e.keyFrames.length-1;for(;n>=0;n--)tt(e.keyFrames[n],t)},tt=function(e,t){var n;for(n in t)i.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},nt=function(e,t,n){var r,i=e.length;if(i!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var s=[e[0]];r=1;for(;r<i;r++)s[r]=e[r]+(t[r]-e[r])*n;return s},rt=function(e){var t=1;F.lastIndex=0;return e[0].replace(F,function(){return e[t++]})},it=function(e,t){e=[].concat(e);var n,r,i=0,s=e.length;for(;i<s;i++){r=e[i];n=bt[r[A]];if(!n)continue;if(t){r.style.cssText=n.dirtyStyleAttr;pt(r,n.dirtyClassAttr)}else{n.dirtyStyleAttr=r.style.cssText;n.dirtyClassAttr=ht(r);r.style.cssText=n.styleAttr;pt(r,n.classAttr)}}},st=function(){Ut="translateZ(0)";r.setStyle(wt,"transform",Ut);var e=o(wt),t=e.getPropertyValue("transform"),n=e.getPropertyValue(U+"transform"),i=t&&t!=="none"||n&&n!=="none";i||(Ut="")};r.setStyle=function(e,t,n){var r=e.style;t=t.replace(H,B).replace("-","");if(t==="zIndex")isNaN(n)?r[t]=n:r[t]=""+(n|0);else if(t==="float")r.styleFloat=r.cssFloat=n;else try{R&&(r[R+t.slice(0,1).toUpperCase()+t.slice(1)]=n);r[t]=n}catch(i){}};var ot=r.addEvent=function(t,n,r){var i=function(t){t=t||e.event;t.target||(t.target=t.srcElement);t.preventDefault||(t.preventDefault=function(){t.returnValue=!1});return r.call(this,t)};n=n.split(" ");var s,o=0,u=n.length;for(;o<u;o++){s=n[o];t.addEventListener?t.addEventListener(s,r,!1):t.attachEvent("on"+s,i);zt.push({element:t,name:s,listener:r})}},ut=r.removeEvent=function(e,t,n){t=t.split(" ");var r=0,i=t.length;for(;r<i;r++)e.removeEventListener?e.removeEventListener(t[r],n,!1):e.detachEvent("on"+t[r],n)},at=function(){var e,t=0,n=zt.length;for(;t<n;t++){e=zt[t];ut(e.element,e.name,e.listener)}zt=[]},ft=function(){var e=yt.getScrollTop();xt=0;St&&!qt&&(a.style.height="auto");K();St&&!qt&&(a.style.height=xt+u.clientHeight+"px");qt?yt.setScrollTop(s.min(yt.getScrollTop(),xt)):yt.setScrollTop(e,!0);jt=!0},lt=function(){var e=u.clientHeight,t={},n,r;for(n in Nt){r=Nt[n];typeof r=="function"?r=r.call(yt):/p$/.test(r)&&(r=r.slice(0,-1)/100*e);t[n]=r}return t},ct=function(){var e=wt&&wt.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,u.scrollHeight,u.offsetHeight,u.clientHeight);return t-u.clientHeight},ht=function(t){var n="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[n];n="baseVal"}return t[n]},pt=function(t,r,i){var s="className";if(e.SVGElement&&t instanceof e.SVGElement){t=t[s];s="baseVal"}if(i===n){t[s]=r;return}var o=t[s],u=0,a=i.length;for(;u<a;u++)o=vt(o).replace(vt(i[u])," ");o=dt(o);var f=0,l=r.length;for(;f<l;f++)vt(o).indexOf(vt(r[f]))===-1&&(o+=" "+r[f]);t[s]=dt(o)},dt=function(e){return e.replace(M,"")},vt=function(e){return" "+e+" "},mt=Date.now||function(){return+(new Date)},gt=function(e,t){return e.frame-t.frame},yt,bt,wt,Et,St,xt=0,Tt=1,Nt,Ct,kt="down",Lt=-1,At=mt(),Ot=0,Mt=0,_t=!1,Dt,Pt,Ht,Bt,jt,Ft=0,It,qt=!1,Rt=0,Ut,zt=[],Wt;typeof define=="function"&&define.amd?define("skrollr",function(){return r}):e.skrollr=r})(window,document);(function(e,t,n,r){function b(e,t){return e[t]===r?l[t]:e[t]}function w(e,t){var n=l["on"+e];n&&(p(n)?n.call(t[0]):t.addClass(n.addClass||"").removeClass(n.removeClass||""));t.trigger("lazy"+e,[t]);T()}function E(t){w(t.type,e(this).off(o,E))}function S(n){if(!m.length)return;n=n||l.forceLoad;g=Infinity;var r=h.scrollTop(),s=t.innerHeight||h.height(),u=t.innerWidth||h.width(),f,c;for(f=0,c=m.length;f<c;f++){var d=m[f],v=d[0],y=d[i],b=!1,S=n,x;if(!e.contains(a,v))b=!0;else if(n||!y.visibleOnly||v.offsetWidth||v.offsetHeight){if(!S){var T=v.getBoundingClientRect(),N=y.edgeX,C=y.edgeY;x=T.top+r-C-s;S=x<=r&&T.bottom>-C&&T.left<=u+N&&T.right>-N}if(S){w("show",d);var k=y.srcAttr,L=p(k)?k(d):v.getAttribute(k);if(L){d.on(o,E);v.src=L}b=!0}else x<g&&(g=x)}if(b){m.splice(f--,1);c--}}c||w("complete",e(a))}function x(){if(y>1){y=1;S();setTimeout(x,l.throttle)}else y=0}function T(e){if(!m.length)return;if(e&&e.type==="scroll"&&e.currentTarget===t&&g>=h.scrollTop())return;y||setTimeout(x,0);y=2}function N(){h.lazyLoadXT()}function C(){S(!0)}var i="lazyLoadXT",s="lazied",o="load error",u="lazy-hidden",a=n.documentElement||n.body,f=t.onscroll===r||!!t.operamini||!a.getBoundingClientRect,l={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:f,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove",forceEvent:"",oninit:{removeClass:"lazy"},onshow:{addClass:u},onload:{removeClass:u,addClass:"lazy-loaded"},onerror:{removeClass:u},checkDuplicates:!0},c={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},h=e(t),p=e.isFunction,d=e.extend,v=e.data||function(t,n){return e(t).data(n)},m=[],g=0,y=0;e[i]=d(l,c,e[i]);e.fn[i]=function(n){n=n||{};var r=b(n,"blankImage"),o=b(n,"checkDuplicates"),u=b(n,"scrollContainer"),a={},f;e(u).on("scroll",T);for(f in c)a[f]=b(n,f);return this.each(function(){if(this===t)e(l.selector).lazyLoadXT(n);else{if(o&&v(this,s))return;var u=e(this).data(s,1);r&&u[0].tagName==="IMG"&&!this.src&&(this.src=r);u[i]=d({},a);w("init",u);m.push(u)}})};e(n).ready(function(){w("start",h);h.on(l.loadEvent,N).on(l.updateEvent,T).on(l.forceEvent,C);e(n).on(l.updateEvent,T);l.autoInit&&N()})})(window.jQuery||window.Zepto,window,document);(function(e){var t=e.lazyLoadXT;t.selector+=",video,iframe[data-src]";t.videoPoster="data-poster";e(document).on("lazyshow","video",function(n,r){var i=r.lazyLoadXT.srcAttr,s=e.isFunction(i);r.attr("poster",r.attr(t.videoPoster)).children("source,track").each(function(){var t=e(this);t.attr("src",s?i(t):t.attr(i))});this.load()})})(window.jQuery||window.Zepto);$(function(){$(".toggle-nav").click(function(){$("body").toggleClass("nav-open")});var e=$(".screen").length;$(".screen").each(function(t){$(this).attr("style","z-index: "+(e-t));$(this).attr("data-"+t*100+"p","opacity:1; display: block;");$(this).attr("data-"+(t*100+70)+"p","opacity:0; display: none;")});var t=skrollr.init();$(".open-project").click(function(){$(".individual-project").toggleClass("project-open")});$("body").css("display","none");$("body").fadeIn(2e3)});
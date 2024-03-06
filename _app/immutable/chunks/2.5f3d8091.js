import{s as re,B as Ze,G as ge,e as Re,H as ye,h as D,d as x,j as p,i as O,y as L,C as et,D as tt,E as nt,l as it,m as st,n as rt,I as Q,J as he,w as te,K as Z,f as T,g as C,L as at,M as ot,o as lt,b as ut,a as le,c as ue,r as ct}from"./scheduler.323fc80a.js";import{S as ae,i as oe,a as S,t as V,b as q,d as G,m as U,e as W}from"./index.1fab7241.js";import{_ as v}from"./preload-helper.a4192956.js";import{w as ft}from"./index.5c252173.js";function Fe(t,e){const n={},i={},s={$$scope:1};let r=t.length;for(;r--;){const a=t[r],o=e[r];if(o){for(const u in a)u in o||(i[u]=1);for(const u in o)s[u]||(n[u]=o[u],s[u]=1);t[r]=o}else for(const u in a)s[u]=1}for(const a in i)a in n||(n[a]=void 0);return n}function He(t){return typeof t=="object"&&t!==null?t:{}}function Ae(t){let e,n;return{c(){e=ge("title"),n=it(t[0])},l(i){e=ye(i,"title",{});var s=D(e);n=st(s,t[0]),s.forEach(x)},m(i,s){O(i,e,s),L(e,n)},p(i,s){s&1&&rt(n,i[0])},d(i){i&&x(e)}}}function ht(t){let e,n,i,s=t[0]&&Ae(t);const r=t[3].default,a=Ze(r,t,t[2],null);return{c(){e=ge("svg"),s&&s.c(),n=Re(),a&&a.c(),this.h()},l(o){e=ye(o,"svg",{xmlns:!0,viewBox:!0,class:!0});var u=D(e);s&&s.l(u),n=Re(),a&&a.l(u),u.forEach(x),this.h()},h(){p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"viewBox",t[1]),p(e,"class","svelte-c8tyih")},m(o,u){O(o,e,u),s&&s.m(e,null),L(e,n),a&&a.m(e,null),i=!0},p(o,[u]){o[0]?s?s.p(o,u):(s=Ae(o),s.c(),s.m(e,n)):s&&(s.d(1),s=null),a&&a.p&&(!i||u&4)&&et(a,r,o,o[2],i?nt(r,o[2],u,null):tt(o[2]),null),(!i||u&2)&&p(e,"viewBox",o[1])},i(o){i||(S(a,o),i=!0)},o(o){V(a,o),i=!1},d(o){o&&x(e),s&&s.d(),a&&a.d(o)}}}function dt(t,e,n){let{$$slots:i={},$$scope:s}=e,{title:r=null}=e,{viewBox:a}=e;return t.$$set=o=>{"title"in o&&n(0,r=o.title),"viewBox"in o&&n(1,a=o.viewBox),"$$scope"in o&&n(2,s=o.$$scope)},[r,a,s,i]}class Be extends ae{constructor(e){super(),oe(this,e,dt,ht,re,{title:0,viewBox:1})}}function mt(t){let e;return{c(){e=ge("path"),this.h()},l(n){e=ye(n,"path",{d:!0}),D(e).forEach(x),this.h()},h(){p(e,"d","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z")},m(n,i){O(n,e,i)},p:te,d(n){n&&x(e)}}}function gt(t){let e,n;const i=[{viewBox:"0 0 448 512"},t[0]];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=Q(s,i[r]);return e=new Be({props:s}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,a){U(e,r,a),n=!0},p(r,[a]){const o=a&1?Fe(i,[i[0],He(r[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){W(e,r)}}}function yt(t,e,n){return t.$$set=i=>{n(0,e=Q(Q({},e),he(i)))},e=he(e),[e]}class _t extends ae{constructor(e){super(),oe(this,e,yt,gt,re,{})}}function pt(t){let e;return{c(){e=ge("path"),this.h()},l(n){e=ye(n,"path",{d:!0}),D(e).forEach(x),this.h()},h(){p(e,"d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z")},m(n,i){O(n,e,i)},p:te,d(n){n&&x(e)}}}function vt(t){let e,n;const i=[{viewBox:"0 0 496 512"},t[0]];let s={$$slots:{default:[pt]},$$scope:{ctx:t}};for(let r=0;r<i.length;r+=1)s=Q(s,i[r]);return e=new Be({props:s}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,a){U(e,r,a),n=!0},p(r,[a]){const o=a&1?Fe(i,[i[0],He(r[0])]):{};a&2&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){V(e.$$.fragment,r),n=!1},d(r){W(e,r)}}}function xt(t,e,n){return t.$$set=i=>{n(0,e=Q(Q({},e),he(i)))},e=he(e),[e]}class wt extends ae{constructor(e){super(),oe(this,e,xt,vt,re,{})}}const we="generated",ln="pointerdown",un="pointerup",cn="pointerleave",fn="pointerout",hn="pointermove",dn="touchstart",mn="touchend",gn="touchmove",yn="touchcancel",_n="resize",pn="visibilitychange",De="tsParticles - Error",j=100,Te=.5,Ne=1e3;function vn(t){return typeof t=="boolean"}function ne(t){return typeof t=="string"}function X(t){return typeof t=="number"}function ce(t){return typeof t=="object"&&t!==null}function F(t){return Array.isArray(t)}const $={x:0,y:0,z:0},Ce=2,bt=1;class P{constructor(e,n,i){if(this._updateFromAngle=(s,r)=>{this.x=Math.cos(s)*r,this.y=Math.sin(s)*r},!X(e)&&e){this.x=e.x,this.y=e.y;const s=e;this.z=s.z?s.z:$.z}else if(e!==void 0&&n!==void 0)this.x=e,this.y=n,this.z=i??$.z;else throw new Error(`${De} Vector3d not initialized correctly`)}static get origin(){return P.create($.x,$.y,$.z)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return P.create(e.x,e.y,e.z)}static create(e,n,i){return new P(e,n,i)}add(e){return P.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return P.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return P.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**Ce+this.y**Ce}mult(e){return P.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;e!=0&&this.multTo(bt/e)}rotate(e){return P.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),$.z)}setTo(e){this.x=e.x,this.y=e.y;const n=e;this.z=n.z?n.z:$.z}sub(e){return P.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class k extends P{constructor(e,n){super(e,n,$.z)}static get origin(){return k.create($.x,$.y)}static clone(e){return k.create(e.x,e.y)}static create(e,n){return new k(e,n)}}let Mt=Math.random;const Pe=new Map,Et=2,It=Math.PI*Et;function xn(t,e){Pe.get(t)||Pe.set(t,e)}function wn(t){return Pe.get(t)??(e=>e)}function R(){return Le(Mt(),0,1-Number.EPSILON)}function Le(t,e,n){return Math.min(Math.max(t,e),n)}function be(t,e,n,i){return Math.floor((t*n+e*i)/(n+i))}function J(t){const e=pe(t),n=0;let i=_e(t);return e===i&&(i=n),R()*(e-i)+i}function w(t){return X(t)?t:J(t)}function _e(t){return X(t)?t:t.min}function pe(t){return X(t)?t:t.max}function ee(t,e){if(t===e||e===void 0&&X(t))return t;const n=_e(t),i=pe(t);return e!==void 0?{min:Math.min(n,e),max:Math.max(i,e)}:ee(n,i)}function qe(t,e){const n=t.x-e.x,i=t.y-e.y,s=2;return{dx:n,dy:i,distance:Math.sqrt(n**s+i**s)}}function bn(t,e){return qe(t,e).distance}function Pt(t){return t*Math.PI/180}function Mn(t,e,n){if(X(t))return Pt(t);const i=0,s=.5,r=.25,a=s+r;switch(t){case"top":return-Math.PI*s;case"top-right":return-Math.PI*r;case"right":return i;case"bottom-right":return Math.PI*r;case"bottom":return Math.PI*s;case"bottom-left":return Math.PI*a;case"left":return Math.PI;case"top-left":return-Math.PI*a;case"inside":return Math.atan2(n.y-e.y,n.x-e.x);case"outside":return Math.atan2(e.y-n.y,e.x-n.x);default:return R()*It}}function En(t){const e=k.origin;return e.length=1,e.angle=t,e}function Oe(t,e,n,i){return k.create(t.x*(n-i)/(n+i)+e.x*2*i/(n+i),t.y)}function In(t){var e,n;return{x:((e=t.position)==null?void 0:e.x)??R()*t.size.width,y:((n=t.position)==null?void 0:n.y)??R()*t.size.height}}function Ge(t){return t?t.endsWith("%")?parseFloat(t)/j:parseFloat(t):1}const Dt={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function Lt(){return Dt}function ze(t){const e={bounced:!1},{pSide:n,pOtherSide:i,rectSide:s,rectOtherSide:r,velocity:a,factor:o}=t,u=.5,m=0;return i.min<r.min||i.min>r.max||i.max<r.min||i.max>r.max||(n.max>=s.min&&n.max<=(s.max+s.min)*u&&a>m||n.min<=s.max&&n.min>(s.max+s.min)*u&&a<m)&&(e.velocity=a*-o,e.bounced=!0),e}function $t(t,e){const n=ie(e,i=>t.matches(i));return F(n)?n.some(i=>i):n}function ve(){return typeof window>"u"||!window||typeof window.document>"u"||!window.document}function Rt(){return!ve()&&typeof matchMedia<"u"}function Pn(t){if(Rt())return matchMedia(t)}function Dn(t){if(!(ve()||typeof IntersectionObserver>"u"))return new IntersectionObserver(t)}function Ln(t){if(!(ve()||typeof MutationObserver>"u"))return new MutationObserver(t)}function Ue(t,e){return t===e||F(e)&&e.indexOf(t)>-1}async function $n(t,e){try{await document.fonts.load(`${e??"400"} 36px '${t??"Verdana"}'`)}catch{}}function At(t){return Math.floor(R()*t.length)}function $e(t,e,n=!0){return t[e!==void 0&&n?e%t.length:At(t)]}function Rn(t,e,n,i,s){return Tt(We(t,i??0),e,n,s)}function Tt(t,e,n,i){let s=!0;return(!i||i==="bottom")&&(s=t.top<e.height+n.x),s&&(!i||i==="left")&&(s=t.right>n.x),s&&(!i||i==="right")&&(s=t.left<e.width+n.y),s&&(!i||i==="top")&&(s=t.bottom>n.y),s}function We(t,e){return{bottom:t.y+e,left:t.x-e,right:t.x+e,top:t.y-e}}function Se(t,...e){for(const n of e){if(n==null)continue;if(!ce(n)){t=n;continue}const i=Array.isArray(n);i&&(ce(t)||!t||!Array.isArray(t))?t=[]:!i&&(ce(t)||!t||Array.isArray(t))&&(t={});for(const s in n){if(s==="__proto__")continue;const r=n,a=r[s],o=t;o[s]=ce(a)&&Array.isArray(a)?a.map(u=>Se(o[s],u)):Se(o[s],a)}}return t}function An(t,e){return!!Je(e,n=>n.enable&&Ue(t,n.mode))}function Tn(t,e,n){ie(e,i=>{const s=i.mode;i.enable&&Ue(t,s)&&Ct(i,n)})}function Ct(t,e){const n=t.selectors;ie(n,i=>{e(i,t)})}function Cn(t,e){if(!(!e||!t))return Je(t,n=>$t(e,n.selectors))}function On(t){return{position:t.getPosition(),radius:t.getRadius(),mass:t.getMass(),velocity:t.velocity,factor:k.create(w(t.options.bounce.horizontal.value),w(t.options.bounce.vertical.value))}}function zn(t,e){const{x:n,y:i}=t.velocity.sub(e.velocity),[s,r]=[t.position,e.position],{dx:a,dy:o}=qe(r,s),u=0;if(n*a+i*o<u)return;const m=-Math.atan2(o,a),f=t.mass,h=e.mass,l=t.velocity.rotate(m),g=e.velocity.rotate(m),d=Oe(l,g,f,h),c=Oe(g,l,f,h),_=d.rotate(-m),b=c.rotate(-m);t.velocity.x=_.x*t.factor.x,t.velocity.y=_.y*t.factor.y,e.velocity.x=b.x*e.factor.x,e.velocity.y=b.y*e.factor.y}function Sn(t,e){const n=t.getPosition(),i=t.getRadius(),s=We(n,i),r=t.options.bounce,a=ze({pSide:{min:s.left,max:s.right},pOtherSide:{min:s.top,max:s.bottom},rectSide:{min:e.left,max:e.right},rectOtherSide:{min:e.top,max:e.bottom},velocity:t.velocity.x,factor:w(r.horizontal.value)});a.bounced&&(a.velocity!==void 0&&(t.velocity.x=a.velocity),a.position!==void 0&&(t.position.x=a.position));const o=ze({pSide:{min:s.top,max:s.bottom},pOtherSide:{min:s.left,max:s.right},rectSide:{min:e.top,max:e.bottom},rectOtherSide:{min:e.left,max:e.right},velocity:t.velocity.y,factor:w(r.vertical.value)});o.bounced&&(o.velocity!==void 0&&(t.velocity.y=o.velocity),o.position!==void 0&&(t.position.y=o.position))}function ie(t,e){return F(t)?t.map((i,s)=>e(i,s)):e(t,0)}function je(t,e,n){return F(t)?$e(t,e,n):t}function Je(t,e){return F(t)?t.find((i,s)=>e(i,s)):e(t,0)?t:void 0}function Vn(t,e){const n=t.value,i=t.animation,s={delayTime:w(i.delay)*Ne,enable:i.enable,value:w(t.value)*e,max:pe(n)*e,min:_e(n)*e,loops:0,maxLoops:w(i.count),time:0},r=1;if(i.enable){switch(s.decay=r-w(i.decay),i.mode){case"increase":s.status="increasing";break;case"decrease":s.status="decreasing";break;case"random":s.status=R()>=Te?"increasing":"decreasing";break}const a=i.mode==="auto";switch(i.startValue){case"min":s.value=s.min,a&&(s.status="increasing");break;case"max":s.value=s.max,a&&(s.status="decreasing");break;case"random":default:s.value=J(s),a&&(s.status=R()>=Te?"increasing":"decreasing");break}}return s.initialValue=s.value,s}function Ot(t,e){if(!(t.mode==="percent")){const{mode:s,...r}=t;return r}return"x"in t?{x:t.x/j*e.width,y:t.y/j*e.height}:{width:t.width/j*e.width,height:t.height/j*e.height}}function kn(t,e){return Ot(t,e)}function zt(t,e,n,i,s){switch(e){case"max":n>=s&&t.destroy();break;case"min":n<=i&&t.destroy();break}}function Fn(t,e,n,i,s){if(t.destroyed||!e||!e.enable||(e.maxLoops??0)>0&&(e.loops??0)>(e.maxLoops??0))return;const f=(e.velocity??0)*s.factor,h=e.min,l=e.max,g=e.decay??1;if(e.time||(e.time=0),(e.delayTime??0)>0&&e.time<(e.delayTime??0)&&(e.time+=s.value),!((e.delayTime??0)>0&&e.time<(e.delayTime??0))){switch(e.status){case"increasing":e.value>=l?(n?e.status="decreasing":e.value-=l,e.loops||(e.loops=0),e.loops++):e.value+=f;break;case"decreasing":e.value<=h?(n?e.status="increasing":e.value+=l,e.loops||(e.loops=0),e.loops++):e.value-=f}e.velocity&&g!==1&&(e.velocity*=g),zt(t,i,e.value,h,l),t.destroyed||(e.value=Le(e.value,h,l))}}class St{constructor(){this._listeners=new Map}addEventListener(e,n){this.removeEventListener(e,n);let i=this._listeners.get(e);i||(i=[],this._listeners.set(e,i)),i.push(n)}dispatchEvent(e,n){const i=this._listeners.get(e);i==null||i.forEach(s=>s(n))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,n){const i=this._listeners.get(e);if(!i)return;const s=i.length,r=i.indexOf(n);if(r<0)return;const o=1;s===o?this._listeners.delete(e):i.splice(r,o)}}async function Me(t,e,n,i=!1){let s=e.get(t);return(!s||i)&&(s=await Promise.all([...n.values()].map(r=>r(t))),e.set(t,s)),s}async function Vt(t){const e=je(t.url,t.index);if(!e)return t.fallback;const n=await fetch(e);return n.ok?await n.json():(Lt().error(`${De} ${n.status} while retrieving config file`),t.fallback)}class kt{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new St,this._initialized=!1,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.effectDrawers=new Map,this.shapeDrawers=new Map,this.pathGenerators=new Map}get configs(){const e={};for(const[n,i]of this._configs)e[n]=i;return e}get version(){return"3.3.0"}addConfig(e){const n=e.key??e.name??"default";this._configs.set(n,e),this._eventDispatcher.dispatchEvent("configAdded",{data:{name:n,config:e}})}async addEffect(e,n,i=!0){ie(e,s=>{this.getEffectDrawer(s)||this.effectDrawers.set(s,n)}),await this.refresh(i)}addEventListener(e,n){this._eventDispatcher.addEventListener(e,n)}async addInteractor(e,n,i=!0){this._initializers.interactors.set(e,n),await this.refresh(i)}async addMover(e,n,i=!0){this._initializers.movers.set(e,n),await this.refresh(i)}async addParticleUpdater(e,n,i=!0){this._initializers.updaters.set(e,n),await this.refresh(i)}async addPathGenerator(e,n,i=!0){this.getPathGenerator(e)||this.pathGenerators.set(e,n),await this.refresh(i)}async addPlugin(e,n=!0){this.getPlugin(e.id)||this.plugins.push(e),await this.refresh(n)}async addPreset(e,n,i=!1,s=!0){(i||!this.getPreset(e))&&this.presets.set(e,n),await this.refresh(s)}async addShape(e,n,i=!0){ie(e,s=>{this.getShapeDrawer(s)||this.shapeDrawers.set(s,n)}),await this.refresh(i)}clearPlugins(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}dispatchEvent(e,n){this._eventDispatcher.dispatchEvent(e,n)}dom(){return this._domArray}domItem(e){const n=this.dom(),i=n[e];if(!i||i.destroyed){n.splice(e,1);return}return i}async getAvailablePlugins(e){const n=new Map;for(const i of this.plugins)i.needsPlugin(e.actualOptions)&&n.set(i.id,await i.getPlugin(e));return n}getEffectDrawer(e){return this.effectDrawers.get(e)}async getInteractors(e,n=!1){return await Me(e,this.interactors,this._initializers.interactors,n)}async getMovers(e,n=!1){return await Me(e,this.movers,this._initializers.movers,n)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find(n=>n.id===e)}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.shapeDrawers.get(e)}getSupportedEffects(){return this.effectDrawers.keys()}getSupportedShapes(){return this.shapeDrawers.keys()}async getUpdaters(e,n=!1){return await Me(e,this.updaters,this._initializers.updaters,n)}init(){this._initialized||(this._initialized=!0)}async load(e){var c;const i=e.id??((c=e.element)==null?void 0:c.id)??`tsparticles${Math.floor(R()*1e4)}`,{index:s,url:r}=e,a=r?await Vt({fallback:e.options,url:r,index:s}):e.options;let o=e.element??document.getElementById(i);o||(o=document.createElement("div"),o.id=i,document.body.append(o));const u=je(a,s),m=this.dom(),f=m.findIndex(_=>_.id.description===i),h=0;if(f>=h){const _=this.domItem(f);if(_&&!_.destroyed){_.destroy();const b=1;m.splice(f,b)}}let l;if(o.tagName.toLowerCase()==="canvas")l=o,l.dataset[we]="false";else{const _=o.getElementsByTagName("canvas");_.length?(l=_[0],l.dataset[we]="false"):(l=document.createElement("canvas"),l.dataset[we]="true",o.appendChild(l))}l.style.width||(l.style.width="100%"),l.style.height||(l.style.height="100%");const{Container:g}=await v(()=>import("./Container.e17f2684.js"),["./Container.e17f2684.js","./CanvasUtils.bf617a16.js","./OptionsColor.f4354951.js","./ValueWithRandom.947c8c5c.js","./Ranges.6306d9c8.js"],import.meta.url),d=new g(this,i,u);return f>=h?m.splice(f,0,d):m.push(d),d.canvas.loadCanvas(l),await d.start(),d}loadOptions(e,n){for(const i of this.plugins)i.loadOptions(e,n)}loadParticlesOptions(e,n,...i){var r;const s=this.updaters.get(e);if(s)for(const a of s)(r=a.loadOptions)==null||r.call(a,n,...i)}async refresh(e=!0){e&&await Promise.all(this.dom().map(n=>n.refresh()))}removeEventListener(e,n){this._eventDispatcher.removeEventListener(e,n)}setOnClickHandler(e){const n=this.dom();if(!n.length)throw new Error(`${De} can only set click handlers after calling tsParticles.load()`);for(const i of n)i.addClickHandler(e)}}const de="random",fe="mid",xe=new Map;function Ve(t){xe.set(t.key,t)}function Ft(t){for(const[,u]of xe)if(t.startsWith(u.stringPrefix))return u.parseString(t);const e=/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,n=t.replace(e,(u,m,f,h,l)=>m+m+f+f+h+h+(l!==void 0?l+l:"")),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,s=i.exec(n),r=16,a=1,o=255;return s?{a:s[4]!==void 0?parseInt(s[4],r)/o:a,b:parseInt(s[3],r),g:parseInt(s[2],r),r:parseInt(s[1],r)}:void 0}function me(t,e,n=!0){if(!t)return;const i=ne(t)?{value:t}:t;if(ne(i.value))return Qe(i.value,e,n);if(F(i.value))return me({value:$e(i.value,e,n)});for(const[,s]of xe){const r=s.handleRangeColor(i);if(r)return r}}function Qe(t,e,n=!0){if(!t)return;const i=ne(t)?{value:t}:t;if(ne(i.value))return i.value===de?Ke():Bt(i.value);if(F(i.value))return Qe({value:$e(i.value,e,n)});for(const[,s]of xe){const r=s.handleColor(i);if(r)return r}}function Hn(t,e,n=!0){const i=me(t,e,n);return i?Ht(i):void 0}function Ht(t){const f=t.r/255,h=t.g/255,l=t.b/255,g=Math.max(f,h,l),d=Math.min(f,h,l),c={h:0,l:(g+d)*.5,s:0};return g!==d&&(c.s=c.l<.5?(g-d)/(g+d):(g-d)/(2-g-d),c.h=f===g?(h-l)/(g-d):c.h=h===g?2+(l-f)/(g-d):2*2+(f-h)/(g-d)),c.l*=100,c.s*=100,c.h*=60,c.h<0&&(c.h+=360),c.h>=360&&(c.h-=360),c}function Bt(t){return Ft(t)}function K(t){const a=(t.h%360+360)%360,o=Math.max(0,Math.min(100,t.s)),u=Math.max(0,Math.min(100,t.l)),m=a/360,f=o/100,h=u/100,l=255,g=3;if(o===0){const I=Math.round(h*l);return{r:I,g:I,b:I}}const d=.5,c=2,_=(I,Y,E)=>{if(E<0&&E++,E>1&&E--,E*6<1)return I+(Y-I)*6*E;if(E*c<1)return Y;if(E*g<1*c){const Ye=c/g;return I+(Y-I)*(Ye-E)*6}return I},b=1,y=h<d?h*(b+f):h+f-h*f,M=c*h-y,A=1,z=A/g,H=Math.min(l,l*_(M,y,m+z)),B=Math.min(l,l*_(M,y,m)),N=Math.min(l,l*_(M,y,m-z));return{r:Math.round(H),g:Math.round(B),b:Math.round(N)}}function Nt(t){const e=K(t);return{a:t.a,b:e.b,g:e.g,r:e.r}}function Ke(t){const n=t??0,i=256;return{b:Math.floor(J(ee(n,i))),g:Math.floor(J(ee(n,i))),r:Math.floor(J(ee(n,i)))}}function Bn(t,e){return`rgba(${t.r}, ${t.g}, ${t.b}, ${e??1})`}function Nn(t,e){return`hsla(${t.h}, ${t.s}%, ${t.l}%, ${e??1})`}function qt(t,e,n,i){let s=t,r=e;return s.r===void 0&&(s=K(t)),r.r===void 0&&(r=K(e)),{b:be(s.b,r.b,n,i),g:be(s.g,r.g,n,i),r:be(s.r,r.r,n,i)}}function qn(t,e,n){if(n===de)return Ke();if(n===fe){const i=t.getFillColor()??t.getStrokeColor(),s=(e==null?void 0:e.getFillColor())??(e==null?void 0:e.getStrokeColor());if(i&&s&&e)return qt(i,s,t.getRadius(),e.getRadius());{const r=i??s;if(r)return K(r)}}else return n}function Gn(t,e,n){const i=ne(t)?t:t.value;return i===de?n?me({value:i}):e?de:fe:i===fe?fe:me({value:i})}function Un(t){return t!==void 0?{h:t.h.value,s:t.s.value,l:t.l.value}:void 0}function Wn(t,e,n){const i={h:{enable:!1,value:t.h},s:{enable:!1,value:t.s},l:{enable:!1,value:t.l}};return e&&(Ee(i.h,e.h,n),Ee(i.s,e.s,n),Ee(i.l,e.l,n)),i}function Ee(t,e,n){t.enable=e.enable;const i=0,s=1,r=0,a=0;t.enable?(t.velocity=w(e.speed)/j*n,t.decay=s-w(e.decay),t.status="increasing",t.loops=r,t.maxLoops=w(e.count),t.time=a,t.delayTime=w(e.delay)*Ne,e.sync||(t.velocity*=R(),t.value*=R()),t.initialValue=t.value,t.offset=ee(e.offset)):t.velocity=i}function Ie(t,e,n,i){if(!t||!t.enable||(t.maxLoops??0)>0&&(t.loops??0)>(t.maxLoops??0)||(t.time||(t.time=0),(t.delayTime??0)>0&&t.time<(t.delayTime??0)&&(t.time+=i.value),(t.delayTime??0)>0&&t.time<(t.delayTime??0)))return;const f=t.offset?J(t.offset):0,h=(t.velocity??0)*i.factor+f*3.6,l=t.decay??1,g=pe(e),d=_e(e);if(!n||t.status==="increasing")t.value+=h,t.value>g&&(t.loops||(t.loops=0),t.loops++,n?t.status="decreasing":t.value-=g);else{t.value-=h;const c=0;t.value<c&&(t.loops||(t.loops=0),t.loops++,t.status="increasing")}t.velocity&&l!==1&&(t.velocity*=l),t.value=Le(t.value,d,g)}function jn(t,e){if(!t)return;const{h:n,s:i,l:s}=t,r={h:{min:0,max:360},s:{min:0,max:100},l:{min:0,max:100}};n&&Ie(n,r.h,!1,e),i&&Ie(i,r.s,!0,e),s&&Ie(s,r.l,!0,e)}class Gt{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.s!==void 0&&i.l!==void 0)return K(i)}handleRangeColor(e){const n=e.value,i=n.hsl??e.value;if(i.h!==void 0&&i.l!==void 0)return K({h:w(i.h),l:w(i.l),s:w(i.s)})}parseString(e){if(!e.startsWith("hsl"))return;const n=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e),s=4,r=1,a=10;return i?Nt({a:i.length>s?Ge(i[5]):r,h:parseInt(i[1],a),l:parseInt(i[3],a),s:parseInt(i[2],a)}):void 0}}class Ut{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return i}handleRangeColor(e){const n=e.value,i=n.rgb??e.value;if(i.r!==void 0)return{r:w(i.r),g:w(i.g),b:w(i.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const n=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,i=n.exec(e),s=10,r=4,a=1;return i?{a:i.length>r?Ge(i[5]):a,b:parseInt(i[3],s),g:parseInt(i[2],s),r:parseInt(i[1],s)}:void 0}}function Wt(){const t=new Ut,e=new Gt;Ve(t),Ve(e);const n=new kt;return n.init(),n}const se=Wt();ve()||(window.tsParticles=se);const Xe=ft(!1);function jt(t){let e;return{c(){e=T("div"),this.h()},l(n){e=C(n,"DIV",{id:!0,class:!0,style:!0}),D(e).forEach(x),this.h()},h(){p(e,"id",t[2]),p(e,"class",t[0]),p(e,"style",t[1])},m(n,i){O(n,e,i)},p(n,[i]){i&4&&p(e,"id",n[2]),i&1&&p(e,"class",n[0]),i&2&&p(e,"style",n[1])},i:te,o:te,d(n){n&&x(e)}}}function Jt(t,e,n){let{class:i=""}=e,s=!1,{style:r=""}=e,{options:a={}}=e,{url:o=""}=e,{id:u="tsparticles"}=e;const m=at(),f="particlesLoaded";let h=u;function l(){if(h){const c=se.dom().find(_=>_.id.toString()===h);c&&c.destroy()}}const g=Xe.subscribe(c=>{s=c,d()});ot(()=>{g(),l()}),lt(()=>{d()});async function d(){if(l(),!!s)if(u){const c=b=>{m(f,{particles:b}),h=u},_=await se.load({id:u,options:a,url:o});c(_)}else m(f,{particles:void 0})}return ut(async()=>{await d()}),t.$$set=c=>{"class"in c&&n(0,i=c.class),"style"in c&&n(1,r=c.style),"options"in c&&n(3,a=c.options),"url"in c&&n(4,o=c.url),"id"in c&&n(2,u=c.id)},[i,r,u,a,o]}class ke extends ae{constructor(e){super(),oe(this,e,Jt,jt,re,{class:0,style:1,options:3,url:4,id:2})}get class(){return this.$$.ctx[0]}set class(e){this.$$set({class:e}),Z()}get style(){return this.$$.ctx[1]}set style(e){this.$$set({style:e}),Z()}get options(){return this.$$.ctx[3]}set options(e){this.$$set({options:e}),Z()}get url(){return this.$$.ctx[4]}set url(e){this.$$set({url:e}),Z()}get id(){return this.$$.ctx[2]}set id(e){this.$$set({id:e}),Z()}}async function Qt(t){se.init(),await t(se),Xe.set(!0)}async function Kt(t,e=!0){const{loadParallaxMover:n}=await v(()=>import("./index.0f8ae59c.js"),["./index.0f8ae59c.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalAttractInteraction:i}=await v(()=>import("./index.f06b9a91.js"),["./index.f06b9a91.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalBounceInteraction:s}=await v(()=>import("./index.720e1ed0.js"),["./index.720e1ed0.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalBubbleInteraction:r}=await v(()=>import("./index.3a49a6e7.js"),["./index.3a49a6e7.js","./preload-helper.a4192956.js","./OptionsColor.f4354951.js"],import.meta.url),{loadExternalConnectInteraction:a}=await v(()=>import("./index.4ac98715.js"),["./index.4ac98715.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalGrabInteraction:o}=await v(()=>import("./index.18a686eb.js"),["./index.18a686eb.js","./preload-helper.a4192956.js","./OptionsColor.f4354951.js"],import.meta.url),{loadExternalPauseInteraction:u}=await v(()=>import("./index.d4c0c3f8.js"),["./index.d4c0c3f8.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalPushInteraction:m}=await v(()=>import("./index.c3d599e7.js"),["./index.c3d599e7.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalRemoveInteraction:f}=await v(()=>import("./index.a6a9d26f.js"),["./index.a6a9d26f.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalRepulseInteraction:h}=await v(()=>import("./index.567c8e0d.js"),["./index.567c8e0d.js","./preload-helper.a4192956.js"],import.meta.url),{loadExternalSlowInteraction:l}=await v(()=>import("./index.2eba2486.js"),["./index.2eba2486.js","./preload-helper.a4192956.js"],import.meta.url),{loadParticlesAttractInteraction:g}=await v(()=>import("./index.313845b0.js"),["./index.313845b0.js","./preload-helper.a4192956.js"],import.meta.url),{loadParticlesCollisionsInteraction:d}=await v(()=>import("./index.e875d005.js"),["./index.e875d005.js","./preload-helper.a4192956.js"],import.meta.url),{loadParticlesLinksInteraction:c}=await v(()=>import("./index.4f075d92.js"),["./index.4f075d92.js","./preload-helper.a4192956.js","./OptionsColor.f4354951.js"],import.meta.url),{loadEasingQuadPlugin:_}=await v(()=>import("./index.de84f04b.js"),[],import.meta.url),{loadEmojiShape:b}=await v(()=>import("./index.7192ff6f.js").then(E=>E.i),["./index.7192ff6f.js","./preload-helper.a4192956.js"],import.meta.url),{loadImageShape:y}=await v(()=>import("./index.065bbb84.js").then(E=>E.i),["./index.065bbb84.js","./preload-helper.a4192956.js"],import.meta.url),{loadLineShape:M}=await v(()=>import("./index.3e018e06.js"),["./index.3e018e06.js","./preload-helper.a4192956.js"],import.meta.url),{loadPolygonShape:A}=await v(()=>import("./index.ac4fd8d3.js"),["./index.ac4fd8d3.js","./preload-helper.a4192956.js"],import.meta.url),{loadSquareShape:z}=await v(()=>import("./index.b1aee72b.js"),["./index.b1aee72b.js","./preload-helper.a4192956.js"],import.meta.url),{loadStarShape:H}=await v(()=>import("./index.227429e1.js"),["./index.227429e1.js","./preload-helper.a4192956.js"],import.meta.url),{loadLifeUpdater:B}=await v(()=>import("./index.68736c80.js"),["./index.68736c80.js","./preload-helper.a4192956.js"],import.meta.url),{loadRotateUpdater:N}=await v(()=>import("./index.fd9843ba.js"),["./index.fd9843ba.js","./preload-helper.a4192956.js"],import.meta.url),{loadStrokeColorUpdater:I}=await v(()=>import("./index.a0fcc3d4.js"),["./index.a0fcc3d4.js","./preload-helper.a4192956.js"],import.meta.url),{loadBasic:Y}=await v(()=>import("./index.14262f7f.js"),["./index.14262f7f.js","./preload-helper.a4192956.js"],import.meta.url);await n(t,!1),await i(t,!1),await s(t,!1),await r(t,!1),await a(t,!1),await o(t,!1),await u(t,!1),await m(t,!1),await f(t,!1),await h(t,!1),await l(t,!1),await g(t,!1),await d(t,!1),await c(t,!1),await _(),await b(t,!1),await y(t,!1),await M(t,!1),await A(t,!1),await z(t,!1),await H(t,!1),await B(t,!1),await N(t,!1),await I(t,!1),await Y(t,e)}function Xt(t){let e,n,i,s,r,a,o="Nice to meet you!👋 <br/> I&#39;m Jerico, a Physicist 📚 <br/> turned Data Engineer 💻.",u,m,f,h,l,g,d,c,_,b;return e=new ke({props:{id:"tsparticles",class:"put your classes here",style:"",options:t[0]}}),e.$on("particlesLoaded",t[1]),i=new ke({props:{id:"tsparticles",class:"put your classes here",style:"",url:Yt}}),i.$on("particlesLoaded",t[1]),l=new wt({}),_=new _t({}),{c(){q(e.$$.fragment),n=le(),q(i.$$.fragment),s=le(),r=T("main"),a=T("h1"),a.innerHTML=o,u=le(),m=T("div"),f=T("a"),h=T("div"),q(l.$$.fragment),g=le(),d=T("a"),c=T("div"),q(_.$$.fragment),this.h()},l(y){G(e.$$.fragment,y),n=ue(y),G(i.$$.fragment,y),s=ue(y),r=C(y,"MAIN",{class:!0});var M=D(r);a=C(M,"H1",{class:!0,"data-svelte-h":!0}),ct(a)!=="svelte-1tog30h"&&(a.innerHTML=o),u=ue(M),m=C(M,"DIV",{class:!0});var A=D(m);f=C(A,"A",{href:!0,"aria-label":!0,target:!0,rel:!0,class:!0});var z=D(f);h=C(z,"DIV",{class:!0});var H=D(h);G(l.$$.fragment,H),H.forEach(x),z.forEach(x),g=ue(A),d=C(A,"A",{href:!0,"aria-label":!0,target:!0,rel:!0,class:!0});var B=D(d);c=C(B,"DIV",{class:!0});var N=D(c);G(_.$$.fragment,N),N.forEach(x),B.forEach(x),A.forEach(x),M.forEach(x),this.h()},h(){p(a,"class","svelte-1i3t0nt"),p(h,"class","icon svelte-1i3t0nt"),p(f,"href","https://github.com/jtrangel"),p(f,"aria-label","GitHub"),p(f,"target","_blank"),p(f,"rel","noopener noreferrer"),p(f,"class","svelte-1i3t0nt"),p(c,"class","icon svelte-1i3t0nt"),p(d,"href","https://www.linkedin.com/in/jerico-rangel/"),p(d,"aria-label","Linkedin"),p(d,"target","_blank"),p(d,"rel","noopener noreferrer"),p(d,"class","svelte-1i3t0nt"),p(m,"class","icons svelte-1i3t0nt"),p(r,"class","svelte-1i3t0nt")},m(y,M){U(e,y,M),O(y,n,M),U(i,y,M),O(y,s,M),O(y,r,M),L(r,a),L(r,u),L(r,m),L(m,f),L(f,h),U(l,h,null),L(m,g),L(m,d),L(d,c),U(_,c,null),b=!0},p:te,i(y){b||(S(e.$$.fragment,y),S(i.$$.fragment,y),S(l.$$.fragment,y),S(_.$$.fragment,y),b=!0)},o(y){V(e.$$.fragment,y),V(i.$$.fragment,y),V(l.$$.fragment,y),V(_.$$.fragment,y),b=!1},d(y){y&&(x(n),x(s),x(r)),W(e,y),W(i,y),W(l),W(_)}}}let Yt="http://foo.bar/particles.json";function Zt(t){let e={particles:{color:{value:"#000"},links:{enable:!0,color:"#000"},move:{enable:!0},number:{value:30}},interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse"}}},opacity:{value:100,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}}},n=i=>{i.detail.particles};return Qt(async i=>{await Kt(i)}),[e,n]}class Jn extends ae{constructor(e){super(),oe(this,e,Zt,Xt,re,{})}}export{Sn as $,pn as A,_n as B,cn as C,fn as D,In as E,En as F,Pt as G,w as H,J as I,R as J,bn as K,Le as L,kn as M,Mn as N,k as O,Un as P,je as Q,Vn as R,Ue as S,ve as T,Dn as U,P as V,qe as W,wn as X,Tn as Y,zn as Z,On as _,xn as a,We as a0,An as a1,pe as a2,Ht as a3,qt as a4,Cn as a5,Gn as a6,qn as a7,$e as a8,$n as a9,Fn as aa,Wn as ab,jn as ac,j as ad,Rn as ae,Jn as af,Lt as b,De as c,ne as d,ie as e,Se as f,Nn as g,X as h,F as i,ce as j,vn as k,Pn as l,me as m,Bn as n,Ln as o,we as p,Ne as q,Hn as r,ee as s,hn as t,dn as u,gn as v,mn as w,un as x,ln as y,yn as z};

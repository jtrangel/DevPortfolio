import{s as S,n as F,b as ae,c as C,d as re,e as oe,u as ie,g as ce,f as ue,h as fe}from"../chunks/scheduler.1448e862.js";import{S as z,i as P,g as $,h as y,x as R,k as v,y as G,a as B,z as he,f as p,A as _e,s as N,r as Y,j as x,c as j,u as Z,B as b,v as ee,d as O,t as V,w as te,C as J,m as se,n as le}from"../chunks/index.f9da1157.js";import"../chunks/singletons.d86182b1.js";import{p as me}from"../chunks/stores.829f01fc.js";function D(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}const ve=!0,Ee=Object.freeze(Object.defineProperty({__proto__:null,prerender:ve},Symbol.toStringTag,{value:"Module"}));function pe(t){let e,a='<svg width="32" height="24" class="svelte-wh91xh"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-wh91xh"></line><line id="middle" x1="0" y1="12" x2="32" y2="12" class="svelte-wh91xh"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-wh91xh"></line></svg>',s,o;return{c(){e=$("button"),e.innerHTML=a,this.h()},l(n){e=y(n,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),R(e)!=="svelte-1x3lald"&&(e.innerHTML=a),this.h()},h(){v(e,"aria-label","menu-burger-button"),v(e,"class","text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-wh91xh"),G(e,"open",t[0])},m(n,l){B(n,e,l),s||(o=he(e,"click",t[1]),s=!0)},p(n,[l]){l&1&&G(e,"open",n[0])},i:F,o:F,d(n){n&&p(e),s=!1,o()}}}function ge(t,e,a){let{open:s=!1}=e;const o=()=>a(0,s=!s);return t.$$set=n=>{"open"in n&&a(0,s=n.open)},[s,o]}class de extends z{constructor(e){super(),P(this,e,ge,pe,S,{open:0})}}const be=""+new URL("../assets/logo.04916df8.svg",import.meta.url).href,I=[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/projects",label:"Projects"},{href:"/contact",label:"Contact"}];function K(t,e,a){const s=t.slice();return s[3]=e[a],s}function Q(t,e,a){const s=t.slice();return s[3]=e[a],s}function W(t){let e,a=t[3].label+"",s,o;return{c(){e=$("a"),s=se(a),this.h()},l(n){e=y(n,"A",{class:!0,href:!0});var l=x(e);s=le(l,a),l.forEach(p),this.h()},h(){v(e,"class",o=C(`button ${t[0]===t[3].href?"selected":""}`)+" svelte-154km7s"),v(e,"href",t[3].href)},m(n,l){B(n,e,l),b(e,s)},p(n,l){l&1&&o!==(o=C(`button ${n[0]===n[3].href?"selected":""}`)+" svelte-154km7s")&&v(e,"class",o)},d(n){n&&p(e)}}}function X(t){let e,a=t[3].label+"",s,o;return{c(){e=$("a"),s=se(a),this.h()},l(n){e=y(n,"A",{class:!0,href:!0});var l=x(e);s=le(l,a),l.forEach(p),this.h()},h(){v(e,"class",o=C(`button ${t[0]===t[3].href?"selected":""}`)+" svelte-154km7s"),v(e,"href",t[3].href)},m(n,l){B(n,e,l),b(e,s)},p(n,l){l&1&&o!==(o=C(`button ${n[0]===n[3].href?"selected":""}`)+" svelte-154km7s")&&v(e,"class",o)},d(n){n&&p(e)}}}function $e(t){let e,a,s,o=`<img src="${be}" alt="logo" class="logo" style="width: 60px; height: 50px;"/>`,n,l,g,f,i,h,H,w,A,M;function ne(r){t[2](r)}let U={};t[1]!==void 0&&(U.open=t[1]),g=new de({props:U}),ae.push(()=>_e(g,"open",ne));let L=D(I),_=[];for(let r=0;r<L.length;r+=1)_[r]=W(Q(t,L,r));let E=D(I),m=[];for(let r=0;r<E.length;r+=1)m[r]=X(K(t,E,r));return{c(){e=$("div"),a=$("div"),s=$("a"),s.innerHTML=o,n=N(),l=$("div"),Y(g.$$.fragment),i=N(),h=$("div");for(let r=0;r<_.length;r+=1)_[r].c();H=N(),w=$("div");for(let r=0;r<m.length;r+=1)m[r].c();this.h()},l(r){e=y(r,"DIV",{class:!0});var d=x(e);a=y(d,"DIV",{class:!0});var u=x(a);s=y(u,"A",{href:!0,"data-svelte-h":!0}),R(s)!=="svelte-fj0kmx"&&(s.innerHTML=o),n=j(u),l=y(u,"DIV",{class:!0});var c=x(l);Z(g.$$.fragment,c),c.forEach(p),i=j(u),h=y(u,"DIV",{class:!0});var k=x(h);for(let T=0;T<_.length;T+=1)_[T].l(k);k.forEach(p),u.forEach(p),H=j(d),w=y(d,"DIV",{class:!0});var q=x(w);for(let T=0;T<m.length;T+=1)m[T].l(q);q.forEach(p),d.forEach(p),this.h()},h(){v(s,"href","/"),v(l,"class","burger svelte-154km7s"),v(h,"class","buttons svelte-154km7s"),v(a,"class","innerContainer svelte-154km7s"),v(w,"class","responsiveButtons buttons svelte-154km7s"),v(e,"class",A=C(t[1]?"NavBar open":"NavBar")+" svelte-154km7s")},m(r,d){B(r,e,d),b(e,a),b(a,s),b(a,n),b(a,l),ee(g,l,null),b(a,i),b(a,h);for(let u=0;u<_.length;u+=1)_[u]&&_[u].m(h,null);b(e,H),b(e,w);for(let u=0;u<m.length;u+=1)m[u]&&m[u].m(w,null);M=!0},p(r,[d]){const u={};if(!f&&d&2&&(f=!0,u.open=r[1],re(()=>f=!1)),g.$set(u),d&1){L=D(I);let c;for(c=0;c<L.length;c+=1){const k=Q(r,L,c);_[c]?_[c].p(k,d):(_[c]=W(k),_[c].c(),_[c].m(h,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=L.length}if(d&1){E=D(I);let c;for(c=0;c<E.length;c+=1){const k=K(r,E,c);m[c]?m[c].p(k,d):(m[c]=X(k),m[c].c(),m[c].m(w,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=E.length}(!M||d&2&&A!==(A=C(r[1]?"NavBar open":"NavBar")+" svelte-154km7s"))&&v(e,"class",A)},i(r){M||(O(g.$$.fragment,r),M=!0)},o(r){V(g.$$.fragment,r),M=!1},d(r){r&&p(e),te(g),J(_,r),J(m,r)}}}function ye(t,e,a){let s=!1,{segment:o}=e;function n(l){s=l,a(1,s)}return t.$$set=l=>{"segment"in l&&a(0,o=l.segment)},[o,s,n]}class ke extends z{constructor(e){super(),P(this,e,ye,$e,S,{segment:0})}}function we(t){let e,a,s,o,n="",l;e=new ke({props:{segment:t[0].url.pathname}});const g=t[2].default,f=oe(g,t,t[1],null);return{c(){Y(e.$$.fragment),a=N(),f&&f.c(),s=N(),o=$("footer"),o.innerHTML=n,this.h()},l(i){Z(e.$$.fragment,i),a=j(i),f&&f.l(i),s=j(i),o=y(i,"FOOTER",{class:!0,"data-svelte-h":!0}),R(o)!=="svelte-1y6c60e"&&(o.innerHTML=n),this.h()},h(){v(o,"class","svelte-ncbwu1")},m(i,h){ee(e,i,h),B(i,a,h),f&&f.m(i,h),B(i,s,h),B(i,o,h),l=!0},p(i,[h]){const H={};h&1&&(H.segment=i[0].url.pathname),e.$set(H),f&&f.p&&(!l||h&2)&&ie(f,g,i,i[1],l?ue(g,i[1],h,null):ce(i[1]),null)},i(i){l||(O(e.$$.fragment,i),O(f,i),l=!0)},o(i){V(e.$$.fragment,i),V(f,i),l=!1},d(i){i&&(p(a),p(s),p(o)),te(e,i),f&&f.d(i)}}}function Te(t,e,a){let s;fe(t,me,l=>a(0,s=l));let{$$slots:o={},$$scope:n}=e;return t.$$set=l=>{"$$scope"in l&&a(1,n=l.$$scope)},[s,n,o]}class Ce extends z{constructor(e){super(),P(this,e,Te,we,S,{})}}export{Ce as component,Ee as universal};

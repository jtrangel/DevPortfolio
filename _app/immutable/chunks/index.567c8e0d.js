import{_ as r}from"./preload-helper.a4192956.js";import{e as o}from"./2.5f3d8091.js";class n{constructor(){this.distance=200,this.duration=.4,this.factor=100,this.speed=1,this.maxSpeed=50,this.easing="ease-out-quad"}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.speed!==void 0&&(this.speed=e.speed),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed))}}class u extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class l extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,t=>{const i=new u;return i.load(t),i}))}}async function f(s,e=!0){await s.addInteractor("externalRepulse",async t=>{const{Repulser:i}=await r(()=>import("./Repulser.96fb6be3.js"),["./Repulser.96fb6be3.js","./ExternalInteractorBase.029fb1b6.js","./Ranges.6306d9c8.js","./2.5f3d8091.js","./scheduler.323fc80a.js","./index.1fab7241.js","./preload-helper.a4192956.js","./index.5c252173.js","..\\assets\\2.a400b586.css"],import.meta.url);return new i(s,t)},e)}export{l as Repulse,n as RepulseBase,u as RepulseDiv,f as loadExternalRepulseInteraction};

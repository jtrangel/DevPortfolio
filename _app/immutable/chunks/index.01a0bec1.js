import{_ as e}from"./preload-helper.a4192956.js";import{O as r}from"./OptionsColor.609da1c4.js";class s{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=r.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new s}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async t=>{const{Grabber:o}=await e(()=>import("./Grabber.2ccdeadc.js"),["./Grabber.2ccdeadc.js","./CanvasUtils.90cde068.js","./2.9d2a35a3.js","./scheduler.323fc80a.js","./index.1fab7241.js","./preload-helper.a4192956.js","./index.5c252173.js","..\\assets\\2.a400b586.css","./ExternalInteractorBase.029fb1b6.js"],import.meta.url);return new o(t)},i)}export{f as Grab,s as GrabLinks,a as loadExternalGrabInteraction};
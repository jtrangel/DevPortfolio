import{P as n}from"./PolygonDrawerBase.9e268a44.js";const o=1.66,a=3,s=2;class l extends n{getCenter(t,e){return{x:-e,y:e/o}}getSidesCount(){return a}getSidesData(t,e){const r=e*s;return{count:{denominator:2,numerator:3},length:r}}}export{l as TriangleDrawer};
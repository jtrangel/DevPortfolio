import{a as i}from"./2.5f3d8091.js";async function s(){i("ease-in-quad",a=>a**2),i("ease-out-quad",a=>1-(1-a)**2),i("ease-in-out-quad",a=>a<.5?2*a**2:1-(-2*a+2)**2/2),await Promise.resolve()}export{s as loadEasingQuadPlugin};

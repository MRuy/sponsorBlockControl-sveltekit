import{S as p,i as _,s as m,J as u,k as v,l as g,a7 as o,b as I,a8 as d,I as h,a4 as b,a9 as P,E as c,h as x,R as y,Y as f}from"./index-a74698fd.js";function R(a){let e,s,n,i=[{type:"text"},{placeholder:"VideoID or URL..."},a[1]],l={};for(let t=0;t<i.length;t+=1)l=u(l,i[t]);return{c(){e=v("input"),this.h()},l(t){e=g(t,"INPUT",{type:!0,placeholder:!0}),this.h()},h(){o(e,l)},m(t,r){I(t,e,r),e.autofocus&&e.focus(),d(e,a[0]),s||(n=[h(e,"input",a[2]),h(e,"paste",b(a[3]))],s=!0)},p(t,[r]){o(e,l=P(i,[{type:"text"},{placeholder:"VideoID or URL..."},r&2&&t[1]])),r&1&&e.value!==t[0]&&d(e,t[0])},i:c,o:c,d(t){t&&x(e),s=!1,y(n)}}}function U(a){if(a.startsWith("http"))try{const e=new URL(a);if(e.searchParams.has("v"))return e.searchParams.get("v");if(e.host==="youtu.be")return e.pathname.substring(1);if(e.host==="sb.ltn.fi"){if(e.pathname.includes("/video/")){const s=e.pathname.split("/"),n=s.indexOf("video"),i=n+1;if(n!==-1&&s.length-1>=i)return s[i]}else if(e.searchParams.has("videoid"))return e.searchParams.get("videoid")}}catch(e){console.error("Failed to parse URL",a,e)}return a}function D(a,e,s){let{value:n=""}=e;function i(){n=this.value,s(0,n)}const l=t=>{var r;return s(0,n=U((r=t==null?void 0:t.clipboardData)==null?void 0:r.getData("text")))};return a.$$set=t=>{s(1,e=u(u({},e),f(t))),"value"in t&&s(0,n=t.value)},e=f(e),[n,e,i,l]}class V extends p{constructor(e){super(),_(this,e,D,R,m,{value:0})}}export{V};
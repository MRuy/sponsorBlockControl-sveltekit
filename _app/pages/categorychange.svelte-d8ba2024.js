import{S as pe,i as ge,s as me,e as d,t as W,c as f,a as p,h as j,d as u,g as te,G as t,H as ve,k as R,w as be,R as Ie,m as L,x as Ee,b as E,a0 as ye,a1 as ue,a2 as _e,y as Se,J as ae,q as Ce,o as Ue,K as De,B as Oe,W as ke,L as Ne,a3 as Re}from"../chunks/vendor-029251f6.js";import{C as Le}from"../chunks/config-b3d4a71f.js";import{i as Te}from"../chunks/utils-3b98a7b3.js";import{c as de,a as Ge}from"../chunks/config-6a454163.js";import{a as Be,S as y}from"../chunks/Status-95729226.js";import"../chunks/userInfo-a6af26e4.js";function fe(a,o,s){const l=a.slice();return l[9]=o[s],l[11]=s,l}function he(a){let o,s=Ge[a[11]]+"",l,n;return{c(){o=d("option"),l=W(s),this.h()},l(r){o=f(r,"OPTION",{});var g=p(o);l=j(g,s),g.forEach(u),this.h()},h(){o.__value=n=a[9],o.value=o.__value},m(r,g){te(r,o,g),t(o,l)},p:ve,d(r){r&&u(o)}}}function Ke(a){let o,s,l,n,r,g,S,m,U,A,P,v,i,T,F,D,G,H,J,M,h,O,Q,X,B,k,Y,z,Z,N,K,$,se,V=de,_=[];for(let e=0;e<V.length;e+=1)_[e]=he(fe(a,V,e));return N=new Be({props:{status:a[1]}}),{c(){o=R(),s=d("main"),l=d("div"),n=d("fieldset"),r=d("legend"),g=W("Change segment category"),S=R(),m=d("div"),U=d("label"),A=W("Segment UUID:"),P=d("br"),v=R(),i=d("input"),F=R(),D=d("div"),G=d("label"),H=W("Category:"),J=d("br"),M=R(),h=d("select"),O=d("option"),Q=W("--- Select category ---");for(let e=0;e<_.length;e+=1)_[e].c();X=R(),B=d("div"),k=d("button"),Y=W(`Change
          category`),Z=R(),be(N.$$.fragment),this.h()},l(e){Ie('[data-svelte="svelte-1gjpzbo"]',document.head).forEach(u),o=L(e),s=f(e,"MAIN",{});var C=p(s);l=f(C,"DIV",{class:!0});var c=p(l);n=f(c,"FIELDSET",{});var I=p(n);r=f(I,"LEGEND",{});var le=p(r);g=j(le,"Change segment category"),le.forEach(u),S=L(I),m=f(I,"DIV",{});var w=p(m);U=f(w,"LABEL",{for:!0});var oe=p(U);A=j(oe,"Segment UUID:"),oe.forEach(u),P=f(w,"BR",{}),v=L(w),i=f(w,"INPUT",{id:!0,type:!0,size:!0,pattern:!0,placeholder:!0}),w.forEach(u),F=L(I),D=f(I,"DIV",{});var q=p(D);G=f(q,"LABEL",{for:!0});var ne=p(G);H=j(ne,"Category:"),ne.forEach(u),J=f(q,"BR",{}),M=L(q),h=f(q,"SELECT",{id:!0,class:!0});var x=p(h);O=f(x,"OPTION",{});var re=p(O);Q=j(re,"--- Select category ---"),re.forEach(u);for(let ee=0;ee<_.length;ee+=1)_[ee].l(x);x.forEach(u),q.forEach(u),X=L(I),B=f(I,"DIV",{class:!0});var ie=p(B);k=f(ie,"BUTTON",{});var ce=p(k);Y=j(ce,`Change
          category`),ce.forEach(u),ie.forEach(u),I.forEach(u),Z=L(c),Ee(N.$$.fragment,c),c.forEach(u),C.forEach(u),this.h()},h(){document.title="Category change | SponsorBlockControl",E(U,"for","uuid"),E(i,"id","uuid"),E(i,"type","text"),E(i,"size","64"),E(i,"pattern","[a-f0-9]{64}"),E(i,"placeholder","Segment UUID ..."),i.disabled=T=a[1]===y.WORKING,E(G,"for","category"),O.__value="",O.value=O.__value,E(h,"id","category"),E(h,"class","svelte-1slb73m"),a[3]===void 0&&ye(()=>a[6].call(h)),k.disabled=z=a[1]===y.WORKING||!a[2]||a[1]===y.WORKING,E(B,"class","actions"),E(l,"class","container")},m(e,b){te(e,o,b),te(e,s,b),t(s,l),t(l,n),t(n,r),t(r,g),t(n,S),t(n,m),t(m,U),t(U,A),t(m,P),t(m,v),t(m,i),ue(i,a[0]),t(n,F),t(n,D),t(D,G),t(G,H),t(D,J),t(D,M),t(D,h),t(h,O),t(O,Q);for(let C=0;C<_.length;C+=1)_[C].m(h,null);_e(h,a[3]),t(n,X),t(n,B),t(B,k),t(k,Y),t(l,Z),Se(N,l,null),K=!0,$||(se=[ae(i,"input",a[5]),ae(h,"change",a[6]),ae(k,"click",a[7])],$=!0)},p(e,[b]){if((!K||b&2&&T!==(T=e[1]===y.WORKING))&&(i.disabled=T),b&1&&i.value!==e[0]&&ue(i,e[0]),b&0){V=de;let c;for(c=0;c<V.length;c+=1){const I=fe(e,V,c);_[c]?_[c].p(I,b):(_[c]=he(I),_[c].c(),_[c].m(h,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=V.length}b&8&&_e(h,e[3]),(!K||b&6&&z!==(z=e[1]===y.WORKING||!e[2]||e[1]===y.WORKING))&&(k.disabled=z);const C={};b&2&&(C.status=e[1]),N.$set(C)},i(e){K||(Ce(N.$$.fragment,e),K=!0)},o(e){Ue(N.$$.fragment,e),K=!1},d(e){e&&u(o),e&&u(s),De(_,e),Oe(N),$=!1,ke(se)}}}function Ve(a,o,s){let l;Ne(a,Le,v=>s(8,l=v));let n=y.IDLE,r="",g=!1,S="";async function m(){s(1,n=y.WORKING);const v=new URLSearchParams;v.set("UUID",r),v.set("userID",l.privateUUID),v.set("category",S);const i=await fetch(`${l.sponsorBlockApi}/api/voteOnSponsorTime?${v}`,{method:"POST"}).then(T=>T.status);i===200&&(s(1,n=y.SUCCESS),s(0,r=""),s(3,S="")),i===400&&s(1,n=y.ERROR_INVALID),i===405&&s(1,n=y.DUPLICATE)}function U(){r=this.value,s(0,r)}function A(){S=Re(this),s(3,S)}const P=v=>{m()};return a.$$.update=()=>{a.$$.dirty&1&&s(2,g=Te(r))},[r,n,g,S,m,U,A,P]}class ze extends pe{constructor(o){super();ge(this,o,Ve,Ke,me,{})}}export{ze as default};
import{S as xe,i as et,s as tt,e as d,t as b,c as h,a as g,g as S,d as u,b as _,G as Ye,f as q,E as a,h as $e,F as Re,H as Ve,N as Xt,aa as Ut,Q as Zt,R as xt,T as es,x as Y,u as K,B as Ht,a9 as Pt,ab as ts,j as fe,k as I,m as de,n as C,o as he,ac as Oe,r as Mt,w as Rt,v as _e,U as Ot,J as $t,l as ft,I as jt,ad as ss,a3 as ls,a4 as as,P as ns,$ as rs,a1 as qt,a8 as os,a5 as is,A as us,a2 as cs}from"../chunks/vendor-9fc4b0a7.js";import{c as fs,C as ds}from"../chunks/stores-1663c3e2.js";import{a as hs,S as ot}from"../chunks/Status-10cd6735.js";import{g as _s}from"../chunks/navigation-51f4a605.js";import{p as ms}from"../chunks/stores-219cd492.js";import{V as gs}from"../chunks/VideoInput-c3824c4c.js";import"../chunks/singletons-12a22614.js";function vs(s){let e,t,l,n,i,o=s[1].toString().padStart(2,"0")+"",c,r,m,k=s[2].toString().padStart(2,"0")+"",H,ne,D,w;return{c(){e=d("span"),t=d("span"),l=b(s[0]),n=b(":"),i=d("span"),c=b(o),r=b(":"),m=d("span"),H=b(k),ne=b("."),D=d("span"),w=b(s[3]),this.h()},l(L){e=h(L,"SPAN",{class:!0});var T=g(e);t=h(T,"SPAN",{class:!0});var P=g(t);l=S(P,s[0]),n=S(P,":"),P.forEach(u),i=h(T,"SPAN",{class:!0});var Z=g(i);c=S(Z,o),r=S(Z,":"),Z.forEach(u),m=h(T,"SPAN",{class:!0});var E=g(m);H=S(E,k),ne=S(E,"."),E.forEach(u),D=h(T,"SPAN",{class:!0});var U=g(D);w=S(U,s[3]),U.forEach(u),T.forEach(u),this.h()},h(){_(t,"class","svelte-58feot"),Ye(t,"inactive",s[0]===0),_(i,"class","svelte-58feot"),Ye(i,"inactive",s[1]===0),_(m,"class",""),_(D,"class","milliseconds svelte-58feot"),_(e,"class","time svelte-58feot")},m(L,T){q(L,e,T),a(e,t),a(t,l),a(t,n),a(e,i),a(i,c),a(i,r),a(e,m),a(m,H),a(m,ne),a(e,D),a(D,w)},p(L,[T]){T&1&&$e(l,L[0]),T&1&&Ye(t,"inactive",L[0]===0),T&2&&o!==(o=L[1].toString().padStart(2,"0")+"")&&$e(c,o),T&2&&Ye(i,"inactive",L[1]===0),T&4&&k!==(k=L[2].toString().padStart(2,"0")+"")&&$e(H,k),T&8&&$e(w,L[3])},i:Re,o:Re,d(L){L&&u(e)}}}let Et=3;function ps(s,e,t){let{value:l=0}=e,n=0,i=0,o=0,c="0".repeat(Et);return s.$$set=r=>{"value"in r&&t(4,l=r.value)},s.$$.update=()=>{if(s.$$.dirty&16){let r=l,m=r.toString();m.includes(".")&&t(3,c=m.split(".")[1].padEnd(Et,"0").slice(0,Et)),r=Math.floor(l),t(0,n=Math.floor(r/3600)),t(1,i=Math.floor(r/60%60)),t(2,o=Math.floor(r%60))}},[n,i,o,c,l]}class Tt extends xe{constructor(e){super();et(this,e,ps,vs,tt,{value:4})}}function zt(s){let e,t;return{c(){e=d("div"),t=b("Copied!"),this.h()},l(l){e=h(l,"DIV",{class:!0});var n=g(e);t=S(n,"Copied!"),n.forEach(u),this.h()},h(){_(e,"class","success svelte-1f7dggz")},m(l,n){q(l,e,n),a(e,t)},d(l){l&&u(e)}}}function bs(s){let e,t,l,n,i=s[1]&&zt();return{c(){e=d("button"),i&&i.c(),t=b(`
  \u2702`),this.h()},l(o){e=h(o,"BUTTON",{title:!0,class:!0});var c=g(e);i&&i.l(c),t=S(c,`
  \u2702`),c.forEach(u),this.h()},h(){_(e,"title",s[0]),_(e,"class","svelte-1f7dggz")},m(o,c){q(o,e,c),i&&i.m(e,null),a(e,t),l||(n=Ve(e,"click",s[4]),l=!0)},p(o,[c]){o[1]?i||(i=zt(),i.c(),i.m(e,t)):i&&(i.d(1),i=null),c&1&&_(e,"title",o[0])},i:Re,o:Re,d(o){o&&u(e),i&&i.d(),l=!1,n()}}}function Ss(s,e,t){let{value:l=""}=e,{title:n="Copy to clipboard"}=e,i=!1;function o(){navigator.clipboard.writeText(l).then(()=>{console.log("Copied to clipboard"),t(1,i=!0),setTimeout(r=>{t(1,i=!1)},2e3)},r=>{console.log("Failed to copy into clipboard",r)})}const c=r=>o();return s.$$set=r=>{"value"in r&&t(3,l=r.value),"title"in r&&t(0,n=r.title)},[n,i,o,l,c]}class $s extends xe{constructor(e){super();et(this,e,Ss,bs,tt,{value:3,title:0})}}function Es(s){let e,t,l,n,i,o;const c=s[5].default,r=Xt(c,s,s[4],null);return{c(){e=d("span"),r&&r.c(),this.h()},l(m){e=h(m,"SPAN",{class:!0,title:!0});var k=g(e);r&&r.l(k),k.forEach(u),this.h()},h(){_(e,"class",t=""+(Ut(`header ${s[3].class}`)+" svelte-1s8upei")),_(e,"title",l=`Sort by ${s[0]}`),Ye(e,"active",s[2]===s[0]),Ye(e,"sort--asc",s[1]==="ASC")},m(m,k){q(m,e,k),r&&r.m(e,null),n=!0,i||(o=Ve(e,"click",s[6]),i=!0)},p(m,[k]){r&&r.p&&(!n||k&16)&&Zt(r,c,m,m[4],n?es(c,m[4],k,null):xt(m[4]),null),(!n||k&8&&t!==(t=""+(Ut(`header ${m[3].class}`)+" svelte-1s8upei")))&&_(e,"class",t),(!n||k&1&&l!==(l=`Sort by ${m[0]}`))&&_(e,"title",l),k&13&&Ye(e,"active",m[2]===m[0]),k&10&&Ye(e,"sort--asc",m[1]==="ASC")},i(m){n||(Y(r,m),n=!0)},o(m){K(r,m),n=!1},d(m){m&&u(e),r&&r.d(m),i=!1,o()}}}function Ts(s,e,t){let{$$slots:l={},$$scope:n}=e,{name:i}=e,{sorting:o="DESC"}=e,{current:c=""}=e;function r(m){ts.call(this,s,m)}return s.$$set=m=>{t(3,e=Ht(Ht({},e),Pt(m))),"name"in m&&t(0,i=m.name),"sorting"in m&&t(1,o=m.sorting),"current"in m&&t(2,c=m.current),"$$scope"in m&&t(4,n=m.$$scope)},e=Pt(e),[i,o,c,e,n,l,r]}class je extends xe{constructor(e){super();et(this,e,Ts,Es,tt,{name:0,sorting:1,current:2})}}function Ft(s,e,t){const l=s.slice();return l[10]=e[t],l}function ks(s){let e;return{c(){e=b("Submitted")},l(t){e=S(t,"Submitted")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Ds(s){let e;return{c(){e=b("Start/End")},l(t){e=S(t,"Start/End")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function ws(s){let e;return{c(){e=b("Votes")},l(t){e=S(t,"Votes")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Is(s){let e;return{c(){e=b("Views")},l(t){e=S(t,"Views")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Cs(s){let e;return{c(){e=b("Category")},l(t){e=S(t,"Category")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function ys(s){let e;return{c(){e=b("Hidden")},l(t){e=S(t,"Hidden")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Bs(s){let e;return{c(){e=b("Actiontype")},l(t){e=S(t,"Actiontype")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function As(s){let e;return{c(){e=b("ShadowHidden")},l(t){e=S(t,"ShadowHidden")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Ls(s){let e;return{c(){e=b("Locked")},l(t){e=S(t,"Locked")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Vs(s){let e,t,l=s[2],n=[];for(let o=0;o<l.length;o+=1)n[o]=Gt(Ft(s,l,o));const i=o=>K(n[o],1,1,()=>{n[o]=null});return{c(){for(let o=0;o<n.length;o+=1)n[o].c();e=ft()},l(o){for(let c=0;c<n.length;c+=1)n[c].l(o);e=ft()},m(o,c){for(let r=0;r<n.length;r+=1)n[r].m(o,c);q(o,e,c),t=!0},p(o,c){if(c&52){l=o[2];let r;for(r=0;r<l.length;r+=1){const m=Ft(o,l,r);n[r]?(n[r].p(m,c),Y(n[r],1)):(n[r]=Gt(m),n[r].c(),Y(n[r],1),n[r].m(e.parentNode,e))}for(Mt(),r=l.length;r<n.length;r+=1)i(r);Rt()}},i(o){if(!t){for(let c=0;c<l.length;c+=1)Y(n[c]);t=!0}},o(o){n=n.filter(Boolean);for(let c=0;c<n.length;c+=1)K(n[c]);t=!1},d(o){jt(n,o),o&&u(e)}}}function Ns(s){let e,t,l,n;return{c(){e=d("tr"),t=d("td"),l=d("div"),n=b("Loading data..."),this.h()},l(i){e=h(i,"TR",{});var o=g(e);t=h(o,"TD",{colspan:!0,class:!0});var c=g(t);l=h(c,"DIV",{class:!0});var r=g(l);n=S(r,"Loading data..."),r.forEach(u),c.forEach(u),o.forEach(u),this.h()},h(){_(l,"class","loading svelte-19x84r4"),_(t,"colspan","12"),_(t,"class","svelte-19x84r4")},m(i,o){q(i,e,o),a(e,t),a(t,l),a(l,n)},p:Re,i:Re,o:Re,d(i){i&&u(e)}}}function Yt(s){let e,t;return{c(){e=d("span"),t=b("\u274C"),this.h()},l(l){e=h(l,"SPAN",{class:!0,title:!0});var n=g(e);t=S(n,"\u274C"),n.forEach(u),this.h()},h(){_(e,"class","removed svelte-19x84r4"),_(e,"title","Segment removed")},m(l,n){q(l,e,n),a(e,t)},d(l){l&&u(e)}}}function Us(s){let e;return{c(){e=b("\u2014")},l(t){e=S(t,"\u2014")},m(t,l){q(t,e,l)},d(t){t&&u(e)}}}function Hs(s){let e,t;return{c(){e=d("span"),t=b("\u{1F512}"),this.h()},l(l){e=h(l,"SPAN",{class:!0,title:!0});var n=g(e);t=S(n,"\u{1F512}"),n.forEach(u),this.h()},h(){_(e,"class","locked svelte-19x84r4"),_(e,"title","Locked by VIP/Moderator")},m(l,n){q(l,e,n),a(e,t)},d(l){l&&u(e)}}}function Gt(s){let e,t,l=Jt(s[10].timeSubmitted)+"",n,i,o,c,r,m,k,H,ne,D,w,L,T,P,Z=s[10].votes+"",E,U,Q,x=s[10].views+"",O,Te,W,z,G=s[10].category+"",J,j,ke,X,N=(s[10].hidden||"\u2014")+"",V,me,re,ee=(s[10].actionType in s[4]?s[4][s[10].actionType]:s[10].actionType)+"",M,te,F,ue=(s[10].shadowHidden||"\u2014")+"",we,Ne,oe,ge,ve,f,v=s[10].UUID+"",pe,y,be,se,le,R;r=new Tt({props:{value:s[10].startTime}}),k=new Tt({props:{value:s[10].endTime}}),w=new Tt({props:{value:s[10].endTime-s[10].startTime}});let B=s[10].votes<-1&&Yt();function Se(p,$){return p[10].locked?Hs:Us}let ce=Se(s),ae=ce(s);return se=new $s({props:{value:s[10].UUID}}),{c(){e=d("tr"),t=d("td"),n=b(l),i=I(),o=d("td"),c=d("a"),fe(r.$$.fragment),m=d("br"),fe(k.$$.fragment),ne=I(),D=d("td"),fe(w.$$.fragment),L=I(),T=d("td"),B&&B.c(),P=I(),E=b(Z),U=I(),Q=d("td"),O=b(x),Te=I(),W=d("td"),z=d("span"),J=b(G),ke=I(),X=d("td"),V=b(N),me=I(),re=d("td"),M=b(ee),te=I(),F=d("td"),we=b(ue),Ne=I(),oe=d("td"),ae.c(),ge=I(),ve=d("td"),f=d("span"),pe=b(v),y=d("br"),be=I(),fe(se.$$.fragment),le=I(),this.h()},l(p){e=h(p,"TR",{});var $=g(e);t=h($,"TD",{class:!0});var Ie=g(t);n=S(Ie,l),Ie.forEach(u),i=C($),o=h($,"TD",{class:!0});var Ce=g(o);c=h(Ce,"A",{href:!0,class:!0});var Ae=g(c);de(r.$$.fragment,Ae),m=h(Ae,"BR",{}),de(k.$$.fragment,Ae),Ae.forEach(u),Ce.forEach(u),ne=C($),D=h($,"TD",{class:!0});var Ee=g(D);de(w.$$.fragment,Ee),Ee.forEach(u),L=C($),T=h($,"TD",{class:!0});var qe=g(T);B&&B.l(qe),P=C(qe),E=S(qe,Z),qe.forEach(u),U=C($),Q=h($,"TD",{class:!0});var Ge=g(Q);O=S(Ge,x),Ge.forEach(u),Te=C($),W=h($,"TD",{class:!0});var ye=g(W);z=h(ye,"SPAN",{class:!0,style:!0});var Je=g(z);J=S(Je,G),Je.forEach(u),ye.forEach(u),ke=C($),X=h($,"TD",{class:!0});var Ke=g(X);V=S(Ke,N),Ke.forEach(u),me=C($),re=h($,"TD",{class:!0});var Be=g(re);M=S(Be,ee),Be.forEach(u),te=C($),F=h($,"TD",{class:!0});var Qe=g(F);we=S(Qe,ue),Qe.forEach(u),Ne=C($),oe=h($,"TD",{class:!0});var ze=g(oe);ae.l(ze),ze.forEach(u),ge=C($),ve=h($,"TD",{class:!0});var De=g(ve);f=h(De,"SPAN",{class:!0});var We=g(f);pe=S(We,v),We.forEach(u),y=h(De,"BR",{}),be=C(De),de(se.$$.fragment,De),De.forEach(u),le=C($),$.forEach(u),this.h()},h(){_(t,"class","cell-text svelte-19x84r4"),_(c,"href",H=`https://www.youtube.com/watch?v=${s[10].videoID}${s[10].startTime>2?`&t=${Math.floor(Math.max(0,s[10].startTime-2))}s`:""}#requiredSegment=${s[10].UUID}`),_(c,"class","svelte-19x84r4"),_(o,"class","cell-number svelte-19x84r4"),_(D,"class","cell-number svelte-19x84r4"),_(T,"class","cell-number nowrap svelte-19x84r4"),_(Q,"class","cell-number svelte-19x84r4"),_(z,"class","category svelte-19x84r4"),_(z,"style",j=`background-color:${s[5](s[10].category)}`),_(W,"class","cell-text svelte-19x84r4"),_(X,"class","cell-text svelte-19x84r4"),_(re,"class","cell-text svelte-19x84r4"),_(F,"class","cell-text svelte-19x84r4"),_(oe,"class","cell-text svelte-19x84r4"),_(f,"class","wordbreak wordbreak--uuid svelte-19x84r4"),_(ve,"class","cell-text svelte-19x84r4")},m(p,$){q(p,e,$),a(e,t),a(t,n),a(e,i),a(e,o),a(o,c),he(r,c,null),a(c,m),he(k,c,null),a(e,ne),a(e,D),he(w,D,null),a(e,L),a(e,T),B&&B.m(T,null),a(T,P),a(T,E),a(e,U),a(e,Q),a(Q,O),a(e,Te),a(e,W),a(W,z),a(z,J),a(e,ke),a(e,X),a(X,V),a(e,me),a(e,re),a(re,M),a(e,te),a(e,F),a(F,we),a(e,Ne),a(e,oe),ae.m(oe,null),a(e,ge),a(e,ve),a(ve,f),a(f,pe),a(ve,y),a(ve,be),he(se,ve,null),a(e,le),R=!0},p(p,$){(!R||$&4)&&l!==(l=Jt(p[10].timeSubmitted)+"")&&$e(n,l);const Ie={};$&4&&(Ie.value=p[10].startTime),r.$set(Ie);const Ce={};$&4&&(Ce.value=p[10].endTime),k.$set(Ce),(!R||$&4&&H!==(H=`https://www.youtube.com/watch?v=${p[10].videoID}${p[10].startTime>2?`&t=${Math.floor(Math.max(0,p[10].startTime-2))}s`:""}#requiredSegment=${p[10].UUID}`))&&_(c,"href",H);const Ae={};$&4&&(Ae.value=p[10].endTime-p[10].startTime),w.$set(Ae),p[10].votes<-1?B||(B=Yt(),B.c(),B.m(T,P)):B&&(B.d(1),B=null),(!R||$&4)&&Z!==(Z=p[10].votes+"")&&$e(E,Z),(!R||$&4)&&x!==(x=p[10].views+"")&&$e(O,x),(!R||$&4)&&G!==(G=p[10].category+"")&&$e(J,G),(!R||$&4&&j!==(j=`background-color:${p[5](p[10].category)}`))&&_(z,"style",j),(!R||$&4)&&N!==(N=(p[10].hidden||"\u2014")+"")&&$e(V,N),(!R||$&4)&&ee!==(ee=(p[10].actionType in p[4]?p[4][p[10].actionType]:p[10].actionType)+"")&&$e(M,ee),(!R||$&4)&&ue!==(ue=(p[10].shadowHidden||"\u2014")+"")&&$e(we,ue),ce!==(ce=Se(p))&&(ae.d(1),ae=ce(p),ae&&(ae.c(),ae.m(oe,null))),(!R||$&4)&&v!==(v=p[10].UUID+"")&&$e(pe,v);const Ee={};$&4&&(Ee.value=p[10].UUID),se.$set(Ee)},i(p){R||(Y(r.$$.fragment,p),Y(k.$$.fragment,p),Y(w.$$.fragment,p),Y(se.$$.fragment,p),R=!0)},o(p){K(r.$$.fragment,p),K(k.$$.fragment,p),K(w.$$.fragment,p),K(se.$$.fragment,p),R=!1},d(p){p&&u(e),_e(r),_e(k),_e(w),B&&B.d(),ae.d(),_e(se)}}}function Ps(s){let e,t,l,n,i,o,c,r,m,k,H,ne,D,w,L,T,P,Z,E,U,Q,x,O,Te,W,z,G,J,j,ke,X,N,V,me,re,ee,M,te,F,ue,we,Ne;i=new je({props:{sortBy:"timeSubmitted",name:"timeSubmitted",sorting:s[0],current:s[3],$$slots:{default:[ks]},$$scope:{ctx:s}}}),r=new je({props:{name:"startTime",sorting:s[0],current:s[3],$$slots:{default:[Ds]},$$scope:{ctx:s}}}),w=new je({props:{name:"votes",sorting:s[0],current:s[3],$$slots:{default:[ws]},$$scope:{ctx:s}}}),P=new je({props:{name:"views",sorting:s[0],current:s[3],$$slots:{default:[Is]},$$scope:{ctx:s}}}),U=new je({props:{name:"category",sorting:s[0],current:s[3],$$slots:{default:[Cs]},$$scope:{ctx:s}}}),O=new je({props:{name:"hidden",sorting:s[0],current:s[3],$$slots:{default:[ys]},$$scope:{ctx:s}}}),z=new je({props:{name:"hidden",sorting:s[0],current:s[3],$$slots:{default:[Bs]},$$scope:{ctx:s}}}),j=new je({props:{name:"shadowHidden",sorting:s[0],current:s[3],$$slots:{default:[As]},$$scope:{ctx:s}}}),N=new je({props:{name:"locked",sorting:s[0],current:s[3],$$slots:{default:[Ls]},$$scope:{ctx:s}}});const oe=[Ns,Vs],ge=[];function ve(f,v){return f[1]?0:1}return te=ve(s),F=ge[te]=oe[te](s),{c(){e=d("table"),t=d("thead"),l=d("tr"),n=d("th"),fe(i.$$.fragment),o=I(),c=d("th"),fe(r.$$.fragment),m=I(),k=d("th"),H=b("Length"),ne=I(),D=d("th"),fe(w.$$.fragment),L=I(),T=d("th"),fe(P.$$.fragment),Z=I(),E=d("th"),fe(U.$$.fragment),Q=I(),x=d("th"),fe(O.$$.fragment),Te=I(),W=d("th"),fe(z.$$.fragment),G=I(),J=d("th"),fe(j.$$.fragment),ke=I(),X=d("th"),fe(N.$$.fragment),V=I(),me=d("th"),re=b("UUID"),ee=I(),M=d("tbody"),F.c(),this.h()},l(f){e=h(f,"TABLE",{class:!0});var v=g(e);t=h(v,"THEAD",{class:!0});var pe=g(t);l=h(pe,"TR",{});var y=g(l);n=h(y,"TH",{class:!0,"data-sortby":!0});var be=g(n);de(i.$$.fragment,be),be.forEach(u),o=C(y),c=h(y,"TH",{class:!0,"data-sortby":!0});var se=g(c);de(r.$$.fragment,se),se.forEach(u),m=C(y),k=h(y,"TH",{class:!0});var le=g(k);H=S(le,"Length"),le.forEach(u),ne=C(y),D=h(y,"TH",{class:!0,"data-sortby":!0});var R=g(D);de(w.$$.fragment,R),R.forEach(u),L=C(y),T=h(y,"TH",{class:!0,"data-sortby":!0});var B=g(T);de(P.$$.fragment,B),B.forEach(u),Z=C(y),E=h(y,"TH",{class:!0,"data-sortby":!0});var Se=g(E);de(U.$$.fragment,Se),Se.forEach(u),Q=C(y),x=h(y,"TH",{class:!0,"data-sortby":!0});var ce=g(x);de(O.$$.fragment,ce),ce.forEach(u),Te=C(y),W=h(y,"TH",{class:!0,"data-sortby":!0});var ae=g(W);de(z.$$.fragment,ae),ae.forEach(u),G=C(y),J=h(y,"TH",{class:!0,"data-sortby":!0});var p=g(J);de(j.$$.fragment,p),p.forEach(u),ke=C(y),X=h(y,"TH",{class:!0,"data-sortby":!0});var $=g(X);de(N.$$.fragment,$),$.forEach(u),V=C(y),me=h(y,"TH",{class:!0});var Ie=g(me);re=S(Ie,"UUID"),Ie.forEach(u),y.forEach(u),pe.forEach(u),ee=C(v),M=h(v,"TBODY",{});var Ce=g(M);F.l(Ce),Ce.forEach(u),v.forEach(u),this.h()},h(){_(n,"class","cell-text svelte-19x84r4"),_(n,"data-sortby","timeSubmitted"),_(c,"class","cell-number svelte-19x84r4"),_(c,"data-sortby","startTime"),_(k,"class","cell-number svelte-19x84r4"),_(D,"class","cell-number svelte-19x84r4"),_(D,"data-sortby","votes"),_(T,"class","cell-number svelte-19x84r4"),_(T,"data-sortby","views"),_(E,"class","cell-text svelte-19x84r4"),_(E,"data-sortby","category"),_(x,"class","cell-number svelte-19x84r4"),_(x,"data-sortby","hidden"),_(W,"class","cell-text svelte-19x84r4"),_(W,"data-sortby","actiontype"),_(J,"class","cell-number svelte-19x84r4"),_(J,"data-sortby","shadowHidden"),_(X,"class","cell-number svelte-19x84r4"),_(X,"data-sortby","locked"),_(me,"class","cell-text svelte-19x84r4"),_(t,"class","svelte-19x84r4"),_(e,"class","svelte-19x84r4")},m(f,v){q(f,e,v),a(e,t),a(t,l),a(l,n),he(i,n,null),a(l,o),a(l,c),he(r,c,null),a(l,m),a(l,k),a(k,H),a(l,ne),a(l,D),he(w,D,null),a(l,L),a(l,T),he(P,T,null),a(l,Z),a(l,E),he(U,E,null),a(l,Q),a(l,x),he(O,x,null),a(l,Te),a(l,W),he(z,W,null),a(l,G),a(l,J),he(j,J,null),a(l,ke),a(l,X),he(N,X,null),a(l,V),a(l,me),a(me,re),a(e,ee),a(e,M),ge[te].m(M,null),ue=!0,we||(Ne=[Oe(s[6].call(null,n)),Oe(s[6].call(null,c)),Oe(s[6].call(null,D)),Oe(s[6].call(null,T)),Oe(s[6].call(null,E)),Oe(s[6].call(null,x)),Oe(s[6].call(null,W)),Oe(s[6].call(null,J)),Oe(s[6].call(null,X))],we=!0)},p(f,[v]){const pe={};v&1&&(pe.sorting=f[0]),v&8&&(pe.current=f[3]),v&8192&&(pe.$$scope={dirty:v,ctx:f}),i.$set(pe);const y={};v&1&&(y.sorting=f[0]),v&8&&(y.current=f[3]),v&8192&&(y.$$scope={dirty:v,ctx:f}),r.$set(y);const be={};v&1&&(be.sorting=f[0]),v&8&&(be.current=f[3]),v&8192&&(be.$$scope={dirty:v,ctx:f}),w.$set(be);const se={};v&1&&(se.sorting=f[0]),v&8&&(se.current=f[3]),v&8192&&(se.$$scope={dirty:v,ctx:f}),P.$set(se);const le={};v&1&&(le.sorting=f[0]),v&8&&(le.current=f[3]),v&8192&&(le.$$scope={dirty:v,ctx:f}),U.$set(le);const R={};v&1&&(R.sorting=f[0]),v&8&&(R.current=f[3]),v&8192&&(R.$$scope={dirty:v,ctx:f}),O.$set(R);const B={};v&1&&(B.sorting=f[0]),v&8&&(B.current=f[3]),v&8192&&(B.$$scope={dirty:v,ctx:f}),z.$set(B);const Se={};v&1&&(Se.sorting=f[0]),v&8&&(Se.current=f[3]),v&8192&&(Se.$$scope={dirty:v,ctx:f}),j.$set(Se);const ce={};v&1&&(ce.sorting=f[0]),v&8&&(ce.current=f[3]),v&8192&&(ce.$$scope={dirty:v,ctx:f}),N.$set(ce);let ae=te;te=ve(f),te===ae?ge[te].p(f,v):(Mt(),K(ge[ae],1,1,()=>{ge[ae]=null}),Rt(),F=ge[te],F?F.p(f,v):(F=ge[te]=oe[te](f),F.c()),Y(F,1),F.m(M,null))},i(f){ue||(Y(i.$$.fragment,f),Y(r.$$.fragment,f),Y(w.$$.fragment,f),Y(P.$$.fragment,f),Y(U.$$.fragment,f),Y(O.$$.fragment,f),Y(z.$$.fragment,f),Y(j.$$.fragment,f),Y(N.$$.fragment,f),Y(F),ue=!0)},o(f){K(i.$$.fragment,f),K(r.$$.fragment,f),K(w.$$.fragment,f),K(P.$$.fragment,f),K(U.$$.fragment,f),K(O.$$.fragment,f),K(z.$$.fragment,f),K(j.$$.fragment,f),K(N.$$.fragment,f),K(F),ue=!1},d(f){f&&u(e),_e(i),_e(r),_e(w),_e(P),_e(U),_e(O),_e(z),_e(j),_e(N),ge[te].d(),we=!1,Ot(Ne)}}}const kt="ASC",dt="DESC";function Jt(s){const e=new Date(s);return`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}:${e.getSeconds().toString().padStart(2,"0")}`}function Ms(s,e,t){let l;$t(s,fs,D=>t(9,l=D));let{segments:n=[]}=e,{isLoading:i=!1}=e,{sortDirection:o="DESC"}=e,{sortBy:c="timeSubmitted"}=e,r;const m={skip:"\u23ED\uFE0F",mute:"\u{1F507}"};let k=c;o=o==="DESC"?dt:kt;function H(D){var w;return((w=l.find(L=>L.id===D))===null||w===void 0?void 0:w.color)||"transparent"}function ne(D){const w=D.getAttribute("sortBy");D.addEventListener("click",L=>{k===w?t(0,o=o===dt?kt:dt):(t(0,o=dt),t(3,k=w)),t(2,r=[...n].sort((T,P)=>T[w]===P[w]?0:T[w]>P[w]?-1:1)),o===kt&&t(2,r=[...r].reverse())})}return s.$$set=D=>{"segments"in D&&t(7,n=D.segments),"isLoading"in D&&t(1,i=D.isLoading),"sortDirection"in D&&t(0,o=D.sortDirection),"sortBy"in D&&t(8,c=D.sortBy)},s.$$.update=()=>{s.$$.dirty&128&&t(2,r=[...n])},[o,i,r,k,m,H,ne,n,c]}class Rs extends xe{constructor(e){super();et(this,e,Ms,Ps,tt,{segments:7,isLoading:1,sortDirection:0,sortBy:8})}}function Kt(s,e,t){const l=s.slice();return l[7]=e[t],l[9]=t,l}function Qt(s){let e,t=s[9]+1+"",l,n,i,o;function c(){return s[3](s[9])}return{c(){e=d("button"),l=b(t),this.h()},l(r){e=h(r,"BUTTON",{});var m=g(e);l=S(m,t),m.forEach(u),this.h()},h(){e.disabled=n=s[0]===s[9]+1},m(r,m){q(r,e,m),a(e,l),i||(o=Ve(e,"click",c),i=!0)},p(r,m){s=r,m&1&&n!==(n=s[0]===s[9]+1)&&(e.disabled=n)},d(r){r&&u(e),i=!1,o()}}}function Os(s){let e,t=Array(s[1]),l=[];for(let n=0;n<t.length;n+=1)l[n]=Qt(Kt(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=ft()},l(n){for(let i=0;i<l.length;i+=1)l[i].l(n);e=ft()},m(n,i){for(let o=0;o<l.length;o+=1)l[o].m(n,i);q(n,e,i)},p(n,[i]){if(i&7){t=Array(n[1]);let o;for(o=0;o<t.length;o+=1){const c=Kt(n,t,o);l[o]?l[o].p(c,i):(l[o]=Qt(c),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},i:Re,o:Re,d(n){jt(l,n),n&&u(e)}}}function js(s,e,t){let{current:l=1}=e,{last:n=1}=e;const i=ss();function o(r){i("click",{page:r})}const c=r=>o(r+1);return s.$$set=r=>{"current"in r&&t(0,l=r.current),"last"in r&&t(1,n=r.last)},s.$$.update=()=>{s.$$.dirty&3,s.$$.dirty&1},[l,n,o,c]}class qs extends xe{constructor(e){super();et(this,e,js,Os,tt,{current:0,last:1})}}function zs(s){let e,t,l,n,i,o,c,r,m,k,H,ne,D,w,L,T,P,Z,E,U,Q,x,O,Te,W,z,G,J,j,ke,X,N,V,me,re,ee,M,te,F,ue,we,Ne,oe,ge,ve,f,v,pe,y=s[2].segmentCount+"",be,se,le,R,B,Se=s[0]+1+"",ce,ae,p=Math.ceil(s[2].segmentCount/ht)+"",$,Ie,Ce,Ae,Ee,qe,Ge,ye,Je,Ke,Be,Qe,ze,De,We,st=Math.round(s[10])+"",it,_t,mt,Fe,Ue,gt,Dt;function Wt(A){s[16](A)}let wt={type:"text",id:"videoid",placeholder:"VideoID"};return s[4]!==void 0&&(wt.value=s[4]),H=new gs({props:wt}),ls.push(()=>as(H,"value",Wt)),le=new Rs({props:{segments:s[12],isLoading:!1,sortDirection:"ASC"}}),Be=new qs({props:{current:s[0]+1,last:s[1]+1}}),Be.$on("click",s[15]),Fe=new hs({props:{status:s[11]}}),{c(){e=I(),t=d("main"),l=d("div"),n=d("form"),i=d("div"),o=d("div"),c=d("label"),r=b("VideoID:"),m=d("br"),k=I(),fe(H.$$.fragment),D=I(),w=d("div"),L=d("label"),T=b("Service:"),P=d("br"),Z=I(),E=d("select"),U=d("option"),Q=b("YouTube"),x=I(),O=d("div"),Te=b("Include:"),W=d("br"),z=I(),G=d("div"),J=d("label"),j=d("input"),ke=b(`
              Locked`),X=I(),N=d("label"),V=d("input"),me=b(`
              hidden`),re=I(),ee=d("label"),M=d("input"),te=b(`
              ignored`),F=I(),ue=d("div"),we=d("br"),Ne=I(),oe=d("button"),ge=b("Search"),ve=I(),f=d("div"),v=d("h2"),pe=b("SegmentCount: "),be=b(y),se=I(),fe(le.$$.fragment),R=I(),B=d("div"),ce=b(Se),ae=b(" of "),$=b(p),Ie=I(),Ce=d("br"),Ae=I(),Ee=d("button"),qe=b("prev page"),Ge=I(),ye=d("button"),Je=b("next page"),Ke=I(),fe(Be.$$.fragment),Qe=I(),ze=d("div"),De=d("sub"),We=b("(Loadtime: "),it=b(st),_t=b("ms)"),mt=I(),fe(Fe.$$.fragment),this.h()},l(A){ns('[data-svelte="svelte-40ey8a"]',document.head).forEach(u),e=C(A),t=h(A,"MAIN",{});var lt=g(t);l=h(lt,"DIV",{class:!0});var Me=g(l);n=h(Me,"FORM",{});var Xe=g(n);i=h(Xe,"DIV",{class:!0});var Le=g(i);o=h(Le,"DIV",{});var at=g(o);c=h(at,"LABEL",{for:!0});var It=g(c);r=S(It,"VideoID:"),It.forEach(u),m=h(at,"BR",{}),k=C(at),de(H.$$.fragment,at),at.forEach(u),D=C(Le),w=h(Le,"DIV",{});var nt=g(w);L=h(nt,"LABEL",{for:!0});var Ct=g(L);T=S(Ct,"Service:"),Ct.forEach(u),P=h(nt,"BR",{}),Z=C(nt),E=h(nt,"SELECT",{id:!0,name:!0});var yt=g(E);U=h(yt,"OPTION",{});var Bt=g(U);Q=S(Bt,"YouTube"),Bt.forEach(u),yt.forEach(u),nt.forEach(u),x=C(Le),O=h(Le,"DIV",{});var rt=g(O);Te=S(rt,"Include:"),W=h(rt,"BR",{}),z=C(rt),G=h(rt,"DIV",{class:!0});var Ze=g(G);J=h(Ze,"LABEL",{});var vt=g(J);j=h(vt,"INPUT",{type:!0,name:!0}),ke=S(vt,`
              Locked`),vt.forEach(u),X=C(Ze),N=h(Ze,"LABEL",{});var pt=g(N);V=h(pt,"INPUT",{type:!0,name:!0}),me=S(pt,`
              hidden`),pt.forEach(u),re=C(Ze),ee=h(Ze,"LABEL",{});var bt=g(ee);M=h(bt,"INPUT",{type:!0,name:!0}),te=S(bt,`
              ignored`),bt.forEach(u),Ze.forEach(u),rt.forEach(u),F=C(Le),ue=h(Le,"DIV",{});var ut=g(ue);we=h(ut,"BR",{}),Ne=C(ut),oe=h(ut,"BUTTON",{type:!0,class:!0});var At=g(oe);ge=S(At,"Search"),At.forEach(u),ut.forEach(u),Le.forEach(u),Xe.forEach(u),ve=C(Me),f=h(Me,"DIV",{});var He=g(f);v=h(He,"H2",{});var St=g(v);pe=S(St,"SegmentCount: "),be=S(St,y),St.forEach(u),se=C(He),de(le.$$.fragment,He),R=C(He),B=h(He,"DIV",{});var Pe=g(B);ce=S(Pe,Se),ae=S(Pe," of "),$=S(Pe,p),Ie=C(Pe),Ce=h(Pe,"BR",{}),Ae=C(Pe),Ee=h(Pe,"BUTTON",{class:!0});var Lt=g(Ee);qe=S(Lt,"prev page"),Lt.forEach(u),Ge=C(Pe),ye=h(Pe,"BUTTON",{class:!0});var Vt=g(ye);Je=S(Vt,"next page"),Vt.forEach(u),Pe.forEach(u),Ke=C(He),de(Be.$$.fragment,He),Qe=C(He),ze=h(He,"DIV",{});var Nt=g(ze);De=h(Nt,"SUB",{});var ct=g(De);We=S(ct,"(Loadtime: "),it=S(ct,st),_t=S(ct,"ms)"),ct.forEach(u),Nt.forEach(u),He.forEach(u),mt=C(Me),de(Fe.$$.fragment,Me),Me.forEach(u),lt.forEach(u),this.h()},h(){document.title="Browse | SponsorBlockControl",_(c,"for","videoid"),_(L,"for","service"),U.__value="youtube",U.value=U.__value,_(E,"id","service"),_(E,"name","service"),s[3]===void 0&&rs(()=>s[17].call(E)),_(j,"type","checkbox"),_(j,"name","locked"),_(V,"type","checkbox"),_(V,"name","hidden"),_(M,"type","checkbox"),_(M,"name","ignored"),_(G,"class","filters svelte-1z0tix8"),_(oe,"type","submit"),_(oe,"class","svelte-1z0tix8"),_(i,"class","filters svelte-1z0tix8"),Ee.disabled=s[6],_(Ee,"class","svelte-1z0tix8"),ye.disabled=s[5],_(ye,"class","svelte-1z0tix8"),_(l,"class","container")},m(A,ie){q(A,e,ie),q(A,t,ie),a(t,l),a(l,n),a(n,i),a(i,o),a(o,c),a(c,r),a(o,m),a(o,k),he(H,o,null),a(i,D),a(i,w),a(w,L),a(L,T),a(w,P),a(w,Z),a(w,E),a(E,U),a(U,Q),qt(E,s[3]),a(i,x),a(i,O),a(O,Te),a(O,W),a(O,z),a(O,G),a(G,J),a(J,j),j.checked=s[7],a(J,ke),a(G,X),a(G,N),a(N,V),V.checked=s[8],a(N,me),a(G,re),a(G,ee),a(ee,M),M.checked=s[9],a(ee,te),a(i,F),a(i,ue),a(ue,we),a(ue,Ne),a(ue,oe),a(oe,ge),a(l,ve),a(l,f),a(f,v),a(v,pe),a(v,be),a(f,se),he(le,f,null),a(f,R),a(f,B),a(B,ce),a(B,ae),a(B,$),a(B,Ie),a(B,Ce),a(B,Ae),a(B,Ee),a(Ee,qe),a(B,Ge),a(B,ye),a(ye,Je),a(f,Ke),he(Be,f,null),a(f,Qe),a(f,ze),a(ze,De),a(De,We),a(De,it),a(De,_t),a(l,mt),he(Fe,l,null),Ue=!0,gt||(Dt=[Ve(E,"change",s[17]),Ve(j,"change",s[18]),Ve(V,"change",s[19]),Ve(M,"change",s[20]),Ve(oe,"click",s[21]),Ve(n,"submit",os(s[14])),Ve(Ee,"click",s[22]),Ve(ye,"click",s[23])],gt=!0)},p(A,[ie]){const lt={};!ne&&ie&16&&(ne=!0,lt.value=A[4],is(()=>ne=!1)),H.$set(lt),ie&8&&qt(E,A[3]),ie&128&&(j.checked=A[7]),ie&256&&(V.checked=A[8]),ie&512&&(M.checked=A[9]),(!Ue||ie&4)&&y!==(y=A[2].segmentCount+"")&&$e(be,y);const Me={};ie&4096&&(Me.segments=A[12]),le.$set(Me),(!Ue||ie&1)&&Se!==(Se=A[0]+1+"")&&$e(ce,Se),(!Ue||ie&4)&&p!==(p=Math.ceil(A[2].segmentCount/ht)+"")&&$e($,p),(!Ue||ie&64)&&(Ee.disabled=A[6]),(!Ue||ie&32)&&(ye.disabled=A[5]);const Xe={};ie&1&&(Xe.current=A[0]+1),ie&2&&(Xe.last=A[1]+1),Be.$set(Xe),(!Ue||ie&1024)&&st!==(st=Math.round(A[10])+"")&&$e(it,st);const Le={};ie&2048&&(Le.status=A[11]),Fe.$set(Le)},i(A){Ue||(Y(H.$$.fragment,A),Y(le.$$.fragment,A),Y(Be.$$.fragment,A),Y(Fe.$$.fragment,A),Ue=!0)},o(A){K(H.$$.fragment,A),K(le.$$.fragment,A),K(Be.$$.fragment,A),K(Fe.$$.fragment,A),Ue=!1},d(A){A&&u(e),A&&u(t),_e(H),_e(le),_e(Be),_e(Fe),gt=!1,Ot(Dt)}}}let Fs=0;const ht=10;function Ys(s,e,t){let l,n,i;$t(s,ds,N=>t(24,n=N)),$t(s,ms,N=>t(25,i=N));let o="youtube",c="",r=0,m=!1,k=!0,H=0,ne=-2,D=1/0,w=1/0,L=!0,T=!0,P=!0,Z=0,E={segmentCount:0,page:0,segments:[]},U=ot.IDLE;us(async()=>{i.query.has("videoID")&&(t(4,c=i.query.get("videoID")),await Q())});async function Q(N=0){console.log("Sending fetch request"),t(11,U=ot.WORKING);const V=new URLSearchParams;V.append("videoID",c),V.append("service",o),V.append("page",N.toString()),V.append("minVotes",ne.toString()),V.append("maxVotes",D.toString()),V.append("minViews",Fs.toString()),V.append("maxViews",w.toString()),V.append("locked",L.toString()),V.append("hidden",T.toString()),V.append("ignored",P.toString());const me=performance.now(),re=await fetch(`${n.sponsorBlockApi}/api/searchSegments?${V}`,{method:"GET",headers:{"Content-Type":"application/json"}});if(t(10,Z=performance.now()-me),re.status===200){t(11,U=ot.SUCCESS);const ee=await re.json();t(2,E.segmentCount=ee.segmentCount,E),t(2,E.page=ee.page,E),t(2,E.segments=[...ee.segments].map(M=>(M.duration=M.endTime-M.startTime,M.videoID=c,M)),E)}else t(2,E.segmentCount=0,E),t(2,E.page=0,E),t(2,E.segments=[],E),re.status===400&&t(11,U=ot.ERROR_INVALID),re.status===404&&t(11,U=ot.NOT_FOUND)}async function x(){_s(`./browse/?videoID=${c}`)}async function O(N){const V=N.detail.page-1;console.log("paginationHandler",V),await Q(V),t(0,r=V)}function Te(N){c=N,t(4,c)}function W(){o=cs(this),t(3,o)}function z(){L=this.checked,t(7,L)}function G(){T=this.checked,t(8,T)}function J(){P=this.checked,t(9,P)}const j=async()=>await Q(0),ke=()=>Q(t(0,r=Math.max(0,r-1))),X=()=>Q(t(0,r=Math.min(Math.floor(E.segmentCount/ht),r+1)));return s.$$.update=()=>{s.$$.dirty&4&&t(1,H=Math.floor(E.segmentCount/ht)),s.$$.dirty&3&&t(5,m=r===H),s.$$.dirty&1&&t(6,k=r===0),s.$$.dirty&4&&t(12,l=[...E.segments])},[r,H,E,o,c,m,k,L,T,P,Z,U,l,Q,x,O,Te,W,z,G,J,j,ke,X]}class xs extends xe{constructor(e){super();et(this,e,Ys,zs,tt,{})}}export{xs as default};
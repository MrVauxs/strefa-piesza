import{S as F,i as G,s as H,k as m,a as I,q as O,l as p,m as E,h as d,c as S,r as B,n as i,Z as P,b as j,E as _,u as R,C as T,a3 as M,g as C,f as N,d as q,D as Z,y as J,z as K,A as L,B as Q,v as U}from"../chunks/index.262177a5.js";function W(c){let s,e,t,r,a,g,l,n,o=c[0].title+"",f,D,v,b=c[0].date+"",w,k;return{c(){s=m("div"),e=m("a"),t=m("header"),r=m("img"),l=I(),n=m("section"),f=O(o),D=I(),v=m("footer"),w=O(b),this.h()},l(u){s=p(u,"DIV",{class:!0});var h=E(s);e=p(h,"A",{href:!0,class:!0});var $=E(e);t=p($,"HEADER",{class:!0});var y=E(t);r=p(y,"IMG",{loading:!0,src:!0,alt:!0,class:!0}),y.forEach(d),l=S($),n=p($,"SECTION",{class:!0});var z=E(n);f=B(z,o),z.forEach(d),D=S($),v=p($,"FOOTER",{class:!0});var A=E(v);w=B(A,b),A.forEach(d),$.forEach(d),h.forEach(d),this.h()},h(){i(r,"loading","lazy"),P(r.src,a="images/"+c[0].preview)||i(r,"src",a),i(r,"alt",g=c[0].title),i(r,"class","w-full aspect-[21/9] object-cover object-top"),i(t,"class","overflow-clip"),i(n,"class","p-4 h2"),i(v,"class","card-footer float-right"),i(e,"href",k=`blog/${c[0].slug}`),i(e,"class","card card-hover overflow-hidden w-96 h-80 m-0.5"),i(s,"class","flex")},m(u,h){j(u,s,h),_(s,e),_(e,t),_(t,r),_(e,l),_(e,n),_(n,f),_(e,D),_(e,v),_(v,w)},p(u,[h]){h&1&&!P(r.src,a="images/"+u[0].preview)&&i(r,"src",a),h&1&&g!==(g=u[0].title)&&i(r,"alt",g),h&1&&o!==(o=u[0].title+"")&&R(f,o),h&1&&b!==(b=u[0].date+"")&&R(w,b),h&1&&k!==(k=`blog/${u[0].slug}`)&&i(e,"href",k)},i:T,o:T,d(u){u&&d(s)}}}function X(c,s,e){let{post:t}=s;return c.$$set=r=>{"post"in r&&e(0,t=r.post)},[t]}class Y extends F{constructor(s){super(),G(this,s,X,W,H,{post:0})}}function V(c,s,e){const t=c.slice();return t[1]=s[e],t}function x(c){let s,e;return s=new Y({props:{post:c[1]}}),{c(){J(s.$$.fragment)},l(t){K(s.$$.fragment,t)},m(t,r){L(s,t,r),e=!0},p(t,r){const a={};r&1&&(a.post=t[1]),s.$set(a)},i(t){e||(C(s.$$.fragment,t),e=!0)},o(t){q(s.$$.fragment,t),e=!1},d(t){Q(s,t)}}}function ee(c){let s,e,t,r=c[0].posts,a=[];for(let l=0;l<r.length;l+=1)a[l]=x(V(c,r,l));const g=l=>q(a[l],1,1,()=>{a[l]=null});return{c(){s=I(),e=m("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){M("svelte-ysdlnx",document.head).forEach(d),s=S(l),e=p(l,"DIV",{class:!0});var o=E(e);for(let f=0;f<a.length;f+=1)a[f].l(o);o.forEach(d),this.h()},h(){document.title="Strefa Piesza",i(e,"class","container h-full mx-auto justify-center items-center columns-4 pt-4")},m(l,n){j(l,s,n),j(l,e,n);for(let o=0;o<a.length;o+=1)a[o]&&a[o].m(e,null);t=!0},p(l,[n]){if(n&1){r=l[0].posts;let o;for(o=0;o<r.length;o+=1){const f=V(l,r,o);a[o]?(a[o].p(f,n),C(a[o],1)):(a[o]=x(f),a[o].c(),C(a[o],1),a[o].m(e,null))}for(U(),o=r.length;o<a.length;o+=1)g(o);N()}},i(l){if(!t){for(let n=0;n<r.length;n+=1)C(a[n]);t=!0}},o(l){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)q(a[n]);t=!1},d(l){l&&d(s),l&&d(e),Z(a,l)}}}function te(c,s,e){let{data:t}=s;return c.$$set=r=>{"data"in r&&e(0,t=r.data)},[t]}class se extends F{constructor(s){super(),G(this,s,te,ee,H,{data:0})}}export{se as component};
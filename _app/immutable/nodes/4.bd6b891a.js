import{_ as W}from"../chunks/preload-helper.41c905a7.js";import{S as x,i as F,s as G,x as B,a as z,k as g,q as A,y as H,P as J,h as c,c as q,l as $,m as b,r as D,z as K,n as I,b as M,E as i,A as C,u as L,d as V,f as Q,g as N,B as U,v as X}from"../chunks/index.8ca2cd98.js";const Y=(s,a)=>{const r=s[a];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((n,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+a)))})},Z=async({data:s})=>{const a=await Y(Object.assign({"../../../lib/posts/winic-ofiare.md":()=>W(()=>import("../chunks/winic-ofiare.a9e06725.js"),["../chunks/winic-ofiare.a9e06725.js","../chunks/index.8ca2cd98.js"],import.meta.url)}),`../../../lib/posts/${s.post.slug}.md`);return{post:s.post,component:a.default,layout:{fullWidth:!0}}},st=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));function tt(s){let a,r,n,o,_,h=s[0].post.title+"",E,y,u,k,v=s[0].post.date+"",w,S,p,t,f;document.title=a="Strefa Piesza Blog - "+s[0].post.title;var d=s[0].component;function R(e){return{}}return d&&(t=B(d,R())),{c(){r=z(),n=g("article"),o=g("header"),_=g("h1"),E=A(h),y=z(),u=g("span"),k=A("Opublikowane "),w=A(v),S=z(),p=g("div"),t&&H(t.$$.fragment),this.h()},l(e){J("svelte-155l9zs",document.head).forEach(c),r=q(e),n=$(e,"ARTICLE",{});var m=b(n);o=$(m,"HEADER",{class:!0});var P=b(o);_=$(P,"H1",{class:!0});var T=b(_);E=D(T,h),T.forEach(c),y=q(P),u=$(P,"SPAN",{class:!0});var O=b(u);k=D(O,"Opublikowane "),w=D(O,v),O.forEach(c),P.forEach(c),S=q(m),p=$(m,"DIV",{});var j=b(p);t&&K(t.$$.fragment,j),j.forEach(c),m.forEach(c),this.h()},h(){I(_,"class","h1 mb-0"),I(u,"class","float-right"),I(o,"class","pb-4")},m(e,l){M(e,r,l),M(e,n,l),i(n,o),i(o,_),i(_,E),i(o,y),i(o,u),i(u,k),i(u,w),i(n,S),i(n,p),t&&C(t,p,null),f=!0},p(e,[l]){if((!f||l&1)&&a!==(a="Strefa Piesza Blog - "+e[0].post.title)&&(document.title=a),(!f||l&1)&&h!==(h=e[0].post.title+"")&&L(E,h),(!f||l&1)&&v!==(v=e[0].post.date+"")&&L(w,v),l&1&&d!==(d=e[0].component)){if(t){X();const m=t;V(m.$$.fragment,1,0,()=>{U(m,1)}),Q()}d?(t=B(d,R()),H(t.$$.fragment),N(t.$$.fragment,1),C(t,p,null)):t=null}},i(e){f||(t&&N(t.$$.fragment,e),f=!0)},o(e){t&&V(t.$$.fragment,e),f=!1},d(e){e&&c(r),e&&c(n),t&&U(t)}}}function et(s,a,r){let{data:n}=a;return s.$$set=o=>{"data"in o&&r(0,n=o.data)},[n]}class nt extends x{constructor(a){super(),F(this,a,et,tt,G,{data:0})}}export{nt as component,st as universal};

function g(){}const ht=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(Y)}function H(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Jt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function mt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t){let e;return Z(t,n=>e=n)(),e}function Qt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Ut(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,l){if(s){const r=tt(e,n,i,l);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function te(t){const e={};for(const n in t)e[n]=!0;return e}function ee(t,e,n){return t.set(n),e}function ne(t){return t&&H(t.destroy)?t.destroy:g}function ie(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const et=typeof window<"u";let pt=et?()=>window.performance.now():()=>Date.now(),F=et?t=>requestAnimationFrame(t):g;const w=new Set;function nt(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&F(nt)}function yt(t){let e;return w.size===0&&F(nt),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let L=!1;function gt(){L=!0}function xt(){L=!1}function bt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:bt(1,s,d=>e[n[d]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,s=Math.max(a,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function wt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=G("style");return vt(it(t),e),e.sheet}function vt(t,e){return wt(t.head||t,e),e.sheet}function Nt(t,e){if(L){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){L&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function W(t){return document.createTextNode(t)}function re(){return W(" ")}function oe(){return W("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Mt=["width","height"];function le(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Mt.indexOf(i)===-1?t[i]=e[i]:kt(t,i,e[i])}function St(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,s=!1){rt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,i){return ot(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ue(t,e,n){return ct(t,e,n,G)}function ae(t,e,n){return ct(t,e,n,st)}function jt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>W(e),!0)}function fe(t){return jt(t," ")}function K(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function _e(t,e){const n=K(t,"HTML_TAG_START",0),i=K(t,"HTML_TAG_END",n);if(n===i)return new Q(void 0,e);rt(t);const s=t.splice(n,i-n+1);A(s[0]),A(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(l,e)}function he(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e){t.value=e??""}function me(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function pe(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class Q extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function ye(t,e){return new t(e)}const C=new Map;let D=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:Et(e),rules:{}};return C.set(t,n),n}function U(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const x=e+(n-e)*l(y);u+=y*100+`%{${r(x,1-x)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Dt(_)}_${o}`,d=it(t),{stylesheet:f,rules:h}=C.get(d)||Pt(d,t);h[a]||(h[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,D+=1,a}function Ht(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),D-=s,D||Lt())}function Lt(){F(()=>{D||(C.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),C.clear())})}let k;function T(t){k=t}function I(){if(!k)throw new Error("Function called outside component initialization");return k}function ge(t){I().$$.on_mount.push(t)}function xe(t){I().$$.after_update.push(t)}function be(){const t=I();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function $e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const $=[],V=[];let E=[];const X=[],ut=Promise.resolve();let z=!1;function at(){z||(z=!0,ut.then(ft))}function we(){return at(),ut}function P(t){E.push(t)}const q=new Set;let b=0;function ft(){if(b!==0)return;const t=k;do{try{for(;b<$.length;){const e=$[b];b++,T(e),Ot(e.$$)}}catch(e){throw $.length=0,b=0,e}for(T(null),$.length=0,b=0;V.length;)V.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];q.has(n)||(q.add(n),n())}E.length=0}while($.length);for(;X.length;)X.pop()();z=!1,q.clear(),T(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Rt(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let N;function qt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function B(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function Ee(){p={r:0,c:[],p}}function ve(){p.r||v(p.c),p=p.p}function Bt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function Ne(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const zt={duration:0};function Te(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function _(){u&&Ht(t,u)}function a(f,h){const m=f.b-r;return h*=Math.abs(m),{a:r,b:f.b,d:m,duration:h,start:f.start,end:f.start+h,group:f.group}}function d(f){const{delay:h=0,duration:m=300,easing:y=ht,tick:x=g,css:O}=l||zt,R={start:pt()+h,b:f};f||(R.group=p,p.r+=1),o||c?c=R:(O&&(_(),u=U(t,r,f,m,h,y,O)),f&&x(0,1),o=a(R,m),P(()=>B(t,f,"start")),yt(M=>{if(c&&M>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),O&&(_(),u=U(t,r,o.b,o.duration,0,y,l.css))),o){if(M>=o.end)x(r=o.b,1-r),B(t,o.b,"end"),c||(o.b?_():--o.group.r||v(o.group.c)),o=null;else if(M>=o.start){const _t=M-o.start;r=o.a+o.d*y(_t/o.duration),x(r,1-r)}}return!!(o||c)}))}return{run(f){H(l)?qt().then(()=>{l=l(s),d(f)}):d(f)},end(){_(),o=c=null}}}function Ae(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ke(t){return typeof t=="object"&&t!==null?t:{}}function Me(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||P(()=>{const r=t.$$.on_mount.map(Y).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),l.forEach(P)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(Rt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&($.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,l,r,o=[-1]){const c=k;T(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,d,...f)=>{const h=f.length?f[0]:d;return u.ctx&&s(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),_&&Wt(t,a)),d}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const a=St(e.target);u.fragment&&u.fragment.l(a),a.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&Bt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),xt(),ft()}T(c)}class Ce{$destroy(){Gt(this,1),this.$destroy=g}$on(e,n){if(!H(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as $,Ft as A,Gt as B,g as C,se as D,Nt as E,ht as F,ie as G,Ut as H,Xt as I,Yt as J,Vt as K,te as L,dt as M,Zt as N,ce as O,$e as P,Qt as Q,be as R,Ce as S,ne as T,P as U,Te as V,v as W,Ae as X,ke as Y,Jt as Z,le as _,re as a,Q as a0,_e as a1,st as a2,pe as a3,ae as a4,ee as a5,Kt as a6,At as b,fe as c,Ne as d,oe as e,ve as f,Bt as g,A as h,je as i,xe as j,G as k,ue as l,St as m,kt as n,ge as o,me as p,W as q,jt as r,It as s,we as t,he as u,Ee as v,V as w,ye as x,Me as y,Se as z};

import{w}from"./index.6cfa6b32.js";import{a6 as P}from"./index.262177a5.js";const d={};function S(e){return e==="local"?localStorage:sessionStorage}function m(e,t,s){const o=(s==null?void 0:s.serializer)??JSON,f=(s==null?void 0:s.storage)??"local";function i(n,c){S(f).setItem(n,o.stringify(c))}if(!d[e]){const n=w(t,r=>{const a=S(f).getItem(e);a&&r(o.parse(a));{const g=l=>{l.key===e&&r(l.newValue?o.parse(l.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:c,set:u}=n;d[e]={set(r){i(e,r),u(r)},update(r){const a=r(P(n));i(e,a),u(a)},subscribe:c}}return d[e]}const h=m("modeOsPrefers",!1),M=m("modeUserPrefers",void 0),L=m("modeCurrent",!1);function C(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return h.set(e),e}function v(e){M.set(e)}function E(e){const t=document.documentElement.classList,s="dark";e===!0?t.remove(s):t.add(s),L.set(e)}function b(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),o=window.matchMedia("(prefers-color-scheme: dark)").matches;t||s&&o?e.add("dark"):e.remove("dark")}export{E as a,v as b,C as g,L as m,b as s};

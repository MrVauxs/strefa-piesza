import{w}from"./index.6cfa6b32.js";import{a6 as S}from"./index.262177a5.js";function P(){const{subscribe:e,set:t,update:s}=w([]);return{subscribe:e,set:t,update:s,trigger:r=>s(a=>(a.push(r),a)),close:()=>s(r=>(r.length>0&&r.shift(),r)),clear:()=>t([])}}const v=P(),i={};function h(e){return e==="local"?localStorage:sessionStorage}function f(e,t,s){const r=(s==null?void 0:s.serializer)??JSON,a=(s==null?void 0:s.storage)??"local";function m(c,l){h(a).setItem(c,r.stringify(l))}if(!i[e]){const c=w(t,o=>{const n=h(a).getItem(e);n&&o(r.parse(n));{const g=d=>{d.key===e&&o(d.newValue?r.parse(d.newValue):null)};return window.addEventListener("storage",g),()=>window.removeEventListener("storage",g)}}),{subscribe:l,set:u}=c;i[e]={set(o){m(e,o),u(o)},update(o){const n=o(S(c));m(e,n),u(n)},subscribe:l}}return i[e]}const M=f("modeOsPrefers",!1),L=f("modeUserPrefers",void 0),U=f("modeCurrent",!1);function C(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return M.set(e),e}function p(e){L.set(e)}function E(e){const t=document.documentElement.classList,s="dark";e===!0?t.remove(s):t.add(s),U.set(e)}function I(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;t||s&&r?e.add("dark"):e.remove("dark")}export{U as a,E as b,p as c,C as g,v as m,I as s};

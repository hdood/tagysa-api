var p=Object.defineProperty;var d=(i,a,s)=>a in i?p(i,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[a]=s;var e=(i,a,s)=>(d(i,typeof a!="symbol"?a+"":a,s),s);import{a3 as k,A as c,I as u,B as f,D as n}from"./entry.3fce29e1.js";const y=k(),t=c(y).provide.axios;class m{constructor(){e(this,"all",f([]));e(this,"addLink",async(a,s,r,l,o)=>{await t.post("/api/links",{name:a,url:s,icon:r,order:l,text:o}),n().refreshFrame()});e(this,"getAllLinks",async()=>{let a=await t.get("/api/links");this.all.value=a.data});e(this,"deleteLink",async a=>{await t.delete(`/api/links/${a}`)});e(this,"reorder",async()=>{const a=Array.from(this.all.value,(s,r)=>({id:s.id,order:r}));t.post("/api/links/reorder",{links:JSON.stringify(a)}),n().refreshFrame()});e(this,"updateLink",async(a,s,r)=>{await t.patch(`/api/links/${a}`,{name:s,url:r})})}}const h=u("links",()=>new m);export{h as u};

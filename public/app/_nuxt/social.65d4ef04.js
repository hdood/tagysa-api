var n=Object.defineProperty;var l=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>(l(t,typeof e!="symbol"?e+"":e,r),r);import{A as c,I as g,B as u}from"./entry.7d81f6f8.js";const a=c().provide.axios;class d{constructor(){o(this,"error",u(!1));o(this,"googleLogin",async e=>{var r,i;this.error.value=!1;try{return await a.post("/login/google",{client_id:e.clientId,credential:e.credential}),!0}catch(s){if(((i=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:i.error)=="user not signed up")return!1}});o(this,"googleRegister",async e=>{this.error.value=!1;try{return await a.post("/register/google",{client_id:e.clientId,credential:e.credential}),!0}catch{return!1}})}}const S=g("social",()=>new d);export{S as u};
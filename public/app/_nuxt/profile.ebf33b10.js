var c=Object.defineProperty;var u=(e,i,r)=>i in e?c(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var s=(e,i,r)=>(u(e,typeof i!="symbol"?i+"":i,r),r);import{A as f,I as d,B as l,J as p}from"./entry.e6451b68.js";const t=f().provide.axios;class v{constructor(){s(this,"user",l({}));s(this,"fetchProfile",async i=>{try{const r=await t.get(`/api/users/${i}`);this.user.value=r.data}catch{this.user.value.id=!1}});s(this,"storeContactSaver",async(i,r,o)=>{const{successNotification:a,errorNotification:n}=p();try{await t.post("/api/contact-saver",{name:i,email:r,phone:o,user_id:this.user.value.id}),a("form submitted successfully")}catch{n("failed to submit form")}});s(this,"storeVisitor",async()=>{try{await t.post(`/api/visitor/${this.user.value.id}`,{device:x()})}catch{}})}}const y=d("profile",()=>new v);function x(){const e=navigator.userAgent.toLowerCase();return e.indexOf("android")>-1?"android":e.indexOf("iphone")>-1||e.indexOf("ipad")>-1?"iphone":e.indexOf("windows")>-1||e.indexOf("linux")>-1||e.indexOf("mac")>-1?"laptop":"unknown"}export{y as u};

var f=Object.defineProperty;var d=(i,s,r)=>s in i?f(i,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[s]=r;var a=(i,s,r)=>(d(i,typeof s!="symbol"?s+"":s,r),r);import{a2 as l,G as w,M as y,J as u,N as c,x as m}from"./entry.357d2ba9.js";const g=l(),t=w(g).provide.axios;class h{constructor(){a(this,"register",async(s,r,o,e)=>{await t.post("/register",{name:s,email:r,password:o,password_confirmation:e})});a(this,"login",async(s,r)=>{await t.post("/login",{email:s,password:r})});a(this,"logout",async()=>{await t.post("/logout"),u().user.value={}});a(this,"sendVerificationLink",async()=>{try{return(await t.post("/email/verification-notification")).data}catch{return!1}});a(this,"verifyEmail",async(s,r)=>{const{successNotification:o,errorNotification:e}=c();try{return await t(`/verify-email/${s}/${r}`),o("email verified successfully"),!0}catch{return e("failed to verify email"),!1}});a(this,"changePassword",async(s,r,o)=>{const{successNotification:e,errorNotification:n}=c();try{return await t.post("/api/change-password",{old_password:s,new_password:r,new_password_confirmation:o}),e("password updated successfully"),!0}catch(p){if(p.response.data.error=="wrong password"){n("wrong password");return}return n("password confirmation does not match password"),!1}});a(this,"deleteAccount",async s=>{const{successNotification:r,errorNotification:o}=c(),{user:e}=m(u());try{return await t.post("/api/account",{password:s}),r("account deleted successfully"),e.value={},!0}catch{return o("wrong password"),!1}})}}const x=y("auth",()=>new h);export{x as u};
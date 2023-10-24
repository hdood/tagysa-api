var d=Object.defineProperty;var n=(c,s,e)=>s in c?d(c,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[s]=e;var t=(c,s,e)=>(n(c,typeof s!="symbol"?s+"":s,e),e);import{A as u,I as f,B as l,J as r}from"./entry.5b04ea27.js";const i=u().provide.axios;class y{constructor(){t(this,"spaces",l([]));t(this,"store",async s=>{const{successNotification:e,errorNotification:a}=r();try{await i.post("/api/spaces",s),e(`${s.name} space created successfully`)}catch{a("failed to create space")}});t(this,"fetchAll",async()=>{const s=await i("/api/spaces");this.spaces.value=s.data.data});t(this,"fetchRequests",async()=>{});t(this,"attachUser",async(s,e)=>{const{errorNotification:a,successNotification:o}=r();try{await i.post(`/api/spaces/attach/${s}/${e}`),o("user added successfully")}catch{a("failed to add user")}});t(this,"detachUser",async(s,e)=>{const{errorNotification:a,successNotification:o}=r();try{await i.post(`/api/spaces/detach/${s}/${e}`),o("user deleted successfullsy")}catch{a("failed to delete user")}});t(this,"update",async s=>{const{errorNotification:e,successNotification:a}=r();try{await i.put(`/api/spaces/${s.id}`,s),a("space updated successfully")}catch{e("failed to update space")}});t(this,"destroy",async s=>{const{errorNotification:e,successNotification:a}=r();try{await i.delete(`/api/spaces/${s}`),a("space deleted successfully")}catch{e("failed to delete space")}})}}const $=f("spaces",()=>new y);export{$ as u};

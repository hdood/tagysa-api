var n=Object.defineProperty;var d=(e,r,o)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o;var s=(e,r,o)=>(d(e,typeof r!="symbol"?r+"":r,o),o);import{A as f,I as l,B as u,J as t}from"./entry.e6451b68.js";const a=f().provide.axios;class p{constructor(){s(this,"orders",u([]));s(this,"fetchAll",async()=>{const{errorNotification:r}=t();try{const{data:o}=await a("/api/orders");this.orders.value=o.data}catch{r("failed to fetch orders")}});s(this,"cancel",async r=>{const{errorNotification:o,successNotification:c}=t();try{await a.post(`/api/orders/cancel/${r}`),c("order cancelled successfully")}catch{o("failed to cancel order")}});s(this,"confirmReceiving",async r=>{const{errorNotification:o,successNotification:c}=t();try{await a.post(`/api/orders/received/${r}`),c("order confirmed successfully")}catch{o("failed to confirm order")}})}}const N=l("orders",()=>new p);export{N as u};

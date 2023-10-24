import{D as b,B as v,s as f,x,P as g,o as d,f as c,p as t,m as o,i as s,k as w,u as r,y as e,F as y,C as k,H as B}from"./entry.31e86c9c.js";import{_ as C}from"./nuxt-link.3de5dce6.js";import{_ as N}from"./Logo.6122e32a.js";import{_ as P}from"./Button.vue.548fc0bf.js";import"./Icon.1afaac6d.js";import"./config.a7b2ca2f.js";import"./_plugin-vue_export-helper.c27b6911.js";const L=s("title",null,`
            Products
        `,-1),T={class:"bg-gradient-to-r from-bg-blue-200 to-bg-blue-300 flex flex-col items-center"},H={class:"navbar-start"},I={class:"dropdown"},V=s("label",{tabindex:"0",class:"btn btn-ghost lg:hidden"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1),j={tabindex:"0",class:"menu menu-sm text-xl dropdown-content mt-3 z-[1] px-2 py-4 shadow bg-base-100 rounded-box w-80 text-center flex flex-col gap-3"},z=s("div",null,[s("a",null,"About us")],-1),E=s("div",null,[s("a",null,"Products")],-1),M={class:"navbar-center hidden lg:flex"},R={class:"menu menu-horizontal px-1"},S=s("li",null,[s("a",null,"About us")],-1),U=s("li",null,[s("a",null,"Products")],-1),A={key:0,class:"navbar-end flex items-center gap-7"},D={class:"avatar"},F={class:"w-8 rounded-full"},$=["src"],W={key:1,class:"navbar-end space-x-2"},q=k('<div class="mt-32"><h1 class="text-center text-primary font-bold text-4xl">Products</h1><div class="max-w-7xl flex gap-4 flex-wrap mx-auto my-20"><div class="card w-96 bg-base-100 shadow-xl"><div class="card-body"><h2 class="card-title">PVC Card</h2><p>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions justify-end"><button class="btn btn-primary">Buy Now</button></div></div></div><div class="card w-96 bg-base-100 shadow-xl"><div class="card-body"><h2 class="card-title">Metalic Card</h2><p>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions justify-end"><button class="btn btn-primary">Buy Now</button></div></div></div><div class="card w-96 bg-base-100 shadow-xl"><div class="card-body"><h2 class="card-title">Wooden Card</h2><p>If a dog chews shoes whose shoes does he choose?</p><div class="card-actions justify-end"><button class="btn btn-primary">Buy Now</button></div></div></div></div></div>',1),ts={__name:"products",setup(G){const i=b(),n=v(!1),{user:u}=f(i);return x(async()=>{try{await i.getUser()}catch{}document.addEventListener("scroll",()=>{if(document.getElementById("navigation-bar"),(document.body.scrollTop||document.documentElement.scrollTop)>200){n.value=!0;return}n.value=!1})}),(_,J)=>{const h=B,a=C,m=N,l=P,p=g("RouterLink");return d(),c(y,null,[t(h,null,{default:o(()=>[L]),_:1}),s("div",T,[s("div",{class:w(["navbar z-50 bg-base-100 mx-auto rounded-lg fixed transition-all lg:px-20",[r(n)?"lg:w-11/12  shadow-lg    opacity-80 hover:opacity-100":"shadow"]])},[s("div",H,[s("div",I,[V,s("div",j,[s("div",null,[t(a,{to:"/"},{default:o(()=>[e("Home")]),_:1})]),z,E])]),s("a",null,[t(m)])]),s("div",M,[s("ul",R,[s("li",null,[t(a,{to:"/"},{default:o(()=>[e("Home")]),_:1})]),S,U])]),r(u).id?(d(),c("div",A,[t(p,{to:"login"},{default:o(()=>[t(l,{type:"primary",class:"btn-sm"},{default:o(()=>[e(" Dashboard ")]),_:1})]),_:1}),s("div",D,[s("div",F,[s("img",{src:r(u).image,alt:"User Profile Image"},null,8,$)])])])):(d(),c("div",W,[t(a,{to:"/login"},{default:o(()=>[t(l,{type:"primary",class:"btn-sm"},{default:o(()=>[e("Login")]),_:1})]),_:1}),t(a,{to:"register"},{default:o(()=>[t(l,{type:"primary",class:"btn-sm"},{default:o(()=>[e("Register")]),_:1})]),_:1})]))],2)]),q],64)}}};export{ts as default};

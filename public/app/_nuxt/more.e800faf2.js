import c from"./Icon.82aece9d.js";import{G as u,I as m,l,m as d,w as p,o as _,c as f,t as w,i as e,z as h,C as g}from"./entry.458b6613.js";import x from"./AdminLayout.f7eb3da6.js";import"./config.2982fd22.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.78c96cdd.js";import"./Logo.ba43062c.js";import"./BottomNavigation.8b8f37fa.js";import"./ShareModal.e22b0819.js";import"./Button.vue.6778f305.js";import"./transition.0bced354.js";import"./micro-task.83daa364.js";import"./ConfirmModal.vue.737e0aad.js";import"./auth.6d11e5a3.js";const v={id:"MorePage",class:"flex"},y={class:"rounded-md bg-white w-full"},P={__name:"more",setup(k){const s=u(),r=m();let o=l(window.innerWidth);d(()=>{window.addEventListener("resize",function(){o.value=window.innerWidth})});const i=async()=>{let n=confirm("Are you sure you want to sign out?");try{n&&(await s.logout(),r.push("/login"))}catch(t){console.log(t)}};return p(()=>o.value,()=>{o.value>=767&&r.push("/admin")}),(n,t)=>{const a=c;return _(),f(x,null,{default:w(()=>[e("div",v,[e("div",y,[e("button",{onClick:t[0]||(t[0]=b=>i()),class:"w-full flex items-center text-gray-600 p-3 hover:text-black"},[h(a,{name:"circum:logout",class:"mr-6"}),g(" Sign out ")])])])]),_:1})}}};export{P as default};

import c from"./Icon.6db7af4e.js";import{D as u,E as m,B as l,x as p,G as d,o as _,c as f,m as w,i as e,p as h,y as g}from"./entry.7d81f6f8.js";import x from"./AdminLayout.822715b8.js";import"./config.b55a6f2a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.89210bb3.js";import"./Logo.09782031.js";import"./BottomNavigation.b2c461b2.js";import"./ShareModal.a409373c.js";import"./Button.vue.b73a2d1a.js";import"./transition.f205464a.js";import"./micro-task.e4d790c6.js";import"./ConfirmModal.vue.89426ac0.js";import"./auth.3404e64c.js";const v={id:"MorePage",class:"flex"},y={class:"rounded-md bg-white w-full"},L={__name:"more",setup(k){const s=u(),r=m();let t=l(window.innerWidth);p(()=>{window.addEventListener("resize",function(){t.value=window.innerWidth})});const i=async()=>{let n=confirm("Are you sure you want to sign out?");try{n&&(await s.logout(),r.push("/login"))}catch(o){console.log(o)}};return d(()=>t.value,()=>{t.value>=767&&r.push("/admin")}),(n,o)=>{const a=c;return _(),f(x,null,{default:w(()=>[e("div",v,[e("div",y,[e("button",{onClick:o[0]||(o[0]=B=>i()),class:"w-full flex items-center text-gray-600 p-3 hover:text-black"},[h(a,{name:"circum:logout",class:"mr-6"}),g(" Sign out ")])])])]),_:1})}}};export{L as default};
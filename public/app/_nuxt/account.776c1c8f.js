import{B as v,o as x,f as h,p as t,m as a,i as o,u as l,y as u,k as c,v as m,j as y,F as $,E as C,H as b,T as R}from"./entry.5b04ea27.js";import{_ as k}from"./ConfirmModal.vue.5a246b17.js";import{_ as B}from"./Button.vue.0ee6f82c.js";import{_ as N}from"./nuxt-link.4365e727.js";import{u as A}from"./auth.ea6f1a44.js";import L from"./AdminLayout.3a242089.js";import"./transition.436386a3.js";import"./micro-task.e6132286.js";import"./Icon.2016312d.js";import"./config.89fb9aa0.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Logo.61bda8d1.js";import"./BottomNavigation.e8774889.js";import"./ShareModal.db2b82fd.js";const H=o("title",null,"Account",-1),S={class:"flex lg:gap-3 md:gap-3 gap-6 flex-wrap lg:flex-nowrap max-w-7xl mx-auto"},V={class:"flex gap-3 w-full lg:max-w-fit"},E={class:"w-full lg:w-56"},F={class:"menu lg:w-56 w-full rounded-box space-y-3 shadow-lg bg-base-200"},T={class:"w-full bg-base-200 rounded-2xl p-5 shadow min-h-fit"},Y={__name:"account",setup(j){const _=A(),n=v(!1);async function p(){await _.logout(),C().push("/login")}return(s,e)=>{const d=b,f=k,g=B,i=N,w=R;return x(),h($,null,[t(d,null,{default:a(()=>[H]),_:1}),t(L,null,{default:a(()=>[o("div",S,[t(f,{show:l(n),title:"Logout",body:"Are you sure you want to logout",type:"danger",onClose:e[0]||(e[0]=r=>n.value=!1),onConfirm:e[1]||(e[1]=r=>p()),positive:"Logout"},null,8,["show"]),t(g,{type:"danger",onClick:e[2]||(e[2]=r=>n.value=!0),class:"w-full lg:hidden"},{default:a(()=>[u("Logout")]),_:1}),o("div",V,[o("div",E,[o("ul",F,[o("li",null,[t(i,{to:"/account",class:c([("useRoute"in s?s.useRoute:l(m))().name=="admin-account"&&"active"])},{default:a(()=>[u(" Account ")]),_:1},8,["class"])]),o("li",null,[t(i,{to:"/account/cards",class:c([("useRoute"in s?s.useRoute:l(m))().name=="admin-account"&&"active"])},{default:a(()=>[u(y(s.$t("cards")),1)]),_:1},8,["class"])])])])]),o("div",T,[t(w)])])]),_:1})],64)}}};export{Y as default};
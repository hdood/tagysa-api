import _ from"./Icon.dab32138.js";import{_ as f}from"./nuxt-link.40e5ab2b.js";import{_ as v}from"./LinkCardModal.421cb4cb.js";import{x,G as b,l as k,o,f as n,u as l,i as t,A as r,F as C,B as y,z as d,S as $,t as g,C as w}from"./entry.65f15cac.js";import"./config.9f98906d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./TextInput.901ad00a.js";import"./transition.b30d7ad9.js";import"./hidden.ad80bf95.js";import"./micro-task.89dcd6af.js";import"./platform.ec21aee4.js";const h={key:0},B={class:"flex text-center flex-col items-center gap-10"},N={class:"text-2xl font-medium"},L={key:1,class:"flex flex-col gap-6"},M={class:"w-full flex justify-end"},S={class:"flex justify-between items-center bg-primary p-4 rounded"},V={class:"text-primary-content flex items-center gap-2"},H={__name:"cards",setup(j){const{user:m}=x(b()),i=k(!1);return(a,e)=>{const p=_,c=f,u=v;return o(),n("div",null,[l(m).cards.length==0?(o(),n("div",h,[t("div",B,[t("span",N,r(a.$t("noCards")),1),t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=s=>i.value=!0)},r(a.$t("linkCard")),1)])])):(o(),n("div",L,[t("div",M,[t("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=s=>i.value=!0)},r(a.$t("linkCard")),1)]),(o(!0),n(C,null,y(l(m).cards,s=>(o(),n("div",S,[t("div",V,[d(p,{name:"solar:card-bold",size:"30"}),t("div",null,r(s.name),1)]),t("div",null,[t("div",{onClick:e[2]||(e[2]=$(()=>{},["stop"]))},[d(c,{to:"/profile/"+s.id,class:"btn btn-base"},{default:g(()=>[w(r(a.$t("editProfile")),1)]),_:2},1032,["to"])])])]))),256))])),d(u,{show:l(i),onClose:e[3]||(e[3]=s=>i.value=!1)},null,8,["show"])])}}};export{H as default};
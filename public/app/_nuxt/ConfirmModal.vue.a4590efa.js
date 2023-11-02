import{_ as u}from"./Button.vue.05625655.js";import{a as _,o as y,c as h,t as e,z as a,u as o,i as t,C as r,A as n}from"./entry.e6c86e49.js";import{q as v,h as d,U as x,Y as w,S as b}from"./transition.bd062dec.js";const g=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),C={class:"fixed inset-0 overflow-y-auto"},k={class:"flex min-h-full items-center justify-center p-4 text-center"},B={class:"mt-2"},N={class:"text-sm text-gray-500"},S={class:"mt-6 flex justify-end w-full space-x-5"},U=_({__name:"ConfirmModal",props:{show:{type:Boolean},title:{},body:{},positive:{},negative:{},type:{}},emits:["confirm","close"],setup(p,{emit:i}){const s=p;function l(){i("close")}function f(){i("confirm"),i("close")}return(c,V)=>{const m=u;return y(),h(o(b),{appear:"",show:s.show,as:"template"},{default:e(()=>[a(o(v),{as:"div",onClose:l,class:"relative z-10"},{default:e(()=>[a(o(d),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:e(()=>[g]),_:1}),t("div",C,[t("div",k,[a(o(d),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:e(()=>[a(o(x),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all"},{default:e(()=>[a(o(w),{as:"h3",class:"text-lg font-medium leading-6 text-base-content"},{default:e(()=>[r(n(c.title),1)]),_:1}),t("div",B,[t("p",N,n(c.body),1)]),t("div",S,[t("button",{type:"button",onClick:l},n(s.negative||"cancel"),1),a(m,{type:s.type||"primary",class:"px-2 h-10 text-center",onClick:f},{default:e(()=>[r(n(s.positive||"confirm"),1)]),_:1},8,["type"])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}});export{U as _};

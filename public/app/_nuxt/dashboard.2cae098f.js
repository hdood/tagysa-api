import{A as w,s as h,D as y,B as g,x as j,o as i,f as n,p as t,m as f,i as e,j as p,u as d,q as k,F as x,r as C,H as $}from"./entry.6ed29bba.js";import z from"./Icon.30ff5d8a.js";import{_ as B}from"./nuxt-link.d0fe6817.js";import{_ as S}from"./LinkCardModal.4c3db9a4.js";import{C as V}from"./auto.1f697c56.js";import D from"./AdminLayout.ef511ca7.js";import"./config.7dd18642.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./TextInput.8846b364.js";import"./links.44a2d456.js";import"./transition.1bc90d91.js";import"./micro-task.e28bec25.js";import"./Logo.27d04d0e.js";import"./BottomNavigation.a7e33a38.js";import"./ShareModal.b384cf2b.js";import"./Button.vue.650e005c.js";import"./ConfirmModal.vue.51bc550f.js";import"./auth.51ad6a43.js";const N=e("title",null,"Dashboard",-1),H={class:"max-w-7xl mt-10 mx-auto flex justify-between"},L={class:"flex items-center w-full flex-wrap gap-5 justify-center lg:justify-start"},M={class:"flex p-4 gap-4 justify-between px-5 rounded-lg md:gap-6 bg-base-200 text-base-content min-w-[18rem] w-full lg:w-fit"},A={class:"flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400"},E={class:"flex flex-col justify-center align-middle"},F={class:"text-3xl font-semibold leadi"},I=e("p",{class:"capitalize"},"Cards",-1),R={class:"flex p-4 gap-4 justify-between px-5 rounded-lg md:gap-6 bg-base-200 text-base-content min-w-[18rem] w-full lg:w-fit"},T={class:"flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400"},q={class:"flex flex-col justify-center align-middle"},O={class:"text-3xl font-semibold leadi"},P=e("p",{class:"capitalize"},"Taps",-1),U={class:"flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400"},G=e("div",{class:"flex flex-col justify-center align-middle"},[e("p",{class:"text-3xl font-semibold leadi"},"Products")],-1),J={class:"flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400"},K=e("div",{class:"flex flex-col justify-center align-middle"},[e("p",{class:"text-3xl font-semibold leadi"},"Settings")],-1),Q={class:"max-w-7xl mx-auto my-5 flex gap-4 flex-wrap lg:flex-nowrap"},W={class:"flex flex-col gap-5 p-5 rounded-lg bg-base-200 lg:w-[60rem] w-full items-center"},X={class:"flex justify-between w-full"},Y=e("h1",{class:"text-2xl font-medium"}," Cards ",-1),Z={class:"w-full"},ee={key:0},te={key:1},se={class:"flex text-center flex-col items-center gap-3"},oe={class:"text-xl font-medium"},le=e("div",{class:"w-full overflow-hidden rounded-lg flex flex-col items-start gap-8"},[e("div",{class:"lg:w-[40rem] text-3xl font-medium text-base-content"},"Views"),e("canvas",{class:"lg:w-[40rem]",id:"visitors"})],-1),ke={__name:"dashboard",setup(ae){const b=w().provide.axios,{user:r}=h(y()),u=g(!1),v=g([]);return j(async()=>{const c=await b("/api/analytics");v.value=c.data;const s=c.data.visits;new V(document.getElementById("visitors"),{type:"bar",data:{labels:s.map(o=>o.period),datasets:[{label:"Views",data:s.map(o=>o.count)}]},options:{plugins:{customCanvasBackgroundColor:{color:localStorage.getItem("tagysa-theme")=="winter"?"white":"black"}}},plugins:[{id:"customCanvasBackgroundColor",beforeDraw:(o,a,m)=>{const{ctx:l}=o;l.save(),l.globalCompositeOperation="destination-over",l.fillStyle=m.color||"#99ffff",l.fillRect(0,0,o.width,o.height),l.restore()}}]})}),(c,s)=>{const o=$,a=z,m=B,l=S;return i(),n(x,null,[t(o,null,{default:f(()=>[N]),_:1}),t(D,null,{default:f(()=>[e("div",H,[e("div",L,[e("div",M,[e("div",A,[t(a,{name:"solar:card-bold",size:"35"})]),e("div",E,[e("p",F,p(d(r).cards.length),1),I])]),e("div",R,[e("div",T,[t(a,{name:"mingcute:finger-tap-fill",size:"35"})]),e("div",q,[e("p",O,p(d(r).views),1),P])]),t(m,{to:"/products",class:"flex p-4 gap-4 justify-between px-5 rounded-lg md:gap-6 bg-base-200 text-base-content min-w-[18rem] w-full lg:w-fit"},{default:f(()=>[e("div",U,[t(a,{name:"mdi:cart",size:"35"})]),G]),_:1}),t(m,{to:"/account",class:"flex p-4 gap-4 justify-between px-5 rounded-lg md:gap-6 bg-base-200 text-base-content min-w-[18rem] w-full lg:w-fit"},{default:f(()=>[e("div",J,[t(a,{name:"material-symbols:settings",size:"35"})]),K]),_:1})])]),e("div",Q,[e("div",W,[t(l,{show:d(u),onClose:s[0]||(s[0]=_=>u.value=!1)},null,8,["show"]),e("div",X,[Y,d(r).cards.length!=0?(i(),n("button",{key:0,onClick:s[1]||(s[1]=_=>u.value=!0),class:"btn btn-sm btn-info"}," + ")):k("",!0)]),e("div",Z,[d(r).cards.length!=0?(i(),n("div",ee,[(i(!0),n(x,null,C(d(r).cards,_=>(i(),n("div",null,[t(m,{to:"/account/cards",class:"bg-primary p-4 rounded text-primary-content flex items-center gap-2"},{default:f(()=>[t(a,{name:"solar:card-bold",size:"30"}),e("div",null,p(_.name),1)]),_:2},1024)]))),256))])):(i(),n("div",te,[e("div",se,[e("span",oe,p(c.$t("noCards")),1),e("button",{class:"btn btn-primary",onClick:s[2]||(s[2]=_=>u.value=!0)},p(c.$t("linkCard")),1)])]))])]),le])]),_:1})],64)}}};export{ke as default};

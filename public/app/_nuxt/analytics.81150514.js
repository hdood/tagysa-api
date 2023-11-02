import{G as _,l as w,m as b,o as e,f as a,z as f,t as g,i as t,F as m,B as r,u,I as p,H as h,A as i}from"./entry.e6c86e49.js";import{C as x}from"./auto.1f697c56.js";const y=t("title",null,"Analytics",-1),k=p('<div class="w-full mt-10"><div class="mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md text-lg font-medium text-black"> Views </div><canvas class="lg:w-[40rem] mx-auto" id="visitors"></canvas></div><div class="w-full"><div class="mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md text-lg font-medium text-black"> Devices </div><canvas class="lg:w-[40rem] mx-auto" id="acquisitions"></canvas></div><div class="mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md text-lg font-medium text-black my-10"> Views by countries </div>',3),V={class:"mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md bg-base-200 rounded-lg p-2"},B=t("div",{class:"flex justify-end"},[t("div",{class:"text-xs"},"Views")],-1),C={class:"font-medium"},j=t("div",{class:"mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md text-lg font-medium text-black my-10"}," Views by cities ",-1),D={class:"mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md bg-base-200 rounded-lg p-2 mb-20"},E=t("div",{class:"flex justify-end"},[t("div",{class:"text-xs"},"Views")],-1),N={class:"font-medium"},S=t("div",{class:"mx-auto lg:w-[40rem] lg:max-w-5xl max-w-md text-lg font-medium text-black my-10"}," Contact Savers ",-1),H={class:"overflow-x-auto mx-auto mb-40"},I={class:"table mx-auto max-w-md"},$=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th"),t("th")])],-1),q=["href"],A=["href"],L={__name:"analytics",setup(F){const v=_().provide.axios,d=w([]);return b(async()=>{const o=await v("/api/analytics");d.value=o.data;const c=o.data.devices,n=o.data.visits;new x(document.getElementById("acquisitions"),{type:"bar",data:{labels:c.map(s=>s.name),datasets:[{label:"Devices",data:c.map(s=>s.count.week)}]}}),new x(document.getElementById("visitors"),{type:"bar",data:{labels:n.map(s=>s.period),datasets:[{label:"Devices",data:n.map(s=>s.count)}]}})}),(o,c)=>{const n=h;return e(),a(m,null,[f(n,null,{default:g(()=>[y]),_:1}),k,t("div",V,[B,(e(!0),a(m,null,r(u(d).countries,(s,l)=>(e(),a("div",{class:"flex justify-between px-2 border-b pb-1 mb-4",key:l},[t("div",C,i(l),1),t("div",null,i(s),1)]))),128))]),j,t("div",D,[E,(e(!0),a(m,null,r(u(d).cities,(s,l)=>(e(),a("div",{class:"flex justify-between px-2 border-b pb-1 mb-4",key:l},[t("div",N,i(l),1),t("div",null,i(s),1)]))),128))]),S,t("div",H,[t("table",I,[$,t("tbody",null,[(e(!0),a(m,null,r(u(d).contactSavers,s=>(e(),a("tr",{key:s.id},[t("td",null,i(s.name),1),t("td",null,[t("a",{href:`mailto:${s.email}`,class:"btn btn-primary btn-sm"}," Email ",8,q)]),t("td",null,[t("a",{href:`tel:${s.phone}`,class:"btn btn-primary btn-sm"}," Call ",8,A)])]))),128))])])])],64)}}};export{L as default};

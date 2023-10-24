import{_ as R}from"./nuxt-link.3de5dce6.js";import{_ as S}from"./Logo.6122e32a.js";import z from"./Icon.1afaac6d.js";import{a as V,e as M,ab as k,o as m,f as u,i as e,K as Z,k as w,s as B,D as x,P as I,p as t,m as a,B as j,ac as T,x as D,u as l,Q as y,w as E,ad as H,L as U,X as A,y as h,j as f,v as $}from"./entry.31e86c9c.js";import{a as q}from"./ShareModal.470dc780.js";import"./config.a7b2ca2f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Button.vue.548fc0bf.js";import"./transition.d78ec031.js";import"./micro-task.545494b7.js";const F=V({__name:"BottomNavigationItem",props:{active:{}},setup(b){const i=b,_=M(()=>Array.isArray(i.active)?i.active.includes(k().name):k().name==i.active);return(r,c)=>(m(),u("div",{class:w(["w-12 flex items-center item-wrapper duration-300 fill-base-content text-base-content",[_.value&&"border-b-primary border-b-4",!_.value&&""]])},[e("div",{class:w(["p-2 w-full rounded-lg flex items-center gap-3",[_.value?"    font-medium justify-center ":""]])},[Z(r.$slots,"default")],2)],2))}}),K={class:"h-12 bg-base-200 w-11/12 rounded-xl shadow-2xl flex mx-auto justify-center gap-7 px-2 items-center"},P=e("span",{class:"dark:text-white item overflow-hidden hidden transition-all duration-200"},"Analytics",-1),Q={__name:"BottomNavigation",setup(b){return B(x()),(i,_)=>{const r=z,c=F,d=I("routerLink");return m(),u("div",K,[t(d,{to:"/admin/space"},{default:a(()=>[t(c,{active:["admin-space","admin-space-name"]},{default:a(()=>[t(r,{name:"cib:myspace",size:"20"})]),_:1})]),_:1}),t(d,{to:"/admin"},{default:a(()=>[t(c,{active:"admin"},{default:a(()=>[t(r,{name:"fluent:card-ui-24-filled",size:"20"})]),_:1})]),_:1}),t(d,{to:"/admin/analytics"},{default:a(()=>[t(c,{active:"admin-analytics"},{default:a(()=>[t(r,{name:"majesticons:analytics",size:"20"}),P]),_:1})]),_:1})])}}},X={class:"flex h-screen fixed w-screen dark:bg-slate-800 pb-20 lg:pb-0"},G={class:"main flex-grow h-full flex flex-col items-center overflow-y-scroll overflow-x-hidden mb-32 lg:mb-0"},J={class:"navbar container max-w-7xl mt-3 shadow-lg bg-base-200"},O={class:"navbar-start"},W={class:"dropdown"},Y=e("label",{tabindex:"0",class:"btn btn-ghost lg:hidden"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1),ee={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},te={key:0},se={key:1},oe={class:"btn btn-ghost normal-case text-xl"},ae={class:"navbar-center hidden lg:flex"},ne={class:"menu menu-horizontal gap-2 px-1"},le={class:"navbar-end"},ie={class:"navbar-end flex items-center gap-4"},re={class:"dropdown dropdown-hover"},ce={class:"swap swap-rotate mt-1"},de=e("svg",{class:"swap-off fill-current w-7 h-7",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})],-1),me=e("svg",{class:"swap-on fill-current w-7 h-7",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})],-1),ue={class:"flex items-center space-x-3"},_e={class:"avatar"},pe={class:"mask mask-squircle w-12 h-12"},he=["src"],ve={class:"w-full min-h-fit px-2 p-1 mt-10"},fe={class:"lg:hidden md:fixed fixed bottom-3 w-full z-50"},Be={__name:"AdminLayout",setup(b){const{user:i}=B(x()),{getUser:_,refreshFrame:r}=x(),c=j(!1),{locale:d}=T();function v(s){d.value=s,localStorage.setItem("vkey-locale",s)}const g=M({get:()=>A.value=="dark",set:s=>{const n=localStorage.getItem("tagysa-theme")=="winter"?"halloween":"winter";localStorage.setItem("tagysa-theme",n),A.value=n,r()}});return D(()=>_()),(s,o)=>{const n=R,C=S,L=Q,N=q;return m(),u("div",X,[e("div",G,[e("div",J,[e("div",O,[e("div",W,[Y,e("ul",ee,[e("li",null,[t(n,{to:"/dashboard",class:w([("useRoute"in s?s.useRoute:l($))().name=="dashboard"&&"active"])},{default:a(()=>[h(f(s.$t("dashboard")),1)]),_:1},8,["class"])]),e("li",null,[t(n,{to:"/profile"},{default:a(()=>[h(f(s.$t("profile")),1)]),_:1})]),e("li",null,[t(n,{to:"/account"},{default:a(()=>[h("Account")]),_:1})]),l(d)!="ar"?(m(),u("li",te,[e("a",{onClick:o[0]||(o[0]=y(p=>v("ar"),["prevent"]))},"العربية")])):(m(),u("li",se,[e("a",{onClick:o[1]||(o[1]=y(p=>v("en"),["prevent"]))},"English")]))])]),e("a",oe,[t(C)])]),e("div",ae,[e("ul",ne,[e("li",null,[t(n,{to:"/dashboard",class:w([("useRoute"in s?s.useRoute:l($))().name=="index-dashboard"&&"active"])},{default:a(()=>[h(f(s.$t("dashboard")),1)]),_:1},8,["class"])]),e("li",null,[t(n,{to:"/profile"},{default:a(()=>[h(f(s.$t("profile")),1)]),_:1})]),e("li",null,[t(n,{to:"/account"},{default:a(()=>[h("Account")]),_:1})])])]),e("div",le,[e("div",ie,[e("div",re,[e("label",ce,[E(e("input",{type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=p=>U(g)?g.value=p:null)},null,512),[[H,l(g)]]),de,me])]),l(d)!="ar"?(m(),u("button",{key:0,onClick:o[3]||(o[3]=p=>v("ar")),class:"btn btn-ghost normal-case btn-sm lg:block hidden"}," العربية ")):(m(),u("button",{key:1,onClick:o[4]||(o[4]=p=>v("en")),class:"btn btn-ghost normal-case btn-sm lg:block hidden"},"English")),e("div",ue,[e("div",_e,[e("div",pe,[e("img",{src:l(i).image},null,8,he)])])])])])]),e("div",ve,[Z(s.$slots,"default")])]),e("div",fe,[t(L)]),t(N,{show:l(c),onClose:o[5]||(o[5]=p=>c.value=!1),user:l(i)},null,8,["show","user"])])}}};export{Be as default};
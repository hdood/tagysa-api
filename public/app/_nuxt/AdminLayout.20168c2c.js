import{_ as B}from"./nuxt-link.11fdcf30.js";import{_ as V}from"./Logo.937e8524.js";import{_ as z}from"./BottomNavigation.109e04de.js";import{a as T}from"./ShareModal.42b104df.js";import{_ as N}from"./ConfirmModal.vue.e8aac48c.js";import{x as I,J as k,l as x,a0 as E,e as H,m as U,o as r,f as d,i as s,z as n,t as u,L as m,u as t,T as y,O as D,a8 as j,P as q,r as F,K as J,$ as A,C as h,A as p,y as i}from"./entry.91eada8e.js";import{u as K}from"./auth.2ab643e9.js";import"./Icon.4fed1372.js";import"./config.fb914ae5.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Button.vue.d78353b3.js";import"./transition.3f8552f5.js";import"./micro-task.fdb478dd.js";const O={class:"flex h-screen fixed w-screen dark:bg-slate-800 pb-20 lg:pb-0"},P={class:"main flex-grow h-full flex flex-col items-center overflow-y-scroll overflow-x-hidden mb-32 lg:mb-0"},G={class:"navbar container max-w-7xl mt-3 shadow-lg bg-base-200"},Q={class:"navbar-start"},W={class:"dropdown"},X=s("label",{tabindex:"0",class:"btn btn-ghost lg:hidden"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1),Y={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},ss={key:0},es={key:1},os={class:"btn btn-ghost normal-case text-xl"},ts={class:"navbar-center hidden lg:flex"},as={class:"menu menu-horizontal gap-2 px-1"},ns={class:"navbar-end"},ls={class:"navbar-end flex items-center gap-4"},is={class:"dropdown dropdown-hover"},rs={class:"swap swap-rotate mt-1"},ds=s("svg",{class:"swap-off fill-current w-7 h-7",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})],-1),cs=s("svg",{class:"swap-on fill-current w-7 h-7",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})],-1),us={class:"flex items-center space-x-3"},ms={class:"dropdown"},hs={class:"m-1 btn btn-ghost"},ps={class:"avatar"},vs={class:"mask mask-squircle w-12 h-12"},_s=["src"],ws=s("a",null,"Logout",-1),fs=[ws],gs={class:"w-full min-h-fit px-2 p-1 mt-10"},bs={class:"lg:hidden md:fixed fixed bottom-3 w-full z-50"},Ts={__name:"AdminLayout",setup(ks){const{user:w}=I(k()),{getUser:$,refreshFrame:R}=k(),C=K(),f=x(!1);async function g(){await C.logout(),J().push("/login")}const b=x(!1),{locale:v}=E();function c(e){v.value=e,localStorage.setItem("vkey-locale",e)}const _=H({get:()=>A.value=="dark",set:e=>{const l=localStorage.getItem("tagysa-theme")=="winter"?"halloween":"winter";localStorage.setItem("tagysa-theme",l),A.value=l,R()}});return U(()=>$()),(e,o)=>{const l=B,M=V,Z=z,S=T,L=N;return r(),d("div",O,[s("div",P,[s("div",G,[s("div",Q,[s("div",W,[X,s("ul",Y,[s("li",null,[n(l,{to:"/dashboard",class:m([("useRoute"in e?e.useRoute:t(i))().name=="index-dashboard"&&"active"])},{default:u(()=>[h(p(e.$t("dashboard")),1)]),_:1},8,["class"])]),s("li",null,[n(l,{to:"/account",class:m([(("useRoute"in e?e.useRoute:t(i))().name=="index-account"||("useRoute"in e?e.useRoute:t(i))().name=="index-account-cards")&&"active"])},{default:u(()=>[h(p(e.$t("account")),1)]),_:1},8,["class"])]),t(v)!="ar"?(r(),d("li",ss,[s("a",{onClick:o[0]||(o[0]=y(a=>c("ar"),["prevent"]))},"العربية")])):(r(),d("li",es,[s("a",{onClick:o[1]||(o[1]=y(a=>c("en"),["prevent"]))},"English")]))])]),s("a",os,[n(M,{class:"relative bottom-5"})])]),s("div",ts,[s("ul",as,[s("li",null,[n(l,{to:"/dashboard",class:m([("useRoute"in e?e.useRoute:t(i))().name=="index-dashboard"&&"active"])},{default:u(()=>[h(p(e.$t("dashboard")),1)]),_:1},8,["class"])]),s("li",null,[n(l,{to:"/account",class:m([(("useRoute"in e?e.useRoute:t(i))().name=="index-account"||("useRoute"in e?e.useRoute:t(i))().name=="index-account-cards")&&"active"])},{default:u(()=>[h(p(e.$t("account")),1)]),_:1},8,["class"])])])]),s("div",ns,[s("div",ls,[s("div",is,[s("label",rs,[D(s("input",{type:"checkbox","onUpdate:modelValue":o[2]||(o[2]=a=>q(_)?_.value=a:null)},null,512),[[j,t(_)]]),ds,cs])]),t(v)!="ar"?(r(),d("button",{key:0,onClick:o[3]||(o[3]=a=>c("ar")),class:"btn btn-ghost normal-case btn-sm lg:block hidden"}," العربية ")):(r(),d("button",{key:1,onClick:o[4]||(o[4]=a=>c("en")),class:"btn btn-ghost normal-case btn-sm lg:block hidden"},"English")),s("div",us,[s("details",ms,[s("summary",hs,[s("div",ps,[s("div",vs,[s("img",{src:t(w).image},null,8,_s)])])]),s("ul",{class:"p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-base-300"},[s("li",{onClick:g},fs)])])])])])]),s("div",gs,[F(e.$slots,"default")])]),s("div",bs,[n(Z)]),n(S,{show:t(b),onClose:o[5]||(o[5]=a=>b.value=!1),user:t(w)},null,8,["show","user"]),n(L,{show:t(f),title:"Logout",body:"Are you sure you want to logout",type:"danger",onClose:o[6]||(o[6]=a=>f.value=!1),onConfirm:o[7]||(o[7]=a=>g()),positive:"Logout"},null,8,["show"])])}}};export{Ts as default};

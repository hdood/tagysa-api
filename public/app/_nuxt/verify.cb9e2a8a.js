import{J as f,x as p,l as h,m as v,o as t,f as s,z as o,t as n,i as e,u as r,C as x,A as S,F as g,H as k}from"./entry.91eada8e.js";import{_ as y}from"./Logo.937e8524.js";import{_ as V}from"./Button.vue.d78353b3.js";import{u as b}from"./social.f642f38e.js";import{u as w}from"./auth.2ab643e9.js";import{u as B}from"./links.e52850d8.js";import"./Icon.4fed1372.js";import"./config.fb914ae5.js";import"./_plugin-vue_export-helper.c27b6911.js";const L=e("title",null,"Login",-1),H={class:"flex flex-col items-center h-screen p-3 bg-base-200 gap-14"},N={key:0,class:"flex flex-col gap-2 items-center text-center"},A=e("div",null,"Email verified",-1),C={href:"/dashboard"},D={key:1},I={__name:"verify",setup(E){const i=f();b();const c=w();B();const{sendVerificationLink:l}=c,{user:_}=p(i),a=h({});return v(async()=>{a.value=await l()}),(F,T)=>{const m=k,u=y,d=V;return t(),s(g,null,[o(m,null,{default:n(()=>[L]),_:1}),e("div",H,[e("div",null,[o(u,{class:"w-20 h-20"})]),e("div",null,[r(a).status=="email verified"?(t(),s("div",N,[A,e("a",C,[o(d,{type:"primary"},{default:n(()=>[x("Dashboard")]),_:1})])])):(t(),s("div",D,"Verification link was sent to "+S(r(_).email),1))])])],64)}}};export{I as default};
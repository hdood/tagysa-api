import{y as p,o as f,f as d,z as t,t as s,i as e,C as h,F as y,K as g,H as v}from"./entry.e6c86e49.js";import{_ as x}from"./Logo.38fb1d48.js";import{_ as b}from"./Button.vue.05625655.js";import{u as k}from"./auth.ecb47842.js";import"./Icon.142946e4.js";import"./config.dcd7f8ed.js";import"./_plugin-vue_export-helper.c27b6911.js";const w=e("title",null,"Login",-1),B={class:"flex w-full flex-col items-center gap-8 pt-16 h-screen p-3 bg-base-200"},C=e("div",null,"Click the button to verify your email",-1),$={__name:"verify-email",setup(V){const a=k(),{verifyEmail:n}=a,o=p(),r=o.query.id,i=o.query.signature;async function c(){await n(r,i)&&g().push("/dashboard")}return(l,E)=>{const u=v,_=x,m=b;return f(),d(y,null,[t(u,null,{default:s(()=>[w]),_:1}),e("div",B,[e("div",null,[t(_,{class:"w-20 h-20"})]),C,t(m,{type:"primary",onClick:c},{default:s(()=>[h(" Verify Email ")]),_:1})])],64)}}};export{$ as default};

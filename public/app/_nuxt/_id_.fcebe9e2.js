import{G as w,x as g,m as b,y as u,o as a,f as o,z as l,t as y,i as e,A as n,u as s,F as _,B as v,C as c,D as m,H as k}from"./entry.91eada8e.js";import j from"./Icon.4fed1372.js";import{u as h}from"./profile.abb2e7d5.js";import"./config.fb914ae5.js";import"./_plugin-vue_export-helper.c27b6911.js";const q=e("meta",{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},null,-1),C=e("meta",{"http-equiv":"Pragma",content:"no-cache"},null,-1),V=e("meta",{"http-equiv":"Expires",content:"0"},null,-1),B={key:0,class:"bg-base-200 min-h-screen min-w-[100vw] flex flex-col items-center pt-10 px-2"},N={class:"flex flex-col justify-center min-w-[20rem] max-w-xs lg:max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-base-100"},A={class:"avatar"},E={class:"mask mask-squircle w-32 h-32 mx-auto"},H=["src"],P={class:"space-y-4 text-center divide-y divide-gray-700"},z={class:"my-2 space-y-1"},D={class:"text-xl font-semibold sm:text-2xl"},F={class:"px-5 text-xs sm:text-base dark:text-gray-400"},R={class:"flex justify-center items-center pt-2 gap-4 flex-wrap"},S=["href","aria-label"],T={class:"flex flex-col justify-center min-w-[20rem] mt-3 max-w-xs lg:max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-base-100 text-center"},$=e("h1",{class:"w-full text-xl font-medium flex items-center justify-center gap-2"}," About me ",-1),G=["href"],L={class:"w-full text-xl font-medium flex items-center justify-center gap-2"},M=["href"],W={class:"w-full text-xl font-medium flex items-center justify-center gap-2"},I=["href"],J={class:"w-full text-xl font-medium flex items-center justify-center gap-2"},K={class:"break-words"},O=["href"],Q={class:"w-full text-xl font-medium flex items-center justify-center gap-2"},U={class:"break-words"},X={key:1},oe={__name:"[id]",setup(Y){const f=w().provide.axios,{user:t}=g(h());return b(async()=>{const x=u().query.preview==="true";try{const i=await f(`/api/${u().params.id}`);if(t.value=i.data.data,x)return;await h().storeVisitor(t.value.id)}catch(i){console.log(i.response)}}),(x,i)=>{const p=k,r=j;return a(),o(_,null,[l(p,null,{default:y(()=>[e("title",null,n(s(t).full_name),1),q,C,V]),_:1}),s(t).id?(a(),o("div",B,[e("div",N,[e("div",A,[e("div",E,[e("img",{src:s(t).image},null,8,H)])]),e("div",P,[e("div",z,[e("h2",D,n(s(t).name),1),e("p",F,n(s(t).designation),1)]),e("div",R,[(a(!0),o(_,null,v(s(t).links,d=>(a(),o("a",{rel:"noopener noreferrer",target:"_blank",href:d.url,"aria-label":d.name,class:"p-2 rounded-md"},[l(r,{name:d.icon,size:"30"},null,8,["name"])],8,S))),256))])])]),e("div",T,[$,e("h2",null,n(s(t).bio),1)]),s(t).phone?(a(),o("a",{key:0,href:"tel:"+s(t).phone,class:"flex flex-col justify-center min-w-[20rem] mt-3 max-w-xs lg:max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-base-100 text-center"},[e("h1",L,[l(r,{name:"ic:baseline-phone"}),c(" Phone ")]),e("h2",null," +"+n(s(t).country_code)+" "+n(s(t).phone),1)],8,G)):m("",!0),s(t).contact_email?(a(),o("a",{key:1,href:"mailto:"+s(t).email,class:"flex flex-col justify-center min-w-[20rem] mt-3 max-w-xs lg:max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-base-100 text-center"},[e("h1",W,[l(r,{name:"ic:baseline-email"}),c(" Email ")]),e("h2",null,n(s(t).contact_email),1)],8,M)):m("",!0),s(t).address?(a(),o("a",{key:2,target:"_blank",href:"https://www.google.com/maps/search/?q="+s(t).address,class:"flex flex-col justify-center min-w-[20rem] mt-3 max-w-xs lg:max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-base-100 text-center"},[e("h1",J,[l(r,{name:"mdi:location"}),c(" Address ")]),e("h2",K,n(s(t).address),1)],8,I)):m("",!0),s(t).website?(a(),o("a",{key:3,target:"_blank",href:s(t).website,class:"flex flex-col justify-center min-w-[20rem] mt-3 max-w-xs lg:max-w-sm p-6 shadow-md rounded-xl sm:px-12 bg-base-100 text-center"},[e("h1",Q,[l(r,{name:"mdi:earth"}),c(" Website ")]),e("h2",U,n(s(t).website),1)],8,O)):m("",!0)])):(a(),o("div",X," user not found "))],64)}}};export{oe as default};
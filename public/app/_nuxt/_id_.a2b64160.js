import{G as b,x as v,y as u,m as k,o,f as n,z as c,t as w,i as s,A as r,u as t,D as m,F as _,B as p,H as C,C as q}from"./entry.357d2ba9.js";import A from"./Icon.89e3ed5b.js";import{u as V}from"./useVcard.4408a48e.js";import{u as h}from"./profile.5aa5a597.js";import"./config.5fdcdd03.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";const B=s("meta",{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},null,-1),E=s("meta",{"http-equiv":"Pragma",content:"no-cache"},null,-1),N=s("meta",{"http-equiv":"Expires",content:"0"},null,-1),P={key:0,class:"bg-base-200 min-h-screen max-w-sm mx-auto flex flex-col"},S=["src"],j={class:"px-3 border-b pb-2"},z={class:"text-2xl font-medium mt-2"},D={key:0,class:"flex items-center gap-2 mt-2"},H={key:1,class:"flex items-center gap-2 mt-2"},T={key:0,class:"my-4 px-4"},$=s("div",{class:"text-lg font-medium"},"About me",-1),F={class:""},R={class:"w-full flex justify-center mt-4"},G={class:"w-full flex justify-center mt-4"},I=["href"],L={key:1,class:"my-4 px-4"},M=s("div",{class:"text-lg font-medium"},"Social Icons",-1),O={key:0,class:"flex justify-center items-center pt-2 gap-4 max-w-[15rem] mx-auto flex-wrap my-2"},Y=["href","aria-label"],J={key:1,class:"text-center my-2"},K={key:1},oe={__name:"[id]",setup(Q){const f=b().provide.axios,{user:e}=v(h()),g=V(),l=u().query.preview==="true";return k(async()=>{if(u().query.landing==="true"){e.value={id:1,name:"Tagy",designation:"Digital businness card",bio:"One Card, Endless Possibilities: Explore Your Profile!",image:"https://tagysa.com/light_logo.png",address:"Saudi Arabia",links:[{name:"instagram",icon:"skill-icons:instagram",url:"https://instagram.com/"},{name:"youtube",icon:"logos:youtube-icon",url:"https://youtube.com/"}]};return}try{const i=await f(`/api/${u().params.id}`);if(e.value=i.data.data,l)return;await h().storeVisitor(e.value.id)}catch(i){console.log(i.response)}}),(x,i)=>{const y=C,d=A;return o(),n(_,null,[c(y,null,{default:w(()=>[s("title",null,r(t(e).name),1),B,E,N]),_:1}),t(e).id?(o(),n("div",P,[s("img",{src:t(e).image,class:"aspect-square"},null,8,S),s("div",j,[s("div",z,r(t(e).name),1),t(e).designation||l?(o(),n("div",D,[c(d,{name:"ep:info-filled"}),s("div",null,r(t(e).designation??"Add your title"),1)])):m("",!0),t(e).address||l?(o(),n("div",H,[c(d,{name:"mdi:building"}),s("div",null,r(t(e).address??"Add you location"),1)])):m("",!0)]),t(e).bio||l?(o(),n("div",T,[$,s("p",F,r(t(e).bio??"add about me section"),1)])):m("",!0),s("div",R,[s("button",{class:"btn btn-primary basis-11/12",onClick:i[0]||(i[0]=a=>t(g)(t(e).name,t(e).email,"+"+t(e).country_code+t(e).phone,t(e).address,t(e).website,t(e).designation))}," Contact Card ")]),(o(!0),n(_,null,p(t(e).urls,a=>(o(),n("div",G,[s("a",{href:a.link,target:"_blank",class:"btn btn-primary basis-11/12"},[c(d,{name:"tabler:link",size:"20"}),q(" "+r(a.name),1)],8,I)]))),256)),t(e).links.length!=0||l?(o(),n("div",L,[M,t(e).links.length!=0?(o(),n("div",O,[(o(!0),n(_,null,p(t(e).links,a=>(o(),n("a",{rel:"noopener noreferrer",target:"_blank",href:a.url,"aria-label":a.name,class:"p-2 rounded-md"},[c(d,{name:a.icon,size:"30"},null,8,["name"])],8,Y))),256))])):(o(),n("div",J," Add social icons "))])):m("",!0)])):(o(),n("div",K," user not found "))],64)}}};export{oe as default};

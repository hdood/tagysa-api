import{G as x,x as b,m as v,y as m,o,f as n,z as l,t as y,i as t,A as i,u as s,F as u,B as p,H as k,C as w}from"./entry.c6d04ea2.js";import C from"./Icon.0d3dd3ef.js";import{u as A}from"./useVcard.4408a48e.js";import{u as h}from"./profile.5261d71f.js";import"./config.f4f85471.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.042e6b4d.js";const q=t("meta",{"http-equiv":"Cache-Control",content:"no-cache, no-store, must-revalidate"},null,-1),V=t("meta",{"http-equiv":"Pragma",content:"no-cache"},null,-1),B=t("meta",{"http-equiv":"Expires",content:"0"},null,-1),E={key:0,class:"bg-base-200 min-h-screen min-w-[100vw] flex flex-col"},P=["src"],S={class:"px-3 border-b pb-2"},j={class:"text-2xl font-medium mt-2"},z={class:"flex items-center gap-2 mt-2"},H={class:"flex items-center gap-2 mt-2"},N={class:"my-4 px-4"},T=t("div",{class:"text-lg font-medium"},"About me",-1),$={class:""},D={class:"w-full flex justify-center mt-4"},F={class:"w-full flex justify-center mt-4"},R=["href"],G={class:"my-4 px-4"},I=t("div",{class:"text-lg font-medium"},"Social Icons",-1),L={key:0,class:"flex justify-center items-center pt-2 gap-4 max-w-[15rem] mx-auto flex-wrap my-2"},M=["href","aria-label"],O={key:1,class:"text-center my-2"},Y={key:1},te={__name:"[id]",setup(J){const f=x().provide.axios,{user:e}=b(h()),g=A();return v(async()=>{const _=m().query.preview==="true";if(m().query.landing==="true"){e.value={id:1,name:"Tagy",designation:"Digital businness card",bio:"One Card, Endless Possibilities: Explore Your Profile!",image:"https://tagysa.com/light_logo.png",address:"Saudi Arabia",links:[{name:"instagram",icon:"skill-icons:instagram",url:"https://instagram.com/"},{name:"youtube",icon:"logos:youtube-icon",url:"https://youtube.com/"}]};return}try{const r=await f(`/api/${m().params.id}`);if(e.value=r.data.data,_)return;await h().storeVisitor(e.value.id)}catch(r){console.log(r.response)}}),(_,d)=>{const r=k,c=C;return o(),n(u,null,[l(r,null,{default:y(()=>[t("title",null,i(s(e).name),1),q,V,B]),_:1}),s(e).id?(o(),n("div",E,[t("img",{src:s(e).image,class:"max-h-96"},null,8,P),t("div",S,[t("div",j,i(s(e).name),1),t("div",z,[l(c,{name:"ep:info-filled"}),t("div",null,i(s(e).designation??"Add your title"),1)]),t("div",H,[l(c,{name:"mdi:building"}),t("div",null,i(s(e).address??"Add you location"),1)])]),t("div",N,[T,t("p",$,i(s(e).bio??"add about me section"),1)]),t("div",D,[t("button",{class:"btn btn-primary basis-11/12",onClick:d[0]||(d[0]=a=>s(g)(s(e).name,s(e).email,"+"+s(e).country_code+s(e).phone,s(e).address,s(e).website,s(e).designation))}," Contact Card ")]),(o(!0),n(u,null,p(s(e).urls,a=>(o(),n("div",F,[t("a",{href:a.link,target:"_blank",class:"btn btn-primary basis-11/12"},[l(c,{name:"tabler:link",size:"20"}),w(" "+i(a.name),1)],8,R)]))),256)),t("div",G,[I,s(e).links.length!=0?(o(),n("div",L,[(o(!0),n(u,null,p(s(e).links,a=>(o(),n("a",{rel:"noopener noreferrer",target:"_blank",href:a.url,"aria-label":a.name,class:"p-2 rounded-md"},[l(c,{name:a.icon,size:"30"},null,8,["name"])],8,M))),256))])):(o(),n("div",O," Add social icons "))])])):(o(),n("div",Y," user not found "))],64)}}};export{te as default};

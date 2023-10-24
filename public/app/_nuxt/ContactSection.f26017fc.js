import{_ as N}from"./CountryCodePicker.422eb76c.js";import{_ as T}from"./TextInput.af7e7ae8.js";import{_ as B}from"./Button.vue.548fc0bf.js";import{D as $,s as j,J as k,a0 as A,A as E,B as u,E as M,x as D,o as b,f as w,i as a,Q as P,p as m,u as e,L as v,w as I,M as R,j as W,q,m as F,y as J}from"./entry.31e86c9c.js";import{V as L}from"./ValidateUrl.c73b707c.js";import"./Icon.1afaac6d.js";import"./config.a7b2ca2f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./combobox.8b26a5cb.js";import"./micro-task.545494b7.js";import"./use-tracked-pointer.da07db6b.js";import"./transition.d78ec031.js";import"./use-resolve-button-type.137067df.js";const Q={id:"ContactsSection"},z={class:"rounded-3xl w-full bg-base-200 p-3"},G=["onSubmit"],H=a("label",{class:"label"},[a("span",{class:"label-text"},"Phone")],-1),K={class:"flex lg:flex-nowrap flex-wrap items-center w-full gap-2"},O={class:"join"},X={class:""},Y={key:0,class:"text-error"},Z={class:"w-full flex gap-3"},ee={class:"flex gap-2 items-end"},te={class:"w-full flex gap-3"},_e={__name:"ContactSection",setup(oe){const f=$(),{user:r}=j(f),{successNotification:y}=k(),g=A(),S=E(g).provide.axios,l=u(""),c=u(""),s=u(""),d=u(""),t=u({}),p=u(r.value.country_code?r.value.country_code:966),_=u(!1);function V(){l.value=r.value.phone,c.value=r.value.address,s.value=r.value.website,p.value=r.value.country_code,d.value=r.value.contact_email}M(l,i=>{var o;((o=i==null?void 0:i.toString())==null?void 0:o.length)>10&&(l.value=i.toString().slice(0,10))});const C=async()=>{var i,o;if(t.value={},((i=l==null?void 0:l.value)==null?void 0:i.toString().length)<4){t.value={phone:["phone number must be 4 digits or more"]};return}if(d.value==""){t.value={email:["email value cannot be empty"]};return}if(!L(s.value)&&s.value){t.value={website:["website field must be a valid url"]};return}!((o=s==null?void 0:s.value)!=null&&o.includes("https"))&&s.value&&(s.value="https://"+s.value);try{_.value=!0,await S.patch(`/api/users/contact/${r.value.id}`,{phone:l.value,address:c.value,website:s.value,country_code:p.value?p.value:91,contact_email:d.value}),await f.getUser(),f.refreshFrame(),y("Contact info updated successfully")}catch(h){t.value=h.response.data.errors}_.value=!1};return D(()=>{V()}),(i,o)=>{const h=N,x=T,U=B;return b(),w("div",Q,[a("div",z,[a("form",{onSubmit:P(C,["prevent"])},[H,a("div",K,[a("div",O,[m(h,{modelValue:e(p),"onUpdate:modelValue":o[0]||(o[0]=n=>v(p)?p.value=n:null)},null,8,["modelValue"]),a("div",null,[a("div",X,[I(a("input",{id:"placeholder",placeholder:"Phone",maxlength:"10",class:"input input-bordered w-full max-w-xs input-primary join-item",type:"number","onUpdate:modelValue":o[1]||(o[1]=n=>v(l)?l.value=n:null),autocomplete:"off"},null,512),[[R,e(l)]])])])])]),e(t).phone?(b(),w("div",Y,W(e(t)&&e(t).phone?e(t).phone[0]:""),1)):q("",!0),a("div",Z,[m(x,{placeholder:"Email",input:e(d),"onUpdate:input":o[2]||(o[2]=n=>v(d)?d.value=n:null),class:"join-item",label:"Email",inputType:"text",rounded:!0,error:e(t)&&e(t).email?e(t).email[0]:""},null,8,["input","error"])]),a("div",ee,[m(x,{placeholder:"Address",input:e(c),"onUpdate:input":o[3]||(o[3]=n=>v(c)?c.value=n:null),rounded:!0,label:"Address",inputType:"text",error:e(t)&&e(t).address?e(t).address[0]:""},null,8,["input","error"])]),a("div",te,[m(x,{placeholder:"Website",input:e(s),"onUpdate:input":o[4]||(o[4]=n=>v(s)?s.value=n:null),inputType:"text",label:"Website",rounded:!0,error:e(t)&&e(t).website?e(t).website[0]:""},null,8,["input","error"])]),m(U,{type:"primary",class:"min-w-[10rem] h-10 mt-10",loading:e(_)},{default:F(()=>[J(" Save ")]),_:1},8,["loading"])],40,G)])])}}};export{_e as default};

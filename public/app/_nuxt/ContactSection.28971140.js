import{_ as P}from"./CountryCodePicker.2ade2ee7.js";import{_ as $}from"./TextInput.c776514d.js";import{_ as k}from"./Button.vue.b7b738c2.js";import{J as z,x as A,N as B,a2 as j,G as D,l as u,w as E,m as M,y as R,o as b,f as y,i as s,T as I,z as m,u as e,P as v,O as W,Q as F,A as G,D as J,t as O,C as Q}from"./entry.357d2ba9.js";import{u as g}from"./profile.5aa5a597.js";import"./Icon.89e3ed5b.js";import"./config.5fdcdd03.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./combobox.ebfe7eba.js";import"./micro-task.22f9df30.js";import"./transition.672185f0.js";import"./use-resolve-button-type.08964b80.js";function q(w){var f=/^(?:(?:https?):\/\/)?(?:www\.)?([a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,})(?:\/[^\s]*)?$/i;return f.test(w)}const H={id:"ContactsSection"},K={class:"rounded-3xl w-full bg-base-200 p-3"},L=["onSubmit"],X=s("label",{class:"label"},[s("span",{class:"label-text"},"Phone")],-1),Y={class:"flex lg:flex-nowrap flex-wrap items-center w-full gap-2"},Z={class:"join"},ee={class:""},te={key:0,class:"text-error"},oe={class:"w-full flex gap-3"},ae={class:"flex gap-2 items-end"},se={class:"w-full flex gap-3"},he={__name:"ContactSection",setup(w){const f=z(),{activeProfile:r}=A(g()),{successNotification:S}=B(),C=j(),V=D(C).provide.axios,l=u(""),c=u(""),a=u(""),d=u(""),t=u({}),p=u(r.value.country_code?r.value.country_code:966),_=u(!1);function N(){l.value=r.value.phone,c.value=r.value.address,a.value=r.value.website,p.value=r.value.country_code,d.value=r.value.email}E(l,i=>{var o;((o=i==null?void 0:i.toString())==null?void 0:o.length)>10&&(l.value=i.toString().slice(0,10))});const T=async()=>{var i,o;if(t.value={},((i=l==null?void 0:l.value)==null?void 0:i.toString().length)<4){t.value={phone:["phone number must be 4 digits or more"]};return}if(d.value==""){t.value={email:["email value cannot be empty"]};return}if(!q(a.value)&&a.value){t.value={website:["website field must be a valid url"]};return}!((o=a==null?void 0:a.value)!=null&&o.includes("https"))&&a.value&&(a.value="https://"+a.value);try{_.value=!0,await V.patch(`/api/profiles/contact/${r.value.id}`,{phone:l.value,address:c.value,website:a.value,country_code:p.value?p.value:91,email:d.value}),await f.getUser(),f.refreshFrame(),S("Contact info updated successfully")}catch(h){t.value=h.response.data.errors}_.value=!1};return M(()=>{g().fetchProfile(R().params.id),N()}),(i,o)=>{const h=P,x=$,U=k;return b(),y("div",H,[s("div",K,[s("form",{onSubmit:I(T,["prevent"])},[X,s("div",Y,[s("div",Z,[m(h,{modelValue:e(p),"onUpdate:modelValue":o[0]||(o[0]=n=>v(p)?p.value=n:null)},null,8,["modelValue"]),s("div",null,[s("div",ee,[W(s("input",{id:"placeholder",placeholder:"Phone",maxlength:"10",class:"input input-bordered w-full max-w-xs input-primary join-item",type:"number","onUpdate:modelValue":o[1]||(o[1]=n=>v(l)?l.value=n:null),autocomplete:"off"},null,512),[[F,e(l)]])])])])]),e(t).phone?(b(),y("div",te,G(e(t)&&e(t).phone?e(t).phone[0]:""),1)):J("",!0),s("div",oe,[m(x,{placeholder:"Email",input:e(d),"onUpdate:input":o[2]||(o[2]=n=>v(d)?d.value=n:null),class:"join-item",label:"Email",inputType:"text",rounded:!0,error:e(t)&&e(t).email?e(t).email[0]:""},null,8,["input","error"])]),s("div",ae,[m(x,{placeholder:"Address",input:e(c),"onUpdate:input":o[3]||(o[3]=n=>v(c)?c.value=n:null),rounded:!0,label:"Address",inputType:"text",error:e(t)&&e(t).address?e(t).address[0]:""},null,8,["input","error"])]),s("div",se,[m(x,{placeholder:"Website",input:e(a),"onUpdate:input":o[4]||(o[4]=n=>v(a)?a.value=n:null),inputType:"text",label:"Website",rounded:!0,error:e(t)&&e(t).website?e(t).website[0]:""},null,8,["input","error"])]),m(U,{type:"primary",class:"min-w-[10rem] h-10 mt-10",loading:e(_)},{default:O(()=>[Q(" Save ")]),_:1},8,["loading"])],40,L)])])}}};export{he as default};

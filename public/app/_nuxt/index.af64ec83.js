import{_ as J}from"./TextInput.901ad00a.js";import{_ as Q}from"./CountryCodePicker.6dc37df2.js";import{_ as W}from"./Button.vue.ff2c8309.js";import{_ as X}from"./CropperModal.937b9cf7.js";import{K as Y,G as Z,x as ee,l as n,w as R,o as te,f as se,i as s,u as a,A as l,z as r,O as i,N as oe,P as ae,t as U,C as S,S as j,F as ne,I as le}from"./entry.65f15cac.js";import{u as re}from"./auth.58047aa3.js";import"./Icon.dab32138.js";import"./config.9f98906d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./combobox.6ed9aa9b.js";import"./hidden.ad80bf95.js";import"./platform.ec21aee4.js";import"./use-resolve-button-type.a315323a.js";import"./FileInput.dba5bede.js";import"./transition.b30d7ad9.js";import"./micro-task.89dcd6af.js";const ue={class:"w-full my-10"},ie={class:"flex flex-col items-center gap-4"},pe={class:"avatar"},de={class:"mask mask-squircle w-40"},me=["src"],ce=s("span",{class:"w-full text-sm my-2"}," Phone number ",-1),fe={class:"flex lg:flex-nowrap flex-wrap items-center w-full gap-2"},ve={class:"join"},we={class:""},ge=["error"],ye={class:"text-2xl font-medium text-base-content"},_e=["onSubmit"],be={class:"mt-4"},he={class:"text-2xl font-medium text-base-content"},$e=["onSubmit"],Fe={__name:"index",setup(Pe){const q=Y().provide.axios,g=Z(),{user:c}=ee(g),p=n(!1),u=n({}),h=n({}),f=n(c.value.name),$=n(!1),{changePassword:F,deleteAccount:L}=re(),y=n(""),d=n(""),v=n(""),_=n(""),m=n(c.value.phone),b=n(c.value.country_code),P=n(!1),x=n(!1);R(m,e=>{var t;((t=e==null?void 0:e.toString())==null?void 0:t.length)>10&&(m.value=e.toString().slice(0,10))});const z=async()=>{if(u.value={},!f.value){u.value.name="the name files is required";return}try{$.value=!0,await q.patch(`/api/users/${c.value.id}`,{name:f.value,phone:m.value,country_code:b.value}),await g.getUser()}catch(e){console.log(e)}$.value=!1},E=async()=>{try{await g.updateUserImage(h.value),await g.getUser(),setTimeout(()=>p.value=!1,300)}catch(e){p.value=!1,alert(e)}};R(()=>h.value,async()=>await E());async function G(){if(d.value.length<8){u.value={newPassword:["password length must be longer than 8 characters"]};return}if(d.value!=v.value){u.value={cPassword:["password confirmation is not the same  as the new password"]};return}P.value=!0,await F(y.value,d.value,v.value),P.value=!1}async function K(){x.value=!0,await L(_.value)&&le().push("/"),x.value=!1}return(e,t)=>{var T,k,V,I,B,N,A,D,M;const w=J,O=Q,C=W,H=X;return te(),se(ne,null,[s("div",null,[s("div",ue,[s("div",ie,[s("div",{class:"avatar",onClick:t[0]||(t[0]=o=>p.value=!0)},[s("div",pe,[s("div",de,[s("img",{src:a(c).image},null,8,me)])])]),s("div",null,[s("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=o=>p.value=!0)},l(e.$t("update")),1)])]),r(w,{input:a(f),"onUpdate:input":t[2]||(t[2]=o=>i(f)?f.value=o:null),label:e.$t("name"),inputType:"text",error:(T=a(u))==null?void 0:T.name,class:"max-w-md"},null,8,["input","label","error"]),ce,s("div",fe,[s("div",ve,[r(O,{modelValue:a(b),"onUpdate:modelValue":t[3]||(t[3]=o=>i(b)?b.value=o:null)},null,8,["modelValue"]),s("div",null,[s("div",we,[oe(s("input",{id:"placeholder",placeholder:"Phone",maxlength:"10",class:"input input-bordered w-full max-w-xs input-primary join-item",type:"number","onUpdate:modelValue":t[4]||(t[4]=o=>i(m)?m.value=o:null),autocomplete:"off"},null,512),[[ae,a(m)]])])])])]),s("span",{class:"w-full text-sm text-error my-2",error:(V=(k=a(u))==null?void 0:k.name)==null?void 0:V[0]},l((B=(I=a(u))==null?void 0:I.name)==null?void 0:B[0]),9,ge),r(C,{type:"primary",class:"mt-3",onClick:z,loading:a($)},{default:U(()=>[S(l(e.$t("save")),1)]),_:1},8,["loading"])]),r(H,{show:a(p),onData:t[5]||(t[5]=o=>h.value=o),onClose:t[6]||(t[6]=o=>p.value=!1)},null,8,["show"]),s("h2",ye,l(e.$t("update"))+" "+l(e.$t("password")),1),s("form",{onSubmit:j(G,["prevent"])},[r(w,{input:a(y),"onUpdate:input":t[7]||(t[7]=o=>i(y)?y.value=o:null),label:e.$t("currentPassword"),inputType:"password"},null,8,["input","label"]),r(w,{input:a(d),"onUpdate:input":t[8]||(t[8]=o=>i(d)?d.value=o:null),label:e.$t("newPassword"),inputType:"password",error:(A=(N=a(u))==null?void 0:N.newPassword)==null?void 0:A[0]},null,8,["input","label","error"]),r(w,{input:a(v),"onUpdate:input":t[9]||(t[9]=o=>i(v)?v.value=o:null),label:e.$t("newPasswordConfirmation"),error:(M=(D=a(u))==null?void 0:D.cPassword)==null?void 0:M[0],inputType:"password"},null,8,["input","label","error"]),r(C,{type:"primary",class:"mt-3",loading:a(P)},{default:U(()=>[S(l(e.$t("update"))+" "+l(e.$t("password")),1)]),_:1},8,["loading"])],40,_e)]),s("div",be,[s("h2",he,l(e.$t("delete"))+" "+l(e.$t("account")),1),s("form",{onSubmit:j(K,["prevent"])},[r(w,{input:a(_),"onUpdate:input":t[10]||(t[10]=o=>i(_)?_.value=o:null),inputType:"password",label:e.$t("password")},null,8,["input","label"]),r(C,{type:"danger",class:"mt-2",loading:a(x)},{default:U(()=>[S(l(e.$t("delete"))+" "+l(e.$t("account")),1)]),_:1},8,["loading"])],40,$e)])],64)}}};export{Fe as default};

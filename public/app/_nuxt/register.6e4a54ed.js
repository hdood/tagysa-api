import{l as a,K as k,x as O,m as q,e as z,s as G,o as C,f as F,z as l,t as g,i as t,u as e,A as I,D as J,T as K,P as f,C as L,F as Q,H as W}from"./entry.91eada8e.js";import{_ as X}from"./Logo.937e8524.js";import{_ as Y}from"./TextInput.607fee85.js";import{_ as Z}from"./Button.vue.d78353b3.js";import{i as ee}from"./googleProvider.da8280de.js";import{u as te}from"./social.f642f38e.js";import{u as oe}from"./auth.2ab643e9.js";import"./Icon.4fed1372.js";import"./config.fb914ae5.js";import"./_plugin-vue_export-helper.c27b6911.js";const re=t("title",null,"Register",-1),se={class:"flex flex-col items-center justify-center min-h-screen p-3 gap-10 bg-base-200"},le={class:"bg-base-100 flex rounded-xl shadow-md"},ne={class:"flex flex-col items-center justify-center w-full gap-6 py-3 px-7 lg:min-w-fit lg:w-[30rem]"},ae=t("div",{class:"space-y-3"},[t("div",{class:"text-2xl font-medium text-center text-primary"},"Register")],-1),ue={key:0,class:"text-error"},ie=t("div",{class:"w-full text-center"},"Or",-1),de=["onSubmit"],ce={class:"flex flex-col gap-2 items-center"},me={class:"text-sm"},Se={__name:"register",setup(pe){const w=te(),j=oe(),x=a(null),V=k(),{error:h}=O(w),d=a(""),c=a(""),m=a(""),u=a(""),i=a(""),o=a({}),n=a(!1);q(async()=>{(await ee()).useRenderButton({useOneTap:!0,element:x.value,onError:()=>console.error("Failed to render button"),onSuccess:async _=>(n.value=!0,await w.googleRegister(_)?k().push("/dashboard"):(n.value=!0,!0))})()});const D=z(()=>(o.value={},!(d.value==""||m.value==""||u.value==""||i.value==""||u.value!==i.value||c.value==""))),H=async()=>{if(o.value={},n.value=!0,d.value.trim().includes(" "))return o.value={name:["Name must only contain letters and underscores"]},n.value=!1,!1;if(c.value=="")return o.value={fullName:["Full name is required"]},n.value=!1,!1;if(u.value!==i.value)return o.value.confirmPassword=["password confirmation does not match the password"],n.value=!1,!1;try{await j.register(d.value.trim(),m.value,u.value,i.value,c.value.trim()),V.push("/verify")}catch(v){console.log(v),o.value=v.response.data.errors}n.value=!1};return(v,r)=>{var y,b,P,S,N,R,T,B,E,U;const _=W,$=X,p=Y,A=Z,M=G("RouterLink");return C(),F(Q,null,[l(_,null,{default:g(()=>[re]),_:1}),t("div",se,[t("div",null,[l($,{class:"w-20 h-20"})]),t("div",le,[t("div",ne,[ae,e(h)?(C(),F("div",ue,I(e(h)),1)):J("",!0),t("div",{id:"buttonEL",ref_key:"buttonEl",ref:x},null,512),ie,t("form",{onSubmit:K(H,["prevent"]),class:"flex flex-col gap-3 items-center"},[t("div",ce,[l(p,{input:e(d),"onUpdate:input":r[0]||(r[0]=s=>f(d)?d.value=s:null),label:"Username",placeholder:"jhon_doe",error:(b=(y=e(o))==null?void 0:y.name)==null?void 0:b[0]},null,8,["input","error"]),l(p,{input:e(c),"onUpdate:input":r[1]||(r[1]=s=>f(c)?c.value=s:null),label:"Full Name",placeholder:"Jhon Doe",error:(S=(P=e(o))==null?void 0:P.fullName)==null?void 0:S[0]},null,8,["input","error"]),l(p,{input:e(m),"onUpdate:input":r[2]||(r[2]=s=>f(m)?m.value=s:null),label:"Email",placeholder:"j.doe@email.com",inputType:"email",error:(R=(N=e(o))==null?void 0:N.email)==null?void 0:R[0]},null,8,["input","error"]),l(p,{input:e(u),"onUpdate:input":r[3]||(r[3]=s=>f(u)?u.value=s:null),placeholder:"Password",label:"Password",inputType:"password",error:(B=(T=e(o))==null?void 0:T.password)==null?void 0:B[0]},null,8,["input","error"]),l(p,{input:e(i),"onUpdate:input":r[4]||(r[4]=s=>f(i)?i.value=s:null),placeholder:"Confirm Password",label:"Password Confirmation",inputType:"password",error:(U=(E=e(o))==null?void 0:E.confirmPassword)==null?void 0:U[0]},null,8,["input","error"])]),l(A,{type:e(D)?"primary":"disabled",loading:e(n),class:"mt-3 w-full"},{default:g(()=>[L(" Sign Up ")]),_:1},8,["type","loading"])],40,de),t("div",me,[l(M,{to:"/login",class:"underline text-indigo-600"},{default:g(()=>[L("Login")]),_:1})])])])])],64)}}};export{Se as default};
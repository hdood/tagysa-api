import{B as a,E as k,s as O,x as A,e as G,P as I,o as L,f as j,p as l,m as g,i as t,u as e,j as J,q as Q,Q as z,L as f,y as C,F as K,H as W}from"./entry.5b04ea27.js";import{_ as X}from"./Logo.61bda8d1.js";import{_ as Y}from"./TextInput.fd78d888.js";import{_ as Z}from"./Button.vue.0ee6f82c.js";import{i as ee}from"./googleProvider.da8280de.js";import{u as te}from"./social.048b3682.js";import{u as oe}from"./auth.ea6f1a44.js";import"./Icon.2016312d.js";import"./config.89fb9aa0.js";import"./_plugin-vue_export-helper.c27b6911.js";const re=t("title",null,"Register",-1),se={class:"flex flex-col items-center justify-center min-h-screen p-3 gap-10 bg-base-200"},le={class:"bg-base-100 flex rounded-xl shadow-md"},ne={class:"flex flex-col items-center justify-center w-full gap-6 py-3 px-7 lg:min-w-fit lg:w-[30rem]"},ae=t("div",{class:"space-y-3"},[t("div",{class:"text-2xl font-medium text-center text-primary"},"Register")],-1),ue={key:0,class:"text-error"},ie=t("div",{class:"w-full text-center"},"Or",-1),de=["onSubmit"],ce={class:"flex flex-col gap-2 items-center"},pe={class:"text-sm"},Se={__name:"register",setup(me){const w=te(),F=oe(),x=a(null),V=k(),{error:h}=O(w),d=a(""),c=a(""),p=a(""),u=a(""),i=a(""),o=a({}),n=a(!1);A(async()=>{(await ee()).useRenderButton({useOneTap:!0,element:x.value,onError:()=>console.error("Failed to render button"),onSuccess:async _=>(n.value=!0,await w.googleRegister(_)?k().push("/dashboard"):(n.value=!0,!0))})()});const H=G(()=>(o.value={},!(d.value==""||p.value==""||u.value==""||i.value==""||u.value!==i.value||c.value==""))),$=async()=>{if(o.value={},n.value=!0,d.value.trim().includes(" "))return o.value={name:["Name must only contain letters and underscores"]},n.value=!1,!1;if(c.value=="")return o.value={fullName:["Full name is required"]},n.value=!1,!1;if(u.value!==i.value)return o.value.confirmPassword=["password confirmation does not match the password"],n.value=!1,!1;try{await F.register(d.value.trim(),p.value,u.value,i.value,c.value.trim()),V.push("/verify")}catch(v){console.log(v),o.value=v.response.data.errors}n.value=!1};return(v,r)=>{var y,b,P,S,N,R,B,E,T,U;const _=W,q=X,m=Y,D=Z,M=I("RouterLink");return L(),j(K,null,[l(_,null,{default:g(()=>[re]),_:1}),t("div",se,[t("div",null,[l(q,{class:"w-20 h-20"})]),t("div",le,[t("div",ne,[ae,e(h)?(L(),j("div",ue,J(e(h)),1)):Q("",!0),t("div",{id:"buttonEL",ref_key:"buttonEl",ref:x},null,512),ie,t("form",{onSubmit:z($,["prevent"]),class:"flex flex-col gap-3 items-center"},[t("div",ce,[l(m,{input:e(d),"onUpdate:input":r[0]||(r[0]=s=>f(d)?d.value=s:null),label:"Username",placeholder:"jhon_doe",error:(b=(y=e(o))==null?void 0:y.name)==null?void 0:b[0]},null,8,["input","error"]),l(m,{input:e(c),"onUpdate:input":r[1]||(r[1]=s=>f(c)?c.value=s:null),label:"Full Name",placeholder:"Jhon Doe",error:(S=(P=e(o))==null?void 0:P.fullName)==null?void 0:S[0]},null,8,["input","error"]),l(m,{input:e(p),"onUpdate:input":r[2]||(r[2]=s=>f(p)?p.value=s:null),label:"Email",placeholder:"j.doe@email.com",inputType:"email",error:(R=(N=e(o))==null?void 0:N.email)==null?void 0:R[0]},null,8,["input","error"]),l(m,{input:e(u),"onUpdate:input":r[3]||(r[3]=s=>f(u)?u.value=s:null),placeholder:"Password",label:"Password",inputType:"password",error:(E=(B=e(o))==null?void 0:B.password)==null?void 0:E[0]},null,8,["input","error"]),l(m,{input:e(i),"onUpdate:input":r[4]||(r[4]=s=>f(i)?i.value=s:null),placeholder:"Confirm Password",label:"Password Confirmation",inputType:"password",error:(U=(T=e(o))==null?void 0:T.confirmPassword)==null?void 0:U[0]},null,8,["input","error"])]),l(D,{type:e(H)?"primary":"disabled",loading:e(n),class:"mt-3 w-full"},{default:g(()=>[C(" Sign Up ")]),_:1},8,["type","loading"])],40,de),t("div",pe,[l(M,{to:"/login",class:"underline text-indigo-600"},{default:g(()=>[C("Login")]),_:1})])])])])],64)}}};export{Se as default};

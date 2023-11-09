import{J as F,l,K as m,m as N,e as U,s as V,o as H,f as M,z as o,t as c,i as e,T as O,u as s,P as b,O as $,Q as j,A,C as _,F as D,H as z}from"./entry.357d2ba9.js";import{_ as G}from"./Logo.6145a656.js";import{_ as I}from"./TextInput.c776514d.js";import{_ as J}from"./nuxt-link.f58e1882.js";import{_ as K}from"./Button.vue.b7b738c2.js";import{i as Q}from"./googleProvider.da8280de.js";import{u as Y}from"./social.43d81f86.js";import{u as q}from"./auth.96ebe22d.js";import{u as W}from"./links.da6a0e7a.js";import"./Icon.89e3ed5b.js";import"./config.5fdcdd03.js";import"./_plugin-vue_export-helper.c27b6911.js";const X=e("title",null,"Login",-1),Z={class:"flex flex-col items-center justify-center gap-4 min-h-screen p-3 bg-base-200"},ee={class:"bg-base-100 flex rounded-xl shadow-md overflow-hidden"},te={class:"flex flex-col items-center justify-center w-full gap-6 py-3 px-7 lg:min-w-fit lg:w-[30rem]"},oe=e("div",{class:"space-y-3"},[e("div",{class:"text-2xl font-medium text-center text-primary"},"Login")],-1),se=["onSubmit"],ae={class:""},ne={class:"form-control w-full max-w-xs"},re=e("label",{class:"label"},[e("span",{class:"label-text"},"Password")],-1),le={class:"label"},ie={class:"text-error"},ue={class:"label-text-alt link-hover"},ce=e("div",{class:"w-full text-center"},"Or",-1),de={class:"text-sm text-right"},ke={__name:"login",setup(pe){const y=F(),f=Y(),S=q();W();const g=l(null),L=m(),a=l(""),n=l(""),i=l({email:"",password:""}),r=l(!1);N(async()=>{(await Q()).useRenderButton({useOneTap:!0,element:g.value,onError:()=>console.error("Failed to render button"),onSuccess:async d=>(r.value=!0,await f.googleLogin(d)?await m().push("/admin"):(f.error="You're not signed up",await m().push("/register")),r.value=!0,!0)})()});const k=U(()=>a.value!=""&&n.value!=""),B=async()=>{var u;r.value=!0,i.value={email:"",password:""};try{await S.login(a.value,n.value),await y.getUser(),await L.push("/dashboard")}catch(t){i.value=(u=t==null?void 0:t.response)==null?void 0:u.data}r.value=!1};return(u,t)=>{var v,w,x,h;const d=z,E=G,P=I,T=J,R=K,C=V("RouterLink");return H(),M(D,null,[o(d,null,{default:c(()=>[X]),_:1}),e("div",Z,[e("div",null,[o(E,{class:"w-20 h-20"})]),e("div",ee,[e("div",te,[oe,e("form",{onSubmit:O(B,["prevent"])},[e("div",ae,[o(P,{label:"Email",input:s(a),"onUpdate:input":t[0]||(t[0]=p=>b(a)?a.value=p:null),placeholder:"Email eg: test@test.com",error:(w=(v=s(i))==null?void 0:v.email)==null?void 0:w[0]},null,8,["input","error"]),e("div",ne,[re,$(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=p=>b(n)?n.value=p:null),placeholder:"Password",inputType:"email",class:"input input-bordered input-primary w-full max-w-xs"},null,512),[[j,s(n)]]),e("label",le,[e("span",ie,A((h=(x=s(i))==null?void 0:x.password)==null?void 0:h[0]),1),e("span",ue,[o(T,{to:"/forgot-password"},{default:c(()=>[_("Forgot password?")]),_:1})])])])]),o(R,{type:s(k)?"primary":"disabled",loading:s(r),class:"mt-3 w-full"},{default:c(()=>[_("Log in")]),_:1},8,["type","loading"])],40,se),ce,e("div",{id:"buttonEL",ref_key:"buttonEl",ref:g},null,512),e("div",de,[o(C,{to:"/register",class:"text-base underline"},{default:c(()=>[_("Create account")]),_:1})])])])])],64)}}};export{ke as default};

import{_ as S}from"./TextInput.d06cad83.js";import{_ as g}from"./Button.vue.39ae692e.js";import{B as c,s as b,o as B,c as C,m as a,p as t,u as e,i as s,Q as N,y as k}from"./entry.3fce29e1.js";import{u as q}from"./spaces.85679b09.js";import{q as M,h as p,U as T,Y as U,S as V}from"./transition.23dd8b17.js";const j=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Y={class:"fixed inset-0 overflow-y-auto"},$={class:"flex min-h-full items-center justify-center p-4 text-center"},z=s("span",null,"Create Space",-1),A=["onSubmit"],I={class:"w-full flex justify-end mt-4"},G={__name:"CreateSpaceModal",props:["show"],emits:["close","add"],setup(d,{emit:u}){const f=d,i=q(),n=c(""),r=c(!1),{spaces:m}=b(i),o=c({name:""});async function _(){if(n.value="",o.value.name==""){n.value="space name is required";return}if(m.value.find(l=>l.name===o.value.name)){n.value="space already exists";return}r.value=!0,await i.store(o.value),r.value=!1,await i.fetchAll(),o.value.name="",u("close")}function v(){u("close")}return(x,l)=>{const h=S,y=g;return B(),C(e(V),{appear:"",show:f.show,as:"template"},{default:a(()=>[t(e(M),{as:"div",onClose:v,class:"relative z-[999]"},{default:a(()=>[t(e(p),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[j]),_:1}),s("div",Y,[s("div",$,[t(e(p),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:a(()=>[t(e(T),{class:"w-full max-w-md h-full flex flex-col transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all"},{default:a(()=>[t(e(U),{as:"h3",class:"text-lg font-medium bg-text-content mb-7"},{default:a(()=>[z]),_:1}),s("form",{onSubmit:N(_,["prevent"])},[s("div",null,[t(h,{type:"text",label:"Name",input:e(o).name,"onUpdate:input":l[0]||(l[0]=w=>e(o).name=w),error:e(n)},null,8,["input","error"])]),s("div",I,[t(y,{type:"primary",class:"h-10 px-3",loading:e(r)},{default:a(()=>[k(" Create ")]),_:1},8,["loading"])])],40,A)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}};export{G as _};

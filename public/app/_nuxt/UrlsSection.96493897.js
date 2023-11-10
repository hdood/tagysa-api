var E=Object.defineProperty;var T=(u,e,l)=>e in u?E(u,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[e]=l;var x=(u,e,l)=>(T(u,typeof e!="symbol"?e+"":e,l),l);import V from"./Icon.dab32138.js";import{_ as U}from"./Button.vue.ff2c8309.js";import{_ as q}from"./ConfirmModal.vue.a0a855df.js";import{a2 as I,K as G,L as J,l as i,G as $,x as C,U as K,o as g,f as L,z as o,u as s,i as t,A as D,t as m,m as F,y as O,c as H,O as N}from"./entry.65f15cac.js";import{u as b}from"./profile.2aacff12.js";import{_ as Q}from"./TextInput.901ad00a.js";import{q as W,h as R,U as X,Y as Z,S as ee}from"./transition.b30d7ad9.js";import"./links.1c8ec839.js";import{d as te}from"./vuedraggable.umd.0a122b8b.js";import"./config.9f98906d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./hidden.ad80bf95.js";import"./micro-task.89dcd6af.js";import"./platform.ec21aee4.js";import"./_commonjsHelpers.042e6b4d.js";const se=I(),k=G(se).provide.axios;class oe{constructor(){x(this,"all",i([]));x(this,"addLink",async(e,l,a,_)=>{await k.post("/api/urls/"+_,{name:e,link:l,order:a}),$().refreshFrame()});x(this,"getAllLinks",async e=>{let l=await k.get("/api/urls/"+e);this.all.value=l.data});x(this,"deleteLink",async e=>{await k.delete(`/api/urls/${e}`)});x(this,"reorder",async()=>{const e=Array.from(this.all.value,(l,a)=>({id:l.id,order:a}));k.post("/api/urls/reorder",{urls:JSON.stringify(e)}),$().refreshFrame()});x(this,"updateLink",async(e,l,a)=>{await k.patch(`/api/urls/${e}`,{name:l,url:a})})}}const A=J("urls",()=>new oe),le={class:"w-full rounded-xl px-2 flex flex-col bg-base-300 p-2 shadow text-base-content"},ae={class:"flex items-center gap-3 justify-between"},ne={class:"flex items-center gap-5"},ie={class:"flex gap-2 items-center"},re={class:"text-xs"},ce={class:"flex gap-2 items-center"},de={__name:"Url",props:{link:Object},emits:["updatedInput"],setup(u,{emit:e}){const l=u,a=$(),_=A(),r=i(!1),{activeProfile:c}=C(b()),{link:n}=K(l);async function p(){try{await _.deleteLink(n.value.id),await _.getAllLinks(c.value.id),a.refreshFrame()}catch(v){console.log(v)}}return(v,f)=>{const d=q,y=V,w=U;return g(),L("div",le,[o(d,{show:s(r),title:"Delete Link",body:"Are you sure you want to delete this link",type:"danger",positive:"Delete",onClose:f[0]||(f[0]=h=>r.value=!1),onConfirm:p},null,8,["show"]),t("div",ae,[t("div",ne,[o(y,{name:"mdi:drag",size:"35",class:"cursor-move handle"}),t("div",ie,[o(y,{size:"40",name:"material-symbols:link"}),t("div",null,[t("div",null,D(s(n).name),1),t("div",re,D(s(n).link),1)])])]),o(w,{type:"danger",class:"px-2 h-10 justify-self-end",onClick:f[1]||(f[1]=h=>r.value=!0)},{default:m(()=>[t("div",ce,[o(y,{size:"25",name:"ic:round-delete"})])]),_:1})])])}}},ue=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),me={class:"fixed inset-0 overflow-y-auto"},pe={class:"flex min-h-full items-center justify-center p-4 text-center"},fe=t("span",null,"Add Link",-1),_e={class:""},ve={class:"mt-5 min-h-[10rem] flex flex-col items-center justify-between h-full"},xe={class:"space-y-3"},he={class:"w-full flex justify-end gap-3 my-4"},ye=t("div",{class:"flex items-center"},[t("span",null,"Add Link")],-1),we={__name:"UrlsModal",props:["show"],emits:["close","select"],setup(u,{emit:e}){const l=u,a=A(),_=$(),r=i(""),c=i({}),n=i(""),p=i({}),v=i(!1);i(!1);const{activeProfile:f}=C(b());F(async()=>{await b().fetchProfile(O().params.id)});function d(){n.value="",r.value="",e("close")}async function y(){if(p.value={},n.value==""){p.value={url:["please specify a url for this link"]};return}v.value=!0;try{const w=await a.addLink(r.value,n.value,a.all.length,f.value.id);await a.getAllLinks(f.value.id),n.value="",r.value="",_.refreshFrame()}catch(w){p.value=w.response.data.errors}d(),v.value=!1}return(w,h)=>{const j=Q,Y=U;return g(),H(s(ee),{appear:"",show:l.show,as:"div"},{default:m(()=>[o(s(W),{as:"div",onClose:d,class:"relative z-10"},{default:m(()=>[o(s(R),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:m(()=>[ue]),_:1}),t("div",me,[t("div",pe,[o(s(R),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:m(()=>[o(s(X),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all"},{default:m(()=>{var z,B,M,P;return[o(s(Z),{as:"div",class:"text-lg font-medium leading-6 text-base-content"},{default:m(()=>[fe]),_:1}),t("div",_e,[t("div",ve,[t("div",xe,[o(j,{class:"w-[20rem]",input:s(n),"onUpdate:input":h[0]||(h[0]=S=>N(n)?n.value=S:null),label:"URL",placeholder:s(c).default,error:(B=(z=s(p))==null?void 0:z.url)==null?void 0:B[0]},null,8,["input","placeholder","error"]),o(j,{class:"w-[20rem]",input:s(r),"onUpdate:input":h[1]||(h[1]=S=>N(r)?r.value=S:null),label:"Name",placeholder:"Display text",error:(P=(M=s(p))==null?void 0:M.text)==null?void 0:P[0]},null,8,["input","error"])]),t("div",he,[t("button",{onClick:d}," Cancel "),o(Y,{class:"px-2 h-10",loading:s(v),type:"primary",onClick:y},{default:m(()=>[ye]),_:1},8,["loading"])])])])]}),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}},ke={class:"w-full"},ge={class:"mx-auto pb-24 py-3 flex flex-col items-center"},$e={key:0,class:"mt-4 px-3 w-full flex justify-between"},be=t("span",{class:"text-2xl opacity-75 font-medium"},"Your Links",-1),Le={class:"flex items-center"},Se={key:1,class:"mt-8 mx-2 text-xl font-medium w-full text-center"},Ue=t("div",null,"You don't have any links",-1),Ce={class:"flex items-center"},Ae=t("span",null,"Add Link",-1),Ge={__name:"UrlsSection",setup(u){const e=A();$(),i({name:"Platform",icon:""}),i(""),i(!1),i({});const{activeProfile:l}=C(b()),a=i(!1);async function _(r){await e.reorder()}return F(async()=>{await b().fetchProfile(O().params.id),await e.getAllLinks(l.value.id)}),(r,c)=>{const n=V,p=U,v=de,f=we;return g(),L("div",ke,[t("div",ge,[s(e).all.length!=0?(g(),L("div",$e,[be,t("div",null,[o(p,{type:"info",class:"h-10 w-full px-8 mx-auto",onClick:c[0]||(c[0]=d=>a.value=!0)},{default:m(()=>[t("div",Le,[o(n,{size:"25",name:"material-symbols:add"})])]),_:1})])])):(g(),L("div",Se,[Ue,o(p,{type:"info",class:"h-10 px-8 mx-auto mt-3",onClick:c[1]||(c[1]=d=>a.value=!0)},{default:m(()=>[t("div",Ce,[Ae,o(n,{size:"25",name:"material-symbols:add"})])]),_:1})])),o(s(te),{modelValue:s(e).all,"onUpdate:modelValue":c[2]||(c[2]=d=>s(e).all=d),"component-data":{class:"w-full"},tag:"div","item-key":"nothing",handle:".handle","ghost-class":"bg-base-200",onEnd:_},{item:m(({element:d})=>[o(v,{link:d,class:"mt-3"},null,8,["link"])]),_:1},8,["modelValue"])]),o(f,{show:s(a),onClose:c[3]||(c[3]=d=>a.value=!1)},null,8,["show"])])}}};export{Ge as default};
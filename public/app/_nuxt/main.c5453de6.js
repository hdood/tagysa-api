import{V as b,o as a,f as n,i as s,A as _,u as t,F as x,B as y,L as Y,e as w,a as ee,x as P,z as l,t as u,c as S,Z as F,v as te,D as $,N as se,l as z,J as q,m as H,O as M,P as oe,a7 as ae,C as Z,y as E,r as ne,K as le,s as ie,ap as L,H as ce}from"./entry.0dead6c9.js";import N from"./Icon.d83697d0.js";import{_ as G}from"./Button.vue.d5db2e11.js";import{a as re,_ as de}from"./ShareModal.aab4bf03.js";import{S as ue,a as me,b as _e}from"./_name_.3e561ebd.js";import{u as D}from"./profile.d188215a.js";import{I as pe,y as fe,S as he,g as ve,x as xe}from"./tabs.fae1eaf3.js";import{_ as ge}from"./TopBar.a05c6255.js";import{q as O,h as U,U as Q,Y as J,S as K}from"./transition.d70661fa.js";import{_ as ye}from"./CreateSpaceModal.48e02d53.js";import{u as we}from"./spaces.0b6c677e.js";import"./config.5b6e1a52.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./micro-task.ba52584a.js";import"./use-resolve-button-type.317a0f1c.js";import"./Logo.6c89892f.js";import"./SearchInput.81a0e9d0.js";import"./combobox.e7eeaa3e.js";import"./useVcard.4408a48e.js";import"./_commonjsHelpers.042e6b4d.js";import"./TextInput.cd397967.js";import"./CountryCodePicker.f9c889db.js";const be={class:"p-6 rounded shadow-md bg-base-100"},$e={class:"min-h-[10rem]"},ke={class:"flex items-center mt-4 space-x-4"},Se=["src","alt"],ze={class:"text-lg font-semibold"},Ce={class:"flex"},je={__name:"PersonalTestimonial",props:["testimonial"],setup(r){const d=r,{testimonial:e}=b(d);return(c,i)=>(a(),n("div",be,[s("p",$e,_(t(e).content),1),s("div",ke,[s("img",{src:t(e).image,alt:t(e).userName+"avatar",class:"w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"},null,8,Se),s("div",null,[s("p",ze,_(t(e).userName),1),s("div",Ce,[(a(),n(x,null,y(5,o=>s("div",{class:Y(["mask mask-star bg-accent h-4 w-4",[o>t(e).rating?"opacity-50":""]]),key:o},null,2)),64))])])])]))}},Te=["src"],Me={__name:"YoutubeVideo",props:["media"],setup(r){const e=r.media.data,c=w(()=>{const i=/v=([a-zA-Z0-9]*)&?/,o=e.url.match(i);return o&&o[1]?o[1]:null});return(i,o)=>(a(),n("div",null,[s("iframe",{class:"w-full h-40 rounded-md overflow-hidden",height:"315",src:`https://www.youtube.com/embed/${t(c)}`},`
		`,8,Te)]))}},Pe=["src"],Ae={__name:"FacebookPost",props:["media"],setup(r){const e=r.media.data,c=w(()=>{var i,o;return((i=e==null?void 0:e.url)==null?void 0:i.slice(-1))=="/"?(o=e==null?void 0:e.url)==null?void 0:o.slice(0,-1):e.url});return(i,o)=>(a(),n("iframe",{src:`https://www.facebook.com/plugins/post.php?href=${t(c)}&show_text=true&width=100`,height:"auto",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},null,8,Pe))}},Ve={class:"flex justify-center"},Be=["src"],Ne={__name:"InstagramPost",props:["media"],setup(r){const e=r.media.data;w(()=>{var i,o;return((i=e==null?void 0:e.url)==null?void 0:i.slice(-1))=="/"?(o=e==null?void 0:e.url)==null?void 0:o.slice(0,-1):e.url});const c=w(()=>{const i=/(p|reel)\/([a-zA-Z0-9-_]*)/,o=e.url.match(i);return`https://www.instagram.com/p/${o==null?void 0:o[2]}`});return(i,o)=>(a(),n("div",Ve,[s("iframe",{src:t(c)+"/embed",class:"w-72 rounded-lg overflow-hidden",height:"580",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},null,8,Be)]))}},Re=["data"],Ue=["src"],Ie=ee({__name:"Pdf",props:["pdf"],setup(r){const e=r.pdf.data;return(c,i)=>{var o,p;return a(),n("object",{data:(o=t(e))==null?void 0:o.url,type:"application/pdf",class:"max-w-[17rem] h-96"},[s("iframe",{src:`https://docs.google.com/viewer?url=${(p=t(e))==null?void 0:p.url}&embedded=true`,frameborder:"0",class:"lg:hidden md:hidden block max-w-[17rem] h-96"},null,8,Ue)],8,Re)}}}),Ee={class:"flex flex-col"},Le={class:"font-semibold text-base-content text-left"},De={class:"h-full relative"},Ye={class:"relative w-full h-full"},Fe=["src"],qe={__name:"PhotosTab",props:["media"],setup(r){const d=r;P(D());const{media:e}=b(d);return(c,i)=>(a(),n("div",Ee,[(a(!0),n(x,null,y(t(e),o=>(a(),n("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",Le,_(o.data.title),1),s("div",De,[s("div",Ye,[s("img",{src:o.data.url,alt:"saman",class:"rounded-lg w-60 h-60 object-cover"},null,8,Fe)])])]))),128))]))}},He={class:"flex flex-col"},Ze={class:"font-semibold text-base-content text-left"},Ge={class:"h-full relative"},Oe={class:"relative w-full h-full"},Qe=["src"],Je={__name:"VideosTab",props:["media"],setup(r){const d=r;P(D());const{media:e}=b(d);return(c,i)=>(a(),n("div",He,[(a(!0),n(x,null,y(t(e),o=>(a(),n("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",Ze,_(o.data.title),1),s("div",Ge,[s("div",Oe,[s("video",{controls:"controls autoplay",src:o.data.url,alt:"",class:"rounded-md"},null,8,Qe)])])]))),128))]))}},Ke={class:"flex flex-col"},We={class:"font-semibold text-base-content text-left"},Xe={class:"h-full relative"},et={class:"relative w-full h-full"},tt={__name:"PdfTab",props:["media"],setup(r){const d=r;P(D());const{media:e}=b(d);return(c,i)=>(a(),n("div",Ke,[(a(!0),n(x,null,y(t(e),o=>(a(),n("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",We,_(o.data.title),1),s("div",Xe,[s("div",et,[l(Ie,{pdf:o},null,8,["pdf"])])])]))),128))]))}},st={class:"flex flex-col"},ot={class:"h-full relative"},at={class:"relative w-full max-h-xs"},nt={__name:"YoutubeTab",props:["media"],setup(r){const d=r,{media:e}=b(d);return(c,i)=>(a(),n("div",st,[(a(!0),n(x,null,y(t(e),o=>(a(),n("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",ot,[s("div",at,[l(Me,{media:o},null,8,["media"])])])]))),128))]))}},lt={class:"flex flex-col gap-5"},it={class:"max-w-7xl relative"},ct={class:"relative w-full"},rt={__name:"InstagramTab",props:["media"],setup(r){const d=r,{media:e}=b(d);return(c,i)=>(a(),n("div",lt,[(a(!0),n(x,null,y(t(e),o=>(a(),n("div",{class:"mx-auto flex flex-col gap-10 justify-center max-w-sm",key:o.id},[s("div",it,[s("div",ct,[l(Ne,{media:o},null,8,["media"])])])]))),128))]))}},dt={class:"flex flex-col"},ut={class:"h-full relative"},mt={class:"relative w-full"},_t={__name:"FacebookTab",props:["media"],setup(r){const d=r,{media:e}=b(d);return(c,i)=>(a(),n("div",dt,[(a(!0),n(x,null,y(t(e),o=>(a(),n("div",{class:"mx-auto flex flex-col gap-10 justify-center max-w-sm",key:o.id},[s("div",ut,[s("div",mt,[l(Ae,{media:o},null,8,["media"])])])]))),128))]))}},pt={class:"mt-14"},ft={__name:"MediaGlass",props:["media"],setup(r){const d=r,{media:e}=b(d),c=w(()=>i.filter(o=>o.media.value.length!=0)),i=[{id:1,name:"images",icon:"ph:image-duotone",color:"blue",media:w(()=>e.value.filter(o=>o.type=="image")),component:qe},{id:2,name:"videos",icon:"ri:video-fill",color:"yellow",media:w(()=>e.value.filter(o=>o.type=="video")),component:Je},{id:3,name:"pdf",icon:"mingcute:pdf-fill",color:"red",media:w(()=>e.value.filter(o=>o.type=="pdf")),component:tt},{id:4,name:"youtube",icon:"logos:youtube-icon",media:w(()=>e.value.filter(o=>o.type=="youtube")),component:nt},{id:5,name:"facebook",icon:"logos:facebook",media:w(()=>e.value.filter(o=>o.type=="facebook")),component:_t},{id:6,name:"instagram",icon:"skill-icons:instagram",media:w(()=>e.value.filter(o=>o.type=="instagram")),component:rt}];return(o,p)=>{const f=N;return a(),n("section",pt,[l(t(xe),{as:"div",class:"flex flex-col gap-3 mx-auto z-50 justify-center shadow-lg w-80 p-3 glass-card rounded-lg"},{default:u(()=>[l(t(pe),{as:"div",class:"flex items-center justify-center gap-2"},{default:u(()=>[(a(!0),n(x,null,y(t(c),m=>(a(),S(t(fe),{as:"div",key:m.id,class:"focus:outline-none cursor-pointer"},{default:u(({selected:C})=>[s("span",{class:Y(["p-2 rounded-md",[C&&"bg-base-100 text-base-content"]])},[l(f,{name:m.icon,color:m.color,size:"25"},null,8,["name","color"])],2)]),_:2},1024))),128))]),_:1}),l(t(he),{class:"mt-2 min-h-fit justify-center flex p-2"},{default:u(()=>[(a(!0),n(x,null,y(t(c),m=>(a(),S(F,{key:m.id,"enter-active-class":"transition-all duration-300","enter-from-class":"opacity-0 ","leave-active-class":"transition-all duration-300 ","leave-to-class":"opacity-0  ",mode:"out-in"},{default:u(()=>[l(t(ve),{class:"rounded-xl basis-full flex justify-center"},{default:u(()=>[(a(),S(te(m.component),{media:m.media},null,8,["media"]))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}}},ht={__name:"TestimonialsSection",props:["testimonials"],setup(r){const d=r,{testimonials:e}=b(d);return(c,i)=>(a(),n("div",null,[t(e).length!=0?(a(),S(t(_e),{key:0,"has-track":!1,options:{perPage:1,rewind:!0,classes:{page:"splide__pagination__page  bg-indigo-600"}},tag:"div",class:"lg:w-[30rem] w-[20rem] mt-10","aria-label":"Testimonials"},{default:u(()=>[l(t(ue),null,{default:u(()=>[(a(!0),n(x,null,y(t(e),o=>(a(),S(t(me),{key:o.id},{default:u(()=>[l(je,{testimonial:o},null,8,["testimonial"])]),_:2},1024))),128))]),_:1})]),_:1})):$("",!0)]))}},vt=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),xt={class:"fixed inset-0 overflow-y-auto"},gt={class:"flex min-h-full items-center justify-center p-4 text-center"},yt=s("div",null,"Phone",-1),wt={class:"flex flex-col gap-3"},bt=["href"],$t={class:"flex items-center gap-2"},kt={class:"grid place-items-center p-1 rounded-md"},St=s("div",null,"Whatsapp",-1),zt=["href"],Ct={class:"flex items-center gap-2"},jt={class:"grid place-items-center p-1 rounded-md"},Tt=s("div",null,"Call",-1),Mt=["href"],Pt={class:"flex items-center gap-2"},At={class:"grid place-items-center p-1 rounded-md"},Vt=s("div",null,"Text",-1),Bt={__name:"PhoneActions",props:["show","user"],emits:["close"],setup(r,{emit:d}){const e=r;se();const{user:c}=b(e),i=z(!1);z(!1),z(!1);function o(){d("close")}return(p,f)=>{const m=N,C=re;return a(),S(t(K),{appear:"",show:e.show,as:"template"},{default:u(()=>[l(t(O),{as:"div",onClose:o,class:"relative z-[999999]"},{default:u(()=>[l(t(U),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[vt]),_:1}),s("div",xt,[s("div",gt,[l(t(U),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[l(t(Q),{class:"w-full max-w-[20rem] transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all z-[999999]"},{default:u(()=>[l(t(J),{as:"h3",class:"text-lg font-medium leading-6 text-base-content mb-6"},{default:u(()=>[yt]),_:1}),l(F,{"enter-active-class":"transition-all","enter-from-class":"opacity-0 -translate-x-4","leave-active-class":"transition-all","leave-to-class":"opacity-0 translate-x-4",as:"div",class:"h-full",mode:"out-in"},{default:u(()=>[s("div",wt,[s("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`https://api.whatsapp.com/send?phone=${t(c).country_code}${t(c).phone}`,target:"_blank"},[s("div",$t,[s("div",kt,[l(m,{name:"logos:whatsapp-icon",size:"30"})]),St]),s("div",null,[l(m,{size:"20",name:"icon-park:right"})])],8,bt),s("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`tel:+${t(c).country_code}${t(c).phone}`},[s("div",Ct,[s("div",jt,[l(m,{name:"material-symbols:call",size:"30"})]),Tt]),s("div",null,[l(m,{size:"20",name:"icon-park:right"})])],8,zt),s("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`sms:+${t(c).country_code}${t(c).phone}`},[s("div",Pt,[s("div",At,[l(m,{name:"material-symbols:sms",size:"30"})]),Vt]),s("div",null,[l(m,{size:"20",name:"icon-park:right"})])],8,Mt)])]),_:1}),l(C,{show:t(i),onClose:f[0]||(f[0]=A=>i.value=!1),name:t(c).name},null,8,["show","name"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}},Nt=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Rt={class:"fixed inset-0 overflow-y-auto"},Ut={class:"flex min-h-full items-center justify-center p-4 text-center"},It=s("span",null,"Select Spaces",-1),Et={class:""},Lt={class:"flex flex-col gap-3 mt-4"},Dt={class:"form-control"},Yt={class:"label-text"},Ft=["value"],qt={class:"flex justify-end w-full"},Ht={__name:"AddToSpaceModal",props:["show","authenticated"],emits:["close"],setup(r,{emit:d}){const e=r,c=q();P(c);const i=z([]),o=we(),p=z(!1),{spaces:f}=P(o),{attachUser:m,detachUser:C}=o;async function A(){i.value.forEach(async h=>{const v=f.value.find(B=>B.id==h);V(v)||await m(h,E().params.name)}),f.value.forEach(async h=>{i.value.includes(h.id)||!V(h)||await C(h.id,E().params.name)}),d("close"),setTimeout(async()=>{f.value=[],await o.fetchAll(),j()},100)}function V(h){return h.users.some(v=>v.name.toLowerCase()===E().params.name.toLowerCase())}function j(){f.value.forEach(h=>V(h)&&i.value.push(h.id))}return H(async()=>{await o.fetchAll(),j()}),(h,v)=>{const B=N,T=G,I=ye;return a(),S(t(K),{appear:"",show:e.show,as:"div"},{default:u(()=>[l(t(O),{as:"div",onClose:v[3]||(v[3]=k=>d("close")),class:"relative z-[99]"},{default:u(()=>[l(t(U),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[Nt]),_:1}),s("div",Rt,[s("div",Ut,[l(t(U),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[l(t(Q),{class:"flex gap-6 justify-center min-w-[17rem] flex-col items-center max-w-md transform rounded-2xl bg-base-200 p-6 shadow-xl transition-all"},{default:u(()=>[l(t(J),{as:"h3",class:"flex gap-14 items-center"},{default:u(()=>[It,s("div",Et,[l(T,{type:"primary",class:"btn-sm",onClick:v[0]||(v[0]=k=>p.value=!0)},{default:u(()=>[l(B,{name:"ic:baseline-plus"})]),_:1})])]),_:1}),s("div",Lt,[s("div",Dt,[(a(!0),n(x,null,y(t(f),k=>(a(),n("label",{class:"label cursor-pointer space-x-8",key:k.id},[s("span",Yt,_(k.name),1),M(s("input",{type:"checkbox","onUpdate:modelValue":v[1]||(v[1]=R=>oe(i)?i.value=R:null),class:"checkbox checkbox-primary",checked:"checked",value:k.id},null,8,Ft),[[ae,t(i)]])]))),128))])]),s("div",qt,[l(T,{onClick:A,type:"primary"},{default:u(()=>[Z(" Submit ")]),_:1})]),l(I,{show:t(p),onClose:v[2]||(v[2]=k=>p.value=!1)},null,8,["show"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}},Zt={class:"z-999"},Gt={__name:"Base",setup(r){const d=q(),{user:e}=P(d),c=z(!1);function i(){if(!o.value){le().push("/login");return}c.value=!0}const o=w(()=>{var p;return!!((p=e==null?void 0:e.value)!=null&&p.id)});return H(async()=>{try{await d.getUser()}catch{}}),(p,f)=>(a(),n("div",Zt,[ne(p.$slots,"default",{authenticated:t(o),openAddToSpaceModal:i}),l(Ht,{show:t(c),onClose:f[0]||(f[0]=m=>c.value=!1),user:t(e),authenticated:t(o)},null,8,["show","user","authenticated"])]))}},Ot=["src"],Qt={class:"pb-20 flex items-center flex-col overflow-hidden main z-50"},Jt={class:"h-full flex flex-col items-center bg-cover bg-no-repeat w-full"},Kt={class:"lg:h-[14rem] lg:w-[50rem] mb-14 w-full h-40 rounded-lg relative"},Wt={class:"absolute lg:-bottom-16 -bottom-14 right-0 left-0 mx-auto outline rounded-full outline-white lg:h-36 lg:w-36 w-32 h-32"},Xt=["src"],es=s("div",null,null,-1),ts={class:"font-medium text-2xl mt-6 z-50"},ss={class:"text-sm mt-2 z-50"},os={class:"font-medium text-2xl mt-6 z-50 flex items-center gap-12"},as={class:"flex flex-col gap-1 items-center justify-center"},ns={class:""},ls=s("small",{class:"text-sm"},"Views",-1),is={class:"flex flex-col gap-1 items-center justify-center"},cs={class:""},rs=s("small",{class:"text-sm"},"Contacts",-1),ds={class:"mt-4 text-center lg:w-80 px-6 z-50"},us={class:"flex gap-4 mx-auto w-64 mt-4 justify-center flex-wrap p-2"},ms=["href"],_s=["href"],ps=["href"],fs=["href"],hs={class:"text-base-content"},vs={class:"text-center flex flex-col items-center gap-1"},xs=s("div",{class:"text-neutral-700 text-s"}," E-mail address ",-1),gs={class:"text-xl font-medium"},ys={class:"text-base-content"},ws={class:"text-center flex flex-col items-center gap-1"},bs=s("div",{class:"text-neutral-700 text-s"},"Phone",-1),$s={class:"text-xl font-medium"},ks={key:2},Ss=["initial"],zs=["src"],Cs={class:"card-body"},js={class:"card-title"},Ts={key:0,class:"badge badge-secondary"},Ms=s("div",{class:"text-2xl z-50 rounded-lg px-4 py-1 glass-card animate-bounce"}," Get a your card now ",-1),Xs={__name:"main",props:["user","theme"],setup(r){const d=r,{user:e,theme:c}=b(d),i=z(!1),o=z(!1),p="https://tagysa.com/backgrounds/";return(f,m)=>{var k,R;const C=ce,A=N,V=G,j=N,h=ie("RouterLink"),v=de,B=L("motion-pop"),T=L("motion-fade"),I=L("motion");return a(),n(x,null,[l(C,null,{default:u(()=>[s("title",null,_(t(e).name),1)]),_:1}),(k=t(c))!=null&&k.background?(a(),n("img",{key:0,src:p+((R=t(c))==null?void 0:R.background),class:"fixed h-full w-full"},null,8,Ot)):$("",!0),l(Gt,null,{default:u(({openAddToSpaceModal:W})=>[s("div",Qt,[s("div",Jt,[l(ge),s("div",Kt,[M((a(),n("div",Wt,[s("img",{class:"lg:h-36 lg:w-36 w-32 h-32 rounded-full transition-all",src:t(e).image,alt:""},null,8,Xt)])),[[B]]),es]),M((a(),n("div",ts,[Z(_(t(e).full_name),1)])),[[T]]),s("div",ss,_(t(e).designation),1),s("div",os,[s("div",as,[s("span",ns,_(t(e).views),1),ls]),s("div",is,[s("span",cs,_(t(e).contact_savers),1),rs]),l(V,{type:"primary",onClick:W},{default:u(()=>[l(A,{size:"25",name:"mdi:user-add"})]),_:2},1032,["onClick"])]),s("div",ds,_(t(e).bio),1),M((a(),n("div",us,[t(e).website&&t(e).visibility.website?(a(),n("a",{key:0,class:"flex items-center rounded-md p-2 cursor-pointer text-primary-content glass-card",href:t(e).website,target:"_blank"},[l(j,{name:"ri:earth-fill",size:"30"})],8,ms)):$("",!0),t(e).address?(a(),n("a",{key:1,class:"flex items-center rounded-md p-2 cursor-pointer text-primary-content glass-card",href:`https://www.google.com/maps/search/?api=1&query=${t(e).address}`,target:"_blank"},[l(j,{name:"logos:google-maps",size:"30"})],8,_s)):$("",!0),(a(!0),n(x,null,y(t(e).links,g=>(a(),n("a",{href:g.url,target:"_blank",class:"flex items-center rounded-md p-2 cursor-pointer text-primary-content glass-card",key:g.id},[l(A,{name:g.icon,size:"30"},null,8,["name"])],8,ps))),128))])),[[T]]),t(e).visibility.email&&t(e).email?M((a(),n("a",{key:0,href:`mailto:${t(e).email}`,class:"shadow-lg flex flex-col items-center test-center px-8 py-3 gap-2 mt-8 bg-transparent rounded-md z-50 glass-card min-w-[21rem]"},[s("div",hs,[l(j,{name:"ic:baseline-email",size:"35"})]),s("div",vs,[xs,s("div",gs,_(t(e).email),1)])],8,fs)),[[T]]):$("",!0),t(e).visibility.phone&&t(e).phone?(a(),n("div",{key:1,class:"shadow-lg flex flex-col items-center test-center px-8 py-3 gap-2 mt-8 bg-transparent z-50 rounded-md glass-card min-w-[21rem] cursor-pointer",onClick:m[0]||(m[0]=g=>o.value=!0)},[s("div",ys,[l(j,{name:"bi:phone-fill",size:"35"})]),s("div",ws,[bs,s("div",$s," +"+_(t(e).country_code)+" "+_(t(e).phone),1)])])):$("",!0),t(e).services.length!=0?(a(),n("div",ks,[(a(!0),n(x,null,y(t(e).services,(g,X)=>M((a(),n("div",{class:"card glass-card shadow-md mt-8 lg:w-96 w-72 p-2 text-base-content",key:g.id,initial:{opacity:0,x:X%2==0?100:-100},visible:{opacity:1,x:0,transition:{duration:600,type:"keyframes",ease:"easeOut"}}},[s("figure",null,[s("img",{src:g.image,alt:"Shoes"},null,8,zs)]),s("div",Cs,[s("h2",js,_(g.name),1),g.price!=0?(a(),n("div",Ts,_(g.price),1)):$("",!0),s("p",null,_(g.description),1)])],8,Ss)),[[I]])),128))])):$("",!0),t(e).media.length!=0?(a(),S(ft,{key:3,media:t(e).media},null,8,["media"])):$("",!0),t(e).testimonials.length!=0?(a(),S(ht,{key:4,testimonials:t(e).testimonials},null,8,["testimonials"])):$("",!0)]),l(h,{to:"/admin/nfc",class:"z-50 mt-7"},{default:u(()=>[Ms]),_:1}),l(v,{show:t(i),onClose:m[1]||(m[1]=g=>i.value=!1),user:t(e)},null,8,["show","user"]),l(Bt,{show:t(o),onClose:m[2]||(m[2]=g=>o.value=!1),user:t(e)},null,8,["show","user"])])]),_:1})],64)}}};export{Xs as default};
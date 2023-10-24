import{e as y,o as a,f as l,i as s,u as t,a as X,s as P,t as $,F as g,r as w,j as p,p as n,m as u,c as S,k as ee,W as Y,S as te,q as b,J as se,B as z,D as q,x as F,w as M,L as oe,ac as ae,y as H,v as L,K as ne,E as le,P as ie,l as D,H as ce}from"./entry.6ed29bba.js";import R from"./Icon.30ff5d8a.js";import{_ as G}from"./Button.vue.650e005c.js";import{_ as re,a as de}from"./ShareModal.b384cf2b.js";import{S as ue,a as me,b as _e}from"./splide-skyblue.min.e94a16ba.js";import{u as N}from"./profile.52138a54.js";import{I as pe,y as fe,S as he,g as ve,x as xe}from"./tabs.8230b5d9.js";import{_ as ge}from"./_name_.113ed967.js";import{_ as ye}from"./TopBar.aeacb836.js";import{q as Q,h as E,U as W,Y as Z,S as J}from"./transition.1bc90d91.js";import{_ as we}from"./CreateSpaceModal.40e0de5c.js";import{u as be}from"./spaces.d14d1761.js";import"./config.7dd18642.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./micro-task.e28bec25.js";import"./use-resolve-button-type.f94cb02e.js";import"./Logo.27d04d0e.js";import"./SearchInput.6da164ee.js";import"./combobox.712c8fc8.js";import"./use-tracked-pointer.d7392d67.js";import"./ShareModal.d9a7475e.js";import"./_commonjsHelpers.042e6b4d.js";import"./TextInput.8846b364.js";import"./CountryCodePicker.4d0016d7.js";const $e=["src"],ke={__name:"YoutubeVideo",props:["media"],setup(r){const e=r.media.data,c=y(()=>{const i=/v=([a-zA-Z0-9]*)&?/,o=e.url.match(i);return o&&o[1]?o[1]:null});return(i,o)=>(a(),l("div",null,[s("iframe",{class:"w-full h-40 rounded-md overflow-hidden",height:"315",src:`https://www.youtube.com/embed/${t(c)}`},`
		`,8,$e)]))}},Se=["src"],ze={__name:"FacebookPost",props:["media"],setup(r){const e=r.media.data,c=y(()=>{var i,o;return((i=e==null?void 0:e.url)==null?void 0:i.slice(-1))=="/"?(o=e==null?void 0:e.url)==null?void 0:o.slice(0,-1):e.url});return(i,o)=>(a(),l("iframe",{src:`https://www.facebook.com/plugins/post.php?href=${t(c)}&show_text=true&width=100`,height:"auto",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},null,8,Se))}},je={class:"flex justify-center"},Ce=["src"],Te={__name:"InstagramPost",props:["media"],setup(r){const e=r.media.data;y(()=>{var i,o;return((i=e==null?void 0:e.url)==null?void 0:i.slice(-1))=="/"?(o=e==null?void 0:e.url)==null?void 0:o.slice(0,-1):e.url});const c=y(()=>{const i=/(p|reel)\/([a-zA-Z0-9-_]*)/,o=e.url.match(i);return`https://www.instagram.com/p/${o==null?void 0:o[2]}`});return(i,o)=>(a(),l("div",je,[s("iframe",{src:t(c)+"/embed",class:"w-72 rounded-lg overflow-hidden",height:"580",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},null,8,Ce)]))}},Me=["data"],Pe=["src"],Ae=X({__name:"Pdf",props:["pdf"],setup(r){const e=r.pdf.data;return(c,i)=>{var o,_;return a(),l("object",{data:(o=t(e))==null?void 0:o.url,type:"application/pdf",class:"max-w-[17rem] h-96"},[s("iframe",{src:`https://docs.google.com/viewer?url=${(_=t(e))==null?void 0:_.url}&embedded=true`,frameborder:"0",class:"lg:hidden md:hidden block max-w-[17rem] h-96"},null,8,Pe)],8,Me)}}}),Be={class:"flex flex-col"},Ve={class:"font-semibold text-base-content text-left"},Re={class:"h-full relative"},Ue={class:"relative w-full h-full"},Ee=["src"],Ie={__name:"PhotosTab",props:["media"],setup(r){const d=r;P(N());const{media:e}=$(d);return(c,i)=>(a(),l("div",Be,[(a(!0),l(g,null,w(t(e),o=>(a(),l("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",Ve,p(o.data.title),1),s("div",Re,[s("div",Ue,[s("img",{src:o.data.url,alt:"saman",class:"rounded-lg w-60 h-60 object-cover"},null,8,Ee)])])]))),128))]))}},Le={class:"flex flex-col"},De={class:"font-semibold text-base-content text-left"},Ne={class:"h-full relative"},Ye={class:"relative w-full h-full"},qe=["src"],Fe={__name:"VideosTab",props:["media"],setup(r){const d=r;P(N());const{media:e}=$(d);return(c,i)=>(a(),l("div",Le,[(a(!0),l(g,null,w(t(e),o=>(a(),l("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",De,p(o.data.title),1),s("div",Ne,[s("div",Ye,[s("video",{controls:"controls autoplay",src:o.data.url,alt:"",class:"rounded-md"},null,8,qe)])])]))),128))]))}},He={class:"flex flex-col"},Ge={class:"font-semibold text-base-content text-left"},Qe={class:"h-full relative"},We={class:"relative w-full h-full"},Ze={__name:"PdfTab",props:["media"],setup(r){const d=r;P(N());const{media:e}=$(d);return(c,i)=>(a(),l("div",He,[(a(!0),l(g,null,w(t(e),o=>(a(),l("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",Ge,p(o.data.title),1),s("div",Qe,[s("div",We,[n(Ae,{pdf:o},null,8,["pdf"])])])]))),128))]))}},Je={class:"flex flex-col"},Ke={class:"h-full relative"},Oe={class:"relative w-full max-h-xs"},Xe={__name:"YoutubeTab",props:["media"],setup(r){const d=r,{media:e}=$(d);return(c,i)=>(a(),l("div",Je,[(a(!0),l(g,null,w(t(e),o=>(a(),l("div",{class:"mx-auto flex flex-col gap-2 justify-center max-w-3xl mt-4 bg-base-100 rounded-lg items-center relative p-4",key:o.id},[s("div",Ke,[s("div",Oe,[n(ke,{media:o},null,8,["media"])])])]))),128))]))}},et={class:"flex flex-col gap-5"},tt={class:"max-w-7xl relative"},st={class:"relative w-full"},ot={__name:"InstagramTab",props:["media"],setup(r){const d=r,{media:e}=$(d);return(c,i)=>(a(),l("div",et,[(a(!0),l(g,null,w(t(e),o=>(a(),l("div",{class:"mx-auto flex flex-col gap-10 justify-center max-w-sm",key:o.id},[s("div",tt,[s("div",st,[n(Te,{media:o},null,8,["media"])])])]))),128))]))}},at={class:"flex flex-col"},nt={class:"h-full relative"},lt={class:"relative w-full"},it={__name:"FacebookTab",props:["media"],setup(r){const d=r,{media:e}=$(d);return(c,i)=>(a(),l("div",at,[(a(!0),l(g,null,w(t(e),o=>(a(),l("div",{class:"mx-auto flex flex-col gap-10 justify-center max-w-sm",key:o.id},[s("div",nt,[s("div",lt,[n(ze,{media:o},null,8,["media"])])])]))),128))]))}},ct={class:"mt-14"},rt={__name:"MediaGlass",props:["media"],setup(r){const d=r,{media:e}=$(d),c=y(()=>i.filter(o=>o.media.value.length!=0)),i=[{id:1,name:"images",icon:"ph:image-duotone",color:"blue",media:y(()=>e.value.filter(o=>o.type=="image")),component:Ie},{id:2,name:"videos",icon:"ri:video-fill",color:"yellow",media:y(()=>e.value.filter(o=>o.type=="video")),component:Fe},{id:3,name:"pdf",icon:"mingcute:pdf-fill",color:"red",media:y(()=>e.value.filter(o=>o.type=="pdf")),component:Ze},{id:4,name:"youtube",icon:"logos:youtube-icon",media:y(()=>e.value.filter(o=>o.type=="youtube")),component:Xe},{id:5,name:"facebook",icon:"logos:facebook",media:y(()=>e.value.filter(o=>o.type=="facebook")),component:it},{id:6,name:"instagram",icon:"skill-icons:instagram",media:y(()=>e.value.filter(o=>o.type=="instagram")),component:ot}];return(o,_)=>{const f=R;return a(),l("section",ct,[n(t(xe),{as:"div",class:"flex flex-col gap-3 mx-auto z-50 justify-center shadow-lg w-80 p-3 glass-card rounded-lg"},{default:u(()=>[n(t(pe),{as:"div",class:"flex items-center justify-center gap-2"},{default:u(()=>[(a(!0),l(g,null,w(t(c),m=>(a(),S(t(fe),{as:"div",key:m.id,class:"focus:outline-none cursor-pointer"},{default:u(({selected:j})=>[s("span",{class:ee(["p-2 rounded-md",[j&&"bg-base-100 text-base-content"]])},[n(f,{name:m.icon,color:m.color,size:"25"},null,8,["name","color"])],2)]),_:2},1024))),128))]),_:1}),n(t(he),{class:"mt-2 min-h-fit justify-center flex p-2"},{default:u(()=>[(a(!0),l(g,null,w(t(c),m=>(a(),S(Y,{key:m.id,"enter-active-class":"transition-all duration-300","enter-from-class":"opacity-0 ","leave-active-class":"transition-all duration-300 ","leave-to-class":"opacity-0  ",mode:"out-in"},{default:u(()=>[n(t(ve),{class:"rounded-xl basis-full flex justify-center"},{default:u(()=>[(a(),S(te(m.component),{media:m.media},null,8,["media"]))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}}},dt={__name:"TestimonialsSection",props:["testimonials"],setup(r){const d=r,{testimonials:e}=$(d);return(c,i)=>(a(),l("div",null,[t(e).length!=0?(a(),S(t(_e),{key:0,"has-track":!1,options:{perPage:1,rewind:!0,classes:{page:"splide__pagination__page  bg-indigo-600"}},tag:"div",class:"lg:w-[30rem] w-[20rem] mt-10","aria-label":"Testimonials"},{default:u(()=>[n(t(ue),null,{default:u(()=>[(a(!0),l(g,null,w(t(e),o=>(a(),S(t(me),{key:o.id},{default:u(()=>[n(ge,{testimonial:o},null,8,["testimonial"])]),_:2},1024))),128))]),_:1})]),_:1})):b("",!0)]))}},ut=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),mt={class:"fixed inset-0 overflow-y-auto"},_t={class:"flex min-h-full items-center justify-center p-4 text-center"},pt=s("div",null,"Phone",-1),ft={class:"flex flex-col gap-3"},ht=["href"],vt={class:"flex items-center gap-2"},xt={class:"grid place-items-center p-1 rounded-md"},gt=s("div",null,"Whatsapp",-1),yt=["href"],wt={class:"flex items-center gap-2"},bt={class:"grid place-items-center p-1 rounded-md"},$t=s("div",null,"Call",-1),kt=["href"],St={class:"flex items-center gap-2"},zt={class:"grid place-items-center p-1 rounded-md"},jt=s("div",null,"Text",-1),Ct={__name:"PhoneActions",props:["show","user"],emits:["close"],setup(r,{emit:d}){const e=r;se();const{user:c}=$(e),i=z(!1);z(!1),z(!1);function o(){d("close")}return(_,f)=>{const m=R,j=re;return a(),S(t(J),{appear:"",show:e.show,as:"template"},{default:u(()=>[n(t(Q),{as:"div",onClose:o,class:"relative z-[999999]"},{default:u(()=>[n(t(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[ut]),_:1}),s("div",mt,[s("div",_t,[n(t(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[n(t(W),{class:"w-full max-w-[20rem] transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all z-[999999]"},{default:u(()=>[n(t(Z),{as:"h3",class:"text-lg font-medium leading-6 text-base-content mb-6"},{default:u(()=>[pt]),_:1}),n(Y,{"enter-active-class":"transition-all","enter-from-class":"opacity-0 -translate-x-4","leave-active-class":"transition-all","leave-to-class":"opacity-0 translate-x-4",as:"div",class:"h-full",mode:"out-in"},{default:u(()=>[s("div",ft,[s("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`https://api.whatsapp.com/send?phone=${t(c).country_code}${t(c).phone}`,target:"_blank"},[s("div",vt,[s("div",xt,[n(m,{name:"logos:whatsapp-icon",size:"30"})]),gt]),s("div",null,[n(m,{size:"20",name:"icon-park:right"})])],8,ht),s("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`tel:+${t(c).country_code}${t(c).phone}`},[s("div",wt,[s("div",bt,[n(m,{name:"material-symbols:call",size:"30"})]),$t]),s("div",null,[n(m,{size:"20",name:"icon-park:right"})])],8,yt),s("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`sms:+${t(c).country_code}${t(c).phone}`},[s("div",St,[s("div",zt,[n(m,{name:"material-symbols:sms",size:"30"})]),jt]),s("div",null,[n(m,{size:"20",name:"icon-park:right"})])],8,kt)])]),_:1}),n(j,{show:t(i),onClose:f[0]||(f[0]=A=>i.value=!1),name:t(c).name},null,8,["show","name"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}},Tt=s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Mt={class:"fixed inset-0 overflow-y-auto"},Pt={class:"flex min-h-full items-center justify-center p-4 text-center"},At=s("span",null,"Select Spaces",-1),Bt={class:""},Vt={class:"flex flex-col gap-3 mt-4"},Rt={class:"form-control"},Ut={class:"label-text"},Et=["value"],It={class:"flex justify-end w-full"},Lt={__name:"AddToSpaceModal",props:["show","authenticated"],emits:["close"],setup(r,{emit:d}){const e=r,c=q();P(c);const i=z([]),o=be(),_=z(!1),{spaces:f}=P(o),{attachUser:m,detachUser:j}=o;async function A(){i.value.forEach(async h=>{const v=f.value.find(V=>V.id==h);B(v)||await m(h,L().params.name)}),f.value.forEach(async h=>{i.value.includes(h.id)||!B(h)||await j(h.id,L().params.name)}),d("close"),setTimeout(async()=>{f.value=[],await o.fetchAll(),C()},100)}function B(h){return h.users.some(v=>v.name.toLowerCase()===L().params.name.toLowerCase())}function C(){f.value.forEach(h=>B(h)&&i.value.push(h.id))}return F(async()=>{await o.fetchAll(),C()}),(h,v)=>{const V=R,T=G,I=we;return a(),S(t(J),{appear:"",show:e.show,as:"div"},{default:u(()=>[n(t(Q),{as:"div",onClose:v[3]||(v[3]=k=>d("close")),class:"relative z-[99]"},{default:u(()=>[n(t(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:u(()=>[Tt]),_:1}),s("div",Mt,[s("div",Pt,[n(t(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:u(()=>[n(t(W),{class:"flex gap-6 justify-center min-w-[17rem] flex-col items-center max-w-md transform rounded-2xl bg-base-200 p-6 shadow-xl transition-all"},{default:u(()=>[n(t(Z),{as:"h3",class:"flex gap-14 items-center"},{default:u(()=>[At,s("div",Bt,[n(T,{type:"primary",class:"btn-sm",onClick:v[0]||(v[0]=k=>_.value=!0)},{default:u(()=>[n(V,{name:"ic:baseline-plus"})]),_:1})])]),_:1}),s("div",Vt,[s("div",Rt,[(a(!0),l(g,null,w(t(f),k=>(a(),l("label",{class:"label cursor-pointer space-x-8",key:k.id},[s("span",Ut,p(k.name),1),M(s("input",{type:"checkbox","onUpdate:modelValue":v[1]||(v[1]=U=>oe(i)?i.value=U:null),class:"checkbox checkbox-primary",checked:"checked",value:k.id},null,8,Et),[[ae,t(i)]])]))),128))])]),s("div",It,[n(T,{onClick:A,type:"primary"},{default:u(()=>[H(" Submit ")]),_:1})]),n(I,{show:t(_),onClose:v[2]||(v[2]=k=>_.value=!1)},null,8,["show"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}},Dt={class:"z-999"},Nt={__name:"Base",setup(r){const d=q(),{user:e}=P(d),c=z(!1);function i(){if(!o.value){le().push("/login");return}c.value=!0}const o=y(()=>{var _;return!!((_=e==null?void 0:e.value)!=null&&_.id)});return F(async()=>{try{await d.getUser()}catch{}}),(_,f)=>(a(),l("div",Dt,[ne(_.$slots,"default",{authenticated:t(o),openAddToSpaceModal:i}),n(Lt,{show:t(c),onClose:f[0]||(f[0]=m=>c.value=!1),user:t(e),authenticated:t(o)},null,8,["show","user","authenticated"])]))}},Yt=["src"],qt={class:"pb-20 flex items-center flex-col overflow-hidden main z-50"},Ft={class:"h-full flex flex-col items-center bg-cover bg-no-repeat w-full"},Ht={class:"lg:h-[14rem] lg:w-[50rem] mb-14 w-full h-40 rounded-lg relative"},Gt={class:"absolute lg:-bottom-16 -bottom-14 right-0 left-0 mx-auto outline rounded-full outline-white lg:h-36 lg:w-36 w-32 h-32"},Qt=["src"],Wt=s("div",null,null,-1),Zt={class:"font-medium text-2xl mt-6 z-50"},Jt={class:"text-sm mt-2 z-50"},Kt={class:"font-medium text-2xl mt-6 z-50 flex items-center gap-12"},Ot={class:"flex flex-col gap-1 items-center justify-center"},Xt={class:""},es=s("small",{class:"text-sm"},"Views",-1),ts={class:"flex flex-col gap-1 items-center justify-center"},ss={class:""},os=s("small",{class:"text-sm"},"Contacts",-1),as={class:"mt-4 text-center lg:w-80 px-6 z-50"},ns={class:"flex gap-4 mx-auto w-64 mt-4 justify-center flex-wrap p-2"},ls=["href"],is=["href"],cs=["href"],rs=["href"],ds={class:"text-base-content"},us={class:"text-center flex flex-col items-center gap-1"},ms=s("div",{class:"text-neutral-700 text-s"}," E-mail address ",-1),_s={class:"text-xl font-medium"},ps={class:"text-base-content"},fs={class:"text-center flex flex-col items-center gap-1"},hs=s("div",{class:"text-neutral-700 text-s"},"Phone",-1),vs={class:"text-xl font-medium"},xs={key:2},gs=["initial"],ys=["src"],ws={class:"card-body"},bs={class:"card-title"},$s={key:0,class:"badge badge-secondary"},ks=s("div",{class:"text-2xl z-50 rounded-lg px-4 py-1 glass-card animate-bounce"}," Get a your card now ",-1),Zs={__name:"main",props:["user","theme"],setup(r){const d=r,{user:e,theme:c}=$(d),i=z(!1),o=z(!1),_="https://tagysa.com/backgrounds/";return(f,m)=>{var k,U;const j=ce,A=R,B=G,C=R,h=ie("RouterLink"),v=de,V=D("motion-pop"),T=D("motion-fade"),I=D("motion");return a(),l(g,null,[n(j,null,{default:u(()=>[s("title",null,p(t(e).name),1)]),_:1}),(k=t(c))!=null&&k.background?(a(),l("img",{key:0,src:_+((U=t(c))==null?void 0:U.background),class:"fixed h-full w-full"},null,8,Yt)):b("",!0),n(Nt,null,{default:u(({openAddToSpaceModal:K})=>[s("div",qt,[s("div",Ft,[n(ye),s("div",Ht,[M((a(),l("div",Gt,[s("img",{class:"lg:h-36 lg:w-36 w-32 h-32 rounded-full transition-all",src:t(e).image,alt:""},null,8,Qt)])),[[V]]),Wt]),M((a(),l("div",Zt,[H(p(t(e).full_name),1)])),[[T]]),s("div",Jt,p(t(e).designation),1),s("div",Kt,[s("div",Ot,[s("span",Xt,p(t(e).views),1),es]),s("div",ts,[s("span",ss,p(t(e).contact_savers),1),os]),n(B,{type:"primary",onClick:K},{default:u(()=>[n(A,{size:"25",name:"mdi:user-add"})]),_:2},1032,["onClick"])]),s("div",as,p(t(e).bio),1),M((a(),l("div",ns,[t(e).website&&t(e).visibility.website?(a(),l("a",{key:0,class:"flex items-center rounded-md p-2 cursor-pointer text-primary-content glass-card",href:t(e).website,target:"_blank"},[n(C,{name:"ri:earth-fill",size:"30"})],8,ls)):b("",!0),t(e).address?(a(),l("a",{key:1,class:"flex items-center rounded-md p-2 cursor-pointer text-primary-content glass-card",href:`https://www.google.com/maps/search/?api=1&query=${t(e).address}`,target:"_blank"},[n(C,{name:"logos:google-maps",size:"30"})],8,is)):b("",!0),(a(!0),l(g,null,w(t(e).links,x=>(a(),l("a",{href:x.url,target:"_blank",class:"flex items-center rounded-md p-2 cursor-pointer text-primary-content glass-card",key:x.id},[n(A,{name:x.icon,size:"30"},null,8,["name"])],8,cs))),128))])),[[T]]),t(e).visibility.email&&t(e).email?M((a(),l("a",{key:0,href:`mailto:${t(e).email}`,class:"shadow-lg flex flex-col items-center test-center px-8 py-3 gap-2 mt-8 bg-transparent rounded-md z-50 glass-card min-w-[21rem]"},[s("div",ds,[n(C,{name:"ic:baseline-email",size:"35"})]),s("div",us,[ms,s("div",_s,p(t(e).email),1)])],8,rs)),[[T]]):b("",!0),t(e).visibility.phone&&t(e).phone?(a(),l("div",{key:1,class:"shadow-lg flex flex-col items-center test-center px-8 py-3 gap-2 mt-8 bg-transparent z-50 rounded-md glass-card min-w-[21rem] cursor-pointer",onClick:m[0]||(m[0]=x=>o.value=!0)},[s("div",ps,[n(C,{name:"bi:phone-fill",size:"35"})]),s("div",fs,[hs,s("div",vs," +"+p(t(e).country_code)+" "+p(t(e).phone),1)])])):b("",!0),t(e).services.length!=0?(a(),l("div",xs,[(a(!0),l(g,null,w(t(e).services,(x,O)=>M((a(),l("div",{class:"card glass-card shadow-md mt-8 lg:w-96 w-72 p-2 text-base-content",key:x.id,initial:{opacity:0,x:O%2==0?100:-100},visible:{opacity:1,x:0,transition:{duration:600,type:"keyframes",ease:"easeOut"}}},[s("figure",null,[s("img",{src:x.image,alt:"Shoes"},null,8,ys)]),s("div",ws,[s("h2",bs,p(x.name),1),x.price!=0?(a(),l("div",$s,p(x.price),1)):b("",!0),s("p",null,p(x.description),1)])],8,gs)),[[I]])),128))])):b("",!0),t(e).media.length!=0?(a(),S(rt,{key:3,media:t(e).media},null,8,["media"])):b("",!0),t(e).testimonials.length!=0?(a(),S(dt,{key:4,testimonials:t(e).testimonials},null,8,["testimonials"])):b("",!0)]),n(h,{to:"/admin/nfc",class:"z-50 mt-7"},{default:u(()=>[ks]),_:1}),n(v,{show:t(i),onClose:m[1]||(m[1]=x=>i.value=!1),user:t(e)},null,8,["show","user"]),n(Ct,{show:t(o),onClose:m[2]||(m[2]=x=>o.value=!1),user:t(e)},null,8,["show","user"])])]),_:1})],64)}}};export{Zs as default};

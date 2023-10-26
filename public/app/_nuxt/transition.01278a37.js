import{c as re,o as w,w as We,h as Ye,m as oe,f as ge,a as he,H as R,S as V,t as Ce,u as W,P as ae,N,T as Ge,b as ue,d as ye,e as _e,g as U,i as Xe}from"./micro-task.6b7d3f94.js";import{k as B,q as D,af as A,l as p,e as f,a as H,m as $,X as M,E as F,F as ze,w as J,ag as Qe,a6 as Je,ah as Ke,ai as Ze,L as et}from"./entry.8d13c2a4.js";let De=Symbol("Context");var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function tt(){return Se()!==null}function Se(){return B(De,null)}function nt(e){D(De,e)}function ve(e,t,n){re.isServer||A(l=>{document.addEventListener(e,t,n),l(()=>document.removeEventListener(e,t,n))})}function lt(e,t,n=f(()=>!0)){function l(r,o){if(!n.value||r.defaultPrevented)return;let u=o(r);if(u===null||!u.getRootNode().contains(u))return;let s=function i(d){return typeof d=="function"?i(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let i of s){if(i===null)continue;let d=i instanceof HTMLElement?i:w(i);if(d!=null&&d.contains(u)||r.composed&&r.composedPath().includes(d))return}return!We(u,Ye.Loose)&&u.tabIndex!==-1&&r.preventDefault(),t(r,u)}let a=p(null);ve("mousedown",r=>{var o,u;n.value&&(a.value=((u=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:u[0])||r.target)},!0),ve("click",r=>{a.value&&(l(r,()=>a.value),a.value=null)},!0),ve("blur",r=>l(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Re(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function at(){return/Android/gi.test(window.navigator.userAgent)}function Ut(){return Re()||at()}function rt(e,t,n){re.isServer||A(l=>{window.addEventListener(e,t,n),l(()=>window.removeEventListener(e,t,n))})}var Q=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Q||{});function ot(){let e=p(0);return rt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Be(e,t,n,l){re.isServer||A(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}function ut(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function He(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=w(n);l instanceof HTMLElement&&t.add(l)}return t}var Me=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Me||{});let X=Object.assign(H({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:p(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=p(null);l({el:a,$el:a});let r=f(()=>oe(a)),o=p(!1);$(()=>o.value=!0),M(()=>o.value=!1),st({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let u=dt({ownerDocument:r,container:a,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));ct({ownerDocument:r,container:a,containers:e.containers,previousActiveElement:u},f(()=>o.value&&!!(e.features&8)));let s=ot();function i(m){let S=w(a);S&&(y=>y())(()=>{W(s.value,{[Q.Forwards]:()=>{ae(S,N.First,{skipElements:[m.relatedTarget]})},[Q.Backwards]:()=>{ae(S,N.Last,{skipElements:[m.relatedTarget]})}})})}let d=p(!1);function E(m){m.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function g(m){if(!o.value)return;let S=He(e.containers);w(a)instanceof HTMLElement&&S.add(w(a));let y=m.relatedTarget;y instanceof HTMLElement&&y.dataset.headlessuiFocusGuard!=="true"&&(ke(S,y)||(d.value?ae(w(a),W(s.value,{[Q.Forwards]:()=>N.Next,[Q.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:m.target}):m.target instanceof HTMLElement&&V(m.target)))}return()=>{let m={},S={ref:a,onKeydown:E,onFocusout:g},{features:y,initialFocus:L,containers:G,...P}=e;return F(ze,[!!(y&4)&&F(ge,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:i,features:he.Focusable}),R({ourProps:S,theirProps:{...t,...P},slot:m,attrs:t,slots:n,name:"FocusTrap"}),!!(y&4)&&F(ge,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:i,features:he.Focusable})])}}}),{features:Me}),I=[];ut(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&I[0]!==t.target&&(I.unshift(t.target),I=I.filter(n=>n!=null&&n.isConnected),I.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function it(e){let t=p(I.slice());return J([e],([n],[l])=>{l===!0&&n===!1?Ce(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=I.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function st({ownerDocument:e},t){let n=it(t);$(()=>{A(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&V(n())},{flush:"post"})}),M(()=>{V(n())})}function dt({ownerDocument:e,container:t,initialFocus:n},l){let a=p(null),r=p(!1);return $(()=>r.value=!0),M(()=>r.value=!1),$(()=>{J([t,n,l],(o,u)=>{if(o.every((i,d)=>(u==null?void 0:u[d])===i)||!l.value)return;let s=w(t);s&&Ce(()=>{var i,d;if(!r.value)return;let E=w(n),g=(i=e.value)==null?void 0:i.activeElement;if(E){if(E===g){a.value=g;return}}else if(s.contains(g)){a.value=g;return}E?V(E):ae(s,N.First|N.NoScroll)===Ge.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function ct({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var r;Be((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!a.value)return;let u=He(n);w(t)instanceof HTMLElement&&u.add(w(t));let s=l.value;if(!s)return;let i=o.target;i&&i instanceof HTMLElement?ke(u,i)?(l.value=i,V(i)):(o.preventDefault(),o.stopPropagation(),V(s)):V(l.value)},!0)}function ke(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let pe=new Map,z=new Map;function Pe(e,t=p(!0)){A(n=>{var l;if(!t.value)return;let a=w(e);if(!a)return;n(function(){var o;if(!a)return;let u=(o=z.get(a))!=null?o:1;if(u===1?z.delete(a):z.set(a,u-1),u!==1)return;let s=pe.get(a);s&&(s["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",s["aria-hidden"]),a.inert=s.inert,pe.delete(a))});let r=(l=z.get(a))!=null?l:0;z.set(a,r+1),r===0&&(pe.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let xe=Symbol("ForcePortalRootContext");function ft(){return B(xe,!1)}let Ae=H({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return D(xe,e.force),()=>{let{force:l,...a}=e;return R({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function vt(e){let t=oe(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let pt=H({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=p(null),a=f(()=>oe(l)),r=ft(),o=B(je,null),u=p(r===!0||o==null?vt(l.value):o.resolveTarget());return A(()=>{r||o!=null&&(u.value=o.resolveTarget())}),M(()=>{var s,i;let d=(s=a.value)==null?void 0:s.getElementById("headlessui-portal-root");d&&u.value===d&&u.value.children.length<=0&&((i=u.value.parentElement)==null||i.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return F(Qe,{to:u.value},R({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),je=Symbol("PortalGroupContext"),mt=H({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=Je({resolveTarget(){return e.target}});return D(je,l),()=>{let{target:a,...r}=e;return R({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Ne=Symbol("StackContext");var be=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(be||{});function gt(){return B(Ne,()=>{})}function ht({type:e,enabled:t,element:n,onUpdate:l}){let a=gt();function r(...o){l==null||l(...o),a(...o)}$(()=>{J(t,(o,u)=>{o?r(0,e,n):u===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),M(()=>{t.value&&r(1,e,n)}),D(Ne,r)}let yt=Symbol("DescriptionContext");function bt({slot:e=p({}),name:t="Description",props:n={}}={}){let l=p([]);function a(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return D(yt,{register:a,slot:e,name:t,props:n}),f(()=>l.value.length>0?l.value.join(" "):void 0)}function wt(e){let t=Ke(e.getSnapshot());return M(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function ie(){let e=[],t={addEventListener(n,l,a,r){return n.addEventListener(l,a,r),t.add(()=>n.removeEventListener(l,a,r))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},style(n,l,a){let r=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:a}),this.add(()=>{Object.assign(n.style,{[l]:r})})},group(n){let l=ie();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let a of e.splice(l,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}function Et(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...r){let o=t[a].call(n,...r);o&&(n=o,l.forEach(u=>u()))}}}function St(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,r=e-a;n.style(l,"paddingRight",`${r}px`)}}}function Lt(){if(!Re())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function a(o){return l.containers.flatMap(u=>u()).some(u=>u.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let r=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let u=o.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),i=t.querySelector(s);i&&!a(i)&&(r=i)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})}}}function Tt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Ft(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let q=Et(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:ie(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Ft(n)},a=[Lt(),St(),Tt()];a.forEach(({before:r})=>r==null?void 0:r(l)),a.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});q.subscribe(()=>{let e=q.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&q.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&q.dispatch("TEARDOWN",n)}});function $t(e,t,n){let l=wt(q),a=f(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return J([e,t],([r,o],[u],s)=>{if(!r||!o)return;q.dispatch("PUSH",r,n);let i=!1;s(()=>{i||(q.dispatch("POP",u??r,n),i=!0)})},{immediate:!0}),a}var Pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pt||{});let we=Symbol("DialogContext");function Le(e){let t=B(we,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Le),n}return t}let ne="DC8F892D-2EBD-447C-A4C8-A03058436FF4",qt=H({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ne},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ue()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var r;let o=p(!1);$(()=>{o.value=!0});let u=p(0),s=Se(),i=f(()=>e.open===ne&&s!==null?(s.value&T.Open)===T.Open:e.open),d=p(null),E=p(null),g=f(()=>oe(d));if(a({el:d,$el:d}),!(e.open!==ne||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof i.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i.value===ne?void 0:e.open}`);let m=f(()=>o.value&&i.value?0:1),S=f(()=>m.value===0),y=f(()=>u.value>1),L=B(we,null)!==null,G=f(()=>y.value?"parent":"leaf"),P=f(()=>s!==null?(s.value&T.Closing)===T.Closing:!1),Y=f(()=>L||P.value?!1:S.value),K=f(()=>{var c,v,h;return(h=Array.from((v=(c=g.value)==null?void 0:c.querySelectorAll("body > *"))!=null?v:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(w(E))&&b instanceof HTMLElement))!=null?h:null});Pe(K,Y);let Z=f(()=>y.value?!0:S.value),ee=f(()=>{var c,v,h;return(h=Array.from((v=(c=g.value)==null?void 0:c.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(b=>b.contains(w(E))&&b instanceof HTMLElement))!=null?h:null});Pe(ee,Z),ht({type:"Dialog",enabled:f(()=>m.value===0),element:d,onUpdate:(c,v)=>{if(v==="Dialog")return W(c,{[be.Add]:()=>u.value+=1,[be.Remove]:()=>u.value-=1})}});let de=bt({name:"DialogDescription",slot:f(()=>({open:i.value}))}),k=p(null),C={titleId:k,panelRef:p(null),dialogState:m,setTitleId(c){k.value!==c&&(k.value=c)},close(){t("close",!1)}};D(we,C);function _(){var c,v,h;return[...Array.from((v=(c=g.value)==null?void 0:c.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?v:[]).filter(b=>!(b===document.body||b===document.head||!(b instanceof HTMLElement)||b.contains(w(E))||C.panelRef.value&&b.contains(C.panelRef.value))),(h=C.panelRef.value)!=null?h:d.value]}let ce=f(()=>!(!S.value||y.value));lt(()=>_(),(c,v)=>{C.close(),Ze(()=>v==null?void 0:v.focus())},ce);let fe=f(()=>!(y.value||m.value!==0));Be((r=g.value)==null?void 0:r.defaultView,"keydown",c=>{fe.value&&(c.defaultPrevented||c.key===_e.Escape&&(c.preventDefault(),c.stopPropagation(),C.close()))});let O=f(()=>!(P.value||m.value!==0||L));return $t(g,O,c=>{var v;return{containers:[...(v=c.containers)!=null?v:[],_]}}),A(c=>{if(m.value!==0)return;let v=w(d);if(!v)return;let h=new ResizeObserver(b=>{for(let te of b){let x=te.target.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&C.close()}});h.observe(v),c(()=>h.disconnect())}),()=>{let{id:c,open:v,initialFocus:h,...b}=e,te={...n,ref:d,id:c,role:"dialog","aria-modal":m.value===0?!0:void 0,"aria-labelledby":k.value,"aria-describedby":de.value},x={open:m.value===0};return F(Ae,{force:!0},()=>[F(pt,()=>F(mt,{target:d.value},()=>F(Ae,{force:!1},()=>F(X,{initialFocus:h,containers:_,features:S.value?W(G.value,{parent:X.features.RestoreFocus,leaf:X.features.All&~X.features.FocusLock}):X.features.None},()=>R({ourProps:te,theirProps:b,slot:x,attrs:n,slots:l,visible:m.value===0,features:ye.RenderStrategy|ye.Static,name:"Dialog"}))))),F(ge,{features:he.Hidden,ref:E})])}}}),Vt=H({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${ue()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=Le("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function r(o){o.stopPropagation()}return()=>{let{id:o,...u}=e,s={id:o,ref:a.panelRef,onClick:r};return R({ourProps:s,theirProps:u,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Wt=H({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${ue()}`}},setup(e,{attrs:t,slots:n}){let l=Le("DialogTitle");return $(()=>{l.setTitleId(e.id),M(()=>l.setTitleId(null))}),()=>{let{id:a,...r}=e;return R({ourProps:{id:a},theirProps:r,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function At(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function me(e,...t){e&&t.length>0&&e.classList.add(...t)}function le(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ee=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ee||{});function Ot(e,t){let n=ie();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[r,o]=[l,a].map(u=>{let[s=0]=u.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,d)=>d-i);return s});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Oe(e,t,n,l,a,r){let o=ie(),u=r!==void 0?At(r):()=>{};return le(e,...a),me(e,...t,...n),o.nextFrame(()=>{le(e,...n),me(e,...l),o.add(Ot(e,s=>(le(e,...l,...t),me(e,...a),u(s))))}),o.add(()=>le(e,...t,...n,...l,...a)),o.add(()=>u("cancelled")),o.dispose}function j(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Te=Symbol("TransitionContext");var Ct=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ct||{});function Dt(){return B(Te,null)!==null}function Rt(){let e=B(Te,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Bt(){let e=B(Fe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Fe=Symbol("NestingContext");function se(e){return"children"in e?se(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ie(e){let t=p([]),n=p(!1);$(()=>n.value=!0),M(()=>n.value=!1);function l(r,o=U.Hidden){let u=t.value.findIndex(({id:s})=>s===r);u!==-1&&(W(o,{[U.Unmount](){t.value.splice(u,1)},[U.Hidden](){t.value[u].state="hidden"}}),!se(t)&&n.value&&(e==null||e()))}function a(r){let o=t.value.find(({id:u})=>u===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,U.Unmount)}return{children:t,register:a,unregister:l}}let Ue=ye.RenderStrategy,Ht=H({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let r=p(0);function o(){r.value|=T.Opening,t("beforeEnter")}function u(){r.value&=~T.Opening,t("afterEnter")}function s(){r.value|=T.Closing,t("beforeLeave")}function i(){r.value&=~T.Closing,t("afterLeave")}if(!Dt()&&tt())return()=>F(kt,{...e,onBeforeEnter:o,onAfterEnter:u,onBeforeLeave:s,onAfterLeave:i},l);let d=p(null),E=f(()=>e.unmount?U.Unmount:U.Hidden);a({el:d,$el:d});let{show:g,appear:m}=Rt(),{register:S,unregister:y}=Bt(),L=p(g.value?"visible":"hidden"),G={value:!0},P=ue(),Y={value:!1},K=Ie(()=>{!Y.value&&L.value!=="hidden"&&(L.value="hidden",y(P),i())});$(()=>{let O=S(P);M(O)}),A(()=>{if(E.value===U.Hidden&&P){if(g.value&&L.value!=="visible"){L.value="visible";return}W(L.value,{hidden:()=>y(P),visible:()=>S(P)})}});let Z=j(e.enter),ee=j(e.enterFrom),de=j(e.enterTo),k=j(e.entered),C=j(e.leave),_=j(e.leaveFrom),ce=j(e.leaveTo);$(()=>{A(()=>{if(L.value==="visible"){let O=w(d);if(O instanceof Comment&&O.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function fe(O){let c=G.value&&!m.value,v=w(d);!v||!(v instanceof HTMLElement)||c||(Y.value=!0,g.value&&o(),g.value||s(),O(g.value?Oe(v,Z,ee,de,k,h=>{Y.value=!1,h===Ee.Finished&&u()}):Oe(v,C,_,ce,k,h=>{Y.value=!1,h===Ee.Finished&&(se(K)||(L.value="hidden",y(P),i()))})))}return $(()=>{J([g],(O,c,v)=>{fe(v),G.value=!1},{immediate:!0})}),D(Fe,K),nt(f(()=>W(L.value,{visible:T.Open,hidden:T.Closed})|r.value)),()=>{let{appear:O,show:c,enter:v,enterFrom:h,enterTo:b,entered:te,leave:x,leaveFrom:xt,leaveTo:jt,...$e}=e,qe={ref:d},Ve={...$e,...m.value&&g.value&&re.isServer?{class:et([n.class,$e.class,...Z,...ee])}:{}};return R({theirProps:Ve,ourProps:qe,slot:{},slots:l,attrs:n,features:Ue,visible:L.value==="visible",name:"TransitionChild"})}}}),Mt=Ht,kt=H({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=Se(),r=f(()=>e.show===null&&a!==null?(a.value&T.Open)===T.Open:e.show);A(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=p(r.value?"visible":"hidden"),u=Ie(()=>{o.value="hidden"}),s=p(!0),i={show:r,appear:f(()=>e.appear||!s.value)};return $(()=>{A(()=>{s.value=!1,r.value?o.value="visible":se(u)||(o.value="hidden")})}),D(Fe,u),D(Te,i),()=>{let d=Xe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),E={unmount:e.unmount};return R({ourProps:{...E,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[F(Mt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...E,...d},l.default)]},attrs:{},features:Ue,visible:o.value==="visible",name:"Transition"})}}});export{kt as S,Vt as U,Wt as Y,nt as c,Ht as h,T as l,Ut as n,Se as p,qt as q,lt as y};
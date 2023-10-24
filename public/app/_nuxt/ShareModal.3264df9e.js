import{w as L,h as U,o as p,u as K,H as T,b as E,d as A,e as d,v as V,N as O,_ as F,O as q}from"./micro-task.545494b7.js";import{p as z,u as Y,x as H,a as I}from"./use-tracked-pointer.da07db6b.js";import{y as Q,c as W,l as P,p as J,q as X,h as N,U as Z,Y as $,S as G}from"./transition.d78ec031.js";import{b as ee}from"./use-resolve-button-type.137067df.js";import{a as D,B as x,e as S,aa as te,x as B,U as ae,aj as ne,am as w,a8 as oe,t as le,o as se,c as re,m as k,p as M,u as _,i as y}from"./entry.31e86c9c.js";import ue from"./Icon.1afaac6d.js";var ie=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(ie||{}),ce=(a=>(a[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a))(ce||{});function de(a){requestAnimationFrame(()=>requestAnimationFrame(a))}let j=Symbol("MenuContext");function C(a){let g=oe(j,null);if(g===null){let v=new Error(`<${a} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,C),v}return g}let Re=D({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(a,{slots:g,attrs:v}){let m=x(1),e=x(null),c=x(null),u=x([]),f=x(""),i=x(null),s=x(1);function t(o=r=>r){let r=i.value!==null?u.value[i.value]:null,n=q(o(u.value.slice()),h=>p(h.dataRef.domRef)),l=r?n.indexOf(r):null;return l===-1&&(l=null),{items:n,activeItemIndex:l}}let b={menuState:m,buttonRef:e,itemsRef:c,items:u,searchQuery:f,activeItemIndex:i,activationTrigger:s,closeMenu:()=>{m.value=1,i.value=null},openMenu:()=>m.value=0,goToItem(o,r,n){let l=t(),h=H(o===I.Specific?{focus:I.Specific,id:r}:{focus:o},{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:R=>R.id,resolveDisabled:R=>R.dataRef.disabled});f.value="",i.value=h,s.value=n??1,u.value=l.items},search(o){let r=f.value!==""?0:1;f.value+=o.toLowerCase();let n=(i.value!==null?u.value.slice(i.value+r).concat(u.value.slice(0,i.value+r)):u.value).find(h=>h.dataRef.textValue.startsWith(f.value)&&!h.dataRef.disabled),l=n?u.value.indexOf(n):-1;l===-1||l===i.value||(i.value=l,s.value=1)},clearSearch(){f.value=""},registerItem(o,r){let n=t(l=>[...l,{id:o,dataRef:r}]);u.value=n.items,i.value=n.activeItemIndex,s.value=1},unregisterItem(o){let r=t(n=>{let l=n.findIndex(h=>h.id===o);return l!==-1&&n.splice(l,1),n});u.value=r.items,i.value=r.activeItemIndex,s.value=1}};return Q([e,c],(o,r)=>{var n;b.closeMenu(),L(r,U.Loose)||(o.preventDefault(),(n=p(e))==null||n.focus())},S(()=>m.value===0)),te(j,b),W(S(()=>K(m.value,{[0]:P.Open,[1]:P.Closed}))),()=>{let o={open:m.value===0,close:b.closeMenu};return T({ourProps:{},theirProps:a,slot:o,slots:g,attrs:v,name:"Menu"})}}}),ke=D({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${E()}`}},setup(a,{attrs:g,slots:v,expose:m}){let e=C("MenuButton");m({el:e.buttonRef,$el:e.buttonRef});function c(s){switch(s.key){case d.Space:case d.Enter:case d.ArrowDown:s.preventDefault(),s.stopPropagation(),e.openMenu(),w(()=>{var t;(t=p(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(I.First)});break;case d.ArrowUp:s.preventDefault(),s.stopPropagation(),e.openMenu(),w(()=>{var t;(t=p(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(I.Last)});break}}function u(s){switch(s.key){case d.Space:s.preventDefault();break}}function f(s){a.disabled||(e.menuState.value===0?(e.closeMenu(),w(()=>{var t;return(t=p(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(s.preventDefault(),e.openMenu(),de(()=>{var t;return(t=p(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let i=ee(S(()=>({as:a.as,type:g.type})),e.buttonRef);return()=>{var s;let t={open:e.menuState.value===0},{id:b,...o}=a,r={ref:e.buttonRef,id:b,type:i.value,"aria-haspopup":"menu","aria-controls":(s=p(e.itemsRef))==null?void 0:s.id,"aria-expanded":a.disabled?void 0:e.menuState.value===0,onKeydown:c,onKeyup:u,onClick:f};return T({ourProps:r,theirProps:o,slot:t,attrs:g,slots:v,name:"MenuButton"})}}}),Pe=D({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${E()}`}},setup(a,{attrs:g,slots:v,expose:m}){let e=C("MenuItems"),c=x(null);m({el:e.itemsRef,$el:e.itemsRef}),z({container:S(()=>p(e.itemsRef)),enabled:S(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function u(t){var b;switch(c.value&&clearTimeout(c.value),t.key){case d.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case d.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let o=e.items.value[e.activeItemIndex.value];(b=p(o.dataRef.domRef))==null||b.click()}e.closeMenu(),F(p(e.buttonRef));break;case d.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(I.Next);case d.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(I.Previous);case d.Home:case d.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(I.First);case d.End:case d.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(I.Last);case d.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),w(()=>{var o;return(o=p(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case d.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),w(()=>V(p(e.buttonRef),t.shiftKey?O.Previous:O.Next));break;default:t.key.length===1&&(e.search(t.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}function f(t){switch(t.key){case d.Space:t.preventDefault();break}}let i=J(),s=S(()=>i!==null?(i.value&P.Open)===P.Open:e.menuState.value===0);return()=>{var t,b;let o={open:e.menuState.value===0},{id:r,...n}=a,l={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(b=p(e.buttonRef))==null?void 0:b.id,id:r,onKeydown:u,onKeyup:f,role:"menu",tabIndex:0,ref:e.itemsRef};return T({ourProps:l,theirProps:n,slot:o,attrs:g,slots:v,features:A.RenderStrategy|A.Static,visible:s.value,name:"MenuItems"})}}}),Te=D({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${E()}`}},setup(a,{slots:g,attrs:v,expose:m}){let e=C("MenuItem"),c=x(null);m({el:c,$el:c});let u=S(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===a.id:!1),f=S(()=>({disabled:a.disabled,textValue:"",domRef:c}));B(()=>{var n,l;let h=(l=(n=p(c))==null?void 0:n.textContent)==null?void 0:l.toLowerCase().trim();h!==void 0&&(f.value.textValue=h)}),B(()=>e.registerItem(a.id,f)),ae(()=>e.unregisterItem(a.id)),ne(()=>{e.menuState.value===0&&u.value&&e.activationTrigger.value!==0&&w(()=>{var n,l;return(l=(n=p(c))==null?void 0:n.scrollIntoView)==null?void 0:l.call(n,{block:"nearest"})})});function i(n){if(a.disabled)return n.preventDefault();e.closeMenu(),F(p(e.buttonRef))}function s(){if(a.disabled)return e.goToItem(I.Nothing);e.goToItem(I.Specific,a.id)}let t=Y();function b(n){t.update(n)}function o(n){t.wasMoved(n)&&(a.disabled||u.value||e.goToItem(I.Specific,a.id,0))}function r(n){t.wasMoved(n)&&(a.disabled||u.value&&e.goToItem(I.Nothing))}return()=>{let{disabled:n}=a,l={active:u.value,disabled:n,close:e.closeMenu},{id:h,...R}=a;return T({ourProps:{id:h,ref:c,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:s,onPointerenter:b,onMouseenter:b,onPointermove:o,onMousemove:o,onPointerleave:r,onMouseleave:r},theirProps:{...v,...R},slot:l,attrs:v,slots:g,name:"MenuItem"})}}});const pe=y("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ve={class:"fixed inset-0 overflow-y-auto"},me={class:"flex min-h-full items-center justify-center p-4 text-center"},fe={class:"flex flex-col gap-3"},be=["href"],ge={class:"flex items-center gap-2"},he={class:"grid place-items-center p-1 rounded-md"},Ie=y("div",null,"Whatsapp",-1),De={__name:"ShareModal",props:["show","user"],emits:["close"],setup(a,{emit:g}){const v=a,{user:m}=le(v);return(e,c)=>{const u=ue;return se(),re(_(G),{appear:"",show:v.show,as:"template"},{default:k(()=>[M(_(X),{as:"div",onClose:c[0]||(c[0]=f=>g("close")),class:"relative z-[999999]"},{default:k(()=>[M(_(N),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:k(()=>[pe]),_:1}),y("div",ve,[y("div",me,[M(_(N),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:k(()=>[M(_(Z),{class:"cflex gap-6 justify-center flex-col items-center max-w-md transform rounded-2xl bg-base-200 p-6 shadow-xl transition-all"},{default:k(()=>[M(_($),{as:"h3"}),y("div",fe,[y("a",{class:"flex w-full justify-between items-center rounded-md cursor-pointer p-1",href:`https://wa.me/?text=check my card by visiting this link : https://tagy.com/${_(m).name}`,target:"_blank"},[y("div",ge,[y("div",he,[M(u,{name:"logos:whatsapp-icon",size:"30"})]),Ie]),y("div",null,[M(u,{size:"20",name:"icon-park:right"})])],8,be)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}};export{Te as M,ke as S,De as _,Pe as b,Re as g};

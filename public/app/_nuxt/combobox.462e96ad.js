import{u as B,o as I,f as Z,K as $,a as ee,H as j,i as J,b as _,d as M,O as te,e as V}from"./micro-task.803692ba.js";import{x as oe,a as h,p as ae,u as le}from"./use-tracked-pointer.51a9263e.js";import{y as ne,c as ue,l as U,p as ie,n as re}from"./transition.23dd8b17.js";import{b as ve}from"./use-resolve-button-type.f024989c.js";import{B as D,e as x,a as L,ap as m,aa as se,x as G,G as H,z,F as pe,aj as q,U as de,am as F,a8 as ce}from"./entry.3fce29e1.js";function Q(t={},v=null,i=[]){for(let[R,e]of Object.entries(t))X(i,W(v,R),e);return i}function W(t,v){return t?t+"["+v+"]":v}function X(t,v,i){if(Array.isArray(i))for(let[R,e]of i.entries())X(t,W(v,R.toString()),e);else i instanceof Date?t.push([v,i.toISOString()]):typeof i=="boolean"?t.push([v,i?"1":"0"]):typeof i=="string"?t.push([v,i]):typeof i=="number"?t.push([v,`${i}`]):i==null?t.push([v,""]):Q(i,v,t)}function be(t,v,i){let R=D(i==null?void 0:i.value),e=x(()=>t.value!==void 0);return[x(()=>e.value?t.value:R.value),function(o){return e.value||(R.value=o),v==null?void 0:v(o)}]}function fe(t,v){return t===v}var me=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(me||{}),xe=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(xe||{}),ge=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(ge||{});let Y=Symbol("ComboboxContext");function K(t){let v=ce(Y,null);if(v===null){let i=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,K),i}return v}let Ie=L({name:"Combobox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>fe},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:v,attrs:i,emit:R}){let e=D(1),o=D(null),b=D(null),w=D(null),s=D(null),f=D({static:!1,hold:!1}),g=D([]),y=D(null),P=D(1),T=D(!1);function k(l=d=>d){let d=y.value!==null?g.value[y.value]:null,c=te(l(g.value.slice()),O=>I(O.dataRef.domRef)),u=d?c.indexOf(d):null;return u===-1&&(u=null),{options:c,activeOptionIndex:u}}let a=x(()=>t.multiple?1:0),n=x(()=>t.nullable),[p,C]=be(x(()=>t.modelValue===void 0?B(a.value,{[1]:[],[0]:void 0}):t.modelValue),l=>R("update:modelValue",l),x(()=>t.defaultValue)),r={comboboxState:e,value:p,mode:a,compare(l,d){if(typeof t.by=="string"){let c=t.by;return(l==null?void 0:l[c])===(d==null?void 0:d[c])}return t.by(l,d)},defaultValue:x(()=>t.defaultValue),nullable:n,inputRef:b,labelRef:o,buttonRef:w,optionsRef:s,disabled:x(()=>t.disabled),options:g,change(l){C(l)},activeOptionIndex:x(()=>{if(T.value&&y.value===null&&g.value.length>0){let l=g.value.findIndex(d=>!d.dataRef.disabled);if(l!==-1)return l}return y.value}),activationTrigger:P,optionsPropsRef:f,closeCombobox(){T.value=!1,!t.disabled&&e.value!==1&&(e.value=1,y.value=null)},openCombobox(){if(T.value=!0,t.disabled||e.value===0)return;let l=g.value.findIndex(d=>{let c=m(d.dataRef.value);return B(a.value,{[0]:()=>r.compare(m(r.value.value),m(c)),[1]:()=>m(r.value.value).some(u=>r.compare(m(u),m(c)))})});l!==-1&&(y.value=l),e.value=0},goToOption(l,d,c){if(T.value=!1,t.disabled||s.value&&!f.value.static&&e.value===1)return;let u=k();if(u.activeOptionIndex===null){let S=u.options.findIndex(N=>!N.dataRef.disabled);S!==-1&&(u.activeOptionIndex=S)}let O=oe(l===h.Specific?{focus:h.Specific,id:d}:{focus:l},{resolveItems:()=>u.options,resolveActiveIndex:()=>u.activeOptionIndex,resolveId:S=>S.id,resolveDisabled:S=>S.dataRef.disabled});y.value=O,P.value=c??1,g.value=u.options},selectOption(l){let d=g.value.find(u=>u.id===l);if(!d)return;let{dataRef:c}=d;C(B(a.value,{[0]:()=>c.value,[1]:()=>{let u=m(r.value.value).slice(),O=m(c.value),S=u.findIndex(N=>r.compare(O,m(N)));return S===-1?u.push(O):u.splice(S,1),u}}))},selectActiveOption(){if(r.activeOptionIndex.value===null)return;let{dataRef:l,id:d}=g.value[r.activeOptionIndex.value];C(B(a.value,{[0]:()=>l.value,[1]:()=>{let c=m(r.value.value).slice(),u=m(l.value),O=c.findIndex(S=>r.compare(u,m(S)));return O===-1?c.push(u):c.splice(O,1),c}})),r.goToOption(h.Specific,d)},registerOption(l,d){let c={id:l,dataRef:d},u=k(O=>[...O,c]);if(y.value===null){let O=d.value.value;B(a.value,{[0]:()=>r.compare(m(r.value.value),m(O)),[1]:()=>m(r.value.value).some(S=>r.compare(m(S),m(O)))})&&(u.activeOptionIndex=u.options.indexOf(c))}g.value=u.options,y.value=u.activeOptionIndex,P.value=1},unregisterOption(l){var d;r.activeOptionIndex.value!==null&&((d=r.options.value[r.activeOptionIndex.value])==null?void 0:d.id)===l&&(T.value=!0);let c=k(u=>{let O=u.findIndex(S=>S.id===l);return O!==-1&&u.splice(O,1),u});g.value=c.options,y.value=c.activeOptionIndex,P.value=1}};ne([b,w,s],()=>r.closeCombobox(),x(()=>e.value===0)),se(Y,r),ue(x(()=>B(e.value,{[0]:U.Open,[1]:U.Closed})));let A=x(()=>r.activeOptionIndex.value===null?null:g.value[r.activeOptionIndex.value].dataRef.value),E=x(()=>{var l;return(l=I(b))==null?void 0:l.closest("form")});return G(()=>{H([E],()=>{if(!E.value||t.defaultValue===void 0)return;function l(){r.change(t.defaultValue)}return E.value.addEventListener("reset",l),()=>{var d;(d=E.value)==null||d.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,disabled:d,form:c,...u}=t,O={open:e.value===0,disabled:d,activeIndex:r.activeOptionIndex.value,activeOption:A.value,value:p.value};return z(pe,[...l!=null&&p.value!=null?Q({[l]:p.value}).map(([S,N])=>z(Z,$({features:ee.Hidden,key:S,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:c,name:S,value:N}))):[],j({theirProps:{...i,...J(u,["modelValue","defaultValue","nullable","multiple","onUpdate:modelValue","by"])},ourProps:{},slot:O,slots:v,attrs:i,name:"Combobox"})])}}}),Ce=L({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-combobox-button-${_()}`}},setup(t,{attrs:v,slots:i,expose:R}){let e=K("ComboboxButton");R({el:e.buttonRef,$el:e.buttonRef});function o(s){e.disabled.value||(e.comboboxState.value===0?e.closeCombobox():(s.preventDefault(),e.openCombobox()),F(()=>{var f;return(f=I(e.inputRef))==null?void 0:f.focus({preventScroll:!0})}))}function b(s){switch(s.key){case V.ArrowDown:s.preventDefault(),s.stopPropagation(),e.comboboxState.value===1&&e.openCombobox(),F(()=>{var f;return(f=e.inputRef.value)==null?void 0:f.focus({preventScroll:!0})});return;case V.ArrowUp:s.preventDefault(),s.stopPropagation(),e.comboboxState.value===1&&(e.openCombobox(),F(()=>{e.value.value||e.goToOption(h.Last)})),F(()=>{var f;return(f=e.inputRef.value)==null?void 0:f.focus({preventScroll:!0})});return;case V.Escape:if(e.comboboxState.value!==0)return;s.preventDefault(),e.optionsRef.value&&!e.optionsPropsRef.value.static&&s.stopPropagation(),e.closeCombobox(),F(()=>{var f;return(f=e.inputRef.value)==null?void 0:f.focus({preventScroll:!0})});return}}let w=ve(x(()=>({as:t.as,type:v.type})),e.buttonRef);return()=>{var s,f;let g={open:e.comboboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:y,...P}=t,T={ref:e.buttonRef,id:y,type:w.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(s=I(e.optionsRef))==null?void 0:s.id,"aria-expanded":e.disabled.value?void 0:e.comboboxState.value===0,"aria-labelledby":e.labelRef.value?[(f=I(e.labelRef))==null?void 0:f.id,y].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:b,onClick:o};return j({ourProps:T,theirProps:P,slot:g,attrs:v,slots:i,name:"ComboboxButton"})}}}),Pe=L({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:()=>`headlessui-combobox-input-${_()}`}},emits:{change:t=>!0},setup(t,{emit:v,attrs:i,slots:R,expose:e}){let o=K("ComboboxInput"),b={value:!1};e({el:o.inputRef,$el:o.inputRef});let w=x(()=>{var a;let n=o.value.value;return I(o.inputRef)?typeof t.displayValue<"u"&&n!==void 0?(a=t.displayValue(n))!=null?a:"":typeof n=="string"?n:"":""});G(()=>{H([w,o.comboboxState],([a,n],[p,C])=>{if(b.value)return;let r=I(o.inputRef);r&&(C===0&&n===1||a!==p)&&(r.value=a)},{immediate:!0}),H([o.comboboxState],([a],[n])=>{if(a===0&&n===1){let p=I(o.inputRef);if(!p)return;let C=p.value,{selectionStart:r,selectionEnd:A,selectionDirection:E}=p;p.value="",p.value=C,E!==null?p.setSelectionRange(r,A,E):p.setSelectionRange(r,A)}})});let s=D(!1);function f(){s.value=!0}function g(){setTimeout(()=>{s.value=!1})}function y(a){switch(b.value=!0,a.key){case V.Backspace:case V.Delete:if(o.mode.value!==0||!o.nullable.value)return;let n=a.currentTarget;requestAnimationFrame(()=>{if(n.value===""){o.change(null);let p=I(o.optionsRef);p&&(p.scrollTop=0),o.goToOption(h.Nothing)}});break;case V.Enter:if(b.value=!1,o.comboboxState.value!==0||s.value)return;if(a.preventDefault(),a.stopPropagation(),o.activeOptionIndex.value===null){o.closeCombobox();return}o.selectActiveOption(),o.mode.value===0&&o.closeCombobox();break;case V.ArrowDown:return b.value=!1,a.preventDefault(),a.stopPropagation(),B(o.comboboxState.value,{[0]:()=>o.goToOption(h.Next),[1]:()=>o.openCombobox()});case V.ArrowUp:return b.value=!1,a.preventDefault(),a.stopPropagation(),B(o.comboboxState.value,{[0]:()=>o.goToOption(h.Previous),[1]:()=>{o.openCombobox(),F(()=>{o.value.value||o.goToOption(h.Last)})}});case V.Home:if(a.shiftKey)break;return b.value=!1,a.preventDefault(),a.stopPropagation(),o.goToOption(h.First);case V.PageUp:return b.value=!1,a.preventDefault(),a.stopPropagation(),o.goToOption(h.First);case V.End:if(a.shiftKey)break;return b.value=!1,a.preventDefault(),a.stopPropagation(),o.goToOption(h.Last);case V.PageDown:return b.value=!1,a.preventDefault(),a.stopPropagation(),o.goToOption(h.Last);case V.Escape:if(b.value=!1,o.comboboxState.value!==0)return;a.preventDefault(),o.optionsRef.value&&!o.optionsPropsRef.value.static&&a.stopPropagation(),o.closeCombobox();break;case V.Tab:if(b.value=!1,o.comboboxState.value!==0)return;o.mode.value===0&&o.selectActiveOption(),o.closeCombobox();break}}function P(a){o.openCombobox(),v("change",a)}function T(){b.value=!1}let k=x(()=>{var a,n,p,C;return(C=(p=(n=t.defaultValue)!=null?n:o.defaultValue.value!==void 0?(a=t.displayValue)==null?void 0:a.call(t,o.defaultValue.value):null)!=null?p:o.defaultValue.value)!=null?C:""});return()=>{var a,n,p,C,r,A;let E={open:o.comboboxState.value===0},{id:l,displayValue:d,onChange:c,...u}=t,O={"aria-controls":(a=o.optionsRef.value)==null?void 0:a.id,"aria-expanded":o.disabled.value?void 0:o.comboboxState.value===0,"aria-activedescendant":o.activeOptionIndex.value===null||(n=o.options.value[o.activeOptionIndex.value])==null?void 0:n.id,"aria-labelledby":(r=(p=I(o.labelRef))==null?void 0:p.id)!=null?r:(C=I(o.buttonRef))==null?void 0:C.id,"aria-autocomplete":"list",id:l,onCompositionstart:f,onCompositionend:g,onKeydown:y,onInput:P,onBlur:T,role:"combobox",type:(A=i.type)!=null?A:"text",tabIndex:0,ref:o.inputRef,defaultValue:k.value,disabled:o.disabled.value===!0?!0:void 0};return j({ourProps:O,theirProps:u,slot:E,attrs:i,slots:R,features:M.RenderStrategy|M.Static,name:"ComboboxInput"})}}}),Te=L({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(t,{attrs:v,slots:i,expose:R}){let e=K("ComboboxOptions"),o=`headlessui-combobox-options-${_()}`;R({el:e.optionsRef,$el:e.optionsRef}),q(()=>{e.optionsPropsRef.value.static=t.static}),q(()=>{e.optionsPropsRef.value.hold=t.hold});let b=ie(),w=x(()=>b!==null?(b.value&U.Open)===U.Open:e.comboboxState.value===0);return ae({container:x(()=>I(e.optionsRef)),enabled:x(()=>e.comboboxState.value===0),accept(s){return s.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}}),()=>{var s,f,g;let y={open:e.comboboxState.value===0},P={"aria-labelledby":(g=(s=I(e.labelRef))==null?void 0:s.id)!=null?g:(f=I(e.buttonRef))==null?void 0:f.id,id:o,ref:e.optionsRef,role:"listbox","aria-multiselectable":e.mode.value===1?!0:void 0},T=J(t,["hold"]);return j({ourProps:P,theirProps:T,slot:y,attrs:v,slots:i,features:M.RenderStrategy|M.Static,visible:w.value,name:"ComboboxOptions"})}}}),Ve=L({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:v,attrs:i,expose:R}){let e=K("ComboboxOption"),o=`headlessui-combobox-option-${_()}`,b=D(null);R({el:b,$el:b});let w=x(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===o:!1),s=x(()=>B(e.mode.value,{[0]:()=>e.compare(m(e.value.value),m(t.value)),[1]:()=>m(e.value.value).some(n=>e.compare(m(n),m(t.value)))})),f=x(()=>({disabled:t.disabled,value:t.value,domRef:b}));G(()=>e.registerOption(o,f)),de(()=>e.unregisterOption(o)),q(()=>{e.comboboxState.value===0&&w.value&&e.activationTrigger.value!==0&&F(()=>{var n,p;return(p=(n=I(b))==null?void 0:n.scrollIntoView)==null?void 0:p.call(n,{block:"nearest"})})});function g(n){if(t.disabled)return n.preventDefault();e.selectOption(o),e.mode.value===0&&e.closeCombobox(),re()||requestAnimationFrame(()=>{var p;return(p=I(e.inputRef))==null?void 0:p.focus()})}function y(){if(t.disabled)return e.goToOption(h.Nothing);e.goToOption(h.Specific,o)}let P=le();function T(n){P.update(n)}function k(n){P.wasMoved(n)&&(t.disabled||w.value||e.goToOption(h.Specific,o,0))}function a(n){P.wasMoved(n)&&(t.disabled||w.value&&(e.optionsPropsRef.value.hold||e.goToOption(h.Nothing)))}return()=>{let{disabled:n}=t,p={active:w.value,selected:s.value,disabled:n},C={id:o,ref:b,role:"option",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,"aria-selected":s.value,disabled:void 0,onClick:g,onFocus:y,onPointerenter:T,onMouseenter:T,onPointermove:k,onMousemove:k,onPointerleave:a,onMouseleave:a};return j({ourProps:C,theirProps:t,slot:p,attrs:i,slots:v,name:"ComboboxOption"})}}});export{Pe as $,Ce as K,Ie as N,Te as U,Ve as _};

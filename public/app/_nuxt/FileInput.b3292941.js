import{B as i,e as d,o as p,f as m,i as o,K as f}from"./entry.6ed29bba.js";const V={__name:"FileInput",props:["modelValue"],emits:["update:modelValue"],setup(a,{emit:n}){const s=a,l=i(null);function u(){var e,t;(t=(e=l==null?void 0:l.value)==null?void 0:e.click)==null||t.call(e)}function r(e){c.value=e.target.files[0]}const c=d({get:()=>s.modelValue,set:e=>n("update:modelValue",e)});return(e,t)=>(p(),m("div",null,[o("div",{onClick:u},[f(e.$slots,"default")]),o("input",{type:"file",name:"",class:"hidden",id:"",onChange:r,ref_key:"input",ref:l},null,544)]))}};export{V as _};

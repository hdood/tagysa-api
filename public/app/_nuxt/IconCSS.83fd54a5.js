import{a as m,b as d,e as o,o as f,f as x,h as S,u as c}from"./entry.65f15cac.js";import{u as z}from"./config.9f98906d.js";import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var a;const s=_;d(n=>({"71ded496":c(l)}));const e=z();(a=e==null?void 0:e.nuxtIcon)!=null&&a.aliases;const p=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),l=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),r=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:c(r),height:c(r)})},null,4))}});const g=I(y,[["__scopeId","data-v-11604bcf"]]);export{g as default};
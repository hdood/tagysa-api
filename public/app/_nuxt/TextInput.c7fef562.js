import h from"./Icon.1a64df84.js";import{V as y,e as b,o as l,f as i,i as t,A as c,O as g,ak as k,u as o,P as v,r as w,c as B,D as u}from"./entry.8d13c2a4.js";const D={class:"form-control w-full"},S={class:"label"},T={class:"label-text"},V={class:"flex items-center flex-wrap lg:flex-nowrap"},C=["id","placeholder","maxlength","type"],N={key:0,class:"label"},R={class:"label-text-alt text-error"},M={__name:"TextInput",props:["input","placeholder","max","inputType","error","prepend-icon","inputStyle","label","size"],emits:["update:input"],setup(d,{emit:m}){const e=d,{input:_,placeholder:n,max:z,inputType:A,error:p}=y(e),s=b({get:()=>_.value,set:a=>m("update:input",a)});return(a,r)=>{const f=h;return l(),i("div",D,[t("label",S,[t("span",T,c(e.label),1)]),t("div",V,[g(t("input",{id:o(n),placeholder:o(n),maxlength:String(e.max),class:"input input-bordered w-full input-primary",type:e.inputType,"onUpdate:modelValue":r[0]||(r[0]=x=>v(s)?s.value=x:null),autocomplete:"off"},null,8,C),[[k,o(s)]]),w(a.$slots,"after"),e["prepend-icon"]?(l(),B(f,{key:0,name:e["prepend-icon"]},null,8,["name"])):u("",!0)]),o(p)?(l(),i("label",N,[t("span",R,c(o(p)),1)])):u("",!0)])}}};export{M as _};

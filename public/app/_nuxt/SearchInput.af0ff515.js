import{A as V,B as c,G as d,o as l,c as m,m as n,i as p,p as v,u as o,k as C,f,q as g,F as N,r as $,K as B}from"./entry.5b04ea27.js";import{$ as S,U as F,_ as T,N as U}from"./combobox.ed90b5fe.js";import{S as q}from"./transition.436386a3.js";const z={class:"relative mt-1"},A={key:0,class:"relative cursor-default select-none py-2 px-4 text-base-content"},I={__name:"SearchInput",props:["comboboxClasses"],emits:["select"],setup(x,{emit:y}){const w=x,b=V().provide.axios,r=c([]),u=c(),s=c(""),h=_(async()=>{r.value=[];try{const a=await b.get(`/api/users/search/${s.value}`);r.value=a.data.data??[]}catch(a){console.error("something wend wrong",a)}},500);function _(a,t=300){let e;return(...i)=>{clearTimeout(e),e=setTimeout(()=>{a.apply(this,i)},t)}}return d(s,h),d(u,a=>{y("select",a)}),(a,t)=>(l(),m(o(U),{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e)},{default:n(()=>[p("div",z,[p("div",null,[v(o(S),{class:"input input-bordered input-primary input-sm max-w-lg w-full",displayValue:e=>e.name,onChange:t[0]||(t[0]=e=>s.value=e.target.value)},null,8,["displayValue"])]),v(o(q),{leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",onAfterLeave:t[1]||(t[1]=e=>s.value="")},{default:n(()=>[s.value!=""?(l(),m(o(F),{key:0,class:C(["absolute mt-4 -left-14 lg:left-0 max-h-60 max-w-md min-w-[17rem] lg:min-w-[15rem] flex flex-col overflow-auto rounded-md bg-base-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50",[w.comboboxClasses]])},{default:n(()=>[r.value.length===0&&s.value!==""?(l(),f("div",A," Nothing found. ")):g("",!0),(l(!0),f(N,null,$(r.value,e=>(l(),m(o(T),{as:"div",key:e.id,value:e,class:"w-full"},{default:n(({selected:i,active:k})=>[B(a.$slots,"default",{user:e,active:k,selected:i})]),_:2},1032,["value"]))),128))]),_:3},8,["class"])):g("",!0)]),_:3})])]),_:3},8,["modelValue"]))}};export{I as _};

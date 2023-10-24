import{_ as F}from"./TextInput.8846b364.js";import{_ as V}from"./Button.vue.650e005c.js";import{D as $,s as C,J as L,a3 as M,A as j,B as t,x as I,e as P,o as R,f as E,i as l,p as x,u as e,L as g,w as J,M as q,j as z,m as G,y as H}from"./entry.6ed29bba.js";import"./Icon.30ff5d8a.js";import"./config.7dd18642.js";import"./_plugin-vue_export-helper.c27b6911.js";const K={id:"ProfileSection",class:"w-full bg-base-200 rounded-lg"},O={class:"w-full rounded-3xl p-6"},Q={for:"bio",class:"flex flex-col mt-5 gap-1"},W=l("span",{class:"text-sm font-medium"},"About me",-1),X={class:"flex items-center justify-end text-[#676B5F] text-[13px]"},Y={class:"w-full"},ne={__name:"BioSection",setup(Z){const v=$(),{user:n}=C(v),{successNotification:B}=L(),S=M(),T=j(S).provide.axios,f=t(!1),c=t(!1),d=t(""),p=t(""),o=t(""),u=t(""),i=t(""),m=t(!1),a=t({});I(()=>{D()});function D(){d.value=n.value.name,p.value=d.value,o.value=n.value.bio,u.value=n.value.designation,i.value=n.value.full_name}const U=async()=>{var _;if(a.value=[],p.value==d.value&&m.value){c.value=!1,m.value=!1;return}if(p.value.includes(" ")&&m.value){c.value=!1,a.value.name=["username must contain only letters and _"];return}try{c.value=!0,f.value=!0,await T.patch(`/api/users/${n.value.id}`,{name:p.value,bio:o.value,full_name:i.value,designation:u.value}),await v.getUser(),d.value=n.value.name,B("bio content updated successfully"),v.refreshFrame(),m.value=!1}catch(s){a.value=(_=s.response.data)==null?void 0:_.errors}c.value=!1,f.value=!1},k=P(()=>o.value?o.value.length:0);return(_,s)=>{var y,h,w,N;const b=F,A=V;return R(),E("div",K,[l("div",O,[l("div",null,[x(b,{class:"mt-4",placeholder:"Full Name",input:e(i),"onUpdate:input":s[0]||(s[0]=r=>g(i)?i.value=r:null),rounded:!0,label:"Full Name",inputType:"text",error:e(a)&&((y=e(a))!=null&&y.full_name)?(h=e(a))==null?void 0:h.full_name[0]:""},null,8,["input","error"])]),l("div",null,[x(b,{class:"mt-4",placeholder:"Designation",input:e(u),"onUpdate:input":s[1]||(s[1]=r=>g(u)?u.value=r:null),rounded:!0,label:"Designation",inputType:"text",error:e(a)&&((w=e(a))!=null&&w.designation)?(N=e(a))==null?void 0:N.designation[0]:""},null,8,["input","error"])]),l("label",Q,[W,J(l("textarea",{class:"textarea textarea-primary text-sm w-full py-3.5 px-3",placeholder:"About me","onUpdate:modelValue":s[2]||(s[2]=r=>g(o)?o.value=r:null),rows:"4",maxlength:"300",id:"bio"},null,512),[[q,e(o)]])]),l("div",X,z(e(k))+"/300",1),l("div",Y,[x(A,{type:"primary",onClick:U,loading:e(f),class:"p-2 w-44 block mx-auto"},{default:G(()=>[H(" Save Bio ")]),_:1},8,["loading"])])])])}}};export{ne as default};

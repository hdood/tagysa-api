import C from"./Icon.6db7af4e.js";import{a as N,o as d,f as v,c as y,S as V,q as B,i as p,K as j,k as A,u as O}from"./entry.7d81f6f8.js";function k(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=k(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function S(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=k(e))&&(r&&(r+=" "),r+=n);return r}const g=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,b=S,z=(e,n)=>t=>{var r;if((n==null?void 0:n.variants)==null)return b(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:c,defaultVariants:o}=n,h=Object.keys(c).map(a=>{const i=t==null?void 0:t[a],l=o==null?void 0:o[a];if(i===null)return null;const s=g(i)||g(l);return c[a][s]}),f=t&&Object.entries(t).reduce((a,i)=>{let[l,s]=i;return s===void 0||(a[l]=s),a},{}),_=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((a,i)=>{let{class:l,className:s,...x}=i;return Object.entries(x).every(w=>{let[m,u]=w;return Array.isArray(u)?u.includes({...o,...f}[m]):{...o,...f}[m]===u})?[...a,l,s]:a},[]);return b(e,h,_,t==null?void 0:t.class,t==null?void 0:t.className)},K={key:1},D=N({__name:"Button",props:{type:{},icon:{},loading:{type:Boolean}},setup(e){const n=e,t=z(["rounded-md  focus:outline-none hover:shadow"],{variants:{type:{disabled:["btn btn-disabled cursor-not-allowed"],"danger-light":["bg-gradient-to-r from-red-200 to-red-300  dark:from-red-600 dark:to-red-700 dark:fill-red-100  fill-red-700 text-red-700  dark:text-white  active:translate-y-1 focus:ring-4 focus:ring-rose-300 transition-all"],danger:"btn btn-error",success:"btn btn-success text-success-content","light-success":"bg-gradient-to-r from-green-200 to-green-300  dark:from-green-600 dark:to-green-700 dark:fill-emerald-100 fill-green-600 text-green-600 dark:text-white  active:translate-y-1 focus:ring-4 focus:ring-emerald-300 transition-all",info:"btn btn-info",primary:"btn btn-primary text-white fill-white","card-danger":"bg-white fill-white active:translate-y-1 transition-all text-red-900 focus:ring-indigo-300 ","card-info":"bg-white fill-white active:translate-y-1 transition-all text-blue-900 focus:ring-indigo-300 ","primary-content":"btn btn-primary-content text-primary",accent:"btn btn-accent"}}});return(r,c)=>{const o=C;return d(),v("button",{class:A(O(t)({type:n.type}))},[r.loading?(d(),y(o,{key:0,name:"eos-icons:loading",size:"25"})):(d(),v("div",K,[n.icon?(d(),y(V(n.icon),{key:0})):B("",!0),p("span",null,[j(r.$slots,"default")])]))],2)}}});export{D as _};

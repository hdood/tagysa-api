import{A as n,v as c,B as i,x as d,o as s,f as t,u as l,C as u}from"./entry.7d81f6f8.js";const p={class:"min-h-screen"},m={key:0,class:"bg-white p-6 md:mx-auto"},y=u('<svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6"><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path></svg><div class="text-center"><h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center"> Payment Done! </h3><p class="text-gray-600 my-2"> Thank you for completing your secure online payment. </p><p class="text-gray-600 my-2">Our team will look into your order.</p><p>Have a great day!</p><div class="py-10 text-center"><a href="/admin/nfc/orders" class="btn btn-primary"> My Orders </a></div></div>',2),x=[y],_={key:1},g={__name:"checkout-success",setup(h){const o=n().provide.axios,r=c().query.session_id,e=i(!1);return d(async()=>{try{const a=await o(`/api/stripe/session/${r}`);e.value=!0}catch{e.value=!1}}),(a,v)=>(s(),t("div",p,[l(e)?(s(),t("div",m,x)):(s(),t("div",_,"Not Found"))]))}};export{g as default};

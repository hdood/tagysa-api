const a={en:{cards:"Cards",noCards:"Your account is not linked to any cards yet!",linkCard:"Link Card",profile:"Profile",dashboard:"Dashboard"},ar:{cards:"البطاقات",noCards:"حسابك غير مرتبط بأي بطاقات حتى الآن!",linkCard:"اربط بطاقة",profile:"الحساب",dashboard:"الداشبورد"}},r=()=>({legacy:!1,locale:localStorage.getItem("vkey-locale")!="ar"?"en":"ar",fallbackLocale:"ar",messages:a});export{r as default};
import Vt from"./Icon.30ff5d8a.js";import{_ as Ht}from"./Button.vue.650e005c.js";import{q as _t,h as q,U as bt,S as At,Y as Kt}from"./transition.1bc90d91.js";import{B as G,o as k,c as H,m as T,p as b,u as N,i as E,y as Jt,J as jt,t as Yt,f as rt,W as Ot}from"./entry.6ed29bba.js";var j={},Qt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},vt={},I={};let ht;const Gt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];I.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};I.getSymbolTotalCodewords=function(t){return Gt[t]};I.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};I.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ht=t};I.isKanjiModeEnabled=function(){return typeof ht<"u"};I.toSJIS=function(t){return ht(t)};var X={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(X);function Nt(){this.buffer=[],this.length=0}Nt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var qt=Nt;function Y(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Y.prototype.set=function(e,t,i,r){const o=e*this.size+t;this.data[o]=i,r&&(this.reservedBit[o]=!0)};Y.prototype.get=function(e,t){return this.data[e*this.size+t]};Y.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};Y.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Wt=Y,Tt={};(function(e){const t=I.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([n[a],n[c]]);return o}})(Tt);var It={};const Zt=I.getSymbolSize,Ct=7;It.getPositions=function(t){const i=Zt(t);return[[0,0],[i-Ct,0],[0,i-Ct]]};var Mt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,c=0,l=null,u=null;for(let C=0;C<n;C++){a=c=0,l=u=null;for(let f=0;f<n;f++){let d=o.get(C,f);d===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=d,a=1),d=o.get(f,C),d===u?c++:(c>=5&&(s+=t.N1+(c-5)),u=d,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let c=0;c<n-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,c=0;for(let l=0;l<n;l++){a=c=0;for(let u=0;u<n;u++)a=a<<1&2047|o.get(l,u),u>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(u,l),u>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let c=0;c<s;c++)n+=o.data[c];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)n.isReserved(c,a)||n.xor(c,a,i(o,c,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){n(l),e.applyMask(l,o);const u=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),u<c&&(c=u,a=l)}return a}})(Mt);var tt={};const D=X,O=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Q=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];tt.getBlocksCount=function(t,i){switch(i){case D.L:return O[(t-1)*4+0];case D.M:return O[(t-1)*4+1];case D.Q:return O[(t-1)*4+2];case D.H:return O[(t-1)*4+3];default:return}};tt.getTotalCodewordsCount=function(t,i){switch(i){case D.L:return Q[(t-1)*4+0];case D.M:return Q[(t-1)*4+1];case D.Q:return Q[(t-1)*4+2];case D.H:return Q[(t-1)*4+3];default:return}};var St={},et={};const K=new Uint8Array(512),W=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)K[i]=t,W[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)K[i]=K[i-255]})();et.log=function(t){if(t<1)throw new Error("log("+t+")");return W[t]};et.exp=function(t){return K[t]};et.mul=function(t,i){return t===0||i===0?0:K[W[t]+W[i]]};(function(e){const t=et;e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let c=0;c<o.length;c++)n[c]^=t.mul(o[c],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(St);const Pt=St;function mt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}mt.prototype.initialize=function(t){this.degree=t,this.genPoly=Pt.generateECPolynomial(this.degree)};mt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const r=Pt.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var Xt=mt,Rt={},U={},wt={};wt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var P={};const Lt="[0-9]+",te="[A-Z $%*+\\-./:]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const ee="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+`)(?:.|[\r
]))+`;P.KANJI=new RegExp(J,"g");P.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");P.BYTE=new RegExp(ee,"g");P.NUMERIC=new RegExp(Lt,"g");P.ALPHANUMERIC=new RegExp(te,"g");const ne=new RegExp("^"+J+"$"),oe=new RegExp("^"+Lt+"$"),re=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");P.testKanji=function(t){return ne.test(t)};P.testNumeric=function(t){return oe.test(t)};P.testAlphanumeric=function(t){return re.test(t)};(function(e){const t=wt,i=P;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(U);(function(e){const t=I,i=tt,r=X,o=U,n=wt,s=7973,a=t.getBCHDigit(s);function c(f,d,w){for(let p=1;p<=40;p++)if(d<=e.getCapacity(p,w,f))return p}function l(f,d){return o.getCharCountIndicator(f,d)+4}function u(f,d){let w=0;return f.forEach(function(p){const v=l(p.mode,d);w+=v+p.getBitsLength()}),w}function C(f,d){for(let w=1;w<=40;w++)if(u(f,w)<=e.getCapacity(w,d,o.MIXED))return w}e.from=function(d,w){return n.isValid(d)?parseInt(d,10):w},e.getCapacity=function(d,w,p){if(!n.isValid(d))throw new Error("Invalid QR Code version");typeof p>"u"&&(p=o.BYTE);const v=t.getSymbolTotalCodewords(d),m=i.getTotalCodewordsCount(d,w),y=(v-m)*8;if(p===o.MIXED)return y;const h=y-l(p,d);switch(p){case o.NUMERIC:return Math.floor(h/10*3);case o.ALPHANUMERIC:return Math.floor(h/11*2);case o.KANJI:return Math.floor(h/13);case o.BYTE:default:return Math.floor(h/8)}},e.getBestVersionForData=function(d,w){let p;const v=r.from(w,r.M);if(Array.isArray(d)){if(d.length>1)return C(d,v);if(d.length===0)return 1;p=d[0]}else p=d;return c(p.mode,p.getLength(),v)},e.getEncodedBits=function(d){if(!n.isValid(d)||d<7)throw new Error("Invalid QR Code version");let w=d<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return d<<12|w}})(Rt);var kt={};const ut=I,Dt=1335,ie=21522,Et=ut.getBCHDigit(Dt);kt.getEncodedBits=function(t,i){const r=t.bit<<3|i;let o=r<<10;for(;ut.getBCHDigit(o)-Et>=0;)o^=Dt<<ut.getBCHDigit(o)-Et;return(r<<10|o)^ie};var Ut={};const se=U;function F(e){this.mode=se.NUMERIC,this.data=e.toString()}F.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};F.prototype.getLength=function(){return this.data.length};F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)};F.prototype.write=function(t){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),t.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),t.put(o,n*3+1))};var ae=F;const ce=U,it=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function z(e){this.mode=ce.ALPHANUMERIC,this.data=e}z.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let r=it.indexOf(this.data[i])*45;r+=it.indexOf(this.data[i+1]),t.put(r,11)}this.data.length%2&&t.put(it.indexOf(this.data[i]),6)};var le=z,ue=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const fe=ue,de=U;function x(e){this.mode=de.BYTE,typeof e=="string"&&(e=fe(e)),this.data=new Uint8Array(e)}x.getBitsLength=function(t){return t*8};x.prototype.getLength=function(){return this.data.length};x.prototype.getBitsLength=function(){return x.getBitsLength(this.data.length)};x.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var ge=x;const he=U,me=I;function $(e){this.mode=he.KANJI,this.data=e}$.getBitsLength=function(t){return t*13};$.prototype.getLength=function(){return this.data.length};$.prototype.getBitsLength=function(){return $.getBitsLength(this.data.length)};$.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=me.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var we=$,Ft={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,r,o){var n={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var c,l,u,C,f,d,w,p,v;!a.empty();){c=a.pop(),l=c.value,C=c.cost,f=i[l]||{};for(u in f)f.hasOwnProperty(u)&&(d=f[u],w=C+d,p=s[u],v=typeof s[u]>"u",(v||p>w)&&(s[u]=w,a.push(u,w),n[u]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var m=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(m)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=t.single_source_shortest_paths(i,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=t.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ft);var pe=Ft.exports;(function(e){const t=U,i=ae,r=le,o=ge,n=we,s=P,a=I,c=pe;function l(m){return unescape(encodeURIComponent(m)).length}function u(m,y,h){const g=[];let B;for(;(B=m.exec(h))!==null;)g.push({data:B[0],index:B.index,mode:y,length:B[0].length});return g}function C(m){const y=u(s.NUMERIC,t.NUMERIC,m),h=u(s.ALPHANUMERIC,t.ALPHANUMERIC,m);let g,B;return a.isKanjiModeEnabled()?(g=u(s.BYTE,t.BYTE,m),B=u(s.KANJI,t.KANJI,m)):(g=u(s.BYTE_KANJI,t.BYTE,m),B=[]),y.concat(h,g,B).sort(function(A,M){return A.index-M.index}).map(function(A){return{data:A.data,mode:A.mode,length:A.length}})}function f(m,y){switch(y){case t.NUMERIC:return i.getBitsLength(m);case t.ALPHANUMERIC:return r.getBitsLength(m);case t.KANJI:return n.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function d(m){return m.reduce(function(y,h){const g=y.length-1>=0?y[y.length-1]:null;return g&&g.mode===h.mode?(y[y.length-1].data+=h.data,y):(y.push(h),y)},[])}function w(m){const y=[];for(let h=0;h<m.length;h++){const g=m[h];switch(g.mode){case t.NUMERIC:y.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:y.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:y.push([g,{data:g.data,mode:t.BYTE,length:l(g.data)}]);break;case t.BYTE:y.push([{data:g.data,mode:t.BYTE,length:l(g.data)}])}}return y}function p(m,y){const h={},g={start:{}};let B=["start"];for(let _=0;_<m.length;_++){const A=m[_],M=[];for(let L=0;L<A.length;L++){const S=A[L],V=""+_+L;M.push(V),h[V]={node:S,lastCount:0},g[V]={};for(let ot=0;ot<B.length;ot++){const R=B[ot];h[R]&&h[R].node.mode===S.mode?(g[R][V]=f(h[R].lastCount+S.length,S.mode)-f(h[R].lastCount,S.mode),h[R].lastCount+=S.length):(h[R]&&(h[R].lastCount=S.length),g[R][V]=f(S.length,S.mode)+4+t.getCharCountIndicator(S.mode,y))}}B=M}for(let _=0;_<B.length;_++)g[B[_]].end=0;return{map:g,table:h}}function v(m,y){let h;const g=t.getBestModeForData(m);if(h=t.from(y,g),h!==t.BYTE&&h.bit<g.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(h)+`.
 Suggested mode is: `+t.toString(g));switch(h===t.KANJI&&!a.isKanjiModeEnabled()&&(h=t.BYTE),h){case t.NUMERIC:return new i(m);case t.ALPHANUMERIC:return new r(m);case t.KANJI:return new n(m);case t.BYTE:return new o(m)}}e.fromArray=function(y){return y.reduce(function(h,g){return typeof g=="string"?h.push(v(g,null)):g.data&&h.push(v(g.data,g.mode)),h},[])},e.fromString=function(y,h){const g=C(y,a.isKanjiModeEnabled()),B=w(g),_=p(B,h),A=c.find_path(_.map,"start","end"),M=[];for(let L=1;L<A.length-1;L++)M.push(_.table[A[L]].node);return e.fromArray(d(M))},e.rawSplit=function(y){return e.fromArray(C(y,a.isKanjiModeEnabled()))}})(Ut);const nt=I,st=X,ye=qt,Ce=Wt,Ee=Tt,Be=It,ft=Mt,dt=tt,_e=Xt,Z=Rt,be=kt,Ae=U,at=Ut;function ve(e,t){const i=e.size,r=Be.getPositions(t);for(let o=0;o<r.length;o++){const n=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||i<=n+a))for(let c=-1;c<=7;c++)s+c<=-1||i<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?e.set(n+a,s+c,!0,!0):e.set(n+a,s+c,!1,!0))}}function Ne(e){const t=e.size;for(let i=8;i<t-8;i++){const r=i%2===0;e.set(i,6,r,!0),e.set(6,i,r,!0)}}function Te(e,t){const i=Ee.getPositions(t);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,n+a,!0,!0):e.set(o+s,n+a,!1,!0)}}function Ie(e,t){const i=e.size,r=Z.getEncodedBits(t);let o,n,s;for(let a=0;a<18;a++)o=Math.floor(a/3),n=a%3+i-8-3,s=(r>>a&1)===1,e.set(o,n,s,!0),e.set(n,o,s,!0)}function ct(e,t,i){const r=e.size,o=be.getEncodedBits(t,i);let n,s;for(n=0;n<15;n++)s=(o>>n&1)===1,n<6?e.set(n,8,s,!0):n<8?e.set(n+1,8,s,!0):e.set(r-15+n,8,s,!0),n<8?e.set(8,r-n-1,s,!0):n<9?e.set(8,15-n-1+1,s,!0):e.set(8,15-n-1,s,!0);e.set(r-8,8,1,!0)}function Me(e,t){const i=e.size;let r=-1,o=i-1,n=7,s=0;for(let a=i-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!e.isReserved(o,a-c)){let l=!1;s<t.length&&(l=(t[s]>>>n&1)===1),e.set(o,a-c,l),n--,n===-1&&(s++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Se(e,t,i){const r=new ye;i.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),Ae.getCharCountIndicator(c.mode,e)),c.write(r)});const o=nt.getSymbolTotalCodewords(e),n=dt.getTotalCodewordsCount(e,t),s=(o-n)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return Pe(r,e,t)}function Pe(e,t,i){const r=nt.getSymbolTotalCodewords(t),o=dt.getTotalCodewordsCount(t,i),n=r-o,s=dt.getBlocksCount(t,i),a=r%s,c=s-a,l=Math.floor(r/s),u=Math.floor(n/s),C=u+1,f=l-u,d=new _e(f);let w=0;const p=new Array(s),v=new Array(s);let m=0;const y=new Uint8Array(e.buffer);for(let A=0;A<s;A++){const M=A<c?u:C;p[A]=y.slice(w,w+M),v[A]=d.encode(p[A]),w+=M,m=Math.max(m,M)}const h=new Uint8Array(r);let g=0,B,_;for(B=0;B<m;B++)for(_=0;_<s;_++)B<p[_].length&&(h[g++]=p[_][B]);for(B=0;B<f;B++)for(_=0;_<s;_++)h[g++]=v[_][B];return h}function Re(e,t,i,r){let o;if(Array.isArray(e))o=at.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const u=at.rawSplit(e);l=Z.getBestVersionForData(u,i)}o=at.fromString(e,l||40)}else throw new Error("Invalid data");const n=Z.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const s=Se(t,i,o),a=nt.getSymbolSize(t),c=new Ce(a);return ve(c,t),Ne(c),Te(c,t),ct(c,i,0),t>=7&&Ie(c,t),Me(c,s),isNaN(r)&&(r=ft.getBestMask(c,ct.bind(null,c,i))),ft.applyMask(r,c),ct(c,i,r),{modules:c,version:t,errorCorrectionLevel:i,maskPattern:r,segments:o}}vt.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let r=st.M,o,n;return typeof i<"u"&&(r=st.from(i.errorCorrectionLevel,st.M),o=Z.from(i.version),n=ft.from(i.maskPattern),i.toSJISFunc&&nt.setToSJISFunction(i.toSJISFunc)),Re(t,o,r,n)};var zt={},pt={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,c=e.getScale(s,n),l=Math.floor((s+n.margin*2)*c),u=n.margin*c,C=[n.color.light,n.color.dark];for(let f=0;f<l;f++)for(let d=0;d<l;d++){let w=(f*l+d)*4,p=n.color.light;if(f>=u&&d>=u&&f<l-u&&d<l-u){const v=Math.floor((f-u)/c),m=Math.floor((d-u)/c);p=C[a[v*s+m]?1:0]}r[w++]=p.r,r[w++]=p.g,r[w++]=p.b,r[w]=p.a}}})(pt);(function(e){const t=pt;function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=r()),c=t.getOptions(c);const u=t.getImageWidth(n.modules.size,c),C=l.getContext("2d"),f=C.createImageData(u,u);return t.qrToImageData(f.data,n,c),i(C,l,u),C.putImageData(f,0,0),l},e.renderToDataURL=function(n,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=e.render(n,s,c),u=c.type||"image/png",C=c.rendererOpts||{};return l.toDataURL(u,C.quality)}})(zt);var xt={};const Le=pt;function Bt(e,t){const i=e.a/255,r=t+'="'+e.hex+'"';return i<1?r+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function lt(e,t,i){let r=e+t;return typeof i<"u"&&(r+=" "+i),r}function ke(e,t,i){let r="",o=0,n=!1,s=0;for(let a=0;a<e.length;a++){const c=Math.floor(a%t),l=Math.floor(a/t);!c&&!n&&(n=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(r+=n?lt("M",c+i,.5+l+i):lt("m",o,0),o=0,n=!1),c+1<t&&e[a+1]||(r+=lt("h",s),s=0)):o++}return r}xt.render=function(t,i,r){const o=Le.getOptions(i),n=t.modules.size,s=t.modules.data,a=n+o.margin*2,c=o.color.light.a?"<path "+Bt(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Bt(o.color.dark,"stroke")+' d="'+ke(s,n,o.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,f),f};const De=Qt,gt=vt,$t=zt,Ue=xt;function yt(e,t,i,r,o){const n=[].slice.call(arguments,1),s=n.length,a=typeof n[s-1]=="function";if(!a&&!De())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=i,i=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(i=t,t=r=void 0):s===2&&!t.getContext&&(r=i,i=t,t=void 0),new Promise(function(c,l){try{const u=gt.create(i,r);c(e(u,t,r))}catch(u){l(u)}})}try{const c=gt.create(i,r);o(null,e(c,t,r))}catch(c){o(c)}}j.create=gt.create;j.toCanvas=yt.bind(null,$t.render);j.toDataURL=yt.bind(null,$t.renderToDataURL);j.toString=yt.bind(null,function(e,t,i){return Ue.render(e,i)});const Fe=E("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ze={class:"fixed inset-0 overflow-y-auto"},xe={class:"flex min-h-full items-center justify-center p-4 text-center"},$e={__name:"QrModal",props:["show","name"],emits:["close"],setup(e,{emit:t}){const i=e,r=G(void 0);function o(){const s=r.value.toDataURL("image/png"),a=document.createElement("a"),c=s.replace(/^data:application\/octet-stream/,"data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png");a.href=c,a.download="Qr code",a.click()}function n(s){s&&(r.value=s,j.toCanvas(s,`http://www.95dot.com/${i.name}`,{scale:7},function(a){a&&console.error(a)}))}return(s,a)=>{const c=Ht;return k(),H(N(At),{appear:"",show:i.show,as:"template"},{default:T(()=>[b(N(_t),{as:"div",onClose:a[0]||(a[0]=l=>t("close")),class:"relative z-[999999]"},{default:T(()=>[b(N(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:T(()=>[Fe]),_:1}),E("div",ze,[E("div",xe,[b(N(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:T(()=>[b(N(bt),{class:"cflex gap-6 justify-center flex-col items-center max-w-md transform rounded-2xl bg-base-200 p-6 shadow-xl transition-all"},{default:T(()=>[E("canvas",{class:"w-96 h-96",ref:n}),b(c,{onClick:o,type:"primary",class:"h-10 px-2"},{default:T(()=>[Jt("Download PNG ")]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}},Ve=E("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),He={class:"fixed inset-0 overflow-y-auto"},Ke={class:"flex min-h-full items-center justify-center p-4 text-center"},Je={key:1},je={key:0,class:"flex flex-col gap-3"},Ye={class:"flex items-center gap-2"},Oe={class:"text-indigo-900 bg-indigo-300 grid place-items-center p-1 rounded-md"},Qe=E("div",null,"Share to...",-1),Ge={class:"flex items-center gap-2"},qe={class:"text-teal-900 bg-teal-300 grid place-items-center p-1 rounded-md"},We=E("div",null,"QR code",-1),Ze={class:"flex items-center gap-2"},Xe={class:"text-rose-900 bg-rose-300 grid place-items-center p-1 rounded-md"},tn=E("div",null,"Copy to clipboard",-1),en={key:1,class:"flex flex-col gap-3"},nn=["href"],on={class:"flex items-center gap-2"},rn={class:"grid place-items-center p-1 rounded-md"},sn=E("div",null,"Whatsapp",-1),fn={__name:"ShareModal",props:["show","user"],emits:["close"],setup(e,{emit:t}){const i=e,{errorNotification:r}=jt(),{user:o}=Yt(i),n=G(!1),s=G(!1),a=G(!1),c=async()=>{try{await navigator.clipboard.writeText(`/${o.value.name}`),a.value=!0,setTimeout(()=>{a.value=!1},3e3)}catch{r("failed to copy link to clipboard")}};function l(){t("close")}return(u,C)=>{const f=Vt,d=$e;return k(),H(N(At),{appear:"",show:i.show,as:"template"},{default:T(()=>[b(N(_t),{as:"div",onClose:l,class:"relative z-[999999]"},{default:T(()=>[b(N(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:T(()=>[Ve]),_:1}),E("div",He,[E("div",Ke,[b(N(q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:T(()=>[b(N(bt),{class:"w-full max-w-[20rem] transform overflow-hidden rounded-2xl bg-base-200 p-6 text-left align-middle shadow-xl transition-all z-[999999]"},{default:T(()=>[b(N(Kt),{as:"h3",class:"text-lg font-medium leading-6 text-base-content mb-6"},{default:T(()=>[N(s)?(k(),H(f,{key:0,name:"ic:round-arrow-back",size:"40",class:"p-1 cursor-pointer hover:bg-indigo-300 rounded-md",onClick:C[0]||(C[0]=w=>s.value=!1)})):(k(),rt("div",Je,"Share"))]),_:1}),b(Ot,{"enter-active-class":"transition-all","enter-from-class":"opacity-0 -translate-x-4","leave-active-class":"transition-all","leave-to-class":"opacity-0 translate-x-4",as:"div",class:"h-full",mode:"out-in"},{default:T(()=>[N(s)?(k(),rt("div",en,[E("a",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",href:`https://wa.me/?text=check my card by visiting this link : https://tagy.com/${N(o).name}`,target:"_blank"},[E("div",on,[E("div",rn,[b(f,{name:"logos:whatsapp-icon",size:"30"})]),sn]),E("div",null,[b(f,{size:"20",name:"icon-park:right"})])],8,nn)])):(k(),rt("div",je,[E("div",{onClick:C[1]||(C[1]=w=>s.value=!0),class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1"},[E("div",Ye,[E("div",Oe,[b(f,{name:"material-symbols:share",size:"30"})]),Qe]),E("div",null,[b(f,{size:"20",name:"icon-park:right"})])]),E("div",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",onClick:C[2]||(C[2]=w=>n.value=!0)},[E("div",Ge,[E("div",qe,[b(f,{name:"gg:qr",size:"30"})]),We]),E("div",null,[b(f,{size:"20",name:"icon-park:right"})])]),E("div",{class:"flex w-full justify-between items-center hover:bg-gray-200 rounded-md cursor-pointer p-1",onClick:c},[E("div",Ze,[E("div",Xe,[b(f,{name:"tabler:clipboard",size:"30"})]),tn]),E("div",null,[N(a)?(k(),H(f,{key:0,class:"text-green-600",size:"25",name:"line-md:clipboard-check"})):(k(),H(f,{key:1,size:"20",name:"icon-park:right"}))])])]))]),_:1}),b(d,{show:N(n),onClose:C[3]||(C[3]=w=>n.value=!1),name:N(o).name},null,8,["show","name"])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}}};export{$e as _,fn as a};

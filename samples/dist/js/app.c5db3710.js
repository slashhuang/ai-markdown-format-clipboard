(function(){"use strict";var t={1246:function(t,n,e){var a=e(5927),r=e(8036),l=e(572),o=e(3670);const i=console.log.bind(console),u=async t=>{const n=await o.qg(t);return n},c=async({htmlContent:t,content:n})=>{const e=new Blob([t],{type:"text/html"}),a=new Blob([n],{type:"text/plain"});i("create blob:",e,a);const r=new ClipboardItem({"text/html":e,"text/plain":a});await navigator.clipboard.write([r]).then((()=>(i("HTML内容已成功复制到剪切板！"),"HTML内容已成功复制到剪切板！"))).catch((t=>{i("复制失败",t)}))},s=async t=>{const n=await u(t);await c({htmlContent:n,content:t});const e=await p();return e};async function p(){try{const t=await navigator.clipboard.read();let n="",e="";for(const a of t){if(a.types.includes("text/plain")){const t=await a.getType("text/plain");n=await t.text(),console.log("剪切板中的纯文本内容:",n)}if(a.types.includes("text/html")){const t=await a.getType("text/html");e=await t.text(),console.log("剪切板中的HTML内容:",e)}}return{text:n,html:e}}catch(t){throw console.error("读取剪切板内容失败:",t),t}}const f={id:"app"},d=["innerHTML"],b=["innerHTML"];var v=(0,r.pM)({__name:"App",setup(t){const n=(0,l.KR)(""),e=(0,l.KR)("---\n### **中国资产迎来“黄金周”：揭秘股市暴涨的三大核心逻辑**\n**2025年2月21日** | **作者：财经观察**"),a=async()=>{try{const t=await navigator.clipboard.readText();s(t).then((t=>{n.value=t.html}))}catch(t){s(e.value).then((t=>{n.value=t.html}))}},o=async()=>{const t=await navigator.clipboard.readText();e.value=t},i=async()=>{s(e.value).then((t=>{alert("复制成功")}))};return(t,l)=>{const u=(0,r.g2)("el-col"),c=(0,r.g2)("el-divider"),s=(0,r.g2)("el-row"),p=(0,r.g2)("el-button");return(0,r.uX)(),(0,r.CE)("div",f,[(0,r.bF)(s,{class:"header"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>l[0]||(l[0]=[(0,r.Lk)("div",{class:"grid-content ep-bg-purple"},"Ai的markdown内容转换器",-1)]))),_:1}),(0,r.bF)(c)])),_:1}),(0,r.bF)(s),(0,r.bF)(s,{class:"container"},{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:10,class:"left"},{default:(0,r.k6)((()=>[(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>[(0,r.bF)(p,{type:"primary",onClick:o},{default:(0,r.k6)((()=>l[1]||(l[1]=[(0,r.eW)("粘贴")]))),_:1})])),_:1}),(0,r.bF)(u,{span:10},{default:(0,r.k6)((()=>[(0,r.bF)(p,{type:"success",onClick:a},{default:(0,r.k6)((()=>l[2]||(l[2]=[(0,r.eW)("将Deepseek内容转换成可读格式 ")]))),_:1})])),_:1})])),_:1}),(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>l[3]||(l[3]=[(0,r.Lk)("div",{class:"grid-content ep-bg-purple"},"原始剪切板内容",-1)]))),_:1})])),_:1}),(0,r.bF)(c),(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",{class:"grid-content ep-bg-purple",innerHTML:e.value},null,8,d)])),_:1})])),_:1}),(0,r.bF)(u,{span:10,class:"right"},{default:(0,r.k6)((()=>[(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:24},{default:(0,r.k6)((()=>l[4]||(l[4]=[(0,r.Lk)("div",{class:"grid-content ep-bg-purple"},"转换后的内容",-1)]))),_:1})])),_:1}),(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.bF)(u,{span:10},{default:(0,r.k6)((()=>[n.value?((0,r.uX)(),(0,r.Wv)(p,{key:0,type:"primary",onClick:i},{default:(0,r.k6)((()=>l[5]||(l[5]=[(0,r.eW)("复制格式化后的内容")]))),_:1})):(0,r.Q3)("",!0)])),_:1})])),_:1}),(0,r.bF)(c),(0,r.bF)(s,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",{class:"grid-content ep-bg-purple",innerHTML:n.value},null,8,b)])),_:1})])),_:1})])),_:1})])}}});const k=v;var h=k,g=e(3870);e(4266);(0,a.Ef)(h).use(g.A).mount("#app")}},n={};function e(a){var r=n[a];if(void 0!==r)return r.exports;var l=n[a]={exports:{}};return t[a].call(l.exports,l,l.exports,e),l.exports}e.m=t,function(){var t=[];e.O=function(n,a,r,l){if(!a){var o=1/0;for(s=0;s<t.length;s++){a=t[s][0],r=t[s][1],l=t[s][2];for(var i=!0,u=0;u<a.length;u++)(!1&l||o>=l)&&Object.keys(e.O).every((function(t){return e.O[t](a[u])}))?a.splice(u--,1):(i=!1,l<o&&(o=l));if(i){t.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}l=l||0;for(var s=t.length;s>0&&t[s-1][2]>l;s--)t[s]=t[s-1];t[s]=[a,r,l]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,a){var r,l,o=a[0],i=a[1],u=a[2],c=0;if(o.some((function(n){return 0!==t[n]}))){for(r in i)e.o(i,r)&&(e.m[r]=i[r]);if(u)var s=u(e)}for(n&&n(a);c<o.length;c++)l=o[c],e.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return e.O(s)},a=self["webpackChunk_ai_markdown_formate_lipboard_samples"]=self["webpackChunk_ai_markdown_formate_lipboard_samples"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=e.O(void 0,[504],(function(){return e(1246)}));a=e.O(a)})();
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"\ud83c\udf05 Sky",description:"Interact with built-in Sky & Weather system.",tags:["static-class"]},i=void 0,c={unversionedId:"scripting-reference/static-classes/sky",id:"scripting-reference/static-classes/sky",title:"\ud83c\udf05 Sky",description:"Interact with built-in Sky & Weather system.",source:"@site/docs/scripting-reference/static-classes/sky.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/sky",permalink:"/docs/next/scripting-reference/static-classes/sky",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/sky.mdx",tags:[{label:"static-class",permalink:"/docs/next/tags/static-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"\ud83c\udf05 Sky",description:"Interact with built-in Sky & Weather system.",tags:["static-class"]},sidebar:"main",previous:{title:"\ud83d\udcbb Server",permalink:"/docs/next/scripting-reference/static-classes/server"},next:{title:"\ud83c\udfae Steam",permalink:"/docs/next/scripting-reference/static-classes/steam"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),m=p("EventsDeclaration"),y={toc:l},f="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"StaticClass",name:"Sky",is_static:!0,image:"/img/docs/sky.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("p",null,"nanos world natively integrates ",(0,a.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/ultra-dynamic-sky/"},"Ultra Dynamic Sky"),", one of best Unreal Marketplace Asset Packs, it provides a dynamic sky and weather solution for games!"),(0,a.kt)("p",null,"Through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sky")," class, we expose it's methods to allow customizing it's parameters in real time!"),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Spawns a new Ultra Dynamic Sky actor\nSky.Spawn()\n\n-- Sets the time to 16:30\nSky.SetTimeOfDay(16, 30)\n")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"StaticClass",name:"Sky",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(m,{type:"StaticClass",name:"Sky",mdxType:"EventsDeclaration"}))}k.isMDXComponent=!0}}]);
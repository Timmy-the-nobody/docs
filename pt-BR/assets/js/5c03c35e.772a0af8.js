"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"\ud83c\udf05 Sky",description:"Interact with built-in Sky & Weather system.",tags:["static-class"]},i=void 0,c={unversionedId:"scripting-reference/static-classes/sky",id:"scripting-reference/static-classes/sky",title:"\ud83c\udf05 Sky",description:"Interact with built-in Sky & Weather system.",source:"@site/docs/scripting-reference/static-classes/sky.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/sky",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/sky",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"static-class",permalink:"/pt-BR/docs/next/tags/static-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",frontMatter:{title:"\ud83c\udf05 Sky",description:"Interact with built-in Sky & Weather system.",tags:["static-class"]},sidebar:"main",previous:{title:"\ud83d\udcbb Server",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/server"},next:{title:"\ud83c\udfae Steam",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/steam"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),m=p("EventsDeclaration"),y={toc:l},f="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"StaticClass",name:"Sky",is_static:!0,image:"/img/docs/sky.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("p",null,"nanos world natively integrates ",(0,a.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/ultra-dynamic-sky/"},"Ultra Dynamic Sky"),", one of best Unreal Marketplace Asset Packs, it provides a dynamic sky and weather solution for games!"),(0,a.kt)("p",null,"Through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Sky")," class, we expose it's methods to allow customizing it's parameters in real time!"),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Spawns a new Ultra Dynamic Sky actor\nSky.Spawn()\n\n-- Sets the time to 16:30\nSky.SetTimeOfDay(16, 30)\n")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"StaticClass",name:"Sky",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(m,{type:"StaticClass",name:"Sky",mdxType:"EventsDeclaration"}))}k.isMDXComponent=!0}}]);
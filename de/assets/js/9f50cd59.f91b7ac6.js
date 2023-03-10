"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),v=s,f=d["".concat(o,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:s,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={title:"\ud83d\udcbb Server",description:"Server represents all Server controls in the Server side.",tags:["static-class"]},i=void 0,c={unversionedId:"scripting-reference/static-classes/server",id:"version-latest/scripting-reference/static-classes/server",title:"\ud83d\udcbb Server",description:"Server represents all Server controls in the Server side.",source:"@site/versioned_docs/version-latest/scripting-reference/static-classes/server.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/server",permalink:"/de/docs/scripting-reference/static-classes/server",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"static-class",permalink:"/de/docs/tags/static-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",frontMatter:{title:"\ud83d\udcbb Server",description:"Server represents all Server controls in the Server side.",tags:["static-class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\uddbc\ufe0f PostProcess",permalink:"/de/docs/scripting-reference/static-classes/postprocess"},next:{title:"\ud83c\udf05 Sky",permalink:"/de/docs/scripting-reference/static-classes/sky"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=p("HeaderDeclaration"),u=p("StaticFunctionsDeclaration"),v=p("EventsDeclaration"),f={toc:l},m="wrapper";function y(e){let{components:t,...r}=e;return(0,s.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(d,{type:"StaticClass",name:"Server",is_static:!0,image:"/img/docs/server.webp",mdxType:"HeaderDeclaration"}),(0,s.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- prints "Server started" when the server is starting\nServer.Subscribe("Start", function()\n    Console.Log("Server started")\nend)\n\n-- prints "Server stopped" when the server stops / shutdown\nServer.Subscribe("Stop", function()\n    Console.Log("Server stopped")\nend)\n\n-- prints the delta time about every 33 ms\nServer.Subscribe("Tick", function(delta_time)\n    Console.Log("Tick: " .. delta_time)\nend)\n')),(0,s.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,s.kt)(u,{type:"StaticClass",name:"Server",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,s.kt)(v,{type:"StaticClass",name:"Server",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",tags:["static-class","server"]},o=void 0,c={unversionedId:"scripting-reference/static-classes/http",id:"version-latest/scripting-reference/static-classes/http",title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",source:"@site/versioned_docs/version-latest/scripting-reference/static-classes/http.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/http",permalink:"/de/docs/scripting-reference/static-classes/http",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"static-class",permalink:"/de/docs/tags/static-class"},{label:"server",permalink:"/de/docs/tags/server"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",frontMatter:{title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",tags:["static-class","server"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udea9 Events",permalink:"/de/docs/scripting-reference/static-classes/events"},next:{title:"\ud83d\udd79\ufe0f Input",permalink:"/de/docs/scripting-reference/static-classes/input"}},i={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),f=p("EventsDeclaration"),m={toc:l},v="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"StaticClass",name:"HTTP",is_static:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Makes an asynchronous HTTP Request\nHTTP.RequestAsync("127.0.0.1:7777", "/", "GET", "", "application/json", false, {}, function(status, data)\n    Console.Log(status) -- 200\n    Console.Log(data) -- "{"players_count":0,"server_name":"nanos world server"}"\n\n    -- TIP: You can parse it if it\'s a json return as well\n    local json_ret = JSON.parse(data)\nend)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Makes a synchronous HTTP Request\nlocal ret = HTTP.Request("127.0.0.1:7777", "/", "GET", "", "application/json", false, {})\n\nConsole.Log(ret.Status) -- 200\nConsole.Log(ret.Data) -- "{"players_count":0,"server_name":"nanos world server"}"\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All requests are thread safe! \ud83e\udd73 This means that callbacks are returned on the main thread!")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"StaticClass",name:"HTTP",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(f,{type:"StaticClass",name:"HTTP",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);
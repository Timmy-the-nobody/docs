"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=s,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:s,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const o={title:"\ud83d\udd24 Console",description:"Log messages on console.",tags:["static-class"]},a=void 0,c={unversionedId:"scripting-reference/static-classes/console",id:"scripting-reference/static-classes/console",title:"\ud83d\udd24 Console",description:"Log messages on console.",source:"@site/docs/scripting-reference/static-classes/console.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/console",permalink:"/docs/next/scripting-reference/static-classes/console",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/console.mdx",tags:[{label:"static-class",permalink:"/docs/next/tags/static-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{title:"\ud83d\udd24 Console",description:"Log messages on console.",tags:["static-class"]},sidebar:"main",previous:{title:"\u2328\ufe0f Client",permalink:"/docs/next/scripting-reference/static-classes/client"},next:{title:"\ud83d\udc1b Debug",permalink:"/docs/next/scripting-reference/static-classes/debug"}},i={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),m=p("EventsDeclaration"),f={toc:l},g="wrapper";function y(e){let{components:t,...n}=e;return(0,s.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u,{type:"StaticClass",name:"Console",is_static:!0,mdxType:"HeaderDeclaration"}),(0,s.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'Console.RegisterCommand("hello", function(text)\n    Console.Log("Sending a \'Hello " .. text .. "\' to everyone!")\n    Chat.BroadcastMessage("Hello " .. text)\nend, "says a message to everyone", { "my_text" })\n')),(0,s.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,s.kt)(d,{type:"StaticClass",name:"Console",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,s.kt)(m,{type:"StaticClass",name:"Console",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);
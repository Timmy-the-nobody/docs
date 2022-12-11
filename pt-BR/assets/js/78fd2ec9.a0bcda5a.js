"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=s,y=d["".concat(o,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:s,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const a={title:"Base Entity",description:"Base class for all Entity entities",tags:["base-class"]},i=void 0,c={unversionedId:"scripting-reference/classes/base-classes/entity",id:"scripting-reference/classes/base-classes/entity",title:"Base Entity",description:"Base class for all Entity entities",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/base-classes/entity.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/entity",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/entity",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/base-classes/entity.mdx",tags:[{label:"base-class",permalink:"/pt-BR/docs/next/tags/base-class"}],version:"current",frontMatter:{title:"Base Entity",description:"Base class for all Entity entities",tags:["base-class"]},sidebar:"main",previous:{title:"Base Actor",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor"},next:{title:"Base Paintable",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable"}},o={},l=[{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),y=p("EventsDeclaration"),m={toc:l};function b(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u,{type:"Class",name:"Entity",mdxType:"HeaderDeclaration"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This is the base class for all Entities we have. You cannot spawn it directly.")),(0,s.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The following functions are accessed statically using the specific ",(0,s.kt)("strong",{parentName:"p"},"class")," with a ",(0,s.kt)("strong",{parentName:"p"},"dot"),". Example: ",(0,s.kt)("inlineCode",{parentName:"p"},"Character.GetAll()"),".")),(0,s.kt)(d,{type:"Class",name:"Entity",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,s.kt)(f,{type:"Class",name:"Entity",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,s.kt)(y,{type:"Class",name:"Entity",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
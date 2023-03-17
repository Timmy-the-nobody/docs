"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=s,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:s,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={title:"Base Actor",description:"Base class for all Actor entities",tags:["base-class"]},o=void 0,c={unversionedId:"scripting-reference/classes/base-classes/actor",id:"version-latest/scripting-reference/classes/base-classes/actor",title:"Base Actor",description:"Base class for all Actor entities",source:"@site/versioned_docs/version-latest/scripting-reference/classes/base-classes/actor.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/actor",permalink:"/pt-BR/docs/scripting-reference/classes/base-classes/actor",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"base-class",permalink:"/pt-BR/docs/tags/base-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 de mar. de 2023",frontMatter:{title:"Base Actor",description:"Base class for all Actor entities",tags:["base-class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udda5\ufe0f WebUI",permalink:"/pt-BR/docs/scripting-reference/classes/webui"},next:{title:"Base Entity",permalink:"/pt-BR/docs/scripting-reference/classes/base-classes/entity"}},i={},l=[{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),m=p("EventsDeclaration"),y={toc:l},b="wrapper";function v(e){let{components:t,...r}=e;return(0,s.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u,{type:"Class",name:"Actor",mdxType:"HeaderDeclaration"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This is the base class for all Actors we have. You cannot spawn it directly.")),(0,s.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,s.kt)(d,{type:"Class",name:"Actor",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Some of the following methods may not work on certain Actor classes.")),(0,s.kt)(f,{type:"Class",name:"Actor",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,s.kt)(m,{type:"Class",name:"Actor",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);
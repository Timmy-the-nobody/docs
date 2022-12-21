"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?s.createElement(y,i(i({ref:t},p),{},{components:n})):s.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(87462),r=(n(67294),n(3905));const a={title:"Base Entity",description:"Base class for all Entity entities",tags:["base-class"]},i=void 0,o={unversionedId:"scripting-reference/classes/base-classes/entity",id:"version-latest/scripting-reference/classes/base-classes/entity",title:"Base Entity",description:"Base class for all Entity entities",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/base-classes/entity.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/entity",permalink:"/fr/docs/scripting-reference/classes/base-classes/entity",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/base-classes/entity.mdx",tags:[{label:"base-class",permalink:"/fr/docs/tags/base-class"}],version:"latest",frontMatter:{title:"Base Entity",description:"Base class for all Entity entities",tags:["base-class"]},sidebar:"version-latest/main",previous:{title:"Acteur de base",permalink:"/fr/docs/scripting-reference/classes/base-classes/actor"},next:{title:"Base Paintable",permalink:"/fr/docs/scripting-reference/classes/base-classes/paintable"}},c={},l=[{value:"\ud83d\uddff Fonctions statiques",id:"-fonctions-statiques",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),y=p("EventsDeclaration"),m={toc:l};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{type:"Class",name:"Entity",mdxType:"HeaderDeclaration"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is the base class for all Entities we have. Vous ne pouvez pas la cr\xe9er directement.")),(0,r.kt)("h2",{id:"-fonctions-statiques"},"\ud83d\uddff Fonctions statiques"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The following functions are accessed statically using the specific ",(0,r.kt)("strong",{parentName:"p"},"class")," with a ",(0,r.kt)("strong",{parentName:"p"},"dot"),". Exemple: ",(0,r.kt)("inlineCode",{parentName:"p"},"Character.GetAll()"),".")),(0,r.kt)(d,{type:"Class",name:"Entity",mdxType:"StaticFunctionsDeclaration"}),(0,r.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,r.kt)(f,{type:"Class",name:"Entity",mdxType:"FunctionsDeclaration"}),(0,r.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,r.kt)(y,{type:"Class",name:"Entity",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
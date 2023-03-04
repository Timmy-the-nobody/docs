"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6537],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"Base Actor",description:"Base class for all Actor entities",tags:["base-class"]},o=void 0,c={unversionedId:"scripting-reference/classes/base-classes/actor",id:"scripting-reference/classes/base-classes/actor",title:"Base Actor",description:"Base class for all Actor entities",source:"@site/docs/scripting-reference/classes/base-classes/actor.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/actor",permalink:"/de/docs/next/scripting-reference/classes/base-classes/actor",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"base-class",permalink:"/de/docs/next/tags/base-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"Base Actor",description:"Base class for all Actor entities",tags:["base-class"]},sidebar:"main",previous:{title:"\ud83d\udda5\ufe0f WebUI",permalink:"/de/docs/next/scripting-reference/classes/webui"},next:{title:"Base Damageable",permalink:"/de/docs/next/scripting-reference/classes/base-classes/damageable"}},i={},l=[{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("HeaderDeclaration"),u=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),m=p("EventsDeclaration"),y={toc:l},b="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"Actor",mdxType:"HeaderDeclaration"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is the base class for all Actors we have. You cannot spawn it directly.")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(u,{type:"Class",name:"Actor",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Some of the following methods may not work on certain Actor classes.")),(0,a.kt)(f,{type:"Class",name:"Actor",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(m,{type:"Class",name:"Actor",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);
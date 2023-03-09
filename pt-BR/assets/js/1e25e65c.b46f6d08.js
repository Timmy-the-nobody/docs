"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[191],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16264:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"\ud83e\udded Rotator",description:"A container for rotation information. All rotation values are stored in degrees.",tags:["utility-class"]},i=void 0,c={unversionedId:"scripting-reference/structs/rotator",id:"scripting-reference/structs/rotator",title:"\ud83e\udded Rotator",description:"A container for rotation information. All rotation values are stored in degrees.",source:"@site/docs/scripting-reference/structs/rotator.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/rotator",permalink:"/pt-BR/docs/next/scripting-reference/structs/rotator",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"utility-class",permalink:"/pt-BR/docs/next/tags/utility-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",frontMatter:{title:"\ud83e\udded Rotator",description:"A container for rotation information. All rotation values are stored in degrees.",tags:["utility-class"]},sidebar:"main",previous:{title:"\ud83d\udd22 Quat",permalink:"/pt-BR/docs/next/scripting-reference/structs/quat"},next:{title:"\ud83d\udcd0 Vector",permalink:"/pt-BR/docs/next/scripting-reference/structs/vector"}},s={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2}],p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)},u=p("HeaderDeclaration"),d=p("ConstructorDeclaration"),m=p("PropertiesDeclaration"),f=p("FunctionsDeclaration"),y=p("StaticFunctionsDeclaration"),v={toc:l},g="wrapper";function k(t){let{components:e,...r}=t;return(0,o.kt)(g,(0,n.Z)({},v,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(u,{type:"Struct",name:"Rotator",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Rotators are internally and automatically compressed, which reduces it's size in the network up to 90%. Their components are usually compressed into 1 byte each (with some exceptions which we need more precision).")),(0,o.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local new_rotator = Rotator(-90, 153, 24.5)\n")),(0,o.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,o.kt)(d,{type:"Struct",name:"Rotator",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,o.kt)(m,{type:"Struct",name:"Rotator",mdxType:"PropertiesDeclaration"}),(0,o.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This structure supports ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,o.kt)(f,{type:"Struct",name:"Rotator",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,o.kt)(y,{type:"Struct",name:"Rotator",mdxType:"StaticFunctionsDeclaration"}))}k.isMDXComponent=!0}}]);
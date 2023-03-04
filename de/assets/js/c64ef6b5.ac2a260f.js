"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"JSON",description:"JSON library, useful for sending data from Client's Package to WebUI environment",tags:["utility-class"]},i=void 0,s={unversionedId:"scripting-reference/utility-classes/json",id:"scripting-reference/utility-classes/json",title:"JSON",description:"JSON library, useful for sending data from Client's Package to WebUI environment",source:"@site/docs/scripting-reference/utility-classes/json.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/json",permalink:"/de/docs/next/scripting-reference/utility-classes/json",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"utility-class",permalink:"/de/docs/next/tags/utility-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"JSON",description:"JSON library, useful for sending data from Client's Package to WebUI environment",tags:["utility-class"]},sidebar:"main",previous:{title:"\ud83d\udccf Vector2D",permalink:"/de/docs/next/scripting-reference/structs/vector2d"},next:{title:"NanosMath",permalink:"/de/docs/next/scripting-reference/utility-classes/nanosmath"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),f={toc:l},m="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"UtilityClass",name:"JSON",is_static:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local encoded_value = JSON.stringify({ 1, 2, 3, { x = 10, y = Vector(1, 2, 3) }, "he" })\n-- Returns \'[1,2,3,{"x":10},"he"]\'\n\nlocal decoded_value = JSON.parse(\'[1,2,3,{"x":10},"he"]\')\n-- Returns { 1, 2, 3, { x = 10 }, "he" }\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Note that custom classes (e.g. ",(0,a.kt)("strong",{parentName:"p"},"Vehicle"),", ",(0,a.kt)("strong",{parentName:"p"},"Character"),", ",(0,a.kt)("strong",{parentName:"p"},"Prop"),"... etc) or ",(0,a.kt)("strong",{parentName:"p"},"functions")," are not supported to be stringified and will be nulified."),(0,a.kt)("p",{parentName:"admonition"},"Structs (e.g. ",(0,a.kt)("strong",{parentName:"p"},"Vector"),", ",(0,a.kt)("strong",{parentName:"p"},"Rotator"),", ",(0,a.kt)("strong",{parentName:"p"},"Color"),"... etc) are supported and will be parsed/stringified properly!")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"UtilityClass",name:"JSON",mdxType:"StaticFunctionsDeclaration"}))}y.isMDXComponent=!0}}]);
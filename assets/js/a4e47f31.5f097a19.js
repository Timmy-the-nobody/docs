"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\ud83d\udd22 Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",tags:["utility-class"]},i=void 0,s={unversionedId:"scripting-reference/structs/quat",id:"version-latest/scripting-reference/structs/quat",title:"\ud83d\udd22 Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",source:"@site/versioned_docs/version-latest/scripting-reference/structs/quat.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/quat",permalink:"/docs/scripting-reference/structs/quat",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/structs/quat.mdx",tags:[{label:"utility-class",permalink:"/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{title:"\ud83d\udd22 Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"\ud83c\udfa8 Color",permalink:"/docs/scripting-reference/structs/color"},next:{title:"\ud83e\udded Rotator",permalink:"/docs/scripting-reference/structs/rotator"}},c={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=l("HeaderDeclaration"),d=l("ConstructorDeclaration"),m=l("PropertiesDeclaration"),f=l("FunctionsDeclaration"),y={toc:p},v="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"Struct",name:"Quat",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local new_quaternion = Quat(0.5, 0.5, 1, -1)\nlocal rotation = new_quaterion:Rotator()\n")),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(d,{type:"Struct",name:"Quat",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,a.kt)(m,{type:"Struct",name:"Quat",mdxType:"PropertiesDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This structure supports ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,a.kt)(f,{type:"Struct",name:"Quat",mdxType:"FunctionsDeclaration"}))}g.isMDXComponent=!0}}]);
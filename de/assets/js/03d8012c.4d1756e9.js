"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4441],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"\ud83d\udcd0 Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},a=void 0,c={unversionedId:"scripting-reference/structs/vector",id:"version-latest/scripting-reference/structs/vector",title:"\ud83d\udcd0 Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",source:"@site/versioned_docs/version-latest/scripting-reference/structs/vector.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/vector",permalink:"/de/docs/scripting-reference/structs/vector",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"utility-class",permalink:"/de/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",frontMatter:{title:"\ud83d\udcd0 Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"\ud83e\udded Rotator",permalink:"/de/docs/scripting-reference/structs/rotator"},next:{title:"\ud83d\udccf Vector2D",permalink:"/de/docs/scripting-reference/structs/vector2d"}},s={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=l("HeaderDeclaration"),d=l("ConstructorDeclaration"),m=l("PropertiesDeclaration"),f=l("FunctionsDeclaration"),y={toc:p},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{type:"Struct",name:"Vector",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Vectors are internally and automatically compressed, which reduces it's size in the network up to 90%. Some cool details:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Vectors parameters in Classes Methods are usually compressed with precision of 1 decimal place (with some exceptions which we need more precision)."),(0,o.kt)("li",{parentName:"ul"},"Vectors passed in Remote Events are compressed with precision of 2 decimal places. If you need more precision, we recommend passing them as raw number instead."))),(0,o.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,o.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,o.kt)(d,{type:"Struct",name:"Vector",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,o.kt)(m,{type:"Struct",name:"Vector",mdxType:"PropertiesDeclaration"}),(0,o.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This structure supports ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,o.kt)(f,{type:"Struct",name:"Vector",mdxType:"FunctionsDeclaration"}))}g.isMDXComponent=!0}}]);
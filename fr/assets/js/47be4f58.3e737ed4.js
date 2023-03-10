"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9860],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},c=void 0,a={unversionedId:"scripting-reference/structs/vector2d",id:"version-latest/scripting-reference/structs/vector2d",title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",source:"@site/versioned_docs/version-latest/scripting-reference/structs/vector2d.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/vector2d",permalink:"/fr/docs/scripting-reference/structs/vector2d",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"utility-class",permalink:"/fr/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 mars 2023",frontMatter:{title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udcd0 Vector",permalink:"/fr/docs/scripting-reference/structs/vector"},next:{title:"JSON",permalink:"/fr/docs/scripting-reference/utility-classes/json"}},s={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=l("HeaderDeclaration"),d=l("ConstructorDeclaration"),m=l("PropertiesDeclaration"),f=l("FunctionsDeclaration"),y={toc:p},v="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{type:"Struct",name:"Vector2D",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector2D(1452.5, 512)\n")),(0,o.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,o.kt)(d,{type:"Struct",name:"Vector2D",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,o.kt)(m,{type:"Struct",name:"Vector2D",mdxType:"PropertiesDeclaration"}),(0,o.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This structure supports ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,o.kt)(f,{type:"Struct",name:"Vector2D",mdxType:"FunctionsDeclaration"}))}g.isMDXComponent=!0}}]);
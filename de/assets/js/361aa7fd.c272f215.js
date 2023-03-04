"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},11792:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",image:"/img/docs/billboard.webp",sidebar_position:0,tags:["class","client"]},l=void 0,o={unversionedId:"scripting-reference/classes/billboard",id:"scripting-reference/classes/billboard",title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",source:"@site/docs/scripting-reference/classes/billboard.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/billboard",permalink:"/de/docs/next/scripting-reference/classes/billboard",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/next/tags/class"},{label:"client",permalink:"/de/docs/next/tags/client"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",sidebarPosition:0,frontMatter:{title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",image:"/img/docs/billboard.webp",sidebar_position:0,tags:["class","client"]},sidebar:"main",previous:{title:"Server & Client Lifecycle",permalink:"/de/docs/next/core-concepts/server-and-client-lifecycle"},next:{title:"\ud83d\udd23 Blueprint",permalink:"/de/docs/next/scripting-reference/classes/blueprint"}},c={},s=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("HeaderDeclaration"),u=d("ConstructorDeclaration"),b=d("StaticFunctionsDeclaration"),m=d("FunctionsDeclaration"),f=d("EventsDeclaration"),y={toc:s},g="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"Class",name:"Billboard",image:"/img/docs/billboard.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_billboard = Billboard(\n    Vector(200, 200, 200), -- location\n    "nanos-world::M_NanosMasked", -- material\n    Vector2D(32, 32), -- size\n    true\n)\n\nmy_billboard:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Billboard",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(b,{type:"Class",name:"Billboard",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(m,{type:"Class",name:"Billboard",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(f,{type:"Class",name:"Billboard",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);
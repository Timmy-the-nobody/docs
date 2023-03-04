"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",image:"/img/docs/billboard.webp",sidebar_position:0,tags:["class","client"]},l=void 0,o={unversionedId:"scripting-reference/classes/billboard",id:"version-latest/scripting-reference/classes/billboard",title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/billboard.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/billboard",permalink:"/fr/docs/scripting-reference/classes/billboard",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/tags/class"},{label:"client",permalink:"/fr/docs/tags/client"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4 mars 2023",sidebarPosition:0,frontMatter:{title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",image:"/img/docs/billboard.webp",sidebar_position:0,tags:["class","client"]},sidebar:"version-latest/main",previous:{title:"Server & Client Lifecycle",permalink:"/fr/docs/core-concepts/server-and-client-lifecycle"},next:{title:"\ud83d\udd23 Blueprint",permalink:"/fr/docs/scripting-reference/classes/blueprint"}},s={},c=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("HeaderDeclaration"),u=d("ConstructorDeclaration"),m=d("StaticFunctionsDeclaration"),b=d("FunctionsDeclaration"),f=d("EventsDeclaration"),y={toc:c},v="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"Class",name:"Billboard",image:"/img/docs/billboard.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_billboard = Billboard(\n    Vector(200, 200, 200), -- location\n    "nanos-world::M_NanosMasked", -- material\n    Vector2D(32, 32), -- size\n    true\n)\n\nmy_billboard:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Billboard",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Billboard",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(b,{type:"Class",name:"Billboard",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(f,{type:"Class",name:"Billboard",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);
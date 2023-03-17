"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var o=2;o<s;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const s={title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",sidebar_position:0,tags:["class","client"]},c=void 0,l={unversionedId:"scripting-reference/classes/decal",id:"version-latest/scripting-reference/classes/decal",title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/decal.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/decal",permalink:"/fr/docs/scripting-reference/classes/decal",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/tags/class"},{label:"client",permalink:"/fr/docs/tags/client"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 mars 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",sidebar_position:0,tags:["class","client"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udcbe Database",permalink:"/fr/docs/scripting-reference/classes/database"},next:{title:"\ud83d\udcc1 File",permalink:"/fr/docs/scripting-reference/classes/file"}},i={},o=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),y=p("EventsDeclaration"),v={toc:o},g="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"Decal",image:"/img/docs/decals.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_decal = Decal(\n    Vector(100, 200, 0), -- location\n    Rotator(0, 90, 90), -- rotation\n    "nanos-world::M_Default_Translucent_Lit_Decal", -- material\n    Vector(128, 256, 256), -- size\n    60, -- lifespan\n    0.01 -- fade screen size\n)\n\nmy_decal:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Decal",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Decal",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(f,{type:"Class",name:"Decal",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(y,{type:"Class",name:"Decal",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
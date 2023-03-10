"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const s={title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},a=void 0,o={unversionedId:"scripting-reference/classes/static-mesh",id:"scripting-reference/classes/static-mesh",title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",source:"@site/docs/scripting-reference/classes/static-mesh.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/static-mesh",permalink:"/de/docs/next/scripting-reference/classes/static-mesh",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",sidebarPosition:0,frontMatter:{title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd0a Sound",permalink:"/de/docs/next/scripting-reference/classes/sound"},next:{title:"\ud83c\udd92 TextRender",permalink:"/de/docs/next/scripting-reference/classes/text-render"}},c={},l=[{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),h=p("EventsDeclaration"),y={toc:l},v="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(v,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{type:"Class",name:"StaticMesh",image:"/img/docs/static-mesh.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("p",null,'Static Meshes are like Props, but with fewer interaction options. Static Meshes are aimed to offer better performance on spawning Static "objects" in the world than Props.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Automatically all StaticMeshActors present in the Level will be loaded as a StaticMesh entity in the client side.")),(0,i.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,i.kt)(u,{type:"Class",name:"StaticMesh",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,i.kt)(m,{type:"Class",name:"StaticMesh",mdxType:"StaticFunctionsDeclaration"}),(0,i.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,i.kt)(f,{type:"Class",name:"StaticMesh",mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,i.kt)(h,{type:"Class",name:"StaticMesh",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
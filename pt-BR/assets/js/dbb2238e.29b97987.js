"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3035],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const i={title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},a=void 0,o={unversionedId:"scripting-reference/classes/static-mesh",id:"version-latest/scripting-reference/classes/static-mesh",title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/static-mesh.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/static-mesh",permalink:"/pt-BR/docs/scripting-reference/classes/static-mesh",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4 de mar. de 2023",sidebarPosition:0,frontMatter:{title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd0a Sound",permalink:"/pt-BR/docs/scripting-reference/classes/sound"},next:{title:"\ud83c\udd92 TextRender",permalink:"/pt-BR/docs/scripting-reference/classes/text-render"}},c={},l=[{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),h=p("EventsDeclaration"),y={toc:l},v="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(v,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(d,{type:"Class",name:"StaticMesh",image:"/img/docs/static-mesh.webp",mdxType:"HeaderDeclaration"}),(0,s.kt)("p",null,'Static Meshes are like Props, but with fewer interaction options. Static Meshes are aimed to offer better performance on spawning Static "objects" in the world than Props.'),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Automatically all StaticMeshActors present in the Level will be loaded as a StaticMesh entity in the client side.")),(0,s.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,s.kt)(u,{type:"Class",name:"StaticMesh",mdxType:"ConstructorDeclaration"}),(0,s.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,s.kt)(m,{type:"Class",name:"StaticMesh",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,s.kt)(f,{type:"Class",name:"StaticMesh",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,s.kt)(h,{type:"Class",name:"StaticMesh",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
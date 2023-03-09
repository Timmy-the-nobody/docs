"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udca3 Grenade",description:"Chad Grenade",sidebar_position:0,tags:["class"]},s=void 0,i={unversionedId:"scripting-reference/classes/grenade",id:"scripting-reference/classes/grenade",title:"\ud83d\udca3 Grenade",description:"Chad Grenade",source:"@site/docs/scripting-reference/classes/grenade.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/grenade",permalink:"/de/docs/next/scripting-reference/classes/grenade",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9. M\xe4rz 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udca3 Grenade",description:"Chad Grenade",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udcc1 File",permalink:"/de/docs/next/scripting-reference/classes/file"},next:{title:"\ud83d\udca1 Light",permalink:"/de/docs/next/scripting-reference/classes/light"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=d("HeaderDeclaration"),u=d("ConstructorDeclaration"),m=d("StaticFunctionsDeclaration"),f=d("FunctionsDeclaration"),y=d("EventsDeclaration"),g={toc:l},v="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"Class",name:"Grenade",image:"/img/docs/grenade.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local new_grenade = Grenade(\n    Vector(-900, 185, 215),\n    Rotator(0, 90, 90),\n    "nanos-world::SM_Grenade_G67",\n    "nanos-world::P_Grenade_Special",\n    "nanos-world::A_Explosion_Large"\n)\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Grenade",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"nanos world provides a special ",(0,a.kt)("em",{parentName:"p"},"Particle*")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"nanos-world::P_Grenade_Special")," which spawns different particles depending on the surface it explodes, and also if is underwater."),(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("em",{parentName:"p"},'This "Particle" is just a special identifier which can only be used on Grenades!'))),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Grenade",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(f,{type:"Class",name:"Grenade",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(y,{type:"Class",name:"Grenade",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
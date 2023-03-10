"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9226:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",sidebar_position:0,tags:["class"]},o=void 0,i={unversionedId:"scripting-reference/classes/particle",id:"scripting-reference/classes/particle",title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",source:"@site/docs/scripting-reference/classes/particle.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/particle",permalink:"/fr/docs/next/scripting-reference/classes/particle",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 mars 2023",sidebarPosition:0,frontMatter:{title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd2a Melee",permalink:"/fr/docs/next/scripting-reference/classes/melee"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb Player",permalink:"/fr/docs/next/scripting-reference/classes/player"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),y=p("EventsDeclaration"),v={toc:l},g="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"Particle",image:"/img/docs/particle.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Both ",(0,a.kt)("strong",{parentName:"p"},"Cascade")," and ",(0,a.kt)("strong",{parentName:"p"},"Niagara")," Particle Systems are supported!")),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_particle = Particle(\n    Vector(-200, 100, 100),\n    Rotator(0, 0, 0),\n    "nanos-world::P_Explosion",\n    true, -- Auto Destroy?\n    true -- Auto Activate?\n)\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Particle",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"auto_destroy"))," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,a.kt)("em",{parentName:"p"},"Particle System")," spawned in-game. So if the ",(0,a.kt)("em",{parentName:"p"},"Particle System")," itself loops indefinitely, it will keep playing until the Player reconnects.")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Particle",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(f,{type:"Class",name:"Particle",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(y,{type:"Class",name:"Particle",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
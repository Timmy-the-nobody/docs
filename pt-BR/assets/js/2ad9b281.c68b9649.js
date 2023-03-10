"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",sidebar_position:0,tags:["class"]},o=void 0,s={unversionedId:"scripting-reference/classes/melee",id:"scripting-reference/classes/melee",title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",source:"@site/docs/scripting-reference/classes/melee.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/melee",permalink:"/pt-BR/docs/next/scripting-reference/classes/melee",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 de mar. de 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udca1 Light",permalink:"/pt-BR/docs/next/scripting-reference/classes/light"},next:{title:"\u2728 Particle",permalink:"/pt-BR/docs/next/scripting-reference/classes/particle"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),y=p("EventsDeclaration"),h={toc:l},b="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"Melee",image:"/img/docs/torch.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local crowbar = Melee(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  "nanos-world::SM_Crowbar_01",\n  CollisionType.Normal,\n  true,\n  HandlingMode.SingleHandedMelee,\n  ""\n)\n\ncrowbar:SetScale(Vector(1.5, 1.5, 1.5))\ncrowbar:AddAnimationCharacterUse("nanos-world::AM_Mannequin_Melee_Slash_Attack")\ncrowbar:SetDamageSettings(0.3, 0.5)\ncrowbar:SetCooldown(1.0)\ncrowbar:SetBaseDamage(40)\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Melee",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"nanos world provides a special ",(0,a.kt)("em",{parentName:"p"},"Particle*")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"nanos-world::P_Grenade_Special")," which spawns different particles depending on the surface it explodes, and also if is underwater."),(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("em",{parentName:"p"},'This "Particle" is just a special identifier which can only be used on Grenades!'))),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Melee",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(f,{type:"Class",name:"Melee",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(y,{type:"Class",name:"Melee",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4945],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||c;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const c={title:"\ud83e\uddd1\u200d\ud83e\uddb2 CharacterSimple",description:"CharacterSimple is a simpler Character implementation with basic Movement implementation. Aimed for custom NPCs or basic Pawns",sidebar_position:0,tags:["class"]},s=void 0,i={unversionedId:"scripting-reference/classes/charactersimple",id:"scripting-reference/classes/charactersimple",title:"\ud83e\uddd1\u200d\ud83e\uddb2 CharacterSimple",description:"CharacterSimple is a simpler Character implementation with basic Movement implementation. Aimed for custom NPCs or basic Pawns",source:"@site/docs/scripting-reference/classes/charactersimple.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/charactersimple",permalink:"/de/docs/next/scripting-reference/classes/charactersimple",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17. M\xe4rz 2023",sidebarPosition:0,frontMatter:{title:"\ud83e\uddd1\u200d\ud83e\uddb2 CharacterSimple",description:"CharacterSimple is a simpler Character implementation with basic Movement implementation. Aimed for custom NPCs or basic Pawns",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83e\uddd1 Character",permalink:"/de/docs/next/scripting-reference/classes/character"},next:{title:"\ud83d\udcbe Database",permalink:"/de/docs/next/scripting-reference/classes/database"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),d=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),v=p("EventsDeclaration"),y={toc:l},b="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(b,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(m,{type:"Class",name:"CharacterSimple",mdxType:"HeaderDeclaration"}),(0,n.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Stack-O-Bot Character\nlocal stack_o_bot = CharacterSimple(Vector(100, 0, 100), Rotator(0, 0, 0), "nanos-world::SK_StackOBot", "nanos-world::ABP_StackOBot")\nstack_o_bot:SetSpeedSettings(275, 150)\n')),(0,n.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,n.kt)(u,{type:"Class",name:"CharacterSimple",mdxType:"ConstructorDeclaration"}),(0,n.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,n.kt)(d,{type:"Class",name:"CharacterSimple",mdxType:"StaticFunctionsDeclaration"}),(0,n.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,n.kt)(f,{type:"Class",name:"CharacterSimple",mdxType:"FunctionsDeclaration"}),(0,n.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,n.kt)(v,{type:"Class",name:"CharacterSimple",mdxType:"EventsDeclaration"}))}h.isMDXComponent=!0}}]);
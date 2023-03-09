"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={title:"Classes Guide",description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},i=void 0,o={unversionedId:"core-concepts/scripting/classes-guide",id:"core-concepts/scripting/classes-guide",title:"Classes Guide",description:"All you need to know about Classes",source:"@site/docs/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/fr/docs/next/core-concepts/scripting/classes-guide",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 mars 2023",sidebarPosition:0,frontMatter:{title:"Classes Guide",description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},sidebar:"main",previous:{title:"Compatibility Versions",permalink:"/fr/docs/next/core-concepts/packages/compatibility-versions"},next:{title:"Events Guide",permalink:"/fr/docs/next/core-concepts/scripting/events-guide"}},l={},p=[{value:"Classes",id:"classes",level:2},{value:"Base Classes",id:"base-classes",level:3},{value:"Spawning Entities",id:"spawning-entities",level:3},{value:"Destroying Entities",id:"destroying-entities",level:3},{value:"Static Classes",id:"static-classes",level:2},{value:"Utility Classes",id:"utility-classes",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All you need to know about Classes"),(0,s.kt)("p",null,"All entities in nanos world are represented by a Class. In Lua, classes are represented by ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/glossary/basic-types#table"},"tables"),". That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". In this page we will explain more about that."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In nanos world we have 3 types of Classes (or structures): ",(0,s.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Static Classes")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Utility Classes"),".")),(0,s.kt)("h2",{id:"classes"},"Classes"),(0,s.kt)("p",null,"If you read our ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"-- Spawning an entity with a Constructor\nlocal my_entity = Entity()\n\n-- Interacting with the entity with it's methods\nmy_entity:MyFunction()\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Access to ",(0,s.kt)("strong",{parentName:"p"},"Entities / Spawned Objects")," ",(0,s.kt)("strong",{parentName:"p"},"Methods")," are made with ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},":")),".")),(0,s.kt)("p",null,"This is how ",(0,s.kt)("strong",{parentName:"p"},"OOP")," works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, nanos world scripting is a ",(0,s.kt)("strong",{parentName:"p"},"modern approach")," to ",(0,s.kt)("strong",{parentName:"p"},"modern programming"),"."),(0,s.kt)("h3",{id:"base-classes"},"Base Classes"),(0,s.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),', which means we have base parent classes, and it\'s children which "inherits" all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ',(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/character"},"Character")," and ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/prop"},"Prop")," it is possible to call the function: ",(0,s.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also ",(0,s.kt)("strong",{parentName:"p"},"Static Methods")," to get and retrieve entities directly.")),(0,s.kt)("h3",{id:"spawning-entities"},"Spawning Entities"),(0,s.kt)("p",null,"Spawning entities in nanos world is extremely easy and straightforward, let's say we want to spawn a Character:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"local my_character = Character()\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Each Class will contain it's own ",(0,s.kt)("strong",{parentName:"p"},"Constructor"),", ",(0,s.kt)("strong",{parentName:"p"},"Properties"),", ",(0,s.kt)("strong",{parentName:"p"},"Methods")," and ",(0,s.kt)("strong",{parentName:"p"},"Events"),"."),(0,s.kt)("p",{parentName:"admonition"},"Check all Classes that nanos world provides in the sidebar ",(0,s.kt)("strong",{parentName:"p"},"Scripting Reference -> Classes")," item.")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Keep in mind that some Classes can only be spawned in the ",(0,s.kt)("strong",{parentName:"p"},"Server"),", others can only be spawned in the ",(0,s.kt)("strong",{parentName:"p"},"Client"),".")),(0,s.kt)("h3",{id:"destroying-entities"},"Destroying Entities"),(0,s.kt)("p",null,"All classes ","(","but Player",")"," allow you to destroy them with the method ",(0,s.kt)("inlineCode",{parentName:"p"},"Destroy()"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"my_character:Destroy()\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Destroying an Entity will trigger the event ",(0,s.kt)("inlineCode",{parentName:"p"},"Destroy")," and also will automatically detach all attached entities it had attached*."),(0,s.kt)("p",{parentName:"admonition"},"*",(0,s.kt)("em",{parentName:"p"},"If you attached entities with ",(0,s.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," parameter, all attached entities will be destroyed as well \ud83d\ude09"),".")),(0,s.kt)("h2",{id:"static-classes"},"Static Classes"),(0,s.kt)("p",null,"Static Classes in nanos world are Classes which you cannot Spawn. Instead you can use it's methods directly with ",(0,s.kt)("inlineCode",{parentName:"p"},"."),"."),(0,s.kt)("p",null,"For example, if you want to interact with World ","(","move the sun, set it raining, etc",")",", you will need the ",(0,s.kt)("inlineCode",{parentName:"p"},"World")," Static Class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Makes it 9:25 AM\nWorld.SetTime(9, 25)\n")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Access to ",(0,s.kt)("strong",{parentName:"p"},"Static Classes / Static Methods")," are made with ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},".")),".")),(0,s.kt)("h2",{id:"utility-classes"},"Utility Classes"),(0,s.kt)("p",null,"Besides Classes and Static Classes, we have the ",(0,s.kt)("strong",{parentName:"p"},"Utility Classes"),"! Those are mostly structs used in nanos world API such as Vector, Rotator, Color, JSON and some others."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"All Utility Classes are Open Sourced at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!")))}m.isMDXComponent=!0}}]);
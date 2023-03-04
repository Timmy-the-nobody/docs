"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={title:"Dimensions",description:"All you need to know about Dimensions",tags:["scripting"]},a=void 0,s={unversionedId:"core-concepts/scripting/dimensions",id:"core-concepts/scripting/dimensions",title:"Dimensions",description:"All you need to know about Dimensions",source:"@site/docs/core-concepts/scripting/dimensions.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/dimensions",permalink:"/de/docs/next/core-concepts/scripting/dimensions",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"Dimensions",description:"All you need to know about Dimensions",tags:["scripting"]},sidebar:"main",previous:{title:"Inheriting Classes",permalink:"/de/docs/next/core-concepts/scripting/inheriting-classes"},next:{title:"Discord Integration",permalink:"/de/docs/next/core-concepts/scripting/discord-integration"}},l={},c=[{value:"What is a Dimension",id:"what-is-a-dimension",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Actor Hierarchy",id:"actor-hierarchy",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All you need to know about Dimensions"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(74322).Z,width:"2000",height:"1125"})),(0,i.kt)("h2",{id:"what-is-a-dimension"},"What is a Dimension"),(0,i.kt)("p",null,"Dimensions are separated worlds in the client-side, where players and actors are separated. In nanos world, they are represented by numbers. It is possible to have up to 65.535 different dimensions."),(0,i.kt)("p",null,"By default all players and entities are in the dimension ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". By moving a Player to another dimension, all entities that are not from that dimension will be destroyed to that player, and all entities in the new dimension will spawn for him."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("p",null,"To send an actor to another dimension, the API is very simple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"actor:SetDimension(number)\n")),(0,i.kt)("p",null,"Also we've got a new method to facilitate the use of events, this will be sent to all players in that dimension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Events.BroadcastRemoteDimension(dimension, event_name, params...)\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you send an entity through remote events that is not in the same dimension as the Player, the argument will be replaced by ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," and a warning will show up.")),(0,i.kt)("h2",{id:"actor-hierarchy"},"Actor Hierarchy"),(0,i.kt)("p",null,'By sending an entity, their "children" will be moved to that dimension too, for example:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When sending an ",(0,i.kt)("strong",{parentName:"li"},"Actor"),", all the other attached ",(0,i.kt)("strong",{parentName:"li"},"Actors")," will move as well."),(0,i.kt)("li",{parentName:"ul"},"When sending a ",(0,i.kt)("strong",{parentName:"li"},"Player"),", the ",(0,i.kt)("strong",{parentName:"li"},"Character")," will move too."),(0,i.kt)("li",{parentName:"ul"},"When sending a ",(0,i.kt)("strong",{parentName:"li"},"Character"),", the ",(0,i.kt)("strong",{parentName:"li"},"Player")," is not moved together, but the grabbing ",(0,i.kt)("strong",{parentName:"li"},"Weapons")," or ",(0,i.kt)("strong",{parentName:"li"},"Props")," (and attached ",(0,i.kt)("strong",{parentName:"li"},"Actors"),") will."),(0,i.kt)("li",{parentName:"ul"},"When sending a ",(0,i.kt)("strong",{parentName:"li"},"Vehicle"),", all ",(0,i.kt)("strong",{parentName:"li"},"Characters")," will leave the vehicle (this will be improved soon\u2122).")))}m.isMDXComponent=!0},74322:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dimensions-edbd8ff8503cd2fd0d18772e32841aa7.webp"}}]);
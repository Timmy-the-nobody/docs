"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Artificial Intelligence",description:"How AI works in nanos world",sidebar_position:6,tags:["scripting"],keywords:["scripting","AI"]},a=void 0,s={unversionedId:"core-concepts/scripting/artificial-intelligence",id:"version-latest/core-concepts/scripting/artificial-intelligence",title:"Artificial Intelligence",description:"How AI works in nanos world",source:"@site/versioned_docs/version-latest/core-concepts/scripting/artificial-intelligence.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/artificial-intelligence",permalink:"/docs/core-concepts/scripting/artificial-intelligence",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/artificial-intelligence.md",tags:[{label:"scripting",permalink:"/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:6,frontMatter:{title:"Artificial Intelligence",description:"How AI works in nanos world",sidebar_position:6,tags:["scripting"],keywords:["scripting","AI"]},sidebar:"version-latest/main",previous:{title:"User Interface",permalink:"/docs/core-concepts/scripting/user-interface"},next:{title:"Traces & Raycasting",permalink:"/docs/core-concepts/scripting/traces-and-raycasting"}},c={},l=[{value:"Navigation Mesh",id:"navigation-mesh",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How AI works in nanos world"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udea7 This page is under construction.")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Character")," spawned without a ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/player"},"Player")," possessing it will automatically be possessed by an ",(0,i.kt)("strong",{parentName:"p"},"AI")," Controller. Which means you can use Character methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},":MoveTo()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":LookAt()"),"."),(0,i.kt)("p",null,"In nanos world, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players ","(","please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/scripting/authority-concepts#network-authority"},"Network Authority"),")",", which means the ",(0,i.kt)("strong",{parentName:"p"},"AI")," will only work if there is a Player connected to the server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you input a NPC to ",(0,i.kt)("inlineCode",{parentName:"p"},":MoveTo()")," somewhere and there is no Player connected, he will only start walking once a Player joins the server.")),(0,i.kt)("h2",{id:"navigation-mesh"},"Navigation Mesh"),(0,i.kt)("p",null,"In order to NPCs to figure out the path to walk, the map will need to have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/"},"NavMesh")," configured."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46061).Z,width:"1086",height:"304"})))}u.isMDXComponent=!0},46061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/artificial-intelligence-927ddbb4394769581af3e3fd81c4c67d.jpg"}}]);
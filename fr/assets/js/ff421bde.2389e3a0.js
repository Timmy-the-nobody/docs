"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Artificial Intelligence",description:"How AI works in nanos world",sidebar_position:6,tags:["scripting"],keywords:["scripting","AI"]},a=void 0,s={unversionedId:"core-concepts/scripting/artificial-intelligence",id:"version-latest/core-concepts/scripting/artificial-intelligence",title:"Artificial Intelligence",description:"How AI works in nanos world",source:"@site/versioned_docs/version-latest/core-concepts/scripting/artificial-intelligence.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/artificial-intelligence",permalink:"/fr/docs/core-concepts/scripting/artificial-intelligence",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 mars 2023",sidebarPosition:6,frontMatter:{title:"Artificial Intelligence",description:"How AI works in nanos world",sidebar_position:6,tags:["scripting"],keywords:["scripting","AI"]},sidebar:"version-latest/main",previous:{title:"User Interface",permalink:"/fr/docs/core-concepts/scripting/user-interface"},next:{title:"Traces & Raycasting",permalink:"/fr/docs/core-concepts/scripting/traces-and-raycasting"}},c={},l=[{value:"Navigation Mesh",id:"navigation-mesh",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How AI works in nanos world"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udea7 This page is under construction.")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/character"},"Character")," spawned without a ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/player"},"Player")," possessing it will automatically be possessed by an ",(0,i.kt)("strong",{parentName:"p"},"AI")," Controller. Which means you can use Character methods such as ",(0,i.kt)("inlineCode",{parentName:"p"},":MoveTo()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":LookAt()"),"."),(0,i.kt)("p",null,"In nanos world, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players ","(","please refer to ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/core-concepts/scripting/authority-concepts#network-authority"},"Network Authority"),")",", which means the ",(0,i.kt)("strong",{parentName:"p"},"AI")," will only work if there is a Player connected to the server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you input a NPC to ",(0,i.kt)("inlineCode",{parentName:"p"},":MoveTo()")," somewhere and there is no Player connected, he will only start walking once a Player joins the server.")),(0,i.kt)("h2",{id:"navigation-mesh"},"Navigation Mesh"),(0,i.kt)("p",null,"In order to NPCs to figure out the path to walk, the map will need to have a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/"},"NavMesh")," configured."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(46061).Z,width:"1086",height:"304"})))}u.isMDXComponent=!0},46061:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/artificial-intelligence-927ddbb4394769581af3e3fd81c4c67d.jpg"}}]);
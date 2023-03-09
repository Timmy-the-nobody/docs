"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2723],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=c(n),g=r,u=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return n?a.createElement(u,s(s({ref:e},d),{},{components:n})):a.createElement(u,s({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[m]="string"==typeof t?t:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45790:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Retargeting Animations",description:"How to assign custom animations to nanos world base Skeleton",tags:["assets","character","animations"],keywords:["animation","character","unreal"],sidebar_position:1},s=void 0,i={unversionedId:"assets-modding/creating-assets/animations/characters/retargeting-animations",id:"assets-modding/creating-assets/animations/characters/retargeting-animations",title:"Retargeting Animations",description:"How to assign custom animations to nanos world base Skeleton",source:"@site/docs/assets-modding/creating-assets/animations/characters/retargeting-animations.md",sourceDirName:"assets-modding/creating-assets/animations/characters",slug:"/assets-modding/creating-assets/animations/characters/retargeting-animations",permalink:"/fr/docs/next/assets-modding/creating-assets/animations/characters/retargeting-animations",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"assets",permalink:"/fr/docs/next/tags/assets"},{label:"character",permalink:"/fr/docs/next/tags/character"},{label:"animations",permalink:"/fr/docs/next/tags/animations"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 mars 2023",sidebarPosition:1,frontMatter:{title:"Retargeting Animations",description:"How to assign custom animations to nanos world base Skeleton",tags:["assets","character","animations"],keywords:["animation","character","unreal"],sidebar_position:1},sidebar:"main",previous:{title:"Weapons Meshes",permalink:"/fr/docs/next/assets-modding/creating-assets/skeletal-meshes/weapons-meshes"},next:{title:"Locomotion Animations",permalink:"/fr/docs/next/assets-modding/creating-assets/animations/characters/character-locomotion-animations"}},l={},c=[{value:"Assigning nanos world Skeleton",id:"assigning-nanos-world-skeleton",level:2}],d={toc:c},m="wrapper";function p(t){let{components:e,...o}=t;return(0,r.kt)(m,(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to assign custom animations to nanos world base Skeleton."),(0,r.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before proceeding, please make sure you read ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/next/assets-modding/creating-assets/importing-assets"},"Creating & Importing Assets")," Guide. You will need to use the ADK for this guide.")),(0,r.kt)("p",null,"To be able to import custom Character animations, first you need to assign them to nanos world default Skeleton."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You can only retarget animations which were created for ",(0,r.kt)("strong",{parentName:"p"},"Unreal Engine 4 Mannequin Skeleton"),".")),(0,r.kt)("p",null,"Since Unreal Engine 5, they removed a convenient way of doing so, with Retargeting. Now we need to use a different approach."),(0,r.kt)("h2",{id:"assigning-nanos-world-skeleton"},"Assigning nanos world Skeleton"),(0,r.kt)("p",null,"For that, right click your animation (or all of them at once), and open the ",(0,r.kt)("strong",{parentName:"p"},"Bulk Editor via Property Matrix"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(47013).Z,width:"836",height:"839"})),(0,r.kt)("p",null,"You will have opened a screen like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56302).Z,width:"1914",height:"383"})),(0,r.kt)("p",null,"Now select all of them, and in the ",(0,r.kt)("strong",{parentName:"p"},"Display"),' window, search for "',(0,r.kt)("strong",{parentName:"p"},"Skeleton"),'":'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(28177).Z,width:"401",height:"179"})),(0,r.kt)("p",null,'Now click the right "matrix" button and search for ',(0,r.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/Characters/Common")," folder:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(35536).Z,width:"629",height:"441"})),(0,r.kt)("p",null,"And that's it! Assign the SKEL_Mannequin and save all Animations edited through the Property Matrix. Now all of them are using the correct nanos world Skeleton and can be exported and used seamlessly in nanos world!"))}p.isMDXComponent=!0},47013:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/retargeting-animations-01-2b65908fcde99fea2d8802bc339db950.webp"},56302:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/retargeting-animations-02-0259b3f292a5c012b34eaf888693b045.webp"},28177:(t,e,n)=>{n.d(e,{Z:()=>a});const a="data:image/webp;base64,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"},35536:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/retargeting-animations-04-8964dd3693ce798474b6b6fe5107e9ce.webp"}}]);
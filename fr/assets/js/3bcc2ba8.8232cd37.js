"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5300],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return a?r.createElement(g,o(o({ref:t},d),{},{components:a})):r.createElement(g,o({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const s={title:"Water",description:"How to add Unreal Water in your Level and seamlessly integrate it with nanos world",tags:["assets","water"],keywords:["map","level","water","unreal","physics"]},o=void 0,i={unversionedId:"assets-modding/creating-assets/maps-and-levels/water",id:"assets-modding/creating-assets/maps-and-levels/water",title:"Water",description:"How to add Unreal Water in your Level and seamlessly integrate it with nanos world",source:"@site/docs/assets-modding/creating-assets/maps-and-levels/water.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/water",permalink:"/fr/docs/next/assets-modding/creating-assets/maps-and-levels/water",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"assets",permalink:"/fr/docs/next/tags/assets"},{label:"water",permalink:"/fr/docs/next/tags/water"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 mars 2023",frontMatter:{title:"Water",description:"How to add Unreal Water in your Level and seamlessly integrate it with nanos world",tags:["assets","water"],keywords:["map","level","water","unreal","physics"]},sidebar:"main",previous:{title:"Map Script and Configuration",permalink:"/fr/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"},next:{title:"Default Asset Pack List",permalink:"/fr/docs/next/assets-modding/default-asset-pack/default-assets-list"}},l={},c=[{value:"How Objects react to Water",id:"how-objects-react-to-water",level:2},{value:"Props &amp; Pickables",id:"props--pickables",level:3},{value:"Vehicles",id:"vehicles",level:3},{value:"Character",id:"character",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"How to add Unreal Water in your Level and seamlessly integrate it with nanos world"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(18724).Z,width:"1367",height:"767"})),(0,n.kt)("p",null,"Since Unreal Engine 4.26, it is possible to use an amazing and beautiful ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Water System")," in your Maps. And nanos world managed to integrate this system seamlessly in our game."),(0,n.kt)("p",null,"Any ",(0,n.kt)("strong",{parentName:"p"},"Prop"),", ",(0,n.kt)("strong",{parentName:"p"},"Character"),", ",(0,n.kt)("strong",{parentName:"p"},"Vehicle"),", or even ",(0,n.kt)("strong",{parentName:"p"},"Pickables")," will react procedurally to this Water System, no additional tweaks are necessary, you can just drag-n-drop your Water Actors into your Level and it works!"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Using the new Water Plugin from Unreal requires you enabling it in your ADK Project, and also requires you have installed Visual Studio and all usual .NET dependencies for compiling it.")),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Unreal Engine Documentation")," you can find dozens of guides and tutorials on how to use it, and don't worry, everything will work once you import it into nanos world!"),(0,n.kt)("h2",{id:"how-objects-react-to-water"},"How Objects react to Water"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(90841).Z,width:"1157",height:"655"})),(0,n.kt)("p",null,"Unreal Water has the concept of Buoyance Spheres, each sphere represents a Buoyance element which will make the object float."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We still want to expose ways of you customizing and controlling the Buoyance Spheres through scripting!")),(0,n.kt)("h3",{id:"props--pickables"},"Props & Pickables"),(0,n.kt)("p",null,"Props and Pickables are the most straightforward objects, they will automatically get ",(0,n.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere at the same size of their Meshes."),(0,n.kt)("h3",{id:"vehicles"},"Vehicles"),(0,n.kt)("p",null,"Vehicles will automatically get ",(0,n.kt)("strong",{parentName:"p"},"four")," Buoyance Spheres, positioned around each Wheel, which will make Vehicles float and do not turn that easily."),(0,n.kt)("h3",{id:"character"},"Character"),(0,n.kt)("p",null,"Characters use a more complex system, integrated with Swimming states and animations. It uses ",(0,n.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere as well, slightly translated to make the swimming animation transitions work perfectly."))}u.isMDXComponent=!0},90841:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/water-boat-5a9c2e08841c23f153b5a2590f619e63.jpg"},18724:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/water-6dd47e5a60534aed5c1182330f691159.jpg"}}]);
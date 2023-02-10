"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=d(a),m=s,g=h["".concat(o,".").concat(m)]||h[m]||c[m]||r;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(87462),s=(a(67294),a(3905));const r={title:"Vehicles Meshes",description:"How to create your own Vehicles",tags:["assets","vehicles","skeletal-meshes"],keywords:["vehicle","unreal"]},l=void 0,i={unversionedId:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",id:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",title:"Vehicles Meshes",description:"How to create your own Vehicles",source:"@site/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"},{label:"vehicles",permalink:"/docs/next/tags/vehicles"},{label:"skeletal-meshes",permalink:"/docs/next/tags/skeletal-meshes"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1676050486,formattedLastUpdatedAt:"Feb 10, 2023",frontMatter:{title:"Vehicles Meshes",description:"How to create your own Vehicles",tags:["assets","vehicles","skeletal-meshes"],keywords:["vehicle","unreal"]},sidebar:"main",previous:{title:"Characters Meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/characters-meshes"},next:{title:"Weapons Meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/weapons-meshes"}},o={},d=[{value:"Preparing a Skeletal Mesh",id:"preparing-a-skeletal-mesh",level:2},{value:"Adding Dynamic Head &amp; Tail Lights",id:"adding-dynamic-head--tail-lights",level:2},{value:"Exporting the Vehicle",id:"exporting-the-vehicle",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Vehicles in nanos world implement Unreal's ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Vehicles/"},"Wheeled Vehicle"),". The base Mesh of a vehicle is a ",(0,s.kt)("strong",{parentName:"p"},"Skeletal Mesh"),"."),(0,s.kt)("h2",{id:"preparing-a-skeletal-mesh"},"Preparing a Skeletal Mesh"),(0,s.kt)("p",null,'There is no secret to import a Vehicle Skeletal Mesh to nanos world. Any Skeletal Mesh with any Skeleton will work. The only "rule" is to it have 4 wheels bones, so nanos world Vehicle systems can properly rotate them.'),(0,s.kt)("p",null,"Take a look on one of the default nanos world Vehicles Skeleton:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(63521).Z,width:"1533",height:"914"})),(0,s.kt)("p",null,"It has only 4 bones behind the root, for each Wheel: ",(0,s.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Left"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Right"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Left")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Right"),". Yours don't need to follow this naming, as the Wheel Bone names are set through Lua."),(0,s.kt)("h2",{id:"adding-dynamic-head--tail-lights"},"Adding Dynamic Head & Tail Lights"),(0,s.kt)("p",null,"It is possible to configure your Vehicle Materials to use the built-in Headlights and Taillights system from nanos world:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(41508).Z,width:"1064",height:"735"})),(0,s.kt)("p",null,"For that, you will need to setup 4 parameters in your Vehicle's Material:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Scalar")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"LightsEnabled"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"A scalar which will be toggled ",(0,s.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,s.kt)("inlineCode",{parentName:"td"},"1")," to turn ALL lights ON and OFF (e.g. when Vehicle Engine is ON/OFF)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Vector")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"HeadLightsColor"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Head Lights color")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Vector")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"BrakeLightsColor"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Brake Lights color")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"Vector")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"ReverseLightsColor"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"The Reverse Lights color")))),(0,s.kt)("p",null,"You should multiply/lerp all Colors with your texture mask and sum them into the Emissive pin. Use the LightsEnabled to do a final multiply on the result, like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2887).Z,width:"1920",height:"1029"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In this example I multiplied the final result to 30 to give a bigger glow effect.")),(0,s.kt)("h2",{id:"exporting-the-vehicle"},"Exporting the Vehicle"),(0,s.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."))}c.isMDXComponent=!0},63521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import-vehicles-01-e2e119261b94108ac08cea3dbfeed722.webp"},2887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import-vehicles-02-2cc75a389447b4dceec12c45d11e2648.webp"},41508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import-vehicles-03-dbf6afb468055cffaaf6dae81d889db2.webp"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8074],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),p=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return a?s.createElement(g,l(l({ref:t},h),{},{components:a})):s.createElement(g,l({ref:t},h))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=a(87462),n=(a(67294),a(3905));const r={title:"Vehicles Meshes",description:"How to create your own Vehicles",tags:["assets","vehicles","skeletal-meshes"],keywords:["vehicle","unreal"]},l=void 0,i={unversionedId:"assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",id:"version-latest/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",title:"Vehicles Meshes",description:"How to create your own Vehicles",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",permalink:"/pt-BR/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"assets",permalink:"/pt-BR/docs/tags/assets"},{label:"vehicles",permalink:"/pt-BR/docs/tags/vehicles"},{label:"skeletal-meshes",permalink:"/pt-BR/docs/tags/skeletal-meshes"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 de mar. de 2023",frontMatter:{title:"Vehicles Meshes",description:"How to create your own Vehicles",tags:["assets","vehicles","skeletal-meshes"],keywords:["vehicle","unreal"]},sidebar:"version-latest/main",previous:{title:"Characters Meshes",permalink:"/pt-BR/docs/assets-modding/creating-assets/skeletal-meshes/characters-meshes"},next:{title:"Weapons Meshes",permalink:"/pt-BR/docs/assets-modding/creating-assets/skeletal-meshes/weapons-meshes"}},o={},p=[{value:"Preparing a Skeletal Mesh",id:"preparing-a-skeletal-mesh",level:2},{value:"Preparing the Physical Asset",id:"preparing-the-physical-asset",level:2},{value:"Adding Dynamic Head &amp; Tail Lights",id:"adding-dynamic-head--tail-lights",level:2},{value:"Exporting the Vehicle",id:"exporting-the-vehicle",level:2}],h={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,s.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Vehicles in nanos world implement Unreal's ",(0,n.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Vehicles/"},"Wheeled Vehicle"),". The base Mesh of a vehicle is a ",(0,n.kt)("strong",{parentName:"p"},"Skeletal Mesh"),"."),(0,n.kt)("h2",{id:"preparing-a-skeletal-mesh"},"Preparing a Skeletal Mesh"),(0,n.kt)("p",null,'There is no secret to import a Vehicle Skeletal Mesh. Any Skeletal Mesh with any Skeleton will work. The only "rule" is to it have 4 wheels bones, so the Vehicle systems can properly rotate them.'),(0,n.kt)("p",null,"Take a look on one of the default Vehicles Skeleton:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(63521).Z,width:"1535",height:"871"})),(0,n.kt)("p",null,"This vehicle used in the example only has 4 bones below the root, for each Wheel: ",(0,n.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Left"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Wheel_Front_Right"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Left")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Wheel_Rear_Right"),". Yours don't need to follow this naming, as the Wheel Bone names are set through Lua."),(0,n.kt)("h2",{id:"preparing-the-physical-asset"},"Preparing the Physical Asset"),(0,n.kt)("p",null,"Another important step is setting up the Physics Asset for the Skeletal Mesh. If your Skeletal Mesh doesn't have it yet, you can create and assign a new one by right-clicking on the Skeletal Mesh and creating it:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(29282).Z,width:"604",height:"781"})),(0,n.kt)("p",null,"Usually you only need one or a few simple boxes in the format of the Vehicle, you can add new ones by right clicking the root bone like that:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8920).Z,width:"867",height:"795"})),(0,n.kt)("p",null,"You will end up like that:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(66639).Z,width:"1533",height:"872"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do not")," add physics shapes to the Wheels! Usually you don't need it and it will only cause physics problems. In normal circumstances you only need to add collision shapes to the root bone!")),(0,n.kt)("h2",{id:"adding-dynamic-head--tail-lights"},"Adding Dynamic Head & Tail Lights"),(0,n.kt)("p",null,"It is possible to configure your Vehicle Materials to use the built-in Headlights and Taillights system:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(41508).Z,width:"1064",height:"735"})),(0,n.kt)("p",null,"For that, you will need to setup 4 parameters in your Vehicle's Material:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Scalar")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"LightsEnabled"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"A scalar which will be toggled ",(0,n.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"1")," to turn ALL lights ON and OFF (e.g. when Vehicle Engine is ON/OFF)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Vector")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"HeadLightsColor"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Head Lights color")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Vector")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"BrakeLightsColor"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Brake Lights color")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Vector")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"ReverseLightsColor"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Reverse Lights color")))),(0,n.kt)("p",null,"You should multiply/lerp all Colors with your texture mask and sum them into the Emissive pin. Use the LightsEnabled to do a final multiply on the result, like this:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2887).Z,width:"1920",height:"1029"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this example I multiplied the final result to 30 to give a bigger glow effect.")),(0,n.kt)("h2",{id:"exporting-the-vehicle"},"Exporting the Vehicle"),(0,n.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,n.kt)("a",{parentName:"p",href:"/pt-BR/docs/assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."))}d.isMDXComponent=!0},63521:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/import-vehicles-01-d31b48a1ef303a5fb79bd3abbf2ececc.webp"},2887:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/import-vehicles-02-2cc75a389447b4dceec12c45d11e2648.webp"},41508:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/import-vehicles-03-dbf6afb468055cffaaf6dae81d889db2.webp"},66639:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/import-vehicles-04-226956c10811cbe11fa966a78fbe59e9.webp"},29282:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/import-vehicles-05-09c143ef51dbb4e96dfaf80cf45911f1.webp"},8920:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/import-vehicles-06-48b5e60c8fc66aefed4a0b41a8c45933.webp"}}]);
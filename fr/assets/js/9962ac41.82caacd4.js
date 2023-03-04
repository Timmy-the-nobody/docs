"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),g=o,h=m["".concat(l,".").concat(g)]||m[g]||c[g]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},64453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={title:"Weapon Reload Animations",description:"How to create custom Weapon Reload Animations",tags:["assets","weapon","animations"],keywords:["animation","weapon","unreal"]},r=void 0,s={unversionedId:"assets-modding/creating-assets/animations/weapon-reload-animations",id:"version-latest/assets-modding/creating-assets/animations/weapon-reload-animations",title:"Weapon Reload Animations",description:"How to create custom Weapon Reload Animations",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/animations/weapon-reload-animations.md",sourceDirName:"assets-modding/creating-assets/animations",slug:"/assets-modding/creating-assets/animations/weapon-reload-animations",permalink:"/fr/docs/assets-modding/creating-assets/animations/weapon-reload-animations",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"assets",permalink:"/fr/docs/tags/assets"},{label:"weapon",permalink:"/fr/docs/tags/weapon"},{label:"animations",permalink:"/fr/docs/tags/animations"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4 mars 2023",frontMatter:{title:"Weapon Reload Animations",description:"How to create custom Weapon Reload Animations",tags:["assets","weapon","animations"],keywords:["animation","weapon","unreal"]},sidebar:"version-latest/main",previous:{title:"Importing Mixamo Animations",permalink:"/fr/docs/assets-modding/creating-assets/animations/characters/mixamo-animations"},next:{title:"Creating Custom Maps",permalink:"/fr/docs/assets-modding/creating-assets/maps-and-levels/importing-maps"}},l={},d=[{value:"Step 1: Create an Animation Montage with your Animation",id:"step-1-create-an-animation-montage-with-your-animation",level:2},{value:"Step 2: Add Montage Notifies to the Montage",id:"step-2-add-montage-notifies-to-the-montage",level:2},{value:"Step 3: Define the correct Name",id:"step-3-define-the-correct-name",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to create custom Weapon Reload Animations."),(0,o.kt)("p",null,"Now it is possible to create custom reload animations for nanos world! To make it work you just need to setup some Notifies at the position you want the reload event occurs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9382).Z,width:"1145",height:"636"})),(0,o.kt)("h2",{id:"step-1-create-an-animation-montage-with-your-animation"},"Step 1: Create an Animation Montage with your Animation"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(73113).Z,width:"1914",height:"981"})),(0,o.kt)("p",null,"For that, you can just right click any Animation Sequence and Create a new Animation Montage like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83298).Z,width:"1220",height:"885"})),(0,o.kt)("h2",{id:"step-2-add-montage-notifies-to-the-montage"},"Step 2: Add Montage Notifies to the Montage"),(0,o.kt)("p",null,"At the bottom (where the timeline is) it is possible to add new Animation Notifies, these are events that trigger special codes to handle the reload."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(41563).Z,width:"1158",height:"310"})),(0,o.kt)("p",null,"After adding a notify, you can move it to where you want, note you can set the Name of it in the top right corner:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80221).Z,width:"1907",height:"936"})),(0,o.kt)("h2",{id:"step-3-define-the-correct-name"},"Step 3: Define the correct Name"),(0,o.kt)("p",null,"There are some special names which can be used in there that will trigger special actions for reloading the weapon"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Notify Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Reload_Load"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"This is the main notify, which will trigger the actual reload function internally and update the weapon's ammo. This will destroy the Magazine StaticMesh spawned in the left hand.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Reload_Unload"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"This will hide the Weapon's ",(0,o.kt)("inlineCode",{parentName:"td"},"b_gun_mag")," bone and spawn a Magazine StaticMesh attached to the left hand.",(0,o.kt)("br",null),"The magazine mesh can be set with ",(0,o.kt)("a",{parentName:"td",href:"/fr/docs/scripting-reference/classes/weapon#setmagazinemesh"},"Weapon:SetMagazineMesh()"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Reload_UnloadAndDetach"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"This will hide the Weapon's ",(0,o.kt)("inlineCode",{parentName:"td"},"b_gun_mag"),", spawn the Magazine StaticMesh at the bone location and immediately detach it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Reload_SpawnMagazine"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"This will just spawn the Magazine StaticMesh attached to the left hand.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Reload_DropMagazine"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"This will drop the Magazine StaticMesh from the left hand.")))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"On Shotguns or Revolvers, you usually will have only ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_Load")," being called, as you don't have Magazine StaticMeshes and is only adding new bullets into it."),(0,o.kt)("p",null,"On Pistols, you may want to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_UnloadAndDetach"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_SpawnMagazine")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_Load")," respectively to just release the Magazine from the weapon, then spawn a new one in the hand and finally do the load."),(0,o.kt)("p",null,"On Rifles, you may want to call ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_Unload"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_DropMagazine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_SpawnMagazine")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Reload_Load")," respectively to hide and spawn a Magazine in the left hand, then after few ms drop it (throwing it back), then spawning a new Magazine in the hand and attaching it to the weapon finishing the load."))}c.isMDXComponent=!0},9382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-animations-01-2edd45af2e5432b06b41413891d620f7.jpg"},73113:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-animations-02-d2f142cb64343a6d43b6befbe4aa23ce.jpg"},41563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-animations-03-37fdc4d867da6c841a1560028666cf5f.jpg"},83298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-animations-04-36a3ded6260826aae3d748eb4937ff1b.jpg"},80221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-animations-05-08700f14bfa94ee2f294d1d721aff35d.jpg"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return r?n.createElement(g,s(s({ref:t},d),{},{components:r})):n.createElement(g,s({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Monster Truck",description:"How to create a Monster Truck using the Vehicle system",tags:["tutorial-example","scripting","assets"]},s=void 0,i={unversionedId:"getting-started/tutorials-and-examples/monster-truck",id:"getting-started/tutorials-and-examples/monster-truck",title:"Monster Truck",description:"How to create a Monster Truck using the Vehicle system",source:"@site/docs/getting-started/tutorials-and-examples/monster-truck.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/monster-truck",permalink:"/de/docs/next/getting-started/tutorials-and-examples/monster-truck",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"},{label:"assets",permalink:"/de/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9. M\xe4rz 2023",frontMatter:{title:"Monster Truck",description:"How to create a Monster Truck using the Vehicle system",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Hosting Server 4Free - Google Cloud",permalink:"/de/docs/next/getting-started/tutorials-and-examples/hosting-server-4free-gcp"},next:{title:"Name Tags",permalink:"/de/docs/next/getting-started/tutorials-and-examples/name-tags"}},l={},c=[],d={toc:c},u="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create a Monster Truck using the Vehicle system."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(11560).Z,width:"1673",height:"790"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Pickup\nlocal vehicle = Vehicle(Vector(0, 0, 100), Rotator(), "nanos-world::SK_Pickup", 0, true, false, true, "nanos-world::A_Vehicle_Engine_10")\n\n-- Configures it\nvehicle:SetEngineSetup(4500)\nvehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)\nvehicle:SetHeadlightsSetup(Vector(250, 0, 70))\n\n-- Adds 4 Static Mesh wheels attached to each mesh\'s Wheel Bone (those won\'t have collision and are visual only)\nvehicle:AddStaticMeshAttached("wheel_rear_left",   "nanos-world::SM_Tire_01", "Wheel_Rear_Left",   Vector(0, -35, 0), Rotator(0, -90, 0))\nvehicle:AddStaticMeshAttached("wheel_rear_right",  "nanos-world::SM_Tire_01", "Wheel_Rear_Right",  Vector(0,  45, 0), Rotator(0, -90, 0))\nvehicle:AddStaticMeshAttached("wheel_front_left",  "nanos-world::SM_Tire_01", "Wheel_Front_Left",  Vector(0, -35, 0), Rotator(0,  90, 0))\nvehicle:AddStaticMeshAttached("wheel_front_right", "nanos-world::SM_Tire_01", "Wheel_Front_Right", Vector(0,  45, 0), Rotator(0,  90, 0))\n\n-- Configures each "Physical" Wheel, note that as our Wheel Static Mesh has height of 160 and width 60, we configure the wheels to have radius\n-- of 80 and width 60, also because of SK_Pickup bones are not perfectly aligned, left wheels must be laterally offset a bit\nvehicle:SetWheel(0, "Wheel_Front_Left",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))\nvehicle:SetWheel(1, "Wheel_Front_Right", 80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))\nvehicle:SetWheel(2, "Wheel_Rear_Left",   80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0, -80, 0))\nvehicle:SetWheel(3, "Wheel_Rear_Right",  80, 60, 30, 20, 0.25, 2, 17, 1000, 0, 100, 10, 7, 1, 1500, 3000, true, Vector(0,  90, 0))\n\n-- Adds only a Passenger and Driver door/seat\nvehicle:SetDoor(0, Vector(50, -75, 105), Vector( 8, -32.5,  95), Rotator(0, 0, 10), 70, -150)\nvehicle:SetDoor(1, Vector(50,  75, 105), Vector(25,    50,  90), Rotator(0, 0,  0), 70,  150)\n\n-- As we set AutoCreatePhysics = false on the constructor, we need to call this after configuring it (so if there is any player connected, he\n-- doesn\'t need to recreate the physics for each function called - improving the performance)\nvehicle:RecreatePhysics()\n')))}h.isMDXComponent=!0},11560:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monster-truck-9f27ed731e4e590c3952b95994873271.webp"}}]);
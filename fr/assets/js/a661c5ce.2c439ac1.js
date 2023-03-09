"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"\ud83d\ude99 Vehicle",description:"Vehicles are wheeled entities which Characters can possesses and drive.",sidebar_position:0,tags:["class"]},i=void 0,c={unversionedId:"scripting-reference/classes/vehicle",id:"scripting-reference/classes/vehicle",title:"\ud83d\ude99 Vehicle",description:"Vehicles are wheeled entities which Characters can possesses and drive.",source:"@site/docs/scripting-reference/classes/vehicle.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/vehicle",permalink:"/fr/docs/next/scripting-reference/classes/vehicle",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 mars 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\ude99 Vehicle",description:"Vehicles are wheeled entities which Characters can possesses and drive.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83e\udea4 Trigger",permalink:"/fr/docs/next/scripting-reference/classes/trigger"},next:{title:"\ud83d\udd2b Weapon",permalink:"/fr/docs/next/scripting-reference/classes/weapon"}},s={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("HeaderDeclaration"),d=p("ConstructorDeclaration"),h=p("ReferenceLink"),f=p("StaticFunctionsDeclaration"),m=p("FunctionsDeclaration"),v=p("EventsDeclaration"),y={toc:l},g="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"Class",name:"Vehicle",image:"/img/docs/vehicle.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("p",null,"Any Skeletal Mesh can be used to create a Vehicle, although only Skeletal Meshes with Wheels bones can use the built-in feature of animated Wheels."),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Pickup Vehicle\nlocal vehicle = Vehicle(location or Vector(), rotation or Rotator(), "nanos-world::SK_Pickup", CollisionType.Normal, true, false, true, "nanos-world::A_Vehicle_Engine_10")\n\n-- Configure it\'s Engine power and Aerodynamics\nvehicle:SetEngineSetup(700, 5000)\nvehicle:SetAerodynamicsSetup(2500)\n\n-- Configure it\'s Steering Wheel and Headlights location\nvehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)\nvehicle:SetHeadlightsSetup(Vector(270, 0, 70))\n\n-- Configures each Wheel\nvehicle:SetWheel(0, "Wheel_Front_Left",  27, 18, 45, Vector(), true,  true, false, false, false, 1500, 3000, 1000, 1, 3, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\nvehicle:SetWheel(1, "Wheel_Front_Right", 27, 18, 45, Vector(), true,  true, false, false, false, 1500, 3000, 1000, 1, 3, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\nvehicle:SetWheel(2, "Wheel_Rear_Left",   27, 18,  0, Vector(), false, true,  true, false, false, 1500, 3000, 1000, 1, 4, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\nvehicle:SetWheel(3, "Wheel_Rear_Right",  27, 18,  0, Vector(), false, true,  true, false, false, 1500, 3000, 1000, 1, 4, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\n\n-- Adds 6 Doors/Seats\nvehicle:SetDoor(0, Vector(  50, -75, 105), Vector(   8, -32.5,  95), Rotator(0,  0,  10), 70, -150)\nvehicle:SetDoor(1, Vector(  50,  75, 105), Vector(  25,    50,  90), Rotator(0,  0,   0), 70,  150)\nvehicle:SetDoor(2, Vector( -90, -75, 130), Vector( -90,  -115, 155), Rotator(0,  90, 20), 60, -150)\nvehicle:SetDoor(3, Vector( -90,  75, 130), Vector( -90,   115, 155), Rotator(0, -90, 20), 60,  150)\nvehicle:SetDoor(4, Vector(-195, -75, 130), Vector(-195,  -115, 155), Rotator(0,  90, 20), 60, -150)\nvehicle:SetDoor(5, Vector(-195,  75, 130), Vector(-195,   115, 155), Rotator(0, -90, 20), 60,  150)\n\n-- Make it ready (so clients only create Physics once and not for each function call above)\nvehicle:RecreatePhysics()\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(d,{type:"Class",name:"Vehicle",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please take a look at our Default's Vehicle package with all built-in Vehicles already properly configured and ready to use: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-vehicles"},"https://github.com/nanos-world/nanos-world-vehicles"),".")),(0,a.kt)("p",null,"More related examples:"),(0,a.kt)(h,{href:"getting-started/tutorials-and-examples/monster-truck",mdxType:"ReferenceLink"},"Monster Truck"),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(f,{type:"Class",name:"Vehicle",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(m,{type:"Class",name:"Vehicle",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(v,{type:"Class",name:"Vehicle",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
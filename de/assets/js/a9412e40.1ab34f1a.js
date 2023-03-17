"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const o={title:"Weapons Meshes",description:"How to create your own Weapons",tags:["assets","weapons","skeletal-meshes"],keywords:["weapon","skeleton","unreal"]},i=void 0,r={unversionedId:"assets-modding/creating-assets/skeletal-meshes/weapons-meshes",id:"version-latest/assets-modding/creating-assets/skeletal-meshes/weapons-meshes",title:"Weapons Meshes",description:"How to create your own Weapons",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/skeletal-meshes/weapons-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/weapons-meshes",permalink:"/de/docs/assets-modding/creating-assets/skeletal-meshes/weapons-meshes",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"assets",permalink:"/de/docs/tags/assets"},{label:"weapons",permalink:"/de/docs/tags/weapons"},{label:"skeletal-meshes",permalink:"/de/docs/tags/skeletal-meshes"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17. M\xe4rz 2023",frontMatter:{title:"Weapons Meshes",description:"How to create your own Weapons",tags:["assets","weapons","skeletal-meshes"],keywords:["weapon","skeleton","unreal"]},sidebar:"version-latest/main",previous:{title:"Vehicles Meshes",permalink:"/de/docs/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes"},next:{title:"Retargeting Animations",permalink:"/de/docs/assets-modding/creating-assets/animations/characters/retargeting-animations"}},l={},p=[{value:"Root Bone",id:"root-bone",level:2},{value:"Fixing Offsets, Scale &amp; Rotation",id:"fixing-offsets-scale--rotation",level:3},{value:"Custom Bone Sockets",id:"custom-bone-sockets",level:2},{value:"<code>muzzle</code>",id:"muzzle",level:3},{value:"<code>shell_eject</code>",id:"shell_eject",level:3},{value:"Fire Animation",id:"fire-animation",level:2},{value:"Exporting the Weapon",id:"exporting-the-weapon",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In nanos world, a Weapon is an entity which can be Picked Up by Characters and can have several settings tweaked to customize it. In this guide you will learn how to import custom Skeletal Meshes to create your own Weapon."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(21613).Z,width:"1536",height:"891"})),(0,s.kt)("p",null,"Weapons use ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/WorkingWithContent/Types/SkeletalMeshes/"},"Skeletal Meshes"),". The Skeletal Mesh must point towards the Red Axis (X) to be properly rotated."),(0,s.kt)("h2",{id:"root-bone"},"Root Bone"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(61521).Z,width:"1918",height:"924"})),(0,s.kt)("p",null,"The root bone is used to attach the Weapon to the Character's right hand Bone. The weapon is attached to the Bone Socket ",(0,s.kt)("inlineCode",{parentName:"p"},"hand_r_socket"),"."),(0,s.kt)("p",null,"You can open ",(0,s.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin")," and add your weapon as Preview Asset in the ",(0,s.kt)("inlineCode",{parentName:"p"},"hand_r_socket")," so you can visualize it attached, and do some adjustments if needed:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6803).Z,width:"1918",height:"997"})),(0,s.kt)("h3",{id:"fixing-offsets-scale--rotation"},"Fixing Offsets, Scale & Rotation"),(0,s.kt)("p",null,"Sometimes when you import a Mesh, it is imported with wrong locations, scales or even pointing towards other direction (usually Y). Luckily there's a hack we can do inside Unreal to fix them!"),(0,s.kt)("p",null,"Just open your Skeletal Mesh Asset, under ",(0,s.kt)("strong",{parentName:"p"},"Assets Details")," window, look for ",(0,s.kt)("strong",{parentName:"p"},"Import Settings")," then ",(0,s.kt)("strong",{parentName:"p"},"Transform"),". Here you can tweak the Transform (Translation, Rotation and Scale) of the Weapon (will change the Root Bone transform)."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(58368).Z,width:"1918",height:"1039"})),(0,s.kt)("p",null,"So if your Weapon is not positioned correctly in the Character hand location, or has wrong Scale, or is pointing to wrong location, you can tweak those settings and then press ",(0,s.kt)("strong",{parentName:"p"},"Reimport Base Mesh"),". It will reimport the Asset with the Transform you supplied:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(12827).Z,width:"982",height:"208"})),(0,s.kt)("h2",{id:"custom-bone-sockets"},"Custom Bone Sockets"),(0,s.kt)("p",null,"In order to make your Weapon as better integrated as possible, internally we use ",(0,s.kt)("strong",{parentName:"p"},"two")," custom Bone Sockets for spawning Particles such as Shells and Muzzle Flash."),(0,s.kt)("p",null,"To add a Bone Socket, just open your ",(0,s.kt)("strong",{parentName:"p"},"Skeleton")," asset:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(30688).Z,width:"583",height:"148"})),(0,s.kt)("p",null,"And right click on any bone and select ",(0,s.kt)("inlineCode",{parentName:"p"},"AddSocket"),", this will create a ",(0,s.kt)("strong",{parentName:"p"},"Socket")," at the same position and relative to the parent Bone:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(2473).Z,width:"343",height:"394"})),(0,s.kt)("h3",{id:"muzzle"},(0,s.kt)("inlineCode",{parentName:"h3"},"muzzle")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"muzzle")," Socket is where the ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/classes/weapon#setparticlesbarrel"},"Particle Barrel")," will be attached. So create a socket and place it in the muzzle of the weapon:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pointing Red Axis (X) towards.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(75374).Z,width:"1917",height:"931"})),(0,s.kt)("h3",{id:"shell_eject"},(0,s.kt)("inlineCode",{parentName:"h3"},"shell_eject")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"shell_eject")," Socket is where the ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/classes/weapon#setparticlesshells"},"Particle Shells")," will be attached. So create a socket and place it in shells eject of the weapon:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Pointing Red Axis (X) outwards where the shell will be eject to."),(0,s.kt)("li",{parentName:"ul"},"And Pointing Green Axis (Y) the shell direction.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5532).Z,width:"1918",height:"933"})),(0,s.kt)("h2",{id:"fire-animation"},"Fire Animation"),(0,s.kt)("p",null,"It is possible to have a custom Fire Animation for your Weapon. Usually animating weapons is easy as it's movements are straight and stiff, you can do it through Unreal!\nFor that, just open your Skeletal Mesh, then ",(0,s.kt)("strong",{parentName:"p"},"Create Asset")," and ",(0,s.kt)("strong",{parentName:"p"},"Create Animation")," and finally ",(0,s.kt)("strong",{parentName:"p"},"Current Pose"),". It will create an Animation Asset from the Weapon, empty."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(66154).Z,width:"1916",height:"1009"})),(0,s.kt)("p",null,"This will open the Animation Editor like that:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(7947).Z,width:"1919",height:"995"})),(0,s.kt)("p",null,"To start, Stop the animation from playing clicking in To Front (1), Right Click on the darker bar (2) and Select Append to the End (3), and input ",(0,s.kt)("inlineCode",{parentName:"p"},"3"),", this will add 3 frames to the animation:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(63881).Z,width:"1919",height:"1018"})),(0,s.kt)("p",null,"In this case of an AK-47, let's animate the ",(0,s.kt)("inlineCode",{parentName:"p"},"b_gun_shelleject")," bone! For that, select it from ",(0,s.kt)("strong",{parentName:"p"},"Skeleton Tree")," window, and with the animation stopped at the beginning, click on ",(0,s.kt)("strong",{parentName:"p"},"+ Key"),", this will add the selected bone as Animation key to the beginning of the animation:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(51526).Z,width:"1918",height:"1011"})),(0,s.kt)("p",null,"Now do the same, but with the animation in the end, this will make sure the first and last frame have ",(0,s.kt)("inlineCode",{parentName:"p"},"b_gun_shelleject")," in the initial position:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(12071).Z,width:"1920",height:"1014"})),(0,s.kt)("p",null,"Now move the Animation Timeline to the middle of the animation and move ",(0,s.kt)("inlineCode",{parentName:"p"},"b_gun_shelleject")," a little bit, and finally press ",(0,s.kt)("strong",{parentName:"p"},"+ Key"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(91330).Z,width:"1920",height:"1014"})),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(50322).Z,width:"1920",height:"1014"})),(0,s.kt)("p",null,"And voila! If you press Play, you will notice it will loop playing your animation!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(77679).Z,width:"1920",height:"1016"})),(0,s.kt)("h2",{id:"exporting-the-weapon"},"Exporting the Weapon"),(0,s.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,s.kt)("a",{parentName:"p",href:"/de/docs/assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."))}m.isMDXComponent=!0},21613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-01-1ae06efd8e28bdca16076b6393a72d52.webp"},2473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-add-socket-96bfe32045392306f260e1632f52c1a4.webp"},66154:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-01-12ae519c18e1ffec82d0e9a987fbc3bd.webp"},7947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-02-43e0ceed84f8a7df2913a87c8806ec66.webp"},63881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-03-03d0002daaca48f65c91d3e26c67974f.webp"},51526:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-04-903518b260696803446b7c6a91bc2a81.webp"},12071:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-05-87b815b86bf68c47511b246664a6ac61.webp"},91330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-06-87b815b86bf68c47511b246664a6ac61.webp"},50322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-07-cc09cfcfccfec2652b3640886ae25225.webp"},77679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-fire-animation-08-df98961d2bafc7b7857d37b6f44b473f.webp"},58368:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-import-transform-b91c9496eec278312f05af0c3ddbf30b.webp"},6803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-mannequin-hand-e3e11a19d8b98ca7f610f53ed52a8bb9.webp"},75374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-muzzle-41c49e5a71825684dffa2b76ea216088.webp"},12827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-reimport-f8afc73aee4e2a87ad8caeda7be42e42.webp"},61521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-root-bone-09dfa72f15bbdf1060f7ae0f06b3706c.webp"},5532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-shell-eject-76766660ccd37444349cd7b1a0641f45.webp"},30688:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/import-weapons-skeleton-b62b9e14658b9b89f605801bb2a5c3c2.webp"}}]);
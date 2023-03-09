"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4563],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",tags:["tutorial-example","scripting"]},o=void 0,i={unversionedId:"getting-started/tutorials-and-examples/play-as-prop",id:"version-latest/getting-started/tutorials-and-examples/play-as-prop",title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/play-as-prop.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/play-as-prop",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/play-as-prop",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/tags/tutorial-example"},{label:"scripting",permalink:"/pt-BR/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",frontMatter:{title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",tags:["tutorial-example","scripting"]},sidebar:"version-latest/main",previous:{title:"Painting Meshes",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/painting-meshes"},next:{title:"Prop Rain",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/prop-rain"}},l={},p=[{value:"Final result",id:"final-result",level:3},{value:"Code Snippet",id:"code-snippet",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!"),(0,n.kt)("h3",{id:"final-result"},"Final result"),(0,n.kt)("video",{controls:"true",allowfullscreen:"true"},(0,n.kt)("source",{src:"/videos/docs/tutorials/play-as-prop.mp4"})),(0,n.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Character using SK_None mesh (an invisible mesh)\nlocal new_char = Character(Vector(0, 0, 0), Rotator(), "nanos-world::SK_None")\n\n-- Adjusts the Capsule of this character. For small props it\'s recommended to use small capsule size\n-- (A capsule is used to handle Character\'s collision, this will also adjust camera height location)\n-- It\'s important to adjust the Capsule Size before adding a StaticMesh, as it will be adjusted based on Capsule Size\nnew_char:SetCapsuleSize(32, 64)\n\n-- Attaches a Static Mesh on the character - which will be the Prop it will possess\nnew_char:AddStaticMeshAttached("prop", "nanos-world::SM_WoodenChair")\n\n-- Disables some functionalities from the Character (picking up stuff, ability to crouch/prone, FPS camera...)\nnew_char:SetCanPickupPickables(false)\nnew_char:SetCanGrabProps(false)\nnew_char:SetCanCrouch(false)\nnew_char:SetCameraMode(2) -- Allows only Third Person\n')))}d.isMDXComponent=!0}}]);
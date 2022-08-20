"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1929],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11303:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),s=["components"],i={title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",tags:["tutorial-example","scripting"]},l=void 0,p={unversionedId:"getting-started/tutorials-and-examples/play-as-prop",id:"getting-started/tutorials-and-examples/play-as-prop",title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",source:"@site/docs/getting-started/tutorials-and-examples/play-as-prop.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/play-as-prop",permalink:"/docs/next/getting-started/tutorials-and-examples/play-as-prop",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/play-as-prop.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{title:"Play as Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Painting Meshes",permalink:"/docs/next/getting-started/tutorials-and-examples/painting-meshes"},next:{title:"Prop Rain",permalink:"/docs/next/getting-started/tutorials-and-examples/prop-rain"}},c={},u=[{value:"Final result",id:"final-result",level:3},{value:"Code Snippet",id:"code-snippet",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!"),(0,o.kt)("h3",{id:"final-result"},"Final result"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/docs/tutorials/play-as-prop.webm"})),(0,o.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Character using SK_None mesh (an invisible mesh)\nlocal new_char = Character(Vector(0, 0, 0), Rotator(), "nanos-world::SK_None")\n\n-- Adjusts the Capsule of this character. For small props it\'s recommended to use small capsule size\n-- (A capsule is used to handle Character\'s collision, this will also adjust camera height location)\n-- It\'s important to adjust the Capsule Size before adding a StaticMesh, as it will be adjusted based on Capsule Size\nnew_char:SetCapsuleSize(32, 64)\n\n-- Attaches a Static Mesh on the character - which will be the Prop it will possess\nnew_char:AddStaticMeshAttached("prop", "nanos-world::SM_WoodenChair")\n\n-- Disables some functionalities from the Character (picking up stuff, ability to crouch/prone, FPS camera...)\nnew_char:SetCanPickupPickables(false)\nnew_char:SetCanGrabProps(false)\nnew_char:SetCanCrouch(false)\nnew_char:SetCameraMode(2) -- Allows only Third Person\n')))}m.isMDXComponent=!0}}]);
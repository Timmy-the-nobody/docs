"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2178],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57883:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=r(83117),n=r(80102),a=(r(67294),r(3905)),i=["components"],s={title:"Doors",description:"How to create a simple and automatic door when Characters move in",tags:["tutorial-example","scripting"]},l=void 0,c={unversionedId:"getting-started/tutorials-and-examples/doors",id:"getting-started/tutorials-and-examples/doors",title:"Doors",description:"How to create a simple and automatic door when Characters move in",source:"@site/docs/getting-started/tutorials-and-examples/doors.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/doors",permalink:"/docs/next/getting-started/tutorials-and-examples/doors",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/doors.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{title:"Doors",description:"How to create a simple and automatic door when Characters move in",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Chat Colors",permalink:"/docs/next/getting-started/tutorials-and-examples/chat-colors"},next:{title:"Fireworks",permalink:"/docs/next/getting-started/tutorials-and-examples/fireworks"}},d={},u=[{value:"Final result",id:"final-result",level:3},{value:"Code Snippet",id:"code-snippet",level:3}],p={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create a simple and automatic door when Characters move in."),(0,a.kt)("h3",{id:"final-result"},"Final result"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/docs/tutorials/doors-01.webm"})),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/docs/tutorials/doors-02.webm"})),(0,a.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Let\'s spawn a SM_Plane to be our door, and an empty (SM_None) StaticMesh to be our Hinge.\n-- As the SM_Plane has it\'s pivot at the center of the mesh, we need to have a Hinge to make it rotate properly.\n-- This is not needed if your Door Mesh already has the pivot at the correct Hinge location.\n\n-- Spawns the Hinge (which we rotated 90\xba to stand up)\nlocal door = StaticMesh(Vector(0, 0, 100), Rotator(0, 0, 90), "nanos-world::SM_None")\n\n-- Spawns the Door mesh, scales it to be in the format of a door, and attaches it to the Hinge\nlocal door_mesh = StaticMesh(Vector(), Rotator(), "nanos-world::SM_Plane")\ndoor_mesh:SetScale(Vector(1, 2, 1))\n\n-- Attaches to the Hinge at a relative location of 50 units (to be at the hinge location)\ndoor_mesh:AttachTo(door)\ndoor_mesh:SetRelativeLocation(Vector(50, 0, 0))\n\n-- Spawns our trigger at the center of the Door\nlocal trigger = Trigger(Vector(0, 0, 100), Rotator(), 150)\n\n-- Registers the trigger when a Character moves in\ntrigger:Subscribe("BeginOverlap", function(trigger, actor)\n    if (actor:GetType() ~= "Character") then return end\n\n    -- Plays an opening door animation on the Character\n    actor:PlayAnimation("nanos-world::AM_Mannequin_DoorOpen_01", AnimationSlotType.UpperBody)\n\n    -- Rotates the door -90\xba smoothly\n    door:RotateTo(Rotator(0, -90, 90), 1)\nend)\n\n-- Registers the trigger when a Character moves out\ntrigger:Subscribe("EndOverlap", function(trigger, actor)\n    if (actor:GetType() ~= "Character") then return end\n\n    -- Rotates the door back to original position, smoothly\n    door:RotateTo(Rotator(0, 0, 90), 1)\nend)\n')))}m.isMDXComponent=!0}}]);
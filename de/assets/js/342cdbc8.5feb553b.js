"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(f,l(l({ref:t},c),{},{components:r})):o.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={title:"Prop Shooter",description:"This sample code modifies a Weapon to make it shoot Props instead of normal bullets",tags:["tutorial-example","scripting"]},l=void 0,s={unversionedId:"getting-started/tutorials-and-examples/prop-shooter",id:"getting-started/tutorials-and-examples/prop-shooter",title:"Prop Shooter",description:"This sample code modifies a Weapon to make it shoot Props instead of normal bullets",source:"@site/docs/getting-started/tutorials-and-examples/prop-shooter.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/prop-shooter",permalink:"/de/docs/next/getting-started/tutorials-and-examples/prop-shooter",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",frontMatter:{title:"Prop Shooter",description:"This sample code modifies a Weapon to make it shoot Props instead of normal bullets",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Prop Rain",permalink:"/de/docs/next/getting-started/tutorials-and-examples/prop-rain"},next:{title:"Weapon Flashlight",permalink:"/de/docs/next/getting-started/tutorials-and-examples/weapon-flashlight"}},i={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This sample code modifies a Weapon to make it shoot Props instead of normal bullets"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/docs/tutorials/prop-shooter.mp4"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Terminal"',title:'"Terminal"'},"# install the default-weapons package\n./NanosWorldServer.exe --cli install package default-weapons\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Loads the default-weapons (note: it\'s recommended to add it to your Package\'s packages_requirements instead)\nServer.LoadPackage("default-weapons")\n\n-- Spawns a Weapon from default-weapons package\nlocal my_weap = AR4(Vector(-2250, 9153, 192), Rotator(0, 90, 90))\nmy_weap:SetDamage(0)\n\nmy_weap:Subscribe("Fire", function(weapon, shooter)\n    local control_rotation = shooter:GetControlRotation()\n    local forward_vector = control_rotation:GetForwardVector()\n    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(200)\n\n    local prop = Prop(spawn_location, control_rotation, "nanos-world::SM_TeaPot_Interior", 1)\n    prop:AddImpulse(forward_vector * Vector(10000), true)\nend)\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,g=h["".concat(s,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",tags:["tutorial-example","scripting"]},l=void 0,i={unversionedId:"getting-started/tutorials-and-examples/weapon-flashlight",id:"getting-started/tutorials-and-examples/weapon-flashlight",title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",source:"@site/docs/getting-started/tutorials-and-examples/weapon-flashlight.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-flashlight",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-flashlight",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 mars 2023",frontMatter:{title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Prop Shooter",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/prop-shooter"},next:{title:"Weapon Scope",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-scope"}},s={},p=[],c={toc:p},h="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(h,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This sample code attaches a Light to a Weapon to make a Flashlight attachment."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(41227).Z,width:"1919",height:"1079"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Terminal"',title:'"Terminal"'},"# install the default-weapons package\n./NanosWorldServer.exe --cli install package default-weapons\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Loads the default-weapons (note: it\'s recommended to add it to your Package\'s packages_requirements instead)\nServer.LoadPackage("default-weapons")\n\n-- Spawns a Weapon from default-weapons package\nmy_weapon = AR4(Vector(), Rotator())\n\n-- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)\nmy_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 35)\n\n-- Attaches the Light to the Weapon with offset X = 100 (at the weapon\'s front)\nmy_light:AttachTo(my_weapon)\nmy_light:SetRelativeLocation(Vector(100, 0, 0))\n\n-- Stores the light on the Weapon\nmy_weapon:SetValue("Light", my_light)\n\n-- Only when someone picks up this weapon, turns on the Flashlight (set it\'s color)\nmy_weapon:Subscribe("PickUp", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0.73, 0.67, 0.42))\n    end\nend)\n\n-- When the weapon is dropped, turns off the Flashlight (set it\'s color to black)\nmy_weapon:Subscribe("Drop", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0, 0, 0))\n    end\nend)\n')))}d.isMDXComponent=!0},41227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-flashlight-d000aee52b08757b5aa41dd8fbc9fe8f.webp"}}]);
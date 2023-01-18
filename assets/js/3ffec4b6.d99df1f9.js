"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8628],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||h[g]||r;return n?a.createElement(d,l(l({ref:e},c),{},{components:n})):a.createElement(d,l({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13152:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",tags:["tutorial-example","scripting"]},l=void 0,i={unversionedId:"getting-started/tutorials-and-examples/weapon-flashlight",id:"getting-started/tutorials-and-examples/weapon-flashlight",title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",source:"@site/docs/getting-started/tutorials-and-examples/weapon-flashlight.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-flashlight",permalink:"/docs/next/getting-started/tutorials-and-examples/weapon-flashlight",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/weapon-flashlight.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Nogitsu",lastUpdatedAt:1674065610,formattedLastUpdatedAt:"Jan 18, 2023",frontMatter:{title:"Weapon Flashlight",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Prop Shooter",permalink:"/docs/next/getting-started/tutorials-and-examples/prop-shooter"},next:{title:"Weapon Scope",permalink:"/docs/next/getting-started/tutorials-and-examples/weapon-scope"}},s={},p=[],c={toc:p};function h(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This sample code attaches a Light to a Weapon to make a Flashlight attachment."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(41227).Z,width:"1919",height:"1079"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Package.RequirePackage("nanos-world-weapons")\n\n-- Spawns a Weapon\nmy_weapon = NanosWorldWeapons.AR4(Vector(), Rotator())\n\n-- Spawns a Spot Light (with color Black, to be turned on only when someone picks up it)\nmy_light = Light(Vector(), Rotator(), Color(0, 0, 0), 1, 1000, 1000, 35)\n\n-- Attaches the Light to the Weapon with offset X = 100 (at the weapon\'s front)\nmy_light:AttachTo(my_weapon)\nmy_light:SetRelativeLocation(Vector(100, 0, 0))\n\n-- Stores the light on the Weapon\nmy_weapon:SetValue("Light", my_light)\n\n-- Only when someone picks up this weapon, turns on the Flashlight (set it\'s color)\nmy_weapon:Subscribe("PickUp", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0.73, 0.67, 0.42))\n    end\nend)\n\n-- When the weapon is dropped, turns off the Flashlight (set it\'s color to black)\nmy_weapon:Subscribe("Drop", function(weapon, character)\n    local light = my_weapon:GetValue("Light")\n    if (light ~= nil) then\n        light:SetColor(Color(0, 0, 0))\n    end\nend)\n')))}h.isMDXComponent=!0},41227:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/weapon-flashlight-d000aee52b08757b5aa41dd8fbc9fe8f.webp"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6505],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85761:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},c="Weapon Scope",l={unversionedId:"getting-started/tutorials-and-examples/weapon-scope",id:"getting-started/tutorials-and-examples/weapon-scope",title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",source:"@site/docs/getting-started/tutorials-and-examples/weapon-scope.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-scope",permalink:"/docs/next/getting-started/tutorials-and-examples/weapon-scope",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/weapon-scope.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630145072,formattedLastUpdatedAt:"8/28/2021",frontMatter:{description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Weapon Flashlight",permalink:"/docs/next/getting-started/tutorials-and-examples/weapon-flashlight"},next:{title:"X-Ray & Highlight",permalink:"/docs/next/getting-started/tutorials-and-examples/x-ray-and-highlight"}},p=[{value:"Some Static Mesh assets which can be used as scope:",id:"some-static-mesh-assets-which-can-be-used-as-scope",children:[],level:2}],d={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"weapon-scope"},"Weapon Scope"),(0,r.kt)("p",null,"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(60480).Z})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawning the AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Adds a StaticMesh Attached with a RedDot mesh into AK47 on sight_socket bone from AK47 model. As our AK47 model already\n-- have a bone named sight_socket at the right location, we can just attach to it, otherwise we would\n-- need to set it\'s Attach Location to where the RedDot fits and using bone name as empty ""\nmy_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")\n\n-- Makes the FOV multiplier reduces by 0.35x when ADS (aiming)\nmy_ak47.SightFOVMultiplier = 0.35\n\n-- Sets the ADS transform offset to fit the RedDot center position,\n-- each weapon will need a different offset to fit it\'s sight. AK47 + RedDot best fit is Z = -15.9\nmy_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))\n')),(0,r.kt)("h2",{id:"some-static-mesh-assets-which-can-be-used-as-scope"},"Some Static Mesh assets which can be used as scope:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_T4_Sight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Vertgrip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Suppressor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Scope_25x56_X"))))}u.isMDXComponent=!0},60480:function(e,t,n){t.Z=n.p+"assets/images/weapon-scope-c9a5f4bf7da95c8967629ec56db2cca9.jpg"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7908],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,c(c({ref:t},d),{},{components:n})):a.createElement(g,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33057:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),c=["components"],i={title:"Name Tags",description:"How to add Name Tags to Characters",tags:["tutorial-example","scripting"]},s=void 0,l={unversionedId:"getting-started/tutorials-and-examples/name-tags",id:"getting-started/tutorials-and-examples/name-tags",title:"Name Tags",description:"How to add Name Tags to Characters",source:"@site/docs/getting-started/tutorials-and-examples/name-tags.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/name-tags",permalink:"/docs/next/getting-started/tutorials-and-examples/name-tags",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/name-tags.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{title:"Name Tags",description:"How to add Name Tags to Characters",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Monster Truck",permalink:"/docs/next/getting-started/tutorials-and-examples/monster-truck"},next:{title:"Painting Meshes",permalink:"/docs/next/getting-started/tutorials-and-examples/painting-meshes"}},d={},u=[],p={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to add Name Tags to Characters."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36037).Z,width:"1917",height:"1014"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Function to add a Nametag to a Player\nfunction AddNametag(player, character)\n    -- Try to get it\'s character\n    if (character == nil) then\n        character = player:GetControlledCharacter()\n        if (character == nil) then return end\n    end\n\n    -- Spawns the Nametag (TextRender),\n    local nametag = TextRender(\n        Vector(),               -- Any Location\n        Rotator(),              -- Any Rotation\n        player:GetName(),       -- Player Name\n        Vector(0.5, 0.5, 0.5),  -- 50% Scale\n        Color(1, 1, 1),         -- White\n        FontType.Roboto,        -- Roboto Font\n        TextRenderAlignCamera.AlignCameraRotation -- Follow Camera Rotation\n    )\n\n    -- Attaches it to the character and saves it to the player\'s values\n    nametag:AttachTo(character)\n    nametag:SetRelativeLocation(Vector(0, 0, 250))\n\n    player:SetValue("Nametag", nametag)\nend\n\n-- Function to remove a Nametag from  a Player\nfunction RemoveNametag(player, character)\n    -- Try to get it\'s character\n    if (character == nil) then\n        character = player:GetControlledCharacter()\n        if (character == nil) then return end\n    end\n\n    -- Gets the Nametag from the player, if any, and destroys it\n    local text_render = player:GetValue("Nametag")\n    if (text_render and text_render:IsValid()) then\n        text_render:Destroy()\n    end\nend\n\n-- Adds a new Nametag to a character which was possessed\nCharacter.Subscribe("Possessed", function(character, player)\n    AddNametag(player, character)\nend)\n\n-- Removes the Nametag from a character which was unpossessed\nCharacter.Subscribe("UnPossessed", function(character, player)\n    RemoveNametag(player, character)\nend)\n\n-- When a Player is spawned - for when you connect and there is already Player\'s connected\nPlayer.Subscribe("Spawn", function(player)\n    RemoveNametag(player)\n    AddNametag(player)\nend)\n')))}m.isMDXComponent=!0},36037:function(e,t,n){t.Z=n.p+"assets/images/nametag-2591ca793bd973b2de2491ad91352599.jpg"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8653],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,g=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Name Tags",description:"How to add Name Tags to Characters",tags:["tutorial-example","scripting"]},s=void 0,i={unversionedId:"getting-started/tutorials-and-examples/name-tags",id:"version-latest/getting-started/tutorials-and-examples/name-tags",title:"Name Tags",description:"How to add Name Tags to Characters",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/name-tags.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/name-tags",permalink:"/docs/getting-started/tutorials-and-examples/name-tags",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/name-tags.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"},{label:"scripting",permalink:"/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"Mar 4, 2023",frontMatter:{title:"Name Tags",description:"How to add Name Tags to Characters",tags:["tutorial-example","scripting"]},sidebar:"version-latest/main",previous:{title:"Monster Truck",permalink:"/docs/getting-started/tutorials-and-examples/monster-truck"},next:{title:"Painting Meshes",permalink:"/docs/getting-started/tutorials-and-examples/painting-meshes"}},c={},l=[],d={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to add Name Tags to Characters."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(53486).Z,width:"1917",height:"1014"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Function to add a Nametag to a Player\nfunction AddNametag(player, character)\n    -- Try to get it\'s character\n    if (character == nil) then\n        character = player:GetControlledCharacter()\n        if (character == nil) then return end\n    end\n\n    -- Spawns the Nametag (TextRender),\n    local nametag = TextRender(\n        Vector(),               -- Any Location\n        Rotator(),              -- Any Rotation\n        player:GetName(),       -- Player Name\n        Vector(0.5, 0.5, 0.5),  -- 50% Scale\n        Color(1, 1, 1),         -- White\n        FontType.Roboto,        -- Roboto Font\n        TextRenderAlignCamera.AlignCameraRotation -- Follow Camera Rotation\n    )\n\n    -- Attaches it to the character and saves it to the player\'s values\n    nametag:AttachTo(character)\n    nametag:SetRelativeLocation(Vector(0, 0, 250))\n\n    player:SetValue("Nametag", nametag)\nend\n\n-- Function to remove a Nametag from  a Player\nfunction RemoveNametag(player, character)\n    -- Try to get it\'s character\n    if (character == nil) then\n        character = player:GetControlledCharacter()\n        if (character == nil) then return end\n    end\n\n    -- Gets the Nametag from the player, if any, and destroys it\n    local text_render = player:GetValue("Nametag")\n    if (text_render and text_render:IsValid()) then\n        text_render:Destroy()\n    end\nend\n\n-- Adds a new Nametag to a character which was possessed\nCharacter.Subscribe("Possess", function(character, player)\n    AddNametag(player, character)\nend)\n\n-- Removes the Nametag from a character which was unpossessed\nCharacter.Subscribe("UnPossess", function(character, player)\n    RemoveNametag(player, character)\nend)\n\n-- When a Player is spawned - for when you connect and there is already Player\'s connected\nPlayer.Subscribe("Spawn", function(player)\n    RemoveNametag(player)\n    AddNametag(player)\nend)\n')))}m.isMDXComponent=!0},53486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nametag-5ef1869f8bbde28896636ebc53f31b05.webp"}}]);
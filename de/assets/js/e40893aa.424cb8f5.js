"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4572],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},15871:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const o={title:"Map Script and Configuration",description:"How to create and export maps from Unreal to nanos world",tags:["assets"],keywords:["map","level","package","script"]},s=void 0,i={unversionedId:"assets-modding/creating-assets/maps-and-levels/map-script-and-data",id:"version-latest/assets-modding/creating-assets/maps-and-levels/map-script-and-data",title:"Map Script and Configuration",description:"How to create and export maps from Unreal to nanos world",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/maps-and-levels/map-script-and-data.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/map-script-and-data",permalink:"/de/docs/assets-modding/creating-assets/maps-and-levels/map-script-and-data",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"assets",permalink:"/de/docs/tags/assets"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"Map Script and Configuration",description:"How to create and export maps from Unreal to nanos world",tags:["assets"],keywords:["map","level","package","script"]},sidebar:"version-latest/main",previous:{title:"Creating Custom Maps",permalink:"/de/docs/assets-modding/creating-assets/maps-and-levels/importing-maps"},next:{title:"Water",permalink:"/de/docs/assets-modding/creating-assets/maps-and-levels/water"}},p={},l=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"Adding a Configuration File",id:"adding-a-configuration-file",level:2},{value:"Adding a Package",id:"adding-a-package",level:2},{value:"Adding a Map Image",id:"adding-a-map-image",level:2},{value:"Extra Tips",id:"extra-tips",level:2}],d={toc:l},c="wrapper";function m(e){let{components:a,...o}=e;return(0,r.kt)(c,(0,n.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In nanos world, maps can have their own Package and a Data file associated to it. Those are automatically loaded when the server starts with a map."),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("p",null,"To be able to add a Map Package, Custom Data and even a Image to your map, you must create the proper structure for it."),(0,r.kt)("p",null,"For that, create a folder with the same name as your map file (",(0,r.kt)("inlineCode",{parentName:"p"},".umap"),") besides it:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(25426).Z,width:"686",height:"223"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Map Folder"',title:'"Map','Folder"':!0},"Assets/\n\u251c\u2500\u2500 my-asset-pack-01/\n\u2502   \u251c\u2500\u2500 MyMap/\n\u2502   \u2502   \u251c\u2500\u2500 MyMap.umap\n\u2502   \u2502   \u251c\u2500\u2500 MyMap/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Map.toml\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Map.jpg\n\u2514\u2500\u2500 my-asset-pack-02/\n    \u2514\u2500\u2500 ...\n")),(0,r.kt)("h2",{id:"adding-a-configuration-file"},"Adding a Configuration File"),(0,r.kt)("p",null,"Now maps can have it's own Configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.toml"),", this file contains a header with common configuration and a space for custom data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Map.toml\n")),(0,r.kt)("p",null,"This data can be get with ",(0,r.kt)("inlineCode",{parentName:"p"},"Server.GetMapCustomData()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Server.GetMapSpawnPoints()"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All nanos structs (Vectors, Rotators, Vector2D, etc) are automatically parsed from it's string representation into the proper Lua struct from ",(0,r.kt)("inlineCode",{parentName:"p"},".toml")," files.")),(0,r.kt)("h2",{id:"adding-a-package"},"Adding a Package"),(0,r.kt)("p",null,"Inside this folder you can create all folders related to the Package: ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Shared/")," and create your scripts as usual. This will be loaded as a normal Package when your Map loads. Usually these scripts should have map specific spawn props/weapons and pertinent stuff."),(0,r.kt)("p",null,"The Package.toml is not loaded for Map Packages, instead all Package configuration must be done in the settings of Map.toml file."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If at least one of the loaded packages enable the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"force_no_map_script")," then this Package will not load.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(99492).Z,width:"684",height:"246"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Map Package will be loaded with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"map-package"),".")),(0,r.kt)("h2",{id:"adding-a-map-image"},"Adding a Map Image"),(0,r.kt)("p",null,"You can add a ",(0,r.kt)("inlineCode",{parentName:"p"},".jpg")," image called ",(0,r.kt)("inlineCode",{parentName:"p"},"Map.jpg")," inside the Map Folder. This image will be automatically loaded when browsing through New Game menu."),(0,r.kt)("h2",{id:"extra-tips"},"Extra Tips"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, such as Spawn Points, Props locations, Weapon locations and so on."),(0,r.kt)("p",{parentName:"admonition"},"It is a recommended approach to implement all Props, Weapons and Vehicles spawn locations in your Map Package ",(0,r.kt)("inlineCode",{parentName:"p"},"[Map]/Server/Index.lua")," and define all Player's Spawn points in the Configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"[Map]/Map.toml"),".")))}m.isMDXComponent=!0},25426:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/map-package-01-1f5535e656282158eeb65ac9163abca6.jpg"},99492:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/map-package-02-b5a5d3b945c2120dad8140a6994e4ffd.jpg"}}]);
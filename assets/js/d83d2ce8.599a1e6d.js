"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",sidebar_position:1,tags:["assets"],keywords:["SDK","ADK","assets","kit","unreal"]},s=void 0,i={unversionedId:"assets-modding/creating-assets/adk-assets-development-kit",id:"version-latest/assets-modding/creating-assets/adk-assets-development-kit",title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/adk-assets-development-kit",permalink:"/docs/assets-modding/creating-assets/adk-assets-development-kit",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",tags:[{label:"assets",permalink:"/docs/tags/assets"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"Mar 10, 2023",sidebarPosition:1,frontMatter:{title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",sidebar_position:1,tags:["assets"],keywords:["SDK","ADK","assets","kit","unreal"]},sidebar:"version-latest/main",previous:{title:"Setting Up Unreal Engine",permalink:"/docs/assets-modding/creating-assets/setting-up-ue"},next:{title:"Creating & Importing Assets",permalink:"/docs/assets-modding/creating-assets/importing-assets"}},l={},d=[{value:"Downloading Assets Development Kit",id:"downloading-assets-development-kit",level:2},{value:"Opening the Project",id:"opening-the-project",level:2},{value:"Special Attention",id:"special-attention",level:2},{value:"Updating to a newer ADK version",id:"updating-to-a-newer-adk-version",level:2},{value:"Tools available in the ADK project",id:"tools-available-in-the-adk-project",level:2},{value:"Placeholder Blueprints",id:"placeholder-blueprints",level:3},{value:"<code>NanosWorld/Blueprints/Placeholders/</code>",id:"nanosworldblueprintsplaceholders",level:4},{value:"Lua Code Generator",id:"lua-code-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator</code>",id:"nanosworldblueprintsutilitywbp_luacodegenerator",level:4},{value:"Assets.toml Generator",id:"assetstoml-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator</code>",id:"nanosworldblueprintsutilitywbp_assetstomlgenerator",level:4},{value:"Sun &amp; Sky Actor",id:"sun--sky-actor",level:3},{value:"<code>NanosWorld/Blueprints/World/BP_SunSky</code>",id:"nanosworldblueprintsworldbp_sunsky",level:4},{value:"Physical Materials",id:"physical-materials",level:3},{value:"<code>NanosWorld/MaterialLibrary/PhysicalMaterials/</code>",id:"nanosworldmateriallibraryphysicalmaterials",level:4},{value:"Mannequin Skeleton",id:"mannequin-skeleton",level:3},{value:"<code>NanosWorld/Characters/Common/SKEL_Mannequin</code>",id:"nanosworldcharacterscommonskel_mannequin",level:4},{value:"Thumbnail Generator",id:"thumbnail-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/ThumbnailGenerator</code>",id:"nanosworldblueprintsutilitythumbnailgenerator",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to use the nanos world Assets Development Kit - ADK"),(0,r.kt)("p",null,"nanos world provides a fully configurable and ready ",(0,r.kt)("strong",{parentName:"p"},"Unreal Project")," called Assets Development Kit (ADK) to help you integrating and exporting Assets and Maps much faster."),(0,r.kt)("p",null,"This project contains ",(0,r.kt)("strong",{parentName:"p"},"Placeholders"),", ",(0,r.kt)("strong",{parentName:"p"},"Tools")," and ",(0,r.kt)("strong",{parentName:"p"},"Correct References")," that must be used in order to create ",(0,r.kt)("strong",{parentName:"p"},"Characters")," or set proper ",(0,r.kt)("strong",{parentName:"p"},"Physical Materials")," for example."),(0,r.kt)("h2",{id:"downloading-assets-development-kit"},"Downloading Assets Development Kit"),(0,r.kt)("p",null,"Our ADK is uploaded on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/assets-development-kit/"},"GitHub"),", please download it's latest version and extract it in your computer."),(0,r.kt)("h2",{id:"opening-the-project"},"Opening the Project"),(0,r.kt)("p",null,"You will find a file ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorldADK.uproject")," in there, just open it with Unreal Engine (make sure you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/setting-up-ue"},"Set Up Unreal Engine")," before proceeding)."),(0,r.kt)("p",null,"The first time opening it may take some time as the initial shaders must be compiled."),(0,r.kt)("p",null,"After it finishes compiling all shaders, you can proceed to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/importing-assets"},"next step to import an asset")," or take a look below in all available tools."),(0,r.kt)("h2",{id:"special-attention"},"Special Attention"),(0,r.kt)("p",null,"Please do not ",(0,r.kt)("strong",{parentName:"p"},"MODIFY"),", ",(0,r.kt)("strong",{parentName:"p"},"DELETE"),", ",(0,r.kt)("strong",{parentName:"p"},"CREATE")," or ",(0,r.kt)("strong",{parentName:"p"},"COPY")," any file inside ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use ",(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," the way they are."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder has some Assets which you can use to reference ",(0,r.kt)("strong",{parentName:"p"},"your")," assets and make the export keep the correct references when using them in-game."),(0,r.kt)("h2",{id:"updating-to-a-newer-adk-version"},"Updating to a newer ADK version"),(0,r.kt)("p",null,"To update your Unreal project to a newer Assets Development Kit version, you just need to download the newest version from GitHub and extract/paste it over the existing project, overriding ",(0,r.kt)("strong",{parentName:"p"},"all")," files."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to backup your settings at ",(0,r.kt)("inlineCode",{parentName:"p"},"Config/")," folder because they will be overridden in cases you modified it. Usually it's better to manually reapply your modified settings into the new Project settings after the updates.")),(0,r.kt)("h2",{id:"tools-available-in-the-adk-project"},"Tools available in the ADK project"),(0,r.kt)("p",null,"Here's a list of all tools and blueprints which you can use to speed up and help creating assets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprints ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Placeholders/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#assets-toml-generator"},"Assets.toml Generator ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#sunand-sky-actor"},"Sun & Sky Actor ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/World/BP_SunSky"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#physical-materials"},"Physical Materials ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/MaterialLibrary/PhysicalMaterials/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#mannequin-skeleton"},"Mannequin Skeleton ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Characters/Common/SKEL_Mannequin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"adk-assets-development-kit#thumbnail-generator"},"Thumbnail Generator ",(0,r.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")))),(0,r.kt)("h3",{id:"placeholder-blueprints"},"Placeholder Blueprints"),(0,r.kt)("h4",{id:"nanosworldblueprintsplaceholders"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Placeholders/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Placeholder Blueprints overview",src:a(37695).Z,width:"1244",height:"287"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"Placeholder Blueprints")," to set Spawn Positions of ",(0,r.kt)("strong",{parentName:"p"},"Vehicles"),", ",(0,r.kt)("strong",{parentName:"p"},"Weapons"),", ",(0,r.kt)("strong",{parentName:"p"},"Characters")," and ",(0,r.kt)("strong",{parentName:"p"},"Props"),". This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren\u2019t cooked with the map. Use the ",(0,r.kt)("a",{parentName:"p",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator")," to generate the Lua script with all spawn locations."),(0,r.kt)("h3",{id:"lua-code-generator"},"Lua Code Generator"),(0,r.kt)("h4",{id:"nanosworldblueprintsutilitywbp_luacodegenerator"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lua Code Generator Widget",src:a(6050).Z,width:"1002",height:"606"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lua Code Generator")," is an ",(0,r.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every ",(0,r.kt)("a",{parentName:"p",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprint "),"you had spawned."),(0,r.kt)("p",null,"To open it, right click on it and press ",(0,r.kt)("strong",{parentName:"p"},"Run Editor Utility Widget"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(19586).Z,width:"362",height:"611"})),(0,r.kt)("h3",{id:"assetstoml-generator"},"Assets.toml Generator"),(0,r.kt)("h4",{id:"nanosworldblueprintsutilitywbp_assetstomlgenerator"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(28662).Z,width:"1003",height:"694"})),(0,r.kt)("p",null,"This is an ",(0,r.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans a folder (determined by the TextBox) and generates the configuration for an Assets.toml with all Assets in the folder ","(","which can be used in nanos world",")","."),(0,r.kt)("h3",{id:"sun--sky-actor"},"Sun & Sky Actor"),(0,r.kt)("h4",{id:"nanosworldblueprintsworldbp_sunsky"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/World/BP_SunSky")),(0,r.kt)("p",null,"This is a pre-configured ",(0,r.kt)("strong",{parentName:"p"},"Sun & Sky Blueprint")," which can be used and easily replaced by nanos world Official Sun with ",(0,r.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),". This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Overriding the Sun through Scripting with ",(0,r.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", will respawn the Sun actor, which means no configuration did on the Sun & Sky actor will persist"),(0,r.kt)("p",{parentName:"admonition"},"Example: Light Intensity, Color, Post Process and other configuration will be lost.")),(0,r.kt)("h3",{id:"physical-materials"},"Physical Materials"),(0,r.kt)("h4",{id:"nanosworldmateriallibraryphysicalmaterials"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/MaterialLibrary/PhysicalMaterials/")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(28292).Z,width:"1507",height:"316"})),(0,r.kt)("p",null,"If you are creating a ",(0,r.kt)("strong",{parentName:"p"},"Material"),", you can ","(","and should",")"," use these ",(0,r.kt)("strong",{parentName:"p"},"Physical Materials")," do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"DO NOT ",(0,r.kt)("strong",{parentName:"p"},"modify")," or ",(0,r.kt)("strong",{parentName:"p"},"rename")," any Physical Materials, only use by referencing them in your Materials.")),(0,r.kt)("h3",{id:"mannequin-skeleton"},"Mannequin Skeleton"),(0,r.kt)("h4",{id:"nanosworldcharacterscommonskel_mannequin"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Characters/Common/SKEL_Mannequin")),(0,r.kt)("p",null,"To be able to create Skeletal ","(","Character",")"," Meshes which work with our ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/character"},"Character")," class, you must set your Skeletal Mesh to use our ",(0,r.kt)("strong",{parentName:"p"},"Mannequin Skeleton"),". This Skeleton is the same as Unreal Engine 5 default Mannequin, so any Skeletal Mesh which uses UE4\u2019s Mannequin Skeleton will work for us!"),(0,r.kt)("p",null,"To change a Skeletal Mesh\u2019s Skeleton: right click on it ",">",">"," Skeleton ",">",">"," Assign Skeleton and change it to our ",(0,r.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(82714).Z,width:"943",height:"726"})),(0,r.kt)("h3",{id:"thumbnail-generator"},"Thumbnail Generator"),(0,r.kt)("h4",{id:"nanosworldblueprintsutilitythumbnailgenerator"},(0,r.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")),(0,r.kt)("p",null,"We\u2019ve shipped a ",(0,r.kt)("strong",{parentName:"p"},"Thumbnail Generator")," tool to help you generating ",(0,r.kt)("inlineCode",{parentName:"p"},".jpg")," images of your assets. To use that, just open ",(0,r.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," level and hit Play. Then you will be able to define a folder for search the assets ","(","currently only Static and Skeletal Meshes are supported",")"," and a folder to save the images ","(",".jpg",")",". You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit ",(0,r.kt)("strong",{parentName:"p"},"Generate"),", it will start loading all assets and taking a photo from them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note:")," this may be a slow process depending if your assets were already compiled previously."),(0,r.kt)("p",{parentName:"admonition"},"It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(130).Z,width:"1487",height:"626"})))}c.isMDXComponent=!0},37695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-01-f872f2cbe722071ec873a15e27eb0220.webp"},6050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-02-9fed94371a7135816707ebcca2535110.webp"},19586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-03-96047cddc3aaa0dc1cd1b9a9260b943a.webp"},28662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-04-7dc68feef793726fab66d31cec9d6103.webp"},28292:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-05-9a39fabcab4ee2a620fb5a8038f6a92a.webp"},82714:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-06-eaaca552c08c6f7c4461a850ef09cfd0.webp"},130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adk-07-461acf54986d93311e4507fc01ef4207.webp"}}]);
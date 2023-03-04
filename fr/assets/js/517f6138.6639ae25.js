"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={title:"Tool Guns",description:"How to create new Tool Guns for nanos world",tags:["tutorial-example","scripting","assets"],sidebar_position:2},l=void 0,i={unversionedId:"getting-started/sandbox-game-mode/tool-guns",id:"version-latest/getting-started/sandbox-game-mode/tool-guns",title:"Tool Guns",description:"How to create new Tool Guns for nanos world",source:"@site/versioned_docs/version-latest/getting-started/sandbox-game-mode/tool-guns.md",sourceDirName:"getting-started/sandbox-game-mode",slug:"/getting-started/sandbox-game-mode/tool-guns",permalink:"/fr/docs/getting-started/sandbox-game-mode/tool-guns",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/tags/scripting"},{label:"assets",permalink:"/fr/docs/tags/assets"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4 mars 2023",sidebarPosition:2,frontMatter:{title:"Tool Guns",description:"How to create new Tool Guns for nanos world",tags:["tutorial-example","scripting","assets"],sidebar_position:2},sidebar:"version-latest/main",previous:{title:"Spawn Menu",permalink:"/fr/docs/getting-started/sandbox-game-mode/spawn-menu"},next:{title:"Context Menu",permalink:"/fr/docs/getting-started/sandbox-game-mode/context-menu"}},s={},p=[{value:"Creating a custom Tool Gun",id:"creating-a-custom-tool-gun",level:2},{value:"Overriding ToolGun Client Methods",id:"overriding-toolgun-client-methods",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create new Tool Guns for nanos world"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55925).Z,width:"1919",height:"1079"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This ",(0,a.kt)("strong",{parentName:"p"},"Tool Gun")," approach is a convention of the Sandbox game-mode and is not a game-wide concept.")),(0,a.kt)("p",null,"The sandbox game-mode defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"ToolGun")," class (see on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/blob/master/Server/Tools/BaseToolGun.lua"},"Server")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/blob/master/Client/Tools/BaseToolGun.lua"},"Client"),") which helps on creating new tools based on a base Tool Gun."),(0,a.kt)("h2",{id:"creating-a-custom-tool-gun"},"Creating a custom Tool Gun"),(0,a.kt)("p",null,"To create your own Tool based on Sandbox's ",(0,a.kt)("inlineCode",{parentName:"p"},"ToolGun"),", you need to create a new Class inheriting from it passing some custom parameters to the Class, like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'MyToolGun = ToolGun.Inherit("MyToolGun", {\n    -- Spawn Menu\n    name = "My Tool Gun",\n    image = "package://my-package/MyToolGun.webp",\n    category = "special",\n\n    -- Tool Gun Tutorials which will display on Top Left\n    tutorials = {\n        { key = "LeftClick", text = "spawn balloon" },\n        { key = "Undo", text = "undo spawn" },\n        { key = "ContextMenu", text = "balloon settings" },\n    }\n\n    -- Tool Gun Crosshair Trace Debug Settings which will display on World when aiming\n    crosshair_trace = {\n        -- Which Collision Channel to trace\n        collision_channel = CollisionChannel.WorldStatic | CollisionChannel.WorldDynamic,\n        -- Which Color to display when it traces an entity\n        color_entity = Color.GREEN,\n        -- Which Color to display when it traces anything else\n        color_no_entity = Color.RED,\n    }\n})\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The values ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," are used by ",(0,a.kt)("strong",{parentName:"p"},"Spawn Menu")," to display it properly on it."),(0,a.kt)("p",{parentName:"admonition"},"The other values ",(0,a.kt)("inlineCode",{parentName:"p"},"tutorials")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"crosshair_trace")," are used by the ",(0,a.kt)("strong",{parentName:"p"},"ToolGun")," to add custom tutorials or behaviors when using it. Those parameters are optional."),(0,a.kt)("p",{parentName:"admonition"},"Those values are only used on ",(0,a.kt)("strong",{parentName:"p"},"Client Side"),"!")),(0,a.kt)("h2",{id:"overriding-toolgun-client-methods"},"Overriding ToolGun Client Methods"),(0,a.kt)("p",null,"The ToolGun have some methods on ",(0,a.kt)("strong",{parentName:"p"},"Client Side")," which you can override to implement custom behaviors to your tool when the Local Player interacts with it."),(0,a.kt)("p",null,"You can just override them in your custom Tool Gun class to implement them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},"-- Called when you Fire with it\nfunction MyToolGun:OnLocalPlayerFire(character)\n    -- Do something\n\n    -- Something useful to do here is tracing for where the Player fire\n    -- and send that coordinate to server to spawn something at that location\nend\n\n-- Called when you Pick Up it\nfunction MyToolGun:OnLocalPlayerPickUp(character)\n    -- Do something\n\n    -- Something useful to do here is adding a new entry to Context Menu\n    -- when picking it up (see Sandbox's BalloonGun example)\nend\n\n-- Called when you Drop it\nfunction MyToolGun:OnLocalPlayerDrop(character)\n    -- Do something\n\n    -- You will much likely want to disable any effect or similar thing when\n    -- you drop your Tool\nend\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"You can find more examples of Tools in the Sandbox's ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools/")," folder on both ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/tree/master/Client/Tools"},"Client")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/tree/master/Server/Tools"},"Server")," side."),(0,a.kt)("p",null,"Now it's up to you to to create your own Packages with your own Tools!"))}c.isMDXComponent=!0},55925:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tool-gun-d5097a656aa7fe68b88c7ca4c2825bb9.webp"}}]);
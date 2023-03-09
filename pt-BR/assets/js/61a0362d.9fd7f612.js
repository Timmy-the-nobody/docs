"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7472],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,k=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},20917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Packages Guide",description:"All you need to know about Packages",sidebar_position:0,tags:["scripting","packages"],keywords:["packages","scripting","lua"]},o=void 0,l={unversionedId:"core-concepts/packages/packages-guide",id:"core-concepts/packages/packages-guide",title:"Packages Guide",description:"All you need to know about Packages",source:"@site/docs/core-concepts/packages/packages-guide.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages-guide",permalink:"/pt-BR/docs/next/core-concepts/packages/packages-guide",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"scripting",permalink:"/pt-BR/docs/next/tags/scripting"},{label:"packages",permalink:"/pt-BR/docs/next/tags/packages"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",sidebarPosition:0,frontMatter:{title:"Packages Guide",description:"All you need to know about Packages",sidebar_position:0,tags:["scripting","packages"],keywords:["packages","scripting","lua"]},sidebar:"main",previous:{title:"Linux & ARM Server installation",permalink:"/pt-BR/docs/next/core-concepts/server-manual/server-linux-arm"},next:{title:"Loading Screen",permalink:"/pt-BR/docs/next/core-concepts/packages/loading-screen"}},s={},p=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"Package Configuration",id:"package-configuration",level:2},{value:"Package Types",id:"package-types",level:2},{value:"<code>script</code>",id:"script",level:3},{value:"<code>game-mode</code>",id:"game-mode",level:3},{value:"<code>loading-screen</code>",id:"loading-screen",level:3},{value:"Settings Detailed",id:"settings-detailed",level:2},{value:"Custom Settings",id:"custom-settings",level:3},{value:"List of Types",id:"list-of-types",level:4},{value:"Ignoring Client Folders",id:"ignoring-client-folders",level:2},{value:"Logo Image",id:"logo-image",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Packages")," are pieces/components of your server which will execute Lua scripts to interact to the game."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55583).Z,width:"628",height:"170"})),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("p",null,"All Packages must go under ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Packages/")," folder. Each Package is a folder under that."),(0,r.kt)("p",null,"They can contain the following folders: ",(0,r.kt)("inlineCode",{parentName:"p"},"Server"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Shared"),". Only ",(0,r.kt)("strong",{parentName:"p"},"Client")," and ",(0,r.kt)("strong",{parentName:"p"},"Shared")," folders will be sent and loaded by the clients when they connect."),(0,r.kt)("p",null,"Each ",(0,r.kt)("strong",{parentName:"p"},"Package")," must have a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.lua")," inside ",(0,r.kt)("strong",{parentName:"p"},"Server"),", ",(0,r.kt)("strong",{parentName:"p"},"Client")," or ",(0,r.kt)("strong",{parentName:"p"},"Shared")," folders, this is the only file which will be triggered when the Package is loaded, this way this file is responsible for including other files and starting up your functionalities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 my-package-01/\n\u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u251c\u2500\u2500 Index.lua\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u2514\u2500\u2500 Package.toml\n\u251c\u2500\u2500 my-package-02/\n\u2502   \u251c\u2500\u2500 Package.toml\n\u2502   \u2514\u2500\u2500 ...\nAssets/\nConfig.toml\n")),(0,r.kt)("h2",{id:"package-configuration"},"Package Configuration"),(0,r.kt)("p",null,"Packages have a configuration file in the root of the package folder, called ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.toml"),", in this file we can setup all pertinent settings related to the Package. Each ",(0,r.kt)("a",{parentName:"p",href:"#package-types"},"Package Type")," has it's own configuration file format."),(0,r.kt)("p",null,"They all share the same header ",(0,r.kt)("inlineCode",{parentName:"p"},"[meta]"),", which contains the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_meta.toml\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"title"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Friendly name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"author"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contributor(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version - in the ",(0,r.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer")," format ",(0,r.kt)("inlineCode",{parentName:"td"},"X.Y.Z"))))),(0,r.kt)("h2",{id:"package-types"},"Package Types"),(0,r.kt)("p",null,"We have 3 types of packages: ",(0,r.kt)("a",{parentName:"p",href:"#script"},"script"),", ",(0,r.kt)("a",{parentName:"p",href:"#game-mode"},"game-mode")," and ",(0,r.kt)("a",{parentName:"p",href:"#loading-screen"},"loading-screen"),", each one with with a specific functionality and an unique purpose:"),(0,r.kt)("h3",{id:"script"},(0,r.kt)("inlineCode",{parentName:"h3"},"script")),(0,r.kt)("p",null,"Script is a normal Package, you can load as many as you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml" reference',title:'"Package.toml"',reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_script.toml\n")),(0,r.kt)("h3",{id:"game-mode"},(0,r.kt)("inlineCode",{parentName:"h3"},"game-mode")),(0,r.kt)("p",null,"GameModes are Like ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," but you can only load one ",(0,r.kt)("inlineCode",{parentName:"p"},"game-mode")," package at once."),(0,r.kt)("p",null,"They are used when you are creating full games which cannot be loaded with other full games packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml" reference',title:'"Package.toml"',reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_game_mode.toml\n")),(0,r.kt)("h3",{id:"loading-screen"},(0,r.kt)("inlineCode",{parentName:"h3"},"loading-screen")),(0,r.kt)("p",null,"Loading Screen is a special Package which will be loaded during player's loading screen."),(0,r.kt)("p",null,"It must have an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," in the root. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/core-concepts/packages/loading-screen"},"Loading Screen")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml" reference',title:'"Package.toml"',reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_loading_screen.toml\n")),(0,r.kt)("h2",{id:"settings-detailed"},"Settings Detailed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Package\xa0Types"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"force_no_map_package"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabling this will force the map package (if any) to do NOT load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"auto_cleanup"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabling this will destroy all entities spawned by this Package when it unloads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"compatibility_version"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The game version (",(0,r.kt)("inlineCode",{parentName:"td"},"major.minor"),") at the time this package was created, for granting backwards compatibility between breaking changes. See more ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/core-concepts/packages/compatibility-versions"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"packages_requirements"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Packages dependencies used by this Package which need to be loaded first")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets_requirements"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Asset Packs to be loaded when this package loads")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"compatible_maps"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Maps compatible/recommended to work with this Game Mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"custom_settings"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Custom Settings which can be set when starting a new game or passed through command line to the server. See more ",(0,r.kt)("a",{parentName:"td",href:"#custom-settings"},"here"))))),(0,r.kt)("h3",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,"GameModes can define Custom Settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[custom_settings]")," section to be set when creating a new game through main menu, or set when starting the server with the command ",(0,r.kt)("inlineCode",{parentName:"p"},'--custom_settings "var1 = value1, var2 = value2, ..."')),(0,r.kt)("p",null,"The values defined can be accessed through the method ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/static-classes/server#getcustomsettings"},"Server.GetCustomSettings()"),"."),(0,r.kt)("h4",{id:"list-of-types"},"List of Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A toggleable checkbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"floating")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Floating numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"select")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of string values displayed as a Dropdown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text Box")))),(0,r.kt)("h2",{id:"ignoring-client-folders"},"Ignoring Client Folders"),(0,r.kt)("p",null,"Sometimes you want to ignore some folders from being sent to the clients (e.g. auto generated folders from Node.js HTML ones)."),(0,r.kt)("p",null,"So, to make the server ignore it you just need to add an ",(0,r.kt)("inlineCode",{parentName:"p"},".ignore")," file in the root of that folder. Simple as that \ud83d\ude09."),(0,r.kt)("h2",{id:"logo-image"},"Logo Image"),(0,r.kt)("p",null,"It is possible to have a custom image to be displayed in the Vault. For that, add a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.jpg")," besides the Package.toml with the image you wish. The recommended size is ",(0,r.kt)("inlineCode",{parentName:"p"},"300x150"),"."))}m.isMDXComponent=!0},55583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);
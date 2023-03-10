"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9756],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(s,".").concat(k)]||m[k]||g[k]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},95928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"Server Configuration",description:"All you need to know to Configure your server!",sidebar_position:2,tags:["hosting"]},l=void 0,i={unversionedId:"core-concepts/server-manual/server-configuration",id:"core-concepts/server-manual/server-configuration",title:"Server Configuration",description:"All you need to know to Configure your server!",source:"@site/docs/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/docs/next/core-concepts/server-manual/server-configuration",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-configuration.md",tags:[{label:"hosting",permalink:"/docs/next/tags/hosting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"Mar 10, 2023",sidebarPosition:2,frontMatter:{title:"Server Configuration",description:"All you need to know to Configure your server!",sidebar_position:2,tags:["hosting"]},sidebar:"main",previous:{title:"Server Installation",permalink:"/docs/next/core-concepts/server-manual/server-installation"},next:{title:"Command Line Interface - CLI",permalink:"/docs/next/core-concepts/server-manual/command-line-interface"}},s={},d=[{value:"Server Configuration File",id:"server-configuration-file",level:2},{value:"Settings Detailed",id:"settings-detailed",level:3},{value:"Logo Image",id:"logo-image",level:2},{value:"Map &amp; Level",id:"map--level",level:2},{value:"Server Console",id:"server-console",level:2},{value:"Built-in Commands",id:"built-in-commands",level:3},{value:"Custom Commands",id:"custom-commands",level:3},{value:"Command Line Parameters",id:"command-line-parameters",level:2},{value:"One-liner Server Configuration",id:"one-liner-server-configuration",level:3},{value:"Common Console Messages and Errors",id:"common-console-messages-and-errors",level:2},{value:"<code>Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...</code>",id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms",level:4},{value:"<code>Assertion Failed: [...] problem (5002) We don&#39;t have cert, and self-signed certs not allowed...</code>",id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed",level:4},{value:"<code>Lua Stack Error: Should be X, is Y...</code>",id:"lua-stack-error-should-be-x-is-y",level:4}],p={toc:d},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All you need to know to Configure your server!"),(0,r.kt)("h2",{id:"server-configuration-file"},"Server Configuration File"),(0,r.kt)("p",null,"The server Configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"Config.toml")," is generated automatically when the server is launched for the first time. This file will always be overridden with the proper pattern after the server is loaded."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"nanos world Config files use ",(0,r.kt)("strong",{parentName:"p"},"TOML")," (Tom\u2019s Obvious, Minimal Language), please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"https://github.com/toml-lang/toml")," for more information and syntax.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Config.toml\n")),(0,r.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"name"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"description"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Description of the Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"max_players"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max amount of players allowed to join")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"password"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password to be able to connect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ip"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server IP. We recommend leaving it blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"port"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server main Port and HTTP Port (UDP/TCP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"query_port"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server query Port (UDP)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"announce"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to announce or not in the Server List")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"tick_rate"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server Tick in ms. We recommend leaving it 33")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"log_level"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Which Log level to output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"game_mode"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/core-concepts/packages/packages-guide#package-types"},"game-mode")," package to load -  you can only load one game-mode at once.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"loading_screen"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/core-concepts/packages/loading-screen"},"loading-screen")," package to load - you can only load one loading-screen at once.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"packages"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/next/core-concepts/packages/packages-guide#package-types"},"script")," packages to load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional assets to force to load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"map"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Which map to load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"token"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server Token used for authorize downloads through CLI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"banned_ids"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of banned nanos account IDs")))),(0,r.kt)("h2",{id:"logo-image"},"Logo Image"),(0,r.kt)("p",null,"It is possible to have a custom image to be displayed in the server list. For that, add a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Server.jpg")," besides the server executable with the logo you wish. The recommended size is ",(0,r.kt)("inlineCode",{parentName:"p"},"300x150"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can pass a JPG image URL to ",(0,r.kt)("inlineCode",{parentName:"p"},"--logo")," parameter to automatically download it as the Server.jpg image!")),(0,r.kt)("h2",{id:"map--level"},"Map & Level"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(83831).Z,width:"1811",height:"852"})),(0,r.kt)("p",null,"The Map (or Level) is defined in the Server\u2019s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets/")," folder."),(0,r.kt)("p",null,"nanos world counts on (for now) 4 built-in maps: ",(0,r.kt)("inlineCode",{parentName:"p"},"nanos-world::BlankMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nanos-world::EmptyMap"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nanos-world::OceanMap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nanos-world::TestingMap")," which can be used in your server without needing to download any Asset Pack."),(0,r.kt)("h2",{id:"server-console"},"Server Console"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(28046).Z,width:"1058",height:"391"})),(0,r.kt)("h3",{id:"built-in-commands"},"Built-in Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chat <message>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends a chat message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"kick <player_d> <reason>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends a chat message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"map <map_path>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Changes the Map, reloads all Packages and reconnect all Players")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stop")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stops the server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"players")),(0,r.kt)("td",{parentName:"tr",align:"left"},"lists all players connected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"package run <package_name> <lua_code>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Runs a code in a package")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"package reload <package_name>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reloads a package")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"package hotreload <package_name>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hot-reloads a package (reloads all files but keeps the memory as is)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"package reload all")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reloads all packages and restarts the Lua Virtual Machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"package unload <package_name>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unloads a package")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"package load <package_name>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads a package")))),(0,r.kt)("h3",{id:"custom-commands"},"Custom Commands"),(0,r.kt)("p",null,"All (non built-in) commands will be sent into an event to the scripting/server-side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.Subscribe("Console", function(my_input)\n    Console.Log("Console command received: " .. my_input)\nend)\n')),(0,r.kt)("h2",{id:"command-line-parameters"},"Command Line Parameters"),(0,r.kt)("p",null,"It is possible to override the Server Configuration with Command Line Parameters. Note: this will not write to the Config file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--description")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--logo")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server Logo (downloads the image locally as a Server.jpg file)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--password")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--ip")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--map")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Map to load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--port")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--query_port")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server Query port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--announce")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If announce in master list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--game_mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server game-mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--loading_screen")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server loading-screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--packages")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server packages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--assets")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string list"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server assets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--token")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server authorization token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--max_players")),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max allowed players")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--dedicated_server")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If to start as a Dedicated Server or P2P")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--async_log")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If to use async or sync logs (async provides better performance) - default is 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--log_level")),(0,r.kt)("td",{parentName:"tr",align:"left"},"1, 2 or 3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If to use Normal, Debug or Verbose logs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--custom_settings")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/core-concepts/packages/packages-guide#custom-settings"},"Custom Settings")," to be passed to scripting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--compression")),(0,r.kt)("td",{parentName:"tr",align:"left"},"0-9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sets the compression level to use in some networking operations - 0 disables it, 1 is the fastest and 9 is the slower but highest compression ratio")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--save")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"flag")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If to save the parameters in Config.toml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--profiling")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"flag")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enables Performance Profiling Logs for debugging")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--auto_download")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"flag")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Automatically downloads Packages and Assets from Vault if needed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"--log_show_thread")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"flag")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Shows the current running thread of each outputted log")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Flag")," Value Types don't require any argument, just pass the parameter like ",(0,r.kt)("inlineCode",{parentName:"p"},"--parameter"),".")),(0,r.kt)("h3",{id:"one-liner-server-configuration"},"One-liner Server Configuration"),(0,r.kt)("p",null,"With Command Line Parameters and ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/server-manual/command-line-interface"},"Command Line Interface (CLI)"),", it is also possible to automate the full server installation, here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Installs/Updates the server through SteamCMD\nsteamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n\n# Installs all needed Packages (this will install needed Assets as well)\n./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools\n\n# Starts the server with all configs set\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,r.kt)("p",null,"Another shorter example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Starts the server with all configs set and auto downloads the packages and assets if needed\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,r.kt)("h2",{id:"common-console-messages-and-errors"},"Common Console Messages and Errors"),(0,r.kt)("h4",{id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms"},(0,r.kt)("inlineCode",{parentName:"h4"},"Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...")),(0,r.kt)("p",null,"It means the server got ",(0,r.kt)("strong",{parentName:"p"},"stuck")," for X milliseconds. The warning (",(0,r.kt)("em",{parentName:"p"},"yellow"),") is not something to worry about, but too many messages in ",(0,r.kt)("em",{parentName:"p"},"red"),") could mean your server infrastructure is not that good or your scripting code is not that optimized."),(0,r.kt)("p",null,"Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on."),(0,r.kt)("p",null,"If a single tick takes more than 33 milliseconds, this warning will appear up."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it\'s machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.')),(0,r.kt)("h4",{id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed"},(0,r.kt)("inlineCode",{parentName:"h4"},"Assertion Failed: [...] problem (5002) We don't have cert, and self-signed certs not allowed...")),(0,r.kt)("p",null,"This is an internal problem from Steam Library when you attempt to connect to a server too fast (when it has just started). The server automatically fixes it by retrying the connection, there is ",(0,r.kt)("strong",{parentName:"p"},"nothing to worry about"),"."),(0,r.kt)("h4",{id:"lua-stack-error-should-be-x-is-y"},(0,r.kt)("inlineCode",{parentName:"h4"},"Lua Stack Error: Should be X, is Y...")),(0,r.kt)("p",null,"This is an internal error and ",(0,r.kt)("strong",{parentName:"p"},"should not supposed to happen"),". Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!"))}g.isMDXComponent=!0},83831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/server-map-bb4747ea1a9ac9805f83bebcc6933cf2.webp"},28046:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/server-069c323cadab182b5b0b9b75d8315bea.webp"}}]);
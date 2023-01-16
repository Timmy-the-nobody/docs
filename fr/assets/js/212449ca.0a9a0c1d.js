"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Communication entre Packages",description:"Tout ce que vous avez besoin de savoir pour communiquer entre diff\xe9rents Packages",sidebar_position:3,tags:["scripting"]},i=void 0,c={unversionedId:"core-concepts/scripting/communicating-between-packages",id:"core-concepts/scripting/communicating-between-packages",title:"Communication entre Packages",description:"Tout ce que vous avez besoin de savoir pour communiquer entre diff\xe9rents Packages",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/communicating-between-packages.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/communicating-between-packages",permalink:"/fr/docs/next/core-concepts/scripting/communicating-between-packages",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/communicating-between-packages.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:3,frontMatter:{title:"Communication entre Packages",description:"Tout ce que vous avez besoin de savoir pour communiquer entre diff\xe9rents Packages",sidebar_position:3,tags:["scripting"]},sidebar:"main",previous:{title:"Authority Concepts",permalink:"/fr/docs/next/core-concepts/scripting/authority-concepts"},next:{title:"Valeurs des entit\xe9s",permalink:"/fr/docs/next/core-concepts/scripting/entity-values"}},l={},s=[{value:"\xc9v\xe9nements personnalis\xe9s",id:"\xe9v\xe9nements-personnalis\xe9s",level:2},{value:"Communiquer avec les Packages du m\xeame c\xf4t\xe9",id:"communiquer-avec-les-packages-du-m\xeame-c\xf4t\xe9",level:3},{value:"Envoi de donn\xe9es via le r\xe9seau",id:"envoi-de-donn\xe9es-via-le-r\xe9seau",level:3},{value:"Exporting Variables Globally",id:"exporting-variables-globally",level:2},{value:"Exportation d&#39;une Fonction",id:"exportation-dune-fonction",level:3},{value:"Appel d&#39;une Fonction Export\xe9e depuis un autre Package",id:"appel-dune-fonction-export\xe9e-depuis-un-autre-package",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tout ce que vous avez besoin de savoir pour communiquer entre diff\xe9rents Packages"),(0,r.kt)("p",null,"In nanos world there are 2 main ways which you can interact with other ",(0,r.kt)("strong",{parentName:"p"},"Packages"),". Dans cette page, nous vous expliquerons en d\xe9tail comment faire."),(0,r.kt)("h2",{id:"\xe9v\xe9nements-personnalis\xe9s"},"\xc9v\xe9nements personnalis\xe9s"),(0,r.kt)("h3",{id:"communiquer-avec-les-packages-du-m\xeame-c\xf4t\xe9"},"Communiquer avec les Packages du m\xeame c\xf4t\xe9"),(0,r.kt)("p",null,"Custom Events are the easier way to send or receive generic data or information to other packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-one/Server/Index.lua"',title:'"package-one/Server/Index.lua"'},'local my_parameter1 = 123\nlocal my_parameter2 = "hello there"\nlocal my_parameter3 = { important_stuff = "omg!" }\n\nEvents.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-two/Server/Index.lua"',title:'"package-two/Server/Index.lua"'},'Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)\n    Console.Log("Received " .. parameter1) -- Received 123\n    Console.Log("Received " .. parameter2) -- Received hello there\n    Console.Log("Received " .. parameter3) -- Re\xe7u: tableau\nend)\n')),(0,r.kt)("h3",{id:"envoi-de-donn\xe9es-via-le-r\xe9seau"},"Envoi de donn\xe9es via le r\xe9seau"),(0,r.kt)("p",null,"Sending information through the network is not different from sending in the same side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_parameter1 = "cool data from network"\n\n-- Envoyez cet \xe9v\xe9nement \xe0 tous les joueurs\nEvents.BroadcastRemote("GetThisFromServer", my_parameter1)\n\nlocal player_02 = GetPlayerSomehow()\n\n-- Ou envoyez cet \xe9v\xe9nement \xe0 un joueur sp\xe9cifique\nEvents.CallRemote("GetThisFromServer", player_02, my_parameter1)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)\n    Console.Log("Received " .. parameter1) -- Re\xe7u: "cool data from network"\nend)\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information and examples about using Custom Events, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/static-classes/events"},"Events"),".")),(0,r.kt)("h2",{id:"exporting-variables-globally"},"Exporting Variables Globally"),(0,r.kt)("p",null,"Another way of communicating is using ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.Export()")," method, it allows exposing variables (tables, functions, etc) globally so all other Packages can access it directly."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Unlike events, exported functions can return values to the caller. But exported functions are only available to the same side (Server or Client).")),(0,r.kt)("h3",{id:"exportation-dune-fonction"},"Exportation d'une Fonction"),(0,r.kt)("p",null,"With that, you can export functions for example, like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-one/Server/Index.lua"',title:'"package-one/Server/Index.lua"'},'-- D\xe9finit une fonction que vous voulez exporter\nfunction SpawnCoolWeapon(location, rotation)\n    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)\n    return cool_weapon\nend\n\n-- Exports the function to be called by other Packages\nPackage.Export("SpawnCoolWeapon", SpawnCoolWeapon)\n')),(0,r.kt)("p",null,"You can even export a whole table containing functions for example, to work as a library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-one/Server/Index.lua"',title:'"package-one/Server/Index.lua"'},'-- Defines a table with functions which you want to export\nMyAwesomeLibrary = {\n    CoolMethod = function(a, b)\n        return a + b\n    end,\n    AnotherAwesomeImportantMethod = function(c, d)\n        return c * d\n    end\n}\n\n-- Exports the table to be accessed by other Packages\nPackage.Export("MyAwesomeLibrary", MyAwesomeLibrary)\n')),(0,r.kt)("h3",{id:"appel-dune-fonction-export\xe9e-depuis-un-autre-package"},"Appel d'une Fonction Export\xe9e depuis un autre Package"),(0,r.kt)("p",null,"Now you can access that directly from other packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-two/Server/Index.lua"',title:'"package-two/Server/Index.lua"'},"-- Calls the exported function\nlocal cool_weapon = SpawnCoolWeapon(Vector(), Rotator())\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-two/Server/Index.lua"',title:'"package-two/Server/Index.lua"'},"-- Calls the exported table\nlocal awesome_result = MyAwesomeLibrary.CoolMethod(123, 456)\n")))}u.isMDXComponent=!0}}]);
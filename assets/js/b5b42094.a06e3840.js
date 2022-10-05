"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7649],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=r,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],c={title:"Packages Communication",description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},l=void 0,s={unversionedId:"core-concepts/scripting/communicating-between-packages",id:"core-concepts/scripting/communicating-between-packages",title:"Packages Communication",description:"All you need to know to communicate between different Packages",source:"@site/docs/core-concepts/scripting/communicating-between-packages.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/communicating-between-packages",permalink:"/docs/next/core-concepts/scripting/communicating-between-packages",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/communicating-between-packages.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1664975131,formattedLastUpdatedAt:"Oct 5, 2022",sidebarPosition:3,frontMatter:{title:"Packages Communication",description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},sidebar:"main",previous:{title:"Authority Concepts",permalink:"/docs/next/core-concepts/scripting/authority-concepts"},next:{title:"Entity Values",permalink:"/docs/next/core-concepts/scripting/entity-values"}},p={},u=[{value:"Custom Events",id:"custom-events",level:2},{value:"Communicating with Packages in the same Side",id:"communicating-with-packages-in-the-same-side",level:3},{value:"Sending data through the network",id:"sending-data-through-the-network",level:3},{value:"Packages Exported Functions",id:"packages-exported-functions",level:2},{value:"Exporting a Function",id:"exporting-a-function",level:3},{value:"Calling an Exported Function from another Package",id:"calling-an-exported-function-from-another-package",level:3},{value:"Using Package&#39;s RequirePackage",id:"using-packages-requirepackage",level:2},{value:"Output",id:"output",level:4}],m={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All you need to know to communicate between different Packages"),(0,o.kt)("p",null,"In nanos world there are 3 main ways which you can interact with other ",(0,o.kt)("strong",{parentName:"p"},"Packages"),". In this page we will explain in details how to do so."),(0,o.kt)("h2",{id:"custom-events"},"Custom Events"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information and examples about using Custom Events, please refer to Events.")),(0,o.kt)("h3",{id:"communicating-with-packages-in-the-same-side"},"Communicating with Packages in the same Side"),(0,o.kt)("p",null,"Custom Events are the easier way to send data or information to other packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'local my_parameter1 = 123\nlocal my_parameter2 = "hello there"\nlocal my_parameter3 = { important_stuff = "omg!" }\n\nEvents.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)\n    Package.Log("Received " .. parameter1) -- Received 123\n    Package.Log("Received " .. parameter2) -- Received hello there\n    Package.Log("Received " .. parameter3) -- Received table\nend)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Calling events will trigger the event in all Packages.")),(0,o.kt)("h3",{id:"sending-data-through-the-network"},"Sending data through the network"),(0,o.kt)("p",null,"Sending information through the network is not different from sending in the same side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_parameter1 = "cool data from network"\n\n-- Call this event to all Players\nEvents.BroadcastRemote("GetThisFromServer", my_parameter1)\n\nlocal player_02 = GetPlayerSomehow()\n\n-- Or call this event to a specific player\nEvents.CallRemote("GetThisFromServer", player_02, my_parameter1)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)\n    Package.Log("Received " .. parameter1) -- Received cool data from network\nend)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Calling network events will trigger the event in all Packages from the other side.")),(0,o.kt)("h2",{id:"packages-exported-functions"},"Packages Exported Functions"),(0,o.kt)("p",null,"Another way of communicating is using Exported Functions. With Exported Functions you can define functions in your Package which can be called by any other Package and have a value returned."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Unlike events, exported functions can return values to the caller. But you can only call Exported Functions from the same side ","(","Server or Client",")",".")),(0,o.kt)("h3",{id:"exporting-a-function"},"Exporting a Function"),(0,o.kt)("p",null,"For exporting functions, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.Export()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'-- Defines a function which you want to export\nfunction SpawnCoolWeapon(location, rotation)\n    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)\n    return cool_weapon\nend\n\n-- Exports the function to be called by other Packages \nPackage.Export("SpawnCoolWeapon", SpawnCoolWeapon)\n')),(0,o.kt)("h3",{id:"calling-an-exported-function-from-another-package"},"Calling an Exported Function from another Package"),(0,o.kt)("p",null,"For calling a function exported by another Package, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.Call()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'-- Calls the exported function\nlocal cool_weapon = Package.Call("PackageOne","SpawnCoolWeapon", Vector(), Rotator())\n')),(0,o.kt)("h2",{id:"using-packages-requirepackage"},"Using Package's RequirePackage"),(0,o.kt)("p",null,"The last way of communicating between Packages is by loading other Packages inside the current Package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageOne/Server/Index.lua"',title:'"PackageOne/Server/Index.lua"'},'Package.Log("Hello from Package One!")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="PackageTwo/Server/Index.lua"',title:'"PackageTwo/Server/Index.lua"'},'Package.RequirePackage("PackageOne")\n\nPackage.Log("Hello from Package Two!")\n')),(0,o.kt)("h4",{id:"output"},"Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Hello from Package One!\nHello from Package Two!\n")),(0,o.kt)("p",null,"This will load the file Index.lua from PackageOne into the VM of PackageOne where you called ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.RequirePackage()"),"."),(0,o.kt)("p",null,"Also the Required Package will be sent to the clients, then you can ",(0,o.kt)("inlineCode",{parentName:"p"},"RequirePackage")," in the client side too."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It's recommended to set your Required Packages as ",(0,o.kt)("inlineCode",{parentName:"p"},"library")," and load it as requirement in the Package.toml, this way the package is sent to the clients too.")))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Blueprint Communication",description:"Learn how to communicate between Lua and Blueprints",tags:["tutorial-example"]},l=void 0,s={unversionedId:"getting-started/tutorials-and-examples/blueprint-communication",id:"version-latest/getting-started/tutorials-and-examples/blueprint-communication",title:"Blueprint Communication",description:"Learn how to communicate between Lua and Blueprints",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/blueprint-communication.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/blueprint-communication",permalink:"/docs/getting-started/tutorials-and-examples/blueprint-communication",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/blueprint-communication.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Blueprint Communication",description:"Learn how to communicate between Lua and Blueprints",tags:["tutorial-example"]},sidebar:"version-latest/main",previous:{title:"Basic HUD (HTML)",permalink:"/docs/getting-started/tutorials-and-examples/basic-hud-html"},next:{title:"Chat Colors",permalink:"/docs/getting-started/tutorials-and-examples/chat-colors"}},o={},p=[{value:"Blueprint Events",id:"blueprint-events",level:2},{value:"Creating a Custom Event",id:"creating-a-custom-event",level:3},{value:"Calling a Custom Event from Lua",id:"calling-a-custom-event-from-lua",level:3},{value:"Blueprint Event Dispatcher",id:"blueprint-event-dispatcher",level:2},{value:"Creating an Event Dispatchers",id:"creating-an-event-dispatchers",level:3},{value:"Calling a Dispatcher from Blueprint",id:"calling-a-dispatcher-from-blueprint",level:3},{value:"Binding Dispatchers from Lua",id:"binding-dispatchers-from-lua",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Learn how to communicate between Lua and Blueprints."),(0,i.kt)("p",null,"In nanos world, you can send and subscribe to Blueprint Events! In this guide you will see how to create and bind events on Blueprints and Lua!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All communication is only possible on Client Side! As the server is not aware of Unreal.")),(0,i.kt)("h2",{id:"blueprint-events"},"Blueprint Events"),(0,i.kt)("p",null,"Events (or Functions) can be created inside your Blueprint to be called from Lua."),(0,i.kt)("h3",{id:"creating-a-custom-event"},"Creating a Custom Event"),(0,i.kt)("p",null,"Open or create your Blueprint, enter ",(0,i.kt)("strong",{parentName:"p"},"Event Graph")," tab and ",(0,i.kt)("strong",{parentName:"p"},"Right Click")," the graph to open the Context Action Menu, there type ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Custom Event...")," to find the option:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(74536).Z,width:"1917",height:"1033"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also create Functions instead of Events to be called from Lua!")),(0,i.kt)("p",null,"Then, select your newly created Custom Event and in the ",(0,i.kt)("strong",{parentName:"p"},"Details")," panel (usually in the right side), you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," new Inputs to it, you can add any amount of inputs:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80500).Z,width:"1918",height:"1027"})),(0,i.kt)("p",null,"And that's it for creating it! You can add any logic you want from now on!"),(0,i.kt)("h3",{id:"calling-a-custom-event-from-lua"},"Calling a Custom Event from Lua"),(0,i.kt)("p",null,"On Lua, you can spawn your blueprint as usual, and call ",(0,i.kt)("inlineCode",{parentName:"p"},"CallBlueprintEvent")," on it to trigger the blueprint event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Client/index.lua","Client/index.lua":!0},'-- Spawns the Blueprint\nlocal blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_AwesomeBlueprint")\n\nlocal param1 = true -- bool parameter\nlocal param2 = 123 -- integer parameter\nlocal param3 = "hello there!" -- string parameter\n\n-- Calls the event, passing the parameters\nblueprint:CallBlueprintEvent("MyBlueprintCustomEvent", param1, param2, param3)\n')),(0,i.kt)("h2",{id:"blueprint-event-dispatcher"},"Blueprint Event Dispatcher"),(0,i.kt)("p",null,"Events Dispatchers are Events created inside blueprint which other Blueprints (or in our case Lua) can subscribe to it to get triggered when it's called from the Blueprint."),(0,i.kt)("h3",{id:"creating-an-event-dispatchers"},"Creating an Event Dispatchers"),(0,i.kt)("p",null,"To create it, find the ",(0,i.kt)("strong",{parentName:"p"},"Event Dispatchers")," section on the left side and press ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," to create a new one, name it as you desire:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58894).Z,width:"429",height:"971"})),(0,i.kt)("p",null,"Then, select it and on the ",(0,i.kt)("strong",{parentName:"p"},"Details")," Panel you can add as many inputs/parameters as you want:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(19839).Z,width:"509",height:"631"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15187).Z,width:"488",height:"240"})),(0,i.kt)("h3",{id:"calling-a-dispatcher-from-blueprint"},"Calling a Dispatcher from Blueprint"),(0,i.kt)("p",null,"Now, to trigger it from the Blueprint, drag it from the list into the Graph and select ",(0,i.kt)("strong",{parentName:"p"},"Call")," option:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69714).Z,width:"1261",height:"551"})),(0,i.kt)("p",null,"And then you can plug any logic on it to trigger it, any other Blueprint or Lua which is bound to that will get it triggered!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7844).Z,width:"1149",height:"894"})),(0,i.kt)("h3",{id:"binding-dispatchers-from-lua"},"Binding Dispatchers from Lua"),(0,i.kt)("p",null,"You can ",(0,i.kt)("strong",{parentName:"p"},"Bind")," Blueprint Event Dispatchers directly from Lua! For that, spawn your Blueprint, and call ",(0,i.kt)("inlineCode",{parentName:"p"},"BindBlueprintEventDispatcher()")," on it to bind the Dispatcher:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Client/index.lua","Client/index.lua":!0},'-- Spawns the Blueprint\nlocal blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_AwesomeBlueprint",)\n\n-- Subscribes to a Blueprint Event Dispatcher\nblueprint:BindBlueprintEventDispatcher("GorgeousDispatcher", function(self, arg1, arg2)\n    -- arg1 is a string and arg2 is an integer\n    Console.Log("Called from Blueprint!", arg1, arg2)\nend)\n')))}d.isMDXComponent=!0},74536:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprints-01-427e4ff91467d64a40d3b66690068dcf.webp"},80500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprints-02-ca51c0d9fbef5a7b7f858cb18e19bf29.webp"},58894:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprints-03-84ac42f56d50bb0bbd5918f16d1c46de.webp"},19839:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprints-04-6b122c343704447e425ec7976a8b1843.webp"},15187:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},7844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprints-06-eda3d0ce1b126407b96e48bdb06b92ee.webp"},69714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blueprints-07-6d85e0a2afa58d67b5933bb733c73bf6.webp"}}]);
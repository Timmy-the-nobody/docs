"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5055],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(t),d=i,v=p["".concat(l,".").concat(d)]||p[d]||b[d]||s;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var o=2;o<s;o++)a[o]=t[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=t(87462),i=(t(67294),t(3905));const s={title:"Events Guide",description:"All you need to know about Events",sidebar_position:1,tags:["scripting"]},a=void 0,c={unversionedId:"core-concepts/scripting/events-guide",id:"core-concepts/scripting/events-guide",title:"Events Guide",description:"All you need to know about Events",source:"@site/docs/core-concepts/scripting/events-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/events-guide",permalink:"/de/docs/next/core-concepts/scripting/events-guide",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17. M\xe4rz 2023",sidebarPosition:1,frontMatter:{title:"Events Guide",description:"All you need to know about Events",sidebar_position:1,tags:["scripting"]},sidebar:"main",previous:{title:"Classes Guide",permalink:"/de/docs/next/core-concepts/scripting/classes-guide"},next:{title:"Authority Concepts",permalink:"/de/docs/next/core-concepts/scripting/authority-concepts"}},l={},o=[{value:"Classes Events",id:"classes-events",level:2},{value:"Subscribing for Class Events",id:"subscribing-for-class-events",level:3},{value:"Unsubscribing of Class Events",id:"unsubscribing-of-class-events",level:3},{value:"Unsubscribing from all Events",id:"unsubscribing-from-all-events",level:4},{value:"Unsubscribing from a specific Event Callback",id:"unsubscribing-from-a-specific-event-callback",level:4},{value:"Entity Events",id:"entity-events",level:2},{value:"Subscribing for Entity Events",id:"subscribing-for-entity-events",level:3},{value:"Unsubscribing of Entity Events",id:"unsubscribing-of-entity-events",level:3},{value:"Unsubscribing from all Entity Events",id:"unsubscribing-from-all-entity-events",level:4},{value:"Unsubscribing from a specific Entity Event Callback",id:"unsubscribing-from-a-specific-entity-event-callback",level:4},{value:"Custom Events",id:"custom-events",level:2}],u={toc:o},p="wrapper";function b(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All you need to know about Events."),(0,i.kt)("h2",{id:"classes-events"},"Classes Events"),(0,i.kt)("p",null,"In nanos world, all actions performed by Players or Entities can be obtained through ",(0,i.kt)("strong",{parentName:"p"},"events"),"."),(0,i.kt)("p",null,"The most basic event to bring an example is the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Spawn")),". Every time an entity is spawned, the event ",(0,i.kt)("inlineCode",{parentName:"p"},"Spawn")," will be triggered."),(0,i.kt)("h3",{id:"subscribing-for-class-events"},"Subscribing for Class Events"),(0,i.kt)("p",null,"Registering for events is very easy and straightforward using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscribe"),", let's say we want to know where a Player has joined the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'Player.Subscribe("Spawn", function(player)\n    Console.Log(player:GetName() .. " has joined!")\nend)\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/scripting/authority-concepts#methods-and-events-availability"},"Availability"),".")),(0,i.kt)("h3",{id:"unsubscribing-of-class-events"},"Unsubscribing of Class Events"),(0,i.kt)("p",null,"Currently there is two ways of unsubscribing from events:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Unsubscribing events will ",(0,i.kt)("strong",{parentName:"p"},"always")," only unregister from events which were registered in the Package you are.")),(0,i.kt)("h4",{id:"unsubscribing-from-all-events"},"Unsubscribing from all Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- This will unregister from all "Spawn" events of Player registered in this Package\nPlayer.Unsubscribe("Spawn")\n')),(0,i.kt)("h4",{id:"unsubscribing-from-a-specific-event-callback"},"Unsubscribing from a specific Event Callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Declares the Callback beforehand\nfunction OnSpawnPlayer(player)\n    Console.Log(player:GetName() .. " has joined!")\nend\n\n-- Subscribes the event, passing the Callback\nPlayer.Subscribe("Spawn", OnSpawnPlayer)\n\n-- Subscribes for the same event, twice\nPlayer.Subscribe("Spawn", function(player)\n    Console.Log(player:GetName() .. " has joined again!")\nend)\n\n-- Unsubscribes only from the first Callback\nPlayer.Unsubscribe("Spawn", OnSpawnPlayer)\n\n-- This will keep triggering "player has joined again" but will not trigger\n-- "player has joined" anymore\n')),(0,i.kt)("h2",{id:"entity-events"},"Entity Events"),(0,i.kt)("p",null,"In nanos world it is possible to register for events on specific Entities as well, this way the callback will only be triggered if that specific entity is the event reason."),(0,i.kt)("h3",{id:"subscribing-for-entity-events"},"Subscribing for Entity Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns a Character\nlocal my_character = Character()\n\nmy_character:Subscribe("EnterVehicle", function(self, vehicle)\n    -- my_character entered vehicle\nend)\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that once the entity is destroyed, all events registered for it will be unregistered automatically!")),(0,i.kt)("h3",{id:"unsubscribing-of-entity-events"},"Unsubscribing of Entity Events"),(0,i.kt)("p",null,"Currently there is two ways of unsubscribing from events:"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Unsubscribing events will ",(0,i.kt)("strong",{parentName:"p"},"always")," only unregister from events which were registered in the Package you are.")),(0,i.kt)("h4",{id:"unsubscribing-from-all-entity-events"},"Unsubscribing from all Entity Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- This will unregister from all "EnterVehicle" events of this specific Character\n-- registered in this Package\nmy_character:Unsubscribe("EnterVehicle")\n')),(0,i.kt)("h4",{id:"unsubscribing-from-a-specific-entity-event-callback"},"Unsubscribing from a specific Entity Event Callback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Declares the Callback beforehand\nfunction OnCharacterEnteredVehicle(character, vehicle)\n    -- Entered vehicle!\nend\n\n-- Subscribes the event, passing the Callback\nmy_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)\n\n-- Subscribes for the same event, twice\nmy_character:Subscribe("EnterVehicle", function(character, vehicle)\n    -- Entered vehicle again!\nend)\n\n-- Unsubscribes only from the first Callback\nmy_character:Unsubscribe("EnterVehicle", OnCharacterEnteredVehicle)\n')),(0,i.kt)("h2",{id:"custom-events"},"Custom Events"),(0,i.kt)("p",null,"In nanos world, it is possible to define and call Custom Events. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/static-classes/events"},"Events")," Static Class for the technical documentation."),(0,i.kt)("p",null,"Custom events are user-created events which you can subscribe or call to all other Packages."))}b.isMDXComponent=!0}}]);
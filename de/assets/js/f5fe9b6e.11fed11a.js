"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={title:"Classes Guide",description:"Alles was Sie \xfcber Klassen wissen m\xfcssen",sidebar_position:0,tags:["scripting"]},i=void 0,o={unversionedId:"core-concepts/scripting/classes-guide",id:"core-concepts/scripting/classes-guide",title:"Classes Guide",description:"Alles was Sie \xfcber Klassen wissen m\xfcssen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/de/docs/next/core-concepts/scripting/classes-guide",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/classes-guide.md",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",sidebarPosition:0,frontMatter:{title:"Classes Guide",description:"Alles was Sie \xfcber Klassen wissen m\xfcssen",sidebar_position:0,tags:["scripting"]},sidebar:"main",previous:{title:"Ladebildschirm",permalink:"/de/docs/next/core-concepts/packages/loading-screen"},next:{title:"Events Guide",permalink:"/de/docs/next/core-concepts/scripting/events-guide"}},l={},p=[{value:"Classes",id:"classes",level:2},{value:"Base Classes",id:"base-classes",level:3},{value:"Spawn-Entit\xe4ten",id:"spawn-entit\xe4ten",level:3},{value:"Zerst\xf6re Entit\xe4ten",id:"zerst\xf6re-entit\xe4ten",level:3},{value:"Static Classes",id:"static-classes",level:2},{value:"Utility Classes",id:"utility-classes",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Alles was Sie \xfcber Klassen wissen m\xfcssen"),(0,r.kt)("p",null,"Alle Entit\xe4ten in nanos Welt werden durch eine Gruppe repr\xe4sentiert. In Lua, classes are represented by ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/glossary/basic-types#table"},"tables"),". That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". Auf dieser Seite werden wir mehr dazu erkl\xe4ren."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In nanos world we have 3 types of Classes (or structures): ",(0,r.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Static Classes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Utility Classes"),".")),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"If you read our ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Spawnen einer Entit\xe4t mit einem Konstruktor\nlokal my_entity = Entity()\n\n-- Interagieren mit der Entit\xe4t mit ihren Methoden\nmy_entity:MyFunction()\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Zugriff auf ",(0,r.kt)("strong",{parentName:"p"},"Entit\xe4ten / Spawned Objects")," ",(0,r.kt)("strong",{parentName:"p"},"Methoden")," sind mit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},":"))," erstellt.")),(0,r.kt)("p",null,"So funktioniert ",(0,r.kt)("strong",{parentName:"p"},"OOP"),"! Sie erstellen Objekte und rufen Funktionen und Ereignisse auf diesem Objekt auf/ab. Im Gegensatz zu anderen Skriptspielen, die tonnenweise globale Funktionen und Ereignisse haben, um mit Entities zu interagieren, nanos world scripting ist ein ",(0,r.kt)("strong",{parentName:"p"},"moderner Ansatz")," bis ",(0,r.kt)("strong",{parentName:"p"},"modernes Programmieren"),"."),(0,r.kt)("h3",{id:"base-classes"},"Base Classes"),(0,r.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),', which means we have base parent classes, and it\'s children which "inherits" all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ',(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/character"},"Character")," and ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/prop"},"Prop")," it is possible to call the function: ",(0,r.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also ",(0,r.kt)("strong",{parentName:"p"},"Static Methods")," to get and retrieve entities directly.")),(0,r.kt)("h3",{id:"spawn-entit\xe4ten"},"Spawn-Entit\xe4ten"),(0,r.kt)("p",null,"Spawnen von Entit\xe4ten in nanos Welt ist extrem einfach und unkompliziert, sagen wir, wir wollen einen Charakter spawnen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"lokales my_character = Character()\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jede Klasse wird ihren eigenen ",(0,r.kt)("strong",{parentName:"p"},"Constructor"),", ",(0,r.kt)("strong",{parentName:"p"},"Eigenschaften"),", ",(0,r.kt)("strong",{parentName:"p"},"Methoden")," und ",(0,r.kt)("strong",{parentName:"p"},"Ereignisse")," enthalten."),(0,r.kt)("p",{parentName:"admonition"},"\xdcberpr\xfcfen Sie alle Klassen, die nanos world in der Sidebar bietet ",(0,r.kt)("strong",{parentName:"p"},"Skriptreferenz -> Klassen")," Artikel.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Beachten Sie, dass einige Klassen nur im ",(0,r.kt)("strong",{parentName:"p"},"Server erzeugt werden k\xf6nnen"),", andere k\xf6nnen nur im ",(0,r.kt)("strong",{parentName:"p"},"Client")," erzeugt werden.")),(0,r.kt)("h3",{id:"zerst\xf6re-entit\xe4ten"},"Zerst\xf6re Entit\xe4ten"),(0,r.kt)("p",null,"Alle Klassen ","(","but Player",")"," erlauben es dir, sie mit der Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy()")," zu zerst\xf6ren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"my_character:Destroy()\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Destroying an Entity will trigger the event ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy")," and also will automatically detach all attached entities it had attached*."),(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("em",{parentName:"p"},"If you attached entities with ",(0,r.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," parameter, all attached entities will be destroyed as well \ud83d\ude09"),".")),(0,r.kt)("h2",{id:"static-classes"},"Static Classes"),(0,r.kt)("p",null,"Statische Klassen in nanos Welt sind Klassen, die du nicht spawnen kannst. Stattdessen k\xf6nnen Sie ihre Methoden direkt mit ",(0,r.kt)("inlineCode",{parentName:"p"},"verwenden."),"."),(0,r.kt)("p",null,"Wenn Sie zum Beispiel mit Welt ","(","den Sonnenuntergang verschieben, Regen setzen usw.) interagieren wollen, ben\xf6tigen Sie die ",(0,r.kt)("inlineCode",{parentName:"p"},"Welt")," Statische Klasse:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Macht es 9:25 Uhr\nWelt.SetTime(9, 25)\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Der Zugriff auf ",(0,r.kt)("strong",{parentName:"p"},"Statische Klassen / Statische Methoden")," erfolgt mit ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".")),".")),(0,r.kt)("h2",{id:"utility-classes"},"Utility Classes"),(0,r.kt)("p",null,"Neben Kursen und Statikkursen haben wir die ",(0,r.kt)("strong",{parentName:"p"},"Utility Classes"),"! Dies sind meist Strukturen, die in nanos world API wie Vector, Rotator, Color, JSON und einigen anderen verwendet werden."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Alle Utility Classes sind Open Sourced unter ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!")))}d.isMDXComponent=!0}}]);
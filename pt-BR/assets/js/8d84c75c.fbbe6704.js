"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2341],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(g,i(i({ref:e},d),{},{components:n})):r.createElement(g,i({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97926:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},i=void 0,o={unversionedId:"scripting-reference/classes/blueprint",id:"version-latest/scripting-reference/classes/blueprint",title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/blueprint.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/blueprint",permalink:"/pt-BR/docs/scripting-reference/classes/blueprint",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/blueprint.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"},{label:"client",permalink:"/pt-BR/docs/tags/client"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},sidebar:"version-latest/main",previous:{title:"\ud83e\udea7 Billboard",permalink:"/pt-BR/docs/scripting-reference/classes/billboard"},next:{title:"\u26d3\ufe0f Cable",permalink:"/pt-BR/docs/scripting-reference/classes/cable"}},p={},s=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"Calling Blueprint Events from lua",id:"calling-blueprint-events-from-lua",level:3},{value:"Binding Blueprint Event Dispatchers",id:"binding-blueprint-event-dispatchers",level:3},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2},{value:"\u2705 List of Supported Parameter Types",id:"-list-of-supported-parameter-types",level:2}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},c=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),u=d("StaticFunctionsDeclaration"),g=d("FunctionsDeclaration"),k=d("EventsDeclaration"),f={toc:s};function N(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(c,{type:"Class",name:"Blueprint",image:"/img/docs/blueprint.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your Actor Blueprint was spawned on the Server, it will be automatically synchronized with other players using the nanos world Network Authority system! It follows the same rules as all other entities!")),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("h3",{id:"calling-blueprint-events-from-lua"},"Calling Blueprint Events from lua"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Client/index.lua","Client/index.lua":!0},'-- Spawns the Blueprint\nlocal blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_MyBlueprint")\n\nlocal param1 = 123\nlocal param2 = "hello there!"\n\n-- Calls the event, passing any parameters\nblueprint:CallBlueprintEvent("MyBlueprintCustomEvent", param1, param2)\n')),(0,a.kt)("h3",{id:"binding-blueprint-event-dispatchers"},"Binding Blueprint Event Dispatchers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Client/index.lua","Client/index.lua":!0},'-- Spawns the Blueprint\nlocal blueprint = Blueprint(Vector(), Rotator(), "my-asset-pack::BP_MyBlueprint")\n\n-- Subscribes to a Blueprint Event Dispatcher\nblueprint:BindBlueprintEventDispatcher("MyBlueprintDispatcher", function(self, arg1, arg2)\n    Package.Log("Called from Blueprint!", arg1, arg2)\nend)\n')),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(m,{type:"Class",name:"Blueprint",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,a.kt)(u,{type:"Class",name:"Blueprint",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)(g,{type:"Class",name:"Blueprint",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,a.kt)(k,{type:"Class",name:"Blueprint",mdxType:"EventsDeclaration"}),(0,a.kt)("h2",{id:"-list-of-supported-parameter-types"},"\u2705 List of Supported Parameter Types"),(0,a.kt)("p",null,"List of all supported parameters which can be passed between Lua <-> Blueprint:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Variable Type"),(0,a.kt)("th",{parentName:"tr",align:"left"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Boolean"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Byte"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Integer"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Integer64"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Float"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"String"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Enum"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Name"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Text"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Vector"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Rotator"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Color"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"LinearColor"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Actor"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Object"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Player"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Transform"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Structs"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u274c")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Other built-in ",(0,a.kt)("strong",{parentName:"p"},"Structs")," can be requested to be supported. If you feel the real need please add an idea to our ",(0,a.kt)("a",{parentName:"p",href:"https://feedback.nanos.world"},"Feedback Hub"),".")))}N.isMDXComponent=!0}}]);
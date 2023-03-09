"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(b,s(s({ref:t},p),{},{components:n})):a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\ud83d\udda5\ufe0f WebUI",description:"Class for spawning a web browser in the screen",sidebar_position:0,tags:["scripting","ui"]},s=void 0,l={unversionedId:"scripting-reference/classes/webui",id:"scripting-reference/classes/webui",title:"\ud83d\udda5\ufe0f WebUI",description:"Class for spawning a web browser in the screen",source:"@site/docs/scripting-reference/classes/webui.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/webui",permalink:"/pt-BR/docs/next/scripting-reference/classes/webui",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"scripting",permalink:"/pt-BR/docs/next/tags/scripting"},{label:"ui",permalink:"/pt-BR/docs/next/tags/ui"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udda5\ufe0f WebUI",description:"Class for spawning a web browser in the screen",sidebar_position:0,tags:["scripting","ui"]},sidebar:"main",previous:{title:"\ud83d\udd2b Weapon",permalink:"/pt-BR/docs/next/scripting-reference/classes/weapon"},next:{title:"\ud83e\ude9f Widget",permalink:"/pt-BR/docs/next/scripting-reference/classes/widget"}},o={},c=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"Using a WebUI as Mesh Material",id:"using-a-webui-as-mesh-material",level:4},{value:"Communicating between Lua and JS (WebUI)",id:"communicating-between-lua-and-js-webui",level:4},{value:"Pretty Scroll Bar",id:"pretty-scroll-bar",level:4},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\udd0d\xa0HTML Path Searchers",id:"html-path-searchers",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("HeaderDeclaration"),m=p("ReferenceLink"),d=p("ConstructorDeclaration"),b=p("StaticFunctionsDeclaration"),g=p("FunctionsDeclaration"),f=p("EventsDeclaration"),h={toc:c},k="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u,{type:"Class",name:"WebUI",image:"/img/docs/webui.webp",mdxType:"HeaderDeclaration"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Our WebUI implementation is built using the last versions of ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/chromiumembedded/cef"},"Chromium Embedded Framework"),".")),(0,r.kt)("admonition",{title:"Proprietary Codecs",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Proprietary Codecs like ",(0,r.kt)("strong",{parentName:"p"},"MP3")," and ",(0,r.kt)("strong",{parentName:"p"},"AAC")," are not supported on public CEF builds. We recommend converting your media files to ",(0,r.kt)("strong",{parentName:"p"},"WEBM")," or ",(0,r.kt)("strong",{parentName:"p"},"OGG"),".")),(0,r.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Loading a local file\nlocal my_ui = WebUI(\n    "Awesome UI",            -- Name\n    "file://UI/index.html",  -- Path relative to this package (Client/)\n    WebUIVisibility.Visible  -- Is Visible on Screen\n)\n\n-- Loading a Web URL\nlocal my_browser = WebUI(\n    "Awesome Site",          -- Name\n    "https://nanos.world",   -- Web\'s URL\n    WebUIVisibility.Visible  -- Is Visible on Screen\n)\n\n-- Loading a local file from other package\nlocal my_ui = WebUI(\n    "Awesome Other UI",      -- Name\n    "file://other-package/Client/UI/index.html",\n    WebUIVisibility.Visible  -- Is Visible on Screen\n)\n')),(0,r.kt)("h4",{id:"using-a-webui-as-mesh-material"},"Using a WebUI as Mesh Material"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with is_visible = false, is_transparent = false, auto_resize = false and size of 500x500\nlocal my_ui = WebUI("Awesome Site", "https://nanos.world", false, false, false, 500, 500)\n\n-- Spawns a StaticMesh (can be any mesh)\nlocal static_mesh = StaticMesh(Vector(0, 0, 100), Rotator(), "nanos-world::SM_Cube")\n\n-- Sets the mesh material to use the WebUI\nstatic_mesh:SetMaterialFromWebUI(my_ui)\n')),(0,r.kt)("h4",{id:"communicating-between-lua-and-js-webui"},"Communicating between Lua and JS (WebUI)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local my_ui = WebUI("Awesome UI", "file://UI/index.html")\n\nlocal param1 = 123\nlocal param2 = "hello"\n\n-- Calls a JS event\nmy_ui:CallEvent("MyEvent", param1, param2)\n\n-- Subscribes to receive JS events\nmy_ui:Subscribe("MyAnswer", function(param1)\n    Console.Log("Received back! %s", param1)\n    -- Will output \'Received back! Hey there!\'\nend)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="script.js"',title:'"script.js"'},'// Register for "MyEvent" from Lua\nEvents.Subscribe("MyEvent", function(param1, param2) {\n    console.log("Triggered! " + param1 + " " + param2);\n    // Will output \'Triggered! 123 hello\'\n\n    // Triggers "MyAnswer" on Lua\n    Events.Call("MyAnswer", "Hey there!");\n})\n')),(0,r.kt)("h4",{id:"pretty-scroll-bar"},"Pretty Scroll Bar"),(0,r.kt)("p",null,"Since we migrated from Webkit to CEF, some scrollbars got ugly. Here's a small CSS snippet to make them almost like the Webkit ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"::-webkit-scrollbar {\n    width: 6px;\n}\n\n::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-color: #494949;\n}\n\nbody {\n    scrollbar-gutter: stable both-edges;\n}\n")),(0,r.kt)("p",null,"More related examples:"),(0,r.kt)(m,{href:"core-concepts/scripting/user-interface",mdxType:"ReferenceLink"},"User Interface"),(0,r.kt)(m,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"Basic HUD (HTML)"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the output Texture from a Canvas with ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromwebui"},":SetMaterialFromWebUI()")," method!")),(0,r.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,r.kt)(d,{type:"Class",name:"WebUI",mdxType:"ConstructorDeclaration"}),(0,r.kt)("h2",{id:"html-path-searchers"},"\ud83d\udd0d\xa0HTML Path Searchers"),(0,r.kt)("p",null,"Loading a .html file supports the following searchers, which are looked in the following order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"current-file-path/")),(0,r.kt)("li",{parentName:"ol"},"Relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"current-package/Client/")),(0,r.kt)("li",{parentName:"ol"},"Relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"current-package/")),(0,r.kt)("li",{parentName:"ol"},"Relative to ",(0,r.kt)("inlineCode",{parentName:"li"},"Packages/"))),(0,r.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,r.kt)(b,{type:"Class",name:"WebUI",mdxType:"StaticFunctionsDeclaration"}),(0,r.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,r.kt)(g,{type:"Class",name:"WebUI",mdxType:"FunctionsDeclaration"}),(0,r.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,r.kt)(f,{type:"Class",name:"WebUI",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",sidebar_position:7,tags:["scripting"]},i=void 0,c={unversionedId:"core-concepts/scripting/traces-and-raycasting",id:"version-latest/core-concepts/scripting/traces-and-raycasting",title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",source:"@site/versioned_docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/fr/docs/core-concepts/scripting/traces-and-raycasting",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 mars 2023",sidebarPosition:7,frontMatter:{title:"Traces & Raycasting",description:"How to use Traces & Raycasting to gather world information in runtime",sidebar_position:7,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Artificial Intelligence",permalink:"/fr/docs/core-concepts/scripting/artificial-intelligence"},next:{title:"Extending Classes",permalink:"/fr/docs/core-concepts/scripting/extending-classes"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to use Traces & Raycasting to gather world information in runtime."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Traces")," offer a method for reaching out in your maps and getting feedback on what is present along a line segment. You use them by providing two end points (a start and end location) and the physics system \u201ctraces\u201d a line segment between those points, reporting any Actors that it hits. Traces are essentially the same as ",(0,a.kt)("strong",{parentName:"p"},"Raycasts")," or ",(0,a.kt)("strong",{parentName:"p"},"Raytraces")," in other software packages."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(78213).Z,width:"1152",height:"435"})),(0,a.kt)("p",null,"The following example will show you how to get what and where the player is looking at."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Traces at each 100ms\nTimer.SetInterval(function()\n    -- Gets the middle of the screen\n    local viewport_2D_center = Viewport.GetViewportSize() / 2\n\n    -- Deprojects to get the 3D Location for the middle of the screen\n    local viewport_3D = Viewport.DeprojectScreenToWorld(viewport_2D_center)\n\n    -- Makes a trace with the 3D Location and it\'s direction multiplied by 5000\n    -- Meaning it will trace 5000 units in that direction\n    local trace_max_distance = 5000\n\n    local start_location = viewport_3D.Position\n    local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n    -- Determine at which object we will be tracing for (WorldStatic - StaticMeshes - and PhysicsBody - Props)\n    local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody\n\n    -- Sets the trace modes (we want it to return Entity and Draws a Debug line)\n    local trace_mode = TraceMode.ReturnEntity | TraceMode.DrawDebug\n\n    -- Last parameter as true means it will draw a Debug Line in the traced segment\n    local trace_result = Trace.LineSingle(start_location, end_location, collision_trace, trace_mode)\n\n    -- If hit something draws a Debug Point at the location\n    if (trace_result.Success) then\n\n        -- Makes the point Red or Green if hit an Actor\n        local color = Color(1, 0, 0) -- Red\n\n        if (trace_result.Entity) then\n            color = Color(0, 1, 0) -- Green\n\n            -- Here you can check which actor you hit like\n            -- if (trace_result.Entity:GetType() == "Character") then ...\n        end\n\n        -- Draws a Debug Point at the Hit location for 5 seconds with size 10\n        Debug.DrawPoint(trace_result.Location, color, 5, 10)\n    end\nend, 100)\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"As you could see, we can pass bit-wise operators to Trace for more than one ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/glossary/enums#collisionchannel"},"CollisionChannel")," at once! Use ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," between the ",(0,a.kt)("strong",{parentName:"p"},"CollisionChannels")," to achieve that.")))}u.isMDXComponent=!0},78213:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/traces-raycasting-9efb35a67eb78f33062bb0a4a88372e7.jpg"}}]);
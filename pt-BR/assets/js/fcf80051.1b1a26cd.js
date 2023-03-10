"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",tags:["tutorial-example","scripting"]},i=void 0,l={unversionedId:"getting-started/tutorials-and-examples/gravity-gun",id:"version-latest/getting-started/tutorials-and-examples/gravity-gun",title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/gravity-gun.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/gravity-gun",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/gravity-gun",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/tags/tutorial-example"},{label:"scripting",permalink:"/pt-BR/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 de mar. de 2023",frontMatter:{title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",tags:["tutorial-example","scripting"]},sidebar:"version-latest/main",previous:{title:"Fireworks",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/fireworks"},next:{title:"Hosting Server 4Free - Google Cloud",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/hosting-server-4free-gcp"}},c={},s=[{value:"Final result",id:"final-result",level:3},{value:"Code Snippet",id:"code-snippet",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to create a simple Gravity Gun to move Props around."),(0,r.kt)("h3",{id:"final-result"},"Final result"),(0,r.kt)("video",{controls:"true",allowfullscreen:"true"},(0,r.kt)("source",{src:"/videos/docs/tutorials/gravity-gun.webm"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can now find a fully working Gravity Gun in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox"},"Sandbox")," game-mode!")),(0,r.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns some Props and Static Meshes\n-- (note: Static Meshes don\'t have physics so they will freeze where released automatically)\nlocal p_sphere = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Sphere")\nlocal p_cone = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Cone")\nlocal sm_cube = StaticMesh(Vector(100, 0, 200), Rotator(), "nanos-world::SM_Cube")\nlocal sm_cylinder = StaticMesh(Vector(300, 0, 200), Rotator(), "nanos-world::SM_Cylinder")\n\n-- Subscribe for Client\'s custom event, for when the object is grabbed/dropped\nEvents.Subscribe("PickUp", function(player, object, is_grabbing)\n    object:SetGravityEnabled(not is_grabbing)\n    object:TranslateTo(object:GetLocation(), 0)\nend)\n\n-- Subscribe for Client\'s custom event, to update the position of the object he is grabbing\nEvents.Subscribe("UpdateObjectPosition", function(player, object, location)\n    object:TranslateTo(location, 0.1)\nend)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Global Variables\npicking_object = nil\ndistance_trace_object = nil\ndistance = 200\n\n-- Sets the color of Highlighing at index 1\nClient.SetHighlightColor(Color(0, 20, 20, 1.5), 1, HighlightMode.OnlyVisible)\n\n-- When Player clicks\nInput.Subscribe("MouseUp", function(key_name)\n\n    -- If mouse was left button\n    if (key_name == "LeftMouseButton") then\n\n        -- If is grabbing something, drop it\n        if (picking_object) then\n            -- Calls server to re-enable gravity (if possible) and update it\'s last position\n            Events.CallRemote("PickUp", picking_object, false)\n\n            -- Disables the highlight\n            picking_object:SetHighlightEnabled(false)\n\n            picking_object = nil\n            return\n        end\n\n        -- Get the camera location in 3D World Space\n        local viewport_2D_center = Viewport.GetViewportSize() / 2\n        local viewport_3D = Viewport.DeprojectScreenToWorld(viewport_2D_center)\n        local start_location = viewport_3D.Position\n\n        -- Gets the end location of the trace (5000 units ahead)\n        local trace_max_distance = 5000\n        local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n        -- Determine at which object we will be tracing for (WorldStatic - StaticMeshes - and PhysicsBody - Props)\n        local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody\n\n        -- Sets the trace modes (we want it to return Entity and Draws a Debug line)\n        local trace_mode = TraceMode.ReturnEntity | TraceMode.DrawDebug\n\n        -- Do the Trace\n        local trace_result = Trace.LineSingle(start_location, end_location, collision_trace, trace_mode)\n\n        -- If hit something and hit an Entity\n        if (trace_result.Success and trace_result.Entity) then\n\n            -- Sets the new picked up object\n            picking_object = trace_result.Entity\n\n            -- Calculates the offset of the hit and the center of the object\n            distance_trace_object = picking_object:GetLocation() - trace_result.Location\n\n            -- Calculates the distance of the object and the camera\n            distance = trace_result.Location:Distance(viewport_3D.Position)\n\n            -- Calls remote to disable gravity of this object (if has)\n            Events.CallRemote("PickUp", picking_object, true)\n\n            -- Enable Highlighting on index 1\n            picking_object:SetHighlightEnabled(true, 1)\n        end\n    elseif (key_name == "MouseScrollUp") then\n        -- If mouse scroll, updates the Distance of the object from the camera\n        distance = distance + 25\n    elseif (key_name == "MouseScrollDown") then\n        -- If mouse scroll, updates the Distance of the object from the camera\n        distance = distance - 25\n        if (distance < 100) then distance = 100 end\n    end\nend)\n\nClient.Subscribe("Tick", function(delta_time)\n    -- On Tick, updates the Position of the object, based on it\'s distance and camera rotation\n    if (picking_object == nil) then return end\n\n    local player = Client.GetLocalPlayer()\n    if (player == nil) then return end\n\n    -- Get the camera location in 3D World Space\n    local viewport_2D_center = Viewport.GetViewportSize() / 2\n    local viewport_3D = Viewport.DeprojectScreenToWorld(viewport_2D_center)\n    local start_location = viewport_3D.Position\n\n    -- Gets the new object location\n    -- (camera direction * \'distance\' units ahead + object offset from first Hit to keep it relative)\n    local end_location = (viewport_3D.Position + viewport_3D.Direction * distance) + distance_trace_object\n\n    -- Calls remote to update it\'s location\n    Events.CallRemote("UpdateObjectPosition", picking_object, end_location)\nend)\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2659],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={title:"Traces & Raycasting",description:"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution",sidebar_position:7,tags:["scripting"]},c=void 0,l={unversionedId:"core-concepts/scripting/traces-and-raycasting",id:"version-latest/core-concepts/scripting/traces-and-raycasting",title:"Traces & Raycasting",description:"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/traces-and-raycasting",permalink:"/fr/docs/core-concepts/scripting/traces-and-raycasting",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/traces-and-raycasting.md",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",sidebarPosition:7,frontMatter:{title:"Traces & Raycasting",description:"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution",sidebar_position:7,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Intelligence artificielle",permalink:"/fr/docs/core-concepts/scripting/artificial-intelligence"},next:{title:"Extension des Classes",permalink:"/fr/docs/core-concepts/scripting/extending-classes"}},u={},p=[],d={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Comment utiliser les Traces & Raycasting pour recueillir des informations sur le monde en cours d'ex\xe9cution."),(0,o.kt)("p",null,"Les ",(0,o.kt)("strong",{parentName:"p"},"Traces")," offrent une m\xe9thode pour atteindre dans vos maps et obtenir un retour sur ce qui est pr\xe9sent le long d'un segment. Vous les utilisez en fournissant deux points d'extr\xe9mit\xe9 (un emplacement de d\xe9part et un emplacement d'arriv\xe9e) et le syst\xe8me physique \"trace\" un segment de ligne entre ces points, en signalant tous les acteurs qu'il rencontre. Les traces sont essentiellement les m\xeames que ",(0,o.kt)("strong",{parentName:"p"},"Raycasts")," ou ",(0,o.kt)("strong",{parentName:"p"},"Raytraces")," dans d'autres logiciels."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78213).Z,width:"1152",height:"435"})),(0,o.kt)("p",null,"L'exemple suivant vous montre comment obtenir ce que le joueur regarde et o\xf9 il le regarde."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Traces at each 100ms\nTimer.SetInterval(function()\n    -- Gets the middle of the screen\n    local viewport_2D_center = Client.GetViewportSize() / 2\n\n    -- Deprojects to get the 3D Location for the middle of the screen\n    local viewport_3D = Client.DeprojectScreenToWorld(viewport_2D_center)\n\n    -- Makes a trace with the 3D Location and it's direction multiplied by 5000\n    -- Meaning it will trace 5000 units in that direction\n    local trace_max_distance = 5000\n\n    local start_location = viewport_3D.Position\n    local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n    -- Last parameter as true means it will draw a Debug Line in the traced segment\n    local trace_result = Client.Trace(start_location, end_location, CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody, false, true, false, {}, true)\n\n    -- If hit something draws a Debug Point at the location\n    if (trace_result.Success) then\n\n        -- Makes the point Red or Green if hit an Actor\n        local color = Color(1, 0, 0) -- Red\n\n        if (trace_result.Entity) then\n            color = Color(0, 1, 0) -- Green\n\n            -- Here you can check which actor you hit like\n            -- if (trace_result.Entity:GetType() == \"Character\") then ...\n        end\n\n        -- Dessine un point de d\xe9bug \xe0 l'emplacement pendant 5 secondes avec une taille de 10.\n        Client.DrawDebugPoint(trace_result.Location, color, 5, 10)\n    end\nend, 100)\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As you could see, we can pass bit-wise operators to Trace for more than one ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/glossary/enums#collisionchannel"},"CollisionChannel")," at once! Utilisation ",(0,o.kt)("inlineCode",{parentName:"p"},"|")," entre les ",(0,o.kt)("strong",{parentName:"p"},"CollisionChannels")," pour y parvenir.")))}m.isMDXComponent=!0},78213:function(e,t,n){t.Z=n.p+"assets/images/traces-raycasting-9efb35a67eb78f33062bb0a4a88372e7.jpg"}}]);
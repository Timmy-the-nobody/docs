"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4451],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Prop Rain",description:"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger",tags:["tutorial-example","scripting"]},i=void 0,l={unversionedId:"getting-started/tutorials-and-examples/prop-rain",id:"getting-started/tutorials-and-examples/prop-rain",title:"Prop Rain",description:"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger",source:"@site/docs/getting-started/tutorials-and-examples/prop-rain.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/prop-rain",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/prop-rain",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4 mars 2023",frontMatter:{title:"Prop Rain",description:"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Play as Prop",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/play-as-prop"},next:{title:"Prop Shooter",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/prop-shooter"}},s={},p=[{value:"Final result",id:"final-result",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create a rain effect with Props (boxes) falling from sky once a Character enters a Trigger."),(0,a.kt)("h3",{id:"final-result"},"Final result"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/docs/tutorials/prop-rain.mp4"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Trigger\nmy_trigger = Trigger(Vector(200, 200, 0), 200)\n\n-- Defines my_timer globally to be used to store Timer\nmy_timer = nil\n\n-- Sets BeginOverlap event\nmy_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    -- Only activates if a Character enters it\n    if (actor_triggering:GetType() ~= "Character") then\n        return\n    end\n\n    -- Sets a Timer at each 100ms to spawn a Prop\n    my_timer = Timer.SetInterval(function()\n        -- Gets random Location and Rotation\n        local prop_spawn_location = Vector(math.random(100, 300), math.random(100, 300), math.random(800, 1200))\n        local prop_spawn_rotation = Rotator(math.random(0, 360), math.random(0, 360), math.random(0, 360))\n\n        -- Spawns a Crate\n        Prop(prop_spawn_location, prop_spawn_rotation, "nanos-world::SM_Crate_07")\n    end, 100)\nend)\n\n-- Sets EndOverlap event\nmy_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)\n    -- Only deactivates if a Character leaves it\n    if (actor_triggering:GetType() ~= "Character") then\n        return\n    end\n\n    -- Stops/Clear the Timer\n    if (my_timer ~= nil) then\n        Timer.ClearTimeout(my_timer)\n    end\nend)\n')))}d.isMDXComponent=!0}}]);
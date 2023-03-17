"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=o,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},97989:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={slug:"august-2022",title:"2022 August: API, Auto Docs & More!",authors:"gtnardy",tags:["updates"],image:"/img/blog/2022-august/august-news.webp"},i=void 0,s={permalink:"/blog/august-2022",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2022-09-02-august.md",source:"@site/blog/2022-09-02-august.md",title:"2022 August: API, Auto Docs & More!",description:"Open Source API, Auto-generated Documentation & More!",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[{label:"updates",permalink:"/blog/tags/updates"}],readingTime:5.965,hasTruncateMarker:!0,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"august-2022",title:"2022 August: API, Auto Docs & More!",authors:"gtnardy",tags:["updates"],image:"/img/blog/2022-august/august-news.webp"},prevItem:{title:"2022 September: Dimensions!",permalink:"/blog/september-2022"},nextItem:{title:"2022 July: CEF, Settings Menu & Improvs!",permalink:"/blog/july-2022"}},l={authorsImageUrls:[void 0]},c=[{value:"Open Source API",id:"open-source-api",level:2},{value:"VSCode Extension",id:"vscode-extension",level:2},{value:"Smart Documentation",id:"smart-documentation",level:2},{value:"New UI (Console &amp; Chat)",id:"new-ui-console--chat",level:2},{value:"New Profiling Stats",id:"new-profiling-stats",level:2},{value:"Trigger Whitelist",id:"trigger-whitelist",level:2},{value:"SceneCapture Render Only",id:"scenecapture-render-only",level:2},{value:"Melee Improvements",id:"melee-improvements",level:2},{value:"New Traces",id:"new-traces",level:2},{value:"Performance Improvements",id:"performance-improvements",level:2},{value:"Native LoadPackage",id:"native-loadpackage",level:2},{value:"CEF Improvements",id:"cef-improvements",level:2},{value:"New Game Settings",id:"new-game-settings",level:2},{value:"Auth Website Redesign",id:"auth-website-redesign",level:2},{value:"Tons of Bug Fixes",id:"tons-of-bug-fixes",level:2},{value:"Community Highlights",id:"community-highlights",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Open Source API, Auto-generated Documentation & More!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(78101).Z,width:"800",height:"320"})),(0,o.kt)("p",null,"Another month has passed, and here is a summary with the things that happened during that!"),(0,o.kt)("h2",{id:"open-source-api"},"Open Source API"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/api"},(0,o.kt)("img",{src:a(13112).Z,width:"1284",height:"185"}))),(0,o.kt)("p",null,"This month we, with the help of the entire community, created the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/api"},"Official nanos world API"),", which is an organized set of all Classes, Static Classes, Utility Classes, Structs, and all their Functions and Events. We made this in order to have an official place where all the scripting of nanos world can be obtained."),(0,o.kt)("h2",{id:"vscode-extension"},"VSCode Extension"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Derpius.nanosworld"},(0,o.kt)("img",{src:a(13235).Z,width:"637",height:"204"}))),(0,o.kt)("p",null,"With the API, it was possible to professionalize the extension of ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Derpius.nanosworld"},"nanos world for VSCode"),", created by ",(0,o.kt)("strong",{parentName:"p"},"@Derpius"),". Now it uses the API to generate all the Lua stubs!"),(0,o.kt)("p",null,"This way, all updates made in the API reflect directly on the extension for VSCode, being always updated!"),(0,o.kt)("p",null,"Don't forget to rate it \ud83d\ude09."),(0,o.kt)("h2",{id:"smart-documentation"},"Smart Documentation"),(0,o.kt)("p",null,"Our docs pass through a complete refactor under the hood! Now all ",(0,o.kt)("strong",{parentName:"p"},"Scripting Reference")," pages are generated automatically using our new API! This is a big step forward as before I was writing each function separately in each page. Now I just need to update a single JSON and the docs gets structured properly!"),(0,o.kt)("p",null,"Not only the automatization, but now we have some interactive popups, which display more information of a Class/Struct/Function when you hover it! This will help a lot newcomers understanding the basics of nanos world!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(89939).Z,width:"846",height:"168"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(17477).Z,width:"681",height:"208"})),(0,o.kt)("h2",{id:"new-ui-console--chat"},"New UI (Console & Chat)"),(0,o.kt)("p",null,"I've updated our remaining old design UIs for the Console and the Chat! Now they belong to the same style as the menus!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(43207).Z,width:"668",height:"383"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(25792).Z,width:"1919",height:"1079"})),(0,o.kt)("h2",{id:"new-profiling-stats"},"New Profiling Stats"),(0,o.kt)("p",null,"I've added a real time profiling view to display performance information of the game and scripting. It displays the accumulated time spent on an operation and the average in the frame in the last second."),(0,o.kt)("p",null,"It is really useful for debugging and finding bottlenecks in both core game and in your packages! It displays individual events for each packages and the time they are taking to execute."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(8997).Z,width:"774",height:"683"})),(0,o.kt)("h2",{id:"trigger-whitelist"},"Trigger Whitelist"),(0,o.kt)("p",null,"Now Trigger can have a list passed in the constructor to only trigger for specific classes! This helps scripters to care more about performance and reduces the amount of validation needed in Lua side to check if an entity triggered is of the type we want!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Triggers only Characters and Vehicles\nlocal trigger = Trigger(\n  Vector(),                   -- location\n  Rotator(),                  -- rotation\n  Vector(100),                -- extent\n  TriggerType.Sphere,         -- trigger_type\n  true,                       -- is_visible\n  Color(1, 0, 0),             -- color\n  { "Character", "Vehicle" }  -- overlap_only_classes\n)\n')),(0,o.kt)("h2",{id:"scenecapture-render-only"},"SceneCapture Render Only"),(0,o.kt)("p",null,"SceneCapture got new methods to render only actors set manually through parameters. This allow transparent backgrounds when rendering just a specific Entity (a Character for example)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"SceneCapture.AddRenderActor(actor)\nSceneCapture.RemoveRenderActor(actor)\nSceneCapture.ClearRenderActors()\n")),(0,o.kt)("h2",{id:"melee-improvements"},"Melee Improvements"),(0,o.kt)("p",null,"The Melee class got several improvements including new methods and events to make it even more flexible. You can now set a list of Attack Animations and Impact Sounds depending on the surface it hits! Also it got a new event ",(0,o.kt)("strong",{parentName:"p"},"Attack")," when the attack happens. Not to mention several bug fixes and improvements have been made on Melees too!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"Melee.AddAnimationCharacterUse(asset_path, play_rate, slot_Type)\nMelee.SetImpactSound(surface_type, asset_path, volume, pitch)\n")),(0,o.kt)("h2",{id:"new-traces"},"New Traces"),(0,o.kt)("p",null,"I added two new Trace methods ",(0,o.kt)("inlineCode",{parentName:"p"},"Trace.LineSingle()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Trace.LineMulti()")," replacing the old Trace. Those new methods now receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"trace_mode")," parameter which supports several parameters being passed as bitwise flags, this new way of passing parameters is great for future updates as it doesn't add breaking changes and also reduces the amount of parameters needed in the method."),(0,o.kt)("p",null,"You can for example pass it like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Traces complex collisions, returns the entity as the Entity table value and draws a debug line in the world.\nTraceMode.TraceComplex | TraceMode.ReturnEntity | TraceMode.DrawDebug\n")),(0,o.kt)("h2",{id:"performance-improvements"},"Performance Improvements"),(0,o.kt)("p",null,"I am constantly working on improving the performance, this is one of my main priorities. And now with the new profiling stats, we are being able to find the bottlenecks faster!"),(0,o.kt)("p",null,"We've got great improvement on performance while Aiming and on Blood decals/particle spawns. Now Blood takes into consideration all levels of Effects Scalability settings to spawn more/less depending on that."),(0,o.kt)("p",null,'I am aware of a "problem" causing performance hit when spawning some dozens of thousands of entities (Entity Tick time) and I\'m thinking on a solution to solve that. The problem comes because each entity is "ticked" every frame, so thousands of entities means thousands of more ticks per frame.'),(0,o.kt)("h2",{id:"native-loadpackage"},"Native LoadPackage"),(0,o.kt)("p",null,"I did an great improvement on ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.LoadPackage()")," method to make a native load of Lua code. So anything you return in the loaded file will be properly receiving in the loader side! Before it was doing an ugly and weird serialization/deserialization of the returned data, and now it behaves like the native operator!"),(0,o.kt)("h2",{id:"cef-improvements"},"CEF Improvements"),(0,o.kt)("p",null,"I am still constantly improving and adjusting the edges of integration with CEF. This last month I fixed several bugs and crashes and worked on performance improvements, there are still some points to be improved and there is one bug in my concern to be corrected."),(0,o.kt)("p",null,"Also, I'm always going to keep our CEF version up-to-date, it was just updated to ",(0,o.kt)("strong",{parentName:"p"},"104.4.26")," so our version did to!"),(0,o.kt)("h2",{id:"new-game-settings"},"New Game Settings"),(0,o.kt)("p",null,"Our Settings got new options which can be changed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"draw network debug in the world")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"display network stats in the screen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auto realign camera")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fov can be altered by gameplay"))),(0,o.kt)("h2",{id:"auth-website-redesign"},"Auth Website Redesign"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(820).Z,width:"1314",height:"436"})),(0,o.kt)("p",null,"@MegaThorx worked on big refactoring on our ",(0,o.kt)("a",{parentName:"p",href:"https://auth.nanos.io"},"Auth")," website, it now supports Dark Mode and a new UI/UX for better usability!"),(0,o.kt)("h2",{id:"tons-of-bug-fixes"},"Tons of Bug Fixes"),(0,o.kt)("p",null,"It worth mentioning the tons of bug fixes and improvements we got this month, it's all written in the changelogs in our Discord."),(0,o.kt)("p",null,"Some examples are: a bug causing a Deadlock in the server when using Triggers (the server was freezing), a bug causing crashes when using coroutines, duplicating logs, UX problems, Server Cache not working (loading taking minutes), Main Menu crashes, and much more!"),(0,o.kt)("h2",{id:"community-highlights"},"Community Highlights"),(0,o.kt)("p",null,"A huge shoutout for the French \ud83c\uddeb\ud83c\uddf7 community  hich has grown a lot on the server! And especially to ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCnvxGZY1uFrXHNRu3MqMIBg"},"Mouloud")," that is creating amazing packages for nanos world!"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VeStKCAokgg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Y-3T6qZfXgo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"A lot of things being improved and bugs being fixed, the creation of API and Docs's self-generation are life changing (especially for me as it's now much easier to update docs with new things) and also for all scripters that can rely on the VSCode extension which is 100% backed on the official API."),(0,o.kt)("p",null,"Once again I reinforce the importance of posting and voting for ideas in our ",(0,o.kt)("a",{parentName:"p",href:"https://feedback.nanos.world"},"Feedback Hub"),". E.g. it's clear that the greatest need for everyone at the moment are the Dimensions \ud83d\ude1c."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(32077).Z,width:"434",height:"160"})),(0,o.kt)("p",null,"And also don't be reluctant to post bugs in our ",(0,o.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"Issue tracker"),". The chances of your bug being fixed increases by 10000% if you post it there."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(66979).Z,width:"975",height:"194"})),(0,o.kt)("p",null,"That's it for this month, once again thank you all for the support!!!"))}p.isMDXComponent=!0},13112:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-24157e180e9f6b645d828a2a760bdcc3.webp"},78101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/august-news-d99a2d3af8b082a47f8be6c98fed3c52.webp"},820:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/auth-3692c14dcd0769237903c988c1f0d9b0.webp"},43207:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},25792:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-fa371af26a8c22fe4d29978f6ed9c1f3.webp"},89939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docs-01-1b343189d35e934064e1dbd23d41634e.webp"},17477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/docs-02-6b220afac8340726b47c8998ed7fc772.webp"},66979:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ideas-d5e5ca82ac5b38d471ced2b01ac94572.webp"},32077:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},8997:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/profiling-daeec1ccec506f1ba0566b9463981ac3.webp"},13235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vscode-0c41a9418b7f0ee2151f060dd1be0bcc.webp"}}]);
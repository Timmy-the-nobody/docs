"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(n),p=o,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const l={slug:"november-2022",title:"2022 November: Entity System, UDS & UE5.1!",authors:"gtnardy",tags:["updates"],image:"/img/blog/2022-november/november-news.webp"},i=void 0,r={permalink:"/pt-BR/blog/november-2022",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2022-12-07-november.md",source:"@site/i18n/pt-BR/docusaurus-plugin-content-blog/2022-12-07-november.md",title:"2022 November: Entity System, UDS & UE5.1!",description:"Entity System, UDS & UE5.1!",date:"2022-12-07T00:00:00.000Z",formattedDate:"7 de dezembro de 2022",tags:[{label:"updates",permalink:"/pt-BR/blog/tags/updates"}],readingTime:8.2,hasTruncateMarker:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"november-2022",title:"2022 November: Entity System, UDS & UE5.1!",authors:"gtnardy",tags:["updates"],image:"/img/blog/2022-november/november-news.webp"},prevItem:{title:"2022 December: One VM to Rule Them All!",permalink:"/pt-BR/blog/december-2022"},nextItem:{title:"2022 October: Playtest & Big API Refactor!",permalink:"/pt-BR/blog/october-2022"}},s={authorsImageUrls:[void 0]},u=[{value:"Refactor Releases",id:"refactor-releases",level:2},{value:"Entity &amp; Inheriting System",id:"entity--inheriting-system",level:2},{value:"Built-in Events",id:"built-in-events",level:3},{value:"Custom Methods",id:"custom-methods",level:3},{value:"Custom Constructors",id:"custom-constructors",level:3},{value:"Multiple Inheritance",id:"multiple-inheritance",level:3},{value:"Custom Entity Events",id:"custom-entity-events",level:3},{value:"Global Registry",id:"global-registry",level:3},{value:"Further Reading",id:"further-reading",level:3},{value:"Sandbox Improvements",id:"sandbox-improvements",level:2},{value:"Entities",id:"entities",level:3},{value:"Spawn Menu",id:"spawn-menu",level:3},{value:"Tools",id:"tools",level:3},{value:"Context Menu",id:"context-menu",level:3},{value:"Unreal Engine 5.1",id:"unreal-engine-51",level:2},{value:"Physics and Cables",id:"physics-and-cables",level:3},{value:"Nanite &amp; Lumen",id:"nanite--lumen",level:3},{value:"Ultra Dynamic Sky",id:"ultra-dynamic-sky",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function d(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Entity System, UDS & UE5.1!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62778).Z,width:"800",height:"320"})),(0,o.kt)("h2",{id:"refactor-releases"},"Refactor Releases"),(0,o.kt)("p",null,"As announced in the last Blog News, we are performing a series of refactoring in the API to standardize it better. We have a long list of changes and I'm doing them gradually."),(0,o.kt)("p",null,"The main one that allowed us to make more changes without breaking compatibility is the ",(0,o.kt)("inlineCode",{parentName:"p"},"compatibility_version")," released in the last update. This configuration on Package.toml will ensure that the package continues to work in future updates in cases of breakage changes."),(0,o.kt)("p",null,"Also we've already got our first feature to try the ",(0,o.kt)("strong",{parentName:"p"},"compatibility_version")," system: the new ",(0,o.kt)("inlineCode",{parentName:"p"},"Events.SubscribeRemote")," method! This method will subscribe only for remote called methods, splitting completely the behavior of subscribing for Local and Remote events. The change of this method caused a breaking change because all existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Events.Subscribe")," will no longer trigger with remote Events. But ",(0,o.kt)("strong",{parentName:"p"},"compatibility_version")," ensures that they continue to work until you update the value to version ",(0,o.kt)("inlineCode",{parentName:"p"},"1.22")," or more recent."),(0,o.kt)("p",null,"I'm working on several Static Class refactoring as well and also changing some names of methods (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP.RequestSync")," will be standardized into just ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," and the async version would become ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync"),")."),(0,o.kt)("p",null,"I reinforce again that if you have suggestions on other changes such as event or methods names, do not hesitate to say it! Big refactoring opportunities like this are rare!"),(0,o.kt)("h2",{id:"entity--inheriting-system"},"Entity & Inheriting System"),(0,o.kt)("p",null,"This is a very special update which I've been working in the past months! \ud83e\udd73"),(0,o.kt)("p",null,"The new Inheriting System is an addition that completely changes the paradigm of creating scripts! This system allows you to inherit existing classes to create your own custom classes and spawn them as if they were native!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Creates a new Class called "MyNewClass" inheriting from Prop\nMyNewClass = Prop.Inherit("MyNewClass")\n\n-- Spawn it using the default constructor\nlocal ent = MyNewClass(Vector(), Rotator(), "nanos-world::SM_Cube")\n')),(0,o.kt)("h3",{id:"built-in-events"},"Built-in Events"),(0,o.kt)("p",null,"Native events will return your class instead of the native class. E.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- This will trigger for all Props and it's descendents,\n-- and the value of 'prop' will be the children itself\nProp.Subscribe(\"Destroy\", function(prop)\n    -- You can check if an entity is from a inherited Class type!\n    -- IsA checks recursively if any parent is from that type\n    if (NanosUtils.IsA(prop, MyCube)) then\n        -- prop is of type MyCube\n    end\nend)\n")),(0,o.kt)("h3",{id:"custom-methods"},"Custom Methods"),(0,o.kt)("p",null,"Easily add new methods to your class!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'MyNewClass = Prop.Inherit("MyNewClass")\n\nfunction MyNewClass:MyMethod()\n    -- Do something\nend\n')),(0,o.kt)("h3",{id:"custom-constructors"},"Custom Constructors"),(0,o.kt)("p",null,"This system also allows the creation of personalized constructors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Creates a new Class called "MyCube" inheriting from Prop\nMyCube = Prop.Inherit("MyCube")\n\n-- Defines my constructor with any parameters you desire\nfunction MyCube:Constructor(loc, rot)\n    -- Do any kind of logic here\n    loc = loc + Vector(0, 0, 100)\n\n    -- Calls Super Constructor to finalize the construction\n    self.Super:Constructor(loc, rot, "nanos-world::SM_Cube")\nend\n\n-- Spawn it using your custom constructor\nlocal cube = MyCube(Vector(123, 456, 100), Rotator())\n')),(0,o.kt)("h3",{id:"multiple-inheritance"},"Multiple Inheritance"),(0,o.kt)("p",null,"We can inherit from other inherited classes as well!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'MyCube = Prop.Inherit("MyCube")\nMyMiniCube = MyCube.Inherit("MyMiniCube")\nMySuperMiniCube = MyMiniCube.Inherit("MySuperMiniCube")\n')),(0,o.kt)("h3",{id:"custom-entity-events"},"Custom Entity Events"),(0,o.kt)("p",null,"Now we have the possibility to trigger remote events on custom Classes, to allow easy networking communication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'function MyCube:OnMyAnotherEvent(my_param)\n    Console.Log(my_param)\nend\n\nMyCube.SubscribeRemote("MyAnotherEvent", MyCube.OnMyAnotherEvent)\n\nlocal my_cube = MyCube()\nmy_cube:CallRemoteEvent("MyCustomEvent", 123)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'function MyCube:OnMyCustomEvent(player, my_param)\n    self:BroadcastRemoteEvent("MyAnotherCustomEvent", "hello")\nend\n\nMyCube.SubscribeRemote("MyCustomEvent", MyCube.OnMyCustomEvent)\n')),(0,o.kt)("h3",{id:"global-registry"},"Global Registry"),(0,o.kt)("p",null,"Through the parent class, we can get a list of all children classes of that class, having a global registry of all existing classes!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local children_classes = ToolGun.GetInheritedClasses()\nfor _, class in pairs(children_classes) do\n    -- 'class' is a custom inherited class! we can spawn it\n    local p = class()\nend\n")),(0,o.kt)("h3",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,"There's much more! Like entity events or calling parent methods! Read about everything at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/scripting/inheriting-classes"},"Dedicated Documentation Page"),"."),(0,o.kt)("h2",{id:"sandbox-improvements"},"Sandbox Improvements"),(0,o.kt)("p",null,"With this new Entity System, I'm taking the time to do some improvements in Sandbox game-mode, as now this system allows a better organization of how things interacts with each other."),(0,o.kt)("h3",{id:"entities"},"Entities"),(0,o.kt)("p",null,"I'm converting almost everything into this Entity System, for example the Torch (Melee at spawn menu) now becomes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Torch")," entity inherited from ",(0,o.kt)("inlineCode",{parentName:"p"},"Melee"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Server/Index.lua",title:"Server/Index.lua"},'Torch = Melee.Inherit("Torch")\n\nfunction Torch:Constructor(location, rotation)\n    self.Super:Constructor(location or Vector(), rotation or Rotator(), "nanos-world::SM_Torch")\n    self:AddAnimationCharacterUse("nanos-world::AM_Mannequin_Torch_Attack")\n    self:SetImpactSound(SurfaceType.Flesh, "nanos-world::A_Punch_Cue")\n    self:SetDamageSettings(0.5, 0.25)\n    self:SetCooldown(1.5)\n    self:SetBaseDamage(25)\n\n    local light = Light(Vector(), Rotator(), Color(1, 0.7, 0.4), LightType.Point, 100, 1000)\n    light:AttachTo(self, AttachmentRule.SnapToTarget, "", 0)\n    light:SetRelativeLocation(Vector(0, 0, 75))\n\n    local particle = Particle(Vector(), Rotator(), "nanos-world::P_Fire", false)\n    particle:AttachTo(self, AttachmentRule.SnapToTarget, "", 0)\n    particle:SetRelativeLocation(Vector(0, 0, 50))\nend\n')),(0,o.kt)("p",null,"And we can spawn it like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Server/Index.lua",title:"Server/Index.lua"},"local my_torch = Torch(Vector(), Rotator())\n")),(0,o.kt)("h3",{id:"spawn-menu"},"Spawn Menu"),(0,o.kt)("p",null,'I\'m trying to get rid of the "AddSpawnMenuItem" functions. And instead replace everything by the Inherit Registry System which you inherit from a Class and it shows up in the Spawn Menu like magic!'),(0,o.kt)("p",null,"For example we are be able to ",(0,o.kt)("inlineCode",{parentName:"p"},"Melee.GetInheritedClasses()")," and get all custom Melees Classes (like ",(0,o.kt)("inlineCode",{parentName:"p"},"Torch"),") which were defined in this Package, and display them in the Spawn Menu automatically!"),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("p",null,"Now we will have a base class for the Tools called ",(0,o.kt)("inlineCode",{parentName:"p"},"ToolGun"),". With that we can just inherit from this class to create new Tools, which will be automatically displayed on Spawn Menu and work as a Tool Gun!"),(0,o.kt)("p",null,"See how the Balloon Gun is defined now:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Server/Index.lua",title:"Server/Index.lua"},'BalloonGun = ToolGun.Inherit("BalloonGun")\n\nfunction BalloonGun:Constructor(location, rotation)\n    -- Calls parent ToolGun constructor\n    ToolGun.Constructor(self, location, rotation, Color.VIOLET)\nend\n\nfunction BalloonGun:OnSpawnBalloon(player, location, ...)\n    -- Do the original logic here...\n    ...\n\n    -- Spawns a Balloon entity!\n    local balloon = Balloon(location, rotation, ...)\nend\n\nBalloonGun.SubscribeRemote("SpawnBalloon", BalloonGun.OnSpawnBalloon)\n')),(0,o.kt)("p",null,"And on Client we just define it and set some properties which will be read from the Tool Gun and the Spawn Menu:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'BalloonGun = ToolGun.Inherit("BalloonGun")\n\n-- Defines some properties used by ToolGun and SpawnMenu\nBalloonGun.name = "Balloon"\nBalloonGun.image = "package://sandbox/Client/Tools/BalloonGun.webp"\nBalloonGun.tutorials = {\n    { key = "LeftClick", text = "spawn balloon" },\n    { key = "Undo", text = "undo spawn" },\n    { key = "ContextMenu", text = "balloon settings" },\n}\n\nfunction BalloonGun:OnFire(shooter)\n    -- Do the original logic here...\n    ...\n\n    -- Calls remote to spawn the Balloon\n    self:CallRemoteEvent("SpawnBalloon", location, rotation, ...)\nend\n\nBalloonGun.Subscribe("Fire", BalloonGun.OnFire)\n')),(0,o.kt)("p",null,'And that\'s it! No needs to call any "AddToSpawnMenu" function anymore! We just need to inherit a known class of it!'),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Note we have defined a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"Balloon")," which is the new implementation of the balloon. \ud83d\ude09")),(0,o.kt)("h3",{id:"context-menu"},"Context Menu"),(0,o.kt)("p",null,"Also, I'm doing some improvements on the Context Menu and make it more modular. Now it allows adding new entries dynamically, which I'll be integrating with the ToolGun systems to allow tools customization, look at this example of using the Balloon Gun with it:"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/blog/2022-november/context-menu.webm"})),(0,o.kt)("p",null,"This new ContextMenu allows customizing it 100% through Lua, without needing to add new hardcoded HTML/JS entries on it."),(0,o.kt)("h2",{id:"unreal-engine-51"},"Unreal Engine 5.1"),(0,o.kt)("p",null,"This month, Epic Games released ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/blog/unreal-engine-5-1-is-now-available"},"Unreal Engine 5.1"),". This is a long-awaited version for us, especially for the expected corrections."),(0,o.kt)("p",null,"The upgrade is being smooth, the hardest part of those upgrades is forcing everyone to upgrade it's assets and projects too."),(0,o.kt)("h3",{id:"physics-and-cables"},"Physics and Cables"),(0,o.kt)("p",null,"Cables rendering and Physics Constraints were completely broken since 5.0, I've even reported that as bug to Epic and they fixed both problems but delayed the release just to 5.1."),(0,o.kt)("p",null,"But finally we can be happy again with the balloons physics working perfectly! \ud83d\ude0e"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/blog/2022-november/balloons.webm"})),(0,o.kt)("h3",{id:"nanite--lumen"},"Nanite & Lumen"),(0,o.kt)("p",null,"Both system got great upgrades since 5.0, but one drawback of using the newest technologies is that we will need to enforce the game client uses DirectX 12, as it's a requirement for Nanite and some Lumen features to work."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38031).Z,width:"1026",height:"61"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(48453).Z,width:"1164",height:"194"})),(0,o.kt)("p",null,"I will still do some studies on if we should or not force DX12, I don't want to have unforeseen consequences in the future by taking a decision like that."),(0,o.kt)("h2",{id:"ultra-dynamic-sky"},"Ultra Dynamic Sky"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/ultra-dynamic-sky/"},"Ultra Dynamic Sky")," is one of best Unreal Marketplace Asset Packs, it provides a dynamic sky and weather solution for games!"),(0,o.kt)("p",null,"I decided to include this sky system natively in nanos world. It will replace our existing DefaultSun (on World class) with a new Static Class: ",(0,o.kt)("inlineCode",{parentName:"p"},"Sky"),", which will be released soon\u2122 along with the Unreal 5.1 update!"),(0,o.kt)("p",null,"If you don't know it yet, see this product video of your features:"),(0,o.kt)("iframe",{width:"620",height:"350",src:"https://www.youtube.com/embed/b52npy-XUdQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The update of the new entity system is huge! And I am very happy with the result, it's usability got really simple and that opens too many new possibilities!"),(0,o.kt)("p",null,"This change will allow nanos world to advance to another level on scripting capabilities. I'm studying more ways to allow even easier methods for creating custom scripts extensions, such as a way for you to create your entities that are dynamically loaded on a package, without you need to manually load them by ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.Require")," in the original package."),(0,o.kt)("p",null,"Just by the fact that now we can simply define a new class inheriting from another and that is enough for it to be displayed in the Sandbox's Spawn Menu is already amazing!"),(0,o.kt)("p",null,"I wish to finish the still-going refactoring of the Static Classes, and also to start renaming some non-standardized Class methods. The compatibility mode feature will help a lot of us keeping things working with those changes. And as soon as possible my wish to release the UE 5.1 update to everyone, this last one will be the most painful one as require us to recook and update all assets in the store. \ud83d\ude1c"),(0,o.kt)("p",null,"Also, I wish to start a discussion at Discord about the future of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/scripting/extending-classes"},"Extending Classes"),", it's currently working regardless of the new Inheriting system, but it has several problems that I want your opinion to decide the future of it."),(0,o.kt)("p",null,"Hope you enjoy it! Feedback appreciated! See you next month!"))}d.isMDXComponent=!0},38031:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},48453:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nanite-02-a162d4555dc89d9730c1bfdf9832f907.webp"},62778:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/november-news-1f58334dc00c2d88d7044343f8331a65.webp"}}]);
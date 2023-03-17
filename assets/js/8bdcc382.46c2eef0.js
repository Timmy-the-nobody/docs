"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?o.createElement(m,s(s({ref:t},p),{},{components:r})):o.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Fireworks",description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",tags:["tutorial-example","scripting","assets"]},s=void 0,i={unversionedId:"getting-started/tutorials-and-examples/fireworks",id:"getting-started/tutorials-and-examples/fireworks",title:"Fireworks",description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",source:"@site/docs/getting-started/tutorials-and-examples/fireworks.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/fireworks",permalink:"/docs/next/getting-started/tutorials-and-examples/fireworks",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/fireworks.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"Fireworks",description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Doors",permalink:"/docs/next/getting-started/tutorials-and-examples/doors"},next:{title:"Gravity Gun",permalink:"/docs/next/getting-started/tutorials-and-examples/gravity-gun"}},l={},c=[{value:"Configuring the Asset Pack",id:"configuring-the-asset-pack",level:3},{value:"Code Snippet",id:"code-snippet",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We now have a ",(0,n.kt)("strong",{parentName:"p"},"Fireworks Tools")," Package available to download in the Vault which does exactly what this snippet do!")),(0,n.kt)("p",null,"First you will need to download the Asset Pack ",(0,n.kt)("strong",{parentName:"p"},"Fireworks Particle Effects")," from our Vault!"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4302).Z,width:"573",height:"438"})),(0,n.kt)("h3",{id:"configuring-the-asset-pack"},"Configuring the Asset Pack"),(0,n.kt)("p",null,"After that you will need to add the requirement of this ",(0,n.kt)("strong",{parentName:"p"},"Asset Pack")," into your Package ",(0,n.kt)("inlineCode",{parentName:"p"},"Config.toml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Config.toml"',title:'"Config.toml"'},'# Package Configurations\n[package]\n    # Package Name\n    name =                  "My Awesome Firework Package"\n    # Contributors\n    author =                "SyedMuhammad"\n    # Version\n    version =               "1.0.0"\n    # Image URL\n    image =                 "https://i.imgur.com/tQXi0xt.webp"\n    # Package Type: \'executable\' (normal package) | \'library\' (doesn\'t run - useful for code library)\n    type =                  "executable"\n    # Whether to force the Custom Map Script to do NOT load\n    force_no_map_script =   false\n    # Auto Destroy all entities spawned by this package when it unloads\n    auto_cleanup =          true\n    # Asset Packs Requirements\n    assets_requirements = [\n        "ts-fireworks",\n    ]\n')),(0,n.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Terminal"',title:'"Terminal"'},"# install the default-weapons package\n./NanosWorldServer.exe --cli install package default-weapons\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"-- Loads the default-weapons (note: it's recommended to add it to your Package's packages_requirements instead)\nServer.LoadPackage(\"default-weapons\")\n\n-- Let's spawn a Glock from default-weapons package and set it to give no damage, this also avoids it from spawning a trail particle\nlocal weapon = Glock()\nweapon:SetDamage(0)\n\n-- Let's subscribe for 'Fire' event from this weapon, this will be triggered for every fire it shoots\nweapon:Subscribe(\"Fire\", function(weap, shooter)\n    -- We get the position at the front of the weapon\n    local control_rotation = shooter:GetControlRotation()\n    local forward_vector = control_rotation:GetForwardVector()\n    local spawn_location = shooter:GetLocation() + Vector(0, 0, 40) + forward_vector * Vector(400)\n\n    -- We will spawn an empty/invisible Prop, to be our projectile - using our Invisible mesh 'SM_None'\n    local prop = Prop(spawn_location, control_rotation, \"nanos-world::SM_None\")\n\n    -- Spawns the trail/shell particle, this particle is not auto destroyed as it should follow the projectile,\n    -- this way we must destroy it manually after all\n    -- The Asset Pack which we are using to get the particles contains two Shells: 'PS_TS_FireworksShell' and 'PS_TS_FireworksShell_Palm'\n    -- You can use the another one to get more cool effects!\n    local particle = Particle(Vector(), Rotator(), \"ts-fireworks::PS_TS_FireworksShell\", false, true)\n\n    -- Attaches the particle to the projectile prop\n    particle:AttachTo(prop)\n\n    -- Impulses the Projectile forward\n    prop:AddImpulse(forward_vector * Vector(50000), true)\n\n    -- Sets the shooter to be the Network Authority of this Projectile\n    -- This way only the shooter will be reponsible to handle the physics of this object\n    prop:SetNetworkAuthority(shooter:GetPlayer())\n\n    -- Calls the client to spawn the 'Launch' sound\n    Events.BroadcastRemote(\"SpawnFireworkSound\", particle)\n\n    -- After 500 miliseconds, explode the firework\n    Timer.SetTimeout(function(pr)\n        -- Calls the client to spawn the 'Explosion' sound at the projectile location\n        Events.BroadcastRemote(\"ExplodeFireworkSound\", pr:GetLocation())\n\n        -- Spawns the Particle Explosion.\n        -- This Asset Pack also contains the following Particles, feel free to try them!\n        -- 'PS_TS_Fireworks_Burst_Chrys', 'PS_TS_Fireworks_Burst_Circle', 'PS_TS_Fireworks_Burst_Palm',\n        -- 'PS_TS_Fireworks_Burst_Shaped' and 'PS_TS_Fireworks_Burst_ShellsWithinShells'\n        local particle_burst = Particle(pr:GetLocation(), Rotator(), \"ts-fireworks::PS_TS_Fireworks_Burst_Palm\", true, true)\n\n        -- Those particles make it available to tweak some of their properties, let's set the BlastColor to red\n        particle_burst:SetParameterColor(\"BlastColor\", Color(1, 0, 0))\n\n        -- Those particles exposes the following parameters:\n        --  Color: 'BurstColor', 'SparkleColor', 'FlareColor', 'TailColor'\n        --  bool: 'BlastSmoke', 'TailSmoke'\n        --  float: 'BurstMulti', 'SparkleMulti'\n    end, 500, prop)\n\n    -- After 1 second, destroy the particle and the projectile\n    prop:SetLifeSpan(1)\n    particle:SetLifeSpan(1)\nend)\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Subscribes to spawn and attach the Firework launch sound\nEvents.Subscribe("SpawnFireworkSound", function(firework)\n    local sound = Sound(Vector(), "ts-fireworks::A_Firework_Launch", false, true, SoundType.SFX, 1, 1, 400, 100000)\n    sound:AttachTo(firework)\nend)\n\n-- Subscribes to spawn the Firework explosion sound\nEvents.Subscribe("ExplodeFireworkSound", function(location)\n    Sound(location, "ts-fireworks::A_Firework_Explosion_Fizz", false, true, SoundType.SFX, 3, 1, 400, 100000)\nend)\n')))}d.isMDXComponent=!0},4302:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/fireworks-01-255f3c3c47f310db043f12ac9c41fe0a.webp"}}]);
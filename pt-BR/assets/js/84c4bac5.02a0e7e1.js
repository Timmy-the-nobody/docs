"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={title:"Basic HUD (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD",tags:["tutorial-example","scripting","ui"]},o=void 0,l={unversionedId:"getting-started/tutorials-and-examples/basic-hud-html",id:"getting-started/tutorials-and-examples/basic-hud-html",title:"Basic HUD (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD",source:"@site/docs/getting-started/tutorials-and-examples/basic-hud-html.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/basic-hud-html",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/basic-hud-html",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"tutorial-example",permalink:"/pt-BR/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/pt-BR/docs/next/tags/scripting"},{label:"ui",permalink:"/pt-BR/docs/next/tags/ui"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 de mar. de 2023",frontMatter:{title:"Basic HUD (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD",tags:["tutorial-example","scripting","ui"]},sidebar:"main",previous:{title:"Basic HUD (Canvas)",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/basic-hud-canvas"},next:{title:"Blueprint Communication",permalink:"/pt-BR/docs/next/getting-started/tutorials-and-examples/blueprint-communication"}},c={},s=[{value:"Creating the UI",id:"creating-the-ui",level:2},{value:"Adding Events and Callbacks to communicate with your Package",id:"adding-events-and-callbacks-to-communicate-with-your-package",level:2}],p={toc:s},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The following example is deprecated and you can find an updated HTML UI in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox"},"Sandbox Official Repository"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(31853).Z,width:"1919",height:"1013"})),(0,i.kt)("h2",{id:"creating-the-ui"},"Creating the UI"),(0,i.kt)("p",null,"Inside your Package\u2019s Client folder, create a new folder ","(","optional",")"," called ",(0,i.kt)("inlineCode",{parentName:"p"},"UI/")," to separate the UI files from the Scripting ","(","lua",")"," files:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(47031).Z,width:"649",height:"134"})),(0,i.kt)("p",null,"Inside ",(0,i.kt)("inlineCode",{parentName:"p"},"UI/")," let\u2019s create the following files: ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"style.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In this UI we will be using ",(0,i.kt)("a",{parentName:"p",href:"https://jquery.com/"},"JQuery"),", please download ",(0,i.kt)("a",{parentName:"p",href:"https://code.jquery.com/jquery-3.5.1.min.js"},"the latest version")," and place it inside ",(0,i.kt)("inlineCode",{parentName:"p"},"UI/")," folder.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(99508).Z,width:"627",height:"148"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        \x3c!-- Includes all files we created (JS, JQuery and CSS) --\x3e\n        <script src="jquery-3.5.1.min.js"><\/script>\n        <script src="index.js"><\/script>\n        <link rel="stylesheet" href="style.css">\n    </head>\n    <body>\n        \x3c!-- Health container (black background) --\x3e\n        <div id="health_container">\n            <img src="health.png">\n            <span id="health_current">100</span> \x3c!-- Health value --\x3e\n        </div>\n\n        \x3c!-- Weapon Ammo container (black background) --\x3e\n        <div id="weapon_ammo_container">\n            <span id="weapon_ammo_clip">30</span> \x3c!-- Ammo Clip value --\x3e\n            <span id="weapon_ammo_bag">/ 1000</span> \x3c!-- Ammo Bag value --\x3e\n        </div>\n    </body>\n</html>\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you noticed we are using an image ",(0,i.kt)("inlineCode",{parentName:"p"},"health.png"),", you can download it here ",(0,i.kt)("a",{parentName:"p",href:"https://i.imgur.com/0BmQJVZ.png"},"https://i.imgur.com/0BmQJVZ.png")," and place it inside ",(0,i.kt)("inlineCode",{parentName:"p"},"UI/")," as well.")),(0,i.kt)("p",null,"Now let\u2019s add the style to it, for that, edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"style.css")," and add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"CSS")," code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Client/UI/style.css"',title:'"Client/UI/style.css"'},"body {\n    font-family: Tahoma, sans-serif;\n    font-size: 14px;\n    margin: 0px;\n    padding: 0px;\n    margin-bottom: 20px;\n}\n\n#weapon_ammo_container {\n    display: none;\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    width: 200px;\n    height: 50px;\n    background-image: linear-gradient(to right, #00000000, #00000080);\n    text-align: right;\n    line-height: 47px;\n}\n\n#weapon_ammo_bag {\n    color: #ededed;\n    font-weight: bold;\n    font-size: 16px;\n    margin-right: 30px;\n    position: relative;\n    top: -4px;\n}\n\n#weapon_ammo_clip {\n    color: white;\n    font-weight: bold;\n    font-size: 32px;\n}\n\n#health_container {\n    position: absolute;\n    bottom: 0px;\n    width: 200px;\n    height: 50px;\n    background-image: linear-gradient(to left, #00000000, #00000080);\n}\n\n#health_container img {\n    height: 23px;\n    margin: 13px;\n}\n\n#health_current {\n    color: white;\n    font-size: 32px;\n    font-weight: bold;\n    position: absolute;\n    margin-top: 4px;\n}\n")),(0,i.kt)("p",null,"Finally, in your Package\u2019s Index.lua, let\u2019s spawn the WebUI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with the HTML file you just created\nmain_hud = WebUI("Main HUD", "file://UI/index.html")\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(34425).Z,width:"1919",height:"1013"})),(0,i.kt)("p",null,"This is just static texts! Let\u2019s now make it dynamic and display actual values!"),(0,i.kt)("h2",{id:"adding-events-and-callbacks-to-communicate-with-your-package"},"Adding Events and Callbacks to communicate with your Package"),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js"),", add the following JavaScript code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Register for UpdateWeaponAmmo custom event (from Lua)\nEvents.Subscribe("UpdateWeaponAmmo", function(enable, clip, bag) {\n    if (enable)\n        $("#weapon_ammo_container").show();\n    else\n        $("#weapon_ammo_container").hide();\n\n    // Using JQuery, overrides the HTML content of these SPANs with the new Ammo values\n    $("#weapon_ammo_clip").html(clip);\n    $("#weapon_ammo_bag").html("/ " + bag);\n});\n\n// Register for UpdateHealth custom event (from Lua)\nEvents.Subscribe("UpdateHealth", function(health) {\n    // Using JQuery, overrides the HTML content of the SPAN with the new health value\n    $("#health_current").html(health);\n\n    // Bonus: make the background red when health below 25\n    if (health <= 25)\n        $("#health_container").css("background-image", "linear-gradient(to left, #0000, #d00c)");\n    else\n        $("#health_container").css("background-image", "linear-gradient(to left, #00000000, #00000080)");\n});\n')),(0,i.kt)("p",null,"Now that our UI is done, let\u2019s finish our Lua code to handle that whole thing!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with the HTML file you just created\nmain_hud = WebUI("Main HUD", "file://UI/index.html")\n\n\n-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package:Subscribe("Load") to load it when reloading a package\nClient.Subscribe("SpawnLocalPlayer", function(local_player)\n    local_player:Subscribe("Possess", function(player, character)\n        UpdateLocalCharacter(character)\n    end)\nend)\n\n-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it\'s controlled character\nPackage.Subscribe("Load", function()\n    local local_player = Client.GetLocalPlayer()\n    if (local_player ~= nil) then\n        UpdateLocalCharacter(local_player:GetControlledCharacter())\n    end\nend)\n\n-- Function to set all needed events on local character (to update the UI when it takes damage or dies)\nfunction UpdateLocalCharacter(character)\n    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn\'t return a character)\n    if (character == nil) then return end\n\n    -- Updates the UI with the current character\'s health\n    UpdateHealth(character:GetHealth())\n\n    -- Sets on character an event to update the health\'s UI after it takes damage\n    character:Subscribe("TakeDamage", function(charac, damage, type, bone, from_direction, instigator, causer)\n        UpdateHealth(math.max(charac:GetHealth() - damage, 0))\n    end)\n\n    -- Sets on character an event to update the health\'s UI after it dies\n    character:Subscribe("Death", function(charac)\n        UpdateHealth(0)\n    end)\n\n    -- Try to get if the character is holding any weapon\n    local current_picked_item = character:GetPicked()\n\n    -- If so, update the UI\n    if (current_picked_item and current_picked_item:GetType() == "Weapon") then\n        UpdateAmmo(true, current_picked_item:GetAmmoClip(), current_picked_item:GetAmmoBag())\n    end\n\n    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)\n    character:Subscribe("PickUp", function(charac, object)\n        if (object:GetType() == "Weapon") then\n            UpdateAmmo(true, object:GetAmmoClip(), object:GetAmmoBag())\n        end\n    end)\n\n    -- Sets on character an event to remove the ammo ui when he drops it\'s weapon\n    character:Subscribe("Drop", function(charac, object)\n        UpdateAmmo(false)\n    end)\n\n    -- Sets on character an event to update the UI when he fires\n    character:Subscribe("Fire", function(charac, weapon)\n        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\n\n    -- Sets on character an event to update the UI when he reloads the weapon\n    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)\n        UpdateAmmo(true, weapon:GetAmmoClip(), weapon:GetAmmoBag())\n    end)\nend\n\n-- Function to update the Ammo\'s UI\nfunction UpdateAmmo(enable_ui, ammo, ammo_bag)\n    main_hud:CallEvent("UpdateWeaponAmmo", {enable_ui, ammo, ammo_bag})\nend\n\n-- Function to update the Health\'s UI\nfunction UpdateHealth(health)\n    main_hud:CallEvent("UpdateHealth", {health})\nend\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"That's it! Feel free to use it in your Packages!")))}h.isMDXComponent=!0},31853:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/html-01-acf6b66cc967b6270b2dfdc3f6b0a93a.webp"},47031:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},99508:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/html-03-466d92a6d50d10237c5908ef4df6ac21.webp"},34425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/html-04-bcf3c726595c79ff57233839a9176a31.webp"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9434],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,k=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42503:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"Migrating to Alpha 1.0",description:"How to migrate your Packages and Asset Packs to the Alpha 1.0 version",tags:["scripting","migration"]},s=void 0,d={unversionedId:"migrations/migrating-to-alpha",id:"version-latest/migrations/migrating-to-alpha",title:"Migrating to Alpha 1.0",description:"How to migrate your Packages and Asset Packs to the Alpha 1.0 version",source:"@site/versioned_docs/version-latest/migrations/migrating-to-alpha.md",sourceDirName:"migrations",slug:"/migrations/migrating-to-alpha",permalink:"/docs/migrations/migrating-to-alpha",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/migrations/migrating-to-alpha.md",tags:[{label:"scripting",permalink:"/docs/tags/scripting"},{label:"migration",permalink:"/docs/tags/migration"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{title:"Migrating to Alpha 1.0",description:"How to migrate your Packages and Asset Packs to the Alpha 1.0 version",tags:["scripting","migration"]},sidebar:"version-latest/main",previous:{title:"Migrating from 1.0 to 1.3",permalink:"/docs/migrations/migrating-10-to-13"}},p={},m=[{value:"Migration Notes",id:"migration-notes",level:2},{value:"1. Now all Static Classes are accessed with <code>.</code> instead of <code>:</code>",id:"1-now-all-static-classes-are-accessed-with--instead-of-",level:3},{value:"2. The Static Class <strong><code>NanosWorld</code></strong> has been deprecated",id:"2-the-static-class-nanosworld-has-been-deprecated",level:3},{value:"3. Parameters in <code>Events:Call()</code>, <code>my_webui:CallEvent()</code> and <code>Package:Call()</code> now are passed as Variadic Parameters",id:"3-parameters-in-eventscall-my_webuicallevent-and-packagecall-now-are-passed-as-variadic-parameters",level:3},{value:"4. Package and Asset Pack names now must follow a new pattern",id:"4-package-and-asset-pack-names-now-must-follow-a-new-pattern",level:3},{value:"Examples",id:"examples",level:4},{value:"5. Package Types has been reworked",id:"5-package-types-has-been-reworked",level:3},{value:"6. Timer has a new signature and methods",id:"6-timer-has-a-new-signature-and-methods",level:3},{value:"7. LoadingScreen folder has been replaced with Package <code>loading-screen</code>",id:"7-loadingscreen-folder-has-been-replaced-with-package-loading-screen",level:3},{value:"Converting your Code with Regex",id:"converting-your-code-with-regex",level:2},{value:"VSCode Replacer (CTRL + F) with Regex (ALT + R), Match Whole World (Alt + W) and Match Case enabled",id:"vscode-replacer-ctrl--f-with-regex-alt--r-match-whole-world-alt--w-and-match-case-enabled",level:4},{value:"Fixing Events:Call Variadic Parameters",id:"fixing-eventscall-variadic-parameters",level:3},{value:"Fixing Package:Call Variadic Parameters",id:"fixing-packagecall-variadic-parameters",level:3},{value:"Fixing WebUI:CallEvent Variadic Parameters",id:"fixing-webuicallevent-variadic-parameters",level:3},{value:"Fixing StaticClasses using : instead of .",id:"fixing-staticclasses-using--instead-of-",level:3},{value:"Fixing NanosWorld:GetEntities() deprecated",id:"fixing-nanosworldgetentities-deprecated",level:3},{value:"Conversions not covered by Regex",id:"conversions-not-covered-by-regex",level:2},{value:"Timer",id:"timer",level:3},{value:"Infinite Triggering Timer",id:"infinite-triggering-timer",level:4},{value:"Run Once Timer",id:"run-once-timer",level:4}],c={toc:m};function g(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There have been no significant changes from version 0.73 to Alpha 1.0, however this guide remains for those coming from older versions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"THE DAY THE API STOOD STEADY update",src:a(51779).Z,width:"1000",height:"1750"})),(0,i.kt)("h2",{id:"migration-notes"},"Migration Notes"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We've created several ",(0,i.kt)("strong",{parentName:"p"},"REGEX")," to help you converting your Packages. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"migrating-to-alpha#converting-your-code-with-regex"},"Converting your Code with Regex"),".")),(0,i.kt)("p",null,"Here it follows a list with all changes we had which need attention:"),(0,i.kt)("h3",{id:"1-now-all-static-classes-are-accessed-with--instead-of-"},"1. Now all Static Classes are accessed with ",(0,i.kt)("inlineCode",{parentName:"h3"},".")," instead of ",(0,i.kt)("inlineCode",{parentName:"h3"},":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Before:\nWorld:SetTime(15, 30)\n\n-- After:\nWorld.SetTime(15, 30)\n\n\n-- Before:\nPlayer:Subscribe("Spawn", function(player)\n    -- ...\nend)\n\n-- After:\nPlayer.Subscribe("Spawn", function(player)\n    -- ...\nend)\n')),(0,i.kt)("h3",{id:"2-the-static-class-nanosworld-has-been-deprecated"},"2. The Static Class ",(0,i.kt)("strong",{parentName:"h3"},(0,i.kt)("inlineCode",{parentName:"strong"},"NanosWorld"))," has been deprecated"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Player.GetAll()"))," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld:GetPlayers()"),"."),(0,i.kt)("p",{parentName:"admonition"},"Use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"NanosUtils.Dump()"))," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld:Dump()"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Before:\nlocal character_list = NanosWorld:GetCharacters()\nlocal is_character = NanosWorld:IsA(entity, Character)\n\n-- After:\nlocal character_list = Character.GetAll()\nlocal is_character = NanosUtils.IsA(entity, Character)\n")),(0,i.kt)("h3",{id:"3-parameters-in-eventscall-my_webuicallevent-and-packagecall-now-are-passed-as-variadic-parameters"},"3. Parameters in ",(0,i.kt)("inlineCode",{parentName:"h3"},"Events:Call()"),", ",(0,i.kt)("inlineCode",{parentName:"h3"},"my_webui:CallEvent()")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Package:Call()")," now are passed as Variadic Parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Before:\nEvents:Call("MyEvent", {parameter1, parameter2})\n\n-- After:\nEvents.Call("MyEvent", parameter1, parameter2)\n')),(0,i.kt)("h3",{id:"4-package-and-asset-pack-names-now-must-follow-a-new-pattern"},"4. Package and Asset Pack names now must follow a new pattern"),(0,i.kt)("p",null,"Although this still works, it is highly recommended to convert your ",(0,i.kt)("strong",{parentName:"p"},"Asset Packs")," and ",(0,i.kt)("strong",{parentName:"p"},"Packages")," to the new Folder Name pattern, this will be fully prohibited in a future update:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All lowercase"),(0,i.kt)("li",{parentName:"ul"},"Allowed only alphanumeric and ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," characters"),(0,i.kt)("li",{parentName:"ul"},"Max 64 Characters")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Old Folder name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"New Folder name suggestion"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Sandbox")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"sandbox")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AwesomeGameMode")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"awesome-game-mode")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Nice-And-Neat-TTT")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"nice-and-neat-ttt")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DARK_Roleplay_v34")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"dark-roleplay")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MyAssets_Withouth-any-PaTtern")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"my-assets-with-pattern")))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Note:")," All reference to assets now must use the new format as well ","(","the folder name",")",". So"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld::SM_Cube")," would become ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world::SM_Cube"),".")),(0,i.kt)("h3",{id:"5-package-types-has-been-reworked"},"5. Package Types has been reworked"),(0,i.kt)("p",null,"We don't have type ",(0,i.kt)("inlineCode",{parentName:"p"},"library")," anymore, we now have ",(0,i.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"game-mode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"loading-screen"),". All your Packages has been replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," by default. If your Package is a full game, please set it ",(0,i.kt)("inlineCode",{parentName:"p"},"game-mode"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/packages/packages-guide"},"Packages")," for more information.")),(0,i.kt)("h3",{id:"6-timer-has-a-new-signature-and-methods"},"6. Timer has a new signature and methods"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"migrating-to-alpha#timer"},"Timer"),".")),(0,i.kt)("h3",{id:"7-loadingscreen-folder-has-been-replaced-with-package-loading-screen"},"7. LoadingScreen folder has been replaced with Package ",(0,i.kt)("inlineCode",{parentName:"h3"},"loading-screen")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/packages/loading-screen"},"Loading Screen")," for more information.")),(0,i.kt)("h2",{id:"converting-your-code-with-regex"},"Converting your Code with Regex"),(0,i.kt)("p",null,"We've created some regexes to help you migrating your code, if you use ",(0,i.kt)("strong",{parentName:"p"},"VSCode"),", using the replacer tool with regex is very easy and straightforward."),(0,i.kt)("h4",{id:"vscode-replacer-ctrl--f-with-regex-alt--r-match-whole-world-alt--w-and-match-case-enabled"},"VSCode Replacer ","(","CTRL + F",")"," with Regex ","(","ALT + R",")",", Match Whole World ","(","Alt + W",")"," and Match Case enabled"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(70754).Z,width:"443",height:"87"})),(0,i.kt)("h3",{id:"fixing-eventscall-variadic-parameters"},"Fixing Events:Call Variadic Parameters"),(0,i.kt)("p",null,"This will remove the characters ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Events:Call")," parameters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Find"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Replace"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Events[.,:](.*)\\((.*),(.*)\\{(.*)\\}\\)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Events.$1($2, $4)"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Results:\n\n-- Before:\nEvents:Call("MyEvent", {my_parameter1, my_parameter2})\n-- After:\nEvents.Call("MyEvent", my_parameter1, my_parameter2)\n')),(0,i.kt)("h3",{id:"fixing-packagecall-variadic-parameters"},"Fixing Package:Call Variadic Parameters"),(0,i.kt)("p",null,"This will remove the characters ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Package:Call")," parameters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Find"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Replace"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Package[.,:]Call\\((.*),\\s?\\{(.*)\\}\\)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Package.Call($1, $2)"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Results:\n\n-- Before:\nPackage:Call("sandbox", "PackageFunction", {my_parameter1, my_parameter2})\n-- After:\nPackage.Call("sandbox", "PackageFunction", my_parameter1, my_parameter2)\n')),(0,i.kt)("h3",{id:"fixing-webuicallevent-variadic-parameters"},"Fixing WebUI:CallEvent Variadic Parameters"),(0,i.kt)("p",null,"This will remove the characters ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"}")," from web ",(0,i.kt)("inlineCode",{parentName:"p"},"webui:CallEvent")," parameters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Find"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Replace"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},":CallEvent\\((.*),\\s?\\{(.*)\\}\\)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},":CallEvent($1, $2)"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Results:\n\n-- Before:\nmy_webui:CallEvent("MyWebUIEvent", {my_parameter1, my_parameter2})\n-- After:\nmy_webui:CallEvent("MyWebUIEvent", my_parameter1, my_parameter2)\n')),(0,i.kt)("h3",{id:"fixing-staticclasses-using--instead-of-"},"Fixing StaticClasses using : instead of ."),(0,i.kt)("p",null,"This will convert StaticClasses using ",(0,i.kt)("inlineCode",{parentName:"p"},":")," instead of the new pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"."),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Find"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Replace"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(Assets ","|"," Client ","|"," Events ","|"," Package ","|"," Render ","|"," Server ","|"," Timer ","|"," World ","|"," Character ","|"," File ","|"," Grenade ","|"," Item ","|"," Light ","|"," Particle ","|"," Player ","|"," Prop ","|"," Sound ","|"," StaticMesh ","|"," TextRender ","|"," Trigger ","|"," Vehicle ","|"," Weapon ","|"," WebUI",")",":"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"$1."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Results:\n\n-- Before:\nPlayer:Subscribe("Event", function() ...)\n-- After:\nPlayer.Subscribe("Event", function() ...)\n')),(0,i.kt)("h3",{id:"fixing-nanosworldgetentities-deprecated"},"Fixing NanosWorld:GetEntities","(",")"," deprecated"),(0,i.kt)("p",null,"This will convert ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld:GetENTITY()")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ENTITY.GetAll()"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Find"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Replace"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NanosWorld:Get(.*)s\\(\\)")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"$1.GetAll()"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Results:\n\n-- Before:\nNanosWorld:GetPlayers()\n-- After:\nPlayer.GetAll()\n")),(0,i.kt)("h2",{id:"conversions-not-covered-by-regex"},"Conversions not covered by Regex"),(0,i.kt)("h3",{id:"timer"},"Timer"),(0,i.kt)("p",null,"Timer was not covered by ",(0,i.kt)("a",{parentName:"p",href:"migrating-to-alpha#converting-your-code-with-regex"},"Regex Fixes"),", you will need to convert it manually. We recommend searching for ",(0,i.kt)("inlineCode",{parentName:"p"},"Timer")," and converting one by one to the new pattern:"),(0,i.kt)("h4",{id:"infinite-triggering-timer"},"Infinite Triggering Timer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Before:\nTimer:SetTimeout(5000, function(param1, param2)\n    -- Triggers infinite at each 5000 ms\nend, {my_param1, my_param2})\n\n-- After:\nTimer.SetInterval(function(param1, param2)\n    -- Triggers infinite at each 5000 ms\nend, 5000, my_param1, my_param2)\n")),(0,i.kt)("h4",{id:"run-once-timer"},"Run Once Timer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Before:\nTimer:SetTimeout(4000, function()\n    -- Triggers once after 4000 ms\n    return false\nend)\n\n-- After:\nTimer.SetTimeout(function()\n    -- Triggers once after 4000 ms\nend, 4000)\n")))}g.isMDXComponent=!0},51779:function(e,t,a){t.Z=a.p+"assets/images/devastation-7c6ed0ce98128b9d8bc1d439412baacd.webp"},70754:function(e,t,a){t.Z=a.p+"assets/images/migrating-to-alpha-e20b01021af62f58e391ffafe219f77b.jpg"}}]);
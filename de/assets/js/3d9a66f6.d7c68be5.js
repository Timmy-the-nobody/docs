"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||g[m]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Loading Screen",description:"Custom Loading Screen for your servers",sidebar_position:1,tags:["scripting","ui","webui","packages"],keywords:["loading","screen","package","html","webui"]},i=void 0,s={unversionedId:"core-concepts/packages/loading-screen",id:"core-concepts/packages/loading-screen",title:"Loading Screen",description:"Custom Loading Screen for your servers",source:"@site/docs/core-concepts/packages/loading-screen.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/loading-screen",permalink:"/de/docs/next/core-concepts/packages/loading-screen",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"},{label:"ui",permalink:"/de/docs/next/tags/ui"},{label:"webui",permalink:"/de/docs/next/tags/webui"},{label:"packages",permalink:"/de/docs/next/tags/packages"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",sidebarPosition:1,frontMatter:{title:"Loading Screen",description:"Custom Loading Screen for your servers",sidebar_position:1,tags:["scripting","ui","webui","packages"],keywords:["loading","screen","package","html","webui"]},sidebar:"main",previous:{title:"Packages Guide",permalink:"/de/docs/next/core-concepts/packages/packages-guide"},next:{title:"Compatibility Versions",permalink:"/de/docs/next/core-concepts/packages/compatibility-versions"}},l={},p=[{value:"Creating a Loading Screen",id:"creating-a-loading-screen",level:2},{value:"Getting Load/Download Progress",id:"getting-loaddownload-progress",level:3},{value:"Event <code>UpdateScreen</code>",id:"event-updatescreen",level:4},{value:"Player Information",id:"player-information",level:3},{value:"Stop Menu Music",id:"stop-menu-music",level:3},{value:"Configuring your server to use the Loading Screen",id:"configuring-your-server-to-use-the-loading-screen",level:2}],c={toc:p},d="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In nanos world it is possible to add a customized and dynamic Loading Screen to your Server using ",(0,a.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/webui"},"WebUI"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64489).Z,width:"1919",height:"1079"})),(0,a.kt)("h2",{id:"creating-a-loading-screen"},"Creating a Loading Screen"),(0,a.kt)("p",null,"For that, you will need to create a new Package of type ",(0,a.kt)("a",{parentName:"p",href:"#package-types"},"loading-screen"),", and add your HTML/CSS/JS files into the Package's root folder. Your primary HTML file should be called ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),". It will look like that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Packages/\n\u2514\u2500\u2500 my-loading-screen/\n    \u251c\u2500\u2500 Package.toml\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 style.css\n    \u2514\u2500\u2500 ...\n")),(0,a.kt)("h3",{id:"getting-loaddownload-progress"},"Getting Load/Download Progress"),(0,a.kt)("p",null,"To be able to display dynamic information in the screen, you can listen to the Event ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateScreen")," ","(","which will trigger every few ms",")",":"),(0,a.kt)("h4",{id:"event-updatescreen"},"Event ",(0,a.kt)("inlineCode",{parentName:"h4"},"UpdateScreen")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"message"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Display the current state ","(","loading, validating, downloading...",")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"message_secondary"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Display the current asset/file being loaded or downloaded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_small"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current small progress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_small_total"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Max small progress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current progress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_total"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Max progress value")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"current_stage"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"The current stage of the load ","(",(0,a.kt)("inlineCode",{parentName:"td"},"loading"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"downloading"),")")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"TIP"),": You can use ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_total"))," for filling up the main loading bar, and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_small"))," for a small/sub loading bar.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Always use ",(0,a.kt)("inlineCode",{parentName:"p"},"progress / progress_total")," for getting the current ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," percentage, as progress","_","total can represent the total amount of files being downloaded for example.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Packages/my-loading-screen/index.js"',title:'"Packages/my-loading-screen/index.js"'},'Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {\n    // Update your HTML here\n});\n')),(0,a.kt)("h3",{id:"player-information"},"Player Information"),(0,a.kt)("p",null,"Also, it is possible to fetch Player\u2019s information by accessing a global variable called LoadingScreen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var LoadingScreen = {\n  server_ip,\n  server_name,\n  server_description,\n  server_port,\n  player_nanos_id,\n  player_nanos_username\n};\n")),(0,a.kt)("h3",{id:"stop-menu-music"},"Stop Menu Music"),(0,a.kt)("p",null,"It is possible to turn off the built-in menu music by calling an event from Loading Screen JS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Events.Call("StopMenuMusic")\n')),(0,a.kt)("h2",{id:"configuring-your-server-to-use-the-loading-screen"},"Configuring your server to use the Loading Screen"),(0,a.kt)("p",null,"After creating your loading-screen package, you will need to configure your server to load it in your ",(0,a.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/server-manual/server-configuration#server-configuration-file"},"Config.toml"),". Just set the setting ",(0,a.kt)("inlineCode",{parentName:"p"},"loading_screen")," to your Package's folder name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# loading-screen package to load (the loading screen will be displayed when players join your server)\nloading_screen = "my-loading-screen"\n')))}g.isMDXComponent=!0},64489:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/loading-screen-cb28559615ffd1f2db10366c83d588a8.webp"}}]);
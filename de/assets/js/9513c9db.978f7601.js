"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=i,y=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},45389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"Discord Integration",description:"How to use nanos world Discord methods to create a nice integration for your server",tags:["scripting"]},a=void 0,c={unversionedId:"core-concepts/scripting/discord-integration",id:"core-concepts/scripting/discord-integration",title:"Discord Integration",description:"How to use nanos world Discord methods to create a nice integration for your server",source:"@site/docs/core-concepts/scripting/discord-integration.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/discord-integration",permalink:"/de/docs/next/core-concepts/scripting/discord-integration",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"Discord Integration",description:"How to use nanos world Discord methods to create a nice integration for your server",tags:["scripting"]},sidebar:"main",previous:{title:"Dimensions",permalink:"/de/docs/next/core-concepts/scripting/dimensions"},next:{title:"Persistent Data",permalink:"/de/docs/next/core-concepts/scripting/persistent-data"}},s={},l=[{value:"Updating the Player Discord Activity (Rich Presence)",id:"updating-the-player-discord-activity-rich-presence",level:2},{value:"Using your own Application ID",id:"using-your-own-application-id",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to use nanos world Discord methods to create a nice integration for your server."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(44023).Z,width:"704",height:"264"})),(0,i.kt)("p",null,"Integrating your server with Discord is really easy! We provide a built-in integration which is ready to use, but you can also add your own Discord Application ID and use your own application!"),(0,i.kt)("h2",{id:"updating-the-player-discord-activity-rich-presence"},"Updating the Player Discord Activity ","(","Rich Presence",")"),(0,i.kt)("p",null,"We made the process very simple, we have one method for changing the Player's Activity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local state = "Working as Truck Driver"\nlocal details = "Awesome Roleplay"\nlocal large_text = "Honk!"\nlocal large_image = "nanos-world-full-world"\n\nClient.SetDiscordActivity(state, details, large_image, large_text)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How it will look like",src:n(15474).Z,width:"398",height:"415"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use your own Application ID to upload your own Images!")),(0,i.kt)("h2",{id:"using-your-own-application-id"},"Using your own Application ID"),(0,i.kt)("p",null,"Using your own Application ID brings the advantage of being able to configure it the way you want, and even uploading your own images to be displayed in the Rich Presence."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How it will look like",src:n(29454).Z,width:"1867",height:"541"})),(0,i.kt)("p",null,"Initializing your own Application ID is extremely easy, just execute the following code on the Client side:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"Client.InitializeDiscord(client_id)\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"And you are done! Now you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client.SetDiscordActivity()"),"method!")))}u.isMDXComponent=!0},15474:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/discord-integration-01-362ab77a7fdee9c9c4c6629b99a49dd8.jpg"},29454:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/discord-integration-02-4bcbe9b207ba7a21fa2dca85efcd2a40.jpg"},44023:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/discord-847e1ae1272681dc4f48fde28b370c6b.jpg"}}]);
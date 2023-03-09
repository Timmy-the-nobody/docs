"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(g,o(o({ref:t},c),{},{components:a})):r.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",tags:["tutorial-example"]},o=void 0,s={unversionedId:"getting-started/tutorials-and-examples/chat-colors",id:"getting-started/tutorials-and-examples/chat-colors",title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",source:"@site/docs/getting-started/tutorials-and-examples/chat-colors.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/chat-colors",permalink:"/de/docs/next/getting-started/tutorials-and-examples/chat-colors",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9. M\xe4rz 2023",frontMatter:{title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",tags:["tutorial-example"]},sidebar:"main",previous:{title:"Blueprint Communication",permalink:"/de/docs/next/getting-started/tutorials-and-examples/blueprint-communication"},next:{title:"Doors",permalink:"/de/docs/next/getting-started/tutorials-and-examples/doors"}},i={},p=[{value:"Example",id:"example",level:2},{value:"All supported text styles/tags",id:"all-supported-text-stylestags",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Learn how to use and print colored messages to the built-in chat"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(49370).Z,width:"314",height:"309"})),(0,n.kt)("p",null,"To stylize a text, just circumvent a piece of text with a style tag: ",(0,n.kt)("inlineCode",{parentName:"p"},"<TAG>my awesome text</>"),"."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Chat.BroadcastMessage("Hello with Normal text message!")\nChat.BroadcastMessage("Hello with <cyan>Cyan</> text message!")\nChat.BroadcastMessage("Hello with <green>Green</> text message!")\nChat.BroadcastMessage("Hello with <blue>Blue</> text message!")\nChat.BroadcastMessage("Hello with <marengo>Marengo</> text message!")\nChat.BroadcastMessage("Hello with <yellow>Yellow</> text message!")\nChat.BroadcastMessage("Hello with <orange>Orange</> text message!")\nChat.BroadcastMessage("Hello with <red>Red</> text message!")\nChat.BroadcastMessage("Hello with <grey>Grey</> text message!")\nChat.BroadcastMessage("Hello with <bold>Bold</> text message!")\nChat.BroadcastMessage("Hello with <italic>Italic</> text message!")\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"It is NOT possible to combine two or more styles together ","(","eg.: Bold + Red",")",".")),(0,n.kt)("h2",{id:"all-supported-text-stylestags"},"All supported text styles/tags"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<cyan>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<green>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<blue>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<purple>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<marengo>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<yellow>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<orange>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<red>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<grey>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<bold>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<italic>"))))}u.isMDXComponent=!0},49370:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/chat-colors-9596ca9eed3901b5207c3154a74ef645.webp"}}]);
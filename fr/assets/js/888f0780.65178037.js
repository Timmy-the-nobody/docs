"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Compatibility Versions",description:"How to update your packages to the new Compatibility Versions",tags:["scripting","migration"]},r=void 0,s={unversionedId:"core-concepts/packages/compatibility-versions",id:"version-latest/core-concepts/packages/compatibility-versions",title:"Compatibility Versions",description:"How to update your packages to the new Compatibility Versions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/packages/compatibility-versions.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/compatibility-versions",permalink:"/fr/docs/core-concepts/packages/compatibility-versions",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"},{label:"migration",permalink:"/fr/docs/tags/migration"}],version:"latest",frontMatter:{title:"Compatibility Versions",description:"How to update your packages to the new Compatibility Versions",tags:["scripting","migration"]},sidebar:"version-latest/main",previous:{title:"\xc9cran de chargement",permalink:"/fr/docs/core-concepts/packages/loading-screen"},next:{title:"Guide des classes",permalink:"/fr/docs/core-concepts/scripting/classes-guide"}},l={},p=[{value:"All Updates",id:"all-updates",level:2},{value:"Version <code>1.22</code>",id:"version-122",level:3},{value:"Events.Subscribe",id:"eventssubscribe",level:4},{value:"Version <code>1.29</code>",id:"version-129",level:3},{value:"HTTP",id:"http",level:4},{value:"Database",id:"database",level:4},{value:"Version <code>1.33</code>",id:"version-133",level:3},{value:"Input.GetScriptingKeyBindings and Input.GetGameKeyBindings",id:"inputgetscriptingkeybindings-and-inputgetgamekeybindings",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to update your packages to the new Compatibility Versions"),(0,i.kt)("p",null,"The Compatibility Version is meant to assure your packages will not break in future breaking changes updates."),(0,i.kt)("p",null,"It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Exemple :"),(0,i.kt)("p",null,"Let's say you have this code running right now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Make an asynchronous HTTP request\nHTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)\n    -- Do something with my data\nend)\n')),(0,i.kt)("p",null,"And then, in the hypothetical update 9.99 the API changes and make ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.RequestSync")," to become ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," to become ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync"),". I.e. you need to update your code to use ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync")," now, this is a breaking change as the new functions uses the same name as before."),(0,i.kt)("p",null,"With compatibility version, your code can keep working as it was before this update, for that, in your Package.toml you just need to make sure it's ",(0,i.kt)("inlineCode",{parentName:"p"},"compatibility_version")," is set to a version lower than ",(0,i.kt)("inlineCode",{parentName:"p"},"9.99")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"9.98"),")."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!")),(0,i.kt)("h2",{id:"all-updates"},"All Updates"),(0,i.kt)("p",null,"To use the following features, you must update your Package's ",(0,i.kt)("inlineCode",{parentName:"p"},"compatibility_version")," setting in the Package.toml to at least that version (exact that version or bigger)."),(0,i.kt)("h3",{id:"version-122"},"Version ",(0,i.kt)("inlineCode",{parentName:"h3"},"1.22")),(0,i.kt)("p",null,"Dans la version 1.22, nous avons introduit le concept de ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/packages/packages-guide#compatibility-version"},"Version de compatibilit\xe9"),". En plus de cela, nous avons juste un Breaking Change :"),(0,i.kt)("h4",{id:"eventssubscribe"},"Events.Subscribe"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Events.Subscribe")," n'\xe9coutera maintenant plus que les \xe9v\xe9nements locaux (ceux appel\xe9s avec ",(0,i.kt)("strong",{parentName:"p"},"Events.Call"),"). Si vous voulez \xe9couter les \xe9v\xe9nements distants (ceux appel\xe9s avec ",(0,i.kt)("strong",{parentName:"p"},"Events.CallRemote")," ou ",(0,i.kt)("strong",{parentName:"p"},"Events.BroadcastRemote"),"), veuillez utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"Events.SubscribeRemote"),"."),(0,i.kt)("p",null,"En mode de compatibilit\xe9 (par exemple le r\xe9gler \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"1.21")," ou en dessous) ",(0,i.kt)("inlineCode",{parentName:"p"},"Events.Subscribe")," \xe9coute toujours pour les \xe9v\xe9nements locaux et distants."),(0,i.kt)("h3",{id:"version-129"},"Version ",(0,i.kt)("inlineCode",{parentName:"h3"},"1.29")),(0,i.kt)("h4",{id:"http"},"HTTP"),(0,i.kt)("p",null,"Avant ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP.Select")," \xe9tait une m\xe9thode asynchrone, et depuis 1.29 elle fonctionne comme une m\xe9thode synchrone, n'ayant plus le param\xe8tre de callback."),(0,i.kt)("h4",{id:"database"},"Database"),(0,i.kt)("p",null,"Avant ",(0,i.kt)("inlineCode",{parentName:"p"},"Database:Execute")," \xe9tait une m\xe9thode asynchrone, et depuis 1.29 elle fonctionne comme une m\xe9thode synchrone, n'ayant plus le param\xe8tre de callback."),(0,i.kt)("h3",{id:"version-133"},"Version ",(0,i.kt)("inlineCode",{parentName:"h3"},"1.33")),(0,i.kt)("h4",{id:"inputgetscriptingkeybindings-and-inputgetgamekeybindings"},"Input.GetScriptingKeyBindings and Input.GetGameKeyBindings"),(0,i.kt)("p",null,"Before those methods returned a table in the format (example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- KeyBinding = Key\n{\n    "Jump" = "Spacebar",\n    "Crouch" = "Control",\n    "Fire" = "LeftMouse",\n}\n')),(0,i.kt)("p",null,"Now it returns in the format (example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- KeyBinding = { Key, Key, ... }\n{\n    "Jump" = { "Spacebar", "O" },\n    "Crouch" = { "Control" },\n    "Fire" = { "LeftMouse", "Return" },\n}\n')))}u.isMDXComponent=!0}}]);
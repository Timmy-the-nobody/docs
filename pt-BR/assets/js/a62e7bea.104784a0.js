"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5485],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=m(a),g=r,s=k["".concat(o,".").concat(g)]||k[g]||N[g]||l;return a?n.createElement(s,p(p({ref:e},d),{},{components:a})):n.createElement(s,p({ref:e},d))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},58781:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},p=void 0,i={unversionedId:"scripting-reference/static-classes/input",id:"scripting-reference/static-classes/input",title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",source:"@site/docs/scripting-reference/static-classes/input.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/input",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/input",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"static-class",permalink:"/pt-BR/docs/next/tags/static-class"},{label:"client",permalink:"/pt-BR/docs/next/tags/client"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 de mar. de 2023",frontMatter:{title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},sidebar:"main",previous:{title:"\ud83c\udf10 HTTP",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/http"},next:{title:"\ud83c\udfdd\ufe0f Level",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/level"}},o={},m=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2},{value:"\u2328\ufe0f Key Names",id:"\ufe0f-key-names",level:2},{value:"\u25b6\ufe0f\xa0Function Keys",id:"\ufe0ffunction-keys",level:3},{value:"\u25b6\ufe0f\xa0Alphanumerical keys",id:"\ufe0falphanumerical-keys",level:3},{value:"\u25b6\ufe0f\xa0Special keys",id:"\ufe0fspecial-keys",level:3},{value:"\u25b6\ufe0f\xa0Mouse",id:"\ufe0fmouse",level:3}],d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},k=d("HeaderDeclaration"),N=d("StaticFunctionsDeclaration"),g=d("EventsDeclaration"),s={toc:m},f="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(f,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(k,{type:"StaticClass",name:"Input",is_static:!0,mdxType:"HeaderDeclaration"}),(0,r.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Registers the binding_name \'SpawnMenu\' with default key \'Q\'\n-- This will add \'SpawnMenu\' to user KeyBinding Settings automatically\nInput.Register("SpawnMenu", "Q")\n\n-- Subscribes for Pressing the key\nInput.Bind("SpawnMenu", InputEvent.Pressed, function()\n    -- Opens the Spawn Menu\nend)\n\n-- Subscribes for Releasing the key\nInput.Bind("SpawnMenu", InputEvent.Released, function()\n    -- Closes the Spawn Menu\nend)\n')),(0,r.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,r.kt)(N,{type:"StaticClass",name:"Input",mdxType:"StaticFunctionsDeclaration"}),(0,r.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,r.kt)(g,{type:"StaticClass",name:"Input",mdxType:"EventsDeclaration"}),(0,r.kt)("h2",{id:"\ufe0f-key-names"},"\u2328\ufe0f Key Names"),(0,r.kt)("p",null,"List of all keys names returned in Key/Mouse events."),(0,r.kt)("h3",{id:"\ufe0ffunction-keys"},"\u25b6\ufe0f\xa0Function Keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Key Name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function two")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function three")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F4"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function four")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F5"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function five")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F6"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function six")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F7"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function seven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F8"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function eight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F9"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function nine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F10"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function ten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F11"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function eleven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F12"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Function twelve")))),(0,r.kt)("h3",{id:"\ufe0falphanumerical-keys"},"\u25b6\ufe0f\xa0Alphanumerical keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Key Name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"A"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"B"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"C"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"D"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter D")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"E"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter E")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"F"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter F")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"G"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"H"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter H")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"I"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter I")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"J"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter J")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"K"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter K")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"L"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter L")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"M"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter M")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"N"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"O"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter O")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"P"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter P")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Q"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter Q")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"R"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter R")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"S"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter S")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"T"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter T")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"U"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter U")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"V"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"W"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"X"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Z"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Letter Z")))),(0,r.kt)("h3",{id:"\ufe0fspecial-keys"},"\u25b6\ufe0f\xa0Special keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Key Name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Escape"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Escape")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Tab"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tab")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Tilde"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"~")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ScrollLock"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Scroll lock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Pause"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pause")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"One"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"One")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Two"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Two")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Three"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Three")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Four"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Four")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Five"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Five")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Six"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Six")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Seven"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Seven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Eight"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Eight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Nine"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Zero"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Zero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Underscore"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"_")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Equals"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"=")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Backslash"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"LeftBracket"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"[")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"RightBracket"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Enter"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enter or Numpad enter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"CapsLock"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Caps lock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Semicolon"))),(0,r.kt)("td",{parentName:"tr",align:"left"},";")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Quote"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2018")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"LeftShift"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Left shift")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Comma"))),(0,r.kt)("td",{parentName:"tr",align:"left"},",")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Period"))),(0,r.kt)("td",{parentName:"tr",align:"left"},".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Slash"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"RightShift"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Right Shif")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"LeftControl"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Left control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"LeftAlt"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Left alt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SpaceBar"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Space bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"RightAlt"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Right alt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"RightControl"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Right control")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Left"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Left")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Up"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Down"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Right"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Home"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Home")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"End"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"End")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Insert"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Insert")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageUp"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Page up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Delete"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Delete")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageDown"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Page down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumLock"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Num lock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Divide"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad /")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Multiply"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad ","*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Subtract"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad -")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Add"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad +")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"PageDown"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Page down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadOne"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadTwo"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad two")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadThree"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad three")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadFour"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad four")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadFive"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad five")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadSix"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad six")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadSeven"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad seven")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadEight"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad eight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadNine"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad nine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NumPadZero"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad zero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Decimal"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numpad decimal")))),(0,r.kt)("h3",{id:"\ufe0fmouse"},"\u25b6\ufe0f\xa0Mouse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Key Name")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"LeftMouseButton"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Left mouse button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"RightMouseButton"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Right mouse button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThumbMouseButton"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Primary mouse thumb button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"ThumbMouseButton2"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Secondary mouse thumb button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MouseScrollUp"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mouse wheel scrolling up")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MouseScrollDown"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mouse wheel scrolling down")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MouseX"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mouse movement on the X axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"MouseY"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mouse movement on the Y axis")))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95341:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={title:"Basic Types",description:"Basic Types used in the API.",tags:["scripting"]},s=void 0,o={unversionedId:"scripting-reference/glossary/basic-types",id:"scripting-reference/glossary/basic-types",title:"Basic Types",description:"Basic Types used in the API.",source:"@site/docs/scripting-reference/glossary/basic-types.md",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/basic-types",permalink:"/de/docs/next/scripting-reference/glossary/basic-types",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",frontMatter:{title:"Basic Types",description:"Basic Types used in the API.",tags:["scripting"]},sidebar:"main",previous:{title:"NanosUtils",permalink:"/de/docs/next/scripting-reference/utility-classes/nanosutils"},next:{title:"Enums",permalink:"/de/docs/next/scripting-reference/glossary/enums"}},l={},c=[{value:"Lua Types",id:"lua-types",level:2},{value:"<code>number</code>",id:"number",level:3},{value:"<code>string</code>",id:"string",level:3},{value:"<code>function</code>",id:"function",level:3},{value:"<code>boolean</code>",id:"boolean",level:3},{value:"<code>nil</code>",id:"nil",level:3},{value:"<code>table</code>",id:"table",level:3},{value:"<code>iterator</code>",id:"iterator",level:3},{value:"<code>any</code>",id:"any",level:3},{value:"Numeric Types",id:"numeric-types",level:2},{value:"<code>integer</code>",id:"integer",level:3},{value:"<code>float</code>",id:"float",level:3},{value:"Special Types",id:"special-types",level:2},{value:"<code>SpecialPath</code>",id:"specialpath",level:3},{value:"Referencing Asset Packs files",id:"referencing-asset-packs-files",level:4},{value:"Referencing Packages files",id:"referencing-packages-files",level:4},{value:"Example accessing <em>images</em> from <code>quaternius</code> Asset Pack:",id:"example-accessing-images-from-quaternius-asset-pack",level:4},{value:"Example accessing a <em>.ogg sound</em> from <code>sandbox</code> Package:",id:"example-accessing-a-ogg-sound-from-sandbox-package",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lua-types"},"Lua Types"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information and tutorials, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/2.html"},"Official Lua Documentation"),".")),(0,i.kt)("h3",{id:"number"},(0,i.kt)("inlineCode",{parentName:"h3"},"number")),(0,i.kt)("p",null,"The number type represents real (double-precision floating-point) numbers. Lua has no integer type, as it does not need it. There is a widespread misconception about floating-point arithmetic errors and some people fear that even a simple increment can go weird with floating-point numbers. The fact is that, when you use a double to represent an integer, there is no rounding error at all (unless the number is greater than 100,000,000,000,000). Specifically, a Lua number can represent any long integer without rounding problems. Moreover, most modern CPUs do floating-point arithmetic as fast as (or even faster than) integer arithmetic."),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",null,"Strings have the usual meaning: a sequence of characters. Lua is eight-bit clean and so strings may contain characters with any numeric value, including embedded zeros. That means that you can store any binary data into a string. Strings in Lua are immutable values. You cannot change a character inside a string, as you may in C; instead, you create a new string with the desired modifications, as in the next example:"),(0,i.kt)("h3",{id:"function"},(0,i.kt)("inlineCode",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Functions are first-class values in Lua. That means that functions can be stored in variables, passed as arguments to other functions, and returned as results. Such facilities give great flexibility to the language: A program may redefine a function to add new functionality, or simply erase a function to create a secure environment when running a piece of untrusted code (such as code received through a network). Moreover, Lua offers good support for functional programming, including nested functions with proper lexical scoping; just wait. Finally, first-class functions play a key role in Lua\u2019s object-oriented facilities."),(0,i.kt)("h3",{id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,i.kt)("p",null,"The boolean type has two values, false and true, which represent the traditional boolean values. However, they do not hold a monopoly of condition values: In Lua, any value may represent a condition. Conditionals (such as the ones in control structures) consider false and nil as false and anything else as true. Beware that, unlike some other scripting languages, Lua considers both zero and the empty string as true in conditional tests."),(0,i.kt)("h3",{id:"nil"},(0,i.kt)("inlineCode",{parentName:"h3"},"nil")),(0,i.kt)("p",null,"Nil is a type with a single value, nil, whose main property is to be different from any other value. As we have seen, a global variable has a nil value by default, before a first assignment, and you can assign nil to a global variable to delete it. Lua uses nil as a kind of non-value, to represent the absence of a useful value."),(0,i.kt)("h3",{id:"table"},(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"The table type implements associative arrays. An associative array is an array that can be indexed not only with numbers, but also with strings or any other value of the language, except nil. Moreover, tables have no fixed size; you can add as many elements as you want to a table dynamically. Tables are the main (in fact, the only) data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way. Lua uses tables to represent packages as well. When we write io.read, we mean \u201cthe read entry from the io package\u201d. For Lua, that means \u201cindex the table io using the string \u201cread\u201d as the key\u201d."),(0,i.kt)("h3",{id:"iterator"},(0,i.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,i.kt)("p",null,"Iterator allows you to traverse elements of a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"for k, v in ipairs()"),"."),(0,i.kt)("h3",{id:"any"},(0,i.kt)("inlineCode",{parentName:"h3"},"any")),(0,i.kt)("p",null,"We use any here in the Docs to represent that any Type can be used."),(0,i.kt)("h2",{id:"numeric-types"},"Numeric Types"),(0,i.kt)("p",null,"Besides the Lua Types, some methods on the API have specific numeric types, those are converted and treated differently internally."),(0,i.kt)("h3",{id:"integer"},(0,i.kt)("inlineCode",{parentName:"h3"},"integer")),(0,i.kt)("p",null,"Whole numbers without any fractional parts."),(0,i.kt)("h3",{id:"float"},(0,i.kt)("inlineCode",{parentName:"h3"},"float")),(0,i.kt)("p",null,"Floating-point type with decimal points."),(0,i.kt)("h2",{id:"special-types"},"Special Types"),(0,i.kt)("h3",{id:"specialpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"SpecialPath")),(0,i.kt)("p",null,"nanos world supports a special type of Path when loading ",(0,i.kt)("strong",{parentName:"p"},"Textures (.jpg, .png)"),", ",(0,i.kt)("strong",{parentName:"p"},"Sounds (.ogg)")," or referencing files from ",(0,i.kt)("strong",{parentName:"p"},"WebUI"),". It allows any Package or WebUI to access files from other Packages or Asset Packs easily."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SpecialPath")," is a string input which supports the following formats for accessing Assets or Packages files:"),(0,i.kt)("h4",{id:"referencing-asset-packs-files"},"Referencing Asset Packs files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets://[ASSET_PACK_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{id:"referencing-packages-files"},"Referencing Packages files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package://[PACKAGE_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{id:"example-accessing-images-from-quaternius-asset-pack"},"Example accessing ",(0,i.kt)("em",{parentName:"h4"},"images")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"quaternius")," Asset Pack:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets://quaternius/Thumbnails/SK_Revolver_01.jpg")),(0,i.kt)("h4",{id:"example-accessing-a-ogg-sound-from-sandbox-package"},"Example accessing a ",(0,i.kt)("em",{parentName:"h4"},".ogg sound")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"sandbox")," Package:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package://sandbox/Client/my_awesome_audio.ogg")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"SpecialPath input also supports relative and traditional paths!")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8378],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,f=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",tags:["static-class"]},c=void 0,s={unversionedId:"scripting-reference/static-classes/timer",id:"scripting-reference/static-classes/timer",title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",source:"@site/docs/scripting-reference/static-classes/timer.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/timer",permalink:"/de/docs/next/scripting-reference/static-classes/timer",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"static-class",permalink:"/de/docs/next/tags/static-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17. M\xe4rz 2023",frontMatter:{title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals.",tags:["static-class"]},sidebar:"main",previous:{title:"\ud83c\udfae Steam",permalink:"/de/docs/next/scripting-reference/static-classes/steam"},next:{title:"\ud83d\udd0d Trace",permalink:"/de/docs/next/scripting-reference/static-classes/trace"}},o={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),u=p("EventsDeclaration"),f={toc:l},y="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{type:"StaticClass",name:"Timer",is_static:!0,image:"/img/docs/stopwatch.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The shortest interval possible is equal to the local Tick Rate - usually at 33ms. On the Server this can vary depending on the Config.toml setting.")),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- creates a Interval to call a function at every 2 seconds\nlocal my_interval = Timer.SetInterval(function(param1, param2)\n    Console.Log("Triggered each 2 seconds! Param1: " .. param1 .. ". Param2: " .. param2)\nend, 2000, "awesome param 1", 456)\n\n-- cancels the Interval\nTimer.ClearInterval(my_interval)\n\n-- creates a Timeout to call my_function in 5 seconds, once - passing a parameter\nTimer.SetTimeout(function(my_param)\n    Console.Log("nanos " .. my_param)\nend, 5000, "world")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local character = Character(...)\n\nlocal my_timer = Timer.SetTimeout(function(_character)\n    -- Do something with _character\n    -- Ex: Destroy the character after 10 seconds\n    _character:Destroy()\nend, 10000, character)\n\n-- Binds the Timer to the Character\n-- This will ensure it will never trigger if the character is destroyed before it\n-- With this you don't need to validate if the '_character' parameter is valid\nTimer.Bind(my_timer, character)\n")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"StaticClass",name:"Timer",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(u,{type:"StaticClass",name:"Timer",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);
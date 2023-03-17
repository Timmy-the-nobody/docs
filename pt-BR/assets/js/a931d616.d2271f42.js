"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2049],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(m,s(s({ref:t},g),{},{components:r})):n.createElement(m,s({ref:t},g))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},s=void 0,a={unversionedId:"scripting-reference/classes/trigger",id:"version-latest/scripting-reference/classes/trigger",title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",source:"@site/versioned_docs/version-latest/scripting-reference/classes/trigger.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/trigger",permalink:"/pt-BR/docs/scripting-reference/classes/trigger",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 de mar. de 2023",sidebarPosition:0,frontMatter:{title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83c\udd92 TextRender",permalink:"/pt-BR/docs/scripting-reference/classes/text-render"},next:{title:"\ud83d\ude99 Vehicle",permalink:"/pt-BR/docs/scripting-reference/classes/vehicle"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=g("HeaderDeclaration"),u=g("ConstructorDeclaration"),d=g("StaticFunctionsDeclaration"),m=g("FunctionsDeclaration"),f=g("EventsDeclaration"),y={toc:l},v="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(v,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(p,{type:"Class",name:"Trigger",image:"/img/docs/trigger.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))\n\nsphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Console.Log("Something entered my Sphere Trigger")\nend)\n\nlocal box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))\n\nbox_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Console.Log("Something entered my Box Trigger")\nend)\n\nbox_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)\n    Console.Log("Something left my Box Trigger")\nend)\n')),(0,i.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,i.kt)(u,{type:"Class",name:"Trigger",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,i.kt)(d,{type:"Class",name:"Trigger",mdxType:"StaticFunctionsDeclaration"}),(0,i.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,i.kt)(m,{type:"Class",name:"Trigger",mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,i.kt)(f,{type:"Class",name:"Trigger",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
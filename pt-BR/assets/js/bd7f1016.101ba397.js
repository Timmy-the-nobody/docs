"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7575],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={title:"\ud83c\udf0d World",description:"Interaction with World and Environment elements.",tags:["static-class"]},s=void 0,l={unversionedId:"scripting-reference/static-classes/world",id:"version-latest/scripting-reference/static-classes/world",title:"\ud83c\udf0d World",description:"Interaction with World and Environment elements.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/scripting-reference/static-classes/world.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/world",permalink:"/pt-BR/docs/scripting-reference/static-classes/world",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/static-classes/world.mdx",tags:[{label:"static-class",permalink:"/pt-BR/docs/tags/static-class"}],version:"latest",frontMatter:{title:"\ud83c\udf0d World",description:"Interaction with World and Environment elements.",tags:["static-class"]},sidebar:"version-latest/main",previous:{title:"\u23f1\ufe0f Timer",permalink:"/pt-BR/docs/scripting-reference/static-classes/timer"},next:{title:"\ud83c\udfa8 Color",permalink:"/pt-BR/docs/scripting-reference/structs/color"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ReferenceLink"),v=d("StaticFunctionsDeclaration"),g=d("EventsDeclaration"),y={toc:p};function b(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{type:"StaticClass",name:"World",is_static:!0,image:"/img/docs/world.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Overrides default Sun\nWorld.SpawnDefaultSun()\n\n-- Sets time\nWorld.SetTime(9, 30)\n\n-- Sets static speed\nWorld.SetSunSpeed(0)\n")),(0,o.kt)("p",null,"More related examples:"),(0,o.kt)(m,{href:"core-concepts/scripting/interacting-with-the-sun",mdxType:"ReferenceLink"},"Interacting with the Sun"),(0,o.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,o.kt)(v,{type:"StaticClass",name:"World",mdxType:"StaticFunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(g,{type:"StaticClass",name:"World",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
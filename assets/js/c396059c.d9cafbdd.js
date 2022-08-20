"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7378],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80864:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={title:"\ud83d\udd22 Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",tags:["utility-class"]},s=void 0,u={unversionedId:"scripting-reference/structs/quat",id:"scripting-reference/structs/quat",title:"\ud83d\udd22 Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",source:"@site/docs/scripting-reference/structs/quat.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/quat",permalink:"/docs/next/scripting-reference/structs/quat",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/structs/quat.mdx",tags:[{label:"utility-class",permalink:"/docs/next/tags/utility-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{title:"\ud83d\udd22 Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",tags:["utility-class"]},sidebar:"main",previous:{title:"\ud83c\udfa8 Color",permalink:"/docs/next/scripting-reference/structs/color"},next:{title:"\ud83e\udded Rotator",permalink:"/docs/next/scripting-reference/structs/rotator"}},p={},l=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],d=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("PropertiesDeclaration"),g=d("FunctionsDeclaration"),v={toc:l};function b(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},v,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(f,{type:"Struct",name:"Quat",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local new_quaternion = Quat(0.5, 0.5, 1, -1)\nlocal rotation = new_quaterion:Rotator()\n")),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(m,{type:"Struct",name:"Quat",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,a.kt)(y,{type:"Struct",name:"Quat",mdxType:"PropertiesDeclaration"}),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This structure supports ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,a.kt)(g,{type:"Struct",name:"Quat",mdxType:"FunctionsDeclaration"}))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9554],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"NanosUtils",description:"A table containing useful and aux functions",tags:["utility-class"]},i=void 0,o={unversionedId:"scripting-reference/utility-classes/nanosutils",id:"version-latest/scripting-reference/utility-classes/nanosutils",title:"NanosUtils",description:"A table containing useful and aux functions",source:"@site/versioned_docs/version-latest/scripting-reference/utility-classes/nanosutils.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/nanosutils",permalink:"/docs/scripting-reference/utility-classes/nanosutils",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/utility-classes/nanosutils.mdx",tags:[{label:"utility-class",permalink:"/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{title:"NanosUtils",description:"A table containing useful and aux functions",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"NanosMath",permalink:"/docs/scripting-reference/utility-classes/nanosmath"},next:{title:"Basic Types",permalink:"/docs/scripting-reference/glossary/basic-types"}},l={},c=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("HeaderDeclaration"),d=u("StaticFunctionsDeclaration"),m={toc:c},y="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"UtilityClass",name:"NanosUtils",is_static:!0,is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {\n    "my_key" = 123,\n    [2] = "my_value"\n}\n\nlocal dump_text = NanosUtils.Dump(table)\n\nConsole.Log(dump_text)\n\n-- Outputs Text\n--[[\n{\n    "my_key": 123,\n    2 = "my_value"\n}\n--]]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local arg1 = math.random()\nlocal arg2 = math.random()\n\nNanosUtils.Benchmark(\"My Heavy Operation\", 1000, function(param1, param2)\n    -- Do some heavy operations here\n    local result = param1 * param2\nend, arg1, arg2)\n\n-- Outputs Text: 'Benchmark 'My Heavy Operation' (x1000) took 1.5ms.'\n")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"UtilityClass",name:"NanosUtils",mdxType:"StaticFunctionsDeclaration"}))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2767],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=JSON.parse('{"name":"NanosUtils","description":"A table containing useful and aux functions.","static_functions":[{"name":"IsA","description":"Returns if an object is a type","return":[{"type":"boolean","description":"the type of the object corresponds"}],"parameters":[{"type":"any","name":"object","description":"Object to verify"},{"type":"any","name":"type","description":"Type to verify"}]},{"name":"Dump","description":"Dumps a table into a readable text","return":[{"type":"string","description":"the table as readable text"}],"parameters":[{"type":"table","name":"table","description":"Table to dump"}]},{"name":"Benchmark","description":"Benchmarks a function performance","description_long":"Benchmarks a function performance, outputs in the console the elapsed time","parameters":[{"type":"string","name":"name","description":"Benchmark name to output"},{"type":"number","name":"amount","description":"Amount of times to loop"},{"type":"function","name":"func","description":"The function to call"},{"type":"any","name":"args...","description":"The arguments of the function to call"}]},{"name":"FormatString","description":"A better string.format","description_long":"A better string.format. replace {num} by the corresponding vararg in a string<br/><br/>Example: <code>NanosUtils.FormatString(\\"Hello {2} I\'m {1}\\", \\"a noob\\", \\"world!\\") -- \\"Hello world! I\'m a noob\\"</code>","return":[{"type":"string","description":"the final text with the arguments"}],"parameters":[{"type":"string","name":"text","description":"Text to format"},{"type":"any","name":"args...","description":"The arguments to replace"}]}]}'),s=["components"],c={title:"NanosUtils",description:"A table containing useful and aux functions",tags:["utility-class"]},l=void 0,u={unversionedId:"scripting-reference/utility-classes/nanosutils",id:"scripting-reference/utility-classes/nanosutils",title:"NanosUtils",description:"A table containing useful and aux functions",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/nanosutils.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/nanosutils",permalink:"/pt-BR/docs/next/scripting-reference/utility-classes/nanosutils",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/nanosutils.mdx",tags:[{label:"utility-class",permalink:"/pt-BR/docs/next/tags/utility-class"}],version:"current",frontMatter:{title:"NanosUtils",description:"A table containing useful and aux functions",tags:["utility-class"]},sidebar:"main",previous:{title:"NanosMath",permalink:"/pt-BR/docs/next/scripting-reference/utility-classes/nanosmath"},next:{title:"Quat",permalink:"/pt-BR/docs/next/scripting-reference/utility-classes/quaternion"}},p={},m=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=d("HeaderDeclaration"),y=d("StaticFunctionsDeclaration"),g={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{class_data:o,is_static:!0,is_open_sourced:!0,mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local table = {\n    "my_key" = 123,\n    [2] = "my_value"\n}\n\nlocal dump_text = NanosUtils.Dump(table)\n\nPackage.Log(dump_text)\n\n-- Outputs Text\n--[[\n{\n    "my_key": 123,\n    2 = "my_value"\n}\n--]]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local my_variable = Character()\n\nNanosUtils.IsA(my_variable, Character) -- true\nNanosUtils.IsA(my_variable, Vehicle) -- false\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local arg1 = math.random()\nlocal arg2 = math.random()\n\nNanosUtils.Benchmark(\"My Heavy Operation\", 1000, function(param1, param2)\n    -- Do some heavy operations here\n    local result = param1 * param2\nend, arg1, arg2)\n\n-- Outputs Text: 'Benchmark 'My Heavy Operation' (x1000) took 1.5ms.'\n")),(0,i.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,i.kt)(y,{class_data:o,mdxType:"StaticFunctionsDeclaration"}))}b.isMDXComponent=!0}}]);
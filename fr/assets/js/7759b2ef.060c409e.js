"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6411],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71356:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),c=["components"],s={title:"\ud83d\udcd0 Vector",description:"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante.",tags:["classe-utilitaire"]},a=void 0,u={unversionedId:"scripting-reference/structs/vector",id:"scripting-reference/structs/vector",title:"\ud83d\udcd0 Vector",description:"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/structs/vector.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/vector",permalink:"/fr/docs/next/scripting-reference/structs/vector",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/structs/vector.mdx",tags:[{label:"classe-utilitaire",permalink:"/fr/docs/next/tags/classe-utilitaire"}],version:"current",frontMatter:{title:"\ud83d\udcd0 Vector",description:"Un vecteur est compos\xe9 de trois caract\xe9ristiques (X, Y, Z) avec une pr\xe9cision en virgule flottante.",tags:["classe-utilitaire"]},sidebar:"main",previous:{title:"\ud83e\udded Rotator",permalink:"/fr/docs/next/scripting-reference/structs/rotator"},next:{title:"\ud83d\udccf Vector2D",permalink:"/fr/docs/next/scripting-reference/structs/vector2d"}},p={},l=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=d("HeaderDeclaration"),f=d("ConstructorDeclaration"),v=d("PropertiesDeclaration"),y=d("FunctionsDeclaration"),g={toc:l};function k(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{type:"Struct",name:"Vector",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Les vecteurs sont compress\xe9s en interne et automatiquement, ce qui r\xe9duit leur taille dans le r\xe9seau jusqu'\xe0 90 %. Des d\xe9tails int\xe9ressants :"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Les param\xe8tres des vecteurs dans les m\xe9thodes des classes sont g\xe9n\xe9ralement compress\xe9s avec une pr\xe9cision de 1 d\xe9cimale (avec quelques exceptions o\xf9 nous avons besoin de plus de pr\xe9cision)."),(0,i.kt)("li",{parentName:"ul"},"Les vecteurs transmis dans les \xe9v\xe9nements distants sont compress\xe9s avec une pr\xe9cision de 2 d\xe9cimales. If you need more precision, we recommend passing them as raw number instead."))),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(f,{type:"Struct",name:"Vector",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,i.kt)(v,{type:"Struct",name:"Vector",mdxType:"PropertiesDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This structure supports ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,i.kt)(y,{type:"Struct",name:"Vector",mdxType:"FunctionsDeclaration"}))}k.isMDXComponent=!0}}]);
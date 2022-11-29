"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},s=void 0,o={unversionedId:"scripting-reference/classes/file",id:"version-latest/scripting-reference/classes/file",title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/file.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/file",permalink:"/docs/scripting-reference/classes/file",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/file.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1669718512,formattedLastUpdatedAt:"Nov 29, 2022",sidebarPosition:0,frontMatter:{title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd8c\ufe0f Decal",permalink:"/docs/scripting-reference/classes/decal"},next:{title:"\ud83d\udca3 Grenade",permalink:"/docs/scripting-reference/classes/grenade"}},l={},c=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("HeaderDeclaration"),d=p("ConstructorDeclaration"),f=p("StaticFunctionsDeclaration"),m=p("FunctionsDeclaration"),y=p("EventsDeclaration"),v={toc:c};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{type:"Class",name:"File",mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is not possible to open files from outside the server folder. All path must be relative to the Server's executable folder. All files are opened as binary file by default.")),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local configuration_file = File("my_awesome_configuration.json")\n\nlocal configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))\n')),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(d,{type:"Class",name:"File",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,i.kt)(f,{type:"Class",name:"File",mdxType:"StaticFunctionsDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(m,{type:"Class",name:"File",mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,i.kt)(y,{type:"Class",name:"File",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);
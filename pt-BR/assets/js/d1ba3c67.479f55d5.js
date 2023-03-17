"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\ud83d\udce6 Prop",description:"A Prop represents a Dynamic Mesh which can be spawned in the world, can be grabbed around by characters and have physics.",sidebar_position:0,tags:["class"]},s=void 0,i={unversionedId:"scripting-reference/classes/prop",id:"scripting-reference/classes/prop",title:"\ud83d\udce6 Prop",description:"A Prop represents a Dynamic Mesh which can be spawned in the world, can be grabbed around by characters and have physics.",source:"@site/docs/scripting-reference/classes/prop.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/prop",permalink:"/pt-BR/docs/next/scripting-reference/classes/prop",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 de mar. de 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udce6 Prop",description:"A Prop represents a Dynamic Mesh which can be spawned in the world, can be grabbed around by characters and have physics.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udc69\u200d\ud83d\udcbb Player",permalink:"/pt-BR/docs/next/scripting-reference/classes/player"},next:{title:"\ud83d\udcfd\ufe0f SceneCapture",permalink:"/pt-BR/docs/next/scripting-reference/classes/scene-capture"}},c={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=l("HeaderDeclaration"),u=l("ConstructorDeclaration"),m=l("StaticFunctionsDeclaration"),y=l("FunctionsDeclaration"),f=l("EventsDeclaration"),b={toc:p},h="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"Prop",image:"/img/docs/props.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_prop = Prop(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  "nanos-world::SM_Crate_07"\n)\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Prop",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the Prop was spawned by the Client. It will have all interactions disabled (e.g. it will not be able to be grabbed by Characters).")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Props smaller than radius ",(0,a.kt)("strong",{parentName:"p"},"40")," units or very thin (any side smaller than ",(0,a.kt)("strong",{parentName:"p"},"20")," units) will have ",(0,a.kt)("strong",{parentName:"p"},"CCD")," (Continuous Collision Detection) enabled automatically to avoid falling through the floor or other objects. ",(0,a.kt)("em",{parentName:"p"},"This will slightly increase the performance cost of them!"))),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Prop",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(y,{type:"Class",name:"Prop",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(f,{type:"Class",name:"Prop",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);
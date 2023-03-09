"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",sidebar_position:0,tags:["class"]},o=void 0,i={unversionedId:"scripting-reference/classes/text-render",id:"scripting-reference/classes/text-render",title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",source:"@site/docs/scripting-reference/classes/text-render.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/text-render",permalink:"/docs/next/scripting-reference/classes/text-render",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/text-render.mdx",tags:[{label:"class",permalink:"/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:0,frontMatter:{title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83c\udfe0 StaticMesh",permalink:"/docs/next/scripting-reference/classes/static-mesh"},next:{title:"\ud83e\udea4 Trigger",permalink:"/docs/next/scripting-reference/classes/trigger"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ReferenceLink"),m=p("ConstructorDeclaration"),f=p("StaticFunctionsDeclaration"),y=p("FunctionsDeclaration"),g=p("EventsDeclaration"),x={toc:l},v="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"TextRender",image:"/img/docs/text-render.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_text_render = TextRender(\n    Vector(-100, 200, 300),\n    Rotator(),\n    "My Awesome Text",\n    Vector(1, 1, 1), -- Scale\n    Color(1, 0, 0), -- Red Color\n    FontType.OpenSans,\n    TextRenderAlignCamera.FaceCamera\n)\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you desire your ",(0,a.kt)("strong",{parentName:"p"},"TextRender")," to be visible through walls, replace it's material with the nanos Default TranslucentDepth one!"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},'SetMaterial("nanos-world::M_NanosTranslucent_Depth")'),"."),(0,a.kt)("p",{parentName:"admonition"},"You can also tweak it's color and other properties using the Material methods.")),(0,a.kt)(u,{href:"getting-started/tutorials-and-examples/name-tags",mdxType:"ReferenceLink"},"Nametags"),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(m,{type:"Class",name:"TextRender",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(f,{type:"Class",name:"TextRender",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(y,{type:"Class",name:"TextRender",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(g,{type:"Class",name:"TextRender",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);
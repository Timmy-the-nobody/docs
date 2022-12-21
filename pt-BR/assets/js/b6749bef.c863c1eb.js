"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"\u26d3\ufe0f Cable",description:"A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them",sidebar_position:0,tags:["class"]},s=void 0,i={unversionedId:"scripting-reference/classes/cable",id:"version-latest/scripting-reference/classes/cable",title:"\u26d3\ufe0f Cable",description:"A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/cable.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/cable",permalink:"/pt-BR/docs/scripting-reference/classes/cable",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/cable.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\u26d3\ufe0f Cable",description:"A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd23 Blueprint",permalink:"/pt-BR/docs/scripting-reference/classes/blueprint"},next:{title:"\ud83d\uddbc\ufe0f Canvas",permalink:"/pt-BR/docs/scripting-reference/classes/canvas"}},c={},l=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("HeaderDeclaration"),u=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),b=p("EventsDeclaration"),h={toc:l};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d,{type:"Class",name:"Cable",image:"/img/docs/cable.jpg",mdxType:"HeaderDeclaration"}),(0,r.kt)("p",null,"nanos world ",(0,r.kt)("strong",{parentName:"p"},"Cables")," are composed primarily of two Unreal Engine components: a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/API/Plugins/CableComponent/UCableComponent/index.html"},"Cable")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/InteractiveExperiences/Physics/Constraints/ConstraintsBlueprints/index.html"},"PhysicsConstraint"),". The first is used for visual purposes only and the second one gives the effective physical effects that are applied to each end of the Cable."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Cable ",(0,r.kt)("strong",{parentName:"p"},"visuals")," can be tweaked with ",(0,r.kt)("inlineCode",{parentName:"p"},":SetForces()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},":SetCableSettings()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},":SetRenderingSettings()")," methods. Those methods don\u2019t have effect on the physics being applied and only have effects on the visual representation."),(0,r.kt)("p",{parentName:"admonition"},"Cable ",(0,r.kt)("strong",{parentName:"p"},"physics")," can be tweaked with ",(0,r.kt)("inlineCode",{parentName:"p"},":SetAngularLimits()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},":SetLinearLimits()"),".")),(0,r.kt)("p",null,"After attaching the two sides of your cable, the physics can be tweaked to affect how the constraint will affect the objects."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Cables are automatically ",(0,r.kt)("strong",{parentName:"p"},"destroyed")," when one of the sides are detached")),(0,r.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_cable = Cable(Vector())\nlocal cube_01 = Prop(Vector(100, 100, 100), Rotator(), "nanos-world::SM_Cube")\nlocal cube_02 = Prop(Vector(200, 0, 100), Rotator(), "nanos-world::SM_Cube")\n\nmy_cable:AttachStartTo(cube_01)\nmy_cable:AttachEndTo(cube_02)\n')),(0,r.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,r.kt)(u,{type:"Class",name:"Cable",mdxType:"ConstructorDeclaration"}),(0,r.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,r.kt)(m,{type:"Class",name:"Cable",mdxType:"StaticFunctionsDeclaration"}),(0,r.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,r.kt)(f,{type:"Class",name:"Cable",mdxType:"FunctionsDeclaration"}),(0,r.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,r.kt)(b,{type:"Class",name:"Cable",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);
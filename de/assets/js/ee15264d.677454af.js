"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",sidebar_position:0,tags:["class"]},s=void 0,c={unversionedId:"scripting-reference/classes/scene-capture",id:"version-latest/scripting-reference/classes/scene-capture",title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/scene-capture.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/scene-capture",permalink:"/de/docs/scripting-reference/classes/scene-capture",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udce6 Prop",permalink:"/de/docs/scripting-reference/classes/prop"},next:{title:"\ud83d\udd0a Sound",permalink:"/de/docs/scripting-reference/classes/sound"}},i={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=l("HeaderDeclaration"),d=l("ConstructorDeclaration"),m=l("StaticFunctionsDeclaration"),f=l("FunctionsDeclaration"),h=l("EventsDeclaration"),y={toc:p},v="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(v,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(u,{type:"Class",name:"SceneCapture",image:"/img/docs/scenecapture.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local scene_capture = SceneCapture(\n  Vector(0, 0, 200),\n  Rotator(-15, 0, 0),\n  256,\n  256,\n  0,\n  5000,\n  100\n)\n\n-- Paints the Prop with the SceneCapture output\nlocal my_prop = Prop(Vector(200, 200, 100), Rotator(), "nanos-world::SM_Cube")\nmy_prop:SetMaterialFromSceneCapture(scene_capture)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local scene_capture = SceneCapture(\n  Vector(0, 0, 200),\n  Rotator(-15, 0, 0),\n  256,\n  256,\n  0,\n  5000,\n  100\n)\n\n-- Make a SceneCapture to only render a specific actor\nlocal my_prop = Prop(Vector(200, 200, 100), Rotator(), "nanos-world::SM_Cube")\nscene_capture:AddRenderActor(my_prop)\nscene_capture:SetShowFlag("Atmosphere", false)\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use the output Texture from a SceneCapture with ",(0,a.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/classes/base-classes/paintable#setmaterialfromscenecapture"},":SetMaterialFromSceneCapture()")," method!")),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(d,{type:"Class",name:"SceneCapture",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Scene Captures capture a scene in real time, this means every tick it will re-render the scene from scratch. Please consider reducing the ",(0,a.kt)("inlineCode",{parentName:"p"},"width"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"height")," and even the ",(0,a.kt)("inlineCode",{parentName:"p"},"render_rate")," to improve it's performance."),(0,a.kt)("p",{parentName:"admonition"},"We've worked hard to make SceneCapture as performatic as possible! Some techniques were applied for optimization and reducing the ",(0,a.kt)("inlineCode",{parentName:"p"},"render_rate")," automatically when you are far and when the generated texture is out of the screen.")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"SceneCapture",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(f,{type:"Class",name:"SceneCapture",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(h,{type:"Class",name:"SceneCapture",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={title:"Painting Meshes",description:"How to use the new Material customization methods available to use",tags:["tutorial-example","scripting","assets"]},s=void 0,l={unversionedId:"getting-started/tutorials-and-examples/painting-meshes",id:"getting-started/tutorials-and-examples/painting-meshes",title:"Painting Meshes",description:"How to use the new Material customization methods available to use",source:"@site/docs/getting-started/tutorials-and-examples/painting-meshes.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/painting-meshes",permalink:"/de/docs/next/getting-started/tutorials-and-examples/painting-meshes",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"},{label:"assets",permalink:"/de/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9. M\xe4rz 2023",frontMatter:{title:"Painting Meshes",description:"How to use the new Material customization methods available to use",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Name Tags",permalink:"/de/docs/next/getting-started/tutorials-and-examples/name-tags"},next:{title:"Play as Prop",permalink:"/de/docs/next/getting-started/tutorials-and-examples/play-as-prop"}},o={},u=[{value:"Replacing a Mesh Material with Default Material",id:"replacing-a-mesh-material-with-default-material",level:2},{value:"Painting a Mesh with Red Tint",id:"painting-a-mesh-with-red-tint",level:2},{value:"Making a Mesh Metallic",id:"making-a-mesh-metallic",level:2},{value:"Making a Mirror",id:"making-a-mirror",level:2},{value:"Loading a Texture into a Mesh",id:"loading-a-texture-into-a-mesh",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to use the new Material customization methods available to use."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(21063).Z,width:"1919",height:"1079"})),(0,r.kt)("p",null,"In Unreal Engine, a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/index.html"},"Material")," is an asset that can be applied to a mesh to control the visual look of the scene. At a high level, it is probably easiest to think of a Material as the \u201cpaint\u201d that is applied to an object. You can define its color, how shiny it is, whether you can see through the object, and much more."),(0,r.kt)("p",null,"In Unreal Engine, when you create a Material, you can define custom ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/HowTo/Making_Parameters/index.html"},"Parameters")," for it. So if you defined some parameters for a Material in a mesh, you can tweak it with simple comands in nanos world!"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"nanos world")," provides a bunch of methods to allow you to interact with the parameters you created for your materials using our scripting!"),(0,r.kt)("p",{parentName:"admonition"},"Please read ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable"},"Base Paintable")," Class to check all available methods before proceeding!")),(0,r.kt)("h2",{id:"replacing-a-mesh-material-with-default-material"},"Replacing a Mesh Material with Default Material"),(0,r.kt)("p",null,"To illustrate, let\u2019s spawn a Cube and change it\u2019s Material using Lua:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default Masked one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n')),(0,r.kt)("p",null,"Blank Cube with Default Masked Material\n",(0,r.kt)("img",{src:a(36846).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"painting-a-mesh-with-red-tint"},"Painting a Mesh with Red Tint"),(0,r.kt)("p",null,"Now let\u2019s set it\u2019s material to red! To be able to do that, we must set the Color parameter named ",(0,r.kt)("strong",{parentName:"p"},"Tint")," as we\u2019ve seen above is the name of parameters which is connected to Base Color of the Material."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n-- replaces it\'s materials with the nanos default Masked one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- paints it red\nmy_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Red parameter"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16385).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"making-a-mesh-metallic"},"Making a Mesh Metallic"),(0,r.kt)("p",null,"Now let\u2019s give it a metallic style! You can learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/PhysicallyBased/index.html"},"Physically Based Materials")," to know about how each input affects the final representation of a surface!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- paints it red\nmy_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))\n\n-- makes it metallic\nmy_cube:SetMaterialScalarParameter("Metallic", 0.85)\n\n-- makes it glossy\nmy_cube:SetMaterialScalarParameter("Roughness", 0)\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Red and Metallic parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16044).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"making-a-mirror"},"Making a Mirror"),(0,r.kt)("p",null,"A fun thing to do is to make a material fully reflective, like a mirror:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- makes it fully metallic and glossy\nmy_cube:SetMaterialScalarParameter("Metallic", 1)\nmy_cube:SetMaterialScalarParameter("Roughness", 0)\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Metallic and Roughness parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(72730).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"loading-a-texture-into-a-mesh"},"Loading a Texture into a Mesh"),(0,r.kt)("p",null,"It is even possible to load images ","(",".jpg, .png, etc",")"," from disk and apply to the mesh! For that you will need to have an image inside an Asset Pack or a Package ","(","in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," folder",")",". We gonna use ",(0,r.kt)("a",{parentName:"p",href:"https://i.imgur.com/67CGqHb.jpf"},"this ","(","imgur",")")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"syed.jpg")," and we will place it inside our Package ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," folder."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(41189).Z,width:"433",height:"234"})),(0,r.kt)("p",null,"And now you can set it like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- applies a custom texture to a parameter called "Texture"\nmy_cube:SetMaterialTextureParameter("Texture", "package://testing/Client/syed.jpg")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2128).Z,width:"1915",height:"1079"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"And voila! Easy Peasy! Feel free to create your own materials and textures and tweak them in-game!")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be careful! Loading raw images directly from disk is a slow operation and may cause unwanted stutters! Also raw images aren't cached neither automatically pre-loaded when joining a server.")))}p.isMDXComponent=!0},21063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/painting-meshes-01-af362a8f0be1d3aa2805c863c37df96f.webp"},36846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/painting-meshes-02-0ecdc03209977336916587a18e0bc996.webp"},16385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/painting-meshes-03-40490b7761232255d1f5cacd3edd20f4.webp"},16044:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/painting-meshes-04-c6855e9738dfb17b5cb3b6186186efde.webp"},72730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/painting-meshes-05-5718d6049688842eb02782fbb460de55.webp"},41189:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},2128:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/painting-meshes-07-4af331240b3364e1e0a375aaed6c7687.webp"}}]);
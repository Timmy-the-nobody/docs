"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[755],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81165:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(83117),i=a(80102),r=(a(67294),a(3905)),s=["components"],l={title:"Painting Meshes",description:"How to use the new Material customization methods available to use",tags:["tutorial-example","scripting","assets"]},o=void 0,c={unversionedId:"getting-started/tutorials-and-examples/painting-meshes",id:"getting-started/tutorials-and-examples/painting-meshes",title:"Painting Meshes",description:"How to use the new Material customization methods available to use",source:"@site/docs/getting-started/tutorials-and-examples/painting-meshes.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/painting-meshes",permalink:"/docs/next/getting-started/tutorials-and-examples/painting-meshes",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/painting-meshes.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",frontMatter:{title:"Painting Meshes",description:"How to use the new Material customization methods available to use",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Name Tags",permalink:"/docs/next/getting-started/tutorials-and-examples/name-tags"},next:{title:"Play as Prop",permalink:"/docs/next/getting-started/tutorials-and-examples/play-as-prop"}},u={},p=[{value:"Replacing a Mesh Material with Default Material",id:"replacing-a-mesh-material-with-default-material",level:2},{value:"Painting a Mesh with Red Tint",id:"painting-a-mesh-with-red-tint",level:2},{value:"Making a Mesh Metallic",id:"making-a-mesh-metallic",level:2},{value:"Making a Mirror",id:"making-a-mirror",level:2},{value:"Loading a Texture into a Mesh",id:"loading-a-texture-into-a-mesh",level:2}],m={toc:p};function d(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to use the new Material customization methods available to use."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(56956).Z,width:"1919",height:"1079"})),(0,r.kt)("p",null,"In Unreal Engine, a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/index.html"},"Material")," is an asset that can be applied to a mesh to control the visual look of the scene. At a high level, it is probably easiest to think of a Material as the \u201cpaint\u201d that is applied to an object. You can define its color, how shiny it is, whether you can see through the object, and much more."),(0,r.kt)("p",null,"In Unreal Engine, when you create a Material, you can define custom ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/HowTo/Making_Parameters/index.html"},"Parameters")," for it. So if you defined some parameters for a Material in a mesh, you can tweak it with simple comands in nanos world!"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"nanos world")," provides a bunch of methods to allow you to interact with the parameters you created for your materials using our scripting!"),(0,r.kt)("p",{parentName:"admonition"},"Please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/classes/base-classes/paintable"},"Base Paintable")," Class to check all available methods before proceeding!")),(0,r.kt)("h2",{id:"replacing-a-mesh-material-with-default-material"},"Replacing a Mesh Material with Default Material"),(0,r.kt)("p",null,"To illustrate, let\u2019s spawn a Cube and change it\u2019s Material using Lua:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default Masked one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n')),(0,r.kt)("p",null,"Blank Cube with Default Masked Material\n",(0,r.kt)("img",{src:a(49122).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"painting-a-mesh-with-red-tint"},"Painting a Mesh with Red Tint"),(0,r.kt)("p",null,"Now let\u2019s set it\u2019s material to red! To be able to do that, we must set the Color parameter named ",(0,r.kt)("strong",{parentName:"p"},"Tint")," as we\u2019ve seen above is the name of parameters which is connected to Base Color of the Material."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n-- replaces it\'s materials with the nanos default Masked one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- paints it red\nmy_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Red parameter"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(15896).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"making-a-mesh-metallic"},"Making a Mesh Metallic"),(0,r.kt)("p",null,"Now let\u2019s give it a metallic style! You can learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/RenderingAndGraphics/Materials/PhysicallyBased/index.html"},"Physically Based Materials")," to know about how each input affects the final representation of a surface!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- paints it red\nmy_cube:SetMaterialColorParameter("Tint", Color(1, 0, 0))\n\n-- makes it metallic\nmy_cube:SetMaterialScalarParameter("Metallic", 0.85)\n\n-- makes it glossy\nmy_cube:SetMaterialScalarParameter("Roughness", 0)\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Red and Metallic parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16029).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"making-a-mirror"},"Making a Mirror"),(0,r.kt)("p",null,"A fun thing to do is to make a material fully reflective, like a mirror:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- makes it fully metallic and glossy\nmy_cube:SetMaterialScalarParameter("Metallic", 1)\nmy_cube:SetMaterialScalarParameter("Roughness", 0)\n')),(0,r.kt)("p",null,"Cube with Default Masked Material with Metallic and Roughness parameters"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(25031).Z,width:"1919",height:"1079"})),(0,r.kt)("h2",{id:"loading-a-texture-into-a-mesh"},"Loading a Texture into a Mesh"),(0,r.kt)("p",null,"It is even possible to load images ","(",".jpg, .png, etc",")"," from disk and apply to the mesh! For that you will need to have an image inside an Asset Pack or a Package ","(","in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," folder",")",". We gonna use ",(0,r.kt)("a",{parentName:"p",href:"https://i.imgur.com/67CGqHb.jpg"},"this ","(","imgur",")")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"syed.jpg")," and we will place it inside our Package ",(0,r.kt)("inlineCode",{parentName:"p"},"Client/")," folder."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(22240).Z,width:"433",height:"234"})),(0,r.kt)("p",null,"And now you can set it like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- spawns a static mesh cube\nlocal my_cube = StaticMesh(Vector(300, 0, 100), Rotator(0, 45, 0), "nanos-world::SM_Cube")\n\n-- replaces it\'s materials with the nanos default one\nmy_cube:SetMaterial("nanos-world::M_NanosMasked")\n\n-- applies a custom texture to a parameter called "Texture"\nmy_cube:SetMaterialTextureParameter("Texture", "package://testing/Client/syed.jpg")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(94237).Z,width:"1915",height:"1079"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"And voila! Easy Peasy! Feel free to create your own materials and textures and tweak them in-game!")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Be careful! Loading raw images directly from disk is a slow operation and may cause unwanted stutters! Also raw images aren't cached neither automatically pre-loaded when joining a server.")))}d.isMDXComponent=!0},56956:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-01-1a2e5cd9ab45ff0b2b602e0c64ec190d.jpg"},49122:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-02-f126b2cb2e2abbe172f731ed66c5442a.jpg"},15896:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-03-a1890eedbc13103434e7206b907764b5.jpg"},16029:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-04-1b1c7e09416247f2bbcc250f079a0d8b.jpg"},25031:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-05-93c5fcaca21a0382d9e9fe6396394adb.jpg"},22240:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-06-be10ed884d3837712998888707e61efa.jpg"},94237:function(e,t,a){t.Z=a.p+"assets/images/painting-meshes-07-e952bf8bdfcbe91cc3ff9ddaa9bfc6a0.jpg"}}]);
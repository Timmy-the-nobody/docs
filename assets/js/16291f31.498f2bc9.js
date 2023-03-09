"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const o={title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},r=void 0,i={unversionedId:"scripting-reference/classes/sound",id:"version-latest/scripting-reference/classes/sound",title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",source:"@site/versioned_docs/version-latest/scripting-reference/classes/sound.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/sound",permalink:"/docs/scripting-reference/classes/sound",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/sound.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udcfd\ufe0f SceneCapture",permalink:"/docs/scripting-reference/classes/scene-capture"},next:{title:"\ud83c\udfe0 StaticMesh",permalink:"/docs/scripting-reference/classes/static-mesh"}},l={},c=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2},{value:"\ud83d\udd0a\xa0Sound Attenuation",id:"sound-attenuation",level:2},{value:"\ud83d\udd08\xa0Linear",id:"linear",level:3},{value:"\ud83d\udd08\xa0Logarithmic",id:"logarithmic",level:3},{value:"\ud83d\udd08\xa0Inverse",id:"inverse",level:3},{value:"\ud83d\udd08\xa0Log Reverse",id:"log-reverse",level:3},{value:"\ud83d\udd08\xa0Natural Sound",id:"natural-sound",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=d("HeaderDeclaration"),p=d("ConstructorDeclaration"),m=d("StaticFunctionsDeclaration"),f=d("FunctionsDeclaration"),g=d("EventsDeclaration"),h={toc:c},v="wrapper";function y(e){let{components:t,...o}=e;return(0,s.kt)(v,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u,{type:"Class",name:"Sound",image:"/img/docs/sound.webp",mdxType:"HeaderDeclaration"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can also load raw ",(0,s.kt)("inlineCode",{parentName:"p"},".ogg")," files from disk! Please check ",(0,s.kt)("a",{parentName:"p",href:"/docs/scripting-reference/glossary/basic-types#specialpath"},"SpecialPath"),".")),(0,s.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'local my_sound = Sound(\n    Vector(-510, 145, 63), -- Location (if a 3D sound)\n    "nanos-world::A_VR_Confirm", -- Asset Path\n    false, -- Is 2D Sound\n    true, -- Auto Destroy (if to destroy after finished playing)\n    SoundType.SFX,\n    1, -- Volume\n    1 -- Pitch\n)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawning a ogg sound located in a Package\nlocal ogg_sound = Sound(Vector(), "package://my-package/Client/awesome_beep.ogg", true)\n')),(0,s.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,s.kt)(p,{type:"Class",name:"Sound",mdxType:"ConstructorDeclaration"}),(0,s.kt)("admonition",{title:"Note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"auto_destroy"))," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,s.kt)("em",{parentName:"p"},"Particle System")," spawned in-game. So if the ",(0,s.kt)("em",{parentName:"p"},"Particle System")," itself loops indefinitely, it will keep playing until the Player reconnects.")),(0,s.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,s.kt)(m,{type:"Class",name:"Sound",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,s.kt)(f,{type:"Class",name:"Sound",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,s.kt)(g,{type:"Class",name:"Sound",mdxType:"EventsDeclaration"}),(0,s.kt)("h2",{id:"sound-attenuation"},"\ud83d\udd0a\xa0Sound Attenuation"),(0,s.kt)("p",null,"This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:"),(0,s.kt)("h3",{id:"linear"},"\ud83d\udd08\xa0Linear"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(77226).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don't need tightly focussed 3D spatial falloff settings."),(0,s.kt)("h3",{id:"logarithmic"},"\ud83d\udd08\xa0Logarithmic"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(51614).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances."),(0,s.kt)("h3",{id:"inverse"},"\ud83d\udd08\xa0Inverse"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(57074).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source."),(0,s.kt)("h3",{id:"log-reverse"},"\ud83d\udd08\xa0Log Reverse"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(11343).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances."),(0,s.kt)("h3",{id:"natural-sound"},"\ud83d\udd08\xa0Natural Sound"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(21246).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"This function attempts to model a more 'naturalistic' falloff behavior to produce behaviors that closer match reality. This function is a kind of 'middle ground' between the Logarithmic and Inverse functions."))}y.isMDXComponent=!0},57074:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sounds-inverse-c55f6d8674c960bb226ae568025a3ca4.webp"},77226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sounds-linear-a848c9dc2b62d5e8a046ba8616b21288.webp"},11343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sounds-log-reverse-509f2660e62991973bb34d93a253dee4.webp"},51614:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sounds-log-406cd75301c542ed16592ba40e2d747e.webp"},21246:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sounds-natural-8795f6b14ee91ebdd6f1c38b6afbec36.webp"}}]);
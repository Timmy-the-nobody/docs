"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),o=["components"],i={title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},l=void 0,c={unversionedId:"scripting-reference/classes/sound",id:"version-latest/scripting-reference/classes/sound",title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",source:"@site/versioned_docs/version-latest/scripting-reference/classes/sound.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/sound",permalink:"/docs/scripting-reference/classes/sound",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/sound.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",sidebarPosition:0,frontMatter:{title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udcfd\ufe0f SceneCapture",permalink:"/docs/scripting-reference/classes/scene-capture"},next:{title:"\ud83c\udfe0 StaticMesh",permalink:"/docs/scripting-reference/classes/static-mesh"}},u={},d=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2},{value:"\ud83d\udd0a Sound Attenuation",id:"-sound-attenuation",level:2},{value:"\ud83d\udd08 Linear",id:"-linear",level:3},{value:"\ud83d\udd08 Logarithmic",id:"-logarithmic",level:3},{value:"\ud83d\udd08 Inverse",id:"-inverse",level:3},{value:"\ud83d\udd08 Log Reverse",id:"-log-reverse",level:3},{value:"\ud83d\udd08 Natural Sound",id:"-natural-sound",level:3}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},f=p("HeaderDeclaration"),m=p("ConstructorDeclaration"),g=p("FunctionsDeclaration"),h=p("EventsDeclaration"),v={toc:d};function y(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},v,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(f,{type:"Class",name:"Sound",image:"/img/docs/sound.webp",mdxType:"HeaderDeclaration"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can also load raw ",(0,s.kt)("inlineCode",{parentName:"p"},".ogg")," files from disk! Please check ",(0,s.kt)("a",{parentName:"p",href:"/docs/scripting-reference/glossary/basic-types#specialpath"},"SpecialPath"),".")),(0,s.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'local my_sound = Sound(\n    Vector(-510, 145, 63), -- Location (if a 3D sound)\n    "nanos-world::A_VR_Confirm", -- Asset Path\n    false, -- Is 2D Sound\n    true, -- Auto Destroy (if to destroy after finished playing)\n    SoundType.SFX,\n    1, -- Volume\n    1 -- Pitch\n)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawning a ogg sound located in a Package\nlocal ogg_sound = Sound(Vector(), "package://my-package/Client/awesome_beep.ogg", true)\n')),(0,s.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,s.kt)(m,{type:"Class",name:"Sound",mdxType:"ConstructorDeclaration"}),(0,s.kt)("admonition",{title:"Note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"auto_destroy"))," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,s.kt)("em",{parentName:"p"},"Particle System")," spawned in-game. So if the ",(0,s.kt)("em",{parentName:"p"},"Particle System")," itself loops indefinitely, it will keep playing until the Player reconnects.")),(0,s.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,s.kt)(g,{type:"Class",name:"Sound",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,s.kt)(h,{type:"Class",name:"Sound",mdxType:"EventsDeclaration"}),(0,s.kt)("h2",{id:"-sound-attenuation"},"\ud83d\udd0a Sound Attenuation"),(0,s.kt)("p",null,"This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:"),(0,s.kt)("h3",{id:"-linear"},"\ud83d\udd08 Linear"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(77226).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don't need tightly focussed 3D spatial falloff settings."),(0,s.kt)("h3",{id:"-logarithmic"},"\ud83d\udd08 Logarithmic"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(51614).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances."),(0,s.kt)("h3",{id:"-inverse"},"\ud83d\udd08 Inverse"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(57074).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source."),(0,s.kt)("h3",{id:"-log-reverse"},"\ud83d\udd08 Log Reverse"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(11343).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances."),(0,s.kt)("h3",{id:"-natural-sound"},"\ud83d\udd08 Natural Sound"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(21246).Z,width:"2500",height:"1476"})),(0,s.kt)("p",null,"This function attempts to model a more 'naturalistic' falloff behavior to produce behaviors that closer match reality. This function is a kind of 'middle ground' between the Logarithmic and Inverse functions."))}y.isMDXComponent=!0},57074:function(e,t,n){t.Z=n.p+"assets/images/sounds-inverse-c55f6d8674c960bb226ae568025a3ca4.webp"},77226:function(e,t,n){t.Z=n.p+"assets/images/sounds-linear-a848c9dc2b62d5e8a046ba8616b21288.webp"},11343:function(e,t,n){t.Z=n.p+"assets/images/sounds-log-reverse-509f2660e62991973bb34d93a253dee4.webp"},51614:function(e,t,n){t.Z=n.p+"assets/images/sounds-log-406cd75301c542ed16592ba40e2d747e.webp"},21246:function(e,t,n){t.Z=n.p+"assets/images/sounds-natural-8795f6b14ee91ebdd6f1c38b6afbec36.webp"}}]);
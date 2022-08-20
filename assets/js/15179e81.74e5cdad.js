"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3384],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",sidebar_position:0,tags:["class"]},l=void 0,c={unversionedId:"scripting-reference/classes/light",id:"version-latest/scripting-reference/classes/light",title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",source:"@site/versioned_docs/version-latest/scripting-reference/classes/light.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/light",permalink:"/docs/scripting-reference/classes/light",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/light.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660995826,formattedLastUpdatedAt:"Aug 20, 2022",sidebarPosition:0,frontMatter:{title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udca3 Grenade",permalink:"/docs/scripting-reference/classes/grenade"},next:{title:"\ud83d\udd2a Melee",permalink:"/docs/scripting-reference/classes/melee"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2},{value:"\ud83d\udca1 Light Profiles",id:"-light-profiles",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},g=d("HeaderDeclaration"),f=d("ConstructorDeclaration"),m=d("FunctionsDeclaration"),h=d("EventsDeclaration"),y=d("Enums"),v={toc:u};function b(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(g,{type:"Class",name:"Light",image:"/img/docs/light.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local my_light = Light(\n    Vector(-152, 245, 115),\n    Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types\n    Color(1, 0, 0), -- Red Tint\n    LightType.Point, -- Point Light type\n    100, -- Intensity\n    250, -- Attenuation Radius\n    44, -- Cone Angle (Relevant only for Spot light type)\n    0, -- Inner Cone Angle Percent (Relevant only for Spot light type)\n    5000, -- Max Draw Distance (Good for performance - 0 for infinite)\n    true, -- Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)\n    true, -- Cast Shadows?\n    true -- Enabled?\n)\n")),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(f,{type:"Class",name:"Light",mdxType:"ConstructorDeclaration"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"nanos world provides 3 types of lights: ",(0,o.kt)("strong",{parentName:"p"},"Spot"),", ",(0,o.kt)("strong",{parentName:"p"},"Point")," and ",(0,o.kt)("strong",{parentName:"p"},"Rect"),". All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights \ud83d\ude09.")),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(m,{type:"Class",name:"Light",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(h,{type:"Class",name:"Light",mdxType:"EventsDeclaration"}),(0,o.kt)("h2",{id:"-light-profiles"},"\ud83d\udca1 Light Profiles"),(0,o.kt)("p",null,"Light Profiles are texture files which describes a light's distribution from a light source using real world measured data."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LightingAndShadows/IESLightProfiles/"},"Unreal Engine Light Profile documentation")," for more information about Light Profiles!")),(0,o.kt)("p",null,"nanos world provides ",(0,o.kt)("strong",{parentName:"p"},"50")," Light Profiles included in the base game which you can use to enhance your Lights. You can set them using ",(0,o.kt)("inlineCode",{parentName:"p"},":SetTextureLightProfile()")," with the enum ",(0,o.kt)(y,{mdxType:"Enums"},"LightProfile"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43031).Z,width:"1144",height:"744"})))}b.isMDXComponent=!0},43031:function(e,t,n){t.Z=n.p+"assets/images/ies-pack-c7aeec8a6976c58530d04c2168420e6f.webp"}}]);
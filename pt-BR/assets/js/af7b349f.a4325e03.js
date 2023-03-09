"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9054],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),o=m(a),N=r,f=o["".concat(p,".").concat(N)]||o[N]||k[N]||l;return a?n.createElement(f,i(i({ref:e},s),{},{components:a})):n.createElement(f,i({ref:e},s))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[o]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},548:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Default Materials",description:"Default Materials and it's Parameters",tags:["assets"],keywords:["assets","materials","built-in","default"]},i=void 0,d={unversionedId:"assets-modding/default-asset-pack/default-materials",id:"assets-modding/default-asset-pack/default-materials",title:"Default Materials",description:"Default Materials and it's Parameters",source:"@site/docs/assets-modding/default-asset-pack/default-materials.md",sourceDirName:"assets-modding/default-asset-pack",slug:"/assets-modding/default-asset-pack/default-materials",permalink:"/pt-BR/docs/next/assets-modding/default-asset-pack/default-materials",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"assets",permalink:"/pt-BR/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",frontMatter:{title:"Default Materials",description:"Default Materials and it's Parameters",tags:["assets"],keywords:["assets","materials","built-in","default"]},sidebar:"main",previous:{title:"Default Asset Pack List",permalink:"/pt-BR/docs/next/assets-modding/default-asset-pack/default-assets-list"},next:{title:"Default Particles",permalink:"/pt-BR/docs/next/assets-modding/default-asset-pack/default-particles"}},p={},m=[{value:"Template Materials",id:"template-materials",level:2},{value:"Parameters Supported by Default Materials",id:"parameters-supported-by-default-materials",level:4},{value:"<strong><code>M_Default_Masked_Lit</code></strong>",id:"m_default_masked_lit",level:3},{value:"<strong><code>M_Default_Masked_Unlit</code></strong>",id:"m_default_masked_unlit",level:3},{value:"<strong><code>M_Default_Translucent_Lit</code></strong>",id:"m_default_translucent_lit",level:3},{value:"<strong><code>M_Default_Translucent_Lit_Depth</code></strong>",id:"m_default_translucent_lit_depth",level:3},{value:"<strong><code>M_Default_Translucent_Lit_Decal</code></strong>",id:"m_default_translucent_lit_decal",level:3},{value:"Special Utils Materials",id:"special-utils-materials",level:2},{value:"<strong><code>M_Noise</code></strong>",id:"m_noise",level:3},{value:"<strong><code>M_Wireframe</code></strong>",id:"m_wireframe",level:3},{value:"Materials Summary",id:"materials-summary",level:4},{value:"Supported Common Parameters in each Material",id:"supported-common-parameters-in-each-material",level:4},{value:"Physical Materials",id:"physical-materials",level:2}],s={toc:m},o="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(o,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Default Materials and it's Parameters."),(0,r.kt)("h2",{id:"template-materials"},"Template Materials"),(0,r.kt)("p",null,"nanos world provides several built-in template materials which can be easily used and customized with ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable"},"Paintable")," methods."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can create and access your own Materials Parameters if you have a Mesh which uses a Custom Material!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(12273).Z,width:"1593",height:"914"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information regarding ",(0,r.kt)("strong",{parentName:"p"},"Material Types")," and ",(0,r.kt)("strong",{parentName:"p"},"Blend Modes"),", please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialProperties/BlendModes/"},"Unreal Docs"),".")),(0,r.kt)("h4",{id:"parameters-supported-by-default-materials"},"Parameters Supported by Default Materials"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialcolorparameter"},"Color")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Tint"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Color.WHITE")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Affects ",(0,r.kt)("inlineCode",{parentName:"td"},"Base Color")," input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialtextureparameter"},"Texture")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Texture"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"White Texture"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Image which multiplies with ",(0,r.kt)("strong",{parentName:"td"},"Tint")," to generate the final color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialtextureparameter"},"Texture")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Normal"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"UP Normal Map ",(0,r.kt)("inlineCode",{parentName:"td"},"Vector(0.5, 0.5, 1)")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Image which affects how Light reflects on the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialcolorparameter"},"\u200b\u200b\u200bColor\u200b")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Emissive"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Color.BLACK")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Affects ",(0,r.kt)("inlineCode",{parentName:"td"},"Emissive")," input, high values will cause bloom effect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},"Scalar\u200b")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Metallic"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Affects ",(0,r.kt)("inlineCode",{parentName:"td"},"Metallic")," input - goes from 0 to 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},"Scalar")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Specular"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Affects ",(0,r.kt)("inlineCode",{parentName:"td"},"Specular")," input - goes from 0 to 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},"Scalar")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Roughness"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.65")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Affects ",(0,r.kt)("inlineCode",{parentName:"td"},"Roughness")," input - goes from 0 to 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialscalarparameter"},"Scalar")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Opacity"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Affects ",(0,r.kt)("inlineCode",{parentName:"td"},"Opacity")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Opacity Mask")," inputs - goes from 0 to 1 ",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Opacity")," multiplies with ",(0,r.kt)("strong",{parentName:"td"},"Texture")," Alpha Channel to generate the final opacity")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information regarding how each Parameter affects the final visual, please take a look at Unreal ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/PhysicallyBased/"},"Physically Based Materials")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/RenderingAndGraphics/Materials/MaterialInputs/"},"Material Inputs")," docs page.")),(0,r.kt)("h3",{id:"m_default_masked_lit"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Default_Masked_Lit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Masked")," and ",(0,r.kt)("strong",{parentName:"p"},"Lit")," Material."),(0,r.kt)("h3",{id:"m_default_masked_unlit"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Default_Masked_Unlit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Masked")," and ",(0,r.kt)("strong",{parentName:"p"},"Unlit")," Material."),(0,r.kt)("h3",{id:"m_default_translucent_lit"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Default_Translucent_Lit"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translucent")," and ",(0,r.kt)("strong",{parentName:"p"},"Lit")," Material."),(0,r.kt)("h3",{id:"m_default_translucent_lit_depth"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Default_Translucent_Lit_Depth"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translucent"),", ",(0,r.kt)("strong",{parentName:"p"},"Lit")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Disable Depth Test")," enabled. Is the same as Translucent but will be always visible in the screen, even behind walls or other objects."),(0,r.kt)("h3",{id:"m_default_translucent_lit_decal"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Default_Translucent_Lit_Decal"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translucent"),", ",(0,r.kt)("strong",{parentName:"p"},"Lit")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Deferred Decal")," Material Domain, to be used in ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/classes/decal"},"Decals"),"."),(0,r.kt)("h2",{id:"special-utils-materials"},"Special Utils Materials"),(0,r.kt)("h3",{id:"m_noise"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Noise"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Opaque"),", ",(0,r.kt)("strong",{parentName:"p"},"Lit")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Noise")," node to produce a noise effect. Also provides ",(0,r.kt)("inlineCode",{parentName:"p"},"Speed")," (Vector) and ",(0,r.kt)("inlineCode",{parentName:"p"},"Scale")," (Scalar) parameters."),(0,r.kt)("h3",{id:"m_wireframe"},(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"M_Wireframe"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Translucent"),", ",(0,r.kt)("strong",{parentName:"p"},"Lit")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Wireframe")," enabled, meaning it renders objects as Wireframe."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note"),": All those Materials in this page are already included in the base game in the ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/default-asset-pack/default-assets-list"},"Default nanos world Asset Pack"),", you can reference them like that: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"nanos-world::M_Default_Masked_Lit"),"."))),(0,r.kt)("h4",{id:"materials-summary"},"Materials Summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Domain"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Blend Mode"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Shading Model"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Masked_Lit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Surface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Masked"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default Lit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Masked_Unlit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Surface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Masked"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unlit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Translucent_Lit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Surface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Translucent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default Lit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Translucent_Lit_Depth")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Surface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Translucent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default Lit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Translucent_Lit_Decal")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deferred Decal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Translucent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default Lit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Noise")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Surface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Opaque"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default Lit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Wireframe")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Surface"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Translucent"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default Lit")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Opaque")," are the most efficient ones but doesn't support ",(0,r.kt)("strong",{parentName:"p"},"Opacity")," or ",(0,r.kt)("strong",{parentName:"p"},"Opacity Mask"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Masked")," are the most common ones and supports ",(0,r.kt)("strong",{parentName:"p"},"Opacity Mask")," only. It means the ",(0,r.kt)("strong",{parentName:"p"},"Opacity")," parameter accepts only ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Translucent")," are the heavier ones to render, and cause a lot of overdraw (and performance issues) if used incorrectly. It supports ",(0,r.kt)("strong",{parentName:"p"},"Opacity")," but does not support ",(0,r.kt)("strong",{parentName:"p"},"Normal"),", ",(0,r.kt)("strong",{parentName:"p"},"Metallic,")," ",(0,r.kt)("strong",{parentName:"p"},"Specular")," and ",(0,r.kt)("strong",{parentName:"p"},"Roughness")," inputs by default for optimization reasons.")),(0,r.kt)("h4",{id:"supported-common-parameters-in-each-material"},"Supported Common Parameters in each Material"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Tint"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Texture"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Normal"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Emissive"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Metallic"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Specular"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Roughness"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Opacity"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Masked_Lit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Masked_Unlit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true*"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Translucent_Lit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Translucent_Lit_Depth")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Default_Translucent_Lit_Decal")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Noise")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"M_Wireframe")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*",(0,r.kt)("em",{parentName:"p"},"Masked Material's Opacity supports only Opacity Mask: ",(0,r.kt)("inlineCode",{parentName:"em"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"1")))),(0,r.kt)("h2",{id:"physical-materials"},"Physical Materials"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/Physics/PhysicalMaterials/"},"Physical Materials")," are materials which define Physical properties of an object. With ",(0,r.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable#setphysicalmaterial"},"Paintable.SetPhysicalMaterial()")," you can change the default physical material of an Entity."),(0,r.kt)("p",null,"Besides the Physical Properties of an object (friction, restitution, density, etc), Physical Materials are used in nanos world for applying special effects and sounds when events happen. For example on Footsteps Effects, Bullets Impacts or Objects Hits."),(0,r.kt)("p",null,"nanos world provides a list of the built-in Physical Materials which you can use to override in-game the Physical properties of an Entity."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You also can create your own Physical Materials and use them in-game! Just remember to configure in them the proper ",(0,r.kt)("strong",{parentName:"p"},"SurfaceType")," for a better integration!")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Friction"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Restitution"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Density"),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"th",href:"/pt-BR/docs/next/scripting-reference/glossary/enums#surfacetype"},"Surface Type")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Concrete")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.9")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Concrete"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Flesh")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Flesh"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Glass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.2")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.2")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Glass"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Grass")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Grass"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Gravel")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Gravel"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Ground")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Ground"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Metal")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.6")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.MetalHeavy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_MetalLight")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.6")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.2")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.MetalLight"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Mud")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Mud"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Plastic")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Plastic"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Rock")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.9")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Rock"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Rubber")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Rubber"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_RubberBouncy")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.05")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.9")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Rubber"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Sand")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.6")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Sand"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Water")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.Water"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_Wood")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.WoodLight"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PM_WoodHeavy")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.7")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SurfaceType.WoodHeavy"))))))}k.isMDXComponent=!0},12273:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/default-materials-01-a24917bb794128d17ff4654b0af299dd.jpg"}}]);
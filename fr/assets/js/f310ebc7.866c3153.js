"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4225],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),g=c(r),d=i,u=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return r?n.createElement(u,o(o({ref:t},h),{},{components:r})):n.createElement(u,o({ref:t},h))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",tags:["tutorial-example","scripting"]},o=void 0,l={unversionedId:"getting-started/tutorials-and-examples/x-ray-and-highlight",id:"version-latest/getting-started/tutorials-and-examples/x-ray-and-highlight",title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/x-ray-and-highlight.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/x-ray-and-highlight",permalink:"/fr/docs/getting-started/tutorials-and-examples/x-ray-and-highlight",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1679061318,formattedLastUpdatedAt:"17 mars 2023",frontMatter:{title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",tags:["tutorial-example","scripting"]},sidebar:"version-latest/main",previous:{title:"Weapon Scope",permalink:"/fr/docs/getting-started/tutorials-and-examples/weapon-scope"},next:{title:"Spawn Menu",permalink:"/fr/docs/getting-started/sandbox-game-mode/spawn-menu"}},s={},c=[{value:"To configure the global Highlight color for a specific index, use:",id:"to-configure-the-global-highlight-color-for-a-specific-index-use",level:4},{value:"To enable the Highlight to a specific actor, use:",id:"to-enable-the-highlight-to-a-specific-actor-use",level:4}],h={toc:c},g="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(83117).Z,width:"2628",height:"1076"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As highlighting is something calculated in Post Processing, it is really hard to define custom colors for individual entities."),(0,i.kt)("p",{parentName:"admonition"},"Fortunately nanos world supports having ",(0,i.kt)("strong",{parentName:"p"},"3")," different colors which you can configure yourself!")),(0,i.kt)("h4",{id:"to-configure-the-global-highlight-color-for-a-specific-index-use"},"To configure the global Highlight color for a specific index, use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Client.SetHighlightColor(highlight_color, index, mode)")),(0,i.kt)("h4",{id:"to-enable-the-highlight-to-a-specific-actor-use"},"To enable the Highlight to a specific actor, use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"my_entity:SetHighlightEnabled(true, index)")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Valid indexes are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"0")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"1"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"2")),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Sets the Global desired Highlight color\n-- Higher color values make it glow (e.g. Color(100, 0, 0))\nlocal highlight_color = Color(10, 2.5, 0)\nClient.SetHighlightColor(highlight_color, 0, HighlightMode.Always)\n\n-- Setting all Characters to highlight\nCharacter.Subscribe("Spawn", function(character)\n    character:SetHighlightEnabled(true, 0)\nend)\n')))}p.isMDXComponent=!0},83117:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xray-287454b05deb57cb4edc851fc16ae414.webp"}}]);
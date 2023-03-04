"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=r,u=g["".concat(s,".").concat(p)]||g[p]||d[p]||a;return n?i.createElement(u,o(o({ref:t},h),{},{components:n})):i.createElement(u,o({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",tags:["tutorial-example","scripting"]},o=void 0,l={unversionedId:"getting-started/tutorials-and-examples/x-ray-and-highlight",id:"getting-started/tutorials-and-examples/x-ray-and-highlight",title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",source:"@site/docs/getting-started/tutorials-and-examples/x-ray-and-highlight.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/x-ray-and-highlight",permalink:"/de/docs/next/getting-started/tutorials-and-examples/x-ray-and-highlight",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Weapon Scope",permalink:"/de/docs/next/getting-started/tutorials-and-examples/weapon-scope"},next:{title:"Spawn Menu",permalink:"/de/docs/next/getting-started/sandbox-game-mode/spawn-menu"}},s={},c=[{value:"To configure the global Highlight color for a specific index, use:",id:"to-configure-the-global-highlight-color-for-a-specific-index-use",level:4},{value:"To enable the Highlight to a specific actor, use:",id:"to-enable-the-highlight-to-a-specific-actor-use",level:4}],h={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83117).Z,width:"2628",height:"1076"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As highlighting is something calculated in Post Processing, it is really hard to define custom colors for individual entities."),(0,r.kt)("p",{parentName:"admonition"},"Fortunately nanos world supports having ",(0,r.kt)("strong",{parentName:"p"},"3")," different colors which you can configure yourself!")),(0,r.kt)("h4",{id:"to-configure-the-global-highlight-color-for-a-specific-index-use"},"To configure the global Highlight color for a specific index, use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Client.SetHighlightColor(highlight_color, index, mode)")),(0,r.kt)("h4",{id:"to-enable-the-highlight-to-a-specific-actor-use"},"To enable the Highlight to a specific actor, use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"my_entity:SetHighlightEnabled(true, index)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Valid indexes are ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"0")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"1"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"2")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Sets the Global desired Highlight color\n-- Higher color values make it glow (e.g. Color(100, 0, 0))\nlocal highlight_color = Color(10, 2.5, 0)\nClient.SetHighlightColor(highlight_color, 0, HighlightMode.Always)\n\n-- Setting all Characters to highlight\nCharacter.Subscribe("Spawn", function(character)\n    character:SetHighlightEnabled(true, 0)\nend)\n')))}d.isMDXComponent=!0},83117:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/xray-287454b05deb57cb4edc851fc16ae414.webp"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const o={title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},r=void 0,i={unversionedId:"getting-started/tutorials-and-examples/weapon-scope",id:"version-latest/getting-started/tutorials-and-examples/weapon-scope",title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/weapon-scope.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-scope",permalink:"/de/docs/getting-started/tutorials-and-examples/weapon-scope",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/tags/scripting"},{label:"assets",permalink:"/de/docs/tags/assets"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9. M\xe4rz 2023",frontMatter:{title:"Weapon Scope",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",tags:["tutorial-example","scripting","assets"]},sidebar:"version-latest/main",previous:{title:"Weapon Flashlight",permalink:"/de/docs/getting-started/tutorials-and-examples/weapon-flashlight"},next:{title:"X-Ray & Highlight",permalink:"/de/docs/getting-started/tutorials-and-examples/x-ray-and-highlight"}},l={},c=[{value:"Some Static Mesh assets which can be used as scope:",id:"some-static-mesh-assets-which-can-be-used-as-scope",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(42146).Z,width:"1918",height:"1022"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawning the AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Adds a StaticMesh Attached with a RedDot mesh into AK47 on sight_socket bone from AK47 model. As our AK47 model already\n-- have a bone named sight_socket at the right location, we can just attach to it, otherwise we would\n-- need to set it\'s Attach Location to where the RedDot fits and using bone name as empty ""\nmy_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")\n\n-- Makes the FOV multiplier reduces by 0.35x when ADS (aiming)\nmy_ak47.SightFOVMultiplier = 0.35\n\n-- Sets the ADS transform offset to fit the RedDot center position,\n-- each weapon will need a different offset to fit it\'s sight. AK47 + RedDot best fit is Z = -15.9\nmy_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))\n')),(0,s.kt)("h2",{id:"some-static-mesh-assets-which-can-be-used-as-scope"},"Some Static Mesh assets which can be used as scope:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_T4_Sight")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Vertgrip")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Suppressor")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Scope_25x56_X"))))}u.isMDXComponent=!0},42146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weapon-scope-abab608d65ff37a5b3f3c71736ec1cc5.webp"}}]);
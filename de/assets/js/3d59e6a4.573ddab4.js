"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Version 1.22",description:"How to update your packages to version 1.22",tags:["scripting","migration"]},s=void 0,a={unversionedId:"compatibility-versions/1_22",id:"version-latest/compatibility-versions/1_22",title:"Version 1.22",description:"How to update your packages to version 1.22",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/compatibility-versions/1_22.md",sourceDirName:"compatibility-versions",slug:"/compatibility-versions/1_22",permalink:"/de/docs/compatibility-versions/1_22",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/compatibility-versions/1_22.md",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"},{label:"migration",permalink:"/de/docs/tags/migration"}],version:"latest",frontMatter:{title:"Version 1.22",description:"How to update your packages to version 1.22",tags:["scripting","migration"]},sidebar:"version-latest/main",previous:{title:"Vault",permalink:"/de/docs/vault-and-store/vault"}},c={},l=[{value:"Events.Subscribe",id:"eventssubscribe",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All breaking changes in version 1.22."),(0,o.kt)("p",null,"In version 1.22 we introduced the concept of ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/packages/packages-guide#compatibility-version"},"Compatibility Version"),". Besides that, we've got just one breaking change:"),(0,o.kt)("h2",{id:"eventssubscribe"},"Events.Subscribe"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Events.Subscribe")," now only subscribes to local events (ones called as ",(0,o.kt)("strong",{parentName:"p"},"Events.Call"),"). If you want to subscribe to remote events (ones called as ",(0,o.kt)("strong",{parentName:"p"},"Events.CallRemote")," or ",(0,o.kt)("strong",{parentName:"p"},"Events.BroadcastRemote"),"), please use ",(0,o.kt)("inlineCode",{parentName:"p"},"Events.SubscribeRemote"),"."),(0,o.kt)("p",null,"In compatibility mode (i.e. setting it to ",(0,o.kt)("inlineCode",{parentName:"p"},"1.21")," or below) ",(0,o.kt)("inlineCode",{parentName:"p"},"Events.Subscribe")," still subscribes for both Local and Remote events."))}u.isMDXComponent=!0}}]);
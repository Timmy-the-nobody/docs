"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9061],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],i={title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:0,tags:["assets"],keywords:["assets","ADK","import","unreal"]},l=void 0,p={unversionedId:"assets-modding/creating-assets/setting-up-ue",id:"version-latest/assets-modding/creating-assets/setting-up-ue",title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/setting-up-ue.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/setting-up-ue",permalink:"/docs/assets-modding/creating-assets/setting-up-ue",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/setting-up-ue.md",tags:[{label:"assets",permalink:"/docs/tags/assets"}],version:"latest",lastUpdatedBy:"Yoshi",lastUpdatedAt:1664975005,formattedLastUpdatedAt:"Oct 5, 2022",sidebarPosition:0,frontMatter:{title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:0,tags:["assets"],keywords:["assets","ADK","import","unreal"]},sidebar:"version-latest/main",previous:{title:"Enums",permalink:"/docs/scripting-reference/glossary/enums"},next:{title:"Assets Development Kit",permalink:"/docs/assets-modding/creating-assets/adk-assets-development-kit"}},d={},c=[{value:"On Windows",id:"on-windows",level:2},{value:"On Linux",id:"on-linux",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to set up Unreal Engine to import assets into nanos world"),(0,a.kt)("p",null,"Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Little by little we are able to allow loading some assets without the need of cooking them through Unreal, such as the already supported ",(0,a.kt)("strong",{parentName:"p"},"Textures")," and ",(0,a.kt)("strong",{parentName:"p"},"Sounds"),".")),(0,a.kt)("p",null,"The first step for creating your own Assets, is downloading and installing Unreal Engine."),(0,a.kt)("h2",{id:"on-windows"},"On Windows"),(0,a.kt)("p",null,"On Windows, the download of Unreal Engine must be done from inside ",(0,a.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/download"},"Epic Games Launcher"),". Please download and install it before proceeding to the Unreal installation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Epic Games Launcher."),(0,a.kt)("li",{parentName:"ol"},"Access ",(0,a.kt)("strong",{parentName:"li"},"Unreal Engine")," tab."),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Library")," tab."),(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"))," and select the correct ",(0,a.kt)("strong",{parentName:"li"},"Unreal Engine")," version (currently nanos world is on ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"5.0.X")),")."),(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"Install")," and a Popup will appear."),(0,a.kt)("li",{parentName:"ol"},"Select an installation folder and press ",(0,a.kt)("inlineCode",{parentName:"li"},"Install"),".")),(0,a.kt)("h2",{id:"on-linux"},"On Linux"),(0,a.kt)("p",null,"If you are on Linux, Epic Games is releasing standalone binaries which can be downloaded directly from their site. Download the latest Unreal Engine version ",(0,a.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/linux"},"here"),"."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"After downloading Unreal Engine, launch it once to finish the engine installation."),(0,a.kt)("p",null,"And you are ready to proceed to the next step to download and use the Assets Development Kit!"))}m.isMDXComponent=!0}}]);
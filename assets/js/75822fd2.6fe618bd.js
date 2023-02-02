"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?s.createElement(g,a(a({ref:t},p),{},{components:n})):s.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<r;d++)a[d]=n[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(87462),o=(n(67294),n(3905));const r={title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:0,tags:["assets"],keywords:["assets","ADK","import","unreal"]},a=void 0,i={unversionedId:"assets-modding/creating-assets/setting-up-ue",id:"assets-modding/creating-assets/setting-up-ue",title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",source:"@site/docs/assets-modding/creating-assets/setting-up-ue.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/setting-up-ue",permalink:"/docs/next/assets-modding/creating-assets/setting-up-ue",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/setting-up-ue.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1675332156,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:0,frontMatter:{title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:0,tags:["assets"],keywords:["assets","ADK","import","unreal"]},sidebar:"main",previous:{title:"Enums",permalink:"/docs/next/scripting-reference/glossary/enums"},next:{title:"Assets Development Kit",permalink:"/docs/next/assets-modding/creating-assets/adk-assets-development-kit"}},l={},d=[{value:"On Windows",id:"on-windows",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:".NET Core 3.1",id:"net-core-31",level:4},{value:"Windows 10 SDK",id:"windows-10-sdk",level:4},{value:"On Linux",id:"on-linux",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to set up Unreal Engine to import assets into nanos world"),(0,o.kt)("p",null,"Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Little by little we are able to allow loading some assets without the need of cooking them through Unreal, such as the already supported ",(0,o.kt)("strong",{parentName:"p"},"Textures")," and ",(0,o.kt)("strong",{parentName:"p"},"Sounds"),".")),(0,o.kt)("p",null,"The first step for creating your own Assets, is downloading and installing Unreal Engine."),(0,o.kt)("h2",{id:"on-windows"},"On Windows"),(0,o.kt)("p",null,"On Windows, the download of Unreal Engine must be done from inside ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/download"},"Epic Games Launcher"),". Please download and install it before proceeding to the Unreal installation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Epic Games Launcher."),(0,o.kt)("li",{parentName:"ol"},"Access ",(0,o.kt)("strong",{parentName:"li"},"Unreal Engine")," tab."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Library")," tab."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"+"))," and select the correct ",(0,o.kt)("strong",{parentName:"li"},"Unreal Engine")," version (currently nanos world is on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"5.1.X")),")."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Install")," and a Popup will appear."),(0,o.kt)("li",{parentName:"ol"},"Select an installation folder and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Install"),".")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Since newer versions of Unreal, it's required to install some SDKs to be able to cook assets on it. You can install them directly by downloading from Microsoft websites, or using Visual Studio Installer if you already have it installed."),(0,o.kt)("h4",{id:"net-core-31"},".NET Core 3.1"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/3.1"},".NET Core 3.1")," directly from Microsoft website."),(0,o.kt)("h4",{id:"windows-10-sdk"},"Windows 10 SDK"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(recommended) If you have ",(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/downloads/"},"Visual Studio")," installed, you can use Visual Studio Installer to install Windows 10 SDK through there. Just open the ",(0,o.kt)("strong",{parentName:"li"},"Individual components")," tab and install ",(0,o.kt)("inlineCode",{parentName:"li"},"Windows 10 SDK (10.0.20348.0)"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows 10 SDK Installation",src:n(44134).Z,width:"645",height:"247"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Otherwise, you can install Windows 10 SDK directly from ",(0,o.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/"},"Microsoft website")," and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Windows SDK for Desktop C++ amd64 Apps"),":")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows 10 SDK Installation",src:n(68011).Z,width:"743",height:"545"})),(0,o.kt)("h2",{id:"on-linux"},"On Linux"),(0,o.kt)("p",null,"If you are on Linux, Epic Games is releasing standalone binaries which can be downloaded directly from their site. Download the latest Unreal Engine version ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/linux"},"here"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"After downloading Unreal Engine, launch it once to finish the engine installation."),(0,o.kt)("p",null,"And you are ready to proceed to the next step to download and use the Assets Development Kit!"))}c.isMDXComponent=!0},44134:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/windows-10-sdk-vs-dec3bc0c62fbfb1f998d71d5f41986cd.webp"},68011:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/windows-10-sdk-a58e251f9068b676c68d29cd610ed747.webp"}}]);
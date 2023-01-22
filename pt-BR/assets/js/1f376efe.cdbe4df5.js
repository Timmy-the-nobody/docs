"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const l={title:"M\xf3dulos",description:"Estendendo as funcionalidades da Scripting API do nanos world"},a=void 0,i={unversionedId:"core-concepts/modules",id:"version-latest/core-concepts/modules",title:"M\xf3dulos",description:"Estendendo as funcionalidades da Scripting API do nanos world",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/pt-BR/docs/core-concepts/modules",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[],version:"latest",frontMatter:{title:"M\xf3dulos",description:"Estendendo as funcionalidades da Scripting API do nanos world"},sidebar:"version-latest/main",previous:{title:"Assets Guide",permalink:"/pt-BR/docs/core-concepts/assets"},next:{title:"Ciclo de Vida do Server & Client",permalink:"/pt-BR/docs/core-concepts/server-and-client-lifecycle"}},d={},s=[{value:"Creating your own C module",id:"creating-your-own-c-module",level:2},{value:"First Steps",id:"first-steps",level:4},{value:"Understanding the example",id:"understanding-the-example",level:3},{value:"Compiling your C module",id:"compiling-your-c-module",level:3},{value:"Using your C module",id:"using-your-c-module",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Estendendo as funcionalidades da Scripting API do nanos world"),(0,r.kt)("p",null,"M\xf3dulos permitem que voc\xea estenda a funcionalidade da API de script do nanos world no lado do servidor. Atualmente apenas m\xf3dulos C s\xe3o suportados."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Esteja ciente de que esta parte da API de script \xe9 atualmente um 'trabalho em progresso' e pode mudar a qualquer momento.")),(0,r.kt)("h2",{id:"creating-your-own-c-module"},"Creating your own C module"),(0,r.kt)("p",null,"It is also possible to you create your own C/C++ module and call it's functions from nanos world."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is an advanced procedure so instabilities and even crashes may occur.")),(0,r.kt)("p",null,"To create your own module, fist make sure you have ",(0,r.kt)("strong",{parentName:"p"},"Visual Studio")," installed with ",(0,r.kt)("strong",{parentName:"p"},"Desktop development with C++")," (and ",(0,r.kt)("strong",{parentName:"p"},"CMake"),") or any other C compiler on Linux."),(0,r.kt)("h4",{id:"first-steps"},"First Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Then, clone our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/module-example"},"example module")," in your computer to get start with it."),(0,r.kt)("li",{parentName:"ol"},"After cloning, you will need to download it's submodules with ",(0,r.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive")," - this will download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nanos-world/module-sdk/"},"module-sdk")," as a git submodule into deps/ folder automatically.")),(0,r.kt)("h3",{id:"understanding-the-example"},"Understanding the example"),(0,r.kt)("p",null,"The important file is under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/example.cpp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp\n")),(0,r.kt)("h3",{id:"compiling-your-c-module"},"Compiling your C module"),(0,r.kt)("p",null,"To compile the example, follow the steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a folder called ",(0,r.kt)("inlineCode",{parentName:"li"},"build/"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"mkdir build"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the build folder: ",(0,r.kt)("inlineCode",{parentName:"li"},"cd build"),"."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"cmake .."),"."),(0,r.kt)("li",{parentName:"ol"},"Build it with ",(0,r.kt)("inlineCode",{parentName:"li"},"cmake --build . --config Release"))),(0,r.kt)("p",null,"And now you will have the dlls/libs in ",(0,r.kt)("inlineCode",{parentName:"p"},"build/Release")," folder."),(0,r.kt)("h3",{id:"using-your-c-module"},"Using your C module"),(0,r.kt)("p",null,"Now copy the ",(0,r.kt)("inlineCode",{parentName:"p"},".dll")," file into your nanos world ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Modules")," folder."),(0,r.kt)("p",null,"And in your Package, you can load and use it like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Loads the module 'example'\nlocal example = require('example')\n\n-- Calls the module function 'test'\n-- Will print 'Hello World' on console\nPackage.Log(example.test())\n")))}p.isMDXComponent=!0}}]);
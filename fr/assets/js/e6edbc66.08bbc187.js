"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2843],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={title:"Modules",description:"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world"},s=void 0,d={unversionedId:"core-concepts/modules",id:"version-latest/core-concepts/modules",title:"Modules",description:"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/fr/docs/core-concepts/modules",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/modules.md",tags:[],version:"latest",frontMatter:{title:"Modules",description:"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world"},sidebar:"version-latest/main",previous:{title:"Assets",permalink:"/fr/docs/core-concepts/assets"},next:{title:"Cycle de vie du Serveur & du Client",permalink:"/fr/docs/core-concepts/server-and-client-lifecycle"}},c={},p=[{value:"Cr\xe9er votre propre module C",id:"cr\xe9er-votre-propre-module-c",level:2},{value:"Premi\xe8res \xe9tapes",id:"premi\xe8res-\xe9tapes",level:4},{value:"Comprendre l&#39;exemple",id:"comprendre-lexemple",level:3},{value:"Compilation de votre module C",id:"compilation-de-votre-module-c",level:3},{value:"Utilisation de votre module C",id:"utilisation-de-votre-module-c",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world"),(0,a.kt)("p",null,"Les modules vous permettent d'\xe9tendre les fonctionnalit\xe9s de l'API de scripting de nanos world c\xf4t\xe9 serveur. Actuellement, seuls les modules C sont pris en charge."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Sachez que cette partie de l'API de scripting est actuellement en cours de r\xe9alisation et peut \xeatre modifi\xe9e \xe0 tout moment."))),(0,a.kt)("h2",{id:"cr\xe9er-votre-propre-module-c"},"Cr\xe9er votre propre module C"),(0,a.kt)("p",null,"Il est \xe9galement possible de cr\xe9er votre propre module C/C++ et d'appeler ses fonctions depuis Nanos World."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Comme il s'agit d'une proc\xe9dure avanc\xe9e, des instabilit\xe9s, voire des crashs, peuvent se produire."))),(0,a.kt)("p",null,"Pour cr\xe9er votre propre module, assurez-vous que vous avez ",(0,a.kt)("strong",{parentName:"p"},"Visual Studio")," install\xe9 avec ",(0,a.kt)("strong",{parentName:"p"},"D\xe9veloppement Desktop en C++ ")," (et ",(0,a.kt)("strong",{parentName:"p"},"CMake"),") ou tout autre compilateur C sous Linux."),(0,a.kt)("h4",{id:"premi\xe8res-\xe9tapes"},"Premi\xe8res \xe9tapes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ensuite, clonez notre ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/module-example"},"module d'exemple")," dans votre ordinateur pour commencer \xe0 l'utiliser."),(0,a.kt)("li",{parentName:"ol"},"Apr\xe8s le clonage, vous devrez t\xe9l\xe9charger ses submodules avec ",(0,a.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive")," - ceci t\xe9l\xe9chargera le sdk du module ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nanos-world/module-sdk/"},"module-sdk")," comme un sous-module git dans le dossier deps/ automatiquement.")),(0,a.kt)("h3",{id:"comprendre-lexemple"},"Comprendre l'exemple"),(0,a.kt)("p",null,"Le fichier important se trouve dans ",(0,a.kt)("inlineCode",{parentName:"p"},"src/example.cpp")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp\n")),(0,a.kt)("h3",{id:"compilation-de-votre-module-c"},"Compilation de votre module C"),(0,a.kt)("p",null,"Pour compiler l'exemple, suivez les \xe9tapes suivantes :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cr\xe9ez un dossier appel\xe9 : ",(0,a.kt)("inlineCode",{parentName:"li"},"build/"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"mkdir build"),"."),(0,a.kt)("li",{parentName:"ol"},"Entrez le dossier du build: ",(0,a.kt)("inlineCode",{parentName:"li"},"cd build"),"."),(0,a.kt)("li",{parentName:"ol"},"Lancez ",(0,a.kt)("inlineCode",{parentName:"li"},"cmake .."),"."),(0,a.kt)("li",{parentName:"ol"},"Faites un build avec ",(0,a.kt)("inlineCode",{parentName:"li"},"cmake --build . --config Release"))),(0,a.kt)("p",null,"Et maintenant vous aurez les dlls/libs dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"build/Release"),"."),(0,a.kt)("h3",{id:"utilisation-de-votre-module-c"},"Utilisation de votre module C"),(0,a.kt)("p",null,"Copiez votre fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".dll")," dans votre dossier Nanos World : ",(0,a.kt)("inlineCode",{parentName:"p"},"Server/Modules"),"."),(0,a.kt)("p",null,"Et dans votre package, vous pouvez le charger et l'utiliser :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Charge le module 'exemple'.\nlocal example = require('exemple')\n\n-- Appelle la fonction \"test\" du module\n-- Print 'Hello World'\nPackage.Log(exemple.test())\n")))}m.isMDXComponent=!0}}]);
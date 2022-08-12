"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2843],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20285:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),l=(n(67294),n(3905)),i=["components"],a={title:"Modules",description:"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world"},s=void 0,u={unversionedId:"core-concepts/modules",id:"version-latest/core-concepts/modules",title:"Modules",description:"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/modules.md",sourceDirName:"core-concepts",slug:"/core-concepts/modules",permalink:"/fr/docs/core-concepts/modules",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/modules.md",tags:[],version:"latest",frontMatter:{title:"Modules",description:"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world"},sidebar:"version-latest/main",previous:{title:"Assets",permalink:"/fr/docs/core-concepts/assets"},next:{title:"Cycle de vie du Serveur & du Client",permalink:"/fr/docs/core-concepts/server-and-client-lifecycle"}},p={},d=[{value:"Cr\xe9er votre propre module C",id:"cr\xe9er-votre-propre-module-c",level:2},{value:"Premi\xe8res \xe9tapes",id:"premi\xe8res-\xe9tapes",level:4},{value:"Comprendre l&#39;exemple",id:"comprendre-lexemple",level:3},{value:"Compilation de votre module C",id:"compilation-de-votre-module-c",level:3},{value:"Utilisation de votre module C",id:"utilisation-de-votre-module-c",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Extension des fonctionnalit\xe9s de l'API de scripting de nanos world"),(0,l.kt)("p",null,"Les modules vous permettent d'\xe9tendre les fonctionnalit\xe9s de l'API de scripting de nanos world c\xf4t\xe9 serveur. Actuellement, seuls les modules C sont pris en charge."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Sachez que cette partie de l'API de scripting est actuellement en cours de r\xe9alisation et peut \xeatre modifi\xe9e \xe0 tout moment.")),(0,l.kt)("h2",{id:"cr\xe9er-votre-propre-module-c"},"Cr\xe9er votre propre module C"),(0,l.kt)("p",null,"Il est \xe9galement possible de cr\xe9er votre propre module C/C++ et d'appeler ses fonctions depuis Nanos World."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Comme il s'agit d'une proc\xe9dure avanc\xe9e, des instabilit\xe9s, voire des crashs, peuvent se produire.")),(0,l.kt)("p",null,"Pour cr\xe9er votre propre module, assurez-vous que vous avez ",(0,l.kt)("strong",{parentName:"p"},"Visual Studio")," install\xe9 avec ",(0,l.kt)("strong",{parentName:"p"},"D\xe9veloppement Desktop en C++ ")," (et ",(0,l.kt)("strong",{parentName:"p"},"CMake"),") ou tout autre compilateur C sous Linux."),(0,l.kt)("h4",{id:"premi\xe8res-\xe9tapes"},"Premi\xe8res \xe9tapes"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Ensuite, clonez notre ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nanos-world-modules/module-example"},"module d'exemple")," dans votre ordinateur pour commencer \xe0 l'utiliser."),(0,l.kt)("li",{parentName:"ol"},"Apr\xe8s le clonage, vous devrez t\xe9l\xe9charger ses submodules avec ",(0,l.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive")," - ceci t\xe9l\xe9chargera le sdk du module ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nanos-world/module-sdk/"},"module-sdk")," comme un sous-module git dans le dossier deps/ automatiquement.")),(0,l.kt)("h3",{id:"comprendre-lexemple"},"Comprendre l'exemple"),(0,l.kt)("p",null,"Le fichier important se trouve dans ",(0,l.kt)("inlineCode",{parentName:"p"},"src/example.cpp")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp",metastring:"reference",reference:!0},"https://github.com/nanos-world-modules/module-example/blob/main/src/example.cpp\n")),(0,l.kt)("h3",{id:"compilation-de-votre-module-c"},"Compilation de votre module C"),(0,l.kt)("p",null,"Pour compiler l'exemple, suivez les \xe9tapes suivantes :"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Cr\xe9ez un dossier appel\xe9 : ",(0,l.kt)("inlineCode",{parentName:"li"},"build/"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"mkdir build"),"."),(0,l.kt)("li",{parentName:"ol"},"Entrez le dossier du build: ",(0,l.kt)("inlineCode",{parentName:"li"},"cd build"),"."),(0,l.kt)("li",{parentName:"ol"},"Lancez ",(0,l.kt)("inlineCode",{parentName:"li"},"cmake .."),"."),(0,l.kt)("li",{parentName:"ol"},"Faites un build avec ",(0,l.kt)("inlineCode",{parentName:"li"},"cmake --build . --config Release"))),(0,l.kt)("p",null,"Et maintenant vous aurez les dlls/libs dans le dossier ",(0,l.kt)("inlineCode",{parentName:"p"},"build/Release"),"."),(0,l.kt)("h3",{id:"utilisation-de-votre-module-c"},"Utilisation de votre module C"),(0,l.kt)("p",null,"Copiez votre fichier ",(0,l.kt)("inlineCode",{parentName:"p"},".dll")," dans votre dossier Nanos World : ",(0,l.kt)("inlineCode",{parentName:"p"},"Server/Modules"),"."),(0,l.kt)("p",null,"Et dans votre package, vous pouvez le charger et l'utiliser :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Charge le module 'exemple'.\nlocal example = require('exemple')\n\n-- Appelle la fonction \"test\" du module\n-- Print 'Hello World'\nPackage.Log(exemple.test())\n")))}m.isMDXComponent=!0}}]);
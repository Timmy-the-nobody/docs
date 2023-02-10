"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9032],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(s),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return s?n.createElement(g,i(i({ref:t},c),{},{components:s})):n.createElement(g,i({ref:t},c))}));function m(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=s[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},81917:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=s(87462),a=(s(67294),s(3905));const r={title:"Guide des classes",description:"Tout ce que vous devez savoir sur les Classes",sidebar_position:0,tags:["scripting"]},i=void 0,o={unversionedId:"core-concepts/scripting/classes-guide",id:"version-latest/core-concepts/scripting/classes-guide",title:"Guide des classes",description:"Tout ce que vous devez savoir sur les Classes",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/fr/docs/core-concepts/scripting/classes-guide",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",sidebarPosition:0,frontMatter:{title:"Guide des classes",description:"Tout ce que vous devez savoir sur les Classes",sidebar_position:0,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Compatibility Versions",permalink:"/fr/docs/core-concepts/packages/compatibility-versions"},next:{title:"Events Guide",permalink:"/fr/docs/core-concepts/scripting/events-guide"}},l={},p=[{value:"Classes",id:"classes",level:2},{value:"Classes de base",id:"classes-de-base",level:3},{value:"Apparition d&#39;Entit\xe9s",id:"apparition-dentit\xe9s",level:3},{value:"Destruction d&#39;Entit\xe9s",id:"destruction-dentit\xe9s",level:3},{value:"Classes statiques",id:"classes-statiques",level:2},{value:"Classes utilitaires",id:"classes-utilitaires",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tout ce que vous devez savoir sur les Classes"),(0,a.kt)("p",null,"Toutes les entit\xe9s du monde nanos sont repr\xe9sent\xe9es par une Classe. In Lua, classes are represented by ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/glossary/basic-types#table"},"tables"),". Cela signifie que chaque interaction avec les entit\xe9s (joueurs, personnages, props, etc) est faite avec des m\xe9thodes de classe/tables suivant un sch\xe9ma ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","programmation orient\xe9e objet"),")",". Dans cette page, nous allons en expliquer plus \xe0 ce sujet."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Dans le monde de nanos, nous avons 3 types de Classes (ou structures) : ",(0,a.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Static Classes")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Utility Classes"),".")),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("p",null,"If you read our ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- Fait appara\xeetre une entit\xe9 avec un constructeur\nlocal mon_entite = Entity()\n\n-- Interagir avec l'entit\xe9 avec ses m\xe9thodes\nmon_entite:MaFonction()\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"L'acc\xe8s aux ",(0,a.kt)("strong",{parentName:"p"},"m\xe9thodes")," des ",(0,a.kt)("strong",{parentName:"p"},"Entit\xe9s / Objets")," sont faits avec ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},":")),".")),(0,a.kt)("p",null,"Voici comment l'",(0,a.kt)("strong",{parentName:"p"},"OOP")," fonctionne ! Vous cr\xe9ez des objets et appelez des fonctions/\xe9v\xe9nements de capture sur cet objet. Contrairement aux autres jeux de script qui ont des tonnes de fonctions et d'\xe9v\xe9nements globaux pour interagir avec des entit\xe9s, le scripting sur Nanos World utilise une ",(0,a.kt)("strong",{parentName:"p"},"approche moderne")," de ",(0,a.kt)("strong",{parentName:"p"},"programmation moderne"),"."),(0,a.kt)("h3",{id:"classes-de-base"},"Classes de base"),(0,a.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),', which means we have base parent classes, and it\'s children which "inherits" all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ',(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/character"},"Character")," and ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/prop"},"Prop")," it is possible to call the function: ",(0,a.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. Elle contient la plupart des m\xe9thodes qui sont partag\xe9es dans toutes les classes que nous avons, et aussi des ",(0,a.kt)("strong",{parentName:"p"},"M\xe9thodes statiques")," pour r\xe9cup\xe9rer les entit\xe9s directement.")),(0,a.kt)("h3",{id:"apparition-dentit\xe9s"},"Apparition d'Entit\xe9s"),(0,a.kt)("p",null,"Faire appara\xeetre des entit\xe9s dans Nanos World est extr\xeamement facile et simple, disons que nous voulons faire appara\xeetre un personnage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"local mon_personnage = Character()\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Chaque classe contiendra son propre ",(0,a.kt)("strong",{parentName:"p"},"Constructeur"),", ",(0,a.kt)("strong",{parentName:"p"},"Propri\xe9t\xe9s"),", ",(0,a.kt)("strong",{parentName:"p"},"M\xe9thodes")," et ",(0,a.kt)("strong",{parentName:"p"},"\xc9v\xe9nements"),"."),(0,a.kt)("p",{parentName:"admonition"},"Regardez toutes les classes que Nanos World fournit dans la barre lat\xe9rale ",(0,a.kt)("strong",{parentName:"p"},"R\xe9f\xe9rence de Scripting -> Classes"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Gardez \xe0 l'esprit que certaines classes ne peuvent \xeatre cr\xe9\xe9es que par le ",(0,a.kt)("strong",{parentName:"p"},"Serveur"),", et que d'autres ne peuvent \xeatre cr\xe9\xe9s que par le ",(0,a.kt)("strong",{parentName:"p"},"Client"),".")),(0,a.kt)("h3",{id:"destruction-dentit\xe9s"},"Destruction d'Entit\xe9s"),(0,a.kt)("p",null,"Toutes les classes ","\\","(sauf Player","\\",") peuvent \xeatre d\xe9truites avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"Destroy()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"mon_personnage:Destroy()\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"D\xe9truire une entit\xe9 d\xe9clenchera l'\xe9v\xe9nement ",(0,a.kt)("inlineCode",{parentName:"p"},"Destroy"),", et toutes les entit\xe9s qui y \xe9taient attach\xe9es seront automatiquement d\xe9tach\xe9es*."),(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("em",{parentName:"p"},"Si vous attachez des entit\xe9s avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," , toutes les entit\xe9s attach\xe9es seront \xe9galement d\xe9truites \ud83d\ude09"),".")),(0,a.kt)("h2",{id:"classes-statiques"},"Classes statiques"),(0,a.kt)("p",null,"Les classes statiques dans le monde nanos sont des classes que vous ne pouvez pas faire appara\xeetre. Au lieu de cela, vous pouvez utiliser leurs m\xe9thodes directement avec ",(0,a.kt)("inlineCode",{parentName:"p"},"."),"."),(0,a.kt)("p",null,"Par exemple, si vous voulez interagir avec le Monde ","(","d\xe9placer le soleil, mettre de la pluie, etc",")",", vous aurez besoin de la classe statique ",(0,a.kt)("inlineCode",{parentName:"p"},"World"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Faire en sorte qu'il soit 9h25 du matin\nWorld.SetTime(9, 25)\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"L'acc\xe8s aux ",(0,a.kt)("strong",{parentName:"p"},"Classes statiques / M\xe9thodes statiques")," se fait avec ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".")),".")),(0,a.kt)("h2",{id:"classes-utilitaires"},"Classes utilitaires"),(0,a.kt)("p",null,"Outre les classes et les classes statiques, nous avons les ",(0,a.kt)("strong",{parentName:"p"},"classes utilitaires"),"! Celles-ci sont principalement utilis\xe9es dans l'API de Nanos World. On compte parmi ces classes: Vector, Rotator, Color, JSON et bien d'autres."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Toutes les classes utilitaires sont Open Source sur ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". N'h\xe9sitez pas \xe0 proposer des demandes de fusion et \xe0 sugg\xe9rer des modifications !")))}u.isMDXComponent=!0}}]);
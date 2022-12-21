"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),g=r,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"Guia de pacotes",description:"Tudo o que voc\xea precisa saber sobre os pacotes",sidebar_position:0,tags:["script","pacotes"],keywords:["pacotes","script","lua"]},i=void 0,s={unversionedId:"core-concepts/packages/packages-guide",id:"version-latest/core-concepts/packages/packages-guide",title:"Guia de pacotes",description:"Tudo o que voc\xea precisa saber sobre os pacotes",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/packages/packages-guide.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages-guide",permalink:"/pt-BR/docs/core-concepts/packages/packages-guide",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/packages/packages-guide.md",tags:[{label:"script",permalink:"/pt-BR/docs/tags/script"},{label:"pacotes",permalink:"/pt-BR/docs/tags/pacotes"}],version:"latest",sidebarPosition:0,frontMatter:{title:"Guia de pacotes",description:"Tudo o que voc\xea precisa saber sobre os pacotes",sidebar_position:0,tags:["script","pacotes"],keywords:["pacotes","script","lua"]},sidebar:"version-latest/main",previous:{title:"Linux & ARM Server installation",permalink:"/pt-BR/docs/core-concepts/server-manual/server-linux-arm"},next:{title:"Tela de carregamento",permalink:"/pt-BR/docs/core-concepts/packages/loading-screen"}},p={},l=[{value:"Estrutura da pasta",id:"estrutura-da-pasta",level:2},{value:"Configura\xe7\xe3o do pacote",id:"configura\xe7\xe3o-do-pacote",level:2},{value:"Configura\xe7\xf5es Detalhadas",id:"configura\xe7\xf5es-detalhadas",level:3},{value:"Tipos de Pacotes",id:"tipos-de-pacotes",level:3},{value:"Compatibility Version",id:"compatibility-version",level:3},{value:"Ignoring Client Folders",id:"ignoring-client-folders",level:2}],d={toc:l};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Os pacotes")," s\xe3o peda\xe7os/componentes de seu servidor que executar\xe3o scripts Lua para interagir com o jogo."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55583).Z,width:"628",height:"170"})),(0,r.kt)("p",null,"Cada pacote est\xe1 isolado e tem sua pr\xf3pria M\xe1quina Virtual Lua, Isto significa que cada um tem o seu pr\xf3prio \xe2mbito global e que n\xe3o pode aceder directamente a outros dados."),(0,r.kt)("h2",{id:"estrutura-da-pasta"},"Estrutura da pasta"),(0,r.kt)("p",null,"Todos os Pacotes devem estar sob a pasta ",(0,r.kt)("inlineCode",{parentName:"p"},"Servidor/Pacotes/")," , cada Pacote \xe9 uma pasta sob isso."),(0,r.kt)("p",null,"Eles podem conter as seguintes pastas: ",(0,r.kt)("inlineCode",{parentName:"p"},"Servidor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Cliente")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"Compartilhados"),". Somente ",(0,r.kt)("strong",{parentName:"p"},"Clientes")," e ",(0,r.kt)("strong",{parentName:"p"},"Compartilhados")," pastas ser\xe3o enviadas e carregadas pelos clientes quando se conectarem."),(0,r.kt)("p",null,"Cada ",(0,r.kt)("strong",{parentName:"p"},"pacote")," deve ter um arquivo chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"Index. ua")," dentro de ",(0,r.kt)("strong",{parentName:"p"},"Servidor"),", ",(0,r.kt)("strong",{parentName:"p"},"Cliente")," ou ",(0,r.kt)("strong",{parentName:"p"},"pastas")," compartilhadas Este \xe9 o \xfanico arquivo que ser\xe1 acionado quando o pacote for carregado, desta forma este arquivo \xe9 respons\xe1vel por incluir outros arquivos e iniciar suas funcionalidades."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 My_Package_01/\n\u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u251c\u2500\u2500 Index.lua\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u2514\u2500\u2500 Package.toml\n\u251c\u2500\u2500 My_Package_02/\n\u2502   \u251c\u2500\u2500 Package.toml\n\u2502   \u2514\u2500\u2500 ...\nAtivos/\nConfig.toml\n")),(0,r.kt)("h2",{id:"configura\xe7\xe3o-do-pacote"},"Configura\xe7\xe3o do pacote"),(0,r.kt)("p",null,"Os pacotes t\xeam um arquivo de configura\xe7\xe3o na raiz da pasta de pacotes, chamado ",(0,r.kt)("inlineCode",{parentName:"p"},"de pacote. oml"),", neste arquivo, podemos configurar todas as configura\xe7\xf5es pertinentes relacionadas ao Pacote:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Package.toml\n")),(0,r.kt)("h3",{id:"configura\xe7\xf5es-detalhadas"},"Configura\xe7\xf5es Detalhadas"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Configura\xe7\xe3o"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Nome"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nome amig\xe1vel do pacote")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"autor"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Author(s) of the Package")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Vers\xe3o"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vers\xe3o do pacote - por favor, consulte o ",(0,r.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Imagem"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL da imagem a ser exibida no Cofre")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"Tipo"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tipo de pacote - por favor consulte ",(0,r.kt)("a",{parentName:"td",href:"#package-types"},"Tipos de pacote"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"for\xe7ar_nenhum_roteador_de_mapa"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabling this will force the map-script (if any) to do NOT load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"limpeza_autom\xe1tica"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ativando isto ir\xe1 destruir todas as entidades criadas por este pacote quando ele descarrega")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"compatibility_version"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The game version (major.minor) at the time this package was created, for granting the package keeps working between breaking changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"requisitos_pacotes"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lista de pacotes que precisam ser carregados primeiro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"requisitos_ativos"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Lista de Pacotes de Conte\xfado a serem carregados quando este pacote carrega")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"compatible_maps"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Maps compatible/recommended to work with this Package")))),(0,r.kt)("h3",{id:"tipos-de-pacotes"},"Tipos de Pacotes"),(0,r.kt)("p",null,"In nanos world we have 4 kind of packages: ",(0,r.kt)("strong",{parentName:"p"},"script"),", ",(0,r.kt)("strong",{parentName:"p"},"game-mode"),", ",(0,r.kt)("strong",{parentName:"p"},"library")," and ",(0,r.kt)("strong",{parentName:"p"},"loading-screen"),", each one with with a specific functionality and an unique purpose."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"script"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pacote normal, ir\xe1 executar seus scripts e iniciar um novo ",(0,r.kt)("strong",{parentName:"td"},"Lua VM")," quando iniciado.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"modo-jogo"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Like ",(0,r.kt)("inlineCode",{parentName:"td"},"script")," but you can only load one ",(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")," package at once.",(0,r.kt)("br",null),"Useful when you are creating full games which cannot be loaded with other full games packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"library"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will not load a ",(0,r.kt)("strong",{parentName:"td"},"Lua VM"),". Should be loaded through ",(0,r.kt)("inlineCode",{parentName:"td"},"Package.RequirePackage")," from other Packages.",(0,r.kt)("br",null),"Useful when you are creating a library or framework and want it being loaded on clients as well, or when you need to set this as dependency of other packages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"carregando-tela"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Special Package which will be loaded during player's loading screen.",(0,r.kt)("br",null),"Those packages must have an ",(0,r.kt)("inlineCode",{parentName:"td"},"Index.html")," in the root.",(0,r.kt)("br",null),"Please refer to ",(0,r.kt)("a",{parentName:"td",href:"/pt-BR/docs/core-concepts/packages/loading-screen"},"Loading Screen")," for more information.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you are creating a ",(0,r.kt)("strong",{parentName:"p"},"Tool")," or some ",(0,r.kt)("strong",{parentName:"p"},"Addon")," package, make it ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"script")),"!"),(0,r.kt)("p",{parentName:"admonition"},"If you are creating a ",(0,r.kt)("strong",{parentName:"p"},"Library"),", a ",(0,r.kt)("strong",{parentName:"p"},"Framework")," or some ",(0,r.kt)("strong",{parentName:"p"},"Utility")," package, make it ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"library")),"!"),(0,r.kt)("p",{parentName:"admonition"},"Se voc\xea estiver criando um ",(0,r.kt)("strong",{parentName:"p"},"jogo \xfanico e completo")," com v\xe1rias funcionalidades que voc\xea n\xe3o quer que sejam implicadas se algu\xe9m carregar dois jogos completos, torn\xe1-lo ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"modo de jogo")),"!")),(0,r.kt)("h3",{id:"compatibility-version"},"Compatibility Version"),(0,r.kt)("p",null,"This setting deserves a special attention. It is meant to assure your packages will not break in future breaking changes updates."),(0,r.kt)("p",null,"It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Example:"),(0,r.kt)("p",null,"Let's say you have this code running right now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Make an asynchronous HTTP request\nHTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)\n    -- Do something with my data\nend)\n')),(0,r.kt)("p",null,"And then, in the hypothetical update 9.99 the API changes and make ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.RequestSync")," to become ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," to become ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync"),". I.e. you need to update your code to use ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync")," now, this is a breaking change as the new functions uses the same name as before."),(0,r.kt)("p",null,"With compatibility version, your code can keep working as it was before this update, for that, in your Package.toml you just need to make sure it's ",(0,r.kt)("inlineCode",{parentName:"p"},"compatibility_version")," is set to a version lower than ",(0,r.kt)("inlineCode",{parentName:"p"},"9.99")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"9.98"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time (major versions) all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!")),(0,r.kt)("h2",{id:"ignoring-client-folders"},"Ignoring Client Folders"),(0,r.kt)("p",null,"Sometimes you want to ignore some folders from being sent to the clients (e.g. auto generated folders from Node.js HTML ones)."),(0,r.kt)("p",null,"So, to make the server ignore it you just need to add an ",(0,r.kt)("inlineCode",{parentName:"p"},".ignore")," file in the root of that folder. Simple as that \ud83d\ude09."))}c.isMDXComponent=!0},55583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4923],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(g,s(s({ref:r},p),{},{components:t})):n.createElement(g,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69043:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"\xc9cran de chargement",description:"\xc9crans de chargement personnalis\xe9s pour vos serveurs",sidebar_position:1,tags:["scripting","ui","webui","packages"],keywords:["loading","screen","package","html","webui"]},s=void 0,i={unversionedId:"core-concepts/packages/loading-screen",id:"core-concepts/packages/loading-screen",title:"\xc9cran de chargement",description:"\xc9crans de chargement personnalis\xe9s pour vos serveurs",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/packages/loading-screen.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/loading-screen",permalink:"/fr/docs/next/core-concepts/packages/loading-screen",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"ui",permalink:"/fr/docs/next/tags/ui"},{label:"webui",permalink:"/fr/docs/next/tags/webui"},{label:"packages",permalink:"/fr/docs/next/tags/packages"}],version:"current",sidebarPosition:1,frontMatter:{title:"\xc9cran de chargement",description:"\xc9crans de chargement personnalis\xe9s pour vos serveurs",sidebar_position:1,tags:["scripting","ui","webui","packages"],keywords:["loading","screen","package","html","webui"]},sidebar:"main",previous:{title:"Guide sur les Packages",permalink:"/fr/docs/next/core-concepts/packages/packages-guide"},next:{title:"Compatibility Versions",permalink:"/fr/docs/next/core-concepts/packages/compatibility-versions"}},l={},c=[{value:"Cr\xe9ation d&#39;un \xe9cran de chargement",id:"cr\xe9ation-dun-\xe9cran-de-chargement",level:2},{value:"Acc\xe9der \xe0 la progression de chargement/t\xe9l\xe9chargement",id:"acc\xe9der-\xe0-la-progression-de-chargementt\xe9l\xe9chargement",level:3},{value:"L&#39;\xe9v\xe8nement <code>UpdateScreen</code>",id:"l\xe9v\xe8nement-updatescreen",level:4},{value:"Informations sur le joueur",id:"informations-sur-le-joueur",level:3},{value:"Arr\xeater la musique du menu",id:"arr\xeater-la-musique-du-menu",level:3},{value:"Configurer votre serveur pour utiliser l&#39;\xe9cran de chargement",id:"configurer-votre-serveur-pour-utiliser-l\xe9cran-de-chargement",level:2}],p={toc:c};function d(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans nanos world il est possible d'ajouter un \xe9cran de chargement personnalis\xe9 et dynamique \xe0 votre serveur en utilisant ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/webui"},"WebUI"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(64489).Z,width:"1919",height:"1079"})),(0,a.kt)("h2",{id:"cr\xe9ation-dun-\xe9cran-de-chargement"},"Cr\xe9ation d'un \xe9cran de chargement"),(0,a.kt)("p",null,"Pour cela, vous devez cr\xe9er un nouveau Package de type ",(0,a.kt)("a",{parentName:"p",href:"#package-types"},"loading-screen"),", et ajouter vos fichiers HTML/CSS/JS dans le dossier racine du Package. Votre fichier HTML principal doit s'appeler ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),". Votre dossier devrait ressembler \xe0 cela :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Packages/\n\u2514\u2500\u2500 my-loading-screen/\n    \u251c\u2500\u2500 Package.toml\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 style.css\n    \u2514\u2500\u2500 ...\n")),(0,a.kt)("h3",{id:"acc\xe9der-\xe0-la-progression-de-chargementt\xe9l\xe9chargement"},"Acc\xe9der \xe0 la progression de chargement/t\xe9l\xe9chargement"),(0,a.kt)("p",null,"Pour pouvoir afficher des informations dynamiques sur l'\xe9cran, vous pouvez utiliser l'event ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateScreen")," ","(","qui va \xeatre appel\xe9 toutes les quelques ms",")",":"),(0,a.kt)("h4",{id:"l\xe9v\xe8nement-updatescreen"},"L'\xe9v\xe8nement ",(0,a.kt)("inlineCode",{parentName:"h4"},"UpdateScreen")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Param\xe8tre"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"message"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Affiche l'\xe9tat actuel ","(","loading, validating, downloading... ",")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"message_secondary"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Affiche le fichier/asset actuel en cours de chargement/t\xe9l\xe9chargement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_small"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Progression du fichier en cours de chargement/t\xe9l\xe9chargement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_small_total"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Taille du fichier en cours de chargement/t\xe9l\xe9chargement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Progression actuelle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_total"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Progression totale")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"current_stage"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"L'\xe9tape actuelle du chargement ","(",(0,a.kt)("inlineCode",{parentName:"td"},"loading"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"downloading"),")")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Astuce")," : Vous pouvez utiliser ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress"))," et ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_total"))," pour remplir la barre de chargement principale, et ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"progress_small"))," pour une barre de chargement r\xe9duite.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Toujours utiliser ",(0,a.kt)("inlineCode",{parentName:"p"},"progress / progress_total")," pour r\xe9cup\xe9rer le pourcentage ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," actuel, car progress","_","total repr\xe9sente le nombre total de fichiers en cours de t\xe9l\xe9chargement.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Packages/my-loading-screen/index.js"',title:'"Packages/my-loading-screen/index.js"'},'Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {\n    // Mettre \xe0 jour l\'HTML ici\n});\n')),(0,a.kt)("h3",{id:"informations-sur-le-joueur"},"Informations sur le joueur"),(0,a.kt)("p",null,"Aussi, il est possible de r\xe9cup\xe9rer les informations d'un joueur en acc\xe9dant \xe0 une variable globale nomm\xe9e LoadingScreen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var LoadingScreen = {\n  server_ip,\n  server_name,\n  server_description,\n  server_port,\n  player_nanos_id,\n  player_nanos_username\n};\n")),(0,a.kt)("h3",{id:"arr\xeater-la-musique-du-menu"},"Arr\xeater la musique du menu"),(0,a.kt)("p",null,"Il est possible de d\xe9sactiver la musique du menu int\xe9gr\xe9 en appelant un \xe9v\xe9nement \xe0 partir du JS de l'\xe9cran de chargement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Events.Call("StopMenuMusic")\n')),(0,a.kt)("h2",{id:"configurer-votre-serveur-pour-utiliser-l\xe9cran-de-chargement"},"Configurer votre serveur pour utiliser l'\xe9cran de chargement"),(0,a.kt)("p",null,"Apr\xe8s avoir cr\xe9e votre package loading-screen, vous devrez configurer votre serveur pour le charger dans votre ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/next/core-concepts/server-manual/server-configuration#server-configuration-file"},"Config.toml"),". Dans ",(0,a.kt)("inlineCode",{parentName:"p"},"loading_screen"),", mettez simplement le nom du dossier de votre Package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# le package loading-screen \xe0 charger (l\'\xe9cran de chargement sera affich\xe9 quand les joueurs rejoindront votre serveur)\nloading_screen = "my-loading-screen"\n')))}d.isMDXComponent=!0},64489:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/loading-screen-cb28559615ffd1f2db10366c83d588a8.webp"}}]);
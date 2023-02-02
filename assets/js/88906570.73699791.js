"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Game Panels",description:"How to setup your nanos world server using a Game Panel",sidebar_position:4,tags:["hosting"]},l=void 0,i={unversionedId:"core-concepts/server-manual/game-panels",id:"version-latest/core-concepts/server-manual/game-panels",title:"Game Panels",description:"How to setup your nanos world server using a Game Panel",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/game-panels.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/game-panels",permalink:"/docs/core-concepts/server-manual/game-panels",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/game-panels.md",tags:[{label:"hosting",permalink:"/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1675332156,formattedLastUpdatedAt:"Feb 2, 2023",sidebarPosition:4,frontMatter:{title:"Game Panels",description:"How to setup your nanos world server using a Game Panel",sidebar_position:4,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Command Line Interface - CLI",permalink:"/docs/core-concepts/server-manual/nanos-world-cli"},next:{title:"Linux & ARM Server installation",permalink:"/docs/core-concepts/server-manual/server-linux-arm"}},s={},p=[{value:"Pterodactyl Installation",id:"pterodactyl-installation",level:2},{value:"Installing the <code>egg</code>",id:"installing-the-egg",level:3},{value:"AMP Installation",id:"amp-installation",level:2},{value:"Installing the template",id:"installing-the-template",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to setup your nanos world server using a Game Panel!"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The use of Game Panels is not officially supported and currently maintained by the community! The following steps are WIP and may change at any time! Please check the following GitHub repositories for updated information!")),(0,o.kt)("p",null,"Currently nanos world is supported on 2 games panel: ",(0,o.kt)("a",{parentName:"p",href:"https://pterodactyl.io"},"https://pterodactyl.io")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cubecoders.com/AMP"},"https://cubecoders.com/AMP"),"."),(0,o.kt)("p",null,"Installation files are open source at Falaxir GitHub: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Falaxir/nanos-world_yolks-game-panels"},"https://github.com/Falaxir/nanos-world_yolks-game-panels"),". You can also check which features are supported."),(0,o.kt)("h2",{id:"pterodactyl-installation"},"Pterodactyl Installation"),(0,o.kt)("p",null,"The installation of this panel can be complex depending on the type of your infrastructure. This panel is only compatible on Linux and the server must have a docker compatible system (OpenVZ is not compatible)."),(0,o.kt)("p",null,"If you haven't installed the panel yet, we recommend using the unofficial installer available here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vilhelmprytz/pterodactyl-installer"},"https://github.com/vilhelmprytz/pterodactyl-installer"),"."),(0,o.kt)("h3",{id:"installing-the-egg"},"Installing the ",(0,o.kt)("inlineCode",{parentName:"h3"},"egg")),(0,o.kt)("p",null,"Once the panel is installed, download the file ",(0,o.kt)("inlineCode",{parentName:"p"},"egg-nanos-world-server.json")," located inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"pterodactyl-egg")," folder on GitHub."),(0,o.kt)("p",null,"Then, go to your panel on the category ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVICE MANAGEMENT")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTS"),"."),(0,o.kt)("p",null,"You can create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"NEST")," by clicking the create button or selecting an existing nest."),(0,o.kt)("p",null,"After the nest is created, go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"NESTS")," and click on the button ",(0,o.kt)("inlineCode",{parentName:"p"},"Import EGG"),", select the .json file you downloaded earlier and on the dropdown menu, select the nest you created earlier."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Finished! You can now create a nanos world server as usual inside the panel!")),(0,o.kt)("h2",{id:"amp-installation"},"AMP Installation"),(0,o.kt)("p",null,"The installation of this panel is the easiest, you can go to ",(0,o.kt)("a",{parentName:"p",href:"https://cubecoders.com/AMPInstall"},"https://cubecoders.com/AMPInstall")," and follow the instruction to install the panel."),(0,o.kt)("p",null,"It works even with OpenVZ virtualization and windows!"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This panel requires a license that can be bought at ",(0,o.kt)("a",{parentName:"p",href:"https://cubecoders.com/AMP"},"https://cubecoders.com/AMP"),". Your main ADS instance (ADS01) can have a different name.")),(0,o.kt)("h3",{id:"installing-the-template"},"Installing the template"),(0,o.kt)("p",null,"Once the panel is installed, shutdown the ADS instance, you can do it on Linux by typing this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ampinstmgr -q ADS01\n")),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To run ",(0,o.kt)("inlineCode",{parentName:"p"},"ampinstmgr")," commands, you need to run them as the user ",(0,o.kt)("inlineCode",{parentName:"p"},"amp"),", you can switch to this user using the command: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su -l amp"),".")),(0,o.kt)("p",null,"After, go to your server files inside the folder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"/home/amp/.ampdata/instances/ADS01/Plugins/ADSModule/DeploymentTemplates/CubeCoders-AMPTemplates\n")),(0,o.kt)("p",null,"Then download the files on GitHub inside the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"amp-generic")," (.kvp & .json) and put them on your server."),(0,o.kt)("p",null,"You can start the panel again by typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ampinstmgr -s ADS01\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Finished! You can now create a nanos world server as usual inside the panel!")))}u.isMDXComponent=!0}}]);
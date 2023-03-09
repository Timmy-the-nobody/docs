"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(v,l(l({ref:t},d),{},{components:n})):a.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),u=n(67392),d=n(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=v({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var y=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function k(e){const t=(0,y.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},36527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",sidebar_position:1,tags:["hosting"]},s=void 0,u={unversionedId:"core-concepts/server-manual/server-installation",id:"version-latest/core-concepts/server-manual/server-installation",title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/server-installation.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-installation",permalink:"/pt-BR/docs/core-concepts/server-manual/server-installation",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"hosting",permalink:"/pt-BR/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",sidebarPosition:1,frontMatter:{title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",sidebar_position:1,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Game-Modes & Packages",permalink:"/pt-BR/docs/getting-started/game-modes-and-packages"},next:{title:"Server Configuration",permalink:"/pt-BR/docs/core-concepts/server-manual/server-configuration"}},d={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:2},{value:"Linux",id:"linux",level:2},{value:"Downloading using SteamCMD",id:"downloading-using-steamcmd",level:2},{value:"1. After downloaded, run <code>steamcmd</code> executable, once loaded you will get into it&#39;s console:",id:"1-after-downloaded-run-steamcmd-executable-once-loaded-you-will-get-into-its-console",level:4},{value:"2. You can optionally define an installation folder to install nanos world server:",id:"2-you-can-optionally-define-an-installation-folder-to-install-nanos-world-server",level:4},{value:"3. The next step is to login on SteamCMD, you can login anonymously with:",id:"3-the-next-step-is-to-login-on-steamcmd-you-can-login-anonymously-with",level:4},{value:"4. You can then install or update nanos world server using it&#39;s app id: <code>1936830</code>:",id:"4-you-can-then-install-or-update-nanos-world-server-using-its-app-id-1936830",level:4},{value:"And you are done! You can quit the console:",id:"and-you-are-done-you-can-quit-the-console",level:4},{value:"Installing bleeding-edge version",id:"installing-bleeding-edge-version",level:2},{value:"Automated Installation",id:"automated-installation",level:2}],p={toc:c},m="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!"),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Windows or Linux"),(0,r.kt)("li",{parentName:"ul"},"Processor: ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0 GHz")," (faster core is better than multiple cores)"),(0,r.kt)("li",{parentName:"ul"},"Memory: ",(0,r.kt)("inlineCode",{parentName:"li"},"50 MB")," (grows if having too many Players or spawned Entities)"),(0,r.kt)("li",{parentName:"ul"},"Storage: ",(0,r.kt)("inlineCode",{parentName:"li"},"10 MB")," (+ Assets & Packages size)"),(0,r.kt)("li",{parentName:"ul"},"Network: Recommended at least ",(0,r.kt)("inlineCode",{parentName:"li"},"1 MB/s")," (grows if having too many Players or spawned Entities)"),(0,r.kt)("li",{parentName:"ul"},"Network Forwarded Ports: ",(0,r.kt)("inlineCode",{parentName:"li"},"7777 TCP/UDP")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"7778 UDP")," (you can change that in the Config)")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"On Windows, you have ",(0,r.kt)("strong",{parentName:"p"},"three")," options for downloading nanos world server:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the executable (",(0,r.kt)("em",{parentName:"li"},".exe"),") already located at ",(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world/Server/NanosWorldServer.exe")," (if you downloaded the base game)."),(0,r.kt)("li",{parentName:"ol"},"Or download ",(0,r.kt)("strong",{parentName:"li"},"nanos world\u2122 Dedicated Server")," tool from Steam Client."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"#steamcmd"},"SteamCMD"),".")),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("p",null,"On Linux, the only way to download the server is through SteamCMD. If you are on Ubuntu/Debian, you can easily install it like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd \n")),(0,r.kt)("p",null,"Note: on Linux, you must start the server using the Shell Script ",(0,r.kt)("inlineCode",{parentName:"p"},"./NanosWorldServer.sh"),", which will configure proper paths and needed dynamic libraries which need to be loaded!"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should probably look into ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux & ARM Server installation")," to see if your operating system is entirely supported!")),(0,r.kt)("h2",{id:"downloading-using-steamcmd"},"Downloading using SteamCMD"),(0,r.kt)("p",null,"To download the server through SteamCMD (a command line version of Steam) please ",(0,r.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD"},"download it")," before proceeding."),(0,r.kt)("h4",{id:"1-after-downloaded-run-steamcmd-executable-once-loaded-you-will-get-into-its-console"},"1. After downloaded, run ",(0,r.kt)("inlineCode",{parentName:"h4"},"steamcmd")," executable, once loaded you will get into it's console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam>\n")),(0,r.kt)("h4",{id:"2-you-can-optionally-define-an-installation-folder-to-install-nanos-world-server"},"2. You can optionally define an installation folder to install nanos world server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir c:/nanos-world-server/\n")),(0,r.kt)("h4",{id:"3-the-next-step-is-to-login-on-steamcmd-you-can-login-anonymously-with"},"3. The next step is to login on SteamCMD, you can login anonymously with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,r.kt)("h4",{id:"4-you-can-then-install-or-update-nanos-world-server-using-its-app-id-1936830"},"4. You can then install or update nanos world server using it's app id: ",(0,r.kt)("inlineCode",{parentName:"h4"},"1936830"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,r.kt)("h4",{id:"and-you-are-done-you-can-quit-the-console"},"And you are done! You can quit the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> quit\n")),(0,r.kt)("h2",{id:"installing-bleeding-edge-version"},"Installing bleeding-edge version"),(0,r.kt)("p",null,"To install the ",(0,r.kt)("inlineCode",{parentName:"p"},"bleeding-edge")," version of the server, you will need to specify it's branch when installing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830 -beta bleeding-edge\n")),(0,r.kt)("h2",{id:"automated-installation"},"Automated Installation"),(0,r.kt)("p",null,"An easier way to install or update nanos world server is using an one-liner command to run SteamCMD:"),(0,r.kt)(o.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"steamcmd.exe +login anonymous +app_update 1936830 validate +quit\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"steamcmd +login anonymous +app_update 1936830 validate +quit\n")))),(0,r.kt)("p",null,"or on bleeding-edge:"),(0,r.kt)(o.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"steamcmd.exe +login anonymous +app_update 1936830 -beta bleeding-edge validate +quit\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'steamcmd +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")))}v.isMDXComponent=!0}}]);
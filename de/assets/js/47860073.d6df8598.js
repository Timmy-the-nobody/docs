"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=f({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var g=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},56680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const i={title:"Command Line Interface - CLI",description:"How to use theCommand Line Interface to install packages and update the server.",sidebar_position:3,tags:["hosting"]},s=void 0,c={unversionedId:"core-concepts/server-manual/command-line-interface",id:"core-concepts/server-manual/command-line-interface",title:"Command Line Interface - CLI",description:"How to use theCommand Line Interface to install packages and update the server.",source:"@site/docs/core-concepts/server-manual/command-line-interface.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/command-line-interface",permalink:"/de/docs/next/core-concepts/server-manual/command-line-interface",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"hosting",permalink:"/de/docs/next/tags/hosting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10. M\xe4rz 2023",sidebarPosition:3,frontMatter:{title:"Command Line Interface - CLI",description:"How to use theCommand Line Interface to install packages and update the server.",sidebar_position:3,tags:["hosting"]},sidebar:"main",previous:{title:"Server Configuration",permalink:"/de/docs/next/core-concepts/server-manual/server-configuration"},next:{title:"Game Panels",permalink:"/de/docs/next/core-concepts/server-manual/game-panels"}},u={},d=[{value:"Starting the CLI in Interactive mode",id:"starting-the-cli-in-interactive-mode",level:2},{value:"All CLI Commands",id:"all-cli-commands",level:2},{value:"Running the CLI in One-Liner/Direct mode",id:"running-the-cli-in-one-linerdirect-mode",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to use the Command Line Interface to install packages and update the server."),(0,r.kt)("p",null,"The Server provides a CLI (Command Line Interface) to help creating, updating and downloading Packages and Assets from the Store."),(0,r.kt)("p",null,"It can work in two different modes: Interactive or Direct by running a command directly when starting it."),(0,r.kt)("h2",{id:"starting-the-cli-in-interactive-mode"},"Starting the CLI in Interactive mode"),(0,r.kt)("p",null,"To run the cli, start the server with ",(0,r.kt)("inlineCode",{parentName:"p"},"--cli")," argument, this will start the Interactive CLI:"),(0,r.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli\n")))),(0,r.kt)("p",null,"After started, if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," you can see all the available commands:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96999).Z,width:"890",height:"171"})),(0,r.kt)("h2",{id:"all-cli-commands"},"All CLI Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"install package [PACKAGE_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install Packages from the Store")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update package [PACKAGE_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Packages from the Store")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"install assets [ASSET_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install Asset Packs from the Store")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update assets [ASSET_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Asset Packs from the Store")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"add package [PACKAGE_PATH]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new local Package in a interactive way")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"add assets [ASSET_PATH]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new local Asset Pack in a interactive way")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"check")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check for Updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"help")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display all Commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stop")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stops the CLI")))),(0,r.kt)("h2",{id:"running-the-cli-in-one-linerdirect-mode"},"Running the CLI in One-Liner/Direct mode"),(0,r.kt)("p",null,"It is also possible to run the CLI in a direct mode, just run the command together after the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cli"),". Example:"),(0,r.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update package sandbox\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli update package sandbox\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also install/update several Packages/Assets in a single command, separating them by spaces:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"install package sandbox battlefield-kill-ui\n"))))}f.isMDXComponent=!0},96999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);
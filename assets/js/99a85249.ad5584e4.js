"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),s=a(67392),i=a(7094),d=a(12466);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:a,block:o,defaultValue:u,values:m,groupId:k,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===u?u:u??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,i.U)(),[C,w]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,d.o5)();if(null!=k){const e=N[k];null!=e&&e!==C&&g.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==C&&(I(t),w(n),null!=k&&y(k,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},f)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},76408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const s={title:"Command Line Interface - CLI",description:"How to use nanos world CLI to install packages and update the server.",sidebar_position:3,tags:["hosting"]},i=void 0,d={unversionedId:"core-concepts/server-manual/nanos-world-cli",id:"version-latest/core-concepts/server-manual/nanos-world-cli",title:"Command Line Interface - CLI",description:"How to use nanos world CLI to install packages and update the server.",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/nanos-world-cli",permalink:"/docs/core-concepts/server-manual/nanos-world-cli",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",tags:[{label:"hosting",permalink:"/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Nogitsu",lastUpdatedAt:1674065610,formattedLastUpdatedAt:"Jan 18, 2023",sidebarPosition:3,frontMatter:{title:"Command Line Interface - CLI",description:"How to use nanos world CLI to install packages and update the server.",sidebar_position:3,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Server Configuration",permalink:"/docs/core-concepts/server-manual/server-configuration"},next:{title:"Game Panels",permalink:"/docs/core-concepts/server-manual/game-panels"}},c={},p=[{value:"Starting the CLI",id:"starting-the-cli",level:2},{value:"CLI Commands",id:"cli-commands",level:2},{value:"One-Liner CLI",id:"one-liner-cli",level:2}],u={toc:p};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to use nanos world CLI to install packages and update the server."),(0,r.kt)("p",null,"nanos world provides a CLI ","(","Command Line Interface",")"," to help updating the server, packages and assets and also downloading them!"),(0,r.kt)("h2",{id:"starting-the-cli"},"Starting the CLI"),(0,r.kt)("p",null,"To run the cli, start the server with ",(0,r.kt)("inlineCode",{parentName:"p"},"--cli")," argument:"),(0,r.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli\n")))),(0,r.kt)("p",null," After started, if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," you can see all the available commands:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96999).Z,width:"890",height:"171"})),(0,r.kt)("h2",{id:"cli-commands"},"CLI Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"install package [PACKAGE_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install Packages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update package [PACKAGE_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Packages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"install assets [ASSET_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install Asset Packs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update assets [ASSET_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Asset Packs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"add package [PACKAGE_PATH]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new Package in a interactive way")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"add assets [ASSET_PATH]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new Asset Pack in a interactive way")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"check")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check for Updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"help")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display all Commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stop")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stops the CLI")))),(0,r.kt)("h2",{id:"one-liner-cli"},"One-Liner CLI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is also possible to run the CLI in a non-interactive mode, just run the command together after the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cli"),".")),(0,r.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update package sandbox\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli update package sandbox\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also install/update several Packages/Assets in a single command, separating them by spaces:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"install package sandbox battlefield-kill-ui\n"))))}m.isMDXComponent=!0},96999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);
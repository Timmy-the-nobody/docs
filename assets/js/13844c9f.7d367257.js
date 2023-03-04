"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},95357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={title:"\ud83d\udc69\u200d\ud83d\udcbb Player",description:"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.",sidebar_position:0,tags:["class"]},o=void 0,i={unversionedId:"scripting-reference/classes/player",id:"version-latest/scripting-reference/classes/player",title:"\ud83d\udc69\u200d\ud83d\udcbb Player",description:"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/player.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/player",permalink:"/docs/scripting-reference/classes/player",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/player.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"Mar 4, 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udc69\u200d\ud83d\udcbb Player",description:"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\u2728 Particle",permalink:"/docs/scripting-reference/classes/particle"},next:{title:"\ud83d\udce6 Prop",permalink:"/docs/scripting-reference/classes/prop"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("HeaderDeclaration"),u=p("StaticFunctionsDeclaration"),y=p("FunctionsDeclaration"),m=p("EventsDeclaration"),f={toc:l},v="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(v,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{type:"Class",name:"Player",mdxType:"HeaderDeclaration"}),(0,a.kt)("admonition",{title:"Authority",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udfe5 You cannot spawn or Destroy Players.")),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns and possess a Character when a Player joins the server\nPlayer.Subscribe("Spawn", function(player)\n    local new_char = Character()\n    player:Possess(new_char)\nend)\n\n-- Destroys the Character when the Player leaves the server\nPlayer.Subscribe("Destroy", function(player)\n        local character = player:GetControlledCharacter()\n        if (character) then\n                character:Destroy()\n        end\nend)\n')),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(u,{type:"Class",name:"Player",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(y,{type:"Class",name:"Player",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(m,{type:"Class",name:"Player",mdxType:"EventsDeclaration"}))}h.isMDXComponent=!0}}]);
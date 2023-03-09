"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={title:"Enums",description:"nanos world Enums.",tags:["scripting"]},a=void 0,i={unversionedId:"scripting-reference/glossary/enums",id:"version-latest/scripting-reference/glossary/enums",title:"Enums",description:"nanos world Enums.",source:"@site/versioned_docs/version-latest/scripting-reference/glossary/enums.mdx",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/enums",permalink:"/pt-BR/docs/scripting-reference/glossary/enums",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"scripting",permalink:"/pt-BR/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9 de mar. de 2023",frontMatter:{title:"Enums",description:"nanos world Enums.",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Basic Types",permalink:"/pt-BR/docs/scripting-reference/glossary/basic-types"},next:{title:"Setting Up Unreal Engine",permalink:"/pt-BR/docs/assets-modding/creating-assets/setting-up-ue"}},c={},l=[{value:"All Enums",id:"all-enums",level:2}],p=(u="EnumsDeclaration",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:l},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Instead of passing numbers to methods or comparing numbers in Events callbacks, you can use the following ",(0,o.kt)("strong",{parentName:"p"},"Enums")," to do so. Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Using Enums to figure out which StanceMode the Character is\nCharacter.Subscribe("StanceModeChanged", function(character, old_stance, new_stance)\n   if (new_stance == StanceMode.Standing) then\n      Console.Log("I\'m Standing!")\n   else if (new_stance == StanceMode.Crouching) then\n      Console.Log("I\'m Crouching!")\n   end\nend)\n\n-- Using Enums to pass a Light Type to the constructor\nlocal my_light = Light(Vector(-5, 0, 50), Rotator(), Color.RED, LightType.Point)\n\n-- Using Enums to set the Character View Mode\ncharacter:SetViewMode(ViewMode.FPS)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The functions which use the Enums are still receiving numbers as parameters (as always), using Enums is just a facilitator.")),(0,o.kt)("h2",{id:"all-enums"},"All Enums"),(0,o.kt)(p,{mdxType:"EnumsDeclaration"}))}g.isMDXComponent=!0}}]);
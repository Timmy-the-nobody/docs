"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7443],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99085:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const s={title:"Enums",description:"nanos world Enums.",tags:["scripting"]},a=void 0,i={unversionedId:"scripting-reference/glossary/enums",id:"scripting-reference/glossary/enums",title:"Enums",description:"nanos world Enums.",source:"@site/docs/scripting-reference/glossary/enums.mdx",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/enums",permalink:"/docs/next/scripting-reference/glossary/enums",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/glossary/enums.mdx",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"Enums",description:"nanos world Enums.",tags:["scripting"]},sidebar:"main",previous:{title:"Basic Types",permalink:"/docs/next/scripting-reference/glossary/basic-types"},next:{title:"Setting Up Unreal Engine",permalink:"/docs/next/assets-modding/creating-assets/setting-up-ue"}},c={},l=[{value:"All Enums",id:"all-enums",level:2}],u=(p="EnumsDeclaration",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:l},m="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Instead of passing numbers to methods or comparing numbers in Events callbacks, you can use the following ",(0,o.kt)("strong",{parentName:"p"},"Enums")," to do so. Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Using Enums to figure out which StanceMode the Character is\nCharacter.Subscribe("StanceModeChanged", function(character, old_stance, new_stance)\n   if (new_stance == StanceMode.Standing) then\n      Console.Log("I\'m Standing!")\n   else if (new_stance == StanceMode.Crouching) then\n      Console.Log("I\'m Crouching!")\n   end\nend)\n\n-- Using Enums to pass a Light Type to the constructor\nlocal my_light = Light(Vector(-5, 0, 50), Rotator(), Color.RED, LightType.Point)\n\n-- Using Enums to set the Character View Mode\ncharacter:SetViewMode(ViewMode.FPS)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The functions which use the Enums are still receiving numbers as parameters (as always), using Enums is just a facilitator.")),(0,o.kt)("h2",{id:"all-enums"},"All Enums"),(0,o.kt)(u,{mdxType:"EnumsDeclaration"}))}g.isMDXComponent=!0}}]);
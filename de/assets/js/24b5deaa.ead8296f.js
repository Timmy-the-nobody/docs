"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7241],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const i={title:"Extending Classes",description:"How to extend nanos world Classes",sidebar_position:8,tags:["scripting"]},r=void 0,s={unversionedId:"core-concepts/scripting/extending-classes",id:"version-latest/core-concepts/scripting/extending-classes",title:"Extending Classes",description:"How to extend nanos world Classes",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/extending-classes.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/extending-classes",permalink:"/de/docs/core-concepts/scripting/extending-classes",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/extending-classes.md",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"}],version:"latest",sidebarPosition:8,frontMatter:{title:"Extending Classes",description:"How to extend nanos world Classes",sidebar_position:8,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Spuren & Raycasting",permalink:"/de/docs/core-concepts/scripting/traces-and-raycasting"},next:{title:"Inheriting Classes",permalink:"/de/docs/core-concepts/scripting/inheriting-classes"}},l={},d=[{value:"Adding new Methods",id:"adding-new-methods",level:3},{value:"Overriding Existing Methods",id:"overriding-existing-methods",level:3},{value:"Overriding <code>__newindex</code>",id:"overriding-__newindex",level:3},{value:"Overriding <code>__index</code>",id:"overriding-__index",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to extend nanos world Classes, nanos world provides a built-in way of extending and customizing the Classes"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This feature is still ",(0,o.kt)("strong",{parentName:"p"},"experimental"),", you can try it out and provide feedback before it's full release!")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Extending Classes can be very useful and speed up the development. Although the code may become very complex and hard for newcomers to understand. As it will start using non-documented methods and accessors.")),(0,o.kt)("h3",{id:"adding-new-methods"},"Adding new Methods"),(0,o.kt)("p",null,"Adding new methods for classes is the most straightforward way, let's say we want to add a new method for ",(0,o.kt)("strong",{parentName:"p"},"Player"),", we just do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function Player:AddScore(score)\n    self:SetValue("score", self:GetValue("score", 0) + score)\nend\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Within your methods, you can access the called entity instance with ",(0,o.kt)("inlineCode",{parentName:"p"},"self"),".")),(0,o.kt)("p",null,"And then you are able to call it as usual:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local my_player = GetPlayerSomehow()\nmy_player:AddScore(10)\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Extending Classes will have effect only on the Package and the side you are! You can define all new methods in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Shared")," folder to have it applied on both Client and Server!")),(0,o.kt)("h3",{id:"overriding-existing-methods"},"Overriding Existing Methods"),(0,o.kt)("p",null,"Besides creating new methods, it's possible to override existing ones, for that, just redefine them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function Character:SetLocation(new_location)\n    -- ... Do something\nend\n")),(0,o.kt)("p",null,"And you can call a special method called ",(0,o.kt)("inlineCode",{parentName:"p"},":Super()")," to call the original method as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function Character:SetLocation(new_location)\n    -- ... Do something\n    self:Super(new_location + Vector(1, 2, 3))\nend\n")),(0,o.kt)("h3",{id:"overriding-__newindex"},"Overriding ",(0,o.kt)("inlineCode",{parentName:"h3"},"__newindex")),(0,o.kt)("p",null,"It is also possible to add a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"__newindex")," metamethod on Classes."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"__newindex")," metamethod is a function which is triggered when you attempt to ",(0,o.kt)("strong",{parentName:"p"},"set")," a value in an entity. E.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"my_prop.something = 123"),".")),(0,o.kt)("p",null,"For that, we just add a custom method called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"newindex")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function Player:newindex(key, value)\n    Package.Log("Setting a %s value: %s = %s", tostring(self), key, tostring(value))\nend\n')),(0,o.kt)("p",null,"An useful way of using ",(0,o.kt)("inlineCode",{parentName:"p"},"__newindex")," is overriding it to ",(0,o.kt)("inlineCode",{parentName:"p"},"SetValue")," automatically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function Player:newindex(key, value)\n    self:SetValue(key, value)\nend\n\nlocal my_player = GetPlayerSomehow()\nmy_player.amazing_value = 123\n")),(0,o.kt)("h3",{id:"overriding-__index"},"Overriding ",(0,o.kt)("inlineCode",{parentName:"h3"},"__index")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"__index")," metamethod is a function which is triggered when you attempt to ",(0,o.kt)("strong",{parentName:"p"},"get")," a value from an entity. E.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"local value = my_prop.something"),".")),(0,o.kt)("p",null,"For that, we just add a custom method called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"index")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'function Player:index(key)\n    Package.Log("Getting %s value: %s", tostring(self), key)\n    -- ... do something\n    return some_value\nend\n')),(0,o.kt)("p",null,"An useful way of using ",(0,o.kt)("inlineCode",{parentName:"p"},"__index")," is overriding it to ",(0,o.kt)("inlineCode",{parentName:"p"},"GetValue")," automatically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"function Player:index(key)\n    return self:GetValue(key)\nend\n\nlocal my_player = GetPlayerSomehow()\nlocal amazing_value = my_player.amazing_value\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7453],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=c(n),u=i,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(g,r(r({ref:e},m),{},{components:n})):a.createElement(g,r({ref:e},m))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37566:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={title:"Locomotion Animations",description:"How to create custom Character Locomotion Animations",tags:["assets","character","animations"],keywords:["animation","character","unreal"],sidebar_position:2},r=void 0,s={unversionedId:"assets-modding/creating-assets/animations/characters/character-locomotion-animations",id:"version-latest/assets-modding/creating-assets/animations/characters/character-locomotion-animations",title:"Locomotion Animations",description:"How to create custom Character Locomotion Animations",source:"@site/versioned_docs/version-latest/assets-modding/creating-assets/animations/characters/character-locomotion-animations.md",sourceDirName:"assets-modding/creating-assets/animations/characters",slug:"/assets-modding/creating-assets/animations/characters/character-locomotion-animations",permalink:"/docs/assets-modding/creating-assets/animations/characters/character-locomotion-animations",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/animations/characters/character-locomotion-animations.md",tags:[{label:"assets",permalink:"/docs/tags/assets"},{label:"character",permalink:"/docs/tags/character"},{label:"animations",permalink:"/docs/tags/animations"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1676050486,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:2,frontMatter:{title:"Locomotion Animations",description:"How to create custom Character Locomotion Animations",tags:["assets","character","animations"],keywords:["animation","character","unreal"],sidebar_position:2},sidebar:"version-latest/main",previous:{title:"Retargeting Animations",permalink:"/docs/assets-modding/creating-assets/animations/characters/retargeting-animations"},next:{title:"Importing Mixamo Animations",permalink:"/docs/assets-modding/creating-assets/animations/characters/mixamo-animations"}},l={},c=[{value:"Locomotion BlendSpaces",id:"locomotion-blendspaces",level:2},{value:"BlendSpace Configuration",id:"blendspace-configuration",level:3},{value:"Setting up Through Scripting",id:"setting-up-through-scripting",level:3},{value:"Transition Animations",id:"transition-animations",level:2},{value:"Setting up Through Scripting",id:"setting-up-through-scripting-1",level:3},{value:"Custom Animation Notifies",id:"custom-animation-notifies",level:2},{value:"Adding a Notify",id:"adding-a-notify",level:3}],m={toc:c};function d(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to create custom Character Locomotion Animations."),(0,i.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Before proceeding, please make sure you read ",(0,i.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/importing-assets"},"Creating & Importing Assets")," Guide.")),(0,i.kt)("p",null,"It is now possible to integrate your own Locomotion raw animations into nanos world! With the new Character methods you can add your own Standing, Proning and Crouching Blend Spaces to work in the native Character!"),(0,i.kt)("h2",{id:"locomotion-blendspaces"},"Locomotion BlendSpaces"),(0,i.kt)("p",null,"In Unreal, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/blend-spaces-in-unreal-engine/"},"BlendSpaces")," are graphs where you can plot any number of animations to be blended between based on the values of multiple inputs."),(0,i.kt)("p",null,"In our case our inputs are ",(0,i.kt)("inlineCode",{parentName:"p"},"SpeedY")," (Horizontal Axis) and ",(0,i.kt)("inlineCode",{parentName:"p"},"SpeedX")," (Vertical Axis), meaning forward and right speed, respectively."),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/docs/assets-modding/character-locomotion-01.webm"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read ",(0,i.kt)("a",{parentName:"p",href:"/docs/assets-modding/creating-assets/animations/characters/retargeting-animations"},"Retargeting Animations")," for retargeting animations into nanos world Skeleton.")),(0,i.kt)("p",null,"All you need to do is create a new ",(0,i.kt)("strong",{parentName:"p"},"Blend Space 2D")," and drag'n drop your animations on it."),(0,i.kt)("h3",{id:"blendspace-configuration"},"BlendSpace Configuration"),(0,i.kt)("p",null,"First, make sure the ",(0,i.kt)("strong",{parentName:"p"},"Horizontal")," and ",(0,i.kt)("strong",{parentName:"p"},"Vertical Axis")," are named ",(0,i.kt)("inlineCode",{parentName:"p"},"SpeedY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SpeedX")," respectively. Also they need to be clamped to ",(0,i.kt)("inlineCode",{parentName:"p"},"-1.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0")," Axis Values:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8980).Z,width:"385",height:"654"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can tweak the Smoothing Time the way you want \ud83d\ude09.")),(0,i.kt)("h3",{id:"setting-up-through-scripting"},"Setting up Through Scripting"),(0,i.kt)("p",null,"Through scripting you can set the Locomotion BlendSpace Animation using 3 methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Character.SetAnimationIdleWalkRunStanding(anim_path, enable_tip)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Character.SetAnimationIdleWalkRunCrouching(anim_path, enable_tip)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Character.SetAnimationIdleWalkRunProning(anim_path)"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_tip")," can be toggled to enable/disable ",(0,i.kt)("strong",{parentName:"p"},"Turn In Place")," built-in feature."),(0,i.kt)("h2",{id:"transition-animations"},"Transition Animations"),(0,i.kt)("p",null,'It is also possible to define the transition animation between the states (Standing, Proning, Crouching), those are simple Sequence Animations just to improve the "lerp" between them.'),(0,i.kt)("h3",{id:"setting-up-through-scripting-1"},"Setting up Through Scripting"),(0,i.kt)("p",null,"Through scripting you can set the Transition Animations using 2 methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Character.SetAnimationsTransitionStandingCrouching(anim_standing_to_crouching, anim_crouching_to_standing)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Character.SetAnimationsTransitionCrouchingProning(anim_crouching_to_proning, anim_proning_to_crouching)"))),(0,i.kt)("p",null,"In each method you can set the transition between 2 states (Standing <-> Crouching or Proning <-> Crouching)."),(0,i.kt)("h2",{id:"custom-animation-notifies"},"Custom Animation Notifies"),(0,i.kt)("p",null,"You can integrate your animations with the built-in nanos world Animation Notifies, to trigger footstep sounds or disable movement, for example!"),(0,i.kt)("p",null,"Here's the list of possible Anim Notifies names to use and it's effects:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Notify Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Footstep_Sound"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"This will play a Footstep sound based on the surface the character is over.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Movement_Disable"))),(0,i.kt)("td",{parentName:"tr",align:"left"},'This will disable the Character movement (useful for "Getting Up" transition animations for example).')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Movement_Enable"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"This will enable the Character movement.")))),(0,i.kt)("h3",{id:"adding-a-notify"},"Adding a Notify"),(0,i.kt)("p",null,"Adding Notify is very straight, just ",(0,i.kt)("strong",{parentName:"p"},"Right Click")," on any Notify Track of your animation and click ",(0,i.kt)("strong",{parentName:"p"},"Add Notify")," -> ",(0,i.kt)("strong",{parentName:"p"},"New Notify"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(50108).Z,width:"1164",height:"944"})),(0,i.kt)("p",null,"Then just input one of the Animation Notify Names listed above:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73333).Z,width:"1160",height:"376"})),(0,i.kt)("p",null,"And you are done! You can position it to exactly when the feet touches the ground for perfect sounding!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41330).Z,width:"1161",height:"393"})))}d.isMDXComponent=!0},50108:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/anim-notify-01-8a395b3d5d0c6e5b7481f712db7c3085.webp"},73333:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/anim-notify-02-94c686e329e2cad10d24a49579dba5ab.webp"},41330:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/anim-notify-03-b589befeb2eedd634a4b49fd292b067f.webp"},8980:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/character-locomotion-01-d05c12addae587a9d361ec779d09dbd6.webp"}}]);
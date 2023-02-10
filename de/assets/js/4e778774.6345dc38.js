"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>w});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),w=o,m=u["".concat(l,".").concat(w)]||u[w]||d[w]||r;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>S,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={title:"\ud83d\udd2b Weapon",sidebar_position:0,tags:["class"]},s=void 0,i={unversionedId:"scripting-reference/classes/weapon",id:"version-latest/scripting-reference/classes/weapon",title:"\ud83d\udd2b Weapon",description:"\ud83c\udf92\xa0Examples",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/weapon.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/weapon",permalink:"/de/docs/scripting-reference/classes/weapon",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83d\udd2b Weapon",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\ude99 Vehicle",permalink:"/de/docs/scripting-reference/classes/vehicle"},next:{title:"\ud83d\udda5\ufe0f WebUI",permalink:"/de/docs/scripting-reference/classes/webui"}},l={},c=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},d=p("HeaderDeclaration"),u=p("ReferenceLink"),w=p("ConstructorDeclaration"),m=p("StaticFunctionsDeclaration"),f=p("FunctionsDeclaration"),g=p("EventsDeclaration"),_={toc:c};function S(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(d,{type:"Class",name:"Weapon",image:"/img/docs/weapon.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawning a Weapon with an AK47 model\nlocal new_weapon = Weapon(\n    Vector(-900, 185, 215),\n    Rotator(0, 0, 0),\n    "nanos-world::SK_AK47"\n)\n\n-- Configures Weapon Base Settings\nnew_weapon:SetAmmoSettings(30, 1000)\nnew_weapon:SetDamage(30)\nnew_weapon:SetSpread(30)\nnew_weapon:SetRecoil(0.25)\nnew_weapon:SetBulletSettings(1, 20000, 20000, Color(100, 58, 0))\nnew_weapon:SetCadence(0.1)\nnew_weapon:SetWallbangSettings(50, 0.75)\n\n-- Configures how the Character Grabs and Aims the Weapon\nnew_weapon:SetHandlingMode(HandlingMode.DoubleHandedWeapon)\nnew_weapon:SetSightTransform(Vector(0, 0, -1), Rotator(-1.5, 0, 0))\nnew_weapon:SetLeftHandTransform(Vector(22, 0, 9), Rotator(0, 60, 90))\nnew_weapon:SetRightHandOffset(Vector(-10, 0, 0))\n\n-- Configures Weapon Particles\nnew_weapon:SetParticlesBulletTrail("nanos-world::P_Bullet_Trail")\nnew_weapon:SetParticlesBarrel("nanos-world::P_Weapon_BarrelSmoke")\nnew_weapon:SetParticlesShells("nanos-world::P_Weapon_Shells_762x39")\n\n-- Configures Weapon Sounds\nnew_weapon:SetSoundDry("nanos-world::A_Rifle_Dry")\nnew_weapon:SetSoundLoad("nanos-world::A_Rifle_Load")\nnew_weapon:SetSoundUnload("nanos-world::A_Rifle_Unload")\nnew_weapon:SetSoundZooming("nanos-world::A_AimZoom")\nnew_weapon:SetSoundAim("nanos-world::A_Rattle")\nnew_weapon:SetSoundFire("nanos-world::A_AK47_Shot")\n\n-- Configures Weapon Animations\nnew_weapon:SetAnimationFire("nanos-world::A_AK47_Fire")\nnew_weapon:SetAnimationCharacterFire("nanos-world::AM_Mannequin_Sight_Fire")\nnew_weapon:SetAnimationReload("nanos-world::AM_Mannequin_Reload_Rifle")\n\n-- Configures the Mesh to drop when reloading\nnew_weapon:SetMagazineMesh("nanos-world::SM_AK47_Mag_Empty")\n\n-- Configures the Crosshair Material\nnew_weapon:SetCrosshairMaterial("nanos-world::MI_Crosshair_Regular")\n')),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-weapons"},"default-weapons")," Package to spawn an AK47:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Terminal"',title:'"Terminal"'},"# install the default-weapons package\n./NanosWorldServer.exe --cli install package default-weapons\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"-- Loads the default-weapons (note: it's recommended to add it to your Package's packages_requirements instead)\nServer.LoadPackage(\"default-weapons\")\n\n-- Spawning the AK47 from default-weapons package\nlocal my_ak47 = AK47(Vector(1035, 154, 300), Rotator())\n\n-- Giving the Weapon to a Character\nmy_character:PickUp(my_ak47)\n")),(0,o.kt)("p",null,"More related examples:"),(0,o.kt)(u,{href:"getting-started/tutorials-and-examples/prop-shooter",mdxType:"ReferenceLink"},"Prop Shooter"),(0,o.kt)(u,{href:"getting-started/tutorials-and-examples/weapon-scope",mdxType:"ReferenceLink"},"Weapon Scope"),(0,o.kt)(u,{href:"getting-started/tutorials-and-examples/weapon-flashlight",mdxType:"ReferenceLink"},"Weapon Flashlight"),(0,o.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,o.kt)(w,{type:"Class",name:"Weapon",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,o.kt)(m,{type:"Class",name:"Weapon",mdxType:"StaticFunctionsDeclaration"}),(0,o.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,o.kt)(f,{type:"Class",name:"Weapon",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,o.kt)(g,{type:"Class",name:"Weapon",mdxType:"EventsDeclaration"}))}S.isMDXComponent=!0}}]);
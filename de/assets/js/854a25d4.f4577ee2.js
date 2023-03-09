"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Linux & ARM Server installation",description:"Special cases for some Linux os & ARM platform",sidebar_position:5,tags:["hosting"]},i=void 0,l={unversionedId:"core-concepts/server-manual/server-linux-arm",id:"core-concepts/server-manual/server-linux-arm",title:"Linux & ARM Server installation",description:"Special cases for some Linux os & ARM platform",source:"@site/docs/core-concepts/server-manual/server-linux-arm.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-linux-arm",permalink:"/de/docs/next/core-concepts/server-manual/server-linux-arm",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"hosting",permalink:"/de/docs/next/tags/hosting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678359990,formattedLastUpdatedAt:"9. M\xe4rz 2023",sidebarPosition:5,frontMatter:{title:"Linux & ARM Server installation",description:"Special cases for some Linux os & ARM platform",sidebar_position:5,tags:["hosting"]},sidebar:"main",previous:{title:"Game Panels",permalink:"/de/docs/next/core-concepts/server-manual/game-panels"},next:{title:"Packages Guide",permalink:"/de/docs/next/core-concepts/packages/packages-guide"}},s={},p=[{value:"Linux Debian 11 Installation",id:"linux-debian-11-installation",level:2},{value:"With a Script",id:"with-a-script",level:3},{value:"Manually",id:"manually",level:3},{value:"Linux Ubuntu 20",id:"linux-ubuntu-20",level:2},{value:"Linux ARM (raspberry &amp; more)",id:"linux-arm-raspberry--more",level:2},{value:"Box86",id:"box86",level:3},{value:"Box64",id:"box64",level:3},{value:"Steam &amp; Server",id:"steam--server",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Special cases for some linux os & ARM platform server installation."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The installation on versions on and below Debian 11, Ubuntu 20 and ARM systems is not officially supported and currently maintained by the community! The following steps are WIP and may change at any time!")),(0,r.kt)("h2",{id:"linux-debian-11-installation"},"Linux Debian 11 Installation"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please be careful with scripts and commands, do it at your own risk!")),(0,r.kt)("p",null,"If you are running debian 10 or older, please upgrade to debian 11 or change your operating system to at least Ubuntu 22.04.1 LTS"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This will fix this type of error: ",(0,r.kt)("inlineCode",{parentName:"p"},"version GLIBCXX 3.4.30 not found")," or/and ",(0,r.kt)("inlineCode",{parentName:"p"},"version GLIBC 2.34 not found"))),(0,r.kt)("p",null,"Since nanos world use ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc 11"),", we will need to upgrade one of our package to the testing repository."),(0,r.kt)("h3",{id:"with-a-script"},"With a Script"),(0,r.kt)("p",null,"You can run this script to install the required libraries, but please look at the script code to see what the script will do. (make sure you run it as root!)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -O - https://raw.githubusercontent.com/Falaxir/nanos-world_yolks-game-panels/master/docker-oses/debian/fixglibcxx.sh | bash\n")),(0,r.kt)("h3",{id:"manually"},"Manually"),(0,r.kt)("p",null,"First, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"sources.list")," file (located in: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"), you will need to add the testing repo source, you can add theses lines below to your sources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"deb http://ftp.fr.debian.org/debian/ testing main contrib non-free\ndeb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free\n")),(0,r.kt)("p",null,"After that, we will need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"preferences")," file that will tell our system to not prefer installing testing package over stable unless specified. In ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apt/preferences")," (create if it doesn\u2019t exists), add theses lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Package: *\nPin: release a=stable\nPin-Priority: 900\n\nPackage: *\nPin: release a=testing\nPin-Priority: 400\n")),(0,r.kt)("p",null,"Now, update your server to make sure that your system can find testing repositories with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,r.kt)("p",null,"We will install ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++6")," testing package to the server, it will allow the server to start correctly. You can type the command below to install it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get --target-release testing install libstdc++6\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")),(0,r.kt)("h2",{id:"linux-ubuntu-20"},"Linux Ubuntu 20"),(0,r.kt)("p",null,"Ubuntu 20 doesn't have the latest libraries, and so, nanos world is not supported for this and older ubuntu operating systems."),(0,r.kt)("p",null,"It will be easier to upgrade your server to ubuntu 22 than to make the nanos world server work on ubuntu 20"),(0,r.kt)("p",null,"There is a lot of guides like ",(0,r.kt)("a",{parentName:"p",href:"https://jumpcloud.com/blog/how-to-upgrade-ubuntu-20-04-to-ubuntu-22-04"},"this one")," for the steps of how to upgrade your server."),(0,r.kt)("h2",{id:"linux-arm-raspberry--more"},"Linux ARM (raspberry & more)"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"EXPERIMENTAL: Use at your own risk!")),(0,r.kt)("p",null,"Nanos world server is not officially supported on Arm, but if you really really really want your server to be running on arm platform such as a raspberry, rockpro64, ... then you can!"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide on ARM has been tested and partially working on older nanos world server (before the migration from gcc 9 to gcc 11 on november 2022) and is probably outdated!")),(0,r.kt)("p",null,"We will need 2 emulators:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"box64 for Nanos World server : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ptitSeb/box64"},"https://github.com/ptitSeb/box64")),(0,r.kt)("li",{parentName:"ul"},"box86 for steam : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ptitSeb/box86"},"https://github.com/ptitSeb/box86"))),(0,r.kt)("p",null,"You must build & install these emulators on your board.\nbox86 is optional if you don't want to use steamcmd to download & update the server"),(0,r.kt)("p",null,"Follow CAREFULLY the instructions on the emulators repository, commands are different in function of the board."),(0,r.kt)("p",null,"Example :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RK3399 is for Pine64, RockPro64, Orange Pi, ...")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These steps have been tested on Armbian Bullseye 64bits (aarch64) on a rockpro64. Some extra steps might be required for other boards & distros")),(0,r.kt)("h3",{id:"box86"},"Box86"),(0,r.kt)("p",null,"To install it, simply follow the instructions here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md"},"https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md")),(0,r.kt)("p",null,"If for some reason, your system cannot find Box86 and you are on a 64bits os, run theses commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo dpkg --add-architecture armhf\nsudo apt update\nsudo apt install libc6:armhf libncurses5:armhf libstdc++6:armhf\n")),(0,r.kt)("h3",{id:"box64"},"Box64"),(0,r.kt)("p",null,"Clone the repository, then we will need to replace the file ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++.so.6")," inside the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"x64lib"),".\nYou will need a newer version of this file with at least ",(0,r.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),".\nYou can grab it inside an updated Linux distro such as Ubuntu 20.04, Debian 11.\nTo check if the file has at least ",(0,r.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),", use this command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"strings libstdc++.so.6 | grep LIBCXX\n")),(0,r.kt)("p",null,"If it shows ",(0,r.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),", you can put this file inside ",(0,r.kt)("inlineCode",{parentName:"p"},"x64lib")," folder."),(0,r.kt)("p",null,"You can now follow the rest of the instructions here (starting from ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir")," steps since you already cloned the repo): ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md"},"https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md")),(0,r.kt)("h3",{id:"steam--server"},"Steam & Server"),(0,r.kt)("p",null,"You have now installed the emulators, they should be able to auto-detect if a program needs a x86_64/x86 emulation or not."),(0,r.kt)("p",null,"Get steamcmd manually on a folder with this command :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz" | tar zxvf -\n')),(0,r.kt)("p",null,"You can now follow the basic instructions of nanos world Linux installation starting from steamcmd (run steamcmd with this command: ",(0,r.kt)("inlineCode",{parentName:"p"},"./steamcmd.sh"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")))}c.isMDXComponent=!0}}]);
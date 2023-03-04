"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9950],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(o),g=a,h=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return o?n.createElement(h,s(s({ref:t},p),{},{components:o})):n.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=o[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},57699:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r={title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",tags:["tutorial-example","hosting"]},s=void 0,i={unversionedId:"getting-started/tutorials-and-examples/hosting-server-4free-gcp",id:"getting-started/tutorials-and-examples/hosting-server-4free-gcp",title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",source:"@site/docs/getting-started/tutorials-and-examples/hosting-server-4free-gcp.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/hosting-server-4free-gcp",permalink:"/de/docs/next/getting-started/tutorials-and-examples/hosting-server-4free-gcp",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"hosting",permalink:"/de/docs/next/tags/hosting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",frontMatter:{title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",tags:["tutorial-example","hosting"]},sidebar:"main",previous:{title:"Gravity Gun",permalink:"/de/docs/next/getting-started/tutorials-and-examples/gravity-gun"},next:{title:"Monster Truck",permalink:"/de/docs/next/getting-started/tutorials-and-examples/monster-truck"}},l={},u=[{value:"What Is Google Cloud?",id:"what-is-google-cloud",level:2},{value:"Setting Up a Google Cloud Server from Scratch for nanos world",id:"setting-up-a-google-cloud-server-from-scratch-for-nanos-world",level:2},{value:"Step 1: Sign In to Google Cloud",id:"step-1-sign-in-to-google-cloud",level:3},{value:"Step 2: Create a New Google Cloud Server",id:"step-2-create-a-new-google-cloud-server",level:3},{value:"Step 3: Use your Google Cloud Server",id:"step-3-use-your-google-cloud-server",level:3},{value:"Step 4: Installing nanos world server",id:"step-4-installing-nanos-world-server",level:3},{value:"Step 5: Forwarding Ports in the Google Cloud",id:"step-5-forwarding-ports-in-the-google-cloud",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We are not responsible for charges or improper configurations in your Google Cloud platform, this guide is only intended to give a hint of an opportunity and possibility of hosting.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The following guide was based and had several excerpts taken from ",(0,a.kt)("a",{parentName:"p",href:"https://linuxhint.com/setup_google_cloud_server"},"https://linuxhint.com/setup","_","google","_","cloud","_","server"),".")),(0,a.kt)("h2",{id:"what-is-google-cloud"},"What Is Google Cloud?"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(82869).Z,width:"758",height:"427"})),(0,a.kt)("p",null,"Launched in 2008, Google Cloud is a comprehensive cloud computing suite running on the same powerful global infrastructure Google uses for its central products, including Google Search and YouTube."),(0,a.kt)("p",null,"Google Cloud provides secure storage, powerful compute, and integrated data analytics products that can satisfy the needs of everyone from individual home users to larger enterprises."),(0,a.kt)("p",null,"Some of the most noteworthy use cases of Google Cloud include web hosting, deployment of globally available apps, fully managed cloud data warehouse, machine learning, shared gaming experiences, and automation of repetitive tasks, just to give a few examples."),(0,a.kt)("p",null,"With Google Cloud, anyone can easily spin up a virtual machine in seconds and use it as a worry-free alternative to a physical server. Because all resources are virtualized, it\u2019s possible to effortlessly add more processing power or storage on demand, so you always pay only for what you use."),(0,a.kt)("p",null,"Best of all, all new Google Cloud users receive a $300 credit that can be used with any Google Cloud service. To be eligible for the bonus credit, you have to be a new Google Cloud customer and set up a billing account by providing your credit card information, which is required to verify that you\u2019re not a bot."),(0,a.kt)("h2",{id:"setting-up-a-google-cloud-server-from-scratch-for-nanos-world"},"Setting Up a Google Cloud Server from Scratch for nanos world"),(0,a.kt)("p",null,"Google has made it very easy to set a new Google Cloud server from scratch, and the whole process shouldn\u2019t take you more than 15 minutes from start to finish."),(0,a.kt)("h3",{id:"step-1-sign-in-to-google-cloud"},"Step 1: Sign In to Google Cloud"),(0,a.kt)("p",null,"At ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"https://console.cloud.google.com"),", click on ",(0,a.kt)("strong",{parentName:"p"},"Get started for free")," located in the upper-right of the screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(26406).Z,width:"1904",height:"677"})),(0,a.kt)("p",null,"If you haven\u2019t provided your credit card details to Google before, you will be asked to do so now. Don\u2019t worry: Google won\u2019t start charging you until you spend the $300 bonus, which you can do within a year. Furthermore, you have to manually upgrade to a paid account for Google to start charging you."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(92744).Z,width:"1919",height:"939"})),(0,a.kt)("h3",{id:"step-2-create-a-new-google-cloud-server"},"Step 2: Create a New Google Cloud Server"),(0,a.kt)("p",null,"To create a new VM, select \u2018Compute Engine\u2019 and then \u2018VM Instances\u2019"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(46148).Z,width:"576",height:"923"})),(0,a.kt)("p",null,"If it is not enabled yet, enable it and wait about 1-2 minutes to finish:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(26279).Z,width:"591",height:"453"})),(0,a.kt)("p",null,"After that, you will be able to create a new Instance:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(45431).Z,width:"1226",height:"734"})),(0,a.kt)("p",null,"Give it a ",(0,a.kt)("strong",{parentName:"p"},"Name")," and select under Machine Configuration the Series ",(0,a.kt)("strong",{parentName:"p"},"N1")," and Machine Type ",(0,a.kt)("em",{parentName:"p"},"f1-micro")," - this part is important as only f1-micro is under Free Tier. Also it is required that you select one of the following regions to be eligible for Free Tier: ",(0,a.kt)("strong",{parentName:"p"},"Oregon: us-west1"),", ",(0,a.kt)("strong",{parentName:"p"},"Iowa: us-central1")," or ",(0,a.kt)("strong",{parentName:"p"},"South Carolina: us-east1"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(96318).Z,width:"1309",height:"791"})),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Boot Disk"),", for this guide we recommend selecting ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu 20.04 LTS"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(86535).Z,width:"598",height:"373"})),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Firewall")," select to allow ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," and ",(0,a.kt)("strong",{parentName:"p"},"HTTPS")," traffic, as well in ",(0,a.kt)("strong",{parentName:"p"},"Security")," tab add your public ",(0,a.kt)("strong",{parentName:"p"},"SSH Key")," to it, if you don\u2019t have a key yet please ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"create one"),". Only with a ",(0,a.kt)("strong",{parentName:"p"},"SSH Key")," you will be able to connect to your instance from your computer."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(80419).Z,width:"475",height:"528"})),(0,a.kt)("p",null,"Once you have everything configured to your liking, click the \u2018Create\u2019 button on the bottom of the page."),(0,a.kt)("h3",{id:"step-3-use-your-google-cloud-server"},"Step 3: Use your Google Cloud Server"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(72901).Z,width:"1906",height:"945"})),(0,a.kt)("p",null,"The next step is to connect into your Virtual Machine, for that launch your prompt ","(","shell or cmd",")"," and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh [YOUR_VM_EXTERNAL_IP]\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(20305).Z,width:"670",height:"97"})),(0,a.kt)("p",null,"Type ",(0,a.kt)("strong",{parentName:"p"},"yes")," if asked, and you will be in!"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5401).Z,width:"673",height:"621"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your system doesn't have a built-in SSH client, you may use third-party clients like PuTTY.")),(0,a.kt)("h3",{id:"step-4-installing-nanos-world-server"},"Step 4: Installing nanos world server"),(0,a.kt)("p",null,"Now you must download nanos world server in your VM."),(0,a.kt)("p",null,"For that, you should use SteamCMD. Install it by doing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd\n")),(0,a.kt)("p",null,"Then, launch SteamCMD by running ",(0,a.kt)("inlineCode",{parentName:"p"},"steamcmd"),"."),(0,a.kt)("p",null,"Select a directory for your server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir ./nanos-world-server\n")),(0,a.kt)("p",null,"Then login anonymously:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,a.kt)("p",null,"Install nanos world server by using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,a.kt)("p",null,"This will download the server. After downloading, navigate to your server folder and start your server like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x ./NanosWorldServer.sh\n./NanosWorldServer.sh\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(52669).Z,width:"1479",height:"131"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"tmux")," if you want to run the server even if you're not logged in via SSH. In case it isn't installed in your instance, do ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt install tmux"),".")),(0,a.kt)("p",null,"Note that your server failed to communicate with the ",(0,a.kt)("strong",{parentName:"p"},"Master Server"),", this is because we didn\u2019t forward the correct ports yet in your VM, let\u2019s do that in the next step!"),(0,a.kt)("h3",{id:"step-5-forwarding-ports-in-the-google-cloud"},"Step 5: Forwarding Ports in the Google Cloud"),(0,a.kt)("p",null,"To be able to communicate with Master Server or for other players to be able to connect to your server, you must forward your server ports. By default nanos world use ports 7777 (UDP and TCP) and 7778 (UDP)."),(0,a.kt)("p",null,"First go to the left menu bar and select ",(0,a.kt)("strong",{parentName:"p"},"VPC network")," and ",(0,a.kt)("strong",{parentName:"p"},"Firewall"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(51100).Z,width:"428",height:"862"})),(0,a.kt)("p",null,"In that, you will be able to create a new ",(0,a.kt)("strong",{parentName:"p"},"Firewall Rule"),", add the name you want to it, set it to ",(0,a.kt)("strong",{parentName:"p"},"Ingress"),", set source IP: ",(0,a.kt)("strong",{parentName:"p"},"0.0.0.0/0")," and select ",(0,a.kt)("strong",{parentName:"p"},"Specified protocol and ports"),": ",(0,a.kt)("strong",{parentName:"p"},"tcp: 7777")," and ",(0,a.kt)("strong",{parentName:"p"},"udp: 7777-7778"),", and create it."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(43995).Z,width:"843",height:"810"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(62354).Z,width:"824",height:"656"})),(0,a.kt)("p",null,"Now you can restart your server and you will see it will communicate properly with Master Server ","(","no warnings anymore",")",":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(58543).Z,width:"1048",height:"118"})),(0,a.kt)("admonition",{title:"success!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"And now you can find it in the ",(0,a.kt)("strong",{parentName:"p"},"Find Servers")," menu!")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(33720).Z,width:"1627",height:"211"})),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this guide you learnt how easy it is to create a free server for nanos world using Google Cloud! Remember that Google Cloud is a paid service that offers small free tasting services, as nanos world doesn\u2019t need that much processing the Free Tier is enough for basic game modes and to play with friends! Pay attention to the Google Cloud contracts and try to learn out more about it so as not to be caught off guard!"))}c.isMDXComponent=!0},82869:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},26406:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-02-11b143eefb88e0aa4b698aded9983604.webp"},92744:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-03-3c8452b3eda72b2508c0023289427666.webp"},46148:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-04-87f65b2016c5e765ddb2c58d0bcbdd73.webp"},26279:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-05-2b1d3bdef84779c3e478c72c2c8b7620.webp"},45431:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-06-763426a2af098c512a936c18ed69fd13.webp"},96318:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-07-1f11a2efe24eac3c10959047503a9d63.webp"},86535:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-08-445433abf3999d528e982a4bd473ef12.webp"},80419:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-09-3b12505b34185a08180988a05f1792e5.webp"},72901:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-10-deda6465a33db4c4223cd330fae07d68.webp"},20305:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-11-cf22021f7aecb46d569dc8d050e8eda7.webp"},5401:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-12-f2425b376b78c28a80eded980cbf9103.webp"},52669:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-13-89c480c7e6a91f8c5b92b4f9a352eb7b.webp"},51100:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-14-1cda858d7c1a7db229a976bbc8c0a5d9.webp"},43995:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-15-7a5ae30f48923111591da2b5719d6113.webp"},62354:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-16-39c1d28f0529b33058eea605452e65f6.webp"},58543:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-17-7e8f4661df0d169715203cf8fc8de001.webp"},33720:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/hosting-4free-18-559efbd07670b663c6bbbcd4abc0a838.webp"}}]);
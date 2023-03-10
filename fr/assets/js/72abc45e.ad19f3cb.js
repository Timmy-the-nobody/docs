"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4134],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||g[c]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84415:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"\ud83e\ude9f Widget",description:"Class for spawning Unreal Widgets in the screen",sidebar_position:0,tags:["scripting","ui"]},l=void 0,o={unversionedId:"scripting-reference/classes/widget",id:"scripting-reference/classes/widget",title:"\ud83e\ude9f Widget",description:"Class for spawning Unreal Widgets in the screen",source:"@site/docs/scripting-reference/classes/widget.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/widget",permalink:"/fr/docs/next/scripting-reference/classes/widget",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"ui",permalink:"/fr/docs/next/tags/ui"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 mars 2023",sidebarPosition:0,frontMatter:{title:"\ud83e\ude9f Widget",description:"Class for spawning Unreal Widgets in the screen",sidebar_position:0,tags:["scripting","ui"]},sidebar:"main",previous:{title:"\ud83d\udda5\ufe0f WebUI",permalink:"/fr/docs/next/scripting-reference/classes/webui"},next:{title:"Base Actor",permalink:"/fr/docs/next/scripting-reference/classes/base-classes/actor"}},d={},p=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"Creating a Simple a Native Text and adding it to screen",id:"creating-a-simple-a-native-text-and-adding-it-to-screen",level:4},{value:"Creating a Widgets with Childs",id:"creating-a-widgets-with-childs",level:4},{value:"Using a WebUI as Image Brush",id:"using-a-webui-as-image-brush",level:4},{value:"Subscribing for a Dispatcher",id:"subscribing-for-a-dispatcher",level:4},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2},{value:"\u2705\xa0NativeWidgets to Unreal Widgets Relation",id:"nativewidgets-to-unreal-widgets-relation",level:2},{value:"\u2705\xa0List of Supported Parameter Types",id:"list-of-supported-parameter-types",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},m=s("HeaderDeclaration"),g=s("ConstructorDeclaration"),c=s("FunctionsDeclaration"),k=s("EventsDeclaration"),N=s("Enums"),u={toc:p},f="wrapper";function h(t){let{components:e,...n}=t;return(0,r.kt)(f,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(m,{type:"Class",name:"Widget",image:"/img/docs/widget.webp",mdxType:"HeaderDeclaration"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Widget")," class allows a very versatile way to create and use Unreal widgets as UI within the game."),(0,r.kt)("admonition",{title:"Note",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Most parameters are not exposed in the Widget class, and should be called using the method ",(0,r.kt)("inlineCode",{parentName:"p"},"CallBlueprintEvent()"),", which will call the specific underlying Widget method.")),(0,r.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,r.kt)("h4",{id:"creating-a-simple-a-native-text-and-adding-it-to-screen"},"Creating a Simple a Native Text and adding it to screen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local my_text = Widget(NativeWidget.Text)\nmy_text:CallBlueprintEvent("SetText", "Hello World!")\nmy_text:AddToViewport()\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"SetText")," is a method from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UTextBlock/"},"UTextBlock"),", the Widget associated to ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeWidget.Text"),".")),(0,r.kt)("h4",{id:"creating-a-widgets-with-childs"},"Creating a Widgets with Childs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local my_vertical_box = Widget(NativeWidget.VerticalBox)\nmy_vertical_box:AddToViewport()\n\nlocal my_text = Widget(NativeWidget.Text)\nmy_text:CallBlueprintEvent("SetText", "Hello World!")\n\nlocal my_button = Widget(NativeWidget.Button)\n\nmy_vertical_box:AddChild(my_text)\nmy_vertical_box:AddChild(my_button)\n')),(0,r.kt)("h4",{id:"using-a-webui-as-image-brush"},"Using a WebUI as Image Brush"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local webui = WebUI("mywebui", "https://google.com", WidgetVisibility.Hidden)\n\nlocal my_image = Widget(NativeWidget.Image)\nmy_image:CallBlueprintEvent("SetBrushFromMaterial", webui)\nmy_image:AddToViewport()\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"SetBrushFromMaterial")," is a method from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UImage/"},"UImage"),", and expects a ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterialInstance")," as parameter. Passing ",(0,r.kt)("strong",{parentName:"p"},"WebUI"),", ",(0,r.kt)("strong",{parentName:"p"},"SceneCapture")," or ",(0,r.kt)("strong",{parentName:"p"},"Canvas")," converts it to it's internal Material automatically when being passed as parameter!")),(0,r.kt)("h4",{id:"subscribing-for-a-dispatcher"},"Subscribing for a Dispatcher"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'local my_button = Widget(NativeWidget.Button)\n\n-- Puts a text inside of it\nlocal my_text = Widget(NativeWidget.Text)\nmy_text:CallBlueprintEvent("SetText", "Press Me!")\nmy_button:AddChild(my_text)\n\n-- Binds the native OnClicked dispatcher\nmy_button:BindBlueprintEventDispatcher("OnClicked", function()\n    Console.Log("clicked!")\nend)\n\n-- Adds the button to viewport (will fill the whole screen)\nmy_button:AddToViewport()\n')),(0,r.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,r.kt)(g,{type:"Class",name:"Widget",mdxType:"ConstructorDeclaration"}),(0,r.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,r.kt)(c,{type:"Class",name:"Widget",mdxType:"FunctionsDeclaration"}),(0,r.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,r.kt)(k,{type:"Class",name:"Widget",mdxType:"EventsDeclaration"}),(0,r.kt)("h2",{id:"nativewidgets-to-unreal-widgets-relation"},"\u2705\xa0NativeWidgets to Unreal Widgets Relation"),(0,r.kt)("p",null,"List of the relation Unreal native ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UWidget/"},"Widgets")," \u2194 ",(0,r.kt)(N,{mdxType:"Enums"},"NativeWidget")," Enums:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Enum"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unreal Class"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Is Panel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.Border"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UBorder/"},"Border")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.Button"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UButton/"},"Button")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.CheckBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UCheckBox/"},"CheckBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.Image"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UImage/"},"Image")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.ProgressBar"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UProgressBar/"},"ProgressBar")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.RichTextBlock"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/URichTextBlock/"},"RichTextBlock")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.Slider"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/USlider/"},"Slider")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.Text"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UTextBlock/"},"TextBlock")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.ComboBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UComboBox/"},"ComboBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.EditableText"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UEditableText/"},"EditableText")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.EditableTextMultiLine"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UMultiLineEditableText/"},"MultiLineEditableText")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.SpinBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/USpinBox/"},"SpinBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.TextBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UEditableTextBox/"},"EditableTextBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.TextBoxMultiLine"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UMultiLineEditableTextBox/"},"MultiLineEditableTextBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.CanvasPanel"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UCanvasPanel/"},"CanvasPanel")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.GridPanel"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UGridPanel/"},"GridPanel")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.HorizontalBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UHorizontalBox/"},"HorizontalBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.Overlay"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UOverlay/"},"Overlay")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.ScaleBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UScaleBox/"},"ScaleBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.ScrollBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UScrollBox/"},"ScrollBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.SizeBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/USizeBox/"},"SizeBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.UniformGridPanel"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UUniformGridPanel/"},"UniformGridPanel")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.VerticalBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UVerticalBox/"},"VerticalBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.WrapBox"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UWrapBox/"},"WrapBox")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"NativeWidget.BackgroundBlur"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://docs.unrealengine.com/5.1/en-US/API/Runtime/UMG/Components/UBackgroundBlur/"},"BackgroundBlur")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("h2",{id:"list-of-supported-parameter-types"},"\u2705\xa0List of Supported Parameter Types"),(0,r.kt)("p",null,"See all Supported Parameter Types in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/blueprint#list-of-supported-parameter-types"},"Blueprint Page"),"."))}h.isMDXComponent=!0}}]);
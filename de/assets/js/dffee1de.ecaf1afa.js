"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5212],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=a.createContext({}),p=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(r.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=s,y=c["".concat(r,".").concat(m)]||c[m]||u[m]||l;return t?a.createElement(y,i(i({ref:n},d),{},{components:t})):a.createElement(y,i({ref:n},d))}));function y(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[c]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));const l={title:"Inheriting Classes",description:"How to inherit nanos world Classes",sidebar_position:8,tags:["scripting"]},i=void 0,o={unversionedId:"core-concepts/scripting/inheriting-classes",id:"version-latest/core-concepts/scripting/inheriting-classes",title:"Inheriting Classes",description:"How to inherit nanos world Classes",source:"@site/versioned_docs/version-latest/core-concepts/scripting/inheriting-classes.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/inheriting-classes",permalink:"/de/docs/core-concepts/scripting/inheriting-classes",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1677964408,formattedLastUpdatedAt:"4. M\xe4rz 2023",sidebarPosition:8,frontMatter:{title:"Inheriting Classes",description:"How to inherit nanos world Classes",sidebar_position:8,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Extending Classes",permalink:"/de/docs/core-concepts/scripting/extending-classes"},next:{title:"Dimensions",permalink:"/de/docs/core-concepts/scripting/dimensions"}},r={},p=[{value:"Inheriting a Class",id:"inheriting-a-class",level:3},{value:"Multiple Inheritance",id:"multiple-inheritance",level:3},{value:"Overriding the Constructor",id:"overriding-the-constructor",level:3},{value:"Global Registry",id:"global-registry",level:3},{value:"Adding new Methods",id:"adding-new-methods",level:3},{value:"Overriding Existing Methods",id:"overriding-existing-methods",level:3},{value:"Calling Native Methods",id:"calling-native-methods",level:3},{value:"Calling Parent Methods",id:"calling-parent-methods",level:3},{value:"Overriding <code>__newindex</code>",id:"overriding-__newindex",level:3},{value:"Overriding <code>__index</code>",id:"overriding-__index",level:3},{value:"Overriding <code>__tostring</code>",id:"overriding-__tostring",level:3},{value:"Native Events",id:"native-events",level:3},{value:"Multiple Parents Example:",id:"multiple-parents-example",level:4},{value:"Client/Server Synchronization",id:"clientserver-synchronization",level:3},{value:"Custom Remote Events",id:"custom-remote-events",level:3},{value:"Class Custom Default Values",id:"class-custom-default-values",level:3},{value:"Class Register Event",id:"class-register-event",level:3}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"How to inherit nanos world Classes. nanos world provides a built-in way of inheriting the built-in Classes"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"This feature is still ",(0,s.kt)("strong",{parentName:"p"},"experimental"),", you can try it out and provide feedback before it's full release!")),(0,s.kt)("h3",{id:"inheriting-a-class"},"Inheriting a Class"),(0,s.kt)("p",null,"Inheriting a nanos world Class is really easy, for that you just need to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"Inherit")," static method on the Class you want to inherit:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Creates a new Class called "MyNewClass" inheriting from Prop\n-- and stores it in the variable MyNewClass\nMyNewClass = Prop.Inherit("MyNewClass")\n\n-- Spawn it using the default constructor\nlocal my_new_class_instance = MyNewClass(Vector(), Rotator(), "nanos-world::SM_Cube")\n')),(0,s.kt)("h3",{id:"multiple-inheritance"},"Multiple Inheritance"),(0,s.kt)("p",null,"You can also inherit from other inherited classes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Creates a new Class called "MyNewSubClass" inheriting from MyNewClass\nMyNewSubClass = MyNewClass.Inherit("MyNewSubClass")\n\n-- Spawn it using the default constructor\nlocal instance = MyNewSubClass(Vector(), Rotator(), "nanos-world::SM_Cube")\n')),(0,s.kt)("h3",{id:"overriding-the-constructor"},"Overriding the Constructor"),(0,s.kt)("p",null,"You can create your own Constructor for your entities, for that you need to define the ",(0,s.kt)("inlineCode",{parentName:"p"},"Constructor")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Defines my constructor with any parameters you desire\nfunction MyNewClass:Constructor(location, rotation)\n    -- Do any kind of logic here\n    location = location + Vector(0, 0, 100)\n\n    -- Calls Super Constructor to finalize the construction\n    -- This is the original constructor (in this case from Prop)\n    -- This is mandatory, if you don\'t call it, it will throw an error\n    -- You will only be able to access original and your own class\n    -- methods after calling it, when the class is completely spawned\n    self.Super:Constructor(location, rotation, "nanos-world::SM_Cube")\n\n    -- Now it\'s allowed to class methods\n    self:SetMaterialColorParameter("Tint", Color.RED)\nend\n\n-- Spawn it using your custom constructor\nlocal my_new_class_instance = MyNewClass(Vector(123, 456, 100), Rotator())\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Inside the constructor, the entity is not fully spawned yet, so you cannot call other entity methods besides ",(0,s.kt)("inlineCode",{parentName:"p"},"self.Super:Constructor"),". Here you should just use to validate constructor parameters, and use ",(0,s.kt)("inlineCode",{parentName:"p"},"Spawn")," event to fully setup the entity.")),(0,s.kt)("h3",{id:"global-registry"},"Global Registry"),(0,s.kt)("p",null,"Through the parent class, we can get a list of all children classes of that class, having a global registry of all existing classes!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"local children_classes = ToolGun.GetInheritedClasses()\nfor _, class in pairs(children_classes) do\n    -- 'class' is a custom inherited class! we can spawn it\n    local p = class()\nend\n")),(0,s.kt)("h3",{id:"adding-new-methods"},"Adding new Methods"),(0,s.kt)("p",null,"Adding new methods for new classes is very straightforward, let's say we want to add a new method for ",(0,s.kt)("strong",{parentName:"p"},"MyNewClass"),", we just do that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'function MyNewClass:Explode()\n    -- Spawns a particle\n    Particle(self:GetLocation(), Rotator(), "nanos-world::P_Explosion")\n\n    -- Destroys myself\n    self:Destroy()\nend\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Within your methods, you can access the called entity instance with ",(0,s.kt)("inlineCode",{parentName:"p"},"self"),".")),(0,s.kt)("p",null,"And then you are able to call it as usual:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"my_new_class_instance:Explode()\n")),(0,s.kt)("h3",{id:"overriding-existing-methods"},"Overriding Existing Methods"),(0,s.kt)("p",null,"Besides creating new methods, it's possible to override existing ones, for that just redefine them:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function MyNewClass:SetLocation(new_location)\n    -- Do any kind of logic here\n    new_location = new_location + Vector(0, 0, 100)\n\n    -- Call Super to set the location to the parent Prop\n    self.Super:SetLocation(new_location)\nend\n")),(0,s.kt)("h3",{id:"calling-native-methods"},"Calling Native Methods"),(0,s.kt)("p",null,"To call native Class methods, you can use the special variable ",(0,s.kt)("inlineCode",{parentName:"p"},"self.Super"),", which will allow you accessing the native and original methods directly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function MyNewClass:GetRotation()\n    -- Calls original GetRotation and adds 90 to yaw\n    return self.Super:GetRotation() + Rotator(0, 90, 0)\nend\n")),(0,s.kt)("h3",{id:"calling-parent-methods"},"Calling Parent Methods"),(0,s.kt)("p",null,"Besides calling the original/native method with ",(0,s.kt)("inlineCode",{parentName:"p"},"self.Super"),", we can also call parent methods if you have nested inheritance."),(0,s.kt)("p",null,"For that, you must use a special Lua syntax with ",(0,s.kt)("inlineCode",{parentName:"p"},"PARENT_CLASS.METHOD_NAME(self, ...)"),", for example:"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In Lua, passing a value as the first parameter to a method while calling it with ",(0,s.kt)("inlineCode",{parentName:"p"},".")," will make that value appear as ",(0,s.kt)("inlineCode",{parentName:"p"},"self")," inside the called method (if the method was defined with ",(0,s.kt)("inlineCode",{parentName:"p"},":"),").")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Inherits Prop\nMyNewClass = Prop.Inherit("MyNewClass")\n\nfunction MyNewClass:SetScale(scale)\n    -- Does some logic\n    scale = scale * 2\n\n    -- Calls Super (original Prop method)\n    self.Super:SetScale(scale) * 2\nend\n\n-- Inherits MyNewClass\nMyNewSubClass = MyNewClass.Inherit("MyNewSubClass")\n\nfunction MyNewSubClass:SetScale(scale)\n    -- Does some logic\n    scale = scale + Vector(2, 2, 2)\n\n    -- Calls Parent MyNewClass method with special syntax\n    MyNewClass.SetScale(self, scale)\nend\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"This same rule applies for calling inherited Constructors!")),(0,s.kt)("h3",{id:"overriding-__newindex"},"Overriding ",(0,s.kt)("inlineCode",{parentName:"h3"},"__newindex")),(0,s.kt)("p",null,"It is also possible to add a custom ",(0,s.kt)("inlineCode",{parentName:"p"},"__newindex")," metamethod on Inherited Classes."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"__newindex")," metamethod is a function which is triggered when you attempt to ",(0,s.kt)("strong",{parentName:"p"},"set")," a value in an entity. E.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"my_entity.something = 123"),".")),(0,s.kt)("p",null,"For that, we just add a custom method called ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"newindex")),":"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The method name must be ",(0,s.kt)("inlineCode",{parentName:"p"},"newindex")," and not ",(0,s.kt)("inlineCode",{parentName:"p"},"__newindex")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"__newindex")," is the native method used internally to make the inheritance to work.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'function MyNewClass:newindex(key, value)\n    Console.Log("Setting a %s value: %s = %s", tostring(self), key, tostring(value))\nend\n')),(0,s.kt)("p",null,"An useful way of using ",(0,s.kt)("inlineCode",{parentName:"p"},"__newindex")," is overriding it to ",(0,s.kt)("inlineCode",{parentName:"p"},"SetValue")," automatically:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function MyNewClass:newindex(key, value)\n    self:SetValue(key, value)\nend\n\n-- Example usage\nlocal my_entity = MyNewClass()\nmy_entity.amazing_value = 123\n")),(0,s.kt)("h3",{id:"overriding-__index"},"Overriding ",(0,s.kt)("inlineCode",{parentName:"h3"},"__index")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"__index")," metamethod is a function which is triggered when you attempt to ",(0,s.kt)("strong",{parentName:"p"},"get")," a value from an entity. E.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"local value = my_entity.something"),".")),(0,s.kt)("p",null,"For that, we just add a custom method called ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"index")),":"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The method name must be ",(0,s.kt)("inlineCode",{parentName:"p"},"index")," and not ",(0,s.kt)("inlineCode",{parentName:"p"},"__index")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"__index")," is the native method used internally to make the inheritance to work.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'function MyNewClass:index(key)\n    Console.Log("Getting %s value: %s", tostring(self), key)\n    -- ... do something\n    return some_value\nend\n')),(0,s.kt)("p",null,"You can also use ",(0,s.kt)("inlineCode",{parentName:"p"},"__index")," to return a method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'function MyNewClass:index(key)\n    Console.Log("%s key not found: %s", tostring(self), key)\n\n    -- inside the redirected method you will have all the parameters passed originally\n    return function(self, param1, param2...)\n        -- ... do something\n        return "triggered!"\n    end\n\n    -- or you can even redirect to other member functions\n    return MyClass.SetLocation\nend\n\nlocal my_entity = MyNewClass()\nmy_entity:NonExistentMethod(123, "456")\n')),(0,s.kt)("p",null,"An useful way of using ",(0,s.kt)("inlineCode",{parentName:"p"},"__index")," is overriding it to ",(0,s.kt)("inlineCode",{parentName:"p"},"GetValue")," automatically:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},"function MyNewClass:index(key)\n    return self:GetValue(key)\nend\n\nlocal my_entity = MyNewClass()\nlocal amazing_value = my_entity.amazing_value\n")),(0,s.kt)("h3",{id:"overriding-__tostring"},"Overriding ",(0,s.kt)("inlineCode",{parentName:"h3"},"__tostring")),(0,s.kt)("p",null,"You can override ",(0,s.kt)("inlineCode",{parentName:"p"},"__tostring")," as well as usual:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'function MyNewClass:__tostring()\n    return "My Incredible Class!"\nend\n')),(0,s.kt)("h3",{id:"native-events"},"Native Events"),(0,s.kt)("p",null,"All events which are triggered on an inherited Class will only trigger in that Class and it's parents, also the parameter passed is the custom entity itself, example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'Prop.Subscribe("Spawn", function(self)\n    Console.Log("Spawned Prop: %s", tostring(self))\nend)\n\nMyNewClass.Subscribe("Spawn", function(self)\n    Console.Log("Spawned MyNewClass: %s", tostring(self))\nend)\n\nlocal my_entity = MyNewClass()\nlocal my_prop = Prop()\nlocal my_other_entity_inherited_from_prop = MyOtherClass()\n\n-- Will output:\n--  Spawned Prop: MyNewClass\n--  Spawned MyNewClass: MyNewClass\n--  Spawned Prop: Prop\n--  Spawned Prop: MyOtherClass\n')),(0,s.kt)("p",null,"Another way of subscribing is separating the definition and the subscription, this way you don't need the first ",(0,s.kt)("inlineCode",{parentName:"p"},"self")," parameter anymore:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'function MyNewClass:OnSpawn()\n    -- self is present is this context automatically\n    Console.Log("Spawned MyNewClass: %s", tostring(self))\nend\n\nMyNewClass.Subscribe("Spawn", MyNewClass.OnSpawn)\n')),(0,s.kt)("h4",{id:"multiple-parents-example"},"Multiple Parents Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'MyNewClass = Prop.Inherit("MyNewClass")\nMyNewSubClass = MyNewClass.Inherit("MyNewSubClass")\nMyNewOtherSubClass = MyNewClass.Inherit("MyNewOtherSubClass")\n\nProp.Subscribe("Spawn", function(self)\n    Console.Log("Spawned Prop: %s", tostring(self))\nend)\n\nMyNewClass.Subscribe("Spawn", function(self)\n    Console.Log("Spawned MyNewClass: %s", tostring(self))\nend)\n\nMyNewSubClass.Subscribe("Spawn", function(self)\n    Console.Log("Spawned MyNewSubClass: %s", tostring(self))\nend)\n\nMyNewOtherSubClass.Subscribe("Spawn", function(self)\n    Console.Log("Spawned MyNewOtherSubClass: %s", tostring(self))\nend)\n\nlocal my_entity = MyNewSubClass()\n\n-- Will output:\n--  Spawned Prop: MyNewClass\n--  Spawned MyNewClass: MyNewClass\n--  Spawned MyNewSubClass: MyNewClass\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Note that ",(0,s.kt)("strong",{parentName:"p"},"Prop")," and all ",(0,s.kt)("strong",{parentName:"p"},"parent")," Classes will still trigger events for all child Classes!")),(0,s.kt)("h3",{id:"clientserver-synchronization"},"Client/Server Synchronization"),(0,s.kt)("p",null,"If you define your entities on both Client and Server side, they will behave properly and in a synchronized way! Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Server/Index.lua",title:"Server/Index.lua"},'MyNewClass = Prop.Inherit("MyNewClass")\n\nMyNewClass.Subscribe("Spawn", function(self)\n    Console.Log("Spawned MyNewClass: %s", tostring(self))\nend)\n\nlocal my_entity = MyNewClass()\n\n-- Will output:\n--  Spawned MyNewClass: MyNewClass\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'MyNewClass = Prop.Inherit("MyNewClass")\n\nMyNewClass.Subscribe("Spawn", function(self)\n    -- It was spawned on server and will spawn on Client as a MyNewClass properly\n    Console.Log("Spawned MyNewClass: %s", tostring(self))\nend)\n\n-- Will output:\n--  Spawned MyNewClass: MyNewClass\n')),(0,s.kt)("h3",{id:"custom-remote-events"},"Custom Remote Events"),(0,s.kt)("p",null,"It is also possible to trigger custom events on remote instances of your Class, using the methods ",(0,s.kt)("inlineCode",{parentName:"p"},"CallRemoteEvent")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"BroadcastRemoteEvent"),", it works like the ",(0,s.kt)("inlineCode",{parentName:"p"},"Events")," class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'-- inherits the Class\nMyNewClass = Prop.Inherit("MyNewClass")\n\n-- defines a custom method\nfunction MyNewClass:OnMyCustomRemoteEvent(a, b)\n    Console.Log("OnMyCustomRemoteEvent!", tostring(self), a, b)\n    self:CallRemoteEvent("AnotherRemoteEvent", 456, "def")\nend\n\n-- subscribes for a custom remote event\nMyNewClass.SubscribeRemote("MyCustomRemoteEvent", MyNewClass.OnMyCustomRemoteEvent)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Server/Index.lua",title:"Server/Index.lua"},'-- inherits the Class\nMyNewClass = Prop.Inherit("MyNewClass")\n\n-- Note that server-side received remote events have the \'player as first parameter\nfunction MyNewClass:OnAnotherRemoteEvent(player, a, b)\n    Console.Log("OnAnotherRemoteEvent!", tostring(self), tostring(player), a, b)\nend\n\n-- subscribes for a custom remote event\nMyNewClass.SubscribeRemote("AnotherRemoteEvent", MyNewClass.OnAnotherRemoteEvent)\n\n-- spawns an entity and calls the custom remote event on that entity\nlocal p = MyNewClass(...)\np:BroadcastRemoteEvent("MyCustomRemoteEvent", 123, "abc")\n')),(0,s.kt)("h3",{id:"class-custom-default-values"},"Class Custom Default Values"),(0,s.kt)("p",null,"It is possible to set a list of default values to the Inherited Class when creating it, just pass it as the 2nd parameter to ",(0,s.kt)("inlineCode",{parentName:"p"},"Inherit"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- inherits the Class\nMyNewClass = Prop.Inherit("MyNewClass", {\n    name = "My Name",\n    category = "breakable",\n    my_custom_param = 123\n})\n\nConsole.Log(MyNewClass.category)\n-- outputs "breakable"\n')),(0,s.kt)("h3",{id:"class-register-event"},"Class Register Event"),(0,s.kt)("p",null,"When you inherit a new class, the event ",(0,s.kt)("inlineCode",{parentName:"p"},"ClassRegister")," will be triggered on the parents classes, allowing Packages to know when a new Class is registered."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'Prop.Subscribe("ClassRegister", function(class)\n    -- here we see an useful case for the default values\n    -- as we can access it here\n    Console.Log(MyNewClass.name) -- outputs "My Name\n    -- now we can do something (add to spawn menu?)\nend)\n\n-- inherits the Class\nMyNewClass = Prop.Inherit("MyNewClass", {\n    name = "My Name",\n    category = "breakable",\n    my_custom_param = 123\n})\n')))}u.isMDXComponent=!0}}]);
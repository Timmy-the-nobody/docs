"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5031],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,g=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},84156:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"\ud83d\udcbe Database",description:"The Database entity provides programmers a way to access SQL databases easily through scripting.",sidebar_position:0,tags:["class"]},i=void 0,l={unversionedId:"scripting-reference/classes/database",id:"version-latest/scripting-reference/classes/database",title:"\ud83d\udcbe Database",description:"The Database entity provides programmers a way to access SQL databases easily through scripting.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/database.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/database",permalink:"/fr/docs/scripting-reference/classes/database",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/tags/class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1678477037,formattedLastUpdatedAt:"10 mars 2023",sidebarPosition:0,frontMatter:{title:"\ud83d\udcbe Database",description:"The Database entity provides programmers a way to access SQL databases easily through scripting.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83e\uddd1\u200d\ud83e\uddb2 CharacterSimple",permalink:"/fr/docs/scripting-reference/classes/charactersimple"},next:{title:"\ud83d\udd8c\ufe0f Decal",permalink:"/fr/docs/scripting-reference/classes/decal"}},s={},d=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83e\uddf5\xa0Connection String",id:"connection-string",level:2},{value:"\u25b6\xa0SQLite",id:"sqlite",level:3},{value:"\u25b6\xa0MySQL",id:"mysql",level:3},{value:"\u25b6\xa0PostgreSQL",id:"postgresql",level:3}],p=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},m=p("HeaderDeclaration"),c=p("ConstructorDeclaration"),k=p("StaticFunctionsDeclaration"),g=p("FunctionsDeclaration"),N={toc:d},f="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(f,(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(m,{type:"Class",name:"Database",image:"/img/docs/db.webp",mdxType:"HeaderDeclaration"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Currently nanos world supports ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLite"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," out of the box.")),(0,r.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Server/Index.lua","Server/Index.lua":!0},"-- Creates a SQLite connection, using a local file called 'database_filename.db'\nlocal sqlite_db = Database(DatabaseEngine.SQLite, \"db=database_filename.db timeout=2\")\n\n-- Creates a table\nsqlite_db:Execute([[\n    CREATE TABLE IF NOT EXISTS test (\n        id INTEGER,\n        name VARCHAR(100)\n    )\n]])\n\n-- Executes a Query\nsqlite_db:Execute(\"INSERT INTO test VALUES (1, 'amazing')\", function(affected_rows)\n    Console.Log(\"Affected Rows: \" .. tostring(affected_rows))\n    -- Will output: 1\nend)\n\n-- Selects the data\nsqlite_db:Select(\"SELECT * FROM test\", function(rows)\n    Console.Log(NanosUtils.Dump(rows))\n    -- Will output a table with all data from 'test'\nend)\n\n-- Selects the data with filter\nsqlite_db:Select(\"SELECT * FROM test WHERE name = :0\", function(rows)\n    Console.Log(NanosUtils.Dump(rows))\n    -- Will output a table with all data from 'test' where name matches 'amazing'\nend, 'amazing')\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All requests are thread safe! \ud83e\udd73")),(0,r.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,r.kt)(c,{type:"Class",name:"Database",mdxType:"ConstructorDeclaration"}),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The initial connection to the Database (when it's being constructed) is made on the main thread, so expect the server hanging for a few seconds during that.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the Database fails to connect, it will spit an error on console and will return ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),".")),(0,r.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,r.kt)(k,{type:"Class",name:"Database",mdxType:"StaticFunctionsDeclaration"}),(0,r.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,r.kt)(g,{type:"Class",name:"Database",mdxType:"FunctionsDeclaration"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When passing arguments to a query, use the following syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},":?")," where ? is the placeholder argument (i.e. :0) passed into the function.")),(0,r.kt)("p",null,"For a more in-depth example see ",(0,r.kt)("a",{parentName:"p",href:"#examples"},"Examples")),(0,r.kt)("h2",{id:"connection-string"},"\ud83e\uddf5\xa0Connection String"),(0,r.kt)("p",null,"Each ",(0,r.kt)("strong",{parentName:"p"},"Database Engine")," has it's own parameters which can be used on the ",(0,r.kt)("inlineCode",{parentName:"p"},"connection_string")," constructor. Those parameters are defined and backend-dependent by the Engine, being passed directly to the Backend when creating the connection."),(0,r.kt)("p",null,"They should be set in the following format: ",(0,r.kt)("inlineCode",{parentName:"p"},'"param1=value1 param2=value2 param3=value3"'),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Usually you don't need to explicitly define all (or most) of the parameters described here, just use the ones you make sure are useful for your needs. Some of them are described by the libraries but aren't 100% tested in nanos world.")),(0,r.kt)("h3",{id:"sqlite"},"\u25b6\xa0SQLite"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There is a special ",(0,r.kt)("strong",{parentName:"p"},"connection_string")," for SQLite: ",(0,r.kt)("inlineCode",{parentName:"p"},":memory:"),". This will create a database in the memory which is destroyed when the server closes.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"db/dbname"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"timeout"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"set sqlite busy timeout (in seconds) (",(0,r.kt)("a",{parentName:"td",href:"http://www.sqlite.org/c3ref/busy_timeout.html"},"link"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"readonly"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"open database in read-only mode instead of the default read-write (note that the database file must already exist in this case, see the ",(0,r.kt)("a",{parentName:"td",href:"https://www.sqlite.org/c3ref/open.html"},"documentation"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"synchronous"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"set the pragma synchronous flag (",(0,r.kt)("a",{parentName:"td",href:"http://www.sqlite.org/pragma.html#pragma_synchronous"},"link"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"shared_cache"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"should be true (",(0,r.kt)("a",{parentName:"td",href:"http://www.sqlite.org/c3ref/enable_shared_cache.html"},"link"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"vfs"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"set the SQLite VFS used to as OS interface. The VFS should be registered before opening the connection, see the ",(0,r.kt)("a",{parentName:"td",href:"https://www.sqlite.org/vfs.html"},"documentation"))))),(0,r.kt)("h3",{id:"mysql"},"\u25b6\xa0MySQL"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"db/dbname"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"The database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"user"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"User name to connect as")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"password/pass"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password to be used if the server demands password authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"host"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of host to connect to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"port"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port number to connect to at the server host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"unix_socket"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"sslca"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"sslcert"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"local_infile"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"should be ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," means ",(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_LOCAL_INFILE")," will be set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"charset"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"reconnect"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"if set to ",(0,r.kt)("inlineCode",{parentName:"td"},"1"),", will attempt to reconnect on connection loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"connect_timeout"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"should be positive integer value that means seconds corresponding to ",(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_CONNECT_TIMEOUT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"read_timeout"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"should be positive integer value that means seconds corresponding to ",(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_READ_TIMEOUT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"write_timeout"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"should be positive integer value that means seconds corresponding to ",(0,r.kt)("inlineCode",{parentName:"td"},"MYSQL_OPT_WRITE_TIMEOUT"))))),(0,r.kt)("h3",{id:"postgresql"},"\u25b6\xa0PostgreSQL"),(0,r.kt)("p",null,"More parameters and complete information can be found at the ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/8.3/libpq-connect.html"},"PostgreSQL Official Documentation"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"host"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of host to connect to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"hostaddr"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Numeric IP address of host to connect to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"port"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port number to connect to at the server host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"user"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"same as OS user name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"User name to connect as")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"dbname"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"same as user name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"password"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password to be used if the server demands password authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"connect_timeout"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum wait for connection, in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Command-line options to be sent to the server")))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[2199],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8170:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"compose",title:"Configuration for Compose",keywords:["compose","config","configuration","jetpack-compose","rules"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:5},p=void 0,u={unversionedId:"introduction/compose",id:"introduction/compose",title:"Configuration for Compose",description:"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:",source:"@site/docs/introduction/compose.md",sourceDirName:"introduction",slug:"/introduction/compose",permalink:"/docs/introduction/compose",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/compose.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"compose",title:"Configuration for Compose",keywords:["compose","config","configuration","jetpack-compose","rules"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Reporting",permalink:"/docs/introduction/reporting"},next:{title:"Suppressing Issues",permalink:"/docs/introduction/suppressing-rules"}},s={},m=[{value:"FunctionNaming",id:"functionnaming",level:3},{value:"Configurations:",id:"configurations",level:4},{value:"TopLevelPropertyNaming",id:"toplevelpropertynaming",level:3},{value:"Default Style:",id:"default-style",level:5},{value:"Compose Style:",id:"compose-style",level:5},{value:"Configurations:",id:"configurations-1",level:4},{value:"LongParameterList",id:"longparameterlist",level:3},{value:"Configurations:",id:"configurations-2",level:4},{value:"MagicNumber",id:"magicnumber",level:3},{value:"Configurations:",id:"configurations-3",level:4},{value:"UnusedPrivateMember",id:"unusedprivatemember",level:3},{value:"Configurations:",id:"configurations-4",level:4}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/androidx/androidx/blob/androidx-main/compose/docs/compose-api-guidelines.md"},"Compose API Guidelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose"},"Compose source"))),(0,a.kt)("h3",{id:"functionnaming"},"FunctionNaming"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/rules/naming#functionnaming"},"FunctionNaming"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@Composable")," functions that return ",(0,a.kt)("inlineCode",{parentName:"p"},"Unit")," are named using ",(0,a.kt)("inlineCode",{parentName:"p"},"PascalCase"),". Detekt may see this as a violation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun FooButton(text: String, onClick: () -> Unit) { // Violation for FooButton()\n")),(0,a.kt)("h4",{id:"configurations"},"Configurations:"),(0,a.kt)("p",null,"Choose ",(0,a.kt)("em",{parentName:"p"},"either")," of the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Augment default ",(0,a.kt)("inlineCode",{parentName:"li"},"functionPattern")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"'([A-Za-z][a-zA-Z0-9]*)|("),".",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"em"},")'")," (default: `'(","[a-z][a-zA-Z0-9]"),")|(",(0,a.kt)("inlineCode",{parentName:"li"},".*"),")'`)"),(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"ignoreAnnotated")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"['Composable']"))),(0,a.kt)("h3",{id:"toplevelpropertynaming"},"TopLevelPropertyNaming"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/rules/naming#toplevelpropertynaming"},"TopLevelPropertyNaming"),"."),(0,a.kt)("p",null,"Compose guidelines prescribe ",(0,a.kt)("inlineCode",{parentName:"p"},"CamelCase")," for top-level constants."),(0,a.kt)("h5",{id:"default-style"},"Default Style:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"private val FOO_PADDING = 16.dp\n")),(0,a.kt)("h5",{id:"compose-style"},"Compose Style:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"private val FooPadding = 16.dp\n")),(0,a.kt)("h4",{id:"configurations-1"},"Configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"constantPattern")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"'[A-Z][A-Za-z0-9]*'")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'[A-Z][_A-Z0-9]*'"),")")),(0,a.kt)("h3",{id:"longparameterlist"},"LongParameterList"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/rules/complexity#longparameterlist"},"LongParameterList"),"."),(0,a.kt)("p",null,"Composables may boast more than the typical number of function arguments (albeit mostly with default values). For example, see ",(0,a.kt)("a",{parentName:"p",href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/material/material/src/commonMain/kotlin/androidx/compose/material/OutlinedTextField.kt;l=133?q=OutlinedTextFieldLayout&ss=androidx%2Fplatform%2Fframeworks%2Fsupport:compose%2F"},"OutlinedTextField"),"."),(0,a.kt)("h4",{id:"configurations-2"},"Configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"functionThreshold")," to a higher value"),(0,a.kt)("li",{parentName:"ul"},"Additionally, can set ",(0,a.kt)("inlineCode",{parentName:"li"},"ignoreDefaultParameters = true"))),(0,a.kt)("h3",{id:"magicnumber"},"MagicNumber"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/rules/style#magicnumber"},"MagicNumber"),"."),(0,a.kt)("p",null,"Class/companion object/top-level properties that declare objects such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Color(0xFFEA6D7E)")," may be considered violations if they don't specify the named parameter (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"Color(color = 0xFFEA6D7E)"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val color1 = Color(0xFFEA6D7E) // Violation\n\nclass Foo {\n  val color2 = Color(0xFFEA6D7E) // Violation\n\n  companion object {\n    val color3 = Color(0xFFEA6D7E) // No violation if ignoreCompanionObjectPropertyDeclaration = true by default\n  }\n}\n")),(0,a.kt)("h4",{id:"configurations-3"},"Configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"ignorePropertyDeclaration = true"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ignoreCompanionObjectPropertyDeclaration = true")," (default)")),(0,a.kt)("h3",{id:"unusedprivatemember"},"UnusedPrivateMember"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/rules/style#unusedprivatemember"},"UnusedPrivateMember"),"."),(0,a.kt)("p",null,"Detekt may see composable preview functions, i.e. those marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"@Preview"),", as unused."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Preview\n@Composable\nprivate fun FooLazyColumnPreview() { // Violation for FooLazyColumnPreview()\n    FooLazyColumn()\n}\n")),(0,a.kt)("h4",{id:"configurations-4"},"Configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"ignoreAnnotated")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"['Preview']"))))}d.isMDXComponent=!0}}]);
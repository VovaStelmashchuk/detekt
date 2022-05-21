"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[8139],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},431:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"configurations",title:"Detekt Configuration File",keywords:["config","configuration","yaml"],permalink:"configurations.html",sidebar_position:3},s=void 0,u={unversionedId:"introduction/configurations",id:"introduction/configurations",title:"Detekt Configuration File",description:"detekt uses a YAML style configuration file for various things:",source:"@site/docs/introduction/configurations.md",sourceDirName:"introduction",slug:"/introduction/configurations",permalink:"/docs/introduction/configurations",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/configurations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"configurations",title:"Detekt Configuration File",keywords:["config","configuration","yaml"],permalink:"configurations.html",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Changelog and Migration Guide - Pre 1.0.0",permalink:"/docs/introduction/changelog-rc"},next:{title:"Reporting",permalink:"/docs/introduction/reporting"}},c={},p=[{value:"Rule sets and rules",id:"rule-sets-and-rules",level:2},{value:"Path Filters / Excludes / Includes",id:"path-filters--excludes--includes",level:3},{value:"Build failure",id:"build-failure",level:2},{value:"Console Reports",id:"console-reports",level:2},{value:"Output Reports",id:"output-reports",level:2},{value:"Processors",id:"processors",level:2},{value:"Config JSON Schema",id:"config-json-schema",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"detekt")," uses a ",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2/spec.html"},"YAML style configuration")," file for various things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"rule set and rule properties"),(0,i.kt)("li",{parentName:"ul"},"build failure"),(0,i.kt)("li",{parentName:"ul"},"console reports"),(0,i.kt)("li",{parentName:"ul"},"output reports"),(0,i.kt)("li",{parentName:"ul"},"processors")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/blob/main/detekt-core/src/main/resources/default-detekt-config.yml"},"default-detekt-config.yml"),"\nfile for all defined configuration options and their default values. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note:")," When using a custom config file, the default values are ignored unless you also set the ",(0,i.kt)("inlineCode",{parentName:"p"},"--build-upon-default-config")," flag."),(0,i.kt)("h2",{id:"rule-sets-and-rules"},"Rule sets and rules"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"detekt")," allows easily to just pick the rules you want and configure them the way you like.\nFor example if you want to allow up to 20 functions inside a Kotlin file instead of the default threshold, write:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"complexity:\n  TooManyFunctions:\n    thresholdInFiles: 20\n")),(0,i.kt)("p",null,"To read about all supported rule sets and rules, use the side navigation ",(0,i.kt)("inlineCode",{parentName:"p"},"Rule Sets"),"."),(0,i.kt)("h3",{id:"path-filters--excludes--includes"},"Path Filters / Excludes / Includes"),(0,i.kt)("p",null,"Fine grained path filters can be defined for each rule or rule set through globbing patterns.\nThis gives the user more freedom in analyzing only specific files\nand rule authors the ability to write ",(0,i.kt)("em",{parentName:"p"},"library only")," rules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"complexity:\n  TooManyFunctions:\n    ...\n    excludes: ['**/internal/**']\n    includes: ['**/internal/util/NeedsToBeChecked.kt']\n")),(0,i.kt)("p",null,"In case you want to apply the same filters for different rules, you can use\n",(0,i.kt)("a",{parentName:"p",href:"https://yaml.org/spec/1.2/spec.html#id2785586"},"YAML anchors and aliases")," to reapply previously defined paths."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"naming:\n  ClassNaming:\n    ...\n    excludes: &testFolders\n      - '**/test/**'\n      - '**/androidTest/**'\n  ConstructorParameterNaming:\n    ...\n    excludes: *testFolders\n")),(0,i.kt)("h2",{id:"build-failure"},"Build failure"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Detekt")," supports the option to fail your build if a threshold of code smell issues is met."),(0,i.kt)("p",null,"For this the following code must be inside the detekt config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"build:\n  maxIssues: 10 # break the build if more than ten weighted issues are found\n  weights:\n    complexity: 2 # every rule of the complexity rule set should count as if two issues were found...\n    LongParameterList: 1 # ...with the exception of the LongParameterList rule.\n    comments: 0 # comment rules are just a nice to know?!\n")),(0,i.kt)("p",null,"Every rule and rule set can be attached with an integer value which is the weight of the finding.\nFor example: If you have 5 findings of the category ",(0,i.kt)("em",{parentName:"p"},"complexity"),", then your failThreshold of 10 is reached as\n5 x 2 = 10. "),(0,i.kt)("p",null,"Weights are respected in the following priority order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The specified weight for a rule"),(0,i.kt)("li",{parentName:"ul"},"The specified weight for a rule set"),(0,i.kt)("li",{parentName:"ul"},"By default, the weight is 1.")),(0,i.kt)("h2",{id:"console-reports"},"Console Reports"),(0,i.kt)("p",null,"Uncomment the reports you don't care about."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"console-reports:\n  active: true\n  exclude:\n  #  - 'ProjectStatisticsReport'\n  #  - 'ComplexityReport'\n  #  - 'NotificationReport'\n  #  - 'FindingsReport'\n  #  - 'FileBasedFindingsReport'\n  #  - 'LiteFindingsReport'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ProjectStatisticsReport")," contains metrics and statistics concerning the analyzed project sorted by priority."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ComplexityReport")," contains metrics concerning the analyzed code.\nFor instance the source lines of code and the McCabe complexity are calculated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NotificationReport")," contains notifications reported by the detekt analyzer similar to push notifications.\nIt's simply a way of alerting users to information that they have opted-in to."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FindingsReport")," contains all rule violations in a list format grouped by ruleset."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FileBasedFindingsReport")," is similar to the FindingsReport shown above.\nThe rule violations are grouped by file location."),(0,i.kt)("h2",{id:"output-reports"},"Output Reports"),(0,i.kt)("p",null,"Uncomment the reports you don't care about. The detailed description can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/reporting"},"reporting"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"output-reports:\n  active: true\n  exclude:\n  #  - 'HtmlOutputReport'\n  #  - 'TxtOutputReport'\n  #  - 'XmlOutputReport'\n  #  - 'SarifOutputReport'\n")),(0,i.kt)("h2",{id:"processors"},"Processors"),(0,i.kt)("p",null,"Count processors are used to calculate project metrics.\nFor example, when all count processors are enabled, a detekt html report might look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Processor metrics in html report",src:n(1750).Z,width:"251",height:"222"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"'DetektProgressListener'")," processor shows a progress indicator in stdout while a detekt process is running."),(0,i.kt)("p",null,"Uncomment the processors you don't care about."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"processors:\n    active: true\n    exclude:\n        - 'DetektProgressListener'\n        # - 'KtFileCountProcessor'\n        # - 'PackageCountProcessor'\n        # - 'ClassCountProcessor'\n        # - 'FunctionCountProcessor'\n        # - 'PropertyCountProcessor'\n        # - 'ProjectComplexityProcessor'\n        # - 'ProjectCognitiveComplexityProcessor'\n        # - 'ProjectLLOCProcessor'\n        # - 'ProjectCLOCProcessor'\n        # - 'ProjectLOCProcessor'\n        # - 'ProjectSLOCProcessor'\n        # - 'LicenseHeaderLoaderExtension'\n")),(0,i.kt)("h2",{id:"config-json-schema"},"Config JSON Schema"),(0,i.kt)("p",null,"A JSON Schema for the config file is available on: ",(0,i.kt)("a",{parentName:"p",href:"https://json.schemastore.org/detekt"},"json.schemastore.org/detekt"),"."),(0,i.kt)("p",null,"You can configure your IDE (e.g. IntelliJ or Android Studio have built-in support)\nto use that schema to give you ",(0,i.kt)("strong",{parentName:"p"},"autocompletion")," capabilities on your config file.\nMore details on the IntelliJ support are available\n",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/ruby/yaml.html#remote_json"},"on this page"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"JSON Schema validator on IntelliJ",src:n(315).Z,width:"1316",height:"206"})),(0,i.kt)("p",null,"The JSON Schema is currently not automatically generated. It can be updated manually ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SchemaStore/schemastore"},"on this repository"),"."))}m.isMDXComponent=!0},315:function(e,t,n){t.Z=n.p+"assets/images/json_schema_validator_intellij-fdd7afa5537d8f382350f080b65c1517.png"},1750:function(e,t,n){t.Z=n.p+"assets/images/processor_metrics_in_html_report-26660d58745fbc61810ca2eee63b6993.png"}}]);
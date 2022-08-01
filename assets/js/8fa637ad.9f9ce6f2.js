"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[5822],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={title:"Howto: make detekt silent",published:!0,summary:"This guide shows how to silence detekt and write a custom report format.",tags:["guides"]},l=void 0,c={permalink:"/blog/2019/08/14/custom-console-reports",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2019-08-14-custom-console-reports.md",source:"@site/blog/2019-08-14-custom-console-reports.md",title:"Howto: make detekt silent",description:"detekt's reporting mechanism relies on implementations of ConsoleReport's.",date:"2019-08-14T00:00:00.000Z",formattedDate:"August 14, 2019",tags:[{label:"guides",permalink:"/blog/tags/guides"}],readingTime:1,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Howto: make detekt silent",published:!0,summary:"This guide shows how to silence detekt and write a custom report format.",tags:["guides"]},prevItem:{title:"Recipe: diff your detekt config with the default one",permalink:"/blog/2020/09/27/additional-diff-config-task"},nextItem:{title:"Calling it One Zero",permalink:"/blog/2019/08/04/calling-it-one-zero"}},p={authorsImageUrls:[]},u=[],d={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"detekt's reporting mechanism relies on implementations of ",(0,i.kt)("a",{parentName:"p",href:"/kdoc/detekt-api/io.gitlab.arturbosch.detekt.api/-console-report/index.html"},"ConsoleReport"),"'s.\nThe cli module and therefore the Gradle plugin implement a bunch of this reports."),(0,i.kt)("p",null,"A typical detekt report will look like following:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report",src:n(8291).Z,width:"1574",height:"798"})),(0,i.kt)("p",null,"There are many different parts which might or might not interest you.\nIf one part is not important to you, it can be excluded in the yaml configuration file.\nA ",(0,i.kt)("strong",{parentName:"p"},"silent")," configuration would exclude all possible processors and reports:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"processors:\n  active: true\n  exclude:\n    - 'DetektProgressListener'\n    - 'FunctionCountProcessor'\n    - 'PropertyCountProcessor'\n    - 'ClassCountProcessor'\n    - 'PackageCountProcessor'\n    - 'KtFileCountProcessor'\n\nconsole-reports:\n  active: true\n  exclude:\n    - 'ProjectStatisticsReport'\n    - 'ComplexityReport'\n    - 'NotificationReport'\n    - 'FindingsReport'\n    - 'BuildFailureReport'\n")),(0,i.kt)("p",null,"Running with this config won't produce any console messages: "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report",src:n(2403).Z,width:"1919",height:"41"})),(0,i.kt)("p",null,"Just verify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"./report.txt")," is not empty ;)."),(0,i.kt)("p",null,"We might find detekt's ",(0,i.kt)("inlineCode",{parentName:"p"},"FindingsReport")," too verbose and just want to print one message line per finding.\nThis can be achieved by implementing a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsoleReport"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SingleLineFindingsReport : ConsoleReport() {\n\n    override fun render(detektion: Detektion): String? =\n        detektion.findings.values\n            .flatten()\n            .joinToString("\\n") { "${it.id} - ${it.message} - ${it.entity.location.file}" }\n}\n')),(0,i.kt)("p",null,"Combined with our silent configuration only messages are printed when findings are actually found:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"report",src:n(1004).Z,width:"1916",height:"222"})),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/extensions"},"extension")," documention on how to let detekt know about your custom report."))}m.isMDXComponent=!0},1004:function(e,t,n){t.Z=n.p+"assets/images/compact_report-00d1098a4ed023bc29252a07cbdcbecc.png"},2403:function(e,t,n){t.Z=n.p+"assets/images/silent_run-ee41325cf336b082776926e1d187e9e6.png"},8291:function(e,t,n){t.Z=n.p+"assets/images/typical_console_report-dac0a808bc92ff7a4b5c82cbcfba0724.png"}}]);
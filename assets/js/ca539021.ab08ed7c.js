"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[4100],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),k=a,g=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return n?i.createElement(g,r(r({ref:t},u),{},{components:n})):i.createElement(g,r({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1834:function(e,t,n){n.d(t,{ZP:function(){return c}});var i=n(7462),a=n(3366),l=n(7294),r=n(3905),o=n(2263),s=function(){return l.createElement("span",null,(0,o.Z)().siteConfig.customFields.detektVersion)},d=["components"],u={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The latest released version of Detekt is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s,{mdxType:"DetektVersion"}))))))}c.isMDXComponent=!0},8488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),r=n(1834),o=["components"],s={title:"Run detekt using the Detekt Gradle Plugin",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"gradle.html",folder:"gettingstarted",summary:null,sidebar_position:2},d=void 0,u={unversionedId:"gettingstarted/gradle",id:"gettingstarted/gradle",title:"Run detekt using the Detekt Gradle Plugin",description:"Detekt requires Gradle 6.1 or higher. We, however, recommend using the version of Gradle that is listed in this table.",source:"@site/docs/gettingstarted/gradle.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/gradle",permalink:"/docs/gettingstarted/gradle",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/gradle.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Run detekt using the Detekt Gradle Plugin",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"gradle.html",folder:"gettingstarted",summary:null,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Run detekt using Command Line Interface",permalink:"/docs/gettingstarted/cli"},next:{title:"Run detekt using Gradle Task",permalink:"/docs/gettingstarted/gradletask"}},c={},p=[{value:'<a name="tasks">Available plugin tasks</a>',id:"available-plugin-tasks",level:2},{value:'<a name="gradle">Configuration</a>',id:"configuration",level:3},{value:"Groovy DSL",id:"groovy-dsl",level:4},{value:"Kotlin DSL",id:"kotlin-dsl",level:4},{value:"Groovy DSL",id:"groovy-dsl-1",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-1",level:4},{value:'<a name="gradleandroid">Configuration for Android projects</a>',id:"configuration-for-android-projects",level:3},{value:"Groovy DSL",id:"groovy-dsl-2",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-2",level:4},{value:'<a name="closure">Options for detekt configuration closure</a>',id:"options-for-detekt-configuration-closure",level:3},{value:"Groovy DSL",id:"groovy-dsl-3",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-3",level:4},{value:"Reports",id:"reports",level:3},{value:"Using Type Resolution",id:"using-type-resolution",level:3},{value:"Groovy DSL",id:"groovy-dsl-4",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-4",level:4},{value:'<a name="excluding">Leveraging Gradle&#39;s SourceTask - Excluding and including source files</a>',id:"leveraging-gradles-sourcetask---excluding-and-including-source-files",level:3},{value:"Groovy DSL",id:"groovy-dsl-5",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-5",level:4},{value:'<a name="customdetekttask">Defining custom detekt task</a>',id:"defining-custom-detekt-task",level:3},{value:"Groovy DSL",id:"groovy-dsl-6",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-6",level:4},{value:'<a name="check-lifecycle">Disabling detekt from the check task</a>',id:"disabling-detekt-from-the-check-task",level:3},{value:"Groovy DSL",id:"groovy-dsl-7",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-7",level:4},{value:'<a name="idea">Integrating detekt inside your IntelliJ IDEA</a>',id:"integrating-detekt-inside-your-intellij-idea",level:2}],k={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Detekt requires ",(0,l.kt)("strong",{parentName:"p"},"Gradle 6.1")," or higher. We, however, recommend using the version of Gradle that is ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction/compatibility"},"listed in this table"),"."),(0,l.kt)("h2",{id:"available-plugin-tasks"},(0,l.kt)("a",{name:"tasks"},"Available plugin tasks")),(0,l.kt)("p",null,"The detekt Gradle plugin will generate multiple tasks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detekt")," - Runs a detekt analysis and complexity report on your source files. Configure the analysis inside the\n",(0,l.kt)("inlineCode",{parentName:"li"},"detekt")," closure. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"By default, the standard rule set without any ignore list is executed on sources files located\nin ",(0,l.kt)("inlineCode",{parentName:"li"},"src/main/java"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/java"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"src/main/kotlin")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/kotlin"),"."),(0,l.kt)("li",{parentName:"ul"},"Reports are automatically generated in xml,\nhtml, txt, and sarif format and can be found in ",(0,l.kt)("inlineCode",{parentName:"li"},"build/reports/detekt/detekt.[xml|html|txt|sarif]")," respectively."),(0,l.kt)("li",{parentName:"ul"},"Please note that the ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt")," task is automatically run when executing ",(0,l.kt)("inlineCode",{parentName:"li"},"gradle check"),"."),(0,l.kt)("li",{parentName:"ul"},"You may specify Gradle task CLI option for auto correction, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"gradle detekt --auto-correct"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektGenerateConfig")," - Generates a default detekt configuration file into your project directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but creates a code smell baseline. Further detekt runs will only feature new smells not in this list.")),(0,l.kt)("p",null,"In addition to these standard tasks, the plugin will also generate a set of experimental tasks that have\n",(0,l.kt)("a",{parentName:"p",href:"/docs/gettingstarted/type-resolution"},"type resolution")," enabled. This happens for both, pure JVM projects and Android projects that have\nthe Android Gradle Plugin applied:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektMain")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but runs only on the ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," source set\n(Android: all production source sets)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektTest")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but runs only on the ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," source set\n(Android: all JVM and Android Test source sets)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektBaselineMain")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline"),", but creates a baseline only for the ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," source set\n(Android: multiple baselines for all production source sets)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektBaselineTest")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline"),", but creates a baseline only for the ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," source set\n(Android: multiple baselines for all JVM and Android Test source sets)"),(0,l.kt)("li",{parentName:"ul"},"Android-only: ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt<Variant>")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but runs only on the specific (test) build variant"),(0,l.kt)("li",{parentName:"ul"},"Android-only: ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline<Variant>")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline"),", but creates a baseline only for the\nspecific (test) build variant")),(0,l.kt)("p",null,"Baseline files that are generated for these specific source sets / build variants contain the name of the source set /\nthe name of the build variant in their name, unless otherwise configured, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-main.xml")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-productionDebug.xml"),"."),(0,l.kt)("p",null,"If both, a ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-main.xml")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt.xml")," baseline file exists in place, the more specific one - ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-main.xml")," -\ntakes precendence when the ",(0,l.kt)("inlineCode",{parentName:"p"},"detektMain")," task is executed, likewise for Android variant-specific baseline files."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE:")," When analyzing Android projects that make use of specific code generators, such as Data Binding, Kotlin synthetic\nview accessors or else, you might see warnings output while Detekt runs. This is due to the inability to gather the\ncomplete compile classpath from the Android Gradle Plugin (",(0,l.kt)("a",{parentName:"p",href:"https://issuetracker.google.com/issues/158777988"},"upstream ticket"),")\nand can safely be ignored."),(0,l.kt)("p",null,"Use the Groovy or Kotlin DSL of Gradle to apply the detekt Gradle Plugin. You can further configure the Plugin\nusing the detekt closure as described ",(0,l.kt)("a",{parentName:"p",href:"#closure"},"here"),"."),(0,l.kt)("h3",{id:"configuration"},(0,l.kt)("a",{name:"gradle"},"Configuration")),(0,l.kt)("p",null,"Using the plugins DSL:"),(0,l.kt)("h4",{id:"groovy-dsl"},"Groovy DSL"),(0,l.kt)(r.ZP,{mdxType:"DetektVersionBanner"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'plugins {\n    id "io.gitlab.arturbosch.detekt" version "[detekt_version]"\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("io.gitlab.arturbosch.detekt").version("[detekt_version]")\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("p",null,"Using legacy plugin application (",(0,l.kt)("inlineCode",{parentName:"p"},"buildscript{}"),"):"),(0,l.kt)("h4",{id:"groovy-dsl-1"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath "io.gitlab.arturbosch.detekt:detekt-gradle-plugin:[detekt_version]"\n    }\n}\n\napply plugin: "io.gitlab.arturbosch.detekt"\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-1"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("io.gitlab.arturbosch.detekt:detekt-gradle-plugin:[detekt_version]")\n    }\n}\n\napply(plugin = "io.gitlab.arturbosch.detekt")\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h3",{id:"configuration-for-android-projects"},(0,l.kt)("a",{name:"gradleandroid"},"Configuration for Android projects")),(0,l.kt)("p",null,"When using Android make sure to have detekt configured in the app/module level ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,l.kt)("p",null,"You can configure the plugin in the same way as indicated above."),(0,l.kt)("h4",{id:"groovy-dsl-2"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath "com.android.tools.build:gradle:<agp_version>"\n    }\n}\n\nplugins {\n    id "com.android.application"\n    id "org.jetbrains.kotlin.android" version "<kotlin_version>"\n    id "io.gitlab.arturbosch.detekt" version "[detekt_version]"\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-2"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle:<agp_version>")\n    }\n}\n\nplugins {\n    id("com.android.application")\n    kotlin("android") version "<kotlin_version>"\n    id("io.gitlab.arturbosch.detekt") version "[detekt_version]"\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h3",{id:"options-for-detekt-configuration-closure"},(0,l.kt)("a",{name:"closure"},"Options for detekt configuration closure")),(0,l.kt)("h4",{id:"groovy-dsl-3"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'detekt {\n    // Version of Detekt that will be used. When unspecified the latest detekt\n    // version found will be used. Override to stay on the same version.\n    toolVersion = "[detekt_version]"\n    \n    // The directories where detekt looks for source files. \n    // Defaults to `files("src/main/java", "src/test/java", "src/main/kotlin", "src/test/kotlin")`.\n    source = files(\n        "src/main/kotlin",\n        "gensrc/main/kotlin"\n    )\n    \n    // Builds the AST in parallel. Rules are always executed in parallel. \n    // Can lead to speedups in larger projects. `false` by default.\n    parallel = false\n    \n    // Define the detekt configuration(s) you want to use. \n    // Defaults to the default detekt configuration.\n    config = files("path/to/config.yml")\n    \n    // Applies the config files on top of detekt\'s default config file. `false` by default.\n    buildUponDefaultConfig = false\n    \n    // Turns on all the rules. `false` by default.\n    allRules = false\n    \n    // Specifying a baseline file. All findings stored in this file in subsequent runs of detekt.\n    baseline = file("path/to/baseline.xml")\n    \n    // Disables all default detekt rulesets and will only run detekt with custom rules\n    // defined in plugins passed in with `detektPlugins` configuration. `false` by default.\n    disableDefaultRuleSets = false\n    \n    // Adds debug output during task execution. `false` by default.\n    debug = false                                         \n    \n    // If set to `true` the build does not fail when the\n    // maxIssues count was reached. Defaults to `false`.\n    ignoreFailures = false\n    \n    // Android: Don\'t create tasks for the specified build types (e.g. "release")\n    ignoredBuildTypes = ["release"]\n    \n    // Android: Don\'t create tasks for the specified build flavor (e.g. "production")\n    ignoredFlavors = ["production"]\n    \n    // Android: Don\'t create tasks for the specified build variants (e.g. "productionRelease")\n    ignoredVariants = ["productionRelease"]\n    \n    // Specify the base path for file paths in the formatted reports. \n    // If not set, all file paths reported will be absolute file path.\n    basePath = projectDir\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-3"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'detekt {\n    // Version of Detekt that will be used. When unspecified the latest detekt\n    // version found will be used. Override to stay on the same version.\n    toolVersion = "[detekt_version]"\n    \n    // The directories where detekt looks for source files. \n    // Defaults to `files("src/main/java", "src/test/java", "src/main/kotlin", "src/test/kotlin")`.\n    source = files("src/main/java", "src/main/kotlin")     \n    \n    // Builds the AST in parallel. Rules are always executed in parallel. \n    // Can lead to speedups in larger projects. `false` by default.\n    parallel = false\n    \n    // Define the detekt configuration(s) you want to use. \n    // Defaults to the default detekt configuration.\n    config = files("path/to/config.yml")\n    \n    // Applies the config files on top of detekt\'s default config file. `false` by default.\n    buildUponDefaultConfig = false\n    \n    // Turns on all the rules. `false` by default.\n    allRules = false\n    \n    // Specifying a baseline file. All findings stored in this file in subsequent runs of detekt.\n    baseline = file("path/to/baseline.xml")\n    \n    // Disables all default detekt rulesets and will only run detekt with custom rules\n    // defined in plugins passed in with `detektPlugins` configuration. `false` by default.\n    disableDefaultRuleSets = false\n    \n    // Adds debug output during task execution. `false` by default.\n    debug = false                                         \n    \n    // If set to `true` the build does not fail when the\n    // maxIssues count was reached. Defaults to `false`.\n    ignoreFailures = false\n    \n    // Android: Don\'t create tasks for the specified build types (e.g. "release")\n    ignoredBuildTypes = listOf("release")\n    \n    // Android: Don\'t create tasks for the specified build flavor (e.g. "production")\n    ignoredFlavors = listOf("production")\n    \n    // Android: Don\'t create tasks for the specified build variants (e.g. "productionRelease")\n    ignoredVariants = listOf("productionRelease")\n    \n    // Specify the base path for file paths in the formatted reports. \n    // If not set, all file paths reported will be absolute file path.\n    basePath = projectDir\n}\n')),(0,l.kt)("h3",{id:"reports"},"Reports"),(0,l.kt)("p",null,"Report output can be customized for each task. The DSL is the same in both Groovy and Kotlin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named("detekt").configure {\n    reports {\n        // Enable/Disable XML report (default: true)\n        xml.required.set(true)\n        xml.outputLocation.set(file("build/reports/detekt.xml"))\n        // Enable/Disable HTML report (default: true)\n        html.required.set(true)\n        html.outputLocation.set(file("build/reports/detekt.html"))\n        // Enable/Disable TXT report (default: true)\n        txt.required.set(true)\n        txt.outputLocation.set(file("build/reports/detekt.txt"))\n        // Enable/Disable SARIF report (default: false)\n        sarif.required.set(true)\n        sarif.outputLocation.set(file("build/reports/detekt.sarif"))\n        custom {\n            // The simple class name of your custom report.\n            reportId = "CustomJsonReport"\n            outputLocation.set(file("build/reports/detekt.json"))\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"using-type-resolution"},"Using Type Resolution"),(0,l.kt)("p",null,"Type resolution is experimental and works only for ",(0,l.kt)("a",{parentName:"p",href:"#a-nametasksavailable-plugin-tasksa"},"predefined tasks listed above"),"\nor when implementing a custom detekt task with the ",(0,l.kt)("inlineCode",{parentName:"p"},"classpath")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jvmTarget")," properties present."),(0,l.kt)("p",null,"More information on type resolution are available on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/gettingstarted/type-resolution"},"type resolution")," page."),(0,l.kt)("h4",{id:"groovy-dsl-4"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'tasks.withType(io.gitlab.arturbosch.detekt.Detekt).configureEach {\n    jvmTarget = "1.8"\n}\ntasks.withType(io.gitlab.arturbosch.detekt.DetektCreateBaselineTask).configureEach {\n    jvmTarget = "1.8"\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-4"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {\n    this.jvmTarget = "1.8"\n}\ntasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {\n    this.jvmTarget = "1.8"\n}\n')),(0,l.kt)("h3",{id:"leveraging-gradles-sourcetask---excluding-and-including-source-files"},(0,l.kt)("a",{name:"excluding"},"Leveraging Gradle's SourceTask - Excluding and including source files")),(0,l.kt)("p",null,"A detekt task extends the Gradle ",(0,l.kt)("inlineCode",{parentName:"p"},"SourceTask")," to be only scheduled when watched source files are changed.\nIt also allows to match files that should be excluded from the analysis.\nTo do this introduce a query on detekt tasks and define include and exclude patterns outside the detekt closure:"),(0,l.kt)("h4",{id:"groovy-dsl-5"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'detekt {\n    ...\n}\n\ntasks.withType(io.gitlab.arturbosch.detekt.Detekt).configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n\ntasks.withType(io.gitlab.arturbosch.detekt.DetektCreateBaselineTask).configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-5"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'detekt {\n    ...\n}\n\ntasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n\ntasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n')),(0,l.kt)("h3",{id:"defining-custom-detekt-task"},(0,l.kt)("a",{name:"customdetekttask"},"Defining custom detekt task")),(0,l.kt)("p",null,"Custom tasks for alternative configurations or different source sets can be defined by creating a custom task that\nuses the type ",(0,l.kt)("inlineCode",{parentName:"p"},"Detekt"),"."),(0,l.kt)("h4",{id:"groovy-dsl-6"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'tasks.register(name: myDetekt, type: io.gitlab.arturbosch.detekt.Detekt) {\n    description = "Runs a custom detekt build."\n    setSource(files("src/main/kotlin", "src/test/kotlin"))\n    config.setFrom(files("$rootDir/config.yml"))\n    debug = true\n    reports {\n        xml {\n            destination = file("build/reports/mydetekt.xml")\n        }\n        html.destination = file("build/reports/mydetekt.html")\n    }\n    include \'**/*.kt\'\n    include \'**/*.kts\'\n    exclude \'resources/\'\n    exclude \'build/\'\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-6"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.register<io.gitlab.arturbosch.detekt.Detekt>("myDetekt") {\n    description = "Runs a custom detekt build."\n    setSource(files("src/main/kotlin", "src/test/kotlin"))\n    config.setFrom(files("$rootDir/config.yml"))\n    debug = true\n    reports {\n        xml {\n            destination = file("build/reports/mydetekt.xml")\n        }\n        html.destination = file("build/reports/mydetekt.html")\n    }\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("resources/")\n    exclude("build/")\n}\n')),(0,l.kt)("h3",{id:"disabling-detekt-from-the-check-task"},(0,l.kt)("a",{name:"check-lifecycle"},"Disabling detekt from the check task")),(0,l.kt)("p",null,"Detekt tasks by default are verification tasks. They get executed whenever the Gradle check task gets executed.\nThis aligns with the behavior of other code analysis plugins for Gradle."),(0,l.kt)("p",null,"If you are adding detekt to an already long running project you may want to increase the code quality incrementally and therefore\nexclude detekt from the check task."),(0,l.kt)("h4",{id:"groovy-dsl-7"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"check.configure {\n    dependsOn = dependsOn.findAll { it.name != 'detekt' }\n}\n")),(0,l.kt)("h4",{id:"kotlin-dsl-7"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named("check").configure {\n    this.setDependsOn(this.dependsOn.filterNot {\n        it is TaskProvider<*> && it.name == "detekt"\n    })\n}\n')),(0,l.kt)("p",null,"Instead of disabling detekt for the check task, you may want to increase the build failure threshold in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction/configurations"},"configuration file"),"."),(0,l.kt)("h2",{id:"integrating-detekt-inside-your-intellij-idea"},(0,l.kt)("a",{name:"idea"},"Integrating detekt inside your IntelliJ IDEA")),(0,l.kt)("p",null,"detekt comes with an ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/10761-detekt"},"IntelliJ Plugin")," that you can install directly from the IDE. The plugin offers warning highlight directly inside the IDE as well as support for code formatting."),(0,l.kt)("p",null,"The source code of the plugin is available here: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt-intellij-plugin"},"detekt/detekt-intellij-plugin")))}g.isMDXComponent=!0}}]);
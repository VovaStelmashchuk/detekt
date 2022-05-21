"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[2821],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3898:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={title:"Run detekt using a Git pre-commit hook",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"git-pre-commit-hook.html",folder:"gettingstarted",summary:null,sidebar_position:6},l=void 0,c={unversionedId:"gettingstarted/git-pre-commit-hook",id:"gettingstarted/git-pre-commit-hook",title:"Run detekt using a Git pre-commit hook",description:"Detekt can be integrated into your development workflow by using a Git pre-commit hook.",source:"@site/docs/gettingstarted/git-pre-commit-hook.md",sourceDirName:"gettingstarted",slug:"/gettingstarted/git-pre-commit-hook",permalink:"/docs/gettingstarted/git-pre-commit-hook",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/git-pre-commit-hook.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Run detekt using a Git pre-commit hook",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"git-pre-commit-hook.html",folder:"gettingstarted",summary:null,sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Using Type Resolution",permalink:"/docs/gettingstarted/type-resolution"},next:{title:"Comments Rule Set",permalink:"/docs/rules/comments"}},p={},u=[{value:"Only run on staged files",id:"only-run-on-staged-files",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Detekt can be integrated into your development workflow by using a Git pre-commit hook.\nFor that reason Git supports to run custom scripts automatically, when a specific action occurs.\nThe mentioned pre-commit hook can be setup locally on your dev-machine.\nThe following client-side detekt hook is triggered by a commit operation, and checks all files via the gradle task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env bash\necho "Running detekt check..."\nOUTPUT="/tmp/detekt-$(date +%s)"\n./gradlew detekt > $OUTPUT\nEXIT_CODE=$?\nif [ $EXIT_CODE -ne 0 ]; then\n  cat $OUTPUT\n  rm $OUTPUT\n  echo "***********************************************"\n  echo "                 Detekt failed                 "\n  echo " Please fix the above issues before committing "\n  echo "***********************************************"\n  exit $EXIT_CODE\nfi\nrm $OUTPUT\n')),(0,i.kt)("p",null,"The shell script can be installed by copying the content over to ",(0,i.kt)("inlineCode",{parentName:"p"},"<<your-repo>>/.git/hooks/pre-commit"),".\nThis pre-commit hook needs to be executable, so you may need to change the permission (",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x pre-commit"),").\nMore information about Git hooks and how to install them can be found in\n",(0,i.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/git-hooks"},"Atlassian's tutorial"),"."),(0,i.kt)("p",null,"A special thanks goes to Mohit Sarveiya for providing this shell script.\nYou can watch his excellent talk about ",(0,i.kt)("strong",{parentName:"p"},"Static Code Analysis For Kotlin")," on\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=LT6m5_LO2DQ"},"YouTube"),"."),(0,i.kt)("h2",{id:"only-run-on-staged-files"},"Only run on staged files"),(0,i.kt)("p",null,"It is also possible to use ",(0,i.kt)("a",{parentName:"p",href:"/docs/gettingstarted/cli"},"the CLI")," to create a hook that only runs on staged files. This has the advantage of speedier execution, by running on fewer files and avoiding the warm-up time of the gradle daemon."),(0,i.kt)("p",null,"Please note, however, that a handful of checks requiring ",(0,i.kt)("a",{parentName:"p",href:"/docs/gettingstarted/type-resolution"},"type resolution")," will not work correctly with this approach. If you do adopt a partial hook, it is recommended that you still implement a full ",(0,i.kt)("inlineCode",{parentName:"p"},"detekt")," check as part of your CI pipeline."),(0,i.kt)("p",null,"This example has been put together using ",(0,i.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"pre-commit"),", but the same principle can be applied to any kind of hook. "),(0,i.kt)("p",null,"Hook definition in pre-commit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- id: detekt\n  name: detekt check\n  description: Runs `detekt` on modified .kt files.\n  language: script\n  entry: detekt.sh\n  files: \\.kt\n")),(0,i.kt)("p",null,"Script ",(0,i.kt)("inlineCode",{parentName:"p"},"detekt.sh"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\necho "Running detekt check..."\nfileArray=($@)\ndetektInput=$(IFS=,;printf  "%s" "${fileArray[*]}")\necho "Input files: $detektInput"\n\nOUTPUT=$(detekt --input "$detektInput" 2>&1)\nEXIT_CODE=$?\nif [ $EXIT_CODE -ne 0 ]; then\n  echo $OUTPUT\n  echo "***********************************************"\n  echo "                 Detekt failed                 "\n  echo " Please fix the above issues before committing "\n  echo "***********************************************"\n  exit $EXIT_CODE\nfi\n')))}d.isMDXComponent=!0}}]);
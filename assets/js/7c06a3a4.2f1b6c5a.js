(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[804],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,d=e.values,c=e.groupId,m=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,g=h.setTabGroupChoices,b=(0,a.useState)(p),f=b[0],v=b[1],N=a.Children.toArray(e.children),y=[];if(null!=c){var w=k[c];null!=w&&w!==f&&d.some((function(e){return e.value===w}))&&v(w)}var A=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;v(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,r,i,o,s,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:A,onClick:A},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},4632:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(6010),l=n(1395),s=n(8215),u=n(6563),p=["components"],d={sidebar_position:30},c={unversionedId:"getting-started/create-urhoapp",id:"getting-started/create-urhoapp",isDocsHomePage:!1,title:"Create New Project",description:"Create your first UrhoApp project",source:"@site/docs/getting-started/create-urhoapp.mdx",sourceDirName:"getting-started",slug:"/getting-started/create-urhoapp",permalink:"/docs/getting-started/create-urhoapp",editUrl:"https://github.com/urho3d/Urho3D/edit/master/website/docs/getting-started/create-urhoapp.mdx",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"}},m=[{value:"Project Scaffolding",id:"project-scaffolding",children:[]},{value:"Build UrhoApp project",id:"build-urhoapp-project",children:[{value:"Using CLI",id:"build-urhoapp-project-using-cli",children:[]},{value:"Using IDE",id:"build-urhoapp-project-using-ide",children:[]}]}],h={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create your first UrhoApp project"),(0,i.kt)("p",null,"You need an installed Urho3D library for the desired target platform to proceed. If you have been following along the previous section to install the library then you should be able to create a new project using the library in no time. The most commonly encountered issue by newbie in the past was figuring out how to tell the build script where to find the correct Urho3D library to use. The new rake tasks have been designed to address this issue by providing opinionated sane default for most of the use cases, but without sacrificing the possibility to override the default when necessary."),(0,i.kt)("h2",{id:"project-scaffolding"},"Project Scaffolding"),(0,i.kt)("p",null,"All you need is to execute the following command to create a new UrhoApp project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rake new[UrhoApp,demo]\n")),(0,i.kt)("p",null,"By default, this task creates a new project named ",(0,i.kt)("strong",{parentName:"p"},"UrhoApp")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/projects/")," directory. You can override that by specifying explicitly the name of the new project as well as the parent directory where it should be created, as shown in the example above. Next, change directory to the project root of the newly created project and build it. You can build using CLI or IDE too."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The UrhoApp project is cross-platform out of the box!"))),(0,i.kt)("h2",{id:"build-urhoapp-project"},"Build UrhoApp project"),(0,i.kt)("h3",{id:"build-urhoapp-project-using-cli"},"Using CLI"),(0,i.kt)("p",null,"Simply invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"rake build")," or just ",(0,i.kt)("inlineCode",{parentName:"p"},"rake")," (as build is the default task). In order to target a specific platform, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLATFORM")," environment variable just before invoking the task. By default, the build task assumes to target native platform of the host machine."),(0,i.kt)(l.Z,{className:u.Z.cliUrhoApp,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When using Rake task\nPLATFORM=android rake\n\n# When using Gradle wrapper on Linux or Mac\n./gradlew build\n\n# When using Gradle wrapper on Windows\ngradlew.bat build\n"))),(0,i.kt)(s.Z,{value:"apple",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# When targeting macOS, "PLATFORM=macOS" is the default on Mac\nrake\n\n# When targeting iOS\nPLATFORM=iOS rake\n\n# When targeting tvOS\nPLATFORM=tvOS rake\n'))),(0,i.kt)(s.Z,{value:"arm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When compiling natively on the ARM board, \"PLATFORM=arm\" should be already set\nrake\n\n# When cross-compiling on Linux host machine, substitute '?' accordingly\nARM_ABI_FLAGS=? ARM_PREFIX=? ARM_SYSROOT=? PLATFORM=arm rake\n"))),(0,i.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# When using GCC, "PLATFORM=linux" is the default on Linux\nrake\n\n# When using Clang, override the "CC" and "CXX" environment variables\nCC=clang CXX=clang++ rake\n'))),(0,i.kt)(s.Z,{value:"rpi",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When compiling natively on the RPI board, \"PLATFORM=rpi\" should be already set\nRPI_ABI=RPI3 rake\n\n# When cross-compiling on Linux host machine, substitute '?' accordingly\nRPI_ABI=RPI3 RPI_PREFIX=? RPI_SYSROOT=? PLATFORM=rpi rake\n"))),(0,i.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# When using Rake task on Linux or Mac\nPLATFORM=web rake\n\n# When using Rake task on Windows\nset "PLATFORM=web" && rake\n'))),(0,i.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# When compiling natively using VS, "PLATFORM=win" is the default on Windows\nrake\n\n# When compiling natively using MinGW-w64\nset "GENERATOR=mingw" && rake\n\n# When cross-compiling on Linux host machine, substitute \'?\' accordingly\nMINGW_PREFIX=? PLATFORM=mingw rake\n')))),(0,i.kt)("p",null,"Except for Android platform, the task generates the initial build tree under ",(0,i.kt)("code",null,"build/",(0,i.kt)("em",null,"<","platform",">"),"/")," relative to the project root. Assuming it was built successfully for Linux platform, you could then run the UrhoApp executable like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"build/linux/bin/UrhoApp\n")),(0,i.kt)("p",null,"For Android platform, you would have to use other gradle task (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"installDebug"),") to deploy the UrhoApp to an Android Emulator or actual device."),(0,i.kt)("h3",{id:"build-urhoapp-project-using-ide"},"Using IDE"),(0,i.kt)("p",null,"Similar to Urho3D project, the UrhoApp project can be opened directly in the IDE that supports CMake or Gradle build system or by opening the generated project file in the build tree."),(0,i.kt)(l.Z,{className:u.Z.ideUrhoApp,groupId:"ide",defaultValue:"android-studio",values:[{label:"Android Studio",value:"android-studio"},{label:"CLion",value:"clion"},{label:"Code::Blocks",value:"code-blocks"},{label:"CodeLite",value:"codelite"},{label:"IntelliJ IDEA",value:"intellij"},{label:"Visual Studio",value:"visual-studio"},{label:"Xcode",value:"xcode"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"android-studio",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not update the Android Gradle Plugin when being prompted, unless you know what you are doing."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Choose "Open an Existing Project" to open the new project.'),(0,i.kt)("li",{parentName:"ul"},'After Gradle sync is completed, select "UrhoApp" from the "Edit Run/Debug Configurations" drop down list, and press "Ctrl+F9" to build the UrhoApp.'),(0,i.kt)("li",{parentName:"ul"},'To run the UrhoApp, press "Shift+F10".')))),(0,i.kt)(s.Z,{value:"clion",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Choose "Open" to open the new project.'),(0,i.kt)("li",{parentName:"ul"},'In the "Open Project Wizard" or in the "CMake Settings", set the ',(0,i.kt)("inlineCode",{parentName:"li"},"URHO3D_HOME"),' accordingly in the "CMake options" field, e.g.:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.urho3d/install/linux")," when targeting Linux platform with GCC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.urho3d\\install\\win")," when targeting Windows platform with MSVC"))),(0,i.kt)("li",{parentName:"ul"},'Select "UrhoApp" from the "Select Run/Debug Configuration" drop down list and press "Ctrl+F9" to build the UrhoApp.'),(0,i.kt)("li",{parentName:"ul"},'To run the UrhoApp, press "Shift+F10".')))),(0,i.kt)(s.Z,{value:"code-blocks",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a build tree using CMake's Code::Blocks generator. One way to do it is by using rake task, like so: ",(0,i.kt)("inlineCode",{parentName:"li"},"GENERATOR=codeblocks rake cmake")),(0,i.kt)("li",{parentName:"ul"},'Open the "UrhoApp.cbp" Code::Blocks project file in the build tree. In the above case, the project file can be found in ',(0,i.kt)("inlineCode",{parentName:"li"},"build/linux-codeblocks/")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"// FIXME: Please submit PR to complete the steps."))))),(0,i.kt)(s.Z,{value:"codelite",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a build tree using CMake's CodeLite generator. One way to do it is by using rake task, like so: ",(0,i.kt)("inlineCode",{parentName:"li"},"GENERATOR=codelite rake cmake")),(0,i.kt)("li",{parentName:"ul"},'Open the "UrhoApp.workspace" CodeLite workspace file in the build tree. In the above case, the workspace file can be found in ',(0,i.kt)("inlineCode",{parentName:"li"},"build/linux-codelite/")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"// FIXME: Please submit PR to complete the steps."))))),(0,i.kt)(s.Z,{value:"intellij",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not update the Android Gradle Plugin when being prompted, unless you know what you are doing."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Choose "Open" to open the new project.'),(0,i.kt)("li",{parentName:"ul"},'After Gradle sync is completed, select "UrhoApp" from the "Select Run/Debug Configuration" drop down list, and press "Ctrl+F9" to build the UrhoApp.'),(0,i.kt)("li",{parentName:"ul"},'To run the UrhoApp, press "Shift+F10".')))),(0,i.kt)(s.Z,{value:"visual-studio",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Choose "Open a project or solution" to open the new project.'),(0,i.kt)("li",{parentName:"ul"},'After CMake initial build tree is generated, open the "CMake Settings for UrhoApp" under the "Project" menu, then in the "CMake variables and cache" section:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Disable the ",(0,i.kt)("inlineCode",{parentName:"li"},"URHO3D_PCH")," build option"),(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"URHO3D_HOME")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.urho3d\\install\\win")))),(0,i.kt)("li",{parentName:"ul"},"Save the above changes to allow CMake to reconfigure the build tree."),(0,i.kt)("li",{parentName:"ul"},'Double click the "Folder View" in the "Solution Explorer", then select the "UrhoApp_d.exe" from the "Select Startup Item" drop down list and press "Ctrl+B" to build the UrhoApp.'),(0,i.kt)("li",{parentName:"ul"},'To run the UrhoApp, press "Ctrl+F5".')))),(0,i.kt)(s.Z,{value:"xcode",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",u.Z.fixedHeight)},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate a build tree using CMake's Xcode generator. One way to do it is by using rake task, like so:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rake cmake")," for targeting macOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM=iOS rake cmake")," for targeting iOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM=tvOS rake cmake")," for targeting tvOS"))),(0,i.kt)("li",{parentName:"ul"},'Open the "UrhoApp.xcodeproj" Xcode project file in the build tree. In the above case, the project file can be found in "build/macos", "build/ios", and "build/tvos", respectively.'),(0,i.kt)("li",{parentName:"ul"},'Select "UrhoApp" from the list of targets and press "\u2318+B" to build the UrhoApp.'),(0,i.kt)("li",{parentName:"ul"},'To run the UrhoApp, press "\u2318+R".'))))))}k.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},6563:function(e,t){"use strict";t.Z={dbeInstall:"dbeInstall_27gX",fixedHeight:"fixedHeight_2DKB",dbeBuildUrhoApp:"dbeBuildUrhoApp_hg99",requirements:"requirements_3RFz",cliInstall:"cliInstall_2A-F",cliUrhoApp:"cliUrhoApp_1MZ7",ideInstall:"ideInstall_3yeU",ideUrhoApp:"ideUrhoApp_3cTW",infoFixedHeight:"infoFixedHeight_3b4Y"}}}]);
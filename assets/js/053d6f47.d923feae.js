(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,d=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,u=e.groupId,m=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,a.useState)(p),b=v[0],f=v[1],y=a.Children.toArray(e.children),w=[];if(null!=u){var N=k[u];null!=N&&N!==b&&c.some((function(e){return e.value===N}))&&f(N)}var U=function(e){var t=e.currentTarget,n=w.indexOf(t),a=c[n].value;f(a),null!=u&&(g(u,a),setTimeout((function(){var e,n,a,r,i,o,s,d;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,d=o.innerWidth,n>=0&&i<=d&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case d:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:U,onClick:U},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6424:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return k}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(6010),l=n(1395),s=n(8215),d=n(6563),p=["components"],c={sidebar_position:10},u={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Using Dockerized Build Environment (DBE) to start quickly",source:"@site/docs/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/docs/getting-started/quick-start",editUrl:"https://github.com/urho3d/Urho3D/edit/master/website/docs/getting-started/quick-start.mdx",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Legacy Documentation",permalink:"/docs/legacy-docs"},next:{title:"Installation",permalink:"/docs/getting-started/installation"}},m=[{value:"Build and Install Urho3D Library",id:"build-and-install-urho3d-library",children:[]},{value:"Create a New UrhoApp",id:"create-a-new-urhoapp",children:[]},{value:"UrhoApp Project Structure",id:"urhoapp-project-structure",children:[]}],h={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using Dockerized Build Environment (DBE) to start quickly"),(0,i.kt)("p",null,"There are more than one way to start using the Urho3D library. This section shows you how to start quickly by using docker containers that have the build environment already prepared for you. All you need is a working docker engine on your host system."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Skip to the ",(0,i.kt)("a",{parentName:"p",href:"installation"},"Installation")," section, if you cannot use docker engine on your host system."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Both ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"podman")," are supported."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Windows host system requires WSL2."))),(0,i.kt)("h2",{id:"build-and-install-urho3d-library"},"Build and Install Urho3D Library"),(0,i.kt)("p",null,"Clone the Urho3D project from the main branch, change directory to its project root, and execute the following commands to build and install the library for your desired target platform."),(0,i.kt)(l.Z,{className:d.Z.buildUrho3D,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/urho3d/Urho3D.git\ncd Urho3D\n# Build Urho3D library\nscript/dockerized.sh android\n# Install Urho3D library to Maven local repository\nscript/dockerized.sh android rake install\n"))),(0,i.kt)(s.Z,{value:"apple",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",d.Z.fixedHeight)},(0,i.kt)("p",null,"Currently DBE does not support Apple platforms."),(0,i.kt)("p",null,"However, Urho3D supports Apple platforms using native build environment."))),(0,i.kt)(s.Z,{value:"arm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/urho3d/Urho3D.git\ncd Urho3D\n# Build Urho3D library, usually you need to specify extra build options to target a specific ARM board\nscript/dockerized.sh arm\n# Install Urho3D library to a local stage directory\nscript/dockerized.sh arm rake install\n"))),(0,i.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/urho3d/Urho3D.git\ncd Urho3D\n# Build Urho3D library\nscript/dockerized.sh linux\n# Install Urho3D library to a local stage directory\nscript/dockerized.sh linux rake install\n"))),(0,i.kt)(s.Z,{value:"rpi",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/urho3d/Urho3D.git\ncd Urho3D\n# Build Urho3D library, modify the "RPI_ABI" build option accordingly\nRPI_ABI=RPI4 script/dockerized.sh rpi\n# Install Urho3D library to a local stage directory\nscript/dockerized.sh rpi rake install\n'))),(0,i.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/urho3d/Urho3D.git\ncd Urho3D\n# Build Urho3D library\nscript/dockerized.sh web\n# Install Urho3D library to a local stage directory\nscript/dockerized.sh web rake install\n"))),(0,i.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/urho3d/Urho3D.git\ncd Urho3D\n# Build Urho3D library\nscript/dockerized.sh mingw\n# Install Urho3D library to a local stage directory\nscript/dockerized.sh mingw rake install\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"script/dockerized.sh")," spawns one of the docker container based on the specified platform name in the first argument. The rest of the arguments specify the command to be executed inside the container. The default command is ",(0,i.kt)("inlineCode",{parentName:"p"},"rake build"),". You can invoke other rake tasks by passing the command explicitly as arguments. It is also possible to invoke multiple rake tasks in one go. Read Rake Tasks section for more details."),(0,i.kt)("h2",{id:"create-a-new-urhoapp"},"Create a New UrhoApp"),(0,i.kt)("p",null,"You need an installed Urho3D library for the desired target platform to proceed. Although the Urho3D build system also supports linking the Urho3D library directly from its build tree, this quick start guide will not be discussing it here. Assuming you have been following along from the previous section, execute the following commands to create a new UrhoApp project, and then build it."),(0,i.kt)(l.Z,{className:d.Z.buildUrhoApp,groupId:"target-platform",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"Apple",value:"apple"},{label:"Arm",value:"arm"},{label:"Linux",value:"linux"},{label:"RPI",value:"rpi"},{label:"Web",value:"web"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"android",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new UrhoApp\nscript/dockerized.sh android rake new[AndroidUrhoApp,demo]\ncd demo/AndroidUrhoApp\n# Build the newly generated UrhoApp\nscript/dockerized.sh android\n"))),(0,i.kt)(s.Z,{value:"apple",mdxType:"TabItem"},(0,i.kt)("div",{className:(0,o.Z)("textBlock",d.Z.fixedHeight)},(0,i.kt)("p",null,"Currently DBE does not support Apple platforms."),(0,i.kt)("p",null,"However, Urho3D supports Apple platforms using native build environment."))),(0,i.kt)(s.Z,{value:"arm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new UrhoApp\nscript/dockerized.sh arm rake new[ArmUrhoApp,demo]\ncd demo/ArmUrhoApp\n# Build the newly generated UrhoApp, specify other extra build options to target a specific ARM board\nscript/dockerized.sh arm\n"))),(0,i.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new UrhoApp\nscript/dockerized.sh linux rake new[LinuxUrhoApp,demo]\ncd demo/LinuxUrhoApp\n# Build the newly generated UrhoApp\nscript/dockerized.sh linux\n"))),(0,i.kt)(s.Z,{value:"rpi",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Create a new UrhoApp\nscript/dockerized.sh rpi rake new[PiUrhoApp,demo]\ncd demo/PiUrhoApp\n# Build the newly generated UrhoApp, modify the "RPI_ABI" build option accordingly\nRPI_ABI=RPI4 script/dockerized.sh rpi\n'))),(0,i.kt)(s.Z,{value:"web",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new UrhoApp\nscript/dockerized.sh web rake new[WebUrhoApp,demo]\ncd demo/WebUrhoApp\n# Build the newly generated UrhoApp\nscript/dockerized.sh web\n"))),(0,i.kt)(s.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a new UrhoApp\nscript/dockerized.sh mingw rake new[WindowsUrhoApp,demo]\ncd demo/WindowsUrhoApp\n# Build the newly generated UrhoApp\nscript/dockerized.sh mingw\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is not a copy/paste error. You can build your new UrhoApp exactly the same way as the Urho3D project itself!"))),(0,i.kt)("p",null,"You can pass optional build options to the build system by using environment variables. One easy way to do that is to set them just in time on the same line before the actual command to be invoked. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"RPI_ABI=RPI4 script/dockerized.sh rpi"),". See the Build Options section for more information."),(0,i.kt)("div",{className:"text--center"},(0,i.kt)("img",{src:"/img/docs/quick-start-screencast.svg",alt:"Screencast"})),(0,i.kt)("h2",{id:"urhoapp-project-structure"},"UrhoApp Project Structure"),(0,i.kt)("p",null,"In order to reuse the same build system for Urho3D project to successfully build your own UrhoApp project, the UrhoApp project must be structured similarly to Urho3D project. Assuming you chose to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"rake new")," to create the UrhoApp project, you will have the following project structure under a new app directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"UrhoApp\n\u251c\u2500 app\n\u2502  \u251c\u2500 build.gradle.kts\n\u2502  \u251c\u2500 CMakeLists.txt\n\u2502  \u251c\u2500 proguard-rules.pro\n\u2502  \u2514\u2500 src\n\u2502     \u251c\u2500 cpp\n\u2502     \u2502  \u251c\u2500 UrhoApp.cpp\n\u2502     \u2502  \u2514\u2500 UrhoApp.h\n\u2502     \u251c\u2500 java\n\u2502     \u2502  \u2514\u2500 io/urho3d/urhoapp\n\u2502     \u2502     \u2514\u2500 MainActivity.kt\n\u2502     \u251c\u2500 res\n\u2502     |  \u2514\u2500 (truncated)\n\u2502     \u2514\u2500 AndroidManifest.xml\n\u251c\u2500 bin\n\u2502  \u251c\u2500 CoreData\n\u2502  \u2502  \u2514\u2500 (as in Urho3D)\n\u2502  \u2514\u2500 Data\n\u2502     \u251c\u2500 Materials\n\u2502     \u2502  \u2514\u2500 Mushroom.xml\n\u2502     \u251c\u2500 Models\n\u2502     \u2502  \u2514\u2500 Mushroom.mdl\n\u2502     \u251c\u2500 Music\n\u2502     \u2502  \u2514\u2500 Ninja Gods.ogg\n\u2502     \u2514\u2500 Textures\n\u2502        \u251c\u2500 Mushroom.dds\n\u2502        \u251c\u2500 UrhoIcon.icns\n\u2502        \u2514\u2500 UrhoIcon.png\n\u251c\u2500 build.gradle.kts\n\u251c\u2500 cmake\n\u2502  \u2514\u2500 (as in Urho3D)\n\u251c\u2500 CMakeLists.txt\n\u251c\u2500 gradle/wrapper\n\u2502  \u251c\u2500 gradle-wrapper.jar\n\u2502  \u2514\u2500 gradle-wrapper.properties\n\u251c\u2500 gradle.properties\n\u251c\u2500 gradlew\n\u251c\u2500 gradlew.bat\n\u251c\u2500 rakefile\n\u251c\u2500 scripts\n\u2502  \u2514\u2500 (as in Urho3D)\n\u251c\u2500 settings.gradle.kts\n\u251c\u2500 .clang-format\n\u251c\u2500 .clang-tidy\n\u251c\u2500 .gitattributes\n\u2514\u2500 .gitignore\n")),(0,i.kt)("p",null,"At the root of the project there are a few build scripts which can be grouped as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CMake")," - consist of ",(0,i.kt)("inlineCode",{parentName:"li"},"CMakeLists.txt")," and all the CMake modules and toolchains in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cmake/")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Gradle")," - consist of ",(0,i.kt)("inlineCode",{parentName:"li"},"build.gradle.kts"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"settings.gradle.kts"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gradle.properties"),", and the Gradle wrapper scripts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Shell")," - consist of convenience *nix bash shell script and Windows batch files in the ",(0,i.kt)("inlineCode",{parentName:"li"},"script/")," directory."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rake")," - only one ",(0,i.kt)("inlineCode",{parentName:"li"},"rakefile")," but it defines all the common tasks.")),(0,i.kt)("p",null,"If you are very familiar with CMake then you can directly invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ccmake"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"cmake-gui")," to generate a build tree for all the supported platforms, except for Android platform. For the latter case you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"gradle"),", or via its wrapper script if you don't have Gradle installed globally. For the most cases though, you will probably find it useful to use the convenience shell scripts or to use them as reference for your own convenience scripts. Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rake")," command can be used to execute rake tasks for building the project and more."),(0,i.kt)("p",null,"All the above are for the build system, the actual meat of the UrhoApp project are only residing in the following two directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app/")," - mainly contains the C++ source code in ",(0,i.kt)("inlineCode",{parentName:"li"},"src/cpp/")," and Kotlin/Java source code in ",(0,i.kt)("inlineCode",{parentName:"li"},"src/java/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bin/")," - contains the assets used by the Urho3D game engine, at the very least it should have ",(0,i.kt)("inlineCode",{parentName:"li"},"CoreData/")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Data/"),".")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The UrhoApp project is cross-platform out of the box!"))))}k.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},6563:function(e,t){"use strict";t.Z={buildUrho3D:"buildUrho3D_1iEB",fixedHeight:"fixedHeight_2DKB",buildUrhoApp:"buildUrhoApp_shoJ",requirements:"requirements_3RFz"}}}]);
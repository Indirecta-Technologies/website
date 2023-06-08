"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="\ud83e\udde9 Modularity",l={unversionedId:"FOSD/iComm/modularity",id:"FOSD/iComm/modularity",title:"\ud83e\udde9 Modularity",description:"A core idea of the iComm is that to use and require different modules for each scope, applications, and resources.",source:"@site/docs/FOSD/iComm/modularity.md",sourceDirName:"FOSD/iComm",slug:"/FOSD/iComm/modularity",permalink:"/website/docs/FOSD/iComm/modularity",draft:!1,editUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D/docs/FOSD/iComm/modularity.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u270f\ufe0f Design",permalink:"/website/docs/FOSD/iComm/design"},next:{title:"\ud83c\udf21\ufe0f Sensors",permalink:"/website/docs/FOSD/iComm/sensors"}},c={},s=[],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-modularity"},"\ud83e\udde9 Modularity"),(0,o.kt)("p",null,"A core idea of the iComm is that to use and require different modules for each scope, applications, and resources.",(0,o.kt)("br",{parentName:"p"}),"\n","Here's how iComm GUI is structured:  "),(0,o.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/gui_struct.png",width:"150px"}),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"LocalScript ",(0,o.kt)("inlineCode",{parentName:"li"},"iComm"),"  ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Keyboard"),' Handles all customizable "keys", unique to the iComm device, unifies all button .Activated events under one KeyPressEvent'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Peripherals"),' Handles all customizable "peripherals" in it\'s own script, flashlight API, status led API, etc.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Screen")," Handles all UI functions unique to the iComm (tweens, notifications, custom D-PAD scrolls, clock, etc.)  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Module")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Sensors")," Very cool Sensors module, usually reused in various Indirecta devices, mentioned below in the README"),(0,o.kt)("li",{parentName:"ul"},"TextButton ",(0,o.kt)("inlineCode",{parentName:"li"},"AppTemplate")," Irrelevant, used as button template in iComm App Menu"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Apps")," Folder containing all iComm app modules, each app has it's own structure depending on the ModuleScript template semi-unique to each app (check it out!)")))))),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Frame")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Anchor")," Frame containing all device UI (screen, keyboard, deco, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Frame")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ScreenSizeWarning")," Independent frame used in Indirecta products to warn of screen resolutions that might alter normal device behavior"))),(0,o.kt)("p",null,"Do note that each module, application or script can have it's own configuration structure and config location"))}p.isMDXComponent=!0}}]);
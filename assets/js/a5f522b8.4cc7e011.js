"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9941],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8565:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const i={sidebar_position:5},a="\ud83e\udea9 Peripherals",l={unversionedId:"FOSD/iComm/peripherals",id:"FOSD/iComm/peripherals",title:"\ud83e\udea9 Peripherals",description:"As described before, the iComm also features a Peripherals module, it currently has the following default peripherals:",source:"@site/docs/FOSD/iComm/peripherals.md",sourceDirName:"FOSD/iComm",slug:"/FOSD/iComm/peripherals",permalink:"/website/docs/FOSD/iComm/peripherals",draft:!1,editUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D/docs/FOSD/iComm/peripherals.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf21\ufe0f Sensors",permalink:"/website/docs/FOSD/iComm/sensors"},next:{title:"\u2697\ufe0f Use cases",permalink:"/website/docs/FOSD/iComm/use-cases"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-peripherals"},"\ud83e\udea9 Peripherals"),(0,o.kt)("p",null,"As described before, the iComm also features a Peripherals module, it currently has the following default peripherals:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"function")," ",(0,o.kt)("inlineCode",{parentName:"li"},":Led(Color3)")," Changes status LED Peripheral color to first argument provided (must be a Color3 obj)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"function")," ",(0,o.kt)("inlineCode",{parentName:"li"},":Torch(On, Brightness)")," Changes torch peripheral light enabled depending on first argument, range and brightness depending on the second argument; if no arguments are provided, the Torch LED will toggle Value with a default Brightness of ",(0,o.kt)("inlineCode",{parentName:"li"},"3")))))}m.isMDXComponent=!0}}]);
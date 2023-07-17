"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5341],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(i),h=a,u=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return i?n.createElement(u,r(r({ref:t},c),{},{components:i})):n.createElement(u,r({ref:t},c))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var m=2;m<o;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},4059:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=i(7462),a=(i(7294),i(3905));const o={sidebar_position:7},r="\ud83c\udfec Applications",s={unversionedId:"FOSD/iComm/applications",id:"FOSD/iComm/applications",title:"\ud83c\udfec Applications",description:"Core Apps",source:"@site/docs/FOSD/iComm/applications.md",sourceDirName:"FOSD/iComm",slug:"/FOSD/iComm/applications",permalink:"/docs/FOSD/iComm/applications",draft:!1,editUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D/docs/FOSD/iComm/applications.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u2697\ufe0f Use cases",permalink:"/docs/FOSD/iComm/use-cases"},next:{title:"\ud83c\udfa8 Customization",permalink:"/docs/FOSD/iComm/customization"}},l={},m=[{value:"Core Apps",id:"core-apps",level:2},{value:"Circle Apps",id:"circle-apps",level:2}],c={toc:m},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-applications"},"\ud83c\udfec Applications"),(0,a.kt)("h2",{id:"core-apps"},"Core Apps"),(0,a.kt)("p",null,"Indirecta ships each iComm or communicator device with roughly 6 default applications, these applications are called core apps, similiar to GNOME Desktop Environment's Core and Circle apps.",(0,a.kt)("br",{parentName:"p"}),"\n","This section aims to describe best all the core applications.",(0,a.kt)("br",{parentName:"p"}),"\n","More complex core applications like the Radiocomm app can have their own page."),(0,a.kt)("h1",{id:"\ufe0f-radiocomm-radio"},"\ud83d\udef0\ufe0f Radiocomm ",(0,a.kt)("inlineCode",{parentName:"h1"},"Radio")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_3.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/radiocomm_4.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Radio-like encrypted messaging app made with \u2764\ufe0f by Indirecta",(0,a.kt)("br",{parentName:"p"}),"\n","Allows the user to change frequency up/down 1/.5 MHz, messages are sent in different MessagingService topics depending on frequency, and encrypted with frequency and a key derived from an optional secret using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Indirecta-Technologies/indirectaSEA"},"Indirecta's public encryption algorithm"),"  ")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"As string encryption is also used on messages without custom keys using their frequency, the Roblox filter cannot be implemented, and we are not responsible for inadequate usage of this application among common game players and unexperienced staff.",(0,a.kt)("br",{parentName:"p"}),"\n","You can GET BANNED from Roblox for using unfiltered chats.",(0,a.kt)("br",{parentName:"p"}),"\n","We have implemented a setting ",(0,a.kt)("inlineCode",{parentName:"p"},"ExplicitFiltering")," in both the Client and Server scripts (both must be the same) allowing game developers to disable all encryption options and techniques that is turned on by default in versions >1.3.7")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use mouse scroll wheel to scroll, if not available (disabled by group/developer), use the ",(0,a.kt)("inlineCode",{parentName:"li"},"UP")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DOWN")," iComm Keys  "),(0,a.kt)("li",{parentName:"ul"},"When the app is launched, an extension of the status bar (macro title) featuring PTT/Mic status and current frequency"),(0,a.kt)("li",{parentName:"ul"},"For developers or advanced users, the custom iSEA String Key option in the freq. menu can be toggled using ",(0,a.kt)("inlineCode",{parentName:"li"},"LFN"),"; there is also a debug menu featuring experimental data that can be toggled using ",(0,a.kt)("inlineCode",{parentName:"li"},"RFN")),(0,a.kt)("li",{parentName:"ul"},"Since the PTT/Microphone message capture technique uses Roblox's .Chatted event, when sending a message using Radiocomm, it will also be shown in Roblox chat. That is why we suggest game developers who use Radiocomm to remove chat history, allowing only bubble chat (your messages will still be seen if you're close, but it's also realistic this way)"),(0,a.kt)("li",{parentName:"ul"},"In a recent update, Radiocomm has received support for Roblox's new TextChatService, which allows for messages to be intercepted. Switch to TextChatService for a more suited radio experience."),(0,a.kt)("li",{parentName:"ul"},"Features a configurable secondary unencrypted SOS Frequency that is always received by devices on other frequencies and only transmittable on it's own frequency. By default ",(0,a.kt)("inlineCode",{parentName:"li"},"112.7 MHz"))),(0,a.kt)("h1",{id:"-compass-compass"},"\ud83e\udded Compass ",(0,a.kt)("inlineCode",{parentName:"h1"},"Compass")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/compass_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Basic application displaying current camera orientation using ",(0,a.kt)("inlineCode",{parentName:"p"},"Camera.CoordinateFrame.LookVector"),(0,a.kt)("br",{parentName:"p"}),"\n","Displays camera orientation in 3 ways, using labels for each heading, a label for the orientation in degrees, and a compass arrow.")),(0,a.kt)("h1",{id:"\ufe0f-map-map"},"\ud83d\uddfa\ufe0f Map ",(0,a.kt)("inlineCode",{parentName:"h1"},"Map")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_3.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/map_4.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Map application made with \u2764\ufe0f by Indirecta",(0,a.kt)("br",{parentName:"p"}),"\n","Loads 500 instances at a time to prevent crashes, calculates time took from 1 lag spike to the other (experimental)",(0,a.kt)("br",{parentName:"p"}),"\n","Displays map in 3 modes, one display a blue player indicator with a compass indicator, the other rotating the map directly dependign on the compass orientation, and the last being a free D-PAD navigation mode; the modes are toggled using ",(0,a.kt)("inlineCode",{parentName:"p"},"LFN"),(0,a.kt)("br",{parentName:"p"}),"\n","Also allows for waypoints to be added to the map (in the module configuration, or by editing existing ones using FOSDebug), and loads all of the current server's players' position using colored indicators\nDisplays in the bottom left of the screen an indicator depicting the width of the map shown in real world units.")),(0,a.kt)("h1",{id:"-torchflashlight-torch"},"\ud83d\udd26 Torch/Flashlight ",(0,a.kt)("inlineCode",{parentName:"h1"},"Torch")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/flashlight_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/flashlight_2.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Core application with tool flashlight peripheral integration",(0,a.kt)("br",{parentName:"p"}),"\n","Allows 5 different flashlight on-off intervals, 5 flashlight brightness levels (brightness-range tradeoff configurations) and an emergency SOS interval",(0,a.kt)("br",{parentName:"p"}),"\n","As iComm developers may develop directly with the iComm firmware (GUI) directly in StarterGui, without it being linked to any hardware (tool that toggles GUI), the Torch app displays a warning screen when it detects that there isn't any iComm tool or flashlight linked as a peripheral to use")),(0,a.kt)("h1",{id:"-nfcnear-field-communiation-nfc"},"\ud83d\udcf6 NFC/Near Field Communiation ",(0,a.kt)("inlineCode",{parentName:"h1"},"NFC")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/nfc_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/nfc_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/nfc_3.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Core application with tool nfc peripheral integration",(0,a.kt)("br",{parentName:"p"}),"\n","Allows client to transmit any data (string) from client to server and receive it from other clients (through a server side script integration similar to Radiocomm)\nAs iComm developers may develop directly with the iComm firmware (GUI) directly in StarterGui, without it being linked to any hardware (tool that toggles GUI), the NFC app displays a warning screen when it detects that there isn't any iComm tool or NFC antenna linked as a peripheral to use")),(0,a.kt)("h1",{id:"-sensors-atmosdata"},"\ud83d\udcc8 Sensors ",(0,a.kt)("inlineCode",{parentName:"h1"},"AtmosData")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/atmosdata_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/atmosdata_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/atmosdata_3.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Application displaying in a scrollable list all auto-updating iComm Sensor Updates.",(0,a.kt)("br",{parentName:"p"}),"\n","Occasionally displays readings using colored progress bars, graphs, and custom units.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use mouse scroll wheel to scroll, if not available (disabled by group/developer), use the ",(0,a.kt)("inlineCode",{parentName:"li"},"UP")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DOWN")," iComm Keys  "),(0,a.kt)("li",{parentName:"ul"},"When the app is launched, an extension of the status bar featuring ping connectivity bars and a favorite measurement is added, that is configurable through the application module configuration")),(0,a.kt)("h1",{id:"\ufe0f-attitude-attitudeindicator"},"\ud83d\udee9\ufe0f Attitude ",(0,a.kt)("inlineCode",{parentName:"h1"},"AttitudeIndicator")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/attitude_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/attitude_2.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Application displaying iComm sensor attitude data as artifical horizon/gyro/attitude indicator. Useful for Ro-Aviation",(0,a.kt)("br",{parentName:"p"}),"\n","Displays X and Z orientation  ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There is no in-app interaction. Press ",(0,a.kt)("inlineCode",{parentName:"li"},"Back")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Menu")," to exit after usage.  "),(0,a.kt)("li",{parentName:"ul"},"If app use-case is too specific, you are free to delete the app module or move it somewhere to hide the app.")),(0,a.kt)("h1",{id:"-indirecta-free-open-source-device-debug-kit-fosdebug"},"\ud83d\udc1e Indirecta Free Open Source Device Debug Kit ",(0,a.kt)("inlineCode",{parentName:"h1"},"FOSDebug")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_3.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/fosdebug_4.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Application displaying in a scrollable list all loaded applications, it is heavily in development, and not user friendly as it was designed as a developer kit accessory only.",(0,a.kt)("br",{parentName:"p"}),"\n","It allows developers to select applications, and edit live module data such as sensor configuration, app name, icon, soft keys, etc. without interrupting the playtest")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The user is greeted with a red on black selection menu. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"UP")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"DOWN")," iComm Keys to scroll and ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," to choose.  The only choice available on the current version is the Applications debug menu. "),(0,a.kt)("li",{parentName:"ul"},"After selecting the Applications menu, the user can scroll using the previous keys or the mouse scroll wheel, and select an application."),(0,a.kt)("li",{parentName:"ul"},'After selecting an application, the user will be able to edit live module "self" data such as AppInfo, Configuration strings and booleans.'),(0,a.kt)("li",{parentName:"ul"},"An error simulator tool and a keyboard testing tool have been since added to the debug kit, along with an option that automatically opens the Roblox console")),(0,a.kt)("h2",{id:"circle-apps"},"Circle Apps"),(0,a.kt)("p",null,"The iComm FOSD's GitHub page features download pages for all official but non-essential \"Circle\" Apps described below.\nThis section aims to describe best all the Circle applications that aren't included by default in iComm Releases.  "),(0,a.kt)("h1",{id:"-2fa-2fac"},"\ud83d\udd10 2FA ",(0,a.kt)("inlineCode",{parentName:"h1"},"2fac")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/2fa_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/2fa_2.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2 factor authenticator similar to Google Authenticator and Authy. Generates one time passcodes depending on a preconfigured secret, usable with other 2fa enabled products like\nIndirecta TagRead readers, and even online services like Discord!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The main page displays all available buttons with chosen emojies, and a circular progress bar representing time left."),(0,a.kt)("li",{parentName:"ul"},"Clicking on one of the circular progress bar buttons leads to the code page, where the full name, emoji, code and progress bar are shown."),(0,a.kt)("li",{parentName:"ul"},"Pressing back will return to the main page.")),(0,a.kt)("h1",{id:"-books-books"},"\ud83d\udcda Books ",(0,a.kt)("inlineCode",{parentName:"h1"},"Books")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/books_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/books_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/books_3.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Experimental Book Reader Application for the iComm")),(0,a.kt)("h1",{id:"-cs-gol-conwaysgol"},"\ud83c\udf38 C's GOL ",(0,a.kt)("inlineCode",{parentName:"h1"},"ConwaysGOL")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/cgol_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Conway's Game of Life simulation for the iComm.\nPorted from an uncopylocked CGOL Game released on the devforum.")),(0,a.kt)("h1",{id:"-calibrator-emfcalibrator"},"\u2754 Calibrator ",(0,a.kt)("inlineCode",{parentName:"h1"},"EMFCalibrator")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/emfcalibrator_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"EMF Calibrator for tools with limited indicator LEDs like the Indirecta Handheld EMF Tester.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Calibrates values using softkeys and function keys."),(0,a.kt)("li",{parentName:"ul"},"Uses the Sensors module to test EMF")),(0,a.kt)("h1",{id:"\ufe0f-luagb-luagb"},"\ud83d\udd79\ufe0f LuaGB ",(0,a.kt)("inlineCode",{parentName:"h1"},"LuaGB")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/luagb_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/luagb_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/luagb_3.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A port/fork of the rLuaGB Project to the iComm")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keypress Up Down mechanics are different, TO:DO Use Up and Down events instead of simulating like in FOSDebug Keytest App.")),(0,a.kt)("h1",{id:"-keyboard-piano"},"\ud83c\udfb9 Keyboard ",(0,a.kt)("inlineCode",{parentName:"h1"},"Piano")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/piano_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'A musical keyboard "game" application')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the soft keys to transpose octave")),(0,a.kt)("h1",{id:"-sprint-pager-recordsprint"},"\u2754 Sprint Pager ",(0,a.kt)("inlineCode",{parentName:"h1"},"RecordSprint")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sprint_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sprint_2.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A port of the record Sprint Pager protocol to the iComm with multipage and notification functionality.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The inside the of the app (module) is structured similarly to that of a sprint pager tool, which makes setup the same as regular devices.")),(0,a.kt)("h1",{id:"-reminer-remoteeventminer"},"\u2754 REMiner ",(0,a.kt)("inlineCode",{parentName:"h1"},"RemoteEventMiner")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/reminer_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'A highly experimental "crypto miner" simulation that does cool stuff with hashes and remote event traffic.\nContains inside a server mutex that assigns jobs to all clients, it does not send out rewards.')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Press the START OK button to start handling jobs")),(0,a.kt)("h1",{id:"-sun--moon-sunmoon"},"\ud83c\udf19 Sun & Moon ",(0,a.kt)("inlineCode",{parentName:"h1"},"SunMoon")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/sunmoon_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Experimental application that could have been a core app. Displays a small sun and moon chart with some info that is currently fixed because Roblox",(0,a.kt)("br",{parentName:"p"}),"\n","sun times do not change depending on time of year")),(0,a.kt)("h1",{id:"-firewall-recordfirewall"},"\u2754 Firewall ",(0,a.kt)("inlineCode",{parentName:"h1"},"RecordFirewall")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/firewall_1.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A port of the record Firewall Shutters Remote protocol to the iComm with similar design.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The inside the of the app (module) is structured similarly to that of a firewall remote tool, which makes setup the same as regular devices."),(0,a.kt)("li",{parentName:"ul"},"In addition to touch the app remote can be controlled using the D-PAD Keys: ",(0,a.kt)("inlineCode",{parentName:"li"},"UP"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"DOWN")," Open/Close; ",(0,a.kt)("inlineCode",{parentName:"li"},"LEFT"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"RIGHT")," Change group")),(0,a.kt)("h1",{id:"-talkie-walkietalkie"},"\ud83d\udcac Talkie ",(0,a.kt)("inlineCode",{parentName:"h1"},"WalkieTalkie")),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/walkietalkie_1.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/walkietalkie_2.png",width:"200px"}),(0,a.kt)("img",{alt:"icomm design",src:"https://raw.githubusercontent.com/Indirecta-Technologies/fosd/main/icomm/media/walkietalkie_3.png",width:"200px"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Experimental & alternative "radio" communication design. A much simpler alternative to the Radiocomm app.')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Press the big button or the ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," center d-pad key to toggle between muted and listening"),(0,a.kt)("li",{parentName:"ul"},"When the button is gray/listening, it'll listen to what you say in the chat and transmit it to everyone on the same channel and become green"),(0,a.kt)("li",{parentName:"ul"},"The channels are 36 in total starting from 1 and can be changed with the ",(0,a.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," buttons, or the ",(0,a.kt)("inlineCode",{parentName:"li"},"UP")," ",(0,a.kt)("inlineCode",{parentName:"li"},"DOWN")," ",(0,a.kt)("inlineCode",{parentName:"li"},"LEFT")," ",(0,a.kt)("inlineCode",{parentName:"li"},"RIGHT")," D-Pad keys")))}d.isMDXComponent=!0}}]);
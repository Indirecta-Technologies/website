"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="\ud83c\udf21\ufe0f Sensors",s={unversionedId:"FOSD/iComm/sensors",id:"FOSD/iComm/sensors",title:"\ud83c\udf21\ufe0f Sensors",description:"Indirecta ships each iComm or communicator device with a Sensors module. It uses various patched functions ranging from atmospheric data (thank you PulsarNova!) to extended climate data derived from atmospheric data (thank you ChatGPT!).",source:"@site/docs/FOSD/iComm/sensors.md",sourceDirName:"FOSD/iComm",slug:"/FOSD/iComm/sensors",permalink:"/website/docs/FOSD/iComm/sensors",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/FOSD/iComm/sensors.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udde9 Modularity",permalink:"/website/docs/FOSD/iComm/modularity"},next:{title:"\ud83e\udea9 Peripherals",permalink:"/website/docs/FOSD/iComm/peripherals"}},c={},l=[{value:"Magnetic Field Strength Algorithm",id:"magnetic-field-strength-algorithm",level:2},{value:"(<strong>function</strong> <code>DeviceRadiation</code> from <strong>Module</strong> <code>Sensors</code>)",id:"function-deviceradiation-from-module-sensors",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-sensors"},"\ud83c\udf21\ufe0f Sensors"),(0,a.kt)("p",null,"Indirecta ships each iComm or communicator device with a Sensors module. It uses various patched functions ranging from atmospheric data (",(0,a.kt)("a",{parentName:"p",href:"https://create.roblox.com/marketplace/asset/4996116798"},"thank you PulsarNova!"),") to extended climate data derived from atmospheric data (",(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/"},"thank you ChatGPT!"),").  "),(0,a.kt)("p",null,"Thanks to a wonderful idea and ChatGPT, Indirecta has been able to create a state-of-the-art sensor function for electromagnetic interference, that's essentially a value fluctuating depending on the number of parts in a range with scripts, and their distance to the player.  "),(0,a.kt)("p",null,"We encourage iComm users to test this sensor in their game, and impose appropriate work safety and system configurations depending on sensor readings"),(0,a.kt)("h2",{id:"magnetic-field-strength-algorithm"},"Magnetic Field Strength Algorithm"),(0,a.kt)("h3",{id:"function-deviceradiation-from-module-sensors"},"(",(0,a.kt)("strong",{parentName:"h3"},"function")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"DeviceRadiation")," from ",(0,a.kt)("strong",{parentName:"h3"},"Module")," ",(0,a.kt)("inlineCode",{parentName:"h3"},"Sensors"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},' ["DeviceRadiation"] = function()\n        wait(.397)\n        -- Define a function that takes a position and a radius as inputs and returns the pollution level at that position\n        local function getPollutionLevel(position, radius)\n            -- Find all the parts within the radius of the given position\n            local parts = game.Workspace:FindPartsInRegion3(Region3.new(position - Vector3.new(radius, radius, radius), position + Vector3.new(radius, radius, radius)))\n\n            -- Initialize a counter for the number of parts with scripts\n            local numScripts = 0\n            local p3 = 0\n\n            local major_contributor = nil\n            local major_contribution = 0\n\n        -- Iterate over the parts and count the number with scripts attached to them\n        for _, part in pairs(parts) do\n            if part.Parent == workspace then continue end\n            if game:GetService("Players"):GetPlayerFromCharacter(part.Parent) then continue end\n\n            local distance = (part.Position - position).Magnitude+0.001\n            local function countScriptDescendants(part)\n                local numScripts = 0\n                local blacklist = {}\n                local currentPart = part\n                while currentPart.Parent ~= workspace do\n                    for _, descendant in pairs(currentPart:GetDescendants()) do\n                        if descendant:IsA("BaseScript") and descendant.Disabled == false and not table.find(blacklist, descendant) then\n                            table.insert(blacklist, descendant)\n                            numScripts = numScripts + 1\n                        end\n                    end\n                    currentPart = currentPart.Parent\n                end\n                return numScripts\n            end\n\n            local numPartScripts = countScriptDescendants(part)\n\n            numScripts += numPartScripts\n\n            -- Calculate the contribution of the current part to p3\n            local contribution = numPartScripts / (2 * math.pi * distance)\n            if contribution > major_contribution then major_contributor = part.Parent.Name end\n            p3 += contribution\n\n        end\n\n        -- Calculate the pollution level as a function of the number of parts with scripts and the radius\n        local pollutionDensity = numScripts / (radius^2)\n        -- Round to micron\n        pollutionDensity = math.round(pollutionDensity / 0.000001 * 10) / 10\n\n        -- Calculate more accurate microTesla unit from weighted average (p2 is much higher than pollution density)\n        local microTeslaDensity = math.clamp((math.log(1+p3)) * 8, 0, math.huge) --15000000, needs a lot more tuning.\n\n        return microTeslaDensity, pollutionDensity\n    end\n\n    local tesla, density = getPollutionLevel(HumanoidRootPart.Position, 45)\n    if config["MagnetometerUnit"] == "Density" then\n        return string.format("%.2f \xb5P/stud", density), (math.log(density) / 15) * 100\n    elseif config["MagnetometerUnit"] == "microTesla" then\n        return string.format("%.2f \xb5T", tesla), (tesla + 100) / 2\n    elseif config["MagnetometerUnit"] == "milliGauss" then\n        return string.format("%.2f mG", tesla*10), (math.log(density) / 15) * 100\n    else return "-",50 end\n\n\nend\n')))}p.isMDXComponent=!0}}]);
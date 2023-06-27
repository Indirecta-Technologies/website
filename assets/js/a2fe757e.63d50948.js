"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4333],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,s(s({ref:t},p),{},{components:r})):a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8821:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},s="\ud83d\udd10 iSEA",o={unversionedId:"isea",id:"isea",title:"\ud83d\udd10 iSEA",description:"Indirecta String Encryption Algorithm",source:"@site/docs/isea.md",sourceDirName:".",slug:"/isea",permalink:"/website/docs/isea",draft:!1,editUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D/docs/isea.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u2139\ufe0f Info",permalink:"/website/docs/category/-isense"},next:{title:"\ud83d\udcf6 NFC",permalink:"/website/docs/nfc"}},l={},c=[{value:"Indirecta String Encryption Algorithm",id:"indirecta-string-encryption-algorithm",level:2},{value:"Adapted from the Prometheus String Encryption Step for standalone use as a library (rojo project)",id:"adapted-from-the-prometheus-string-encryption-step-for-standalone-use-as-a-library-rojo-project",level:3},{value:"(written by ChatGPT, take with a grain of salt)",id:"written-by-chatgpt-take-with-a-grain-of-salt",level:3},{value:"Encryption",id:"encryption",level:2},{value:"The encryption process consists of the following steps:",id:"the-encryption-process-consists-of-the-following-steps",level:3},{value:"Decryption",id:"decryption",level:2},{value:"The decryption process consists of the following steps:",id:"the-decryption-process-consists-of-the-following-steps",level:3},{value:"\ud83d\udcd6 Methods",id:"-methods",level:2},{value:"\ud83d\udcd6 Example usage",id:"-example-usage",level:2},{value:"GitHub Repo",id:"github-repo",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-isea"},"\ud83d\udd10 iSEA"),(0,n.kt)("h2",{id:"indirecta-string-encryption-algorithm"},"Indirecta String Encryption Algorithm"),(0,n.kt)("h3",{id:"adapted-from-the-prometheus-string-encryption-step-for-standalone-use-as-a-library-rojo-project"},"Adapted from the ",(0,n.kt)("a",{parentName:"h3",href:"https://github.com/levno-710/Prometheus/blob/master/src/prometheus/steps/EncryptStrings.lua"},"Prometheus String Encryption Step")," for standalone use as a library (rojo project)"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u270f\ufe0f Algorithm Design"),(0,n.kt)("h3",{id:"written-by-chatgpt-take-with-a-grain-of-salt"},"(written by ChatGPT, take with a grain of salt)"),(0,n.kt)("p",null,"The Indirecta encryption algorithm is designed to be a symmetric encryption algorithm, meaning that the same key is used for both encryption and decryption. The algorithm takes as input a secret key, which consists of four arbitrary integers: a 6-bit integer (0..63), a 7-bit integer (0..127), a 44-bit integer (0..17592186044415), and an 8-bit integer (0..255). The algorithm then uses these integers as parameters for its encryption and decryption operations."),(0,n.kt)("p",null,"The algorithm first calculates a primitive root of 257 using the secret_key_7 integer. This primitive root is used to generate a multiplication parameter for the linear congruential generator used in the algorithm. The algorithm also uses the secret_key_6 integer to calculate another multiplication parameter, as well as a secret_key_44 integer to calculate an addition parameter for the linear congruential generator."),(0,n.kt)("p",null,"The algorithm then initializes two state variables, state_45 and state_8, with the values of zero and two, respectively. The state_45 variable is used to store the current state of the linear congruential generator, while the state_8 variable is used to generate the pseudo-random numbers."),(0,n.kt)("h2",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"The encryption process in the Indirecta algorithm takes a plaintext string as input and returns a ciphertext string and a seed value. The seed value is a randomly generated number that is used to set the initial state of the linear congruential generator."),(0,n.kt)("h3",{id:"the-encryption-process-consists-of-the-following-steps"},"The encryption process consists of the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate a random seed value that has not been used before."),(0,n.kt)("li",{parentName:"ol"},"Set the initial state of the linear congruential generator using the generated seed value."),(0,n.kt)("li",{parentName:"ol"},"Initialize a previous value variable, prevVal, with the value of the secret_key_8 integer."),(0,n.kt)("li",{parentName:"ol"},"Iterate over each character in the plaintext string."),(0,n.kt)("li",{parentName:"ol"},"For each character, subtract the previous value variable and a pseudo-random byte from the character's byte value, modulo 256."),(0,n.kt)("li",{parentName:"ol"},"Set the previous value variable to the character's byte value."),(0,n.kt)("li",{parentName:"ol"},"Append the resulting byte value to the ciphertext string."),(0,n.kt)("li",{parentName:"ol"},"Return the ciphertext string and the seed value.")),(0,n.kt)("h2",{id:"decryption"},"Decryption"),(0,n.kt)("p",null,"The decryption process in the Indirecta algorithm takes a ciphertext string and a seed value as input and returns a plaintext string. The seed value is used to set the initial state of the linear congruential generator."),(0,n.kt)("h3",{id:"the-decryption-process-consists-of-the-following-steps"},"The decryption process consists of the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Set the initial state of the linear congruential generator using the given seed value."),(0,n.kt)("li",{parentName:"ol"},"Initialize a previous value variable, prevVal, with the value of the secret_key_8 integer."),(0,n.kt)("li",{parentName:"ol"},"Iterate over each pair of characters in the ciphertext string."),(0,n.kt)("li",{parentName:"ol"},"For each pair of characters, add a pseudo-random byte and the previous value variable to the byte value, modulo 256."),(0,n.kt)("li",{parentName:"ol"},"Set the previous value variable to the resulting byte value."),(0,n.kt)("li",{parentName:"ol"},"Append the resulting byte value to the plaintext string."),(0,n.kt)("li",{parentName:"ol"},"Return the plaintext string."))),(0,n.kt)("h2",{id:"-methods"},"\ud83d\udcd6 Methods"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isea.newState(secret)")," Returns a new iSEA state using a secret",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("em",{parentName:"li"},"returns a")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"isea.deriveSecret(passphrase)")," Returns a new iSEA secret derived from a string passphrase",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("em",{parentName:"li"},"returns a")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"table"))))),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"state.encrypt(string)")," Encrypts a string using the current state's secret",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("em",{parentName:"li"},"returns a")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"tuple"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"state.decrypt(ciphertext, seed)")," Decrypts provided ciphertext using the current state's secret and the ciphertext's seed",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("em",{parentName:"li"},"returns a")," ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"string"))))),(0,n.kt)("h2",{id:"-example-usage"},"\ud83d\udcd6 Example usage"),(0,n.kt)("h1",{id:"-encryption"},"\ud83d\udd10 Encryption"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'--// Generate random secret\nlocal random = Random.new();\nlocal secret = {\n            random:NextNumber(0, 63), --// 6-bit  arbitrary integer (0..63)\n            random:NextNumber(0, 127), --// 7-bit  arbitrary integer (0..127)\n            random:NextNumber(0, 17592186044415), --// 44-bit arbitrary integer (0..17592186044415)\n            random:NextNumber(0, 255); --// 8-bit  arbitrary integer (0..255)\n        };\n\nlocal isea = require(game.ServerScriptService["iSEA"]);\n\nlocal state = isea.newState(secret) -- Initialize SEA using random secret\nlocal str = "Hello metaverse!"\n\nprint("Secret \ud83e\udd2b: "..table.concat(state.secret,"; ")) --\x3e 28.39305096030534; 104.46559812685938; 14484132187863.652; 11.391023692364207\n\nlocal ciphertext, seed = state.encrypt(str)\n\nprint("Encrypted String: "..ciphertext) --\x3e e680e0a92cda96cf83c239a81d85166e\nprint("Seed: "..seed) --\x3e 1373726384325.5884\n\nprint("Test passed:"..tostring(state.decrypt(ciphertext, seed) == str))\n')),(0,n.kt)("h1",{id:"-decryption"},"\ud83d\udd13 Decryption"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local secret = ("35.84831716766803; 23.639969842435168; 3982959064904.493; 244.42364953524924"):split("; ");\n\nlocal isea = require(game.ServerScriptService["iSEA"]);\n\nlocal state = isea.newState(secret) -- Initialize SEA using random secret\nlocal ciphertext = "3a7dee43cebfd7ba63011211ad813a49"\nlocal seed = 3462364821075.735\n\nprint("Secret used \ud83e\udd2b: "..table.concat(state.secret,"; "))\n\nlocal str = state.decrypt(ciphertext, seed)\n\nprint("Decrypted String: "..str)\nprint("Seed used: "..seed)\n')),(0,n.kt)("h1",{id:"-secret-derivation"},"\ud83d\udd11 Secret Derivation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'local isea = require(game.ServerScriptService["iSEA"]);\n\n--// Generate secret from string\nlocal passphrase = "Shhh!"\nlocal secret = isea.deriveSecret(passphrase)\n\nprint("Passphrase used \ud83e\udd2b: "..passphrase)\nprint("Derived secret \ud83e\udd2b: "..game:GetService("HttpService"):JSONEncode(secret))\n\nlocal state = isea.newState(secret) -- Initialize SEA using random secret\nlocal str = "Hello metaverse!"\n\nlocal ciphertext, seed = state.encrypt(str)\n\nprint("Encrypted String: "..ciphertext) --\x3e e680e0a92cda96cf83c239a81d85166e\nprint("Seed: "..seed) --\x3e 1373726384325.5884\n\nprint("Test passed:"..tostring(state.decrypt(ciphertext, seed) == str))\n\n')),(0,n.kt)("h3",{id:"github-repo"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/Indirecta-Technologies/indirectaSEA"},"GitHub Repo")))}d.isMDXComponent=!0}}]);
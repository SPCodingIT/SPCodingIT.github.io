(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("5dc2b08c",content,!0,{sourceMap:!1})},199:function(t,e,n){"use strict";n(198)},200:function(t,e,n){var o=n(47),r=n(125),l=n(201);e=o(!1);var c=r(l);e.push([t.i,"#navbar-container[data-v-5ec45cb8]{height:78px!important;width:100vw;padding-left:15vw;padding-right:15vw;display:flex}#navbar-container #dynamic-navbar-background[data-v-5ec45cb8]{position:absolute;width:100%;left:0}#navbar-container .nav-logo-container[data-v-5ec45cb8]{flex:1;display:flex;align-items:center;box-sizing:border-box}#navbar-container .nav-logo-container .nav-logo[data-v-5ec45cb8]{position:relative;width:60px;height:60px;border-radius:50%;background-image:url("+c+")}#navbar-container .nav-links-container[data-v-5ec45cb8]{flex:1;display:flex;position:relative;align-items:center;justify-content:space-evenly}#navbar-container .nav-links-container .nav-link[data-v-5ec45cb8]{position:relative;display:inline-block;padding:5px 0;font-size:1.2rem;transform:translateY(2px);color:#000}#navbar-container .nav-links-container .nav-link *[data-v-5ec45cb8]{color:inherit;text-decoration:none}@media (min-width:1024px){#navbar-container .nav-links-container .nav-link[data-v-5ec45cb8]{background-image:linear-gradient(#1f1f1f,#1f1f1f);background-size:0 5px,auto;background-repeat:no-repeat;background-position:bottom;transition:all .1s ease-out}#navbar-container .nav-links-container .nav-link.white-bg[data-v-5ec45cb8]{background-image:linear-gradient(#fff,#fff)!important}#navbar-container .nav-links-container .nav-link[data-v-5ec45cb8]:hover{background-size:100% 3px,auto;font-weight:700}}",""]),t.exports=e},201:function(t,e,n){t.exports=n.p+"img/notelevensvg.38721bc.svg"},202:function(t,e,n){"use strict";n(23),n(30),n(20),n(32),n(31),n(19),n(21),n(22),n(12);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={data:function(){return{selected:null}},mounted:function(){this.selected=this.$route.path;document.getElementById("navbar-container");var t=document.getElementById("dynamic-navbar-background"),e=this.$anime({targets:t,easing:"easeInOutQuad",height:[{value:"100%",delay:0,duration:0},{value:0,delay:200}],autoplay:!1}),n=this.$anime({targets:t,easing:"easeInOutQuad",height:[{value:0,delay:0,duration:0},{value:"100%",delay:100}],autoplay:!1}),r=document.getElementsByClassName("nav-link"),l=!1;this.$root.$on("scrolling-event",(function(t){window.pageYOffset>100&&"forward"==t&&!l&&(n.play(),l=!0,setTimeout((function(){var t,e=o(r);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.classList.add("white-bg"),n.classList.add("white-text")}}catch(t){e.e(t)}finally{e.f()}}),500)),window.pageYOffset<=100&&"backward"==t&&l&&(e.play(),l=!1,setTimeout((function(){var t,e=o(r);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.classList.remove("white-bg"),n.classList.remove("white-text")}}catch(t){e.e(t)}finally{e.f()}}),500))}))}},c=(n(199),n(29)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{id:"navbar-container"}},[n("div",{staticClass:"noteleven-grey-bg",attrs:{id:"dynamic-navbar-background"}}),t._v(" "),n("div",{staticClass:"nav-logo-container"},[n("nuxtLink",{attrs:{to:"/"}},[n("div",{staticClass:"nav-logo"},[n("div",{staticClass:"logo-p"}),t._v(" "),n("div",{staticClass:"logo-s"})])])],1),t._v(" "),n("div",{staticClass:"nav-links-container"},[n("a",{staticClass:"nav-link no-select"},[n("nuxtLink",{class:{bold:"/"==t.selected},attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),n("a",{staticClass:"nav-link no-select"},[n("nuxtLink",{class:{bold:"/giveabit"==t.selected},attrs:{to:"/giveabit"}},[t._v("#GiveABit")])],1),t._v(" "),n("a",{staticClass:"nav-link no-select"},[n("nuxtLink",{class:{bold:"/portfolio"==t.selected},attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1)])])}),[],!1,null,"5ec45cb8",null);e.a=component.exports},205:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("58554b57",content,!0,{sourceMap:!1})},217:function(t,e,n){"use strict";n(205)},218:function(t,e,n){(e=n(47)(!1)).push([t.i,".link[data-v-44af5bdf]{color:#000;font-weight:700}#header-logo-cont[data-v-44af5bdf]{margin-top:10vh;margin-bottom:7vh}#header-logo-cont #logo-cont[data-v-44af5bdf]{margin-bottom:5vh}#header-logo-cont #logo-cont svg[data-v-44af5bdf]{width:40vw}#header-logo-cont #header-cont h2[data-v-44af5bdf]{font-size:2.5rem}#cards-cont[data-v-44af5bdf]{padding:0 10vw;margin-bottom:8vh}#cards-cont .card-cont[data-v-44af5bdf]{display:flex;width:25vw;height:20vw;border-radius:35px;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)}#cards-cont .card-cont .card-image[data-v-44af5bdf]{width:33%;height:100%;max-height:100%;max-width:33%;box-sizing:border-box;border-radius:35px 0 0 35px}#cards-cont .card-cont .card-image.bg-img[data-v-44af5bdf]{z-index:-1;overflow:hidden;background-size:cover;background-position:50%}#cards-cont .card-cont .card-text[data-v-44af5bdf]{width:77%;height:100%;padding:10% 10px 0}#cards-cont .card-cont .card-text h3[data-v-44af5bdf]{margin-bottom:10%}#form-select-btns[data-v-44af5bdf]{margin-bottom:5vh}#form-select-btns #dona-btn[data-v-44af5bdf],#form-select-btns #ricevi-btn[data-v-44af5bdf]{text-decoration:none;color:#1f1f1f;border:2px solid #1f1f1f;padding:8px}#form-select-btns #dona-btn[data-v-44af5bdf]:hover,#form-select-btns #ricevi-btn[data-v-44af5bdf]:hover{cursor:pointer}.give-a-bit-form[data-v-44af5bdf]{width:70vw;border-radius:35px;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);min-height:400px;position:relative;padding-bottom:40px}.give-a-bit-form .form-title[data-v-44af5bdf]{background-color:#1f1f1f;height:40px;border-radius:35px 35px 0 0;margin-bottom:20px;color:#fff}.give-a-bit-form .form-btn[data-v-44af5bdf]{display:flex;justify-content:flex-end;padding-right:40px;margin-bottom:15px;position:absolute;bottom:0;width:70vw}.give-a-bit-form .form-btn div[data-v-44af5bdf]{text-decoration:none;color:#1f1f1f;border:2px solid #1f1f1f;padding:8px}.give-a-bit-form .form-btn div[data-v-44af5bdf]:hover{cursor:pointer}.give-a-bit-form label[data-v-44af5bdf]{margin-bottom:10px}.give-a-bit-form input[data-v-44af5bdf],.give-a-bit-form select[data-v-44af5bdf]{height:30px;border:1px solid #1f1f1f;border-radius:0;margin-bottom:30px}.give-a-bit-form input[type=radio][data-v-44af5bdf]{margin-bottom:0}.give-a-bit-form textarea[data-v-44af5bdf]{border:1px solid #1f1f1f;border-radius:0;margin-bottom:30px}@media screen and (max-width:763px){#header-logo-cont #logo-cont svg[data-v-44af5bdf]{width:70vw}#cards-cont[data-v-44af5bdf]{align-items:center}#cards-cont .card-cont[data-v-44af5bdf]{width:70vw;height:30vh;border-radius:35px;margin-bottom:45px}#form-select-btns[data-v-44af5bdf]{align-items:center}#form-select-btns #dona-btn[data-v-44af5bdf],#form-select-btns #ricevi-btn[data-v-44af5bdf]{width:90vw}#form-select-btns #dona-btn[data-v-44af5bdf]{margin-bottom:25px}}",""]),t.exports=e},246:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{NavBar:n(202).a},data:function(){return{donateFormProgress:1,receiveFormProgress:1,donateData:{name:null,surname:null,tel:null,mail:null,provincia:"salerno",comune:null,address:null,cap:null,pcType:"pc",pcOs:"win",pcBrand:null,pcYear:null,pcCharger:null,pcInfo:null},receiveData:{name:null,surname:null,tel:null,mail:null,provincia:"salerno",comune:null,address:null,istitutoName:null,istitutoProvincia:"salerno",istitutoComune:null,istitutoAddress:null},comuni:[{name:"Prova",value:"prova"}]}},computed:{donateFormCan1to2:function(){return null!=this.donateData.name&&null!=this.donateData.surname&&null!=this.donateData.tel&&null!=this.donateData.mail&&null!=this.donateData.provincia&&null!=this.donateData.comune&&null!=this.donateData.address&&null!=this.donateData.cap},donateFormCanSubmit:function(){return null!=this.donateData.pcType&&null!=this.donateData.pcOs&&null!=this.donateData.pcBrand&&null!=this.donateData.pcYear&&null!=this.donateData.pcCharger},receiveFormCan1to2:function(){return null!=this.receiveData.name&&null!=this.receiveData.surname&&null!=this.receiveData.tel&&null!=this.receiveData.mail&&null!=this.receiveData.provincia&&null!=this.receiveData.comune&&null!=this.receiveData.address&&null!=this.receiveData.cap},receiveFormCanSubmit:function(){return null!=this.receiveData.istitutoName&&null!=this.receiveData.istitutoProvincia&&null!=this.receiveData.istitutoComune&&null!=this.receiveData.istitutoAddress}},methods:{openForm:function(form){var t=document.getElementById("dona-form"),e=document.getElementById("ricevi-form");"donate"==form?(e.classList.contains("is-hidden")||e.classList.toggle("is-hidden"),t.classList.toggle("is-hidden"),t.scrollIntoView()):"receive"==form&&(t.classList.contains("is-hidden")||t.classList.toggle("is-hidden"),e.classList.toggle("is-hidden"),e.scrollIntoView()),window.scrollBy(0,-78)},sendDonation:function(){},sendReceive:function(){}}},r=(n(217),n(29)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("NavBar",{staticClass:"navbar-element"}),t._v(" "),n("div",{staticClass:"flex direction-column h-center",attrs:{id:"header-logo-cont"}},[n("div",{attrs:{id:"logo-cont"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Livello_1",x:"0px",y:"0px",viewBox:"0 0 700.9 277.3","enable-background":"new 0 0 700.9 277.3","xml:space":"preserve"}},[n("g",{attrs:{id:"outline"}},[n("g",[n("path",{attrs:{fill:"#1F1F1F",d:"M241.7,74.5l-8-9.3c-7-8.1-17.4-12.5-28.1-11.9l-34.9,2.2c-10.1,0.6-19.4,5.7-25.3,13.9L90,145l-77.5,38.1    c-3.1,1.5-4.3,5.2-2.8,8.3c0.4,0.9,1,1.6,1.8,2.2l74,56.4c1.9,1.5,4.6,1.7,6.7,0.5l46.6-25.1l14.7-0.5    c16.6-0.6,32.5-6.7,45.2-17.5c0.3-0.2,0.5-0.4,0.7-0.6c0.1-0.1,0.2-0.1,0.2-0.2c3.2-2.7,6-5.8,8.6-9.1c0.2-0.2,0.3-0.5,0.5-0.7    c9.4,1.8,18.8-2.8,23.2-11.3l3.5-6.6c5-1.6,9.2-5.1,11.6-9.7l6.6-12.7l0,0l0.4-0.9l-10.8-4.2L242,151c0.1,0.1,0.2,0.2,0.4,0.3    l-6.3,12.1c-1.4,2.7-4.3,4.2-7.3,4c-2.4-0.2-4.6-1.5-5.9-3.5c-0.8-1.1-1.2-2.4-1.2-3.7l1.2-6.5l11.1-11.4c0.1,0.1,0.2,0.3,0.3,0.4    l0.1-0.2c-0.3-0.4-0.5-0.6-0.5-0.6s4.2-3.8,9.4-9c0-0.1,0-0.1-0.1-0.2l11.2-11.4c2.4-2.7,4.5-5.3,6.1-7.6c6.3-9.3,0.9-23.7-0.5-27    c-3.9-5.9-10.3-10.2-17.7-11.3C242.2,75.1,242,74.8,241.7,74.5z M221,179.7c-1.1,2.1-2.9,3.7-5.1,4.5l0,0c1-2.5,1.9-5,2.6-7.6    c1,0.7,2.2,1.3,3.3,1.7L221,179.7z M224.3,73.2l3.7,4.3c-2.2,1-4.2,2.3-6,3.8l-8.8,7.5l-4-4.7c-2.2-2.6-6.1-2.9-8.7-0.7    c-2.6,2.2-2.9,6.1-0.7,8.7l4,4.7l-6.9,5.9l-18.3-5.2c-3.3-0.9-6.7,1-7.7,4.3c-0.9,3.3,1,6.7,4.3,7.7l10.4,2.9l-10.1,8.7    c-2.6,2.2-3,6.1-0.8,8.7c2.2,2.6,6.1,3,8.7,0.8l0.1-0.1l46.6-39.8c5.6-4.8,13.9-4.1,18.7,1.4c4.5,5.2,4.2,13-0.6,17.9l-35.4,36.3    c-0.8,0.9-1.4,2-1.6,3.2l-1,5.2l0,0c-0.4,1.3-0.7,2.7-0.8,4.1l-2.2,11.4c-2,10.3-7.4,19.6-15.3,26.5c-0.1,0.1-0.3,0.2-0.4,0.3    c-0.3,0.3-0.6,0.5-0.9,0.8c-10.5,9-23.7,14.1-37.5,14.6l0,0l-16.2,0.5c-1,0-1.9,0.3-2.7,0.7l-44.3,23.9L27,189.8l69.9-34.4    c0.9-0.4,1.7-1.1,2.3-1.9l56.3-76.8c0.1-0.1,0.2-0.2,0.2-0.3c3.8-5,9.6-8.1,15.9-8.5l34.9-2.2C213.3,65.3,219.9,68,224.3,73.2z"}})]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#1BFF00",d:"M367.2,178.5L367.2,178.5c7.3,0,13.2,5.9,13.2,13.2l0,0   c0,7.3-5.9,13.2-13.2,13.2l0,0c-7.3,0-13.2-5.9-13.2-13.2l0,0C353.9,184.4,359.9,178.5,367.2,178.5z"}}),t._v(" "),n("g",[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#1BFF00",d:"M254.1,80.3l-5.7-42.6L231.5,40l4.5,35.5    C235.9,75.6,243.5,73.2,254.1,80.3z"}}),t._v(" "),n("polygon",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#1BFF00",points:"243.9,132.4 245.3,142.3 238.8,137.1 222.7,153.5     222.5,156.1 252.3,179 267.1,177 258.8,115.8   "}})]),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#1F1F1F",d:"M691.3,178.3l-77.5-38.1l-55.4-75.6c-6-8.2-15.2-13.2-25.3-13.9   l-34.9-2.2c-10.7-0.7-21.1,3.7-28.1,11.9l-8,9.3c-0.3,0.3-0.5,0.6-0.7,1C454,71.8,447.6,76,443.7,82c-1.4,3.3-6.8,17.7-0.5,27   c1.6,2.3,3.7,4.9,6.1,7.6l11.2,11.4c0,0.1,0,0.1-0.1,0.2c5.2,5.2,9.4,9,9.4,9s-0.2,0.2-0.5,0.6l0.1,0.2c0.1-0.1,0.2-0.3,0.3-0.4   l11.1,11.4l1.2,6.5c0,1.3-0.5,2.6-1.2,3.7c-1.3,2-3.5,3.3-5.9,3.5c-3,0.2-5.9-1.3-7.3-4l-5.8-11l-0.5-1.2c0.1-0.1,0.2-0.2,0.3-0.2   l-0.4,0.1l-0.7-1.5L459,147v0.1l-9.5,3.7l0.4,0.9l6.6,12.7c2.4,4.6,6.6,8.1,11.6,9.7l3.5,6.6c4.4,8.5,13.9,13,23.2,11.3   c0.2,0.2,0.3,0.5,0.5,0.7c2.5,3.3,5.4,6.4,8.6,9.1c0.1,0.1,0.2,0.1,0.2,0.2c0.2,0.2,0.5,0.4,0.7,0.6c12.6,10.8,28.6,17,45.2,17.5   l14.7,0.5l46.6,25.1c2.1,1.2,4.8,1,6.7-0.5l74-56.4c0.8-0.6,1.4-1.3,1.8-2.2C695.6,183.5,694.3,179.8,691.3,178.3z M482.8,174.9   l-0.7-1.4c1.2-0.5,2.3-1.1,3.3-1.7c0.7,2.6,1.5,5.1,2.6,7.6l0,0C485.7,178.6,483.9,177,482.8,174.9z M614,232.9L569.7,209   c-0.8-0.5-1.8-0.7-2.7-0.7l-16.2-0.5l0,0c-13.8-0.5-27-5.6-37.5-14.6c-0.3-0.2-0.6-0.5-0.9-0.8c-0.1-0.1-0.3-0.2-0.4-0.3   c-7.9-6.9-13.3-16.2-15.3-26.5l-2.2-11.4c-0.1-1.4-0.4-2.8-0.8-4.1l0,0l-1-5.2c-0.2-1.2-0.8-2.3-1.6-3.2l-35.4-36.3   c-4.8-4.9-5-12.7-0.6-17.9c4.8-5.6,13.1-6.2,18.7-1.4l46.6,39.8l0.1,0.1c2.6,2.2,6.5,1.8,8.7-0.8c2.2-2.6,1.8-6.5-0.8-8.7   l-10.1-8.7l10.4-2.9c3.3-0.9,5.2-4.4,4.3-7.7c-0.9-3.3-4.4-5.2-7.7-4.3L506.9,98l-6.9-5.9l4-4.7c2.2-2.6,1.9-6.5-0.7-8.7   s-6.5-1.9-8.7,0.7l-4,4.7l-8.8-7.5c-1.8-1.5-3.8-2.8-6-3.8l3.7-4.3c4.4-5.2,11.1-8,17.9-7.6l34.9,2.2c6.3,0.4,12.1,3.5,15.9,8.5   c0.1,0.1,0.2,0.2,0.2,0.3l56.3,76.8c0.6,0.8,1.4,1.4,2.3,1.9l69.9,34.4L614,232.9z"}}),t._v(" "),n("g",[n("polygon",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#1BFF00",points:"519.2,41.8 506.1,34 481.2,76.1 494.5,87.4 501.6,75.5     506.5,97.5 511,101.1 531,89   "}}),t._v(" "),n("polygon",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",fill:"#1BFF00",points:"454.2,121.5 433.1,156.9 448,165.7 452.1,158.7     461.9,142.3 461.9,142.3 466.7,134.3   "}})])])])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"flex h-space-evenly",attrs:{id:"form-select-btns"}},[n("div",{attrs:{id:"dona-btn"},on:{click:function(e){return t.openForm("donate")}}},[t._v("Dona un dispositivo")]),t._v(" "),n("div",{attrs:{id:"ricevi-btn"},on:{click:function(e){return t.openForm("receive")}}},[t._v("\n      Ricevi un dispositivo\n    ")])]),t._v(" "),n("div",{staticClass:"flex h-center",attrs:{id:"form-cont"}},[n("form",{staticClass:"give-a-bit-form is-hidden",attrs:{action:"",method:"post",id:"dona-form"}},[t._m(2),t._v(" "),1==t.donateFormProgress?n("div",{attrs:{id:"donatore-info"}},[n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Nome *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.name,expression:"donateData.name"}],attrs:{type:"text",name:"nome",id:"dona-name"},domProps:{value:t.donateData.name},on:{input:function(e){e.target.composing||t.$set(t.donateData,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Cognome *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.surname,expression:"donateData.surname"}],attrs:{type:"text",name:"cognome",id:"dona-surname"},domProps:{value:t.donateData.surname},on:{input:function(e){e.target.composing||t.$set(t.donateData,"surname",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Numero di telefono *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.tel,expression:"donateData.tel"}],attrs:{type:"tel",name:"numero",id:"dona-tel"},domProps:{value:t.donateData.tel},on:{input:function(e){e.target.composing||t.$set(t.donateData,"tel",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("E-mail *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.mail,expression:"donateData.mail"}],attrs:{type:"email",name:"email",id:"dona-email"},domProps:{value:t.donateData.mail},on:{input:function(e){e.target.composing||t.$set(t.donateData,"mail",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Provincia *")]),t._v(" "),n("select",{attrs:{name:"provincia",id:"dona-provincia"},on:{change:function(e){t.donateData.provincia=e.target.value}}},[n("option",{attrs:{value:"salerno"}},[t._v("Salerno")])])]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Comune *")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.donateData.comune,expression:"donateData.comune"}],attrs:{name:"comune",id:"dona-comune"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.donateData,"comune",e.target.multiple?n:n[0])}}},t._l(t.comuni,(function(e,o){return n("option",{key:o,domProps:{value:e.value}},[t._v(t._s(e.name))])})),0)]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Indirizzo *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.address,expression:"donateData.address"}],attrs:{type:"text",name:"indirizzo",id:"dona-address"},domProps:{value:t.donateData.address},on:{input:function(e){e.target.composing||t.$set(t.donateData,"address",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Cap *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.cap,expression:"donateData.cap"}],attrs:{type:"text",name:"cap",id:"dona-cap"},domProps:{value:t.donateData.cap},on:{input:function(e){e.target.composing||t.$set(t.donateData,"cap",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-btn"},[t.donateFormCan1to2?n("div",{on:{click:function(e){t.donateFormProgress=2}}},[t._v("\n            Avanti\n          ")]):t._e()])]):2==t.donateFormProgress?n("div",{attrs:{id:"pc-info"}},[n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Sto donando *")]),t._v(" "),n("select",{attrs:{name:"",id:""},on:{change:function(e){t.donateData.pcType=e.target.value}}},[n("option",{attrs:{value:"pc"}},[t._v("Pc fisso")]),t._v(" "),n("option",{attrs:{value:"laptop"}},[t._v("Portatile")]),t._v(" "),n("option",{attrs:{value:"tablet"}},[t._v("Tablet")])])]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Sistema operativo *")]),t._v(" "),n("select",{attrs:{name:"os",id:"dona-os"},on:{change:function(e){t.donateData.pcOs=e.target.value}}},[n("option",{attrs:{value:"win"}},[t._v("Windows")]),t._v(" "),n("option",{attrs:{value:"macos"}},[t._v("Macos")]),t._v(" "),n("option",{attrs:{value:"linux"}},[t._v("Linux")])])])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Marca *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.pcBrand,expression:"donateData.pcBrand"}],attrs:{type:"text",name:"marca ",id:"dona-brand"},domProps:{value:t.donateData.pcBrand},on:{input:function(e){e.target.composing||t.$set(t.donateData,"pcBrand",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Anno di acquisto *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.pcYear,expression:"donateData.pcYear"}],attrs:{type:"number",name:"annoacquisto",id:"dona-buy-year"},domProps:{value:t.donateData.pcYear},on:{input:function(e){e.target.composing||t.$set(t.donateData,"pcYear",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center",staticStyle:{"margin-bottom":"30px"}},[n("label",{attrs:{for:""}},[t._v("Ho il caricabatterie *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.pcCharger,expression:"donateData.pcCharger"}],attrs:{type:"radio",name:"charger-check"},domProps:{value:!0,checked:t._q(t.donateData.pcCharger,!0)},on:{change:function(e){return t.$set(t.donateData,"pcCharger",!0)}}}),t._v("\n            Sì"),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.donateData.pcCharger,expression:"donateData.pcCharger"}],attrs:{type:"radio",name:"charger-check"},domProps:{value:!1,checked:t._q(t.donateData.pcCharger,!1)},on:{change:function(e){return t.$set(t.donateData,"pcCharger",!1)}}}),t._v("\n            No"),n("br")]),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"form-btn"},[t.donateFormCanSubmit?n("div",{on:{click:function(e){return t.sendDonation()}}},[t._v("Invia")]):t._e()])]):t._e()]),t._v(" "),n("form",{staticClass:"give-a-bit-form is-hidden",attrs:{action:"",method:"post",id:"ricevi-form"}},[t._m(4),t._v(" "),1==t.receiveFormProgress?n("div",{attrs:{id:"ricevente-info"}},[n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Nome *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.name,expression:"receiveData.name"}],attrs:{type:"text",name:"nome",id:"ricevi-name"},domProps:{value:t.receiveData.name},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Cognome *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.surname,expression:"receiveData.surname"}],attrs:{type:"text",name:"cognome",id:"ricevi-surname"},domProps:{value:t.receiveData.surname},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"surname",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Numero di telefono *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.tel,expression:"receiveData.tel"}],attrs:{type:"tel",name:"numero",id:"ricevi-tel"},domProps:{value:t.receiveData.tel},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"tel",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("E-mail *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.mail,expression:"receiveData.mail"}],attrs:{type:"email",name:"email",id:"ricevi-email"},domProps:{value:t.receiveData.mail},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"mail",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Provincia *")]),t._v(" "),n("select",{attrs:{name:"provincia",id:"ricevi-provincia"},on:{change:function(e){t.receiveData.provincia=e.target.value}}},[n("option",{attrs:{value:"salerno"}},[t._v("Salerno")])])]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Comune *")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.comune,expression:"receiveData.comune"}],attrs:{name:"comune",id:"ricevi-comune"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.receiveData,"comune",e.target.multiple?n:n[0])}}},t._l(t.comuni,(function(e,o){return n("option",{key:o,domProps:{value:e.value}},[t._v(t._s(e.name))])})),0)]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Indirizzo *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.address,expression:"receiveData.address"}],attrs:{type:"text",name:"indirizzo",id:"ricevi-address"},domProps:{value:t.receiveData.address},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"address",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Cap *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.cap,expression:"receiveData.cap"}],attrs:{type:"text",name:"cap",id:"ricevi-cap"},domProps:{value:t.receiveData.cap},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"cap",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-btn"},[t.receiveFormCan1to2?n("div",{on:{click:function(e){t.receiveFormProgress=2}}},[t._v("\n            Avanti\n          ")]):t._e()])]):2==t.receiveFormProgress?n("div",{attrs:{id:"istituto-info"}},[n("div",{staticClass:"flex h-center"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Nome Istituto *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.istitutoName,expression:"receiveData.istitutoName"}],attrs:{type:"text",name:"nome",id:"ricevi-istituto-name"},domProps:{value:t.receiveData.istitutoName},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"istitutoName",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex h-space-evenly"},[n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Provincia Istituto *")]),t._v(" "),n("select",{attrs:{name:"provincia",id:"ricevi-istituto-provincia"},on:{change:function(e){t.receiveData.IstitutoProvincia=e.target.value}}},[n("option",{attrs:{value:"salerno"}},[t._v("Salerno")])])]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Comune Istituto *")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.istitutoComune,expression:"receiveData.istitutoComune"}],attrs:{name:"comune",id:"ricevi-istituto-comune"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.receiveData,"istitutoComune",e.target.multiple?n:n[0])}}},t._l(t.comuni,(function(e,o){return n("option",{key:o,domProps:{value:e.value}},[t._v(t._s(e.name))])})),0)]),t._v(" "),n("div",{staticClass:"flex direction-column h-center"},[n("label",{attrs:{for:""}},[t._v("Indirizzo Istituto *")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.receiveData.istitutoAddress,expression:"receiveData.istitutoAddress"}],attrs:{type:"text",name:"indirizzo",id:"ricevi-istituto-address"},domProps:{value:t.receiveData.istitutoAddress},on:{input:function(e){e.target.composing||t.$set(t.receiveData,"istitutoAddress",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"form-btn"},[t.receiveFormCanSubmit?n("div",{on:{click:function(e){return t.sendReceive()}}},[t._v("Invia")]):t._e()])]):t._e()])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header-cont"}},[e("h2",[this._v("#GiveABit")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex h-space-evenly",attrs:{id:"cards-cont"}},[n("div",{staticClass:"card-cont"},[n("div",{staticClass:"card-image bg-img",staticStyle:{"background-image":"url('https://i.imgur.com/NKimm68.jpg')"}}),t._v(" "),n("div",{staticClass:"card-text"},[n("h3",{staticClass:"text align-center"},[t._v("Il problema")]),t._v(" "),n("p",{staticClass:"text align-center"},[t._v("\n          Una fetta degli studenti italiani non dispone dell'attrezzatura\n          necessaria per la D.A.D.\n        ")])])]),t._v(" "),n("div",{staticClass:"card-cont"},[n("div",{staticClass:"card-image bg-img",staticStyle:{"background-image":"url('https://i.imgur.com/mtV5Aps.jpg')"}}),t._v(" "),n("div",{staticClass:"card-text"},[n("h3",{staticClass:"text align-center"},[t._v("L'idea")]),t._v(" "),n("p",{staticClass:"text align-center"},[t._v("\n          Partita dai ragazzi di\n          "),n("a",{staticClass:"link",attrs:{href:"https://pc4u.tech/",target:"_blank"}},[t._v("PC4UTECH")]),t._v(", l'idea è quella di cercare di ovviare al problema del digital\n          divide\n        ")])])]),t._v(" "),n("div",{staticClass:"card-cont"},[n("div",{staticClass:"card-image bg-img",staticStyle:{"background-image":"url('https://i.imgur.com/yO1qrkL.jpg')"}}),t._v(" "),n("div",{staticClass:"card-text"},[n("h3",{staticClass:"text align-center"},[t._v("La soluzione")]),t._v(" "),n("p",{staticClass:"text align-center"},[t._v("\n          Hai un computer che non utilizzi più? "),n("br"),t._v(" "),n("br"),t._v("\n          Compila il form sottostante per donarlo. Del resto ci occupiamo noi,\n          dal ritiro alla consegna.\n        ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-title flex v-center h-center"},[e("p",{staticClass:"text align-center"},[this._v("Dona un dispositivo")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex direction-column h-center"},[e("label",{attrs:{for:""}},[this._v("Informazioni rilevanti")]),this._v(" "),e("textarea",{staticStyle:{resize:"none"},attrs:{name:"info",id:"dona-info",cols:"30",rows:"3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-title flex v-center h-center"},[e("p",{staticClass:"text align-center"},[this._v("Ricevi un dispositivo")])])}],!1,null,"44af5bdf",null);e.default=component.exports}}]);
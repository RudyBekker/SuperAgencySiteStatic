(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,4,6],{242:function(t,e,r){t.exports=r.p+"img/37b13a8.png"},243:function(t,e,r){t.exports=r.p+"img/dd7c7df.png"},244:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/"}},[n("span",{staticClass:"sr-only"},[t._v("Workflow")]),t._v(" "),n("img",{staticClass:"h-8 w-auto sm:h-10",attrs:{src:r(242),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"ml-3 font-medium text-white truncate"},[r("span",{staticClass:"md:hidden"},[t._v("\n                                NEW! Wordpress Is Here!\n                            ")]),t._v(" "),r("span",{staticClass:"hidden md:inline"},[t._v("\n                                NEW! Our SuperCharged Wordpress Is Here!\n                            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},[r("a",{staticClass:"flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50",attrs:{href:"https://blog.superagency.io/superagency-wordpress-faster-than-cloudways/"}},[t._v("\n                            Learn more\n                        ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                Agency Software\n                            ")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                All the tools you need to to scale your business! Build. Market. Sell & Ship\n                            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                Website & Funnels\n                            ")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                Easy-to-use page builder to build High Converting Websites, Landing Pages & Funnels for your clients\n                            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                Omnichannel CRM\n                            ")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                Your customers' data will be safe and secure.\n                            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                Automations\n                            ")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                Build strategic automations that will drive conversions & retension\n                            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-4"},[r("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                Wordpress\n                            ")]),t._v(" "),r("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                Next Generation Wordpress\n                            ")])])}],o=(r(55),r(247)),l=r(279),c={components:{XIcon:o.t,MenuIcon:o.k,SpeakerphoneIcon:o.q},data:function(){return{solutionsDropdown:!1,show:!1,popoverShow:!1,sticky:!0,user_email:"",demo_text:"WATCH DEMO",navigation:[{name:"Resources",href:"/resources"},{name:"Support",href:"/support"}]}},setup:function(){return{navigation:navigation,solutions:solutions}},mounted:function(){var t=this;window.addEventListener("click",(function(e){t.$el.contains(e.target)||(t.solutionsDropdown=!1)}))},methods:{togglePopover:function(){this.popoverShow?this.popoverShow=!1:(this.popoverShow=!0,Object(l.a)(this.$refs.btnRef,this.$refs.popoverRef,this.$refs.popoverMenu,{placement:"bottom"}))},processNavActions:function(){var t=this;t.demo_text="SUBMITTING...",this.$axios.post("https://16d963516de7ecb16c2fcd461215905a.m.pipedream.net",{email:this.user_email,tag:"InitDemo21"},{headers:{"Content-Type":"application/json"}}).then((function(e){e.data;t.$toast.success("Awesome... Enjoy The Demo!!"),t.user_email="",t.demo_text="WATCH DEMO",setTimeout((function(){t.$router.push({path:"/demo/1"})}),500)})).catch((function(e){t.$toast.error("Something went wrong! Please contact with rudy@superagency.io"),t.demo_text="WATCH DEMO"}))}}},d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative",attrs:{as:"nav"}},[n("div",{staticClass:"bg-gray-900 pt-6"},[n("nav",{staticClass:"relative max-w-7xl pb-4 mx-auto flex items-center justify-between px-4 sm:px-6",attrs:{"aria-label":"Global"}},[n("div",{staticClass:"flex items-center flex-1"},[n("div",{staticClass:"flex items-center justify-between w-full md:w-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"-mr-2 flex items-center md:hidden"},[n("button",{ref:"btnRef",staticClass:"bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white",on:{click:function(e){return t.togglePopover()}}},[n("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),n("MenuIcon",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true"}})],1)])]),t._v(" "),n("div",{staticClass:"hidden space-x-8 md:flex md:ml-10"},[n("button",{ref:"btnRef",staticClass:"text-base font-medium text-white hover:text-gray-300",attrs:{type:"button"},on:{click:function(e){t.solutionsDropdown=!t.solutionsDropdown}}},[t._v("Solutions")]),t._v(" "),t._l(t.navigation,(function(e){return n("a",{key:e.name,staticClass:"text-base font-medium text-white hover:text-gray-300",attrs:{href:e.href}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),n("div",{staticClass:"hidden md:flex md:items-center md:space-x-6"},[n("a",{staticClass:"text-base font-medium text-white hover:text-gray-300",attrs:{href:"https://app.superagency.io/user/login"}},[t._v("Login")]),t._v(" "),n("button",{staticClass:"inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-600 hover:to-pink-400",on:{click:function(e){t.show=!0}}},[t._v("FREE DEMO")])])])]),t._v(" "),n("div",{ref:"popoverMenu",class:{hidden:!t.popoverShow,block:t.popoverShow}},[n("transition",{attrs:{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"}},[n("div",{staticClass:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden",attrs:{focus:""}},[n("div",{staticClass:"rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"px-5 pt-4 flex items-center justify-between"},[n("div",[n("img",{staticClass:"h-8 w-auto",attrs:{src:r(243),alt:""}})]),t._v(" "),n("div",{staticClass:"-mr-2"},[n("button",{ref:"btnRef",staticClass:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600",on:{click:function(e){return t.togglePopover()}}},[n("span",{staticClass:"sr-only"},[t._v("Close menu")]),t._v(" "),n("XIcon",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true"}})],1)])]),t._v(" "),n("div",{staticClass:"pt-5 pb-6"},[n("div",{staticClass:"px-2 space-y-1"},[n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/#Agency"}},[n("div",{staticClass:"flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gray-600 to-gray-900 text-white sm:h-12 sm:w-12"},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}})])]),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                        Solutions\n                                    ")]),t._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                        All the tools you need to to scale your business! Build. Market. Sell & Ship\n                                    ")])])]),t._v(" "),n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/resources"}},[n("div",{staticClass:"flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gray-600 to-gray-900 text-white sm:h-12 sm:w-12"},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{d:"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}})])]),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                        Resources\n                                    ")]),t._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                        Here you’ll find resources that help you get started with SuperAgency!\n                                    ")])])]),t._v(" "),n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/support"}},[n("div",{staticClass:"flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-gray-600 to-gray-900 text-white sm:h-12 sm:w-12"},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"}})])]),t._v(" "),n("div",{staticClass:"ml-4"},[n("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                        Support\n                                    ")]),t._v(" "),n("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                        Dedicated section for all support related queries\n                                    ")])])])]),t._v(" "),n("div",{staticClass:"mt-6 px-5"},[n("a",{staticClass:"block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-pink-400 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-pink-400",attrs:{href:"#"},on:{click:function(e){t.show=!0}}},[t._v("FREE DEMO")])]),t._v(" "),n("div",{staticClass:"mt-6 px-5"},[n("p",{staticClass:"text-center text-base font-medium text-gray-500"},[t._v("\n                                Existing customer?\n                                "),n("a",{staticClass:"text-blue-900 hover:underline",attrs:{href:"https://app.superagency.io/user/login"}},[t._v("Login")])])])])])])])],1),t._v(" "),n("div",{staticClass:"fixed inset-x-0 z-20 bottom-0"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.sticky,expression:"sticky"}],staticClass:"bg-gray-800"},[n("div",{staticClass:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},[n("div",{staticClass:"flex items-center justify-between flex-wrap"},[n("div",{staticClass:"w-0 flex-1 flex items-center"},[n("span",{staticClass:"flex p-2 rounded-lg bg-pink-400"},[n("SpeakerphoneIcon",{staticClass:"h-6 w-6 text-white",attrs:{"aria-hidden":"true"}})],1),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"order-2 flex-shrink-0 sm:order-3 sm:ml-3"},[n("button",{staticClass:"-mr-1 flex p-2 rounded-md hover:bg-gray-600 focus:outline-none sm:-mr-2",attrs:{type:"button"},on:{click:function(e){t.sticky=!1}}},[n("span",{staticClass:"sr-only"},[t._v("Dismiss")]),t._v(" "),n("XIcon",{staticClass:"h-6 w-6 text-white",attrs:{"aria-hidden":"true"}})],1)])])])])]),t._v(" "),n("div",{staticClass:"relative"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.solutionsDropdown,expression:"solutionsDropdown"}],staticClass:"absolute z-10 left-1/3 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"},[n("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[n("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},[n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/#AgencyCRM"}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}})]),t._v(" "),t._m(3)]),t._v(" "),n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/#Builders"}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"}})]),t._v(" "),t._m(4)]),t._v(" "),n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/#CRM"}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}})]),t._v(" "),t._m(5)]),t._v(" "),n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"/#Automations"}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}})]),t._v(" "),t._m(6)]),t._v(" "),n("a",{staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150",attrs:{href:"https://blog.superagency.io/superagency-wordpress-faster-than-cloudways/"}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}})]),t._v(" "),t._m(7)])]),t._v(" "),n("div",{staticClass:"px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"},[n("div",{staticClass:"flow-root"},[n("a",{staticClass:"-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150",attrs:{href:"#"},on:{click:function(e){t.show=!0}}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}}),t._v(" "),n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})]),t._v(" "),n("span",{staticClass:"ml-3"},[t._v("Watch Demo")])])]),t._v(" "),n("div",{staticClass:"flow-root"},[n("a",{staticClass:"-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150",attrs:{href:"/contact"}},[n("svg",{staticClass:"flex-shrink-0 h-6 w-6 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})]),t._v(" "),n("span",{staticClass:"ml-3"},[t._v("Contact Sales")])])])])])])]),t._v(" "),n("div",[n("vue-final-modal",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"flex items-end justify-center min-h-full pt-6 px-4 pb-20 text-center sm:block sm:pt-20"},[n("span",{staticClass:"hidden sm:inline-block sm:align-baseline sm:h-full",attrs:{"aria-hidden":"true"}},[t._v("​")]),t._v(" "),n("div",{staticClass:"inline-block align-bottom bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"},[n("div",{staticClass:"sm:block absolute top-0 right-0 pt-4 pr-4"},[n("button",{staticClass:"rounded-md text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{type:"button"},on:{click:function(e){t.show=!1}}},[n("span",{staticClass:"sr-only"},[t._v("Close")]),t._v(" "),n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("div",{staticClass:"sm:flex sm:items-start"},[n("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[n("h3",{staticClass:"mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-4xl lg:mt-4 xl:text-4xl"},[n("span",{staticClass:"block"},[t._v("Take Your Agency")]),t._v(" "),n("span",{staticClass:"pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-600 sm:pb-5"},[t._v("Next Level!")])]),t._v(" "),n("div",{staticClass:"mt-2"},[n("p",{staticClass:"text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl"},[t._v("\n                                        All the tools you need to to scale your business!\n                                        "),n("br"),t._v("Build. Market. Sell & Ship\n                                    ")])]),t._v(" "),n("form",{staticClass:"mt-8 sm:flex",on:{submit:function(e){return e.preventDefault(),t.processNavActions(e)}}},[n("label",{staticClass:"sr-only",attrs:{for:"emailAddress"}},[t._v("Email address")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_email,expression:"user_email"}],staticClass:"w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md",attrs:{id:"emailAddress",name:"email",type:"email",autocomplete:"email",required:"true",placeholder:"Enter your email"},domProps:{value:t.user_email},on:{input:function(e){e.target.composing||(t.user_email=e.target.value)}}}),t._v(" "),n("div",{staticClass:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"},[n("button",{staticClass:"block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-pink-400 to-pink-700 text-white font-medium hover:from-pink-600 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900",attrs:{type:"submit"},domProps:{textContent:t._s(t.demo_text)}})])])])])])])])])],1)])}),n,!1,null,null,null);e.default=component.exports},245:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{footerNavigation:{solutions:[{name:"Agency",href:"/#Agency"},{name:"Websites",href:"/#Builders"},{name:"Funnels",href:"/#Funnels"},{name:"eCommerce",href:"/#Funnels"},{name:"Wordpress",href:"https://blog.superagency.io/superagency-wordpress-faster-than-cloudways/"},{name:"CRM",href:"/#CRM"},{name:"Chrome Extension",href:"https://blog.superagency.io/most-powerful-chrome-extension-on-the-internet/"}],support:[{name:"Support Overview",href:"/support"},{name:"Support Ticket",href:"https://support.superagency.io/contact"},{name:"Documentation",href:"https://support.superagency.io/"},{name:"Academy",href:"https://academy.superagency.io/"},{name:"API",href:"https://documenter.getpostman.com/view/7039850/SW18vEJE#intro"}],company:[{name:"Resources",href:"/resources"},{name:"About",href:"/about"},{name:"Blog",href:"https://blog.superagency.io/"},{name:"Careers",href:"https://www.notion.so/Full-Stack-Developer-444b7c1235574e7c9b065945295abc11"},{name:"Contact us",href:"/contact"},{name:"Affiliates",href:"/growth/affiliates"},{name:"Success",href:"https://blog.superagency.io/tag/success-stories/"},{name:"Pricing",href:"/pricing"},{name:"FAQ",href:"/faq"}],legal:[{name:"Legal Overview",href:"/legal/"},{name:"Privacy",href:"/legal/privacy"},{name:"Terms",href:"/legal/terms"},{name:"Cookie Policy",href:"/legal/cookie"},{name:"GDPR",href:"/legal/terms"},{name:"Contact",href:"/contact"}]}}},setup:function(){return{footerNavigation:footerNavigation}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-gray-900",attrs:{"aria-labelledby":"footerHeading"}},[n("h2",{staticClass:"sr-only",attrs:{id:"footerHeading"}},[t._v("Footer")]),t._v(" "),n("div",{staticClass:"max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8"},[n("div",{staticClass:"xl:grid xl:grid-cols-3 xl:gap-8"},[n("div",{staticClass:"space-y-8 xl:col-span-1"},[n("img",{staticClass:"h-10",attrs:{src:r(242),alt:"SuperAgency"}}),t._v(" "),n("p",{staticClass:"text-gray-500 text-base"},[t._v("Build. Market. Sell & Ship")]),t._v(" "),n("div",{staticClass:"flex space-x-6"},[n("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:"https://facebook.com/SuperAgency.io/"}},[n("span",{staticClass:"sr-only"},[t._v("Facebook")]),t._v(" "),n("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"}})])]),t._v(" "),n("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:"https://twitter.com/rudy_bekker"}},[n("span",{staticClass:"sr-only"},[t._v("Twitter")]),t._v(" "),n("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[n("path",{attrs:{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"}})])]),t._v(" "),n("a",{staticClass:"text-gray-400 hover:text-gray-500",attrs:{href:"https://github.com/RudyBekker/"}},[n("span",{staticClass:"sr-only"},[t._v("GitHub")]),t._v(" "),n("svg",{staticClass:"h-6 w-6",attrs:{fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"}})])])])]),t._v(" "),n("div",{staticClass:"mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"},[n("div",{staticClass:"md:grid md:grid-cols-2 md:gap-8"},[n("div",[n("h3",{staticClass:"text-sm font-semibold text-white tracking-wider uppercase"},[t._v("Solutions")]),t._v(" "),n("ul",{staticClass:"mt-4 space-y-4"},t._l(t.footerNavigation.solutions,(function(e){return n("li",{key:e.name},[n("a",{staticClass:"text-base text-gray-500 hover:text-white",attrs:{href:e.href}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),n("div",{staticClass:"mt-12 md:mt-0"},[n("h3",{staticClass:"text-sm font-semibold text-white tracking-wider uppercase"},[t._v("Company")]),t._v(" "),n("ul",{staticClass:"mt-4 space-y-4"},t._l(t.footerNavigation.company,(function(e){return n("li",{key:e.name},[n("a",{staticClass:"text-base text-gray-500 hover:text-white",attrs:{href:e.href}},[t._v(t._s(e.name))])])})),0)])]),t._v(" "),n("div",{staticClass:"md:grid md:grid-cols-2 md:gap-8"},[n("div",[n("h3",{staticClass:"text-sm font-semibold text-white tracking-wider uppercase"},[t._v("Legal")]),t._v(" "),n("ul",{staticClass:"mt-4 space-y-4"},t._l(t.footerNavigation.legal,(function(e){return n("li",{key:e.name},[n("a",{staticClass:"text-base text-gray-500 hover:text-white",attrs:{href:e.href}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),n("div",{staticClass:"mt-12 md:mt-0"},[n("h3",{staticClass:"text-sm font-semibold text-white tracking-wider uppercase"},[t._v("Support")]),t._v(" "),n("ul",{staticClass:"mt-4 space-y-4"},t._l(t.footerNavigation.support,(function(e){return n("li",{key:e.name},[n("a",{staticClass:"text-base text-gray-500 hover:text-white",attrs:{href:e.href}},[t._v(t._s(e.name))])])})),0)])])])]),t._v(" "),n("div",{staticClass:"mt-12 border-gray-100 py-8"},[n("p",{staticClass:"text-base text-gray-500 xl:text-center"},[t._v("© "+t._s((new Date).getFullYear())+" SuperAgency. All rights reserved. 2021+")])])])])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,r){"use strict";r.r(e);r(55);var n={data:function(){return{user_email:"",demo_text:"WATCH DEMO"}},methods:{processFooterActions:function(){var t=this;t.demo_text="SUBMITTING...",this.$axios.post("https://16d963516de7ecb16c2fcd461215905a.m.pipedream.net",{email:this.user_email,tag:"InitDemo21"},{headers:{"Content-Type":"application/json"}}).then((function(e){e.data;t.$toast.success("Awesome... Enjoy The Demo!!"),t.user_email="",t.demo_text="WATCH DEMO",setTimeout((function(){t.$router.push({path:"/demo/1"})}),500)})).catch((function(e){t.$toast.error("Something went wrong! Please contact with rudy@superagency.io"),t.demo_text="WATCH DEMO"}))}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 border-t-4 border-solid border-pink-400"},[r("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"mt-8 lg:mt-0 lg:ml-8"},[r("form",{staticClass:"sm:flex",on:{submit:function(e){return e.preventDefault(),t.processFooterActions(e)}}},[r("label",{staticClass:"sr-only",attrs:{for:"emailAddress"}},[t._v("Email address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user_email,expression:"user_email"}],staticClass:"w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md",attrs:{id:"emailAddress",name:"emailAddress",type:"email",autocomplete:"email",required:"true",placeholder:"Enter your email"},domProps:{value:t.user_email},on:{input:function(e){e.target.composing||(t.user_email=e.target.value)}}}),t._v(" "),r("div",{staticClass:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"},[r("button",{staticClass:"block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-pink-400 to-pink-700 text-white font-medium hover:from-pink-600 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900",attrs:{type:"submit"},domProps:{textContent:t._s(t.demo_text)}})])]),t._v(" "),r("p",{staticClass:"mt-3 text-sm text-gray-300"},[t._v("\n                We care about the protection of your data. Read our\n                "+t._s(" ")+"\n                "),r("a",{staticClass:"text-white font-medium underline",attrs:{href:"/legal/privacy"}},[t._v("\n                    Privacy Policy.\n                ")])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lg:w-0 lg:flex-1"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-white sm:text-4xl",attrs:{id:"newsletter-headline"}},[t._v("\n                DEMO SUPERAGENCY FOR FREE\n            ")]),t._v(" "),r("p",{staticClass:"mt-3 max-w-3xl text-lg leading-6 text-gray-300"},[t._v("\n                ALL THE TOOLS YOU NEED TO TO SCALE YOUR BUSINESS!\n            ")])])}],!1,null,null,null);e.default=component.exports},282:function(t,e,r){"use strict";r.r(e);var n=r(244),o=r(245),l=r(246),c={components:{MainHeader:n.default,MainFooter:o.default,MainFooterCTA:l.default},data:function(){return{faqs:[{question:"Where is SuperAgency Based?",answer:"We are a international company registered in Singapore, United States & The Netherlands"},{question:"Do you offer Support?",answer:"We offer live support from Monday 9AM - 10PM GMT+2. Please submit a ticket from within the SuperAgency Dashboard or send an email to support@superagency.io"},{question:"Where does SuperAgency Host Their Sites?",answer:"We run on AWS 😍... to be more specific: EC2 + Lambda + Cloudfront"},{question:"Will sites be Secure?",answer:"Good Question! Yes! Because we staticly generate our sites for optimial preformance we benefit of the backend being seperate from the actual front-end, thus eleminating all hacking threats."}]}}},d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app-layout"}},[r("MainHeader"),t._v(" "),r("body",[r("div",{staticClass:"bg-gray-50"},[r("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8"},[r("h2",{staticClass:"text-3xl font-extrabold text-gray-900"},[t._v("\n                    Frequently asked questions\n                ")]),t._v(" "),r("div",{staticClass:"mt-8"},[r("dl",{staticClass:"divide-y divide-gray-200"},t._l(t.faqs,(function(e){return r("div",{key:e.id,staticClass:"pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"},[r("dt",{staticClass:"text-base font-medium text-gray-900 md:col-span-5"},[t._v("\n                                "+t._s(e.question)+"\n                            ")]),t._v(" "),r("dd",{staticClass:"mt-2 md:mt-0 md:col-span-7"},[r("p",{staticClass:"text-base text-gray-500"},[t._v("\n                                    "+t._s(e.answer)+"\n                                ")])])])})),0)])])])]),t._v(" "),r("footer",[r("MainFooterCTA"),t._v(" "),r("MainFooter")],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{301:function(t,e,o){"use strict";o.r(e);o(55);var r={data:function(){return{user_email:"",demo_text:"WATCH DEMO"}},methods:{processFooterActions:function(){var t=this;t.demo_text="SUBMITTING...",this.$axios.post("https://16d963516de7ecb16c2fcd461215905a.m.pipedream.net",{email:this.user_email,tag:"InitDemo21"},{headers:{"Content-Type":"application/json"}}).then((function(e){e.data;t.$toast.success("Awesome... Enjoy The Demo!!"),t.user_email="",t.demo_text="WATCH DEMO",setTimeout((function(){t.$router.push({path:"/demo/1"})}),500)})).catch((function(e){t.$toast.error("Something went wrong! Please contact with rudy@superagency.io"),t.demo_text="WATCH DEMO"}))}}},n=o(13),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg-gray-900 border-t-4 border-solid border-pink-400"},[o("div",{staticClass:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center"},[t._m(0),t._v(" "),o("div",{staticClass:"mt-8 lg:mt-0 lg:ml-8"},[o("form",{staticClass:"sm:flex",on:{submit:function(e){return e.preventDefault(),t.processFooterActions(e)}}},[o("label",{staticClass:"sr-only",attrs:{for:"emailAddress"}},[t._v("Email address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.user_email,expression:"user_email"}],staticClass:"w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md",attrs:{id:"emailAddress",name:"emailAddress",type:"email",autocomplete:"email",required:"true",placeholder:"Enter your email"},domProps:{value:t.user_email},on:{input:function(e){e.target.composing||(t.user_email=e.target.value)}}}),t._v(" "),o("div",{staticClass:"mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0"},[o("button",{staticClass:"block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-pink-400 to-pink-700 text-white font-medium hover:from-pink-600 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900",attrs:{type:"submit"},domProps:{textContent:t._s(t.demo_text)}})])]),t._v(" "),o("p",{staticClass:"mt-3 text-sm text-gray-300"},[t._v("\n                We care about the protection of your data. Read our\n                "+t._s(" ")+"\n                "),o("a",{staticClass:"text-white font-medium underline",attrs:{href:"/legal/privacy"}},[t._v("\n                    Privacy Policy.\n                ")])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lg:w-0 lg:flex-1"},[o("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-white sm:text-4xl",attrs:{id:"newsletter-headline"}},[t._v("\n                DEMO SUPERAGENCY FOR FREE\n            ")]),t._v(" "),o("p",{staticClass:"mt-3 max-w-3xl text-lg leading-6 text-gray-300"},[t._v("\n                ALL THE TOOLS YOU NEED TO TO SCALE YOUR BUSINESS!\n            ")])])}],!1,null,null,null);e.default=component.exports}}]);
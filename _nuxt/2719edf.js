(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{263:function(t,e,o){var content=o(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("9da6a5f0",content,!0,{sourceMap:!1})},269:function(t,e,o){"use strict";o(263)},270:function(t,e,o){var r=o(70)((function(i){return i[1]}));r.push([t.i,"input:checked~.dot[data-v-46ff59cf]{\n  transform:translateX(100%);\n  background-color:#fff\n}\ninput:checked~.block[data-v-46ff59cf]{\n  background-color:#4f46e5\n}",""]),t.exports=r},281:function(t,e,o){"use strict";o.r(e);var r=o(242),n=o(243),l=o(244),c={components:{MainHeader:r.a,MainFooter:n.a,MainFooterCTA:l.a},data:function(){return{agreed:!1,first_name:"",last_name:"",company:"",phone_number:"",email:"",message:""}},setup:function(){return{agreed:agreed}},methods:{processForm:function(){var t=this;this.$axios.post("https://1e441dd157ccac4854220b8a41367a28.m.pipedream.net",{first_name:this.first_name,last_name:this.last_name,company:this.company,phone_number:this.phone_number,email:this.email,message:this.message},{headers:{"Content-Type":"application/json"}}).then((function(e){e.data;t.$toast.success("Form Submited! We will be in touch soon :)"),t.demo_text="WATCH DEMO"})).catch((function(e){t.$toast.error("Something went wrong! Please contact with rudy@superagency.io"),t.demo_text="WATCH DEMO"}))}}},d=(o(269),o(13)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app-layout"}},[o("MainHeader"),t._v(" "),o("body",[o("div",{staticClass:"bg-gray-50 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"},[o("div",{staticClass:"relative max-w-xl mx-auto"},[o("svg",{staticClass:"absolute left-full transform translate-x-1/2",attrs:{width:"404",height:"404",fill:"none",viewBox:"0 0 404 404","aria-hidden":"true"}},[o("defs",[o("pattern",{attrs:{id:"85737c0e-0916-41d7-917f-596dc7edfa27",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[o("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),o("rect",{attrs:{width:"404",height:"404",fill:"url(#85737c0e-0916-41d7-917f-596dc7edfa27)"}})]),t._v(" "),o("svg",{staticClass:"absolute right-full bottom-0 transform -translate-x-1/2",attrs:{width:"404",height:"404",fill:"none",viewBox:"0 0 404 404","aria-hidden":"true"}},[o("defs",[o("pattern",{attrs:{id:"85737c0e-0916-41d7-917f-596dc7edfa27",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[o("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),o("rect",{attrs:{width:"404",height:"404",fill:"url(#85737c0e-0916-41d7-917f-596dc7edfa27)"}})]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"mt-12"},[o("form",{staticClass:"grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",on:{submit:function(e){return e.preventDefault(),t.processForm(e)}}},[o("div",[o("label",{staticClass:"block text-sm font-extrabold text-gray-700"},[t._v("First name")]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{type:"text",required:"true",name:"first_name",id:"first_name",autocomplete:"given-name"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})])]),t._v(" "),o("div",[o("label",{staticClass:"block text-sm font-extrabold text-gray-700",attrs:{for:"last_name"}},[t._v("Last name")]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{type:"text",required:"true",name:"last_name",id:"last_name",autocomplete:"family-name"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("label",{staticClass:"block text-sm font-extrabold text-gray-700",attrs:{for:"company"}},[t._v("Company")]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{type:"text",name:"company",id:"company",autocomplete:"organization"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("label",{staticClass:"block text-sm font-extrabold text-gray-700",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("div",{staticClass:"mt-1"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{id:"email",required:"true",name:"email",type:"email",autocomplete:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("label",{staticClass:"block text-sm font-extrabold text-gray-700",attrs:{for:"phone_number"}},[t._v("Phone Number")]),t._v(" "),o("div",{staticClass:"mt-1  rounded-md shadow-sm"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_number,expression:"phone_number"}],staticClass:"py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{type:"number",required:"true",name:"phone_number",id:"phone_number",autocomplete:"tel",placeholder:"+1 (555) 987-6543"},domProps:{value:t.phone_number},on:{input:function(e){e.target.composing||(t.phone_number=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("label",{staticClass:"block text-sm font-extrabold text-gray-700",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),o("div",{staticClass:"mt-1"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md",attrs:{id:"message",required:"true",name:"message",rows:"4"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"sm:col-span-2"},[o("div",{staticClass:"flex items-start"},[t._m(1),t._v(" "),o("div",{staticClass:"ml-3"},[o("p",{staticClass:"text-base text-gray-500"},[t._v(" By selecting this, you agree to the "+t._s(" ")+" "),o("a",{staticClass:"font-extrabold text-gray-700 underline",attrs:{href:"/legal/privacy"}},[t._v("Privacy Policy")]),t._v(" "+t._s(" ")+" and "+t._s(" ")+" "),o("a",{staticClass:"font-extrabold text-gray-700 underline",attrs:{href:"/legal/cookie"}},[t._v("Cookie Policy")]),t._v(". ")])])])]),t._v(" "),t._m(2)])])])])]),t._v(" "),o("footer",[o("MainFooterCTA"),t._v(" "),o("MainFooter")],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},[t._v("Contact us")]),t._v(" "),o("p",{staticClass:"mt-4 text-lg leading-6 text-gray-500"},[t._v("Feel free to send us a message 🎉")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex-shrink-0"},[o("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"toggleB"}},[o("div",{staticClass:"relative"},[o("input",{staticClass:"sr-only",attrs:{type:"checkbox",id:"toggleB"}}),t._v(" "),o("div",{staticClass:"block bg-gray-200 w-11 h-6 rounded-full"}),t._v(" "),o("div",{staticClass:"dot absolute left-1 top-0.5 bg-white w-5 h-5 rounded-full transition"})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sm:col-span-2"},[o("button",{staticClass:"w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-extrabold text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{type:"submit"}},[t._v("Let's talk")])])}],!1,null,"46ff59cf",null);e.default=component.exports}}]);
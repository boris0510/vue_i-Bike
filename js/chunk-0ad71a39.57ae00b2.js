(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad71a39"],{"436a":function(e,a,t){"use strict";t("826f")},"6ca8":function(e,a,t){"use strict";t.r(a);var s=t("7a23"),i=Object(s["U"])("data-v-2407417c");Object(s["z"])("data-v-2407417c");var n={class:"login mt-5"},c={class:"form-signin"},r=Object(s["i"])("h1",{class:"h2 mb-4 text-center fw-bold"},"登入至後台",-1),o=Object(s["i"])("label",{for:"email",class:"visually-hidden"},"電子信箱",-1),l=Object(s["i"])("label",{for:"password",class:"visually-hidden"},"密碼",-1),u=Object(s["i"])("div",{class:"checkbox mb-3 ms-1"},[Object(s["i"])("label",null,[Object(s["i"])("input",{type:"checkbox",value:"remember-me"}),Object(s["h"])(" 記住我 ")])],-1),d=Object(s["i"])("button",{class:"w-100 btn btn-lg btn-dark btn-hover mb-3 rounded-0",type:"submit"},"登入",-1),b=Object(s["i"])("p",{class:"text-center"},"使用 ibike@gmail.com 及 ibike123 登入",-1);Object(s["x"])();var m=i((function(e,a,t,m,p,j){var O=Object(s["F"])("Navber"),f=Object(s["F"])("Banner"),v=Object(s["F"])("Loading"),h=Object(s["F"])("Field"),g=Object(s["F"])("ErrorMessage"),w=Object(s["F"])("Form"),k=Object(s["F"])("Footer");return Object(s["w"])(),Object(s["e"])(s["a"],null,[Object(s["i"])(O),Object(s["i"])(f),Object(s["i"])("div",n,[Object(s["i"])(v,{active:p.isLoading,"onUpdate:active":a[1]||(a[1]=function(e){return p.isLoading=e})},null,8,["active"]),Object(s["i"])("main",c,[Object(s["i"])(w,{onSubmit:j.signin},{default:i((function(e){var t=e.errors;return[r,o,Object(s["i"])(h,{type:"email",id:"email",name:"Email",class:[{"is-invalid":t["Email"]},"form-control"],placeholder:"電子信箱",modelValue:p.user.username,"onUpdate:modelValue":a[2]||(a[2]=function(e){return p.user.username=e}),rules:"email|required"},null,8,["class","modelValue"]),Object(s["i"])(g,{name:"Email",class:"invalid-feedback"}),l,Object(s["i"])(h,{type:"password",id:"password",class:[{"is-invalid":t["密碼"]},"form-control"],name:"密碼",placeholder:"密碼",modelValue:p.user.password,"onUpdate:modelValue":a[3]||(a[3]=function(e){return p.user.password=e}),rules:"required"},null,8,["class","modelValue"]),Object(s["i"])(g,{name:"密碼",class:"invalid-feedback"}),u,d]})),_:1},8,["onSubmit"]),b])]),Object(s["i"])(k)],64)})),p=(t("99af"),t("90b0")),j=t("84af"),O=t("fd2d"),f={name:"Login",components:{Navber:p["a"],Banner:j["a"],Footer:O["a"]},data:function(){return{isLoading:!1,user:{username:"",password:""}}},methods:{signin:function(){var e=this,a="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.$http.post(a,this.user).then((function(a){if(a.data.success){var t=a.data.token,s=a.data.expired;document.cookie="Token=".concat(t,";expires=").concat(new Date(s),";"),e.$router.push("/admin/product"),e.emitter.emit("message:push",{message:a.data.message,status:"success"})}else e.emitter.emit("message:push",{message:a.data.message,status:"danger"})}))}}};t("436a");f.render=m,f.__scopeId="data-v-2407417c";a["default"]=f},"826f":function(e,a,t){}}]);
//# sourceMappingURL=chunk-0ad71a39.57ae00b2.js.map
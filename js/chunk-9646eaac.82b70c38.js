(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9646eaac"],{"1c03":function(t,e,a){"use strict";a("d848")},"1e12":function(t,e,a){"use strict";a("a755")},5849:function(t,e,a){t.exports=a.p+"img/i-bike-sm.775ee328.svg"},"5c75":function(t,e,a){"use strict";a("7316")},7316:function(t,e,a){},"7a5e":function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),l=Object(c["U"])("data-v-45db88ae");Object(c["z"])("data-v-45db88ae");var s={class:"checkout"},n={class:"container"},i=Object(c["g"])('<div class="d-flex justify-content-center align-items-center mb-5" data-v-45db88ae><h5 class="fw-bold mb-0 active" data-v-45db88ae>填寫資料</h5><i class="fas fa-arrow-right fs-5 mx-2" data-v-45db88ae></i><h5 class="text-black-50 fw-bold mb-0 " data-v-45db88ae>確認付款</h5><i class="fas fa-arrow-right fs-5 mx-2" data-v-45db88ae></i><h5 class="text-black-50 fw-bold mb-0 " data-v-45db88ae>訂單完成</h5></div>',1),r={class:"row"},o={class:"col-md-7"},b=Object(c["i"])("h1",{class:"fs-3 text-center fw-bold"},"寄送資訊",-1),d={class:"d-flex justify-content-center"},u={class:"mb-3"},j=Object(c["i"])("label",{for:"email",class:"form-label"},[Object(c["h"])("Email "),Object(c["i"])("small",null,"(必填)")],-1),O={class:"mb-3"},f=Object(c["i"])("label",{for:"name",class:"form-label"},[Object(c["h"])("收件人姓名 "),Object(c["i"])("small",null,"(必填)")],-1),m={class:"mb-3"},h=Object(c["i"])("label",{for:"tel",class:"form-label"},[Object(c["h"])("收件人電話 "),Object(c["i"])("small",null,"(必填)")],-1),p={class:"mb-3"},v=Object(c["i"])("label",{for:"address",class:"form-label"},[Object(c["h"])("收件人地址 "),Object(c["i"])("small",null,"(必填)")],-1),g={class:"mb-3"},k=Object(c["i"])("label",{for:"message",class:"form-label"},"留言",-1),x={class:"d-flex justify-content-between"},w=Object(c["i"])("button",{type:"submit",class:"btn btn-dark btn-hover rounded-0"},"下一步 付款去",-1),y={class:"col-md-5 mt-5 mt-md-0"},C=Object(c["i"])("h2",{class:"fs-3 text-center fw-bold"},"商品明細",-1),T={class:"table-responsive-md mt-4"},$={class:"table lh-lg"},I=Object(c["i"])("thead",{class:"table-dark text-center"},[Object(c["i"])("tr",{class:"table-nowrap"},[Object(c["i"])("th",null,"商品名稱"),Object(c["i"])("th",null,"數量"),Object(c["i"])("th",{class:"text-end"},"價格")])],-1),_={class:"text-center"},L={class:"text-end"},F=Object(c["i"])("br",null,null,-1),V={key:0,class:"text-strong"},N={class:"text-center"},q={key:0},E=Object(c["i"])("td",{colspan:"2",class:"text-end"},"總價 :",-1),U={class:"text-end"},P={key:1},S=Object(c["i"])("td",{colspan:"2",class:"text-end text-strong"},"折扣價 :",-1),z={class:"text-end text-strong"};Object(c["x"])();var B=l((function(t,e,a,B,D,G){var J=Object(c["F"])("Navber"),M=Object(c["F"])("GoTop"),A=Object(c["F"])("Loading"),H=Object(c["F"])("Field"),K=Object(c["F"])("ErrorMessage"),Q=Object(c["F"])("Form"),R=Object(c["F"])("Footer");return Object(c["w"])(),Object(c["e"])(c["a"],null,[Object(c["i"])(J),Object(c["i"])(M),Object(c["i"])("div",s,[Object(c["i"])(A,{active:D.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return D.isLoading=t})},null,8,["active"]),Object(c["i"])("div",n,[i,Object(c["i"])("div",r,[Object(c["i"])("div",o,[b,Object(c["i"])("div",d,[Object(c["i"])(Q,{class:"col-11",onSubmit:G.createOrder},{default:l((function(t){var a=t.errors;return[Object(c["i"])("div",u,[j,Object(c["i"])(H,{id:"email",name:"Email",type:"email",class:["form-control",{"is-invalid":a["Email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:D.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return D.form.user.email=t})},null,8,["class","modelValue"]),Object(c["i"])(K,{name:"Email",class:"invalid-feedback"})]),Object(c["i"])("div",O,[f,Object(c["i"])(H,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:D.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return D.form.user.name=t})},null,8,["class","modelValue"]),Object(c["i"])(K,{name:"姓名",class:"invalid-feedback"})]),Object(c["i"])("div",m,[h,Object(c["i"])(H,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",rules:"required",modelValue:D.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return D.form.user.tel=t})},null,8,["class","modelValue"]),Object(c["i"])(K,{name:"電話",class:"invalid-feedback"})]),Object(c["i"])("div",p,[v,Object(c["i"])(H,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:D.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return D.form.user.address=t})},null,8,["class","modelValue"]),Object(c["i"])(K,{name:"地址",class:"invalid-feedback"})]),Object(c["i"])("div",g,[k,Object(c["S"])(Object(c["i"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return D.form.message=t})},null,512),[[c["N"],D.form.message]])]),Object(c["i"])("div",x,[Object(c["i"])("button",{type:"button",class:"btn btn-outline-dark btn-hover rounded-0",onClick:e[7]||(e[7]=Object(c["T"])((function(){return G.goCart&&G.goCart.apply(G,arguments)}),["prevent"]))},"回購物清單"),w])]})),_:1},8,["onSubmit"])])]),Object(c["i"])("div",y,[C,Object(c["i"])("div",T,[Object(c["i"])("table",$,[I,Object(c["i"])("tbody",_,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(D.carts,(function(e){return Object(c["w"])(),Object(c["e"])("tr",{class:"table-nowrap",key:e.id},[Object(c["i"])("td",null,Object(c["I"])(e.product.title),1),Object(c["i"])("td",null,Object(c["I"])(e.qty),1),Object(c["i"])("td",L,[Object(c["i"])("span",{class:{"text-decoration-line-through":e.final_total!==e.total}},"NT$ "+Object(c["I"])(t.$filters.currency(e.total))+" 元",3),F,e.final_total!==e.total?(Object(c["w"])(),Object(c["e"])("span",V,"NT$ "+Object(c["I"])(t.$filters.currency(e.final_total))+" 元",1)):Object(c["f"])("",!0)])])})),128))]),Object(c["i"])("tfoot",N,[0!==D.carts.length?(Object(c["w"])(),Object(c["e"])("tr",q,[E,Object(c["i"])("td",U,"NT$ "+Object(c["I"])(t.$filters.currency(D.total))+" 元",1)])):Object(c["f"])("",!0),D.final_total!==D.total?(Object(c["w"])(),Object(c["e"])("tr",P,[S,Object(c["i"])("td",z,"NT$ "+Object(c["I"])(t.$filters.currency(D.final_total))+" 元",1)])):Object(c["f"])("",!0)])])])])])])]),Object(c["i"])(R)],64)})),D=(a("99af"),a("90b0")),G=a("fd2d"),J=a("c12c"),M={name:"Checkout",components:{Navber:D["a"],Footer:G["a"],GoTop:J["a"]},data:function(){return{isLoading:!1,carts:[],total:0,final_total:0,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ibike","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(t.carts=e.data.data.carts,t.total=e.data.data.total,t.final_total=e.data.data.final_total,t.isLoading=!1)}))},createOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ibike","/order"),a=this.form;this.$http.post(e,{data:a}).then((function(e){e.data.success&&(t.emitter.emit("message:push",{message:e.data.message,status:"success"}),t.$router.push("/checkoutPay/".concat(e.data.orderId)))}))},goCart:function(){this.$router.push("/cart")}},created:function(){this.getCart()}};a("1c03");M.render=B,M.__scopeId="data-v-45db88ae";e["default"]=M},"90b0":function(t,e,a){"use strict";var c=a("7a23"),l=a("5849"),s=a.n(l),n=Object(c["U"])("data-v-03169b4c");Object(c["z"])("data-v-03169b4c");var i={class:"nav"},r={class:"navbar navbar-expand-lg navbar-light bg-light text-dark fixed-top"},o={class:"container-fluid"},b=Object(c["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["i"])("span",{class:"navbar-toggler-icon"})],-1),d=Object(c["i"])("img",{src:s.a,alt:"i-Bike"},null,-1),u={class:"d-flex d-lg-none d-md-block pt-1 me-2"},j=Object(c["i"])("a",{class:"navbar-brand text-dark a-hover",href:"#/admin/product"},[Object(c["i"])("i",{class:"fas fa-user-circle"})],-1),O=Object(c["i"])("i",{class:"fas fa-shopping-cart"},null,-1),f={class:"badge text-light bg-danger"},m={class:"dropdown-menu dropdown-menu-end cart-box p-3 me-3"},h={key:0,class:"fw-bold"},p={class:"table-responsive-md"},v={class:"table table-sm"},g=Object(c["i"])("thead",{class:"table-dark"},[Object(c["i"])("tr",{class:"table-nowrap text-center"},[Object(c["i"])("th",null,"商品名稱"),Object(c["i"])("th",null,"數量"),Object(c["i"])("th",{class:"text-end"},"價格"),Object(c["i"])("th")])],-1),k={class:"text-center"},x={class:"text-end"},w={class:"text-center"},y=Object(c["i"])("i",{class:"fas fa-trash-alt text-danger"},null,-1),C={key:1,class:"fw-bold text-center mb-3"},T={class:"d-flex justify-content-end"},$=Object(c["i"])("i",{class:"fas fa-shopping-cart"},null,-1),I=Object(c["h"])(" 結帳去 "),_=Object(c["i"])("i",{class:"fas fa-shopping-basket"},null,-1),L=Object(c["h"])(" 選購去 "),F=Object(c["g"])('<div class="collapse navbar-collapse" id="navbarToggler" data-v-03169b4c><ul class="navbar-nav me-auto my-2 my-lg-0" data-v-03169b4c><li class="nav-item pt-1" data-v-03169b4c><a href="#/products/all" class="nav-link text-dark a-hover fw-bold" data-v-03169b4c>產品</a></li><li class="nav-item pt-1" data-v-03169b4c><a href="#/checkOrder" class="nav-link text-dark a-hover fw-bold" data-v-03169b4c>訂單查詢</a></li><li class="nav-item pt-1" data-v-03169b4c><a href="#/followPage" class="nav-link text-dark a-hover fw-bold" data-v-03169b4c>我的收藏</a></li><li class="nav-item pt-1" data-v-03169b4c><a href="#/about" class="nav-link text-dark a-hover fw-bold" data-v-03169b4c>關於 i-Bike</a></li></ul></div>',1),V={class:"d-flex d-none d-lg-block pt-1 me-4"},N=Object(c["i"])("a",{class:"navbar-brand text-dark a-hover",href:"#/admin/product"},[Object(c["i"])("i",{class:"fas fa-user-circle"})],-1),q=Object(c["i"])("i",{class:"fas fa-shopping-cart"},null,-1),E={key:0,class:"badge text-light bg-danger"},U={class:"dropdown-menu dropdown-menu-end cart-box p-3 me-3"},P={key:0,class:"fw-bold"},S={class:"table-responsive-md"},z={class:"table table-sm"},B=Object(c["i"])("thead",{class:"table-dark"},[Object(c["i"])("tr",{class:"table-nowrap text-center"},[Object(c["i"])("th",null,"商品名稱"),Object(c["i"])("th",null,"數量"),Object(c["i"])("th",{class:"text-end"},"價格"),Object(c["i"])("th")])],-1),D={class:"text-end"},G=Object(c["i"])("i",{class:"fas fa-trash-alt text-danger"},null,-1),J={key:1,class:"fw-bold text-center mb-3"},M={class:"d-flex justify-content-end"},A=Object(c["i"])("i",{class:"fas fa-shopping-cart"},null,-1),H=Object(c["h"])(" 結帳去 "),K=Object(c["i"])("i",{class:"fas fa-shopping-basket"},null,-1),Q=Object(c["h"])(" 選購去 ");Object(c["x"])();var R=n((function(t,e,a,l,s,R){var W=Object(c["F"])("Loading"),X=Object(c["F"])("router-link");return Object(c["w"])(),Object(c["e"])("div",i,[Object(c["i"])(W,{active:s.isLoading,"onUpdate:active":e[1]||(e[1]=function(t){return s.isLoading=t})},null,8,["active"]),Object(c["i"])("nav",r,[Object(c["i"])("div",o,[b,Object(c["i"])(X,{to:"/",class:"nav-link"},{default:n((function(){return[d]})),_:1}),Object(c["i"])("div",u,[j,Object(c["i"])("a",{class:"navbar-brand text-dark me-0 a-hover cart",href:"#",onClick:e[2]||(e[2]=Object(c["T"])((function(){}),["prevent"])),"data-bs-toggle":"dropdown"},[O,Object(c["i"])("span",f,Object(c["I"])(s.carts.length),1)]),Object(c["i"])("div",m,[s.carts.length>0?(Object(c["w"])(),Object(c["e"])("h5",h,"已選購商品")):Object(c["f"])("",!0),Object(c["i"])("div",p,[Object(c["i"])("table",v,[g,Object(c["i"])("tbody",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(s.carts,(function(e){return Object(c["w"])(),Object(c["e"])("tr",{class:"table-nowrap",key:e.id},[Object(c["i"])("td",null,Object(c["I"])(e.product.title),1),Object(c["i"])("td",k,Object(c["I"])(e.qty),1),Object(c["i"])("td",x,"NT$ "+Object(c["I"])(t.$filters.currency(e.total)),1),Object(c["i"])("td",w,[Object(c["i"])("a",{href:"#",onClick:Object(c["T"])((function(t){return R.delCart(e.id)}),["prevent"])},[y],8,["onClick"])])])})),128))])])]),0==s.carts.length?(Object(c["w"])(),Object(c["e"])("h5",C,"產品尚未加入購物車!")):Object(c["f"])("",!0),Object(c["i"])("div",T,[s.carts.length>0?(Object(c["w"])(),Object(c["e"])("button",{key:0,type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:e[3]||(e[3]=function(){return R.goCart&&R.goCart.apply(R,arguments)})},[$,I])):(Object(c["w"])(),Object(c["e"])("button",{key:1,type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:e[4]||(e[4]=function(){return R.goProducts&&R.goProducts.apply(R,arguments)})},[_,L]))])])]),F,Object(c["i"])("div",V,[N,Object(c["i"])("a",{class:"navbar-brand text-dark me-0 a-hover cart",href:"#",onClick:e[5]||(e[5]=Object(c["T"])((function(){}),["prevent"])),"data-bs-toggle":"dropdown"},[q,s.carts.length>0?(Object(c["w"])(),Object(c["e"])("span",E,Object(c["I"])(s.carts.length),1)):Object(c["f"])("",!0)]),Object(c["i"])("div",U,[s.carts.length>0?(Object(c["w"])(),Object(c["e"])("h5",P,"已選購商品")):Object(c["f"])("",!0),Object(c["i"])("div",S,[Object(c["i"])("table",z,[B,Object(c["i"])("tbody",null,[(Object(c["w"])(!0),Object(c["e"])(c["a"],null,Object(c["D"])(s.carts,(function(e){return Object(c["w"])(),Object(c["e"])("tr",{class:"table-nowrap text-center",key:e.id},[Object(c["i"])("td",null,Object(c["I"])(e.product.title),1),Object(c["i"])("td",null,Object(c["I"])(e.qty),1),Object(c["i"])("td",D,"NT$ "+Object(c["I"])(t.$filters.currency(e.total)),1),Object(c["i"])("td",null,[Object(c["i"])("a",{href:"#",onClick:Object(c["T"])((function(t){return R.delCart(e.id)}),["prevent"])},[G],8,["onClick"])])])})),128))])])]),0==s.carts.length?(Object(c["w"])(),Object(c["e"])("h5",J,"產品尚未加入購物車!")):Object(c["f"])("",!0),Object(c["i"])("div",M,[s.carts.length>0?(Object(c["w"])(),Object(c["e"])("button",{key:0,type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:e[6]||(e[6]=function(){return R.goCart&&R.goCart.apply(R,arguments)})},[A,H])):(Object(c["w"])(),Object(c["e"])("button",{key:1,type:"button",class:"btn btn-dark btn-hover rounded-0",onClick:e[7]||(e[7]=function(){return R.goProducts&&R.goProducts.apply(R,arguments)})},[K,Q]))])])])])])])})),W=(a("99af"),{name:"Navber",data:function(){return{isLoading:!1,carts:[]}},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ibike","/cart");this.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(t.carts=e.data.data.carts,t.isLoading=!1)}))},delCart:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("ibike","/cart/").concat(t);this.isLoading=!0,this.$http.delete(a).then((function(t){t.data.success?(e.emitter.emit("message:push",{message:t.data.message,status:"danger"}),e.getCart(),e.isLoading=!1):(e.emitter.emit("message:push",{message:t.data.message,status:"danger"}),e.isLoading=!1)}))},goCart:function(){this.$router.push("/cart")},goProducts:function(){this.$router.push("/products/all")}},created:function(){this.getCart(),this.emitter.on("resetCart",this.getCart)}});a("5c75");W.render=R,W.__scopeId="data-v-03169b4c";e["a"]=W},"99af":function(t,e,a){"use strict";var c=a("23e7"),l=a("d039"),s=a("e8b5"),n=a("861d"),i=a("7b0b"),r=a("50c4"),o=a("8418"),b=a("65f0"),d=a("1dde"),u=a("b622"),j=a("2d00"),O=u("isConcatSpreadable"),f=9007199254740991,m="Maximum allowed index exceeded",h=j>=51||!l((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),p=d("concat"),v=function(t){if(!n(t))return!1;var e=t[O];return void 0!==e?!!e:s(t)},g=!h||!p;c({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,c,l,s,n=i(this),d=b(n,0),u=0;for(e=-1,c=arguments.length;e<c;e++)if(s=-1===e?n:arguments[e],v(s)){if(l=r(s.length),u+l>f)throw TypeError(m);for(a=0;a<l;a++,u++)a in s&&o(d,u,s[a])}else{if(u>=f)throw TypeError(m);o(d,u++,s)}return d.length=u,d}})},a755:function(t,e,a){},b0c0:function(t,e,a){var c=a("83ab"),l=a("9bf2").f,s=Function.prototype,n=s.toString,i=/^\s*function ([^ (]*)/,r="name";c&&!(r in s)&&l(s,r,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(t){return""}}})},c12c:function(t,e,a){"use strict";var c=a("7a23"),l=Object(c["U"])("data-v-32ffb6fc");Object(c["z"])("data-v-32ffb6fc");var s={class:"gotop d-none"},n=Object(c["i"])("i",{class:"far fa-caret-square-up"},null,-1);Object(c["x"])();var i=l((function(t,e,a,l,i,r){return Object(c["w"])(),Object(c["e"])("div",s,[Object(c["i"])("a",{href:"#",onClick:e[1]||(e[1]=Object(c["T"])((function(){return r.top&&r.top.apply(r,arguments)}),["prevent"]))},[n])])})),r={name:"GoTop",methods:{top:function(){document.documentElement.scrollTop=0}}};window.onscroll=function(t){if(t.target.scrollingElement.scrollTop>250){var e=document.querySelector(".gotop");null!==e&&(e.className="gotop d-block")}else{var a=document.querySelector(".gotop");null!==a&&(a.className="gotop d-none")}};a("1e12");r.render=i,r.__scopeId="data-v-32ffb6fc";e["a"]=r},d848:function(t,e,a){},fd2d:function(t,e,a){"use strict";var c=a("7a23"),l={class:"footer bg-dark mt-3 mt-md-5"},s={class:"container py-4"},n=Object(c["i"])("ul",{class:"list-inline text-center"},[Object(c["i"])("li",{class:"list-inline-item text-light"}," © Copright 2021 i-Bike ")],-1),i=Object(c["i"])("ul",{class:"list-inline text-center"},[Object(c["i"])("li",{class:"list-inline-item text-light"}," 個人練習作品，非商業用途 ")],-1),r={class:"list-inline text-center mb-0"},o={class:"list-inline-item"},b=Object(c["i"])("i",{class:"fab fa-facebook"},null,-1),d={class:"list-inline-item ms-2"},u=Object(c["i"])("i",{class:"fab fa-instagram"},null,-1),j=Object(c["i"])("li",{class:"list-inline-item ms-2"},[Object(c["i"])("a",{class:"text-light",href:"https://github.com/boris0510",target:"_blank"},[Object(c["i"])("i",{class:"fab fa-github"})])],-1);function O(t,e){return Object(c["w"])(),Object(c["e"])("footer",l,[Object(c["i"])("div",s,[n,i,Object(c["i"])("ul",r,[Object(c["i"])("li",o,[Object(c["i"])("a",{class:"text-light",href:"#",onClick:e[1]||(e[1]=Object(c["T"])((function(){}),["prevent"]))},[b])]),Object(c["i"])("li",d,[Object(c["i"])("a",{class:"text-light",href:"#",onClick:e[2]||(e[2]=Object(c["T"])((function(){}),["prevent"]))},[u])]),j])])])}const f={};f.render=O;e["a"]=f}}]);
//# sourceMappingURL=chunk-9646eaac.82b70c38.js.map
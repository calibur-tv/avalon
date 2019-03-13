exports.ids=[49],exports.modules={242:function(e,t){},267:function(e,t,r){"use strict";r.r(t);var n=r(242),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=o.a},270:function(e,t,r){"use strict";var n={name:"TabContainer",props:{list:{type:Array,required:!0},def:{type:String,default:"0"},pos:{type:String,default:"top"},route:{type:Boolean,default:!0},title:{type:String,default:""}},data(){return{current:this.def}},mounted(){this.route&&(this.current=this.$route.name,this.$watch("$route",e=>{this.current=e.name}))},methods:{tabClick(i){this.route?this.go(i.name):this.$emit("change",this.title?i.index-1:i.index-0)},go(e){const t=e||"homepage";this.$router.push({name:t,params:this.$route.params})}}},o=r(0);var component=Object(o.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-tabs",{staticClass:"tab-container",attrs:{"tab-position":e.pos},on:{"tab-click":e.tabClick},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[e.title?r("el-tab-pane",{attrs:{label:e.title,disabled:!0,name:e.title}}):e._e(),e._v(" "),e._l(e.list,function(i,t){return r("el-tab-pane",{key:t,attrs:{label:i.label,name:e.route?i.name:""+t}},[e.route?e._e():e._t(""+t)],2)})],2)},[],!1,function(e){var t=r(267);t.__inject__&&t.__inject__(e)},null,"62d4b4c2");t.a=component.exports},382:function(e,t){},383:function(e,t){},475:function(e,t){},476:function(e,t){},477:function(e,t,r){"use strict";r.r(t);var n=r(382),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=o.a},478:function(e,t,r){"use strict";r.r(t);var n=r(383),o=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=o.a},508:function(e,t,r){"use strict";r.r(t);r(475),r(2);var n=r(221),o=r.n(n),l=r(222),c=r.n(l),v=(r(476),{name:"ImageCropper",components:{croppa:c.a.component},props:{width:{type:Number,default:200},height:{type:Number,default:200},autoSize:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sizeLimit:{type:Number,default:0},initImage:{type:String,default:""},type:{type:String,default:"normal",validator:e=>~["avatar","normal"].indexOf(e)},uploading:{type:Boolean,default:!1}},data:()=>({croppa:{}}),methods:{onInit(){"avatar"===this.type&&this.croppa.addClipPlugin(function(e,t,r,n,o){e.beginPath(),e.arc(t+n/2,r+o/2,n/2,0,2*Math.PI,!0),e.closePath()})},async generateImage(){const e=await this.croppa.promisedBlob(),t=new FormData;t.append("file",e),this.$emit("submit",t)}}}),h=r(0);var d=Object(h.a)(v,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image-cropper-wrap"},[r("croppa",{attrs:{width:e.width,height:e.height,"auto-sizing":e.autoSize,"show-remove-button":!1,"prevent-white-space":!0,disabled:e.disabled||e.uploading,"file-size-limit":e.sizeLimit,"zoom-speed":"avatar"===e.type?6:2,"initial-image":e.initImage,accept:"image/png, image/jpeg, image/jpg, image/x-png, image/gif","canvas-color":"rgba(0, 0, 0, .05)"},on:{init:e.onInit},model:{value:e.croppa,callback:function(t){e.croppa=t},expression:"croppa"}}),e._ssrNode(' <div class="tools"></div> '),r("el-button",{staticClass:"submit-btn",attrs:{loading:e.uploading,type:"primary",size:"small",round:""},on:{click:e.generateImage}},[e._v("\n    确认\n  ")])],2)},[],!1,function(e){var t=r(477);t.__inject__&&t.__inject__(e)},null,"95a4a7f0").exports,_=r(270),m=r(74),f=r(73),C=r(3),y=r(5),w={name:"UserShowLayout",components:{TabContainer:_.a,ImageCropper:d,UserSex:m.a,UserBadge:f.a,"el-progress":o.a},data:()=>({avatarCropper:{src:"",type:"",showModal:!1,loading:!1,file:null},bannerSelector:{file:null,image:"",showBar:!1,loading:!1},signDayLoading:!1}),computed:{zone(){return this.$route.params.zone},isMe(){return!!this.$store.state.login&&this.zone===this.self.zone},self(){return this.$store.state.user},showUser(){return this.$store.state.users.show},blockedAt(){return this.showUser.banned_to},userPower(){return this.showUser.power},user(){return this.isMe?this.self:this.showUser},badges(){return this.$store.state.users.show.badge},daySigned(){return this.self.daySign},coinCount(){return parseFloat(this.showUser.banlance.coin_count).toFixed(2)},lightCount(){return parseFloat(this.showUser.banlance.light_count).toFixed(2)},cards(){return[{label:"番剧",name:"user-zone-bangumi",show:!0},{label:"帖子",name:"user-zone-post",show:!0},{label:"相册",name:"user-zone-pins",show:!0},{label:"漫评",name:"user-zone-review",show:!0},{label:"问答",name:"user-zone-qaq",show:!0},{label:"偶像",name:"user-zone-role",show:!0},{label:"收藏",name:"user-zone-mark",show:this.isMe},{label:"草稿",name:"user-zone-draft",show:this.isMe},{label:"设置",name:"user-zone-setting",show:this.isMe}].filter(e=>e.show)},expPercent(){return this.isMe?parseInt(this.user.exp.have_exp/this.user.exp.next_level_exp*100,10):0}},asyncData:({app:e,store:t,params:r,error:n})=>Object(C.k)(e,{zone:r.zone}).then(data=>{t.commit("users/SET_USER_INFO",data)}).catch(e=>{n({statusCode:e.statusCode,message:e.message})}),head(){return{title:this.user.nickname}},methods:{openAvatarModal(e){const t=e.target.files[0];if(!t)return void this.$toast.error("请先选择一张图片");if(-1===["image/jpeg","image/png","image/jpg","image/gif"].indexOf(t.type))return void this.$toast.error("仅支持 jpg / jpeg / png / gif 格式的图片");const r=new FileReader;this.avatarCropper.type=t.type,this.avatarCropper.file=t,r.onload=(e=>{this.avatarCropper.src=e.target.result,this.avatarCropper.showModal=!0}),r.readAsDataURL(t)},handleAvatarCropperCancel(){this.avatarCropper.showModal=!1,this.$nextTick(()=>{this.$refs.avatarInput.value=""})},async handleAvatarCropperSubmit(e){this.avatarCropper.loading=!0;const t=this.$utils.createFileName({userId:this.user.id,type:"avatar",file:this.avatarCropper.file});try{await this.$store.dispatch("getUpToken",this),e.append("token",this.user.uptoken.upToken),e.append("key",t);const r=await Object(y.l)(this,e);await Object(C.u)(this,{type:"avatar",url:r.url}),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:`https://image.calibur.tv/${r.url}`}),this.$toast.success("头像更新成功")}catch(e){"string"==typeof e?this.$toast.error(e):this.$toast.error("头像更新失败，请刷新页面重试或选择其他图片")}finally{this.avatarCropper.loading=!1,this.handleAvatarCropperCancel()}},selectBanner(e){const t=e.target.files[0];if(!t)return void this.$toast.error("请先选择一张图片");if(-1===["image/jpeg","image/png","image/jpg","image/gif"].indexOf(t.type))return void this.$toast.error("仅支持 jpg / jpeg / png / gif 格式的图片");const r=new FileReader;this.bannerSelector.file=t,r.onload=(e=>{this.bannerSelector.image=e.target.result,this.bannerSelector.showBar=!0}),r.readAsDataURL(t)},cancelBannerChange(){this.bannerSelector.showBar=!1,this.$nextTick(()=>{this.$refs.bannerInput.value=""})},async submitBannerChange(e){this.bannerSelector.loading=!0;const t=this.$utils.createFileName({userId:this.user.id,type:"banner",file:this.bannerSelector.file});try{await this.$store.dispatch("getUpToken",this),e.append("token",this.user.uptoken.upToken),e.append("key",t);const r=await Object(y.l)(this,e);await Object(C.u)(this,{type:"banner",url:r.url}),this.$store.commit("UPDATE_USER_INFO",{key:"banner",value:`https://image.calibur.tv/${r.url}`}),this.$toast.success("背景更新成功")}catch(e){"string"==typeof e?this.$toast.error(e):this.$toast.error("背景图更新失败，请刷新页面重试或选择其他图片")}finally{this.bannerSelector.loading=!1,this.cancelBannerChange()}},async handleDaySign(){if(this.daySigned)this.$toast.info("今天已经签过到了！");else if(!this.signDayLoading){this.signDayLoading=!0;try{const e=await this.$store.dispatch("users/daySign");this.$store.commit("UPDATE_USER_INFO",{key:"daySign",value:!0}),this.$store.commit("UPDATE_USER_INFO",{key:"coin",value:this.coinCount+1}),this.$store.commit("UPDATE_USER_EXP",e.exp),this.$toast.success(e.message)}catch(e){}finally{this.signDayLoading=!1}}},handleCopySuccess(){this.$toast.success("邀请链接已复制，快去分享吧~")},convertUserSex(e){let t="";switch(e){case 0:t="未知";break;case 1:t="男";break;case 2:t="女";break;case 3:t="伪娘";break;case 4:t="药娘";break;case 5:t="扶她";break;default:t="未知"}return t}}};var x=Object(h.a)(w,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-show"}},[r("v-header",{attrs:{banner:e.user.banner,type:"mask",height:"400px"}},[r("div",{staticClass:"banner-container",class:{"my-banner":e.isMe}},[e.isMe?r("div",{staticClass:"banner-cropper-wrap"},[e.bannerSelector.showBar?[r("image-cropper",{attrs:{"init-image":e.bannerSelector.image,uploading:e.bannerSelector.loading,"auto-size":!0},on:{submit:e.submitBannerChange}}),e._v(" "),r("div",{staticClass:"banner-select-bar"},[r("p",[e._v("确认要更换主页背景图吗（拖动图片可裁剪，鼠标滚动可缩放）?")]),e._v(" "),r("el-button",{attrs:{disabled:e.bannerSelector.loading,type:"text"},on:{click:e.cancelBannerChange}},[e._v("\n              取消\n            ")])],1)]:r("div",{staticClass:"banner-file-input file-input bg"},[r("input",{ref:"bannerInput",attrs:{accept:"image/png, image/jpeg, image/jpg, image/x-png, image/gif",type:"file"},on:{change:e.selectBanner}})])],2):e._e(),e._v(" "),e.isMe?[r("div",{staticClass:"avatar bg file-input",style:{backgroundImage:"url("+e.$resize(e.user.avatar,{width:200,height:200})+")"}},[r("input",{ref:"avatarInput",attrs:{accept:"image/png, image/jpeg, image/jpg, image/x-png, image/gif",type:"file"},on:{change:e.openAvatarModal}})]),e._v(" "),r("v-dialog",{staticClass:"avatar-cropper-modal",attrs:{footer:!1,width:"400px",title:"头像裁剪"},on:{cancel:e.handleAvatarCropperCancel},model:{value:e.avatarCropper.showModal,callback:function(t){e.$set(e.avatarCropper,"showModal",t)},expression:"avatarCropper.showModal"}},[e.avatarCropper.showModal?r("image-cropper",{attrs:{"init-image":e.avatarCropper.src,uploading:e.avatarCropper.loading,width:358,height:358,type:"avatar"},on:{submit:e.handleAvatarCropperSubmit}}):e._e()],1)]:r("img",{staticClass:"avatar",attrs:{src:e.$resize(e.user.avatar,{width:200,height:200}),alt:"avatar"}}),e._v(" "),r("span",{staticClass:"nickname"},[e._v("\n        "+e._s(e.user.nickname)+"\n        "),e.isMe?[r("user-sex",{attrs:{sex:e.convertUserSex(e.user.sex),secret:e.user.sexSecret}}),e._v(" "),r("span",{staticClass:"level"},[e._v(" Lv"+e._s(e.user.exp.level)+" ")])]:[r("user-sex",{attrs:{sex:e.user.sex,secret:e.user.sexSecret}}),e._v(" "),r("span",{staticClass:"level"},[e._v(" Lv"+e._s(e.user.level)+" ")])],e._v(" "),r("span",{staticClass:"level"},[e._v("  · 战斗力："+e._s(e.userPower)+" ")]),e._v(" "),r("span",{staticClass:"level"},[e._v("  · 邀请码："+e._s(e.user.id)+" ")])],2),e._v(" "),e.isMe?r("el-popover",{attrs:{placement:"right",width:"250",trigger:"hover","popper-class":"exp-detail"}},[r("div",{staticClass:"content"},[r("v-hr",{attrs:{text:"我的等级"}}),e._v(" "),r("p",[e._v("\n            当前等级："),r("span",[e._v(e._s(e.user.exp.level))])]),e._v(" "),r("p",[e._v("\n            距离升级："),r("span",[e._v(e._s(e.user.exp.have_exp)+" / "+e._s(e.user.exp.next_level_exp))])]),e._v(" "),r("v-hr",{attrs:{text:"升级方法"}}),e._v(" "),r("ul",[r("li",[e._v("每日签到：+2")]),e._v(" "),r("li",[e._v("发帖子：+4")]),e._v(" "),r("li",[e._v("写漫评：+5")]),e._v(" "),r("li",[e._v("写回答：+4")]),e._v(" "),r("li",[e._v("传图片（限图片区）：+3")]),e._v(" "),r("li",[e._v("提问题（限问答区）：+3")]),e._v(" "),r("li",[e._v("写评论（包括跟帖）：+2")]),e._v(" "),r("li",[e._v("回复评论：+1")]),e._v(" "),r("li",[e._v("获得喜欢：+2")]),e._v(" "),r("li",[e._v("获得收藏：+2")]),e._v(" "),r("li",[e._v("获得团子：+3")])]),e._v(" "),r("v-hr",{attrs:{text:"其它提醒"}}),e._v(" "),r("p",[e._v("评论/回复自己的内容不会获得经验")]),e._v(" "),r("p",[e._v("少于15字的内容，是没有经验的")]),e._v(" "),r("p",[e._v("如果内容被删除，会掉经验和等级")])],1),e._v(" "),r("div",{staticClass:"exp-container",attrs:{slot:"reference"},slot:"reference"},[r("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.expPercent,color:"#f25d8e"}})],1)]):e._e(),e._v(" "),r("p",{staticClass:"signature",domProps:{textContent:e._s(e.user.signature)}})],2)]),e._ssrNode(" "),r("v-layout",{staticClass:"flow-container"},[e.user.faker?r("div",{staticClass:"faker-tips"},[r("span",[e._v("重要提醒")]),e._v(" "),r("p",[e._v("这是一个运营号，并非本人，该账号下所有信息都是搬运而来")]),e._v(" "),r("p",[e._v("\n        如果你就是该账号本人，可以联系网站工作人员拿回该账号，该账号通过搬运资源获得的团子也将归你所有\n      ")]),e._v(" "),r("p",[e._v("当然，你也有权要求我们删除所有你的内容")])]):e._e(),e._v(" "),e.blockedAt?r("div",{staticClass:"faker-tips"},[r("span",[e._v("该用户已被禁言，禁言至："+e._s(e.blockedAt)+"，可能是由于以下原因：")]),e._v(" "),r("p",[e._v("1. 破坏社区环境，包括但不限于：无脑刷屏、复制他人内容来发表")]),e._v(" "),r("p",[e._v("2. 恶意带节奏")]),e._v(" "),r("p",[e._v("3. 发表于二次元无关的内容")]),e._v(" "),r("p",[e._v("4. 其它原因还没想好，希望大家引以为戒")])]):e._e(),e._v(" "),r("div",{staticClass:"user-flows-wrap"},[r("tab-container",{attrs:{list:e.cards,def:"user-bangumi",pos:"left"}}),e._v(" "),r("div",{staticClass:"route-container"},[r("router-view")],1)],1),e._v(" "),r("template",{slot:"aside"},[r("div",{staticClass:"coin-panel"},[r("h2",{staticClass:"sub-title"},[e._v("\n          虚拟币\n          "),e.isMe?r("button",{staticClass:"sign-btn",class:{"day-signed":e.daySigned},on:{click:e.handleDaySign}},[e._v("\n            "+e._s(e.daySigned?"已签到":"签到")+"\n          ")]):e._e()]),e._v(" "),r("div",[r("div",{staticClass:"item"},[r("strong",[e._v(e._s(e.coinCount))]),e._v(" "),r("div",[e._v("团子")])]),e._v(" "),r("div",{staticClass:"item"},[r("strong",[e._v(e._s(e.lightCount))]),e._v(" "),r("div",[e._v("光玉")])])]),e._v(" "),r("div",{staticClass:"intro"},[r("p",[e._v("团子类似于Q币，1团子=1Q币，可在站内流通")]),e._v(" "),r("p",[e._v("光玉就是可提现的团子，只能从别人的投食中获得")])])]),e._v(" "),r("div",{staticClass:"invite-code"},[r("h2",{staticClass:"sub-title"},[e._v("\n          邀请码\n        ")]),e._v(" "),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:"http://calibur.tv/about/invite/"+e.user.id,expression:"`http://calibur.tv/about/invite/${user.id}`"}],on:{success:e.handleCopySuccess}},[e._v("\n          点击复制邀请码\n        ")]),e._v(" "),r("p",[e._v("其他人使用你的邀请码注册，你就能获得团子奖励")])]),e._v(" "),e.badges.length?[r("h2",{staticClass:"sub-title"},[e._v("\n          徽章墙\n        ")]),e._v(" "),r("ul",e._l(e.badges,function(t){return r("user-badge",{key:t.id,attrs:{item:t,"user-id":e.user.id}})}),1)]:e._e()],2)],2)],2)},[],!1,function(e){var t=r(478);t.__inject__&&t.__inject__(e)},null,"c2442186");t.default=x.exports}};
//# sourceMappingURL=_zone.chunk.98a6de3c.js.map
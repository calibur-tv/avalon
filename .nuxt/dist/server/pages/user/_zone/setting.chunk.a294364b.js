exports.ids=[59],exports.modules={353:function(t,e){},390:function(t,e){},485:function(t,e,r){"use strict";r.r(e);var n=r(390),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},532:function(t,e,r){"use strict";r.r(e);r(353),r(2);var n=r(210),o=r.n(n),l=r(3),c={name:"UserSetting",components:{"el-date-picker":o.a},data:()=>({submitting:!1,rule:{nickname:[{validator:(t,e,r)=>{const n=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;n?n<2?r(new Error("昵称至少为2个字符")):n>14&&r(new Error("昵称不能超过14个字符")):r(new Error("昵称不能为空")),r()},trigger:"submit"}],signature:[{validator:(t,e,r)=>{e.length>150&&r(new Error("签名最多 150 个字")),r()},trigger:"submit"}],birthday:[{validator:(t,e,r)=>{const n=new Date(e).getTime(),o=Date.now();n>=o?r(new Error("。。。")):o-n<31536e7?r(new Error("你应该大于10岁了吧...?")):o-n>126144e7&&r(new Error("你应该小于40岁的吧...?")),r()},trigger:"submit"}]},phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},isMine(){return this.user.zone===this.$route.params.zone},nickname:{get(){return this.user.nickname},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:t})}},birthday:{get(){return this.user.birthday},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:t})}},birthSecret:{get(){return this.user.birthSecret},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"birthSecret",value:t})}},sex:{get(){return this.user.sex},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:t})}},sexSecret:{get(){return this.user.sexSecret},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"sexSecret",value:t})}},signature:{get(){return this.user.signature},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:t.trim()})}}},methods:{submit(){this.$refs.form.validate(async t=>{if(!t)return!1;if(!this.submitting){this.submitting=!0;try{await Object(l.v)(this,{nickname:this.nickname,signature:this.signature,birthday:new Date(this.birthday).getTime()/1e3,birth_secret:this.birthSecret,sex_secret:this.sexSecret,sex:this.sex}),this.$toast.success("设置成功")}catch(t){}finally{this.submitting=!1}}})},bindUserPhone(){this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(({value:t})=>{this.phone=t,this.$captcha({ctx:this,success:async({data:data})=>{try{await Object(l.t)(this,{type:"bind_phone",phone_number:t,geetest:data}),this.showInfoForm=!0}catch(t){}finally{this.timeout=60;const t=setInterval(()=>{--this.timeout||clearInterval(t)},1e3)}}})}).catch(()=>{}))},async submitBindPhone(){if(!this.user.providers.bind_phone){if(6!==this.authCode.length)return this.$toast.warn("请输入正确的短信验证码");if(this.password.length<6)return this.$toast.warn("密码不能小于6位");if(this.password.length>16)return this.$toast.warn("密码不能大于16位");if(!this.loadingBindPhone){this.loadingBindPhone=!0;try{await Object(l.a)(this,{id:this.user.id,phone:this.phone,password:this.password,authCode:this.authCode}),this.$toast.success("手机号绑定成功").then(()=>{this.showInfoForm=!1,window.location.reload()})}catch(t){}finally{this.loadingBindPhone=!1}}}}}},h=r(0);var component=Object(h.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-setting"}},[t.isAuth?r("el-form",{ref:"form",attrs:{disabled:t.submitting,model:t.user,rules:t.rule,"label-width":"50px"}},[r("el-alert",{attrs:{type:"info",title:"","show-icon":""}},[r("p",[t._v("\n        填写正确的性别和生日有助于网站对你番剧喜好的分析，在未来我们有可能根据你的喜好来推荐合适的番剧\n      ")]),t._v(" "),r("p",[t._v("\n        如果你担心自己的性别和生日被其他用户知道，可以勾选"),r("strong",[t._v("私密")]),t._v("，这样我们只会在推荐系统中用到你的数据\n      ")])]),t._v(" "),r("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[r("el-input",{model:{value:t.nickname,callback:function(e){t.nickname="string"==typeof e?e.trim():e},expression:"nickname"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[r("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}}),t._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置为私密后将不对外公开",placement:"top"}},[r("i",{staticClass:"el-icon-question"})]),t._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:t.birthSecret,callback:function(e){t.birthSecret=e},expression:"birthSecret"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[r("el-radio",{attrs:{label:1}},[t._v("男")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("女")]),t._v(" "),r("el-radio",{attrs:{label:3}},[t._v("伪娘")]),t._v(" "),r("el-radio",{attrs:{label:4}},[t._v("药娘")]),t._v(" "),r("el-radio",{attrs:{label:5}},[t._v("扶她")])],1),t._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置为私密后将不对外公开",placement:"top"}},[r("i",{staticClass:"el-icon-question"})]),t._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:t.sexSecret,callback:function(e){t.sexSecret=e},expression:"sexSecret"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"签名",prop:"signature"}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:"用简单的言语，表达深刻的心"},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"绑定"}},[r("div",{staticClass:"providers"},[r("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/qq?from=bind&id="+t.user.id+"&zone="+t.user.zone}},[r("i",{staticClass:"iconfont icon-qq",class:{"is-bind":t.user.providers.bind_qq}})]),t._v(" "),r("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/wechat?from=bind&id="+t.user.id+"&zone="+t.user.zone}},[r("i",{staticClass:"iconfont icon-v-chat",class:{"is-bind":t.user.providers.bind_wechat}})]),t._v(" "),r("a",{attrs:{href:"javascript:;"},on:{click:t.bindUserPhone}},[r("i",{staticClass:"iconfont icon-phone",class:{"is-bind":t.user.providers.bind_phone}})])])]),t._v(" "),r("el-form-item",[r("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)],1):t._e(),t._ssrNode(" "),r("v-dialog",{attrs:{width:"400px",title:"填写信息"},on:{submit:t.submitBindPhone},model:{value:t.showInfoForm,callback:function(e){t.showInfoForm=e},expression:"showInfoForm"}},[r("el-input",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:t.authCode,callback:function(e){t.authCode="string"==typeof e?e.trim():e},expression:"authCode"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("el-input",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.password,callback:function(e){t.password="string"==typeof e?e.trim():e},expression:"password"}})],1)],2)},[],!1,function(t){var e=r(485);e.__inject__&&e.__inject__(t)},null,"37ab8604");e.default=component.exports}};
//# sourceMappingURL=setting.chunk.a294364b.js.map
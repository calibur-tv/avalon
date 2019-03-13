exports.ids=[36],exports.modules={259:function(t,e){},260:function(t,e){},261:function(t,e){},262:function(t,e){},263:function(t,e){},264:function(t,e){},265:function(t,e){},289:function(t,e,n){"use strict";n.r(e);var r=n(259),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},290:function(t,e,n){"use strict";n.r(e);var r=n(260),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},291:function(t,e,n){"use strict";n.r(e);var r=n(261),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},292:function(t,e,n){"use strict";n.r(e);var r=n(262),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},293:function(t,e,n){"use strict";n.r(e);var r=n(263),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},294:function(t,e,n){"use strict";n.r(e);var r=n(264),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},295:function(t,e,n){"use strict";n.r(e);var r=n(265),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},299:function(t,e,n){"use strict";var r=n(204),o=n.n(r),c={name:"JsonItem",props:{item:{type:Object,required:!0},selected:{type:Boolean,required:!0,default:!1},index:{type:Number,required:!0}},computed:{sectionCount(){return this.$store.state.editor.sections.length}},methods:{emitPreview(){this.$emit("preview",{index:this.index})},emitCreate(t){this.$emit("create",{index:this.index,type:t})},emitDelete(){this.$emit("delete",{index:this.index})},emitSort(){this.$emit("sort",{index:this.index})},computeList(text){let t=text;for(;/\n\n/.test(t);)t=t.replace(/\n\n/g,"\n");return t.split("\n").slice(0,4)}}},l=n(0);var d=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-item",class:[{selected:t.selected},"json-item-"+t.index]},[t.selected&&t.sectionCount>1?n("el-button",{staticClass:"delete-btn",attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:t.emitDelete}}):t._e(),t._ssrNode(" "),t.selected&&t.index?n("el-button",{staticClass:"up-btn",attrs:{icon:"el-icon-arrow-up",size:"mini",circle:""},on:{click:t.emitSort}}):t._e(),t._ssrNode(' <div class="show-area"><div class="capture">'+("img"===t.item.type?(t.item.url?'<div class="poster"'+t._ssrStyle(null,{backgroundImage:"url("+t.$resize(t.item.url,{width:150})+")"},null)+"></div>":"\x3c!----\x3e")+" "+(t.item.url?"\x3c!----\x3e":'<div class="default green"><i class="iconfont icon-image"></i></div>'):"txt"===t.item.type?'<div class="default yellow"><i class="iconfont icon-text"></i></div>':"list"===t.item.type?'<div class="default blue"><i class="iconfont icon-list"></i></div>':"use"===t.item.type?'<div class="default pink"><i class="iconfont icon-use"></i></div>':"title"===t.item.type?'<div class="default purple"><i class="iconfont icon-title"></i></div>':"\x3c!----\x3e")+'</div> <div class="content">'+("txt"===t.item.type?t.item.text?'<div class="text line-4">'+t._s(t.item.text)+"</div>":'<div class="text">\n          点击添加文字\n        </div>':"img"===t.item.type?t.item.text?'<div class="text line-4">'+t._s(t.item.text)+"</div>":t.item.url?'<div class="text">\n          点击编辑图片\n        </div>':'<div class="text">\n          点击上传图片\n        </div>':"list"===t.item.type?t.item.text?'<div class="text line-4">'+("1"===t.item.sort?"<ol>"+t._ssrList(t.computeList(t.item.text),function(li,e){return'<li><span class="oneline">'+t._ssrEscape(t._s(li))+"</span></li>"})+"</ol>":"<ul>"+t._ssrList(t.computeList(t.item.text),function(li,e){return'<li><span class="oneline">'+t._ssrEscape(t._s(li))+"</span></li>"})+"</ul>")+"</div>":'<div class="text">\n          点击添加列表\n        </div>':"use"===t.item.type?t.item.text?'<blockquote class="text line-4">'+t._s(t.item.text)+"</blockquote>":'<div class="text">\n          点击添加引用内容\n        </div>':"\x3c!----\x3e")+" "+("title"===t.item.type?t.item.text?'<div class="text line-4">'+t._s(t.item.text)+"</div>":'<div class="text">\n          点击添加标题\n        </div>':"\x3c!----\x3e")+"</div></div> "),t._ssrNode('<div class="append-area">',"</div>",[n("el-tooltip",{attrs:{content:"添加文本段落",placement:"top",effect:"dark"}},[n("el-button",{attrs:{type:"warning",icon:"iconfont icon-text",circle:"",plain:"",size:"mini"},on:{click:function(e){return t.emitCreate("txt")}}})],1),t._ssrNode(" "),n("el-tooltip",{attrs:{content:"添加图片段落",placement:"top",effect:"dark"}},[n("el-button",{attrs:{type:"success",icon:"iconfont icon-image",circle:"",plain:"",size:"mini"},on:{click:function(e){return t.emitCreate("img")}}})],1),t._ssrNode(" "),n("el-tooltip",{attrs:{content:"添加列表段落",placement:"top",effect:"dark"}},[n("el-button",{attrs:{type:"primary",icon:"iconfont icon-list",circle:"",plain:"",size:"mini"},on:{click:function(e){return t.emitCreate("list")}}})],1),t._ssrNode(" "),n("el-tooltip",{attrs:{content:"添加引用段落",placement:"top",effect:"dark"}},[n("el-button",{attrs:{type:"danger",icon:"iconfont icon-use",circle:"",plain:"",size:"mini"},on:{click:function(e){return t.emitCreate("use")}}})],1),t._ssrNode(" "),n("el-tooltip",{attrs:{content:"添加小标题",placement:"top",effect:"dark"}},[n("el-button",{attrs:{type:"info",icon:"iconfont icon-title",circle:"",plain:"",size:"mini"},on:{click:function(e){return t.emitCreate("title")}}})],1)],2)],2)},[],!1,function(t){var e=n(289);e.__inject__&&e.__inject__(t)},null,"72cc0eb2").exports,m={name:"ImgPreview",mixins:[n(6).a],props:{item:{required:!0,type:Object}},data:()=>({saving:!1}),computed:{desc:{get(){return this.item.text},set(t){this.$store.commit("editor/UPDATE_SECTION_TEXT",{value:t})}}},mounted(){this.getUpToken(),this.$channel.$on("write-save-done",()=>{this.saving=!1})},methods:{handleImageUploadSuccess(t){this.$store.commit("editor/UPDATE_SECTION_IMAGE",{url:t.data.url,width:t.data.width,height:t.data.height,size:t.data.size,mime:t.data.type}),this.$toast.success("上传成功")},beforeUpload(t){return this.uploadConfig.max=5,this.uploadConfig.pathPrefix=`user/${this.$store.state.user.id}/create`,this.beforeImageUpload(t)},emitSave(){this.item.url&&(this.$channel.$emit("write-save"),this.saving=!0)}}};var h=Object(l.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"image-preview"},[t._ssrNode('<div class="body">',"</div>",[t.item.url?t._ssrNode('<div class="wrapper">',"</div>",[n("v-img",{attrs:{src:t.item.url,width:t.item.width,height:t.item.height,blur:!0,full:!0,lazy:!1}}),t._ssrNode(" "),n("el-input",{staticClass:"focus-textarea mousetrap",attrs:{maxlength:"45",placeholder:"添加图片描述"},model:{value:t.desc,callback:function(e){t.desc="string"==typeof e?e.trim():e},expression:"desc"}})],2):n("el-upload",{staticClass:"uploader",attrs:{data:t.uploadHeaders,action:t.imageUploadAction,accept:t.imageUploadAccept,"before-upload":t.beforeUpload,"on-success":t.handleImageUploadSuccess,drag:""}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("将图片拖到此处，或"),n("em",[t._v("点击上传")])])])],1),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[n("el-upload",{staticStyle:{display:"inline-block","margin-right":"10px"},attrs:{data:t.uploadHeaders,action:t.imageUploadAction,accept:t.imageUploadAccept,"show-file-list":!1,"before-upload":t.beforeUpload,"on-success":t.handleImageUploadSuccess}},[t.item.url?n("el-button",{attrs:{size:"small",plain:"",round:""}},[t._v("\n        更换图片\n      ")]):t._e()],1),t._ssrNode(" "),t.item.url?n("el-button",{staticClass:"save-btn",attrs:{size:"small",type:"primary",round:""},on:{click:t.emitSave}},[t._v("\n      保存\n    ")]):t._e()],2)],2)},[],!1,function(t){var e=n(290);e.__inject__&&e.__inject__(t)},null,"6395b238").exports,v={name:"TxtPreview",props:{item:{required:!0,type:Object}},data:()=>({saving:!1}),computed:{text:{get(){return this.item.text.replace(/<br>/g,"\n")},set(t){this.$store.commit("editor/UPDATE_SECTION_TEXT",{value:t.replace(/\n/g,"<br>")})}}},mounted(){this.$channel.$on("write-save-done",()=>{this.saving=!1})},methods:{emitSave(){this.text.replace(/\n/g,"")&&(this.$channel.$emit("write-save"),this.saving=!0)}}};var _=Object(l.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-preview"},[this._ssrNode('<div class="text-area"><textarea placeholder="添加文字内容" class="focus-textarea mousetrap"></textarea></div>')])},[],!1,function(t){var e=n(291);e.__inject__&&e.__inject__(t)},null,"8877ed2a").exports,f={name:"ListPreview",props:{item:{required:!0,type:Object}},data:()=>({saving:!1}),computed:{text:{get(){return this.item.text.replace(/<br>/g,"\n")},set(t){this.$store.commit("editor/UPDATE_SECTION_TEXT",{value:t})}},sort:{get(){return"1"===this.item.sort},set(t){this.$store.commit("editor/UPDATE_SECTION_SORT",{value:t?"1":"0"})}}},mounted(){this.$channel.$on("write-save-done",()=>{this.saving=!1})},methods:{textAreaFocus(){this.text.length<100&&(document.body.scrollTop=0)},emitSave(){this.text.replace(/\n/g,"")&&(this.$channel.$emit("write-save"),this.saving=!0)}}};var x=Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-preview"},[t._ssrNode('<div class="sort-wrap">',"</div>",[t._ssrNode("<span>"+t._ssrEscape("顺序："+t._s(t.sort?"有序":"无序"))+"</span> "),n("el-switch",{model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],2),t._ssrNode(' <div class="content-wrap"><pre class="shim">'+t._s(t.item.text)+'</pre> <textarea placeholder="添加文字列表，回车分割" class="focus-textarea mousetrap"></textarea></div>')],2)},[],!1,function(t){var e=n(292);e.__inject__&&e.__inject__(t)},null,"bf4052b2").exports,$={name:"UsePreview",props:{item:{required:!0,type:Object}},data:()=>({saving:!1}),computed:{text:{get(){return this.item.text.replace(/<br>/g,"\n")},set(t){this.$store.commit("editor/UPDATE_SECTION_TEXT",{value:t.replace(/\n/g,"<br>")})}},title:{get(){return this.item.title},set(t){this.$store.commit("editor/UPDATE_SECTION_TITLE",{value:t})}}},mounted(){this.$channel.$on("write-save-done",()=>{this.saving=!1})},methods:{textAreaFocus(){this.text.length<100&&(document.body.scrollTop=0)},emitSave(){this.text.replace(/\n/g,"")&&(this.$channel.$emit("write-save"),this.saving=!0)}}};var w=Object(l.a)($,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-preview"},[this._ssrNode('<div class="text-area use-area"><textarea placeholder="添加文字内容" class="focus-textarea mousetrap"></textarea></div>')])},[],!1,function(t){var e=n(293);e.__inject__&&e.__inject__(t)},null,"fcabfc18").exports,y={name:"TxtPreview",props:{item:{required:!0,type:Object}},data:()=>({saving:!1}),computed:{text:{get(){return this.item.text},set(t){this.$store.commit("editor/UPDATE_SECTION_TEXT",{value:t})}}},mounted(){this.$channel.$on("write-save-done",()=>{this.saving=!1})},methods:{emitSave(){this.text.replace(/\n/g,"")&&(this.$channel.$emit("write-save"),this.saving=!0)}}};var C={name:"JsonEditorMain",components:{JsonItem:d,ImgPreview:h,TxtPreview:_,UsePreview:w,ListPreview:x,TitlePreview:Object(l.a)(y,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"title-preview"},[this._ssrNode('<input type="text" placeholder="段落小标题" maxlength="30"'+this._ssrAttr("value",this.text)+' class="title-input focus-textarea mousetrap">')])},[],!1,function(t){var e=n(294);e.__inject__&&e.__inject__(t)},null,"4f86adc3").exports},props:{},computed:{id(){return+(this.$route.query.id||0)},sections(){return this.$store.state.editor.sections},selectedIndex(){return this.$store.state.editor.selectedIndex},curPreview(){return this.sections[this.selectedIndex]}},mounted(){this.$channel.$on("write-save",(t=!1)=>{const e=this.getRichContent();e.length?this.$emit("submit",{content:e,desc:this.getPureContent(),publish:!1,id:this.id,auto:t}):this.$toast.info("内容不能为空！")}),this.$channel.$on("write-publish",()=>{const t=this.getRichContent();t.length?this.$emit("submit",{content:t,desc:this.getPureContent(),publish:!0,id:this.id}):this.$toast.info("内容不能为空！")}),o.a.bind(["command+s","ctrl+s"],()=>(this.id&&this.$channel.$emit("write-save",!0),!1))},methods:{getRichContent(){const t=[];return this.sections.forEach(e=>{"img"===e.type?e.url&&t.push(e):"txt"===e.type?e.text&&t.push(e):"use"===e.type?e.text&&t.push(e):"list"===e.type?e.text&&t.push(e):"title"===e.type&&e.text&&t.push(e)}),t},getPureContent(){let t="";return this.sections.forEach(e=>{if("txt"===e.type&&e.text&&(t+=`${e.text.replace(/<br>/g,"\n")} `),"title"===e.type&&e.text&&(t+=`${e.text} `),"use"===e.type&&e.text&&(t+=`${e.text.replace(/<br>/g,"\n")} `),"list"===e.type&&e.text){(t=>{if(!t)return[];for(;/\n\n/.test(t);)t=t.replace(/\n\n/g,"\n");return t.split("\n")})(e.text).forEach((p,e)=>{t+=`${e+1}:${p} `})}}),t.slice(0,-1)},handleItemPreview({index:t}){this.$store.commit("editor/SWITCH_SECTION",{index:t}),this.focusTextareaAndScroll()},handleItemAppend({index:t,type:e}){this.$store.commit("editor/APPEND_SECTION",{index:t,type:e}),this.focusTextareaAndScroll(t)},handleItemDelete({index:t}){this.$store.commit("editor/DELETE_SECTION",{index:t})},handleItemSort({index:t}){this.$store.commit("editor/SORT_SECTION",{index:t})},focusTextareaAndScroll(t){this.$nextTick(()=>{const textarea=this.$el.querySelector(".focus-textarea");if(textarea&&textarea.focus(),t===this.sections.length-2){document.querySelector(`.json-item-${t}`)&&this.$scrollToY(300*(t+2),1e3,document.querySelector(".editor-tabs"))}})}}};var T=Object(l.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-editor-main"},[t._ssrNode('<div class="editor-tabs">',"</div>",[n("transition-group",{staticClass:"list-complete-wrap",attrs:{name:"list-complete",tag:"div"}},t._l(t.sections,function(e,r){return n("json-item",{key:e.id,staticClass:"list-complete-item",attrs:{item:e,index:r,selected:r===t.selectedIndex},on:{preview:t.handleItemPreview,create:t.handleItemAppend,delete:t.handleItemDelete,sort:t.handleItemSort}})}),1)],1),t._ssrNode(" "),n(t.curPreview.type+"-preview",{tag:"component",staticClass:"editor-preview",attrs:{item:t.curPreview}})],2)},[],!1,function(t){var e=n(295);e.__inject__&&e.__inject__(t)},null,"dd1f98d4");e.a=T.exports},332:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return l}),n.d(e,"f",function(){return d}),n.d(e,"c",function(){return m});const r=(t,{id:e,hash:n,time:time})=>t.$axios.$get(`score/${e}/show`,{params:{hash:n,time:time}}),o=(t,{id:e})=>t.$axios.$get(`score/${e}/edit`),c=(t,{id:e})=>t.$axios.$get("score/check",{params:{id:e}}),l=(t,e)=>t.$axios.$post("score/create",e),d=(t,e)=>t.$axios.$post("score/update",e),m=(t,{id:e})=>t.$axios.$post("score/delete",{id:e})},333:function(t,e){},434:function(t,e,n){"use strict";n.r(e);var r=n(333),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},522:function(t,e,n){"use strict";n.r(e);var r=n(299),o=n(332),c={name:"ScoreCreate",layout:"write",components:{JsonEditor:r.a},data(){const t={lol:"笑点",cry:"泪点",fight:"燃点",moe:"萌点",sound:"音乐",vision:"画面",story:"情节",role:"人设",express:"内涵",style:"美感"};return{openTips:!1,labelMap:t,columns:Object.keys(t),bangumiId:"",title:"",is_creator:!0,form:{lol:0,cry:0,fight:0,moe:0,sound:0,vision:0,story:0,role:0,express:0,style:0}}},computed:{id(){return this.$route.query.id},resource(){if(!this.id)return{};const t={};return Object.keys(this.$store.state.editor.resource).forEach(e=>{const n=this.$store.state.editor.resource[e];t[e]=-1!==this.columns.indexOf(e)?+n:n}),t},disabled(){return!!this.id},bid(){return this.$route.query.bid}},asyncData({app:t,store:e,query:n,error:r}){const{id:c}=n;if(c)return Object(o.d)(t,{id:c}).then(data=>{e.commit("editor/INIT_SECTION",data)}).catch(t=>{r({statusCode:t.statusCode,message:t.message})})},head:{title:"写漫评"},mounted(){this.id&&this.loadEditContent(),this.bid&&(this.bangumiId=+this.bid,this.handleBangumiSearch(this.bangumiId)),this.id||(window.isCloseHint=!0,window.onbeforeunload=function(t){if(window.isCloseHint)return(t=t||window.event)&&(t.returnValue="确定要关闭该页面吗?"),"确定要关闭该页面吗?"})},methods:{handleBangumiSearch(t){this.id||Object(o.a)(this,{id:t}).then(t=>{t&&this.$confirm("你已经给该番剧评过分了，不能重复评分","提示",{confirmButtonText:"查看我的评分",cancelButtonText:"换一个番剧",type:"warning"}).then(()=>{window.location.href=this.$alias.score(t)}).catch(()=>{this.bangumiId=""})})},beforeSubmit(t){if(!this.bangumiId)return void this.$toast.error("请先选择要评价的番剧");if(!this.title)return void this.$toast.error("标题为必填的");if(t.publish&&t.desc.length<400)return void this.$toast.error("漫评至少400字");const e={};let n=0;Object.keys(this.form).forEach(t=>{const r=this.form[t];e[t]=2*r,n+=r}),n?100!==n?t.id?this.submit(t,e):this.$captcha({ctx:this,success:({data:data})=>{this.submit(t,e,data)}}):this.$toast.error("请认真考虑后再发表"):this.$toast.error("请先选择各维度分值")},async submit(t,e,n={}){t.auto?this.$channel.$emit("auto-save",!0):this.$channel.$emit("write-submit",!0);try{const form=Object.assign({},e,{title:this.title,bangumi_id:this.bangumiId,content:t.content,intro:t.desc.substring(0,120),do_publish:t.publish,is_creator:this.is_creator,geetest:n});let r,c=t.id;c?(form.id=c,await Object(o.f)(this,form)):(r=await Object(o.b)(this,form),c=r.data),window.isCloseHint=!1,t.publish?this.$confirm(void 0!==r?r.message:"发布成功","提示",{confirmButtonText:"点击查看",cancelButtonText:"继续编辑",type:"warning"}).then(()=>{window.location.href=this.$alias.score(c)}).catch(()=>{}):(t.auto||this.$toast.success("保存成功"),t.id||setTimeout(()=>{window.location=this.$alias.editScore(c)},1e3))}catch(t){}finally{this.$channel.$emit("write-save-done"),t.auto?this.$channel.$emit("auto-save",!1):this.$channel.$emit("write-submit",!1)}},loadEditContent(){this.bangumiId=+this.resource.bangumi_id,this.title=this.resource.title,this.is_creator=this.resource.is_creator,this.columns.forEach(t=>{this.form[t]=this.resource[t]})}}},l=n(0);var component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"score-create"}},[t._ssrNode('<h3 class="sub-title">\n    番剧\n  </h3> '),n("bangumi-search",{staticClass:"bangumi-search",attrs:{followed:!0,disabled:t.disabled,placeholder:"选择要评价的番剧"},on:{search:t.handleBangumiSearch},model:{value:t.bangumiId,callback:function(e){t.bangumiId=e},expression:"bangumiId"}}),t._ssrNode(' <h3 class="sub-title">\n    标题\n  </h3> '),n("el-input",{staticClass:"title-input",attrs:{maxlength:"30",placeholder:"给你的文章起个好名字！"},model:{value:t.title,callback:function(e){t.title="string"==typeof e?e.trim():e},expression:"title"}}),t._ssrNode(" "),t.id?t._e():t._ssrNode('<div class="is-creator-wrap">',"</div>",[t._ssrNode('<h3 class="sub-title">\n      原创\n    </h3> '),n("el-tooltip",{attrs:{content:"如果这是你的原创作品，请勾选该选项",placement:"top"}},[n("el-switch",{model:{value:t.is_creator,callback:function(e){t.is_creator=e},expression:"is_creator"}})],1)],2),t._ssrNode(' <h3 class="sub-title">\n    评分\n    <i class="el-icon-question"></i></h3> '),t._ssrNode('<div class="star-row">',"</div>",t._l(t.columns,function(e,r){return t._ssrNode('<div class="star-item">',"</div>",[t._ssrNode('<div class="label">'+t._ssrEscape(t._s(t.labelMap[e]))+"</div> "),n("el-rate",{attrs:{"allow-half":""},model:{value:t.form[e],callback:function(n){t.$set(t.form,e,n)},expression:"form[item]"}})],2)}),0),t._ssrNode(" "),t.openTips?n("el-alert",{attrs:{title:"",type:"info"}},[n("p",[t._v("漫评系统简介：")]),t._v(" "),n("p",[t._v("\n      站长本人只能算是一个中度的动漫爱好者，对历史的动漫评分体系并没有做过深刻的研究，并且文学功底很差，因此实现的这个评分系统并不一定完美，如果你有好的意见可以通过QQ群联系到我向我反馈。\n    ")]),t._v(" "),n("p",[t._v("\n      评分系统由十个维度组成，每个维度最低0分，最高10分，因此总分是100分，然后除以\n      10 之后，得出在页面展示的「10分制」总分。\n    ")]),t._v(" "),n("p",[t._v("\n      在选取哪十个维度时，并无法做到完全的深思熟虑，因此可能会存在一些不合理的地方，还请大家见谅！\n    ")]),t._v(" "),n("p",[n("strong",[t._v("笑点")]),t._v("：这部作品是否让你开怀大笑了呢？虽然这个维度对「悲剧作品」不怎么友好，但有一部分喜剧它的核心其实源于悲剧。\n    ")]),t._v(" "),n("p",[n("strong",[t._v("泪点")]),t._v("：这部作品让你泪腺崩坏了吗？同样的，虽然这个维度对「喜剧作品」不怎么友好，但也存在一些笑着笑着忽然催人泪下的作品？\n    ")]),t._v(" "),n("p",[n("strong",[t._v("燃点")]),t._v("：这个不需要多余的解释，成为神话吧，少年！")]),t._v(" "),n("p",[n("strong",[t._v("萌点")]),t._v("：em.....大家现在对萌系的东西都很喜爱，所以就单独拿出来做了一个分类，如果这部作品中有可爱的角色，就给它加分吧！\n    ")]),t._v(" "),n("p",[n("strong",[t._v("音乐")]),t._v("：音乐包括：OP、ED、BGM、声优，是一个综合性的分类。\n    ")]),t._v(" "),n("p",[n("strong",[t._v("画面")]),t._v("：画面包括：静态的人物、建筑、风景的设计与精度，还包括动态的画面连贯性、帧率、特效等。\n    ")]),t._v(" "),n("p",[n("strong",[t._v("情节")]),t._v("：好的作品情节总是跌宕起伏、扑朔里面，基本猜不到下一步会发展成什么样子，并且叙事手法、伏笔运用都非常的精妙。\n    ")]),t._v(" "),n("p",[n("strong",[t._v("人设")]),t._v("：一些动漫角色的存在甚至成为了我们的人生信条、憧憬的方向、美的标准，如是纯粹的恶、超强的头脑、强大的意志力等，是作品的灵魂。\n    ")]),t._v(" "),n("p",[n("strong",[t._v("内涵")]),t._v("：作品所表达的世界观、价值观、人生观等，对人生的思考具有一定的引导价值。\n    ")]),t._v(" "),n("p",[n("strong",[t._v("美感")]),t._v("：有时候画质不是越好就越美，有些美具有一种艺术感，这种美可能是画面上的，可能是叙事的手法，可能是背景音乐。\n    ")]),t._v(" "),n("p",[t._v("\n      最后，一般情况下不存在0分的作品，如果你认为一部作品是0分，那就请放过它吧；也不存在满分的作品，如果你认为一部作品达到了满分，可能是你的阅片量还太少，需要再接再厉，(๑•̀ㅂ•́)و✧！\n    ")])]):t._e(),t._ssrNode(' <h3 class="sub-title">\n    正文\n  </h3> '),n("json-editor",{on:{submit:t.beforeSubmit}})],2)},[],!1,function(t){var e=n(434);e.__inject__&&e.__inject__(t)},null,"0ff8050d");e.default=component.exports}};
//# sourceMappingURL=create.chunk.98c34b41.js.map
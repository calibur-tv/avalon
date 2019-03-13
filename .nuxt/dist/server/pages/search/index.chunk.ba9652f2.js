exports.ids=[47],exports.modules={232:function(t,e){t.exports={"image-preview":"image-preview-2_",imagePreview:"image-preview-2_",container:"container-34",bar:"bar-1j","top-bar":"top-bar-1d",topBar:"top-bar-1d","foot-bar":"foot-bar-AF",footBar:"foot-bar-AF",wrap:"wrap-tx",item:"item-32",close:"close-27",download:"download-51","next-btn":"next-btn-3T",nextBtn:"next-btn-3T","prev-btn":"prev-btn-12",prevBtn:"prev-btn-12"}},240:function(t,e){},244:function(t,e){},248:function(t,e,n){"use strict";n.r(e);var r=n(232),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},255:function(t,e,n){"use strict";var r={name:"ImagePreview",props:{images:{type:Array,default:()=>[]},query:{type:String,default:""},download:{type:Boolean,default:!0}},data(){return{show:!1,currentIndex:-1,maxWidth:0,maxHeight:0,displayImages:this.images.map(t=>Object.assign({finalWidth:0,finalHeight:0,loading:!0},t))}},computed:{total(){return this.images.length},currentImage(){return-1===this.currentIndex?null:this.displayImages[this.currentIndex]}},mounted(){this.getScreenSize(),window.addEventListener("resize",this.getScreenSize)},methods:{handleClose(){this.show=!1},handleClick(t){if(!this.total)return;const e=t.target||t.currentTarget,n="img"===e.tagName.toLowerCase();if(!this.query&&!n)return;if(this.query&&-1===e.className.indexOf(this.query))return;let r="";if(n)r=e.getAttribute("src").split("?")[0];else{const img=e.querySelector("img");if(!img)return;r=img.getAttribute("src").split("?")[0]}this.getClickImageIndex(r),this.computeDisplaySize(this.currentIndex),this.show=!0},getClickImageIndex(t){this.images.forEach((image,e)=>{image.url===t&&(this.currentIndex=e)})},getScreenSize(){this.maxWidth=window.innerWidth,this.maxHeight=window.innerHeight-88},switchImage(t){if(t&&this.currentIndex===this.total-1)return;if(!t&&0===this.currentIndex)return;const e=t?this.currentIndex+1:this.currentIndex-1;this.computeDisplaySize(e),this.currentIndex=e},getSiblingsIndex(t){let e,n;return 0===this.currentIndex?(e=this.total-1,n=1):this.currentIndex===this.total-1?(e=this.total-2,n=0):(e=this.currentIndex-1,n=this.currentIndex+1),[e,t,n]},computeDisplaySize(t){if(void 0===this.images[t])return;const image=this.images[t];if(image.finalWidth&&image.finalHeight)return;const e=image.width,n=image.height,r=this.maxWidth,c=this.maxHeight;let o,l;if(r>=e&&c>=n)o=e,l=n;else if(r<e&&c<n){const t=e/c,d=n/c;t>=d?(o=r,l=parseInt(n/t,10)):(o=parseInt(e/d,10),l=c)}else if(n<c){o=r,l=parseInt(n/(e/c),10)}else{o=parseInt(e/(n/c),10),l=c}this.displayImages[t].finalWidth=o||r,this.displayImages[t].finalHeight=l||c},handleSwitch(t,e){this.currentIndex=e}}},c=n(0);var component=Object(c.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.imagePreview,on:{click:t.handleClick}},[t._ssrNode((t.show?"<div"+t._ssrClass(null,t.$style.container)+"><div"+t._ssrClass(null,[t.$style.bar,t.$style.topBar])+">"+(t.total?"<span"+t._ssrClass(null,t.$style.total)+">"+t._ssrEscape("\n        "+t._s(t.currentIndex+1)+"/"+t._s(t.total)+"\n      ")+"</span>":"\x3c!----\x3e")+" <span"+t._ssrClass(null,t.$style.close)+">\n        ×\n      </span></div> <div"+t._ssrClass(null,[t.$style.bar,t.$style.footBar])+">"+(t.currentImage&&t.download?"<a"+t._ssrAttr("href",t.currentImage.url)+' target="_blank"'+t._ssrClass(null,t.$style.download)+">\n        下载原图\n      </a>":"\x3c!----\x3e")+"</div> "+(t.currentImage?"<div"+t._ssrClass(null,t.$style.wrap)+"><div"+t._ssrClass(null,t.$style.item)+t._ssrStyle(null,{backgroundImage:"url("+t.$resize(t.currentImage.url,{webP:!t.download})+")",width:t.currentImage.finalWidth+"px",height:t.currentImage.finalHeight+"px"},null)+"></div> "+(t.total>1?"<button"+t._ssrClass(null,t.$style.prevBtn)+'><i class="el-icon-caret-left"></i></button> <button'+t._ssrClass(null,t.$style.nextBtn)+'><i class="el-icon-caret-right"></i></button>':"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e")+" "),t._t("default")],2)},[],!1,function(t){var e=n(248);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"9fce79ee");e.a=component.exports},256:function(t,e,n){"use strict";n.r(e);var r=n(240),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},266:function(t,e,n){"use strict";var r={name:"PostShowItem",components:{ImagePreview:n(255).a},props:{item:{type:Object,required:!0},bangumiId:{type:[Number,String],default:""},userZone:{type:String,default:""}}},c=n(0);var component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"post-flow-item"},[t._ssrNode('<div class="header clearfix">',"</div>",[t.userZone?n("el-tooltip",{attrs:{content:t.item.bangumi.name,effect:"dark",placement:"top"}},[n("a",{staticClass:"bangumi-avatar",attrs:{href:t.$alias.bangumi(t.item.bangumi.id),target:"_blank"}},[n("v-img",{attrs:{src:t.item.bangumi.avatar,poster:!0,width:24,height:24}})],1)]):n("user-card",{attrs:{id:t.item.user.id,zone:t.item.user.zone,"custom-class":"user-avatar"}},[n("v-img",{attrs:{src:t.item.user.avatar,avatar:!0,width:32,height:32}})],1),t._ssrNode(" "),t._ssrNode('<span class="time">',"</span>",[t._ssrNode(" 发表于: "),n("v-time",{attrs:{datetime:t.item.created_at}})],2),t._ssrNode(" "+(t.item.top_at&&t.bangumiId?'<div class="top_badge">\n      置顶\n    </div>':"\x3c!----\x3e")+" "+(t.item.is_nice?'<div class="nice_badge">\n      精\n    </div>':"\x3c!----\x3e")+" "+(t.item.is_creator?'<div class="creator_badge">\n      原创\n    </div>':"\x3c!----\x3e")+' <div class="title oneline"><a'+t._ssrAttr("href",t.$alias.post(t.item.id))+' target="_blank" class="blue-link">'+t._ssrEscape(t._s(t.item.title))+"</a></div>")],2),t._ssrNode(" "+(t.item.user?"<p"+t._ssrClass("content",{"min-height":!t.item.images.length})+"><a"+t._ssrAttr("href",t.$alias.user(t.item.user.zone))+' target="_blank" class="nickname">'+t._ssrEscape(t._s(t.item.user.nickname))+"</a>\n    :\n    <a"+t._ssrAttr("href",t.$alias.post(t.item.id))+' target="_blank" class="desc">'+t._ssrEscape("\n      "+t._s(t.item.desc)+"\n    ")+"</a></p>":"<p"+t._ssrClass("content",{"min-height":!t.item.images.length})+">"+t._ssrEscape(t._s(t.item.desc))+"</p>")+" "),t.item.images.length?t._ssrNode('<div class="images clearfix">',"</div>",[n("image-preview",{attrs:{images:t.item.images,download:!1,query:"image-box"}},t._l(t.item.images,function(image,t){return n("div",{key:t,staticClass:"image-box"},[n("v-img",{attrs:{src:image.url,blur:!0,width:"auto",height:"90"}})],1)}),0)],1):t._e(),t._ssrNode(' <span class="counter">'+t._ssrEscape(t._s(t.item.comment_count))+"</span> "),t._ssrNode('<div class="footer clearfix">',"</div>",[t._ssrNode('<div class="stats">',"</div>",[t._ssrNode((t.item.is_creator?'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.reward_count)))+"</span></span>":'<span class="meta"><i class="iconfont icon-like"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.like_count)))+"</span></span>")+' <span class="meta"><i class="iconfont icon-mark"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.mark_count)))+'</span></span> <span class="meta"><i class="iconfont icon-talk"></i> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.item.comment_count)))+"</span></span> "),n("v-share",{attrs:{url:t.$alias.post(t.item.id),title:t.item.title,desc:t.item.desc,"show-text":!1,type:"button"}})],2),t._ssrNode(' <div class="tags oneline">'+(t.bangumiId?"\x3c!----\x3e":(t.item.bangumi?"<a"+t._ssrAttr("href",t.$alias.bangumi(t.item.bangumi.id))+' target="_blank"><i class="iconfont icon-biaoqian"></i> <span>'+t._ssrEscape(t._s(t.item.bangumi.name))+"</span></a>":"\x3c!----\x3e")+" "+(t.item.idol?"<a"+t._ssrAttr("href",t.$alias.cartoonRole(t.item.idol.id))+' target="_blank"><i class="iconfont icon-biaoqian"></i> <span>'+t._ssrEscape(t._s(t.item.idol.name))+"</span></a>":"\x3c!----\x3e"))+" "+t._ssrList(t.item.tags,function(e){return'<span class="tag">'+t._ssrEscape(t._s(e.name))+"</span>"})+"</div>")],2)],2)},[],!1,function(t){var e=n(256);e.__inject__&&e.__inject__(t)},null,"b52bb90c");e.a=component.exports},272:function(t,e){},273:function(t,e,n){"use strict";n.r(e);var r=n(244),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},285:function(t,e,n){"use strict";var r={name:"ScoreFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},data:()=>({noScore:0}),computed:{starCount(){return this.item.total/2}}},c=n(0);var component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"score-flow-item"},[t._ssrNode('<div class="header">',"</div>",[n("el-tooltip",{attrs:{content:t.item.created_at,placement:"top",effect:"dark"}},[n("v-time",{staticClass:"created-at",model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1),t._ssrNode(" "),t._ssrNode('<div class="about">',"</div>",[t.bangumiId?n("user-card",{attrs:{id:t.item.user.id,zone:t.item.user.zone}},[n("v-img",{staticClass:"user-avatar",attrs:{src:t.item.user.avatar,width:30,height:30,avatar:!0}}),t._v(" "),n("span",{staticClass:"name href-fade-blue",domProps:{textContent:t._s(t.item.user.nickname)}})],1):n("a",{attrs:{href:t.$alias.bangumi(t.item.bangumi.id),target:"_blank"}},[n("v-img",{staticClass:"bangumi-avatar",attrs:{src:t.item.bangumi.avatar,width:30,heighr:30}}),t._v(" "),n("span",{staticClass:"name href-fade-blue",domProps:{textContent:t._s(t.item.bangumi.name)}})],1),t._ssrNode(" "),t.starCount?n("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):n("el-rate",{attrs:{disabled:""},model:{value:t.noScore,callback:function(e){t.noScore=e},expression:"noScore"}})],2)],2),t._ssrNode(" <a"+t._ssrAttr("href",t.$alias.score(t.item.id))+' target="_blank" class="title">'+t._ssrEscape(t._s(t.item.title))+"</a> "),t._ssrNode("<a"+t._ssrAttr("href",t.$alias.score(t.item.id))+' target="_blank" class="content clearfix">',"</a>",[t.item.banner?n("v-img",{staticClass:"poster",attrs:{src:t.item.banner.url,width:190,height:105,blur:!0}}):t._e(),t._ssrNode(' <div class="intro">'+t._ssrEscape("\n      "+t._s(t.item.intro)+"…")+'<button>\n        阅读全文<i class="el-icon-arrow-down"></i></button></div>')],2),t._ssrNode(' <div class="footer">'+(t.item.is_creator?'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape("投食 ("+t._s(t.item.reward_count)+")")+"</span></span>":'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape("喜欢 ("+t._s(t.item.like_count)+")")+"</span></span>")+' <span class="meta"><i class="iconfont icon-mark"></i> <span>'+t._ssrEscape("收藏 ("+t._s(t.item.mark_count)+")")+'</span></span> <span class="meta"><i class="iconfont icon-talk"></i> <span>'+t._ssrEscape("评论 ("+t._s(t.item.comment_count)+")")+"</span></span></div>")],2)},[],!1,function(t){var e=n(273);e.__inject__&&e.__inject__(t)},null,"4df5dfec");e.a=component.exports},310:function(t,e){},311:function(t,e){},312:function(t,e){},313:function(t,e,n){"use strict";n.r(e);var r=n(272),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},314:function(t,e){},399:function(t,e,n){"use strict";var r={name:"CartoonRoleFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""},index:{type:Number,default:-1}}},c=n(0);var component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"cartoon-role-flow-item"},[t._ssrNode("<a"+t._ssrAttr("href",t.$alias.cartoonRole(t.item.id))+' target="_blank" class="avatar">',"</a>",[n("v-img",{attrs:{src:t.item.avatar,blur:!0,width:98,height:98}})],1),t._ssrNode(" "),t._ssrNode('<div class="summary">',"</div>",[t._ssrNode("<a"+t._ssrAttr("href",t.$alias.cartoonRole(t.item.id))+' target="_blank" class="role"><span class="name">'+t._ssrEscape(t._s(t.item.name))+'</span> <span class="intro">'+t._ssrEscape("："+t._s(t.item.intro))+"</span></a> "),t.item.lover?t._ssrNode('<div class="lover fr">',"</div>",[t._ssrNode("<span>守护者：</span> "),n("user-card",{attrs:{id:+t.item.lover.id,zone:t.item.lover.zone}},[n("span",{domProps:{textContent:t._s(t.item.lover.nickname)}}),t._v(" "),n("v-img",{staticClass:"image",attrs:{src:t.item.lover.avatar,width:20,height:20,avatar:!0}})],1)],2):t._ssrNode('<div class="lover"></div>')],2),t._ssrNode(' <div class="footer">'+(t.userZone?'<div class="stats"><span>'+t._ssrEscape("粉丝: "+t._s(t.item.fans_count))+"</span>\n      ·\n      <span>"+t._ssrEscape("团子: "+t._s(t.item.star_count))+"</span>\n      ·\n      <span>"+t._ssrEscape("贡献: "+t._s(t.item.has_star))+"</span></div>":'<div class="stats"><span>'+t._ssrEscape("\n        粉丝:\n        "+t._s(t.$utils.shortenNumber(t.item.fans_count))+"\n      ")+"</span> <span>"+t._ssrEscape("\n        团子:\n        "+t._s(t.$utils.shortenNumber(t.item.star_count))+"\n      ")+"</span> "+(t.bangumiId||-1===t.index?"\x3c!----\x3e":"<span>排名:</span> <span"+t._ssrAttr("data-index",t.item.fans_count?t.index+1:"无")+' class="top"></span>')+"</div>")+" <a"+t._ssrAttr("href",t.$alias.bangumi(t.item.bangumi.id))+' target="_blank" class="bangumi">'+t._ssrEscape(t._s(t.item.bangumi.name))+"</a></div>")],2)},[],!1,function(t){var e=n(313);e.__inject__&&e.__inject__(t)},null,"978c7f88");e.a=component.exports},409:function(t,e,n){"use strict";n.r(e);var r=n(310),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},410:function(t,e,n){"use strict";n.r(e);var r=n(311),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},411:function(t,e,n){"use strict";n.r(e);var r=n(312),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},412:function(t,e,n){"use strict";n.r(e);var r=n(314),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=c.a},494:function(t,e,n){"use strict";n.r(e);var r=n(64),c={name:"SearchItemUser",props:{item:{required:!0,type:Object},inCommon:{required:!0,type:Boolean,default:!1}}},o=n(0);var l=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-item-user"},[t._ssrNode("<a"+t._ssrAttr("href",t.$alias.user(t.item.zone))+' target="_blank" class="avatar">',"</a>",[n("v-img",{attrs:{src:t.item.avatar,avatar:!0,width:90,height:90}})],1),t._ssrNode(' <div class="intro"><div class="head">'+(t.inCommon?'<span class="badge">用户</span>':"\x3c!----\x3e")+" <a"+t._ssrAttr("href",t.$alias.user(t.item.zone))+' target="_blank" class="nickname">'+t._ssrEscape(t._s(t.item.nickname))+'</a></div> <p class="signature">'+t._ssrEscape(t._s(t.item.signature))+"</p></div>")],2)},[],!1,function(t){var e=n(409);e.__inject__&&e.__inject__(t)},null,"572f497e").exports,d={name:"SearchItemBangumi",props:{item:{required:!0,type:Object},inCommon:{required:!0,type:Boolean,default:!1}}};var m=Object(o.a)(d,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"search-item-bangumi"},[t._ssrNode((t.inCommon?"<a"+t._ssrAttr("href",t.$alias.bangumi(t.item.id))+' target="_blank" class="in-common-avatar"><img'+t._ssrAttr("src",t.$resize(t.item.avatar,{width:180,height:240}))+t._ssrAttr("alt",t.item.name)+"></a>":"<a"+t._ssrAttr("href",t.$alias.bangumi(t.item.id))+' target="_blank" class="avatar"><img'+t._ssrAttr("src",t.$resize(t.item.avatar,{width:252,height:336}))+t._ssrAttr("alt",t.item.name)+"></a>")+' <div class="intro"><div class="head">'+(t.inCommon?'<span class="badge">番剧</span>':"\x3c!----\x3e")+" <a"+t._ssrAttr("href",t.$alias.bangumi(t.item.id))+' target="_blank" class="name">'+t._ssrEscape(t._s(t.item.name))+'</a></div> <p class="summary">'+t._ssrEscape(t._s(t.item.summary))+"</p></div>")])},[],!1,function(t){var e=n(410);e.__inject__&&e.__inject__(t)},null,"d56d664e").exports,_={name:"SearchItemVideo",props:{item:{required:!0,type:Object},inCommon:{required:!0,type:Boolean,default:!1}}};var h=Object(o.a)(_,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"search-item-video"},[t._ssrNode((t.inCommon?"<a"+t._ssrAttr("href",t.$alias.video(t.item.id))+' target="_blank" class="in-common-avatar"><img'+t._ssrAttr("src",t.$resize(t.item.poster,{width:180,height:102}))+t._ssrAttr("alt",t.item.name)+"></a>":"<a"+t._ssrAttr("href",t.$alias.video(t.item.id))+' target="_blank" class="avatar"><img'+t._ssrAttr("src",t.$resize(t.item.poster,{width:320,height:200}))+t._ssrAttr("alt",t.item.name)+"></a>")+' <div class="intro"><div class="head">'+(t.inCommon?'<span class="badge">视频</span>':"\x3c!----\x3e")+" <a"+t._ssrAttr("href",t.$alias.video(t.item.id))+' target="_blank" class="name">'+t._ssrEscape(t._s(t.item.name))+'</a></div> <p class="summary">'+t._ssrEscape(t._s(t.item.summary))+"</p></div>")])},[],!1,function(t){var e=n(411);e.__inject__&&e.__inject__(t)},null,"07cc360a").exports,f=n(266),v=n(399),x=n(285),y={name:"SearchNothingAll"},$=Object(o.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-all"},[e("no-content")],1)},[],!1,null,null,"213a068f").exports,w={name:"SearchNothingUser"},C=Object(o.a)(w,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-user"},[e("no-content")],1)},[],!1,null,null,"e4d4ee66").exports,N={name:"SearchNothingBangumi"},k=Object(o.a)(N,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-bangumi"},[e("no-content")],1)},[],!1,null,null,"6dd0e987").exports,I={name:"SearchNothingVideo"},E=Object(o.a)(I,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-video"},[e("no-content")],1)},[],!1,null,null,"62f246e9").exports,S={name:"SearchNothingPost"},j=Object(o.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-post"},[e("no-content")],1)},[],!1,null,null,"6ad279bc").exports,A={name:"SearchNothingRole",methods:{openFeedback(){this.$channel.$emit("open-feedback",{type:6,desc:"我想要为 {?} 应援",placeholder:"请填写要应援的偶像"})}}},O=Object(o.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-role"},[e("no-content",[e("el-button",{attrs:{type:"primary",round:""},on:{click:this.openFeedback}},[this._v("\n        没有找到你的偶像？\n      ")])],1)],1)},[],!1,null,null,"e4d86010").exports,z={name:"SearchNothingScore"},B=Object(o.a)(z,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-nothing-score"},[e("no-content")],1)},[],!1,null,null,"db36e500").exports,T={name:"SearchIndex",components:{vSearch:r.a,UserItem:l,BangumiItem:m,VideoItem:h,PostItem:f.a,RoleItem:v.a,ScoreItem:x.a,NothingAll:$,NothingUser:C,NothingBangumi:k,NothingVideo:E,NothingPost:j,NothingRole:O,NothingScore:B},data(){return{selectedType:this.$route.query.type||"all",words:this.$route.query.q}},computed:{resource(){return this.$store.state.search.resource[this.selectedType]},loading(){return this.resource.loading},list(){return this.resource.list},noMore(){return this.resource.noMore},total(){return this.resource.total},tabs(){return this.$store.state.search.tabs}},watch:{$route(t){const{query:e}=t,{type:n,q:q}=e;this.selectedType=n,this.$store.dispatch("search/fetchData",{type:n,q:q})}},async asyncData({store:t,query:e}){const n=e.type||"all";await t.dispatch("search/fetchData",{type:n,q:e.q})},head(){return{title:this.$route.query.q?`搜索结果：${this.$route.query.q}`:"搜索"}},methods:{handleTabClick(t){this.$router.push({name:"search",query:{q:this.words,type:t.name}})},async loadMore(){try{await this.$store.dispatch("search/fetchMore",{type:this.selectedType})}catch(t){}}}};var P=Object(o.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search-index"}},[n("v-header"),t._ssrNode(" "),t._ssrNode('<div class="container">',"</div>",[t._ssrNode('<div class="search-panel">',"</div>",[n("v-search",{attrs:{type:t.selectedType,placeholder:"搜索二次元的一切"},model:{value:t.words,callback:function(e){t.words=e},expression:"words"}},[n("template",{slot:"submit-btn"},[n("i",{staticClass:"iconfont icon-sousuo"}),t._v("\n            搜索\n          ")])],2)],1)]),t._ssrNode(" "),n("v-layout",[n("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.selectedType,callback:function(e){t.selectedType=e},expression:"selectedType"}},t._l(t.tabs,function(e,r){return n("el-tab-pane",{key:r,attrs:{name:r,label:e}},[t.noMore&&!t.list.length?n("nothing-"+t.selectedType,{tag:"component"}):t._l(t.list,function(e){return n(e.type+"-item",{key:e.type+"-"+e.id,tag:"component",attrs:{item:e,"in-common":e.type!=t.selectedType}})}),t._v(" "),!t.noMore&&t.list.length?n("el-button",{staticClass:"load-more-btn",attrs:{loading:t.loading,type:"info",plain:"",round:""},on:{click:t.loadMore}},[t._v("\n            "+t._s(t.loading?"加载中":"加载更多")+"\n          ")]):t._e(),t._v(" "),t.loading&&!t.list.length?n("div",{staticClass:"loading-wrap"},[n("div",{staticClass:"el-icon-loading"})]):t._e()],2)}),1),t._v(" "),n("template",{slot:"aside"},[t._v("\n         \n      ")])],2)],2)},[],!1,function(t){var e=n(412);e.__inject__&&e.__inject__(t)},null,"14760a21");e.default=P.exports}};
//# sourceMappingURL=index.chunk.ba9652f2.js.map
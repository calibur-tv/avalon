exports.ids=[43],exports.modules={238:function(t,e,r){"use strict";r.d(e,"l",function(){return n}),r.d(e,"s",function(){return o}),r.d(e,"g",function(){return l}),r.d(e,"j",function(){return c}),r.d(e,"c",function(){return d}),r.d(e,"k",function(){return _}),r.d(e,"d",function(){return f}),r.d(e,"q",function(){return m}),r.d(e,"h",function(){return v}),r.d(e,"o",function(){return h}),r.d(e,"f",function(){return $}),r.d(e,"r",function(){return y}),r.d(e,"a",function(){return w}),r.d(e,"p",function(){return k}),r.d(e,"m",function(){return x}),r.d(e,"e",function(){return O}),r.d(e,"b",function(){return I}),r.d(e,"i",function(){return E}),r.d(e,"n",function(){return j});const n=(t,{id:e})=>t.$axios.$get(`cartoon_role/${e}/stock_show`),o=(t,{id:e,amount:r})=>t.$axios.$post(`cartoon_role/${e}/buy_stock`,{amount:r}),l=(t,{bangumi_id:e,name:r,intro:n,avatar:o,alias:l})=>t.$axios.$post("cartoon_role/manager/create",{bangumi_id:e,name:r,intro:n,avatar:o,alias:l}),c=(t,form)=>t.$axios.$post("cartoon_role/manager/edit",form),d=(t,form)=>t.$axios.$post("cartoon_role/manager/user_create",form),_=(t,{id:e})=>t.$axios.$get(`cartoon_role/${e}/get_deal`),f=(t,form)=>t.$axios.$post("cartoon_role/create_deal",form),m=(t,form)=>t.$axios.$post("cartoon_role/make_deal",form),v=(t,{id:e})=>t.$axios.$post("cartoon_role/delete_deal",{id:e}),h=t=>t.$axios.$get("cartoon_role/stock_meta"),$=(t,form)=>t.$axios.$post("cartoon_role/create_market_price_draft",form),y=(t,{is_agree:e,idol_id:r,draft_id:n})=>t.$axios.$post("cartoon_role/vote_market_price_draft",{is_agree:e,idol_id:r,draft_id:n}),w=(t,{idol_id:e,qq_group:r,lover_words:n,manager_id:o})=>t.$axios.$post("cartoon_role/change_idol_profile",{idol_id:e,qq_group:r,lover_words:n,manager_id:o}),k=t=>t.$axios.$get("cartoon_role/user_draft_work"),x=t=>t.$axios.$get("cartoon_role/can_use_income"),O=(t,{product_id:e,product_type:r,amount:n})=>t.$axios.$post("cartoon_role/create_buy_request",{product_id:e,product_type:r,amount:n}),I=(t,{order_id:e,result:r})=>t.$axios.$post("cartoon_role/check_product_request",{order_id:e,result:r}),E=(t,{order_id:e})=>t.$axios.$post("cartoon_role/delete_buy_request",{order_id:e}),j=t=>t.$axios.$get("cartoon_role/get_mine_product_orders")},244:function(t,e){},273:function(t,e,r){"use strict";r.r(e);var n=r(244),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},282:function(t,e,r){"use strict";var n=r(203),o={name:"VirtualIdolItem",components:{"v-trend":r.n(n).a},props:{item:{type:Object,required:!0},sort:{type:String,required:!0}},computed:{trendData(){return this.item.market_trend.map(t=>+t.value).reverse()},computedPercent(){return`${parseFloat(this.item.has_star/this.item.star_count*100).toFixed(2)}%`}}},l=r(0);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"virtual-idol-item"},[t._ssrNode("<a"+t._ssrAttr("href",t.$alias.cartoonRole(t.item.id))+' target="_blank">',"</a>",[t._ssrNode('<div class="info"><img'+t._ssrAttr("src",t.$resize(t.item.avatar,{width:160}))+'> <p class="oneline">'+t._ssrEscape(t._s(t.item.name))+"</p></div> "),t._ssrNode('<div class="intro">',"</div>",[t._ssrNode('<p class="price"><span>市值:</span> <strong>'+t._ssrEscape(t._s(t.item.company_state?"￥"+t.item.market_price:"未上市"))+'</strong></p> <p class="meta_1"><span>股价:</span> <span>'+t._ssrEscape("￥"+t._s(t.item.stock_price)+" / 股，"+t._s(t.item.fans_count)+"人持股")+"</span></p> "+("mine"===t.sort?'<p class="meta_2"><span>持有：</span> <span>'+t._ssrEscape(t._s(t.item.has_star)+"股，占比 "+t._s(t.computedPercent))+"</span></p>":'<p class="meta_2"><span>认购：</span> <span>'+t._ssrEscape(t._s(t.item.star_count)+"股")+"</span></p>")+" "),t._ssrNode('<div class="trend-placeholder">',"</div>",[t.trendData.length?r("no-ssr",[r("v-trend",{attrs:{data:t.trendData,gradient:["#ffafc9","#ff8eb3","#f25d8e"],"auto-draw-duration":400,height:42,padding:0,"auto-draw":"",smooth:""}})],1):r("p",[t._v("暂无数据")])],1)],2),t._ssrNode(' <div class="control">'+("mine"===t.sort?"<button>查看数据</button>":"<button"+t._ssrClass(null,{locked:t.item.is_locked})+">"+t._ssrEscape("\n          "+t._s(t.item.is_locked?"已停牌":"马上入股")+"\n        ")+"</button>")+'</div> <div class="extra"><div class="user">'+(t.item.boss?"<img"+t._ssrAttr("src",t.$resize(t.item.boss.avatar,{width:50,height:50}))+' class="boss">':"\x3c!----\x3e")+" "+(t.item.manager?"<img"+t._ssrAttr("src",t.$resize(t.item.manager.avatar,{width:50,height:50}))+' class="manager">':"\x3c!----\x3e")+'</div> <div class="time">'+(t.item.ipo_at?"<p>"+t._ssrEscape("上市时间："+t._s(t.item.ipo_at.split(" ")[0]))+"</p>":"<p>"+t._ssrEscape("创办时间："+t._s(t.item.created_at.split(" ")[0]))+"</p>")+"</div></div>")],2)])},[],!1,function(t){var e=r(273);e.__inject__&&e.__inject__(t)},null,"432705fd");e.a=component.exports},295:function(t,e){},334:function(t,e){},335:function(t,e){},340:function(t,e,r){"use strict";e.a={async fetch({store:t,error:e}){await t.dispatch("initAuth")||e({statusCode:401,message:"继续操作前请先登录"})}}},341:function(t,e){},342:function(t,e){},437:function(t,e,r){"use strict";r.r(e);var n=r(341),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},438:function(t,e,r){"use strict";r.r(e);var n=r(342),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},501:function(t,e,r){"use strict";r.r(e);r(334),r(2);var n=r(208),o=r.n(n),l=(r(335),r(209)),c=r.n(l),d=r(340),_=r(55),f=r(282),m=(r(295),r(205)),v=r.n(m),h=r(238),$={name:"IdolProductOrderItem",components:{"el-tag":v.a},props:{item:{type:Object,required:!0}},computed:{status(){const t=this.item.orders;return t.some(t=>0===t.result)?`【待确认${t.filter(t=>0===t.result).length}条】`:t.some(t=>1===t.result)?"【已成交】":"【未知】"}},methods:{computeTagColor:t=>0===t?"":1===t?"success":2===t?"danger":3===t?"info":4===t?"warning":5===t?"info":"",computedOrderResult:t=>0===t?"待确认":1===t?"已同意":2===t?"已拒绝":3===t?"订单取消":4===t?"已售出":5===t?"已失效":"未知",resolveOrder(t){this.$confirm("确认后无法修改，确认吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await Object(h.b)(this,{order_id:t,result:1}),this.refreshList(),this.$toast.success("交易已达成")}catch(t){this.$toast.error(t)}}).catch(()=>{})},async rejectOrder(t){try{await Object(h.b)(this,{order_id:t,result:2}),this.refreshList(),this.$toast.success("已确认")}catch(t){this.$toast.error(t)}},refreshList(){this.$store.dispatch("flow/initData",{func:"getUserProductOrders",type:"page",sort:"news",refresh:!0})}}},y=r(0);var w=Object(y.a)($,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"idol-product-order-item"},[t._ssrNode("<span>"+t._ssrEscape(t._s(t.status))+"</span> <span> - 帖子 - </span> <a"+t._ssrAttr("href",t.$alias.post(t.item.product.id))+' target="_blank">'+t._ssrEscape(t._s(t.item.product.title))+"</a> "),t._ssrNode("<ul>","</ul>",t._l(t.item.orders,function(e){return t._ssrNode("<li>","</li>",[t._ssrNode("<a"+t._ssrAttr("href",t.$alias.cartoonRole(e.idol.id))+' target="_blank">'+t._ssrEscape(t._s(e.idol.name))+"</a> <span>的经纪人</span> <a"+t._ssrAttr("href",t.$alias.user(e.buyer.zone))+' target="_blank">'+t._ssrEscape(t._s(e.buyer.nickname))+"</a> <span>发起的购买请求：</span> <span>"+t._ssrEscape("￥"+t._s(e.amount)+"的价格，")+"</span> <span>"+t._ssrEscape(t._s(e.income_ratio)+"%比例分成，")+"</span> <span>"+t._ssrEscape("创建时间："+t._s(e.created_at))+"</span> "+(1===e.result||2===e.result?"<span>"+t._ssrEscape("，处理时间："+t._s(e.updated_at))+"</span>":"\x3c!----\x3e")+" "),0===e.result?[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return t.resolveOrder(e.id)}}},[t._v("同意")]),t._ssrNode(" "),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return t.rejectOrder(e.id)}}},[t._v("拒绝")])]:r("el-tag",{attrs:{type:t.computeTagColor(e.result),size:"mini"}},[t._v("\n        "+t._s(t.computedOrderResult(e.result))+"\n      ")])],2)}),0)],2)},[],!1,function(t){var e=r(437);e.__inject__&&e.__inject__(t)},null,"a01b305a").exports,k={name:"RoleTrendingMine",components:{FlowList:_.a,VirtualIdolItem:f.a,IdolProductOrderItem:w,"el-table":c.a,"el-table-column":o.a},mixins:[d.a],head:{title:"我的公司"},data:()=>({selected:"我入股的公司",options:["我入股的公司","我发起的交易","我的采购请求"]}),computed:{userId(){return this.$store.state.user.id}},mounted(){this.getMyIdols()},methods:{getMyIdols(){this.$store.dispatch("flow/initData",{func:"virtualIdolList",type:"seenIds",sort:"user-activity-1",id:this.userId})},getMyDeals(){this.$store.dispatch("flow/initData",{func:"myVirtualIdolDeals",type:"page",sort:"mine"})},getMyOrderRequest(){this.$store.dispatch("flow/initData",{func:"getUserProductOrders",type:"page",sort:"news"})},handleTabSwitch(label){"我入股的公司"===label?this.getMyIdols():"我发起的交易"===label?this.getMyDeals():"我的采购请求"===label&&this.getMyOrderRequest()},deleteMyDeal(t){this.$confirm("确定要终止交易吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await Object(h.h)(this,{id:t.id}),this.$toast.success("交易已终止"),setTimeout(()=>{window.location.reload()},1e3)}).catch(t=>{this.$toast.error(t)})}}};var x=Object(y.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"role-trending-mine"}},[t._ssrNode("<header>","</header>",[r("el-radio-group",{attrs:{size:"mini"},on:{change:t.handleTabSwitch},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t,e){return r("el-radio-button",{key:e,attrs:{label:t}})}),1)],1),t._ssrNode(" "),"我入股的公司"===t.selected?[r("v-layout",[r("flow-list",{attrs:{id:t.userId,func:"virtualIdolList",type:"seenIds",sort:"user-activity-1"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,function(t){return r("virtual-idol-item",{key:t.id,attrs:{item:t,sort:"mine"}})}),1)}}],null,!1,72717367)},[t._v(" "),r("no-content",{attrs:{slot:"nothing"},slot:"nothing"},[r("nuxt-link",{attrs:{to:"/role/trending/newbie"}},[r("el-button",{attrs:{size:"mini"}},[t._v("\n              查看融资中的公司\n            ")])],1),t._v(" "),r("nuxt-link",{attrs:{to:"/role/trending/register"}},[r("el-button",{attrs:{size:"mini"}},[t._v("\n              自己注册公司\n            ")])],1)],1)],1),t._v(" "),r("template",{slot:"aside"},[t._v("\n         \n      ")])],2)]:"我发起的交易"===t.selected?[r("flow-list",{attrs:{func:"myVirtualIdolDeals",type:"page",sort:"mine"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("div",{staticClass:"table"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:n,stripe:""}},[r("el-table-column",{attrs:{label:"交易编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("# "+t._s(e.row.id))])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"偶像",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return r("a",{staticClass:"idol",attrs:{href:t.$alias.cartoonRole(e.row.idol.id),target:"_blank"}},[r("img",{attrs:{src:t.$resize(e.row.idol.avatar,{width:100})}}),t._v(" "),r("span",{domProps:{textContent:t._s(e.row.idol.name)}})])}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"公司市值"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("￥"+t._s(e.row.idol.market_price))])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"每股股价"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v("￥"+t._s(e.row.idol.stock_price))])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"发行股数"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[t._v(t._s(e.row.idol.star_count))])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"出售价格"},scopedSlots:t._u([{key:"default",fn:function(e){return r("div",{staticClass:"price"},[r("div",[t._v("￥"+t._s(e.row.product_price))])])}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"出售股数"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("div",[t._v(t._s(e.row.product_count))])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"已成交"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(parseFloat(e.row.product_count-e.row.last_count).toFixed(2)))])]}}],null,!0)}),t._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.deleted_at?r("el-button",{attrs:{disabled:!0,size:"small",type:"info",round:"",plain:""}},[t._v("交易已终止")]):r("el-button",{attrs:{size:"small",type:"danger",round:"",plain:""},on:{click:function(r){return t.deleteMyDeal(e.row)}}},[t._v("终止交易")])]}}],null,!0)})],1)],1)}}])})]:"我的采购请求"===t.selected?[r("v-layout",[r("el-alert",{attrs:{type:"info",title:"当有经纪人采购你的帖子时，将会在这个地方展示订单"}},[r("p",[t._v("\n          每个帖子，只能出售一次，交易达成后会自动拒绝掉帖子的其它交易\n        ")]),t._v(" "),r("p",[t._v("\n          经纪人会主动寻找相关番剧下的原创帖子进行采购，你只需要等待订单即可\n        ")])]),t._v(" "),r("flow-list",{attrs:{func:"getUserProductOrders",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,function(t,e){return r("idol-product-order-item",{key:e,attrs:{item:t}})}),1)}}])}),t._v(" "),r("template",{slot:"aside"},[t._v("\n         \n      ")])],2)]:t._e()],2)},[],!1,function(t){var e=r(438);e.__inject__&&e.__inject__(t)},null,"12eabe9a");e.default=x.exports}};
//# sourceMappingURL=mine.chunk.72d6c0aa.js.map
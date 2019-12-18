webpackJsonp([54],{

/***/ "BS+o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/collect/OrderDetail.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var OrderDetail = ({
	name: "Collect",
	data: function data() {
		return {
			tempRoute: {},
			remarkList: [],
			relationOrders: [],
			detail: {},
			isRewards: { 0: "否", 1: "是" },
			isActivitys: { 0: "否", 1: "是" },
			fReasons: { 1: "未成交已结束", 2: "需求已过期", 3: "非真实需求", 4: "成交已完成", 5: '其他' },
			methods: { 0: "自营", 1: "合作" },
			nexts: { 1: "在本不", 2: "转下一步", 3: "关闭" },
			isReals: { 1: "真实", 2: "不真实", 3: "不确定" },
			types: { 1: "求租", 2: "出租", 3: "买房", 4: "卖房" },
			assess: { 0: '暂无', 1: "不合格", 2: "合格", 3: "优秀" },
			level: { 0: '暂无', 1: "A级客户", 2: "B级客户", 3: "C级客户" },
			genders: { 1: "男", 2: "女" },
			houseTypes: { 60: "商铺", 61: "写字楼", 62: "住宅", 65: "商业综合体", 66: "产业园", 67: "厂房仓库" },
			origins: ["", "直租（委托平台）", "看房日程", "开店管理", "发布房源", "砍价单", "模拟开店", "订制单", "强制弹窗", "美洽", "400电话", "其它", "需求中心", "找房令", "闲鱼", "抖音"]
		};
	},

	created: function created() {
		if (this.$route.params.id > 0) {
			this.getOrderDetail(this.$route.params.id);
			this.tempRoute = assign_default()({}, this.$route);
		}
	},
	methods: {
		getRelationOrder: function getRelationOrder(phone) {
			var _this = this;

			Object(requirement["A" /* getRequireList */])(-1, 1, { keyword: phone }).then(function (response) {
				if (response.data.data && response.data.data.data && response.data.data.data.length > 0) {
					_this.relationOrders = response.data.data.data;
				}
			});
		},
		getOrderDetail: function getOrderDetail(id) {
			var _this2 = this;

			Object(requirement["w" /* getOrderDetail */])(id).then(function (response) {
				var data = response.data.data;
				data.isReward = _this2.isRewards[data.isReward];
				data.isActivity = _this2.isActivitys[data.isActivity];
				data.fReason = _this2.fReasons[data.fReason];
				data.method = _this2.methods[data.method];
				data.next = _this2.nexts[data.next];
				data.isReal = _this2.isReals[data.isReal];
				data.type = _this2.types[data.type];
				data.gender = _this2.genders[data.gender];
				data.houseType = _this2.houseTypes[data.houseType];
				data.assess = _this2.assess[data.assess];
				data.level = _this2.level[data.level];
				data.origin = _this2.origins[data.origin];
				_this2.remarkList = data.remarkList;
				data.remarkList = null;
				_this2.detail = data;
				_this2.setTagsViewTitle();
				if (!!_this2.detail.contact.trim()) {
					_this2.getRelationOrder(_this2.detail.contact.trim());
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		setTagsViewTitle: function setTagsViewTitle() {
			var title = "需求单详情";
			var route = assign_default()({}, this.tempRoute, {
				title: title + "-" + this.detail.id
			});
			this.$store.dispatch("updateVisitedView", route);
		},
		activeDetail: function activeDetail(id) {
			var _this3 = this;

			this.$confirm("你确定要激活此条需求单吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				Object(requirement["a" /* activeDetail */])(id).then(function (response) {
					_this3.$message({
						type: "success",
						message: "激活成功!"
					});
					_this3.$store.dispatch('delView', _this3.$route);
					_this3.$router.push({
						name: 'Individual',
						query: { tab: _this3.detail.preStatus + 1 }
					});
				}).catch(function (err) {
					console.log(err);
				});
			}).catch(function () {
				_this3.$message({
					type: "info",
					message: "取消激活!"
				});
			});
		},
		activeOriginDetail: function activeOriginDetail(url) {
			this.$router.push({
				path: url
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-72ff2941","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/collect/OrderDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{staticClass:"require-form",attrs:{"label-width":"40%","id":"consult-form"}},[_c('el-form-item',{attrs:{"label":"需求开始时间："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.createTime)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求结束时间："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.updateTime)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客户名称："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.username)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客户性别："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.gender)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系方式："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.contact)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求类型："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.type)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求来源："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.origin)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源编号："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.houseId)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"评价:"}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.assess)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求单评级:"}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.level)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源类型："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.houseType)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"期望价格范围："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.lprice)+" - "+_vm._s(_vm.detail.gprice)+" 元/月\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地理位置："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.location)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简单描述："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.title)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"真实性："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.isReal)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"参与活动："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.isActivity)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"奖励发放状态："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.isReward)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"结束原因："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.fReason)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"结束原因备注："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.remark)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"跟进人："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.agentName)+"\n\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"跟进方式："}},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.detail.method)+"\n\t\t\t\t\t")]),_vm._v(" "),(_vm.detail.method=='合作')?_c('div',[_c('el-form-item',{attrs:{"label":"合作方联系人："}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(_vm.detail.cooperater)+"\n\t\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"合作方联系方式："}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(_vm.detail.coContact)+"\n\t\t\t\t\t\t")])],1):_vm._e()],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[(_vm.detail.url)?_c('el-button',{staticStyle:{"width":"100%","margin-bottom":"20px"},attrs:{"type":"success"},on:{"click":function($event){_vm.activeOriginDetail(_vm.detail.url)}}},[_vm._v("点击查看详细原数据"),_c('i',{staticClass:"el-icon-arrow-right el-icon--right"})]):_vm._e(),_vm._v(" "),_c('el-button',{staticStyle:{"width":"100%","margin-bottom":"20px","margin-left":"0"},attrs:{"type":"danger"},on:{"click":function($event){_vm.activeDetail(_vm.detail.id)}}},[_vm._v("重新激活该需求单"),_c('i',{staticClass:"el-icon-refresh el-icon--right"})]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("历史需求单")]),_vm._v(" "),(_vm.relationOrders&&_vm.relationOrders.length>1)?_c('ol',_vm._l((_vm.relationOrders),function(item){return (item.id!=_vm.detail.id)?_c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.createTime)+"，该号码通过 "),_c('b',[_vm._v(_vm._s(_vm.origins[item.origin]))]),_vm._v("，"+_vm._s(item.type?_vm.type:'求租')+","+_vm._s(item.lprice)+"-"+_vm._s(item.gprice)+"元的 "),_c('b',[_vm._v(_vm._s(_vm.houseTypes[item.houseType]))]),_vm._v("。\n\t\t\t\t\t\t")]):_vm._e()})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史需求单")])]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("历史记录")]),_vm._v(" "),(_vm.remarkList && _vm.remarkList.length>0)?_c('ol',_vm._l((_vm.remarkList),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var collect_OrderDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/collect/OrderDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("ygKM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  OrderDetail,
  collect_OrderDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_collect_OrderDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "awDn":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ "ygKM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("awDn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("a4a517f4", content, true);

/***/ })

});
webpackJsonp([22],{

/***/ "7t2S":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#free-custom .el-form-item__label {\n  width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "R0mG":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7t2S");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6b902eaa", content, true);

/***/ }),

/***/ "tM0p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/api/customized/index.js
var customized = __webpack_require__("TWI9");

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/customized/FreeDetail.vue

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




/* harmony default export */ var FreeDetail = ({
	data: function data() {
		return {
			tempRoute: {},
			id: this.$route.params.id,
			info: {},
			processList: []
		};
	},

	created: function created() {
		this.getFreeDetail();
		this.getProcessList();
		this.tempRoute = assign_default()({}, this.$route);
	},
	methods: {
		setTagsViewTitle: function setTagsViewTitle() {
			var title = "免费订制";
			var route = assign_default()({}, this.tempRoute, {
				title: title + "-" + this.info.id
			});
			this.$store.dispatch("updateVisitedView", route);
		},
		getFreeDetail: function getFreeDetail() {
			var _this = this;

			Object(customized["c" /* freeDetail */])(this.id).then(function (response) {
				_this.info = response.data.data;
				_this.info.house_type = "" + _this.info.house_type;
				_this.info.content = "";
				_this.setTagsViewTitle();
			}).catch(function (err) {
				_this.info.content = "";
				console.log(err);
			});
		},
		submitForm: function submitForm(formName) {
			var _this2 = this;

			Object(customized["j" /* updateCustom */])(this.info).then(function (response) {
				if (response.data.status) {
					_this2.$message({
						message: "编辑成功",
						type: "success",
						duration: 3 * 1000
					});
					_this2.getProcessList();
					_this2.info.content = "";
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getProcessList: function getProcessList() {
			var _this3 = this;

			var type = "fast_custom";
			Object(requirement["J" /* processList */])(this.id, type).then(function (response) {
				_this3.processList = response.data.data;
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f0a262f6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/customized/FreeDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"10px auto"},attrs:{"id":"free-custom"}},[_c('el-form',{attrs:{"prop":"info"},model:{value:(_vm.info),callback:function ($$v) {_vm.info=$$v},expression:"info"}},[_c('el-form-item',{attrs:{"label":"房源类型：","prop":"mianji_id"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.info.house_type),callback:function ($$v) {_vm.$set(_vm.info, "house_type", $$v)},expression:"info.house_type"}},[_c('el-option',{attrs:{"label":"商铺","value":"60"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"写字楼","value":"61"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"住宅","value":"62"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"面积：","prop":"mianji_id"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.info.mianji_id),callback:function ($$v) {_vm.$set(_vm.info, "mianji_id", $$v)},expression:"info.mianji_id"}},[_c('el-option',{attrs:{"label":"20㎡以下","value":1}}),_vm._v(" "),_c('el-option',{attrs:{"label":"20-50㎡","value":2}}),_vm._v(" "),_c('el-option',{attrs:{"label":"50-100㎡","value":3}}),_vm._v(" "),_c('el-option',{attrs:{"label":"100-200㎡","value":4}}),_vm._v(" "),_c('el-option',{attrs:{"label":"200-500㎡","value":5}}),_vm._v(" "),_c('el-option',{attrs:{"label":"500㎡以上","value":6}})],1)],1),_vm._v(" "),(_vm.info.house_type == 60)?_c('el-form-item',{attrs:{"label":"行业类型：","prop":"shop_function"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.info.shop_function),callback:function ($$v) {_vm.$set(_vm.info, "shop_function", $$v)},expression:"info.shop_function"}},[_c('el-option',{attrs:{"label":"不限","value":120}}),_vm._v(" "),_c('el-option',{attrs:{"label":"酒店餐饮","value":121}}),_vm._v(" "),_c('el-option',{attrs:{"label":"服饰鞋包","value":122}}),_vm._v(" "),_c('el-option',{attrs:{"label":"美容美发","value":123}}),_vm._v(" "),_c('el-option',{attrs:{"label":"百货超市","value":124}}),_vm._v(" "),_c('el-option',{attrs:{"label":"家具建材","value":125}}),_vm._v(" "),_c('el-option',{attrs:{"label":"汽车美容","value":126}}),_vm._v(" "),_c('el-option',{attrs:{"label":"医疗保健","value":127}}),_vm._v(" "),_c('el-option',{attrs:{"label":"培训机构","value":128}}),_vm._v(" "),_c('el-option',{attrs:{"label":"旅游宾馆","value":129}}),_vm._v(" "),_c('el-option',{attrs:{"label":"其他业态","value":130}})],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注：","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","autosize":"","placeholder":"请输入内容"},model:{value:(_vm.info.remark),callback:function ($$v) {_vm.$set(_vm.info, "remark", $$v)},expression:"info.remark"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系人：","prop":"mobile"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.info.mobile)}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.info.status),callback:function ($$v) {_vm.$set(_vm.info, "status", $$v)},expression:"info.status"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("【0】待处理")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("【1】已处理")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注："}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入内容"},model:{value:(_vm.info.content),callback:function ($$v) {_vm.$set(_vm.info, "content", $$v)},expression:"info.content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('info')}}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.processList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var customized_FreeDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/customized/FreeDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("R0mG")
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
  FreeDetail,
  customized_FreeDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_customized_FreeDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
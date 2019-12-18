webpackJsonp([139],{

/***/ "8+m0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/customized/CustomerDetail.vue

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

/* harmony default export */ var CustomerDetail = ({
	data: function data() {
		return {
			tempRoute: {},
			id: this.$route.params.id,
			info: [],
			processList: []
		};
	},

	created: function created() {
		this.getDetailInfo();
		this.tempRoute = assign_default()({}, this.$route);
	},
	methods: {
		setTagsViewTitle: function setTagsViewTitle() {
			var title = "订制用户";
			var route = assign_default()({}, this.tempRoute, {
				title: title + "-" + this.info.id
			});
			this.$store.dispatch("updateVisitedView", route);
		},
		getDetailInfo: function getDetailInfo() {
			var _this = this;

			var data = {
				id: this.id
			};
			this.request({
				url: "/customized/getCustorDetail",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.info = data;
					_this.processList = data.remarkLog;
				}
				_this.setTagsViewTitle();
			}).catch(function (err) {
				console.log(err);
			});
		},
		onSubmit: function onSubmit() {
			var _this2 = this;

			var data = {
				id: this.id,
				status: this.info.status,
				remark_content: this.info.remark_content
			};
			this.request({
				url: "/customized/editCustomer",
				method: "post",
				data: data
			}).then(function (response) {
				if (response.data.status == 1) {
					_this2.$message({
						type: "success",
						message: "修改成功!"
					});
					_this2.getDetailInfo();
				} else {
					_this2.$message({
						type: "error",
						message: response.data.msg
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-56b5f070","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/customized/CustomerDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{attrs:{"prop":"info"},model:{value:(_vm.info),callback:function ($$v) {_vm.info=$$v},expression:"info"}},[_c('el-form-item',{attrs:{"label":"手机号：","prop":"mobile"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.info.mobile),callback:function ($$v) {_vm.$set(_vm.info, "mobile", $$v)},expression:"info.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"登录ip：","prop":"login_ip"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.info.login_ip),callback:function ($$v) {_vm.$set(_vm.info, "login_ip", $$v)},expression:"info.login_ip"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.info.status),callback:function ($$v) {_vm.$set(_vm.info, "status", $$v)},expression:"info.status"}},[_c('el-radio',{attrs:{"label":0,"value":"0"}},[_vm._v("待处理")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1,"value":"1"}},[_vm._v("已处理")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注：","prop":"remark"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","disabled":true},model:{value:(_vm.info.remark),callback:function ($$v) {_vm.$set(_vm.info, "remark", $$v)},expression:"info.remark"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.info.remark_content),callback:function ($$v) {_vm.$set(_vm.info, "remark_content", $$v)},expression:"info.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit()}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.processList.length !== 0)?_c('el-table',{attrs:{"data":_vm.processList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var customized_CustomerDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/customized/CustomerDetail.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  CustomerDetail,
  customized_CustomerDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_customized_CustomerDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
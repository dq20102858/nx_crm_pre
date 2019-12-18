webpackJsonp([86],{

/***/ "FAA0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.qualification-form {\n  padding: 20px;\n}\n.qualification-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\n.qualification-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.qualification-form fieldset ol {\n    padding-left: 25px;\n}\n.qualification-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.qualification-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.qualification-form .el-upload-list-box,\n.qualification-form .el-upload-list-box + div {\n  float: left;\n}\n.qualification-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 300px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container,\n#tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "M2uz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("FAA0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("42276cce", content, true);

/***/ }),

/***/ "i6oQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent-check/qualification/QualificationDetail.vue
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




/* harmony default export */ var QualificationDetail = ({
	name: "Collect",
	data: function data() {
		return {
			ruleForm: {
				status: null,
				fail_reason: null
			},
			qualification: {},
			dialogImageUrl1: "",
			dialogVisible1: false,
			rules: {
				status: [{
					required: true,
					message: "请选择审核状态",
					trigger: "blur"
				}],
				fail_reason: [{
					required: true,
					message: "请输入驳回原因",
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.getQualificationDetail(this.$route.params.id);
	},

	methods: {
		handlePictureCardPreview1: function handlePictureCardPreview1(url) {
			this.dialogImageUrl1 = url;
			this.dialogVisible1 = true;
		},
		confrimPass: function confrimPass(formName, id) {
			var _this = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					Object(house["m" /* editQualification */])({
						id: id,
						status: _this.ruleForm.status,
						fail_reason: _this.ruleForm.fail_reason
					}).then(function () {
						_this.getQualificationDetail(_this.$route.params.id);
					});
				}
			});
		},
		cancelPass: function cancelPass(id) {
			var _this2 = this;

			Object(house["m" /* editQualification */])({
				id: id,
				status: 2
			}).then(function () {
				_this2.getQualificationDetail(_this2.$route.params.id);
			});
		},
		getQualificationDetail: function getQualificationDetail(id) {
			var _this3 = this;

			Object(house["K" /* getQualificationDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this3.qualification = data;
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-27b885d7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent-check/qualification/QualificationDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qualification-form"},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[_c('el-form-item',{attrs:{"label":"企业全称："}},[_vm._v("\n\t\t\t"+_vm._s(_vm.qualification.company_name)+"\n\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业代码："}},[_vm._v("\n\t\t\t"+_vm._s(_vm.qualification.company_code)+"\n\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证明图片："}},[_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.qualification.file),function(item,index){return _c('li',{key:'img_'+index,staticClass:"el-upload-list__item is-success",staticStyle:{"cursor":"pointer"},attrs:{"tabindex":"0"},on:{"click":function($event){_vm.handlePictureCardPreview1(item)}}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":item,"alt":""}})])}))]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业资质状态："}},[_vm._v("\n\t\t\t"+_vm._s(['待审核','通过','未通过','重申'][_vm.qualification.status])+"\n\t\t")]),_vm._v(" "),(_vm.qualification.status==2)?_c('el-form-item',{attrs:{"label":"驳回原因："}},[_vm._v("\n\t\t\t"+_vm._s(_vm.qualification.fail_reason)+"\n\t\t")]):_vm._e(),_vm._v(" "),(_vm.qualification.status==0||_vm.qualification.status==3)?_c('el-form-item',{attrs:{"label":"审核状态","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")])],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status==2 && (_vm.qualification.status==0||_vm.qualification.status==3))?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),(_vm.qualification.status==0||_vm.qualification.status==3)?_c('el-form-item',{attrs:{"label":""}},[_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.confrimPass('ruleForm',_vm.qualification.id)}}},[_vm._v("确定")])],1):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var qualification_QualificationDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent-check/qualification/QualificationDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("M2uz")
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
  QualificationDetail,
  qualification_QualificationDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_check_qualification_QualificationDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
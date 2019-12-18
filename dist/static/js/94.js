webpackJsonp([94],{

/***/ "jOH2":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("xLeT");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("01e607ac", content, true);

/***/ }),

/***/ "olma":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/cashDetail.vue
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


/* harmony default export */ var cashDetail = ({
	data: function data() {
		return {
			data: {},
			dialogImageUrl: "",
			dialogVisible: false,
			id: this.$route.params.id,
			types: [{
				id: -1,
				name: "待处理"
			}, {
				id: 1,
				name: "已处理"
			}, {
				id: 2,
				name: "处理中"
			}, {
				id: 3,
				name: "撤回"
			}],
			host: "http://" + location.host
			// host: "http://boss.912zufang.com",
		};
	},

	created: function created() {
		this.getRecordDetail();
	},
	methods: {
		handleAvatarSuccess: function handleAvatarSuccess(res, file) {
			this.data.img = res.data.show_url;
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.img;
			this.dialogVisible = true;
		},
		getRecordDetail: function getRecordDetail() {
			var _this = this;

			var data = {
				id: this.$route.params.id
			};
			this.request({
				url: "/fjingling/cashDesc",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.data = data;
					_this.data.outCash = data.activityInfo.outCash;
					_this.data.markRed = data.activityInfo.markRed;
					_this.data.inviteRed = data.activityInfo.inviteRed;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		onSubmit: function onSubmit(formName) {
			var _this2 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					var data = {
						id: _this2.id,
						status: _this2.data.status || '',
						trade_no: _this2.data.tradeNo || '',
						img: _this2.data.img || '',
						remark: _this2.data.remark || ''
					};

					_this2.request({
						url: "/fjingling/cashEdit",
						method: "post",
						data: data
					}).then(function (response) {
						if (response.data.status) {
							_this2.$message({
								message: "编辑成功",
								type: "success",
								duration: 3 * 1000
							});
							_this2.getRecordDetail();
						}
					}).catch(function (err) {
						console.log(err);
					});
				}
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0fa808ab","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/cashDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"200px"}},[_c('el-form-item',{attrs:{"label":"姓名","prop":"name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"姓名","disabled":""},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提现人手机号","prop":"cashOutMobile"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"提现人手机号","disabled":""},model:{value:(_vm.data.cashOutMobile),callback:function ($$v) {_vm.$set(_vm.data, "cashOutMobile", $$v)},expression:"data.cashOutMobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.data.payType==1?'支付宝姓名':'微信昵称',"prop":"alipayName"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"姓名/昵称","disabled":""},model:{value:(_vm.data.alipayName),callback:function ($$v) {_vm.$set(_vm.data, "alipayName", $$v)},expression:"data.alipayName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.data.payType==1?'支付宝账号':'微信账号',"prop":"alipay"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"账号","disabled":""},model:{value:(_vm.data.alipay),callback:function ($$v) {_vm.$set(_vm.data, "alipay", $$v)},expression:"data.alipay"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邀请金额"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"邀请金额","disabled":""},model:{value:(_vm.data.inviteRed),callback:function ($$v) {_vm.$set(_vm.data, "inviteRed", $$v)},expression:"data.inviteRed"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"鲸动红包","prop":"markRed"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"鲸动红包","disabled":""},model:{value:(_vm.data.markRed),callback:function ($$v) {_vm.$set(_vm.data, "markRed", $$v)},expression:"data.markRed"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"已提现金额","prop":"outCash"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"已提现金额","disabled":""},model:{value:(_vm.data.outCash),callback:function ($$v) {_vm.$set(_vm.data, "outCash", $$v)},expression:"data.outCash"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提现金额","prop":"amount"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"提现金额","disabled":""},model:{value:(_vm.data.amount),callback:function ($$v) {_vm.$set(_vm.data, "amount", $$v)},expression:"data.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"交易流水号","prop":"tradeNo"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"交易流水号"},model:{value:(_vm.data.tradeNo),callback:function ($$v) {_vm.$set(_vm.data, "tradeNo", $$v)},expression:"data.tradeNo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"交易截图","prop":"img"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess}},[(_vm.data.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.data.img}}):_vm._e(),_vm._v(" "),(_vm.data.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.data)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.data.img)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()])],1),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否处理","prop":"status"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},_vm._l((this.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"客服备注","maxlength":"255"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.data.history && _vm.data.history.length>0)?_c('ol',_vm._l((_vm.data.history),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_cashDetail = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/cashDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("jOH2")
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
  cashDetail,
  fjingling_cashDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_cashDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xLeT":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.brand-form {\n  padding: 50px 20px;\n}\n.brand-form .el-tabs--border-card {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n", ""]);

// exports


/***/ })

});
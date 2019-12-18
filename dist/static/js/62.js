webpackJsonp([62],{

/***/ "DHqy":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bN9K");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6a9cbfb9", content, true);

/***/ }),

/***/ "JTVT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/AgentDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AgentDetail = ({
	data: function data() {
		return {
			data: {
				id: '',
				name: '',
				company: '',
				companyId: '',
				post: '',
				mobile: '',
				qqNum: '',
				weChatNum: '',
				broker: '',
				addTime: '',
				remark: ''
			},
			mendianList: [],
			remarkLists: [],
			loading: false,
			id: this.$route.params.id,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			company: null,
			rules: {
				name: [{
					required: true,
					message: "请输入经纪人姓名",
					trigger: "blur"
				}],
				companyId: [{
					required: true,
					message: "请选择门店信息",
					trigger: "blur"
				}],
				post: [{
					required: true,
					message: "请输入工作岗位信息",
					trigger: "blur"
				}],
				mobile: [{
					required: true,
					message: "请输入正确的手机号",
					trigger: "blur"
				}, {
					pattern: /^1[123456789]\d{9}$/,
					message: "请输入正确的手机号！"
				}]
			}
		};
	},

	created: function created() {
		if (this.$route.params.company && this.$route.params.companyId) this.mendianList.push({
			id: this.$route.params.companyId,
			name: this.$route.params.company
		});
		this.data.company = this.$route.params.company;
		this.data.companyId = this.$route.params.companyId;
		this.company = { name: this.$route.params.company, id: this.$route.params.companyId };
		if (this.$route.params.id != 0) this.getRecordDetail();
	},
	methods: {
		handleSelect: function handleSelect() {
			this.data.company = this.company.name;
			this.data.companyId = this.company.id;
		},
		getMendianlist: function getMendianlist(queryString) {
			var _this = this;

			Object(fjingling["k" /* getMendianlist */])({
				keyword: queryString //房源编号
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.mendianList = data;
				}
			});
		},
		addMendian: function addMendian() {
			this.$router.push({
				name: "addExtension"
			});
		},
		getRecordDetail: function getRecordDetail() {
			var _this2 = this;

			var data = {
				id: this.$route.params.id
			};
			this.request({
				url: "/fjingling/agentDesc",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					data.remark = '';
					_this2.data = data;
					if (data.companyId && data.company) {
						_this2.mendianList.push({
							id: data.companyId,
							name: data.company
						});
						_this2.company = { name: data.company, id: data.companyId };
					}
					if (data.history) {
						_this2.remarkLists = data.history;
					}
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		onSubmit: function onSubmit(formName) {
			var _this3 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					var data = {
						name: _this3.data.name,
						company: _this3.data.company,
						companyId: _this3.data.companyId,
						post: _this3.data.post,
						mobile: _this3.data.mobile,
						qqNum: _this3.data.qqNum,
						weChatNum: _this3.data.weChatNum,
						broker: _this3.data.broker,
						remark: _this3.data.remark
					};
					if (_this3.$route.params.id != 0) {
						data.id = _this3.data.id;
					}
					_this3.request({
						url: "/fjingling/agentAdd",
						method: "post",
						data: data
					}).then(function (response) {
						if (response.data.status) {
							_this3.$message({
								message: "编辑成功",
								type: "success",
								duration: 3 * 1000
							});
							// this.getRecordDetail();
							setTimeout(function () {
								_this3.$store.dispatch("delView", _this3.$route);
								_this3.$router.go(-1);
							}, 500);
						}
					}).catch(function (err) {
						console.log(err);
					});
				}
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64547539","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/AgentDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"office-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"rules":_vm.rules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"客户名称 ","prop":"name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"text","placeholder":"客户名称"},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属门店","prop":"companyId"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.getMendianlist,"loading":_vm.loading},on:{"change":_vm.handleSelect},model:{value:(_vm.company),callback:function ($$v) {_vm.company=$$v},expression:"company"}},_vm._l((_vm.mendianList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item}})})),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addMendian}},[_vm._v("新增门店")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"工作岗位","prop":"post"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"text","maxlength":"100","placeholder":"工作岗位"},model:{value:(_vm.data.post),callback:function ($$v) {_vm.$set(_vm.data, "post", $$v)},expression:"data.post"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机","prop":"mobile"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"number","maxlength":"11","placeholder":"手机号码"},model:{value:(_vm.data.mobile),callback:function ($$v) {_vm.$set(_vm.data, "mobile", $$v)},expression:"data.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"微信","prop":"weChatNum"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"text","maxlength":"100","placeholder":"微信号码"},model:{value:(_vm.data.weChatNum),callback:function ($$v) {_vm.$set(_vm.data, "weChatNum", $$v)},expression:"data.weChatNum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"QQ","prop":"qqNum"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"number","maxlength":"15","placeholder":"QQ号码"},model:{value:(_vm.data.qqNum),callback:function ($$v) {_vm.$set(_vm.data, "qqNum", $$v)},expression:"data.qqNum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":7,"placeholder":"其他（备注）","maxlength":"200","show-word-limit":""},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"对接人","prop":"broker"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"text","maxlength":"10","placeholder":"对接人"},model:{value:(_vm.data.broker),callback:function ($$v) {_vm.$set(_vm.data, "broker", $$v)},expression:"data.broker"}})],1),_vm._v(" "),(_vm.data.id)?_c('el-form-item',{attrs:{"label":"记录时间","prop":"addTime"}},[_c('span',[_vm._v(_vm._s(_vm.data.addTime))])]):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_AgentDetail = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/AgentDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("DHqy")
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
  AgentDetail,
  fjingling_AgentDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_AgentDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "bN9K":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.office-form {\n  padding: 20px;\n}\n.office-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  min-height: 360px;\n  width: 100%;\n}\n.office-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.office-form fieldset ol {\n    padding-left: 25px;\n}\n.office-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.office-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.office-form .el-upload-list-box,\n.office-form .el-upload-list-box + div {\n  float: left;\n}\n.office-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box1 .mce-container,\n#tinymcy-box1 .mce-container *,\n#tinymcy-box2 .mce-container,\n#tinymcy-box2 .mce-container *,\n#tinymcy-box3 .mce-container,\n#tinymcy-box3 .mce-container *,\n#tinymcy-box4 .mce-container,\n#tinymcy-box4 .mce-container * {\n  white-space: normal;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/***/ })

});
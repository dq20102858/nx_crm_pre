webpackJsonp([27],{

/***/ "HNrF":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.card-url {\n  width: 200px;\n  height: 200px;\n  display: inline-block;\n}\n.brand-form {\n  padding: 20px;\n}\n.brand-form .el-tabs--border-card {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.brand-form .el-tabs__item {\n  padding: 0 10px !important;\n}\n.brand-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.brand-form .el-upload-list-box,\n.brand-form .el-upload-list-box + div {\n  float: left;\n}\n.brand-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container,\n#tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "otJo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/components/ImageCropper/index.vue + 6 modules
var ImageCropper = __webpack_require__("Oakg");

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/brand.js
var brand = __webpack_require__("q2/m");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/brand/ClaimDetail.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var ClaimDetail = ({
	name: "ClaimDetail",
	components: { Tinymce: Tinymce["a" /* default */], ImageCropper: ImageCropper["a" /* default */] },
	data: function data() {
		return {
			ruleForm: {
				id: null,
				userName: null,
				mobile: null,
				areaInfo: null,
				area: [],
				brandId: null,
				cardUrl: null,
				status: null,
				bindBrand: null,
				remark: null

			},
			imagecropperShow: false,
			selectedAreaId: [],
			selectedAll: [],
			selectedAreaName: [],
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			props: {
				multiple: true,
				checkStrictly: true
			},
			// props: { multiple: true },
			loading: false,
			remarkLists: [],
			rules: {},
			areaList: [],
			fileList: [],
			brandNameList: [],
			imagecropperKey: 0,
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogVisible: false,
			dialogImageUrl: ''
		};
	},

	created: function created() {
		this.getClaimAreaDistrictList();
		if (this.$route.params.id > 0) {
			this.getClaimDetail(this.$route.params.id);
		}
	},
	watch: {
		$route: function $route(to, from) {
			this.globalEvBus.$emit("reload");
		}
	},
	methods: {
		handleClose: function handleClose(index) {
			this.selectedAll.splice(index, 1);
			this.selectedAreaId.splice(index, 1);
			this.selectedAreaName.splice(index, 1);
		},

		// cropSuccess(resData) {
		// 	this.imagecropperShow = false;
		// 	this.imagecropperKey = this.imagecropperKey + 1;
		// 	this.ruleForm.img = resData.data.show_url;
		// 	this.ruleForm.cardUrl = resData.data.show_url;
		// },
		// close() {
		// 	this.imagecropperShow = false;
		// },
		handleImgRemove: function handleImgRemove(file, fileList) {
			this.fileList = [];
			this.ruleForm.cardUrl = '';
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			if (res.data.show_url.includes('@!small')) {
				res.data.show_url = res.data.show_url.replace('@!small', '@!origin');
				this.ruleForm.cardUrl = res.data.show_url;
				this.fileList.splice(0, 1, {
					url: res.data.show_url,
					title: ""
				});
			} else {
				this.ruleForm.cardUrl = res.data.show_url;
				this.fileList.splice(0, 1, {
					url: res.data.show_url,
					title: ""
				});
			}
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.cardUrl || file.url;
			this.dialogVisible = true;
		},
		getCheckedNodes: function getCheckedNodes(data, opt) {
			var _this = this;

			var name1 = this.$refs['cascaderAddr'].currentLabels[1];
			var name0 = this.$refs['cascaderAddr'].currentLabels[0];
			var data1 = data[1];
			var data0 = data[0];
			if (data.length == 1) {
				if (data[0] == '1-0-0') {
					this.selectedAll = [];
					this.selectedAreaId = [];
					this.selectedAreaName = [];
					this.selectedAll.push({
						value: data0,
						label: name0
					});
					this.selectedAreaId.push(data0);
					this.selectedAreaName.push(name0);
				}
			} else {
				if (this.selectedAreaId.includes('1-0-0')) {
					var index = this.selectedAreaId.indexOf('1-0-0');
					this.selectedAll.splice(index, 1);
					this.selectedAreaId.splice(index, 1);
					this.selectedAreaName.splice(index, 1);
				}
				if (data0 == data1) {
					var tempArr = [];
					var tempName = [];
					var tempAll = [];
					this.selectedAreaId.forEach(function (item, index) {
						var temp = data0.split('-')[1];
						if (!item.includes(temp)) {
							tempArr.push(item);
							tempAll.push(_this.selectedAll[index]);
							tempName.push(_this.selectedAreaName[index]);
						} else {}
					});
					this.selectedAreaId = tempArr;
					this.selectedAreaName = tempName;
					this.selectedAll = tempAll;
					this.selectedAll.push({
						value: data0,
						label: name0
					});
					this.selectedAreaId.push(data0);
					this.selectedAreaName.push(name0);
				} else {
					if (!this.selectedAreaId.includes(data1)) {
						var _tempArr = [];
						this.selectedAreaId.forEach(function (item, index) {

							if (item.includes(data0)) {
								_this.selectedAll.splice(index, 1);
								_this.selectedAreaName.splice(index, 1);
							} else {
								_tempArr.push(item);
							}
						});
						this.selectedAreaId = _tempArr;
						this.selectedAll.push({
							value: data1,
							label: name0 + "-" + name1
						});
						this.selectedAreaId.push(data1);
						this.selectedAreaName.push(name0 + "-" + name1);
					}
				}
			}
		},
		editBrand: function editBrand(query) {
			var _this2 = this;

			if (query !== "") {
				this.loading = true;
				Object(brand["d" /* editBrand */])(query).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this2.loading = false;
						_this2.brandNameList = data.map(function (item, index) {
							return { value: item.brandId, label: item.brandName };
						});
					} else {
						_this2.$message({
							message: response.data.msg,
							type: "warning"
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				this.brandNameList = [];
			}
		},
		getClaimAreaDistrictList: function getClaimAreaDistrictList() {
			var _this3 = this;

			Object(brand["l" /* getClaimAreaDistrictList */])().then(function (response) {
				var data = response.data.data;
				_this3.areaList = data;
				// this.ruleForm = Object.assign(this.ruleForm, data);
			}).catch(function (err) {
				console.log(err);
			});
		},
		getClaimDetail: function getClaimDetail(id) {
			var _this4 = this;

			Object(brand["m" /* getClaimDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this4.remarkLists = data.remarkLists;
				_this4.selectedAreaId = data.area;
				_this4.selectedAreaName = data.areaInfo.split(';');
				_this4.selectedAll = _this4.selectedAreaId.map(function (item, index) {
					return {
						value: item,
						label: _this4.selectedAreaName[index]
					};
				});
				if (data.cardUrl.includes('@!small')) {
					data.cardUrl = data.cardUrl.replace('@!small', '@!origin');
					_this4.fileList.push({
						url: data.cardUrl,
						title: ""
					});
				} else {
					_this4.fileList.push({
						url: data.cardUrl,
						title: ""
					});
				}
				_this4.ruleForm = assign_default()(_this4.ruleForm, data);
				_this4.brandNameList.push({
					value: data.brandId,
					label: data.brandName
				});
			}).catch(function (err) {
				console.log(err);
			});
		},

		/**
   * 提交表单
   *
   */
		submitForm: function submitForm(formName) {
			var _this5 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this5.editOrAddOffice();
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this6 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				this.ruleForm.area = this.selectedAreaId;
				this.ruleForm.areaInfo = this.selectedAreaName.join(',');
				Object(brand["f" /* editClaimDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this6.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this6.$store.dispatch("delView", _this6.$route);
							_this6.$router.go(-1);
						}, 500);
					} else {
						_this6.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			}
		},
		resetForm: function resetForm(formName) {
			this.$refs[formName].resetFields();
			this.isShow = false;
			this.has_phone = true;
			this.show_user_agent = false;
			this.ruleForm.user_agent = "";
			this.ruleForm.user_agent_id = 0;
			this.ruleForm.house_agent_id = 0;
			this.ruleForm.house_agent = "";
			this.ruleForm.lprice = "";
			this.ruleForm.gprice = "";
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e633bb22","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/brand/ClaimDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[_c('el-form-item',{attrs:{"label":"认领姓名","prop":"userName"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入认领姓名"},model:{value:(_vm.ruleForm.userName),callback:function ($$v) {_vm.$set(_vm.ruleForm, "userName", $$v)},expression:"ruleForm.userName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"认领人电话","prop":"mobile"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入认领人电话"},model:{value:(_vm.ruleForm.mobile),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mobile", $$v)},expression:"ruleForm.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"认领品牌","prop":"brandName"}},[_c('el-select',{staticStyle:{"'width":"400px"},attrs:{"filterable":"","remote":"","placeholder":"认领品牌","remote-method":_vm.editBrand,"loading":_vm.loading},model:{value:(_vm.ruleForm.brandId),callback:function ($$v) {_vm.$set(_vm.ruleForm, "brandId", $$v)},expression:"ruleForm.brandId"}},_vm._l((_vm.brandNameList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"负责区域","prop":"area"}},[_c('div',{staticClass:"tags"},_vm._l((_vm.selectedAll),function(item,index){return _c('el-tag',{key:item.value,attrs:{"closable":"","disable-transitions":false},on:{"close":function($event){_vm.handleClose(index)}}},[_vm._v(_vm._s(item.label))])})),_vm._v(" "),_c('el-cascader',{ref:"cascaderAddr",attrs:{"options":_vm.areaList,"props":_vm.props},on:{"change":_vm.getCheckedNodes}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"认领人名片","prop":"cardUrl"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-form-item',[_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("审核不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("待审核")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("审核通过")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否绑定品牌"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.bindBrand),callback:function ($$v) {_vm.$set(_vm.ruleForm, "bindBrand", $$v)},expression:"ruleForm.bindBrand"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入备注","minlength":"10","maxlength":"300","rows":"3"},model:{value:(_vm.ruleForm.remark),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remark", $$v)},expression:"ruleForm.remark"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"word-break":"break-all"},attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var brand_ClaimDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/brand/ClaimDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("qeQg")
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
  ClaimDetail,
  brand_ClaimDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_brand_ClaimDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qeQg":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("HNrF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("24cf8c0a", content, true);

/***/ })

});
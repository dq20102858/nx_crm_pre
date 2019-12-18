webpackJsonp([41],{

/***/ "KAE+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("NU4U");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2547d8d2", content, true);

/***/ }),

/***/ "NU4U":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "lP/C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/rent.js
var rent = __webpack_require__("trck");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent/StreetManager.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var StreetManager = ({
	name: "StreetManager",
	data: function data() {
		return {
			officeList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				area: null,
				area2: null
			},
			ruleForm: {
				province: 7,
				city: 25,
				area: null,
				street: null,
				shop_name: null,
				status: null
			},
			isEdit: true,
			areas: null,
			districts: null,
			arealist: {
				province: [],
				city: [],
				area: [],
				street: []
			},
			loading: false,
			dialogAdminFormVisible: false,
			titleAdd: "新增类别",
			titleEdit: "编辑类别",
			title: this.titleAdd,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			rules: {
				province: [{
					required: true,
					message: "请填写省份",
					trigger: "blur"
				}],
				city: [{
					required: true,
					message: "请填写城市",
					trigger: "blur"
				}],
				area: [{
					required: true,
					message: "请填写区域",
					trigger: "blur"
				}],
				street: [{
					required: true,
					message: "请填写街道",
					trigger: "blur"
				}],
				shop_name: [{
					required: true,
					message: "请填写名称",
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.getprovince(0);
		this.handlechangearea("province", "city", "init");
		this.handlechangearea("city", "area", "init");
		this.getAreaLists();
		this.getStreetList();
	},
	methods: {
		handlechangearea: function handlechangearea(code, name, init) {
			var _this = this;

			if (!init) {
				if (code == "province") {
					this.ruleForm.city = null;
					this.ruleForm.area = null;
					this.ruleForm.street = null;
				}
				if (code == "city") {
					this.ruleForm.area = null;
					this.ruleForm.street = null;
				}
				if (code == "area") {
					this.ruleForm.street = null;
				}
			}
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm[code]).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.arealist[name] = data;
					console.log(_this.arealist[name]);
				} else {
					_this.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		addOneAdmin: function addOneAdmin(formName) {
			var _this2 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					if (_this2.isEdit) {
						Object(rent["r" /* updateStreet */])(_this2.ruleForm).then(function (res) {
							if (res.data.status) {
								_this2.$message({
									message: res.data.msg,
									type: "success"
								});
							} else {
								_this2.$message(res.data.msg);
							}
							_this2.dialogAdminFormVisible = false;
							_this2.getStreetList();
						});
					} else {
						Object(rent["c" /* addStreet */])(_this2.ruleForm).then(function (res) {
							if (res.data.status) {
								_this2.$message({
									message: res.data.msg,
									type: "success"
								});
							} else {
								_this2.$message(res.data.msg);
							}
							_this2.dialogAdminFormVisible = false;
							_this2.getStreetList();
						});
					}
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		openAdminDialog: function openAdminDialog() {
			this.title = this.titleAdd;
			this.isEdit = false;
			this.dialogAdminFormVisible = true;
			this.$refs["ruleForm"].clearValidate();
			this.ruleForm = {
				province: 7,
				city: 25,
				area: null,
				street: null,
				shop_name: null,
				status: null
			};
			this.handlechangearea("province", "city", "init");
			this.handlechangearea("city", "area", "init");
			this.handlechangearea("area", "street", "init");
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getStreetList();
		},
		getAreaLists: function getAreaLists() {
			var _this3 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.areas = data;
				} else {
					_this3.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getprovince: function getprovince(code) {
			var _this4 = this;

			Object(requirement["s" /* getDistrictLists */])(code).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.arealist.province = data;
				} else {
					_this4.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea: function changeArea() {
			var _this5 = this;

			this.searchForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.searchForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this5.districts = data;
				} else {
					_this5.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		edit: function edit(data) {
			var _this6 = this;

			this.title = this.titleEdit;
			this.dialogAdminFormVisible = true;
			this.isEdit = true;
			this.$refs["ruleForm"].clearValidate();
			Object(rent["o" /* getStreetDetail */])(data.id).then(function (res) {
				_this6.ruleForm = res.data.data;
				_this6.ruleForm.status = Number(res.data.data.status);
				_this6.handlechangearea("province", "city", "init");
				_this6.handlechangearea("city", "area", "init");
				_this6.handlechangearea("area", "street", "init");
			});
		},
		getStreetList: function getStreetList(param) {
			var _this7 = this;

			if (param) {
				this.page = 1;
			}
			Object(rent["p" /* getStreetList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this7.officeList = data.data;
					_this7.total = data.total;
					_this7.pagesize = Number(data.per_page);
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this8 = this;

			this.$confirm("你确定要删除此商圈街道信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				Object(rent["f" /* delStreet */])({
					ids: String(row.id)
				}).then(function (response) {
					_this8.$message({
						type: response.data.status ? "success" : "error",
						message: response.data.msg
					});

					_this8.getStreetList();
				}).catch(function (err) {
					console.log(err);
				});
			}).catch(function () {
				_this8.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9d80187c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent/StreetManager.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"区域"},on:{"change":_vm.changeArea},model:{value:(_vm.searchForm.area),callback:function ($$v) {_vm.$set(_vm.searchForm, "area", $$v)},expression:"searchForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"街道"},model:{value:(_vm.searchForm.area2),callback:function ($$v) {_vm.$set(_vm.searchForm, "area2", $$v)},expression:"searchForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"无效","value":0}},[_vm._v(" 无效")]),_vm._v(" "),_c('el-option',{attrs:{"label":"有效","value":1}},[_vm._v(" 有效")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getStreetList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"city_name","label":"城市"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"area_name","label":"区域"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"street_name","label":"街道"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shop_name","label":"名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.edit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"100px"}},[_c('el-row',[_c('el-col',{staticStyle:{"width":"220px"}},[_c('el-form-item',{attrs:{"label":"区域选择","prop":"province"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"省"},on:{"change":function($event){_vm.handlechangearea('province','city')}},model:{value:(_vm.ruleForm.province),callback:function ($$v) {_vm.$set(_vm.ruleForm, "province", $$v)},expression:"ruleForm.province"}},_vm._l((_vm.arealist.province),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"120px"}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"city"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"市"},on:{"change":function($event){_vm.handlechangearea('city','area')}},model:{value:(_vm.ruleForm.city),callback:function ($$v) {_vm.$set(_vm.ruleForm, "city", $$v)},expression:"ruleForm.city"}},_vm._l((_vm.arealist.city),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"120px"}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"区域"},on:{"change":function($event){_vm.handlechangearea('area','street')}},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.arealist.area),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"120px"}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"street"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"街道"},model:{value:(_vm.ruleForm.street),callback:function ($$v) {_vm.$set(_vm.ruleForm, "street", $$v)},expression:"ruleForm.street"}},_vm._l((_vm.arealist.street),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"名称","prop":"shop_name"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"名称"},model:{value:(_vm.ruleForm.shop_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "shop_name", $$v)},expression:"ruleForm.shop_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("无效")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var rent_StreetManager = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent/StreetManager.vue
function injectStyle (ssrContext) {
  __webpack_require__("KAE+")
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
  StreetManager,
  rent_StreetManager,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_rent_StreetManager = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
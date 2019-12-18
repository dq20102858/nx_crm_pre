webpackJsonp([18],{

/***/ "AWnF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = getCellList;
/* harmony export (immutable) */ __webpack_exports__["f"] = getCellHouse;
/* harmony export (immutable) */ __webpack_exports__["b"] = delCell;
/* harmony export (immutable) */ __webpack_exports__["e"] = getCellDetail;
/* harmony export (immutable) */ __webpack_exports__["d"] = editCell;
/* harmony export (immutable) */ __webpack_exports__["a"] = addCell;
/* harmony export (immutable) */ __webpack_exports__["h"] = getConfigList;
/* harmony export (immutable) */ __webpack_exports__["c"] = delCellhouse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__("vLgD");



function getCellList(page, params) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/lists',
    method: 'get',
    params: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ page: page }, params)
  });
}

function getCellHouse(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/getHouseLists',
    method: 'get',
    params: params
  });
}

function delCell(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/delEstate',
    method: 'get',
    params: id
  });
}

function getCellDetail(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/detail',
    method: 'get',
    params: { id: id }
  });
}

function editCell(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/editDo',
    method: 'post',
    data: data
  });
}

function addCell(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/addDo',
    method: 'post',
    data: data
  });
}

function getConfigList() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/estateConfig',
    method: 'get'
  });
}

function delCellhouse(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/estate/delHouse',
    method: 'get',
    params: params
  });
}

/***/ }),

/***/ "Wn+a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("n2WY");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("8404df6e", content, true);

/***/ }),

/***/ "n2WY":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "uQrc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/cell.js
var cell = __webpack_require__("AWnF");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/common/common.js
var common_common = __webpack_require__("Kw+B");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent/cell/Cell.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Cell = ({
	name: "Cell",
	data: function data() {
		return {
			officeList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 20,
			page: 1,
			searchForm: {
				keyword: null,
				web_id: null,
				area: null,
				area2: null,
				price_selected: null,
				role: null,
				agent: null,
				agent_id: null
			},
			areas: null,
			districts: null,
			roles: [],
			agents: [],
			loading: false,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			park_price: [{ id: 1, name: "1万元以下", value: [0, 10000] }, { id: 2, name: "1-2万元", value: [10000, 20000] }, { id: 3, name: "2-2.5万元", value: [20000, 25000] }, { id: 4, name: "2.5-3万元", value: [25000, 30000] }, { id: 5, name: "3-3.5万元", value: [30000, 35000] }, { id: 6, name: "3.5-4万元", value: [35000, 40000] }, { id: 7, name: "4万元以上", value: 40000 }, { id: 0, name: "价格输入", value: 40000 }],
			park_mianji: [{ id: 1, name: "5000㎡以下", value: [0, 5000] }, { id: 2, name: "5000-1万㎡", value: [5000, 10000] }, { id: 3, name: "1万-1.5万㎡", value: [10000, 15000] }, { id: 4, name: "1.5万-2万㎡", value: [15000, 20000] }, { id: 5, name: "2万-3万㎡", value: [20000, 30000] }, { id: 6, name: "3万-5万㎡", value: [30000, 50000] }, { id: 7, name: "5万以上", value: 50000 }, { id: 0, name: "面积输入", value: 40000 }],
			rules: {}
		};
	},

	created: function created() {
		this.getAreaLists();
		this.getCellList();
		this.changeAgents();
	},
	methods: {
		searchAgents: function searchAgents(query) {
			var _this = this;

			if (query !== "") {
				this.loading = true;
				Object(common_common["b" /* changeAgents */])(this.searchForm.role, query).then(function (response) {
					_this.loading = false;
					var data = response.data.data;
					if (data) {
						_this.roles = data.roles;
						_this.agents = data.lists;
					} else {
						_this.$message({
							message: response.data.msg,
							type: "warning"
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			}
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getCellList();
		},
		getAreaLists: function getAreaLists() {
			var _this2 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.areas = data;
				} else {
					_this2.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea: function changeArea() {
			var _this3 = this;

			this.searchForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.searchForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.districts = data;
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
		handleCreate: function handleCreate() {
			//跳转到详情页
			this.$router.push({
				name: "CellDetail",
				params: { id: 0 }
			});
		},
		changeAgents: function changeAgents() {
			var _this4 = this;

			this.searchForm.agent = "";
			Object(common_common["b" /* changeAgents */])(this.searchForm.role).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.roles = data.roles;
					_this4.agents = data.lists;
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
		handleUpdate: function handleUpdate(row) {
			//跳转到详情页
			this.$router.push({
				name: "CellDetail",
				params: { id: row.id }
			});
		},
		getCellList: function getCellList(param) {
			var _this5 = this;

			if (param) {
				this.page = 1;
			}
			Object(cell["g" /* getCellList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this5.officeList = data.data;
					_this5.total = data.total;
					_this5.pagesize = Number(data.per_page);
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleEdit: function handleEdit(index, row) {
			//跳转到详情页
			Object(auth["n" /* setUserId */])(row.id);
			this.$router.push({ name: "userDetail", query: { id: row.id } });
		},
		handleDelete: function handleDelete(index, row) {
			var _this6 = this;

			this.$confirm("你确定要删除此小区的信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this6.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(cell["b" /* delCell */])({
						id: row.id
					}).then(function (response) {
						_this6.getCellList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this6.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-545444da","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent/cell/Cell.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"区域"},on:{"change":_vm.changeArea},model:{value:(_vm.searchForm.area),callback:function ($$v) {_vm.$set(_vm.searchForm, "area", $$v)},expression:"searchForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"街道"},model:{value:(_vm.searchForm.area2),callback:function ($$v) {_vm.$set(_vm.searchForm, "area2", $$v)},expression:"searchForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"角色"},on:{"change":_vm.changeAgents},model:{value:(_vm.searchForm.role),callback:function ($$v) {_vm.$set(_vm.searchForm, "role", $$v)},expression:"searchForm.role"}},_vm._l((_vm.roles),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.role==99)?_c('el-form-item',{key:"a1"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"请输入经纪人关键字","remote":"","remote-method":_vm.searchAgents,"clearable":"","reserve-keyword":"","filterable":"","loading":_vm.loading},model:{value:(_vm.searchForm.agent_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent_id", $$v)},expression:"searchForm.agent_id"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})}))],1):_c('el-form-item',{key:"a2"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"发布人","clearable":"","reserve-keyword":"","filterable":"","loading":_vm.loading},model:{value:(_vm.searchForm.agent_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent_id", $$v)},expression:"searchForm.agent_id"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"价格"},model:{value:(_vm.searchForm.price_selected),callback:function ($$v) {_vm.$set(_vm.searchForm, "price_selected", $$v)},expression:"searchForm.price_selected"}},_vm._l((_vm.park_price),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.price_selected===0)?_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最小价格"},model:{value:(_vm.searchForm.min_price),callback:function ($$v) {_vm.$set(_vm.searchForm, "min_price", $$v)},expression:"searchForm.min_price"}}),_vm._v(" -\n\t\t\t"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最大价格"},model:{value:(_vm.searchForm.max_price),callback:function ($$v) {_vm.$set(_vm.searchForm, "max_price", $$v)},expression:"searchForm.max_price"}}),_vm._v(" 万元\n\t\t")],1):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"来源"},model:{value:(_vm.searchForm.web_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "web_id", $$v)},expression:"searchForm.web_id"}},[_c('el-option',{attrs:{"label":"安居客","value":"2"}},[_vm._v(" 安居客")]),_vm._v(" "),_c('el-option',{attrs:{"label":"58同城","value":"3"}},[_vm._v(" 58同城")]),_vm._v(" "),_c('el-option',{attrs:{"label":"赶集","value":"4"}},[_vm._v(" 赶集")]),_vm._v(" "),_c('el-option',{attrs:{"label":"912好房网","value":"6"}},[_vm._v(" 912好房网")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"待审","value":"-1"}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"通过","value":"1"}},[_vm._v(" 通过")]),_vm._v(" "),_c('el-option',{attrs:{"label":"不通过","value":"2"}},[_vm._v(" 不通过")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getCellList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"小区名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"web_name","label":"来源"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ordid","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":_vm.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var cell_Cell = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent/cell/Cell.vue
function injectStyle (ssrContext) {
  __webpack_require__("Wn+a")
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
  Cell,
  cell_Cell,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_cell_Cell = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
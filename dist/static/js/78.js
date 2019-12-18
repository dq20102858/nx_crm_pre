webpackJsonp([78],{

/***/ "7RoI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "8gkR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/brand.js
var brand = __webpack_require__("q2/m");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/brand/Brand.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// import { changeuserList } from "@/api/common/common";

/* harmony default export */ var Brand = ({
	name: 'Brand',
	data: function data() {
		return {
			officeList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				area: null,
				area2: null,
				area_selected: null,
				price_selected: null,
				role: null,
				agent: null

			},
			areas: null,
			districts: null,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			roles: null,
			userList: null,
			park_price: [{ id: 1, name: "1万元以下", value: [0, 10000] }, { id: 2, name: "1-2万元", value: [10000, 20000] }, { id: 3, name: "2-2.5万元", value: [20000, 25000] }, { id: 4, name: "2.5-3万元", value: [25000, 30000] }, { id: 5, name: "3-3.5万元", value: [30000, 35000] }, { id: 6, name: "3.5-4万元", value: [35000, 40000] }, { id: 7, name: "4万元以上", value: 40000 }, { id: 0, name: "价格输入", value: 40000 }],
			park_mianji: [{ id: 1, name: "5000㎡以下", value: [0, 5000] }, { id: 2, name: "5000-1万㎡", value: [5000, 10000] }, { id: 3, name: "1万-1.5万㎡", value: [10000, 15000] }, { id: 4, name: "1.5万-2万㎡", value: [15000, 20000] }, { id: 5, name: "2万-3万㎡", value: [20000, 30000] }, { id: 6, name: "3万-5万㎡", value: [30000, 50000] }, { id: 7, name: "5万以上", value: 50000 }, { id: 0, name: "面积输入", value: 40000 }],
			rules: {},
			loading: false
		};
	},

	created: function created() {
		// this.getAreaLists();
		this.getBrandList();
		// this.changeuserList();
		this.getUserList();
	},
	methods: {
		handleSortChange: function handleSortChange(val) {
			if (!val.column) {
				return;
			}
			var obj = {
				ordid: { ascending: 2, descending: 1 }
			};
			this.searchForm.sort = obj[val.prop][val.order];
			this.getBrandList();
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getBrandList();
		},
		getUserList: function getUserList() {
			var _this = this;

			Object(brand["p" /* getUserList */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.userList = data;
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
		handleCreate: function handleCreate() {
			//跳转到详情页
			this.$router.push({
				name: "BrandDetail",
				params: { id: 0 }
			});
		},
		handleUpdate: function handleUpdate(row) {
			//跳转到详情页
			this.$router.push({
				name: "BrandDetail",
				params: { id: row.id }
			});
		},
		getBrandList: function getBrandList(num) {
			var _this2 = this;

			if (num) {
				this.page = 1;
			}
			Object(brand["i" /* getBrandList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.officeList = data.data;
					_this2.total = data.total;
					_this2.pagesize = data.per_page;
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
			var _this3 = this;

			this.$confirm("你确定要删除此品牌的信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this3.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(brand["b" /* delBrand */])({
						id: row.id
					}).then(function (response) {
						_this3.getBrandList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this3.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-39bec3dc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/brand/Brand.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"负责人","clearable":"","reserve-keyword":"","filterable":"","loading":_vm.loading},model:{value:(_vm.searchForm.user_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "user_id", $$v)},expression:"searchForm.user_id"}},_vm._l((_vm.userList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"待审","value":"-1"}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"启用","value":"1"}},[_vm._v(" 启用")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getBrandList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList},on:{"sort-change":_vm.handleSortChange}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"品牌名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"price_range","label":"总预算"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"发布时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"sortable":"custom","prop":"ordid","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"statusDesc","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var brand_Brand = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/brand/Brand.vue
function injectStyle (ssrContext) {
  __webpack_require__("O6uf")
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
  Brand,
  brand_Brand,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_brand_Brand = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "O6uf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7RoI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("d2289f12", content, true);

/***/ })

});
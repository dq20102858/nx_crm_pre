webpackJsonp([29],{

/***/ "Lwa5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/912cms/basicSet.js
var basicSet = __webpack_require__("AcY9");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/HomeHouseList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var HomeHouseList = ({
	name: 'HomeHouseList',
	data: function data() {
		return {
			officeList: [], //列表页的数据
			total: 0,
			pagesize: 0,
			page: 1,
			dialogAdminFormVisible: false,
			searchForm: {
				time_range: null,
				keyword: null,
				status: null,
				short_label: null,
				house_type: null
			},
			ruleForm: {},
			catelist1: [],
			catelist2: [],
			cateId1: null,
			areas: null,
			districts: null,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			loading: false
		};
	},

	created: function created() {
		this.gethomeDataList();
		this.getHouseTypeList();
	},
	methods: {
		changecate1: function changecate1(e) {
			var _this = this;

			Object(basicSet["v" /* getShortCate */])(this.searchForm.house_type).then(function (response) {
				if (response.data.data) {
					_this.catelist2 = response.data.data;
				} else {
					_this.catelist2 = '';
				}
				_this.searchForm.short_label = '';
			});
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.gethomeDataList();
		},
		handleUpdate: function handleUpdate(row) {
			this.dialogAdminFormVisible = true;
			this.ruleForm = row;
		},
		addOneAdmin: function addOneAdmin() {
			var _this2 = this;

			Object(basicSet["G" /* updatehomeData */])(this.ruleForm).then(function (res) {
				if (res.data.status) {
					_this2.$message({
						message: res.data.msg,
						type: 'success'
					});
				} else {
					_this2.$message(res.data.msg);
				}
				_this2.dialogAdminFormVisible = false;
				_this2.gethomeDataList();
			});
		},
		handleDetail: function handleDetail(row) {
			//跳转到详情页
			var arr = { 60: 'ShopDetail',
				61: 'OfficeBuildingDetail',
				62: 'RentResidenceDetail',
				65: 'BusinessDetail',
				66: 'OfficeDetail',
				67: 'FactoryDetail',
				68: 'BuildingDetail',
				69: 'BrandDetail',
				70: 'ResidenceDetail',
				71: 'SaleshopDetail',
				72: 'SaleofficeDetail',
				73: 'SalefactoryDetail',
				74: 'CellDetail'
			};
			console.log(arr[row.house_type]);
			this.$router.push({
				name: arr[row.house_type],
				params: { id: row.rental_id }
			});
		},
		gethomeDataList: function gethomeDataList(num) {
			var _this3 = this;

			if (num) {
				this.page = 1;
			}
			Object(basicSet["z" /* gethomeDataList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.officeList = data.data;
					_this3.total = data.total;
					_this3.pagesize = data.per_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getHouseTypeList: function getHouseTypeList() {
			var _this4 = this;

			Object(basicSet["q" /* getHouseTypeList */])().then(function (response) {
				console.log(response);
				var data = response.data.data;
				if (data) {
					_this4.catelist1 = data;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this5 = this;

			this.$confirm("你确定要删除此条房源吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this5.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(basicSet["l" /* delhomeData */])({
						id: row.id
					}).then(function (response) {
						_this5.gethomeDataList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this5.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-db20f530","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/HomeHouseList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"已置顶","value":"1"}},[_vm._v(" 已置顶")]),_vm._v(" "),_c('el-option',{attrs:{"label":"待处理","value":"-1"}},[_vm._v(" 待处理")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{attrs:{"clearable":"","placeholder":"房源类型"},on:{"change":_vm.changecate1},model:{value:(_vm.searchForm.house_type),callback:function ($$v) {_vm.$set(_vm.searchForm, "house_type", $$v)},expression:"searchForm.house_type"}},_vm._l((_vm.catelist1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})),_vm._v(" "),(_vm.searchForm.house_type)?_c('el-select',{attrs:{"clearable":"","placeholder":"短标签"},model:{value:(_vm.searchForm.short_label),callback:function ($$v) {_vm.$set(_vm.searchForm, "short_label", $$v)},expression:"searchForm.short_label"}},_vm._l((_vm.catelist2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})):_vm._e()],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.gethomeDataList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"rental_id","label":"房源ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"house_type_txt","label":"房源类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"short_name","label":"短标签名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"房源信息"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleDetail(scope.row)}}},[_vm._v("查看")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"update_time","label":"发布时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ordid","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_txt","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"编辑房源","visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"排序"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"排序"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("已置顶")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":-1,"value":-1}},[_vm._v("待处理")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var basicSet_HomeHouseList = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/HomeHouseList.vue
function injectStyle (ssrContext) {
  __webpack_require__("ob1C")
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
  HomeHouseList,
  basicSet_HomeHouseList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_basicSet_HomeHouseList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "f8AR":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "ob1C":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f8AR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7767884f", content, true);

/***/ })

});
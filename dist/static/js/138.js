webpackJsonp([138],{

/***/ "9/Cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/components/CheckAll/index.vue + 2 modules
var CheckAll = __webpack_require__("cQ2w");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/customized/Customers.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Customers = ({
	name: "Customers",
	components: {
		CheckAll: CheckAll["a" /* default */]
	},
	data: function data() {
		return {
			lists: [],
			total: 0,
			pagesize: 0,
			page: 1,
			last_page: 1,
			searchForm: {}, //搜索框数据
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			ids: [],
			num: 0
		};
	},

	created: function created() {
		this.getCustomerLists();
	},
	methods: {
		getCustomerLists: function getCustomerLists(param) {
			var _this = this;

			if (param) {
				this.page = 1;
			}
			var data = {
				timeRange: this.searchForm.time_range,
				mobile: this.searchForm.mobile,
				status: this.searchForm.status,
				page: this.page
			};
			this.request({
				url: "/customized/getCustomerLists",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.lists = data.data;
					_this.total = data.total;
					_this.pagesize = parseInt(data.per_page);
					_this.page = parseInt(data.current_page);
					_this.last_page = data.last_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getCustomerLists();
		},
		fetchDetail: function fetchDetail(index, row) {
			this.$router.push({
				name: "CustomerDetail",
				params: { id: row.id }
			});
		},
		handleSelectionChange: function handleSelectionChange(val) {
			this.num = val.length;
			this.ids = val;
		},
		deleteAll: function deleteAll() {
			if (this.ids.length === 0) {
				this.$message({
					type: "warning",
					message: "请选择删除项!",
					duration: 2 * 1000
				});
				return;
			}
			var idList = [];
			this.ids.forEach(function (item) {
				idList.push(item.id);
			});
			this.deleteItem(idList.join(","));
		},
		deleteItem: function deleteItem(id) {
			var _this2 = this;

			this.$confirm("你确定要删除此信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this2.request({
					url: "/customized/deleteCustomer",
					method: "get",
					params: { id: id }
				}).then(function (data) {
					if (data.data.status) {
						_this2.$message({
							message: "删除成功",
							type: "success",
							duration: 3 * 1000
						});

						_this2.getCustomerLists();
					}
				});
			}).catch(function () {});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-60e3a1d8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/customized/Customers.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.searchForm,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("手机号：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"手机号"},model:{value:(_vm.searchForm.mobile),callback:function ($$v) {_vm.$set(_vm.searchForm, "mobile", $$v)},expression:"searchForm.mobile"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"未处理","value":"0"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"已处理","value":"1"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getCustomerLists(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"customizedLists-tab",attrs:{"data":_vm.lists},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"联系方式"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==0)?_c('span',[_vm._v("未处理")]):_c('span',[_vm._v("已处理")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.fetchDetail(scope.$index, scope.row)}}},[_vm._v("详情")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleteItem(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('check-all',{directives:[{name:"show",rawName:"v-show",value:(_vm.lists.length !== 0),expression:"lists.length !== 0"}],attrs:{"table-name":"multipleTable","list":_vm.lists,"delete-all":_vm.deleteAll,"num":_vm.num}}),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var customized_Customers = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/customized/Customers.vue
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
  Customers,
  customized_Customers,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_customized_Customers = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
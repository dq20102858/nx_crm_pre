webpackJsonp([116],{

/***/ "bSpf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/ExtensionRecord.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ExtensionRecord = ({
	name: "ExtensionRecord",
	data: function data() {
		return {
			lists: [],
			pagesize: 10,
			total: 1, //总页数
			page: 1,
			search: {},
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},

	created: function created() {
		this.getExtensionList();
	},
	methods: {
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getExtensionList();
		},
		goDetail: function goDetail() {
			this.$router.push({
				name: "addExtension"
			});
		},
		getExtensionList: function getExtensionList(param) {
			var _this = this;

			if (param) {
				this.page = 1;
			}
			var data = {
				page: this.page,
				keyword: this.search.keyword,
				timeRange: this.search.time_range,
				portTime: this.search.portTime
			};

			this.request({
				url: "/fjingling/companyOrg",
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
		detail: function detail(index, row) {
			this.$router.push({
				name: "ExtensionDetail",
				params: { id: row.id }
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4ecc6344","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/ExtensionRecord.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"关键字 "}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"120px"},attrs:{"placeholder":"客户（公司或个人）名称 |联系方式|负责人"},model:{value:(_vm.search.keyword),callback:function ($$v) {_vm.$set(_vm.search, "keyword", $$v)},expression:"search.keyword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"记录时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.time_range),callback:function ($$v) {_vm.$set(_vm.search, "time_range", $$v)},expression:"search.time_range"}})],1),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"端口即将到期时间","clearable":""},model:{value:(_vm.search.portTime),callback:function ($$v) {_vm.$set(_vm.search, "portTime", $$v)},expression:"search.portTime"}},[_c('el-option',{attrs:{"label":"一周内","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"两周内","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"一个月内","value":"3"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"medium"},on:{"click":function($event){_vm.getExtensionList(_vm.search)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticStyle:{"display":"inline-block"},attrs:{"type":"success","size":"medium"},on:{"click":_vm.goDetail}},[_vm._v("\n\t\t\t新增\n\t\t\t")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"门店名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"chargeName","label":"负责人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"chargeMobile","label":"负责人联系方式"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"broker","label":"对接人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"addTime","label":"记录时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"300"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("详情")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_ExtensionRecord = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/ExtensionRecord.vue
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
  ExtensionRecord,
  fjingling_ExtensionRecord,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_ExtensionRecord = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
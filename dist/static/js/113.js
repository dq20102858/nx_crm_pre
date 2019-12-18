webpackJsonp([113],{

/***/ "cwen":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/OrgAuth.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var OrgAuth = ({
	name: "OrgAuth",
	components: {
		Refresh: Refresh["a" /* default */]
	},
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
		this.getApplyChangeLists();
	},
	methods: {
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getApplyChangeLists();
		},
		getApplyChangeLists: function getApplyChangeLists(param) {
			var _this = this;

			if (param) {
				this.page = 1;
			}
			var type = this.search.type,
			    keyword = this.search.keyword,
			    time_range = this.search.time_range,
			    status = this.search.status,
			    page = this.page;
			this.request({
				url: "/fjingling/applyChangeLists",
				method: "get",
				params: { page: page, type: type, keyword: keyword, time_range: time_range, status: status }
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.lists = data.data;
					_this.page = Number(data.current_page);
					_this.total = data.total;
					_this.pagesize = data.per_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		detail: function detail(index, row) {
			this.$router.push({
				name: "authDetail",
				query: { id: row.id, mobile: row.mobile }
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02c2f330","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/OrgAuth.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.search,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/公司名称/组织"},model:{value:(_vm.search.keyword),callback:function ($$v) {_vm.$set(_vm.search, "keyword", $$v)},expression:"search.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("变更类型：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"变更类型","clearable":""},model:{value:(_vm.search.type),callback:function ($$v) {_vm.$set(_vm.search, "type", $$v)},expression:"search.type"}},[_c('el-option',{attrs:{"label":"组织","value":"0"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"公司","value":"1"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("申请状态：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"状态","clearable":""},model:{value:(_vm.search.status),callback:function ($$v) {_vm.$set(_vm.search, "status", $$v)},expression:"search.status"}},[_c('el-option',{attrs:{"label":"申请中","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"审核完毕","value":"2"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("发布时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.time_range),callback:function ($$v) {_vm.$set(_vm.search, "time_range", $$v)},expression:"search.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getApplyChangeLists(_vm.search)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机","width":"150"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"org_name","label":"组织","width":"150"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"company_name","label":"公司","width":"150"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"img","label":"图片","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_c('img',{attrs:{"src":scope.row.img,"width":"100px","height":"100px"}})])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","label":"变更类型","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==0)?_c('span',[_vm._v("组织")]):(scope.row.type==1)?_c('span',[_vm._v("公司")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"申请状态：","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("申请中")]):_c('el-tag',{attrs:{"type":"success"}},[_vm._v("审核完毕")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"add_time","label":"发布时间","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.add_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("详情")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_OrgAuth = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/OrgAuth.vue
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
  OrgAuth,
  fjingling_OrgAuth,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_OrgAuth = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
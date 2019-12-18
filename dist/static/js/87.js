webpackJsonp([87],{

/***/ "hURs":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("hi4C");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e60b643a", content, true);

/***/ }),

/***/ "hi4C":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dashboard-editor-container {\n  background-color: #f8f9fa;\n}\n.dashboard-editor-container .sub-navbar.draft {\n    background: #f8f9fa;\n}\n.dashboard-editor-container .chart-block {\n    background: #fff;\n    margin-bottom: 32px;\n    border: 1px solid #ccc;\n}\n.dashboard-editor-container .filter-bar {\n    background: -webkit-linear-gradient(top, #f3f3f3, #fff);\n    padding: 10px 20px;\n}\n.dashboard-editor-container .filter-content {\n    padding: 0 10px 10px;\n}\n.dashboard-editor-container .chart-wrapper {\n    background: #fff;\n    padding: 16px 16px 0;\n    margin-bottom: 32px;\n}\n", ""]);

// exports


/***/ }),

/***/ "r7qC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/Sticky/index.vue + 2 modules
var Sticky = __webpack_require__("vHhr");

// EXTERNAL MODULE: ./src/api/webrequest/index.js
var webrequest = __webpack_require__("Fibt");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/TransactionTable.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TransactionTable = ({
  props: {
    listData: {
      type: Array
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a16ffbbc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/TransactionTable.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box",staticStyle:{"padding":"20px"}},[_c('el-table',{staticStyle:{"padding-top":"15px"},attrs:{"data":_vm.listData}},[_c('el-table-column',{attrs:{"label":"推荐来源"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.name)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"PV","width":"100","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.pv)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提交量","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.total)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"真实量","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.real)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"跟进量","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.follow)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"成交量","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.finish)+"\n        ")]}}])})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_TransactionTable = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/TransactionTable.vue
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
  TransactionTable,
  components_TransactionTable,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var data_components_TransactionTable = (Component.exports);

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/ConversionRate.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // 粘性header组件






/* harmony default export */ var ConversionRate = ({
	name: "ConversionRate",
	components: {
		// GithubCorner,
		Sticky: Sticky["a" /* default */],
		TransactionTable: data_components_TransactionTable
	},
	data: function data() {
		return {
			conversionList: [],
			listData: null,
			searchForm: { timeRange: null },
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			pickerOptions3: common["a" /* publicData */].pickerOptions2,
			searchForm1: {},
			total: 0,
			pagesize: 0,
			currentPage: 0,
			page: 1,
			last_page: 1
		};
	},
	created: function created() {
		var end = new Date();
		var start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		this.searchForm.timeRange = [start, end];

		this.getRequireSource();
		this.getSearchList();
	},

	methods: {
		handleTimeSearch: function handleTimeSearch() {

			this.getRequireSource();
		},

		getRequireSource: function getRequireSource() {
			var _this = this;

			Object(webrequest["c" /* getRequireSource */])({ timeRange: this.searchForm.timeRange }).then(function (response) {
				var data = response.data.data;
				_this.listData = data;
			}).catch(function (err) {});
		},
		getSearchList: function getSearchList(type) {
			var _this2 = this;

			if (type) {
				this.page = 1;
			}
			Object(webrequest["d" /* getSearchList */])(this.page, this.searchForm1).then(function (response) {
				var data = response && response.data && response.data.data;
				if (data) {
					_this2.conversionList = data.data;
					_this2.total = data.total;
					_this2.pagesize = data.per_page;
					_this2.currentPage = Number(data.current_page);
					_this2.last_page = data.last_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getContentAjax: function getContentAjax() {
			var _this3 = this;

			Object(webrequest["b" /* getContentAjax */])(this.page, this.searchForm1).then(function (response) {
				var data = response && response.data;
				if (data.status) {
					_this3.$message({
						message: data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getSearchList();
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2341f28c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/ConversionRate.vue
var ConversionRate_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard-editor-container order-chart"},[_c('sticky',{staticStyle:{"background":"#fff"},attrs:{"class-name":"sub-navbar draft"}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.handleTimeSearch},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('div',[_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_vm._v("\n\t\t\t\t\t推广转化\n\t\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"filter-content"},[_c('transaction-table',{attrs:{"listData":_vm.listData}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"filter-bar"},[_vm._v("\n\t\t\t关键字推广转化率\n\t\t")]),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",staticStyle:{"margin":"10px"},attrs:{"model":_vm.searchForm1,"inline":true,"size":"small"}},[_c('el-form-item',{attrs:{"label":""}},[_c('el-input',{attrs:{"placeholder":"模糊查询"},model:{value:(_vm.searchForm1.keyWord),callback:function ($$v) {_vm.$set(_vm.searchForm1, "keyWord", $$v)},expression:"searchForm1.keyWord"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"来源"},model:{value:(_vm.searchForm1.type),callback:function ($$v) {_vm.$set(_vm.searchForm1, "type", $$v)},expression:"searchForm1.type"}},[_c('el-option',{attrs:{"label":"全部","value":"0"}},[_vm._v(" 全部")]),_vm._v(" "),_c('el-option',{attrs:{"label":"百度","value":"1"}},[_vm._v(" 百度")]),_vm._v(" "),_c('el-option',{attrs:{"label":"360","value":"2"}},[_vm._v(" 360")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions3,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm1.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm1, "timeRange", $$v)},expression:"searchForm1.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){_vm.getSearchList(1)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning","size":"small"},on:{"click":function($event){_vm.getContentAjax()}}},[_vm._v("导出")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.conversionList}},[_c('el-table-column',{attrs:{"prop":"source","label":"渠道"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"word","label":"关键词"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"pv_num","label":"PV"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"total","label":"提交"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"real","label":"真实"}})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.page=$event}}})],1)],1)}
var ConversionRate_staticRenderFns = []
var ConversionRate_esExports = { render: ConversionRate_render, staticRenderFns: ConversionRate_staticRenderFns }
/* harmony default export */ var data_ConversionRate = (ConversionRate_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/ConversionRate.vue
function injectStyle (ssrContext) {
  __webpack_require__("hURs")
}
var ConversionRate_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var ConversionRate___vue_template_functional__ = false
/* styles */
var ConversionRate___vue_styles__ = injectStyle
/* scopeId */
var ConversionRate___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ConversionRate___vue_module_identifier__ = null
var ConversionRate_Component = ConversionRate_normalizeComponent(
  ConversionRate,
  data_ConversionRate,
  ConversionRate___vue_template_functional__,
  ConversionRate___vue_styles__,
  ConversionRate___vue_scopeId__,
  ConversionRate___vue_module_identifier__
)

/* harmony default export */ var _12hf_data_ConversionRate = __webpack_exports__["default"] = (ConversionRate_Component.exports);


/***/ })

});
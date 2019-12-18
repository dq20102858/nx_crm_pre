webpackJsonp([60],{

/***/ "2ZEO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/data/index.js
var api_data = __webpack_require__("tIzN");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/FictitiousClick.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var FictitiousClick = ({
	components: {
		Refresh: Refresh["a" /* default */]
	},
	data: function data() {
		return {
			eventLogList: [], //列表页的数据
			total: 0,
			pagesize: 0,
			currentPage: 0,
			page: 1,
			last_page: 1,
			searchForm: {},
			totalClickData: 0,
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},

	created: function created() {
		this.getEventLog();
	},
	methods: {
		getEventLog: function getEventLog(type) {
			var _this = this;

			if (type) {
				this.page = 1;
			}
			Object(api_data["h" /* getEventLog */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.eventLogList = data.lists && data.lists.data.length && data.lists.data;
					_this.totalClickData = data.total;
					_this.total = data.lists.total;
					_this.pagesize = data.lists.per_page;
					_this.currentPage = Number(data.lists.current_page);
					_this.last_page = data.lists.last_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getEventLog();
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-663cfa36","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/FictitiousClick.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"设备"},on:{"change":function($event){_vm.getEventLog(1)}},model:{value:(_vm.searchForm.clientType),callback:function ($$v) {_vm.$set(_vm.searchForm, "clientType", $$v)},expression:"searchForm.clientType"}},[_c('el-option',{attrs:{"label":"全部","value":"0"}},[_vm._v(" 全部")]),_vm._v(" "),_c('el-option',{attrs:{"label":"pc","value":"50"}},[_vm._v(" pc")]),_vm._v(" "),_c('el-option',{attrs:{"label":"ios","value":"10"}},[_vm._v(" ios")]),_vm._v(" "),_c('el-option',{attrs:{"label":"安卓","value":"20"}},[_vm._v(" 安卓")]),_vm._v(" "),_c('el-option',{attrs:{"label":"H5","value":"30"}},[_vm._v(" H5")]),_vm._v(" "),_c('el-option',{attrs:{"label":"小程序","value":"35"}},[_vm._v(" 小程序")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"房源类别"},on:{"change":function($event){_vm.getEventLog(1)}},model:{value:(_vm.searchForm.agentFlag),callback:function ($$v) {_vm.$set(_vm.searchForm, "agentFlag", $$v)},expression:"searchForm.agentFlag"}},[_c('el-option',{attrs:{"label":"自由经纪人房源","value":"1"}},[_vm._v(" 自由经纪人房源")]),_vm._v(" "),_c('el-option',{attrs:{"label":"自营房源","value":"0"}},[_vm._v(" 自营房源")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},on:{"change":function($event){_vm.getEventLog(1)}},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1)],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.eventLogList}},[_c('el-table-column',{attrs:{"prop":"house_id","label":"房源编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"num","label":"房源点击数量"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_id","label":"经纪人id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"real_name","label":"经纪人姓名"}})],1),_vm._v(" "),_c('div',{staticClass:"float-total"},[_c('span',[_vm._v("房源点击统计：")]),_c('el-tag',[_vm._v(_vm._s(_vm.totalClickData))])],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"current-change":_vm.handleCurrentChange,"update:currentPage":function($event){_vm.page=$event}}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var data_FictitiousClick = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/FictitiousClick.vue
function injectStyle (ssrContext) {
  __webpack_require__("i7e9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-663cfa36"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  FictitiousClick,
  data_FictitiousClick,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_data_FictitiousClick = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "i7e9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("r2J+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("17e61860", content, true);

/***/ }),

/***/ "r2J+":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.float-total[data-v-663cfa36] {\n  float: left;\n  margin: 15px;\n}\n", ""]);

// exports


/***/ })

});
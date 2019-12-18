webpackJsonp([127],{

/***/ "wq48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/zufang/Agent.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import CheckAll from "@/components/CheckAll";


/* harmony default export */ var Agent = ({
	name: "agent",
	// components: {
	//     CheckAll
	//   },
	data: function data() {
		return {
			lists: [],
			pagesize: 10,
			total: 1, //总页数
			page: 1,
			search: {},
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			multipleSelection: [],
			num: 0,
			check: 0,
			packages: []
		};
	},

	created: function created() {
		this.getAgentUserLists();
		this.getPackageLists();
	},
	methods: {
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getAgentUserLists();
		},
		getAgentUserLists: function getAgentUserLists(param) {
			var _this = this;

			if (param) {
				this.page = 1;
			}
			var data = {
				page: this.page,
				keyword: this.search.keyword,
				time_range: this.search.time_range,
				status: this.search.status,
				check: this.check,
				is_package: this.search.is_package,
				package_id: this.search.package_id,
				type: this.search.type
			};
			this.request({
				url: "/zufang/getAgentUserLists",
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
		getPackageLists: function getPackageLists() {
			var _this2 = this;

			this.request({
				url: "/zufang/getPackageLists",
				method: "get",
				params: {}
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.packages = data;
					// this.total = data.total;
					// this.pagesize = parseInt(data.per_page);
					// this.page = parseInt(data.current_page);
					// this.last_page = data.last_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		detail: function detail(index, row) {
			this.$router.push({
				name: "AgentDetail",
				query: { user_id: row.user_id }
			});
		},
		handleSelectionChange: function handleSelectionChange(val) {
			this.multipleSelection = val;
			this.num = this.multipleSelection.length;
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b8474aac","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/zufang/Agent.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.search,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/姓名/手机号"},model:{value:(_vm.search.keyword),callback:function ($$v) {_vm.$set(_vm.search, "keyword", $$v)},expression:"search.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("注册时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.time_range),callback:function ($$v) {_vm.$set(_vm.search, "time_range", $$v)},expression:"search.time_range"}}),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"是否购买套餐","clearable":""},model:{value:(_vm.search.is_package),callback:function ($$v) {_vm.$set(_vm.search, "is_package", $$v)},expression:"search.is_package"}},[_c('el-option',{attrs:{"label":"是","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"否","value":"2"}})],1),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"套餐类型","clearable":""},model:{value:(_vm.search.package_id),callback:function ($$v) {_vm.$set(_vm.search, "package_id", $$v)},expression:"search.package_id"}},_vm._l((_vm.packages),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"经纪人类型","clearable":""},model:{value:(_vm.search.type),callback:function ($$v) {_vm.$set(_vm.search, "type", $$v)},expression:"search.type"}},[_c('el-option',{attrs:{"label":"自由经纪人","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"公司经纪人","value":"2"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("审核：")]),_vm._v(" "),_c('el-switch',{attrs:{"active-value":"1","inactive-value":"0"},on:{"change":_vm.getAgentUserLists},model:{value:(_vm.check),callback:function ($$v) {_vm.check=$$v},expression:"check"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getAgentUserLists(_vm.search)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"userLists-tab",attrs:{"data":_vm.lists},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"real_name","label":"姓名","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机号","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"package","label":"购买套餐","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","label":"经纪人类型","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("独立经纪人")]):(scope.row.type==2)?_c('span',[_vm._v("公司经纪人")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待审")]):(scope.row.status==2)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("通过")]):_c('el-tag',{attrs:{"type":"success"}},[_vm._v("拒绝")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"need_check","label":"审核","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.need_check==1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("是")]):_c('el-tag',{attrs:{"type":"success"}},[_vm._v("否")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"发布时间","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("详情")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var zufang_Agent = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/zufang/Agent.vue
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
  Agent,
  zufang_Agent,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_zufang_Agent = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
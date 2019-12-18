webpackJsonp([95],{

/***/ "997I":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.trace-detail {\n  padding: 20px;\n}\n.trace-detail .trace-ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n.trace-detail .trace-ul li {\n      border-bottom: 1px solid #ebeef5;\n      padding: 5px 0;\n}\n.trace-detail .trace-ul li:last-child {\n        border: none;\n}\n.trace-detail .header-cell-class-name {\n    background-color: #f5f7fa;\n    color: #909399;\n    font-weight: bold;\n}\n.trace-detail .column-class-page {\n    color: #187de6;\n    font-weight: bold;\n}\n.trace-detail .column-class-name .cell {\n    padding: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "Di07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/TraceDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var TraceDetail = ({
	name: 'traceDetail',
	data: function data() {
		return {
			lists: [],
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			defaultProps: {
				children: "children",
				label: "label"
			},
			pagesize: 10,
			total: 1, //总页数
			page: 1,
			search: { timeRange: [], name: null, subName: null },
			open: false,
			tableData: [],
			filterOptions: []
		};
	},

	computed: {
		filterSubOptions: function filterSubOptions() {
			var _this = this;

			this.search.page = null;
			var index = this.filterOptions.findIndex(function (value, index, arr) {
				return value.name == _this.search.name;
			});
			if (index > -1) {
				return this.filterOptions[index].subName;
			} else {
				return [];
			}
		}
	},
	created: function created() {
		this.search.timeRange = JSON.parse(this.$route.query.timeRange);
		this.getRecordDetail();
		this.getRecordShell();
		this.getRecordShellFilter();
	},
	methods: {
		handleNodeClick: function handleNodeClick(data) {},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getRecordDetail();
			this.getRecordShell();
		},
		restructure: function restructure(data) {
			var newData = [];
			for (var k in data) {
				if (data.hasOwnProperty(k)) {
					newData.push({
						label: k,
						children: data[k].map(function (item) {
							return item;
						})
					});
				}
			}
			return newData;
		},
		getRecordDetail: function getRecordDetail() {
			var _this2 = this;

			this.getRecordShell();
			Object(fjingling["n" /* getRecordDetail */])(this.page, this.search.timeRange, this.$route.query.id, this.$route.query.sys_type).then(function (response) {
				var data = response.data.data;
				if (data.data) {
					_this2.lists = _this2.restructure(data.data);
					// this.lists = data.data;
					_this2.total = data.total;
					_this2.page = Number(data.current_page);
					_this2.pagesize = parseInt(data.per_page);
					_this2.code_map = data.code_map;
				} else {
					_this2.lists = [];
					_this2.total = 0;
					_this2.page = 0;
				}
			}).catch(function (err) {});
		},
		getRecordShell: function getRecordShell() {
			var _this3 = this;

			Object(fjingling["o" /* getRecordShell */])(this.search.timeRange, this.$route.query.id, this.$route.query.sys_type, this.search.name, this.search.subName).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.tableData = data;
				}
			}).catch(function (err) {});
		},
		getRecordShellFilter: function getRecordShellFilter() {
			var _this4 = this;

			Object(fjingling["p" /* getRecordShellFilter */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.filterOptions = data;
				}
			}).catch(function (err) {});
		},
		detail: function detail(userId) {
			this.$router.push({ name: "TraceDetail", query: { userId: userId } });
		},
		renderContent: function renderContent(h, _ref) {
			var node = _ref.node,
			    data = _ref.data,
			    store = _ref.store;

			if (node.level == 2) {
				return h(
					"span",
					{
						"class": "custom-tree-node",
						style: "color: #333;font-size:13px;"
					},
					[h(
						"i",
						{
							"class": "iconfont icon-shizhong",
							style: "margin: 0 10px;"
						},
						[]
					), " ", h(
						"span",
						{ style: "margin-right:10px;" },
						[data.add_time]
					), h(
						"i",
						{
							"class": "iconfont icon-eye",
							style: "margin: 0 20px;"
						},
						[]
					), " ", "\u5DF2\u6D4F\u89C8", " ", h(
						"span",
						{ style: "font-weight:bold;margin-right:30px;" },
						[data.title]
					), h(
						"span",
						{ style: "font-size:12px;color:#999;" },
						[data.url]
					)]
				);
			}
			return h(
				"span",
				{ "class": "custom-tree-node" },
				[h(
					"span",
					null,
					[node.label]
				)]
			);
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0ed82b0e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/TraceDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trace-detail"},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"访问时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.search.timeRange),callback:function ($$v) {_vm.$set(_vm.search, "timeRange", $$v)},expression:"search.timeRange"}})],1),_vm._v(" "),_c('el-select',{attrs:{"filterable":"","clearable":"","placeholder":"请选择"},model:{value:(_vm.search.name),callback:function ($$v) {_vm.$set(_vm.search, "name", $$v)},expression:"search.name"}},_vm._l((_vm.filterOptions),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.name}})})),_vm._v(" "),_c('el-select',{attrs:{"filterable":"","clearable":"","placeholder":"请选择"},model:{value:(_vm.search.subName),callback:function ($$v) {_vm.$set(_vm.search, "subName", $$v)},expression:"search.subName"}},_vm._l((_vm.filterSubOptions),function(item){return _c('el-option',{key:item,attrs:{"label":item,"value":item}})})),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getRecordDetail}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.open?_vm.tableData:_vm.tableData.slice(0,1),"border":"","header-cell-class-name":"header-cell-class-name"}},[_c('el-table-column',{attrs:{"prop":"userName","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"大类页面"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"column-class-page"},[_vm._v("\n\t\t\t\t\t"+_vm._s(scope.row.name)+"\n\t\t\t\t")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"class-name":"column-class-name","prop":"address","label":"小类页面"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"trace-ul"},_vm._l((scope.row.list),function(item,index){return _c('li',{key:index},[_vm._v(_vm._s(item.name))])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"class-name":"column-class-name","prop":"address","label":"访问次数"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('ul',{staticClass:"trace-ul"},_vm._l((scope.row.list),function(item,index){return _c('li',{key:index,staticStyle:{"color":"green"}},[_vm._v(_vm._s(item.count))])}))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"总访问次数"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":"primary","disable-transitions":""}},[_vm._v(_vm._s(scope.row.count))])]}}])})],1),_vm._v(" "),(_vm.tableData&&_vm.tableData.length>1)?_c('el-button',{staticStyle:{"margin":"0 auto","display":"block","border-radius":"0","border-bottom-left-radius":"50%","border-bottom-right-radius":"50%"},attrs:{"type":"success","plain":""},on:{"click":function($event){_vm.open = !_vm.open}}},[_vm._v(_vm._s(_vm.open?'收起':'更多')),_c('i',{class:_vm.open?'el-icon-caret-top':'el-icon-caret-bottom'})]):_vm._e(),_vm._v(" "),_c('el-tree',{staticStyle:{"clear":"both","margin-top":"20px"},attrs:{"default-expand-all":"","render-content":_vm.renderContent,"data":_vm.lists,"props":_vm.defaultProps},on:{"node-click":_vm.handleNodeClick}}),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_TraceDetail = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/TraceDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("Es22")
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
  TraceDetail,
  fjingling_TraceDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_TraceDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Es22":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("997I");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0ec89374", content, true);

/***/ })

});
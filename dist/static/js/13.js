webpackJsonp([13],{

/***/ "6izo":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Z3p3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("46a9d828", content, true);

/***/ }),

/***/ "OlbT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("0xDb");


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      sidebarElm: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.__resizeHandler = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* debounce */])(function () {
      if (_this.chart) {
        _this.chart.resize();
      }
    }, 100);
    window.addEventListener('resize', this.__resizeHandler);

    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0];
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHandler);

    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler);
  },

  methods: {
    sidebarResizeHandler: function sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler();
      }
    }
  }
});

/***/ }),

/***/ "Z3p3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dashboard-editor-container {\n  background-color: #f8f9fa;\n}\n.dashboard-editor-container .sub-navbar.draft {\n    background: #f8f9fa;\n}\n.dashboard-editor-container .chart-block {\n    background: #fff;\n    margin-bottom: 32px;\n    border: 1px solid #ccc;\n}\n.dashboard-editor-container .filter-bar {\n    background: -webkit-linear-gradient(top, #f3f3f3, #fff);\n    padding: 10px 20px;\n}\n.dashboard-editor-container .filter-content {\n    padding: 0 10px 10px;\n}\n.dashboard-editor-container .chart-wrapper {\n    background: #fff;\n    padding: 16px 16px 0;\n    margin-bottom: 32px;\n}\n", ""]);

// exports


/***/ }),

/***/ "bFbP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./src/views/fjingling/components/mixins/resize.js
var resize = __webpack_require__("OlbT");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/components/WorkerStatisticsChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var WorkerStatisticsChart = ({
	mixins: [resize["a" /* default */]],
	props: {
		workerStatisticsChartData: {
			type: Array,
			default: []
		},
		className: {
			type: String,
			default: "chart"
		},
		width: {
			type: String,
			default: "100%"
		},
		height: {
			type: String,
			default: "380px"
		}
	},
	watch: {
		workerStatisticsChartData: {
			deep: true,
			handler: function handler(val) {
				this.setOptions();
			}
		}
	},
	data: function data() {
		return {
			chart: null
		};
	},
	mounted: function mounted() {
		this.initChart();
	},
	beforeDestroy: function beforeDestroy() {
		if (!this.chart) {
			return;
		}
		this.chart.dispose();
		this.chart = null;
	},

	methods: {
		setOptions: function setOptions() {
			this.chart.setOption({
				title: {
					text: "业务工作统计",
					left: "left",
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				tooltip: {
					trigger: "item"
				},
				toolbox: {
					show: true,
					feature: {
						dataView: { readOnly: false },
						saveAsImage: {}
					}
				},
				grid: {
					left: 20,
					right: 20,
					containLabel: true
				},
				xAxis: [{
					type: "category",
					data: this.workerStatisticsChartData.map(function (item) {
						return item.name;
					}),
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
						// interval: 0,
						// rotate: 20
					},
					axisLine: {
						lineStyle: {
							color: "#4d816a"
						}
					}
				}],
				yAxis: [{
					type: "value",
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: "#4d816a"
						}
					}
				}],
				legend: {
					left: "center",
					data: ["到访门店", "新增用户"]
				},
				series: [{
					name: "到访门店",
					type: "bar",
					barGap: 0,
					data: this.workerStatisticsChartData.map(function (item) {
						return item.value[0];
					}),
					animationEasing: "cubicInOut",
					animationDuration: 2600,
					itemStyle: {
						normal: {
							color: "#ff9800"
						}
					},
					barMaxWidth: 60,
					label: {
						normal: {
							show: true,
							fontSize: 14
						}
					}
				}, {
					name: "新增用户",
					type: "bar",
					data: this.workerStatisticsChartData.map(function (item) {
						return item.value[1];
					}),
					animationEasing: "cubicInOut",
					animationDuration: 2600,
					itemStyle: {
						normal: {
							color: "#00b7ff"
						}
					},
					barMaxWidth: 60,
					label: {
						normal: {
							show: true,
							fontSize: 14
						}
					}
				}]
			});
		},
		initChart: function initChart() {
			this.chart = echarts_default.a.init(this.$el, "macarons");
			this.setOptions();
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-78df13e5","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/components/WorkerStatisticsChart.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_WorkerStatisticsChart = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/components/WorkerStatisticsChart.vue
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
  WorkerStatisticsChart,
  components_WorkerStatisticsChart,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fjingling_components_WorkerStatisticsChart = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/components/UserIncreaseChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var UserIncreaseChart = ({
	mixins: [resize["a" /* default */]],
	props: {
		increaseUserData: {
			type: Array,
			default: []
		},
		className: {
			type: String,
			default: "chart"
		},
		width: {
			type: String,
			default: "100%"
		},
		height: {
			type: String,
			default: "380px"
		}
	},
	watch: {
		increaseUserData: {
			deep: true,
			handler: function handler(val) {
				this.setOptions();
			}
		}
	},
	data: function data() {
		return {
			chart: null
		};
	},
	mounted: function mounted() {
		this.initChart();
	},
	beforeDestroy: function beforeDestroy() {
		if (!this.chart) {
			return;
		}
		this.chart.dispose();
		this.chart = null;
	},

	methods: {
		setOptions: function setOptions() {
			this.chart.setOption({
				title: {
					text: "新增用户活跃统计",
					left: "left",
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				tooltip: {
					trigger: "item"
				},
				toolbox: {
					show: true,
					feature: {
						dataView: { readOnly: false },
						saveAsImage: {}
					}
				},
				grid: {
					left: 20,
					right: 20,
					containLabel: true
				},
				xAxis: [{
					type: "category",
					data: this.increaseUserData.map(function (item) {
						return item.name;
					}),
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
						// interval: 0,
						// rotate: 20
					},
					axisLine: {
						lineStyle: {
							color: "#4d816a"
						}
					}
				}],
				yAxis: [{
					type: "value",
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: "#4d816a"
						}
					}
				}],
				legend: {
					left: "center",
					data: ["超过10天", "5-10天", "不足5天"]
				},
				series: [{
					name: "超过10天",
					type: "bar",
					barGap: 0,
					data: this.increaseUserData.map(function (item) {
						return item.value[0];
					}),
					animationEasing: "cubicInOut",
					animationDuration: 2600,
					itemStyle: {
						normal: {
							color: "#ff9800"
						}
					},
					barMaxWidth: 60,
					label: {
						normal: {
							show: true,
							fontSize: 14
						}
					}
				}, {
					name: "5-10天",
					type: "bar",
					data: this.increaseUserData.map(function (item) {
						return item.value[1];
					}),
					animationEasing: "cubicInOut",
					animationDuration: 2600,
					itemStyle: {
						normal: {
							color: "#00b7ff"
						}
					},
					barMaxWidth: 60,
					label: {
						normal: {
							show: true,
							fontSize: 14
						}
					}
				}, {
					name: "不足5天",
					type: "bar",
					data: this.increaseUserData.map(function (item) {
						return item.value[2];
					}),
					animationEasing: "cubicInOut",
					animationDuration: 2600,
					itemStyle: {
						normal: {
							color: "#8ac34a"
						}
					},
					barMaxWidth: 60,
					label: {
						normal: {
							show: true,
							fontSize: 14
						}
					}
				}]
			});
		},
		initChart: function initChart() {
			this.chart = echarts_default.a.init(this.$el, "macarons");
			this.setOptions();
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-32d2b966","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/components/UserIncreaseChart.vue
var UserIncreaseChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var UserIncreaseChart_staticRenderFns = []
var UserIncreaseChart_esExports = { render: UserIncreaseChart_render, staticRenderFns: UserIncreaseChart_staticRenderFns }
/* harmony default export */ var components_UserIncreaseChart = (UserIncreaseChart_esExports);
// CONCATENATED MODULE: ./src/views/fjingling/components/UserIncreaseChart.vue
var UserIncreaseChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var UserIncreaseChart___vue_template_functional__ = false
/* styles */
var UserIncreaseChart___vue_styles__ = null
/* scopeId */
var UserIncreaseChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var UserIncreaseChart___vue_module_identifier__ = null
var UserIncreaseChart_Component = UserIncreaseChart_normalizeComponent(
  UserIncreaseChart,
  components_UserIncreaseChart,
  UserIncreaseChart___vue_template_functional__,
  UserIncreaseChart___vue_styles__,
  UserIncreaseChart___vue_scopeId__,
  UserIncreaseChart___vue_module_identifier__
)

/* harmony default export */ var fjingling_components_UserIncreaseChart = (UserIncreaseChart_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/components/TransactionTable.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2fa244ba","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/components/TransactionTable.vue
var TransactionTable_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"box",staticStyle:{"padding":"20px"}},[_c('el-table',{staticStyle:{"padding-top":"15px"},attrs:{"data":_vm.listData}},[_c('el-table-column',{attrs:{"label":"序号"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.id)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"业务人员","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.name)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"到店数","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.visitNum)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"新增用户数","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.newUserNum)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"活跃用户数","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.activeNum)+"\n      ")]}}])})],1)],1)}
var TransactionTable_staticRenderFns = []
var TransactionTable_esExports = { render: TransactionTable_render, staticRenderFns: TransactionTable_staticRenderFns }
/* harmony default export */ var components_TransactionTable = (TransactionTable_esExports);
// CONCATENATED MODULE: ./src/views/fjingling/components/TransactionTable.vue
var TransactionTable_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var TransactionTable___vue_template_functional__ = false
/* styles */
var TransactionTable___vue_styles__ = null
/* scopeId */
var TransactionTable___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var TransactionTable___vue_module_identifier__ = null
var TransactionTable_Component = TransactionTable_normalizeComponent(
  TransactionTable,
  components_TransactionTable,
  TransactionTable___vue_template_functional__,
  TransactionTable___vue_styles__,
  TransactionTable___vue_scopeId__,
  TransactionTable___vue_module_identifier__
)

/* harmony default export */ var fjingling_components_TransactionTable = (TransactionTable_Component.exports);

// EXTERNAL MODULE: ./src/components/Sticky/index.vue + 2 modules
var Sticky = __webpack_require__("vHhr");

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// EXTERNAL MODULE: ./src/api/webrequest/index.js
var webrequest = __webpack_require__("Fibt");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/common/common.js
var common_common = __webpack_require__("Kw+B");

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/WorkerStatistics.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








// import permission from "@/directive/permission/index.js"; // 权限判断指令



/* harmony default export */ var WorkerStatistics = ({
	name: "DashboardAdmin",
	components: {
		Sticky: Sticky["a" /* default */],
		WorkerStatisticsChart: fjingling_components_WorkerStatisticsChart,
		UserIncreaseChart: fjingling_components_UserIncreaseChart,
		TransactionTable: fjingling_components_TransactionTable
	},
	// directives: { permission },
	data: function data() {
		return {
			workerStatisticsChartData: null,
			increaseUserData: null,
			listData: [],
			searchForm: { timeRange: null, clientType: null },
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},
	created: function created() {
		var end = new Date();
		var start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		this.searchForm.timeRange = [start, end];
		this.getWorkerStatistics();
	},

	methods: {
		handleSearch: function handleSearch() {
			this.getWorkerStatistics();
		},
		getWorkerStatistics: function getWorkerStatistics() {
			var _this = this;

			Object(fjingling["t" /* getWorkerStatistics */])(this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					data.workCensus.map(function (item) {
						return item.value = [item.visitNum, item.newUserNum];
					});
					data.newUserCensus.map(function (item) {
						return item.value = [item.up, item.mid, item.down];
					});

					_this.workerStatisticsChartData = data.workCensus;
					_this.increaseUserData = data.newUserCensus;
					_this.listData = data.excel;
					// this.tabs = tabs.map((item,index) => {
					//   return item + ' [' + data[index-1] + ']'
					// })
					// this.activeName = this.tabs[this.$route.query.tab] || this.tabs[0];
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
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c1f54594","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/WorkerStatistics.vue
var WorkerStatistics_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard-editor-container order-chart"},[_c('sticky',{staticStyle:{"background":"#fff"},attrs:{"class-name":"sub-navbar draft"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"设备"},on:{"change":_vm.handleSearch},model:{value:(_vm.searchForm.clientType),callback:function ($$v) {_vm.$set(_vm.searchForm, "clientType", $$v)},expression:"searchForm.clientType"}},[_c('el-option',{attrs:{"label":"PC","value":"PC"}},[_vm._v(" PC")]),_vm._v(" "),_c('el-option',{attrs:{"label":"H5","value":"H5"}},[_vm._v(" H5")]),_vm._v(" "),_c('el-option',{attrs:{"label":"App","value":"App"}},[_vm._v(" App")])],1),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.handleSearch},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('div',[_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.workerStatisticsChartData)?_c('WorkerStatisticsChart',{attrs:{"workerStatisticsChartData":_vm.workerStatisticsChartData}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.increaseUserData)?_c('UserIncreaseChart',{attrs:{"increaseUserData":_vm.increaseUserData}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_vm._v("\n\t\t\t\t统计表格\n\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"filter-content"},[_c('transaction-table',{attrs:{"listData":_vm.listData}})],1)])],1)],1)}
var WorkerStatistics_staticRenderFns = []
var WorkerStatistics_esExports = { render: WorkerStatistics_render, staticRenderFns: WorkerStatistics_staticRenderFns }
/* harmony default export */ var fjingling_WorkerStatistics = (WorkerStatistics_esExports);
// CONCATENATED MODULE: ./src/views/fjingling/WorkerStatistics.vue
function injectStyle (ssrContext) {
  __webpack_require__("6izo")
}
var WorkerStatistics_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var WorkerStatistics___vue_template_functional__ = false
/* styles */
var WorkerStatistics___vue_styles__ = injectStyle
/* scopeId */
var WorkerStatistics___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var WorkerStatistics___vue_module_identifier__ = null
var WorkerStatistics_Component = WorkerStatistics_normalizeComponent(
  WorkerStatistics,
  fjingling_WorkerStatistics,
  WorkerStatistics___vue_template_functional__,
  WorkerStatistics___vue_styles__,
  WorkerStatistics___vue_scopeId__,
  WorkerStatistics___vue_module_identifier__
)

/* harmony default export */ var views_fjingling_WorkerStatistics = __webpack_exports__["default"] = (WorkerStatistics_Component.exports);


/***/ })

});
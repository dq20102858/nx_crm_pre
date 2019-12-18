webpackJsonp([21],{

/***/ "E27b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/webrequest/index.js
var webrequest = __webpack_require__("Fibt");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// EXTERNAL MODULE: ./node_modules/vue-count-to/dist/vue-count-to.min.js
var vue_count_to_min = __webpack_require__("WBHA");
var vue_count_to_min_default = /*#__PURE__*/__webpack_require__.n(vue_count_to_min);

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./src/views/912hf/data/components/mixins/resize.js
var resize = __webpack_require__("L8zp");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/AppDownload.vue
//
//
//
//



__webpack_require__("tcAE"); // echarts theme

/* harmony default export */ var AppDownload = ({
	mixins: [resize["a" /* default */]],
	props: {
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
			default: "350px"
		},
		autoResize: {
			type: Boolean,
			default: true
		},
		chartData: {
			type: Object
		}
	},
	data: function data() {
		return {
			chart: null,
			types: {
				pv: "下载页面访问量",
				down: "点击下载量",
				find: "我要找房点击"
			}
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

	watch: {
		chartData: {
			deep: true,
			handler: function handler(val) {
				this.setOptions(val);
			}
		}
	},
	methods: {
		setOptions: function setOptions() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    actualData = _ref.actualData,
			    days = _ref.days,
			    type = _ref.type;

			type = this.types[type];
			console.log(type);
			this.chart.setOption({
				xAxis: {
					data: days,
					axisTick: {
						show: false
					},
					axisLabel: {
						rotate: 30
					}
				},
				grid: {
					// 控制图的大小，调整下面这些值就可以，
					left: 40,
					right: 10,
					bottom: 20,
					top: 30,
					containLabel: true
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross"
					},
					padding: [5, 10]
				},
				yAxis: {
					axisTick: {
						show: false
					}
				},
				legend: {
					data: [type + "统计数"]
				},
				series: [
				//     {
				//   name: 'expected', itemStyle: {
				//     normal: {
				//       color: '#FF005A',
				//       lineStyle: {
				//         color: '#FF005A',
				//         width: 2
				//       }
				//     }
				//   },
				//   smooth: true,
				//   type: 'line',
				//   data: expectedData,
				//   animationDuration: 2800,
				//   animationEasing: 'cubicInOut'
				// },
				{
					name: type + "统计数",
					type: "bar",
					stack: "vistors",
					barWidth: "60%",
					itemStyle: {
						normal: {
							color: "#3888fa",
							lineStyle: {
								color: "#3888fa",
								width: 2
							},
							areaStyle: {
								color: "#f3f8ff"
							},
							label: {
								show: true,
								position: "top",
								formatter: function formatter(p) {
									return p.value > 0 ? p.value : "";
								}
							}
						}
					},
					data: actualData,
					animationDuration: 2800,
					animationEasing: "quadraticOut"
				}]
			});
		},
		initChart: function initChart() {
			this.chart = echarts_default.a.init(this.$el, "macarons");
			this.setOptions(this.chartData);
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-66b87470","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/AppDownload.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_AppDownload = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/AppDownload.vue
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
  AppDownload,
  components_AppDownload,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var data_components_AppDownload = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/AppDownload.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var data_AppDownload = ({
	components: {
		Refresh: Refresh["a" /* default */],
		CountTo: vue_count_to_min_default.a,
		AppDownload: data_components_AppDownload
	},
	data: function data() {
		return {
			curTab: "pv",
			charData: null,
			lineChartData: { actualData: [], days: [], type: "下载页面访问量" },
			pv_total: 0,
			down_total: 0,
			find_total: 0,
			search: { timeRange: [] },
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},

	computed: {},
	created: function created() {
		var end = new Date();
		var start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		this.search.timeRange = [start, end];
		this.appdownload();
	},
	methods: {
		appdownload: function appdownload() {
			var _this = this;

			Object(webrequest["a" /* appdownload */])(this.search).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.charData = data;
					_this.lineChartData.actualData = data[_this.curTab + "_counts"];
					_this.lineChartData.days = data["pv_date"];
					_this.lineChartData.type = _this.curTab;
					_this.pv_total = data.pv_total;
					_this.down_total = data.down_total;
					_this.find_total = data.find_total;
				}
			}).catch(function (err) {});
		},
		handleSetLineChartData: function handleSetLineChartData(type) {
			this.curTab = type;
			this.lineChartData.actualData = this.charData[this.curTab + "_counts"];
			this.lineChartData.days = this.charData["pv_date"];
			this.lineChartData.type = type;
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f38ef836","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/AppDownload.vue
var AppDownload_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding-top":"20px"},attrs:{"id":"wrap-individual"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search}},[_c('el-form-item',{attrs:{"label":"时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},on:{"change":function($event){_vm.appdownload()}},model:{value:(_vm.search.timeRange),callback:function ($$v) {_vm.$set(_vm.search, "timeRange", $$v)},expression:"search.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.appdownload()}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-row',{staticClass:"panel-group",attrs:{"gutter":50}},[_c('el-col',{staticClass:"card-panel-col",attrs:{"xs":12,"sm":12,"lg":8}},[_c('div',{class:['card-panel',{'active': _vm.curTab=='pv'}],on:{"click":function($event){_vm.handleSetLineChartData('pv')}}},[_c('div',{staticClass:"card-panel-icon-wrapper icon-money"},[_c('svg-icon',{attrs:{"icon-class":"eye","class-name":"card-panel-icon"}})],1),_vm._v(" "),_c('div',{staticClass:"card-panel-description"},[_c('div',{staticClass:"card-panel-text"},[_vm._v("下载页面访问量")]),_vm._v(" "),_c('count-to',{staticClass:"card-panel-num",attrs:{"startVal":0,"endVal":_vm.pv_total,"duration":1000}})],1)])]),_vm._v(" "),_c('el-col',{staticClass:"card-panel-col",attrs:{"xs":12,"sm":12,"lg":8}},[_c('div',{class:['card-panel',{'active': _vm.curTab=='down'}],on:{"click":function($event){_vm.handleSetLineChartData('down')}}},[_c('div',{staticClass:"card-panel-icon-wrapper icon-people"},[_c('svg-icon',{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),_vm._v(" "),_c('div',{staticClass:"card-panel-description"},[_c('div',{staticClass:"card-panel-text"},[_vm._v("点击下载量")]),_vm._v(" "),_c('count-to',{staticClass:"card-panel-num",attrs:{"startVal":0,"endVal":_vm.down_total,"duration":1000}})],1)])]),_vm._v(" "),_c('el-col',{staticClass:"card-panel-col",attrs:{"xs":12,"sm":12,"lg":8}},[_c('div',{class:['card-panel',{'active': _vm.curTab=='find'}],on:{"click":function($event){_vm.handleSetLineChartData('find')}}},[_c('div',{staticClass:"card-panel-icon-wrapper icon-message"},[_c('svg-icon',{attrs:{"icon-class":"ip","class-name":"card-panel-icon"}})],1),_vm._v(" "),_c('div',{staticClass:"card-panel-description"},[_c('div',{staticClass:"card-panel-text"},[_vm._v("我要找房点击")]),_vm._v(" "),_c('count-to',{staticClass:"card-panel-num",attrs:{"startVal":0,"endVal":_vm.find_total,"duration":1000}})],1)])])],1),_vm._v(" "),_c('el-row',{staticStyle:{"background":"#fff","padding":"16px 16px 0","margin-bottom":"32px"}},[_c('app-download',{attrs:{"chart-data":_vm.lineChartData}})],1)],1)}
var AppDownload_staticRenderFns = []
var AppDownload_esExports = { render: AppDownload_render, staticRenderFns: AppDownload_staticRenderFns }
/* harmony default export */ var _12hf_data_AppDownload = (AppDownload_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/AppDownload.vue
function injectStyle (ssrContext) {
  __webpack_require__("W2f+")
}
var AppDownload_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AppDownload___vue_template_functional__ = false
/* styles */
var AppDownload___vue_styles__ = injectStyle
/* scopeId */
var AppDownload___vue_scopeId__ = "data-v-f38ef836"
/* moduleIdentifier (server only) */
var AppDownload___vue_module_identifier__ = null
var AppDownload_Component = AppDownload_normalizeComponent(
  data_AppDownload,
  _12hf_data_AppDownload,
  AppDownload___vue_template_functional__,
  AppDownload___vue_styles__,
  AppDownload___vue_scopeId__,
  AppDownload___vue_module_identifier__
)

/* harmony default export */ var views_912hf_data_AppDownload = __webpack_exports__["default"] = (AppDownload_Component.exports);


/***/ }),

/***/ "OQkr":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#ipSearchForm[data-v-f38ef836] {\n  padding: 20px;\n}\n.panel-group[data-v-f38ef836] {\n  margin-top: 18px;\n  padding: 0 30px;\n}\n.panel-group .card-panel-col[data-v-f38ef836] {\n    margin-bottom: 32px;\n}\n.panel-group .card-panel[data-v-f38ef836] {\n    height: 108px;\n    cursor: pointer;\n    font-size: 12px;\n    position: relative;\n    overflow: hidden;\n    color: #666;\n    background: #fff;\n    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n            box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n    border-color: rgba(0, 0, 0, 0.05);\n}\n.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-f38ef836], .panel-group .card-panel.active .card-panel-icon-wrapper[data-v-f38ef836] {\n      color: #fff;\n}\n.panel-group .card-panel:hover .icon-people[data-v-f38ef836], .panel-group .card-panel.active .icon-people[data-v-f38ef836] {\n      background: #40c9c6;\n}\n.panel-group .card-panel:hover .icon-message[data-v-f38ef836], .panel-group .card-panel.active .icon-message[data-v-f38ef836] {\n      background: #36a3f7;\n}\n.panel-group .card-panel:hover .icon-money[data-v-f38ef836], .panel-group .card-panel.active .icon-money[data-v-f38ef836] {\n      background: #f4516c;\n}\n.panel-group .card-panel:hover .icon-shoppingCard[data-v-f38ef836], .panel-group .card-panel.active .icon-shoppingCard[data-v-f38ef836] {\n      background: #34bfa3;\n}\n.panel-group .card-panel .icon-people[data-v-f38ef836] {\n      color: #40c9c6;\n}\n.panel-group .card-panel .icon-message[data-v-f38ef836] {\n      color: #36a3f7;\n}\n.panel-group .card-panel .icon-money[data-v-f38ef836] {\n      color: #f4516c;\n}\n.panel-group .card-panel .icon-shoppingCard[data-v-f38ef836] {\n      color: #34bfa3;\n}\n.panel-group .card-panel .card-panel-icon-wrapper[data-v-f38ef836] {\n      float: left;\n      margin: 14px 0 0 14px;\n      padding: 16px;\n      -webkit-transition: all 0.38s ease-out;\n      transition: all 0.38s ease-out;\n      border-radius: 6px;\n}\n.panel-group .card-panel .card-panel-icon[data-v-f38ef836] {\n      float: left;\n      font-size: 48px;\n}\n.panel-group .card-panel .card-panel-description[data-v-f38ef836] {\n      float: right;\n      font-weight: bold;\n      margin: 26px;\n      margin-left: 0px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-text[data-v-f38ef836] {\n        line-height: 18px;\n        color: rgba(0, 0, 0, 0.45);\n        font-size: 16px;\n        margin-bottom: 12px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-num[data-v-f38ef836] {\n        font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "W2f+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("OQkr");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7e77f06a", content, true);

/***/ })

});
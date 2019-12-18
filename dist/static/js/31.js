webpackJsonp([31],{

/***/ "DxX1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a3dA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2cb0337f", content, true);

/***/ }),

/***/ "E8B0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/api/data/index.js
var api_data = __webpack_require__("tIzN");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./src/views/912hf/data/components/mixins/resize.js
var resize = __webpack_require__("L8zp");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/workersAgentHouseChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var workersAgentHouseChart = ({
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
			default: "420px"
		},
		agentWorkLog: {
			type: Object
		}
	},
	data: function data() {
		return {
			chart: null,
			seriesData: [],
			legend: []
		};
	},
	created: function created() {
		this.legend = this.agentWorkLog.data.map(function (item) {
			return item.name;
		});
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
		agentWorkLog: {
			deep: true,
			handler: function handler(val) {
				this.chart.dispose();
				this.chart = null;
				this.initChart();
			}
		}
	},
	methods: {
		formateData: function formateData(name, data, type, color) {
			return {
				name: name,
				itemStyle: {
					normal: {
						color: color,
						lineStyle: {
							color: color,
							width: 2,
							type: type
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
				smooth: true,
				type: "line",
				data: data,
				animationDuration: 2800,
				animationEasing: "cubicInOut"
			};
		},
		formateOrder: function formateOrder() {
			var _this = this;

			var arr = [];
			var color = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa', '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050', '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'];
			this.agentWorkLog.data.forEach(function (item, i) {
				arr.push(_this.formateData(item.name, item.list[0], 'solid', color[i]));
			});
			this.seriesData = arr;
		},
		setOptions: function setOptions() {
			this.formateOrder();
			this.chart.setOption({
				title: {
					text: "912经纪人发布房源数",
					left: 'left',
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				xAxis: {
					data: this.agentWorkLog.x,
					boundaryGap: true,
					axisTick: {
						show: false
					},
					axisLabel: {
						rotate: 30
					}
				},
				grid: {
					left: 20,
					right: 20,
					bottom: 20,
					containLabel: true
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross"
					},
					padding: [5, 10]
				},
				toolbox: {
					show: true,
					feature: {
						dataView: { readOnly: false },
						saveAsImage: {}
					}
				},
				yAxis: {
					axisTick: {
						show: false
					}
				},
				legend: {
					data: this.legend,
					type: 'plain',
					padding: [10, 210]
				},
				calculable: true,
				series: this.seriesData
			});
		},
		initChart: function initChart() {
			this.chart = echarts_default.a.init(this.$el, "macarons");
			this.setOptions();
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-40fd797b","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/workersAgentHouseChart.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_workersAgentHouseChart = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/workersAgentHouseChart.vue
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
  workersAgentHouseChart,
  components_workersAgentHouseChart,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var data_components_workersAgentHouseChart = (Component.exports);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/AgentPublicHouse.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var AgentPublicHouse = ({
	name: 'agentPublicHouse',
	components: {
		Refresh: Refresh["a" /* default */],
		workersAgentHouseChart: data_components_workersAgentHouseChart
	},
	data: function data() {
		return {
			shops: [],
			agentHouse: null,
			agentListsArray: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			currentPage: 0,
			page: 1,
			last_page: 1,
			searchForm: {},
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			role_id: 0,
			agentLists: [],
			multipleSelection: [],
			status: 1,
			temp: {
				name: "",
				status: ""
			},
			searchForm2: {
				timeRange: null,
				worker: '',
				type: 'origin'
			},
			dialogFormVisible: false,
			dialogStatus: "",
			dialogPvVisible: false,
			rules: {}
		};
	},

	created: function created() {
		var end = new Date();
		var start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		this.searchForm.timeRange = [start, end];
		this.searchForm2.timeRange = [start, end];
		this.getShopLists();
		this.getPublicHouseLists();
		this.getWorkersAgentHouses();
	},
	methods: {
		handleTimeSearch2: function handleTimeSearch2() {
			this.getWorkersAgentHouses();
			this.getPublicHouseLists();
		},
		getWorkersAgentHouses: function getWorkersAgentHouses() {
			var _this = this;

			Object(request["a" /* default */])({
				url: '/data_center/releaseHouse',
				method: 'get',
				params: extends_default()({}, this.searchForm2)
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.agentHouse = data;
					_this.workers2 = _this.agentHouse.data.map(function (item) {
						return item.name;
					});
				} else {
					_this.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		resetTemp: function resetTemp() {
			this.temp = {
				name: "",
				status: ""
			};
		},
		handleDetail: function handleDetail(row) {
			row.status = String(row.status);
			this.temp = assign_default()({}, row); // copy obj
			this.dialogFormVisible = true;
			this.getPushHouseDetail(row.userId);
		},
		getShopLists: function getShopLists(userId) {
			var _this2 = this;

			Object(api_data["p" /* getShopLists */])(this.page, userId).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.shops = data;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getPushHouseDetail: function getPushHouseDetail(userId) {
			var _this3 = this;

			Object(api_data["m" /* getPushHouseDetail */])(this.page, userId).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.agentListsArray = data.data;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getPublicHouseLists: function getPublicHouseLists() {
			var _this4 = this;

			Object(api_data["l" /* getPublicHouseLists */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.agentListsArray = data.data;
					_this4.total = data.total;
					_this4.pagesize = data.per_page;
					_this4.currentPage = Number(data.current_page);
					_this4.last_page = data.last_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d845a4a6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/AgentPublicHouse.vue
var AgentPublicHouse_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('div',[_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.handleTimeSearch2},model:{value:(_vm.searchForm2.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm2, "timeRange", $$v)},expression:"searchForm2.timeRange"}})],1),_vm._v(" "),_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.agentHouse)?_c('workers-agent-house-chart',{attrs:{"agentWorkLog":_vm.agentHouse,"width":"100%"}}):_vm._e()],1)])])],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',{attrs:{"label":""}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"180px"},attrs:{"placeholder":"用户名"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"门店筛选"},model:{value:(_vm.searchForm.shop_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "shop_id", $$v)},expression:"searchForm.shop_id"}},_vm._l((_vm.shops),function(group){return _c('el-option-group',{key:group.id,attrs:{"label":group.name}},_vm._l((group.child),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))}))],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getPublicHouseLists(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.agentListsArray}},[_c('el-table-column',{attrs:{"prop":"user_id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"p_num","label":"房源数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"c_num","label":"上线数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shop","label":"所属门店"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"经纪人类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.agent_type==1)?_c('span',[_vm._v("自由经纪人")]):_vm._e(),_vm._v(" "),(scope.row.agent_type==2)?_c('span',[_vm._v("门店经济人")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"}})],1),_vm._v(" "),_c('el-alert',{attrs:{"closable":false,"title":'房源总数：'+_vm.total,"type":"success"}}),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event}}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"35%","title":"经纪人发布房源详情","visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"dataForm",staticStyle:{"width":"90%"},attrs:{"rules":_vm.rules,"model":_vm.temp,"label-position":"right","label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"活动名称"}},[_c('el-input',{attrs:{"placeholder":"请输入活动名称"},model:{value:(_vm.temp.name),callback:function ($$v) {_vm.$set(_vm.temp, "name", $$v)},expression:"temp.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动状态","prop":"type"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择活动状态"},model:{value:(_vm.temp.status),callback:function ($$v) {_vm.$set(_vm.temp, "status", $$v)},expression:"temp.status"}},[_c('el-option',{attrs:{"label":"未启动","value":"0"}},[_vm._v(" 未启动")]),_vm._v(" "),_c('el-option',{attrs:{"label":"进行中","value":"1"}},[_vm._v(" 进行中")]),_vm._v(" "),_c('el-option',{attrs:{"label":"已结束","value":"2"}},[_vm._v(" 已结束")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("关闭")])],1)],1)],1)}
var AgentPublicHouse_staticRenderFns = []
var AgentPublicHouse_esExports = { render: AgentPublicHouse_render, staticRenderFns: AgentPublicHouse_staticRenderFns }
/* harmony default export */ var data_AgentPublicHouse = (AgentPublicHouse_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/AgentPublicHouse.vue
function injectStyle (ssrContext) {
  __webpack_require__("DxX1")
}
var AgentPublicHouse_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AgentPublicHouse___vue_template_functional__ = false
/* styles */
var AgentPublicHouse___vue_styles__ = injectStyle
/* scopeId */
var AgentPublicHouse___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AgentPublicHouse___vue_module_identifier__ = null
var AgentPublicHouse_Component = AgentPublicHouse_normalizeComponent(
  AgentPublicHouse,
  data_AgentPublicHouse,
  AgentPublicHouse___vue_template_functional__,
  AgentPublicHouse___vue_styles__,
  AgentPublicHouse___vue_scopeId__,
  AgentPublicHouse___vue_module_identifier__
)

/* harmony default export */ var _12hf_data_AgentPublicHouse = __webpack_exports__["default"] = (AgentPublicHouse_Component.exports);


/***/ }),

/***/ "a3dA":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ })

});
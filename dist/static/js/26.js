webpackJsonp([26],{

/***/ "BY4U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./src/views/912hf/data/components/mixins/resize.js
var resize = __webpack_require__("L8zp");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/WorkBarChart.vue
//
//
//
//



__webpack_require__("tcAE"); // echarts theme

var animationDuration = 6000;

/* harmony default export */ var WorkBarChart = ({
	mixins: [resize["a" /* default */]],
	props: {
		registerData: {
			type: Object,
			default: {}
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
			default: "480px"
		}
	},
	data: function data() {
		return {
			chart: null
		};
	},

	watch: {
		registerData: {
			deep: true,
			handler: function handler(val) {
				this.chart.dispose();
				this.chart = null;
				this.initChart();
			}
		}
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
			var _ = this;
			this.chart.setOption({
				title: {
					text: "业务员经纪人注册用户统计图",
					left: 'left',
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						// 坐标轴指示器，坐标轴触发有效
						type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				toolbox: {
					show: true,
					feature: {
						dataView: { readOnly: false },
						saveAsImage: {}
					}
				},
				grid: {
					left: "20",
					right: "20",
					bottom: "20",
					containLabel: true
				},
				legend: {
					data: ["房鲸灵", "自由经纪人"],
					formatter: function formatter(name) {
						if (name == '房鲸灵') {
							return name + '（业务员:' + _.registerData.fjling_total + '; 自由注册:' + _.registerData.free_fjling_total + '）';
						} else {
							return name + '（业务员:' + _.registerData.agent_total + '; 自由注册:' + _.registerData.free_agent_total + '）';
						}
					}
				},
				yAxis: [{
					type: "category",
					data: this.registerData.x
				}],
				xAxis: [{
					type: "value"
				}],
				series: [{
					name: "房鲸灵",
					type: "bar",
					stack: "总量",
					barWidth: '60%',
					data: this.registerData.fjling,
					animationDuration: animationDuration,
					itemStyle: {
						normal: {
							color: '#f5994e'
						}
					},
					label: {
						normal: {
							show: true,
							// position: "insideRight",
							fontSize: 14,
							formatter: function formatter(p) {
								return p.value > 0 ? p.value : '';
							}
						}
					}
				}, {
					name: "自由经纪人",
					type: "bar",
					stack: "总量",
					barWidth: '60%',
					data: this.registerData.agent,
					animationDuration: animationDuration,
					itemStyle: {
						normal: {
							color: '#5ab1ef'
						}
					},
					label: {
						normal: {
							show: true,
							fontSize: 14,
							// position: "insideRight",
							formatter: function formatter(p) {
								return p.value > 0 ? p.value : '';
							}
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0832c2ff","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/WorkBarChart.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_WorkBarChart = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/WorkBarChart.vue
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
  WorkBarChart,
  components_WorkBarChart,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var data_components_WorkBarChart = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/AgentNumber.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var AgentNumber = ({
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
					text: "912经纪人增长数",
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8549064e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/AgentNumber.vue
var AgentNumber_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var AgentNumber_staticRenderFns = []
var AgentNumber_esExports = { render: AgentNumber_render, staticRenderFns: AgentNumber_staticRenderFns }
/* harmony default export */ var components_AgentNumber = (AgentNumber_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/AgentNumber.vue
var AgentNumber_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AgentNumber___vue_template_functional__ = false
/* styles */
var AgentNumber___vue_styles__ = null
/* scopeId */
var AgentNumber___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AgentNumber___vue_module_identifier__ = null
var AgentNumber_Component = AgentNumber_normalizeComponent(
  AgentNumber,
  components_AgentNumber,
  AgentNumber___vue_template_functional__,
  AgentNumber___vue_styles__,
  AgentNumber___vue_scopeId__,
  AgentNumber___vue_module_identifier__
)

/* harmony default export */ var data_components_AgentNumber = (AgentNumber_Component.exports);

// EXTERNAL MODULE: ./src/components/Sticky/index.vue + 2 modules
var Sticky = __webpack_require__("vHhr");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// EXTERNAL MODULE: ./src/directive/permission/index.js + 1 modules
var permission = __webpack_require__("je39");

// EXTERNAL MODULE: ./src/api/data/index.js
var api_data = __webpack_require__("tIzN");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/DataAgentShopChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var DataAgentShopChart = ({
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
		agentShopLog: {
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
		this.legend = this.agentShopLog.list.map(function (item) {
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
		agentShopLog: {
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
			this.agentShopLog.list.forEach(function (item, i) {
				arr.push(_this.formateData(item.name, item.list, 'solid', color[i]));
			});
			this.seriesData = arr;
		},
		setOptions: function setOptions() {
			this.formateOrder();
			this.chart.setOption({
				title: {
					text: "业务员每日新增门店数统计(" + this.agentShopLog.total + ")",
					left: 'left',
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				xAxis: {
					data: this.agentShopLog.x,
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
					padding: [0, 220]
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8ee25fe8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/DataAgentShopChart.vue
var DataAgentShopChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var DataAgentShopChart_staticRenderFns = []
var DataAgentShopChart_esExports = { render: DataAgentShopChart_render, staticRenderFns: DataAgentShopChart_staticRenderFns }
/* harmony default export */ var components_DataAgentShopChart = (DataAgentShopChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/DataAgentShopChart.vue
var DataAgentShopChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var DataAgentShopChart___vue_template_functional__ = false
/* styles */
var DataAgentShopChart___vue_styles__ = null
/* scopeId */
var DataAgentShopChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DataAgentShopChart___vue_module_identifier__ = null
var DataAgentShopChart_Component = DataAgentShopChart_normalizeComponent(
  DataAgentShopChart,
  components_DataAgentShopChart,
  DataAgentShopChart___vue_template_functional__,
  DataAgentShopChart___vue_styles__,
  DataAgentShopChart___vue_scopeId__,
  DataAgentShopChart___vue_module_identifier__
)

/* harmony default export */ var data_components_DataAgentShopChart = (DataAgentShopChart_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/DayAddRegUser.vue
//
//
//
//



__webpack_require__("tcAE"); // echarts theme

/* harmony default export */ var DayAddRegUser = ({
  mixins: [resize["a" /* default */]],
  props: {
    dayAddRegUserData: {
      type: Object,
      default: {}
    },
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '400px'
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

  watch: {
    dayAddRegUserData: {
      deep: true,
      handler: function handler(val) {
        this.setOptions();
      }
    }
  },
  methods: {
    setOptions: function setOptions() {
      this.chart.setOption({
        title: {
          text: '团队邀请注册数量统计图',
          x: '20',
          top: '30',
          textStyle: {
            color: '#333',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#058DC7',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            },
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '2%',
          borderWidth: 0,
          top: 120,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: [{
          axisLine: {
            lineStyle: {
              color: '#058DC7'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0

          },
          data: this.dayAddRegUserData.x
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: true
          },
          axisLine: {
            lineStyle: {
              color: '#058DC7'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: true
          }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 30,
          start: 2,
          end: 95,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: {
            color: '#fff' },
          borderColor: '#90979c'

        }, {
          type: 'slider',
          show: true,
          height: 5,
          start: 1,
          end: 35
        }],
        legend: {
          x: 'center',
          top: '10%',
          textStyle: {
            color: '#058DC7'
          },
          data: ['房鲸灵', '自由经纪人'],
          formatter: function formatter(name) {
            if (name == '房鲸灵') {
              return name + '(邀请码)';
            } else {
              return name;
            }
          }
        },
        // calculable: true,
        series: [{
          name: '房鲸灵',
          type: 'line',
          symbolSize: 10,
          symbol: 'circle',
          smooth: true,
          itemStyle: {
            normal: {
              color: '#FF005A',
              barBorderRadius: 0,
              label: {
                show: true,
                position: 'top',
                formatter: function formatter(p) {
                  return p.value > 0 ? p.value : '';
                }
              }
            }
          },
          data: this.dayAddRegUserData.data.fjling,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: '#f3f8ff'
            }
          }
        }, {
          name: '自由经纪人',
          type: 'line',
          symbolSize: 10,
          symbol: 'circle',
          smooth: true,
          itemStyle: {
            normal: {
              color: '#3888fa',
              barBorderRadius: 0,
              label: {
                show: true,
                position: 'top',
                formatter: function formatter(p) {
                  return p.value > 0 ? p.value : '';
                }
              }
            }
          },
          data: this.dayAddRegUserData.data.agent,
          lineStyle: {
            normal: {
              width: 2
            }
          },
          areaStyle: {
            normal: {
              color: '#f3f8ff'
            }
          }
        }]
      });
    },
    initChart: function initChart() {
      this.chart = echarts_default.a.init(this.$el, 'macarons');
      this.setOptions();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4567f5cc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/DayAddRegUser.vue
var DayAddRegUser_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var DayAddRegUser_staticRenderFns = []
var DayAddRegUser_esExports = { render: DayAddRegUser_render, staticRenderFns: DayAddRegUser_staticRenderFns }
/* harmony default export */ var components_DayAddRegUser = (DayAddRegUser_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/DayAddRegUser.vue
var DayAddRegUser_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var DayAddRegUser___vue_template_functional__ = false
/* styles */
var DayAddRegUser___vue_styles__ = null
/* scopeId */
var DayAddRegUser___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DayAddRegUser___vue_module_identifier__ = null
var DayAddRegUser_Component = DayAddRegUser_normalizeComponent(
  DayAddRegUser,
  components_DayAddRegUser,
  DayAddRegUser___vue_template_functional__,
  DayAddRegUser___vue_styles__,
  DayAddRegUser___vue_scopeId__,
  DayAddRegUser___vue_module_identifier__
)

/* harmony default export */ var data_components_DayAddRegUser = (DayAddRegUser_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/DemandStatusChart.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






 // 权限判断指令




/* harmony default export */ var DemandStatusChart = ({
	name: "DashboardAdmin",
	components: {
		Sticky: Sticky["a" /* default */],
		AgentNumber: data_components_AgentNumber,
		DataAgentShopChart: data_components_DataAgentShopChart,
		WorkBarChart: data_components_WorkBarChart,
		DayAddRegUser: data_components_DayAddRegUser
	},
	directives: { permission: permission["a" /* default */] },
	data: function data() {
		return {
			registerData: null,
			agentNumber: null,
			workers2: [],
			workers3: [],
			workers4: [],
			options2: [],
			options4: [],
			searchFormBar: {},
			dayAddRegUserData: null,
			searchFormBar1: {},
			pieChartData: null,
			agentShopLog: null,
			agentShopTmpkLog: null,
			timeRange: null,
			searchAgentShopLog: {},
			searchForm4: {
				agent_id: ''
			},
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},
	created: function created() {
		var end = new Date();
		var start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		this.timeRange = [start, end];
		this.searchForm4.timeRange = [start, end];
		this.searchAgentShopLog.timeRange = [start, end];
		this.searchFormBar.timeRange = [start, end];
		this.searchFormBar1.timeRange = [start, end];
		this.getAddAgencyShop();
		this.getAgentNumber();
		this.getEveryUsersAgent();
		this.getDayAddRegUsers();
	},

	methods: {
		handleTimeSearch: function handleTimeSearch() {
			this.getAgentNumber();
			this.getDayAddRegUsers();
			this.getEveryUsersAgent();
			this.getAddAgencyShop();
		},
		getDayAddRegUsers: function getDayAddRegUsers() {
			var _this = this;

			var params = { timeRange: this.timeRange };
			Object(api_data["g" /* getDayAddRegUsers */])(params).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.dayAddRegUserData = data;
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
		},
		handleAgentUser2: function handleAgentUser2() {
			var _this2 = this;

			if (!this.searchAgentShopLog.agent) {
				this.agentShopLog.list = this.agentShopTmpkLog.list;
				return;
			}
			this.agentShopLog.list = this.agentShopTmpkLog.list.filter(function (item) {
				return item.name == _this2.searchAgentShopLog.agent;
			});
		},
		getAddAgencyShop: function getAddAgencyShop() {
			var _this3 = this;

			var params = extends_default()({}, this.searchAgentShopLog, { timeRange: this.timeRange });

			Object(api_data["a" /* getAddAgencyShop */])(params).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.agentShopLog = data;
					_this3.agentShopTmpkLog = assign_default()({}, data);
					_this3.options2 = _this3.agentShopLog.list.map(function (item) {
						return item.name;
					});
					// this.tabs = tabs.map((item,index) => {
					//   return item + ' [' + data[index-1] + ']'
					// })
					// this.activeName = this.tabs[this.$route.query.tab] || this.tabs[0];
				} else {
					_this3.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getEveryUsersAgent: function getEveryUsersAgent() {
			var _this4 = this;

			var params = extends_default()({}, this.searchFormBar, { timeRange: this.timeRange });
			Object(api_data["i" /* getEveryUsersAgent */])(params).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.registerData = {};
					_this4.registerData.fjling_total = data.fjling_total;
					_this4.registerData.agent_total = data.agent_total;
					_this4.registerData.free_fjling_total = data.free_fjling_total;
					_this4.registerData.free_agent_total = data.free_agent_total;
					_this4.registerData.x = data.list.map(function (item) {
						return item.name;
					});
					_this4.options4 = _this4.registerData.x;
					_this4.registerData.fjling = data.list.map(function (item) {
						return item.fjling;
					});
					_this4.registerData.agent = data.list.map(function (item) {
						return item.agent;
					});
					_this4.registerTmpData = assign_default()({}, _this4.registerData);
				} else {
					_this4.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleBarAgentUser: function handleBarAgentUser() {
			if (!this.searchFormBar.agent) {
				this.registerData = this.registerTmpData;
				return;
			}
			this.registerData = {};
			var index = this.registerTmpData.x.indexOf(this.searchFormBar.agent);
			if (index > 0) {
				this.registerData.x = [this.registerTmpData.x[index]];
				this.registerData.fjling = [this.registerTmpData.fjling[index]];
				this.registerData.agent = [this.registerTmpData.agent[index]];
				this.registerData.fjling_total = this.registerData.fjling[0];
				this.registerData.agent_total = this.registerData.agent[0];
			} else {
				this.registerData.x = [];
				this.registerData.fjling = [];
				this.registerData.agent = [];
				this.registerData.fjling_total = 0;
				this.registerData.agent_total = 0;
			}
		},
		getAgentNumber: function getAgentNumber() {
			var _this5 = this;

			Object(request["a" /* default */])({
				url: '/data_center/getAgentNum',
				method: 'get',
				params: extends_default()({}, this.searchForm4, { timeRange: this.timeRange })
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this5.agentNumber = data;
					_this5.workers4 = _this5.agentNumber.data.map(function (item) {
						return item.name;
					});
				} else {
					_this5.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDemandState: function handleDemandState() {},
		handleAgenHouse: function handleAgenHouse() {},
		handlePie: function handlePie() {}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e6901ff8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/DemandStatusChart.vue
var DemandStatusChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard-editor-container order-chart"},[_c('sticky',{staticStyle:{"background":"#fff"},attrs:{"class-name":"sub-navbar draft"}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.handleTimeSearch},model:{value:(_vm.timeRange),callback:function ($$v) {_vm.timeRange=$$v},expression:"timeRange"}})],1),_vm._v(" "),_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择业务员"},on:{"change":_vm.handleAgentUser2},model:{value:(_vm.searchAgentShopLog.agent),callback:function ($$v) {_vm.$set(_vm.searchAgentShopLog, "agent", $$v)},expression:"searchAgentShopLog.agent"}},_vm._l((_vm.options2),function(item,index){return _c('el-option',{key:'op2_'+index,attrs:{"label":item,"value":item}},[_vm._v(" "+_vm._s(item))])}))],1),_vm._v(" "),_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.agentShopLog)?_c('data-agent-shop-chart',{attrs:{"agentShopLog":_vm.agentShopLog,"width":"100%"}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},on:{"change":_vm.handleBarAgentUser},model:{value:(_vm.searchFormBar.agent),callback:function ($$v) {_vm.$set(_vm.searchFormBar, "agent", $$v)},expression:"searchFormBar.agent"}},_vm._l((_vm.options4),function(item,index){return _c('el-option',{key:'op4_'+index,attrs:{"label":item,"value":item}},[_vm._v(" "+_vm._s(item))])}))],1),_vm._v(" "),_c('div',{staticClass:"filter-content",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"chart-wrapper"},[(_vm.registerData)?_c('work-bar-chart',{attrs:{"registerData":_vm.registerData}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{directives:[{name:"permission",rawName:"v-permission",value:(['超级管理员']),expression:"['超级管理员']"}],staticClass:"chart-block"},[_c('div',{staticClass:"filter-content",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"chart-wrapper"},[(_vm.dayAddRegUserData)?_c('DayAddRegUser',{attrs:{"dayAddRegUserData":_vm.dayAddRegUserData,"width":"100%"}}):_vm._e()],1)])]),_vm._v(" "),_c('div',[_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.agentNumber)?_c('agent-number',{attrs:{"agentWorkLog":_vm.agentNumber,"width":"100%"}}):_vm._e()],1)])])],1)],1)}
var DemandStatusChart_staticRenderFns = []
var DemandStatusChart_esExports = { render: DemandStatusChart_render, staticRenderFns: DemandStatusChart_staticRenderFns }
/* harmony default export */ var data_DemandStatusChart = (DemandStatusChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/DemandStatusChart.vue
function injectStyle (ssrContext) {
  __webpack_require__("OXqc")
}
var DemandStatusChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var DemandStatusChart___vue_template_functional__ = false
/* styles */
var DemandStatusChart___vue_styles__ = injectStyle
/* scopeId */
var DemandStatusChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DemandStatusChart___vue_module_identifier__ = null
var DemandStatusChart_Component = DemandStatusChart_normalizeComponent(
  DemandStatusChart,
  data_DemandStatusChart,
  DemandStatusChart___vue_template_functional__,
  DemandStatusChart___vue_styles__,
  DemandStatusChart___vue_scopeId__,
  DemandStatusChart___vue_module_identifier__
)

/* harmony default export */ var _12hf_data_DemandStatusChart = __webpack_exports__["default"] = (DemandStatusChart_Component.exports);


/***/ }),

/***/ "OXqc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("qr8u");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("0882ad14", content, true);

/***/ }),

/***/ "qr8u":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dashboard-editor-container {\n  background-color: #f8f9fa;\n}\n.dashboard-editor-container .sub-navbar.draft {\n    background: #f8f9fa;\n}\n.dashboard-editor-container .chart-block {\n    background: #fff;\n    margin-bottom: 32px;\n    border: 1px solid #ccc;\n}\n.dashboard-editor-container .filter-bar {\n    background: -webkit-linear-gradient(top, #f3f3f3, #fff);\n    padding: 10px 20px;\n}\n.dashboard-editor-container .filter-content {\n    padding: 0 10px 10px;\n}\n.dashboard-editor-container .chart-wrapper {\n    background: #fff;\n    padding: 16px 16px 0;\n    margin-bottom: 32px;\n}\n", ""]);

// exports


/***/ })

});
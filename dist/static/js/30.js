webpackJsonp([30],{

/***/ "A0C8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.dashboard-editor-container {\n  background-color: #f8f9fa;\n}\n.dashboard-editor-container .sub-navbar.draft {\n    background: #f8f9fa;\n}\n.dashboard-editor-container .chart-block {\n    background: #fff;\n    margin-bottom: 32px;\n    border: 1px solid #ccc;\n}\n.dashboard-editor-container .filter-bar {\n    background: -webkit-linear-gradient(top, #f3f3f3, #fff);\n    padding: 10px 20px;\n}\n.dashboard-editor-container .filter-content {\n    padding: 0 10px 10px;\n}\n.dashboard-editor-container .chart-wrapper {\n    background: #fff;\n    padding: 16px 16px 0;\n    margin-bottom: 32px;\n}\n", ""]);

// exports


/***/ }),

/***/ "C/QA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/echarts/index.js
var echarts = __webpack_require__("XLwt");
var echarts_default = /*#__PURE__*/__webpack_require__.n(echarts);

// EXTERNAL MODULE: ./src/views/912hf/data/components/mixins/resize.js
var resize = __webpack_require__("L8zp");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/WorkLineChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var WorkLineChart = ({
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
				item.list.forEach(function (val, index) {
					if (index != 0) {
						arr.push(_this.formateData(item.name, val, 'solid', color[i]));
					}
					// if (index==0) {
					//     arr.push(this.formateData(item.name,val,'solid', color[i],'分配量'))
					// }
					// else{
					//     arr.push(this.formateData(item.name,val,'dashed', color[i], '跟进中'))
					// }
				});
			});
			this.seriesData = arr;
		},
		setOptions: function setOptions() {
			this.formateOrder();
			this.chart.setOption({
				title: {
					text: "业务员每日需求单跟踪统计",
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-659543f1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/WorkLineChart.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_WorkLineChart = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/WorkLineChart.vue
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
  WorkLineChart,
  components_WorkLineChart,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var data_components_WorkLineChart = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/WorkOrderBarChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var WorkOrderBarChart = ({
  mixins: [resize["a" /* default */]],
  props: {
    workOrderData: {
      type: Array,
      default: []
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '380px'
    }
  },
  watch: {
    workOrderData: {
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
          text: "业务员需求单跟进情况统计",
          left: 'left',
          textStyle: {
            color: "#333",
            fontSize: "20"
          }
        },
        tooltip: {
          trigger: 'item'
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
          type: 'category',
          data: this.workOrderData.map(function (item) {
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
              color: '#4d816a'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#4d816a'
            }
          }
        }],
        legend: {
          left: 'center',
          data: ['需求分配量', '需求处理量']
        },
        series: [{
          name: '需求分配量',
          type: 'bar',
          barGap: 0,
          data: this.workOrderData.map(function (item) {
            return item.value[0];
          }),
          animationEasing: 'cubicInOut',
          animationDuration: 2600,
          itemStyle: {
            normal: {
              color: '#f5994e'
            }
          },
          label: {
            normal: {
              show: true,
              fontSize: 14
            }
          }
        }, {
          name: '需求处理量',
          type: 'bar',
          data: this.workOrderData.map(function (item) {
            return item.value[1];
          }),
          animationEasing: 'cubicInOut',
          animationDuration: 2600,
          itemStyle: {
            normal: {
              color: '#5ab1ef'
            }
          },
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
      this.chart = echarts_default.a.init(this.$el, 'macarons');
      this.setOptions();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21cd757a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/WorkOrderBarChart.vue
var WorkOrderBarChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var WorkOrderBarChart_staticRenderFns = []
var WorkOrderBarChart_esExports = { render: WorkOrderBarChart_render, staticRenderFns: WorkOrderBarChart_staticRenderFns }
/* harmony default export */ var components_WorkOrderBarChart = (WorkOrderBarChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/WorkOrderBarChart.vue
var WorkOrderBarChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var WorkOrderBarChart___vue_template_functional__ = false
/* styles */
var WorkOrderBarChart___vue_styles__ = null
/* scopeId */
var WorkOrderBarChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var WorkOrderBarChart___vue_module_identifier__ = null
var WorkOrderBarChart_Component = WorkOrderBarChart_normalizeComponent(
  WorkOrderBarChart,
  components_WorkOrderBarChart,
  WorkOrderBarChart___vue_template_functional__,
  WorkOrderBarChart___vue_styles__,
  WorkOrderBarChart___vue_scopeId__,
  WorkOrderBarChart___vue_module_identifier__
)

/* harmony default export */ var data_components_WorkOrderBarChart = (WorkOrderBarChart_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/AgentWorkPerfect.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var AgentWorkPerfect = ({
  mixins: [resize["a" /* default */]],
  props: {
    agentWorkPerfectData: {
      type: Array,
      default: []
    },
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '380px'
    }
  },
  watch: {
    agentWorkPerfectData: {
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
          text: "需求单跟进合格统计",
          left: 'left',
          textStyle: {
            color: "#333",
            fontSize: "20"
          }
        },
        tooltip: {
          trigger: 'item'
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
          type: 'category',
          data: this.agentWorkPerfectData.map(function (item) {
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
              color: '#4d816a'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#4d816a'
            }
          }
        }],
        legend: {
          left: 'center',
          data: ['不合格', '合格', '优秀']
        },
        series: [{
          name: '不合格',
          type: 'bar',
          barGap: 0,
          data: this.agentWorkPerfectData.map(function (item) {
            return item.value[0];
          }),
          animationEasing: 'cubicInOut',
          animationDuration: 2600,
          itemStyle: {
            normal: {
              color: '#ff9800'
            }
          },
          label: {
            normal: {
              show: true,
              fontSize: 14
            }
          }
        }, {
          name: '合格',
          type: 'bar',
          data: this.agentWorkPerfectData.map(function (item) {
            return item.value[1];
          }),
          animationEasing: 'cubicInOut',
          animationDuration: 2600,
          itemStyle: {
            normal: {
              color: '#00b7ff'
            }
          },
          label: {
            normal: {
              show: true,
              fontSize: 14
            }
          }
        }, {
          name: '优秀',
          type: 'bar',
          data: this.agentWorkPerfectData.map(function (item) {
            return item.value[2];
          }),
          animationEasing: 'cubicInOut',
          animationDuration: 2600,
          itemStyle: {
            normal: {
              color: '#8ac34a'
            }
          },
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
      this.chart = echarts_default.a.init(this.$el, 'macarons');
      this.setOptions();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-26fe1f0e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/AgentWorkPerfect.vue
var AgentWorkPerfect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var AgentWorkPerfect_staticRenderFns = []
var AgentWorkPerfect_esExports = { render: AgentWorkPerfect_render, staticRenderFns: AgentWorkPerfect_staticRenderFns }
/* harmony default export */ var components_AgentWorkPerfect = (AgentWorkPerfect_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/AgentWorkPerfect.vue
var AgentWorkPerfect_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AgentWorkPerfect___vue_template_functional__ = false
/* styles */
var AgentWorkPerfect___vue_styles__ = null
/* scopeId */
var AgentWorkPerfect___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AgentWorkPerfect___vue_module_identifier__ = null
var AgentWorkPerfect_Component = AgentWorkPerfect_normalizeComponent(
  AgentWorkPerfect,
  components_AgentWorkPerfect,
  AgentWorkPerfect___vue_template_functional__,
  AgentWorkPerfect___vue_styles__,
  AgentWorkPerfect___vue_scopeId__,
  AgentWorkPerfect___vue_module_identifier__
)

/* harmony default export */ var data_components_AgentWorkPerfect = (AgentWorkPerfect_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/AgentWorkTotalChart.vue
//
//
//
//



__webpack_require__("tcAE"); // echarts theme

/* harmony default export */ var AgentWorkTotalChart = ({
  mixins: [resize["a" /* default */]],
  props: {
    agentWorkLogTotal: {
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
    agentWorkLogTotal: {
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
          text: '业务组每日需求单跟进情况统计',
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
          data: this.agentWorkLogTotal.x
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
          data: ['需求单分配总量', '需求单处理总量']
        },
        calculable: true,
        series: [{
          name: '需求单分配总量',
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
          data: this.agentWorkLogTotal.data[0],
          lineStyle: {
            color: '#FF005A',
            width: 2
          },
          areaStyle: {
            normal: {
              color: '#f3f8ff'
            }
          }
        }, {
          name: '需求单处理总量',
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
          data: this.agentWorkLogTotal.data[1],
          lineStyle: {
            normal: {
              width: 2,
              type: 'dashed'
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a810b3e6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/AgentWorkTotalChart.vue
var AgentWorkTotalChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var AgentWorkTotalChart_staticRenderFns = []
var AgentWorkTotalChart_esExports = { render: AgentWorkTotalChart_render, staticRenderFns: AgentWorkTotalChart_staticRenderFns }
/* harmony default export */ var components_AgentWorkTotalChart = (AgentWorkTotalChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/AgentWorkTotalChart.vue
var AgentWorkTotalChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AgentWorkTotalChart___vue_template_functional__ = false
/* styles */
var AgentWorkTotalChart___vue_styles__ = null
/* scopeId */
var AgentWorkTotalChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AgentWorkTotalChart___vue_module_identifier__ = null
var AgentWorkTotalChart_Component = AgentWorkTotalChart_normalizeComponent(
  AgentWorkTotalChart,
  components_AgentWorkTotalChart,
  AgentWorkTotalChart___vue_template_functional__,
  AgentWorkTotalChart___vue_styles__,
  AgentWorkTotalChart___vue_scopeId__,
  AgentWorkTotalChart___vue_module_identifier__
)

/* harmony default export */ var data_components_AgentWorkTotalChart = (AgentWorkTotalChart_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/DataCheckedLineChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var DataCheckedLineChart = ({
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
		agentCheckedLog: {
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
		this.legend = this.agentCheckedLog.list.map(function (item) {
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
		agentCheckedLog: {
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
			this.agentCheckedLog.list.forEach(function (item, i) {
				arr.push(_this.formateData(item.name, item.list, 'solid', color[i]));
			});
			this.seriesData = arr;
		},
		setOptions: function setOptions() {
			this.formateOrder();
			this.chart.setOption({
				title: {
					text: "业务员每日审核房源数统计(" + this.agentCheckedLog.total + ")",
					left: 'left',
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				xAxis: {
					data: this.agentCheckedLog.x,
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5d05e3a7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/DataCheckedLineChart.vue
var DataCheckedLineChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var DataCheckedLineChart_staticRenderFns = []
var DataCheckedLineChart_esExports = { render: DataCheckedLineChart_render, staticRenderFns: DataCheckedLineChart_staticRenderFns }
/* harmony default export */ var components_DataCheckedLineChart = (DataCheckedLineChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/DataCheckedLineChart.vue
var DataCheckedLineChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var DataCheckedLineChart___vue_template_functional__ = false
/* styles */
var DataCheckedLineChart___vue_styles__ = null
/* scopeId */
var DataCheckedLineChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DataCheckedLineChart___vue_module_identifier__ = null
var DataCheckedLineChart_Component = DataCheckedLineChart_normalizeComponent(
  DataCheckedLineChart,
  components_DataCheckedLineChart,
  DataCheckedLineChart___vue_template_functional__,
  DataCheckedLineChart___vue_styles__,
  DataCheckedLineChart___vue_scopeId__,
  DataCheckedLineChart___vue_module_identifier__
)

/* harmony default export */ var data_components_DataCheckedLineChart = (DataCheckedLineChart_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/AgentPublicLineChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var AgentPublicLineChart = ({
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
		agentPublicLine: {
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
		this.legend = this.agentPublicLine.list.map(function (item) {
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
		agentPublicLine: {
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
			this.agentPublicLine.list.forEach(function (item, i) {
				arr.push(_this.formateData(item.name, item.list, 'solid', color[i]));
			});
			this.seriesData = arr;
		},
		setOptions: function setOptions() {
			this.formateOrder();
			this.chart.setOption({
				title: {
					text: "经纪人每日发布房源数量",
					left: 'left',
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				xAxis: {
					data: this.agentPublicLine.x,
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
					type: 'scroll',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-18bb15d6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/AgentPublicLineChart.vue
var AgentPublicLineChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var AgentPublicLineChart_staticRenderFns = []
var AgentPublicLineChart_esExports = { render: AgentPublicLineChart_render, staticRenderFns: AgentPublicLineChart_staticRenderFns }
/* harmony default export */ var components_AgentPublicLineChart = (AgentPublicLineChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/AgentPublicLineChart.vue
var AgentPublicLineChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var AgentPublicLineChart___vue_template_functional__ = false
/* styles */
var AgentPublicLineChart___vue_styles__ = null
/* scopeId */
var AgentPublicLineChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AgentPublicLineChart___vue_module_identifier__ = null
var AgentPublicLineChart_Component = AgentPublicLineChart_normalizeComponent(
  AgentPublicLineChart,
  components_AgentPublicLineChart,
  AgentPublicLineChart___vue_template_functional__,
  AgentPublicLineChart___vue_styles__,
  AgentPublicLineChart___vue_scopeId__,
  AgentPublicLineChart___vue_module_identifier__
)

/* harmony default export */ var data_components_AgentPublicLineChart = (AgentPublicLineChart_Component.exports);

// EXTERNAL MODULE: ./src/components/Sticky/index.vue + 2 modules
var Sticky = __webpack_require__("vHhr");

// EXTERNAL MODULE: ./src/api/data/index.js
var api_data = __webpack_require__("tIzN");

// EXTERNAL MODULE: ./src/api/webrequest/index.js
var webrequest = __webpack_require__("Fibt");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/directive/permission/index.js + 1 modules
var permission = __webpack_require__("je39");

// EXTERNAL MODULE: ./src/api/common/common.js
var common_common = __webpack_require__("Kw+B");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/components/DemandTimeChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


var animationDuration = 6000;
/* harmony default export */ var DemandTimeChart = ({
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
		demandTimeList: {
			type: Array
		}
	},
	data: function data() {
		return {
			chart: null,
			seriesData: []
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
		demandTimeList: {
			deep: true,
			handler: function handler(val) {
				this.chart.dispose();
				this.chart = null;
				this.initChart();
			}
		}
	},
	methods: {
		formateData: function formateData(name, data) {
			return {
				name: name,
				type: 'bar',
				stack: 'vistors',
				barWidth: '60%',
				data: data,
				markPoint: {
					data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }],
					label: {
						normal: {
							color: '#fff',
							fontSize: 16,
							fontWeight: 'bold',
							verticalAlign: 'middle',
							textBorderColor: '#333'
						}
					}
				},
				itemStyle: {
					normal: {
						color: function color(params) {
							var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa', '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050', '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'];
							return colorList[params.dataIndex];
						},
						label: {
							show: true,
							textStyle: {
								color: '#fff',
								fontWeight: 'bold',
								fontSize: 14
							},
							formatter: function formatter(p) {
								return p.value > 0 ? p.value : '';
							}
						}
					}
				}
			};
		},
		formateOrder: function formateOrder() {
			var _this = this;

			var arr = [];
			this.demandTimeList.forEach(function (item, i) {
				arr.push(_this.formateData(item.value));
			});
			this.seriesData = arr;
		},
		setOptions: function setOptions() {
			this.chart.setOption({
				title: {
					text: "平均首次接单时长（单位：小时）",
					left: 'left',
					textStyle: {
						color: "#333",
						fontSize: "20"
					}
				},
				xAxis: {
					type: 'category',
					data: this.demandTimeList.map(function (item) {
						return item.name;
					}),
					axisTick: {
						alignWithLabel: true
					},
					axisLabel: {
						interval: 0,
						rotate: 20
					},
					axisLine: {
						lineStyle: {
							color: '#4d816a'
						}
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
				yAxis: [{
					type: 'value',
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#4d816a'
						}
					}
				}],
				legend: {
					left: 'center',
					top: '10',
					data: this.demandTimeList.map(function (item) {
						return item.name;
					})
				},
				calculable: true,
				series: [{
					type: 'bar',
					stack: 'vistors',
					barWidth: '60%',
					data: this.demandTimeList.map(function (item) {
						return item.value;
					}),
					markPoint: {
						data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }],
						label: {
							normal: {
								color: '#fff',
								fontSize: 16,
								fontWeight: 'bold',
								verticalAlign: 'middle',
								textBorderColor: '#333'
							}
						}
					},
					animationDuration: animationDuration,
					itemStyle: {
						normal: {
							color: function color(params) {
								var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa', '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050', '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'];
								return colorList[params.dataIndex];
							},
							label: {
								show: true,
								textStyle: {
									color: '#fff',
									fontWeight: 'bold',
									fontSize: 14
								},
								formatter: function formatter(p) {
									return p.value > 0 ? p.value : '';
								}
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4bb09eea","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/components/DemandTimeChart.vue
var DemandTimeChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var DemandTimeChart_staticRenderFns = []
var DemandTimeChart_esExports = { render: DemandTimeChart_render, staticRenderFns: DemandTimeChart_staticRenderFns }
/* harmony default export */ var components_DemandTimeChart = (DemandTimeChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/components/DemandTimeChart.vue
var DemandTimeChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var DemandTimeChart___vue_template_functional__ = false
/* styles */
var DemandTimeChart___vue_styles__ = null
/* scopeId */
var DemandTimeChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var DemandTimeChart___vue_module_identifier__ = null
var DemandTimeChart_Component = DemandTimeChart_normalizeComponent(
  DemandTimeChart,
  components_DemandTimeChart,
  DemandTimeChart___vue_template_functional__,
  DemandTimeChart___vue_styles__,
  DemandTimeChart___vue_scopeId__,
  DemandTimeChart___vue_module_identifier__
)

/* harmony default export */ var data_components_DemandTimeChart = (DemandTimeChart_Component.exports);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/WorkChart.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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




/* harmony default export */ var WorkChart = ({
	name: "DashboardAdmin",
	components: {
		Sticky: Sticky["a" /* default */],
		WorkLineChart: data_components_WorkLineChart,
		WorkOrderBarChart: data_components_WorkOrderBarChart,
		AgentWorkPerfect: data_components_AgentWorkPerfect,
		AgentWorkTotalChart: data_components_AgentWorkTotalChart,
		DataCheckedLineChart: data_components_DataCheckedLineChart,
		AgentPublicLineChart: data_components_AgentPublicLineChart,
		DemandTimeChart: data_components_DemandTimeChart
	},
	directives: { permission: permission["a" /* default */] },
	data: function data() {
		return {
			reId: null,
			count: {},
			workers1: [],
			registerTmpData: null,
			agentWorkLog: null,
			agentWorTmpkLog: null,
			workOrderData: null,
			agentWorkLogTotal: null,
			agentWorkPerfectData: null,
			options: [],
			options1: [],
			searchForm: { timeRange: null },
			searchFormWork: {},
			searchCheckedLog: {},
			searchPublicHouse: { agent: null },
			agentCheckedLog: null,
			agentCheckedTmpkLog: null,
			demandTimeList: [],
			agentlist: null,
			roleList: [],
			agent: null,
			roleid: null,
			seelogTotal: 0,
			seepagesize: 0,
			seelogPage: 1,
			seelogs: [],
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},
	created: function created() {
		var end = new Date();
		var start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
		this.searchForm.timeRange = [start, end];
		this.getAgentWorkLog();
		this.getWorkOrderData();
		this.getAgentWorkLogTotal();
		this.getCheckLogLists();
		this.changeAgents();
		this.getSeeLogs();
		this.getDemandTimeList();
		this.getAgentWorkPerfect();
	},

	methods: {
		getAgentWorkPerfect: function getAgentWorkPerfect() {
			var _this = this;

			var params = { timeRange: this.searchForm.timeRange };
			Object(api_data["d" /* getAgentWorkPerfect */])(params).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.agentWorkPerfectData = data;
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
		changeAgents: function changeAgents(roleid) {
			var _this2 = this;

			// var params = {timeRange: this.searchForm.timeRange}
			Object(common_common["b" /* changeAgents */])(roleid).then(function (response) {
				var data = response.data.data.lists;
				_this2.roleList = response.data.data.roles;
				if (data) {
					_this2.agentlist = data;
				} else {
					_this2.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleSearchChart1: function handleSearchChart1() {
			this.changeAgents(this.roleid);
			this.agent = '';
			this.getSeeLogs();
		},
		handleSearchChart: function handleSearchChart() {
			// this.getAssessTotal();
			this.getSeeLogs();
		},
		handleTimeSearch: function handleTimeSearch() {
			this.getAgentWorkLog();
			this.getWorkOrderData();
			this.getAgentWorkLogTotal();
			this.getAgentWorkPerfect();
			this.getCheckLogLists();
			this.getSeeLogs();
			this.getDemandTimeList();
		},
		getDemandTimeList: function getDemandTimeList() {
			var _this3 = this;

			Object(request["a" /* default */])({
				url: '/api/dealTime',
				method: 'get',
				params: { timeRange: this.searchForm.timeRange }
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.demandTimeList = data;
					_this3.workers1 = _this3.demandTimeList.map(function (item) {
						return item.name;
					});
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
		handleseelogChange: function handleseelogChange(val) {
			this.seelogPage = Number(val);
			this.getSeeLogs();
		},
		getSeeLogs: function getSeeLogs() {
			var _this4 = this;

			var params = {
				timeRange: this.searchForm.timeRange,
				agentId: this.agent,
				page: this.seelogPage,
				reId: this.reId
			};
			Object(api_data["o" /* getSeeLogs */])(params).then(function (response) {
				_this4.seelogs = response.data.data.data;
				_this4.seepagesize = Number(response.data.data.per_page);
				_this4.seelogTotal = Number(response.data.data.total);
			});
		},
		handleAgentUser: function handleAgentUser() {
			var _this5 = this;

			if (!this.searchFormWork.agent) {
				this.agentWorkLog.data = this.agentWorTmpkLog.data;
				return;
			}
			this.agentWorkLog.data = this.agentWorTmpkLog.data.filter(function (item) {
				return item.name == _this5.searchFormWork.agent;
			});
		},
		handleAgentUser1: function handleAgentUser1() {
			var _this6 = this;

			if (!this.searchCheckedLog.agent) {
				this.agentCheckedLog.list = this.agentCheckedTmpkLog.list;
				return;
			}
			this.agentCheckedLog.list = this.agentCheckedTmpkLog.list.filter(function (item) {
				return item.name == _this6.searchCheckedLog.agent;
			});
		},
		getAgentWorkLog: function getAgentWorkLog() {
			var _this7 = this;

			Object(api_data["b" /* getAgentWorkLog */])(this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this7.agentWorkLog = data;
					_this7.agentWorTmpkLog = assign_default()({}, data);
					_this7.options = _this7.agentWorkLog.data.map(function (item) {
						return item.name;
					});
					// this.tabs = tabs.map((item,index) => {
					//   return item + ' [' + data[index-1] + ']'
					// })
					// this.activeName = this.tabs[this.$route.query.tab] || this.tabs[0];
				} else {
					_this7.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getCheckLogLists: function getCheckLogLists() {
			var _this8 = this;

			Object(api_data["f" /* getCheckLogLists */])(this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this8.agentCheckedLog = data;
					_this8.agentCheckedTmpkLog = assign_default()({}, data);
					_this8.options1 = _this8.agentCheckedLog.list.map(function (item) {
						return item.name;
					});
					// this.tabs = tabs.map((item,index) => {
					//   return item + ' [' + data[index-1] + ']'
					// })
					// this.activeName = this.tabs[this.$route.query.tab] || this.tabs[0];
				} else {
					_this8.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getWorkOrderData: function getWorkOrderData() {
			var _this9 = this;

			var params = { timeRange: this.searchForm.timeRange };
			Object(api_data["r" /* getWorkOrderData */])(params).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this9.workOrderData = data;
					// this.tabs = tabs.map((item,index) => {
					//   return item + ' [' + data[index-1] + ']'
					// })
					// this.activeName = this.tabs[this.$route.query.tab] || this.tabs[0];
				} else {
					_this9.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getAgentWorkLogTotal: function getAgentWorkLogTotal() {
			var _this10 = this;

			var params = { timeRange: this.searchForm.timeRange };
			Object(api_data["c" /* getAgentWorkLogTotal */])(params).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this10.agentWorkLogTotal = data;
					// this.tabs = tabs.map((item,index) => {
					//   return item + ' [' + data[index-1] + ']'
					// })
					// this.activeName = this.tabs[this.$route.query.tab] || this.tabs[0];
				} else {
					_this10.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d97a06aa","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/WorkChart.vue
var WorkChart_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard-editor-container order-chart"},[_c('sticky',{staticStyle:{"background":"#fff"},attrs:{"class-name":"sub-navbar draft"}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.handleTimeSearch},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('div',[_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},on:{"change":_vm.handleAgentUser},model:{value:(_vm.searchFormWork.agent),callback:function ($$v) {_vm.$set(_vm.searchFormWork, "agent", $$v)},expression:"searchFormWork.agent"}},_vm._l((_vm.options),function(item,index){return _c('el-option',{key:'op'+index,attrs:{"label":item,"value":item}},[_vm._v(" "+_vm._s(item))])}))],1),_vm._v(" "),_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.agentWorkLog)?_c('work-line-chart',{attrs:{"agentWorkLog":_vm.agentWorkLog,"width":"100%"}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-bar"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择业务员"},on:{"change":_vm.handleAgentUser1},model:{value:(_vm.searchCheckedLog.agent),callback:function ($$v) {_vm.$set(_vm.searchCheckedLog, "agent", $$v)},expression:"searchCheckedLog.agent"}},_vm._l((_vm.options1),function(item,index){return _c('el-option',{key:'op1_'+index,attrs:{"label":item,"value":item}},[_vm._v(" "+_vm._s(item))])}))],1),_vm._v(" "),_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.agentCheckedLog)?_c('data-checked-line-chart',{attrs:{"agentCheckedLog":_vm.agentCheckedLog,"width":"100%"}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{directives:[{name:"permission",rawName:"v-permission",value:(['超级管理员']),expression:"['超级管理员']"}],staticClass:"chart-block"},[_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.workOrderData)?_c('WorkOrderBarChart',{attrs:{"workOrderData":_vm.workOrderData}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{staticClass:"chart-block"},[_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.demandTimeList)?_c('demand-time-chart',{attrs:{"demandTimeList":_vm.demandTimeList,"width":"100%"}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{directives:[{name:"permission",rawName:"v-permission",value:(['超级管理员']),expression:"['超级管理员']"}],staticClass:"chart-block"},[_c('div',{staticClass:"filter-content",staticStyle:{"position":"relative"}},[_c('div',{staticClass:"chart-wrapper"},[(_vm.agentWorkLogTotal)?_c('AgentWorkTotalChart',{attrs:{"agentWorkLogTotal":_vm.agentWorkLogTotal,"width":"100%"}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',{directives:[{name:"permission",rawName:"v-permission",value:(['超级管理员']),expression:"['超级管理员']"}],staticClass:"chart-block"},[_c('div',{staticClass:"filter-content"},[_c('div',{staticClass:"chart-wrapper",staticStyle:{"position":"relative"}},[(_vm.agentWorkPerfectData)?_c('AgentWorkPerfect',{attrs:{"agentWorkPerfectData":_vm.agentWorkPerfectData}}):_vm._e()],1)])]),_vm._v(" "),_c('el-row',[_c('el-col',[_c('div',{staticClass:"filter-bar"},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"200px"},attrs:{"clearable":"","placeholder":"请选择角色"},on:{"change":_vm.handleSearchChart1},model:{value:(_vm.roleid),callback:function ($$v) {_vm.roleid=$$v},expression:"roleid"}},_vm._l((_vm.roleList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(_vm._s(item.name))])})),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"200px"},attrs:{"clearable":"","placeholder":"请选择经纪人"},on:{"change":_vm.handleSearchChart},model:{value:(_vm.agent),callback:function ($$v) {_vm.agent=$$v},expression:"agent"}},_vm._l((_vm.agentlist),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}},[_vm._v(_vm._s(item.chinesename))])})),_vm._v(" "),_c('el-input',{staticStyle:{"width":"200px"},attrs:{"maxlength":"30","placeholder":"请输入需求单ID"},model:{value:(_vm.reId),callback:function ($$v) {_vm.reId=$$v},expression:"reId"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.handleSearchChart()}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.seelogs}},[_c('el-table-column',{attrs:{"label":"序号","type":"index"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"agent_name","label":"跟进人","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"re_id","label":"需求单ID","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"unqualified","label":"不合格次数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"qualified","label":"合格次数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"excellent","label":"优秀次数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"require_status","label":"成交情况"}})],1),_vm._v(" "),(_vm.seelogTotal>_vm.seepagesize)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":_vm.seelogTotal,"page-size":_vm.seepagesize,"current-page":_vm.seelogPage},on:{"update:currentPage":function($event){_vm.seelogPage=$event},"current-change":_vm.handleseelogChange}}):_vm._e()],1)],1)],1)],1)}
var WorkChart_staticRenderFns = []
var WorkChart_esExports = { render: WorkChart_render, staticRenderFns: WorkChart_staticRenderFns }
/* harmony default export */ var data_WorkChart = (WorkChart_esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/WorkChart.vue
function injectStyle (ssrContext) {
  __webpack_require__("lzzb")
}
var WorkChart_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var WorkChart___vue_template_functional__ = false
/* styles */
var WorkChart___vue_styles__ = injectStyle
/* scopeId */
var WorkChart___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var WorkChart___vue_module_identifier__ = null
var WorkChart_Component = WorkChart_normalizeComponent(
  WorkChart,
  data_WorkChart,
  WorkChart___vue_template_functional__,
  WorkChart___vue_styles__,
  WorkChart___vue_scopeId__,
  WorkChart___vue_module_identifier__
)

/* harmony default export */ var _12hf_data_WorkChart = __webpack_exports__["default"] = (WorkChart_Component.exports);


/***/ }),

/***/ "lzzb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("A0C8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f1724b44", content, true);

/***/ })

});
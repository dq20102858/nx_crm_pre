webpackJsonp([14],{

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

/***/ "RXop":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

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

// EXTERNAL MODULE: ./src/views/fjingling/components/mixins/resize.js
var resize = __webpack_require__("OlbT");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/components/LineChart.vue
//
//
//
//


__webpack_require__("tcAE"); // echarts theme


/* harmony default export */ var LineChart = ({
  mixins: [resize["a" /* default */]],
  props: {
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
      default: '350px'
    },
    chartData: {
      type: Object
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

      this.chart.setOption({
        xAxis: {
          data: days,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 20
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        grid: { // 控制图的大小，调整下面这些值就可以，
          left: 40,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        legend: {
          data: [type + '统计数']
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
          name: type + '统计数',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              },
              label: {
                show: true,
                position: 'top',
                formatter: function formatter(p) {
                  return p.value > 0 ? p.value : '';
                }
              }
            }
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      });
    },
    initChart: function initChart() {
      this.chart = echarts_default.a.init(this.$el, 'macarons');
      this.setOptions(this.chartData);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1c5243ef","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/components/LineChart.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className,style:({height:_vm.height,width:_vm.width})})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_LineChart = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/components/LineChart.vue
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
  LineChart,
  components_LineChart,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fjingling_components_LineChart = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/GaManager.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var GaManager = ({
  name: 'gaManager',
  components: {
    Refresh: Refresh["a" /* default */],
    CountTo: vue_count_to_min_default.a,
    LineChart: fjingling_components_LineChart
  },
  data: function data() {
    return {
      curTab: 'pv',
      charData: null,
      lineChartData: { actualData: [], days: [], type: 'pv' },
      pv_total: 0,
      uv_total: 0,
      ip_total: 0,
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
    this.getPvUvIp();
  },
  methods: {
    getPvUvIp: function getPvUvIp() {
      var _this = this;

      Object(fjingling["m" /* getPvUvIp */])(this.search).then(function (response) {
        var data = response.data.data;
        if (data) {
          //   this.lineChartData = {actualData: data[this.curTab+"_counts"],days: data[this.curTab+"_date"]};
          _this.charData = data;
          _this.lineChartData.actualData = data[_this.curTab + "_counts"];
          _this.lineChartData.days = data[_this.curTab + "_date"];
          _this.lineChartData.type = _this.curTab;
          _this.pv_total = data.pv_total;
          _this.uv_total = data.uv_total;
          _this.ip_total = data.ip_total;
        } else {
          // this.lists = [];
          // this.total = 0;
          // this.page = 0;
        }
      }).catch(function (err) {});
    },
    handleSetLineChartData: function handleSetLineChartData(type) {
      this.curTab = type;
      this.lineChartData.actualData = this.charData[this.curTab + "_counts"];
      this.lineChartData.days = this.charData[this.curTab + "_date"];
      this.lineChartData.type = this.curTab;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-728be82a","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/GaManager.vue
var GaManager_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"},attrs:{"id":"wrap-individual"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search}},[_c('el-form-item',{attrs:{"label":"设备"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.search.sys_type),callback:function ($$v) {_vm.$set(_vm.search, "sys_type", $$v)},expression:"search.sys_type"}},[_c('el-option',{attrs:{"label":"房鲸灵PC","value":"60"}},[_vm._v(" 房鲸灵PC")]),_vm._v(" "),_c('el-option',{attrs:{"label":"房鲸灵小程序","value":"31"}},[_vm._v(" 房鲸灵小程序")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.search.timeRange),callback:function ($$v) {_vm.$set(_vm.search, "timeRange", $$v)},expression:"search.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getPvUvIp}},[_vm._v("搜索")]),_vm._v(" "),_c('refresh')],1),_vm._v(" "),_c('el-row',{staticClass:"panel-group",attrs:{"gutter":50}},[_c('el-col',{staticClass:"card-panel-col",attrs:{"xs":12,"sm":12,"lg":8}},[_c('div',{class:['card-panel',{'active': _vm.curTab=='pv'}],on:{"click":function($event){_vm.handleSetLineChartData('pv')}}},[_c('div',{staticClass:"card-panel-icon-wrapper icon-money"},[_c('svg-icon',{attrs:{"icon-class":"eye","class-name":"card-panel-icon"}})],1),_vm._v(" "),_c('div',{staticClass:"card-panel-description"},[_c('div',{staticClass:"card-panel-text"},[_vm._v("PV")]),_vm._v(" "),_c('count-to',{staticClass:"card-panel-num",attrs:{"startVal":0,"endVal":_vm.pv_total,"duration":1000}})],1)])]),_vm._v(" "),_c('el-col',{staticClass:"card-panel-col",attrs:{"xs":12,"sm":12,"lg":8}},[_c('div',{class:['card-panel',{'active': _vm.curTab=='uv'}],on:{"click":function($event){_vm.handleSetLineChartData('uv')}}},[_c('div',{staticClass:"card-panel-icon-wrapper icon-people"},[_c('svg-icon',{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),_vm._v(" "),_c('div',{staticClass:"card-panel-description"},[_c('div',{staticClass:"card-panel-text"},[_vm._v("UV")]),_vm._v(" "),_c('count-to',{staticClass:"card-panel-num",attrs:{"startVal":0,"endVal":_vm.uv_total,"duration":1000}})],1)])]),_vm._v(" "),_c('el-col',{staticClass:"card-panel-col",attrs:{"xs":12,"sm":12,"lg":8}},[_c('div',{class:['card-panel',{'active': _vm.curTab=='ip'}],on:{"click":function($event){_vm.handleSetLineChartData('ip')}}},[_c('div',{staticClass:"card-panel-icon-wrapper icon-message"},[_c('svg-icon',{attrs:{"icon-class":"ip","class-name":"card-panel-icon"}})],1),_vm._v(" "),_c('div',{staticClass:"card-panel-description"},[_c('div',{staticClass:"card-panel-text"},[_vm._v("IP")]),_vm._v(" "),_c('count-to',{staticClass:"card-panel-num",attrs:{"startVal":0,"endVal":_vm.ip_total,"duration":1000}})],1)])])],1),_vm._v(" "),_c('el-row',{staticStyle:{"background":"#fff","padding":"16px 16px 0","margin-bottom":"32px"}},[_c('line-chart',{attrs:{"chart-data":_vm.lineChartData}})],1)],1)}
var GaManager_staticRenderFns = []
var GaManager_esExports = { render: GaManager_render, staticRenderFns: GaManager_staticRenderFns }
/* harmony default export */ var fjingling_GaManager = (GaManager_esExports);
// CONCATENATED MODULE: ./src/views/fjingling/GaManager.vue
function injectStyle (ssrContext) {
  __webpack_require__("Ru2L")
}
var GaManager_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var GaManager___vue_template_functional__ = false
/* styles */
var GaManager___vue_styles__ = injectStyle
/* scopeId */
var GaManager___vue_scopeId__ = "data-v-728be82a"
/* moduleIdentifier (server only) */
var GaManager___vue_module_identifier__ = null
var GaManager_Component = GaManager_normalizeComponent(
  GaManager,
  fjingling_GaManager,
  GaManager___vue_template_functional__,
  GaManager___vue_styles__,
  GaManager___vue_scopeId__,
  GaManager___vue_module_identifier__
)

/* harmony default export */ var views_fjingling_GaManager = __webpack_exports__["default"] = (GaManager_Component.exports);


/***/ }),

/***/ "Ru2L":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("v+pJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("de77f396", content, true);

/***/ }),

/***/ "v+pJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#ipSearchForm[data-v-728be82a] {\n  padding: 20px;\n}\n.panel-group[data-v-728be82a] {\n  margin-top: 18px;\n  padding: 0 30px;\n}\n.panel-group .card-panel-col[data-v-728be82a] {\n    margin-bottom: 32px;\n}\n.panel-group .card-panel[data-v-728be82a] {\n    height: 108px;\n    cursor: pointer;\n    font-size: 12px;\n    position: relative;\n    overflow: hidden;\n    color: #666;\n    background: #fff;\n    -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n            box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);\n    border-color: rgba(0, 0, 0, 0.05);\n}\n.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-728be82a], .panel-group .card-panel.active .card-panel-icon-wrapper[data-v-728be82a] {\n      color: #fff;\n}\n.panel-group .card-panel:hover .icon-people[data-v-728be82a], .panel-group .card-panel.active .icon-people[data-v-728be82a] {\n      background: #40c9c6;\n}\n.panel-group .card-panel:hover .icon-message[data-v-728be82a], .panel-group .card-panel.active .icon-message[data-v-728be82a] {\n      background: #36a3f7;\n}\n.panel-group .card-panel:hover .icon-money[data-v-728be82a], .panel-group .card-panel.active .icon-money[data-v-728be82a] {\n      background: #f4516c;\n}\n.panel-group .card-panel:hover .icon-shoppingCard[data-v-728be82a], .panel-group .card-panel.active .icon-shoppingCard[data-v-728be82a] {\n      background: #34bfa3;\n}\n.panel-group .card-panel .icon-people[data-v-728be82a] {\n      color: #40c9c6;\n}\n.panel-group .card-panel .icon-message[data-v-728be82a] {\n      color: #36a3f7;\n}\n.panel-group .card-panel .icon-money[data-v-728be82a] {\n      color: #f4516c;\n}\n.panel-group .card-panel .icon-shoppingCard[data-v-728be82a] {\n      color: #34bfa3;\n}\n.panel-group .card-panel .card-panel-icon-wrapper[data-v-728be82a] {\n      float: left;\n      margin: 14px 0 0 14px;\n      padding: 16px;\n      -webkit-transition: all 0.38s ease-out;\n      transition: all 0.38s ease-out;\n      border-radius: 6px;\n}\n.panel-group .card-panel .card-panel-icon[data-v-728be82a] {\n      float: left;\n      font-size: 48px;\n}\n.panel-group .card-panel .card-panel-description[data-v-728be82a] {\n      float: right;\n      font-weight: bold;\n      margin: 26px;\n      margin-left: 0px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-text[data-v-728be82a] {\n        line-height: 18px;\n        color: rgba(0, 0, 0, 0.45);\n        font-size: 16px;\n        margin-bottom: 12px;\n}\n.panel-group .card-panel .card-panel-description .card-panel-num[data-v-728be82a] {\n        font-size: 20px;\n}\n", ""]);

// exports


/***/ })

});
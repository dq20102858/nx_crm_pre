webpackJsonp([112],{

/***/ "pWJY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/PvManager.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var PvManager = ({
  name: 'pvManager',
  components: {
    Refresh: Refresh["a" /* default */]
  },
  data: function data() {
    return {
      pv_total: 0,
      login_total: 0,
      lists: [],
      pagesize: 10,
      total: 1, //总页数
      page: 1,
      search: { timeRange: [] },
      code_map: {},
      code: {
        num: 4
      },
      dialogFormVisible: false,
      share_id: 0,
      pickerOptions2: common["a" /* publicData */].pickerOptions2
    };
  },

  computed: {},
  created: function created() {
    var end = new Date();
    var start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    this.search.timeRange = [start, end];
    this.getRecordUserList();
  },
  methods: {
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getRecordUserList();
    },


    /**
     * 分配 邀请码
     * @param {*} index
     * @param {*} row
     */
    distribute: function distribute(index, row) {
      var _this = this;

      Object(fjingling["g" /* distribute */])(this.share_id, this.code.num).then(function (response) {
        var data = response.data;
        if (data.status) {
          _this.getRecordUserList();
        } else {
          _this.$message({
            showClose: true,
            message: data.msg,
            type: "error"
          });
        }
        _this.dialogFormVisible = false;
      }).catch(function (err) {
        _this.$message({
          showClose: true,
          message: "系统出错，请重试！",
          type: "error"
        });
      });
    },
    openDialog: function openDialog(index, row) {
      this.share_id = row.id; //分享人的id
      this.dialogFormVisible = true;
    },
    getRecordUserList: function getRecordUserList() {
      var _this2 = this;

      Object(fjingling["q" /* getRecordUserList */])(this.page, this.search).then(function (response) {
        var data = response.data.data;
        if (data.data) {
          _this2.lists = data.data;
          _this2.total = data.total;
          _this2.page = parseInt(data.current_page);
          _this2.pagesize = parseInt(data.per_page);
          _this2.code_map = data.code_map;
          _this2.login_total = data.login_total || 0;
          _this2.pv_total = data.pv_total || 0;
        } else {
          _this2.lists = [];
          _this2.total = 0;
          _this2.page = 0;
        }
      }).catch(function (err) {});
    },
    addCode: function addCode() {
      this.$router.push({ name: "addCode" });
    },
    pushCode: function pushCode(index, row) {
      var _this3 = this;

      Object(fjingling["w" /* pushCode */])(row.id).then(function (response) {
        var data = response.data;
        if (data.status) {
          _this3.getRecordUserList();
        } else {
          _this3.$message({
            showClose: true,
            message: data.msg,
            type: "error"
          });
        }
      });
    },
    detail: function detail(userId) {
      this.$router.push({ name: "traceDetail", query: { id: userId, sys_type: this.search.sys_type, timeRange: stringify_default()(this.search.timeRange) } });
    },
    changeChartRight: function changeChartRight(role_id, id) {
      Object(fjingling["d" /* changeChartRight */])(role_id, id).then(function (response) {}).catch(function (err) {});
    },
    export: function _export() {
      var name = this.search.name,
          mobile = this.search.mobile,
          sys_type = this.search.sys_type,
          regTime = this.search.regTime,
          timeRange = this.search.timeRange;

      this.request({
        url: "/fjingling/exportCSV",
        method: "post",
        data: { name: name, mobile: mobile, timeRange: timeRange, regTime: regTime, sys_type: sys_type }
      }).then(function (response) {
        var data = response.data.data;
        if (response.data.status) {
          location.href = data;
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cc674be8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/PvManager.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"},attrs:{"id":"wrap-individual"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search}},[_c('el-form-item',{attrs:{"label":"系统名称"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择系统"},model:{value:(_vm.search.sys_type),callback:function ($$v) {_vm.$set(_vm.search, "sys_type", $$v)},expression:"search.sys_type"}},[_c('el-option',{attrs:{"label":"房鲸灵PC","value":"60"}},[_vm._v(" 房鲸灵PC")]),_vm._v(" "),_c('el-option',{attrs:{"label":"房鲸灵小程序","value":"31"}},[_vm._v(" 房鲸灵小程序")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"访问时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.search.timeRange),callback:function ($$v) {_vm.$set(_vm.search, "timeRange", $$v)},expression:"search.timeRange"}}),_vm._v(" "),_c('span',[_vm._v(" *默认获取用户本周访问记录 ")])],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户名"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"用户名"},model:{value:(_vm.search.name),callback:function ($$v) {_vm.$set(_vm.search, "name", $$v)},expression:"search.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户手机号"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"用户手机号"},model:{value:(_vm.search.mobile),callback:function ($$v) {_vm.$set(_vm.search, "mobile", $$v)},expression:"search.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"注册时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.search.regTime),callback:function ($$v) {_vm.$set(_vm.search, "regTime", $$v)},expression:"search.regTime"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getRecordUserList}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":this.export }},[_vm._v("导出")]),_vm._v(" "),_c('refresh')],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"user_id","label":"id","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"login_num","label":"登录次数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"count","label":"PV数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"300"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){_vm.detail(scope.row.user_id)}}},[_vm._v("查看用户轨迹")])]}}])})],1),_vm._v(" "),_c('div',{staticClass:"demo-form-inline",staticStyle:{"float":"left","margin-top":"10px"}},[_vm._v("登录数："),_c('el-tag',[_vm._v(_vm._s(_vm.login_total))]),_vm._v(" PV数："),_c('el-tag',[_vm._v(_vm._s(_vm.pv_total))])],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_PvManager = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/PvManager.vue
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
  PvManager,
  fjingling_PvManager,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_PvManager = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
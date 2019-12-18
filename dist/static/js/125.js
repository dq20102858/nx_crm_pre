webpackJsonp([125],{

/***/ "X2E0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/CheckAll/index.vue + 2 modules
var CheckAll = __webpack_require__("cQ2w");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/zufang/Notice.vue


var _methods;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Notice = ({
  name: 'notice',
  components: {
    CheckAll: CheckAll["a" /* default */]
  },
  data: function data() {
    return {
      lists: [],
      pagesize: 10,
      total: 1, //总页数
      page: 1,
      search: {},
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      multipleSelection: [],
      num: 0
    };
  },

  created: function created() {
    this.getNoticeList();
  },
  methods: (_methods = {
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getNoticeList();
    },
    getNoticeList: function getNoticeList(param) {
      var _this = this;

      if (param) {
        this.page = 1;
      }
      var data = {
        page: this.page,
        keyword: this.search.keyword,
        time_range: this.search.time_range,
        status: this.search.status,
        type: this.search.type
      };

      this.request({
        url: "/zufang/index",
        method: "get",
        params: data
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.lists = data.data;
          _this.total = data.total;
          _this.pagesize = data.per_page;
          _this.page = parseInt(data.current_page);
          _this.last_page = data.last_page;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    detail: function detail(index, row) {
      this.$router.push({ name: 'zfNoticeDetail', query: { id: row.id } });
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
      this.num = this.multipleSelection.length;
    },
    deleteAll: function deleteAll() {
      var _this2 = this;

      var arr = [];
      for (var i = 0; i < this.multipleSelection.length; i++) {
        arr[i] = this.multipleSelection[i].id;
      }
      if (arr.length == 0) {
        this.$message({
          message: "请至少选中一条数据",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          _this2.delrequest(arr.join(","));
        }).catch(function () {});
      }
    }
  }, defineProperty_default()(_methods, "detail", function detail(index, row) {
    //跳转到详情页
    this.$router.push({ name: 'zfNoticeDetail', query: { id: row.id } });
  }), defineProperty_default()(_methods, "delrequest", function delrequest(id) {
    var _this3 = this;

    var data = {
      id: id
    };
    this.request({
      url: "/zufang/deleteNotice",
      method: "get",
      params: data
    }).then(function (response) {
      if (response.data.status == 1) {
        _this3.$message({
          type: "success",
          message: "删除成功!"
        });
        _this3.num = 0;
        id = "" + id;
        _this3.multipleSelection = [];
        if (id.split(',').length == _this3.lists.length && _this3.page == _this3.last_page && _this3.page > 1) {
          _this3.page = _this3.page - 1;
        }
        _this3.getNoticeList();
      } else {
        _this3.$message({
          type: "error",
          message: response.data.msg
        });
      }
    }).catch(function (err) {
      console.log(err);
    });
  }), defineProperty_default()(_methods, "deleted", function deleted(index, row) {
    var _this4 = this;

    this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(function () {
      _this4.delrequest(row.id);
    }).catch(function () {});
  }), _methods)
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-20508503","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/zufang/Notice.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticClass:"router-link"},[_c('router-link',{attrs:{"to":{name:'AddZfNotice'}}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-form',{attrs:{"model":_vm.search,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/title"},model:{value:(_vm.search.keyword),callback:function ($$v) {_vm.$set(_vm.search, "keyword", $$v)},expression:"search.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("公告类型：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"公告类型","clearable":""},model:{value:(_vm.search.type),callback:function ($$v) {_vm.$set(_vm.search, "type", $$v)},expression:"search.type"}},[_c('el-option',{attrs:{"label":"系统","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"网站","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"客户","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"公司","value":"4"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"站内","value":"5"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"状态","clearable":""},model:{value:(_vm.search.status),callback:function ($$v) {_vm.$set(_vm.search, "status", $$v)},expression:"search.status"}},[_c('el-option',{attrs:{"label":"有效","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"无效","value":"0"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("发布时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.time_range),callback:function ($$v) {_vm.$set(_vm.search, "time_range", $$v)},expression:"search.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getNoticeList(_vm.search)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"userLists-tab",attrs:{"data":_vm.lists},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"标题","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type","label":"消息类型","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.type==1)?_c('span',[_vm._v("系统")]):(scope.row.type==2)?_c('span',[_vm._v("网站")]):(scope.row.type==3)?_c('span',[_vm._v("客户")]):(scope.row.type==4)?_c('span',[_vm._v("公司")]):(scope.row.type==5)?_c('span',[_vm._v("站内")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"类型","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("有效")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("无效")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"发布时间","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("详情")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleted(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('check-all',{directives:[{name:"show",rawName:"v-show",value:(_vm.lists.length>0),expression:"lists.length>0"}],attrs:{"table-name":"multipleTable","list":_vm.lists,"delete-all":_vm.deleteAll,"num":_vm.num}}),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var zufang_Notice = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/zufang/Notice.vue
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
  Notice,
  zufang_Notice,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_zufang_Notice = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
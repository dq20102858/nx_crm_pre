webpackJsonp([111],{

/***/ "rF3F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/Salers.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Salers = ({
  name: 'extension',
  data: function data() {
    return {
      lists: [],
      pagesize: 10,
      total: 1, //总页数
      page: 1,
      search: {},
      pickerOptions2: common["a" /* publicData */].pickerOptions2
    };
  },

  created: function created() {
    this.getList();
  },
  methods: {
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    removeOne: function removeOne(index, row) {
      var _this = this;

      var data = {
        id: row.id
      };
      this.request({
        url: "/fjingling/delSalers",
        method: "post",
        data: data
      }).then(function (response) {
        _this.getList();
      }).catch(function (err) {
        console.log(err);
      });
    },
    getList: function getList(param) {
      var _this2 = this;

      if (param) {
        this.page = 1;
      }
      var data = {
        page: this.page,
        keyword: this.search.keyword,
        timeRange: this.search.time_range
      };

      this.request({
        url: "/fjingling/getSalers",
        method: "get",
        params: data
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this2.lists = data.data;
          _this2.total = data.total;
          _this2.pagesize = parseInt(data.per_page);
          _this2.page = parseInt(data.current_page);
          _this2.last_page = data.last_page;
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e27aabe","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/Salers.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"关键字 "}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"120px"},attrs:{"placeholder":"会员名称 | 用户ID"},model:{value:(_vm.search.keyword),callback:function ($$v) {_vm.$set(_vm.search, "keyword", $$v)},expression:"search.keyword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"记录时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.time_range),callback:function ($$v) {_vm.$set(_vm.search, "time_range", $$v)},expression:"search.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getList(_vm.search)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"uid","label":"会员ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"会员名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"show_name","label":"对客姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"show_tell","label":"对客手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"300"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){_vm.removeOne(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_Salers = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/Salers.vue
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
  Salers,
  fjingling_Salers,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_Salers = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([133],{

/***/ "sjxO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/FollowRes.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FollowRes = ({
  name: 'followRes',
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
    this.getFollowLists();
  },
  methods: {
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getFollowLists();
    },
    getFollowLists: function getFollowLists() {
      var _this = this;

      var data = {
        page: this.page,
        timeRange: this.search.timeRange,
        username: this.search.username,
        mobile: this.search.mobile
      };

      this.request({
        url: "/data_center/getFollowLists",
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
    detail: function detail(userId) {
      this.$router.push({ name: "followDetail", query: { user_id: userId } });
    },
    export: function _export() {
      var timeRange = this.search.timeRange;

      this.request({
        url: "/data_center/exportCSV",
        method: "post",
        data: { timeRange: timeRange }
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0a1b822e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/FollowRes.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"用户名"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"用户名"},model:{value:(_vm.search.username),callback:function ($$v) {_vm.$set(_vm.search, "username", $$v)},expression:"search.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"用户手机号"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"手机号"},model:{value:(_vm.search.mobile),callback:function ($$v) {_vm.$set(_vm.search, "mobile", $$v)},expression:"search.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.timeRange),callback:function ($$v) {_vm.$set(_vm.search, "timeRange", $$v)},expression:"search.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getFollowLists}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":this.export }},[_vm._v("导出")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"num","label":"关注数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"days","label":"时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"300"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){_vm.detail(scope.row.id)}}},[_vm._v("详情")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var data_FollowRes = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/FollowRes.vue
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
  FollowRes,
  data_FollowRes,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_data_FollowRes = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([134],{

/***/ "F3Qi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/data/FollowDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FollowDetail = ({
  data: function data() {
    return {
      user_id: this.$route.query.user_id,
      userInfo: {},
      lists: [],
      data: {
        remark: "",
        user_id: this.$route.query.user_id
      },
      remark_lists: []
    };
  },

  created: function created() {
    this.getFollowDetail();
    this.getRemarkLists();
  },
  methods: {
    getFollowDetail: function getFollowDetail() {
      var _this = this;

      var data = {
        user_id: this.user_id
      };

      this.request({
        url: "/data_center/getFollowDetail",
        method: "get",
        params: data
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.userInfo = data.userInfo;
          _this.lists = data.lists;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getRemarkLists: function getRemarkLists() {
      var _this2 = this;

      var data = {
        user_id: this.user_id
      };

      this.request({
        url: "/data_center/getRemarkLists",
        method: "get",
        params: data
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this2.remark_lists = data;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit() {
      var _this3 = this;

      var data = this.data;

      this.request({
        url: "/data_center/addRemark",
        method: "post",
        data: data
      }).then(function (response) {
        var status = response.data.status;
        if (status) {
          _this3.$message({
            type: "success",
            message: "备注成功!"
          });
          _this3.getRemarkLists();
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-58c015c6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/data/FollowDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{ref:"data",staticClass:"demo-form-inline",attrs:{"model":_vm.data,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"用户名"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.userInfo.username)}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.userInfo.mobile)}})]),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit()}}},[_vm._v("提交")])],1)],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"关注时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"房源链接","width":"300"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{attrs:{"href":scope.row.url,"target":"_blank"}},[_vm._v("查看")])]}}])})],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',{staticStyle:{"width":"100%","border":"0.5px solid #cccccc"}}),_vm._v(" "),(_vm.remark_lists.length>0)?_c('el-table',{ref:"multipleTable",staticClass:"individual-tab",attrs:{"data":_vm.remark_lists}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var data_FollowDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/data/FollowDetail.vue
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
  FollowDetail,
  data_FollowDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_data_FollowDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([123],{

/***/ "Ai7B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/AddCode.vue
//
//
//
//
//
//
//


/* harmony default export */ var AddCode = ({
  data: function data() {
    return {
      data: {}
    };
  },

  created: function created() {},
  methods: {
    addCode: function addCode() {
      var _this = this;

      Object(fjingling["a" /* addCode */])(this.data).then(function (response) {
        var data = response.data;
        if (data.status) {
          _this.$message({
            showClose: true,
            message: data.msg,
            type: "success"
          });
        } else {
          _this.$message({
            showClose: true,
            message: data.msg,
            type: "error"
          });
        }
      }).catch(function (err) {
        _this.$message({
          showClose: true,
          message: "系统出错，请重试！",
          type: "error"
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19c48b8a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/AddCode.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{attrs:{"model":_vm.data,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("生成邀请码个数：")]),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"生成邀请码个数"},model:{value:(_vm.data.num),callback:function ($$v) {_vm.$set(_vm.data, "num", $$v)},expression:"data.num"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("套餐id：")]),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"套餐id,默认为6"},model:{value:(_vm.data.package_id),callback:function ($$v) {_vm.$set(_vm.data, "package_id", $$v)},expression:"data.package_id"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addCode}},[_vm._v("生成")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_AddCode = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/AddCode.vue
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
  AddCode,
  fjingling_AddCode,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_AddCode = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
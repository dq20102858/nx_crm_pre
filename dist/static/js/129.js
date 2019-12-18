webpackJsonp([129],{

/***/ "st8F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/zhizuEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var zhizuEdit = ({
  data: function data() {
    return {
      data: {},
      id: this.$route.params.id,
      processList: []
    };
  },

  created: function created() {
    this.getDetail();
  },
  methods: {
    getDetail: function getDetail() {
      var _this = this;

      this.request({
        url: '/direct_rent/edit',
        method: 'get',
        params: { id: this.id }
      }).then(function (response) {
        _this.data = response.data.data;
        _this.processList = response.data.data.remarkLog;
      }).catch(function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit(formName) {
      var _this2 = this;

      var data = {
        id: this.id,
        nick_name: this.data.nick_name,
        house_name: this.data.house_name,
        mobile: this.data.mobile,
        ordid: this.data.ordid,
        status: this.data.status,
        remark: this.data.remark,
        remark_content: this.data.remark_content
      };
      this.request({
        url: '/direct_rent/editDo',
        method: 'post',
        data: data
      }).then(function (response) {
        if (response.data.status) {
          _this2.$message({
            message: '编辑成功',
            type: 'success',
            duration: 3 * 1000
          });
          _this2.getDetail();
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-17d0dda4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/zhizuEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"您的称呼：","prop":"nick_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.nick_name),callback:function ($$v) {_vm.$set(_vm.data, "nick_name", $$v)},expression:"data.nick_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系电话：","prop":"mobile"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.mobile),callback:function ($$v) {_vm.$set(_vm.data, "mobile", $$v)},expression:"data.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业名称：","prop":"house_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.house_name),callback:function ($$v) {_vm.$set(_vm.data, "house_name", $$v)},expression:"data.house_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序：","prop":"ordid"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.ordid),callback:function ($$v) {_vm.$set(_vm.data, "ordid", $$v)},expression:"data.ordid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("待解决")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("已解决")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.remark_content),callback:function ($$v) {_vm.$set(_vm.data, "remark_content", $$v)},expression:"data.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.processList.length !== 0)?_c('el-table',{attrs:{"data":_vm.processList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_zhizuEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/zhizuEdit.vue
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
  zhizuEdit,
  houseData_zhizuEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_zhizuEdit = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
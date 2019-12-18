webpackJsonp([73],{

/***/ "0v/C":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\ninput {\n  width: 300px;\n}\n", ""]);

// exports


/***/ }),

/***/ "XLUi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0v/C");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("25331d8c", content, true);

/***/ }),

/***/ "t269":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/bargainEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bargainEdit = ({
  data: function data() {
    return {
      data: {},
      id: this.$route.params.id,
      logList: []
    };
  },

  created: function created() {
    this.getDetail();
  },
  methods: {
    getDetail: function getDetail() {
      var _this = this;

      var data = {
        id: this.id
      };
      this.request({
        url: "/bargain/edit",
        method: "get",
        params: data
      }).then(function (response) {
        response.data.data.legal = parseInt(response.data.data.legal);
        _this.data = response.data.data;
        _this.logList = response.data.data.remarkLog;
      }).catch(function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      var data = {
        id: this.id,
        status: this.data.status,
        mprice: this.data.mprice,
        relet_price: this.data.relet_price,
        remark_content: this.data.remark_content,
        house_name: this.data.house_name
      };
      this.request({
        url: "/bargain/editDo",
        method: "post",
        data: data
      }).then(function (response) {
        if (response.data.status == 1) {
          _this2.getDetail();

          _this2.$message({
            type: "success",
            message: "提交成功!"
          });
        } else {
          _this2.$message({
            type: "error",
            message: response.data.msg
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-48a1ca1a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/bargainEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"130px"}},[_c('el-form-item',{attrs:{"label":"房源id：","prop":"house_id"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.house_id),callback:function ($$v) {_vm.$set(_vm.data, "house_id", $$v)},expression:"data.house_id"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源地址：","prop":"house_name"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.data.house_name),callback:function ($$v) {_vm.$set(_vm.data, "house_name", $$v)},expression:"data.house_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号：","prop":"phone"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.phone),callback:function ($$v) {_vm.$set(_vm.data, "phone", $$v)},expression:"data.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"月租金：","prop":"mprice"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.data.mprice),callback:function ($$v) {_vm.$set(_vm.data, "mprice", $$v)},expression:"data.mprice"}},[_vm._v("元\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"转让费：","prop":"relet_price"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.data.relet_price),callback:function ($$v) {_vm.$set(_vm.data, "relet_price", $$v)},expression:"data.relet_price"}},[_vm._v("元\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1,"value":"1"}},[_vm._v("待处理")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2,"value":"2"}},[_vm._v("已处理")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.data.remark_content),callback:function ($$v) {_vm.$set(_vm.data, "remark_content", $$v)},expression:"data.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit()}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.logList.length>0)?_c('el-table',{ref:"multipleTable",staticClass:"individual-tab",attrs:{"data":_vm.logList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_bargainEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/bargainEdit.vue
function injectStyle (ssrContext) {
  __webpack_require__("XLUi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  bargainEdit,
  houseData_bargainEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_bargainEdit = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
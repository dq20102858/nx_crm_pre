webpackJsonp([68],{

/***/ "3cqM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\ninput {\n  width: 300px;\n}\n", ""]);

// exports


/***/ }),

/***/ "MtkX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/simulationEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var simulationEdit = ({
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
        url: "/simulation_shop/edit",
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
        content: this.data.content,
        remark_content: this.data.remark_content
      };
      this.request({
        url: "/simulation_shop/editDo",
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-51eb430c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/simulationEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"130px"}},[_c('el-form-item',{attrs:{"label":"名称：","prop":"name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系电话：","prop":"phone"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.phone),callback:function ($$v) {_vm.$set(_vm.data, "phone", $$v)},expression:"data.phone"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"开店意向：","prop":"content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"客户的开店意向"},model:{value:(_vm.data.content),callback:function ($$v) {_vm.$set(_vm.data, "content", $$v)},expression:"data.content"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1,"value":"1"}},[_vm._v("待处理")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2,"value":"2"}},[_vm._v("已处理")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.data.remark_content),callback:function ($$v) {_vm.$set(_vm.data, "remark_content", $$v)},expression:"data.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit()}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.logList.length>0)?_c('el-table',{ref:"multipleTable",staticClass:"individual-tab",attrs:{"data":_vm.logList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_simulationEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/simulationEdit.vue
function injectStyle (ssrContext) {
  __webpack_require__("Oqtd")
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
  simulationEdit,
  houseData_simulationEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_simulationEdit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Oqtd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3cqM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("598296dc", content, true);

/***/ })

});
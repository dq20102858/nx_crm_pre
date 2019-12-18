webpackJsonp([71],{

/***/ "9vae":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\ninput {\n  width: 300px;\n}\n", ""]);

// exports


/***/ }),

/***/ "S+Cm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/fabuEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var fabuEdit = ({
  data: function data() {
    return {
      data: {},
      id: this.$route.params.id,
      logList: []
    };
  },

  created: function created() {
    this.getFabuDetail();
  },
  methods: {
    getFabuDetail: function getFabuDetail() {
      var _this = this;

      var data = {
        id: this.id
      };
      this.request({
        url: "/issue_info/edit",
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
        legal: this.data.legal,
        house_type: this.data.house_type,
        status: this.data.status,
        rental_id: this.data.rental_id,
        remark: this.data.remark,
        remark_content: this.data.remark_content
      };
      this.request({
        url: "/issue_info/editDo",
        method: "post",
        data: data
      }).then(function (response) {
        if (response.data.status == 1) {
          _this2.getFabuDetail();

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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4eb22dd2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/fabuEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"130px"}},[_c('el-form-item',{attrs:{"label":"建筑名称：","prop":"build_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.build_name),callback:function ($$v) {_vm.$set(_vm.data, "build_name", $$v)},expression:"data.build_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属区域：","prop":"area_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.area_name),callback:function ($$v) {_vm.$set(_vm.data, "area_name", $$v)},expression:"data.area_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细地址：","prop":"address"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.address),callback:function ($$v) {_vm.$set(_vm.data, "address", $$v)},expression:"data.address"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"月租价（元）：","prop":"price"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.price),callback:function ($$v) {_vm.$set(_vm.data, "price", $$v)},expression:"data.price"}},[_vm._v("元\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼房类型：","prop":"house_type"}},[_c('el-radio-group',{model:{value:(_vm.data.house_type),callback:function ($$v) {_vm.$set(_vm.data, "house_type", $$v)},expression:"data.house_type"}},[_c('el-radio',{attrs:{"label":62,"value":"62"}},[_vm._v("普通住宅")]),_vm._v(" "),_c('el-radio',{attrs:{"label":61,"value":"61"}},[_vm._v("写字楼")]),_vm._v(" "),_c('el-radio',{attrs:{"label":60,"value":"60"}},[_vm._v("商铺")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"转让费（元）：","prop":"fee"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.fee),callback:function ($$v) {_vm.$set(_vm.data, "fee", $$v)},expression:"data.fee"}},[_vm._v("元\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否注册为公司：","prop":"legal"}},[_c('el-radio-group',{model:{value:(_vm.data.legal),callback:function ($$v) {_vm.$set(_vm.data, "legal", $$v)},expression:"data.legal"}},[_c('el-radio',{attrs:{"label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系人：","prop":"name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号：","prop":"mobile"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.mobile),callback:function ($$v) {_vm.$set(_vm.data, "mobile", $$v)},expression:"data.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1,"value":"1"}},[_vm._v("已处理")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0,"value":"0"}},[_vm._v("待处理")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"对应租房id：","prop":"rental_id"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.data.rental_id),callback:function ($$v) {_vm.$set(_vm.data, "rental_id", $$v)},expression:"data.rental_id"}},[_c('i',{staticClass:"el-icon-edit el-input__icon",attrs:{"slot":"suffix"},slot:"suffix"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求信息：","prop":"remark"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"请输入内容"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.data.remark_content),callback:function ($$v) {_vm.$set(_vm.data, "remark_content", $$v)},expression:"data.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit()}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.logList.length>0)?_c('el-table',{ref:"multipleTable",staticClass:"individual-tab",attrs:{"data":_vm.logList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_fabuEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/fabuEdit.vue
function injectStyle (ssrContext) {
  __webpack_require__("j5Al")
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
  fabuEdit,
  houseData_fabuEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_fabuEdit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "j5Al":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9vae");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("38d0c6d6", content, true);

/***/ })

});
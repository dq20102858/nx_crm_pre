webpackJsonp([32],{

/***/ "4VJQ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container, #tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "lz9D":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4VJQ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7ceb1007", content, true);

/***/ }),

/***/ "z7Y9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/AddNotice.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AddNotice = ({
  components: { Tinymce: Tinymce["a" /* default */] },
  data: function data() {
    return {
      data: {},
      types: [{
        id: 1,
        name: "系统"
      }, {
        id: 2,
        name: "网站"
      }, {
        id: 3,
        name: "客户"
      }, {
        id: 4,
        name: "公司"
      }, {
        id: 5,
        name: "站内"
      }],
      pickerOptions2: common["a" /* publicData */].pickerOptions2
    };
  },
  created: function created() {},


  methods: {
    onSubmit: function onSubmit(formName) {
      var _this = this;

      var data = {
        id: this.id,
        status: this.data.status,
        type: this.data.type,
        read: this.data.read,
        title: this.data.title,
        content: this.data.content,
        time_range: this.data.time_range,
        recom: this.data.recom
      };
      this.request({
        url: '/fjingling/addDo',
        method: 'post',
        data: data
      }).then(function (response) {
        if (response.data.status) {
          _this.$message({
            message: '新增成功',
            type: 'success',
            duration: 3 * 1000
          });
          _this.getDetail();
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d5e88ebc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/AddNotice.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin":"40px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"公告类型：","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.data.type),callback:function ($$v) {_vm.$set(_vm.data, "type", $$v)},expression:"data.type"}},_vm._l((this.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题：","prop":"title"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.title),callback:function ($$v) {_vm.$set(_vm.data, "title", $$v)},expression:"data.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公告：","prop":"content"}},[_c('div',{staticClass:"components-container",attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.data.content),callback:function ($$v) {_vm.$set(_vm.data, "content", $$v)},expression:"data.content"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("无效")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页推荐：","prop":"recom"}},[_c('el-radio-group',{model:{value:(_vm.data.recom),callback:function ($$v) {_vm.$set(_vm.data, "recom", $$v)},expression:"data.recom"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公告展示时间：","prop":"time"}},[_c('el-date-picker',{attrs:{"type":"datetimerange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.data.time_range),callback:function ($$v) {_vm.$set(_vm.data, "time_range", $$v)},expression:"data.time_range"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_AddNotice = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/AddNotice.vue
function injectStyle (ssrContext) {
  __webpack_require__("lz9D")
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
  AddNotice,
  fjingling_AddNotice,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_AddNotice = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([131],{

/***/ "fBDe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/kaidianEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var kaidianEdit = ({
  data: function data() {
    return {
      data: {},
      industry: '',
      industryList: [],
      id: this.$route.params.id,
      processList: []
    };
  },

  created: function created() {
    this.getIndustryList();
    this.getDetail();
  },
  methods: {
    getIndustryList: function getIndustryList() {
      var _this = this;

      this.request({
        url: '/open_shop/getIndustry',
        method: 'get',
        params: {}
      }).then(function (response) {
        _this.industryList = response.data.data;
      }).catch(function (err) {
        console.log(err);
      });
    },
    getDetail: function getDetail() {
      var _this2 = this;

      this.request({
        url: '/open_shop/getShopDetail',
        method: 'get',
        params: { id: this.id }
      }).then(function (response) {
        _this2.data = response.data.data;
        _this2.industry = _this2.data.industry;
        _this2.processList = response.data.data.remarkLog;
        _this2.data.industry = '' + _this2.data.industry;
      }).catch(function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit(formName) {
      var _this3 = this;

      var data = {
        id: this.id,
        industry: this.industry,
        investment: this.data.investment,
        contact: this.data.contact,
        contact_phone: this.data.contact_phone,
        ordid: this.data.ordid,
        remark: this.data.remark,
        status: this.data.status,
        remark_content: this.data.remark_content
      };
      this.request({
        url: '/open_shop/editDo',
        method: 'post',
        data: data
      }).then(function (response) {
        if (response.data.status) {
          _this3.$message({
            message: '编辑成功',
            type: 'success',
            duration: 3 * 1000
          });
          _this3.getDetail();
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-161d6ed4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/kaidianEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"行业类型：","prop":"industry"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.industry),callback:function ($$v) {_vm.industry=$$v},expression:"industry"}},_vm._l((_vm.industryList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"投资金额(万元)：","prop":"investment"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.investment),callback:function ($$v) {_vm.$set(_vm.data, "investment", $$v)},expression:"data.investment"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"称呼：","prop":"contact"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.contact),callback:function ($$v) {_vm.$set(_vm.data, "contact", $$v)},expression:"data.contact"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电话：","prop":"contact_phone"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","maxlength":"11"},model:{value:(_vm.data.contact_phone),callback:function ($$v) {_vm.$set(_vm.data, "contact_phone", $$v)},expression:"data.contact_phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序：","prop":"ordid"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.ordid),callback:function ($$v) {_vm.$set(_vm.data, "ordid", $$v)},expression:"data.ordid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注：","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("处理中")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("已结束")]),_vm._v(" "),_c('el-radio',{attrs:{"label":-1}},[_vm._v("无效")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.remark_content),callback:function ($$v) {_vm.$set(_vm.data, "remark_content", $$v)},expression:"data.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.processList.length !== 0)?_c('el-table',{attrs:{"data":_vm.processList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_kaidianEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/kaidianEdit.vue
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
  kaidianEdit,
  houseData_kaidianEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_kaidianEdit = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
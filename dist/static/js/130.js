webpackJsonp([130],{

/***/ "9j04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/kanfangEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var kanfangEdit = ({
  data: function data() {
    return {
      data: {},
      id: this.$route.params.id,
      processList: [],
      plan_date: ''
    };
  },

  created: function created() {
    this.getDetail();
  },
  methods: {
    formatDate: function formatDate(date) {
      this.plan_date = this.$options.filters.formatTime(this.data.plan_date.getTime() / 1000, 'date');
    },
    getDetail: function getDetail() {
      var _this = this;

      this.request({
        url: '/see_plan/getSeePlanDetail',
        method: 'get',
        params: { id: this.id }
      }).then(function (response) {
        _this.data = response.data.data;
        _this.processList = response.data.data.remarkLog;
        _this.plan_date = response.data.data.plan_date;
      }).catch(function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit(formName) {
      var _this2 = this;

      var data = {
        id: this.id,
        plan_date: this.plan_date,
        time_range: this.data.time_range,
        house_type: this.data.house_type,
        rid: this.data.rid,
        contact_name: this.data.contact_name,
        contact_phone: this.data.contact_phone,
        user_id: this.data.user_id,
        content: this.data.content,
        status: this.data.status,
        remark_content: this.data.remark_content
      };
      this.request({
        url: '/see_plan/editDo',
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-57d5f76d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/kanfangEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"看房日期：","prop":"title"}},[_c('el-date-picker',{staticStyle:{"width":"300px"},attrs:{"type":"date","placeholder":"选择日期"},on:{"change":_vm.formatDate},model:{value:(_vm.data.plan_date),callback:function ($$v) {_vm.$set(_vm.data, "plan_date", $$v)},expression:"data.plan_date"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"看房时段：","prop":"time_range"}},[_c('el-radio-group',{model:{value:(_vm.data.time_range),callback:function ($$v) {_vm.$set(_vm.data, "time_range", $$v)},expression:"data.time_range"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("全天")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("上午")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("下午")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v("晚上")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源类型：","prop":"house_type"}},[_c('el-radio-group',{model:{value:(_vm.data.house_type),callback:function ($$v) {_vm.$set(_vm.data, "house_type", $$v)},expression:"data.house_type"}},[_c('el-radio',{attrs:{"label":62}},[_vm._v("住宅")]),_vm._v(" "),_c('el-radio',{attrs:{"label":61}},[_vm._v("写字楼")]),_vm._v(" "),_c('el-radio',{attrs:{"label":60}},[_vm._v("商铺")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源ID：","prop":"rid"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.rid),callback:function ($$v) {_vm.$set(_vm.data, "rid", $$v)},expression:"data.rid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系人：","prop":"contact_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.contact_name),callback:function ($$v) {_vm.$set(_vm.data, "contact_name", $$v)},expression:"data.contact_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系电话：","prop":"contact_phone"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","maxlength":"11"},model:{value:(_vm.data.contact_phone),callback:function ($$v) {_vm.$set(_vm.data, "contact_phone", $$v)},expression:"data.contact_phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"会员ID：","prop":"user_id"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.user_id),callback:function ($$v) {_vm.$set(_vm.data, "user_id", $$v)},expression:"data.user_id"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"看房要求：","prop":"content"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.content),callback:function ($$v) {_vm.$set(_vm.data, "content", $$v)},expression:"data.content"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("待分配")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("正常（已分配）")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("已完成")]),_vm._v(" "),_c('el-radio',{attrs:{"label":-1}},[_vm._v("已取消")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.remark_content),callback:function ($$v) {_vm.$set(_vm.data, "remark_content", $$v)},expression:"data.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1),_vm._v(" "),(_vm.processList.length !== 0)?_c('el-table',{attrs:{"data":_vm.processList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_kanfangEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/kanfangEdit.vue
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
  kanfangEdit,
  houseData_kanfangEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_kanfangEdit = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
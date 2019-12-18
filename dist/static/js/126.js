webpackJsonp([126],{

/***/ "+Mwk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/zufang/ApplyDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ApplyDetail = ({
  data: function data() {
    return {
      data: {},
      dialogImageUrl1: "",
      dialogVisible1: false,
      id: this.$route.query.id
    };
  },

  created: function created() {
    this.applyDetail();
  },
  methods: {
    handlePictureCardPreview1: function handlePictureCardPreview1(url) {
      console.log(url);
      this.dialogImageUrl1 = url;
      this.dialogVisible1 = true;
    },
    applyDetail: function applyDetail() {
      var _this = this;

      var id = this.id;
      this.request({
        url: "/zufang/applyDetail",
        method: "get",
        params: { id: id }
      }).then(function (response) {
        var data = response.data.data;

        if (data) {
          _this.data = data;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit(formName) {
      var _this2 = this;

      var data = {
        id: this.data.id,
        status: this.data.status,
        remark: this.data.remark,
        company: this.data.company,
        shop: this.data.shop,
        shop_id: this.data.shop_id,
        company_id: this.data.company_id,
        user_id: this.data.user_id,
        type: this.data.type,
        qulifi_code: this.data.qulifi_code,
        qulification: this.data.qulification
      };
      if (this.data.status == 0 && (this.data.remark == null || this.data.remark == "")) {
        this.$message.error('请填写拒绝理由');
        return false;
      }
      this.request({
        url: '/zufang/applyEditDo',
        method: 'post',
        data: data
      }).then(function (response) {
        if (response.data.status) {
          _this2.$message({
            message: '编辑成功',
            type: 'success',
            duration: 3 * 1000
          });
          _this2.agentDetail();
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    goback: function goback() {
      this.$router.push({ name: 'agentDetail', query: { user_id: this.data.user_id } });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-00d4b68e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/zufang/ApplyDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"公司：","prop":"company"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.company),callback:function ($$v) {_vm.$set(_vm.data, "company", $$v)},expression:"data.company"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"门店","prop":"shop"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.shop),callback:function ($$v) {_vm.$set(_vm.data, "shop", $$v)},expression:"data.shop"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"type","label":"经纪人类型"}},[(_vm.data.type==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("独立经纪人")]):_c('el-tag',{attrs:{"type":"success"}},[_vm._v("公司经纪人")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":-1}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("拒绝")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"申请时间：","prop":"create_time"}},[_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(_vm.data.create_time)))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业代码："}},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.data.qulifi_code)+"\n\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证明图片："}},[(_vm.data.qulification!='')?_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},[_c('li',{staticClass:"el-upload-list__item is-success",staticStyle:{"cursor":"pointer"},on:{"click":function($event){_vm.handlePictureCardPreview1(_vm.data.qulification)}}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":_vm.data.qulification,"alt":""}})])])]):_vm._e(),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{attrs:{"type":"success"},on:{"click":_vm.goback}},[_vm._v("返回")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var zufang_ApplyDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/zufang/ApplyDetail.vue
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
  ApplyDetail,
  zufang_ApplyDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_zufang_ApplyDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
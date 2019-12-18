webpackJsonp([120],{

/***/ "C9bB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/AuthDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AuthDetail = ({
    data: function data() {
        return {
            data: {},
            id: this.$route.query.id,
            types: [{
                id: 0,
                name: "组织"
            }, {
                id: 1,
                name: "公司"
            }],
            mobile: this.$route.query.mobile
        };
    },

    created: function created() {
        this.changeDetail();
    },
    methods: {
        changeDetail: function changeDetail() {
            var _this = this;

            var id = this.id;
            this.request({
                url: '/fjingling/changeDetail',
                method: 'get',
                params: { id: id }
            }).then(function (response) {
                if (response.data.status) {
                    _this.data = response.data.data;
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        onSubmit: function onSubmit(formName) {
            var _this2 = this;

            var data = {
                id: this.id,
                status: this.data.status,
                msg: this.data.msg,
                mobile: this.mobile,
                user_id: this.data.user_id
            };
            if (this.data.status == 3 && (typeof this.data.msg == "undefined" || this.data.msg == "")) {
                this.$message.error('请输入未通过的原因');
                return false;
            }
            this.request({
                url: '/fjingling/editChangeDo',
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
                } else {
                    _this2.$message({
                        message: '编辑失败',
                        type: 'error'
                    });
                    _this2.getDetail();
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-472fe34c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/AuthDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"变更类型：","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择","disabled":true},model:{value:(_vm.data.type),callback:function ($$v) {_vm.$set(_vm.data, "type", $$v)},expression:"data.type"}},_vm._l((this.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属公司：","prop":"company_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.company_name),callback:function ($$v) {_vm.$set(_vm.data, "company_name", $$v)},expression:"data.company_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组织","prop":"org_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.org_name),callback:function ($$v) {_vm.$set(_vm.data, "org_name", $$v)},expression:"data.org_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证明：","prop":"img"}},[_c('img',{attrs:{"src":_vm.data.img,"width":"200px","height":"250px"}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"申请状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("申请中")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("审核通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v("审核未通过")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"申请备注：","prop":"remark","disabled":true}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客服备注：","prop":"msg","disabled":true}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.data.msg),callback:function ($$v) {_vm.$set(_vm.data, "msg", $$v)},expression:"data.msg"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_AuthDetail = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/AuthDetail.vue
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
  AuthDetail,
  fjingling_AuthDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_AuthDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
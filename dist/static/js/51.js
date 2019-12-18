webpackJsonp([51],{

/***/ "1A34":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("gkWI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("bfd32a46", content, true);

/***/ }),

/***/ "9pvN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/zufang/noticeDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var noticeDetail = ({
    components: { Tinymce: Tinymce["a" /* default */] },
    data: function data() {
        return {
            data: {},
            id: this.$route.query.id,
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
            users: []
        };
    },

    created: function created() {
        this.noticeDetail();
        this.getUserLists();
    },
    methods: {
        noticeDetail: function noticeDetail() {
            var _this = this;

            var id = this.id;
            this.request({
                url: "/zufang/edit",
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
                id: this.id,
                status: this.data.status,
                type: this.data.type,
                user_id: this.data.user_id,
                title: this.data.title,
                comment: this.data.comment
            };
            this.request({
                url: '/zufang/editDo',
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
        },
        getUserLists: function getUserLists() {
            var _this3 = this;

            this.request({
                url: '/zufang/getUserLists',
                method: 'get'
            }).then(function (response) {
                if (response.data) {
                    _this3.users = response.data.data;
                } else {
                    _this3.users = [];
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-78f8ab1e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/zufang/noticeDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"公告类型：","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.data.type),callback:function ($$v) {_vm.$set(_vm.data, "type", $$v)},expression:"data.type"}},_vm._l((this.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题：","prop":"title"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","maxlength":"45"},model:{value:(_vm.data.title),callback:function ($$v) {_vm.$set(_vm.data, "title", $$v)},expression:"data.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公告：","prop":"comment"}},[_c('div',{staticClass:"components-container",attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.data.comment),callback:function ($$v) {_vm.$set(_vm.data, "comment", $$v)},expression:"data.comment"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"消息通知人：","prop":"user_id"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.data.user_id),callback:function ($$v) {_vm.$set(_vm.data, "user_id", $$v)},expression:"data.user_id"}},[_c('el-option',{key:0,attrs:{"label":"无","value":0}}),_vm._v(" "),_vm._l((this.users),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.nickname,"value":item.id}})})],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("无效")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发布时间：","prop":"create_time"}},[_c('span',[_vm._v(_vm._s(_vm.data.create_time))])]),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var zufang_noticeDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/zufang/noticeDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("1A34")
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
  noticeDetail,
  zufang_noticeDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_zufang_noticeDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "gkWI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container, #tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ })

});
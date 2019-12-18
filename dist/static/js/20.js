webpackJsonp([20],{

/***/ "Oih+":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container, #tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "c7xy":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Oih+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("91b3f4dc", content, true);

/***/ }),

/***/ "kBXj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/zufang/AddNotice.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            data: {
                status: 1
            },
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
            users: [],
            rules: {
                type: [{ required: true, message: "请选择公告类型", trigger: "blur" }],
                title: [{ required: true, message: "请输入标题", trigger: "blur" }],
                comment: [{ required: true, message: "请输入公告", trigger: "blur" }],
                user_id: [{ required: true, message: "请选择消息通知人", trigger: "blur" }]
            },
            showUsers: false
        };
    },

    created: function created() {
        this.getUserLists();
    },
    methods: {
        chageNoticeType: function chageNoticeType() {
            if (this.data.type == 3) {
                this.showUsers = true;
            } else {
                this.showUsers = false;
            };
        },
        onSubmit: function onSubmit(formName) {
            var _this = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    var data = {
                        id: _this.id,
                        status: _this.data.status,
                        type: _this.data.type,
                        read: _this.data.read,
                        title: _this.data.title,
                        comment: _this.data.comment
                    };
                    if (_this.data.type == 3) data.user_id = _this.data.user_id;
                    _this.request({
                        url: '/zufang/addDo',
                        method: 'post',
                        data: data
                    }).then(function (response) {
                        if (response.data.status) {
                            _this.$message({
                                message: '新增成功',
                                type: 'success',
                                duration: 2 * 1000
                            });
                            setTimeout(function () {
                                window.history.go(-1);
                            }, 2000);
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            });
        },
        getUserLists: function getUserLists() {
            var _this2 = this;

            this.request({
                url: '/zufang/getUserLists',
                method: 'get'
            }).then(function (response) {
                if (response.data) {
                    _this2.users = response.data.data;
                } else {
                    _this2.users = [];
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f6a85696","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/zufang/AddNotice.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"80%","margin":"40px auto"}},[_c('el-form',{ref:"data",attrs:{"rules":_vm.rules,"model":_vm.data,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"公告类型：","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择"},on:{"change":_vm.chageNoticeType},model:{value:(_vm.data.type),callback:function ($$v) {_vm.$set(_vm.data, "type", $$v)},expression:"data.type"}},_vm._l((this.types),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题：","prop":"title"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","maxlength":"45"},model:{value:(_vm.data.title),callback:function ($$v) {_vm.$set(_vm.data, "title", $$v)},expression:"data.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"公告：","prop":"comment"}},[_c('div',{staticClass:"components-container",attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.data.comment),callback:function ($$v) {_vm.$set(_vm.data, "comment", $$v)},expression:"data.comment"}})],1)]),_vm._v(" "),(_vm.showUsers)?_c('el-form-item',{attrs:{"label":"消息通知人：","prop":"user_id"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","filterable":"","placeholder":"请选择"},model:{value:(_vm.data.user_id),callback:function ($$v) {_vm.$set(_vm.data, "user_id", $$v)},expression:"data.user_id"}},[_c('el-option',{attrs:{"label":"无","value":"0"}}),_vm._v(" "),_vm._l((this.users),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.real_name,"value":item.id}})})],2)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("无效")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var zufang_AddNotice = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/zufang/AddNotice.vue
function injectStyle (ssrContext) {
  __webpack_require__("c7xy")
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
  zufang_AddNotice,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_zufang_AddNotice = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([61],{

/***/ "+DCL":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("NEiP");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("ad165772", content, true);

/***/ }),

/***/ "NEiP":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.userForm {\n  margin: 20px;\n}\n.userForm .el-form-item__label {\n  width: 100px;\n}\n.userForm .submit-btn {\n  margin-left: 250px;\n}\n.userForm .name {\n  margin-right: 30px;\n}\n.userForm .el-input,\n.el-textarea {\n  width: 500px;\n}\n.userForm .el-textarea__inner {\n  height: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "gNQP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/users/addUsers.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var addUsers = ({
  data: function data() {
    return {
      userForm: {
        gender: 0,
        contact_phone: "",
        remark: "",
        name: ""
      },
      rules: {
        // name: [{ required: true, message: "请输入客人称呼", trigger: "blur" }],
        contact_phone: [{ required: true, message: "请输入客人联系方式", trigger: "blur" }, {
          pattern: /^[1][3,4,5,7,8][0-9]{9}|([0-9]{3,4}-)?[0-9]{7,8}$/,
          message: "请输入正确的联系方式！"
        }]
      }
    };
  },

  created: function created() {},
  methods: {
    submitForm: function submitForm(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          Object(users["a" /* addUsers */])(_this.userForm).then(function (response) {
            if (response.data.status) {
              _this.$router.push({ name: "userList" });
            }
          }).catch(function (err) {
            console.log(err);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64f852e8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/users/addUsers.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"userForm",staticClass:"userForm",attrs:{"model":_vm.userForm,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"联系方式","prop":"contact_phone"}},[_c('el-input',{attrs:{"placeholder":"请输入客人联系电话"},model:{value:(_vm.userForm.contact_phone),callback:function ($$v) {_vm.$set(_vm.userForm, "contact_phone", $$v)},expression:"userForm.contact_phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"称呼","prop":"name"}},[_c('el-input',{staticClass:"name",attrs:{"placeholder":"请输入客人称呼"},model:{value:(_vm.userForm.name),callback:function ($$v) {_vm.$set(_vm.userForm, "name", $$v)},expression:"userForm.name"}}),_vm._v(" "),_c('el-radio-group',{model:{value:(_vm.userForm.gender),callback:function ($$v) {_vm.$set(_vm.userForm, "gender", $$v)},expression:"userForm.gender"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("先生")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("女士")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.userForm.remark),callback:function ($$v) {_vm.$set(_vm.userForm, "remark", $$v)},expression:"userForm.remark"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('userForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('userForm')}}},[_vm._v("取消")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var users_addUsers = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/users/addUsers.vue
function injectStyle (ssrContext) {
  __webpack_require__("+DCL")
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
  addUsers,
  users_addUsers,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_users_addUsers = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
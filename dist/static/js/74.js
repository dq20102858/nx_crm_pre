webpackJsonp([74],{

/***/ "KoHy":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.el-form {\n  margin: 30px auto;\n}\n.name {\n  margin-right: 30px;\n}\n.el-input,\n.el-textarea {\n  width: 300px;\n}\n.el-textarea__inner {\n  height: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "O9iW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/users/UserDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var UserDetail = ({
  name: 'UserDetail',
  data: function data() {
    return {
      detail: {}, //详情页的数据
      id: this.$route.params.id,
      type: "individual",
      total: 0,
      pagesize: 0,
      page: 1,
      last_page: 1,
      searchForm: [],
      requireList: [],
      role_id: 0,
      processList: []
    };
  },

  created: function created() {
    this.getDetailInfo();
    // this.getRequireList();
  },
  methods: {
    getDetailInfo: function getDetailInfo() {
      var _this = this;

      Object(users["c" /* detailUser */])(this.id).then(function (response) {
        _this.detail = response.data.data;
        _this.processList = _this.detail.remarkLists;
      }).catch(function (err) {
        console.log(err);
      });
    },

    //提交表单
    onSubmit: function onSubmit(formName) {
      var _this2 = this;

      var data = {
        id: this.detail.id,
        name: this.detail.name,
        gender: this.detail.gender,
        status: this.detail.status,
        content: this.detail.remark_content
      };
      Object(users["e" /* editUserInfo */])(data).then(function (response) {
        if (response.data.status == 1) {
          _this2.$message({
            message: response.data.msg,
            type: "success"
          });
          _this2.getDetailInfo();
        } else {
          _this2.$message({
            message: response.data.msg,
            type: "warning"
          });
        }
        //   if (data.status) {
        //     this.$router.push({ name: "userList" });
        //   }
      }).catch(function (err) {
        console.log(err);
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleEdit: function handleEdit(index, row) {
      //跳转到详情页
      Object(auth["j" /* setId */])(row.rid);
      Object(auth["m" /* setType */])(this.type);
      this.$router.push({
        name: "requireDetail",
        query: { id: row.rid, type: "individual" }
      });
    },

    getRequireList: function getRequireList() {
      var _this3 = this;

      this.searchForm.user_id = Object(auth["e" /* getUserId */])();
      Object(requirement["A" /* getRequireList */])(this.type, this.page, this.searchForm).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this3.requireList = data.data;
          _this3.total = data.total;
          _this3.pagesize = data.per_page;
          _this3.page = Number(data.current_page);
          _this3.last_page = data.last_page;
          _this3.role_id = data.role_id;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getRequireList();
    },
    collectOrder: function collectOrder() {
      Object(auth["n" /* setUserId */])(this.detail.id);
      this.$router.push({
        name: "collect",
        query: { id: this.detail.id, from: "user" }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4478a2d1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/users/UserDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"detail",attrs:{"model":_vm.detail,"label-width":"80px"}},[_c('div',{attrs:{"id":"user_detail"}},[_c('el-form-item',{staticClass:"name",attrs:{"label":"称呼","prop":"name"}},[_c('el-input',{staticClass:"name",attrs:{"placeholder":"请输入客人称呼"},model:{value:(_vm.detail.name),callback:function ($$v) {_vm.$set(_vm.detail, "name", $$v)},expression:"detail.name"}}),_vm._v(" "),_c('el-radio-group',{model:{value:(_vm.detail.gender),callback:function ($$v) {_vm.$set(_vm.detail, "gender", $$v)},expression:"detail.gender"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("先生")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("女士")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系方式","prop":"contact_phone"}},[_c('el-input',{attrs:{"placeholder":"请输入客人联系电话","disabled":true},model:{value:(_vm.detail.contact_phone),callback:function ($$v) {_vm.$set(_vm.detail, "contact_phone", $$v)},expression:"detail.contact_phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.detail.status),callback:function ($$v) {_vm.$set(_vm.detail, "status", $$v)},expression:"detail.status"}},[_c('el-radio',{attrs:{"label":-1,"value":"-1"}},[_vm._v("待处理")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1,"value":"1"}},[_vm._v("有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0,"value":"0"}},[_vm._v("无效")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","disabled":true},model:{value:(_vm.detail.remark),callback:function ($$v) {_vm.$set(_vm.detail, "remark", $$v)},expression:"detail.remark"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注：","prop":"remark_content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.detail.remark_content),callback:function ($$v) {_vm.$set(_vm.detail, "remark_content", $$v)},expression:"detail.remark_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"type":"hidden"},model:{value:(_vm.detail.id),callback:function ($$v) {_vm.$set(_vm.detail, "id", $$v)},expression:"detail.id"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('detail')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('detail')}}},[_vm._v("取消")])],1)],1),_vm._v(" "),(_vm.processList.length !== 0)?_c('el-table',{attrs:{"data":_vm.processList}},[_c('el-table-column',{attrs:{"prop":"create_time","label":"操作时间","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"操作人","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"备注"}})],1):_vm._e(),_vm._v(" "),(_vm.requireList.length>0)?_c('div',{attrs:{"id":"require_log"}},[_c('span',{staticClass:"title"},[_vm._v("历史需求单")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.requireList}},[_c('el-table-column',{attrs:{"prop":"rid","label":"需求id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"house_name","label":"标题/简介"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"时间"}}),_vm._v(" "),(this.role_id == 8)?_c('el-table-column',{attrs:{"prop":"agent_name","label":"负责业务员"}}):_vm._e(),_vm._v(" "),_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleEdit(_vm.scope.$index, _vm.scope.row)}}},[_vm._v("详情")]),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row)}}},[_vm._v("详情")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var users_UserDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/users/UserDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("uN7T")
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
  UserDetail,
  users_UserDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_users_UserDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "uN7T":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("KoHy");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("22f35a5a", content, true);

/***/ })

});
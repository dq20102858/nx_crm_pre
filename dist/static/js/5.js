webpackJsonp([5],{

/***/ "SZrK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fchaob/product/spaces.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var spaces = ({
  name: 'spaces',
  data: function data() {
    return {
      spaces: [],
      page: 1,
      total: 0,
      dialogFormVisible: false,
      detail: {
        id: 0,
        name: ""
      },
      formLabelWidth: "80px"
    };
  },
  created: function created() {
    this.getSpacePages();
  },

  methods: {
    getSpacePages: function getSpacePages() {
      var _this = this;

      var data = {
        page: this.page
      };
      this.request({
        url: '/product/getSpacePages',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        if (data.data.data.length > 1) {
          _this.spaces = data.data.data;
        }
        _this.page = parseInt(data.data.current_page);
        _this.total = data.data.total;
      });
    },
    pageChange: function pageChange(value) {
      this.page = value;
      this.getSpacePages();
    },
    goDetail: function goDetail(id) {
      var _this2 = this;

      this.dialogFormVisible = true;
      var data = {
        id: id
      };
      this.request({
        url: '/product/getSpaceDetail',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        if (data.msg == "ok") {
          _this2.detail = data.data;
        } else {
          _this2.detail = {
            id: 0,
            name: ""
          };
        }
      });
    },
    submit: function submit() {
      var _this3 = this;

      this.dialogFormVisible = false;
      var data = this.detail;
      this.request({
        url: '/product/addOrEditSpace',
        method: 'post',
        data: data
      }).then(function (response) {
        var result = response.data;
        var msg = "";
        if (result.status == 1) {
          if (_this3.detail.id == 0 || _this3.detail.id == "" || typeof _this3.detail.id == "undefined") {
            msg = "新增成功";
          } else {
            msg = "更新成功";
          }
          _this3.$message({
            "type": "success",
            "message": msg
          });
          _this3.getSpacePages();
        } else {
          if (_this3.detail.id == 0 || _this3.detail.id == "" || typeof _this3.detail.id == "undefined") {
            msg = "新增失败";
          } else {
            msg = "更新失败";
          }
          _this3.$message({
            "type": "error",
            "message": msg
          });
        }
      });
    },
    delSpace: function delSpace(id) {
      var _this4 = this;

      var data = {
        id: id
      };
      this.request({
        url: '/product/deleteSpace',
        method: 'post',
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this4.getSpacePages();
        } else {
          _this4.$message({
            "type": "error",
            "message": "删除失败"
          });
        }
      });
    },
    reset: function reset() {
      this.dialogFormVisible = false;
      this.$refs["detail-form"].resetFields();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-95bc999a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fchaob/product/spaces.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"spaces"}},[_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"danger","icon":"el-icon-edit"},on:{"click":function($event){_vm.goDetail(0)}}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{ref:"multipleTable",attrs:{"data":_vm.spaces,"align":"center"}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"空间名称","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.goDetail(scope.row.id)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.delSpace(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[(_vm.spaces.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","current-page":this.page,"total":this.total},on:{"current-change":_vm.pageChange}}):_vm._e()],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"空间详情","visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"detail-form",attrs:{"model":_vm.detail}},[_c('el-form-item',{attrs:{"label":"空间名称","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.detail.name),callback:function ($$v) {_vm.$set(_vm.detail, "name", $$v)},expression:"detail.name"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.reset}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var product_spaces = (esExports);
// CONCATENATED MODULE: ./src/views/fchaob/product/spaces.vue
function injectStyle (ssrContext) {
  __webpack_require__("e+24")
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
  spaces,
  product_spaces,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fchaob_product_spaces = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "YbQE":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#spaces{\n    width: 100%;\n    padding: 20px;\n}\n#spaces .el-table{\n  width: 80%;\n  margin: 0 auto;\n}\n#spaces .el-table-column{\n  width: 33% !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "e+24":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("YbQE");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("b3bc4d34", content, true);

/***/ })

});
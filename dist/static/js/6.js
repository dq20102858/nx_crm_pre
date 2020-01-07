webpackJsonp([6],{

/***/ "bIzG":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eRuu");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("055d7d67", content, true);

/***/ }),

/***/ "eRuu":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#product-cate {\n   margin: 0 auto;\n   width: 50%;\n   padding: 50px;\n}\nul,li{\n   list-style: none;\n   margin: 0;\n   padding: 0;\n}\n#first-cate{\n   /* border: 1px solid #0A76A4; */\n}\n#first-cate .first-cate-li {\n   padding: 10px;\n   /* border-top: 1px solid #0A76A4; */\n}\n#first-cate:nth-child(1){\n   /* border-top: 0; */\n}\n.sub-cate{\n   margin-left: 65px;\n   margin-top: 20px;\n}\n.sub-cate li{\n   padding: 10px 0;\n}\n.operate {\n   width: 150px;\n   float: right\n}\n.cate-name{\n   color: #231f1f;\n}\n.sub-operate{\n   font-size: 14px;\n   color: #1943de;\n   cursor: pointer\n}\n", ""]);

// exports


/***/ }),

/***/ "kdRU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fchaob/product/productCate.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var productCate = ({
  name: 'productCate',
  data: function data() {
    return {
      data: [],
      title: "",
      dialogFormVisible: false,
      detail: {
        id: 0,
        name: "",
        pid: ""
      },
      formLabelWidth: "80px",
      faterLists: [],
      isAdd: false

    };
  },
  created: function created() {
    this.getProductCate4Trees();
    this.getFatherCate();
  },

  methods: {
    getProductCate4Trees: function getProductCate4Trees() {
      var _this = this;

      this.request({
        url: '/product/getProdctCateTree',
        method: 'get'
      }).then(function (response) {
        var data = response.data;
        if (data.data.length > 1) {
          _this.data = data.data;
        }
      });
    },
    addCate: function addCate(id) {
      this.isAdd = true;
      this.dialogFormVisible = true;
      this.detail.id = 0;
      this.detail.pid = id;
      this.getProductCateDetail();
    },
    editCate: function editCate(id) {
      this.isAdd = false;
      this.dialogFormVisible = true;
      this.detail.id = id;
      this.getProductCateDetail();
    },
    deleteCate: function deleteCate(id) {
      var _this2 = this;

      this.isAdd = false;
      var data = {
        id: id
      };
      this.request({
        url: '/product/delectCate',
        method: 'post',
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this2.$message({
            "type": "success",
            "message": "删除成功"
          });
          _this2.getProductCate4Trees();
        } else {
          _this2.$message({
            "type": "error",
            "message": "删除失败"
          });
        }
      });
    },
    submit: function submit() {
      var _this3 = this;

      var data = this.detail;
      this.request({
        url: '/product/addOrEditCate',
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
        _this3.getProductCate4Trees();
        _this3.isAdd = false;
        _this3.dialogFormVisible = false;
        _this3.detail = {};
      });
    },
    getProductCateDetail: function getProductCateDetail() {
      var _this4 = this;

      var data = {
        id: this.detail.id
      };
      this.request({
        url: '/product/getProductCateDetail',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        if (data.msg == "ok") {
          _this4.detail = data.data;
        }
      });
    },
    getFatherCate: function getFatherCate() {
      var _this5 = this;

      this.request({
        url: '/product/getFatherCate',
        method: 'get'
      }).then(function (response) {
        var data = response.data;
        if (data.data.length > 1) {
          _this5.faterLists = data.data;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-62717e30","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fchaob/product/productCate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"product-cate"}},[_c('ul',{attrs:{"id":"first-cate"}},_vm._l((_vm.data),function(item){return _c('li',{staticClass:"first-cate-li"},[_c('span',{staticClass:"cate-name"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('div',{staticClass:"operate"},[_c('span',{staticClass:"sub-operate",on:{"click":function($event){_vm.addCate(item.id)}}},[_vm._v("新增")]),_vm._v(" "),_c('span',{staticClass:"sub-operate",on:{"click":function($event){_vm.editCate(item.id)}}},[_vm._v("修改")]),_vm._v(" "),_c('span',{staticClass:"sub-operate",on:{"click":function($event){_vm.deleteCate(item.id)}}},[_vm._v("删除")])]),_vm._v(" "),(item.children)?_c('ul',{staticClass:"sub-cate"},_vm._l((item.children),function(one){return _c('li',[_c('span',{staticClass:"cate-name"},[_vm._v(_vm._s(one.name))]),_vm._v(" "),_c('div',{staticClass:"operate"},[_c('span',{staticClass:"sub-operate",on:{"click":function($event){_vm.editCate(one.id)}}},[_vm._v("修改")]),_vm._v(" "),_c('span',{staticClass:"sub-operate",on:{"click":function($event){_vm.deleteCate(one.id)}}},[_vm._v("删除")])])])})):_vm._e()])})),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.detail}},[_c('el-form-item',{attrs:{"label":"名称","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.detail.name),callback:function ($$v) {_vm.$set(_vm.detail, "name", $$v)},expression:"detail.name"}})],1),_vm._v(" "),(_vm.detail.pid || _vm.isAdd)?_c('el-form-item',{attrs:{"label":"分类","label-width":_vm.formLabelWidth}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.detail.pid),callback:function ($$v) {_vm.$set(_vm.detail, "pid", $$v)},expression:"detail.pid"}},_vm._l((_vm.faterLists),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var product_productCate = (esExports);
// CONCATENATED MODULE: ./src/views/fchaob/product/productCate.vue
function injectStyle (ssrContext) {
  __webpack_require__("bIzG")
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
  productCate,
  product_productCate,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fchaob_product_productCate = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
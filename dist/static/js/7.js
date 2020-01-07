webpackJsonp([7],{

/***/ "YMyt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fchaob/product/detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var detail = ({
  name: 'productDetail',
  data: function data() {
    return {
      id: this.$route.query.id,
      product: {
        imgUrl: "",
        id: this.$route.query.id
      },
      // host: "http://" + location.host,
      host: "http://boss.nething.com/",
      dialogVisible: false,
      dialogImageUrl: '',
      cateList: []
    };
  },
  created: function created() {
    this.detail();
    this.getProductCateLists();
  },

  methods: {
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var isLt2M = file.size / 1024 / 1024 < 2;
      var isJPG = false;
      switch (file.type) {
        case "image/png":
          isJPG = true;
          break;
        case "image/jpeg":
          isJPG = true;
          break;
        default:
          isJPG = false;
          break;
      }

      if (!isJPG) {
        this.$message.error("上传图片只能是 JPG/PNG 格式!");
      }

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess: function handleAvatarSuccess(res, file) {
      this.$nextTick(function () {
        this.product.imgUrl = res.data.url;
      });
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.imgUrl;
      this.dialogVisible = true;
    },
    detail: function detail() {
      var _this = this;

      if (this.id == 0) {
        return false;
      }
      var data = {
        id: this.id
      };
      this.request({
        url: '/product/detail',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this.product = data.data;
        }
      });
    },
    getProductCateLists: function getProductCateLists() {
      var _this2 = this;

      this.request({
        url: '/product/getProductCateLists',
        method: 'get'
      }).then(function (response) {
        var data = response.data;
        _this2.cateList = data.data;
      });
    },
    submitForm: function submitForm() {
      var _this3 = this;

      var data = this.product;
      this.request({
        url: '/product/addOrUpdateProd',
        method: 'post',
        data: data
      }).then(function (response) {
        var result = response.data;
        var msg = "";
        if (result.status == 1) {
          if (_this3.id == 0 || _this3.id == "" || typeof _this3.id == "undefined") {
            msg = "新增成功";
          } else {
            msg = "更新成功";
          }
          _this3.$message({
            "type": "success",
            "message": msg
          });
        } else {
          if (_this3.id == 0 || _this3.id == "" || typeof _this3.id == "undefined") {
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
    resetForm: function resetForm() {
      this.$refs["product_form"].resetFields();
      // this.product = {};
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-606f3f0e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fchaob/product/detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"product-detail"}},[_c('el-form',{ref:"product_form",attrs:{"model":_vm.product,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"产品名"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.name),callback:function ($$v) {_vm.$set(_vm.product, "name", $$v)},expression:"product.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"编码"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.code),callback:function ($$v) {_vm.$set(_vm.product, "code", $$v)},expression:"product.code"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"规格"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.spec),callback:function ($$v) {_vm.$set(_vm.product, "spec", $$v)},expression:"product.spec"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"型号"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.model),callback:function ($$v) {_vm.$set(_vm.product, "model", $$v)},expression:"product.model"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"分类"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.product.cateId),callback:function ($$v) {_vm.$set(_vm.product, "cateId", $$v)},expression:"product.cateId"}},_vm._l((_vm.cateList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SN"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.sn),callback:function ($$v) {_vm.$set(_vm.product, "sn", $$v)},expression:"product.sn"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"条形码"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.barcode),callback:function ($$v) {_vm.$set(_vm.product, "barcode", $$v)},expression:"product.barcode"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"市场指导价"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.price),callback:function ($$v) {_vm.$set(_vm.product, "price", $$v)},expression:"product.price"}}),_vm._v("元\n    ")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"成本价"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.costPrice),callback:function ($$v) {_vm.$set(_vm.product, "costPrice", $$v)},expression:"product.costPrice"}}),_vm._v("元\n    ")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"计量单位"}},[_c('el-input',{staticClass:"detail-prod-input",model:{value:(_vm.product.unit),callback:function ($$v) {_vm.$set(_vm.product, "unit", $$v)},expression:"product.unit"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":_vm.host+'/upload/uploadFile',"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload,"show-file-list":false}},[(_vm.product.imgUrl)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.product.imgUrl}}):_vm._e(),_vm._v(" "),(_vm.product.imgUrl)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.product)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.product.imgUrl)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.product.status),callback:function ($$v) {_vm.$set(_vm.product, "status", $$v)},expression:"product.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitForm}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":_vm.resetForm}},[_vm._v("取消")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var product_detail = (esExports);
// CONCATENATED MODULE: ./src/views/fchaob/product/detail.vue
function injectStyle (ssrContext) {
  __webpack_require__("d468")
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
  detail,
  product_detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fchaob_product_detail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "d468":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("qZf5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("ac4fb9a2", content, true);

/***/ }),

/***/ "qZf5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#product-detail {\n  width: 100%;\n  margin-top: 30px;\n}\n#product-detail .el-form{\n  width: 90%;\n  margin: 0 auto;\n}\n#product-detail .el-form .el-form-item{\n}\n#product-detail .detail-prod-input{\n  width: 300px;\n}\n.avatar-uploader .el-upload {\n\tborder: 1px dashed #d9d9d9;\n\tborder-radius: 6px;\n\tcursor: pointer;\n\tposition: relative;\n\toverflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n\tborder-color: #409eff;\n}\n.avatar-uploader-icon {\n\tfont-size: 28px;\n\tcolor: #8c939d;\n\twidth: 148px;\n\theight: 148px;\n\tline-height: 148px;\n\ttext-align: center;\n}\n.avatar {\n\twidth: 148px;\n\theight: 148px;\n\tdisplay: block;\n}\n", ""]);

// exports


/***/ })

});
webpackJsonp([9],{

/***/ "92fO":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#template{\n  width: 90%;\n  margin: 0 auto;\n}\n.avatar-uploader .el-upload {\n\tborder: 1px dashed #d9d9d9;\n\tborder-radius: 6px;\n\tcursor: pointer;\n\tposition: relative;\n\toverflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n\tborder-color: #409eff;\n}\n.avatar-uploader-icon {\n\tfont-size: 28px;\n\tcolor: #8c939d;\n\twidth: 148px;\n\theight: 148px;\n\tline-height: 148px;\n\ttext-align: center;\n}\n.avatar {\n\twidth: 148px;\n\theight: 148px;\n\tdisplay: block;\n}\n#template .main-wapper{\n   margin-top: 20px;\n}\n#template a {\n  text-decoration: underline !important;\n  color: #076ed8;\n}\n", ""]);

// exports


/***/ }),

/***/ "NuN7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("92fO");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c9d1fd6c", content, true);

/***/ }),

/***/ "O3LO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fchaob/product/designsys.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var designsys = ({
  name: 'designsys',
  data: function data() {
    return {
      activeIndex: "1",
      templateList: [],
      sysList: [],
      detail: {
        id: 0,
        img: "",
        spaces: [],
        file: []
      },
      title: "设计模板",
      dialogFormVisible: false,
      formLabelWidth: "80px",
      host: "http://boss.nething.com/",
      dialogVisible: false,
      dialogImageUrl: '',
      spaces: [],
      dialogImageUrl1: "",
      dialogVisible1: false,
      fileOriginList: []

    };
  },
  created: function created() {
    this.getTemplateLists();
  },

  methods: {
    handleSelect: function handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
    getTemplateLists: function getTemplateLists() {
      var _this = this;

      this.request({
        url: '/product/getTmpAndSysLists',
        method: 'get'
      }).then(function (response) {
        var data = response.data.data;
        _this.templateList = data.templates;
        _this.sysList = data.sysDesign;
      });
    },
    getDetail: function getDetail(id) {
      var _this2 = this;

      this.fileOriginList = [];
      var param = {
        id: id
      };
      this.request({
        url: '/product/getTemplateDetail',
        method: 'get',
        params: param
      }).then(function (response) {
        var data = response.data;
        if (data.msg == "ok") {
          _this2.detail = data.data;
          var originFileLists = [];
          if (_this2.detail.file.length > 0) {
            _this2.detail.file.forEach(function (item, key) {
              var one = {
                response: {
                  data: {
                    url: item
                  }
                },
                url: item,
                uid: key
              };
              originFileLists.push(one);
            });
            _this2.fileOriginList = originFileLists;
          }
        } else {
          _this2.detail = {
            id: 0,
            img: "",
            spaces: []
          };
        }
      });
      this.dialogFormVisible = true;
      if (this.activeIndex == 1) {
        this.title = "设计模板";
      } else {
        this.title = "系统方案";
      }
      this.getProductSpaces();
    },
    deleteTmp: function deleteTmp(id) {
      var _this3 = this;

      var data = {
        id: id
      };
      this.request({
        url: '/product/deteteTemplate',
        method: 'post',
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this3.getTemplateLists();
        }
      });
    },
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
        this.detail.img = res.data.url;
      });
    },
    handleFileSuccess: function handleFileSuccess(res, file) {
      this.$nextTick(function () {
        this.detail.file.push(res.data.url);
      });
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.img;
      this.dialogVisible = true;
    },
    handlePictureCardPreview2: function handlePictureCardPreview2(file) {
      this.dialogImageUrl1 = file.response.data.url;
      this.dialogVisible1 = true;
    },
    handleRemove: function handleRemove(file, fileList) {
      var detailFile = [];
      fileList.forEach(function (item) {
        detailFile.push(item.response.data.url);
      });
      this.detail.file = detailFile;
    },
    getProductSpaces: function getProductSpaces() {
      var _this4 = this;

      this.request({
        url: '/product/getProductSpaces',
        method: 'get'
      }).then(function (response) {
        var data = response.data.data;
        if (data.length > 1) {
          _this4.spaces = data;
        }
      });
    },
    submit: function submit() {
      var _this5 = this;

      var data = this.detail;
      if (this.activeIndex == "1") {
        data['type'] = 2;
      } else {
        data['type'] = 1;
      }
      this.request({
        url: '/product/addOrEditTmp',
        method: 'post',
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this5.dialogFormVisible = false;
          _this5.getTemplateLists();
        } else {
          var msg = "";
          if (_this5.detail.id == 0 || _this5.detail.id == "" || typeof _this5.detail.id == "undefined") {
            msg = "新增失败";
          } else {
            msg = "更新失败";
          }
          _this5.$message({
            "type": "success",
            "message": msg
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3a8879eb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fchaob/product/designsys.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"template"}},[_c('el-menu',{staticClass:"el-menu-demo",attrs:{"default-active":_vm.activeIndex,"mode":"horizontal"},on:{"select":_vm.handleSelect}},[_c('el-menu-item',{attrs:{"index":"1"}},[_vm._v("设计模板")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"2"}},[_vm._v("系统方案")])],1),_vm._v(" "),(_vm.activeIndex == 1)?_c('div',{staticClass:"main-wapper"},[_c('el-button',{attrs:{"size":"small","type":"danger","icon":"el-icon-edit"},on:{"click":function($event){_vm.getDetail(0)}}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.templateList}},[_c('el-table-column',{attrs:{"prop":"title","label":"名称","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"图片","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticStyle:{"width":"100px","height":"80px"},attrs:{"src":scope.row.img}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.getDetail(scope.row.id)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleteTmp(scope.row.id)}}},[_vm._v("删除")])]}}])})],1)],1):_c('div',{staticClass:"main-wapper"},[_c('el-button',{attrs:{"size":"small","type":"danger","icon":"el-icon-edit"},on:{"click":function($event){_vm.getDetail(0)}}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.sysList}},[_c('el-table-column',{attrs:{"prop":"title","label":"名称","align":"center"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"图片","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticStyle:{"width":"100px","height":"80px"},attrs:{"src":scope.row.img}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.getDetail(scope.row.id)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleteTmp(scope.row.id)}}},[_vm._v("删除")])]}}])})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.detail}},[_c('el-form-item',{attrs:{"label":"名称","label-width":_vm.formLabelWidth}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.detail.title),callback:function ($$v) {_vm.$set(_vm.detail, "title", $$v)},expression:"detail.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图片","label-width":_vm.formLabelWidth}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":_vm.host+'/upload/uploadFile',"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload,"show-file-list":false}},[(_vm.detail.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.detail.img}}):_vm._e(),_vm._v(" "),(_vm.detail.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.detail)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.detail.img)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),(_vm.activeIndex == 2)?_c('el-form-item',{attrs:{"label":"详情介绍","label-width":_vm.formLabelWidth}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"list-type":"picture-card","on-preview":_vm.handlePictureCardPreview2,"on-success":_vm.handleFileSuccess,"on-remove":_vm.handleRemove,"file-list":_vm.fileOriginList}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1):_c('el-form-item',{attrs:{"label":"方案详情","label-width":_vm.formLabelWidth}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"list-type":"picture-card","on-preview":_vm.handlePictureCardPreview2,"on-success":_vm.handleFileSuccess,"on-remove":_vm.handleRemove,"file-list":_vm.fileOriginList}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),(_vm.activeIndex == 1)?_c('el-form-item',{attrs:{"label":"空间","label-width":_vm.formLabelWidth}},[_c('el-checkbox-group',{attrs:{"size":"mini"},model:{value:(_vm.detail.spaces),callback:function ($$v) {_vm.$set(_vm.detail, "spaces", $$v)},expression:"detail.spaces"}},_vm._l((_vm.spaces),function(item){return _c('el-checkbox',{attrs:{"border":"","label":item.id}},[_vm._v(_vm._s(item.name))])}))],1):_vm._e(),_vm._v(" "),(_vm.activeIndex == 1 && _vm.detail.spaces.length>0 && _vm.detail.id>0)?_c('el-form-item',{attrs:{"label-width":_vm.formLabelWidth}},[_c('router-link',{attrs:{"to":{path:'setTmpDetail', query: {tmpId:_vm.detail.id,spaces:_vm.detail.spaces}}}},[_vm._v("设置模板初始数据")])],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var product_designsys = (esExports);
// CONCATENATED MODULE: ./src/views/fchaob/product/designsys.vue
function injectStyle (ssrContext) {
  __webpack_require__("NuN7")
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
  designsys,
  product_designsys,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fchaob_product_designsys = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([47],{

/***/ "LYC9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UCid");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f92a422e", content, true);

/***/ }),

/***/ "UCid":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "ssl7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/912cms/basicSet.js
var basicSet = __webpack_require__("AcY9");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/adv/Adsense.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Adsense = ({
  name: "Adsense",
  data: function data() {
    return {
      officeList: [], //列表页的数据
      showOk: false,
      total: 0,
      pagesize: 0,
      page: 1,
      timeRange: null,
      ruleForm: {
        name: null,
        type: "banner",
        setting: {
          paddleft: null,
          paddtop: null
        },
        width: 300,
        height: 300,
        description: null,
        status: 1
      },
      ruleForm1: {
        space_id: null,
        name: null,
        type: 'images',
        space_type: '',
        link_url: '',
        alt: '',
        file_url: '',
        height: '',
        width: '',
        start_time: '',
        end_time: '',
        status: 1,
        ord_id: '',
        space_type_name: '',
        space_name: ''
      },
      dialogImageUrl: "",
      dialogVisible: false,
      isEdit: true,
      loading: false,
      dialogAdminFormVisible: false,
      dialogAdminFormVisible1: false,
      titleAdd: '新增广告位',
      titleEdit: '编辑广告位',
      title: this.titleAdd,
      host: "http://" + location.host,
      // host: "http://boss.912zufang.com",
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      rules: {
        name: [{
          required: true,
          message: "请填写广告位标题",
          trigger: "blur"
        }]
      }
    };
  },

  created: function created() {
    this.getAdsenseList();
  },
  methods: {
    handlePictureCardPreview1: function handlePictureCardPreview1(file) {
      this.dialogImageUrl = file.file_url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess: function handleAvatarSuccess(res, file) {
      this.ruleForm1.file_url = res.data.show_url;
    },
    addAdvert: function addAdvert(data) {
      this.dialogAdminFormVisible1 = true;
      this.ruleForm1.space_type_name = data.type_name;
      this.ruleForm1.space_type = data.type;
      this.ruleForm1.space_name = data.name;
      this.ruleForm1.width = data.width;
      this.ruleForm1.height = data.height;
      this.ruleForm1.space_id = data.id;
    },
    changeTime: function changeTime() {
      this.ruleForm1.start_time = this.timeRange[0];
      this.ruleForm1.end_time = this.timeRange[1];
    },
    handleUpdate: function handleUpdate(row) {
      //跳转到详情页
      this.$router.push({
        name: "Advert",
        params: { id: row.id, type_name: row.type_name, type: row.type, name: row.name, width: row.width, height: row.height }
      });
    },
    addOneAdmin1: function addOneAdmin1(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          Object(basicSet["b" /* addAdvert */])(_this.ruleForm1).then(function (res) {
            if (res.data.status) {
              _this.$message({
                message: res.data.msg,
                type: 'success'
              });
            } else {
              _this.$message(res.data.msg);
            }
            _this.dialogAdminFormVisible1 = false;
            _this.getAdsenseList();
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    addOneAdmin: function addOneAdmin(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            Object(basicSet["A" /* updateAdsense */])(_this2.ruleForm).then(function (res) {
              if (res.data.status) {
                _this2.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this2.$message(res.data.msg);
              }
              _this2.dialogAdminFormVisible = false;
              _this2.getAdsenseList();
            });
          } else {
            Object(basicSet["a" /* addAdsense */])(_this2.ruleForm).then(function (res) {
              if (res.data.status) {
                _this2.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this2.$message(res.data.msg);
              }
              _this2.dialogAdminFormVisible = false;
              _this2.getAdsenseList();
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    openAdminDialog: function openAdminDialog() {
      this.ruleForm = {
        name: null,
        type: "banner",
        setting: {
          paddleft: null,
          paddtop: null
        },
        width: 300,
        height: 300,
        description: null,
        status: 1
      }, this.title = this.titleAdd;
      this.isEdit = false;
      this.dialogAdminFormVisible = true;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getAdsenseList();
    },
    edit: function edit(data) {
      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.isEdit = true;
      this.ruleForm = data;
    },
    getAdsenseList: function getAdsenseList(param) {
      var _this3 = this;

      if (param) {
        this.page = 1;
      }
      Object(basicSet["n" /* getAdsenseList */])(this.page).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this3.officeList = data.data;
          _this3.total = data.total;
          _this3.pagesize = Number(data.per_page);
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleDelete: function handleDelete(index, row) {
      var _this4 = this;

      this.$confirm("你确定要删除此广告位吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {

        Object(basicSet["h" /* delAdsense */])({
          id: String(row.id)
        }).then(function (response) {

          _this4.$message({
            type: response.data.status ? "success" : 'error',
            message: response.data.msg
          });

          _this4.getAdsenseList();
        }).catch(function (err) {
          console.log(err);
        });
      }).catch(function () {
        _this4.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c803786","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/adv/Adsense.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"广告位名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type_name","label":"广告位类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"广告位尺寸"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t\t\t\t\t"+_vm._s(scope.row.width)+"*"+_vm._s(scope.row.height)+"\n\t\t\t\t")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"items","label":"广告数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"description","label":"描述"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_name","label":"状态","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"350"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("广告列表")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){_vm.addAdvert(scope.row)}}},[_vm._v("添加广告")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.edit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"广告位标题","prop":"name"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"广告位标题"},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属分类","prop":"type"}},[_c('el-select',{model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-option',{attrs:{"label":"矩形横幅","value":"banner"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"对联广告","value":"couplet"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"图片列表","value":"imagelist"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"文字广告","value":"text"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"代码广告","value":"code"}})],1)],1),_vm._v(" "),(_vm.ruleForm.type=="couplet")?_c('el-form-item',{attrs:{"label":"广告位位置"}},[_vm._v("\n                        左边距:"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"左边距"},model:{value:(_vm.ruleForm.setting.paddleft),callback:function ($$v) {_vm.$set(_vm.ruleForm.setting, "paddleft", $$v)},expression:"ruleForm.setting.paddleft"}}),_vm._v("px\n                        上边距:"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"上边距"},model:{value:(_vm.ruleForm.setting.paddtop),callback:function ($$v) {_vm.$set(_vm.ruleForm.setting, "paddtop", $$v)},expression:"ruleForm.setting.paddtop"}}),_vm._v("px\n\t\t\t\t\t")],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.type=="banner"||_vm.ruleForm.type=="couplet"||_vm.ruleForm.type=="imagelist")?_c('el-form-item',{attrs:{"label":"广告位尺寸"}},[_vm._v("\n                        宽:"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"宽"},model:{value:(_vm.ruleForm.width),callback:function ($$v) {_vm.$set(_vm.ruleForm, "width", $$v)},expression:"ruleForm.width"}}),_vm._v("px\n                        高:"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"高"},model:{value:(_vm.ruleForm.height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "height", $$v)},expression:"ruleForm.height"}}),_vm._v("px\n\t\t\t\t\t")],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告位说明 "}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"广告位说明 "},model:{value:(_vm.ruleForm.description),callback:function ($$v) {_vm.$set(_vm.ruleForm, "description", $$v)},expression:"ruleForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("禁用")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新增广告","visible":_vm.dialogAdminFormVisible1,"modal-append-to-body":false},on:{"update:visible":function($event){_vm.dialogAdminFormVisible1=$event}}},[_c('el-form',{ref:"ruleForm1",attrs:{"model":_vm.ruleForm1,"rules":_vm.rules,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"广告位标题"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"disabled":"","placeholder":"广告位标题"},model:{value:(_vm.ruleForm1.space_name),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "space_name", $$v)},expression:"ruleForm1.space_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告位尺寸"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"disabled":"","placeholder":"宽"},model:{value:(_vm.ruleForm1.width),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "width", $$v)},expression:"ruleForm1.width"}}),_vm._v("\n                        *"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"disabled":"","placeholder":"高"},model:{value:(_vm.ruleForm1.height),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "height", $$v)},expression:"ruleForm1.height"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告位类型"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"disabled":"","placeholder":"广告位类型"},model:{value:(_vm.ruleForm1.space_type_name),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "space_type_name", $$v)},expression:"ruleForm1.space_type_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告标题","prop":"name"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"广告标题"},model:{value:(_vm.ruleForm1.name),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "name", $$v)},expression:"ruleForm1.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告类型","prop":"type"}},[_c('el-select',{model:{value:(_vm.ruleForm1.type),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "type", $$v)},expression:"ruleForm1.type"}},[_c('el-option',{attrs:{"label":"图片","value":"images"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"动画","value":"flash"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.changeTime},model:{value:(_vm.timeRange),callback:function ($$v) {_vm.timeRange=$$v},expression:"timeRange"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"链接地址"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"链接地址"},model:{value:(_vm.ruleForm1.link_url),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "link_url", $$v)},expression:"ruleForm1.link_url"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0,noWater:1},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess}},[(_vm.ruleForm1.file_url)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm1.file_url}}):_vm._e(),_vm._v(" "),(_vm.ruleForm1.file_url)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview1(_vm.ruleForm1)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm1.file_url)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()])],1),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible,"modal-append-to-body":false},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提示文字"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"提示文字"},model:{value:(_vm.ruleForm1.tip),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "tip", $$v)},expression:"ruleForm1.tip"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm1.status),callback:function ($$v) {_vm.$set(_vm.ruleForm1, "status", $$v)},expression:"ruleForm1.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("禁用")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible1=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin1('ruleForm1')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var adv_Adsense = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/adv/Adsense.vue
function injectStyle (ssrContext) {
  __webpack_require__("LYC9")
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
  Adsense,
  adv_Adsense,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var basicSet_adv_Adsense = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
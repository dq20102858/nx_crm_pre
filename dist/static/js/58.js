webpackJsonp([58],{

/***/ "/R4l":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "10yB":
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/adv/Advert.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Advert = ({
  name: "Advert",
  data: function data() {
    return {
      ruleForm1: {
        type_name: this.$route.params.type_name,
        type: this.$route.params.type,
        name: this.$route.params.name,
        width: this.$route.params.width,
        height: this.$route.params.height
      },
      id: this.$route.params.id,
      officeList: [], //列表页的数据
      showOk: false,
      total: 0,
      pagesize: 0,
      page: 1,
      timeRange: null,
      ruleForm: {
        id: null,
        space_id: this.$route.params.id,
        name: null,
        type: "images",
        space_type: null,
        space_name: null,
        link_url: null,
        alt: null,
        file_url: null,
        height: null,
        width: null,
        start_time: null,
        end_time: null,
        status: 1,
        ord_id: 1,
        space_type_name: null
      },
      dialogImageUrl: "",
      dialogVisible: false,
      isEdit: true,
      loading: false,
      dialogAdminFormVisible: false,
      titleAdd: '新增广告',
      titleEdit: '编辑广告',
      title: this.titleAdd,
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      host: "http://" + location.host,
      // host: "http://boss.912zufang.com",
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
    this.getAdvertList();
  },
  methods: {
    handlePictureCardPreview1: function handlePictureCardPreview1(file) {
      this.dialogImageUrl = file.file_url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess: function handleAvatarSuccess(res, file) {
      this.ruleForm.file_url = res.data.show_url;
    },
    edit: function edit(data) {
      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.isEdit = true;
      this.ruleForm.id = data.id;
      this.ruleForm.space_id = data.spaceid;
      this.ruleForm.name = data.name;
      this.ruleForm.type = data.type;
      this.ruleForm.space_type = data.space_type;
      this.ruleForm.space_name = data.space_name;
      this.ruleForm.link_url = data.setting.linkurl;
      this.ruleForm.alt = data.setting.alt;
      this.ruleForm.file_url = data.setting.fileurl;
      this.ruleForm.height = data.setting.height;
      this.ruleForm.width = data.setting.width;
      this.ruleForm.start_time = data.startdate;
      this.ruleForm.end_time = data.enddate;
      this.ruleForm.status = data.status;
      this.ruleForm.ord_id = data.ordid;
      this.ruleForm.space_type_name = this.ruleForm1.type_name;
      this.timeRange = [data.startdate, data.enddate];
    },
    openAdminDialog: function openAdminDialog() {
      this.ruleForm = {
        space_id: this.id,
        name: null,
        type: 'images',
        space_type: this.ruleForm1.type,
        space_name: this.ruleForm1.name,
        link_url: null,
        alt: null,
        file_url: null,
        height: this.ruleForm1.height,
        width: this.ruleForm1.width,
        start_time: null,
        end_time: null,
        status: 1,
        ord_id: 1,
        space_type_name: this.ruleForm1.type_name
      };
      this.timeRange = null;
      this.title = this.titleAdd;
      this.isEdit = false;
      this.dialogAdminFormVisible = true;
    },
    changeTime: function changeTime() {
      this.ruleForm.start_time = this.timeRange[0];
      this.ruleForm.end_time = this.timeRange[1];
    },
    addOneAdmin: function addOneAdmin(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this.isEdit) {
            Object(basicSet["B" /* updateAdvert */])(_this.ruleForm).then(function (res) {
              if (res.data.status) {
                _this.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this.$message(res.data.msg);
              }
              _this.dialogAdminFormVisible = false;
              _this.getAdvertList();
            });
          } else {
            Object(basicSet["b" /* addAdvert */])(_this.ruleForm).then(function (res) {
              if (res.data.status) {
                _this.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this.$message(res.data.msg);
              }
              _this.dialogAdminFormVisible = false;
              _this.getAdvertList();
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getAdvertList();
    },
    getAdvertList: function getAdvertList(param) {
      var _this2 = this;

      if (param) {
        this.page = 1;
      }
      Object(basicSet["o" /* getAdvertList */])(this.page, this.id).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this2.officeList = data.data;
          _this2.total = data.total;
          _this2.pagesize = Number(data.per_page);
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleDelete: function handleDelete(index, row) {
      var _this3 = this;

      this.$confirm("你确定要删除此广告位吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {

        Object(basicSet["i" /* delAdvert */])({
          id: String(row.id)
        }).then(function (response) {

          _this3.$message({
            type: response.data.status ? "success" : 'error',
            message: response.data.msg
          });

          _this3.getAdvertList();
        }).catch(function (err) {
          console.log(err);
        });
      }).catch(function () {
        _this3.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b3c3db8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/adv/Advert.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"广告名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type_name","label":"广告类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"space_name","label":"广告位"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"有效期"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t\t\t\t\t"+_vm._s(scope.row.startdate)+"至"+_vm._s(scope.row.enddate)+"\n\t\t\t\t")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"创建日期"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ordid","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_name","label":"状态","width":"50"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"350"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.edit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible,"modal-append-to-body":false},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"广告位标题"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"disabled":"","placeholder":"广告位标题"},model:{value:(_vm.ruleForm.space_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "space_name", $$v)},expression:"ruleForm.space_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告位尺寸"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"disabled":"","placeholder":"宽"},model:{value:(_vm.ruleForm.width),callback:function ($$v) {_vm.$set(_vm.ruleForm, "width", $$v)},expression:"ruleForm.width"}}),_vm._v("\n                        *"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"disabled":"","placeholder":"高"},model:{value:(_vm.ruleForm.height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "height", $$v)},expression:"ruleForm.height"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告位类型"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"disabled":"","placeholder":"广告位类型"},model:{value:(_vm.ruleForm.space_type_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "space_type_name", $$v)},expression:"ruleForm.space_type_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告标题","prop":"name"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"广告标题"},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告类型","prop":"type"}},[_c('el-select',{model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-option',{attrs:{"label":"图片","value":"images"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"动画","value":"flash"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.changeTime},model:{value:(_vm.timeRange),callback:function ($$v) {_vm.timeRange=$$v},expression:"timeRange"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"链接地址"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"链接地址"},model:{value:(_vm.ruleForm.link_url),callback:function ($$v) {_vm.$set(_vm.ruleForm, "link_url", $$v)},expression:"ruleForm.link_url"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"广告图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0,noWater:1},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess}},[(_vm.ruleForm.file_url)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.file_url}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.file_url)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview1(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm.file_url)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()])],1),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible,"modal-append-to-body":false},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提示文字"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"提示文字"},model:{value:(_vm.ruleForm.alt),callback:function ($$v) {_vm.$set(_vm.ruleForm, "alt", $$v)},expression:"ruleForm.alt"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"提示文字"},model:{value:(_vm.ruleForm.ord_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ord_id", $$v)},expression:"ruleForm.ord_id"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("禁用")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible1=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var adv_Advert = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/adv/Advert.vue
function injectStyle (ssrContext) {
  __webpack_require__("Gp+O")
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
  Advert,
  adv_Advert,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var basicSet_adv_Advert = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Gp+O":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/R4l");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c76a1b22", content, true);

/***/ })

});
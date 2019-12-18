webpackJsonp([56],{

/***/ "UZlt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "UwPa":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UZlt");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1e08935a", content, true);

/***/ }),

/***/ "b6lI":
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/NavigationSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var NavigationSet = ({
  name: "NavigationSet",
  data: function data() {
    return {
      officeList: [], //列表页的数据
      showOk: false,
      total: 0,
      pagesize: 0,
      page: 1,
      searchForm: {},
      ruleForm: {
        title: null,
        url: null,
        pos: 1,
        cate_id: 0,
        model: '',
        open_type: '_self',
        status: 1,
        seo_title: null,
        seo_keys: null,
        seo_desc: null
      },
      isEdit: true,
      loading: false,
      dialogAdminFormVisible: false,
      titleAdd: '新增联想搜索',
      titleEdit: '编辑',
      title: this.titleAdd,
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      rules: {
        title: [{
          required: true,
          message: "请填写导航名称",
          trigger: "blur"
        }]
      }
    };
  },

  created: function created() {
    this.getNavList();
  },
  methods: {
    addOneAdmin: function addOneAdmin(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this.isEdit) {
            Object(basicSet["D" /* updateNav */])(_this.ruleForm).then(function (res) {
              if (res.data.status) {
                _this.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this.$message(res.data.msg);
              }
              _this.dialogAdminFormVisible = false;
              _this.getNavList();
            });
          } else {
            Object(basicSet["c" /* addNav */])(_this.ruleForm).then(function (res) {
              if (res.data.status) {
                _this.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this.$message(res.data.msg);
              }
              _this.dialogAdminFormVisible = false;
              _this.getNavList();
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    openAdminDialog: function openAdminDialog() {
      this.title = this.titleAdd;
      this.isEdit = false;
      this.dialogAdminFormVisible = true;
      this.ruleForm = {
        title: null,
        url: null,
        pos: 1,
        cate_id: 0,
        model: '',
        open_type: '_self',
        status: 1,
        seo_title: null,
        seo_keys: null,
        seo_desc: null
      };
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getNavList();
    },
    edit: function edit(data) {
      var _this2 = this;

      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.isEdit = true;
      Object(basicSet["r" /* getNavDetail */])(data.id).then(function (res) {
        _this2.ruleForm = res.data.data;
        _this2.ruleForm.status = Number(res.data.data.status);
      });
    },
    getNavList: function getNavList(param) {
      var _this3 = this;

      if (param) {
        this.page = 1;
      }
      Object(basicSet["s" /* getNavList */])(this.page, this.searchForm).then(function (response) {
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

      this.$confirm("你确定要删除此搜索信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {

        Object(basicSet["j" /* delNav */])({
          id: String(row.id)
        }).then(function (response) {

          _this4.$message({
            type: response.data.status ? "success" : 'error',
            message: response.data.msg
          });

          _this4.getNavList();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-71caf0bb","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/NavigationSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"title","label":"导航名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"pos_txt","label":"位置"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"openType_txt","label":"打开方式"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"seo_title","label":"seo标题"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"seo_keys","label":"seo关键词"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ordid","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_txt","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.edit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"导航名称","prop":"title"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"导航名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"链接地址"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"链接地址 "},model:{value:(_vm.ruleForm.url),callback:function ($$v) {_vm.$set(_vm.ruleForm, "url", $$v)},expression:"ruleForm.url"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"导航位置"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.pos),callback:function ($$v) {_vm.$set(_vm.ruleForm, "pos", $$v)},expression:"ruleForm.pos"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("页头菜单")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":2}},[_vm._v("页脚菜单")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"打开方式"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.open_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "open_type", $$v)},expression:"ruleForm.open_type"}},[_c('el-radio',{attrs:{"border":"","label":"_self","value":"_self"}},[_vm._v("当前页面")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":"_blank ","value":"_blank"}},[_vm._v("新页面")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("禁用")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO标题"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO标题"},model:{value:(_vm.ruleForm.seo_title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_title", $$v)},expression:"ruleForm.seo_title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO关键词"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO关键词"},model:{value:(_vm.ruleForm.seo_keys),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_keys", $$v)},expression:"ruleForm.seo_keys"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO描述"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO描述"},model:{value:(_vm.ruleForm.seo_desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_desc", $$v)},expression:"ruleForm.seo_desc"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var basicSet_NavigationSet = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/NavigationSet.vue
function injectStyle (ssrContext) {
  __webpack_require__("UwPa")
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
  NavigationSet,
  basicSet_NavigationSet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_basicSet_NavigationSet = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
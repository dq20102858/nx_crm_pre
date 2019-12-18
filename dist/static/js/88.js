webpackJsonp([88],{

/***/ "e36A":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("hEu4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3483e959", content, true);

/***/ }),

/***/ "hEu4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "pggV":
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/SearchSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SearchSet = ({
  name: "SearchSet",
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
        res_num: null,
        url: null,
        type: 60,
        extend_kwd: null
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
          message: "请填写关键词",
          trigger: "blur"
        }]
      }
    };
  },

  created: function created() {
    this.getSearchList();
  },
  methods: {
    addOneAdmin: function addOneAdmin(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this.isEdit) {
            Object(basicSet["E" /* updateSearch */])(_this.ruleForm).then(function (res) {
              if (res.data.status) {
                _this.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this.$message(res.data.msg);
              }
              _this.dialogAdminFormVisible = false;
              _this.getSearchList();
            });
          } else {
            Object(basicSet["d" /* addSearch */])(_this.ruleForm).then(function (res) {
              if (res.data.status) {
                _this.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this.$message(res.data.msg);
              }
              _this.dialogAdminFormVisible = false;
              _this.getSearchList();
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
        title: null,
        res_num: null,
        url: null,
        type: 60,
        extend_kwd: null,
        status: 1
      };
      this.title = this.titleAdd;
      this.isEdit = false;
      this.dialogAdminFormVisible = true;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getSearchList();
    },
    edit: function edit(data) {
      var _this2 = this;

      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.isEdit = true;
      Object(basicSet["t" /* getSearchDetail */])(data.id).then(function (res) {
        _this2.ruleForm = res.data.data;
        _this2.ruleForm.status = Number(res.data.data.status);
      });
    },
    getSearchList: function getSearchList(param) {
      var _this3 = this;

      if (param) {
        this.page = 1;
      }
      Object(basicSet["u" /* getSearchList */])(this.page, this.searchForm).then(function (response) {
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

        Object(basicSet["k" /* delSearch */])({
          id: String(row.id)
        }).then(function (response) {

          _this4.$message({
            type: response.data.status ? "success" : 'error',
            message: response.data.msg
          });

          _this4.getSearchList();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1f4a3c94","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/SearchSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"失效","value":0}},[_vm._v(" 失效")]),_vm._v(" "),_c('el-option',{attrs:{"label":"正常","value":1}},[_vm._v(" 正常")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getSearchList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"关键词"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title_py","label":"关键词全拼"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title_f_py","label":"关键词首字符全拼"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"num","label":"搜索次数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"res_num","label":"关联数量"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"type_txt","label":"类型分组"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"extend_kwd","label":"扩展关键词"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"发布时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_txt","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.edit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"关键词","prop":"title"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"关键词"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"关联数量"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"关联数量"},model:{value:(_vm.ruleForm.res_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "res_num", $$v)},expression:"ruleForm.res_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"关联URL"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"关联URL"},model:{value:(_vm.ruleForm.url),callback:function ($$v) {_vm.$set(_vm.ruleForm, "url", $$v)},expression:"ruleForm.url"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型分组"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-radio',{attrs:{"border":"","label":60,"value":60}},[_vm._v("商铺")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":61,"value":61}},[_vm._v("写字楼")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":62,"value":62}},[_vm._v("住宅")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"扩展关键词"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"type":"textarea","placeholder":"扩展关键词"},model:{value:(_vm.ruleForm.extend_kwd),callback:function ($$v) {_vm.$set(_vm.ruleForm, "extend_kwd", $$v)},expression:"ruleForm.extend_kwd"}})],1),_vm._v(" "),(_vm.isEdit)?_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("正常")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("失效")])],1)],1):_vm._e(),_vm._v(" "),(_vm.isEdit)?_c('el-form-item',{attrs:{"label":"客服备注"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"type":"textarea","placeholder":"客服备注"},model:{value:(_vm.ruleForm.remark_content),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remark_content", $$v)},expression:"ruleForm.remark_content"}})],1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var basicSet_SearchSet = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/SearchSet.vue
function injectStyle (ssrContext) {
  __webpack_require__("e36A")
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
  SearchSet,
  basicSet_SearchSet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_basicSet_SearchSet = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
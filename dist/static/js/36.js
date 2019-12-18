webpackJsonp([36],{

/***/ "IfYL":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.custom-tree-node {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n.title {\n  padding: 10px;\n  margin: 0 30px;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  margin-top: 20px;\n  cursor: pointer;\n}\n.right {\n  float: right;\n}\n.list {\n  margin: 0 30px;\n  padding: 10px 10px 10px 30px;\n  cursor: pointer;\n}\n.list:nth-child(2n) {\n  background: #f6f6f6;\n}\n.list:nth-child(2n+1) {\n  background: #fff;\n}\n.list:hover {\n  background: #f0f0f0;\n}\n.el-icon--down {\n  margin-left: 5px;\n}\n.title:hover .el-icon-rank {\n  display: inline;\n}\n", ""]);

// exports


/***/ }),

/***/ "Y/wc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/api/912cms/basicSet.js
var basicSet = __webpack_require__("AcY9");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/HomeLable.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var id = 1000;





/* harmony default export */ var HomeLable = ({
  name: 'HomeLable',
  data: function data() {
    var officeList = [];
    return {
      searchForm: {
        id: null,
        pid: null,
        name: null,
        alias: null,
        status: 1,
        seo_title: null,
        seo_keys: null,
        seo_desc: null
      },
      dialogAdminFormVisible: false,
      areas: null,
      loading: false,
      officeList: JSON.parse(stringify_default()(officeList)),
      catelist2: [],
      catelist1: [],
      cateId1: null,
      cateId2: null,
      titleAdd: '新增类别',
      titleEdit: '编辑类别',
      title: this.titleAdd,
      isEdit: true,
      itemIndex: null,
      rules: {
        name: [{
          required: true,
          message: "请填写类别名称",
          trigger: "blur"
        }],
        status: [{
          required: true,
          message: "请选择状态",
          trigger: "blur"
        }]
      }
    };
  },

  created: function created() {
    this.getShortCateList();
  },
  methods: {
    datadragEnd: function datadragEnd(evt) {
      console.log('拖动前的索引 :' + evt.oldIndex);
      console.log('拖动后的索引 :' + evt.newIndex);
      console.log(this.officeList);
    },
    changeItemIndex: function changeItemIndex(index) {
      if (this.itemIndex == index) {
        this.itemIndex = null;
      } else {
        this.itemIndex = index;
      }
    },
    changecate1: function changecate1(e) {
      var _this = this;

      Object(basicSet["x" /* getSubCate */])(this.cateId1).then(function (res) {
        _this.catelist2 = res.data.data;
      });
      this.cateId2 = '';
    },
    openAdminDialog: function openAdminDialog(data) {
      this.title = this.titleAdd;
      this.isEdit = false;
      this.dialogAdminFormVisible = true;
      this.searchForm = {
        id: null,
        pid: null,
        name: null,
        alias: null,
        status: 1,
        seo_title: null,
        seo_keys: null,
        seo_desc: null
      };
      if (data) {
        this.searchForm.pid = data.id;
      }
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addOneAdmin: function addOneAdmin(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            Object(basicSet["H" /* updateshortCate */])(_this2.searchForm).then(function (res) {
              if (res.data.status) {
                _this2.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this2.$message(res.data.msg);
              }
              _this2.dialogAdminFormVisible = false;
              _this2.getShortCateList();
            });
          } else {
            Object(basicSet["e" /* addshortCate */])(_this2.searchForm).then(function (res) {
              if (res.data.status) {
                _this2.$message({
                  message: res.data.msg,
                  type: 'success'
                });
              } else {
                _this2.$message(res.data.msg);
              }
              _this2.dialogAdminFormVisible = false;
              _this2.getShortCateList();
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    edit: function edit(data) {
      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.isEdit = true;
      this.searchForm = data;
      // getshortCateDetail(data.id).then(res=>{
      //     this.searchForm=res.data.data
      //     this.searchForm.status=Number(res.data.data.status)
      //     if(res.data.data.spid.indexOf('|')>-1){
      //         this.cateId1=Number(res.data.data.spid.split('|')[0])
      //         getSubCate(this.cateId1).then(res=>{
      //             this.catelist2=res.data.data
      //         });
      //         if(res.data.data.spid.split('|')[1]){
      //             this.cateId2=Number(res.data.data.spid.split('|')[1])
      //         }
      //     }else{
      //         this.cateId1=null
      //         this.cateId2=null
      //     }
      // })
    },
    getShortCateList: function getShortCateList() {
      var _this3 = this;

      Object(basicSet["w" /* getShortCateList */])().then(function (response) {
        var data = response.data.data;
        if (data) {
          _this3.officeList = data;
          _this3.catelist1 = data;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    remove: function remove(data) {
      var _this4 = this;

      this.$confirm("你确定要删除此条首页短标签吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        _this4.$message({
          type: "success",
          message: "删除成功!",
          onClose: Object(basicSet["m" /* delshortCate */])({
            id: data.id
          }).then(function (response) {
            _this4.getShortCateList();
          }).catch(function (err) {
            console.log(err);
          })
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ba87211a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/HomeLable.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-tree-container"},[_c('div',{staticStyle:{"margin":"20px 0px 0px 10px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增类别")]),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"searchForm",attrs:{"model":_vm.searchForm,"rules":_vm.rules,"label-width":"20%"}},[((_vm.isEdit && _vm.searchForm.pid)||!_vm.isEdit)?_c('el-form-item',{attrs:{"label":"请选择上级"}},[_c('el-select',{staticStyle:{"width":"40%"},attrs:{"clearable":""},model:{value:(_vm.searchForm.pid),callback:function ($$v) {_vm.$set(_vm.searchForm, "pid", $$v)},expression:"searchForm.pid"}},_vm._l((_vm.catelist1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"分类名称","prop":"name"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"请填写分类名称"},model:{value:(_vm.searchForm.name),callback:function ($$v) {_vm.$set(_vm.searchForm, "name", $$v)},expression:"searchForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"栏目别名"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"40%"},attrs:{"placeholder":"栏目别名"},model:{value:(_vm.searchForm.alias),callback:function ($$v) {_vm.$set(_vm.searchForm, "alias", $$v)},expression:"searchForm.alias"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("发布")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":2}},[_vm._v("待审")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO标题"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO标题"},model:{value:(_vm.searchForm.seo_title),callback:function ($$v) {_vm.$set(_vm.searchForm, "seo_title", $$v)},expression:"searchForm.seo_title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO关键词"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO关键词"},model:{value:(_vm.searchForm.seo_keys),callback:function ($$v) {_vm.$set(_vm.searchForm, "seo_keys", $$v)},expression:"searchForm.seo_keys"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO描述"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO描述"},model:{value:(_vm.searchForm.seo_desc),callback:function ($$v) {_vm.$set(_vm.searchForm, "seo_desc", $$v)},expression:"searchForm.seo_desc"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('searchForm')}}},[_vm._v("确 定")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"block"},_vm._l((_vm.officeList),function(list,index){return _c('div',{key:list.id},[_c('div',{staticClass:"title",on:{"click":function($event){_vm.changeItemIndex(index)}}},[_c('el-button',{attrs:{"size":"mini","type":"text"}},[_vm._v(_vm._s(list.name)),(_vm.itemIndex==index&&list.children)?_c('i',{staticClass:"el-icon-arrow-down el-icon--down"}):_vm._e(),(_vm.itemIndex!=index&&list.children)?_c('i',{staticClass:"el-icon-arrow-right el-icon--right"}):_vm._e()]),_vm._v(" "),_c('el-button',{staticClass:"right",attrs:{"size":"mini","type":"danger"},on:{"click":function($event){$event.stopPropagation();(function () { return _vm.remove(list); })($event)}}},[_vm._v("删除本类别")]),_vm._v(" "),_c('el-button',{staticClass:"right",attrs:{"size":"mini","type":"primary"},on:{"click":function($event){$event.stopPropagation();(function () { return _vm.edit(list); })($event)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{staticClass:"right",attrs:{"size":"mini","type":"primary"},on:{"click":function($event){$event.stopPropagation();(function () { return _vm.openAdminDialog(list); })($event)}}},[_vm._v("新增下一级")])],1),_vm._v(" "),(_vm.itemIndex==index)?_c('div',_vm._l((list.children),function(item){return _c('div',{key:item.id,staticClass:"list"},[_c('el-button',{attrs:{"size":"mini","type":"text"}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('el-button',{staticClass:"right",attrs:{"size":"mini","type":"danger","right":""},on:{"click":function () { return _vm.remove(item); }}},[_vm._v("删除本类别")]),_vm._v(" "),_c('el-button',{staticClass:"right",attrs:{"size":"mini","type":"primary","right":""},on:{"click":function () { return _vm.edit(item); }}},[_vm._v("编辑")])],1)})):_vm._e()])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var basicSet_HomeLable = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/HomeLable.vue
function injectStyle (ssrContext) {
  __webpack_require__("u/k9")
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
  HomeLable,
  basicSet_HomeLable,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_basicSet_HomeLable = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "u/k9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("IfYL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("35a0e468", content, true);

/***/ })

});
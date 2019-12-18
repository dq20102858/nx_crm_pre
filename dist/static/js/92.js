webpackJsonp([92],{

/***/ "H07g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/CheckAll/index.vue + 2 modules
var CheckAll = __webpack_require__("cQ2w");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/brandWendaList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var brandWendaList = ({
  name: 'brandWenda',
  components: {
    CheckAll: CheckAll["a" /* default */],
    Refresh: Refresh["a" /* default */]
  },
  data: function data() {
    return {
      lists: [],
      total: 0,
      pagesize: 0,
      currentPage: 0,
      page: 1,
      last_page: 1,
      multipleSelection: "",
      searchForm: {},
      num: 0,
      pickerOptions2: common["a" /* publicData */].pickerOptions2
    };
  },

  created: function created() {
    this.getList();
  },
  methods: {
    getList: function getList(type) {
      var _this = this;

      if (type == 'search') this.page = 1;
      var data = {
        page: this.page,
        status: this.searchForm.status,
        keyword: this.searchForm.keyword,
        time_range: this.searchForm.time_range
      };
      this.request({
        url: "/brand/askLists",
        method: "get",
        params: data
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.lists = data.data;
          _this.total = data.total;
          _this.pagesize = data.per_page;
          _this.currentPage = Number(data.current_page);
          _this.last_page = data.last_page;
        } else {
          _this.lists = [];
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
      this.num = this.multipleSelection.length;
    },
    deleteAll: function deleteAll() {
      var _this2 = this;

      var arr = [];
      for (var i = 0; i < this.multipleSelection.length; i++) {
        arr[i] = this.multipleSelection[i].id;
      }
      if (arr.length == 0) {
        this.$message({
          message: "请至少选中一条数据",
          type: "warning"
        });
      } else {
        this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function () {
          _this2.delrequest(arr.join(","));
        }).catch(function () {});
      }
    },
    detail: function detail(index, row) {
      //跳转到详情页
      this.$router.push({ name: "brandWendaEdit", params: { id: row.id } });
    },
    delrequest: function delrequest(id) {
      var _this3 = this;

      var data = {
        id: id
      };
      this.request({
        url: "/brand/delete",
        method: "get",
        params: data
      }).then(function (response) {
        if (response.data.status == 1) {
          _this3.$message({
            type: "success",
            message: "删除成功!"
          });
          _this3.num = 0;
          id = "" + id;
          _this3.multipleSelection = [];
          if (id.split(',').length == _this3.lists.length && _this3.page == _this3.last_page && _this3.page > 1) {
            _this3.page = _this3.page - 1;
          }
          _this3.getList();
        } else {
          _this3.$message({
            type: "error",
            message: response.data.msg
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    deleted: function deleted(index, row) {
      var _this4 = this;

      this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        _this4.delrequest(row.id);
      }).catch(function () {});
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-15743911","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/brandWendaList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.searchForm,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/所属品牌/内容"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"所有","value":""}}),_vm._v(" "),_c('el-option',{attrs:{"label":"通过","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"待审","value":"0"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("发布时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getList('search')}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"userLists-tab",attrs:{"data":_vm.lists},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"brand_id","label":"所属品牌","show-overflow-tooltip":true}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"内容","show-overflow-tooltip":true}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"添加时间","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态","width":"250"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.answer==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("已回答")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待回答")]),_vm._v(" "),(scope.row.option==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("已解决")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待解决")]),_vm._v(" "),(scope.row.status==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("通过")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待审")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"230"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleted(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('check-all',{directives:[{name:"show",rawName:"v-show",value:(_vm.lists.length>0),expression:"lists.length>0"}],attrs:{"table-name":"multipleTable","list":_vm.lists,"delete-all":_vm.deleteAll,"num":_vm.num}}),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_brandWendaList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/brandWendaList.vue
function injectStyle (ssrContext) {
  __webpack_require__("bO7o")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15743911"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  brandWendaList,
  houseData_brandWendaList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_brandWendaList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "L+tp":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.userLists-tab[data-v-15743911] {\n  padding-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "bO7o":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("L+tp");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("b92e9078", content, true);

/***/ })

});
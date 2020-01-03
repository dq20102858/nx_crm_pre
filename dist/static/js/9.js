webpackJsonp([9],{

/***/ "UAb6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#productLists{\n  padding: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "blu5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UAb6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("fc7332d0", content, true);

/***/ }),

/***/ "jyKM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/utils/common.js

var publicData = {

  pickerOptions2: {
    shortcuts: [{
      text: '今天',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 0);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三天',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一周',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近一个月',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近三个月',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
        picker.$emit('pick', [start, end]);
      }
    }]
  },
  pickerOptions3: {
    shortcuts: [{
      text: '本月',
      onClick: function onClick(picker) {
        picker.$emit('pick', [new Date(), new Date()]);
      }
    }, {
      text: '今年至今',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date(new Date().getFullYear(), 0);
        picker.$emit('pick', [start, end]);
      }
    }, {
      text: '最近六个月',
      onClick: function onClick(picker) {
        var end = new Date();
        var start = new Date();
        start.setMonth(start.getMonth() - 6);
        picker.$emit('pick', [start, end]);
      }
    }]
  }
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fchaob/product/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var product = ({
  name: 'productList',
  data: function data() {
    return {
      productLists: [],
      page: 1,
      total: 1,
      searchForm: {},
      pickerOptions2: publicData.pickerOptions2

    };
  },
  created: function created() {
    this.getProductLists();
  },

  methods: {
    getProductLists: function getProductLists() {
      var _this = this;

      var data = {
        page: this.page,
        status: this.searchForm.status,
        keyword: this.searchForm.keyword,
        timeRange: this.searchForm.time_range,
        cateId: this.searchForm.cateId
      };
      this.request({
        url: '/product/lists',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        _this.productLists = data.data.data;
        _this.page = parseInt(data.data.current_page);
        _this.total = data.data.total;
      });
    },
    pageChange: function pageChange(value) {
      this.page = value;
      this.getProductLists();
    },
    goDetail: function goDetail(id) {
      this.$router.push({ "name": "productDetail", query: { id: id } });
    },
    delProd: function delProd(id) {
      var _this2 = this;

      var data = {
        id: id
      };
      this.request({
        url: '/product/delete',
        method: 'post',
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this2.$message({
            "type": "success",
            "message": "删除成功"
          });
          _this2.getProductLists();
        } else {
          _this2.$message({
            "type": "error",
            "message": "删除失败"
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-074ff5a5","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fchaob/product/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"productLists"}},[_c('el-form',{attrs:{"model":_vm.searchForm,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"名称/型号"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"待分配","value":"0"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"正常","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"已完成","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"已取消","value":"-1"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("发布时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getProductLists}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"danger","icon":"el-icon-edit"},on:{"click":function($event){_vm.goDetail(0)}}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",attrs:{"data":_vm.productLists}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"产品名称","width":"300"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"cate_name","label":"产品类型","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"price","label":"价格","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_des","label":"状态","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status == 0)?_c('el-tag',[_vm._v("已删除")]):_vm._e(),_vm._v(" "),(scope.row.status == 1)?_c('el-tag',{attrs:{"type":"warning"}},[_vm._v("审核通过")]):_vm._e(),_vm._v(" "),(scope.row.status == 2)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("审核未通过")]):_vm._e(),_vm._v(" "),(scope.row.status == '-1')?_c('el-tag',{attrs:{"type":"info"}},[_vm._v("待审")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"添加时间","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.goDetail(scope.row.id)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.delProd(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[(_vm.productLists.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","current-page":this.page,"total":this.total},on:{"current-change":_vm.pageChange}}):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fchaob_product = (esExports);
// CONCATENATED MODULE: ./src/views/fchaob/product/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("blu5")
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
  product,
  fchaob_product,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fchaob_product = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
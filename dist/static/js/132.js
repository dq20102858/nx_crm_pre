webpackJsonp([132],{

/***/ "73Se":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/components/CheckAll/index.vue + 2 modules
var CheckAll = __webpack_require__("cQ2w");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/bargain.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var bargain = ({
  components: {
    CheckAll: CheckAll["a" /* default */],
    Refresh: Refresh["a" /* default */]
  },
  data: function data() {
    return {
      zhizuList: [],
      allChecked: false,
      isIndeterminate: false,
      num: 0,
      checkedList: [],
      total: 0,
      pagesize: 20,
      page: 1,
      last_page: 1,
      searchForm: {},
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      options: [{
        id: '',
        name: "所有"
      }, {
        id: 1,
        name: "待处理"
      }, {
        id: 2,
        name: "已处理"
      }],
      filterStatus: ""
    };
  },

  created: function created() {
    this.getbargainlist();
  },
  methods: {
    deleteAll: function deleteAll() {
      if (this.checkedList.length === 0) {
        this.$message({
          type: "error",
          message: "请选择删除项!",
          duration: 2 * 1000
        });
        return;
      }
      var idList = [];
      this.checkedList.forEach(function (item) {
        idList.push(item.id);
      });
      this.deleteItem(idList.join(","));
    },
    getbargainlist: function getbargainlist(type) {
      var _this = this;

      this.num = 0;
      this.checkedList = [];
      if (type == "search") this.page = 1;
      var data = {
        page: this.page,
        keyword: this.searchForm.keyword,
        time_range: this.searchForm.time_range,
        status: this.filterStatus
      };
      this.request({
        url: "/bargain/index",
        method: "get",
        params: data
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.zhizuList = data.data;
          _this.total = data.total;
          _this.pagesize = data.per_page;
          _this.page = parseInt(data.current_page);
          _this.last_page = data.last_page;
          _this.role_id = data.role_id;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    goEdit: function goEdit(row) {
      this.$router.push({
        name: "bargainEdit",
        params: { id: row.id }
      });
    },
    deleteItem: function deleteItem(id) {
      var _this2 = this;

      this.$confirm("你确定要删除此信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        _this2.request({
          url: "/bargain/delete",
          method: "get",
          params: { id: id }
        }).then(function (data) {
          if (data.data.status) {
            _this2.$message({
              message: "删除成功",
              type: "success",
              duration: 3 * 1000
            });
            id = "" + id;
            if (id.split(',').length == _this2.zhizuList.length && _this2.page == _this2.last_page && _this2.page > 1) {
              _this2.page = _this2.page - 1;
            }
            _this2.getbargainlist("delete");
          }
        });
      }).catch(function () {});
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getbargainlist();
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.num = val.length;
      this.checkedList = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ba94d6e0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/bargain.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.searchForm,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/house_id/联系电话"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{attrs:{"placeholder":"所有"},model:{value:(_vm.filterStatus),callback:function ($$v) {_vm.filterStatus=$$v},expression:"filterStatus"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("发布时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getbargainlist('search')}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"individual-tab",attrs:{"data":_vm.zhizuList},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"ID","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"house_id","label":"房源ID","show-overflow-tooltip":true}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"house_name","label":"房源名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"phone","label":"联系电话"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mprice","label":"意向月租金"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"relet_price","label":"意向转租价格"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"发布时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态","width":"80"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==2)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("已处理")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待处理")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.goEdit(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleteItem(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('check-all',{directives:[{name:"show",rawName:"v-show",value:(_vm.zhizuList.length !== 0),expression:"zhizuList.length !== 0"}],attrs:{"table-name":"multipleTable","list":_vm.zhizuList,"delete-all":_vm.deleteAll,"num":_vm.num}}),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[(_vm.zhizuList.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","current-page":this.page,"total":this.total,"page-size":this.pagesize},on:{"current-change":_vm.handleCurrentChange}}):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_bargain = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/bargain.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  bargain,
  houseData_bargain,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_bargain = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
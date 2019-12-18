webpackJsonp([83],{

/***/ "5yB0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/CheckAll/index.vue + 2 modules
var CheckAll = __webpack_require__("cQ2w");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/houseData/brandWendaEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var brandWendaEdit = ({
  components: {
    CheckAll: CheckAll["a" /* default */]
  },
  data: function data() {
    return {
      data: {},
      id: this.$route.params.id,
      checkedList: [],
      num: 0,
      answerList: [],
      answer_content: "",
      multipleSelection: ""
    };
  },

  created: function created() {
    this.getBrandWendaDetail();
  },
  methods: {
    getBrandWendaDetail: function getBrandWendaDetail() {
      var _this = this;

      var data = {
        id: this.id
      };
      this.request({
        url: "/brand/edit",
        method: "get",
        params: data
      }).then(function (response) {
        response.data.data.create_time = _this.$options.filters.formatTime(response.data.data.create_time);
        _this.data = response.data.data;
        if (response.data.data.answer_list) {
          _this.answerList = response.data.data.answer_list;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
      this.num = this.multipleSelection.length;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getList();
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      var data = {
        id: this.id,
        status: this.data.status,
        option: this.data.option,
        content: this.data.content
      };
      this.request({
        url: "/brand/editDo",
        method: "post",
        data: data
      }).then(function (response) {
        if (response.data.status == 1) {
          _this2.$message({
            type: "success",
            message: "提交成功!"
          });
        } else {
          _this2.$message({
            type: "error",
            message: response.data.msg
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    answerSubmit: function answerSubmit() {
      var _this3 = this;

      if (this.answer_content.trim() == "") {
        this.$message({
          type: "warning",
          message: "回答内容不可以为空!"
        });
        return;
      }
      var data = {
        ask_id: this.id,
        content: this.answer_content
      };
      this.request({
        url: "/brand/answerAddDo",
        method: "post",
        data: data
      }).then(function (response) {
        if (response.data.status == 1) {
          _this3.answer_content = "";
          _this3.getBrandWendaDetail();
          _this3.$message({
            type: "success",
            message: "提交成功!"
          });
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
    deleteAll: function deleteAll() {
      var _this4 = this;

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
          _this4.delrequest(arr.join(","));
          _this4.num = 0;
          _this4.multipleSelection = [];
        }).catch(function () {
          _this4.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      }
    },
    deleted: function deleted(index, row) {
      var _this5 = this;

      this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        _this5.delrequest(row.id);
      }).catch(function () {
        _this5.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    },
    delrequest: function delrequest(id) {
      var _this6 = this;

      var data = {
        id: id
      };
      this.request({
        url: "/brand/answerdelete",
        method: "get",
        params: data
      }).then(function (response) {
        if (response.data.status == 1) {
          _this6.$message({
            type: "success",
            message: "删除成功!"
          });
          _this6.num = 0;
          _this6.multipleSelection = [];
          _this6.getBrandWendaDetail();
        } else {
          _this6.$message({
            type: "error",
            message: response.data.msg
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c5c14e0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/houseData/brandWendaEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"提问时间：","prop":"create_time"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.create_time),callback:function ($$v) {_vm.$set(_vm.data, "create_time", $$v)},expression:"data.create_time"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提问内容：","prop":"content"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.data.content),callback:function ($$v) {_vm.$set(_vm.data, "content", $$v)},expression:"data.content"}},[_c('i',{staticClass:"el-icon-edit el-input__icon",attrs:{"slot":"suffix"},slot:"suffix"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"姓名：","prop":"user_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.user_name),callback:function ($$v) {_vm.$set(_vm.data, "user_name", $$v)},expression:"data.user_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系方式：","prop":"phone"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"disabled":true},model:{value:(_vm.data.phone),callback:function ($$v) {_vm.$set(_vm.data, "phone", $$v)},expression:"data.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("待审")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否解决：","prop":"option"}},[_c('el-radio-group',{model:{value:(_vm.data.option),callback:function ($$v) {_vm.$set(_vm.data, "option", $$v)},expression:"data.option"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("已解决")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("待解决")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit()}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"line"}),_vm._v(" "),_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{attrs:{"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"回答内容："}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":5,"placeholder":"请输入内容"},model:{value:(_vm.answer_content),callback:function ($$v) {_vm.answer_content=$$v},expression:"answer_content"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.answerSubmit()}}},[_vm._v("回答")])],1)],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"individual-tab",attrs:{"data":_vm.answerList},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"ID","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":"回答内容"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"回答人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"回答时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleted(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('check-all',{directives:[{name:"show",rawName:"v-show",value:(_vm.answerList.length>0),expression:"answerList.length>0"}],attrs:{"table-name":"multipleTable","list":_vm.answerList,"delete-all":_vm.deleteAll,"num":_vm.num}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var houseData_brandWendaEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/houseData/brandWendaEdit.vue
function injectStyle (ssrContext) {
  __webpack_require__("SipS")
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
  brandWendaEdit,
  houseData_brandWendaEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_houseData_brandWendaEdit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SipS":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("qatX");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("23e24181", content, true);

/***/ }),

/***/ "qatX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\ninput {\n  width: 300px;\n}\n", ""]);

// exports


/***/ })

});
webpackJsonp([119],{

/***/ "DNsd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/Detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Detail = ({
  data: function data() {
    return {
      data: {},
      id: Object(auth["a" /* getCodeId */])(),
      processList: [],
      package: [],
      package_id: 0,
      endTimeList: [],
      add_end_time: 1,
      isShow: false,
      isShow1: false

    };
  },

  created: function created() {
    this.getCodeInfo();
  },
  methods: {
    getCodeInfo: function getCodeInfo() {
      var _this = this;

      Object(fjingling["f" /* detail */])(this.id).then(function (response) {
        _this.data = response.data.data;
      }).catch(function (err) {});
    },
    getPackageLists: function getPackageLists() {
      var _this2 = this;

      this.request({
        url: "/fjingling/getPackageLists",
        method: "get"
      }).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this2.package = data;
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getAddEndTimeLists: function getAddEndTimeLists() {
      this.endTimeList = [{ "id": 1, "title": "一个月" }, { "id": 2, "title": "二个月" }, { "id": 3, "title": "三个月" }];
    },
    setPackage: function setPackage() {
      var _this3 = this;

      var data = {
        id: this.id,
        package_id: this.package_id
      };
      this.request({
        url: "/fjingling/setPackage",
        method: "post",
        data: data
      }).then(function (response) {
        var status = response.data.status;
        _this3.isShow1 = false;
        if (status) {
          _this3.getCodeInfo();
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    addEndTime: function addEndTime() {
      var _this4 = this;

      var data = {
        id: this.id,
        end_time_id: this.add_end_time
      };
      this.request({
        url: "/fjingling/addEndTime",
        method: "post",
        data: data
      }).then(function (response) {
        var status = response.data.status;
        _this4.isShow = false;
        if (status) {
          _this4.getCodeInfo();
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ac93a616","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/Detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"80px"}},[_c('div',{attrs:{"id":"customized-wrap"}},[_c('div',{staticClass:"customized-wrap-show"},[_c('div',{staticClass:"g-line"},[_c('p',{staticClass:"left-label"},[_vm._v("基本信息")]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"用户名","prop":"username"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.username)}})]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"电子邮件","prop":"email"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.email)}})]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"联系方式","prop":"mobile"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.mobile)}})]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"客户类型","prop":"source"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.source)}})]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"开通会员","prop":"is_vip"}},[(_vm.data.is_vip==1)?_c('span',[_vm._v("已开通")]):_c('span',[_c('el-popover',{attrs:{"placement":"right","width":"400","trigger":"click"},model:{value:(_vm.isShow1),callback:function ($$v) {_vm.isShow1=$$v},expression:"isShow1"}},[_c('el-select',{attrs:{"placeholder":"请选择分配的个数"},model:{value:(_vm.package_id),callback:function ($$v) {_vm.package_id=$$v},expression:"package_id"}},_vm._l((this.package),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.title,"value":item.id}})})),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){_vm.setPackage()}}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference"},on:{"click":function($event){_vm.getPackageLists()}},slot:"reference"},[_vm._v("开通会员")])],1)],1)]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"到期时间","prop":"source"}},[(_vm.data.is_vip==1)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.end_time_txt)}}):_vm._e(),_vm._v(" "),(_vm.data.is_vip==1)?_c('span',[_c('el-popover',{attrs:{"placement":"right","width":"400","trigger":"click"},model:{value:(_vm.isShow),callback:function ($$v) {_vm.isShow=$$v},expression:"isShow"}},[_c('el-select',{attrs:{"placeholder":"请选择续费时长"},model:{value:(_vm.add_end_time),callback:function ($$v) {_vm.add_end_time=$$v},expression:"add_end_time"}},_vm._l((this.endTimeList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.title,"value":item.id}})})),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){_vm.addEndTime()}}},[_vm._v("确定")]),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference"},on:{"click":function($event){_vm.getAddEndTimeLists()}},slot:"reference"},[_vm._v("会员续费")])],1)],1):_vm._e()]),_vm._v(" "),_c('el-form-item',{staticClass:"title-line",attrs:{"label":"注册时间","prop":"source"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.reg_time)}})]),_vm._v(" "),_c('p',{staticClass:"clear"})],1),_vm._v(" "),_c('div',{staticClass:"g-line"},[_c('p',{staticClass:"left-label"},[_vm._v("邀请码("),_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.used_num)}}),_vm._v("/"),_c('span',{domProps:{"innerHTML":_vm._s(_vm.data.total_num)}}),_vm._v(")")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.data.share_code_list}},[_c('el-table-column',{attrs:{"type":"index","label":"序号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"code","label":"邀请码值","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"is_push","label":"推送","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"邀请会员","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","width":"200"}},[_c('p',[_vm._v("用户名: "+_vm._s(scope.row.users.username))]),_vm._v(" "),_c('p',[_vm._v("注册时间: "+_vm._s(scope.row.users.reg_time))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[(scope.row.users.username)?_c('el-tag',{attrs:{"size":"medium"}},[_vm._v(_vm._s(scope.row.users.username))]):_vm._e()],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"active_time","label":"激活时间","width":"180"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"g-line"},[_c('p',{staticClass:"left-label"},[_vm._v("使用列表")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.data.use_code_list}},[_c('el-table-column',{attrs:{"type":"index","label":"序号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"code","label":"邀请码值","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态","width":"180"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"邀请人","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top","width":"200"}},[_c('p',[_vm._v("用户名: "+_vm._s(scope.row.users.username))]),_vm._v(" "),_c('p',[_vm._v("注册时间: "+_vm._s(scope.row.users.reg_time))]),_vm._v(" "),_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[_c('el-tag',{attrs:{"size":"medium"}},[_vm._v(_vm._s(scope.row.users.username))])],1)])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"active_time","label":"激活时间","width":"180"}})],1)],1)])])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_Detail = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/Detail.vue
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
  Detail,
  fjingling_Detail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_Detail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
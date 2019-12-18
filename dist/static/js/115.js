webpackJsonp([115],{

/***/ "1VFD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/fjingling/index.js
var fjingling = __webpack_require__("H2Vh");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/Index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Index = ({
  name: "invitation",
  components: {
    Refresh: Refresh["a" /* default */]
  },
  data: function data() {
    return {
      activityCodeList: [],
      lists: [],
      pagesize: 10,
      total: 1, //总页数
      page: 1,
      search: {
        username: null,
        mobile: null,
        source: null,
        is_vip: null,
        role_id: null,
        is_card: null,
        time_range: null,
        activity_code: null
      },
      code_map: {},
      code: {
        num: 4
      },
      isCardData: {
        remark: ''
      },
      dialogFormVisible: false,
      dialogisCardFormVisible: false,
      share_id: 0,
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      salerData: {
        show_name: "",
        show_tell: "",
        uid: 0,
        username: ""
      },
      dialogSalerFormVisible: false
    };
  },

  created: function created() {
    this.getUserList();
    this.configList();
  },
  methods: {
    configList: function configList() {
      var _this = this;

      Object(fjingling["e" /* configList */])().then(function (res) {
        _this.activityCodeList = res.data.data.activity_code;
      });
    },
    openShenheDialog: function openShenheDialog(index, row) {
      this.dialogisCardFormVisible = true;
      this.isCardData.username = row.username;
      this.isCardData.id = row.id;
      this.isCardData.mobile = row.mobile;
      this.isCardData.card_url = row.card_url;
      this.isCardData.is_card = row.is_card;
      this.isCardData.remark = row.remark;
    },
    checkcard: function checkcard(type) {
      var _this2 = this;

      Object(fjingling["c" /* autheCard */])(this.isCardData.id, this.isCardData.remark, type).then(function (response) {
        var data = response.data;
        _this2.dialogisCardFormVisible = false;
        if (data.status) {
          _this2.getUserList();
          _this2.$message({
            showClose: true,
            message: data.msg,
            type: "success"
          });
        } else {
          _this2.$message({
            showClose: true,
            message: data.msg,
            type: "error"
          });
        }
      });
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.getUserList();
    },


    /**
     * 分配 邀请码
     * @param {*} index
     * @param {*} row
     */
    distribute: function distribute(index, row) {
      var _this3 = this;

      Object(fjingling["g" /* distribute */])(this.share_id, this.code.num).then(function (response) {
        var data = response.data;
        if (data.status) {
          _this3.getUserList();
        } else {
          _this3.$message({
            showClose: true,
            message: data.msg,
            type: "error"
          });
        }
        _this3.dialogFormVisible = false;
      }).catch(function (err) {
        _this3.$message({
          showClose: true,
          message: "系统出错，请重试！",
          type: "error"
        });
      });
    },
    addOneSaler: function addOneSaler(index, row) {
      var _this4 = this;

      var data = {
        uid: this.salerData.uid,
        username: this.salerData.username,
        show_name: this.salerData.show_name,
        show_tell: this.salerData.show_tell
      };
      Object(fjingling["b" /* addSalers */])(data).then(function (response) {
        _this4.dialogSalerFormVisible = false;
      }).catch(function (err) {
        _this4.$message({
          showClose: true,
          message: "系统出错，请重试！",
          type: "error"
        });
      });
    },
    openDialog: function openDialog(index, row) {
      this.share_id = row.id; //分享人的id
      this.dialogFormVisible = true;
    },
    openSalerDialog: function openSalerDialog(index, row) {
      this.dialogSalerFormVisible = true;
      this.salerData.uid = row.id;
      this.salerData.username = row.username;
    },
    getUserList: function getUserList(param) {
      var _this5 = this;

      if (param) {
        this.page = 1;
      }
      Object(fjingling["r" /* getUserList */])(this.page, this.search).then(function (response) {
        var data = response.data.data;
        if (data.lists) {
          data.lists.data.forEach(function (element) {
            element.role_id = element.role_id == 1 ? false : true;
          });
          _this5.lists = data.lists.data;
          _this5.total = data.lists.total;
          _this5.page = Number(data.lists.current_page);
          _this5.pagesize = parseInt(data.lists.per_page);
          _this5.code_map = data.code_map;
        } else {
          _this5.lists = [];
          _this5.total = 0;
          _this5.page = 0;
        }
      }).catch(function (err) {});
    },
    addCode: function addCode() {
      this.$router.push({ name: "addCode" });
    },
    pushCode: function pushCode(index, row) {
      var _this6 = this;

      Object(fjingling["w" /* pushCode */])(row.id).then(function (response) {
        var data = response.data;
        if (data.status) {
          _this6.getUserList();
        } else {
          _this6.$message({
            showClose: true,
            message: data.msg,
            type: "error"
          });
        }
      });
    },
    detail: function detail(index, row) {
      Object(auth["g" /* setCodeId */])(row.id);
      this.$router.push({ name: "codeDetail", query: { id: row.id } });
    },
    changeChartRight: function changeChartRight(role_id, id) {
      Object(fjingling["d" /* changeChartRight */])(role_id, id).then(function (response) {}).catch(function (err) {});
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-76d8f7c1","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/Index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticStyle:{"margin":"20px 0px 0px 10px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addCode}},[_vm._v("新增邀请码")])],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"model":_vm.search,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"用户名"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"120px"},attrs:{"placeholder":"用户名"},model:{value:(_vm.search.username),callback:function ($$v) {_vm.$set(_vm.search, "username", $$v)},expression:"search.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号"}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"120px"},attrs:{"placeholder":"手机号"},model:{value:(_vm.search.mobile),callback:function ($$v) {_vm.$set(_vm.search, "mobile", $$v)},expression:"search.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客户类型"}},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"客户类型","clearable":""},model:{value:(_vm.search.source),callback:function ($$v) {_vm.$set(_vm.search, "source", $$v)},expression:"search.source"}},[_c('el-option',{attrs:{"label":"外部","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"内部","value":"0"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开通套餐"}},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"开通套餐","clearable":""},model:{value:(_vm.search.is_vip),callback:function ($$v) {_vm.$set(_vm.search, "is_vip", $$v)},expression:"search.is_vip"}},[_c('el-option',{attrs:{"label":"是","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"否","value":"0"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图表权限"}},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"图表权限","clearable":""},model:{value:(_vm.search.role_id),callback:function ($$v) {_vm.$set(_vm.search, "role_id", $$v)},expression:"search.role_id"}},[_c('el-option',{attrs:{"label":"有","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"无","value":"1"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否认证"}},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"是否认证","clearable":""},model:{value:(_vm.search.is_card),callback:function ($$v) {_vm.$set(_vm.search, "is_card", $$v)},expression:"search.is_card"}},[_c('el-option',{attrs:{"label":"是","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"否","value":"2"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动来源"}},[_c('el-select',{staticStyle:{"width":"120px"},attrs:{"placeholder":"活动来源","clearable":""},model:{value:(_vm.search.activity_code),callback:function ($$v) {_vm.$set(_vm.search, "activity_code", $$v)},expression:"search.activity_code"}},_vm._l((_vm.activityCodeList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.name,"value":item.value}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"注册时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.search.time_range),callback:function ($$v) {_vm.$set(_vm.search, "time_range", $$v)},expression:"search.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getUserList(_vm.search)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"is_vip","label":"是否开通会员"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"source","label":"来源"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"reg_time","label":"注册时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"recommend_tel","label":"推荐人手机号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"card_desc","label":"是否认证"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"recommend_tel","label":"图表权限"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-switch',{on:{"change":function($event){_vm.changeChartRight(scope.row.role_id,scope.row.id)}},model:{value:(scope.row.role_id),callback:function ($$v) {_vm.$set(scope.row, "role_id", $$v)},expression:"scope.row.role_id"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"420"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-dialog',{attrs:{"title":"邀请码","visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.code}},[_c('el-form-item',{attrs:{"label":"分配的邀请码个数"}},[_c('el-select',{attrs:{"placeholder":"请选择分配的个数"},model:{value:(_vm.code.num),callback:function ($$v) {_vm.$set(_vm.code, "num", $$v)},expression:"code.num"}},[_c('el-option',{attrs:{"label":"1","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"2","value":"2"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"3","value":"3"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"4","value":"4"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"5","value":"5"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"6","value":"6"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"7","value":"7"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"8","value":"8"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"9","value":"9"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"10","value":"10"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"11","value":"11"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"12","value":"12"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"13","value":"13"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"14","value":"14"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"15","value":"15"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"16","value":"16"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"17","value":"17"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"18","value":"18"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"19","value":"19"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"20","value":"20"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.distribute(scope.$index, scope.row)}}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){_vm.openDialog(scope.$index, scope.row)}}},[_vm._v("分配邀请码")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.openShenheDialog(scope.$index, scope.row)}}},[_vm._v("认证")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"warning"},on:{"click":function($event){_vm.pushCode(scope.$index, scope.row)}}},[_vm._v("推送")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("详情")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":function($event){_vm.openSalerDialog(scope.$index, scope.row)}}},[_vm._v("设为地推")]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"新增地推人员","visible":_vm.dialogSalerFormVisible},on:{"update:visible":function($event){_vm.dialogSalerFormVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.salerData}},[_c('el-form-item',{attrs:{"label":"对客姓名"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"对客姓名"},model:{value:(_vm.salerData.show_name),callback:function ($$v) {_vm.$set(_vm.salerData, "show_name", $$v)},expression:"salerData.show_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"对客手机号"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"对客手机号"},model:{value:(_vm.salerData.show_tell),callback:function ($$v) {_vm.$set(_vm.salerData, "show_tell", $$v)},expression:"salerData.show_tell"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogSalerFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneSaler(scope.$index, scope.row)}}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"经纪人认证","visible":_vm.dialogisCardFormVisible},on:{"update:visible":function($event){_vm.dialogisCardFormVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.isCardData}},[_c('el-form-item',{attrs:{"label":"经纪人姓名"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"经纪人姓名","readonly":""},model:{value:(_vm.isCardData.username),callback:function ($$v) {_vm.$set(_vm.isCardData, "username", $$v)},expression:"isCardData.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系方式："}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"经纪人手机号","readonly":""},model:{value:(_vm.isCardData.mobile),callback:function ($$v) {_vm.$set(_vm.isCardData, "mobile", $$v)},expression:"isCardData.mobile"}})],1),_vm._v(" "),(_vm.isCardData.card_url)?_c('el-form-item',{attrs:{"label":"经纪人名片"}},[_c('img',{staticClass:"keywords search-input",staticStyle:{"width":"300px","height":"150px"},attrs:{"src":_vm.isCardData.card_url,"placeholder":"经纪人名片"}})]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客服备注："}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"客服备注","type":"textarea"},model:{value:(_vm.isCardData.remark),callback:function ($$v) {_vm.$set(_vm.isCardData, "remark", $$v)},expression:"isCardData.remark"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogisCardFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),(_vm.isCardData.is_card==0||_vm.isCardData.is_card==1)?_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){_vm.checkcard(2)}}},[_vm._v("认证不通过")]):_vm._e(),_vm._v(" "),(_vm.isCardData.is_card==0||_vm.isCardData.is_card==2||_vm.isCardData.is_card==-1)?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.checkcard(1)}}},[_vm._v("认证通过")]):_vm._e()],1)],1)]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_Index = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/Index.vue
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
  Index,
  fjingling_Index,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_Index = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
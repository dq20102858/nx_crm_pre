webpackJsonp([140],{

/***/ "D0d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/badip/index.js


function badip_fetchBadipList(page, search) {

  var ip = search.keyword;
  var status = search.status;

  return Object(request["a" /* default */])({
    url: 'api/searchBadIp',
    method: 'get',
    params: { page: page, ip: ip, status: status }
  });
}

function badip_addBadip(data) {
  return Object(request["a" /* default */])({
    url: '/api/addBadIp',
    method: 'post',
    data: data
  });
}

function deleteBadip(id) {
  return Object(request["a" /* default */])({
    url: '/api/delBadIp',
    method: 'post',
    data: { id: id }
  });
}
// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__("E4LH");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/badip/IpList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var IpList = ({
  name: 'adminList',
  components: {
    Refresh: Refresh["a" /* default */]
  },
  data: function data() {
    return {
      showOk: false,
      total: 0,
      pagesize: 0,
      currentPage: 0,
      page: 1,
      last_page: 1,
      pickerOptions2: common["a" /* publicData */].pickerOptions2,
      role_id: 0,
      multipleSelection: [],
      status: 1,
      dialogAdminFormVisible: false,
      isEdit: false,
      titleAdd: '添加禁止IP',
      titleEdit: '编辑IP',
      title: this.titleAdd,
      badipData: {},
      searchForm: {
        status: '',
        keyword: ''
      },
      badipList: [],
      keywordStatusList: [{ 'id': '', 'name': '-所有-' }, { 'id': 1, 'name': '启用' }, { 'id': 0, 'name': '禁用' }],
      rulesForm: {
        ip: [{
          required: true,
          message: "请输入IP地址",
          trigger: "blur"
        }, {
          validator: function validator(rule, value, callback) {
            if (!value) {
              return callback(new Error("请输入IP地址"));
            } else {
              if (Object(validate["c" /* validateIp */])(value)) {
                callback();
              } else {
                return callback(new Error('IP格式不正确'));
              }
            }
          },
          trigger: "blur" }],
        days: [{
          required: true,
          message: "请输入封禁天数",
          trigger: "blur"
        }, {
          validator: function validator(rule, value, callback) {
            if (!value) {
              return callback(new Error("请输入封禁天数"));
            } else {
              if (Object(validate["a" /* isInteger */])(value)) {
                callback();
              } else {
                return callback(new Error('封禁天数格式不正确'));
              }
            }
          },
          trigger: "blur" }]
      }
    };
  },

  created: function created() {
    this.fetchBadipList();
  },
  methods: {
    fetchBadipList: function fetchBadipList(param) {
      var _this = this;

      if (param) {
        this.page = 1;
      }
      badip_fetchBadipList(this.page, this.searchForm).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.badipList = data.data;
          _this.total = data.total;
          _this.pagesize = data.per_page;
          _this.currentPage = Number(data.current_page);
          _this.last_page = data.last_page;
          // this.role_id = data.role_id;
          // if (
          //   typeof this.searchForm.status == "undefined" ||
          //   this.searchForm.status == ""
          // ) {
          //   this.status = 1;
          // } else {
          //   this.status = this.searchForm.status;
          // }
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    add: function add(formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].resetFields();
      }
      this.isEdit = false;
      this.title = this.titleAdd;
      this.dialogAdminFormVisible = true;
      this.badipData = {
        ip: '',
        days: '',
        status: 1
      };
    },
    addBadip: function addBadip(formName) {
      var _this2 = this;

      var data = this.badipData;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          console.log("success submit!!");
          badip_addBadip(data).then(function (response) {
            _this2.dialogAdminFormVisible = false;
            _this2.fetchBadipList();
          }).catch(function (err) {
            _this2.$message({
              showClose: true,
              message: "系统出错，请重试！",
              type: "error"
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.fetchBadipList();
    },
    handleDelete: function handleDelete(index, row) {
      var _this3 = this;

      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        _this3.$message({
          type: "success",
          message: "删除成功!",
          onClose: deleteBadip(row.id).then(function (response) {
            _this3.fetchBadipList();
          }).catch(function (err) {
            console.log(err);
          })
        });
      }).catch(function () {
        _this3.$message({
          type: "info",
          message: "已取消"
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6e0946e4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/badip/IpList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticStyle:{"margin":"20px 0px 0px 10px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.add('rulesForm')}}},[_vm._v("添加禁止IP")]),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"rulesForm",attrs:{"model":_vm.badipData,"rules":_vm.rulesForm}},[_c('el-form-item',{attrs:{"label":"ip :","label-width":"100px","prop":"ip"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.badipData.ip),callback:function ($$v) {_vm.$set(_vm.badipData, "ip", $$v)},expression:"badipData.ip"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封禁天数 :","label-width":"100px","prop":"days"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.badipData.days),callback:function ($$v) {_vm.$set(_vm.badipData, "days", $$v)},expression:"badipData.days"}}),_vm._v(" "),_c('el-tag',[_vm._v("0表示永久封禁")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态 :","label-width":"100px"}},[_c('el-radio-group',{model:{value:(_vm.badipData.status),callback:function ($$v) {_vm.$set(_vm.badipData, "status", $$v)},expression:"badipData.status"}},[_c('el-radio',{attrs:{"label":1,"value":1}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0,"value":0}},[_vm._v("禁用")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addBadip('rulesForm')}}},[_vm._v("确 定")])],1)],1)],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"id":"searchForm","size":"small"}},[_c('el-form-item',{attrs:{"label":"状态："}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"100px"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},_vm._l((_vm.keywordStatusList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("ip :")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.fetchBadipList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"badipList-tab",attrs:{"data":_vm.badipList}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ip","label":"ip"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"expires","label":"解封时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_str","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var badip_IpList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/badip/IpList.vue
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
  IpList,
  badip_IpList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_badip_IpList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
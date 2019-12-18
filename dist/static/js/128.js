webpackJsonp([128],{

/***/ "L9l4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/member/index.js


function member_fetchMemberList(page, search) {
  var start_time = null;
  var end_time = null;
  if (search.time_range) {
    start_time = search.time_range[0];
    end_time = search.time_range[1];
  }
  var model = search.model;
  var status = search.status;
  var username = search.username;

  return Object(request["a" /* default */])({
    url: 'api/searchUser',
    method: 'get',
    params: { page: page, start_time: start_time, end_time: end_time, model: model, username: username, status: status }
  });
}

function member_addMember(data) {
  return Object(request["a" /* default */])({
    url: '/api/addUser',
    method: 'post',
    data: data
  });
}

function editMember(data) {
  return Object(request["a" /* default */])({
    url: '/api/editUser',
    method: 'post',
    data: data
  });
}

function deleteMember(id) {
  return Object(request["a" /* default */])({
    url: '/api/delUser',
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/member/MemberList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var MemberList = ({
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
      titleAdd: '添加会员',
      titleEdit: '编辑会员',
      title: this.titleAdd,
      memberData: {},
      searchForm: {
        time_range: '',
        start_time: '',
        end_time: '',
        model: '',
        status: '',
        username: ''
      },
      memberList: [],
      keywordStatusList: [{ 'id': '', 'name': '-所有-' }, { 'id': 1, 'name': '启用' }, { 'id': 0, 'name': '禁用' }],
      modelList: [{ 'id': '', 'name': '全部' }, { 'id': 1, 'name': '个人用户' }, { 'id': 2, 'name': '经纪人' }],
      rulesForm: {
        username: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        }],
        password: [{
          required: true,
          message: "请输入密码",
          trigger: "blur"
        }],
        mobile: [{
          required: true,
          message: "请输入手机号",
          trigger: "blur"
        }, {
          validator: function validator(rule, value, callback) {
            if (!value) {
              return callback(new Error("请输入手机号"));
            } else {
              if (Object(validate["d" /* validatePhone */])(value)) {
                callback();
              } else {
                return callback(new Error('手机号格式不正确'));
              }
            }
          },
          trigger: "blur" }],
        email: [{
          required: true,
          message: "请输入邮箱",
          trigger: "blur"
        }, {
          validator: function validator(rule, value, callback) {
            if (!value) {
              return callback(new Error("请输入邮箱"));
            } else {
              if (Object(validate["b" /* validateEmail */])(value)) {
                callback();
              } else {
                return callback(new Error('邮箱号格式不正确'));
              }
            }
          },
          trigger: "blur" }]
      }
    };
  },

  created: function created() {
    this.fetchMemberList();
  },
  methods: {
    fetchMemberList: function fetchMemberList(param) {
      var _this = this;

      if (param) {
        this.page = 1;
      }
      member_fetchMemberList(this.page, this.searchForm).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.memberList = data.data;
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
      this.memberData = {
        username: '',
        password: '',
        mobile: '',
        email: '',
        model: 1
      };
    },
    addMember: function addMember(formName) {
      var _this2 = this;

      var data = this.memberData;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            editMember(data).then(function (response) {
              _this2.dialogAdminFormVisible = false;
              _this2.fetchMemberList();
            }).catch(function (err) {
              _this2.$message({
                showClose: true,
                message: "系统出错，请重试！",
                type: "error"
              });
            });
          } else {
            member_addMember(data).then(function (response) {
              _this2.dialogAdminFormVisible = false;
              _this2.fetchMemberList();
            }).catch(function (err) {
              _this2.$message({
                showClose: true,
                message: "系统出错，请重试！",
                type: "error"
              });
            });
          }
        } else {
          return false;
        }
      });
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.fetchMemberList();
    },
    handleEdit: function handleEdit(index, row, formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].resetFields();
      }
      this.isEdit = true;
      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.memberData = row;
      this.memberData.password = '';
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
          onClose: deleteMember(row.id).then(function (response) {
            _this3.fetchMemberList();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ca04a2a2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/member/MemberList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticStyle:{"margin":"20px 0px 0px 10px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.add('rulesForm')}}},[_vm._v("添加会员")]),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"rulesForm",attrs:{"model":_vm.memberData,"rules":_vm.rulesForm}},[_c('el-form-item',{attrs:{"label":"用户名:","label-width":"100px","prop":"username"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.memberData.username),callback:function ($$v) {_vm.$set(_vm.memberData, "username", $$v)},expression:"memberData.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"密码:","label-width":"100px","prop":"password"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.memberData.password),callback:function ($$v) {_vm.$set(_vm.memberData, "password", $$v)},expression:"memberData.password"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号:","label-width":"100px","prop":"mobile"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.memberData.mobile),callback:function ($$v) {_vm.$set(_vm.memberData, "mobile", $$v)},expression:"memberData.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱:","label-width":"100px","prop":"email"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.memberData.email),callback:function ($$v) {_vm.$set(_vm.memberData, "email", $$v)},expression:"memberData.email"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addMember('rulesForm')}}},[_vm._v("确 定")])],1)],1)],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"id":"searchForm","size":"small"}},[_c('label',{staticClass:"search-label"},[_vm._v("注册时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"会员模型："}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"100px"},model:{value:(_vm.searchForm.model),callback:function ($$v) {_vm.$set(_vm.searchForm, "model", $$v)},expression:"searchForm.model"}},_vm._l((_vm.modelList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态："}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"100px"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},_vm._l((_vm.keywordStatusList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("用户名 :")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.searchForm.username),callback:function ($$v) {_vm.$set(_vm.searchForm, "username", $$v)},expression:"searchForm.username"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.fetchMemberList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"memberList-tab",attrs:{"data":_vm.memberList}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"用户名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"nickname","label":"昵称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"手机号码"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"model","label":"用户模型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"reg_time","label":"注册时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_str","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row, 'rulesForm')}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var member_MemberList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/member/MemberList.vue
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
  MemberList,
  member_MemberList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_member_MemberList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
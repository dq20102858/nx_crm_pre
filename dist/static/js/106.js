webpackJsonp([106],{

/***/ "hGYi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/keyword/index.js
var keyword = __webpack_require__("pNNH");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/keyword/KeywordList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var KeywordList = ({
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
      titleAdd: '添加敏感词',
      titleEdit: '编辑敏感词',
      title: this.titleAdd,
      badwordData: {},
      searchForm: {
        status: '',
        keyword: ''
      },
      badwordList: [],
      badwordLevelList: [{ 'id': 1, 'name': '一般' }, { 'id': 2, 'name': '危险' }],
      keywordStatusList: [{ 'id': '', 'name': '-所有-' }, { 'id': 1, 'name': '启用' }, { 'id': 0, 'name': '禁用' }],
      rulesForm: {
        word: [{
          required: true,
          message: "请输入敏感词"
          // trigger: "change"  
        }],
        replace_word: [{
          required: true,
          message: "请输入替换词"
          // trigger: "change"  
        }]
      }
    };
  },

  created: function created() {
    this.fetchBadwordList();
  },
  methods: {
    fetchBadwordList: function fetchBadwordList(param) {
      var _this = this;

      if (param) {
        this.page = 1;
      }
      Object(keyword["g" /* fetchBadwordList */])(this.page, this.searchForm).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this.badwordList = data.data;
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
      this.badwordData = {
        word: '',
        replace_word: '',
        level: 1,
        status: 1
      };
    },
    addBadword: function addBadword(formName) {
      var _this2 = this;

      var data = this.badwordData;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this2.isEdit) {
            Object(keyword["e" /* editBadWord */])(data).then(function (response) {
              _this2.dialogAdminFormVisible = false;
              _this2.fetchBadwordList();
            }).catch(function (err) {
              _this2.$message({
                showClose: true,
                message: "系统出错，请重试！",
                type: "error"
              });
            });
          } else {
            Object(keyword["a" /* addBadword */])(data).then(function (response) {
              _this2.dialogAdminFormVisible = false;
              _this2.fetchBadwordList();
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
    handleEdit: function handleEdit(index, row, formName) {
      if (this.$refs[formName]) {
        this.$refs[formName].resetFields();
      }
      this.isEdit = true;
      this.title = this.titleEdit;
      this.dialogAdminFormVisible = true;
      this.badwordData = row;
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.page = val;
      this.fetchBadwordList();
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
          onClose: Object(keyword["c" /* deleteBadword */])(row.id).then(function (response) {
            _this3.fetchBadwordList();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3777d4d8","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/keyword/KeywordList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticStyle:{"margin":"20px 0px 0px 10px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.add('rulesForm')}}},[_vm._v("添加敏感词")]),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"rulesForm",attrs:{"model":_vm.badwordData,"rules":_vm.rulesForm}},[_c('el-form-item',{attrs:{"label":"敏感词 :","label-width":"90px","prop":"word"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.badwordData.word),callback:function ($$v) {_vm.$set(_vm.badwordData, "word", $$v)},expression:"badwordData.word"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"替换词 :","label-width":"90px","prop":"replace_word"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.badwordData.replace_word),callback:function ($$v) {_vm.$set(_vm.badwordData, "replace_word", $$v)},expression:"badwordData.replace_word"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"敏感级别 :","label-width":"90px"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},model:{value:(_vm.badwordData.level),callback:function ($$v) {_vm.$set(_vm.badwordData, "level", $$v)},expression:"badwordData.level"}},_vm._l((_vm.badwordLevelList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态 :","label-width":"90px"}},[_c('el-radio-group',{model:{value:(_vm.badwordData.status),callback:function ($$v) {_vm.$set(_vm.badwordData, "status", $$v)},expression:"badwordData.status"}},[_c('el-radio',{attrs:{"label":1,"value":1}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0,"value":0}},[_vm._v("禁用")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addBadword('rulesForm')}}},[_vm._v("确 定")])],1)],1)],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"id":"searchForm","size":"small"}},[_c('el-form-item',{attrs:{"label":"状态："}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"100px"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},_vm._l((_vm.keywordStatusList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.fetchBadwordList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"badwordList-tab",attrs:{"data":_vm.badwordList}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"word","label":"敏感词"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"replace_word","label":"替换词"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"level_name","label":"敏感等级"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_str","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row, 'rulesForm')}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var keyword_KeywordList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/keyword/KeywordList.vue
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
  KeywordList,
  keyword_KeywordList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_keyword_KeywordList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pNNH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = fetchBadwordList;
/* harmony export (immutable) */ __webpack_exports__["a"] = addBadword;
/* harmony export (immutable) */ __webpack_exports__["e"] = editBadWord;
/* harmony export (immutable) */ __webpack_exports__["c"] = deleteBadword;
/* harmony export (immutable) */ __webpack_exports__["h"] = fetchLinkwordList;
/* harmony export (immutable) */ __webpack_exports__["b"] = addLinkword;
/* harmony export (immutable) */ __webpack_exports__["f"] = editLinkWord;
/* harmony export (immutable) */ __webpack_exports__["d"] = deleteLinkword;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__("vLgD");


function fetchBadwordList(page, search) {

  var status = search.status;
  var word = search.keyword;

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/searchBadWord',
    method: 'get',
    params: { page: page, status: status, word: word }
  });
}

function addBadword(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/addBadWord',
    method: 'post',
    data: data
  });
}

function editBadWord(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: '/api/editBadWord',
    method: 'post',
    data: data
  });
}

function deleteBadword(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: '/api/delBadWord',
    method: 'post',
    data: { id: id }
  });
}

function fetchLinkwordList(page, search) {

  var status = search.status;
  var word = search.keyword;

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/searchKeyWord',
    method: 'get',
    params: { page: page, status: status, word: word }
  });
}

function addLinkword(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: 'api/addKeyWord',
    method: 'post',
    data: data
  });
}

function editLinkWord(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: '/api/editKeyWord',
    method: 'post',
    data: data
  });
}

function deleteLinkword(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* default */])({
    url: '/api/delKeyWord',
    method: 'post',
    data: { id: id }
  });
}

/***/ })

});
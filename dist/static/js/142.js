webpackJsonp([142],{

/***/ "k+D3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/seo/index.js


function seo_fetchSeoList(page, search) {
  var start_time = null;
  var end_time = null;
  if (search.time_range) {
    start_time = search.time_range[0];
    end_time = search.time_range[1];
  }

  var keyword = search.keyword;
  var status = search.status;

  return Object(request["a" /* default */])({
    url: 'api/searchSeo',
    method: 'get',
    params: { page: page, start_time: start_time, end_time: end_time, keyword: keyword, status: status }
  });
}

function seo_addSeo(data) {
  return Object(request["a" /* default */])({
    url: '/api/addSeo',
    method: 'post',
    data: data
  });
}

function editSeo(data) {
  return Object(request["a" /* default */])({
    url: '/api/editSeo',
    method: 'post',
    data: data
  });
}

function deleteSeo(id) {
  return Object(request["a" /* default */])({
    url: '/api/delSeo',
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/SeoAdmin.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var SeoAdmin = ({
	name: "SeoAdmin",
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
			titleAdd: "添加SEO",
			titleEdit: "编辑SEO",
			title: this.titleAdd,
			seoData: {},
			searchForm: {
				time_range: "",
				start_time: "",
				end_time: "",
				keyword: "",
				status: ""
			},
			seoList: [],
			keywordStatusList: [{ id: "", name: "-所有-" }, { id: 1, name: "启用" }, { id: 0, name: "禁用" }],
			modelList: [{ id: "", name: "全部" }, { id: 1, name: "个人用户" }, { id: 2, name: "经纪人" }],
			rulesForm: {
				title: [{
					required: true,
					message: "请输入站点名称",
					trigger: "blur"
				}],
				alias: [{
					required: true,
					message: "请输入站点名称拼音",
					trigger: "blur"
				}, {
					pattern: /^[A-Za-z0-9]+[A-Za-z0-9.]*$/,
					message: "拼音格式不正确"
				}],
				seo_title: [{
					required: true,
					message: "请输入SEO标题",
					trigger: "blur"
				}],
				seo_keys: [{
					required: true,
					message: "请输入SEO关键词",
					trigger: "blur"
				}],
				seo_desc: [{
					required: true,
					message: "请输入SEO描述",
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.fetchSeoList();
	},
	methods: {
		fetchSeoList: function fetchSeoList(param) {
			var _this = this;

			if (param) {
				this.page = 1;
			}
			seo_fetchSeoList(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.seoList = data.data;
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
			this.seoData = {
				title: "",
				alias: "",
				seo_title: "",
				seo_keys: "",
				seo_desc: ""
			};
		},
		addSeo: function addSeo(formName) {
			var _this2 = this;

			var data = this.seoData;
			this.$refs[formName].validate(function (valid) {
				if (valid) {
					if (_this2.isEdit) {
						editSeo(data).then(function (response) {
							_this2.dialogAdminFormVisible = false;
							_this2.fetchSeoList();
						}).catch(function (err) {
							_this2.$message({
								showClose: true,
								message: "系统出错，请重试！",
								type: "error"
							});
						});
					} else {
						seo_addSeo(data).then(function (response) {
							_this2.dialogAdminFormVisible = false;
							_this2.fetchSeoList();
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
			this.fetchSeoList();
		},
		handleEdit: function handleEdit(index, row, formName) {
			if (this.$refs[formName]) {
				this.$refs[formName].resetFields();
			}
			this.isEdit = true;
			this.title = this.titleEdit;
			this.dialogAdminFormVisible = true;
			this.seoData = row;
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
					onClose: deleteSeo(row.id).then(function (response) {
						_this3.fetchSeoList();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bfa4af58","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/SeoAdmin.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticStyle:{"margin":"20px 0px 0px 10px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.add('rulesForm')}}},[_vm._v("添加SEO")]),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"rulesForm",attrs:{"model":_vm.seoData,"rules":_vm.rulesForm}},[_c('el-form-item',{attrs:{"label":"站点名称 :","label-width":"120px","prop":"title"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.seoData.title),callback:function ($$v) {_vm.$set(_vm.seoData, "title", $$v)},expression:"seoData.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"站点名称拼音 :","label-width":"120px","prop":"alias"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.seoData.alias),callback:function ($$v) {_vm.$set(_vm.seoData, "alias", $$v)},expression:"seoData.alias"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO 标题 :","label-width":"120px","prop":"seo_title"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.seoData.seo_title),callback:function ($$v) {_vm.$set(_vm.seoData, "seo_title", $$v)},expression:"seoData.seo_title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO 关键词 :","label-width":"120px","prop":"seo_keys"}},[_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.seoData.seo_keys),callback:function ($$v) {_vm.$set(_vm.seoData, "seo_keys", $$v)},expression:"seoData.seo_keys"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO 描述 :","label-width":"120px","prop":"seo_desc"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"type":"textarea","placeholder":"请输入SEO描述 "},model:{value:(_vm.seoData.seo_desc),callback:function ($$v) {_vm.$set(_vm.seoData, "seo_desc", $$v)},expression:"seoData.seo_desc"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addSeo('rulesForm')}}},[_vm._v("确 定")])],1)],1)],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"id":"searchForm","size":"small"}},[_c('label',{staticClass:"search-label"},[_vm._v("添加时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态："}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"100px"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},_vm._l((_vm.keywordStatusList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("关键词 :")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.fetchSeoList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"seoList-tab",attrs:{"data":_vm.seoList}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"站点名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"alias","label":"拼音"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"添加时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_str","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row, 'rulesForm')}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var basicSet_SeoAdmin = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/SeoAdmin.vue
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
  SeoAdmin,
  basicSet_SeoAdmin,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_basicSet_SeoAdmin = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
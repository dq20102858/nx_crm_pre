webpackJsonp([96],{

/***/ "4yNa":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "4ztA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/information.js
var information = __webpack_require__("O6uv");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/information/Information.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var Information = ({
	name: "Information",
	data: function data() {
		return {
			officeList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				cate_id: null,
				cate_type: null
			},
			cates: null,
			cate_childs: null,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			rules: {}
		};
	},

	created: function created() {
		this.getCateList();
		this.getInformationList();
	},
	methods: {
		handleSortChange: function handleSortChange(val) {
			if (!val.column) {
				return;
			}
			var obj = { ascending: 1, descending: 2 };
			this.searchForm.order = obj[val.order];
			this.getInformationList();
		},
		getList: function getList() {
			this.page = 1;
			this.getInformationList();
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getInformationList();
		},
		getCateList: function getCateList() {
			var _this = this;

			Object(information["d" /* getCateList */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.cates = data;
				} else {
					_this.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getChildCateList: function getChildCateList() {
			var _this2 = this;

			this.searchForm.cate_type = "";
			Object(information["d" /* getCateList */])(this.searchForm.cate_id).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.cate_childs = data;
				} else {
					_this2.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleCreate: function handleCreate() {
			//跳转到详情页
			this.$router.push({
				name: "InformationDetail",
				params: { id: 0 }
			});
		},
		handleUpdate: function handleUpdate(row) {
			//跳转到详情页
			this.$router.push({
				name: "InformationDetail",
				params: { id: row.id }
			});
		},
		getInformationList: function getInformationList() {
			var _this3 = this;

			Object(information["f" /* getInformationList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.officeList = data.data;
					_this3.total = data.total;
					_this3.pagesize = data.per_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleEdit: function handleEdit(index, row) {
			//跳转到详情页
			Object(auth["n" /* setUserId */])(row.id);
			this.$router.push({ name: "userDetail", query: { id: row.id } });
		},
		handleDelete: function handleDelete(index, row) {
			var _this4 = this;

			this.$confirm("你确定要删除此信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this4.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(information["b" /* delInformation */])(row.id).then(function (response) {
						_this4.getInformationList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this4.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0e445da6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/information/Information.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.check_status),callback:function ($$v) {_vm.$set(_vm.searchForm, "check_status", $$v)},expression:"searchForm.check_status"}},[_c('el-option',{attrs:{"label":"待审","value":1}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"通过","value":2}},[_vm._v(" 通过")]),_vm._v(" "),_c('el-option',{attrs:{"label":"未通过","value":3}},[_vm._v(" 未通过")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"分类"},on:{"change":_vm.getChildCateList},model:{value:(_vm.searchForm.cate_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "cate_id", $$v)},expression:"searchForm.cate_id"}},_vm._l((_vm.cates),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"分类"},model:{value:(_vm.searchForm.cate_type),callback:function ($$v) {_vm.$set(_vm.searchForm, "cate_type", $$v)},expression:"searchForm.cate_type"}},_vm._l((_vm.cate_childs),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList},on:{"sort-change":_vm.handleSortChange}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"标题"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"price","label":"发布人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"check_status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.check_status==1)?_c('span',[_vm._v("待审")]):_vm._e(),_vm._v(" "),(scope.row.check_status==2)?_c('span',[_vm._v("审核通过")]):_vm._e(),_vm._v(" "),(scope.row.check_status==3)?_c('span',[_vm._v("审核未通过")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"sortable":"custom","prop":"hits","label":"点击量"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"发布时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("parseTime")(scope.row.create_time,'{y}-{m}-{d} {h}:{i}')))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"更新时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("parseTime")(scope.row.update_time,'{y}-{m}-{d} {h}:{i}')))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var information_Information = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/information/Information.vue
function injectStyle (ssrContext) {
  __webpack_require__("tio0")
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
  Information,
  information_Information,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_information_Information = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tio0":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4yNa");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("10299353", content, true);

/***/ })

});
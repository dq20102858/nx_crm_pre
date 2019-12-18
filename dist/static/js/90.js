webpackJsonp([90],{

/***/ "WQOR":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.userLists-tab[data-v-19dd4dc0] {\n  padding-top: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "iwuB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/CheckAll/index.vue + 2 modules
var CheckAll = __webpack_require__("cQ2w");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/912cms/baike.js
var baike = __webpack_require__("9j6o");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/baike/QuestionList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var QuestionList = ({
	name: "QuestionList",
	components: {
		CheckAll: CheckAll["a" /* default */],
		Refresh: Refresh["a" /* default */]
	},
	data: function data() {
		return {
			lists: [],
			total: 0,
			pagesize: 0,
			currentPage: 0,
			catelist1: [],
			catelist2: [],
			page: 1,
			last_page: 1,
			multipleSelection: "",
			num: 0,
			searchForm: {
				cate_id: null,
				sub_cate_id: null,
				sort: null
			},
			pickerOptions2: common["a" /* publicData */].pickerOptions2
		};
	},

	created: function created() {
		this.getList();
		this.getAskCateList();
	},
	methods: {
		handleSortChange: function handleSortChange(val) {
			if (!val.column) {
				return;
			}
			var obj = {
				answer_num: { ascending: 3, descending: 4 },
				zan_num: { ascending: 5, descending: 6 },
				ordid: { ascending: 1, descending: 2 },
				hits: { ascending: 7, descending: 8 }
			};
			this.searchForm.sort = obj[val.prop][val.order];
			this.getList();
		},
		changecate1: function changecate1() {
			var _this = this;

			this.searchForm.sub_cate_id = null;
			this.catelist1.map(function (item, index) {
				if (item.id == _this.searchForm.cate_id) {
					if (item.sub) {
						_this.catelist2 = item.sub;
					} else {
						_this.catelist2 = [];
					}
				}
			});
		},
		getAskCateList: function getAskCateList() {
			var _this2 = this;

			Object(baike["k" /* getAskCateList */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.catelist1 = data;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getList: function getList(type) {
			var _this3 = this;

			if (type == "search") this.page = 1;
			var data = {
				page: this.page,
				status: this.searchForm.status,
				keyword: this.searchForm.keyword,
				time_range: this.searchForm.time_range,
				is_rec: this.searchForm.is_rec,
				cate_id: this.searchForm.cate_id,
				sub_cate_id: this.searchForm.sub_cate_id,
				sort: this.searchForm.sort
			};
			this.request({
				url: "/ask/lists",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.lists = data.data;
					_this3.total = data.total;
					_this3.pagesize = data.per_page;
					_this3.currentPage = Number(data.current_page);
					_this3.last_page = data.last_page;
				} else {
					_this3.lists = [];
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getList();
		},
		handleSelectionChange: function handleSelectionChange(val) {
			this.multipleSelection = val;
			this.num = this.multipleSelection.length;
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
				}).catch(function () {
					_this4.$message({
						type: "info",
						message: "已取消删除"
					});
				});
			}
		},
		detail: function detail(index, row) {
			//跳转到详情页
			this.$router.push({ name: "QuestionEdit", params: { id: row.id } });
		},
		handleCreate: function handleCreate() {
			//跳转到详情页
			this.$router.push({ name: "QuestionEdit", params: { id: 0 } });
		},
		delrequest: function delrequest(id) {
			var _this5 = this;

			var data = {
				id: id
			};
			this.request({
				url: "/ask/delete",
				method: "get",
				params: data
			}).then(function (response) {
				if (response.data.status == 1) {
					_this5.num = 0;
					_this5.multipleSelection = [];
					_this5.$message({
						type: "success",
						message: "删除成功!"
					});
					id = "" + id;
					if (id.split(",").length == _this5.lists.length && _this5.page == _this5.last_page && _this5.page > 1) {
						_this5.page = _this5.page - 1;
					}
					_this5.getList();
				} else {
					_this5.$message({
						type: "error",
						message: response.data.msg
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		deleted: function deleted(index, row) {
			var _this6 = this;

			this.$confirm("此操作将永久删除选中数据, 是否继续?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this6.delrequest(row.id);
			}).catch(function () {
				_this6.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-19dd4dc0","hasScoped":true,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/baike/QuestionList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.searchForm,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/标题/内容"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"通过","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"待审","value":"-1"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("是否推荐：")]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.is_rec),callback:function ($$v) {_vm.$set(_vm.searchForm, "is_rec", $$v)},expression:"searchForm.is_rec"}},[_c('el-option',{attrs:{"label":"推荐","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"不推荐","value":"0"}})],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("选择分类：")]),_vm._v(" "),_c('el-select',{attrs:{"clearable":""},on:{"change":_vm.changecate1},model:{value:(_vm.searchForm.cate_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "cate_id", $$v)},expression:"searchForm.cate_id"}},_vm._l((_vm.catelist1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})),_vm._v(" "),(_vm.searchForm.cate_id&&this.catelist2.length>0)?_c('el-select',{attrs:{"clearable":""},model:{value:(_vm.searchForm.sub_cate_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "sub_cate_id", $$v)},expression:"searchForm.sub_cate_id"}},_vm._l((_vm.catelist2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})):_vm._e(),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("发布时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.getList('search')}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{ref:"multipleTable",staticClass:"userLists-tab",attrs:{"data":_vm.lists},on:{"sort-change":_vm.handleSortChange,"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"80"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"标题","show-overflow-tooltip":true},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.title)?_c('span',[_vm._v(_vm._s(scope.row.title))]):_c('span',[_vm._v("—— ——")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"answer_num","sortable":"","label":"回答数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"zan_num","sortable":"","label":"点赞数"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"添加时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ordid","sortable":"","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("通过")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待审")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否推荐"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.is_rec==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("推荐")]):_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("不推荐")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"hits","label":"点击次数","sortable":""}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.detail(scope.$index, scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.deleted(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('check-all',{directives:[{name:"show",rawName:"v-show",value:(_vm.lists.length>0),expression:"lists.length>0"}],attrs:{"table-name":"multipleTable","list":_vm.lists,"delete-all":_vm.deleteAll,"num":_vm.num}}),_vm._v(" "),(_vm.lists.length>0)?_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var baike_QuestionList = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/baike/QuestionList.vue
function injectStyle (ssrContext) {
  __webpack_require__("utmN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19dd4dc0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  QuestionList,
  baike_QuestionList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_baike_QuestionList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "utmN":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("WQOR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("c59f195c", content, true);

/***/ })

});
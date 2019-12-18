webpackJsonp([97],{

/***/ "/9gD":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ktUK");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("10f9e9c8", content, true);

/***/ }),

/***/ "ktUK":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "lYyk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/users/UsersList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var UsersList = ({
	name: "UsersList",
	components: {
		Refresh: Refresh["a" /* default */]
	},
	data: function data() {
		return {
			userLists: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			currentPage: 0,
			page: 1,
			last_page: 1,
			searchForm: {},
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			role_id: 0,
			agentLists: [],
			multipleSelection: [],
			status: 1
		};
	},

	created: function created() {
		var _this = this;

		this.fetchUsersLists();
		Object(common["b" /* queryAgentList */])(function (p) {
			_this.agentLists = p;
		});
	},
	methods: {
		fetchUsersLists: function fetchUsersLists(param) {
			var _this2 = this;

			if (param) {
				this.page = 1;
			}
			Object(users["f" /* fetchUsersLists */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.userLists = data.data;
					_this2.total = data.total;
					_this2.pagesize = data.per_page;
					_this2.currentPage = Number(data.current_page);
					_this2.last_page = data.last_page;
					_this2.role_id = data.role_id;
					if (typeof _this2.searchForm.status == "undefined" || _this2.searchForm.status == "") {
						_this2.status = 1;
					} else {
						_this2.status = _this2.searchForm.status;
					}
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		queryAgentList: function queryAgentList() {
			var _this3 = this;

			_queryAgentList().then(function (response) {
				_this3.agentLists = response.data.data;
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleEdit: function handleEdit(index, row) {
			//跳转到详情页
			// setUserId(row.id);
			this.$router.push({
				name: "UserDetail",
				params: { id: row.id }
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this4 = this;

			this.$confirm("你确定要删除此客户的信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this4.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(users["b" /* delUser */])(row.id).then(function (response) {
						_this4.fetchUsersLists();
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
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.fetchUsersLists();
		},
		handleSelectionChange: function handleSelectionChange(val) {
			var _ = this;
			_.multipleSelection = [];
			val.forEach(function (item) {
				_.multipleSelection.push(item.id);
			});
		},
		distribute: function distribute() {
			var _this5 = this;

			if (!this.searchForm.agent_id) {
				this.$message({
					type: "warning",
					message: "请选择业务员!",
					duration: 2 * 1000
				});
				return false;
			}
			if (this.multipleSelection == false) {
				this.$message({
					type: "warning",
					message: "请选择要重新分配的客户!",
					duration: 2 * 1000
				});
				return false;
			}
			var data = {
				ids: this.multipleSelection,
				agent_id: this.searchForm.agent_id
			};
			Object(users["d" /* distribute */])(data).then(function (response) {
				if (response.data.status) {
					_this5.fetchUsersLists();
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0dc00a7a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/users/UsersList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('div',{staticClass:"router-link"},[_c('router-link',{attrs:{"to":{name:'addUsers'}}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"id":"searchForm","size":"small"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_vm._v(" "),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/姓名/联系方式"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("状态：")]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"待确认","value":"-1"}},[_vm._v(" 待确认")]),_vm._v(" "),_c('el-option',{attrs:{"label":"有效客户","value":"1"}},[_vm._v(" 有效客户")]),_vm._v(" "),_c('el-option',{attrs:{"label":"无效客户","value":"0"}},[_vm._v(" 无效客户")])],1),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.fetchUsersLists(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.userLists},on:{"selection-change":_vm.handleSelectionChange}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"客户姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"contact_phone","label":"联系方式"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==-1)?_c('span',[_vm._v("待确认")]):(scope.row.status==1)?_c('span',[_vm._v("有效客户")]):(scope.row.status==0)?_c('span',[_vm._v("无效客户")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"备注"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap","cursor":"pointer"},attrs:{"title":scope.row.remark}},[_vm._v(_vm._s(scope.row.remark))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row)}}},[_vm._v("详情")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var users_UsersList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/users/UsersList.vue
function injectStyle (ssrContext) {
  __webpack_require__("/9gD")
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
  UsersList,
  users_UsersList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_users_UsersList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
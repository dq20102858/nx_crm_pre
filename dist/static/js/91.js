webpackJsonp([91],{

/***/ "IIXb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "Q3up":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/activity/index.js



function activity_getActivityList(page, params) {
    return Object(request["a" /* default */])({
        url: '/activity/lists',
        method: 'get',
        params: extends_default()({ page: page }, params)
    });
}

function activity_addActivity(data) {

    return Object(request["a" /* default */])({
        url: '/activity/addDo',
        method: 'post',
        data: data
    });
}

function activity_editActivity(data) {

    return Object(request["a" /* default */])({
        url: '/activity/editDo',
        method: 'post',
        data: data
    });
}
// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/collect/activitiesManage.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var activitiesManage = ({
	components: {
		Refresh: Refresh["a" /* default */]
	},
	data: function data() {
		return {
			activityList: [], //列表页的数据
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
			status: 1,
			temp: {
				name: '',
				status: ''
			},
			dialogFormVisible: false,
			dialogStatus: "",
			textMap: {
				update: "编辑活动",
				create: "新增活动"
			},
			dialogPvVisible: false,
			rules: {}
		};
	},

	created: function created() {
		this.getActivityList();
	},
	methods: {
		handleCreate: function handleCreate() {
			var _this = this;

			this.resetTemp();
			this.dialogStatus = "create";
			this.dialogFormVisible = true;
			this.$nextTick(function () {
				_this.$refs["dataForm"].clearValidate();
			});
		},
		resetTemp: function resetTemp() {
			this.temp = {
				name: '',
				status: ''
			};
		},
		handleUpdate: function handleUpdate(row) {
			var _this2 = this;

			row.status = String(row.status);
			this.temp = assign_default()({}, row); // copy obj
			this.dialogStatus = "update";
			this.dialogFormVisible = true;
			this.$nextTick(function () {
				_this2.$refs["dataForm"].clearValidate();
			});
		},
		getActivityList: function getActivityList(param) {
			var _this3 = this;

			if (param) {
				this.page = 1;
			}
			activity_getActivityList(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.activityList = data.data;
					// this.total = data.total;
					// this.pagesize = data.per_page;
					// this.currentPage = data.current_page;
					// this.last_page = data.last_page;
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
		addActivity: function addActivity() {
			activity_addActivity(this.temp);
			this.dialogFormVisible = false;
			this.getActivityList();
		},
		editActivity: function editActivity() {
			delete this.temp.createTime;
			activity_editActivity(this.temp);
			this.dialogFormVisible = false;
			this.getActivityList();
		},
		handleEdit: function handleEdit(index, row) {
			//跳转到详情页
			Object(auth["n" /* setUserId */])(row.id);
			this.$router.push({ name: "userDetail", query: { id: row.id } });
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
					onClose: delUser(row.id).then(function (response) {
						_this4.getActivityList();
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-16128baa","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/collect/activitiesManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',{attrs:{"label":""}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"活动ID/活动名称"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"活动状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"未启动","value":"0"}},[_vm._v(" 未启动")]),_vm._v(" "),_c('el-option',{attrs:{"label":"进行中","value":"1"}},[_vm._v(" 进行中")]),_vm._v(" "),_c('el-option',{attrs:{"label":"已结束","value":"2"}},[_vm._v(" 已结束")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getActivityList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增活动")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.activityList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"客户姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==0)?_c('span',[_vm._v("未启动")]):(scope.row.status==1)?_c('span',[_vm._v("进行中")]):(scope.row.status==2)?_c('span',[_vm._v("已结束")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createTime","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event}}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"35%","title":_vm.textMap[_vm.dialogStatus],"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"dataForm",staticStyle:{"width":"90%"},attrs:{"rules":_vm.rules,"model":_vm.temp,"label-position":"right","label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"活动名称"}},[_c('el-input',{attrs:{"placeholder":"请输入活动名称"},model:{value:(_vm.temp.name),callback:function ($$v) {_vm.$set(_vm.temp, "name", $$v)},expression:"temp.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动状态","prop":"type"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择活动状态"},model:{value:(_vm.temp.status),callback:function ($$v) {_vm.$set(_vm.temp, "status", $$v)},expression:"temp.status"}},[_c('el-option',{attrs:{"label":"未启动","value":"0"}},[_vm._v(" 未启动")]),_vm._v(" "),_c('el-option',{attrs:{"label":"进行中","value":"1"}},[_vm._v(" 进行中")]),_vm._v(" "),_c('el-option',{attrs:{"label":"已结束","value":"2"}},[_vm._v(" 已结束")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogStatus==='create'?_vm.addActivity():_vm.editActivity()}}},[_vm._v("提交")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var collect_activitiesManage = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/collect/activitiesManage.vue
function injectStyle (ssrContext) {
  __webpack_require__("qwHA")
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
  activitiesManage,
  collect_activitiesManage,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_collect_activitiesManage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qwHA":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("IIXb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("3228222c", content, true);

/***/ })

});
webpackJsonp([46],{

/***/ "8Rrl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/information.js
var information = __webpack_require__("O6uv");

// EXTERNAL MODULE: ./src/api/912cms/notify.js
var notify = __webpack_require__("KRdt");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/notify/Notify.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Notify = ({
	name: "Notify",
	data: function data() {
		return {
			tabs: [],
			activeName: 0,
			filter: {},
			multipleSelection: [],
			notifyList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				status: null,
				read: null,
				time_range: null
			},
			cates: null,
			cate_childs: null,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			rules: {}
		};
	},

	created: function created() {
		var _this = this;

		Object(notify["b" /* getFilter */])().then(function (res) {
			if (res.data.data) {
				_this.filter = res.data.data;
			}
		});
		this.getNotifyNum();
		this.getNotifyList();
	},
	methods: {
		getNotifyNum: function getNotifyNum() {
			var _this2 = this;

			Object(notify["d" /* getNotifyNum */])().then(function (res) {
				if (res.data.data) {
					_this2.tabs = res.data.data;
				}
			});
		},
		markReaded: function markReaded(row) {
			var _this3 = this;

			if (row && row.id) {
				if (row.read == 1) {
					Object(notify["e" /* markReaded */])(row.id, this.activeName + 1).then(function (res) {
						if (res.data.status == 1) {
							row.read = 2;
							row.opened = !row.opened;
							_this3.getNotifyNum();
						} else {
							_this3.$message({
								message: response.data.msg,
								type: "warning"
							});
						}
					});
				} else {
					row.opened = !row.opened;
				}

				return;
			}
			if (!this.multipleSelection || this.multipleSelection.length < 1) {
				this.$message({
					message: "请至少选择一条数据",
					type: "warning"
				});
				return;
			}
			Object(notify["e" /* markReaded */])(this.multipleSelection.join(), this.activeName + 1).then(function (res) {
				if (res.data.status == 1) {
					_this3.$message({
						message: "标记已读成功～",
						type: "success"
					});
					_this3.getNotifyNum();
					_this3.getNotifyList();
				} else {
					_this3.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			});
		},
		questionDetailLink: function questionDetailLink(id) {
			//跳转到详情页
			this.$router.push({ name: "QuestionEdit", params: { id: id } });
		},
		handleSelectionChange: function handleSelectionChange(val) {
			this.multipleSelection = val.map(function (item) {
				return item.id;
			});
		},
		handleClick: function handleClick(tab, event) {
			this.activeName = tab;
			this.page = 1;
			this.getNotifyList();
		},
		handleSortChange: function handleSortChange(val) {
			if (!val.column) {
				return;
			}
			var obj = { ascending: 1, descending: 2 };
			this.searchForm.order = obj[val.order];
			this.getNotifyList();
		},
		getList: function getList() {
			this.page = 1;
			this.getNotifyList();
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getNotifyList();
		},
		getNotifyList: function getNotifyList() {
			var _this4 = this;

			Object(notify["c" /* getNotifyList */])(this.page, this.searchForm, this.activeName + 1).then(function (response) {
				var data = response.data.data;
				if (data) {
					data.data.map(function (item) {
						return item.opened = false;
					});
					_this4.notifyList = data.data;
					_this4.total = data.total;
					_this4.pagesize = data.per_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this5 = this;

			if (!this.multipleSelection || this.multipleSelection.length < 1) {
				this.$message({
					message: "请至少选择一条数据",
					type: "warning"
				});
				return;
			}
			this.$confirm("您确定要删除吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this5.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(notify["a" /* delNotify */])(_this5.multipleSelection.join(), _this5.activeName + 1).then(function (res) {
						if (res.data.status == 1) {
							_this5.$message({
								message: "删除读成功～",
								type: "success"
							});
						} else {
							_this5.$message({
								message: response.data.msg,
								type: "warning"
							});
						}
						_this5.getNotifyList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this5.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d6c6cd7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/notify/Notify.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notify",staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"消息读取状态"},model:{value:(_vm.searchForm.read),callback:function ($$v) {_vm.$set(_vm.searchForm, "read", $$v)},expression:"searchForm.read"}},_vm._l((_vm.filter.read),function(item){return _c('el-option',{key:'read'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"消息处理状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},_vm._l((_vm.filter.status),function(item){return _c('el-option',{key:'read'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getNotifyList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('div',{staticClass:"el-tabs el-tabs--top"},[_c('div',{staticClass:"el-tabs__header is-top"},[_c('div',{staticClass:"el-tabs__nav-wrap is-top"},[_c('div',{staticClass:"el-tabs__nav-scroll"},[_c('div',{staticClass:"el-tabs__nav is-top",staticStyle:{"transform":"translateX(0px)"},attrs:{"role":"tablist"}},[_c('div'),_vm._v(" "),_vm._l((_vm.tabs),function(item,index){return _c('div',{key:index,class:['el-tabs__item', 'is-top', {'is-active':_vm.activeName==index}],attrs:{"id":'tab-'+index,"role":"tab"},on:{"click":function($event){_vm.handleClick(index)}}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.name)+"\n\t\t\t\t\t\t\t"),(item.num>0)?_c('span',{staticClass:"num-tag"},[_vm._v(_vm._s(item.num))]):_vm._e()])})],2),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}},[_c('el-button',{attrs:{"size":"small","icon":"el-icon-view"},on:{"click":function($event){_vm.markReaded(_vm.searchForm)}}},[_vm._v("标为已读")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","icon":"el-icon-delete"},on:{"click":_vm.handleDelete}},[_vm._v("删除")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"el-tabs__content"},[_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.notifyList},on:{"selection-change":_vm.handleSelectionChange,"sort-change":_vm.handleSortChange}},[_c('el-table-column',{attrs:{"type":"selection","class-name":"checkbox-td","width":"30"}},[_vm._v("全选")]),_vm._v(" "),_c('el-table-column',{attrs:{"label":"全选"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',[(scope.row.read===1)?_c('span',{staticClass:"notify-tag-noread"},[_vm._v("未读")]):_vm._e(),_vm._v(" "),(scope.row.read===2)?_c('span',{staticClass:"notify-tag-readed"},[_vm._v("已读")]):_vm._e(),_vm._v(" "),_c('span',{staticStyle:{"font-size":"15px","font-weight":"bold"}},[_vm._v(_vm._s(scope.row.title))]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!scope.row.opened),expression:"!scope.row.opened"}],on:{"click":function($event){_vm.markReaded(scope.row)}}},[_c('span',{staticClass:"el-table__expand-icon "},[_vm._v("点击查看 "),_c('i',{staticClass:"el-icon el-icon-arrow-down"})])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(scope.row.opened),expression:"scope.row.opened"}],staticStyle:{"margin-top":"10px","font-size":"13px","padding-left":"42px"}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(scope.row.desc)),_c('a',{staticClass:"question-link",on:{"click":function($event){_vm.questionDetailLink(scope.row.desc_id)}}},[_vm._v(_vm._s(_vm.activeName==0?'快去回复吧':'快去审核吧'))]),_vm._v("！\n\t\t\t\t\t\t\t"),_c('div',{directives:[{name:"show",rawName:"v-show",value:(scope.row.opened),expression:"scope.row.opened"}],on:{"click":function($event){scope.row.opened=!scope.row.opened}}},[_c('span',{staticClass:"el-table__expand-icon",staticStyle:{"margin-left":"0"}},[_vm._v("收起 "),_c('i',{staticClass:"el-icon el-icon-arrow-up",staticStyle:{"margin-left":"0"}})])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"width":"160"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(scope.row.create_time))])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var notify_Notify = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/notify/Notify.vue
function injectStyle (ssrContext) {
  __webpack_require__("fdN3")
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
  Notify,
  notify_Notify,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_notify_Notify = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fdN3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("kLlM");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("8b4b95aa", content, true);

/***/ }),

/***/ "kLlM":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.notify .el-table-column--selection .cell {\n  padding: 0;\n}\n.notify .notify-tag-noread {\n  background: #409eff;\n  color: #fff;\n  border-radius: 2px;\n  margin-right: 5px;\n  font-size: 12px;\n  padding: 2px 5px;\n}\n.notify .notify-tag-readed {\n  background: #cbcbcc;\n  color: #fff;\n  border-radius: 2px;\n  margin-right: 5px;\n  font-size: 12px;\n  padding: 2px 5px;\n}\n.notify .el-table__expand-icon {\n  color: #409eff;\n  margin-left: 10px;\n}\n.notify .el-table__expand-icon > .el-icon {\n  font-weight: bold;\n  left: 110%;\n}\n.notify .el-tabs__item {\n  padding: 0;\n  margin: 0 20px;\n}\n.notify .el-tabs__item.is-active {\n  border-bottom: 2px solid #409eff;\n}\n.notify .el-tabs--top .el-tabs__item.is-top:nth-child(2) {\n  margin-left: 0;\n}\n.notify .el-tabs--top .el-tabs__item.is-top:last-child {\n  margin-right: 0;\n}\n.notify .num-tag {\n  display: inline-block;\n  border-radius: 9px;\n  min-width: 18px;\n  padding: 0 5px;\n  height: 18px;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  background: red;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 30px;\n}\n.notify .checkbox-td {\n  vertical-align: top;\n}\n.notify .checkbox-td .cell {\n    padding: 0;\n}\n.notify .question-link {\n  color: #409eff;\n  margin: 0 10px;\n}\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ })

});
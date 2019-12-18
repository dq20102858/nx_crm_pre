webpackJsonp([43],{

/***/ "+4JN":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.custom-tree-node {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n.custom-tree-node a {\n    font-size: 9px;\n}\n.el-tree-node {\n  border-top: 1px solid #eee;\n}\n.el-tree-node__content {\n  height: 34px;\n}\n", ""]);

// exports


/***/ }),

/***/ "gBNd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("+4JN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6b6ed76a", content, true);

/***/ }),

/***/ "sHXH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./src/api/912cms/authority.js
var authority = __webpack_require__("N5GM");

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/array/from.js
var from = __webpack_require__("c/Tr");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./src/components/TreeTable/eval.js
/**
 * @Author: jianglei
 * @Date:   2017-10-12 12:06:49
 */




function treeToArray(data, expandAll) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var tmp = [];
  from_default()(data).forEach(function (record) {
    if (record._expanded === undefined) {
      vue_esm["default"].set(record, '_expanded', expandAll);
    }
    var _level = 1;
    if (level !== undefined && level !== null) {
      _level = level + 1;
    }
    vue_esm["default"].set(record, '_level', _level);
    // 如果有父元素
    if (parent) {
      vue_esm["default"].set(record, 'parent', parent);
    }
    tmp.push(record);
    if (record.children && record.children.length > 0) {
      var children = treeToArray(record.children, expandAll, record, _level);
      tmp = tmp.concat(children);
    }
  });
  return tmp;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/authority/menuList.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var id = 1000;
/* harmony default export */ var menuList = ({
	name: "MenuList",
	data: function data() {
		return {
			data4: [],
			searchForm: {
				systemId: 1
			},

			temp: {
				pid: "0",
				moduleTitle: "",
				moduleUrl: "",
				moduleName: "",
				moduleIcon: "",
				moduleSort: "",
				noCache: 1,
				moduleActionName: "",
				moduleHide: 0
			},
			dialogFormVisible: false,
			rules: {}
		};
	},

	computed: {
		// 格式化下拉菜单数据源
		formatData: function formatData() {
			// let tmp;
			// if (!Array.isArray(this.data4)) {
			// 	tmp = [this.data4];
			// } else {
			// 	tmp = this.data4;
			// }
			// const args = [tmp, true];
			// console.log(treeToArray.apply(null, args));
			// return treeToArray.apply(null, args);
			var tmp = void 0;
			if (!Array.isArray(this.data4)) {
				tmp = [JSON.parse(stringify_default()(this.data4))];
			} else {
				tmp = JSON.parse(stringify_default()(this.data4));
			}
			var args = [tmp, true];
			return treeToArray.apply(null, args);
		}
	},
	created: function created() {
		this.getList();
	},

	methods: {
		getList: function getList() {
			var _this = this;

			this.listLoading = true;
			Object(authority["i" /* fetchMenuAjax */])(this.searchForm).then(function (response) {
				_this.data4 = JSON.parse(stringify_default()(response.data.data.data));
				_this.listLoading = false;
			});
		},
		resetTemp: function resetTemp() {
			this.temp = {
				pid: "0",
				moduleTitle: "",
				moduleUrl: "",
				moduleName: "",
				moduleIcon: "",
				moduleSort: "",
				noCache: 1,
				moduleActionName: "",
				moduleHide: 0
			};
		},
		optionItem: function optionItem(item, i) {
			var element = "";
			if (item._level === 1) {
				return " " + item.moduleTitle;
			}

			if (i === this.formatData.length - 1) {
				for (var index = 0; index < item._level - 1; index++) {
					element += " └ ";
				}
			} else {
				for (var _index = 0; _index < item._level - 1; _index++) {
					element += " │";
				}
			}
			if (i === this.formatData.length - 1 || this.formatData[i + 1] && this.formatData[i + 1].pid === 0) {
				return element + " └ " + item.moduleTitle;
			}
			return element + " ├ " + item.moduleTitle;
		},
		handleCreate: function handleCreate(data) {
			this.resetTemp();
			if (data) {
				this.temp.pid = data.id;
			}
			this.dialogStatus = "create";
			this.dialogFormVisible = true;
		},
		createData: function createData() {
			var _this2 = this;

			this.$refs["dataForm"].validate(function (valid) {
				if (valid) {
					Object(authority["b" /* addMenuAjax */])(extends_default()({}, _this2.temp, {
						systemId: _this2.searchForm.systemId
					})).then(function () {
						// this.list.unshift(this.temp);
						_this2.dialogFormVisible = false;
						_this2.$notify({
							title: "成功",
							message: "创建成功",
							type: "success",
							duration: 2000
						});
						_this2.getList();
					});
				}
			});
		},
		handleUpdate: function handleUpdate(node, data) {
			var _this3 = this;

			this.temp = assign_default()({}, data); // copy obj
			this.dialogStatus = "update";
			this.dialogFormVisible = true;
			this.$nextTick(function () {
				_this3.$refs["dataForm"].clearValidate();
			});
		},
		updateData: function updateData() {
			var _this4 = this;

			this.$refs["dataForm"].validate(function (valid) {
				if (valid) {
					var tempData = assign_default()({}, _this4.temp);
					Object(authority["m" /* updateMenuAjax */])(tempData).then(function () {
						_this4.dialogFormVisible = false;
						_this4.$notify({
							title: "成功",
							message: "更新成功",
							type: "success",
							duration: 2000
						});
						_this4.getList();
					});
				}
			});
		},
		append: function append(data) {
			var newChild = { id: id++, label: "testtest", children: [] };
			if (!data.children) {
				this.$set(data, "children", []);
			}
			data.children.push(newChild);
		},
		remove: function remove(node, data) {
			// const parent = node.parent;
			// const children = parent.childNodes || parent;
			// const index = children.findIndex(d => d.id === data.id);
			// children.splice(index, 1);
		},
		renderContent: function renderContent(h, _ref) {
			var _this5 = this;

			var node = _ref.node,
			    data = _ref.data,
			    store = _ref.store;

			return h(
				"span",
				{ "class": "custom-tree-node" },
				[data.pid === 0 ? h(
					"span",
					{ style: "width:120px;font-weight:bold;color:#1e2a6d;" },
					[data.moduleTitle]
				) : data.moduleHide === 0 ? h(
					"span",
					{ style: "width:120px;color:#1e2a6d;" },
					[data.moduleTitle]
				) : h(
					"em",
					{ style: "width:120px;" },
					[data.moduleTitle]
				), h(
					"span",
					null,
					[data.pid === 0 ? h(
						"b",
						{ style: "color:#1e2a6d;font-size:15px;" },
						[data.moduleSort]
					) : h(
						"span",
						{ style: "color: #1e2a6d;" },
						[data.moduleSort]
					)]
				), h(
					"span",
					null,
					[data.pid === 0 && h(
						"el-button",
						{
							attrs: {
								type: "primary",
								size: "mini"
							},
							on: {
								"click": function click() {
									return _this5.handleCreate(data);
								}
							}
						},
						["\u6DFB\u52A0\u5B50\u83DC\u5355"]
					), h(
						"el-button",
						{
							attrs: {
								type: "warning",
								size: "mini"
							},
							on: {
								"click": function click() {
									return _this5.handleUpdate(node, data);
								}
							}
						},
						["\u7F16\u8F91"]
					), h(
						"el-button",
						{
							attrs: {
								type: "danger",
								size: "mini"
							},
							on: {
								"click": function click() {
									return _this5.handleDelete(node, data);
								}
							}
						},
						["\u5220\u9664"]
					)]
				)]
			);
		},
		handleDelete: function handleDelete(node, row) {
			var _this6 = this;

			this.$confirm("确认删除该条数据吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				Object(authority["f" /* delMenuAjax */])(row).then(function (res) {
					// const index = this.list.indexOf(row);
					// this.list.splice(index, 1);
					if (res.data.data && res.data.data.length < 1) {
						_this6.$message({
							message: "删除失败",
							type: "error",
							duration: 5 * 1000
						});
					}
					_this6.$notify({
						title: "成功",
						message: "删除成功",
						type: "success",
						duration: 2000
					});
					_this6.getList();
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-99340632","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/authority/menuList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"placeholder":"系统"},on:{"change":_vm.getList},model:{value:(_vm.searchForm.systemId),callback:function ($$v) {_vm.$set(_vm.searchForm, "systemId", $$v)},expression:"searchForm.systemId"}},[_c('el-option',{attrs:{"label":"912租房网","value":1}},[_vm._v(" 912租房网")]),_vm._v(" "),_c('el-option',{attrs:{"label":"房鲸灵","value":2}},[_vm._v(" 房鲸灵")]),_vm._v(" "),_c('el-option',{attrs:{"label":"912CMS","value":3}},[_vm._v(" 912CMS")])],1)],1),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增菜单")])],1),_vm._v(" "),_c('div',{staticClass:"custom-tree-container"},[_c('div',{staticClass:"block"},[_c('el-tree',{attrs:{"data":_vm.data4,"expand-on-click-node":false,"render-content":_vm.renderContent,"node-key":"id"}})],1)]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogFormVisible,"title":"新增菜单","width":"40%"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"dataForm",staticStyle:{"width":"400px"},attrs:{"rules":_vm.rules,"model":_vm.temp,"label-position":"right","label-width":"100px"}},[_c('el-form-item',{staticClass:"menu-selsect",attrs:{"label":"上级菜单","prop":"title"}},[_c('el-select',{model:{value:(_vm.temp.pid),callback:function ($$v) {_vm.$set(_vm.temp, "pid", $$v)},expression:"temp.pid"}},[_c('el-option',{key:"0",attrs:{"value":0,"label":"一级菜单"}},[_vm._v("一级菜单")]),_vm._v(" "),_vm._l((_vm.formatData),function(item,index){return _c('el-option',{key:item.id,attrs:{"label":item.moduleTitle,"value":item.id}},[_vm._v(_vm._s(_vm.optionItem(item, index)))])})],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"菜单名称","prop":"title"}},[_c('el-input',{model:{value:(_vm.temp.moduleTitle),callback:function ($$v) {_vm.$set(_vm.temp, "moduleTitle", $$v)},expression:"temp.moduleTitle"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"路径地址","prop":"title"}},[_c('el-input',{model:{value:(_vm.temp.moduleUrl),callback:function ($$v) {_vm.$set(_vm.temp, "moduleUrl", $$v)},expression:"temp.moduleUrl"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"ICON","prop":"title"}},[_c('el-input',{model:{value:(_vm.temp.moduleIcon),callback:function ($$v) {_vm.$set(_vm.temp, "moduleIcon", $$v)},expression:"temp.moduleIcon"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组件地址","prop":"title"}},[_c('el-input',{model:{value:(_vm.temp.moduleActionName),callback:function ($$v) {_vm.$set(_vm.temp, "moduleActionName", $$v)},expression:"temp.moduleActionName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"组件名称","prop":"title"}},[_c('el-input',{model:{value:(_vm.temp.moduleName),callback:function ($$v) {_vm.$set(_vm.temp, "moduleName", $$v)},expression:"temp.moduleName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序","prop":"title"}},[_c('el-input',{model:{value:(_vm.temp.moduleSort),callback:function ($$v) {_vm.$set(_vm.temp, "moduleSort", $$v)},expression:"temp.moduleSort"}})],1),_vm._v(" "),(_vm.temp.pid!==0)?_c('el-form-item',{attrs:{"label":"页面不缓存"}},[_c('el-radio-group',{model:{value:(_vm.temp.noCache),callback:function ($$v) {_vm.$set(_vm.temp, "noCache", $$v)},expression:"temp.noCache"}},[_c('el-radio',{attrs:{"label":0,"value":0,"border":""}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1,"value":1,"border":""}},[_vm._v("是")])],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"菜单隐藏"}},[_c('el-radio-group',{model:{value:(_vm.temp.moduleHide),callback:function ($$v) {_vm.$set(_vm.temp, "moduleHide", $$v)},expression:"temp.moduleHide"}},[_c('el-radio',{attrs:{"label":0,"value":0,"border":""}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1,"value":1,"border":""}},[_vm._v("是")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogStatus==='create'?_vm.createData():_vm.updateData()}}},[_vm._v("确定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var authority_menuList = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/authority/menuList.vue
function injectStyle (ssrContext) {
  __webpack_require__("gBNd")
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
  menuList,
  authority_menuList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_authority_menuList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
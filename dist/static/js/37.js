webpackJsonp([37],{

/***/ "F/xA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/common/common.js
var common_common = __webpack_require__("Kw+B");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/sale/salefactory/Salefactory.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Salefactory = ({
	name: "Salefactory",
	data: function data() {
		return {
			officeList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				area: null,
				area2: null,
				house_type: 73
			},
			roles: [],
			agents: [],
			areas: null,
			loading: false,
			districts: null,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			work_price: [{ id: 1, name: "3500元/㎡以下", value: [0, 3500] }, { id: 2, name: "3500-4500元/㎡", value: [3500, 4500] }, { id: 3, name: "4500-5500元/㎡", value: [4500, 5500] }, { id: 4, name: "5500-6500元/㎡", value: [5500, 6500] }, { id: 5, name: "6500-8000元/㎡", value: [6500, 8000] }, { id: 6, name: "8000元/㎡以上", value: 10000 }, { id: 0, name: "价格输入", value: 40000 }],
			work_mianji: [{ id: 1, name: "300㎡以下", value: [0, 300] }, { id: 2, name: "300-600㎡", value: [300, 600] }, { id: 3, name: "600-1000㎡", value: [600, 1000] }, { id: 4, name: "1000-1500㎡", value: [1000, 1500] }, { id: 5, name: "1500㎡以上", value: 10000 }, { id: 0, name: "面积输入", value: 40000 }],
			rules: {}
		};
	},

	created: function created() {
		this.getAreaLists();
		this.getFactoryList();
		this.changeAgents();
	},
	methods: {
		handleSortChange: function handleSortChange(val) {
			if (!val.column) {
				return;
			}
			var obj = {
				ordid: { ascending: 2, descending: 1 }
			};
			this.searchForm.sort = obj[val.prop][val.order];
			this.getFactoryList();
		},
		changeAgents: function changeAgents() {
			var _this = this;

			Object(common_common["b" /* changeAgents */])(this.searchForm.role).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.roles = data.roles;
					_this.agents = data.lists;
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
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getFactoryList();
		},
		getAreaLists: function getAreaLists() {
			var _this2 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.areas = data;
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
		changeArea: function changeArea() {
			var _this3 = this;

			this.searchForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.searchForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.districts = data;
				} else {
					_this3.$message({
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
				name: "SalefactoryDetail",
				params: { id: 0 }
			});
		},
		handleUpdate: function handleUpdate(row) {
			//跳转到详情页
			this.$router.push({
				name: "SalefactoryDetail",
				params: { id: row.id }
			});
		},
		getFactoryList: function getFactoryList(param) {
			var _this4 = this;

			if (param) {
				this.page = 1;
			}
			Object(house["D" /* getFactoryList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.officeList = data.data;
					_this4.total = data.total;
					_this4.pagesize = Number(data.per_page);
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
			var _this5 = this;

			this.$confirm("你确定要删除此厂房的信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this5.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(house["e" /* delHouse */])({
						ids: String(row.id),
						type: 3
					}).then(function (response) {
						_this5.getFactoryList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b0a9572a","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/sale/salefactory/Salefactory.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.title),callback:function ($$v) {_vm.$set(_vm.searchForm, "title", $$v)},expression:"searchForm.title"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"房源类型"},model:{value:(_vm.searchForm.agent_flag),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent_flag", $$v)},expression:"searchForm.agent_flag"}},[_c('el-option',{attrs:{"label":"经纪人房源","value":"1"}},[_vm._v(" 经纪人房源")]),_vm._v(" "),_c('el-option',{attrs:{"label":"自营房源","value":"0"}},[_vm._v(" 自营房源")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"区域"},on:{"change":_vm.changeArea},model:{value:(_vm.searchForm.area),callback:function ($$v) {_vm.$set(_vm.searchForm, "area", $$v)},expression:"searchForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"街道"},model:{value:(_vm.searchForm.area2),callback:function ($$v) {_vm.$set(_vm.searchForm, "area2", $$v)},expression:"searchForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"角色"},on:{"change":_vm.changeAgents},model:{value:(_vm.searchForm.role),callback:function ($$v) {_vm.$set(_vm.searchForm, "role", $$v)},expression:"searchForm.role"}},_vm._l((_vm.roles),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"发布人","clearable":"","reserve-keyword":"","filterable":"","loading":_vm.loading},model:{value:(_vm.searchForm.agent),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent", $$v)},expression:"searchForm.agent"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"价格"},model:{value:(_vm.searchForm.price_selected),callback:function ($$v) {_vm.$set(_vm.searchForm, "price_selected", $$v)},expression:"searchForm.price_selected"}},_vm._l((_vm.work_price),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.price_selected===0)?_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最小价格"},model:{value:(_vm.searchForm.min_price),callback:function ($$v) {_vm.$set(_vm.searchForm, "min_price", $$v)},expression:"searchForm.min_price"}}),_vm._v(" -\n\t\t\t"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最大价格"},model:{value:(_vm.searchForm.max_price),callback:function ($$v) {_vm.$set(_vm.searchForm, "max_price", $$v)},expression:"searchForm.max_price"}}),_vm._v(" 万元\n\t\t")],1):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"面积"},model:{value:(_vm.searchForm.area_selected),callback:function ($$v) {_vm.$set(_vm.searchForm, "area_selected", $$v)},expression:"searchForm.area_selected"}},_vm._l((_vm.work_mianji),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.area_selected===0)?_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最小面积"},model:{value:(_vm.searchForm.min_mianji),callback:function ($$v) {_vm.$set(_vm.searchForm, "min_mianji", $$v)},expression:"searchForm.min_mianji"}}),_vm._v(" -\n\t\t\t"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最大面积"},model:{value:(_vm.searchForm.max_mianji),callback:function ($$v) {_vm.$set(_vm.searchForm, "max_mianji", $$v)},expression:"searchForm.max_mianji"}}),_vm._v(" ㎡\n\t\t")],1):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"待审","value":"-1"}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"通过","value":"1"}},[_vm._v(" 通过")]),_vm._v(" "),_c('el-option',{attrs:{"label":"不通过","value":"2"}},[_vm._v(" 不通过")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"录入端口"},model:{value:(_vm.searchForm.client),callback:function ($$v) {_vm.$set(_vm.searchForm, "client", $$v)},expression:"searchForm.client"}},[_c('el-option',{attrs:{"label":"PC端","value":"50"}},[_vm._v(" PC端")]),_vm._v(" "),_c('el-option',{attrs:{"label":"小程序","value":"35"}},[_vm._v(" 小程序")])],1)],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getFactoryList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList},on:{"sort-change":_vm.handleSortChange}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"厂房名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"price","label":"价格"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mianji","label":"面积"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"editor","label":"发布人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"sortable":"custom","prop":"ordid","label":"排序"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==-1)?_c('span',[_vm._v("待审核")]):_vm._e(),_vm._v(" "),(scope.row.status==0)?_c('span',[_vm._v("删除")]):_vm._e(),_vm._v(" "),(scope.row.status==1)?_c('span',[_vm._v("启用")]):_vm._e(),_vm._v(" "),(scope.row.status==2)?_c('span',[_vm._v("退回")]):_vm._e(),_vm._v(" "),(scope.row.status==3)?_c('span',[_vm._v("存档")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"client","label":"录入端口"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.client==50)?_c('span',[_vm._v("PC端")]):_vm._e(),_vm._v(" "),(scope.row.client==35)?_c('span',[_vm._v("小程序")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var salefactory_Salefactory = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/sale/salefactory/Salefactory.vue
function injectStyle (ssrContext) {
  __webpack_require__("sSqV")
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
  Salefactory,
  salefactory_Salefactory,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var sale_salefactory_Salefactory = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RCJ6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "sSqV":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("RCJ6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("62a6b5bc", content, true);

/***/ })

});
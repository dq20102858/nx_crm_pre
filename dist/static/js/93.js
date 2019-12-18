webpackJsonp([93],{

/***/ "inDd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("mZbe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("2d781275", content, true);

/***/ }),

/***/ "mZbe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "sqpC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/residence.js
var residence = __webpack_require__("Vcyy");

// EXTERNAL MODULE: ./src/api/912cms/rent.js
var rent = __webpack_require__("trck");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/common/common.js
var common_common = __webpack_require__("Kw+B");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent/residence/RentResidence.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var RentResidence = ({
	name: "RentResidence",
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
				areaSelected: null,
				priceSelected: null,
				houseType: 62,
				role: null,
				agent: null
			},
			areas: null,
			districts: null,
			roles: [],
			agents: [],
			loading: false,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			sale_price_filter: [{
				id: 1,
				name: "2千以下"
			}, {
				id: 2,
				name: "2-5千元"
			}, {
				id: 3,
				name: "5千-1万元"
			}, {
				id: 4,
				name: "1-2万元"
			}, {
				id: 5,
				name: "2-5万元"
			}, {
				id: 6,
				name: "5万元以上"
			}, { id: 0, name: "价格输入" }],
			park_mianji: [{ id: 1, name: "50㎡以下", value: [0, 50] }, { id: 2, name: "50-200㎡", value: [50, 200] }, { id: 3, name: "200-500㎡", value: [200, 500] }, { id: 4, name: "500㎡以上", value: 500 }, { id: 0, name: "面积输入", value: 40000 }],
			rules: {}
		};
	},

	created: function created() {
		this.getAreaLists();
		this.getResidenceList();
		this.changeAgents();
	},
	methods: {
		searchAgents: function searchAgents(query) {
			var _this = this;

			if (query !== "") {
				this.loading = true;
				Object(common_common["b" /* changeAgents */])(this.searchForm.role, query).then(function (response) {
					_this.loading = false;
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
			}
		},
		changeAgents: function changeAgents() {
			var _this2 = this;

			this.searchForm.agent = "";
			Object(common_common["b" /* changeAgents */])(this.searchForm.role).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.roles = data.roles;
					_this2.agents = data.lists;
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
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getResidenceList();
		},
		getAreaLists: function getAreaLists() {
			var _this3 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.areas = data;
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
		changeArea: function changeArea() {
			var _this4 = this;

			this.searchForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.searchForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.districts = data;
				} else {
					_this4.$message({
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
				name: "RentResidenceDetail",
				params: { id: 0 }
			});
		},
		handleUpdate: function handleUpdate(row) {
			//跳转到详情页
			this.$router.push({
				name: "RentResidenceDetail",
				params: { id: row.id }
			});
		},
		getResidenceList: function getResidenceList(param) {
			var _this5 = this;

			if (param) {
				this.page = 1;
			}
			Object(rent["m" /* getResidenceList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this5.officeList = data.data;
					_this5.total = data.total;
					_this5.pagesize = Number(data.per_page);
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this6 = this;

			this.$confirm("你确定要删除此住宅的信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this6.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(residence["b" /* delResidence */])({
						ids: String(row.id)
					}).then(function (response) {
						_this6.getResidenceList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this6.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-11c68306","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent/residence/RentResidence.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"房源类型"},model:{value:(_vm.searchForm.agentFlag),callback:function ($$v) {_vm.$set(_vm.searchForm, "agentFlag", $$v)},expression:"searchForm.agentFlag"}},[_c('el-option',{attrs:{"label":"经纪人房源","value":"1"}},[_vm._v(" 经纪人房源")]),_vm._v(" "),_c('el-option',{attrs:{"label":"自营房源","value":"0"}},[_vm._v(" 自营房源")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"区域"},on:{"change":_vm.changeArea},model:{value:(_vm.searchForm.area),callback:function ($$v) {_vm.$set(_vm.searchForm, "area", $$v)},expression:"searchForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"街道"},model:{value:(_vm.searchForm.area2),callback:function ($$v) {_vm.$set(_vm.searchForm, "area2", $$v)},expression:"searchForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"角色"},on:{"change":function($event){_vm.changeAgents()}},model:{value:(_vm.searchForm.role),callback:function ($$v) {_vm.$set(_vm.searchForm, "role", $$v)},expression:"searchForm.role"}},_vm._l((_vm.roles),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.role==99)?_c('el-form-item',{key:"a1"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"请输入经纪人关键字","remote":"","remote-method":_vm.searchAgents,"clearable":"","reserve-keyword":"","filterable":"","loading":_vm.loading},model:{value:(_vm.searchForm.agent),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent", $$v)},expression:"searchForm.agent"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})}))],1):_c('el-form-item',{key:"a2"},[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"发布人","clearable":"","reserve-keyword":"","filterable":"","loading":_vm.loading},model:{value:(_vm.searchForm.agent),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent", $$v)},expression:"searchForm.agent"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"价格"},model:{value:(_vm.searchForm.priceSelected),callback:function ($$v) {_vm.$set(_vm.searchForm, "priceSelected", $$v)},expression:"searchForm.priceSelected"}},_vm._l((_vm.sale_price_filter),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.priceSelected===0)?_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最小价格"},model:{value:(_vm.searchForm.minPrice),callback:function ($$v) {_vm.$set(_vm.searchForm, "minPrice", $$v)},expression:"searchForm.minPrice"}}),_vm._v(" -\n\t\t\t"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最大价格"},model:{value:(_vm.searchForm.maxPrice),callback:function ($$v) {_vm.$set(_vm.searchForm, "maxPrice", $$v)},expression:"searchForm.maxPrice"}}),_vm._v(" 千元\n\t\t")],1):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"面积"},model:{value:(_vm.searchForm.areaSelected),callback:function ($$v) {_vm.$set(_vm.searchForm, "areaSelected", $$v)},expression:"searchForm.areaSelected"}},_vm._l((_vm.park_mianji),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.searchForm.areaSelected===0)?_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最小面积"},model:{value:(_vm.searchForm.minMianji),callback:function ($$v) {_vm.$set(_vm.searchForm, "minMianji", $$v)},expression:"searchForm.minMianji"}}),_vm._v(" -\n\t\t\t"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"最大面积"},model:{value:(_vm.searchForm.maxMianji),callback:function ($$v) {_vm.$set(_vm.searchForm, "maxMianji", $$v)},expression:"searchForm.maxMianji"}}),_vm._v(" ㎡\n\t\t")],1):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"待审","value":-1}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"通过","value":1}},[_vm._v(" 通过")]),_vm._v(" "),_c('el-option',{attrs:{"label":"不通过","value":2}},[_vm._v(" 不通过")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"录入端口"},model:{value:(_vm.searchForm.client),callback:function ($$v) {_vm.$set(_vm.searchForm, "client", $$v)},expression:"searchForm.client"}},[_c('el-option',{attrs:{"label":"PC端","value":"50"}},[_vm._v(" PC端")]),_vm._v(" "),_c('el-option',{attrs:{"label":"小程序","value":"35"}},[_vm._v(" 小程序")])],1)],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getResidenceList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.handleCreate}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"房源名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"estate_name","label":"小区名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mianji","label":"面积(平米)"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"price","label":"租金（元/月）"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"editor","label":"业务员"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"经纪人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"origin","label":"来源"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"can_publish","label":"是否能发布到网站"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.can_publish)?_c('span',[_vm._v("是")]):_c('span',[_vm._v("否")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==-1)?_c('span',[_vm._v("待审核")]):_vm._e(),_vm._v(" "),(scope.row.status==0)?_c('span',[_vm._v("删除")]):_vm._e(),_vm._v(" "),(scope.row.status==1)?_c('span',[_vm._v("通过")]):_vm._e(),_vm._v(" "),(scope.row.status==2)?_c('span',[_vm._v("未通过")]):_vm._e(),_vm._v(" "),(scope.row.status==5)?_c('span',[_vm._v("审核中")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"is_check","label":"是否内部审核"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.is_check==1)?_c('span',[_vm._v("是")]):_c('span',[_vm._v("否")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var residence_RentResidence = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent/residence/RentResidence.vue
function injectStyle (ssrContext) {
  __webpack_require__("inDd")
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
  RentResidence,
  residence_RentResidence,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_residence_RentResidence = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
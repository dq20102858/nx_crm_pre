webpackJsonp([84],{

/***/ "H4m5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/brand.js
var brand = __webpack_require__("q2/m");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/brand/ClaimList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// import { changeuserList } from "@/api/common/common";

/* harmony default export */ var ClaimList = ({
	name: 'ClaimList',
	data: function data() {
		return {
			officeList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				keyword: null,
				mobile: null,
				brandName: null,
				status: null
			},
			statusList: [{
				id: -1,
				name: '全部'
			}, {
				id: 0,
				name: '审核不通过'
			}, {
				id: 1,
				name: '待审核'
			}, {
				id: 2,
				name: '审核通过'
			}],
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			userList: null,
			rules: {},
			loading: false
		};
	},

	created: function created() {
		this.getClaimList();
	},
	methods: {
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getClaimList();
		},
		getUserList: function (_getUserList) {
			function getUserList() {
				return _getUserList.apply(this, arguments);
			}

			getUserList.toString = function () {
				return _getUserList.toString();
			};

			return getUserList;
		}(function () {
			var _this = this;

			getUserList().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.userList = data;
				} else {
					_this.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		}),
		handleUpdate: function handleUpdate(row) {
			//跳转到详情页
			this.$router.push({
				name: "ClaimDetail",
				params: { id: row.id }
			});
		},
		getClaimList: function getClaimList(num) {
			var _this2 = this;

			if (num) {
				this.page = 1;
			}
			Object(brand["n" /* getClaimList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.officeList = data.data;
					_this2.total = data.total;
					_this2.pagesize = data.per_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2ba72ca6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/brand/ClaimList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"认领人姓名/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"认领人电话"},model:{value:(_vm.searchForm.mobile),callback:function ($$v) {_vm.$set(_vm.searchForm, "mobile", $$v)},expression:"searchForm.mobile"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"认领品牌"},model:{value:(_vm.searchForm.brandName),callback:function ($$v) {_vm.$set(_vm.searchForm, "brandName", $$v)},expression:"searchForm.brandName"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{attrs:{"placeholder":"审核状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},_vm._l((_vm.statusList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"认领时间"}},[_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2,"value-format":"yyyy-MM-dd"},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getClaimList(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.officeList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"userName","label":"认领人姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"认领人电话"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"brandName","label":"认领人品牌"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaInfo","label":"负责区域"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"审核状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"bindBrand","label":"品牌绑定状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"addTime","label":"认领时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.handleUpdate(scope.row)}}},[_vm._v("编辑")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var brand_ClaimList = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/brand/ClaimList.vue
function injectStyle (ssrContext) {
  __webpack_require__("JMvM")
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
  ClaimList,
  brand_ClaimList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_brand_ClaimList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JMvM":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vIGk");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6623d1d0", content, true);

/***/ }),

/***/ "vIGk":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ })

});
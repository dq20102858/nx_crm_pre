webpackJsonp([99],{

/***/ "3kex":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/912cms/basicSet.js
var basicSet = __webpack_require__("AcY9");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/basicSet/UpdateCache.vue
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var UpdateCache = ({
	name: "UpdateCache",
	data: function data() {
		return {
			officeList: [], //列表页的数据
			loading: false
		};
	},

	created: function created() {
		this.cacheCenterList();
	},
	methods: {
		cacheCenterList: function cacheCenterList() {
			var _this = this;

			Object(basicSet["g" /* cacheCenterList */])(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.officeList = data;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleclick: function handleclick(item, buttonitem) {
			var _this2 = this;

			Object(basicSet["f" /* cacheCenter */])({ pid: item.pid, code: buttonitem.code }).then(function (response) {
				if (response.data.status) {
					_this2.$message({
						message: response.data.msg,
						type: "success"
					});
				} else {
					_this2.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0ba660f2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/basicSet/UpdateCache.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},_vm._l((_vm.officeList),function(item,index){return _c('el-card',{key:index,staticClass:"box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v(_vm._s(item.name))])]),_vm._v(" "),_vm._l((item.list),function(buttonitem,buttonindex){return _c('el-button',{key:buttonindex,attrs:{"type":"primary"},on:{"click":function($event){_vm.handleclick(item,buttonitem)}}},[_vm._v(_vm._s(buttonitem.name))])})],2)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var basicSet_UpdateCache = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/basicSet/UpdateCache.vue
function injectStyle (ssrContext) {
  __webpack_require__("O1iv")
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
  UpdateCache,
  basicSet_UpdateCache,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_basicSet_UpdateCache = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "O1iv":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ScxU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("45804b4c", content, true);

/***/ }),

/***/ "ScxU":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.el-card, .el-button {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ })

});
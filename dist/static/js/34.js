webpackJsonp([34],{

/***/ "m9iq":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("qcwp");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("f689b3a8", content, true);

/***/ }),

/***/ "ouT8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/ExtensionDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ExtensionDetail = ({
	data: function data() {
		return {
			data: {},
			remark: '',
			id: this.$route.params.id,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			isShowTable: false,
			pagesize: 10,
			total: 1, //总页数
			page: 1,
			lists1: [],
			lists: [],
			chargeMap: [],
			rules: {
				name: [{
					required: true,
					message: "门店名称",
					trigger: "blur"
				}],
				companyNum: [{
					required: true,
					message: "门店人数",
					trigger: "blur"
				}],
				address: [{
					required: true,
					message: "请输入详细地址",
					trigger: "blur"
				}],
				broker: [{
					required: true,
					message: "请输入对接人",
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.getRecordDetail();
	},
	methods: {
		testNameAjax: function testNameAjax() {
			var data = {
				name: this.data.name
			};
			this.request({
				url: "/fjingling/checkCompany",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.status;
				// if (data) {
				// }
			}).catch(function (err) {
				console.log(err);
			});
		},
		addJingjiren: function addJingjiren() {
			this.$router.push({
				name: "AgentDetail",
				params: { id: 0, company: this.data.name, companyId: this.data.id }
			});
		},
		addThird: function addThird() {
			this.data.thirdSoft.push({
				name: '',
				time: ''
			});
		},
		getRecordDetail: function getRecordDetail() {
			var _this = this;

			var data = {
				id: this.$route.params.id
			};
			this.request({
				url: "/fjingling/companyDesc",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.data = data;
					_this.getCompanyList();
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getCompanyList();
		},
		getCompanyList: function getCompanyList() {
			var _this2 = this;

			var data = {
				id: this.$route.params.id,
				page: this.page
			};
			this.request({
				url: "/fjingling/companyAgent",
				method: "get",
				params: data
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.lists1 = data.data.slice(0, 1);
					_this2.lists = data.data;
					_this2.total = data.total;
					_this2.pagesize = parseInt(data.per_page);
					_this2.page = parseInt(data.current_page);
					_this2.last_page = data.last_page;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		onSubmit: function onSubmit(formName) {
			var _this3 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this3.data.chargeList.map(function (item) {
						var index = _this3.data.chargeId.findIndex(function (value, index, arr) {
							return value == item.id;
						});
						if (index !== -1) {
							_this3.chargeMap.push({
								id: item.id,
								name: item.name
							});
						}
					});
					var data = {
						name: _this3.data.name || '',
						address: _this3.data.address || '',
						map: _this3.data.map || '',
						chargeId: _this3.data.chargeId.join(',') || '',
						companyNum: _this3.data.companyNum || 0,
						softNum: _this3.data.softNum || 0,
						thirdSoft: _this3.data.thirdSoft || [],
						fjlUseNum: _this3.data.fjlUseNum || 0,
						fjlEndTime: _this3.data.fjlEndTime || '',
						nextTime: _this3.data.nextTime || '',
						broker: _this3.data.broker || '',
						hour: _this3.data.hour || 0,
						remindInfo: _this3.data.remindInfo || '',
						addTime: _this3.data.addTime || '',
						id: _this3.data.id,
						remark: _this3.remark || '',
						chargeMap: _this3.chargeMap || []
					};

					_this3.request({
						url: "/fjingling/companyAdd",
						method: "post",
						data: data
					}).then(function (response) {
						if (response.data.status) {
							_this3.$message({
								message: "编辑成功",
								type: "success",
								duration: 3 * 1000
							});
							_this3.getRecordDetail();
						}
					}).catch(function (err) {
						console.log(err);
					});
				}
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cd96324e","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/ExtensionDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"rules":_vm.rules,"label-width":"200px"}},[_c('el-form-item',{attrs:{"label":"门店名称 ","prop":"name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"门店名称"},on:{"blur":_vm.testNameAjax},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细地址","prop":"address"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"详细地址"},model:{value:(_vm.data.address),callback:function ($$v) {_vm.$set(_vm.data, "address", $$v)},expression:"data.address"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"经纬度","prop":"map"}},[_c('a',{staticStyle:{"color":"red","margin-left":"230px"},attrs:{"href":"http://api.map.baidu.com/lbsapi/getpoint/","target":"_blank"}},[_vm._v("获取经纬度")]),_c('br'),_vm._v(" "),_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"116.486482,40.022874"},model:{value:(_vm.data.map),callback:function ($$v) {_vm.$set(_vm.data, "map", $$v)},expression:"data.map"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"负责人","prop":"chargeId"}},[_c('el-select',{staticStyle:{"width":"300px"},attrs:{"multiple":"","filterable":"","remote":"","placeholder":"请输入负责人名称"},model:{value:(_vm.data.chargeId),callback:function ($$v) {_vm.$set(_vm.data, "chargeId", $$v)},expression:"data.chargeId"}},_vm._l((_vm.data.chargeList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"门店人数","prop":"companyNum"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"门店人数"},model:{value:(_vm.data.companyNum),callback:function ($$v) {_vm.$set(_vm.data, "companyNum", $$v)},expression:"data.companyNum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"第三方软件使用人数","prop":"softNum"}},[_c('el-input',{staticStyle:{"width":"170px"},attrs:{"type":"input","placeholder":"第三方软件使用人数"},model:{value:(_vm.data.softNum),callback:function ($$v) {_vm.$set(_vm.data, "softNum", $$v)},expression:"data.softNum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"其他第三方软件使用情况","prop":"addThird"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addThird}},[_vm._v("新增")])],1),_vm._v(" "),_vm._l((_vm.data.thirdSoft),function(item,index){return _c('el-form-item',{key:index,attrs:{"label":"","prop":"thirdSoft"}},[_c('el-input',{staticStyle:{"width":"170px"},attrs:{"type":"input","placeholder":"第三方软件名称"},model:{value:(item.name),callback:function ($$v) {_vm.$set(item, "name", $$v)},expression:"item.name"}}),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"请选择到期时间"},model:{value:(item.time),callback:function ($$v) {_vm.$set(item, "time", $$v)},expression:"item.time"}})],1)}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"使用房鲸灵人数","prop":"fjlUseNum"}},[_c('el-input',{staticStyle:{"width":"170px"},attrs:{"type":"input","placeholder":"使用房鲸灵人数"},model:{value:(_vm.data.fjlUseNum),callback:function ($$v) {_vm.$set(_vm.data, "fjlUseNum", $$v)},expression:"data.fjlUseNum"}}),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"请选择到期时间"},model:{value:(_vm.data.fjlEndTime),callback:function ($$v) {_vm.$set(_vm.data, "fjlEndTime", $$v)},expression:"data.fjlEndTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"下次拜访时间","prop":"nextTime"}},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.data.nextTime),callback:function ($$v) {_vm.$set(_vm.data, "nextTime", $$v)},expression:"data.nextTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"对接人","prop":"broker"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"对接人"},model:{value:(_vm.data.broker),callback:function ($$v) {_vm.$set(_vm.data, "broker", $$v)},expression:"data.broker"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"花费时间","prop":"hour"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"花费时间（h）"},model:{value:(_vm.data.hour),callback:function ($$v) {_vm.$set(_vm.data, "hour", $$v)},expression:"data.hour"}}),_vm._v(" 小时\n\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提醒内容","prop":"remindInfo"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"提醒内容"},model:{value:(_vm.data.remindInfo),callback:function ($$v) {_vm.$set(_vm.data, "remindInfo", $$v)},expression:"data.remindInfo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"记录时间","prop":"addTime"}},[_c('span',[_vm._v(_vm._s(_vm.data.addTime))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"客服备注","maxlength":"255"},model:{value:(_vm.remark),callback:function ($$v) {_vm.remark=$$v},expression:"remark"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],2),_vm._v(" "),_c('el-row',{staticStyle:{"padding":"20px 0","border-top":"1px solid #ccc","height":"77px","line-height":"35px"}},[_c('el-col',{attrs:{"offset":1,"span":16}},[_c('span',{staticClass:"tips-jilu"},[_vm._v("门店人员列表")])]),_vm._v(" "),_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowTable),expression:"!isShowTable"}],attrs:{"offset":1,"span":6}},[_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.isShowTable=true}}},[_vm._v("展开")])],1),_vm._v(" "),_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowTable),expression:"isShowTable"}],attrs:{"offset":1,"span":6}},[_c('el-button',{attrs:{"type":"success"},on:{"click":function($event){_vm.isShowTable=false}}},[_vm._v("收起")])],1)],1),_vm._v(" "),_c('el-table',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowTable),expression:"!isShowTable"}],staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists1}},[_c('el-table-column',{attrs:{"type":"index","label":"序号","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"post","label":"岗位"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"联系方式"}})],1),_vm._v(" "),_c('el-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowTable),expression:"isShowTable"}],staticClass:"userLists-tab",staticStyle:{"width":"100%"},attrs:{"data":_vm.lists}},[_c('el-table-column',{attrs:{"type":"index","label":"序号","width":"60"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"post","label":"岗位"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"联系方式"}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowTable),expression:"isShowTable"}],attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-row',{staticStyle:{"margin-top":"40px"}},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.addJingjiren}},[_vm._v("新增经纪人")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.data.history && _vm.data.history.length>0)?_c('ol',_vm._l((_vm.data.history),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_ExtensionDetail = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/ExtensionDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("m9iq")
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
  ExtensionDetail,
  fjingling_ExtensionDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_ExtensionDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "qcwp":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.brand-form {\n  padding: 50px 20px;\n}\n.brand-form .el-tabs--border-card {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n", ""]);

// exports


/***/ })

});
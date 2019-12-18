webpackJsonp([101],{

/***/ "CXtn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("vLgD");

// CONCATENATED MODULE: ./src/api/912cms/user.js



function user_getUserList(page, params) {
  return Object(request["a" /* default */])({
    url: '/rental/houseWorkerLists',
    method: 'get',
    params: extends_default()({ page: page }, params)
  });
}

function delUser(id) {
  return Object(request["a" /* default */])({
    url: '/rental/delHouseWorker',
    method: 'post',
    data: id
  });
}

function getUserDetail(id) {
  return Object(request["a" /* default */])({
    url: '/api/UserSite/desc',
    method: 'get',
    params: { id: id }
  });
}

function editUser(data) {
  return Object(request["a" /* default */])({
    url: '/rental/editHouseWorker',
    method: 'post',
    data: data
  });
}

function addUser(data) {
  return Object(request["a" /* default */])({
    url: '/rental/addHouseWorker',
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/user/User.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var User = ({
	name: "Industry",
	data: function data() {
		return {
			UserList: [], //列表页的数据
			showOk: false,
			total: 0,
			pagesize: 0,
			page: 1,
			searchForm: {
				area: null,
				area2: null
			},
			ruleForm: {
				name: null,
				type: null,
				num: null,
				logo: null,
				chinesename: null,
				status: null
			},
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			isEdit: true,
			areas: null,
			districts: null,
			arealist: {
				province: [],
				city: [],
				area: [],
				street: []
			},
			loading: false,
			dialogVisible: false,
			dialogImageUrl: null,
			dialogAdminFormVisible: false,
			titleAdd: "新增用户",
			titleEdit: "编辑用户",
			title: this.titleAdd,
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			rules: {
				name: [{
					required: true,
					message: "请填写昵称名称",
					trigger: "blur"
				}],
				type: [{
					required: true,
					message: "请选择类型",
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.getUserList();
	},
	methods: {
		handleAvatarSuccess: function handleAvatarSuccess(res, file) {
			this.ruleForm.logo = res.data.show_url;
		},
		beforeAvatarUpload: function beforeAvatarUpload(file) {
			// const isJPG = file.type === "image/jpeg";
			var isLt2M = file.size / 1024 / 1024 < 2;

			// if (!isJPG) {
			// 	this.$message.error("上传头像图片只能是 JPG 格式!");
			// }
			if (!isLt2M) {
				this.$message.error("上传头像图片大小不能超过 2MB!");
			}
			// return isJPG && isLt2M;
			return isLt2M;
		},
		addOneAdmin: function addOneAdmin(formName) {
			var _this = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					if (_this.isEdit) {
						editUser(_this.ruleForm).then(function (res) {
							if (res.data.status) {
								_this.$message({
									message: res.data.msg,
									type: "success"
								});
							} else {
								_this.$message(res.data.msg);
							}
							_this.dialogAdminFormVisible = false;
							_this.getUserList();
						});
					} else {
						addUser(_this.ruleForm).then(function (res) {
							if (res.data.status) {
								_this.$message({
									message: res.data.msg,
									type: "success"
								});
							} else {
								_this.$message(res.data.msg);
							}
							_this.dialogAdminFormVisible = false;
							_this.getUserList();
						});
					}
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		openAdminDialog: function openAdminDialog() {
			this.title = this.titleAdd;
			this.isEdit = false;
			this.dialogAdminFormVisible = true;
			this.$refs["ruleForm"].clearValidate();
			this.ruleForm = {
				name: null,
				type: null,
				num: null,
				logo: null,
				chinesename: null,
				status: 1
			};
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getUserList();
		},
		updateUser: function updateUser(data) {
			this.title = this.titleEdit;
			this.isEdit = true;
			this.dialogAdminFormVisible = true;
			this.ruleForm = data;
			this.$refs["ruleForm"].clearValidate();
		},
		getUserList: function getUserList(param) {
			var _this2 = this;

			if (param) {
				this.page = 1;
			}
			user_getUserList(this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.UserList = data.data;
					_this2.total = data.total;
					_this2.pagesize = Number(data.per_page);
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this3 = this;

			this.$confirm("你确定要删除此用户信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				delUser({
					id: row.id
				}).then(function (response) {
					_this3.$message({
						type: response.data.status ? "success" : "error",
						message: response.data.msg
					});

					_this3.getUserList();
				}).catch(function (err) {
					console.log(err);
				});
			}).catch(function () {
				_this3.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-08d2a584","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/user/User.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"名称关键字/ID"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"类型"},model:{value:(_vm.searchForm.type),callback:function ($$v) {_vm.$set(_vm.searchForm, "type", $$v)},expression:"searchForm.type"}},[_c('el-option',{attrs:{"label":"房专家","value":1}},[_vm._v(" 房专家")]),_vm._v(" "),_c('el-option',{attrs:{"label":"核验员","value":2}},[_vm._v(" 核验员")]),_vm._v(" "),_c('el-option',{attrs:{"label":"房管家","value":3}},[_vm._v(" 房管家")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"状态"},model:{value:(_vm.searchForm.status),callback:function ($$v) {_vm.$set(_vm.searchForm, "status", $$v)},expression:"searchForm.status"}},[_c('el-option',{attrs:{"label":"无效","value":0}},[_vm._v(" 无效")]),_vm._v(" "),_c('el-option',{attrs:{"label":"有效","value":1}},[_vm._v(" 有效")])],1)],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getUserList(_vm.searchForm)}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{"size":"small","type":"success","icon":"el-icon-edit"},on:{"click":_vm.openAdminDialog}},[_vm._v("新增")])],1),_vm._v(" "),_c('el-table',{staticClass:"userLists-tab",attrs:{"data":_vm.UserList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"头像"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{attrs:{"width":"100","height":"100","src":scope.row.logo,"alt":""}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"chinesename","label":"中文姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"num","label":"服务数量"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"类别"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',{directives:[{name:"show",rawName:"v-show",value:(scope.row.type===1),expression:"scope.row.type===1"}]},[_vm._v("房专家")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(scope.row.type===2),expression:"scope.row.type===2"}]},[_vm._v("核验员")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(scope.row.type===3),expression:"scope.row.type===3"}]},[_vm._v("房管家")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_str","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"warning","size":"mini"},on:{"click":function($event){_vm.updateUser(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogAdminFormVisible},on:{"update:visible":function($event){_vm.dialogAdminFormVisible=$event}}},[_c('el-form',{ref:"ruleForm",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"20%"}},[_c('el-form-item',{attrs:{"label":"展示昵称","prop":"name"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"展示昵称"},model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"类型"},model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-option',{attrs:{"label":"房专家","value":1}},[_vm._v(" 房专家")]),_vm._v(" "),_c('el-option',{attrs:{"label":"核验员","value":2}},[_vm._v(" 核验员")]),_vm._v(" "),_c('el-option',{attrs:{"label":"房管家","value":3}},[_vm._v(" 房管家")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"服务商铺数量"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"type":"number","placeholder":"服务商铺数量"},model:{value:(_vm.ruleForm.num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "num", $$v)},expression:"ruleForm.num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"真实姓名"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"真实姓名"},model:{value:(_vm.ruleForm.chinesename),callback:function ($$v) {_vm.$set(_vm.ruleForm, "chinesename", $$v)},expression:"ruleForm.chinesename"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"头像"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0, noWater:1},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.ruleForm.logo)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.logo}}):_vm._e(),_vm._v(" "),(!_vm.ruleForm.logo)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{staticClass:"search-input search-select",attrs:{"placeholder":"状态"},model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"label":1,"value":1}},[_vm._v(" 有效")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0,"value":0}},[_vm._v(" 无效")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogAdminFormVisible=false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.addOneAdmin('ruleForm')}}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var user_User = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/user/User.vue
function injectStyle (ssrContext) {
  __webpack_require__("DFyK")
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
  User,
  user_User,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_user_User = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "DFyK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("P4qE");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("19f20146", content, true);

/***/ }),

/***/ "P4qE":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n", ""]);

// exports


/***/ })

});
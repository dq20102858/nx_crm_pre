webpackJsonp([35],{

/***/ "/MM1":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.brand-form {\n  padding: 20px;\n}\n.brand-form .el-tabs--border-card {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.brand-form .el-tabs__item {\n  padding: 0 10px !important;\n}\n.brand-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.brand-form .el-upload-list-box,\n.brand-form .el-upload-list-box + div {\n  float: left;\n}\n.brand-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container,\n#tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "Jtjo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/components/ImageCropper/index.vue + 6 modules
var ImageCropper = __webpack_require__("Oakg");

// EXTERNAL MODULE: ./src/api/912cms/baike.js
var baike = __webpack_require__("9j6o");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/baike/BaikeDetail.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BaikeDetail = ({
	name: "BaikeDetail",
	components: { Tinymce: Tinymce["a" /* default */], ImageCropper: ImageCropper["a" /* default */] },
	data: function data() {
		return {
			ruleForm: {
				cate_id: null, //分类id
				cate_pid: null, //分类id
				pid: null, //父类id
				title: null, //楼盘名称
				comefrom: null, //来源
				editor: null, //编辑人
				tags: null, //标签
				img: null, //封面图片
				img_show: null,
				status: 0, //0状态 -1待审,1启用 0删除
				description: null, //房源标签
				isrec: 1, //是否推荐 0否,1是
				info: null, //品牌介绍
				ordid: 1000, //排序字段
				seo_title: null,
				seo_keys: null,
				seo_desc: null
			},
			catelist1: [],
			catelist2: [],
			cateId1: null,
			imagecropperShow: false,
			imagecropperKey: 0,
			image: null,
			center: { lng: 118.815358, lat: 32.063673 },
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			pickerOptions0: {
				disabledDate: function disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
				}
			},
			fileList: [],
			remarkLists: [],
			rules: {
				cate_pid: [{
					required: true,
					message: "请选择所属父级分类",
					trigger: "blur"
				}],
				cate_id: [{
					required: true,
					message: "请选择所属分类",
					trigger: "blur"
				}],
				title: [{
					required: true,
					message: "请输入标题",
					trigger: "blur"
				}],
				comefrom: [{
					required: true,
					message: "请输入来源",
					trigger: "blur"
				}],
				editor: [{
					required: true,
					message: "请输入发布人",
					trigger: "blur"
				}],
				description: [{
					required: true,
					message: "请输入详细描述",
					trigger: "blur"
				}],
				info: [{
					required: true,
					message: "请输入简介",
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.getCateList();
		if (this.$route.params.id > 0) {
			this.getBaikeDetail(this.$route.params.id);
		}
	},
	watch: {
		$route: function $route(to, from) {
			this.globalEvBus.$emit("reload");
		}
	},
	methods: {
		changecate1: function changecate1(e) {
			var _this = this;

			this.catelist1.map(function (item) {
				console.log(item);
				if (item.id == _this.ruleForm.cate_pid) {
					_this.catelist2 = item.children;
				}
			});
			this.ruleForm.cate_id = '';
		},
		cropSuccess: function cropSuccess(resData) {
			this.imagecropperShow = false;
			this.imagecropperKey = this.imagecropperKey + 1;
			this.ruleForm.img = resData.data.show_url;
			this.ruleForm.img_show = resData.data.show_url;
		},
		close: function close() {
			this.imagecropperShow = false;
		},
		getCateList: function getCateList() {
			var _this2 = this;

			Object(baike["n" /* getCateList */])().then(function (response) {
				console.log(response);
				var data = response.data.data;
				if (data) {
					_this2.catelist1 = data;
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleAvatarSuccess: function handleAvatarSuccess(res, file) {
			this.ruleForm.img = res.data.show_url;
			this.ruleForm.img_show = res.data.show_url;
		},
		beforeAvatarUpload: function beforeAvatarUpload(file) {
			// const isJPG = file.type === "image/jpeg";
			var isLt2M = file.size / 1024 / 1024 < 2;

			// if (!isJPG) {
			// 	this.$message.error("上传头像图片只能是 JPG 格式!");
			// }
			if (!isLt2M) {
				this.$message.error("上传图片大小不能超过 2MB!");
			}
			// return isJPG && isLt2M;
			return isLt2M;
		},
		handleImgRemove: function handleImgRemove(file, fileList) {
			var _this3 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this3.ruleForm.pic.splice(index, 1);
				}
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.ruleForm.pic.push(res.data.show_url);
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			console.log(file);
			this.dialogImageUrl = file.show_url || file.url || file.img_show;
			this.dialogVisible = true;
		},
		handleResData: function handleResData(data) {
			data.pid = Number(data.pid);
			data.cate_id = Number(data.cate_id);
			data.isrec = Number(data.isrec);
			data.status = Number(data.status);
		},
		getBaikeDetail: function getBaikeDetail(id) {
			var _this4 = this;

			Object(baike["l" /* getBaikeDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this4.handleResData(data);
				_this4.remarkLists = data.remarkLists || [];
				_this4.ruleForm = assign_default()(_this4.ruleForm, data);
				if (_this4.ruleForm.cate_pid) {
					Object(baike["p" /* getSubCate */])(_this4.ruleForm.cate_pid).then(function (res) {
						_this4.catelist2 = res.data.data;
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},

		/**
   * 提交表单
   *
   */
		submitForm: function submitForm(formName) {
			var _this5 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this5.editOrAddOffice();
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this6 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(baike["i" /* editBaikeDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this6.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this6.$store.dispatch("delView", _this6.$route);
							_this6.$router.go(-1);
						}, 500);
					} else {
						_this6.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				Object(baike["c" /* addBaikeDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this6.$notify({
							title: "成功",
							message: "提交成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this6.$store.dispatch("delView", _this6.$route);
							_this6.$router.go(-1);
						}, 500);
					} else {
						_this6.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			}
		},
		resetForm: function resetForm(formName) {
			this.$refs[formName].resetFields();
			this.isShow = false;
			this.has_phone = true;
			this.show_user_agent = false;
			this.ruleForm.user_agent = "";
			this.ruleForm.user_agent_id = 0;
			this.ruleForm.house_agent_id = 0;
			this.ruleForm.house_agent = "";
			this.ruleForm.lprice = "";
			this.ruleForm.gprice = "";
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bba01218","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/baike/BaikeDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"所属分类","prop":"cate_pid"}},[_c('el-select',{attrs:{"clearable":""},on:{"change":_vm.changecate1},model:{value:(_vm.ruleForm.cate_pid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cate_pid", $$v)},expression:"ruleForm.cate_pid"}},_vm._l((_vm.catelist1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"cate_id"}},[(_vm.ruleForm.cate_pid)?_c('el-select',{attrs:{"clearable":""},model:{value:(_vm.ruleForm.cate_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cate_id", $$v)},expression:"ruleForm.cate_id"}},_vm._l((_vm.catelist2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})):_vm._e()],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入标题"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"来源","prop":"comefrom"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入来源"},model:{value:(_vm.ruleForm.comefrom),callback:function ($$v) {_vm.$set(_vm.ruleForm, "comefrom", $$v)},expression:"ruleForm.comefrom"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发布人","prop":"editor"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入发布人"},model:{value:(_vm.ruleForm.editor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "editor", $$v)},expression:"ruleForm.editor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标签","prop":"tags"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"370px"},attrs:{"maxlength":"30","placeholder":"请输入标签"},model:{value:(_vm.ruleForm.tags),callback:function ($$v) {_vm.$set(_vm.ruleForm, "tags", $$v)},expression:"ruleForm.tags"}}),_vm._v("用','号分隔\n\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简介","prop":"description"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入简介","minlength":"10","maxlength":"300","rows":"3"},model:{value:(_vm.ruleForm.description),callback:function ($$v) {_vm.$set(_vm.ruleForm, "description", $$v)},expression:"ruleForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细内容","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图","prop":"img"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.imagecropperShow=true}}},[(_vm.ruleForm.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])])]),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow),expression:"imagecropperShow"}],key:_vm.imagecropperKey,attrs:{"width":206,"height":140,"params":{isPublic: 0},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.isrec),callback:function ($$v) {_vm.$set(_vm.ruleForm, "isrec", $$v)},expression:"ruleForm.isrec"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("发布")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("退回")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":3,"value":"3"}},[_vm._v("草稿")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO标题"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO标题"},model:{value:(_vm.ruleForm.seo_title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_title", $$v)},expression:"ruleForm.seo_title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO关键词"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO关键词"},model:{value:(_vm.ruleForm.seo_keys),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_keys", $$v)},expression:"ruleForm.seo_keys"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO描述"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO描述"},model:{value:(_vm.ruleForm.seo_desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_desc", $$v)},expression:"ruleForm.seo_desc"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})]),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var baike_BaikeDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/baike/BaikeDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("ipnG")
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
  BaikeDetail,
  baike_BaikeDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_baike_BaikeDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ipnG":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/MM1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("1da89308", content, true);

/***/ })

});
webpackJsonp([72],{

/***/ "LYJP":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.brand-form {\n  padding: 20px;\n}\n.brand-form .el-tabs--border-card {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.brand-form .el-tabs__item {\n  padding: 0 10px !important;\n}\n.brand-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.brand-form .el-upload-list-box,\n.brand-form .el-upload-list-box + div {\n  float: left;\n}\n.brand-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container,\n#tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "PYtO":
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

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/brand.js
var brand = __webpack_require__("q2/m");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/brand/BrandDetail.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var BrandDetail = ({
	name: "BrandDetail",
	components: { Tinymce: Tinymce["a" /* default */], ImageCropper: ImageCropper["a" /* default */] },
	data: function data() {
		var _this = this;

		return {
			ruleForm: {
				mass: null,
				openTime: null,
				cate_id: null, //分类id
				pid: null, //父类id
				title: null, //楼盘名称
				business: [],
				area_min: null, //最小面积
				area_max: null, //最大面积
				rent_price_min: null, //最小租金单价
				rent_price_max: null, //最大租金单价
				price_min: null, //价格
				price_max: null, //价格
				price_unit: null,
				floor_min: null, //最小楼层
				floor_max: null, //最小楼层
				address: null, //优先选址
				facilities: [], //配套设施
				img: null, //封面图片
				img_show: null,
				pic: [],
				user: {
					chinesename: null,
					id: null,
					mobile: null,
					username: null
				},
				mobile: null, //联系电话
				agent_name: null, //品牌联系人
				agent_mobile: null, //品牌联系人电话
				status: -1, //
				brand_label: [], //房源标签
				rec_position: 1, //是否推荐 0否,1是
				info: null, //品牌介绍
				ordid: 1000, //排序字段
				short_home: [], //首页标签
				settledCity: [], //
				settledBusiness: []
			},
			loading: false,
			userClaim: [],
			settledBusinessList: [],
			businessStr: null,
			settledCityStr: null,
			cate: [],
			users: [],
			mass: [],
			openTime: [],
			cateChilds: [],
			imagecropperShow: false,
			imagecropperKey: 0,
			image: null,
			center: { lng: 118.815358, lat: 32.063673 },
			price_unit: null,
			config: {},
			subways: [],
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			pickerOptions0: {
				disabledDate: function disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
				}
			},
			areas: [],
			districts: [],
			fileList: [],
			remarkLists: [],
			last: null,
			rules: {
				pid: [{
					required: true,
					message: "请选择所属分类",
					trigger: "blur"
				}],
				title: [{
					required: true,
					message: "请输入品牌名称",
					trigger: "blur"
				}],
				price_min: [{
					required: true,
					message: "请输入最小预算",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.price_max && Number(value) > Number(_this.ruleForm.price_max)) {
							callback(new Error("最小预算不得大于最大预算"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				price_max: [{
					required: true,
					message: "请输入最大预算",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.price_min && Number(value) < Number(_this.ruleForm.price_min)) {
							callback(new Error("最大预算不得小于最小预算"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				rent_price_min: [{
					required: true,
					message: "请输入最小面积",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.rent_price_max && Number(value) > Number(_this.ruleForm.rent_price_max)) {
							callback(new Error("最小面积不得大于最大面积"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				rent_price_max: [{
					required: true,
					message: "请输入最大面积",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.rent_price_min && Number(value) < Number(_this.ruleForm.rent_price_min)) {
							callback(new Error("最大面积不得小于最小面积"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				area_min: [{
					required: true,
					message: "请输入最小面积",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.area_max && Number(value) > Number(_this.ruleForm.area_max)) {
							callback(new Error("最小面积不得大于最大面积"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				area_max: [{
					required: true,
					message: "请输入最大面积",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.area_min && Number(value) < Number(_this.ruleForm.area_min)) {
							callback(new Error("最大面积不得小于最小面积"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				floor_min: [{
					required: true,
					message: "请输入最小楼层",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.floor_max && Number(value) > Number(_this.ruleForm.floor_max)) {
							callback(new Error("最小楼层不得大于最大楼层"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				floor_max: [{
					required: true,
					message: "请输入最大楼层",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.floor_min && Number(value) < Number(_this.ruleForm.floor_min)) {
							callback(new Error("最大楼层不得小于最小楼层"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}]
			}
		};
	},

	created: function created() {
		this.getCateList();
		this.getConfigList();
		this.getAreaLists();
		this.getUserList();
		if (this.$route.params.id > 0) {
			this.getBrandDetail(this.$route.params.id);
		}
	},
	watch: {
		$route: function $route(to, from) {
			this.globalEvBus.$emit("reload");
		}
	},
	methods: {
		deleteUserClaim: function deleteUserClaim(id, index) {
			var _this2 = this;

			var _ = this;
			Object(brand["c" /* delClaim */])(id).then(function (response) {
				_this2.$message({
					message: response.data.msg,
					type: "warning",
					onClose: function onClose() {
						_.userClaim.splice(index, 1);
					}
				});
			}).catch(function (err) {
				console.log(err);
			});
		},
		fetchSettledBusiness: function fetchSettledBusiness(query) {
			var _this3 = this;

			if (query !== "") {
				this.loading = true;
				Object(brand["g" /* fetchSettledBusiness */])(query).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this3.loading = false;
						_this3.settledBusinessList = data;
					} else {
						_this3.$message({
							message: response.data.msg,
							type: "warning"
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				this.settledBusinessList = [];
			}
		},
		handleSettledCityClose: function handleSettledCityClose(tag) {
			this.settledCityStr.splice(this.settledCityStr.indexOf(tag), 1);
			this.ruleForm.settledCity.splice(this.ruleForm.settledCity.indexOf(tag.id), 1);
		},
		handleClose: function handleClose(tag) {
			this.businessStr.splice(this.businessStr.indexOf(tag), 1);
			this.ruleForm.business.splice(this.ruleForm.business.indexOf(tag.id), 1);
		},
		settledCityChange: function settledCityChange() {
			var _this4 = this;

			var arr = [];
			if (this.ruleForm.settledCity.length > 1 && this.ruleForm.settledCity[this.ruleForm.settledCity.length - 1] == -1) {
				this.ruleForm.settledCity = [-1];
			}
			if (this.ruleForm.settledCity.length > 1 && this.ruleForm.settledCity[0] == -1) {
				this.ruleForm.settledCity.splice(this.ruleForm.settledCity.indexOf(-1), 1);
			}
			this.ruleForm.settledCity.forEach(function (id) {
				for (var k in _this4.config.settledCity) {
					_this4.config.settledCity[k].forEach(function (item) {
						if (item.id == id) {
							arr.push({ id: item.id, name: item.name });
						}
					});
				}
			});
			this.settledCityStr = arr;
		},
		businessChange: function businessChange() {
			var _this5 = this;

			var arr = [];
			if (this.ruleForm.business.length > 1 && this.ruleForm.business[this.ruleForm.business.length - 1] == -1) {
				this.ruleForm.business = [-1];
			}
			if (this.ruleForm.business.length > 1 && this.ruleForm.business[0] == -1) {
				this.ruleForm.business.splice(this.ruleForm.business.indexOf(-1), 1);
			}
			this.ruleForm.business.forEach(function (id) {
				for (var k in _this5.config.business) {
					_this5.config.business[k].forEach(function (item) {
						if (item.id == id) {
							arr.push({ id: item.id, name: item.name });
						}
					});
				}
			});
			this.businessStr = arr;
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
			var _this6 = this;

			Object(brand["j" /* getCateList */])().then(function (response) {
				_this6.cate = response.data.data;
			});
		},
		changeCate: function changeCate() {
			var _this7 = this;

			this.ruleForm.area2 = "";
			Object(brand["k" /* getCateListChild */])(this.ruleForm.pid).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this7.cateChilds = data;
					var temp = [];
					_this7.cateChilds.forEach(function (item, index) {
						temp.push(item.id);
					});
					if (!temp.includes(_this7.ruleForm.cate_id) && _this7.ruleForm.cate_id != null) {
						_this7.$message({
							message: '请重新选择所属子分类',
							type: "warning"
						});
					}
				} else {
					_this7.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getUserList: function getUserList() {
			var _this8 = this;

			Object(brand["p" /* getUserList */])().then(function (response) {
				_this8.users = response.data.data;
			});
		},
		getConfigList: function getConfigList() {
			var _this9 = this;

			Object(brand["o" /* getConfigList */])().then(function (response) {
				if (response && response.data && response.data.data) {
					_this9.config = response.data.data;
					if (_this9.$route.params.id > 0 && _this9.ruleForm.business) {
						_this9.businessChange();
					}
					if (_this9.$route.params.id > 0 && _this9.ruleForm.settledCity) {
						_this9.settledCityChange();
					}
				}
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
				this.$message.error("上传头像图片大小不能超过 2MB!");
			}
			// return isJPG && isLt2M;
			return isLt2M;
		},
		handleImgRemove: function handleImgRemove(file, fileList) {
			var _this10 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this10.ruleForm.pic.splice(index, 1);
				}
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.ruleForm.pic.push(res.data.show_url);
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.show_url || file.url || file.img_show;
			this.dialogVisible = true;
		},
		handleResData: function handleResData(data) {
			var keys = ["facilities", "business", "brand_label", "short_home", "settledCity"];
			for (var i = 0; i < keys.length; i++) {
				if (!!data[keys[i]]) {
					data[keys[i]] = data[keys[i]].map(function (item) {
						return Number(item);
					});
				} else {
					data[keys[i]] = [];
				}
			}

			this.price_unit = data.price_unit;
			data.pid = Number(data.pid);
			data.cate_id = Number(data.cate_id);
			data.rec_position = Number(data.rec_position);
			data.status = Number(data.status);
			this.fileList = data.file.map(function (item) {
				return {
					url: item.show_url,
					title: ""
				};
			});
		},
		getBrandDetail: function getBrandDetail(id) {
			var _this11 = this;

			Object(brand["h" /* getBrandDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this11.handleResData(data);
				_this11.userClaim = data.userClaim;
				_this11.remarkLists = data.remarkLists || [];
				_this11.ruleForm = assign_default()(_this11.ruleForm, data);
				_this11.settledBusinessList = data.settledBusinessList;
				// this.settledBusinessList=[{
				// 	'value':'89',
				// 	'label':'dddd'
				// }];
				if (_this11.ruleForm.pid) {
					_this11.changeCate();
				}
				if (_this11.$route.params.id > 0 && _this11.ruleForm.business) {
					_this11.businessChange();
				}
				if (_this11.$route.params.id > 0 && _this11.ruleForm.settledCity) {
					_this11.settledCityChange();
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
			var _this12 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this12.editOrAddOffice();
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this13 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(brand["e" /* editBrandDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this13.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this13.$store.dispatch("delView", _this13.$route);
							_this13.$router.go(-1);
						}, 500);
					} else {
						_this13.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				Object(brand["a" /* addBrandDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this13.$notify({
							title: "成功",
							message: "提交成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this13.$store.dispatch("delView", _this13.$route);
							_this13.$router.go(-1);
						}, 500);
					} else {
						_this13.$message({
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
		},
		getAreaLists: function getAreaLists() {
			var _this14 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this14.areas = data;
					_this14.areas1 = data.slice(1);
					_this14.areas1Code = _this14.areas1[0].code;
				} else {
					_this14.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4aac7e04","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/brand/BrandDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brand-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"所属分类","prop":"pid"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择所属分类"},on:{"change":_vm.changeCate},model:{value:(_vm.ruleForm.pid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "pid", $$v)},expression:"ruleForm.pid"}},_vm._l((_vm.cate),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"cate_id"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择所属子分类"},model:{value:(_vm.ruleForm.cate_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cate_id", $$v)},expression:"ruleForm.cate_id"}},_vm._l((_vm.cateChilds),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),(_vm.config.business)?_c('el-form-item',{attrs:{"label":"商圈偏好"}},[_vm._l((_vm.businessStr),function(tag){return _c('el-tag',{key:tag.id,attrs:{"closable":""},on:{"close":function($event){_vm.handleClose(tag)}}},[_vm._v(" "+_vm._s(tag.name))])}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.businessChange},model:{value:(_vm.ruleForm.business),callback:function ($$v) {_vm.$set(_vm.ruleForm, "business", $$v)},expression:"ruleForm.business"}},[_c('el-tabs',{attrs:{"type":"border-card"}},_vm._l((_vm.config.business),function(item,key){return _c('el-tab-pane',{key:key,attrs:{"label":key}},_vm._l((item),function(t){return _c('el-checkbox',{key:t.name,attrs:{"label":t.id}},[_vm._v(_vm._s(t.name))])}))}))],1)],2):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"品牌名称","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入品牌名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"326px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"首年费用总预算","prop":"price_min"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最小分租金"},model:{value:(_vm.ruleForm.price_min),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price_min", $$v)},expression:"ruleForm.price_min"}}),_c('span',[_vm._v(" ～")])],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"200px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"price_max"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最大分租金"},model:{value:(_vm.ruleForm.price_max),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price_max", $$v)},expression:"ruleForm.price_max"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"140px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"price_unit"}},[_c('el-select',{attrs:{"placeholder":"请选择租金单位"},model:{value:(_vm.ruleForm.price_unit),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price_unit", $$v)},expression:"ruleForm.price_unit"}},_vm._l((_vm.config.price_unit),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"租金单价","prop":"rent_price_min"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最小租金单价"},model:{value:(_vm.ruleForm.rent_price_min),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_price_min", $$v)},expression:"ruleForm.rent_price_min"}}),_c('span',[_vm._v(" ～")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"rent_price_max"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最大租金单价"},model:{value:(_vm.ruleForm.rent_price_max),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_price_max", $$v)},expression:"ruleForm.rent_price_max"}}),_vm._v("元/㎡/天\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"期望面积","prop":"area_min"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最小分面积"},model:{value:(_vm.ruleForm.area_min),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area_min", $$v)},expression:"ruleForm.area_min"}}),_c('span',[_vm._v(" ～")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area_max"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最大分面积"},model:{value:(_vm.ruleForm.area_max),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area_max", $$v)},expression:"ruleForm.area_max"}}),_vm._v(" 平方米\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"意向楼层","prop":"floor_min"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最小分楼层"},model:{value:(_vm.ruleForm.floor_min),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_min", $$v)},expression:"ruleForm.floor_min"}}),_c('span',[_vm._v(" ～")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"floor_max"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最大分楼层"},model:{value:(_vm.ruleForm.floor_max),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_max", $$v)},expression:"ruleForm.floor_max"}}),_vm._v(" 楼\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页短标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.short_home),callback:function ($$v) {_vm.$set(_vm.ruleForm, "short_home", $$v)},expression:"ruleForm.short_home"}},_vm._l((_vm.config.short_home),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"配套设施"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.facilities),callback:function ($$v) {_vm.$set(_vm.ruleForm, "facilities", $$v)},expression:"ruleForm.facilities"}},_vm._l((_vm.config.facilities),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"录入人","prop":"user"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择录入人","value-key":"id"},model:{value:(_vm.ruleForm.user),callback:function ($$v) {_vm.$set(_vm.ruleForm, "user", $$v)},expression:"ruleForm.user"}},_vm._l((_vm.users),function(item){return _c('el-option',{key:'users'+item.id,attrs:{"label":item.chinesename,"value":item}},[_vm._v(" "+_vm._s(item.chinesename))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系电话"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入联系电话"},model:{value:(_vm.ruleForm.user.mobile),callback:function ($$v) {_vm.$set(_vm.ruleForm.user, "mobile", $$v)},expression:"ruleForm.user.mobile"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"品牌联系人","prop":"agent_name"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"maxlength":"30","placeholder":"请输入品牌联系人"},model:{value:(_vm.ruleForm.agent_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "agent_name", $$v)},expression:"ruleForm.agent_name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系电话","prop":"agent_mobile"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入联系电话"},model:{value:(_vm.ruleForm.agent_mobile),callback:function ($$v) {_vm.$set(_vm.ruleForm, "agent_mobile", $$v)},expression:"ruleForm.agent_mobile"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.brand_label),callback:function ($$v) {_vm.$set(_vm.ruleForm, "brand_label", $$v)},expression:"ruleForm.brand_label"}},_vm._l((_vm.config.brand_label),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优选选址"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入优选选址","minlength":"10","maxlength":"300","rows":"3"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"品牌介绍","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"已入驻城市"}},[_vm._l((_vm.settledCityStr),function(tag){return _c('el-tag',{key:tag.id,attrs:{"closable":""},on:{"close":function($event){_vm.handleSettledCityClose(tag)}}},[_vm._v(" "+_vm._s(tag.name))])}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.settledCityChange},model:{value:(_vm.ruleForm.settledCity),callback:function ($$v) {_vm.$set(_vm.ruleForm, "settledCity", $$v)},expression:"ruleForm.settledCity"}},[_c('el-tabs',{attrs:{"type":"border-card"}},_vm._l((_vm.config.settledCity),function(item,key){return _c('el-tab-pane',{key:key,attrs:{"label":key}},_vm._l((item),function(t){return _c('el-checkbox',{key:t.id,attrs:{"label":t.id}},[_vm._v(_vm._s(t.name))])}))}))],1)],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":"已入驻商业体"}},[_c('el-select',{staticStyle:{"'width":"400px"},attrs:{"multiple":"","filterable":"","remote":"","placeholder":"已入驻商业体","remote-method":_vm.fetchSettledBusiness,"loading":_vm.loading},model:{value:(_vm.ruleForm.settledBusiness),callback:function ($$v) {_vm.$set(_vm.ruleForm, "settledBusiness", $$v)},expression:"ruleForm.settledBusiness"}},_vm._l((_vm.settledBusinessList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"体量偏好","prop":"mass"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"请选择商业体体量偏好"},model:{value:(_vm.ruleForm.mass),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mass", $$v)},expression:"ruleForm.mass"}},_vm._l((_vm.config.mass),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开业时间偏好","prop":"openTime"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"请选择商业体开业时间偏好"},model:{value:(_vm.ruleForm.openTime),callback:function ($$v) {_vm.$set(_vm.ruleForm, "openTime", $$v)},expression:"ruleForm.openTime"}},_vm._l((_vm.config.open_time),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),(_vm.userClaim.length)?_c('el-form-item',{attrs:{"label":"品牌认领人","prop":"userClaim"}},_vm._l((_vm.userClaim),function(item,index){return _c('el-row',{key:item.id,staticStyle:{"margin-bottom":"10px"}},[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":10}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","value":item.username,"maxlength":"30","placeholder":"请输入联系人"}})],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":14}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","value":item.mobile,"maxlength":"30","placeholder":"请输入联系电话"}}),_vm._v(" "),_c('i',{staticClass:"el-icon-delete",on:{"click":function($event){_vm.deleteUserClaim(item.id,index)}}})],1)],1)})):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图","prop":"img"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.imagecropperShow=true}}},[(_vm.ruleForm.img_show)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img_show}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img_show)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])])]),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow),expression:"imagecropperShow"}],key:_vm.imagecropperKey,attrs:{"width":265,"height":159,"params":{isPublic: 0},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"品牌图片","prop":"pic"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.rec_position),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rec_position", $$v)},expression:"ruleForm.rec_position"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("禁用")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var brand_BrandDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/brand/BrandDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("tPtE")
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
  BrandDetail,
  brand_BrandDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_brand_BrandDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "tPtE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("LYJP");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("615f08ef", content, true);

/***/ })

});
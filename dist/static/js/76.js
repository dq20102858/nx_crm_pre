webpackJsonp([76],{

/***/ "VGfa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/components/ImageCropper/index.vue + 6 modules
var ImageCropper = __webpack_require__("Oakg");

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/information.js
var information = __webpack_require__("O6uv");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/information/InformationDetail.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var InformationDetail = ({
	name: "InformationDetail",
	data: function data() {
		var _ruleForm,
		    _this = this;

		return {
			ruleForm: (_ruleForm = {
				module: null,
				cate_id: null,
				cate_type: null,
				title: null,
				source: null,
				editor: null,
				tags: [],
				img: null,
				address: null,
				map: null,
				check_status: null,
				description: null,
				is_img_rec: null,
				house_type: null,
				house_id: null,
				info: null,
				isrec: null
			}, defineProperty_default()(_ruleForm, "module", null), defineProperty_default()(_ruleForm, "ordid", null), defineProperty_default()(_ruleForm, "banner", null), defineProperty_default()(_ruleForm, "file", []), defineProperty_default()(_ruleForm, "area", null), defineProperty_default()(_ruleForm, "brand_img", ''), defineProperty_default()(_ruleForm, "area2", null), _ruleForm),
			cates: [],
			cate_childs: [],
			center: { lng: 118.815358, lat: 32.063673 },
			config: {},
			subways: [],
			host: "http://" + location.host,
			// host: "http://boss.912zf.cn",
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			imagecropperShow: false,
			imagecropperKey: 99,
			imagecropperShow1: false,
			imagecropperKey1: 299,
			imagecropperShow2: false,
			imagecropperKey2: 499,
			pickerOptions0: {
				disabledDate: function disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
				}
			},
			areas: [],
			districts: [],
			fileList: [],
			remarkList: [],
			last: null,
			rules: {
				title: [{
					required: true,
					message: "请输入产业园名称",
					trigger: "blur"
				}],
				price: [{
					required: true,
					message: "请输入价格",
					trigger: "blur"
				}],
				mianji: [{
					required: true,
					message: "请输入面积",
					trigger: "blur"
				}],
				total_mianji: [{
					required: true,
					message: "请输入面积",
					trigger: "blur"
				}],
				developer: [{
					required: true,
					message: "请输入开发商名称",
					trigger: "blur"
				}],
				brand: [{
					required: true,
					message: "请输入入驻品牌",
					trigger: "blur"
				}],
				address: [{
					required: true,
					message: "请输入地址",
					trigger: "blur"
				}],
				near_street: [{
					required: true,
					message: "请输入邻近街道",
					trigger: "blur"
				}],
				number: [{
					required: true,
					message: "请输入门牌号/室号",
					trigger: "blur"
				}],
				invitation: [{
					required: true,
					message: "请输入招商业态",
					trigger: "blur"
				}],
				land_use: [{
					required: true,
					message: "请输入用地性质",
					trigger: "blur"
				}],
				contact: [{
					required: true,
					message: "请输入联系人",
					trigger: "blur"
				}],
				subway_id: [{
					required: true,
					message: "请选择地铁",
					trigger: "blur"
				}],
				area: [{
					required: true,
					message: "请选择区域",
					trigger: "blur"
				}],
				area2: [{
					required: true,
					message: "请选择街道",
					trigger: "blur"
				}],
				brand_img: [{
					validator: function validator(rule, value, callback) {
						console.log(_this.ruleForm.brand_img);
						if (_this.ruleForm.cate_id == 14 && _this.ruleForm.brand_img == '') {
							callback(new Error("请上传服务品牌图片"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}]
			}
		};
	},

	components: { Tinymce: Tinymce["a" /* default */], ImageCropper: ImageCropper["a" /* default */] },
	created: function created() {
		if (this.$route.params.id) {
			this.getInformationDetail(this.$route.params.id);
		}
		this.getAreaLists();
		this.getCateList();
	},
	mounted: function mounted() {},

	watch: {
		$route: function $route(to, from) {
			this.globalEvBus.$emit("reload");
		}
	},
	methods: {
		cropSuccess: function cropSuccess(resData) {
			this.imagecropperShow = false;
			this.imagecropperKey = this.imagecropperKey + 1;
			this.ruleForm.img = resData.data.show_url;
		},
		cropSuccess1: function cropSuccess1(resData) {
			this.imagecropperShow1 = false;
			this.imagecropperKey1 = this.imagecropperKey1 + 1;
			this.ruleForm.banner = resData.data.show_url;
		},
		cropSuccess2: function cropSuccess2(resData) {
			this.imagecropperShow2 = false;
			this.imagecropperKey2 = this.imagecropperKey2 + 1;
			this.ruleForm.brand_img = resData.data.show_url;
		},
		close: function close() {
			this.imagecropperShow = false;
		},
		close1: function close1() {
			this.imagecropperShow1 = false;
		},
		close2: function close2() {
			this.imagecropperShow2 = false;
		},
		getCateList: function getCateList() {
			var _this2 = this;

			Object(information["d" /* getCateList */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.cates = data;
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
		getChildCateListChange: function getChildCateListChange() {
			this.ruleForm.cate_type = "";
			this.getChildCateList();
		},
		getChildCateList: function getChildCateList() {
			var _this3 = this;

			Object(information["d" /* getCateList */])(this.ruleForm.cate_id).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.cate_childs = data;
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
		searchByStationName: function searchByStationName() {
			var _this4 = this;

			var localSearch = new BMap.LocalSearch(this.$refs.map.map);
			this.$refs.map.map.clearOverlays(); //清空原来的标注
			var keyword = this.areas.find(function (item) {
				return item.code == _this4.ruleForm.area;
			}).name + this.districts.find(function (item) {
				return item.code == _this4.ruleForm.area2;
			}).name + this.ruleForm.address;
			localSearch.setSearchCompleteCallback(function (searchResult) {
				var poi = searchResult.getPoi(0);
				if (poi) {
					_this4.ruleForm.map = poi.point.lng + "," + poi.point.lat; //这里是追加到对应的input文本框里，可以根据自己的需要来修改
					_this4.$refs.map.map.centerAndZoom(poi.point, 18);
					var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
					_this4.$refs.map.map.addOverlay(marker);
				} else {
					_this4.$alert("没有查询到该地址坐标，请您在地图上自行点击选择所在位置", "提示", {
						confirmButtonText: "确定"
					});
				}
			});
			localSearch.search(keyword);
		},
		pickPoint: function pickPoint(e) {
			this.ruleForm.map = e.point.lng + "," + e.point.lat;
			var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat));
			e.target.clearOverlays();
			e.target.addOverlay(marker);
		},
		handleAvatarSuccess: function handleAvatarSuccess(res, file) {
			this.ruleForm.img = res.data.url;
		},
		handleBannerSuccess: function handleBannerSuccess(res, file) {
			this.ruleForm.banner = res.data.url;
		},
		handleBrandSuccess: function handleBrandSuccess(res, file) {
			this.ruleForm.brand_img = res.data.url;
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
			var _this5 = this;

			this.fileList = fileList;
			fileList.forEach(function (item, index) {
				if (item.url == file.url) {
					_this5.ruleForm.file.splice(index, 1);
				}
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.fileList.push({
				name: "",
				url: res.data.show_url
			});
			this.ruleForm.file.push(res.data.show_url);
		},
		handleBrandRemove: function handleBrandRemove(index) {
			this.ruleForm.brand.splice(index, 1);
		},
		handleBrandImgSuccess: function handleBrandImgSuccess(res, file) {
			this.ruleForm.brand.push({
				path: res.data.url,
				title: null
			});
		},
		handlePictureCardPreview: function handlePictureCardPreview(url) {
			if (typeof url == "string") {
				this.dialogImageUrl = url;
			} else {
				this.dialogImageUrl = url.url;
			}
			this.dialogVisible = true;
		},
		handleResData: function handleResData(data) {
			data.house_type = Number(data.house_type);
			data.tags = data.tags || [];
			data.file = data.file || [];
			this.fileList = data.file.map(function (item) {
				return {
					url: item,
					title: ""
				};
			});
		},
		getInformationDetail: function getInformationDetail(id) {
			var _this6 = this;

			Object(information["e" /* getInformationDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this6.handleResData(data);
				_this6.ruleForm = assign_default()(_this6.ruleForm, data);
				setTimeout(function () {
					if (_this6.ruleForm.map) {
						var arr = _this6.ruleForm.map.split(",");
						var marker = new BMap.Marker(new BMap.Point(arr[0], arr[1]));
						_this6.$refs.map.map.clearOverlays();
						_this6.$refs.map.map.addOverlay(marker);
					}
				}, 1000);
				_this6.getChildCateList();
				Object(requirement["s" /* getDistrictLists */])(_this6.ruleForm.area).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this6.districts = data;
					} else {
						_this6.$message({
							message: response.data.msg,
							type: "warning"
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			}).catch(function (err) {
				console.log(err);
			});
		},

		/**
   * 提交表单
   *
   */
		submitForm: function submitForm(formName) {
			if (this.ruleForm.cate_id == 14 && this.ruleForm.brand_img == '') {
				this.$notify({
					title: "",
					message: "请上传品牌图片",
					type: "error",
					duration: 2000
				});
				return;
			}
			this.editOrAddInformation();
		},
		editOrAddInformation: function editOrAddInformation() {
			var _this7 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(information["c" /* editInformationDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this7.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this7.$store.dispatch("delView", _this7.$route);
							_this7.$router.go(-1);
						}, 500);
					} else {
						_this7.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				Object(information["a" /* addInformationDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this7.$notify({
							title: "成功",
							message: "提交成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this7.$store.dispatch("delView", _this7.$route);
							_this7.$router.go(-1);
						}, 500);
					} else {
						_this7.$message({
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
			var _this8 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this8.areas = data;
					_this8.areas1 = data.slice(1);
					_this8.areas1Code = _this8.areas1[0].code;
				} else {
					_this8.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea: function changeArea() {
			var _this9 = this;

			this.ruleForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this9.districts = data;
				} else {
					_this9.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-41422230","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/information/InformationDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"information-form"},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"180px","id":"consult-form","size":"small"}},[_c('el-form-item',{attrs:{"label":"选择模式"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.module),callback:function ($$v) {_vm.$set(_vm.ruleForm, "module", $$v)},expression:"ruleForm.module"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("左右模式")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("大图模式")])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"380px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"所属分类","prop":"cate_id"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"请选择所属分类"},on:{"change":_vm.getChildCateListChange},model:{value:(_vm.ruleForm.cate_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cate_id", $$v)},expression:"ruleForm.cate_id"}},_vm._l((_vm.cates),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"cate_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"请选择所属子分类"},model:{value:(_vm.ruleForm.cate_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cate_type", $$v)},expression:"ruleForm.cate_type"}},_vm._l((_vm.cate_childs),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入标题"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"来源","prop":"source"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入来源"},model:{value:(_vm.ruleForm.source),callback:function ($$v) {_vm.$set(_vm.ruleForm, "source", $$v)},expression:"ruleForm.source"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发布人","prop":"editor"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入发布人"},model:{value:(_vm.ruleForm.editor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "editor", $$v)},expression:"ruleForm.editor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标签","prop":"tags"}},[_c('el-select',{attrs:{"multiple":"","filterable":"","allow-create":"","default-first-option":"","placeholder":"输入标签名称确认后，按回车键，每个标签2～6个字"},model:{value:(_vm.ruleForm.tags),callback:function ($$v) {_vm.$set(_vm.ruleForm, "tags", $$v)},expression:"ruleForm.tags"}},[_c('el-option',{attrs:{"disabled":"","label":"输入标签名称确认后，按回车键","value":2}},[_vm._v(" 输入标签名称确认，按回车键")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入序号，越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图","prop":"img"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.imagecropperShow=true}}},[(_vm.ruleForm.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm.img)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])])]),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow),expression:"imagecropperShow"}],key:_vm.imagecropperKey,attrs:{"width":595,"height":400,"params":{isPublic: 0},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),(_vm.ruleForm.cate_id==14)?_c('el-form-item',{attrs:{"label":"品牌图片","prop":"brand_img"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.imagecropperShow2=true}}},[(_vm.ruleForm.brand_img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.brand_img}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.brand_img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm.brand_img)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])])]):_vm._e(),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow2),expression:"imagecropperShow2"}],key:_vm.imagecropperKey2,attrs:{"width":363,"height":200,"params":{isPublic: 0},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close2,"crop-upload-success":_vm.cropSuccess2}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"banner背景图","prop":"img"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.imagecropperShow1=true}}},[(_vm.ruleForm.banner)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.banner}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.banner)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm.banner)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])])]),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow1),expression:"imagecropperShow1"}],key:_vm.imagecropperKey1,attrs:{"width":1200,"height":250,"params":{isPublic: 0},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close1,"crop-upload-success":_vm.cropSuccess1}}),_vm._v(" "),(_vm.ruleForm.cate_id==2)?_c('el-row',[_c('el-col',{staticStyle:{"width":"310px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.cate_id==2)?_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","readonly":"","placeholder":"地理位置坐标","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边图片"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简介","prop":"description"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入具体描述","maxlength":"255"},model:{value:(_vm.ruleForm.description),callback:function ($$v) {_vm.$set(_vm.ruleForm, "description", $$v)},expression:"ruleForm.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细内容","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.isrec),callback:function ($$v) {_vm.$set(_vm.ruleForm, "isrec", $$v)},expression:"ruleForm.isrec"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图片推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_img_rec),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_img_rec", $$v)},expression:"ruleForm.is_img_rec"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.check_status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "check_status", $$v)},expression:"ruleForm.check_status"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":2}},[_vm._v("审核通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":3,"value":3}},[_vm._v("审核不通过")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源类别","prop":"house_type"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择房源类别"},model:{value:(_vm.ruleForm.house_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_type", $$v)},expression:"ruleForm.house_type"}},[_c('el-option',{attrs:{"label":"出租商铺","value":60}},[_vm._v(" 出租商铺")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出租写字楼","value":61}},[_vm._v(" 出租写字楼")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出租住宅","value":62}},[_vm._v(" 出租住宅")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出租厂房仓库","value":67}},[_vm._v(" 出租厂房仓库")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出售商铺","value":71}},[_vm._v(" 出售商铺")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出售写字楼","value":72}},[_vm._v(" 出售写字楼")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出售住宅","value":70}},[_vm._v(" 出售住宅")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出售厂房仓库","value":73}},[_vm._v(" 出售厂房仓库")]),_vm._v(" "),_c('el-option',{attrs:{"label":"商业体","value":65}},[_vm._v(" 商业体")]),_vm._v(" "),_c('el-option',{attrs:{"label":"产业园","value":66}},[_vm._v(" 产业园")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"推荐房源ID","prop":"house_id"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入推荐房源ID"},model:{value:(_vm.ruleForm.house_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_id", $$v)},expression:"ruleForm.house_id"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var information_InformationDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/information/InformationDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("yRvP")
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
  InformationDetail,
  information_InformationDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_information_InformationDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "aHmk":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.information-form {\n  padding: 20px;\n  width: 1000px;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.information-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.information-form .el-upload-list-box,\n.information-form .el-upload-list-box + div {\n  float: left;\n}\n.information-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 300px;\n}\n#tinymcy-box .mce-container,\n#tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ }),

/***/ "yRvP":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aHmk");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7e0dbaa1", content, true);

/***/ })

});
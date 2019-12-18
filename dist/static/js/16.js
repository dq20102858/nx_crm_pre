webpackJsonp([16],{

/***/ "ngkf":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.office-form {\n  padding: 20px;\n}\n.office-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  min-height: 360px;\n  width: 100%;\n}\n.office-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.office-form fieldset ol {\n    padding-left: 25px;\n}\n.office-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.office-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.office-form .el-upload-list-box,\n.office-form .el-upload-list-box + div {\n  float: left;\n}\n.office-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box1 .mce-container,\n#tinymcy-box1 .mce-container *,\n#tinymcy-box2 .mce-container,\n#tinymcy-box2 .mce-container *,\n#tinymcy-box3 .mce-container,\n#tinymcy-box3 .mce-container *,\n#tinymcy-box4 .mce-container,\n#tinymcy-box4 .mce-container * {\n  white-space: normal;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "oAKY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ngkf");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("8de01ce2", content, true);

/***/ }),

/***/ "pkfx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = getNewHouseList;
/* harmony export (immutable) */ __webpack_exports__["b"] = delNewHouse;
/* harmony export (immutable) */ __webpack_exports__["e"] = getNewHouseDetail;
/* harmony export (immutable) */ __webpack_exports__["c"] = editNewHouseDetail;
/* harmony export (immutable) */ __webpack_exports__["a"] = addNewHouseDetail;
/* unused harmony export getUserList */
/* harmony export (immutable) */ __webpack_exports__["d"] = getConfigList;
/* unused harmony export fetchEstateLists */
/* unused harmony export getAroundInfo */
/* unused harmony export getFoodTop */
/* unused harmony export getcheckerList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__("vLgD");



function getNewHouseList(page, params) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/new_house/lists',
    method: 'get',
    params: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ page: page }, params)
  });
}

function delNewHouse(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/new_house/delete',
    method: 'post',
    data: id
  });
}

function getNewHouseDetail(id) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/new_house/detail',
    method: 'get',
    params: { id: id }
  });
}

function editNewHouseDetail(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/new_house/editDo',
    method: 'post',
    data: data
  });
}

function addNewHouseDetail(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/new_house/addDo',
    method: 'post',
    data: data
  });
}

function getUserList() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/api/user/list',
    method: 'get'
  });
}

function getConfigList() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/new_house/configList',
    method: 'get'
  });
}

function fetchEstateLists(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/sale/fetchEstateLists',
    method: 'get',
    params: data
  });
}
function getAroundInfo(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/sale/getAroundInfo',
    method: 'get',
    params: data
  });
}
function getFoodTop(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/sale/getFoodTop',
    method: 'get',
    params: data
  });
}
function getcheckerList(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */])({
    url: '/sale/getHouseWorker',
    method: 'get',
    params: data
  });
}

/***/ }),

/***/ "tolm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/components/ImageCropper/index.vue + 6 modules
var ImageCropper = __webpack_require__("Oakg");

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// EXTERNAL MODULE: ./src/api/912cms/newHouse.js
var newHouse = __webpack_require__("pkfx");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/sale/new-house/HouseDetail.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ var HouseDetail = ({
	name: "HouseDetail",
	components: { Tinymce: Tinymce["a" /* default */], ImageCropper: ImageCropper["a" /* default */] },
	data: function data() {
		var _this = this;

		return {
			ruleForm: {
				title: null,
				project_alias: null,
				main_part: [],
				other_part: [],
				open_time: null,
				deliver_time: null,
				wuye_type: null,
				zhuangxiu: null,
				developer: null,
				build_type: null,
				area_cover: null,
				area_build: null,
				households: null,
				property: null,
				park: null,
				park_up_num: null,
				park_down_num: null,
				sale_area: null,
				sale_area2: null,
				sale_address: null,
				wuye: null,
				around_plan: [{
					name: "教育",
					desc: null
				}, {
					name: "医院",
					desc: null
				}, {
					name: "购物",
					desc: null
				}],
				green_ratio: null,
				volume_ratio: null,
				heat_type: null,
				electric_type: null,
				water_type: null,
				price: null,
				wuyefei: null,
				sale_status: null,
				agent: null,
				contact: null,
				contact_phone: null,
				project_title: null,
				info: null,
				area: null,
				area2: null,
				address: null,
				map: null,
				img: null,
				file: {
					IMG_XG: [],
					IMG_SJ: []
				},
				hx_pic: [],
				rec_position: 0,
				status: -1,
				ordid: null,
				seo_title: null,
				seo_keys: null,
				seo_desc: null
			},
			agents: [],
			mainStr: null,
			otherStr: null,
			cells: [],
			file: {
				IMG_XG: [],
				IMG_SJ: []
			},
			imagecropperShow: false,
			imagecropperKey: 0,
			hx_pic: [],
			isEdit: false,
			exiting: false,
			exitingId: null,
			qualification: {},
			center: { lng: 118.815358, lat: 32.063673 },
			config: {},
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			image_type: [],
			image_index: null,
			dialogVisible: false,
			dialogImageUrl1: "",
			dialogVisible1: false,
			pickerOptions0: {
				disabledDate: function disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
				}
			},
			areas: [],
			areas2: [],
			districts: [],
			districts2: [],
			remarkLists: [],
			loading: false,
			last: null,
			rules: {
				title: [{
					required: true,
					message: "请输入项目名称",
					trigger: "blur"
				}],
				// main_part: [
				// 	{
				// 		required: true,
				// 		message: "请新增主力户型",
				// 		trigger: "blur"
				// 	}
				// ],

				open_time: [{
					required: true,
					message: "请选择开盘时间",
					trigger: "blur"
				}],
				deliver_time: [{
					required: true,
					message: "请选择交付时间",
					trigger: "blur"
				}],
				wuye_type: [{
					required: true,
					message: "请选择物业类型",
					trigger: "blur"
				}],
				wuyefei: [{
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 999) {
							callback(new Error("最大不超过999且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				zhuangxiu: [{
					required: true,
					message: "请选择装修情况",
					trigger: "blur"
				}],
				developer: [{
					required: true,
					message: "请输入开发商",
					trigger: "blur"
				}],
				build_type: [{
					required: true,
					message: "请选择建筑类型",
					trigger: "blur"
				}],
				households: [{
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 999999) {
							callback(new Error("最大不超过999999且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				area_cover: [{
					required: true,
					message: "请输入占地面积",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 9999999) {
							callback(new Error("最大不超过9999999且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				park: [{
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 99) {
							callback(new Error("最大不超过99且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				area_build: [{
					required: true,
					message: "请输入建筑面积",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 999999) {
							callback(new Error("最大不超过999999且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				property_type: [{
					required: true,
					message: "请选择产权年限",
					trigger: "blur"
				}],

				heat_type: [{
					required: true,
					message: "请选择供暖方式",
					trigger: "blur"
				}],
				electric_type: [{
					required: true,
					message: "请选择供电方式",
					trigger: "blur"
				}],
				water_type: [{
					required: true,
					message: "请选择供水方式",
					trigger: "blur"
				}],
				price: [{
					required: true,
					message: "请输入楼盘均价",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 999999) {
							callback(new Error("最大不超过999999且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				sale_status: [{
					required: true,
					message: "请选择销售情况",
					trigger: "blur"
				}],
				project_title: [{
					required: true,
					message: "请输入项目标题",
					trigger: "blur"
				}],
				info: [{
					required: true,
					message: "请输入项目介绍",
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
				address: [{
					required: true,
					message: "请输入详细地址",
					trigger: "blur"
				}],
				hx_pic: [{
					required: true,
					message: "请上传户型图",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value.length > 50) {
							callback(new Error("户型图不超过50张"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				"file.IMG_XG": [{
					validator: function validator(rule, value, callback) {
						if (_this.ruleForm.file.IMG_XG.length > 10 || _this.ruleForm.file.IMG_XG.length < 0) {
							callback(new Error("效果图大于0且不超过10张"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				"file.IMG_SJ": [{
					validator: function validator(rule, value, callback) {
						if (_this.ruleForm.file.IMG_SJ.length > 10) {
							callback(new Error("实景图不超过10张"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				green_ratio: [{
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 100) {
							callback(new Error("绿化率最大不超过100且不能小于0"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				volume_ratio: [{
					validator: function validator(rule, value, callback) {
						if (Number(value) < 0 || Number(value) > 10) {
							callback(new Error("容积率最大不超过10且不能小于0"));
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
		this.getConfigList();
		if (this.$route.params.id > 0) {
			this.getNewHouseDetail(this.$route.params.id);
		}
		this.getAreaLists();
		if (this.$route.params.id > 0) {
			this.isEdit = true;
		}
	},
	methods: {
		cropSuccess: function cropSuccess(resData) {
			this.imagecropperShow = false;
			this.imagecropperKey = this.imagecropperKey + 1;
			this.ruleForm.img = resData.data.show_url;
		},
		close: function close() {
			this.imagecropperShow = false;
		},
		addMainPart: function addMainPart() {
			if (this.mainStr == null || this.mainStr.trim() == "") {
				return;
			}
			if (this.ruleForm.main_part && this.ruleForm.main_part.length >= 5) {
				this.$message({
					message: "最多新增5个",
					type: "warning"
				});
				this.mainStr = null;
				return;
			}
			if (this.ruleForm.main_part.includes(Number(this.mainStr))) {
				this.$message({
					message: "不能重复添加",
					type: "warning"
				});
				this.mainStr = null;
				return;
			}
			if (this.mainStr < 0 || this.mainStr > 9999) {
				this.$message({
					message: "不能小于0或大于9999",
					type: "warning"
				});
				this.otherStr = null;
				return;
			}
			this.ruleForm.main_part.push(this.mainStr);
			this.mainStr = null;
		},
		addOhterPart: function addOhterPart() {
			if (this.otherStr == null || this.otherStr.trim() == "") {
				return;
			}
			if (this.ruleForm.other_part && this.ruleForm.other_part.length >= 5) {
				this.$message({
					message: "最多新增5个",
					type: "warning"
				});
				this.otherStr = null;
				return;
			}
			if (this.otherStr < 0 || this.otherStr > 9999) {
				this.$message({
					message: "不能小于0或大于9999",
					type: "warning"
				});
				this.otherStr = null;
				return;
			}
			this.ruleForm.other_part.push(this.otherStr);
			this.otherStr = null;
		},
		handleMainClose: function handleMainClose(index) {
			console.log(index);
			this.ruleForm.main_part.splice(index, 1);
		},
		handleOtherClose: function handleOtherClose(index) {
			console.log(index);
			this.ruleForm.other_part.splice(index, 1);
		},
		fetchManager: function fetchManager(query) {
			var _this2 = this;

			if (query !== "") {
				this.loading = true;
				Object(requirement["m" /* fetchManager */])(query).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this2.loading = false;
						_this2.agents = data;
					} else {
						_this2.$message({
							message: response.data.msg,
							type: "warning"
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				this.agents = [];
			}
		},
		handleSelect: function handleSelect(item) {
			this.exiting = true;
			this.exitingId = item.id;
		},
		jumpTopUrl: function jumpTopUrl(url) {
			window.open(url);
		},
		searchByStationName: function searchByStationName() {
			var _this3 = this;

			var localSearch = new BMap.LocalSearch(this.$refs.map.map);
			this.$refs.map.map.clearOverlays(); //清空原来的标注
			var keyword = this.areas.find(function (item) {
				return item.code == _this3.ruleForm.area;
			}).name + this.districts.find(function (item) {
				return item.code == _this3.ruleForm.area2;
			}).name + this.ruleForm.address;
			localSearch.setSearchCompleteCallback(function (searchResult) {
				var poi = searchResult.getPoi(0);
				if (poi) {
					_this3.ruleForm.map = poi.point.lng + "," + poi.point.lat; //这里是追加到对应的input文本框里，可以根据自己的需要来修改
					_this3.$refs.map.map.centerAndZoom(poi.point, 18);
					var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
					_this3.$refs.map.map.addOverlay(marker);
				} else {
					_this3.$alert("没有查询到该地址坐标，请您在地图上自行点击选择所在位置", "提示", {
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
		getConfigList: function getConfigList() {
			var _this4 = this;

			Object(newHouse["d" /* getConfigList */])().then(function (response) {
				var data = response.data.data;
				_this4.config = data;
			});
		},
		handleAvatarSuccess: function handleAvatarSuccess(res, file) {
			this.ruleForm.img = res.data.show_url;
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
		handleImgRemoveXG: function handleImgRemoveXG(file, fileList) {
			var _this5 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this5.ruleForm.file.IMG_XG.splice(index, 1);
				}
			});
		},
		handleImgRemoveSJ: function handleImgRemoveSJ(file, fileList) {
			var _this6 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this6.ruleForm.file.IMG_SJ.splice(index, 1);
				}
			});
		},
		handleImgSuccessXG: function handleImgSuccessXG(res, file) {
			this.ruleForm.file.IMG_XG.push(res.data.show_url);
		},
		handleImgSuccessSJ: function handleImgSuccessSJ(res, file) {
			this.ruleForm.file.IMG_SJ.push(res.data.show_url);
		},
		handleExceed: function handleExceed(files, fileList) {
			this.$message.warning("\u5F53\u524D\u9650\u5236\u9009\u62E9 10 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 " + files.length + " \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 " + (files.length + fileList.length) + " \u4E2A\u6587\u4EF6");
		},
		handleExceed2: function handleExceed2(files, fileList) {
			this.$message.warning("\u5F53\u524D\u9650\u5236\u9009\u62E9 50 \u4E2A\u6587\u4EF6\uFF0C\u672C\u6B21\u9009\u62E9\u4E86 " + files.length + " \u4E2A\u6587\u4EF6\uFF0C\u5171\u9009\u62E9\u4E86 " + (files.length + fileList.length) + " \u4E2A\u6587\u4EF6");
		},
		handleHXRemove: function handleHXRemove(index) {
			this.ruleForm.hx_pic.splice(index, 1);
		},
		handleHXImgSuccess: function handleHXImgSuccess(res, file) {
			this.ruleForm.hx_pic.push({
				url: res.data.show_url,
				title: null,
				room: 1
			});
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			if (file.response) {
				var url = file.response.data.show_url;
			} else {
				var url = file.url;
			}
			if (this.ruleForm.file.IMG_XG.findIndex(function (item) {
				return item == url;
			}) > -1) {
				this.image_index = this.ruleForm.file.IMG_XG.findIndex(function (item) {
					return item == url;
				});
				this.image_type = this.ruleForm.file.IMG_XG.map(function (item) {
					return item;
				});
			}
			if (this.ruleForm.hx_pic.findIndex(function (item) {
				return item.url == url;
			}) > -1) {
				this.image_index = this.ruleForm.hx_pic.findIndex(function (item) {
					return item.url == url;
				});
				this.image_type = this.ruleForm.hx_pic.map(function (item) {
					return item.url;
				});
			}
			if (this.ruleForm.file.IMG_SJ.findIndex(function (item) {
				return item == url;
			}) > -1) {
				this.image_index = this.ruleForm.file.IMG_SJ.findIndex(function (item) {
					return item == url;
				});
				this.image_type = this.ruleForm.file.IMG_SJ.map(function (item) {
					return item;
				});
			}
			this.dialogImageUrl = this.image_type[this.image_index];
			this.dialogVisible = true;
		},
		handlePictureCardPreview1: function handlePictureCardPreview1(file) {
			this.dialogImageUrl = file.img;
			this.dialogVisible1 = true;
		},
		previmage: function previmage() {
			if (this.image_index == 0) {
				this.$message({
					message: "已经是第一张啦",
					type: "warning"
				});
			} else {
				this.image_index = this.image_index - 1;
				this.dialogImageUrl = this.image_type[this.image_index];
			}
		},
		nextimage: function nextimage() {
			if (this.image_index == this.image_type.length - 1) {
				this.$message({
					message: "已经是最后一张啦",
					type: "warning"
				});
			} else {
				this.image_index = this.image_index + 1;
				this.dialogImageUrl = this.image_type[this.image_index];
			}
		},
		handleResData: function handleResData(data) {
			this.remarkLists = data.remarkLists || [];
			this.agents = data.agent ? [data.agent] : [];
			data.rec_position = Number(data.rec_position);
			data.sale_area = Number(data.sale_area);
			data.sale_area2 = Number(data.sale_area2);
		},
		getNewHouseDetail: function getNewHouseDetail(id) {
			var _this7 = this;

			Object(newHouse["e" /* getNewHouseDetail */])(id).then(function (response) {
				var data = response.data.data;

				_this7.handleResData(data);
				if (data.file) {
					_this7.file.IMG_XG = data.file.IMG_XG.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
					_this7.file.IMG_SJ = data.file.IMG_SJ.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
				} else {
					_this7.file = {
						IMG_XG: [],
						IMG_SJ: []
					};
				}
				if (data.hx_pic) {
					_this7.hx_pic = data.hx_pic.map(function (item) {
						return {
							url: item.url,
							room: item.room,
							title: ""
						};
					});
				}
				_this7.ruleForm = assign_default()(_this7.ruleForm, data);
				setTimeout(function () {
					if (_this7.ruleForm.map) {
						var arr = _this7.ruleForm.map.split(",");
						var point = new BMap.Point(Number(arr[0]), Number(arr[1]));
						var marker = new BMap.Marker(point);
						_this7.$refs.map.map.clearOverlays();
						_this7.$refs.map.map.addOverlay(marker);
						_this7.$refs.map.map.centerAndZoom(point, 18);
					}
				}, 1000);
				Object(requirement["s" /* getDistrictLists */])(_this7.ruleForm.area).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this7.districts = data;
					} else {
						_this7.$message({
							message: response.data.msg,
							type: "warning"
						});
					}
				});
				Object(requirement["s" /* getDistrictLists */])(_this7.ruleForm.sale_area).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this7.districts2 = data;
					} else {
						_this7.$message({
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
			var _this8 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this8.editOrAddOffice();
				} else {
					setTimeout(function () {
						var isError = document.getElementsByClassName("is-error");
						isError[0].querySelector("input").focus();
					}, 100);
					return false;
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this9 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(newHouse["c" /* editNewHouseDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this9.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this9.$store.dispatch("delView", _this9.$route);
							_this9.$router.go(-1);
						}, 500);
					} else {
						_this9.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				Object(newHouse["a" /* addNewHouseDetail */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this9.$notify({
							title: "成功",
							message: "提交成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this9.$store.dispatch("delView", _this9.$route);
							_this9.$router.go(-1);
						}, 500);
					} else {
						_this9.$message({
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
			var _this10 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this10.areas = data;
					_this10.areas1 = data.slice(1);
					_this10.areas1Code = _this10.areas1[0].code;
				} else {
					_this10.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea: function changeArea() {
			var _this11 = this;

			this.ruleForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this11.districts = data;
				} else {
					_this11.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea2: function changeArea2() {
			var _this12 = this;

			this.ruleForm.sale_area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.sale_area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this12.districts2 = data;
				} else {
					_this12.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c9f0133c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/sale/new-house/HouseDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"office-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"项目ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目名称","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入项目名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目别名"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入项目别名"},model:{value:(_vm.ruleForm.project_alias),callback:function ($$v) {_vm.$set(_vm.ruleForm, "project_alias", $$v)},expression:"ruleForm.project_alias"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"主力户型","prop":"main_part"}},[_vm._l((_vm.ruleForm.main_part),function(tag,index){return _c('el-tag',{key:'main_'+tag,attrs:{"closable":""},on:{"close":function($event){_vm.handleMainClose(index)}}},[_vm._v(" "+_vm._s(tag)+"㎡")])}),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"110px"},attrs:{"type":"number","maxlength":"7","max":"9999","step":"0.01","placeholder":"㎡"},on:{"blur":function($event){_vm.addMainPart()}},model:{value:(_vm.mainStr),callback:function ($$v) {_vm.mainStr=$$v},expression:"mainStr"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.addMainPart()}}},[_vm._v("新增")])],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":"其他户型"}},[_vm._l((_vm.ruleForm.other_part),function(tag,index){return _c('el-tag',{key:'other_'+tag,attrs:{"closable":""},on:{"close":function($event){_vm.handleOtherClose(index)}}},[_vm._v(" "+_vm._s(tag)+"㎡")])}),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"110px"},attrs:{"type":"number","maxlength":"7","max":"9999","step":"0.01","placeholder":"㎡"},on:{"blur":function($event){_vm.addOhterPart()}},model:{value:(_vm.otherStr),callback:function ($$v) {_vm.otherStr=$$v},expression:"otherStr"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.addOhterPart()}}},[_vm._v("新增")])],2),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"开盘时间","prop":"open_time"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"date","placeholder":"选择日期时间"},model:{value:(_vm.ruleForm.open_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "open_time", $$v)},expression:"ruleForm.open_time"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"交付时间","prop":"deliver_time"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"date","placeholder":"选择日期时间"},model:{value:(_vm.ruleForm.deliver_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "deliver_time", $$v)},expression:"ruleForm.deliver_time"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"物业类型","prop":"wuye_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"物业类型类型"},model:{value:(_vm.ruleForm.wuye_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye_type", $$v)},expression:"ruleForm.wuye_type"}},_vm._l((_vm.config.wuye_type),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"装修情况","prop":"zhuangxiu"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"装修情况"},model:{value:(_vm.ruleForm.zhuangxiu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuangxiu", $$v)},expression:"ruleForm.zhuangxiu"}},_vm._l((_vm.config.zhuangxiu),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"开发商","prop":"developer"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"placeholder":"请输入开发商","maxlength":"30"},model:{value:(_vm.ruleForm.developer),callback:function ($$v) {_vm.$set(_vm.ruleForm, "developer", $$v)},expression:"ruleForm.developer"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"建筑类型","prop":"build_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择建筑类型"},model:{value:(_vm.ruleForm.build_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "build_type", $$v)},expression:"ruleForm.build_type"}},_vm._l((_vm.config.build_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"占地面积","prop":"area_cover"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"9","placeholder":"占地面积"},model:{value:(_vm.ruleForm.area_cover),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area_cover", $$v)},expression:"ruleForm.area_cover"}}),_vm._v(" ㎡\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"建筑面积","prop":"area_build"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"9","placeholder":"建筑面积"},model:{value:(_vm.ruleForm.area_build),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area_build", $$v)},expression:"ruleForm.area_build"}}),_vm._v(" ㎡\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"规划户数"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","step":"1","maxlength":"9","placeholder":"规划户数"},model:{value:(_vm.ruleForm.households),callback:function ($$v) {_vm.$set(_vm.ruleForm, "households", $$v)},expression:"ruleForm.households"}}),_vm._v(" 户\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"产权年限","prop":"property"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"产权年限"},model:{value:(_vm.ruleForm.property),callback:function ($$v) {_vm.$set(_vm.ruleForm, "property", $$v)},expression:"ruleForm.property"}},_vm._l((_vm.config.property),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"车位配比","prop":"park"}},[_vm._v("\n\t\t\t\t\t\t1 : "),_c('el-input',{staticClass:"name",staticStyle:{"width":"160px"},attrs:{"maxlength":"5","step":"0.01","max":"99"},model:{value:(_vm.ruleForm.park),callback:function ($$v) {_vm.$set(_vm.ruleForm, "park", $$v)},expression:"ruleForm.park"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"380px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"车位数量","prop":"park_up_num"}},[_vm._v("\n\t\t\t\t\t\t\t\t地上 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"text","maxlength":"5","max":"99","step":"1","placeholder":""},model:{value:(_vm.ruleForm.park_up_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "park_up_num", $$v)},expression:"ruleForm.park_up_num"}}),_vm._v(" 个\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"park_down_num"}},[_vm._v("\n\t\t\t\t\t\t\t\t地下 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"text","maxlength":"5","max":"99","step":"1","placeholder":""},model:{value:(_vm.ruleForm.park_down_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "park_down_num", $$v)},expression:"ruleForm.park_down_num"}}),_vm._v(" 个\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"售楼处地址"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea2},model:{value:(_vm.ruleForm.sale_area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "sale_area", $$v)},expression:"ruleForm.sale_area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.sale_area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "sale_area2", $$v)},expression:"ruleForm.sale_area2"}},_vm._l((_vm.districts2),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"180px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"50"},model:{value:(_vm.ruleForm.sale_address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "sale_address", $$v)},expression:"ruleForm.sale_address"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边规划"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入周边包含规划内的教育设施","maxlength":"300"},model:{value:(_vm.ruleForm.around_plan[0].desc),callback:function ($$v) {_vm.$set(_vm.ruleForm.around_plan[0], "desc", $$v)},expression:"ruleForm.around_plan[0].desc"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入周边包含规划内的医院","maxlength":"300"},model:{value:(_vm.ruleForm.around_plan[1].desc),callback:function ($$v) {_vm.$set(_vm.ruleForm.around_plan[1], "desc", $$v)},expression:"ruleForm.around_plan[1].desc"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入周边包含规划内的购物","maxlength":"300"},model:{value:(_vm.ruleForm.around_plan[2].desc),callback:function ($$v) {_vm.$set(_vm.ruleForm.around_plan[2], "desc", $$v)},expression:"ruleForm.around_plan[2].desc"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"345px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"绿化率","prop":"green_ratio"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","max":"100","maxlength":"6","placeholder":"绿化率"},model:{value:(_vm.ruleForm.green_ratio),callback:function ($$v) {_vm.$set(_vm.ruleForm, "green_ratio", $$v)},expression:"ruleForm.green_ratio"}}),_vm._v(" %\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"容积率","prop":"volume_ratio"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","max":"100","maxlength":"6","placeholder":"容积率"},model:{value:(_vm.ruleForm.volume_ratio),callback:function ($$v) {_vm.$set(_vm.ruleForm, "volume_ratio", $$v)},expression:"ruleForm.volume_ratio"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"345px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"供暖方式","prop":"heat_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"供暖方式"},model:{value:(_vm.ruleForm.heat_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "heat_type", $$v)},expression:"ruleForm.heat_type"}},_vm._l((_vm.config.heat_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"供电方式","prop":"electric_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"供电方式"},model:{value:(_vm.ruleForm.electric_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "electric_type", $$v)},expression:"ruleForm.electric_type"}},_vm._l((_vm.config.electric_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"345px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"供水方式","prop":"water_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"供水方式"},model:{value:(_vm.ruleForm.water_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "water_type", $$v)},expression:"ruleForm.water_type"}},_vm._l((_vm.config.water_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"销售情况","prop":"sale_status"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"销售情况"},model:{value:(_vm.ruleForm.sale_status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "sale_status", $$v)},expression:"ruleForm.sale_status"}},_vm._l((_vm.config.sale_status),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"345px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"楼盘均价","prop":"price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","step":"0.01","max":"999999","maxlength":"9","placeholder":"楼盘均价(填0显示未定价)"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}}),_vm._v(" 元/㎡\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"物业费","prop":"wuyefei"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","step":"0.01","max":"999","maxlength":"6","placeholder":"物业费(填0显示未定价)"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}}),_vm._v(" 元/㎡/月\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"345px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"区管"}},[_c('el-select',{staticStyle:{"width":"180px"},attrs:{"value-key":"id","clearable":"","filterable":"","remote":"","placeholder":"请输入区管名称关键字","remote-method":_vm.fetchManager,"loading":_vm.loading},model:{value:(_vm.ruleForm.agent),callback:function ($$v) {_vm.$set(_vm.ruleForm, "agent", $$v)},expression:"ruleForm.agent"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"物业公司"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"maxlength":"30"},model:{value:(_vm.ruleForm.wuye),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye", $$v)},expression:"ruleForm.wuye"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"345px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"外部联系人"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"外部联系人"},model:{value:(_vm.ruleForm.contact),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact", $$v)},expression:"ruleForm.contact"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"外部联系方式"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"外部联系方式"},model:{value:(_vm.ruleForm.contact_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact_phone", $$v)},expression:"ruleForm.contact_phone"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"不能出现任意联系方式（包括但不限QQ，微信、电话、网址、MSN、邮箱等）；请勿添加其他广告，请勿输入与本房源无关内容或者非法信息。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目标题","prop":"project_title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入项目标题"},model:{value:(_vm.ruleForm.project_title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "project_title", $$v)},expression:"ruleForm.project_title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目介绍","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box1"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"项目地址","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"180px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","readonly":"","placeholder":"地理位置坐标","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":false,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"99%房源下架的图片规则：1、不得违反公司logo发布规则（限1个，白色半透明且尺寸在25%以内）2、不得盗图（含其他logo）3、不得有任何装    饰，图文。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图","prop":"img"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.imagecropperShow=true}}},[(_vm.ruleForm.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview1(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow),expression:"imagecropperShow"}],key:_vm.imagecropperKey,attrs:{"width":240,"height":180,"params":{isPublic: 0},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼盘效果图","prop":"file.IMG_XG"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","limit":10,"on-exceed":_vm.handleExceed,"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccessXG,"before-remove":_vm.handleImgRemoveXG,"on-preview":_vm.handlePictureCardPreview,"file-list":_vm.file.IMG_XG}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}}),_vm._v(" "),(_vm.image_type.length>1)?_c('div',{staticStyle:{"z-index":"9999999999"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.previmage}},[_vm._v("上一张")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.nextimage}},[_vm._v("下一张")])],1):_vm._e()])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼盘户型图","prop":"hx_pic"}},[_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.ruleForm.hx_pic),function(item,index){return _c('li',{key:'img_'+index,staticClass:"el-upload-list__item is-success",attrs:{"tabindex":"0"}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":item.url,"alt":""}}),_vm._v(" "),_c('span',{staticClass:"el-upload-list__item-actions"},[_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){_vm.handlePictureCardPreview(item)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]),_vm._v(" "),_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){_vm.handleHXRemove(index)}}},[_c('i',{staticClass:"el-icon-delete"})])]),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"请选择户型"},model:{value:(item.room),callback:function ($$v) {_vm.$set(item, "room", $$v)},expression:"item.room"}},[_c('el-option',{key:1,attrs:{"label":"一室","value":1}},[_vm._v(" 一室")]),_vm._v(" "),_c('el-option',{key:2,attrs:{"label":"两室","value":2}},[_vm._v(" 两室")]),_vm._v(" "),_c('el-option',{key:3,attrs:{"label":"三室","value":3}},[_vm._v(" 三室")]),_vm._v(" "),_c('el-option',{key:4,attrs:{"label":"四室","value":4}},[_vm._v(" 四室")]),_vm._v(" "),_c('el-option',{key:5,attrs:{"label":"五室","value":5}},[_vm._v(" 五室")])],1)],1)}))]),_vm._v(" "),_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","limit":50,"show-file-list":false,"list-type":"picture-card","on-exceed":_vm.handleExceed2,"on-success":_vm.handleHXImgSuccess,"file-list":_vm.hx_pic}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼盘实景图","prop":"file.IMG_SJ"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"multiple":"","limit":10,"on-exceed":_vm.handleExceed,"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccessSJ,"before-remove":_vm.handleImgRemoveSJ,"on-preview":_vm.handlePictureCardPreview,"file-list":_vm.file.IMG_SJ}},[_c('i',{staticClass:"el-icon-plus"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.rec_position),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rec_position", $$v)},expression:"ruleForm.rec_position"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var new_house_HouseDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/sale/new-house/HouseDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("oAKY")
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
  HouseDetail,
  new_house_HouseDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var sale_new_house_HouseDetail = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
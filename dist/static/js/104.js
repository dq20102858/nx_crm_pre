webpackJsonp([104],{

/***/ "F7+p":
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

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// EXTERNAL MODULE: ./src/api/912cms/residence.js
var residence = __webpack_require__("Vcyy");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/sale/saleoffice/SaleofficeDetail.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var SaleofficeDetail = ({
	name: "SaleofficeDetail",
	components: { Tinymce: Tinymce["a" /* default */] },
	data: function data() {
		var _this = this,
		    _rules;

		return {
			ruleForm: {
				park_id: null, //所属产业园id
				build_id: null,
				build_title: null,
				contact: null,
				contact_phone: null,
				park_title: null, // 所属产业园title
				survey: [], //实勘合格证
				checker_name: null, //核检员姓名
				developer: null, //开发商
				comment: null, //管家评语
				wuye: null, //物业公司
				short_home: [],
				hot_labels: [], //热门业态
				censhu: 1, //楼层类型
				louceng: 1, //楼层类型
				facilities: [],
				total_floor: null, //总楼层
				zhuangxiu: null,
				finish_time: null, //建造年代
				condition: 1, //经营状态
				is_manager: 1, //是否统一管理
				house_no: "", //房源编号
				number: null, //户室号
				floor: null, //楼层
				floor_height: null, //cenggao
				wuyefei: null, //物业费
				electric_fee: null, //电费
				car_fee: null, //水费
				office_type: null, //商铺类型
				mianji: null, //建筑面积
				area: null, //区域
				area2: null, //街道
				address: null, //详细地址
				map: null, //地图标注
				price: null, //价格
				price_unit: null, //1按单价，2按总价
				title: null, //标题
				info: null, //详情
				img_show: null, //详情
				img: null, //详情
				img_url: { IMG_O: [], IMG_I: [], IMG_M: [] }, //图片 IMG_O:室外图 IMG_I：室内图IMG_M：户型图，
				use_mianji: null, //套内面积
				status: -1, //状态-1待审，0删除，1通过，2未通过，5审核中
				house_type: 72, //70：住宅   71:商铺  72：写字楼
				// comment: "", //管家评语
				ordid: 1000, //排序
				can_register: 1, //可注册公司
				is_comfirm_phone: 0
			},
			parkObj: null,
			parkOptions: [],
			dashaList: [],
			office_survey: [], //实勘合格证
			cells: [],
			temp_url: { IMG_O: [], IMG_I: [], IMG_M: [] }, //图片 IMG_O:室外图 IMG_I：室内图IMG_M：户型图，
			isEdit: false,
			exiting: false,
			exitingId: null,
			qualification: {},
			center: { lng: 118.815358, lat: 32.063673 },
			config: {},
			censhu: [{ id: 1, name: "单层" }, { id: 2, name: "独栋" }],
			louceng: [{ id: 1, name: "低区" }, { id: 2, name: "中区" }, { id: 3, name: "高区" }],
			subways: [],
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			dialogImageUrl1: "",
			dialogVisible1: false,
			image_type: [],
			pickerOptions0: {
				disabledDate: function disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
				}
			},
			areas: [],
			districts: [],
			fileList: [],
			remarkLists: [],
			loading: false,
			last: null,
			rules: (_rules = {
				build_id: [{
					required: true,
					message: "请输入所属大厦",
					trigger: "blur"
				}],
				number: [{
					required: true,
					message: "请输入户室号",
					trigger: "blur"
				}],
				office_type: [{
					required: true,
					message: "请选择商铺类型",
					trigger: "blur"
				}],
				floor: [{
					validator: function validator(rule, value, callback) {
						if (_this.ruleForm.censhu == 1 && !value) {
							callback(new Error("请输入楼层"));
						}
						if (Number(_this.ruleForm.floor) > Number(_this.ruleForm.total_floor) && _this.ruleForm.total_floor) {
							callback(new Error("楼层不能大于总楼层"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				total_floor: [{
					required: true,
					message: "请输入总楼层",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (Number(_this.ruleForm.floor) > Number(_this.ruleForm.total_floor)) {
							callback(new Error("楼层不能大于总楼层"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				checker_name: [{
					validator: function validator(rule, value, callback) {
						if (_this.office_survey.length > 0 && !value) {
							callback(new Error("选择实勘合格证后，实勘人员为必填"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				floor_height: [{
					required: true,
					message: "请输入层高",
					trigger: "blur"
				}]
			}, defineProperty_default()(_rules, "number", [{
				required: true,
				message: "请输入门牌号/室号",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "mianji", [{
				required: true,
				message: "请输入建筑面积",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "area", [{
				required: true,
				message: "请选择区域",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "area2", [{
				required: true,
				message: "请选择街道",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "address", [{
				required: true,
				message: "请输入详细地址",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "rental_pay", [{
				required: true,
				message: "请选择街道",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "info", [{
				required: true,
				message: "请输入详细介绍",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "img", [{
				required: true,
				message: "请选择封面图",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "img_url.IMG_I", [{
				required: true,
				message: "请上传房源图片",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "price", [{
				required: true,
				message: "请输入价格",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "price_unit", [{
				required: true,
				message: "请选择价格单位",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "title", [{
				required: true,
				message: "请输入标题",
				trigger: "blur"
			}]), _rules)
		};
	},

	created: function created() {
		this.getConfigList();
		if (this.$route.params.id > 0) {
			this.getResidenceDetail(this.$route.params.id);
		}
		this.getAreaLists();
		if (this.$route.params.id > 0) {
			this.isEdit = true;
		}
		this.querySearchAsync();
	},

	methods: {
		changeSurvey: function changeSurvey() {
			if (this.office_survey.length > 0) {
				this.ruleForm.checker_name = this.$store.state.user.name;
			} else {
				this.ruleForm.checker_name = "";
			}
		},
		getDashalist: function getDashalist(queryString) {
			var _this2 = this;

			Object(house["y" /* getDashalist */])({
				name: queryString //房源编号
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this2.dashaList = data;
				}
			});
		},
		querySearchAsync: function querySearchAsync(queryString) {
			var _this3 = this;

			Object(house["J" /* getOnlinParkLists */])({
				name: queryString, //房源编号
				type: 1
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.parkOptions = data;
				}
			});
		},
		handleSelect: function handleSelect() {
			this.ruleForm.park_id = this.parkObj.id;
			this.ruleForm.park_title = this.parkObj.title;
		},
		queryTopSearchAsync: function queryTopSearchAsync(queryString, cb) {
			Object(house["H" /* getNewLists */])({
				title: queryString //房源编号
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					// data.forEach(item => {
					// 	item.title = item.title+'('+item.area_name + item.area_name2+')'
					// });
					cb(data);
				}
			});
		},
		jumpTopUrl: function jumpTopUrl(url) {
			window.open(url);
		},
		handleTopSelect: function handleTopSelect(item) {
			this.title = null;
			if (this.ruleForm.article_ids.length == 5) {
				this.$message({
					message: "最多只能新增5个精品导购",
					type: "warning"
				});
				return false;
			}
			if (this.ruleForm.article_ids.find(function (t) {
				return t.id == item.id;
			})) {
				this.$message({
					message: "不能重复添加",
					type: "warning"
				});
				return false;
			}
			this.ruleForm.article_ids.push(item);
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
		getConfigList: function getConfigList() {
			var _this5 = this;

			Object(residence["f" /* getConfigList */])().then(function (response) {
				var data = response.data.data;
				_this5.config = data;
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
		handleImgRemoveI: function handleImgRemoveI(file, fileList) {
			var _this6 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this6.ruleForm.img_url.IMG_I.splice(index, 1);
				}
			});
		},
		handleImgSuccessI: function handleImgSuccessI(res, file) {
			this.ruleForm.img_url.IMG_I.push(res.data.show_url);
		},
		handleBrandRemove: function handleBrandRemove(index) {
			this.ruleForm.brand.splice(index, 1);
		},
		handleBrandImgSuccess: function handleBrandImgSuccess(res, file) {
			this.ruleForm.brand.push({
				show_url: res.data.show_url,
				url: res.data.show_url,
				title: null
			});
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			if (file.response) {
				var url = file.response.data.url;
			} else {
				var url = file.url;
			}
			if (this.ruleForm.img_url.IMG_O.indexOf(url) > -1) {
				this.image_index = this.ruleForm.img_url.IMG_O.indexOf(url);
				this.image_type = this.ruleForm.img_url.IMG_O;
			}
			if (this.ruleForm.img_url.IMG_M.indexOf(url) > -1) {
				this.image_index = this.ruleForm.img_url.IMG_M.indexOf(url);
				this.image_type = this.ruleForm.img_url.IMG_M;
			}
			if (this.ruleForm.img_url.IMG_I.indexOf(url) > -1) {
				this.image_index = this.ruleForm.img_url.IMG_I.indexOf(url);
				this.image_type = this.ruleForm.img_url.IMG_I;
			}
			this.dialogImageUrl = this.image_type[this.image_index];
			this.dialogVisible = true;
		},
		handlePictureCardPreview1: function handlePictureCardPreview1(file) {
			this.dialogImageUrl = file.show_url || file.url || file.img_show;
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
		},
		getResidenceDetail: function getResidenceDetail(id) {
			var _this7 = this;

			Object(residence["h" /* getResidenceDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this7.handleResData(data);
				if (data.park && data.park.park_id && data.park.title) {
					_this7.parkObj = {
						id: data.park.park_id,
						title: data.park.title
					};
					_this7.parkOptions = [_this7.parkObj];
				}
				_this7.ruleForm = assign_default()(_this7.ruleForm, data);
				_this7.ruleForm.img_show = data.img;
				if (data.build_id && data.build_title) {
					_this7.dashaList.push({
						id: data.build_id,
						name: data.build_title
					});
				}
				if (data.img_url) {
					_this7.temp_url.IMG_O = data.img_url.IMG_O.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
					_this7.temp_url.IMG_I = data.img_url.IMG_I.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
					_this7.temp_url.IMG_M = data.img_url.IMG_M.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
				} else {
					_this7.temp_url = { IMG_O: [], IMG_I: [], IMG_M: [] };
					_this7.ruleForm.img_url = {
						IMG_O: [],
						IMG_I: [],
						IMG_M: []
					};
				}
				setTimeout(function () {
					if (_this7.ruleForm.map) {
						var arr = _this7.ruleForm.map.split(",");
						var point = new BMap.Point(Number(arr[0]), Number(arr[1]));
						var marker = new BMap.Marker(point);
						_this7.$refs.map.map.clearOverlays();
						_this7.$refs.map.map.addOverlay(marker);
						_this7.$refs.map.map.centerAndZoom(point, 18);
					}

					_this7.ruleForm.censhu = Number(_this7.ruleForm.censhu);
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
				}).catch(function (err) {
					console.log(err);
				});
				if (_this7.ruleForm.survey.length > 0) {
					_this7.ruleForm.survey.map(function (item) {
						_this7.office_survey.push(item.id);
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
			var _this8 = this;

			this.ruleForm.survey = [];
			if (this.office_survey.length > 0) {
				this.config.office_survey.map(function (item) {
					if (_this8.office_survey.indexOf(item.id) > -1) {
						_this8.ruleForm.survey.push(item);
					}
				});
			}
			// console.log(this.ruleForm.survey)
			// const img_url={}
			// if (this.temp_url) {
			// 	for (const k in this.temp_url) {
			// 		if (this.temp_url.hasOwnProperty(k)) {
			// 			let element = this.temp_url[k];
			// 			img_url[k] = element.map(item => {
			// 				return item.url;
			//             });
			// 		}
			// 	}
			// }
			// this.ruleForm.img_url=img_url;
			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this8.editOrAddOffice();
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this9 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(residence["c" /* editResidenceDetail */])(this.ruleForm).then(function (response) {
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
				Object(residence["a" /* addResidenceDetail */])(this.ruleForm).then(function (response) {
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
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-037a18fc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/sale/saleoffice/SaleofficeDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"office-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"录入端口"}},[_c('el-input',{staticClass:"name",attrs:{"value":_vm.ruleForm.client==50?'PC端':'小程序',"maxlength":"30","disabled":""}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"写字楼ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属产业园"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.querySearchAsync,"loading":_vm.loading},on:{"change":_vm.handleSelect},model:{value:(_vm.parkObj),callback:function ($$v) {_vm.parkObj=$$v},expression:"parkObj"}},_vm._l((_vm.parkOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.title,"value":item}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"大厦","prop":"build_id"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.getDashalist,"loading":_vm.loading},model:{value:(_vm.ruleForm.build_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "build_id", $$v)},expression:"ruleForm.build_id"}},_vm._l((_vm.dashaList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源编号"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入房源编号"},model:{value:(_vm.ruleForm.house_no),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_no", $$v)},expression:"ruleForm.house_no"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系人姓名"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"联系人姓名"},model:{value:(_vm.ruleForm.contact),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact", $$v)},expression:"ruleForm.contact"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系人电话"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"联系人电话"},model:{value:(_vm.ruleForm.contact_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact_phone", $$v)},expression:"ruleForm.contact_phone"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"已确认房主号码","prop":"is_comfirm_phone"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_comfirm_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_comfirm_phone", $$v)},expression:"ruleForm.is_comfirm_phone"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开发商"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"请输入所属开发商"},model:{value:(_vm.ruleForm.developer),callback:function ($$v) {_vm.$set(_vm.ruleForm, "developer", $$v)},expression:"ruleForm.developer"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业公司"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"请输入物业公司名称"},model:{value:(_vm.ruleForm.wuye),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye", $$v)},expression:"ruleForm.wuye"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"220px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"楼层","prop":"censhu"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"80px"},attrs:{"placeholder":""},model:{value:(_vm.ruleForm.censhu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "censhu", $$v)},expression:"ruleForm.censhu"}},_vm._l((_vm.censhu),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),(_vm.ruleForm.censhu==1)?_c('el-col',{staticStyle:{"width":"100px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"louceng"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"80px"},attrs:{"placeholder":""},model:{value:(_vm.ruleForm.louceng),callback:function ($$v) {_vm.$set(_vm.ruleForm, "louceng", $$v)},expression:"ruleForm.louceng"}},_vm._l((_vm.louceng),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.censhu==1)?_c('el-col',{staticStyle:{"width":"120px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"floor"}},[_vm._v("\n\t\t\t\t\t\t\t第 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor", $$v)},expression:"ruleForm.floor"}}),_vm._v(" 层\n\t\t\t\t\t\t")],1)],1):_vm._e(),_vm._v(" "),_c('el-col',{staticStyle:{"width":"130px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"total_floor"}},[_vm._v("\n\t\t\t\t\t\t\t共 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"90px"},attrs:{"type":"number","maxlength":"30","placeholder":"总层数"},model:{value:(_vm.ruleForm.total_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "total_floor", $$v)},expression:"ruleForm.total_floor"}}),_vm._v(" 层\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"写字楼类型","prop":"office_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择写字楼类型"},model:{value:(_vm.ruleForm.office_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "office_type", $$v)},expression:"ruleForm.office_type"}},_vm._l((_vm.config.office_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"装修情况"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择装修情况"},model:{value:(_vm.ruleForm.zhuangxiu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuangxiu", $$v)},expression:"ruleForm.zhuangxiu"}},_vm._l((_vm.config.zhuangxiu),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"360px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"经营状态","prop":"condition"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.condition),callback:function ($$v) {_vm.$set(_vm.ruleForm, "condition", $$v)},expression:"ruleForm.condition"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("营业中")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("闲置中")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"320px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"是否统一管理"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_manager),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_manager", $$v)},expression:"ruleForm.is_manager"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"竣工时间","prop":"finish_time"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"date","placeholder":"选择日期时间"},model:{value:(_vm.ruleForm.finish_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "finish_time", $$v)},expression:"ruleForm.finish_time"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"建筑面积","prop":"mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入建筑面积"},model:{value:(_vm.ruleForm.mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mianji", $$v)},expression:"ruleForm.mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"使用率"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入使用率"},model:{value:(_vm.ruleForm.use_rate),callback:function ($$v) {_vm.$set(_vm.ruleForm, "use_rate", $$v)},expression:"ruleForm.use_rate"}}),_vm._v(" %\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"层高","prop":"floor_height"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"2","placeholder":"请输入层高"},model:{value:(_vm.ruleForm.floor_height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_height", $$v)},expression:"ruleForm.floor_height"}}),_vm._v(" 米\n\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"配套设施"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.facilities),callback:function ($$v) {_vm.$set(_vm.ruleForm, "facilities", $$v)},expression:"ruleForm.facilities"}},_vm._l((_vm.config.office_peitao),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页短标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.short_home),callback:function ($$v) {_vm.$set(_vm.ruleForm, "short_home", $$v)},expression:"ruleForm.short_home"}},_vm._l((_vm.config.xzl_short_map),function(item){return _c('el-checkbox',{key:item.value,attrs:{"label":item.id}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"价格","prop":"price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入参考价格"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"price_unit"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择参考价格单位"},model:{value:(_vm.ruleForm.price_unit),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price_unit", $$v)},expression:"ruleForm.price_unit"}},_vm._l((_vm.config.price_unit),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"280px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"物业费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入物业费"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}}),_vm._v(" 元/㎡·月\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"270px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"电费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入电费"},model:{value:(_vm.ruleForm.electric_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "electric_fee", $$v)},expression:"ruleForm.electric_fee"}}),_vm._v(" 元/度\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"270px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"水费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入水费"},model:{value:(_vm.ruleForm.car_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "car_fee", $$v)},expression:"ruleForm.car_fee"}}),_vm._v(" 元/吨\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"热门标签"}},[_c('el-select',{attrs:{"multiple":"","filterable":"","allow-create":"","default-first-option":"","placeholder":"请选择热门标签"},model:{value:(_vm.ruleForm.hot_labels),callback:function ($$v) {_vm.$set(_vm.ruleForm, "hot_labels", $$v)},expression:"ruleForm.hot_labels"}},_vm._l((_vm.config.hot_building_labels),function(item ,index){return _c('el-option',{key:index,attrs:{"label":item,"value":item}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"实勘合格证"}},[_c('el-checkbox-group',{attrs:{"size":"small"},on:{"change":_vm.changeSurvey},model:{value:(_vm.office_survey),callback:function ($$v) {_vm.office_survey=$$v},expression:"office_survey"}},_vm._l((_vm.config.office_survey),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id,"border":""}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"核检员姓名","prop":"checker_name"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入核检员姓名"},model:{value:(_vm.ruleForm.checker_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "checker_name", $$v)},expression:"ruleForm.checker_name"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","readonly":"","placeholder":"地理位置坐标","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"不能出现任意联系方式（包括但不限QQ，微信、电话、网址、MSN、邮箱等）；请勿添加其他广告，请勿输入与本房源无关内容或者非法信息。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入标题"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细介绍","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box1"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"管家评语"}},[_c('div',{attrs:{"id":"tinymcy-box2"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.comment),callback:function ($$v) {_vm.$set(_vm.ruleForm, "comment", $$v)},expression:"ruleForm.comment"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"99%房源下架的图片规则：1、不得违反公司logo发布规则（限1个，白色半透明且尺寸在25%以内）2、不得盗图（含其他logo）3、不得有任何装    饰，图文。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.ruleForm.img_show)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img_show}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img_show)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm.img_show)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源图片","prop":"img_url.IMG_I"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccessI,"before-remove":_vm.handleImgRemoveI,"on-preview":_vm.handlePictureCardPreview,"file-list":_vm.temp_url.IMG_I}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}}),_vm._v(" "),(_vm.image_type.length>1)?_c('div',{staticStyle:{"z-index":"9999999999"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.previmage}},[_vm._v("上一张")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.nextimage}},[_vm._v("下一张")])],1):_vm._e()])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"可注册公司"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.can_register),callback:function ($$v) {_vm.$set(_vm.ruleForm, "can_register", $$v)},expression:"ruleForm.can_register"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var saleoffice_SaleofficeDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/sale/saleoffice/SaleofficeDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("HRab")
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
  SaleofficeDetail,
  saleoffice_SaleofficeDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var sale_saleoffice_SaleofficeDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "HRab":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("iHkJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("720da9c1", content, true);

/***/ }),

/***/ "iHkJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.office-form {\n  padding: 20px;\n}\n.office-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  min-height: 360px;\n  width: 100%;\n}\n.office-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.office-form fieldset ol {\n    padding-left: 25px;\n}\n.office-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.office-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.office-form .el-upload-list-box,\n.office-form .el-upload-list-box + div {\n  float: left;\n}\n.office-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box1 .mce-container,\n#tinymcy-box1 .mce-container * {\n  white-space: normal;\n}\n#tinymcy-box2 .mce-container,\n#tinymcy-box2 .mce-container * {\n  white-space: normal;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/***/ })

});
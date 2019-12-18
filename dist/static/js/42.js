webpackJsonp([42],{

/***/ "KnoG":
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/sale/saleshop/SaleshopDetail.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var SaleshopDetail = ({
	name: "SaleshopDetail",
	components: { Tinymce: Tinymce["a" /* default */] },
	data: function data() {
		var _this = this,
		    _rules;

		return {
			ruleForm: {
				contact: null,
				contact_phone: null,
				park_id: null, //所属产业园id
				park_title: null, // 所属产业园title             
				business_id: null, //所属商业体id
				business_title: null, //所属商业体title
				is_new: 0, //是否使用新模板
				survey: [], //实勘合格证
				checker_name: null, //核检员姓名
				expert_id: null, //房专家id
				checker: null,
				house_manager_id: null,
				business_sector: [], //当前经营
				invitation: [], //招商业态
				short_home: [],
				developer: null, //开发商
				comment: null, //管家评语
				wuye: null, //物业公司
				hot_labels: [], //热门业态
				suit_industry: [], //建议合适业态
				censhu: 1, //楼层类型
				floor1: null, //起始楼层
				floor2: null, //终止楼层
				total_floor: null, //总楼层
				finish_time: null, //建造年代
				condition: 1, //经营状态
				is_manager: 1, //是否统一管理
				house_no: "", //房源编号
				number: null, //户室号
				floor: null, //楼层
				is_lift: 1, //是否有电梯，1有，0无
				is_park: 1, //是否有停车位，1有，0无
				is_street: 1, //是否临街
				width: null, //miankuan
				floor_height: null, //cenggao
				depth: null, //jinshen
				wuyefei: null, //物业费
				electric_fee: null, //电费
				water_fee: null, //水费
				facilities: [],
				expected_return: null, //预期租金
				zhuangxiu: null, //装修情况 配置项
				shop_type: null, //商铺类型
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
				property: null, //产权年限
				img_url: { IMG_O: [], IMG_I: [], IMG_M: [] }, //图片 IMG_O:室外图 IMG_I：室内图IMG_M：户型图，
				use_mianji: null, //套内面积
				status: -1, //状态-1待审，0删除，1通过，2未通过，5审核中
				house_type: 71, //70：住宅   71:商铺  72：写字楼
				// comment: "", //管家评语
				ordid: 1000,
				food_num: null, //周边餐饮  sale/getAroundInfo 该接口可获取 is_new为1时才传此字段
				leisure_num: null, //休闲服务 is_new为1时才传此字段
				village_num: null, //周边小区 is_new为1时才传此字段
				school_num: null, //周边学校 is_new为1时才传此字段
				office_building_num: null, //周边写字楼 is_new为1时才传此字段
				market_num: null, //周边商城 is_new为1时才传此字段
				life_num: null, //生活服务 is_new为1时才传此字段
				avg_price: null, //消费均价 sale/getFoodTop 该接口可获取 is_new为1时才传此字段
				rest_top: [],
				distribution: [],
				is_pass: null, //是否实勘合格,1是，0否
				is_survey: null, //是否已实勘，1是，0否
				is_recommend: null, //管家是否推荐 1是，0否
				expert_summary: null, //专家总结,
				is_good: null, //旺铺认证 1是，0否
				industry_string: null, //历史业态
				is_comfirm_phone: 0
			},
			parkObj: null,
			parkOptions: [],
			checkerList1: [],
			checkerList2: [],
			checkerList3: [],
			businessObj: null,
			businessOptions: [],
			shop_survey: [], //实勘合格证                               
			cells: [],
			temp_url: { IMG_O: [], IMG_I: [], IMG_M: [] }, //图片 IMG_O:室外图 IMG_I：室内图IMG_M：户型图，
			isEdit: false,
			exiting: false,
			exitingId: null,
			qualification: {},
			center: { lng: 118.815358, lat: 32.063673 },
			config: {
				censhu: [{ id: 1, name: '单层' }, { id: 2, name: '多层' }]
			},
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
				number: [{
					required: true,
					message: "请输入户室号",
					trigger: "blur"
				}],
				invitation: [{
					validator: function validator(rule, value, callback) {
						if (_this.ruleForm.business_id && _this.ruleForm.invitation.length == 0) {
							callback(new Error("选择所属商业体后招商业态为必填"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				shop_type: [{
					required: true,
					message: "请选择商铺类型",
					trigger: "blur"
				}],
				floor1: [{
					required: true,
					message: "请输入楼层",
					trigger: "blur"
				}],
				floor2: [{
					validator: function validator(rule, value, callback) {
						if (_this.ruleForm.censhu == 2 && !value) {
							callback(new Error("请输入楼层"));
						}
						if (Number(_this.ruleForm.floor2) > Number(_this.ruleForm.total_floor) && _this.ruleForm.total_floor) {
							callback(new Error("终止楼层不能大于总楼层"));
						}
						if (Number(_this.ruleForm.floor1) > Number(_this.ruleForm.floor2)) {
							callback(new Error("起始楼层不能大于终止楼层"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}]
			}, defineProperty_default()(_rules, "invitation", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.business_id && _this.ruleForm.invitation.length == 0) {
						callback(new Error("选择所属商业体后招商业态为必填"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "total_floor", [{
				required: true,
				message: "请输入总楼层",
				trigger: "blur"
			}, {
				validator: function validator(rule, value, callback) {
					if (Number(_this.ruleForm.floor1) > Number(_this.ruleForm.total_floor) || Number(_this.ruleForm.floor2) > Number(_this.ruleForm.total_floor)) {
						callback(new Error("楼层不能大于总楼层"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "checker_name", [{
				validator: function validator(rule, value, callback) {
					if (_this.shop_survey.length > 0 && !value) {
						callback(new Error("选择实勘合格证后，实勘人员为必填"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "food_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写周边餐饮个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "leisure_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写休闲服务个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "village_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写周边小区个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "school_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写周边学校个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "office_building_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写周边写字楼个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "market_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写周边商城个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "life_num", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写生活服务个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "avg_price", [{
				validator: function validator(rule, value, callback) {
					if (_this.ruleForm.is_new == 1 && !value) {
						callback(new Error("请填写消费均价个数"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}]), defineProperty_default()(_rules, "is_lift", [{
				required: true,
				message: "请选择是否有电梯",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "width", [{
				required: true,
				message: "请输入面宽",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "floor_height", [{
				required: true,
				message: "请输入层高",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "depth", [{
				required: true,
				message: "请输入进深",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "number", [{
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
		this.querySearchAsync1();
		this.getcheckerList1();
		this.getcheckerList2();
		this.getcheckerList3();
	},

	methods: {
		getInfo: function getInfo() {
			var _this2 = this;

			if (this.ruleForm.map) {
				Object(residence["e" /* getAroundInfo */])({
					'lat': this.ruleForm.map.split(',')[1],
					'lng': this.ruleForm.map.split(',')[0]
				}).then(function (response) {
					var response = response.data;
					if (response.status == 1) {
						_this2.ruleForm.food_num = response.data.foodNum;
						_this2.ruleForm.leisure_num = response.data.leisureNum;
						_this2.ruleForm.village_num = response.data.villageNum;
						_this2.ruleForm.school_num = response.data.schoolNum;
						_this2.ruleForm.office_building_num = response.data.officeBuildingNum;
						_this2.ruleForm.market_num = response.data.marketNum;
						_this2.ruleForm.life_num = response.data.lifeNum;
						_this2.ruleForm.distribution = response.data.list;
					} else {
						_this2.$message({
							message: response.msg,
							type: "warning"
						});
						return false;
					}
				});
				Object(residence["g" /* getFoodTop */])({
					'lat': this.ruleForm.map.split(',')[1],
					'lng': this.ruleForm.map.split(',')[0]
				}).then(function (response) {
					var response = response.data;
					if (response.status == 1) {
						_this2.ruleForm.avg_price = response.data.avg_price;
						_this2.ruleForm.rest_top = response.data.list;
					} else {
						_this2.$message({
							message: response.msg,
							type: "warning"
						});
						return false;
					}
				});
			} else {
				this.$message({
					message: "请先获取房源地图标注",
					type: "warning"
				});
				return false;
			}
		},
		changeSurvey: function changeSurvey() {
			if (this.shop_survey.length > 0) {
				this.ruleForm.checker_name = this.$store.state.user.name;
			} else {
				this.ruleForm.checker_name = '';
			}
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
		querySearchAsync1: function querySearchAsync1(queryString) {
			var _this4 = this;

			Object(house["J" /* getOnlinParkLists */])({
				name: queryString, //房源编号
				type: 2
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this4.businessOptions = data;
				}
			});
		},
		getcheckerList1: function getcheckerList1(queryString) {
			var _this5 = this;

			Object(residence["j" /* getcheckerList */])({
				name: queryString, //房源编号
				type: 1
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this5.checkerList1 = data;
				}
			});
		},
		getcheckerList2: function getcheckerList2(queryString) {
			var _this6 = this;

			Object(residence["j" /* getcheckerList */])({
				name: queryString, //房源编号
				type: 2
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this6.checkerList2 = data;
				}
			});
		},
		getcheckerList3: function getcheckerList3(queryString) {
			var _this7 = this;

			Object(residence["j" /* getcheckerList */])({
				name: queryString, //房源编号
				type: 3
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this7.checkerList3 = data;
				}
			});
		},
		handleSelect1: function handleSelect1() {
			this.ruleForm.business_id = this.businessObj.id;
			this.ruleForm.business_title = this.businessObj.title;
			console.log(this.ruleForm.business_id);
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
			var _this8 = this;

			var localSearch = new BMap.LocalSearch(this.$refs.map.map);
			this.$refs.map.map.clearOverlays(); //清空原来的标注
			var keyword = this.areas.find(function (item) {
				return item.code == _this8.ruleForm.area;
			}).name + this.districts.find(function (item) {
				return item.code == _this8.ruleForm.area2;
			}).name + this.ruleForm.address;
			localSearch.setSearchCompleteCallback(function (searchResult) {
				var poi = searchResult.getPoi(0);
				if (poi) {
					_this8.ruleForm.map = poi.point.lng + "," + poi.point.lat; //这里是追加到对应的input文本框里，可以根据自己的需要来修改
					_this8.$refs.map.map.centerAndZoom(poi.point, 18);
					var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
					_this8.$refs.map.map.addOverlay(marker);
				} else {
					_this8.$alert("没有查询到该地址坐标，请您在地图上自行点击选择所在位置", "提示", {
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
			var _this9 = this;

			Object(residence["f" /* getConfigList */])().then(function (response) {
				var data = response.data.data;
				_this9.config = data;
				_this9.config.censhu = [{ id: 1, name: '单层' }, { id: 2, name: '多层' }];
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
			var _this10 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this10.ruleForm.img_url.IMG_I.splice(index, 1);
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
					message: '已经是第一张啦',
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
					message: '已经是最后一张啦',
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
			var _this11 = this;

			Object(residence["h" /* getResidenceDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this11.handleResData(data);
				if (data.park && data.park.park_id && data.park.title) {
					_this11.parkObj = { id: data.park.park_id, title: data.park.title };
					_this11.parkOptions = [_this11.parkObj];
				}
				if (data.business && data.business.park_id && data.business.title) {
					_this11.businessObj = { id: data.business.park_id, title: data.business.title };
					_this11.businessOptions = [_this11.businessObj];
				}
				_this11.ruleForm = assign_default()(_this11.ruleForm, data);
				_this11.ruleForm.img_show = data.img;
				if (data.img_url) {
					_this11.temp_url.IMG_O = data.img_url.IMG_O.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
					_this11.temp_url.IMG_I = data.img_url.IMG_I.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
					_this11.temp_url.IMG_M = data.img_url.IMG_M.map(function (item) {
						return {
							url: item,
							title: ""
						};
					});
				} else {
					_this11.temp_url = { IMG_O: [], IMG_I: [], IMG_M: [] };
					_this11.ruleForm.img_url = { IMG_O: [], IMG_I: [], IMG_M: [] };
				}
				setTimeout(function () {
					if (_this11.ruleForm.map) {
						var arr = _this11.ruleForm.map.split(",");
						var point = new BMap.Point(Number(arr[0]), Number(arr[1]));
						var marker = new BMap.Marker(point);
						_this11.$refs.map.map.clearOverlays();
						_this11.$refs.map.map.addOverlay(marker);
						_this11.$refs.map.map.centerAndZoom(point, 18);
					}

					_this11.ruleForm.censhu = Number(_this11.ruleForm.censhu);
					if (_this11.ruleForm.floor && _this11.ruleForm.floor.indexOf(',') > -1) {
						_this11.ruleForm.floor1 = _this11.ruleForm.floor.split(',')[0];
						_this11.ruleForm.floor2 = _this11.ruleForm.floor.split(',')[1];
					} else {
						_this11.ruleForm.floor1 = _this11.ruleForm.floor;
					}
				}, 1000);
				Object(requirement["s" /* getDistrictLists */])(_this11.ruleForm.area).then(function (response) {
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
				if (_this11.ruleForm.survey.length > 0) {
					_this11.ruleForm.survey.map(function (item) {
						_this11.shop_survey.push(item.id);
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
			var _this12 = this;

			this.ruleForm.survey = [];
			if (this.shop_survey.length > 0) {
				this.config.shop_survey.map(function (item) {
					if (_this12.shop_survey.indexOf(item.id) > -1) {
						_this12.ruleForm.survey.push(item);
					}
				});
			}
			console.log(this.ruleForm.survey);
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
					_this12.editOrAddOffice();
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this13 = this;

			if (this.ruleForm.censhu == 1) {
				this.ruleForm.floor = this.ruleForm.floor1;
			} else {
				this.ruleForm.floor = this.ruleForm.floor1 + ',' + this.ruleForm.floor2;
			}
			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(residence["c" /* editResidenceDetail */])(this.ruleForm).then(function (response) {
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
				Object(residence["a" /* addResidenceDetail */])(this.ruleForm).then(function (response) {
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
		},
		changeArea: function changeArea() {
			var _this15 = this;

			this.ruleForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this15.districts = data;
				} else {
					_this15.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9bfd02ba","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/sale/saleshop/SaleshopDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"office-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"录入端口"}},[_c('el-input',{staticClass:"name",attrs:{"value":_vm.ruleForm.client==50?'PC端':'小程序',"maxlength":"30","disabled":""}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"商铺ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属产业园"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.querySearchAsync,"loading":_vm.loading},on:{"change":_vm.handleSelect},model:{value:(_vm.parkObj),callback:function ($$v) {_vm.parkObj=$$v},expression:"parkObj"}},_vm._l((_vm.parkOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.title,"value":item}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属商业体"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.querySearchAsync1,"loading":_vm.loading},on:{"change":_vm.handleSelect1},model:{value:(_vm.businessObj),callback:function ($$v) {_vm.businessObj=$$v},expression:"businessObj"}},_vm._l((_vm.businessOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.title,"value":item}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"招商业态","prop":"invitation"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.invitation),callback:function ($$v) {_vm.$set(_vm.ruleForm, "invitation", $$v)},expression:"ruleForm.invitation"}},_vm._l((_vm.config.business_mount_invitation),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"当前经营"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.business_sector),callback:function ($$v) {_vm.$set(_vm.ruleForm, "business_sector", $$v)},expression:"ruleForm.business_sector"}},_vm._l((_vm.config.cur_manage),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"335px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系人姓名"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"联系人姓名"},model:{value:(_vm.ruleForm.contact),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact", $$v)},expression:"ruleForm.contact"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系人电话"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"联系人电话"},model:{value:(_vm.ruleForm.contact_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact_phone", $$v)},expression:"ruleForm.contact_phone"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"已确认房主号码","prop":"is_comfirm_phone"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_comfirm_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_comfirm_phone", $$v)},expression:"ruleForm.is_comfirm_phone"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源编号"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入房源编号"},model:{value:(_vm.ruleForm.house_no),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_no", $$v)},expression:"ruleForm.house_no"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开发商"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"请输入所属开发商"},model:{value:(_vm.ruleForm.developer),callback:function ($$v) {_vm.$set(_vm.ruleForm, "developer", $$v)},expression:"ruleForm.developer"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业公司"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"请输入物业公司名称"},model:{value:(_vm.ruleForm.wuye),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye", $$v)},expression:"ruleForm.wuye"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"205px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"楼层","prop":"censhu"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"80px"},attrs:{"placeholder":""},model:{value:(_vm.ruleForm.censhu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "censhu", $$v)},expression:"ruleForm.censhu"}},_vm._l((_vm.config.censhu),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"120px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"floor1"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.floor1),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor1", $$v)},expression:"ruleForm.floor1"}}),_vm._v(" 层 到\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),(_vm.ruleForm.censhu==2)?_c('el-col',{staticStyle:{"width":"120px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"floor2"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.floor2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor2", $$v)},expression:"ruleForm.floor2"}}),_vm._v(" 层 \n\t\t\t\t\t\t\t")],1)],1):_vm._e(),_vm._v(" "),_c('el-col',{staticStyle:{"width":"130px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"total_floor"}},[_vm._v("\n                                共 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"90px"},attrs:{"type":"number","maxlength":"30","placeholder":"总层数"},model:{value:(_vm.ruleForm.total_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "total_floor", $$v)},expression:"ruleForm.total_floor"}}),_vm._v(" 层\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"装修情况"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择装修情况"},model:{value:(_vm.ruleForm.zhuangxiu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuangxiu", $$v)},expression:"ruleForm.zhuangxiu"}},_vm._l((_vm.config.zhuangxiu),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"产权","prop":"property"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"产权年限"},model:{value:(_vm.ruleForm.property),callback:function ($$v) {_vm.$set(_vm.ruleForm, "property", $$v)},expression:"ruleForm.property"}},_vm._l((_vm.config.property),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商铺类型","prop":"shop_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择商铺类型"},model:{value:(_vm.ruleForm.shop_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "shop_type", $$v)},expression:"ruleForm.shop_type"}},_vm._l((_vm.config.shop_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"320px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"电梯","prop":"is_lift"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_lift),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_lift", $$v)},expression:"ruleForm.is_lift"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("有")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("无")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"320px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"停车位"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_park),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_park", $$v)},expression:"ruleForm.is_park"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("有")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("无")])],1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"360px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"经营状态","prop":"condition"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.condition),callback:function ($$v) {_vm.$set(_vm.ruleForm, "condition", $$v)},expression:"ruleForm.condition"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("营业中")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("闲置中")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"320px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"是否统一管理"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_manager),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_manager", $$v)},expression:"ruleForm.is_manager"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否临街"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_street),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_street", $$v)},expression:"ruleForm.is_street"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"竣工时间","prop":"finish_time"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"date","placeholder":"选择日期时间"},model:{value:(_vm.ruleForm.finish_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "finish_time", $$v)},expression:"ruleForm.finish_time"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"建筑面积","prop":"mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入建筑面积"},model:{value:(_vm.ruleForm.mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mianji", $$v)},expression:"ruleForm.mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"使用面积"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入使用面积"},model:{value:(_vm.ruleForm.use_mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "use_mianji", $$v)},expression:"ruleForm.use_mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"面宽","prop":"width"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入面宽"},model:{value:(_vm.ruleForm.width),callback:function ($$v) {_vm.$set(_vm.ruleForm, "width", $$v)},expression:"ruleForm.width"}}),_vm._v(" 米\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"层高","prop":"floor_height"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"2","placeholder":"请输入层高"},model:{value:(_vm.ruleForm.floor_height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_height", $$v)},expression:"ruleForm.floor_height"}}),_vm._v(" 米\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"进深","prop":"depth"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入进深"},model:{value:(_vm.ruleForm.depth),callback:function ($$v) {_vm.$set(_vm.ruleForm, "depth", $$v)},expression:"ruleForm.depth"}}),_vm._v(" 米\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商铺配套"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.facilities),callback:function ($$v) {_vm.$set(_vm.ruleForm, "facilities", $$v)},expression:"ruleForm.facilities"}},_vm._l((_vm.config.facilities),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页短标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.short_home),callback:function ($$v) {_vm.$set(_vm.ruleForm, "short_home", $$v)},expression:"ruleForm.short_home"}},_vm._l((_vm.config.sp_short_map),function(item){return _c('el-checkbox',{key:item.value,attrs:{"label":item.id}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"价格","prop":"price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入参考价格"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"price_unit"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择参考价格单位"},model:{value:(_vm.ruleForm.price_unit),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price_unit", $$v)},expression:"ruleForm.price_unit"}},_vm._l((_vm.config.price_unit),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"280px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"物业费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入物业费"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}}),_vm._v(" 元/㎡·月\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"270px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"电费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入电费"},model:{value:(_vm.ruleForm.electric_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "electric_fee", $$v)},expression:"ruleForm.electric_fee"}}),_vm._v(" 元/度\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"270px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"水费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入水费"},model:{value:(_vm.ruleForm.water_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "water_fee", $$v)},expression:"ruleForm.water_fee"}}),_vm._v(" 元/吨\n\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"预期租金"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入预期租金"},model:{value:(_vm.ruleForm.expected_return),callback:function ($$v) {_vm.$set(_vm.ruleForm, "expected_return", $$v)},expression:"ruleForm.expected_return"}}),_vm._v(" 元\n\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"热门标签"}},[_c('el-select',{attrs:{"multiple":"","filterable":"","allow-create":"","default-first-option":"","placeholder":"请选择热门标签"},model:{value:(_vm.ruleForm.hot_labels),callback:function ($$v) {_vm.$set(_vm.ruleForm, "hot_labels", $$v)},expression:"ruleForm.hot_labels"}},_vm._l((_vm.config.hot_shop_labels),function(item ,index){return _c('el-option',{key:index,attrs:{"label":item,"value":item}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"建议合适业态"}},[_c('el-select',{attrs:{"multiple":"","filterable":"","allow-create":"","default-first-option":"","placeholder":"请选择建议合适业态"},model:{value:(_vm.ruleForm.suit_industry),callback:function ($$v) {_vm.$set(_vm.ruleForm, "suit_industry", $$v)},expression:"ruleForm.suit_industry"}},_vm._l((_vm.config.shop_function),function(item ,index){return _c('el-option',{key:index,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"实勘合格证"}},[_c('el-checkbox-group',{attrs:{"size":"small"},on:{"change":_vm.changeSurvey},model:{value:(_vm.shop_survey),callback:function ($$v) {_vm.shop_survey=$$v},expression:"shop_survey"}},_vm._l((_vm.config.shop_survey),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id,"border":""}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"核检员姓名","prop":"checker_name"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入核检员姓名"},model:{value:(_vm.ruleForm.checker_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "checker_name", $$v)},expression:"ruleForm.checker_name"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","readonly":"","placeholder":"地理位置坐标","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"不能出现任意联系方式（包括但不限QQ，微信、电话、网址、MSN、邮箱等）；请勿添加其他广告，请勿输入与本房源无关内容或者非法信息。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"标题","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入标题"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细介绍","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box1"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"管家评语"}},[_c('div',{attrs:{"id":"tinymcy-box2"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.comment),callback:function ($$v) {_vm.$set(_vm.ruleForm, "comment", $$v)},expression:"ruleForm.comment"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"99%房源下架的图片规则：1、不得违反公司logo发布规则（限1个，白色半透明且尺寸在25%以内）2、不得盗图（含其他logo）3、不得有任何装    饰，图文。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.ruleForm.img_show)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img_show}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img_show)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm.img_show)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源图片","prop":"img_url.IMG_I"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccessI,"before-remove":_vm.handleImgRemoveI,"on-preview":_vm.handlePictureCardPreview,"file-list":_vm.temp_url.IMG_I}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}}),_vm._v(" "),(_vm.image_type.length>1)?_c('div',{staticStyle:{"z-index":"9999999999"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.previmage}},[_vm._v("上一张")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.nextimage}},[_vm._v("下一张")])],1):_vm._e()])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"模板选择"}},[_c('el-switch',{attrs:{"active-text":"新模板","inactive-text":"旧模板"},model:{value:(_vm.ruleForm.is_new),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_new", $$v)},expression:"ruleForm.is_new"}})],1),_vm._v(" "),(_vm.ruleForm.is_new==1)?_c('div',[_c('el-form-item',{attrs:{"label":"新模板信息获取"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getInfo}},[_vm._v("获取信息")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边分布"}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.ruleForm.distribution}},[_c('el-table-column',{attrs:{"prop":"name","label":"名称","width":"220"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"address","label":"地址","width":"220"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"position","label":"距离"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边餐饮","prop":"food_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边餐饮"},model:{value:(_vm.ruleForm.food_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "food_num", $$v)},expression:"ruleForm.food_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"休闲服务","prop":"leisure_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"休闲服务"},model:{value:(_vm.ruleForm.leisure_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "leisure_num", $$v)},expression:"ruleForm.leisure_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边小区","prop":"village_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边小区"},model:{value:(_vm.ruleForm.village_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "village_num", $$v)},expression:"ruleForm.village_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边学校","prop":"school_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边学校"},model:{value:(_vm.ruleForm.school_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "school_num", $$v)},expression:"ruleForm.school_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边写字楼","prop":"office_building_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边写字楼"},model:{value:(_vm.ruleForm.office_building_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "office_building_num", $$v)},expression:"ruleForm.office_building_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边商城","prop":"market_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边商城"},model:{value:(_vm.ruleForm.market_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "market_num", $$v)},expression:"ruleForm.market_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"生活服务","prop":"life_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"生活服务"},model:{value:(_vm.ruleForm.life_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "life_num", $$v)},expression:"ruleForm.life_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"消费均价","prop":"avg_price"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"消费均价"},model:{value:(_vm.ruleForm.avg_price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "avg_price", $$v)},expression:"ruleForm.avg_price"}}),_vm._v("元\n\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"餐饮TOP榜"}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.ruleForm.rest_top}},[_c('el-table-column',{attrs:{"prop":"name","label":"美食名称","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"regionName","label":"地区","width":"200"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shopPower","label":"星级"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"position","label":"距离"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"专家"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.getcheckerList1,"loading":_vm.loading},model:{value:(_vm.ruleForm.expert_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "expert_id", $$v)},expression:"ruleForm.expert_id"}},_vm._l((_vm.checkerList1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"核验员"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.getcheckerList2,"loading":_vm.loading},model:{value:(_vm.ruleForm.checker),callback:function ($$v) {_vm.$set(_vm.ruleForm, "checker", $$v)},expression:"ruleForm.checker"}},_vm._l((_vm.checkerList2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房管家"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.getcheckerList3,"loading":_vm.loading},model:{value:(_vm.ruleForm.house_manager_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_manager_id", $$v)},expression:"ruleForm.house_manager_id"}},_vm._l((_vm.checkerList3),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否已实勘"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_survey),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_survey", $$v)},expression:"ruleForm.is_survey"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否实勘合格"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_pass),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_pass", $$v)},expression:"ruleForm.is_pass"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"管家是否推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_recommend),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_recommend", $$v)},expression:"ruleForm.is_recommend"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"旺铺认证"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_good),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_good", $$v)},expression:"ruleForm.is_good"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"专家总结"}},[_c('el-input',{staticClass:"name",attrs:{"type":"textarea","maxlength":"300","placeholder":"请输入专家总结"},model:{value:(_vm.ruleForm.expert_summary),callback:function ($$v) {_vm.$set(_vm.ruleForm, "expert_summary", $$v)},expression:"ruleForm.expert_summary"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"历史业态"}},[_c('el-input',{staticClass:"name",attrs:{"type":"textarea","maxlength":"300","placeholder":"请输入历史业态"},model:{value:(_vm.ruleForm.industry_string),callback:function ($$v) {_vm.$set(_vm.ruleForm, "industry_string", $$v)},expression:"ruleForm.industry_string"}})],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var saleshop_SaleshopDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/sale/saleshop/SaleshopDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("aCpf")
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
  SaleshopDetail,
  saleshop_SaleshopDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var sale_saleshop_SaleshopDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "aCpf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ka3R");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("465b7a60", content, true);

/***/ }),

/***/ "ka3R":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.office-form {\n  padding: 20px;\n}\n.office-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  min-height: 360px;\n  width: 100%;\n}\n.office-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.office-form fieldset ol {\n    padding-left: 25px;\n}\n.office-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.office-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.office-form .el-upload-list-box,\n.office-form .el-upload-list-box + div {\n  float: left;\n}\n.office-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box1 .mce-container,\n#tinymcy-box1 .mce-container * {\n  white-space: normal;\n}\n#tinymcy-box2 .mce-container,\n#tinymcy-box2 .mce-container * {\n  white-space: normal;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/***/ })

});
webpackJsonp([89],{

/***/ "/Cpc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("d7EF");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent/business/businessDetail.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var businessDetail = ({
	name: "BusinessDetail",
	components: { Tinymce: Tinymce["a" /* default */] },
	data: function data() {
		var _this = this;

		return {
			ruleForm: {
				is_new: 1, //是否新模板
				is_chain: 1, //是否新模板
				proj_contact: null, //项目联系人
				proj_contact_phone: null, //项目联系方式
				house_num: 0,
				school_num: 0,
				kinder_num: 0,
				primary_num: 0,
				middle_num: 0,
				high_num: 0,
				university_num: 0,
				people_num: 0,
				type: null, //商业所属类型
				// radiation: '', //辐射范围
				range_min: '', //辐射范围 
				range_max: '', //辐射范围 
				title: null, //产业园名称
				developer: "", //开发商名称
				area: null, //区域
				area2: null, //街道
				mianji: null, //面积
				total_mianji: null,
				un_floor: null, //地下楼层
				on_floor: null, //地上楼层
				floor_height: null, //楼层层高
				zhuangxiu: null, //装修，配置项
				business_type: null, //商业类型
				open_time: null,
				invitation: [],
				invitation_nums: [],
				fire_type: null, //消费类型
				fire_control: [], //消防措施 **配置项**
				nature: null, //房产性质
				acreage: null, //得房率
				astrict: [], //经营限制
				astrict_other: null, //其他经营限制
				facilities: [], //配套设施，配置项
				address: null,
				map: null, //地点标记
				rental_pay: null, //支付方式 配置项
				price: null, //价格
				max_price: null, //价格
				start_rent: null, //起租期
				free_rent: null, //免租期
				wuyefei: null, //物业费
				electric_fee: null, //电费
				water_fee: null, //水费
				// project_name: null, //项目名称
				info: null, //项目描述
				brand: [], //知名品牌
				img: null, //封面图片
				pic: [], //外立面图
				pic1: [], //楼层平面图
				pic2: [], //街景图
				video_url: null, //视频链接
				status: null,
				park_num: null,
				park_num_down: null,
				min_floor_height: null,
				max_floor_height: null,
				fail_reason: null,
				short_home: [],
				// sale_avg_price: null,
				article_ids: [],
				outer_urls: [],
				ordid: 1000
			},
			temp: {},
			investmentList: [],
			total: 0,
			pagesize: 0,
			page: 1,
			houseList: [],
			title: null,
			center: { lng: 118.815358, lat: 32.063673 },
			exiting: false,
			exitingId: null,
			qualification: {},
			pickerOptions: {
				shortcuts: [{
					text: "今天",
					onClick: function onClick(picker) {
						picker.$emit("pick", new Date());
					}
				}, {
					text: "昨天",
					onClick: function onClick(picker) {
						var date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24);
						picker.$emit("pick", date);
					}
				}, {
					text: "一周前",
					onClick: function onClick(picker) {
						var date = new Date();
						date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit("pick", date);
					}
				}]
			},
			invitation_nums: [],
			config: {},
			subways: [],
			isEdit: false,
			map: { lng: 118.815358, lat: 32.063673 },
			// host: "http://" + location.host,
			host:  true ? "http://" + location.host : "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			dialogImageUrl1: "",
			dialogVisible1: false,
			dialogFormVisible: false,
			dialogStatus: "create",
			rules: {
				title: [{
					required: true,
					message: "请输入产业园名称",
					trigger: "blur"
				}],
				type: [{
					required: false,
					message: "请选择商业所属类型",
					trigger: "blur"
				}],
				developer: [{
					required: true,
					message: "请输入开发商名称",
					trigger: "blur"
				}],
				business_type: [{
					required: true,
					message: "请选择商业类型",
					trigger: "blur"
				}],
				open_time: [{
					required: true,
					message: "请选择开业时间",
					trigger: "blur"
				}],
				rental_pay: [{
					required: true,
					message: "请选择支付方式",
					trigger: "blur"
				}],
				mianji: [{
					required: true,
					message: "请输入面积",
					trigger: "blur"
				}],
				address: [{
					required: true,
					message: "请输入地址",
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
				fail_reason: [{
					required: true,
					message: "请输入不通过原因",
					trigger: "blur"
				}],
				min_floor_height: [{
					required: true,
					message: "请输入最小层高",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.max_floor_height && Number(value) > Number(_this.ruleForm.max_floor_height)) {
							callback(new Error("最小层高不得大于最大层高"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				max_floor_height: [{
					required: true,
					message: "请输入最大层高",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.min_floor_height && Number(value) < Number(_this.ruleForm.min_floor_height)) {
							callback(new Error("最大层高不得小于最小层高"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				price: [{
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.max_price && Number(value) > Number(_this.ruleForm.max_price)) {
							callback(new Error("最小租金不得大于最大租金"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				max_price: [{
					validator: function validator(rule, value, callback) {
						if (value && _this.ruleForm.price && Number(value) < Number(_this.ruleForm.price)) {
							callback(new Error("最大租金不得小于最小租金"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}]
			},
			temRules: {},
			areas: [],
			fileList: [],
			fileList1: [],
			fileList2: [],
			districts: [],
			remarkLists: []
		};
	},

	created: function created() {
		var _this2 = this;

		this.getConfigList().then(function (data) {
			if (_this2.$route.params.id > 0) {
				_this2.getDetail(_this2.$route.params.id);
				_this2.getMountPage();
				_this2.getInvestmentList();
			}
		});
		this.getAreaLists();
		if (this.$route.params.id > 0) {
			this.isEdit = true;
		}
	},
	mounted: function mounted() {},

	methods: {
		handleVideoRemove: function handleVideoRemove() {
			this.ruleForm.video_url = '';
		},
		getInfo: function getInfo() {
			var _this3 = this;

			if (this.ruleForm.map) {
				Object(requirement["p" /* getAroundInfo */])({
					lat: this.ruleForm.map.split(",")[1],
					lng: this.ruleForm.map.split(",")[0]
				}).then(function (response) {
					var response = response.data;
					if (response.status == 1) {
						_this3.ruleForm = assign_default()(_this3.ruleForm, response.data);
					} else {
						_this3.$message({
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
		addBrand: function addBrand() {
			if (this.ruleForm.brand.length === 0 || this.ruleForm.brand[this.ruleForm.brand.length - 1].show_url) {
				this.ruleForm.brand.push({ title: '', type: '', ceng: '', url: '', show_url: '' });
			}
		},
		getRadiation: function getRadiation(type) {
			var _this4 = this;

			Object(requirement["y" /* getRadiation */])(type).then(function (response) {
				_this4.ruleForm.range_min = response.data.data.range_min;
				_this4.ruleForm.range_max = response.data.data.range_max;
			});
		},
		addInvestMent: function addInvestMent() {
			var _this5 = this;

			Object(house["b" /* addInvestMent */])(this.temp).then(function (response) {
				_this5.dialogFormVisible = false;
				_this5.getInvestmentList();
			});
		},
		editInvestMent: function editInvestMent() {
			var _this6 = this;

			Object(house["k" /* editInvestMent */])(this.temp).then(function (response) {
				_this6.dialogFormVisible = false;
				_this6.getInvestmentList();
			});
		},
		delInvestMent: function delInvestMent(row) {
			var _this7 = this;

			row.status = 2;
			Object(house["k" /* editInvestMent */])(row).then(function (response) {
				_this7.dialogFormVisible = false;
				_this7.getInvestmentList();
			});
		},
		handleDelete1: function handleDelete1(row) {
			var _this8 = this;

			this.$confirm("你确定要删除此招商人员吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				row.status = 2;
				_this8.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(house["k" /* editInvestMent */])(row).then(function (response) {
						_this8.getInvestmentList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this8.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		},
		handleCreate1: function handleCreate1() {
			this.dialogStatus = "create";
			this.temp = {
				park_id: this.$route.params.id,
				house_type: 65,
				name: null,
				mobile: null,
				status: null
			};
			this.dialogFormVisible = true;
		},
		handleUpdate1: function handleUpdate1(row) {
			this.dialogStatus = "update";
			this.temp = row;
			this.dialogFormVisible = true;
		},
		getInvestmentList: function getInvestmentList() {
			var _this9 = this;

			Object(house["E" /* getInvestmentList */])({
				park_id: this.$route.params.id,
				house_type: 65
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this9.investmentList = data;
				}
			});
		},
		rentalType: function rentalType(row) {
			var types = { 60: "商铺", 61: "写字楼", 67: "厂房" };
			return types[row.rental_type];
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = val;
			this.getMountPage();
		},
		handleDelete: function handleDelete(row) {
			var _this10 = this;

			this.$confirm("你确定要删除此挂载房源吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this10.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(house["f" /* delMount */])({
						mount_id: row.mount_id
					}).then(function (response) {
						_this10.getMountPage();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this10.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		},
		getMountPage: function getMountPage() {
			var _this11 = this;

			Object(house["G" /* getMountPage */])({
				park_id: this.$route.params.id,
				house_type: 65,
				page: this.page
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this11.houseList = data.data;
					_this11.total = data.total;
					_this11.pagesize = Number(data.per_page);
				}
			});
		},
		jumpHouse: function jumpHouse() {
			this.$router.push({
				name: "OfficeDetail",
				params: { id: this.exitingId }
			});
		},
		querySearchAsync: function querySearchAsync(queryString, cb) {
			this.exiting = false;
			this.exitingId = null;
			if (!queryString) {
				return;
			}
			Object(house["c" /* checkTitle */])({
				title: queryString, //房源编号
				house_type: 65 //房源类型
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					data.forEach(function (item) {
						item.title = item.title + "(" + item.area_name + item.area_name2 + ")";
					});
					cb(data);
				}
			});
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
			if (this.ruleForm.article_ids.length == 5) {
				this.$message({
					message: "最多只能新增5个精品导购",
					type: "warning"
				});
				return false;
			}
			this.ruleForm.article_ids.push(item);
		},
		addOutLink: function addOutLink() {
			if (this.ruleForm.outer_urls.length == 5) {
				this.$message({
					message: "最多只能新增5个外网链接",
					type: "warning"
				});
				return false;
			}
			this.ruleForm.outer_urls.push({
				title: null,
				url: null
			});
		},
		removeTop: function removeTop(index) {
			this.ruleForm.article_ids.splice(index, 1);
		},
		removeOutLink: function removeOutLink(index) {
			this.ruleForm.outer_urls.splice(index, 1);
		},
		handleSelect: function handleSelect(item) {
			this.exiting = true;
			this.exitingId = item.id;
		},
		confrimPass: function confrimPass(id) {
			var _this12 = this;

			Object(house["m" /* editQualification */])({
				id: id,
				status: 1
			}).then(function () {
				Object(house["K" /* getQualificationDetail */])(_this12.ruleForm.user_id).then(function (res) {
					_this12.qualification = res.data.data || {};
				});
			});
		},
		cancelPass: function cancelPass(id) {
			var _this13 = this;

			Object(house["m" /* editQualification */])({
				id: id,
				status: 2
			}).then(function () {
				Object(house["K" /* getQualificationDetail */])(_this13.ruleForm.user_id).then(function (res) {
					_this13.qualification = res.data.data || {};
				});
			});
		},
		toggleInvitatinError: function toggleInvitatinError(val, index) {
			this.invitation_nums[index].showError = val ? false : true;
			this.$forceUpdate();
		},

		// getInvitationNumList(value, ele) {
		// 	if (value) {
		// 		var obj = {};
		// 		obj[ele.srcElement.defaultValue] = "";
		// 		this.ruleForm.invitation_nums.push(obj);
		// 		this.invitation_nums.push({
		// 			name: ele.srcElement.name,
		// 			id: ele.srcElement.defaultValue
		// 		});
		// 	} else {
		// 		this.ruleForm.invitation_nums.forEach((item, index) => {
		// 			for (var key in item) {
		// 				if (key == ele.srcElement.defaultValue) {
		// 					this.ruleForm.invitation_nums.splice(index, 1);
		// 					this.invitation_nums.splice(index, 1);
		// 				}
		// 			}
		// 		});
		// 	}
		// },
		searchByStationName: function searchByStationName() {
			var _this14 = this;

			var localSearch = new BMap.LocalSearch(this.$refs.map.map);
			this.$refs.map.map.clearOverlays(); //清空原来的标注
			var keyword = this.areas.find(function (item) {
				return item.code == _this14.ruleForm.area;
			}).name + this.districts.find(function (item) {
				return item.code == _this14.ruleForm.area2;
			}).name + this.ruleForm.address;
			localSearch.setSearchCompleteCallback(function (searchResult) {
				var poi = searchResult.getPoi(0);
				if (poi) {
					_this14.ruleForm.map = poi.point.lng + "," + poi.point.lat; //这里是追加到对应的input文本框里，可以根据自己的需要来修改
					_this14.$refs.map.map.centerAndZoom(poi.point, 18);
					var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
					_this14.$refs.map.map.addOverlay(marker);
				} else {
					_this14.$alert("没有查询到该地址坐标，请您在地图上自行点击选择所在位置", "提示", {
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
			var _this15 = this;

			return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
				var _, _ref, _ref2, config, subways;

				return regenerator_default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_ = _this15;
								_context.prev = 1;
								_context.next = 4;
								return promise_default.a.all([Object(house["s" /* getBusinessConfingList */])(), Object(house["M" /* getStationList */])()]);

							case 4:
								_ref = _context.sent;
								_ref2 = slicedToArray_default()(_ref, 2);
								config = _ref2[0];
								subways = _ref2[1];

								_.config = config.data.data;
								_.subways = subways.data.data;
								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context["catch"](1);

								console.log(_context.t0);

							case 15:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this15, [[1, 12]]);
			}))();
		},
		handleVideoSuccess: function handleVideoSuccess(res, file) {
			// this.ruleForm.video_url = URL.createObjectURL(file.raw);
			this.ruleForm.video_url = res.data.show_url;
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
		handleBrandRemove: function handleBrandRemove(index) {
			this.ruleForm.brand.splice(index, 1);
		},
		handleBrandImgSuccess: function handleBrandImgSuccess(res, file, index) {
			this.ruleForm.brand[this.ruleForm.brand.length - 1].show_url = this.ruleForm.brand[this.ruleForm.brand.length - 1].url = res.data.show_url;
		},
		handleImgRemove: function handleImgRemove(file, fileList) {
			var _this16 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this16.ruleForm.pic.splice(index, 1);
				}
			});
		},
		handleImgRemove1: function handleImgRemove1(file, fileList) {
			var _this17 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this17.ruleForm.pic1.splice(index, 1);
				}
			});
		},
		handleImgRemove2: function handleImgRemove2(file, fileList) {
			var _this18 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this18.ruleForm.pic2.splice(index, 1);
				}
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.ruleForm.pic.push(res.data.show_url);
		},
		handleImgSuccess1: function handleImgSuccess1(res, file) {
			this.ruleForm.pic1.push(res.data.show_url);
		},
		handleImgSuccess2: function handleImgSuccess2(res, file) {
			this.ruleForm.pic2.push(res.data.show_url);
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.show_url || file.url || file.img_show;
			this.dialogVisible = true;
		},
		handlePictureCardPreview1: function handlePictureCardPreview1(url) {
			this.dialogImageUrl1 = url;
			this.dialogVisible1 = true;
		},
		getDetail: function getDetail(id) {
			var _this19 = this;

			Object(house["t" /* getBusinessDetail */])(id).then(function (response) {
				var data = response.data.data;
				var keys = ["invitation", "fire_control", "facilities", "astrict", "short_home"];
				for (var i = 0; i < keys.length; i++) {
					if (!!data[keys[i]]) {
						data[keys[i]] = data[keys[i]].map(function (item) {
							return Number(item);
						});
					} else {
						data[keys[i]] = [];
					}
				}
				_this19.fileList = data.file.map(function (item) {
					return {
						url: item.show_url,
						title: ""
					};
				});
				_this19.fileList1 = data.file1.map(function (item) {
					return {
						url: item.show_url,
						title: ""
					};
				});
				_this19.fileList2 = data.file2.map(function (item) {
					return {
						url: item.show_url,
						title: ""
					};
				});
				data.facilities = data.facilities ? data.facilities.map(function (item) {
					return Number(item);
				}) : [];
				data.subway_id = data.subway_id ? data.subway_id.map(function (item) {
					return Number(item);
				}) : [];
				data.article_ids = data.article_ids || [];
				data.outer_urls = data.outer_urls || [];
				_this19.remarkLists = data.remarkLists || [];
				data.short_home = data.short_home || [];
				data.rec_position = Number(data.rec_position);
				data.nature = Number(data.nature);
				data.brand = data.brand || [];
				data.invitation_nums.forEach(function (item, index) {
					_this19.config.invitation.forEach(function (item1, index1) {
						for (var key in item) {
							if (key == item1.id) {
								_this19.invitation_nums.push(item1);
							}
						}
					});
				});
				if (data.floor_height) {
					_this19.ruleForm.min_floor_height = data.floor_height.split(",")[0];
					_this19.ruleForm.max_floor_height = data.floor_height.split(",")[1];
				}
				_this19.ruleForm = assign_default()(_this19.ruleForm, data);
				setTimeout(function () {
					if (_this19.ruleForm.map) {
						var arr = _this19.ruleForm.map.split(",");
						var point = new BMap.Point(Number(arr[0]), Number(arr[1]));
						var marker = new BMap.Marker(point);
						_this19.$refs.map.map.clearOverlays();
						_this19.$refs.map.map.addOverlay(marker);
						_this19.$refs.map.map.centerAndZoom(point, 18);
					}
				}, 1000);
				if (_this19.ruleForm.agent_flag && _this19.ruleForm.user_id) {
					Object(house["K" /* getQualificationDetail */])(_this19.ruleForm.user_id).then(function (res) {
						_this19.qualification = res.data.data || {};
					});
				}
				Object(requirement["s" /* getDistrictLists */])(_this19.ruleForm.area).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this19.districts = data;
					} else {
						_this19.$message({
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
		checkOuterUrls: function checkOuterUrls(cb) {
			var _this20 = this;

			var flag = true;
			var msg = "";
			var outer_urls = this.ruleForm.outer_urls;
			var len = outer_urls.length;
			var patt = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
			if (len < 1) {
				cb();
				return true;
			}
			for (var i = 0; i < len; i++) {
				var element = outer_urls[i];
				if (!element.title) {
					msg = "您还没有填写文章标题，请填写完整，否则该文章将不会展示在相应房源中";
					flag = false;
					break;
				}
				if (!element.url) {
					msg = "您还没有填写文章链接，请填写完整，否则该文章将不会展示在相应房源中";
					flag = false;
					break;
				}
				if (!patt.test(element.url)) {
					msg = "请输入正确的文章链接，否则该文章将不会展示在相应房源中";
					flag = false;
					break;
				}
			}
			if (!flag) {
				this.$confirm(msg, "提示", {
					confirmButtonText: "继续提交",
					cancelButtonText: "补充完整",
					type: "warning"
				}).then(function () {
					cb();
				}).catch(function () {
					document.documentElement.scrollTop = _this20.$refs.catLink.$el.offsetTop;
				});
			} else {
				cb();
			}
		},

		/**
   * 提交表单
   *
   */
		submitForm: function submitForm(formName) {
			var _this21 = this;

			if (this.qualification.status !== 1 && this.ruleForm.agent_flag && this.ruleForm.status == 1) {
				this.$message({
					type: "error",
					message: "企业资质待审核，请先审核企业资质～"
				});
				return;
			}
			if (this.ruleForm.pic.length === 0) {
				this.$message({
					type: "error",
					message: "请至少上传一张外立面图"
				});
				return;
			}
			if (this.ruleForm.brand.length !== 0 && !this.ruleForm.brand[this.ruleForm.brand.length - 1].url) {
				this.$message({
					type: "error",
					message: "请上传品牌logo图片"
				});
				return;
			}
			this.$refs.ruleForm.validate().then(function (validate) {
				if (!_this21.isValidInvitation()) return;
				_this21.checkOuterUrls(_this21.editOrAddOrder);
			}, function (error) {
				console.log(error);
			});
		},
		isValidInvitation: function isValidInvitation() {
			var _this22 = this;

			//校验招商业态数量
			var flag = true;
			this.ruleForm.invitation_nums.forEach(function (item, index) {
				for (var key in item) {
					if (!item[key]) {
						_this22.invitation_nums[index].showError = true;
						flag = false;
					}
				}
			});
			if (!flag) this.$forceUpdate();
			return flag;
		},
		editOrAddOrder: function editOrAddOrder() {
			var _this23 = this;

			this.ruleForm.floor_height = this.ruleForm.min_floor_height + "," + this.ruleForm.max_floor_height;
			this.ruleForm.article_ids = this.ruleForm.article_ids.map(function (item) {
				return item.id;
			});
			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(house["h" /* editBusiness */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this23.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this23.$store.dispatch("delView", _this23.$route);
							_this23.$router.go(-1);
						}, 500);
					} else {
						_this23.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				Object(house["a" /* addBusiness */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this23.$notify({
							title: "成功",
							message: "提交成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this23.$store.dispatch("delView", _this23.$route);
							_this23.$router.go(-1);
						}, 500);
					} else {
						_this23.$message({
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
			var _this24 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this24.areas = data;
					_this24.areas1 = data.slice(1);
					_this24.areas1Code = _this24.areas1[0].code;
				} else {
					_this24.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeDistrictLists: function changeDistrictLists() {
			var _this25 = this;

			Object(requirement["s" /* getDistrictLists */])(this.areas1Code).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this25.districts1 = data;
					_this25.districts1Code = _this25.districts1[0].code;
				} else {
					_this25.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea: function changeArea() {
			var _this26 = this;

			this.ruleForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this26.districts = data;
				} else {
					_this26.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a1894f6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent/business/businessDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"business-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.agent_flag)?_c('fieldset',[_c('legend',[_vm._v("企业资质")]),_vm._v(" "),_c('div',{staticClass:"enterprise-qualification"},[_c('el-form-item',{attrs:{"label":"企业全称："}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.qualification.company_name)+"\n\t\t\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业代码："}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.qualification.company_code)+"\n\t\t\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证明图片："}},[_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.qualification.file),function(item,index){return _c('li',{key:'img_'+index,staticClass:"el-upload-list__item is-success",staticStyle:{"cursor":"pointer"},attrs:{"tabindex":"0"},on:{"click":function($event){_vm.handlePictureCardPreview1(item)}}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":item,"alt":""}})])}))]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业资质状态："}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(['待审核','通过','未通过','重申'][_vm.qualification.status])+"\n\t\t\t\t\t\t\t")]),_vm._v(" "),(_vm.qualification.status==0||_vm.qualification.status==3)?_c('el-form-item',{attrs:{"label":""}},[_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){_vm.confrimPass(_vm.qualification.id)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.cancelPass(_vm.qualification.id)}}},[_vm._v("驳回")])],1):_vm._e()],1)]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否连锁项目","prop":"is_chain"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_chain),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_chain", $$v)},expression:"ruleForm.is_chain"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1","checked":""}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商业所属类型","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择商业所属类型"},model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},_vm._l((_vm.config.type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id},nativeOn:{"click":function($event){_vm.getRadiation(item.id)}}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"辐射范围"}},[_c('el-input',{staticStyle:{"width":"180px"},attrs:{"placeholder":"最小辐射范围","maxlength":"30"},model:{value:(_vm.ruleForm.range_min),callback:function ($$v) {_vm.$set(_vm.ruleForm, "range_min", $$v)},expression:"ruleForm.range_min"}}),_vm._v("--\n\t\t\t\t\t\t"),_c('el-input',{staticStyle:{"width":"180px"},attrs:{"placeholder":"最大辐射范围","maxlength":"30"},model:{value:(_vm.ruleForm.range_max),callback:function ($$v) {_vm.$set(_vm.ruleForm, "range_max", $$v)},expression:"ruleForm.range_max"}}),_vm._v("公里\n\t\t\t\t\t")],1),_vm._v(" "),(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"商业体ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商业体名称","prop":"title"}},[_c('el-autocomplete',{staticStyle:{"width":"100%"},attrs:{"value-key":"title","trigger-on-focus":false,"fetch-suggestions":_vm.querySearchAsync,"placeholder":"请输入商业体名称"},on:{"select":_vm.handleSelect},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.exiting),expression:"exiting"}],staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.jumpHouse()}}},[_vm._v("去编辑")])],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.exiting),expression:"!exiting"}]},[_c('el-form-item',{attrs:{"label":"开发商名称"}},[_c('el-input',{attrs:{"placeholder":"开发商名称","maxlength":"255"},model:{value:(_vm.ruleForm.developer),callback:function ($$v) {_vm.$set(_vm.ruleForm, "developer", $$v)},expression:"ruleForm.developer"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目占地"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入项目占地"},model:{value:(_vm.ruleForm.total_mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "total_mianji", $$v)},expression:"ruleForm.total_mianji"}}),_vm._v(" 亩\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"建筑面积","prop":"mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入面积"},model:{value:(_vm.ruleForm.mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mianji", $$v)},expression:"ruleForm.mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商业楼层","prop":"un_floor"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"maxlength":"30","placeholder":"请输入地下楼层"},model:{value:(_vm.ruleForm.un_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "un_floor", $$v)},expression:"ruleForm.un_floor"}}),_vm._v(" -- \n\t\t\t\t\t\t\t"),_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"maxlength":"30","placeholder":"请输入地上楼层"},model:{value:(_vm.ruleForm.on_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "on_floor", $$v)},expression:"ruleForm.on_floor"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"层高","prop":"min_floor_height"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最小层高"},model:{value:(_vm.ruleForm.min_floor_height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "min_floor_height", $$v)},expression:"ruleForm.min_floor_height"}}),_c('span',[_vm._v(" 至")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"max_floor_height"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最大层高"},model:{value:(_vm.ruleForm.max_floor_height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_floor_height", $$v)},expression:"ruleForm.max_floor_height"}}),_vm._v(" 米\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目联系人","prop":"un_floor"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入项目联系人"},model:{value:(_vm.ruleForm.proj_contact),callback:function ($$v) {_vm.$set(_vm.ruleForm, "proj_contact", $$v)},expression:"ruleForm.proj_contact"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目联系方式","prop":"un_floor"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入项目联系方式"},model:{value:(_vm.ruleForm.proj_contact_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "proj_contact_phone", $$v)},expression:"ruleForm.proj_contact_phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"装修状态","prop":"zhuangxiu"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择装修状态"},model:{value:(_vm.ruleForm.zhuangxiu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuangxiu", $$v)},expression:"ruleForm.zhuangxiu"}},_vm._l((_vm.config.zhuangxiu),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择商铺类型"},model:{value:(_vm.ruleForm.business_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "business_type", $$v)},expression:"ruleForm.business_type"}},_vm._l((_vm.config.business_type),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开业时间"}},[_c('el-col',{staticStyle:{"width":"214px"},attrs:{"span":12}},[_c('el-date-picker',{attrs:{"type":"date","align":"right","unlink-panels":"","picker-options":_vm.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:(_vm.ruleForm.open_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "open_time", $$v)},expression:"ruleForm.open_time"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"招商业态"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.invitation),callback:function ($$v) {_vm.$set(_vm.ruleForm, "invitation", $$v)},expression:"ruleForm.invitation"}},_vm._l((_vm.config.invitation),function(item){return _c('el-checkbox',{key:item.name,attrs:{"name":item.name,"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"消防状态","prop":"fire_type"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择消防状态"},model:{value:(_vm.ruleForm.fire_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fire_type", $$v)},expression:"ruleForm.fire_type"}},_vm._l((_vm.config.fire_type),function(item){return _c('el-option',{key:'fireT_type'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('div',[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.fire_control),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fire_control", $$v)},expression:"ruleForm.fire_control"}},_vm._l((_vm.config.fire_control),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房产性质","prop":"nature"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择房产性质"},model:{value:(_vm.ruleForm.nature),callback:function ($$v) {_vm.$set(_vm.ruleForm, "nature", $$v)},expression:"ruleForm.nature"}},_vm._l((_vm.config.nature),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"得房率","prop":"acreage"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入得房率"},model:{value:(_vm.ruleForm.acreage),callback:function ($$v) {_vm.$set(_vm.ruleForm, "acreage", $$v)},expression:"ruleForm.acreage"}}),_vm._v(" %\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"经营限制","prop":"astrict"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.astrict),callback:function ($$v) {_vm.$set(_vm.ruleForm, "astrict", $$v)},expression:"ruleForm.astrict"}},_vm._l((_vm.config.astrict),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])})),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入其他经营限制"},model:{value:(_vm.ruleForm.astrict_other),callback:function ($$v) {_vm.$set(_vm.ruleForm, "astrict_other", $$v)},expression:"ruleForm.astrict_other"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"配套设施","prop":"facilities"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.facilities),callback:function ($$v) {_vm.$set(_vm.ruleForm, "facilities", $$v)},expression:"ruleForm.facilities"}},_vm._l((_vm.config.facilities),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页短标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.short_home),callback:function ($$v) {_vm.$set(_vm.ruleForm, "short_home", $$v)},expression:"ruleForm.short_home"}},_vm._l((_vm.config.short_map),function(item){return _c('el-checkbox',{key:item.value,attrs:{"label":item.id}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地上停车位"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入停车位"},model:{value:(_vm.ruleForm.park_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "park_num", $$v)},expression:"ruleForm.park_num"}}),_vm._v(" 个\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地下停车位"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入停车位"},model:{value:(_vm.ruleForm.park_num_down),callback:function ($$v) {_vm.$set(_vm.ruleForm, "park_num_down", $$v)},expression:"ruleForm.park_num_down"}}),_vm._v(" 个\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"付款方式","prop":"rental_pay"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择租金付款方式"},model:{value:(_vm.ruleForm.rental_pay),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rental_pay", $$v)},expression:"ruleForm.rental_pay"}},_vm._l((_vm.config.rental_pay),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"租金","prop":"price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入最小价格"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}}),_vm._v("至\n\t\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"max_price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入最大价格"},model:{value:(_vm.ruleForm.max_price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_price", $$v)},expression:"ruleForm.max_price"}}),_vm._v("元/m²/天\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"起租期","prop":"start_rent"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入起租期"},model:{value:(_vm.ruleForm.start_rent),callback:function ($$v) {_vm.$set(_vm.ruleForm, "start_rent", $$v)},expression:"ruleForm.start_rent"}}),_vm._v("月\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"免租期","prop":"free_rent"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入免租期"},model:{value:(_vm.ruleForm.free_rent),callback:function ($$v) {_vm.$set(_vm.ruleForm, "free_rent", $$v)},expression:"ruleForm.free_rent"}}),_vm._v("月\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业费","prop":"wuyefei"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入物业费"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}}),_vm._v("元/㎡/月\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电费","prop":"electric_fee"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入电费"},model:{value:(_vm.ruleForm.electric_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "electric_fee", $$v)},expression:"ruleForm.electric_fee"}}),_vm._v("元/度\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"水费","prop":"water_fee"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入水费"},model:{value:(_vm.ruleForm.water_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "water_fee", $$v)},expression:"ruleForm.water_fee"}}),_vm._v("元/吨\n\t\t\t\t\t\t")],1),_vm._v(" "),(_vm.ruleForm.is_new == 1)?_c('div',[_c('el-form-item',{attrs:{"label":"新模板信息获取"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getInfo}},[_vm._v("获取信息")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边小区","prop":"house_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边小区"},model:{value:(_vm.ruleForm.house_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_num", $$v)},expression:"ruleForm.house_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"周边学校","prop":"school_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"周边学校"},model:{value:(_vm.ruleForm.school_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "school_num", $$v)},expression:"ruleForm.school_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"幼儿园","prop":"kinder_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"幼儿园"},model:{value:(_vm.ruleForm.kinder_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "kinder_num", $$v)},expression:"ruleForm.kinder_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"小学","prop":"primary_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"小学"},model:{value:(_vm.ruleForm.primary_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "primary_num", $$v)},expression:"ruleForm.primary_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"中学","prop":"middle_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"中学"},model:{value:(_vm.ruleForm.middle_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "middle_num", $$v)},expression:"ruleForm.middle_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"高中","prop":"high_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"高中"},model:{value:(_vm.ruleForm.high_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "high_num", $$v)},expression:"ruleForm.high_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"大学","prop":"university_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"大学"},model:{value:(_vm.ruleForm.university_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "university_num", $$v)},expression:"ruleForm.university_num"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"常驻人口","prop":"people_num"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"常驻人口"},model:{value:(_vm.ruleForm.people_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "people_num", $$v)},expression:"ruleForm.people_num"}})],1)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"tips"},[_vm._v("不能出现任意联系方式（包括但不限QQ，微信、电话、网址、MSN、邮箱等）；请勿添加其他广告，请勿输入与本房源无关内容或者非法信息(10-30字之间)。")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目介绍","prop":"info"}},[_c('div',{staticClass:"components-container",attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{ref:"catLink",attrs:{"label":"添加精品导购"}},[_c('el-autocomplete',{staticStyle:{"width":"100%"},attrs:{"value-key":"title","fetch-suggestions":_vm.queryTopSearchAsync,"placeholder":"请输入关键字"},on:{"select":_vm.handleTopSelect},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}})],1),_vm._v(" "),(_vm.ruleForm.article_ids&&_vm.ruleForm.article_ids.length>0)?_c('el-form-item',_vm._l((_vm.ruleForm.article_ids),function(item,index){return _c('div',{key:item.id,staticStyle:{"margin-bottom":"5px"}},[_c('a',{staticClass:"name",staticStyle:{"display":"inline-block","width":"440px","color":"blue","cursor":"pointer","border":"1px solid #eee"},attrs:{"maxlength":"30","placeholder":"请输入文章标题，不超过30个字"},on:{"click":function($event){_vm.jumpTopUrl(item.url)}}},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){_vm.removeTop(index)}}},[_vm._v("删除")])],1)})):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"添加外网新闻"}},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.addOutLink}},[_vm._v("添加外网链接")])],1),_vm._v(" "),(_vm.ruleForm.outer_urls&&_vm.ruleForm.outer_urls.length>0)?_c('el-form-item',_vm._l((_vm.ruleForm.outer_urls),function(item,index){return _c('div',{key:item.id},[_c('el-input',{staticClass:"name",staticStyle:{"width":"240px"},attrs:{"maxlength":"30","placeholder":"请输入文章标题，不超过30个字"},model:{value:(item.title),callback:function ($$v) {_vm.$set(item, "title", $$v)},expression:"item.title"}}),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"240px"},attrs:{"placeholder":"请输入文章链接"},model:{value:(item.url),callback:function ($$v) {_vm.$set(item, "url", $$v)},expression:"item.url"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){_vm.removeOutLink(index)}}},[_vm._v("删除")])],1)})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"tips"},[_vm._v("引起"),_c('span',{staticClass:"need"},[_vm._v("99%房源下架")]),_vm._v("的图片规则：1、不得违反经济公司logo发布规则（限1个，白色半透明且尺寸在25%以内）2、不得盗图（含其他logo）3、不得有任何装饰，图文。")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload,"on-preview":_vm.handlePictureCardPreview}},[(_vm.ruleForm.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img_show}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm.img)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"外立面图"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼层平面图"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess1,"before-remove":_vm.handleImgRemove1,"file-list":_vm.fileList1,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"街景图"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess2,"before-remove":_vm.handleImgRemove2,"file-list":_vm.fileList2,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"知名品牌"}},[_c('el-button',{staticStyle:{"display":"block","margin-bottom":"20px"},attrs:{"type":"success"},on:{"click":_vm.addBrand}},[_vm._v("新增")]),_vm._v(" "),_c('div',{staticClass:"el-upload-list-box",staticStyle:{"width":"100%"}},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.ruleForm.brand),function(item,index){return _c('li',{key:'img_'+index,staticClass:"brand is-success",attrs:{"tabindex":"0"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入品牌名称","maxlength":"20"},model:{value:(_vm.ruleForm.brand[index].title),callback:function ($$v) {_vm.$set(_vm.ruleForm.brand[index], "title", $$v)},expression:"ruleForm.brand[index].title"}}),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择品牌所属业态"},model:{value:(_vm.ruleForm.brand[index].type),callback:function ($$v) {_vm.$set(_vm.ruleForm.brand[index], "type", $$v)},expression:"ruleForm.brand[index].type"}},_vm._l((_vm.config.brand_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择所在楼层"},model:{value:(_vm.ruleForm.brand[index].ceng),callback:function ($$v) {_vm.$set(_vm.ruleForm.brand[index], "ceng", $$v)},expression:"ruleForm.brand[index].ceng"}},_vm._l((_vm.config.floor),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),(item.show_url)?_c('img',{attrs:{"src":item.show_url,"alt":""},on:{"click":function($event){_vm.handlePictureCardPreview(item)}}}):_vm._e(),_vm._v(" "),(!item.show_url)?_c('el-upload',{staticClass:"upload-btn",attrs:{"action":_vm.host+'/upload/uploadFile',"multiple":"","data":{isPublic: 0},"show-file-list":false,"on-success":_vm.handleBrandImgSuccess}},[_c('el-button',{staticStyle:{"width":"120px"},attrs:{"type":"info"}},[_vm._v("上传品牌logo")])],1):_vm._e(),_vm._v(" "),_c('span',{on:{"click":function($event){_vm.handleBrandRemove(index)}}},[_c('i',{staticClass:"el-icon-delete"})])],1)}))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"视频"}},[(_vm.ruleForm.video_url)?_c('span',{staticClass:"deletevedio",on:{"click":function($event){_vm.handleVideoRemove()}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e(),_vm._v(" "),_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleVideoSuccess}},[(_vm.ruleForm.video_url)?_c('video',{staticClass:"avatar",attrs:{"controls":"controls","src":_vm.ruleForm.video_url}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("挂载房源")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.houseList}},[_c('el-table-column',{attrs:{"prop":"rental_id","label":"房源ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"rental_type","formatter":_vm.rentalType,"label":"类型"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"rental_title","label":"名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"rental_status","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.handleDelete(scope.row)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),(_vm.total)?_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":_vm.total,"page-size":_vm.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1):_vm._e()],1),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("招商管理")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"float":"right"},attrs:{"size":"small","type":"success"},on:{"click":_vm.handleCreate1}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.investmentList}},[_c('el-table-column',{attrs:{"prop":"name","label":"名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"电话"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_desc","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"el-icon-edit btn-icon",staticStyle:{"color":"#409EFF","margin-right":"5px"},on:{"click":function($event){_vm.handleUpdate1(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"el-icon-delete btn-icon",staticStyle:{"color":"red"},on:{"click":function($event){_vm.handleDelete1(scope.row)}}})]}}])})],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"400px","title":"招商人员","visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"dataForm",staticStyle:{"width":"90%"},attrs:{"rules":_vm.temRules,"model":_vm.temp,"label-position":"right","label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"用户名"}},[_c('el-input',{attrs:{"placeholder":"请输入用户名"},model:{value:(_vm.temp.name),callback:function ($$v) {_vm.$set(_vm.temp, "name", $$v)},expression:"temp.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电话号码"}},[_c('el-input',{attrs:{"placeholder":"请输入电话号码"},model:{value:(_vm.temp.mobile),callback:function ($$v) {_vm.$set(_vm.temp, "mobile", $$v)},expression:"temp.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动状态"}},[_c('el-select',{attrs:{"placeholder":"请选择活动状态"},model:{value:(_vm.temp.status),callback:function ($$v) {_vm.$set(_vm.temp, "status", $$v)},expression:"temp.status"}},[_c('el-option',{attrs:{"label":"待审","value":-1}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"启用","value":1}},[_vm._v(" 启用")]),_vm._v(" "),_c('el-option',{attrs:{"label":"下线","value":3}},[_vm._v(" 下线")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogStatus==='create'?_vm.addInvestMent():_vm.editInvestMent()}}},[_vm._v("提交")])],1)],1)],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var business_businessDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent/business/businessDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("g5gs")
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
  businessDetail,
  business_businessDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_business_businessDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "EhNA":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.brand {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -webkit-flex;\n  margin-bottom: 10px;\n}\n.brand > .el-select, .brand > .el-input {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin-right: 10px;\n}\n.brand > span {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.brand img {\n    width: 120px;\n    height: 31px;\n    cursor: pointer;\n}\n.brand .el-icon-delete {\n    line-height: 33px;\n    margin-left: 10px;\n    font-size: 22px;\n    cursor: pointer;\n}\n.business-form {\n  padding: 20px;\n}\n.business-form .btn-icon {\n    font-size: 18px;\n    cursor: pointer;\n}\n.business-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  min-height: 360px;\n  width: 100%;\n}\n.business-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.business-form fieldset ol {\n    padding-left: 25px;\n}\n.business-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.business-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.business-form .el-upload-list-box,\n.business-form .el-upload-list-box + div {\n  float: left;\n}\n.business-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.tips {\n  line-height: 40px;\n  background: #f8eae4;\n  border: 1px solid #ff0000;\n  font-size: 12px;\n  color: #4f4f4f;\n  padding-left: 10px;\n  margin: 10px 0 20px 120px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.components-container {\n  margin: 0;\n}\n.components-container .mce-container,\n  .components-container .mce-container * {\n    white-space: normal;\n}\n.components-container .editor-custom-btn-container .el-button--mini {\n    display: none;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n.deletevedio {\n  position: absolute;\n  cursor: pointer;\n  z-index: 1111;\n  left: 160px;\n  font-size: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "g5gs":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("EhNA");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("e3ed6e1a", content, true);

/***/ })

});
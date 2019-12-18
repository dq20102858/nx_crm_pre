webpackJsonp([100],{

/***/ "boar":
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

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("pFYg");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("bOdI");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/sale/salefactory/SalefactoryDetail.vue







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var SalefactoryDetail = ({
	name: "Collect",
	data: function data() {
		var _this = this,
		    _ref;

		return _ref = {
			ruleForm: {
				title: null, //厂房名称
				house_no: null, //内部房源编号
				max_mianji: null, //在租总面积
				min_mianji: null, //最小分租面积
				licence: [], //证照信息  **配置项**
				land_use: null, //土地用途  **配置项**
				land_nature: null, //土地性质  **配置项**
				power: null, //配电容量   **配置项**
				power_other: null, // 当配电容量选择其他的时候，填写此项
				steam: null, //蒸汽管道   **配置项**
				eia: -1, //是否协助环评 -1未知，1是，0否
				can_register: -1, //是否可注册 1是， 0否，-1未知
				tax: -1, //是否包含落稅 1是， 0否，-1未知
				manage_service: [], //管理服务 **配置项**
				owner_attr: null, //业主属性 **配置项**
				facilities: [], //配套服务 **配置项**
				project: null, //项目优势
				industry: null, //适合行业
				core_sell: null, //合适卖点
				area: null, //区域id
				area2: null, //街道id
				address: null, //测试地址
				map: null, //地图标注
				comment: null, //经纪人评价
				pic: [], //图片链接
				unit_ids: [],
				del_ids: [],
				status: null,
				fail_reason: null,
				short_home: [],
				ordid: 1000,
				park_id: 111, //挂载 的产业园id
				park_title: "", //挂载的产业园名称
				house_type: 73
			},
			investmentForm: {},
			investmentList: [],
			parkObj: null,
			parkOptions: [],
			isEdit: false,
			cellIds: [],
			center: { lng: 118.815358, lat: 32.063673 },
			fileList: [],
			config: {},
			subways: [],
			cellConfig: {},
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			dialogFormVisible1: false,
			dialogFormVisible: false,
			image_type: [],
			image_index: null,
			dialogStatus1: "create",
			temp: {
				pid: this.$route.params.id, //单位依赖的厂房id，如果没有请传0
				title: "", //可租单元名称
				louceng: null, //1单层，2多层  **配置项**
				floor: null, //楼层数
				total_floor: null, //总楼层数
				floor_height: null, //层高
				discharge: null, // 卸货方式 **配置项**
				storage_type: null, //存储方式 **配置项**
				unit_type: null, //仓库类型 **配置项**
				fire_type: null, //消防类型**配置项**
				fire_control: [], //消防措施 **配置项**
				min_mianji: null,
				max_mianji: null,
				column_net_0: null,
				column_net_1: null,
				column_net: null, //柱网
				structure: null, //结构 **配置项**
				terrace: null, //地坪  **配置项**
				bearing: null, //承重 **配置项**
				is_ramp: null, //坡道 1有，0无
				railway: null, //月台 **配置项**
				railway_height: null, //月台高度
				is_lift: null, //是否有货梯，1有，0无
				lift_num: null, //货梯数量
				lift_weight: null, //电梯承重
				drive: null, //0无行车，1可停车
				drive_desc: null, //行车描述
				canopy: null, //是否有雨棚，1是，0否
				canopy_width: null, //雨棚宽度
				pic: [],
				sale_avg_price: null,
				house_type: 73
			},
			loading: false,
			areas: [],
			districts: [],
			remarkLists: []
		}, defineProperty_default()(_ref, "fileList", []), defineProperty_default()(_ref, "cellFileList", []), defineProperty_default()(_ref, "dialogStatus", ""), defineProperty_default()(_ref, "textMap", {
			update: "编辑单元",
			create: "新增单元"
		}), defineProperty_default()(_ref, "pickerOptions0", {
			disabledDate: function disabledDate(time) {
				return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的
			}
		}), defineProperty_default()(_ref, "rules", {
			title: [{
				required: true,
				message: "请输入产业园名称",
				trigger: "blur"
			}],
			house_no: [{
				required: true,
				message: "请输入房源编号",
				trigger: "blur"
			}],
			max_mianji: [{
				required: true,
				message: "请输入在租总面积",
				trigger: "blur"
			}],
			min_mianji: [{
				required: true,
				message: "请输入最小分租面积",
				trigger: "blur"
			}],
			licence: [{
				required: true,
				message: "请选择证照信息",
				trigger: "blur"
			}],
			land_use: [{
				required: true,
				message: "请选择土地用途",
				trigger: "blur"
			}],
			land_nature: [{
				required: true,
				message: "请选择土地性质",
				trigger: "blur"
			}],
			power: [{
				required: true,
				message: "请选择配电容量",
				trigger: "blur"
			}],
			power_other: [{
				required: true,
				message: "请输入配电容量",
				trigger: "blur"
			}],
			owner_attr: [{
				required: true,
				message: "请选择业主属性",
				trigger: "blur"
			}],
			core_sell: [{
				required: true,
				message: "请输入核心卖点",
				trigger: "blur"
			}],
			area: [{
				required: true,
				message: "请选择区域",
				trigger: "blur"
			}],
			area2: [{
				required: true,
				message: "请选择区域",
				trigger: "blur"
			}],
			address: [{
				required: true,
				message: "请输入详细地址",
				trigger: "blur"
			}],
			map: [{
				required: true,
				message: "请选择地点标记",
				trigger: "blur"
			}],
			comment: [{
				required: true,
				message: "请输入经纪人评价",
				trigger: "blur"
			}],
			pic: [{
				required: true,
				message: "请上传厂房图片",
				trigger: "blur"
			}],
			fail_reason: [{
				required: true,
				message: "请输入不通过原因",
				trigger: "blur"
			}]
		}), defineProperty_default()(_ref, "temRules", {}), defineProperty_default()(_ref, "rulesDialog", {
			title: [{
				required: true,
				message: "请输入单元名称",
				trigger: "blur"
			}],
			louceng: [{
				required: true,
				message: "请选择楼层类型并输入第几层和总楼层",
				trigger: "blur"
			}, {
				validator: function validator(rule, value, callback) {
					if (!_this.temp.floor && !_this.temp.total_floor) {
						callback(new Error("第输入第几层和总楼层"));
					}
					if (_this.temp.floor > _this.temp.total_floor) {
						callback(new Error("第几层不能大于总楼层"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}],
			price: [{
				required: true,
				message: "请输入价格",
				trigger: "blur"
			}],
			price_unit: [{
				required: true,
				message: "请选择价格单位",
				trigger: "blur"
			}],
			rental_time: [{
				required: true,
				message: "请选择最短租期",
				trigger: "blur"
			}],
			rental_time_other: [{
				required: true,
				message: "请输入最短租期",
				trigger: "blur"
			}],
			// in_date: [
			// 	{
			// 		required: true,
			// 		message: "请选择可租时间",
			// 		trigger: "blur"
			// 	}
			// ],
			// in_date_other: [
			// 	{
			// 		required: true,
			// 		message: "请选择可租时间",
			// 		trigger: "blur"
			// 	}
			// ],
			rental_type: [{
				required: true,
				message: "请选择出租方式",
				trigger: "blur"
			}],
			min_mianji: [{
				required: true,
				message: "请输入最小分租面积",
				trigger: "blur"
			}, {
				validator: function validator(rule, value, callback) {
					if (value <= 0) {
						callback(new Error("面积必须大于0"));
					} else {
						callback();
					}
				},
				trigger: "blur"
			}],
			max_mianji: [{
				required: true,
				message: "请输入最大分租面积",
				trigger: "blur"
			}, {
				validator: function validator(rule, value, callback) {
					if (value <= 0) {
						callback(new Error("面积必须大于0"));
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
			}],
			discharge: [{
				required: true,
				message: "请选择卸货方式",
				trigger: "blur"
			}],
			storage_type: [{
				required: true,
				message: "请选择存储类型",
				trigger: "blur"
			}],
			// unit_type: [
			// 	{
			// 		required: true,
			// 		message: "请选择仓库类型",
			// 		trigger: "blur"
			// 	}
			// ],
			fire_type: [{
				required: true,
				message: "请选择消防类型",
				trigger: "blur"
			}],
			structure: [{
				required: true,
				message: "请选择结构",
				trigger: "blur"
			}],
			terrace: [{
				required: true,
				message: "请选择地坪",
				trigger: "blur"
			}],
			bearing: [{
				required: true,
				message: "请选择承重",
				trigger: "blur"
			}],
			railway: [{
				required: true,
				message: "请选择月台",
				trigger: "blur"
			}]
		}), _ref;
	},

	created: function created() {
		var _this2 = this;

		this.getConfigList().then(function (data) {
			if (_this2.$route.params.id > 0) {
				_this2.getFactoryDetail(_this2.$route.params.id);
				_this2.getInvestmentList();
			}
		});
		this.getAreaLists();
		if (this.$route.params.id > 0) {
			this.isEdit = true;
		}
		this.querySearchAsync();
	},
	mounted: function mounted() {},


	methods: {
		addInvestMent: function addInvestMent() {
			var _this3 = this;

			Object(house["b" /* addInvestMent */])(this.investmentForm).then(function (response) {
				_this3.dialogFormVisible1 = false;
				_this3.getInvestmentList();
			});
		},
		editInvestMent: function editInvestMent() {
			var _this4 = this;

			Object(house["k" /* editInvestMent */])(this.investmentForm).then(function (response) {
				_this4.dialogFormVisible1 = false;
				_this4.getInvestmentList();
			});
		},
		delInvestMent: function delInvestMent(row) {
			var _this5 = this;

			row.status = 2;
			Object(house["k" /* editInvestMent */])(row).then(function (response) {
				_this5.dialogFormVisible1 = false;
				_this5.getInvestmentList();
			});
		},
		handleDelete1: function handleDelete1(row) {
			var _this6 = this;

			this.$confirm("你确定要删除此招商人员吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				row.status = 2;
				_this6.$message({
					type: "success",
					message: "删除成功!",
					onClose: Object(house["k" /* editInvestMent */])(row).then(function (response) {
						_this6.getInvestmentList();
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this6.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		},
		handleCreate1: function handleCreate1() {
			this.dialogStatus1 = "create";
			this.investmentForm = {
				park_id: this.$route.params.id,
				house_type: 73,
				name: null,
				mobile: null,
				status: null
			};
			this.dialogFormVisible1 = true;
		},
		handleUpdate1: function handleUpdate1(row) {
			this.dialogStatus1 = "update";
			this.investmentForm = row;
			this.dialogFormVisible1 = true;
		},
		getInvestmentList: function getInvestmentList() {
			var _this7 = this;

			Object(house["E" /* getInvestmentList */])({
				park_id: this.$route.params.id,
				house_type: 73
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this7.investmentList = data;
				}
			});
		},
		handleSelect: function handleSelect() {
			this.ruleForm.park_id = this.parkObj.id;
			this.ruleForm.park_title = this.parkObj.title;
		},
		querySearchAsync: function querySearchAsync(queryString) {
			var _this8 = this;

			Object(house["J" /* getOnlinParkLists */])({
				name: queryString, //房源编号
				type: 1
			}).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this8.parkOptions = data;
				}
			});
		},
		searchByStationName: function searchByStationName() {
			var _this9 = this;

			var localSearch = new BMap.LocalSearch(this.$refs.map.map);
			this.$refs.map.map.clearOverlays(); //清空原来的标注
			var keyword = this.areas.find(function (item) {
				return item.code == _this9.ruleForm.area;
			}).name + this.districts.find(function (item) {
				return item.code == _this9.ruleForm.area2;
			}).name + this.ruleForm.address;
			localSearch.setSearchCompleteCallback(function (searchResult) {
				var poi = searchResult.getPoi(0);
				if (poi) {
					_this9.ruleForm.map = poi.point.lng + "," + poi.point.lat; //这里是追加到对应的input文本框里，可以根据自己的需要来修改
					_this9.$refs.map.map.centerAndZoom(poi.point, 18);
					var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
					_this9.$refs.map.map.addOverlay(marker);
				} else {
					_this9.$alert("没有查询到该地址坐标，请您在地图上自行点击选择所在位置", "提示", {
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
		resetTemp: function resetTemp() {
			this.temp = {
				pid: this.$route.params.id, //单位依赖的厂房id，如果没有请传0
				title: "", //可租单元名称
				louceng: null, //1单层，2多层  **配置项**
				floor: null, //楼层数
				total_floor: null, //总楼层数
				price: null, //租金
				price_unit: null, //价格单位  **配置项**
				rental_time: null, //最短租期 **配置项**
				rental_time_other: null, //最短租期,当rentalTime选择其他时，填写此项
				in_date: null, //可租时间   **配置项**
				in_date_other: null, //当可租时间选择为其他时，选择此项，逗号隔开的字符串
				rental_type: null, // 出租方式 **配置项**
				max_mianji: null, //在租总面积
				min_mianji: null, //最小分租面积
				floor_height: null, //层高
				discharge: null, // 卸货方式 **配置项**
				storage_type: null, //存储方式 **配置项**
				unit_type: null, //仓库类型 **配置项**
				fire_type: null, //消防类型**配置项**
				fire_control: [], //消防措施 **配置项**
				column_net: null, //柱网
				structure: null, //结构 **配置项**
				terrace: null, //地坪  **配置项**
				bearing: null, //承重 **配置项**
				is_ramp: null, //坡道 1有，0无
				railway: null, //月台 **配置项**
				railway_height: null, //月台高度
				is_lift: null, //是否有货梯，1有，0无
				lift_num: null, //货梯数量
				lift_weight: null, //电梯承重
				drive: null, //0无行车，1可停车
				drive_desc: null, //行车描述
				canopy: null, //是否有雨棚，1是，0否
				canopy_width: null, //雨棚宽度
				pic: [],
				sale_avg_price: null,
				house_type: 73
			};
		},
		addCell: function addCell() {
			var _this10 = this;

			this.resetTemp();
			this.cellFileList = [], this.dialogStatus = "create";
			this.dialogFormVisible = true;
			this.$nextTick(function () {
				_this10.$refs["temp"].clearValidate();
			});
		},
		updateCell: function updateCell(id) {
			var _this11 = this;

			this.dialogStatus = "update";
			this.dialogFormVisible = true;
			this.$nextTick(function () {
				_this11.$refs["temp"].clearValidate();
			});
			Object(house["w" /* getCellDetail */])(id).then(function (response) {
				var data = response.data.data;
				if (data && (typeof data === "undefined" ? "undefined" : typeof_default()(data)) == "object") {
					var keys = ["fire_control"];
					for (var i = 0; i < keys.length; i++) {
						if (!!data[keys[i]]) {
							data[keys[i]] = data[keys[i]].map(function (item) {
								return Number(item);
							});
						} else {
							data[keys[i]] = [];
						}
					}

					if (data.column_net) {
						var arr = data.column_net.split(",");
						data.column_net_0 = arr[0];
						data.column_net_1 = arr[1];
					}
					if (data.file) {
						_this11.cellFileList = data.file.map(function (item) {
							return {
								url: item.show_url,
								title: ""
							};
						});
					} else {
						_this11.cellFileList = [];
					}
					data.in_date = Number(data.in_date);
					data.structure = Number(data.structure);
					data.bearing = Number(data.bearing);
					data.rental_time = Number(data.rental_time);
					data.discharge = Number(data.discharge);
					data.storage_type = Number(data.storage_type);
					data.unit_type = Number(data.unit_type);
					data.fire_type = Number(data.fire_type);
					data.terrace = Number(data.terrace);
					data.is_ramp = Number(data.is_ramp);
					data.railway = Number(data.railway);
					data.is_lift = Number(data.is_lift);
					_this11.temp = assign_default()({}, data); // copy obj
					_this11.temp.house_type = 73;
				}
			});
		},
		getConfigList: function getConfigList() {
			var _this12 = this;

			return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
				var _, _ref2, _ref3, config, subways, cellConfig;

				return regenerator_default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_ = _this12;
								_context.prev = 1;
								_context.next = 4;
								return promise_default.a.all([Object(house["B" /* getFactoryConfingList */])(), Object(house["M" /* getStationList */])(), Object(house["v" /* getCellConfingList */])()]);

							case 4:
								_ref2 = _context.sent;
								_ref3 = slicedToArray_default()(_ref2, 3);
								config = _ref3[0];
								subways = _ref3[1];
								cellConfig = _ref3[2];

								_.config = config.data.data;
								_.subways = subways.data.data;
								_.cellConfig = cellConfig.data.data;
								_context.next = 17;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context["catch"](1);

								console.log(_context.t0);

							case 17:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this12, [[1, 14]]);
			}))();
		},
		handleImgRemove: function handleImgRemove(file, fileList) {
			var _this13 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this13.ruleForm.pic.splice(index, 1);
				}
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.ruleForm.pic.push(res.data.show_url);
		},
		handleCellImgSuccess: function handleCellImgSuccess(res, file) {
			this.temp.pic.push(res.data.show_url);
		},
		handleCellImgRemove: function handleCellImgRemove(file, fileList) {
			var _this14 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this14.temp.pic.splice(index, 1);
				}
			});
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			if (file.response) {
				var url = file.response.data.url;
			} else {
				var url = file.url;
			}
			if (this.ruleForm.pic.indexOf(url) > -1) {
				this.image_index = this.ruleForm.pic.indexOf(url);
				this.image_type = this.ruleForm.pic;
				this.dialogImageUrl = this.image_type[this.image_index];
				this.dialogVisible = true;
			}
		},
		handlePictureCardPreview1: function handlePictureCardPreview1(file) {
			if (file.response) {
				var url = file.response.data.url;
			} else {
				var url = file.url;
			}
			if (this.temp.pic.indexOf(url) > -1) {
				this.image_index = this.temp.pic.indexOf(url);
				this.image_type = this.temp.pic;
				this.dialogImageUrl = this.image_type[this.image_index];
				this.dialogVisible = true;
			}
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
		getFactoryDetail: function getFactoryDetail(id) {
			var _this15 = this;

			Object(house["C" /* getFactoryDetail */])(id).then(function (response) {
				var data = response.data.data;
				if (data && (typeof data === "undefined" ? "undefined" : typeof_default()(data)) == "object") {
					var keys = ["subway_id", "facilities", "licence", "manage_service", "short_home"];
					for (var i = 0; i < keys.length; i++) {
						if (!!data[keys[i]]) {
							data[keys[i]] = data[keys[i]].map(function (item) {
								return Number(item);
							});
						} else {
							data[keys[i]] = [];
						}
					}
					_this15.remarkLists = data.remarkLists || [];
					data.short_home = data.short_home || [];
					data.price_unit = Number(data.price_unit);
					data.rec_position = Number(data.rec_position);
					data.pic = data.pic || [];
					if (data.park && data.park.park_id && data.park.title) {
						_this15.parkObj = {
							id: data.park.park_id,
							title: data.park.title
						};
						_this15.parkOptions = [_this15.parkObj];
					}
					_this15.ruleForm = assign_default()(_this15.ruleForm, data);
					_this15.ruleForm.house_type = 73;

					_this15.fileList = data.file.map(function (item) {
						return {
							url: item.show_url,
							title: ""
						};
					});
					_this15.cellIds = data.unit_lists || [];
					_this15.ruleForm.unit_ids = data.unit_lists.map(function (item) {
						return item.id;
					});
					setTimeout(function () {
						if (_this15.ruleForm.map) {
							var arr = _this15.ruleForm.map.split(",");
							var point = new BMap.Point(Number(arr[0]), Number(arr[1]));
							var marker = new BMap.Marker(point);
							_this15.$refs.map.map.clearOverlays();
							_this15.$refs.map.map.addOverlay(marker);
							_this15.$refs.map.map.centerAndZoom(point, 18);
						}
					}, 1000);
				}
				Object(requirement["s" /* getDistrictLists */])(_this15.ruleForm.area).then(function (response) {
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
			}).catch(function (err) {
				console.log(err);
			});
		},

		/**
   * 提交表单
   *
   */
		submitForm: function submitForm(formName) {
			var _this16 = this;

			this.$refs[formName].validate(function (valid) {
				if (valid) {
					_this16.editOrAddFactory();
				}
			});
		},
		createCell: function createCell(formName) {
			var _this17 = this;

			this.temp.column_net = this.temp.column_net_0 + "," + this.temp.column_net_1;
			this.$refs[formName].validate(function (valid) {
				if (valid) {
					Object(house["Q" /* saveCellDo */])(_this17.temp).then(function (response) {
						if (response.data.status) {
							_this17.ruleForm.unit_ids.push(response.data.data.ckTmpId);
							_this17.cellIds.push({
								title: response.data.data.title,
								id: response.data.data.ckTmpId
							});
							_this17.$notify({
								title: "成功",
								message: "新增成功",
								type: "success",
								duration: 2000
							});
							setTimeout(function () {
								_this17.dialogFormVisible = false;
							}, 500);
						} else {
							_this17.$message({
								type: "error",
								message: response.data.msg
							});
						}
					}).catch(function (err) {
						console.log(err);
					});
				}
			});
		},
		editCell: function editCell(formName) {
			var _this18 = this;

			this.temp.column_net = this.temp.column_net_0 + "," + this.temp.column_net_1;
			this.$refs[formName].validate(function (valid) {
				if (valid) {
					Object(house["i" /* editCellDo */])(_this18.temp).then(function (response) {
						if (response.data.status) {
							_this18.$notify({
								title: "成功",
								message: "编辑成功",
								type: "success",
								duration: 2000
							});
							setTimeout(function () {
								_this18.dialogFormVisible = false;
							}, 500);
						} else {
							_this18.$message({
								type: "error",
								message: response.data.msg
							});
						}
					}).catch(function (err) {
						console.log(err);
					});
				}
			});
		},
		editOrAddFactory: function editOrAddFactory() {
			var _this19 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(house["j" /* editFactory */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this19.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this19.$store.dispatch("delView", _this19.$route);
							_this19.$router.go(-1);
						}, 500);
					} else {
						_this19.$message({
							type: "error",
							message: response.data.msg
						});
					}
				}).catch(function (err) {
					console.log(err);
				});
			} else {
				Object(house["R" /* saveFactory */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this19.$notify({
							title: "成功",
							message: "提交成功",
							type: "success",
							duration: 2000
						});
						setTimeout(function () {
							_this19.$store.dispatch("delView", _this19.$route);
							_this19.$router.go(-1);
						}, 500);
					} else {
						_this19.$message({
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
			var _this20 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this20.areas = data;
					_this20.areas1 = data.slice(1);
					_this20.areas1Code = _this20.areas1[0].code;
				} else {
					_this20.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeDistrictLists: function changeDistrictLists() {
			var _this21 = this;

			Object(requirement["s" /* getDistrictLists */])(this.areas1Code).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this21.districts1 = data;
					_this21.districts1Code = _this21.districts1[0].code;
				} else {
					_this21.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		changeArea: function changeArea() {
			var _this22 = this;

			this.ruleForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this22.districts = data;
				} else {
					_this22.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDeleteCell: function handleDeleteCell(index, id) {
			var _this23 = this;

			this.$confirm("你确定要删除此单元的信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this23.ruleForm.del_ids.push(_this23.ruleForm.unit_ids[index]);
				_this23.ruleForm.unit_ids.splice(index, 1);
				_this23.cellIds.splice(index, 1);
			});
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b4352b2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/sale/salefactory/SalefactoryDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"factory-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"录入端口"}},[_c('el-input',{staticClass:"name",attrs:{"value":_vm.ruleForm.client==50?'PC端':'小程序',"maxlength":"30","disabled":""}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"厂房ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"厂房名称","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"disabled":_vm.isEdit,"maxlength":"30","placeholder":"请输入厂房名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属产业园"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","placeholder":"请输入关键词","reserve-keyword":"","clearable":"","remote-method":_vm.querySearchAsync,"loading":_vm.loading},on:{"change":_vm.handleSelect},model:{value:(_vm.parkObj),callback:function ($$v) {_vm.parkObj=$$v},expression:"parkObj"}},_vm._l((_vm.parkOptions),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.title,"value":item}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源编号"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入房源编号"},model:{value:(_vm.ruleForm.house_no),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_no", $$v)},expression:"ruleForm.house_no"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"面积","prop":"max_mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入面积"},model:{value:(_vm.ruleForm.max_mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_mianji", $$v)},expression:"ruleForm.max_mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"最小面积","prop":"min_mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入最小面积"},model:{value:(_vm.ruleForm.min_mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "min_mianji", $$v)},expression:"ruleForm.min_mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证照信息","prop":"licence"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.licence),callback:function ($$v) {_vm.$set(_vm.ruleForm, "licence", $$v)},expression:"ruleForm.licence"}},_vm._l((_vm.config.licence),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"土地用途","prop":"land_use"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择土地用途"},model:{value:(_vm.ruleForm.land_use),callback:function ($$v) {_vm.$set(_vm.ruleForm, "land_use", $$v)},expression:"ruleForm.land_use"}},_vm._l((_vm.config.land_use),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"土地性质","prop":"land_nature"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择土地性质"},model:{value:(_vm.ruleForm.land_nature),callback:function ($$v) {_vm.$set(_vm.ruleForm, "land_nature", $$v)},expression:"ruleForm.land_nature"}},_vm._l((_vm.config.land_nature),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"配电容量","prop":"power"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"请选择配电容量"},model:{value:(_vm.ruleForm.power),callback:function ($$v) {_vm.$set(_vm.ruleForm, "power", $$v)},expression:"ruleForm.power"}},_vm._l((_vm.config.power),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"maxlength":"30","placeholder":"请输入配电容量"},model:{value:(_vm.ruleForm.power_other),callback:function ($$v) {_vm.$set(_vm.ruleForm, "power_other", $$v)},expression:"ruleForm.power_other"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"蒸汽管道","prop":"steam"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择蒸汽管道"},model:{value:(_vm.ruleForm.steam),callback:function ($$v) {_vm.$set(_vm.ruleForm, "steam", $$v)},expression:"ruleForm.steam"}},_vm._l((_vm.config.steam),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否协助环评"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.eia),callback:function ($$v) {_vm.$set(_vm.ruleForm, "eia", $$v)},expression:"ruleForm.eia"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":-1}},[_vm._v("未知")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否可注册"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.can_register),callback:function ($$v) {_vm.$set(_vm.ruleForm, "can_register", $$v)},expression:"ruleForm.can_register"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":-1}},[_vm._v("未知")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否要求落税"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.tax),callback:function ($$v) {_vm.$set(_vm.ruleForm, "tax", $$v)},expression:"ruleForm.tax"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":-1}},[_vm._v("未知")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"管理服务","prop":"manage_service"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.manage_service),callback:function ($$v) {_vm.$set(_vm.ruleForm, "manage_service", $$v)},expression:"ruleForm.manage_service"}},_vm._l((_vm.config.sale_manage_service),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"业主属性","prop":"owner_attr"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择业主属性"},model:{value:(_vm.ruleForm.owner_attr),callback:function ($$v) {_vm.$set(_vm.ruleForm, "owner_attr", $$v)},expression:"ruleForm.owner_attr"}},_vm._l((_vm.config.owner_attr),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"配套服务","prop":"facilities"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.facilities),callback:function ($$v) {_vm.$set(_vm.ruleForm, "facilities", $$v)},expression:"ruleForm.facilities"}},_vm._l((_vm.config.facilities),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页短标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.short_home),callback:function ($$v) {_vm.$set(_vm.ruleForm, "short_home", $$v)},expression:"ruleForm.short_home"}},_vm._l((_vm.config.sale_short_map),function(item){return _c('el-checkbox',{key:item.value,attrs:{"label":item.id}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目优势","prop":"project"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入项目优势","maxlength":"1000"},model:{value:(_vm.ruleForm.project),callback:function ($$v) {_vm.$set(_vm.ruleForm, "project", $$v)},expression:"ruleForm.project"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"适合行业","prop":"industry"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入适合行业","maxlength":"255"},model:{value:(_vm.ruleForm.industry),callback:function ($$v) {_vm.$set(_vm.ruleForm, "industry", $$v)},expression:"ruleForm.industry"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"核心卖点","prop":"core_sell"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入核心卖点","maxlength":"1000"},model:{value:(_vm.ruleForm.core_sell),callback:function ($$v) {_vm.$set(_vm.ruleForm, "core_sell", $$v)},expression:"ruleForm.core_sell"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"经纪人评价","prop":"comment"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入经纪人评价","maxlength":"1000"},model:{value:(_vm.ruleForm.comment),callback:function ($$v) {_vm.$set(_vm.ruleForm, "comment", $$v)},expression:"ruleForm.comment"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"厂房图片","prop":"pic"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}}),_vm._v(" "),(_vm.image_type.length>1)?_c('div',{staticStyle:{"z-index":"9999999999"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.previmage}},[_vm._v("上一张")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.nextimage}},[_vm._v("下一张")])],1):_vm._e()])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新增单元"}},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.addCell}},[_vm._v("添加单元详细信息")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},_vm._l((_vm.cellIds),function(item,index){return _c('div',{key:'cell'+item.id,staticClass:"el-form-item__content"},[_c('div',{staticClass:"el-alert el-alert--success",staticStyle:{"margin-bottom":"10px"},attrs:{"role":"alert"}},[_c('div',{staticClass:"el-alert__content"},[_c('span',{staticClass:"el-alert__title"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('span',[_vm._v("("+_vm._s(item.status?'已审核':'未审核')+")")]),_vm._v(" "),_c('i',{staticClass:"el-alert__closebtn el-icon-edit",staticStyle:{"right":"50px","font-size":"16px"},on:{"click":function($event){_vm.updateCell(item.id)}}}),_vm._v(" "),_c('i',{staticClass:"el-alert__closebtn el-icon-close",staticStyle:{"font-size":"16px"},on:{"click":function($event){_vm.handleDeleteCell(index,item.id)}}})])])])})),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("未通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"1000px","title":_vm.textMap[_vm.dialogStatus],"visible":_vm.dialogFormVisible},on:{"update:visible":function($event){_vm.dialogFormVisible=$event}}},[_c('el-form',{ref:"temp",attrs:{"rules":_vm.rulesDialog,"model":_vm.temp,"remarkList":"","label-position":"right","label-width":"120px","size":"small"}},[_c('el-form-item',{attrs:{"label":"单元名称","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入单元名称"},model:{value:(_vm.temp.title),callback:function ($$v) {_vm.$set(_vm.temp, "title", $$v)},expression:"temp.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼层"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择楼层类型"},model:{value:(_vm.temp.louceng),callback:function ($$v) {_vm.$set(_vm.temp, "louceng", $$v)},expression:"temp.louceng"}},_vm._l((_vm.cellConfig.louceng),function(item){return _c('el-option',{key:'longceng'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"30px"}},[_vm._v("\n\t\t\t\t\t\t\t\t第 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入"},model:{value:(_vm.temp.floor),callback:function ($$v) {_vm.$set(_vm.temp, "floor", $$v)},expression:"temp.floor"}}),_vm._v(" 层\n\t\t\t\t\t\t\t\t共 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入"},model:{value:(_vm.temp.total_floor),callback:function ($$v) {_vm.$set(_vm.temp, "total_floor", $$v)},expression:"temp.total_floor"}}),_vm._v(" 层\n\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"出售均价"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入出售均价"},model:{value:(_vm.temp.sale_avg_price),callback:function ($$v) {_vm.$set(_vm.temp, "sale_avg_price", $$v)},expression:"temp.sale_avg_price"}}),_vm._v(" 元/平方米\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"层高"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"2","placeholder":"请输入层高"},model:{value:(_vm.temp.floor_height),callback:function ($$v) {_vm.$set(_vm.temp, "floor_height", $$v)},expression:"temp.floor_height"}}),_vm._v(" 米\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"卸货方式"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择卸货方式"},model:{value:(_vm.temp.discharge),callback:function ($$v) {_vm.$set(_vm.temp, "discharge", $$v)},expression:"temp.discharge"}},_vm._l((_vm.cellConfig.discharge),function(item){return _c('el-option',{key:'discharge'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"存储类型"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择存储类型"},model:{value:(_vm.temp.storage_type),callback:function ($$v) {_vm.$set(_vm.temp, "storage_type", $$v)},expression:"temp.storage_type"}},_vm._l((_vm.cellConfig.storage_type),function(item){return _c('el-option',{key:'storage_type'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"仓库类型","prop":"unit_type"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择仓库类型"},model:{value:(_vm.temp.unit_type),callback:function ($$v) {_vm.$set(_vm.temp, "unit_type", $$v)},expression:"temp.unit_type"}},_vm._l((_vm.cellConfig.unit_type),function(item){return _c('el-option',{key:'unit_type'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"消防"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择消防"},model:{value:(_vm.temp.fire_type),callback:function ($$v) {_vm.$set(_vm.temp, "fire_type", $$v)},expression:"temp.fire_type"}},_vm._l((_vm.cellConfig.fire_type),function(item){return _c('el-option',{key:'fireT_type'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('div',[_c('el-checkbox-group',{model:{value:(_vm.temp.fire_control),callback:function ($$v) {_vm.$set(_vm.temp, "fire_control", $$v)},expression:"temp.fire_control"}},_vm._l((_vm.cellConfig.fire_control),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"柱网"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入"},model:{value:(_vm.temp.column_net_0),callback:function ($$v) {_vm.$set(_vm.temp, "column_net_0", $$v)},expression:"temp.column_net_0"}}),_vm._v(" 乘\n\t\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入"},model:{value:(_vm.temp.column_net_1),callback:function ($$v) {_vm.$set(_vm.temp, "column_net_1", $$v)},expression:"temp.column_net_1"}}),_vm._v(" 米\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"结构","prop":"structure"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择结构"},model:{value:(_vm.temp.structure),callback:function ($$v) {_vm.$set(_vm.temp, "structure", $$v)},expression:"temp.structure"}},_vm._l((_vm.cellConfig.structure),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"地坪"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择地坪"},model:{value:(_vm.temp.terrace),callback:function ($$v) {_vm.$set(_vm.temp, "terrace", $$v)},expression:"temp.terrace"}},_vm._l((_vm.cellConfig.terrace),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"承重","prop":"bearing"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择承重"},model:{value:(_vm.temp.bearing),callback:function ($$v) {_vm.$set(_vm.temp, "bearing", $$v)},expression:"temp.bearing"}},_vm._l((_vm.cellConfig.bearing),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" 吨/平方米\n\t\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"坡道","prop":"is_ramp"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择坡道"},model:{value:(_vm.temp.is_ramp),callback:function ($$v) {_vm.$set(_vm.temp, "is_ramp", $$v)},expression:"temp.is_ramp"}},[_c('el-option',{attrs:{"label":"无坡道","value":0}},[_vm._v(" 无坡道")]),_vm._v(" "),_c('el-option',{attrs:{"label":"有坡道","value":1}},[_vm._v(" 有坡道")])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"月台"}},[_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择月台"},model:{value:(_vm.temp.railway),callback:function ($$v) {_vm.$set(_vm.temp, "railway", $$v)},expression:"temp.railway"}},_vm._l((_vm.cellConfig.railway),function(item){return _c('el-option',{key:'railway'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"railway_height"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入月台高度"},model:{value:(_vm.temp.railway_height),callback:function ($$v) {_vm.$set(_vm.temp, "railway_height", $$v)},expression:"temp.railway_height"}}),_vm._v(" 米\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"325px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"面积","prop":"min_mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最小分租面积"},model:{value:(_vm.temp.min_mianji),callback:function ($$v) {_vm.$set(_vm.temp, "min_mianji", $$v)},expression:"temp.min_mianji"}}),_c('span',[_vm._v(" 至")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"max_mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"最大分租面积"},model:{value:(_vm.temp.max_mianji),callback:function ($$v) {_vm.$set(_vm.temp, "max_mianji", $$v)},expression:"temp.max_mianji"}}),_vm._v(" 平方米\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"货梯","prop":"is_lift"}},[_c('el-select',{staticClass:"filter-item",staticStyle:{"width":"180px"},attrs:{"placeholder":"请选择货梯"},model:{value:(_vm.temp.is_lift),callback:function ($$v) {_vm.$set(_vm.temp, "is_lift", $$v)},expression:"temp.is_lift"}},[_c('el-option',{attrs:{"label":"无","value":0}},[_vm._v(" 无")]),_vm._v(" "),_c('el-option',{attrs:{"label":"有","value":1}},[_vm._v(" 有")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"电梯数量","prop":"lift_num"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入"},model:{value:(_vm.temp.lift_num),callback:function ($$v) {_vm.$set(_vm.temp, "lift_num", $$v)},expression:"temp.lift_num"}}),_vm._v(" 部\n\t\t\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"电梯承重","prop":"lift_weight"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入"},model:{value:(_vm.temp.lift_weight),callback:function ($$v) {_vm.$set(_vm.temp, "lift_weight", $$v)},expression:"temp.lift_weight"}}),_vm._v(" 吨\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"行车","prop":"drive"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择行车"},model:{value:(_vm.temp.drive),callback:function ($$v) {_vm.$set(_vm.temp, "drive", $$v)},expression:"temp.drive"}},[_c('el-option',{attrs:{"label":"无行车","value":0}},[_vm._v(" 无行车")]),_vm._v(" "),_c('el-option',{attrs:{"label":"可停车辆","value":1}},[_vm._v(" 可停车辆")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"具体描述","prop":"drive_desc"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"例：17.5米半挂"},model:{value:(_vm.temp.drive_desc),callback:function ($$v) {_vm.$set(_vm.temp, "drive_desc", $$v)},expression:"temp.drive_desc"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"305px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"雨棚","prop":"canopy"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择雨棚"},model:{value:(_vm.temp.canopy),callback:function ($$v) {_vm.$set(_vm.temp, "canopy", $$v)},expression:"temp.canopy"}},[_c('el-option',{attrs:{"label":"无雨棚","value":0}},[_vm._v(" 无雨棚")]),_vm._v(" "),_c('el-option',{attrs:{"label":"有雨棚","value":1}},[_vm._v(" 有雨棚")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"雨棚宽度","prop":"canopy_width"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入雨棚宽度"},model:{value:(_vm.temp.canopy_width),callback:function ($$v) {_vm.$set(_vm.temp, "canopy_width", $$v)},expression:"temp.canopy_width"}}),_vm._v(" 米\n\t\t\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"仓库图片"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleCellImgSuccess,"before-remove":_vm.handleCellImgRemove,"file-list":_vm.cellFileList,"on-preview":_vm.handlePictureCardPreview1}},[_c('i',{staticClass:"el-icon-plus"})])],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogStatus==='create'?_vm.createCell('temp'):_vm.editCell('temp')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("招商管理")]),_vm._v(" "),_c('el-button',{staticClass:"filter-item",staticStyle:{"float":"right"},attrs:{"size":"small","type":"success"},on:{"click":_vm.handleCreate1}},[_vm._v("新增")]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.investmentList}},[_c('el-table-column',{attrs:{"prop":"name","label":"名称"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"mobile","label":"电话"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"创建时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status_desc","label":"状态"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"el-icon-edit btn-icon",staticStyle:{"color":"#409EFF","margin-right":"5px"},on:{"click":function($event){_vm.handleUpdate1(scope.row)}}}),_vm._v(" "),_c('i',{staticClass:"el-icon-delete btn-icon",staticStyle:{"color":"red"},on:{"click":function($event){_vm.handleDelete1(scope.row)}}})]}}])})],1),_vm._v(" "),_c('el-dialog',{attrs:{"width":"400px","title":"招商人员","visible":_vm.dialogFormVisible1},on:{"update:visible":function($event){_vm.dialogFormVisible1=$event}}},[_c('el-form',{ref:"dataForm",staticStyle:{"width":"90%"},attrs:{"rules":_vm.temRules,"model":_vm.investmentForm,"label-position":"right","label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"用户名"}},[_c('el-input',{attrs:{"placeholder":"请输入用户名"},model:{value:(_vm.investmentForm.name),callback:function ($$v) {_vm.$set(_vm.investmentForm, "name", $$v)},expression:"investmentForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电话号码"}},[_c('el-input',{attrs:{"placeholder":"请输入电话号码"},model:{value:(_vm.investmentForm.mobile),callback:function ($$v) {_vm.$set(_vm.investmentForm, "mobile", $$v)},expression:"investmentForm.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"活动状态"}},[_c('el-select',{attrs:{"placeholder":"请选择活动状态"},model:{value:(_vm.investmentForm.status),callback:function ($$v) {_vm.$set(_vm.investmentForm, "status", $$v)},expression:"investmentForm.status"}},[_c('el-option',{attrs:{"label":"待审","value":-1}},[_vm._v(" 待审")]),_vm._v(" "),_c('el-option',{attrs:{"label":"启用","value":1}},[_vm._v(" 启用")]),_vm._v(" "),_c('el-option',{attrs:{"label":"下线","value":3}},[_vm._v(" 下线")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogFormVisible1 = false}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogStatus1==='create'?_vm.addInvestMent():_vm.editInvestMent()}}},[_vm._v("提交")])],1)],1)],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var salefactory_SalefactoryDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/sale/salefactory/SalefactoryDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("jGWy")
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
  SalefactoryDetail,
  salefactory_SalefactoryDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var sale_salefactory_SalefactoryDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "jGWy":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("zG46");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("7132a018", content, true);

/***/ }),

/***/ "zG46":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.factory-form {\n  padding: 20px;\n}\n.factory-form .btn-icon {\n    font-size: 18px;\n    cursor: pointer;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n", ""]);

// exports


/***/ })

});
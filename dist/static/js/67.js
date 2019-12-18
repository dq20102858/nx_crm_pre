webpackJsonp([67],{

/***/ "HCTH":
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

// EXTERNAL MODULE: ./src/api/912cms/rent.js
var rent = __webpack_require__("trck");

// EXTERNAL MODULE: ./src/api/912cms/residence.js
var residence = __webpack_require__("Vcyy");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent/residence/RentResidenceDetail.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var RentResidenceDetail = ({
	name: "RentResidenceDetail",
	components: { Tinymce: Tinymce["a" /* default */] },
	data: function data() {
		var _ruleForm,
		    _this = this,
		    _rules;

		return {
			ruleForm: (_ruleForm = {
				area: null,
				area2: null,
				estate_id: null,
				title: null,
				contact: null,
				contact_phone: null,
				niandai: null, //建造年代
				room: null, //配置项，
				ting: "", //小区名称
				chu: "", //小区id
				wei: "", //是否为唯一住房1是，0否
				yang: "", //房源编号
				price: null, //1：栋 2：弄 3：座 4：号 5：号楼 6：胡同
				yajin: null, //值
				zhuanrang_fee: null,
				mianji: null, //1：栋 2：幢 3：号 4：号楼
				is_need_zrrang: 1, //单元值
				tax: 1, //户室号
				pay_intention: "a", //室,
				floor: null, //楼层
				total_floor: null, //总楼层
				is_break: 1, //是否有电梯，1有，0无
				zhuangxiu: null, //装修情况 配置项
				chaoxiang: null, //朝向 配置项
				address: null, //详细地址
				map: null, //地图标注
				complete_decoration: 1, //标题
				info: null, //详情
				rental_type: null,
				rental_pay: null, //业主心态
				peitao: [], //核心卖点
				relation: [], //核心卖点
				wuye_type: null,
				wuye: null,
				wuyefei: null,
				img: null,
				pic: [],
				subway_id: [], //房屋年限 1:满二；2:满五；3:不满两年
				floor_heigth: null, //套内面积
				width: null, //佣金比例 (百分比制)
				depth: null, //佣金折扣
				in_date: null,
				near_street: null,
				is_dinner: null,
				near_school: null,
				curernt_rental_time: null,
				remain_rental_time: null,
				max_rental_time: null,
				delay_rental_type: 1,
				zhuanrang_info: null,
				is_time_split: 1
			}, defineProperty_default()(_ruleForm, "niandai", null), defineProperty_default()(_ruleForm, "tese", null), defineProperty_default()(_ruleForm, "position", 1), defineProperty_default()(_ruleForm, "video_url", null), defineProperty_default()(_ruleForm, "zhuanzu_type", 1), defineProperty_default()(_ruleForm, "jizu", 1), defineProperty_default()(_ruleForm, "short_home", []), defineProperty_default()(_ruleForm, "user_type", 1), defineProperty_default()(_ruleForm, "status", -1), defineProperty_default()(_ruleForm, "house_type", 62), defineProperty_default()(_ruleForm, "ordid", 1000), defineProperty_default()(_ruleForm, "seo_title", null), defineProperty_default()(_ruleForm, "seo_keys", null), defineProperty_default()(_ruleForm, "seo_desc", null), defineProperty_default()(_ruleForm, "remark_content", null), defineProperty_default()(_ruleForm, "building_type", 1), defineProperty_default()(_ruleForm, "build_value", null), defineProperty_default()(_ruleForm, "unit_type", 1), defineProperty_default()(_ruleForm, "unit", null), defineProperty_default()(_ruleForm, "number", null), defineProperty_default()(_ruleForm, "house_type2", null), defineProperty_default()(_ruleForm, "owner_mentality", null), defineProperty_default()(_ruleForm, "core_sell", null), defineProperty_default()(_ruleForm, "rent_room", null), defineProperty_default()(_ruleForm, "rent_sex", null), defineProperty_default()(_ruleForm, "rent_chaoxiang", null), defineProperty_default()(_ruleForm, "rent_num", null), defineProperty_default()(_ruleForm, "rent_total", null), defineProperty_default()(_ruleForm, "rent_area", null), _ruleForm),
			cells: [],
			config: {},
			subways: [],
			host: "http://" + location.host,
			// host: "http://boss.912zufang.com",
			dialogVisible: false,
			dialogImageUrl: "",
			dialogImageUrl1: "",
			dialogVisible1: false,
			center: { lng: 118.815358, lat: 32.063673 },
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
				estate: [{
					required: true,
					message: "请选择小区名称",
					trigger: "blur"
				}],
				niandai: [{
					required: true,
					message: "请选择建造年代",
					trigger: "blur"
				}],
				build_value: [{
					required: true,
					message: "请输入户室号",
					trigger: "blur"
				}],
				unit: [{
					required: true,
					message: "请输入户室号",
					trigger: "blur"
				}],
				number: [{
					required: true,
					message: "请输入户室号",
					trigger: "blur"
				}],
				house_year: [{
					required: true,
					message: "请选择产权年限",
					trigger: "blur"
				}],
				property: [{
					required: true,
					message: "请选择产权年限",
					trigger: "blur"
				}],
				property_type: [{
					required: true,
					message: "请选择产权类型",
					trigger: "blur"
				}],
				room: [{
					required: true,
					message: "请输入几室",
					trigger: "blur"
				}],
				ting: [{
					required: true,
					message: "请输入几厅",
					trigger: "blur"
				}],
				chu: [{
					required: true,
					message: "请输入几厨",
					trigger: "blur"
				}],
				wei: [{
					required: true,
					message: "请输入几卫",
					trigger: "blur"
				}],
				floor: [{
					required: true,
					message: "请输入楼层",
					trigger: "blur"
				}],
				total_floor: [{
					required: true,
					message: "请输入总楼层",
					trigger: "blur"
				}],
				is_lift: [{
					required: true,
					message: "请选择是否有无电梯",
					trigger: "blur"
				}],
				house_only: [{
					required: true,
					message: "请选择是否唯一住房",
					trigger: "blur"
				}],
				is_first_house: [{
					required: true,
					message: "请选择是新房还是二手房",
					trigger: "blur"
				}],
				per_charges: [{
					required: true,
					message: "请输入佣金比例",
					trigger: "blur"
				}]
			}, defineProperty_default()(_rules, "house_year", [{
				required: true,
				message: "请选择房屋年限",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "house_type2", [{
				required: true,
				message: "请选择房屋类型",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "zhuangxiu", [{
				required: true,
				message: "请选择装修情况",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "chaoxiang", [{
				required: true,
				message: "请选择朝向",
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
			}]), defineProperty_default()(_rules, "img_url.IMG_M", [{
				required: true,
				message: "请上传房型图",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "img_url.IMG_I", [{
				required: true,
				message: "请上传室内图",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "price", [{
				required: true,
				message: "请输入价格",
				trigger: "blur"
			}]), defineProperty_default()(_rules, "checker_name", [{
				validator: function validator(rule, value, callback) {
					if (_this.house_survey.length > 0 && !value) {
						callback(new Error("选择实勘合格证后，实勘人员为必填"));
					} else {
						callback();
					}
				},
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
		this.getStationList();
		if (this.$route.params.id > 0) {
			this.isEdit = true;
		}
	},

	methods: {
		getStationList: function getStationList() {
			var _this2 = this;

			Object(house["M" /* getStationList */])().then(function (res) {
				_this2.subways = res.data.data;
			});
		},
		fetchEstateLists: function fetchEstateLists(query) {
			var _this3 = this;

			if (query !== "") {
				this.loading = true;
				Object(residence["d" /* fetchEstateLists */])({
					name: query //房源编号
				}).then(function (response) {
					_this3.loading = false;
					var data = response.data.data;
					if (data) {
						_this3.cells = data;
					}
				});
			} else {
				this.options = [];
			}
		},
		handleVideoSuccess: function handleVideoSuccess(res, file) {
			// this.ruleForm.video_url = URL.createObjectURL(file.raw);
			console.log(res.data);
			this.ruleForm.video_url = res.data.show_url;
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

			Object(rent["h" /* getConfigList */])().then(function (response) {
				var data = response.data.data;
				_this5.config = data;
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
		handleImgRemove: function handleImgRemove(file, fileList) {
			var _this6 = this;

			fileList.map(function (item, index) {
				if (item.url == file.url) {
					_this6.ruleForm.pic.splice(index, 1);
				}
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.ruleForm.pic.push(res.data.show_url);
		},
		handlePictureCardPreview: function handlePictureCardPreview(url) {
			this.dialogImageUrl = url;
			this.dialogVisible = true;
		},
		handlePictureCardPreview1: function handlePictureCardPreview1(file) {
			this.dialogImageUrl1 = file.show_url || file.url || file.img_show;
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
			data.estate = {
				id: data.estate_id,
				name: data.estate_name
			};
			this.cells = [data.estate];
			this.fileList = data.pic.map(function (item) {
				return { url: item, name: "" };
			});
			data.peitao = data.peitao || [];
			data.relation = data.relation || [];
			data.subway_id = data.subway_id || [];
			data.short_home = data.short_home || [];
			data.position = Number(data.position);
			this.remarkLists = data.remarkLists || [];
			data.subway_id = data.subway_id.map(function (item) {
				return Number(item);
			});
		},
		getResidenceDetail: function getResidenceDetail(id) {
			var _this7 = this;

			Object(rent["l" /* getResidenceDetail */])(id).then(function (response) {
				var data = response.data.data;

				_this7.handleResData(data);
				_this7.ruleForm = assign_default()(_this7.ruleForm, data);
				_this7.ruleForm.img_show = data.img;

				console.log(_this7.ruleForm);
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
				_this7.ruleForm.building_type = Number(data.building_type);
				_this7.ruleForm.unit_type = Number(data.unit_type);
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
						_this7.house_survey.push(item.id);
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
				Object(rent["g" /* editResidenceDetail */])(this.ruleForm).then(function (response) {
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
				Object(rent["b" /* addResidenceDetail */])(this.ruleForm).then(function (response) {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-54ad04bc","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent/residence/RentResidenceDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"office-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"110px","id":"consult-form","size":"small"}},[(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"房源ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"出租方式","prop":"rental_type"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.rental_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rental_type", $$v)},expression:"ruleForm.rental_type"}},_vm._l((_vm.config.rental_type),function(item){return _c('el-radio',{key:item.name,attrs:{"border":"","label":item.id,"value":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"小区名称","prop":"estate_id"}},[_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入关键词","remote-method":_vm.fetchEstateLists,"loading":_vm.loading},model:{value:(_vm.ruleForm.estate_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "estate_id", $$v)},expression:"ruleForm.estate_id"}},_vm._l((_vm.cells),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源名称"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"请输入房源名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"205px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"户室号","prop":"build_value"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.build_value),callback:function ($$v) {_vm.$set(_vm.ruleForm, "build_value", $$v)},expression:"ruleForm.build_value"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"85px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"building_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"80px"},attrs:{"placeholder":""},model:{value:(_vm.ruleForm.building_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "building_type", $$v)},expression:"ruleForm.building_type"}},_vm._l((_vm.config.building_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"85px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"unit"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.unit),callback:function ($$v) {_vm.$set(_vm.ruleForm, "unit", $$v)},expression:"ruleForm.unit"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"85px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"unit_type"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"80px"},attrs:{"placeholder":""},model:{value:(_vm.ruleForm.unit_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "unit_type", $$v)},expression:"ruleForm.unit_type"}},_vm._l((_vm.config.unit_type),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"105px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"number"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.number),callback:function ($$v) {_vm.$set(_vm.ruleForm, "number", $$v)},expression:"ruleForm.number"}}),_vm._v(" 室\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"215px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"户型","prop":"room"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.room),callback:function ($$v) {_vm.$set(_vm.ruleForm, "room", $$v)},expression:"ruleForm.room"}}),_vm._v(" 室\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"105px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"ting"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.ting),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ting", $$v)},expression:"ruleForm.ting"}}),_vm._v(" 厅\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"105px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"chu"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.chu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "chu", $$v)},expression:"ruleForm.chu"}}),_vm._v(" 厨\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"105px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"wei"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.wei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wei", $$v)},expression:"ruleForm.wei"}}),_vm._v(" 卫\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"120px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"yang"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.yang),callback:function ($$v) {_vm.$set(_vm.ruleForm, "yang", $$v)},expression:"ruleForm.yang"}}),_vm._v(" 阳台\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系人姓名"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"联系人姓名"},model:{value:(_vm.ruleForm.contact),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact", $$v)},expression:"ruleForm.contact"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"联系人电话"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"联系人电话"},model:{value:(_vm.ruleForm.contact_phone),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact_phone", $$v)},expression:"ruleForm.contact_phone"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"月租价","prop":"price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"月租价"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}}),_vm._v(" 元/月\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"押金","prop":"yajin"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"押金"},model:{value:(_vm.ruleForm.yajin),callback:function ($$v) {_vm.$set(_vm.ruleForm, "yajin", $$v)},expression:"ruleForm.yajin"}}),_vm._v(" 元\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"转让费","prop":"zhuanrang_fee"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"转让费"},model:{value:(_vm.ruleForm.zhuanrang_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuanrang_fee", $$v)},expression:"ruleForm.zhuanrang_fee"}}),_vm._v(" 元\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"面积","prop":"mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"面积"},model:{value:(_vm.ruleForm.mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mianji", $$v)},expression:"ruleForm.mianji"}}),_vm._v(" 平米\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"楼层","prop":"floor"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor", $$v)},expression:"ruleForm.floor"}}),_vm._v(" 楼\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"共"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.total_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "total_floor", $$v)},expression:"ruleForm.total_floor"}}),_vm._v(" 层\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"付款意向","prop":"pay_intention"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"付款意向"},model:{value:(_vm.ruleForm.pay_intention),callback:function ($$v) {_vm.$set(_vm.ruleForm, "pay_intention", $$v)},expression:"ruleForm.pay_intention"}},[_c('el-option',{attrs:{"label":"付费","value":"a"}},[_vm._v(" 付费")]),_vm._v(" "),_c('el-option',{attrs:{"label":"不付费","value":"b"}},[_vm._v(" 不付费")]),_vm._v(" "),_c('el-option',{attrs:{"label":"联系不到，继续跟踪","value":"c"}},[_vm._v(" 联系不到，继续跟踪")]),_vm._v(" "),_c('el-option',{attrs:{"label":"删除信息","value":"d"}},[_vm._v(" 删除信息")]),_vm._v(" "),_c('el-option',{attrs:{"label":"废除信息","value":"f"}},[_vm._v(" 废除信息")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"支付方式"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"支付方式"},model:{value:(_vm.ruleForm.rental_pay),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rental_pay", $$v)},expression:"ruleForm.rental_pay"}},_vm._l((_vm.config.rental_pay),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"250px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"房屋情况","prop":"house_type2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"placeholder":"房屋类型"},model:{value:(_vm.ruleForm.house_type2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "house_type2", $$v)},expression:"ruleForm.house_type2"}},_vm._l((_vm.config.house_type2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"140px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"zhuangxiu"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"placeholder":"装修情况"},model:{value:(_vm.ruleForm.zhuangxiu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuangxiu", $$v)},expression:"ruleForm.zhuangxiu"}},_vm._l((_vm.config.zhuangxiu),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"140px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"chaoxiang"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"placeholder":"朝向"},model:{value:(_vm.ruleForm.chaoxiang),callback:function ($$v) {_vm.$set(_vm.ruleForm, "chaoxiang", $$v)},expression:"ruleForm.chaoxiang"}},_vm._l((_vm.config.chaoxiang),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),(_vm.ruleForm.rental_type==99)?_c('el-row',[_c('el-col',{staticStyle:{"width":"300px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"prop":"rent_num"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.rent_num),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_num", $$v)},expression:"ruleForm.rent_num"}}),_vm._v(" 户已出租\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"300px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"rent_total"}},[_vm._v("\n\t\t\t\t\t\t\t共 "),_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"number","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.rent_total),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_total", $$v)},expression:"ruleForm.rent_total"}}),_vm._v(" 户合租\n\t\t\t\t\t\t")],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.rental_type==99)?_c('el-row',[_c('el-col',{staticStyle:{"width":"250px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"待租卧室","prop":"rent_room"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"placeholder":"卧室类型"},model:{value:(_vm.ruleForm.rent_room),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_room", $$v)},expression:"ruleForm.rent_room"}},_vm._l((_vm.config.rent_room),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"140px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"rent_sex"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"placeholder":"限制室友类型"},model:{value:(_vm.ruleForm.rent_sex),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_sex", $$v)},expression:"ruleForm.rent_sex"}},_vm._l((_vm.config.rent_sex),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"140px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"rent_chaoxiang"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"placeholder":"朝向"},model:{value:(_vm.ruleForm.rent_chaoxiang),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_chaoxiang", $$v)},expression:"ruleForm.rent_chaoxiang"}},_vm._l((_vm.config.chaoxiang),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"200px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"rent_area"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"100px"},attrs:{"type":"number","maxlength":"30","placeholder":"面积"},model:{value:(_vm.ruleForm.rent_area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rent_area", $$v)},expression:"ruleForm.rent_area"}}),_vm._v(" 平方米\n\t\t\t\t\t\t")],1)],1)],1):_vm._e(),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"价格是否含税","prop":"tax"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.tax),callback:function ($$v) {_vm.$set(_vm.ruleForm, "tax", $$v)},expression:"ruleForm.tax"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"隔间状态","prop":"is_break"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_break),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_break", $$v)},expression:"ruleForm.is_break"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"是否装修齐全","prop":"complete_decoration"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.complete_decoration),callback:function ($$v) {_vm.$set(_vm.ruleForm, "complete_decoration", $$v)},expression:"ruleForm.complete_decoration"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房屋配套"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.peitao),callback:function ($$v) {_vm.$set(_vm.ruleForm, "peitao", $$v)},expression:"ruleForm.peitao"}},_vm._l((_vm.config.peitao),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房屋相关"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.relation),callback:function ($$v) {_vm.$set(_vm.ruleForm, "relation", $$v)},expression:"ruleForm.relation"}},_vm._l((_vm.config.relation),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页短标签"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.short_home),callback:function ($$v) {_vm.$set(_vm.ruleForm, "short_home", $$v)},expression:"ruleForm.short_home"}},_vm._l((_vm.config.house_short_map),function(item){return _c('el-checkbox',{key:item.value,attrs:{"label":item.id}},[_vm._v(_vm._s(item.value))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"物业类型"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"180px"},attrs:{"clearable":"","placeholder":"物业类型类型"},model:{value:(_vm.ruleForm.wuye_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye_type", $$v)},expression:"ruleForm.wuye_type"}},_vm._l((_vm.config.wuye_type),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"物业公司"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"物业公司"},model:{value:(_vm.ruleForm.wuye),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye", $$v)},expression:"ruleForm.wuye"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"物业费"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"物业费"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地铁","prop":"subway_id"}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择地铁"},model:{value:(_vm.ruleForm.subway_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "subway_id", $$v)},expression:"ruleForm.subway_id"}},_vm._l((_vm.subways),function(group){return _c('el-option-group',{key:group.label,attrs:{"label":group.label}},_vm._l((group.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"300px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"面宽","prop":"width"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入面宽"},model:{value:(_vm.ruleForm.width),callback:function ($$v) {_vm.$set(_vm.ruleForm, "width", $$v)},expression:"ruleForm.width"}}),_vm._v(" 米\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"300px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"层高","prop":"floor_heigth"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"number","maxlength":"2","placeholder":"请输入层高"},model:{value:(_vm.ruleForm.floor_heigth),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_heigth", $$v)},expression:"ruleForm.floor_heigth"}}),_vm._v(" 米\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"300px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"进深","prop":"depth"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"120px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入进深"},model:{value:(_vm.ruleForm.depth),callback:function ($$v) {_vm.$set(_vm.ruleForm, "depth", $$v)},expression:"ruleForm.depth"}}),_vm._v(" 米\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"入驻时间","prop":"in_date"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"date","placeholder":"选择日期时间","value-format":"yyyy"},model:{value:(_vm.ruleForm.in_date),callback:function ($$v) {_vm.$set(_vm.ruleForm, "in_date", $$v)},expression:"ruleForm.in_date"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"临近主干道","prop":"near_street"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入临近主干道"},model:{value:(_vm.ruleForm.near_street),callback:function ($$v) {_vm.$set(_vm.ruleForm, "near_street", $$v)},expression:"ruleForm.near_street"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"附近餐饮","prop":"is_dinner"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入附近餐饮"},model:{value:(_vm.ruleForm.is_dinner),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_dinner", $$v)},expression:"ruleForm.is_dinner"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"临近学校","prop":"near_school"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入临近学校"},model:{value:(_vm.ruleForm.near_school),callback:function ($$v) {_vm.$set(_vm.ruleForm, "near_school", $$v)},expression:"ruleForm.near_school"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"当前租期","prop":"curernt_rental_time"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入当前租期"},model:{value:(_vm.ruleForm.curernt_rental_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "curernt_rental_time", $$v)},expression:"ruleForm.curernt_rental_time"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"剩余租期","prop":"remain_rental_time"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"2","placeholder":"请输入剩余租期"},model:{value:(_vm.ruleForm.remain_rental_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remain_rental_time", $$v)},expression:"ruleForm.remain_rental_time"}}),_vm._v(" 月\n\t\t\t\t\t\t")],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"最长租约","prop":"max_rental_time"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入最长租约"},model:{value:(_vm.ruleForm.max_rental_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_rental_time", $$v)},expression:"ruleForm.max_rental_time"}}),_vm._v(" 月\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"续租方式","prop":"delay_rental_type"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.delay_rental_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "delay_rental_type", $$v)},expression:"ruleForm.delay_rental_type"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("合同")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("其他")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":"是否分时付款","prop":"is_time_split"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.is_time_split),callback:function ($$v) {_vm.$set(_vm.ruleForm, "is_time_split", $$v)},expression:"ruleForm.is_time_split"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"转让内容","prop":"zhuanrang_info"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":""},model:{value:(_vm.ruleForm.zhuanrang_info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuanrang_info", $$v)},expression:"ruleForm.zhuanrang_info"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"建造年代","prop":"niandai"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"year","placeholder":"选择日期时间","value-format":"yyyy"},model:{value:(_vm.ruleForm.niandai),callback:function ($$v) {_vm.$set(_vm.ruleForm, "niandai", $$v)},expression:"ruleForm.niandai"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"特色","prop":"tese"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入特色","maxlength":"255"},model:{value:(_vm.ruleForm.tese),callback:function ($$v) {_vm.$set(_vm.ruleForm, "tese", $$v)},expression:"ruleForm.tese"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"180px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","readonly":"","placeholder":"地理位置坐标","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":false,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"不能出现任意联系方式（包括但不限QQ，微信、电话、网址、MSN、邮箱等）；请勿添加其他广告，请勿输入与本房源无关内容或者非法信息。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源介绍","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box1"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"业主心态"}},[_c('div',{attrs:{"id":"tinymcy-box2"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.owner_mentality),callback:function ($$v) {_vm.$set(_vm.ruleForm, "owner_mentality", $$v)},expression:"ruleForm.owner_mentality"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"核心卖点"}},[_c('div',{attrs:{"id":"tinymcy-box3"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.core_sell),callback:function ($$v) {_vm.$set(_vm.ruleForm, "core_sell", $$v)},expression:"ruleForm.core_sell"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-alert',{attrs:{"closable":false,"title":"99%房源下架的图片规则：1、不得违反公司logo发布规则（限1个，白色半透明且尺寸在25%以内）2、不得盗图（含其他logo）3、不得有任何装    饰，图文。","type":"error"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"缩略图"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.ruleForm.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview1(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm.img)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"室内图","prop":"pic"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"on-preview":_vm.handlePictureCardPreview,"file-list":_vm.fileList}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"视频"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleVideoSuccess}},[(_vm.ruleForm.video_url)?_c('video',{staticClass:"avatar",attrs:{"controls":"controls","src":_vm.ruleForm.video_url}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"推荐位"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.position),callback:function ($$v) {_vm.$set(_vm.ruleForm, "position", $$v)},expression:"ruleForm.position"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"急租房源","prop":"jizu"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.jizu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "jizu", $$v)},expression:"ruleForm.jizu"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("否")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"房源来源","prop":"user_type"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.user_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "user_type", $$v)},expression:"ruleForm.user_type"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("个人")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":2}},[_vm._v("中介/公司")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"350px"},attrs:{"span":3}},[_c('el-form-item',{attrs:{"label":"转租类型"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.zhuanzu_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuanzu_type", $$v)},expression:"ruleForm.zhuanzu_type"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("租房")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":0}},[_vm._v("转租")])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO标题"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO标题"},model:{value:(_vm.ruleForm.seo_title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_title", $$v)},expression:"ruleForm.seo_title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO关键词"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO关键词"},model:{value:(_vm.ruleForm.seo_keys),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_keys", $$v)},expression:"ruleForm.seo_keys"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"SEO描述"}},[_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"SEO描述"},model:{value:(_vm.ruleForm.seo_desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "seo_desc", $$v)},expression:"ruleForm.seo_desc"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":"5"}},[_vm._v("审核中")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序(数字越小越靠前)","prop":"ordid"}},[_c('el-input',{staticClass:"name",attrs:{"type":"ordid","maxlength":"30","placeholder":"数字越小越靠前"},model:{value:(_vm.ruleForm.ordid),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ordid", $$v)},expression:"ruleForm.ordid"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"客服备注","maxlength":"255"},model:{value:(_vm.ruleForm.remark_content),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remark_content", $$v)},expression:"ruleForm.remark_content"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var residence_RentResidenceDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent/residence/RentResidenceDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("ZUVs")
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
  RentResidenceDetail,
  residence_RentResidenceDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_residence_RentResidenceDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZUVs":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oGyl");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("6eaa5097", content, true);

/***/ }),

/***/ "oGyl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.office-form {\n  padding: 20px;\n}\n.office-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  min-height: 360px;\n  width: 100%;\n}\n.office-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.office-form fieldset ol {\n    padding-left: 25px;\n}\n.office-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.office-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.office-form .el-upload-list-box,\n.office-form .el-upload-list-box + div {\n  float: left;\n}\n.office-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box1 .mce-container,\n#tinymcy-box1 .mce-container *,\n#tinymcy-box2 .mce-container,\n#tinymcy-box2 .mce-container *,\n#tinymcy-box3 .mce-container,\n#tinymcy-box3 .mce-container *,\n#tinymcy-box4 .mce-container,\n#tinymcy-box4 .mce-container * {\n  white-space: normal;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/***/ })

});
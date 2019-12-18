webpackJsonp([39],{

/***/ "8DDt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

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

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent/building/BuildingDetail.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var BuildingDetail = ({
	name: "Collect",
	components: { Tinymce: Tinymce["a" /* default */] },
	data: function data() {
		var _this = this;

		return {
			ruleForm: {
				area: null, //区域
				area2: null, //街道
				title: null, //楼盘名称
				subway_id: [],
				map: null, //地图标注
				min_mianji: null, //面积
				max_mianji: null, //面积
				price: null, //价格
				max_price: null, //价格
				total_floor: null, //总层数
				year: null, //建筑年代
				address: null, //地址
				wuye: null, //物业公司
				wuyefei: null, //物业费
				floor_height: null, //层高
				build_class: null, //类型（普通办公、共享办公、创意园区）
				build_type: null, // 分类 （甲、乙、丙） 用于写字楼
				build_label: [], // 所属标签
				img: null, //封面图片
				pic: [],
				status: -1,
				info: "", //具体描述
				rec_position: 1, //是否推荐 0否，1是
				img_show: null
			},
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
				title: [{
					required: true,
					message: "请输入产业园名称",
					trigger: "blur"
				}],
				year: [{
					required: true,
					message: "请输入建筑年代",
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
				// land_use: [
				// 	{
				// 		required: true,
				// 		message: "请输入用地性质",
				// 		trigger: "blur"
				// 	}
				// ],
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
				rental_pay: [{
					required: true,
					message: "请选择街道",
					trigger: "blur"
				}],
				info: [{
					required: true,
					message: "请输入产业园概况",
					trigger: "blur"
				}],
				img: [{
					required: true,
					message: "请选择封面图",
					trigger: "blur"
				}],
				pic: [{
					required: true,
					message: "请上传产业园图片",
					trigger: "blur"
				}],
				price_unit: [{
					required: true,
					message: "请选择价格单位",
					trigger: "blur"
				}],
				contact_phone: [{
					required: true,
					message: "请输入联系方式",
					trigger: "blur"
				}, {
					pattern: /^[1][0-9]{10}|([0-9]{3,4}-)?[0-9]{7,8}$/,
					message: "请输入正确的联系方式！"
				}],
				price: [{
					validator: function validator(rule, value, callback) {
						if (value == 0 && _this.ruleForm.max_price == 0) {
							callback(new Error("最小价格和最大价格不可以都为0"));
						} else if (Number(_this.ruleForm.max_price) && Number(value) > Number(_this.ruleForm.max_price)) {
							callback(new Error("最小价格不可以大于最大价格"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				max_price: [{
					validator: function validator(rule, value, callback) {
						if (value == 0 && _this.ruleForm.price == 0) {
							callback(new Error("最小价格和最大价格不可以都为0"));
						} else if (Number(value) < Number(_this.ruleForm.price)) {
							callback(new Error("最小价格不可以大于最大价格"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				min_mianji: [{
					validator: function validator(rule, value, callback) {
						if (value == 0 && _this.ruleForm.max_mianji == 0) {
							callback(new Error("最小面积和最大面积不可以都为0"));
						} else if (Number(_this.ruleForm.max_mianji) && Number(value) > Number(_this.ruleForm.max_mianji)) {
							callback(new Error("最小面积不可以大于最大面积"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				max_mianji: [{
					validator: function validator(rule, value, callback) {
						if (value == 0 && _this.ruleForm.min_mianji == 0) {
							callback(new Error("最小面积和最大面积不可以都为0"));
						} else if (Number(value) < Number(_this.ruleForm.min_mianji)) {
							callback(new Error("最小面积不可以大于最大面积"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				rent_num: [{
					required: true,
					message: "请输入已出租数",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (value > _this.ruleForm.rent_total) {
							callback(new Error("已出租数不能大于总出租数"));
						} else {
							callback();
						}
					},
					trigger: "blur"
				}],
				rent_total: [{
					required: true,
					message: "请输入总出租数",
					trigger: "blur"
				}, {
					validator: function validator(rule, value, callback) {
						if (_this.ruleForm.rent_num > value) {
							callback(new Error("已出租数不能大于总出租数"));
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
		var _this2 = this;

		this.getConfigList().then(function (data) {
			if (_this2.$route.params.id > 0) {
				_this2.getBuildingDetail(_this2.$route.params.id);
			}
		});
		this.getAreaLists();
	},
	mounted: function mounted() {},


	methods: {
		invitationChange: function invitationChange() {
			var _this3 = this;

			var obj = {};
			var invitation = this.config.invitation;
			var len = this.ruleForm.invitation.length;
			for (var k in invitation) {
				// invitation[k].value = null; 此处设置后无法双向绑定 [],索引修改无效
				obj[invitation[k].id] = invitation[k];
			}
			if (this.last < len) {
				var index = this.ruleForm.invitation[len - 1];
				this.ruleForm.invitation_nums.push(obj[index]);
			} else {
				var _index = this.ruleForm.invitation_nums.findIndex(function (value, index, arr) {
					return !_this3.ruleForm.invitation.includes(value.id);
				});
				this.ruleForm.invitation_nums.splice(_index, 1);
			}
			this.last = len;
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

			return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
				var _, _ref, _ref2, config, subways;

				return regenerator_default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_ = _this5;
								_context.prev = 1;
								_context.next = 4;
								return promise_default.a.all([Object(house["p" /* getBuildingConfingList */])(), Object(house["M" /* getStationList */])()]);

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
				}, _callee, _this5, [[1, 12]]);
			}))();
		},
		handleVideoSuccess: function handleVideoSuccess(res, file) {
			// this.ruleForm.video_url = URL.createObjectURL(file.raw);
			console.log(res.data);
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
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.show_url || file.url || file.img_show;
			this.dialogVisible = true;
		},
		handleResData: function handleResData(data) {
			var keys = ["subway_id", "build_label"];
			data.build_label = data.build_label.split(",") || [];
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
			data.rec_position = Number(data.rec_position);
			this.fileList = data.file.map(function (item) {
				return {
					url: item.show_url,
					title: ""
				};
			});
		},
		getBuildingDetail: function getBuildingDetail(id) {
			var _this7 = this;

			Object(house["q" /* getBuildingDetail */])(id).then(function (response) {
				var data = response.data.data;
				_this7.handleResData(data);
				_this7.remarkLists = data.remarkLists || [];
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
				}
			});
		},
		editOrAddOffice: function editOrAddOffice() {
			var _this9 = this;

			delete this.ruleForm.file;
			this.ruleForm.build_label = this.ruleForm.build_label.join();
			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(house["g" /* editBuilding */])(this.ruleForm).then(function (response) {
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
				Object(house["P" /* saveBuilding */])(this.ruleForm).then(function (response) {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a8b798a0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent/building/BuildingDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"building-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"楼盘ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼盘名称","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入楼盘名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","readonly":"","placeholder":"地理位置坐标","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地铁","prop":"subway_id"}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择地铁"},model:{value:(_vm.ruleForm.subway_id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "subway_id", $$v)},expression:"ruleForm.subway_id"}},_vm._l((_vm.subways),function(group){return _c('el-option-group',{key:group.label,attrs:{"label":group.label}},_vm._l((group.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"价格","prop":"price"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","step":"0.01","maxlength":"30","placeholder":"最小价格"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"max_price"}},[_c('el-input',{staticClass:"name",staticStyle:{"margin-left":"5px","width":"70%"},attrs:{"type":"number","step":"0.01","maxlength":"30","placeholder":"最大价格"},model:{value:(_vm.ruleForm.max_price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_price", $$v)},expression:"ruleForm.max_price"}}),_vm._v("\n\t\t\t\t\t\t\t元/m²/天\n\t\t\t\t\t\t")],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"最小面积","prop":"min_mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","step":"0.01","placeholder":"请输入最小面积"},model:{value:(_vm.ruleForm.min_mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "min_mianji", $$v)},expression:"ruleForm.min_mianji"}}),_vm._v(" m²\n\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"最大面积","prop":"max_mianji"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","step":"0.01","placeholder":"请输入最大面积"},model:{value:(_vm.ruleForm.max_mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "max_mianji", $$v)},expression:"ruleForm.max_mianji"}}),_vm._v(" m²\n\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"建筑年代","prop":"year"}},[_c('el-date-picker',{staticStyle:{"width":"180px"},attrs:{"type":"year","placeholder":"选择日期时间","value-format":"yyyy"},model:{value:(_vm.ruleForm.year),callback:function ($$v) {_vm.$set(_vm.ruleForm, "year", $$v)},expression:"ruleForm.year"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业公司","prop":"wuye"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"请输入物业公司"},model:{value:(_vm.ruleForm.wuye),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye", $$v)},expression:"ruleForm.wuye"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业费","prop":"wuyefei"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入物业费"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"建筑层高","prop":"floor_height"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入建筑层高"},model:{value:(_vm.ruleForm.floor_height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_height", $$v)},expression:"ruleForm.floor_height"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型","prop":"build_class"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择类型"},model:{value:(_vm.ruleForm.build_class),callback:function ($$v) {_vm.$set(_vm.ruleForm, "build_class", $$v)},expression:"ruleForm.build_class"}},_vm._l((_vm.config.build_class),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"分类","prop":"build_type"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择分类"},model:{value:(_vm.ruleForm.build_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "build_type", $$v)},expression:"ruleForm.build_type"}},_vm._l((_vm.config.build_type),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"所属标签","prop":"build_label"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"multiple":"","clearable":"","placeholder":"请选择所属标签"},model:{value:(_vm.ruleForm.build_label),callback:function ($$v) {_vm.$set(_vm.ruleForm, "build_label", $$v)},expression:"ruleForm.build_label"}},_vm._l((_vm.config.build_label),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图片","prop":"img"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.ruleForm.img_show)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img_show}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼盘图片","prop":"pic"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"multiple":"","show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"before-remove":_vm.handleImgRemove,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"具体描述","prop":"info"}},[_c('div',{attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.rec_position),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rec_position", $$v)},expression:"ruleForm.rec_position"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("是")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":"-1"}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("删除")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("启用")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("退回")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("历史操作记录")]),_vm._v(" "),(_vm.remarkLists && _vm.remarkLists.length>0)?_c('ol',_vm._l((_vm.remarkLists),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var building_BuildingDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent/building/BuildingDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("kXFL")
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
  BuildingDetail,
  building_BuildingDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_building_BuildingDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "kXFL":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("t/9W");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("05fcb0a7", content, true);

/***/ }),

/***/ "t/9W":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.building-form {\n  padding: 20px;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.building-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.building-form .el-upload-list-box,\n.building-form .el-upload-list-box + div {\n  float: left;\n}\n.building-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\n.editor-content {\n  margin-top: 20px;\n}\n#tinymcy-box .mce-container,\n#tinymcy-box .mce-container * {\n  white-space: normal;\n}\n", ""]);

// exports


/***/ })

});
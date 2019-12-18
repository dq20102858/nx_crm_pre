webpackJsonp([53],{

/***/ "UPPk":
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

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/components/Tinymce/index.vue + 7 modules
var Tinymce = __webpack_require__("5aCZ");

// EXTERNAL MODULE: ./src/api/912cms/house.js
var house = __webpack_require__("VJzU");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/rent-check/edit/BusinessEditDetail.vue





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var BusinessEditDetail = ({
	name: "BusinessEditDetail",
	components: { Tinymce: Tinymce["a" /* default */] },
	data: function data() {
		return {
			ruleForm: {
				title: null, //产业园名称
				developer: "", //开发商名称
				area: null, //区域
				area2: null, //街道
				mianji: null, //面积
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
				price_unit: null, //价格单位; 1:元,2:元/月,3:元/m²/月,4:万元,配置项
				start_rent: null, //起租期
				free_rent: null, //免租期
				wuyefei: null, //物业费
				electric_fee: null, //电费
				water_fee: null, //水费
				project_name: null, //项目名称
				info: null, //项目描述
				brand: [], //入住品牌
				img: null, //封面图片
				pic: [],
				video_url: null, //视频链接
				status: null,
				history: [],
				img_show: null,
				fail_reason: null,
				sale_avg_price: null
			},
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
			center: { lng: 118.815358, lat: 32.063673 },
			qualification: {},
			invitation_nums: [],
			config: {},
			subways: [],
			isEdit: false,
			map: { lng: 118.815358, lat: 32.063673 },
			host: 'http://' + location.host,
			// host: "http://boss.912zufang.com",
			dialogImageUrl: "",
			dialogVisible: false,
			dialogImageUrl1: "",
			dialogVisible1: false,
			rules: {
				fail_reason: [{
					required: true,
					message: "请输入不通过原因",
					trigger: "blur"
				}]
			},
			areas: [],
			fileList: [],
			districts: []
		};
	},

	created: function created() {
		var _this = this;

		this.getConfigList().then(function (data) {
			if (_this.$route.params.id > 0) {
				_this.getDetail(_this.$route.params.id);
			}
		});
		this.getAreaLists();
		if (this.$route.params.id > 0) {
			this.isEdit = true;
		}
	},
	mounted: function mounted() {},

	watch: {
		$route: function $route(to, from) {
			this.globalEvBus.$emit("reload");
		}
	},
	methods: {
		handlePictureCardPreview1: function handlePictureCardPreview1(url) {
			this.dialogImageUrl1 = url;
			this.dialogVisible1 = true;
		},
		confrimPass: function confrimPass(id) {
			var _this2 = this;

			Object(house["m" /* editQualification */])({
				id: id,
				status: 1
			}).then(function () {
				Object(house["K" /* getQualificationDetail */])(_this2.ruleForm.user_id).then(function (res) {
					_this2.qualification = res.data.data || {};
				});
			});
		},
		cancelPass: function cancelPass(id) {
			var _this3 = this;

			Object(house["m" /* editQualification */])({
				id: id,
				status: 2
			}).then(function () {
				Object(house["K" /* getQualificationDetail */])(_this3.ruleForm.user_id).then(function (res) {
					_this3.qualification = res.data.data || {};
				});
			});
		},
		toggleInvitatinError: function toggleInvitatinError(val, index) {
			this.invitation_nums[index].showError = val ? false : true;
			this.$forceUpdate();
		},
		getInvitationNumList: function getInvitationNumList(value, ele) {
			var _this4 = this;

			if (value) {
				var obj = {};
				obj[ele.srcElement.defaultValue] = "";
				this.ruleForm.invitation_nums.push(obj);
				this.invitation_nums.push({
					name: ele.srcElement.name,
					id: ele.srcElement.defaultValue
				});
			} else {
				this.ruleForm.invitation_nums.forEach(function (item, index) {
					for (var key in item) {
						if (key == ele.srcElement.defaultValue) {
							_this4.ruleForm.invitation_nums.splice(index, 1);
							_this4.invitation_nums.splice(index, 1);
						}
					}
				});
			}
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
				}, _callee, _this5, [[1, 12]]);
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
		handleBrandImgSuccess: function handleBrandImgSuccess(res, file) {
			this.ruleForm.brand.push({
				show_url: res.data.show_url,
				url: res.data.show_url,
				title: null
			});
		},
		handleImgSuccess: function handleImgSuccess(res, file) {
			this.ruleForm.pic.push(res.data.show_url);
		},
		handlePictureCardPreview: function handlePictureCardPreview(file) {
			this.dialogImageUrl = file.show_url || file.url || file.img_show;
			this.dialogVisible = true;
		},
		getDetail: function getDetail(id) {
			var _this6 = this;

			Object(house["z" /* getEditDetail */])(id).then(function (response) {
				var data = response.data.data;
				var keys = ["invitation", "fire_control", "facilities", "astrict"];
				for (var i = 0; i < keys.length; i++) {
					if (!!data[keys[i]]) {
						data[keys[i]] = data[keys[i]].map(function (item) {
							return Number(item);
						});
					} else {
						data[keys[i]] = [];
					}
				}
				_this6.fileList = data.file.map(function (item) {
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
				data.brand = data.brand || [];
				data.price_unit = Number(data.price_unit);
				data.rec_position = Number(data.rec_position);
				data.nature = Number(data.nature);
				data.invitation_nums = data.invitation_nums || [];
				data.invitation_nums.forEach(function (item, index) {
					_this6.config.invitation.forEach(function (item1, index1) {
						for (var key in item) {
							if (key == item1.id) {
								_this6.invitation_nums.push(item1);
							}
						}
					});
				});
				_this6.ruleForm = assign_default()(_this6.ruleForm, data);
				setTimeout(function () {
					if (_this6.ruleForm.map) {
						var arr = _this6.ruleForm.map.split(",");
						var point = new BMap.Point(Number(arr[0]), Number(arr[1]));
						var marker = new BMap.Marker(point);
						_this6.$refs.map.map.clearOverlays();
						_this6.$refs.map.map.addOverlay(marker);
						_this6.$refs.map.map.centerAndZoom(point, 18);
					}
				}, 1000);
				if (_this6.ruleForm.agent_flag && _this6.ruleForm.user_id) {
					Object(house["K" /* getQualificationDetail */])(_this6.ruleForm.user_id).then(function (res) {
						_this6.qualification = res.data.data || {};
					});
				}
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
			var _this7 = this;

			if (this.qualification.status !== 1 && this.ruleForm.agent_flag && this.ruleForm.status == 1) {
				this.$message({
					type: "error",
					message: '企业资质待审核，请先审核企业资质～'
				});
				return;
			}
			this.$refs[formName].validate(function (valid) {
				if (valid) {
					Object(house["O" /* passEdit */])({
						id: _this7.ruleForm.id,
						status: _this7.ruleForm.status,
						history: _this7.ruleForm.history,
						fail_reason: _this7.ruleForm.fail_reason
					}).then(function () {
						setTimeout(function () {
							_this7.$store.dispatch("delView", _this7.$route);
							_this7.$router.go(-1);
						}, 500);
					});
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
		isValidInvitation: function isValidInvitation() {
			var _this8 = this;

			//校验招商业态数量
			var flag = true;
			this.ruleForm.invitation_nums.forEach(function (item, index) {
				for (var key in item) {
					if (!item[key]) {
						_this8.invitation_nums[index].showError = true;
						flag = false;
					}
				}
			});
			if (!flag) this.$forceUpdate();
			return flag;
		},
		editOrAddOrder: function editOrAddOrder() {
			var _this9 = this;

			if (this.ruleForm.id != 0 && this.ruleForm.id) {
				Object(house["h" /* editBusiness */])(this.ruleForm).then(function (response) {
					if (response.data.status) {
						_this9.$notify({
							title: "成功",
							message: "编辑成功",
							type: "success",
							duration: 2000
						});
						_this9.$store.dispatch("delView", _this9.$route);
						_this9.$router.go(-1);
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
				Object(house["a" /* addBusiness */])(this.ruleForm).then(function (response) {
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
		changeDistrictLists: function changeDistrictLists() {
			var _this11 = this;

			Object(requirement["s" /* getDistrictLists */])(this.areas1Code).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this11.districts1 = data;
					_this11.districts1Code = _this11.districts1[0].code;
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
		changeArea: function changeArea() {
			var _this12 = this;

			this.ruleForm.area2 = "";
			Object(requirement["s" /* getDistrictLists */])(this.ruleForm.area).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this12.districts = data;
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7567b30d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/rent-check/edit/BusinessEditDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"business-edit-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"120px","id":"consult-form","size":"small"}},[(_vm.ruleForm.agent_flag)?_c('fieldset',[_c('legend',[_vm._v("企业资质")]),_vm._v(" "),_c('div',{staticClass:"enterprise-qualification"},[_c('el-form-item',{attrs:{"label":"企业全称："}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(_vm.qualification.company_name)+"\n\t\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业代码："}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(_vm.qualification.company_code)+"\n\t\t\t\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证明图片："}},[_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.qualification.file),function(item,index){return _c('li',{key:'img_'+index,staticClass:"el-upload-list__item is-success",staticStyle:{"cursor":"pointer"},attrs:{"tabindex":"0"},on:{"click":function($event){_vm.handlePictureCardPreview1(item)}}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":item,"alt":""}})])}))]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业资质状态："}},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(['待审核','通过','未通过','重申'][_vm.qualification.status])+"\n\t\t\t\t\t\t")]),_vm._v(" "),(_vm.qualification.status==0||_vm.qualification.status==3)?_c('el-form-item',{attrs:{"label":""}},[_c('el-button',{attrs:{"size":"mini","type":"success"},on:{"click":function($event){_vm.confrimPass(_vm.qualification.id)}}},[_vm._v("通过")]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.cancelPass(_vm.qualification.id)}}},[_vm._v("驳回")])],1):_vm._e()],1)]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"商业体名称","prop":"title"}},[_c('el-input',{staticClass:"name",attrs:{"disabled":_vm.isEdit,"maxlength":"30","placeholder":"请输入商业体名称"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开发商名称","prop":"developer"}},[_c('el-input',{attrs:{"placeholder":"开发商名称","maxlength":"255"},model:{value:(_vm.ruleForm.developer),callback:function ($$v) {_vm.$set(_vm.ruleForm, "developer", $$v)},expression:"ruleForm.developer"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"出售均价"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入出售均价"},model:{value:(_vm.ruleForm.sale_avg_price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "sale_avg_price", $$v)},expression:"ruleForm.sale_avg_price"}}),_vm._v(" 元/平方米\n\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"面积","prop":"mianji"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入面积"},model:{value:(_vm.ruleForm.mianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "mianji", $$v)},expression:"ruleForm.mianji"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地下楼层","prop":"un_floor"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入地下楼层"},model:{value:(_vm.ruleForm.un_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "un_floor", $$v)},expression:"ruleForm.un_floor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地上楼层","prop":"on_floor"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入地上楼层"},model:{value:(_vm.ruleForm.on_floor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "on_floor", $$v)},expression:"ruleForm.on_floor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"楼层层高","prop":"floor_height"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入楼层层高"},model:{value:(_vm.ruleForm.floor_height),callback:function ($$v) {_vm.$set(_vm.ruleForm, "floor_height", $$v)},expression:"ruleForm.floor_height"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"装修状况","prop":"zhuangxiu"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择装修状况"},model:{value:(_vm.ruleForm.zhuangxiu),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuangxiu", $$v)},expression:"ruleForm.zhuangxiu"}},_vm._l((_vm.config.zhuangxiu),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型","prop":"business_type"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择商铺类型"},model:{value:(_vm.ruleForm.business_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "business_type", $$v)},expression:"ruleForm.business_type"}},_vm._l((_vm.config.business_type),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"开业时间"}},[_c('el-col',{staticStyle:{"width":"214px"},attrs:{"span":12}},[_c('el-date-picker',{attrs:{"type":"date","align":"right","unlink-panels":"","picker-options":_vm.pickerOptions,"value-format":"yyyy-MM-dd"},model:{value:(_vm.ruleForm.open_time),callback:function ($$v) {_vm.$set(_vm.ruleForm, "open_time", $$v)},expression:"ruleForm.open_time"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"招商业态","prop":"invitation"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.invitation),callback:function ($$v) {_vm.$set(_vm.ruleForm, "invitation", $$v)},expression:"ruleForm.invitation"}},_vm._l((_vm.config.invitation),function(item){return _c('el-checkbox',{key:item.name,attrs:{"name":item.name,"label":item.id},on:{"change":_vm.getInvitationNumList}},[_vm._v(_vm._s(item.name))])})),_vm._v(" "),_c('div',{staticStyle:{"display":"-webkit-flex"}},_vm._l((_vm.ruleForm.invitation_nums),function(item,index){return _c('div',{key:index,staticStyle:{"display":"inline-block","margin":"0 5px 5px 0"}},[_c('label',{staticStyle:{"display":"inline-block","width":"70px"}},[_vm._v(_vm._s(_vm.invitation_nums[index].name)+":")]),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"label":_vm.invitation_nums[index].name,"type":"number","maxlength":"30","placeholder":"请输入数量"},on:{"blur":function($event){_vm.toggleInvitatinError(item[_vm.invitation_nums[index].id.toString()],index)}},model:{value:(item[_vm.invitation_nums[index].id.toString()]),callback:function ($$v) {_vm.$set(item, _vm.invitation_nums[index].id.toString(), $$v)},expression:"item[invitation_nums[index].id.toString()]"}}),_vm._v(" "),(_vm.invitation_nums[index].showError)?_c('div',{staticClass:"el-form-item__error",staticStyle:{"position":"static","padding-left":"70px"}},[_vm._v("请输入"+_vm._s(_vm.invitation_nums[index].name)+"数量")]):_vm._e()],1)}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"消防类型","prop":"fire_type"}},[_c('el-select',{staticClass:"filter-item",attrs:{"placeholder":"请选择消防类型"},model:{value:(_vm.ruleForm.fire_type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fire_type", $$v)},expression:"ruleForm.fire_type"}},_vm._l((_vm.config.fire_type),function(item){return _c('el-option',{key:'fireT_type'+item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('div',[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.fire_control),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fire_control", $$v)},expression:"ruleForm.fire_control"}},_vm._l((_vm.config.fire_control),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房产性质","prop":"nature"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择房产性质"},model:{value:(_vm.ruleForm.nature),callback:function ($$v) {_vm.$set(_vm.ruleForm, "nature", $$v)},expression:"ruleForm.nature"}},_vm._l((_vm.config.nature),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"得房率","prop":"acreage"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入得房率"},model:{value:(_vm.ruleForm.acreage),callback:function ($$v) {_vm.$set(_vm.ruleForm, "acreage", $$v)},expression:"ruleForm.acreage"}}),_vm._v(" %\n\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"经营限制","prop":"astrict"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.astrict),callback:function ($$v) {_vm.$set(_vm.ruleForm, "astrict", $$v)},expression:"ruleForm.astrict"}},_vm._l((_vm.config.astrict),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])})),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"text","maxlength":"30","placeholder":"请输入其他经营限制"},model:{value:(_vm.ruleForm.astrict_other),callback:function ($$v) {_vm.$set(_vm.ruleForm, "astrict_other", $$v)},expression:"ruleForm.astrict_other"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"配套设施","prop":"facilities"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.facilities),callback:function ($$v) {_vm.$set(_vm.ruleForm, "facilities", $$v)},expression:"ruleForm.facilities"}},_vm._l((_vm.config.facilities),function(item){return _c('el-checkbox',{key:item.name,attrs:{"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticStyle:{"width":"245px"},attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":"房源区域","prop":"area"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.area),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area", $$v)},expression:"ruleForm.area"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"125px"},attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"area2"}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"120px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.area2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "area2", $$v)},expression:"ruleForm.area2"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label-width":"0","prop":"address"}},[_c('el-input',{attrs:{"type":"input","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.address),callback:function ($$v) {_vm.$set(_vm.ruleForm, "address", $$v)},expression:"ruleForm.address"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"label-width":"0"}},[_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"mini","type":"danger"},on:{"click":function($event){_vm.searchByStationName()}}},[_vm._v("查询")])],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"地点标记","prop":"map"}},[_c('el-input',{attrs:{"type":"text","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.map),callback:function ($$v) {_vm.$set(_vm.ruleForm, "map", $$v)},expression:"ruleForm.map"}}),_vm._v(" "),_c('baidu-map',{ref:"map",staticClass:"map",attrs:{"center":_vm.center,"zoom":12,"scroll-wheel-zoom":true,"mapType":"BMAP_NORMAL_MAP"},on:{"click":_vm.pickPoint}},[_c('bm-navigation',{attrs:{"anchor":"BMAP_ANCHOR_TOP_RIGHT"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"支付方式","prop":"rental_pay"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择租金支付方式"},model:{value:(_vm.ruleForm.rental_pay),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rental_pay", $$v)},expression:"ruleForm.rental_pay"}},_vm._l((_vm.config.rental_pay),function(item){return _c('el-option',{key:item.name,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"租金","prop":"price"}},[_c('el-input',{staticClass:"name",staticStyle:{"width":"180px"},attrs:{"type":"number","maxlength":"30","placeholder":"请输入价格"},model:{value:(_vm.ruleForm.price),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price", $$v)},expression:"ruleForm.price"}}),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"placeholder":"请选择价格单位"},model:{value:(_vm.ruleForm.price_unit),callback:function ($$v) {_vm.$set(_vm.ruleForm, "price_unit", $$v)},expression:"ruleForm.price_unit"}},_vm._l((_vm.config.price_unit),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"起租期","prop":"start_rent"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入起租期"},model:{value:(_vm.ruleForm.start_rent),callback:function ($$v) {_vm.$set(_vm.ruleForm, "start_rent", $$v)},expression:"ruleForm.start_rent"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"免租期","prop":"free_rent"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入免租期"},model:{value:(_vm.ruleForm.free_rent),callback:function ($$v) {_vm.$set(_vm.ruleForm, "free_rent", $$v)},expression:"ruleForm.free_rent"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业费","prop":"wuyefei"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入物业费"},model:{value:(_vm.ruleForm.wuyefei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyefei", $$v)},expression:"ruleForm.wuyefei"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"电费","prop":"electric_fee"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入电费"},model:{value:(_vm.ruleForm.electric_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "electric_fee", $$v)},expression:"ruleForm.electric_fee"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"水费","prop":"water_fee"}},[_c('el-input',{staticClass:"name",attrs:{"type":"number","maxlength":"30","placeholder":"请输入水费"},model:{value:(_vm.ruleForm.water_fee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "water_fee", $$v)},expression:"ruleForm.water_fee"}})],1),_vm._v(" "),_c('div',{staticClass:"tips"},[_vm._v("不能出现任意联系方式（包括但不限QQ，微信、电话、网址、MSN、邮箱等）；请勿添加其他广告，请勿输入与本房源无关内容或者非法信息(10-30字之间)。")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目名称","prop":"project_name"}},[_c('el-input',{staticClass:"name",attrs:{"type":"text","maxlength":"30","placeholder":"项目名称"},model:{value:(_vm.ruleForm.project_name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "project_name", $$v)},expression:"ruleForm.project_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"项目介绍","prop":"info"}},[_c('div',{staticClass:"components-container",attrs:{"id":"tinymcy-box"}},[_c('tinymce',{attrs:{"height":300},model:{value:(_vm.ruleForm.info),callback:function ($$v) {_vm.$set(_vm.ruleForm, "info", $$v)},expression:"ruleForm.info"}})],1)]),_vm._v(" "),_c('div',{staticClass:"tips"},[_vm._v("引起"),_c('span',{staticClass:"need"},[_vm._v("99%房源下架")]),_vm._v("的图片规则：1、不得违反经济公司logo发布规则（限1个，白色半透明且尺寸在25%以内）2、不得盗图（含其他logo）3、不得有任何装饰，图文。")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"封面图片"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.ruleForm.img_show)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.ruleForm.img_show}}):_vm._e(),_vm._v(" "),(_vm.ruleForm.img_show)?_c('span',{staticStyle:{"position":"absolute","top":"5%","right":"10%","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview(_vm.ruleForm)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),_vm._v(" "),(!_vm.ruleForm.img_show)?_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}):_vm._e()])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图片"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"data":{isPublic: 0},"show-file-list":true,"list-type":"picture-card","on-success":_vm.handleImgSuccess,"file-list":_vm.fileList,"on-preview":_vm.handlePictureCardPreview}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"入住品牌"}},[_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},_vm._l((_vm.ruleForm.brand),function(item,index){return _c('li',{key:'img_'+index,staticClass:"el-upload-list__item is-success",attrs:{"tabindex":"0"}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":item.show_url,"alt":""}}),_vm._v(" "),_c('span',{staticClass:"el-upload-list__item-actions"},[_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){_vm.handlePictureCardPreview(item)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]),_vm._v(" "),_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){_vm.handleBrandRemove(index)}}},[_c('i',{staticClass:"el-icon-delete"})])]),_vm._v(" "),_c('el-input',{attrs:{"type":"text","placeholder":"请输入图片名称","maxlength":"20"},model:{value:(_vm.ruleForm.brand[index].title),callback:function ($$v) {_vm.$set(_vm.ruleForm.brand[index], "title", $$v)},expression:"ruleForm.brand[index].title"}})],1)}))]),_vm._v(" "),_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"list-type":"picture-card","on-success":_vm.handleBrandImgSuccess}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"视频"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleVideoSuccess}},[(_vm.ruleForm.video_url)?_c('video',{staticClass:"avatar",attrs:{"controls":"controls","src":_vm.ruleForm.video_url}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-radio',{attrs:{"border":"","label":-1,"value":-1}},[_vm._v("待审核")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":1}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":2}},[_vm._v("不通过")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":5,"value":5}},[_vm._v("审核中")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==2)?_c('el-form-item',{attrs:{"label":"拒绝原因","prop":"fail_reason"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入拒绝原因","maxlength":"255"},model:{value:(_vm.ruleForm.fail_reason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fail_reason", $$v)},expression:"ruleForm.fail_reason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[_c('fieldset',[_c('legend',[_vm._v("本次修改记录")]),_vm._v(" "),(_vm.ruleForm.history && _vm.ruleForm.history.length>0)?_c('ol',_vm._l((_vm.ruleForm.history),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t"+_vm._s(item.value)+"\n\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无修改操作")])])])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var edit_BusinessEditDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/rent-check/edit/BusinessEditDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("ZStw")
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
  BusinessEditDetail,
  edit_BusinessEditDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var rent_check_edit_BusinessEditDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZStw":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("nI6L");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("180b9f32", content, true);

/***/ }),

/***/ "nI6L":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.business-edit-form {\n  padding: 20px;\n}\n.business-edit-form fieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n}\n.business-edit-form fieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\n.business-edit-form fieldset ol {\n    padding-left: 25px;\n}\n.business-edit-form fieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.business-edit-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.business-edit-form .el-upload-list-box,\n.business-edit-form .el-upload-list-box + div {\n  float: left;\n}\n.business-edit-form\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  border-radius: 0;\n  overflow: initial;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.avatar {\n  width: 148px;\n  height: 148px;\n  display: block;\n}\n.tips {\n  line-height: 40px;\n  background: #f8eae4;\n  border: 1px solid #ff0000;\n  font-size: 12px;\n  color: #4f4f4f;\n  padding-left: 10px;\n  margin: 10px 0 20px 120px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.components-container {\n  margin: 0;\n}\n.components-container .mce-container,\n  .components-container .mce-container * {\n    white-space: normal;\n}\n.components-container .editor-custom-btn-container .el-button--mini {\n    display: none;\n}\n.map {\n  width: 100%;\n  height: 400px;\n}\nfieldset\n.el-upload-list-box\n.el-upload-list--picture-card\n.el-upload-list__item {\n  width: 100px;\n  height: 100px;\n}\n", ""]);

// exports


/***/ })

});
webpackJsonp([82],{

/***/ "0gRK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// EXTERNAL MODULE: ./src/directive/permission/index.js + 1 modules
var permission = __webpack_require__("je39");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/collect/components/TableList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // 权限判断指令
/* harmony default export */ var TableList = ({
	components: {
		Refresh: Refresh["a" /* default */]
	},
	directives: { permission: permission["a" /* default */] },
	props: {
		status: {
			type: Number,
			default: "-1"
		}
	},
	data: function data() {
		return {
			zhuanjiaoStatus: false,
			activeName2: "0",
			individualLists: [],
			total: 0,
			pagesize: 0,
			page: 1,
			last_page: 1,
			searchForm: {
				isSaveFilter: 1,
				noFollow: "",
				assess: "",
				level: "",
				houseType: "",
				districtCode: "",
				agentId: "",
				fReason: this.$route.query.reason ? String(this.$route.query.reason) : ""
			},
			editor: "",
			centerDialogVisible: false,
			areas: [],
			districts: [],
			remindlist: [],
			remindcode: [],
			rowid: null,
			editors: [],
			editors1: [],
			loading: false,
			options4: [],
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			role_id: 0,
			multipleSelection: [],
			tabs: ["公共需求池", "已核实需求", "跟进中需求", "已结束需求"],
			houseTypes: {
				60: "商铺",
				61: "写字楼",
				62: "住宅",
				65: "商业综合体",
				66: "产业园",
				67: "厂房仓库",
				70: "二手房住宅",
				71: "出售商铺",
				72: "出售写字楼",
				73: "出售厂房"
			},
			exclusive: { 1: "是", 0: "否" },
			origins: ["", "直租（委托平台）", "看房日程", "开店管理", "发布房源", "砍价单", "模拟开店", "订制找房", "强制弹窗", "美洽", "400电话", "其它", "需求中心", "找房令", "闲鱼", "抖音", "立即选址", "置换增值", "毕业季活动", "运营中心获客", "幸福里"],
			canvasHtml: null,
			initY: 300
		};
	},

	created: function created() {
		// const end = new Date();
		// const start = new Date();
		// start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
		// this.searchForm.timeRange = [start, end];

		this.getRequireList(1);
		this.getAreaLists();
		this.getEditorLists();
		this.fetchManager();
		// queryAgentList(p => {
		//   this.agentLists = p;
		// });
		if (this.$store.state.user.introduction == "超级管理员" || this.$store.state.user.introduction == "业务经理" || this.$store.state.user.introduction == "客服经理") {
			this.zhuanjiaoStatus = true;
		}
	},
	mounted: function mounted() {
		this.canvasHtml = document.getElementById("canvas");
	},
	methods: {
		changehousetype: function changehousetype() {
			this.searchForm.houseType = "";
		},
		refresh: function refresh() {
			this.searchForm = {};
			this.getSearchOrder();
		},
		getSearchOrder: function getSearchOrder() {
			this.page = 1;
			this.getRequireList(1);
		},
		handleCurrentChange: function handleCurrentChange(val) {
			this.page = Number(val);
			this.getRequireList();
		},
		handleSelectionChange: function handleSelectionChange(val) {
			var _ = this;
			_.multipleSelection = [];
			val.forEach(function (item) {
				_.multipleSelection.push(item.id);
			});
		},
		makeAllocation: function makeAllocation() {
			var _this = this;

			if (this.multipleSelection.length == 0) {
				this.$message({
					message: "请至少选择一条需求单",
					type: "warning"
				});
				return;
			}
			if (this.editor == this.searchForm.editor) {
				this.$message({
					message: "接收人不能与编辑人为同一人",
					type: "warning"
				});
				return;
			}
			var data = {
				agent_id: this.searchForm.editor,
				re_agent_id: this.editor,
				re_ids: this.multipleSelection
			};
			Object(requirement["K" /* reAssignRequrie */])(data).then(function (response) {
				if (response.data.status) {
					_this.$message({
						message: response.data.msg,
						type: "success"
					});
					_this.getRequireList(1);
				} else {
					_this.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			});
		},
		handleSortChange: function handleSortChange(val) {
			if (!val.column) {
				return;
			}
			var obj = {
				createTime: { ascending: 1, descending: 2 },
				updateTime: { ascending: 1, descending: 2 }
			};
			if (val.prop == "createTime") {
				this.searchForm.createSort = obj[val.prop][val.order];
				delete this.searchForm.updateSort;
			} else {
				this.searchForm.updateSort = obj[val.prop][val.order];
				delete this.searchForm.createSort;
			}
			this.getRequireList();
		},
		fetchEditor: function (_fetchEditor) {
			function fetchEditor(_x) {
				return _fetchEditor.apply(this, arguments);
			}

			fetchEditor.toString = function () {
				return _fetchEditor.toString();
			};

			return fetchEditor;
		}(function (query) {
			var _this2 = this;

			if (query !== "") {
				this.loading = true;
				fetchEditor(query).then(function (response) {
					var data = response.data.data;
					if (data) {
						_this2.loading = false;
						_this2.options4 = data.map(function (item) {
							return { value: item.id, label: item.name };
						});
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
				this.options4 = [];
			}
		}),

		getRequireList: function getRequireList(flag) {
			var _this3 = this;

			Object(requirement["A" /* getRequireList */])(this.status, this.page, this.searchForm).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this3.individualLists = data.data;
					_this3.total = data.total;
					_this3.pagesize = data.per_page;
					_this3.page = Number(data.current_page);
					_this3.last_page = data.last_page;
					_this3.role_id = data.role_id;
					if (flag) {
						_this3.$emit("statistic", _this3.status, data.total);
					}
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		addOrder: function addOrder() {
			//跳转到详情页
			this.$router.push({
				name: "Collect",
				params: { id: 0, status: 0 }
			});
		},
		handleEdit: function handleEdit(index, row, list) {
			//跳转到详情页
			console.log(index, row, list);
			this.$router.push({
				name: "Collect",
				params: { id: row.id, status: row.status, list: list }
			});
		},
		getCanUrgeAgents: function getCanUrgeAgents(index, row) {
			var _this4 = this;

			this.rowid = row.id;
			Object(requirement["q" /* getCanUrgeAgents */])(row.id).then(function (response) {
				console.log(response.data.data);
				_this4.remindlist = response.data.data;
				if (response.data.data && response.data.data.length > 0) {
					_this4.centerDialogVisible = true;
				} else {
					_this4.$message({
						type: "warning",
						message: "您12小时内已催办过，暂时不可操作!"
					});
				}
			});
		},
		urgeAgents: function urgeAgents() {
			var _this5 = this;

			var data = { agents: this.remindcode, re_id: this.rowid };
			console.log(data);
			Object(requirement["Q" /* urgeAgents */])(data).then(function (response) {
				if (response.data.status == 1) {
					_this5.centerDialogVisible = false;
					_this5.$message({
						type: "success",
						message: response.data.msg
					});
				} else {
					_this5.$message({
						type: "warning",
						message: response.data.msg
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		handleDetail: function handleDetail(index, row) {
			this.$router.push({
				name: "OrderDetail",
				params: { id: row.id }
			});
		},
		handleOriginDetail: function handleOriginDetail(index, row) {
			this.$router.push({
				path: row.url
			});
		},
		activeDetail: function activeDetail(index, row) {
			var _this6 = this;

			this.$confirm("你确定要激活此条需求单吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				Object(requirement["a" /* activeDetail */])(row.id).then(function (response) {
					_this6.$message({
						type: "success",
						message: "激活成功!"
					});
					_this6.getRequireList(1);
				}).catch(function (err) {
					console.log(err);
				});
			}).catch(function () {
				_this6.$message({
					type: "info",
					message: "取消激活!"
				});
			});
		},
		handleDelete: function handleDelete(index, row) {
			var _this7 = this;

			this.$confirm("你确定要删除此需求信息吗?", "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			}).then(function () {
				_this7.$message({
					type: "success",
					message: "删除成功!",
					onClose: delRequire(row.rid).then(function (response) {
						_this7.getRequireList(1);
						// queryAgentList(p => {
						//   this.agentLists = p;
						// });
					}).catch(function (err) {
						console.log(err);
					})
				});
			}).catch(function () {
				_this7.$message({
					type: "info",
					message: "已取消删除"
				});
			});
		},
		getEditorLists: function getEditorLists() {
			var _this8 = this;

			Object(requirement["t" /* getEditorLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this8.editors = data;
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
		fetchManager: function fetchManager() {
			var _this9 = this;

			Object(requirement["m" /* fetchManager */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this9.editors1 = data;
				} else {
					_this9.$message({
						message: response.data.msg,
						type: "warning"
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		getAreaLists: function getAreaLists() {
			var _this10 = this;

			Object(requirement["o" /* getAreaLists */])().then(function (response) {
				var data = response.data.data;
				if (data) {
					_this10.areas = data;
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

			this.searchForm.districtCode = "";
			Object(requirement["s" /* getDistrictLists */])(this.searchForm.areaCode).then(function (response) {
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
		createImg: function createImg(index, content) {
			this.initY = 300;
			var _ = this;
			Object(requirement["f" /* createImg */])(content.id).then(function (response) {
				var data = response;
				if (data) {
					_.drawImg(data.data.msg, function () {
						var saveHref = document.getElementById("save_href");
						var tempSrc = _.canvasHtml.toDataURL("image/png");
						saveHref.href = tempSrc;
						saveHref.download = "找房令.png";
						saveHref.click();
					});
				}
			}).catch(function (err) {
				console.log(err);
			});
		},
		drawImg: function drawImg(data, cb) {
			var _ = this;
			var type = ["求租", "出租", "买房", "卖房"];
			var ctx = this.canvasHtml.getContext("2d");
			var image = new Image();
			image.setAttribute("crossOrigin", "anonymous");
			image.src = data.img;
			image.onload = function () {
				var bg = ctx.createPattern(image, "no-repeat");
				ctx.fillStyle = bg;
				ctx.fillRect(0, 0, 653, 1044);
				ctx.font = "bold 20px Arial";
				ctx.textAlign = "center";
				ctx.textBaseline = "center";
				ctx.fillStyle = "#000";
				ctx.textAlign = "left"; //文本水平对齐方式
				data.brand && _.canvasTextAutoLine("品牌：" + data.brand, ctx, 100, 25, 40);
				data.require && _.canvasTextAutoLine("需求：" + data.require, ctx, 100, 25, 40);
				data.mianji && _.canvasTextAutoLine("面积：" + data.mianji, ctx, 100, 25, 40);
				data.price && _.canvasTextAutoLine("租金：" + data.price, ctx, 100, 25, 40);
				data.wuye_fee && _.canvasTextAutoLine("物业费：" + data.wuye_fee, ctx, 100, 25, 40);
				data.water_ele_fee && _.canvasTextAutoLine("水电费：" + data.water_ele_fee, ctx, 100, 25, 40);
				data.wuye && _.canvasTextAutoLine("物业：" + data.wuye, ctx, 100, 25, 40);
				data.address && _.canvasTextAutoLine("区位：" + data.address, ctx, 100, 25, 40);
				data.username && _.canvasTextAutoLine("联系人：" + data.username, ctx, 100, 25, 40);
				data.contact && _.canvasTextAutoLine("电话：" + data.contact, ctx, 100, 25, 40);
				cb();
			};
		},
		canvasTextAutoLine: function canvasTextAutoLine(str, ctx, initX, lineHeight1, Y, tt) {
			this.initY += 40;
			var lineWidth = 0;
			var canvasWidth = 653;
			var lastSubStrIndex = 0;
			for (var i = 0; i < str.length; i++) {
				lineWidth += ctx.measureText(str[i]).width;
				if (lineWidth > 653 - initX * 2) {
					//减去initX,防止边界出现的问题
					ctx.fillText(str.substring(lastSubStrIndex, i), initX, this.initY);
					this.initY += lineHeight1;
					lineWidth = 0;
					lastSubStrIndex = i;
				}
				if (i == str.length - 1) {
					ctx.fillText(str.substring(lastSubStrIndex, i + 1), initX, this.initY);
				}
			}
		}
	}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2d5a53a2","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/collect/components/TableList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"order-table"},[_c('canvas',{staticStyle:{"display":"none"},attrs:{"id":"canvas","width":"653","height":"1044"}}),_vm._v(" "),_c('a',{attrs:{"href":"","id":"save_href"}}),_vm._v(" "),_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.searchForm,"inline":true,"size":"small"}},[_c('el-form-item',{attrs:{"label":""}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"220px"},attrs:{"placeholder":"ID/姓名/联系方式/标题"},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"需求类型"},on:{"change":_vm.changehousetype},model:{value:(_vm.searchForm.type),callback:function ($$v) {_vm.$set(_vm.searchForm, "type", $$v)},expression:"searchForm.type"}},[_c('el-option',{attrs:{"label":"求租","value":"1"}},[_vm._v(" 求租")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出租","value":"2"}},[_vm._v(" 出租")]),_vm._v(" "),_c('el-option',{attrs:{"label":"买房","value":"3"}},[_vm._v(" 买房")]),_vm._v(" "),_c('el-option',{attrs:{"label":"卖房","value":"4"}},[_vm._v(" 卖房")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"房源类型"},model:{value:(_vm.searchForm.houseType),callback:function ($$v) {_vm.$set(_vm.searchForm, "houseType", $$v)},expression:"searchForm.houseType"}},[(_vm.searchForm.type==1||_vm.searchForm.type==2||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"商铺","value":"60"}},[_vm._v(" 商铺")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==1||_vm.searchForm.type==2||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"写字楼","value":"61"}},[_vm._v(" 写字楼")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==1||_vm.searchForm.type==2||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"住宅","value":"62"}},[_vm._v(" 住宅")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==1||_vm.searchForm.type==2||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"商业综合体","value":"65"}},[_vm._v(" 商业综合体")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==1||_vm.searchForm.type==2||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"产业园","value":"66"}},[_vm._v(" 产业园")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==1||_vm.searchForm.type==2||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"厂房仓库","value":"67"}},[_vm._v(" 厂房仓库")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==3||_vm.searchForm.type==4||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"二手房买卖","value":"70"}},[_vm._v("二手房住宅")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==3||_vm.searchForm.type==4||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"出售商铺","value":"71"}},[_vm._v("出售商铺")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==3||_vm.searchForm.type==4||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"出售写字楼","value":"72"}},[_vm._v("出售写字楼")]):_vm._e(),_vm._v(" "),(_vm.searchForm.type==3||_vm.searchForm.type==4||!_vm.searchForm.type)?_c('el-option',{attrs:{"label":"出售厂房","value":"73"}},[_vm._v("出售厂房")]):_vm._e()],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"跟进时间"},model:{value:(_vm.searchForm.noFollow),callback:function ($$v) {_vm.$set(_vm.searchForm, "noFollow", $$v)},expression:"searchForm.noFollow"}},[_c('el-option',{attrs:{"label":"一天未跟进","value":"1"}},[_vm._v(" 一天未跟进")]),_vm._v(" "),_c('el-option',{attrs:{"label":"两天未跟进","value":"2"}},[_vm._v(" 两天未跟进")]),_vm._v(" "),_c('el-option',{attrs:{"label":"三天未跟进","value":"3"}},[_vm._v(" 三天未跟进")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"评价"},model:{value:(_vm.searchForm.assess),callback:function ($$v) {_vm.$set(_vm.searchForm, "assess", $$v)},expression:"searchForm.assess"}},[_c('el-option',{attrs:{"label":"未评价","value":"0"}},[_vm._v(" 未评价")]),_vm._v(" "),_c('el-option',{attrs:{"label":"不合格","value":"1"}},[_vm._v(" 不合格")]),_vm._v(" "),_c('el-option',{attrs:{"label":"合格","value":"2"}},[_vm._v(" 合格")]),_vm._v(" "),_c('el-option',{attrs:{"label":"优秀","value":"3"}},[_vm._v(" 优秀")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"需求单分类"},model:{value:(_vm.searchForm.level),callback:function ($$v) {_vm.$set(_vm.searchForm, "level", $$v)},expression:"searchForm.level"}},[_c('el-option',{attrs:{"label":"未分级","value":"0"}},[_vm._v(" 未分级")]),_vm._v(" "),_c('el-option',{attrs:{"label":"A级客户","value":"1"}},[_vm._v(" A级客户")]),_vm._v(" "),_c('el-option',{attrs:{"label":"B级客户","value":"2"}},[_vm._v(" B级客户")]),_vm._v(" "),_c('el-option',{attrs:{"label":"C级客户","value":"3"}},[_vm._v(" C级客户")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"设备"},model:{value:(_vm.searchForm.clientType),callback:function ($$v) {_vm.$set(_vm.searchForm, "clientType", $$v)},expression:"searchForm.clientType"}},[_c('el-option',{attrs:{"label":"PC","value":"PC"}},[_vm._v(" PC")]),_vm._v(" "),_c('el-option',{attrs:{"label":"H5","value":"H5"}},[_vm._v(" H5")]),_vm._v(" "),_c('el-option',{attrs:{"label":"App","value":"App"}},[_vm._v(" App")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"来源"},model:{value:(_vm.searchForm.origin),callback:function ($$v) {_vm.$set(_vm.searchForm, "origin", $$v)},expression:"searchForm.origin"}},[_c('el-option',{attrs:{"label":"直租(委托平台)","value":"1"}},[_vm._v(" 直租(委托平台)")]),_vm._v(" "),_c('el-option',{attrs:{"label":"看房日程","value":"2"}},[_vm._v(" 看房日程")]),_vm._v(" "),_c('el-option',{attrs:{"label":"开店管理","value":"3"}},[_vm._v(" 开店管理")]),_vm._v(" "),_c('el-option',{attrs:{"label":"发布房源","value":"4"}},[_vm._v(" 发布房源")]),_vm._v(" "),_c('el-option',{attrs:{"label":"砍价单","value":"5"}},[_vm._v(" 砍价单")]),_vm._v(" "),_c('el-option',{attrs:{"label":"模拟开店","value":"6"}},[_vm._v(" 模拟开店")]),_vm._v(" "),_c('el-option',{attrs:{"label":"订制找房","value":"7"}},[_vm._v(" 订制找房")]),_vm._v(" "),_c('el-option',{attrs:{"label":"页面强制弹窗","value":"8"}},[_vm._v(" 页面强制弹窗")]),_vm._v(" "),_c('el-option',{attrs:{"label":"美洽","value":"9"}},[_vm._v(" 美洽")]),_vm._v(" "),_c('el-option',{attrs:{"label":"400电话","value":"10"}},[_vm._v(" 400电话")]),_vm._v(" "),_c('el-option',{attrs:{"label":"需求中心","value":"12"}},[_vm._v(" 需求中心")]),_vm._v(" "),_c('el-option',{attrs:{"label":"找房令","value":"13"}},[_vm._v(" 找房令")]),_vm._v(" "),_c('el-option',{attrs:{"label":"闲鱼","value":"14"}},[_vm._v(" 闲鱼")]),_vm._v(" "),_c('el-option',{attrs:{"label":"抖音","value":"15"}},[_vm._v(" 抖音")]),_vm._v(" "),_c('el-option',{attrs:{"label":"立即选址","value":"16"}},[_vm._v(" 立即选址")]),_vm._v(" "),_c('el-option',{attrs:{"label":"置换增值","value":"17"}},[_vm._v(" 置换增值")]),_vm._v(" "),_c('el-option',{attrs:{"label":"毕业季活动","value":"18"}},[_vm._v(" 毕业季活动")]),_vm._v(" "),_c('el-option',{attrs:{"label":"运营中心获客","value":"19"}},[_vm._v(" 运营中心获客")]),_vm._v(" "),_c('el-option',{attrs:{"label":"幸福里","value":"20"}},[_vm._v(" 幸福里")]),_vm._v(" "),_c('el-option',{attrs:{"label":"其他","value":"11"}},[_vm._v(" 其他")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"活动来源"},model:{value:(_vm.searchForm.activityCode),callback:function ($$v) {_vm.$set(_vm.searchForm, "activityCode", $$v)},expression:"searchForm.activityCode"}},[_c('el-option',{attrs:{"label":"刚需","value":"20"}},[_vm._v("刚需")]),_vm._v(" "),_c('el-option',{attrs:{"label":"周年庆","value":"10"}},[_vm._v("周年庆")]),_vm._v(" "),_c('el-option',{attrs:{"label":"地推活动","value":"30"}},[_vm._v("地推活动")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"区域"},on:{"change":_vm.changeArea},model:{value:(_vm.searchForm.areaCode),callback:function ($$v) {_vm.$set(_vm.searchForm, "areaCode", $$v)},expression:"searchForm.areaCode"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"街道"},model:{value:(_vm.searchForm.districtCode),callback:function ($$v) {_vm.$set(_vm.searchForm, "districtCode", $$v)},expression:"searchForm.districtCode"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"跟进方式"},model:{value:(_vm.searchForm.method),callback:function ($$v) {_vm.$set(_vm.searchForm, "method", $$v)},expression:"searchForm.method"}},[_c('el-option',{attrs:{"label":"自营","value":"0"}},[_vm._v(" 自营")]),_vm._v(" "),_c('el-option',{attrs:{"label":"合作","value":"1"}},[_vm._v(" 合作")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","filterable":"","placeholder":"编辑人"},on:{"change":function($event){_vm.getSearchOrder()}},model:{value:(_vm.searchForm.editor),callback:function ($$v) {_vm.$set(_vm.searchForm, "editor", $$v)},expression:"searchForm.editor"}},_vm._l((_vm.editors),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}},[_vm._v(" "+_vm._s(item.chinesename))])}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","filterable":"","placeholder":"跟进人"},on:{"change":function($event){_vm.getSearchOrder()}},model:{value:(_vm.searchForm.agentId),callback:function ($$v) {_vm.$set(_vm.searchForm, "agentId", $$v)},expression:"searchForm.agentId"}},_vm._l((_vm.editors),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}},[_vm._v(" "+_vm._s(item.chinesename))])}))],1),_vm._v(" "),(_vm.status==3)?_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"结束原因"},model:{value:(_vm.searchForm.fReason),callback:function ($$v) {_vm.$set(_vm.searchForm, "fReason", $$v)},expression:"searchForm.fReason"}},[_c('el-option',{attrs:{"label":"成交","value":"4"}},[_vm._v(" 成交")]),_vm._v(" "),_c('el-option',{attrs:{"label":"未成交","value":"1"}},[_vm._v(" 未成交")]),_vm._v(" "),_c('el-option',{attrs:{"label":"需求已过期","value":"2"}},[_vm._v(" 需求已过期")]),_vm._v(" "),_c('el-option',{attrs:{"label":"非真实需求","value":"3"}},[_vm._v(" 非真实需求")]),_vm._v(" "),_c('el-option',{attrs:{"label":"其他","value":"5"}},[_vm._v(" 其他")])],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"价格区间"},model:{value:(_vm.searchForm.lprice),callback:function ($$v) {_vm.$set(_vm.searchForm, "lprice", $$v)},expression:"searchForm.lprice"}}),_vm._v(" -\n\t\t\t\t"),_c('el-input',{staticClass:"keywords search-input",staticStyle:{"width":"100px"},attrs:{"placeholder":"价格区间"},model:{value:(_vm.searchForm.gprice),callback:function ($$v) {_vm.$set(_vm.searchForm, "gprice", $$v)},expression:"searchForm.gprice"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":""}},[_c('el-date-picker',{attrs:{"type":"daterange","value-format":"yyyy-MM-dd","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.timeRange),callback:function ($$v) {_vm.$set(_vm.searchForm, "timeRange", $$v)},expression:"searchForm.timeRange"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-switch',{attrs:{"active-color":"#13ce66","active-text":"去重"},on:{"change":function($event){_vm.getRequireList(1)}},model:{value:(_vm.searchForm.repeat),callback:function ($$v) {_vm.$set(_vm.searchForm, "repeat", $$v)},expression:"searchForm.repeat"}})],1),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-search","type":"primary"},on:{"click":function($event){_vm.getSearchOrder()}}},[_vm._v("搜索")]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","icon":"el-icon-edit","type":"success"},on:{"click":function($event){_vm.addOrder()}}},[_vm._v("提交需求")]),_vm._v(" "),(_vm.zhuanjiaoStatus)?_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","filterable":"","placeholder":"需求接收人"},model:{value:(_vm.editor),callback:function ($$v) {_vm.editor=$$v},expression:"editor"}},_vm._l((_vm.editors1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1):_vm._e(),_vm._v(" "),(_vm.zhuanjiaoStatus)?_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.makeAllocation()}}},[_vm._v("确认转交")]):_vm._e(),_vm._v(" "),(_vm.role_id == 8)?_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){_vm.publicPool()}}},[_vm._v("打回公共池")]):_vm._e(),_vm._v(" "),_c('el-button',{staticStyle:{"float":"right"},attrs:{"size":"small","icon":"el-icon-refresh","type":"warning"},on:{"click":_vm.refresh}},[_vm._v("刷新")])],1),_vm._v(" "),_c('el-table',{staticClass:"individual-tab",attrs:{"data":_vm.individualLists},on:{"selection-change":_vm.handleSelectionChange,"sort-change":_vm.handleSortChange}},[_c('el-table-column',{attrs:{"type":"selection","width":"55"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"id","label":"需求单ID"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"username","label":"客户姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"contact","label":"联系方式"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"origin","label":"需求来源"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',[_vm._v(_vm._s(_vm.origins[scope.row.origin])),(scope.row.line&&scope.row.line==2)?_c('span',[_vm._v("(线下)")]):_vm._e()])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"houseType","label":"房源类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',[(scope.row.type==1||scope.row.type==2)?_c('span',{staticClass:"icon-type-blue"},[_vm._v("租")]):_vm._e(),_vm._v(" "),(scope.row.type==3)?_c('span',{staticClass:"icon-type-orange"},[_vm._v("买")]):_vm._e(),_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.houseTypes[scope.row.houseType])+"\n\t\t\t\t\t")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"","label":"价格"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',[_vm._v(_vm._s(scope.row.lprice)+"-"+_vm._s(scope.row.gprice))])]}}])}),_vm._v(" "),(_vm.status==2)?_c('el-table-column',{attrs:{"prop":"reHouse","label":"推送房源","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-badge',{staticClass:"item",staticStyle:{"height":"50px","margin-top":"10px"},attrs:{"value":scope.row.reHouse,"max":99}},[_c('el-button',{attrs:{"size":"small"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row,1)}}},[_vm._v("查看")])],1)]}}])}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaName","label":"区域"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',[_vm._v(_vm._s(scope.row.areaName)+"-"+_vm._s(scope.row.districtName))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"sortable":"custom","prop":"createTime","label":"提交时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"sortable":"custom","prop":"updateTime","label":"更新时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaName","label":"历史需求单"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('p',[_vm._v(_vm._s(scope.row.hasHistory?'是':''))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"follow_time","label":"上次跟进时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"agentName","label":"跟进人"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作","width":"360"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==3)?_c('el-button',{attrs:{"icon":"el-icon-view","type":"primary","size":"mini"},on:{"click":function($event){_vm.handleDetail(scope.$index, scope.row)}}},[_vm._v("详情")]):_vm._e(),_vm._v(" "),(scope.row.status==3)?_c('el-button',{attrs:{"icon":"el-icon-refresh","type":"danger","size":"mini"},on:{"click":function($event){_vm.activeDetail(scope.$index, scope.row)}}},[_vm._v("激活")]):_c('el-button',{attrs:{"size":"mini","icon":"el-icon-edit","type":"warning"},on:{"click":function($event){_vm.handleEdit(scope.$index, scope.row,2)}}},[_vm._v("编辑")]),_vm._v(" "),(scope.row.url)?_c('el-button',{attrs:{"type":"success","size":"mini"},on:{"click":function($event){_vm.handleOriginDetail(scope.$index, scope.row)}}},[_vm._v("原数据")]):_vm._e(),_vm._v(" "),(scope.row.canUrge)?_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":function($event){_vm.getCanUrgeAgents(scope.$index, scope.row)}}},[_vm._v("催办")]):_vm._e(),_vm._v(" "),(scope.row.status==1||scope.row.status==2)?_c('el-button',{attrs:{"icon":"el-icon-view","type":"primary","size":"mini"},on:{"click":function($event){_vm.createImg(scope.$index, scope.row)}}},[_vm._v("生成图片")]):_vm._e()]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"请选择催单人员","visible":_vm.centerDialogVisible,"width":"30%","center":""},on:{"update:visible":function($event){_vm.centerDialogVisible=$event}}},[_c('el-checkbox-group',{model:{value:(_vm.remindcode),callback:function ($$v) {_vm.remindcode=$$v},expression:"remindcode"}},_vm._l((_vm.remindlist),function(item){return _c('el-checkbox',{key:item.agent_name,attrs:{"label":item.agent_id}},[_vm._v(_vm._s(item.agent_name))])})),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.centerDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.urgeAgents}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_TableList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/collect/components/TableList.vue
function injectStyle (ssrContext) {
  __webpack_require__("XbkC")
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
  TableList,
  components_TableList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var collect_components_TableList = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/collect/Individual.vue
//
//
//
//
//
//
//
//
//
//






var tabs = ["全部需求单", "公共需求池", "已核实需求", "跟进中需求", "已结束需求"];
/* harmony default export */ var Individual = ({
	name: 'Individual',
	components: {
		Refresh: Refresh["a" /* default */],
		TableList: collect_components_TableList
	},
	data: function data() {
		return {
			tabs: [],
			tab: 0,
			activeName: '',
			individualLists: [],
			total: 0,
			pagesize: 0,
			page: 1,
			last_page: 1,
			searchForm: {}, //搜索框数据
			agentLists: [],
			pickerOptions2: common["a" /* publicData */].pickerOptions2,
			role_id: 0,
			multipleSelection: []
		};
	},

	created: function created() {
		this.getOrderCount();
	},
	methods: {
		handleClick: function handleClick(tab, event) {
			this.tab = tab.index;
		},
		statisticOrder: function statisticOrder(index, total) {
			this.tabs[index + 1] = this.tabs[index + 1].replace(/[0-9]+/ig, total);
			this.activeName = this.tabs[index + 1].replace(/[0-9]+/ig, total);
		},
		getOrderCount: function getOrderCount() {
			var _this = this;

			Object(requirement["v" /* getOrderCount */])({ from: 'require' }).then(function (response) {
				var data = response.data.data;
				if (data) {
					_this.tabs = tabs.map(function (item, index) {
						return item + ' [' + data[index - 1] + ']';
					});
					_this.activeName = _this.tabs[_this.$route.query.tab] || _this.tabs[0];
				} else {
					_this.$message({
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d4ff1be4","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/collect/Individual.vue
var Individual_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tabs',{staticStyle:{"padding":"20px"},attrs:{"type":"card"},on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.tabs),function(item,index){return _c('el-tab-pane',{key:index,attrs:{"label":item,"name":item}},[(_vm.activeName==item)?_c('table-list',{attrs:{"status":index-1},on:{"statistic":_vm.statisticOrder}}):_vm._e()],1)}))],1)}
var Individual_staticRenderFns = []
var Individual_esExports = { render: Individual_render, staticRenderFns: Individual_staticRenderFns }
/* harmony default export */ var collect_Individual = (Individual_esExports);
// CONCATENATED MODULE: ./src/views/912hf/collect/Individual.vue
var Individual_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Individual___vue_template_functional__ = false
/* styles */
var Individual___vue_styles__ = null
/* scopeId */
var Individual___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Individual___vue_module_identifier__ = null
var Individual_Component = Individual_normalizeComponent(
  Individual,
  collect_Individual,
  Individual___vue_template_functional__,
  Individual___vue_styles__,
  Individual___vue_scopeId__,
  Individual___vue_module_identifier__
)

/* harmony default export */ var _12hf_collect_Individual = __webpack_exports__["default"] = (Individual_Component.exports);


/***/ }),

/***/ "QNkk":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.icon-type-blue {\n  padding: 2px;\n  border-radius: 4px;\n  color: #fff;\n  background: #409df8;\n}\n.icon-type-orange {\n  padding: 2px;\n  border-radius: 4px;\n  color: #fff;\n  background: #f19637;\n}\n", ""]);

// exports


/***/ }),

/***/ "XbkC":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("QNkk");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("76c6950f", content, true);

/***/ })

});
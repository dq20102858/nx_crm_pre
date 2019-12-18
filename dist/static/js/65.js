webpackJsonp([65],{

/***/ "9MaL":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("sj0C");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("db20537c", content, true);

/***/ }),

/***/ "Y71f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// EXTERNAL MODULE: ./src/api/users/index.js
var users = __webpack_require__("5KiG");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/collect/Collect.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import { processList } from "@/api/requirement/index";

/* harmony default export */ var Collect = ({
  name: "Collect",
  data: function data() {
    return {
      ruleForm: {
        overtimeFlag: '',
        contentRmark: '',
        isNew: '',
        lmianji: '',
        gmianji: '',
        unitType: '1',
        id: this.$route.params.id || 0,
        contact: "", //联系方式
        username: "", //客户姓名
        userId: '',
        assess: '',
        level: '',
        gender: 1, //客户性别1：男，2：女
        origin: "", //需求来源1:直租(委托平台)，2:看房日程，3:开店管理，4:发布房源，5:砍价单，6:模拟开店，7:订制单，8:强制弹窗，9:美洽，10:400电话，11其它
        isReal: "", //真实性1：真实，2：不真实,3：无法核实
        type: "", //需求类型，枚举值待定
        next: "", //下一步处理方式 1：转交业务部，2需求不真实
        remark: "", //结束具体原因
        group: "林渺凡", //下一步执行组
        isActivity: "", //是否参加活动0否，1是
        isReward: "", //奖励是否发放1是，0否
        houseType: null, //60商铺，61写字楼，62住宅
        houseType2: null, //60商铺，61写字楼，62住宅
        lprice: "", //价格范围的低价
        gprice: "", //价格范围的高价
        location: "", //具体地址
        title: "", //需求标题或简介
        agentId: null, //跟进业务人员id
        method: "", //跟进方式,0：自营，1：合作
        cooperater: [], //合作人
        cooperaterIds: [], //合作人Id
        cooperaterSelect: [],
        cooperaterName: [], //合作人
        fReason: "", //1已完成需求单；2需求已过期；3非真实需求
        status: String(this.$route.params.status) || 0,
        houseId: "",
        activityId: "",
        areaCode: "",
        districtCode: "",
        source: "",
        agentIds: '', //合作人id
        exclusive: 2, //独享状态 0：未独享,1：独享中，2普通接单(公共单)
        retainAgentId: '', //独享人id,
        retainAgentName: '',
        retainDay: 0, //延长保留时间
        divideBase: '',
        divideProportion: '',
        dealAgentId: '',
        wuye: '',
        wuyeFee: '',
        brand: '',
        waterEleFee: '',
        isLeader: 0,
        recheck_flag: false,
        callback_time: '',
        rentType: null,
        room: null,
        ting: null,
        wei: null,
        zhuanrangFee: 2,
        businessFormat: [],
        otherRequirement: null,
        peitao: [],
        shopType: [],
        leaseYear: '',
        intentionFloor: '',
        need: ''
      },
      recordform: {
        re_id: '',
        agent_id: '',
        type: '',
        house_type: '',
        house_id: '',
        look_time: '',
        remark: '',
        img: ''
      },
      businessFormat: null,
      peitao: null,
      shopType: null,
      pickerOptions0: {
        disabledDate: function disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e7就是不可以选择今天的 
        }
      },
      rules: {
        origin: [{
          required: true,
          message: "请选择需求来源",
          trigger: "blur"
        }],
        contact: [{
          required: true,
          message: "请输入客人联系方式",
          trigger: "blur"
        }, {
          pattern: /^[1][0-9]{10}|([0-9]{3,4}-)?[0-9]{7,8}$/,
          message: "请输入正确的联系方式！"
        }],
        isReal: [{ required: true, message: "请选择真实性", trigger: "blur" }],
        next: [{
          required: true,
          message: "请选择处理方式",
          trigger: "blur"
        }],
        group: [{
          required: true,
          message: "请输入指派对象",
          trigger: "blur"
        }],
        title: [{
          required: true,
          message: "请输入简单描述",
          trigger: "blur"
        }],
        divideProportion: [{
          required: true,
          message: "请输入分成比例",
          trigger: "blur"
        }, {
          pattern: /^((\d|[123456789]\d)(\.\d{1,2})?)$/,
          message: "分成比例要在0到100之间,支持两位小数"
        }],
        divideBase: [{
          required: true,
          message: "请输入分成基数",
          trigger: "blur"
        }],
        status: [{
          required: true,
          message: "请选择跟进状态",
          trigger: "blur"
        }],
        agentId: [{ required: true, message: "请选择跟进人", trigger: "blur" }],
        method: [{
          required: true,
          message: "请选择跟进方式",
          trigger: "blur"
        }],
        cooperaterName: [{
          required: true,
          message: "请选择合作方联系人",
          trigger: "blur"
        }],
        cooperater: [{
          required: true,
          message: "请选择合作方联系人",
          trigger: "blur"
        }],
        fReason: [{
          required: true,
          message: "请选择结束原因",
          trigger: "blur"
        }],
        remark: [{
          required: true,
          message: "请备注未成交原因",
          trigger: "blur"
        }],
        activityId: [{
          required: true,
          message: "请选择活动项目",
          trigger: "blur"
        }],
        type: [{
          required: true,
          message: "请选择需求类型",
          trigger: "blur"
        }]
      },
      bigimg: false,
      dialogImageUrl: '',
      host: "http://" + location.host,
      // host: "http://boss.912zufang.com",
      types: ['', '求租', '出租', '求购', '出售'],
      checkedallparteners: false,
      key: '',
      centerDialogVisible: false,
      recordDialog: false,
      remindlist: [],
      remindcode: [],
      value1: '2018-11-07',
      parteners: [],
      parteners1: [],
      relationOrders: [],
      areas: [],
      districts: [],
      searchtype: 0,
      areaSearchShow: 0,
      areas1: [],
      areas1Code: '',
      districts1: [],
      seelogTotal: 0,
      seepagesize: 0,
      seelogPage: 1,
      districts1Code: '',
      activities: [],
      remarkList: [],
      assessLog: [],
      agents: [],
      agentId: [],
      agentName: [],
      loading: false,
      isShow: false,
      show_user_agent: false,
      area_name: "",
      address: "",
      activeNames: ["1", "2"],
      has_phone: true, //表示需要输入手机号
      user_id: Object(auth["e" /* getUserId */])(),
      from: this.$route.params.from ? this.$route.params.from : "",
      routeStatus: this.$route.params.status,
      tempRoute: {},
      gridData: [],
      housePush: 0,
      userLike: 0,
      getMeetingHouseLists: [],
      seelogs: [],
      getMeetingHouseListsPage: 0,
      currentPage2: 1,
      getMeetingHouseListsShow: 1,
      activeName2: 'getMeetingHouseList-1',
      getRecHouseLists: [],
      getRecHouseListsPage: 0,
      getRecHouseListsShow: 0,
      currentPage1: 1,
      activeName1: 'getRecHouseList-0',
      dialogTableVisible: false,
      houseTypes: { 60: "商铺", 61: "写字楼", 62: "住宅", 65: "商业综合体", 66: "产业园", 67: "厂房仓库" },
      origins: ["", "直租(委托平台)", "看房日程", "开店管理", "发布房源", "砍价单", "模拟开店", "订制找房", "强制弹窗", "美洽", "400电话", "其它", "需求中心"],
      options: [{
        value: -1,
        label: '未审核'
      }, {
        value: 1,
        label: '合格'
      }, {
        value: 0,
        label: '不合格'
      }],
      retainDayoptions: [{
        value: 0,
        label: '请选择延长保留时间'
      }, {
        value: 1,
        label: '一天'
      }, {
        value: 2,
        label: '二天'
      }, {
        value: 3,
        label: '三天'
      }, {
        value: 4,
        label: '四天'
      }, {
        value: 5,
        label: '五天'
      }, {
        value: 6,
        label: '六天'
      }, {
        value: 7,
        label: '七天'
      }],
      exclusiveDayoptions: [{
        value: 0,
        label: '等待独享'
      }, {
        value: 1,
        label: '正在独享',
        disabled: true
      }, {
        value: 2,
        label: '关闭独享（公共需求)'
      }],
      options2: [{
        value: 2,
        label: '否'
      }, {
        value: 3,
        label: '是'
      }, {
        value: 4,
        label: '用户取消需求'
      }],
      shenheStatusValue: {
        id: [],
        status: []
      }
    };
  },

  created: function created() {
    this.requireConfig();
    this.fetchActivity();
    this.getAreaLists();
    if (this.$route.params.id > 0) {
      this.getOrderDetail(this.$route.params.id);
      this.tempRoute = assign_default()({}, this.$route);
      this.getSeeLogs();
    }
    if (this.$route.params.status == 2) {
      this.getRecHouseList();
      this.getMeetingHouseList();
    }
    if (this.$route.params.list == 1) {
      this.housePush = 1;
    }
  },
  mounted: function mounted() {
    if (this.$route.params.list == 1) {
      this.$nextTick(function () {
        var _this = this;

        setTimeout(function () {
          _this.custormAnchor('aaaaa');
        }, 1000);
      });
    }
  },

  // watch: {
  // 	'$route' (to, from) {
  // 		this.globalEvBus.$emit('reload');
  // 	}
  // },
  methods: {
    handleEdit: function handleEdit(id, status, list) {
      //跳转到详情页
      this.submitForm('ruleForm', 1);
    },
    editlog: function editlog(id) {
      var _this2 = this;

      Object(requirement["C" /* getSeeLogDetail */])(id).then(function (response) {
        _this2.recordDialog = true;
        _this2.recordform.re_id = response.data.data.re_id;
        _this2.recordform.agent_id = response.data.data.agent_id;
        _this2.recordform.type = Number(response.data.data.type);
        _this2.recordform.house_type = Number(response.data.data.house_type);
        _this2.recordform.house_id = response.data.data.house_id;
        _this2.recordform.look_time = response.data.data.look_time;
        _this2.recordform.remark = response.data.data.remark;
        _this2.recordform.img = response.data.data.img;
        _this2.recordform.id = response.data.data.id;
        _this2.agents = [];
        _this2.agents.push({ value: response.data.data.agent_id, label: response.data.data.agent_name });
      });
    },
    deletelog: function deletelog(id) {
      var _this3 = this;

      Object(requirement["i" /* delSeeLog */])(id).then(function (response) {
        if (response.data.status == 1) {
          _this3.$message.success('删除成功!');
          _this3.getSeeLogs();
        }
      });
    },
    requireConfig: function requireConfig() {
      var _this4 = this;

      Object(requirement["L" /* requireConfig */])().then(function (response) {
        _this4.businessFormat = response.data.data.business_format;
        _this4.shopType = response.data.data.shop_type;
        _this4.peitao = response.data.data.peitao;
      });
    },
    showbigimg: function showbigimg(src) {
      this.dialogImageUrl = src;
      this.bigimg = true;
    },
    handleseelogChange: function handleseelogChange(val) {
      this.seelogPage = Number(val);
      this.getSeeLogs();
    },
    getSeeLogs: function getSeeLogs() {
      var _this5 = this;

      Object(requirement["D" /* getSeeLogs */])(this.ruleForm.id, this.seelogPage).then(function (response) {
        _this5.seelogs = response.data.data.data;
        _this5.seepagesize = Number(response.data.data.per_page);
        _this5.seelogTotal = Number(response.data.data.total);
      });
    },
    addSeeLog: function addSeeLog() {
      var _this6 = this;

      if (!this.recordform.type) {
        this.$message.error('请选择租售类型!');
        return;
      }
      if (!this.recordform.house_type) {
        this.$message.error('请选择房源类型!');
        return;
      }
      if (!this.recordform.agent_id) {
        this.$message.error('请选择带看人!');
        return;
      }
      if (!this.recordform.look_time) {
        this.$message.error('请填写带看时间!');
        return;
      }
      if (!this.recordform.house_id) {
        this.$message.error('请填写房源ID!');
        return;
      }
      if (!this.recordform.img) {
        this.$message.error('请上传带看单图片!');
        return;
      }
      if (!this.recordform.remark) {
        this.$message.error('请填写备注!');
        return;
      }
      this.recordform.re_id = this.ruleForm.id;
      if (this.recordform.id) {
        Object(requirement["k" /* editSeeLog */])(this.recordform).then(function (response) {
          if (response.data.status == 1) {
            _this6.recordDialog = false;
            _this6.$message.success('编辑成功!');
            _this6.getSeeLogs();
            _this6.recordform.re_id = '';
            _this6.recordform.agent_id = '';
            _this6.recordform.type = '';
            _this6.recordform.house_type = '';
            _this6.recordform.house_id = '';
            _this6.recordform.look_time = '';
            _this6.recordform.remark = '';
            _this6.recordform.img = '';
            _this6.recordform.id = '';
          }
        });
      } else {
        Object(requirement["b" /* addSeeLog */])(this.recordform).then(function (response) {
          if (response.data.status == 1) {
            _this6.recordDialog = false;
            _this6.$message.success('添加成功!');
            _this6.getSeeLogs();
            _this6.recordform.re_id = '';
            _this6.recordform.agent_id = '';
            _this6.recordform.type = '';
            _this6.recordform.house_type = '';
            _this6.recordform.house_id = '';
            _this6.recordform.look_time = '';
            _this6.recordform.remark = '';
            _this6.recordform.img = '';
            _this6.recordform.id = '';
          }
        });
      }
    },
    changehouse_type: function changehouse_type() {
      if (this.recordform.house_type && this.recordform.house_id) {
        this.checkHouseId();
      }
    },
    checkhouseNo: function checkhouseNo() {
      if (this.recordform.house_type && this.recordform.house_id) {
        this.checkHouseId();
      }
    },
    checkHouseId: function checkHouseId() {
      var _this7 = this;

      Object(requirement["c" /* checkHouseId */])(this.recordform.house_id, this.recordform.house_type).then(function (response) {
        if (response.data.status == 0) {
          _this7.recordform.house_id = '';
        }
      });
    },
    handleAvatarSuccess: function handleAvatarSuccess(res, file) {
      this.recordform.img = res.data.show_url;
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      var isLt2M = file.size / 1024 / 1024 < 10;
      if (!isJPG) {
        this.$message.error('图片格式不正确请重新上传!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 10MB!');
      }
      return isJPG && isLt2M;
    },
    getCanUrgeAgents: function getCanUrgeAgents() {
      var _this8 = this;

      Object(requirement["q" /* getCanUrgeAgents */])(this.ruleForm.id).then(function (response) {
        _this8.remindlist = response.data.data;
        if (response.data.data && response.data.data.length > 0) {
          _this8.centerDialogVisible = true;
        } else {
          _this8.$message({
            type: "warning",
            message: "您12小时内已催办过，暂时不可操作!"
          });
        }
      });
    },
    addrecord: function addrecord() {
      this.addSeeLog();
    },
    urgeAgents: function urgeAgents() {
      var _this9 = this;

      var data = { agents: this.remindcode, re_id: this.ruleForm.id };
      Object(requirement["Q" /* urgeAgents */])(data).then(function (response) {
        if (response.data.status == 1) {
          _this9.centerDialogVisible = false;
          _this9.$message({
            type: "success",
            message: response.data.msg
          });
        } else {
          _this9.$message({
            type: "warning",
            message: response.data.msg
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    changeDuxiangStatus: function changeDuxiangStatus(val) {
      if (val != 1) {
        this.ruleForm.retainAgentId = '';
        this.ruleForm.retainAgentName = '';
      }
    },
    custormAnchor: function custormAnchor(anchorName) {
      // 找到锚点
      var anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        var total = anchorElement.offsetTop; //定位锚点
        //开始滚动
        // Chrome
        document.documentElement.scrollTop = total + 500;
        // Firefox
        // document.documentElement.scrollTop = total
        // Safari
        // window.pageYOffset = total
      }
    },
    removeTag: function removeTag(num, val) {
      var _this10 = this;

      if (num == 1) {
        Object(requirement["E" /* hasAgentOrder */])(this.$route.params.id, val).then(function (result) {
          if (result.data.status == 1) {
            _this10.$confirm('这个用户的房源客户很感兴趣，删除后不可恢复, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(function () {
              Object(requirement["g" /* delAgentOrder */])(_this10.$route.params.id, val).then(function (result) {
                _this10.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              });
              for (var i = 0; i < _this10.ruleForm.cooperaterName.length; i++) {
                if (val == _this10.ruleForm.cooperaterName[i].value) {
                  _this10.key = i;
                }
              }
              if (_this10.key >= 0) {
                _this10.ruleForm.cooperaterName.splice(_this10.key, 1);
                _this10.key = '';
              }
            }).catch(function () {
              _this10.$message({
                type: 'info',
                message: '已取消删除'
              });
            });
          } else {
            Object(requirement["g" /* delAgentOrder */])(_this10.$route.params.id, val).then(function (result) {
              _this10.$message({
                type: 'success',
                message: '删除成功!'
              });
            });
            for (var i = 0; i < _this10.ruleForm.cooperaterName.length; i++) {
              if (val == _this10.ruleForm.cooperaterName[i].value) {
                _this10.key = i;
              }
            }
            if (_this10.key >= 0) {
              _this10.ruleForm.cooperaterName.splice(_this10.key, 1);
              _this10.key = '';
            }
          }
        });
      }
    },
    changecor: function changecor(val) {
      if (val.length >= 1) {
        var flag = this.ruleForm.cooperaterName.some(function (item) {
          return item.value == val[val.length - 1];
        });
        if (!flag) {
          this.ruleForm.cooperaterName.push(this.parteners.find(function (item) {
            //这里的userList就是上面遍历的数据源
            return item.value == val[val.length - 1]; //筛选出匹配数据
          }));
        }
      }
    },
    changeAreaSearchCor: function changeAreaSearchCor(value, label) {
      var flag = this.ruleForm.cooperaterName.some(function (item) {
        return item.value == value;
      });
      if (!flag) {
        this.ruleForm.cooperaterName.push({ value: value, label: label });
      }
    },
    checkoutHouseStatus: function checkoutHouseStatus() {
      var _this11 = this;

      if (this.shenheStatusValue.id.length == 0) {
        this.$message({
          message: '尚未修改任何信息,请至少修改一条之后再推送',
          type: 'warning'
        });
      } else {
        var data = { id: this.shenheStatusValue.id.join(','), status: this.shenheStatusValue.status.join(',') };
        Object(requirement["e" /* checkoutHouse */])(data).then(function (response) {
          _this11.currentPage1 = 1;
          _this11.activeName1 = 'getRecHouseList-1';
          _this11.getRecHouseListsShow = 1;
          _this11.getRecHouseList();
        });
      }
    },
    getShenheStatus: function getShenheStatus(index) {
      if (this.shenheStatusValue.id.indexOf(this.getRecHouseLists[index].id) > -1) {
        if (this.getRecHouseLists[index].is_pass != -1) {
          this.shenheStatusValue.status.splice(this.shenheStatusValue.id.indexOf(this.getRecHouseLists[index].id), 1, this.getRecHouseLists[index].is_pass);
        } else {
          this.shenheStatusValue.status.splice(this.shenheStatusValue.id.indexOf(this.getRecHouseLists[index].id), 1);
          this.shenheStatusValue.id.splice(this.shenheStatusValue.id.indexOf(this.getRecHouseLists[index].id), 1);
        }
      } else {
        if (this.getRecHouseLists[index].is_pass != -1) {
          this.shenheStatusValue.id.push(this.getRecHouseLists[index].id);
          this.shenheStatusValue.status.push(this.getRecHouseLists[index].is_pass);
        }
      }
    },
    changeTime: function changeTime(value, index) {
      this.getMeetingHouseLists[index].order_time = value;
    },
    changeHousePush: function changeHousePush() {
      this.housePush = this.housePush ? 0 : 1;
    },
    changeUserLike: function changeUserLike() {
      this.userLike = this.userLike ? 0 : 1;
    },
    checkTime: function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
    submitHouse: function submitHouse(index) {
      var _this12 = this;

      if (this.getMeetingHouseLists[index].order_time) {
        var date = new Date(this.getMeetingHouseLists[index].order_time);
        var date_value = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + this.checkTime(date.getHours()) + ':' + this.checkTime(date.getMinutes()) + ':' + this.checkTime(date.getSeconds());
        //最后显示yyyy-MM-dd hh:mm:ss  
        var data = { id: this.getMeetingHouseLists[index].id, status: this.getMeetingHouseLists[index].status == 1 ? '2' : this.getMeetingHouseLists[index].status, 'order_time': date_value };
        Object(requirement["d" /* checkSeePlan */])(data).then(function (response) {
          if (response.data.status == 1) {
            _this12.$message({
              message: '编辑成功',
              type: 'success'
            });
            _this12.getMeetingHouseList();
          }
        });
      } else {
        this.$message({
          message: '请先选择时间',
          type: 'warn'
        });
      }
    },
    handleClick: function handleClick(tab, event) {
      if (tab.name.split('-')[0] == 'getRecHouseList') {
        this.currentPage1 = 1;
        this.getRecHouseList();
        this.getRecHouseListsShow = parseInt(this.activeName1.split('-')[1]);
        if (parseInt(this.activeName1.split('-')[1]) == 0) {
          this.options = [{
            value: -1,
            label: '未审核'
          }, {
            value: 1,
            label: '合格'
          }, {
            value: 0,
            label: '不合格'
          }];
        } else {
          this.options = [{
            value: 1,
            label: '合格'
          }, {
            value: 0,
            label: '不合格'
          }];
        }
      } else {
        this.currentPage2 = 1;
        this.getMeetingHouseList();
        this.getMeetingHouseListsShow = parseInt(this.activeName2.split('-')[1]);
      }
    },
    changehousetype: function changehousetype() {
      this.ruleForm.houseType = '';
    },
    changerecordhousetype: function changerecordhousetype() {
      this.recordform.house_type = '';
    },
    handleCurrentChange1: function handleCurrentChange1(val) {
      this.currentPage1 = Number(val);
      this.getRecHouseList();
    },
    getRecHouseList: function getRecHouseList() {
      var _this13 = this;

      Object(requirement["z" /* getRecHouseLists */])(this.currentPage1, this.activeName1.split('-')[1], this.ruleForm.id).then(function (response) {
        if (response.data.data) {
          _this13.shenheStatusValue.id.splice(0);
          _this13.shenheStatusValue.status.splice(0);
          _this13.getRecHouseLists = response.data.data.data;
          _this13.getRecHouseListsPage = response.data.data.total;
        }
      });
    },
    matchuser: function matchuser() {
      var _this14 = this;

      Object(requirement["F" /* matchUser */])(this.ruleForm.mobile, this.ruleForm.id).then(function (response) {
        if (response.data.data) {
          if (response.data.status) {
            _this14.$message({
              message: '匹配成功',
              type: 'success'
            });
            _this14.ruleForm.userId = response.data.data.user_id;
            _this14.ruleForm.username = response.data.data.username;
            _this14.ruleForm.isNew = response.data.data.isNew;
          }
        }
      });
    },
    handleCurrentChange2: function handleCurrentChange2(val) {
      this.currentPage2 = Number(val);
      this.getMeetingHouseList();
    },
    getMeetingHouseList: function getMeetingHouseList() {
      var _this15 = this;

      if (this.activeName2.split('-')[1] == 1) {
        var status = 1;
      } else {
        var status = '2,3,4';
      }
      Object(requirement["u" /* getMeetingHouseLists */])(this.currentPage2, status, this.ruleForm.id).then(function (response) {
        if (response.data.data) {
          _this15.getMeetingHouseLists = response.data.data.data;
          _this15.getMeetingHouseListsPage = response.data.data.total;
          _this15.getMeetingHouseLists.map(function (item) {
            if (item.order_time) {
              var arr1 = item.order_time.split(' ')[0].split('-');
              var arr2 = item.order_time.split(' ')[1].split(':');
              item.order_time = new Date(parseInt(arr1[0]), parseInt(arr1[1]) - 1, parseInt(arr1[2]), parseInt(arr2[0]), parseInt(arr2[1]), parseInt(arr2[2]));
            }
          });
        }
      });
    },
    getRelationOrder: function getRelationOrder(phone) {
      var _this16 = this;

      Object(requirement["A" /* getRequireList */])(-1, 1, { keyword: phone }).then(function (response) {
        if (response.data.data && response.data.data.data && response.data.data.data.length > 0) {
          _this16.relationOrders = response.data.data.data;
        }
      });
    },
    serchRelationOrder: function serchRelationOrder() {
      var _this17 = this;

      this.gridData = [];
      this.dialogTableVisible = false;
      if (this.ruleForm.contact.trim() != "") {
        Object(requirement["A" /* getRequireList */])(-1, 1, { keyword: this.ruleForm.contact }).then(function (response) {
          if (response.data.data && response.data.data.data && response.data.data.data.length > 0) {
            _this17.gridData = response.data.data.data;
            _this17.dialogTableVisible = true;
          }
        });
      }
    },
    remoteMethod: function remoteMethod(query) {
      var _this18 = this;

      if (query !== "") {
        this.loading = true;
        setTimeout(function () {
          _this18.loading = false;
          _this18.agents = _this18.list.filter(function (item) {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.agents = [];
      }
    },
    getOrderDetail: function getOrderDetail(id) {
      var _this19 = this;

      Object(requirement["w" /* getOrderDetail */])(id).then(function (response) {
        var data = response.data.data;

        data.houseId = data.houseId ? String(data.houseId) : "";
        data.type = data.type ? String(data.type) : "";
        data.origin = String(data.origin);
        data.isReal = data.isReal ? String(data.isReal) : "";
        data.isActivity = String(data.isActivity);
        data.isReward = String(data.isReward);
        data.status = String(data.status);
        data.method = String(data.method);
        data.fReason = data.fReason ? String(data.fReason) : "";
        data.next = data.next ? String(data.next) : "";
        _this19.remarkList = data.remarkList;
        _this19.assessLog = data.assessLog;
        data.activityId = data.activityId ? data.activityId : "";
        data.areaCode = data.areaCode ? data.areaCode : "";
        data.districtCode = data.districtCode ? data.districtCode : "";
        data.remarkList = null;

        if (data.agentId != 0) {
          // this.agents = [
          // 	{ value: data.agentId, label: data.agentName }
          // ];
          _this19.agentId = data.agentId.toString().split(",");
          _this19.agentName = data.agentName.split(",");
          for (var i = 0; i < _this19.agentId.length; i++) {
            _this19.agents.push({ value: _this19.agentId[i], label: _this19.agentName[i] });
          }
        } else {
          data.agentId = [];
        }
        if (data.cooperater != "") {
          data.cooperater = data.cooperater.split(",");
          data.cooperaterIds = data.cooperaterIds.split(",");
          for (var i = 0; i < data.cooperaterIds.length; i++) {
            _this19.ruleForm.cooperaterName.push({ value: data.cooperaterIds[i], label: data.cooperater[i] });
          }
          _this19.parteners = data.cooperater.map(function (item) {
            return { value: item.name, label: item.name };
          });
          _this19.parteners1 = data.cooperater.map(function (item) {
            return { value: item.name, label: item.name };
          });
        } else {
          data.parteners = [];
        }
        _this19.ruleForm = assign_default()(_this19.ruleForm, data);
        _this19.ruleForm.exclusive = parseInt(data.exclusive);
        _this19.ruleForm.retainDay = parseInt(data.retainDay);
        _this19.ruleForm.retainAgentId = parseInt(data.retainAgentId);
        _this19.ruleForm.retainAgentName = data.retainAgentName;
        if (!!_this19.ruleForm.contact.trim()) {
          _this19.getRelationOrder(_this19.ruleForm.contact.trim());
        }
        _this19.setTagsViewTitle();
        if (_this19.ruleForm.areaCode) {
          Object(requirement["s" /* getDistrictLists */])(_this19.ruleForm.areaCode).then(function (response) {
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
        }
        _this19.ruleForm.unitType = data.unitType.toString();
      }).catch(function (err) {
        console.log(err);
      });
    },
    getDetailInfo: function getDetailInfo() {
      var _this20 = this;

      Object(users["c" /* detailUser */])(this.user_id).then(function (response) {
        var data = response.data;
        if (data.id) {
          _this20.ruleForm.name = response.data.name;
          _this20.ruleForm.gender = 0;
          _this20.ruleForm.gender = response.data.gender;
          _this20.ruleForm.zhuanrangFee = response.data.zhuanrangFee;
          _this20.ruleForm.contact_phone = response.data.contact_phone;
          _this20.ruleForm.user_agent_id = response.data.agent_id;
          _this20.ruleForm.user_agent = response.data.agent_name;
          _this20.ruleForm.remark = response.data.remark;
          if (response.data.agent_id) {
            _this20.show_user_agent = true;
          }
          _this20.has_phone = false;
        } else {
          _this20.ruleForm.gender = 0;
          _this20.ruleForm.zhuanrangFee = 2;
          _this20.ruleForm.user_agent_id = 0;
          _this20.ruleForm.user_agent = "";
        }
      }).catch(function (err) {
        console.log(err);
      });
    },

    /**
     * 提交表单
     *
     */
    submitForm: function submitForm(formName, type) {
      var _this21 = this;

      this.ruleForm.agentId = this.agentId.join(',');
      this.ruleForm.agentName = this.agentName.join(',');
      if (this.ruleForm.method == 1 && this.ruleForm.isReal == 1 && this.ruleForm.type != 1 && this.ruleForm.type != 3) {
        this.ruleForm.cooperaterIds = '';
        if (this.ruleForm.cooperater.length > 0) {
          this.ruleForm.cooperater = this.ruleForm.cooperater.join(',');
        }
      }
      if (this.ruleForm.method == 1 && this.ruleForm.isReal == 1 && (this.ruleForm.type == 1 || this.ruleForm.type == 3)) {
        if (this.ruleForm.cooperaterName.length > 0) {
          this.ruleForm.cooperater = [];
          this.ruleForm.cooperaterIds = [];
          this.ruleForm.cooperaterName.map(function (item) {
            _this21.ruleForm.cooperater.push(item.label);
            _this21.ruleForm.cooperaterIds.push(item.value);
          });
          if (this.ruleForm.cooperater.length > 0) {
            this.ruleForm.cooperaterIds = this.ruleForm.cooperaterIds.join(',');
            this.ruleForm.cooperater = this.ruleForm.cooperater.join(',');
          }
        }
      }
      if (this.ruleForm.isReal == 2) {
        this.ruleForm.recheck_flag = this.ruleForm.recheck_flag ? 1 : 0;
        this.editOrAddOrder(type);
      } else {
        this.$refs[formName].validate(function (valid) {
          if (valid) {
            if (Number(_this21.ruleForm.lprice) > Number(_this21.ruleForm.gprice) || Number(_this21.ruleForm.lprice) < 0 || Number(_this21.ruleForm.gprice) < 0) {
              _this21.open4();
              return false;
            }
            if (Number(_this21.ruleForm.lmianji) > Number(_this21.ruleForm.gmianji) || Number(_this21.ruleForm.lmianji) < 0 || Number(_this21.ruleForm.gmianji) < 0) {
              _this21.openArea();
              return false;
            }
            _this21.ruleForm.recheck_flag = _this21.ruleForm.recheck_flag ? 1 : 0;
            _this21.editOrAddOrder(type);
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    },
    editOrAddOrder: function editOrAddOrder(type) {
      var _this22 = this;

      if (this.ruleForm.id != 0 && this.ruleForm.id) {
        Object(requirement["j" /* editOrder */])(this.ruleForm).then(function (response) {
          if (response.data.status) {
            _this22.$notify({
              title: "成功",
              message: "编辑成功",
              type: "success",
              duration: 2000
            });
            if (type == 1) {
              _this22.$router.push({
                name: "Collect",
                params: { id: _this22.ruleForm.nextId, status: _this22.ruleForm.status, list: 2 }
              });
            } else {
              if (_this22.ruleForm.status != 2 || _this22.$route.params.status == 1 || _this22.ruleForm.isNew == 0) {
                setTimeout(function () {
                  _this22.$store.dispatch("delView", _this22.$route);
                  _this22.$router.go(-1);
                }, 500);
              }
            }
          } else {
            _this22.$message({
              type: "error",
              message: response.data.msg
            });
          }
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        Object(requirement["O" /* saveOrder */])(this.ruleForm).then(function (response) {
          if (response.data.status) {
            _this22.$notify({
              title: "成功",
              message: "提交成功",
              type: "success",
              duration: 2000
            });
            setTimeout(function () {
              _this22.$store.dispatch("delView", _this22.$route);
              _this22.$router.go(-1);
            }, 500);
          } else {
            _this22.$message({
              type: "error",
              message: response.data.msg
            });
          }
        }).catch(function (err) {
          console.log(err);
        });
      }
    },
    open4: function open4() {
      this.$message.error("请输入正确的价格范围");
    },
    openArea: function openArea() {
      this.$message.error("请输入正确的面积范围");
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
    fetchManager: function fetchManager(query) {
      var _this23 = this;

      if (query !== "") {
        this.loading = true;
        Object(requirement["m" /* fetchManager */])(query).then(function (response) {
          var data = response.data.data;
          if (data) {
            _this23.loading = false;
            _this23.agents = data.map(function (item) {
              return { value: item.id, label: item.name };
            });
          } else {
            _this23.$message({
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
    fetchPartener: function fetchPartener(query) {
      var that = this;
      if (query !== "") {
        that.loading = true;
        if (that.searchtype == 1) {
          var params = {
            'keyword': query,
            'type': that.ruleForm.type,
            'house_type': that.ruleForm.houseType,
            'area_info': that.ruleForm.areaInfo,
            'area_code': that.ruleForm.areaCode,
            'district_code': that.ruleForm.districtCode
          };
        } else {
          var params = {
            'keyword': query

          };
        }
        Object(requirement["n" /* fetchPartener */])(params).then(function (response) {
          var data = response.data.data;
          if (data) {
            that.loading = false;
            that.parteners = data.map(function (item) {
              return { value: item.user_id, label: item.real_name, mobile: item.mobile, area_name: item.area_name, distinct_name: item.distinct_name };
            });
          } else {
            that.$message({
              message: response.data.msg,
              type: "warning"
            });
          }
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        that.agents = [];
      }
      that.checkedallparteners = false;
    },
    searchExtension: function searchExtension(query) {
      var _this24 = this;

      if (query !== "") {
        this.loading = true;
        Object(requirement["P" /* searchExtension */])(query).then(function (response) {
          var data = response.data.data;
          if (data) {
            _this24.loading = false;
            _this24.parteners1 = data.map(function (item, index) {
              return { value: item.name, label: item.name };
            });
          } else {
            _this24.$message({
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
    fetchActivity: function fetchActivity(query) {
      var _this25 = this;

      Object(requirement["l" /* fetchActivity */])(query).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this25.loading = false;
          _this25.activities = data;
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
    setTagsViewTitle: function setTagsViewTitle() {
      var title = "编辑需求单";
      var route = assign_default()({}, this.tempRoute, {
        title: title + "-" + this.ruleForm.id
      });
      this.$store.dispatch("updateVisitedView", route);
    },
    getAreaLists: function getAreaLists() {
      var _this26 = this;

      Object(requirement["o" /* getAreaLists */])().then(function (response) {
        var data = response.data.data;
        if (data) {
          _this26.areas = data;
          _this26.areas1 = data;
          _this26.areas1Code = _this26.areas1[0].code;
        } else {
          _this26.$message({
            message: response.data.msg,
            type: "warning"
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },

    areaSearch: function areaSearch(type1) {
      var that = this;
      if (that.searchtype == type1) {
        if (that.areaSearchShow) {
          that.areaSearchShow = 0;
        } else {
          that.areaSearchShow = 1;
          that.areas1.map(function (item) {
            if (item.code == that.areas1Code) {
              that.fetchPartener(item.name);
            }
          });
          that.changeDistrictLists(that.areas1Code);
        }
      } else {
        that.searchtype = type1;
        that.areaSearchShow = 1;
        that.areas1.map(function (item) {
          if (item.code == that.areas1Code) {
            that.fetchPartener(item.name);
          }
        });
        that.changeDistrictLists(that.areas1Code);
      }
    },
    changeparteners: function changeparteners(val) {
      var that = this;
      if (val) {
        that.parteners.map(function (item) {
          that.changeAreaSearchCor(item.value, item.label);
        });
      } else {
        that.parteners.map(function (item) {
          that.ruleForm.cooperaterName.map(function (item1, index) {
            if (item1.value == item.value) {
              that.ruleForm.cooperaterName.splice(index, 1);
            }
          });
        });
      }
    },
    hideAreaSearch: function hideAreaSearch() {
      this.areaSearchShow = 0;
    },
    changeAreaSearch: function changeAreaSearch(value, name) {
      this.changeDistrictLists();
      this.fetchPartener(name);
    },
    changeDistrictsSearch: function changeDistrictsSearch(value, name) {
      var that = this;
      if (value == 0) {
        that.areas1.map(function (item) {
          if (item.code == that.areas1Code) {
            that.fetchPartener(item.name);
          }
        });
      } else {
        that.districts1.map(function (item) {
          if (item.code == that.districts1Code) {
            that.fetchPartener(item.name);
          }
        });
      }
    },
    changeDistrictLists: function changeDistrictLists() {
      var _this27 = this;

      Object(requirement["s" /* getDistrictLists */])(this.areas1Code).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this27.districts1 = data;
          _this27.districts1Code = _this27.districts1[0].code;
        } else {
          _this27.$message({
            message: response.data.msg,
            type: "warning"
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    changeArea: function changeArea() {
      var _this28 = this;

      this.ruleForm.districtCode = "";
      Object(requirement["s" /* getDistrictLists */])(this.ruleForm.areaCode).then(function (response) {
        var data = response.data.data;
        if (data) {
          _this28.districts = data;
        } else {
          _this28.$message({
            message: response.data.msg,
            type: "warning"
          });
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    activeOriginDetail: function activeOriginDetail(url) {
      this.$router.push({
        path: url
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-57eda22f","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/collect/Collect.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"collect-form"},[_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":14}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"20%","id":"consult-form","size":"small"}},[_c('el-form-item',{attrs:{"label":"需求单ID"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","readonly":""},model:{value:(_vm.ruleForm.id),callback:function ($$v) {_vm.$set(_vm.ruleForm, "id", $$v)},expression:"ruleForm.id"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客户名称","prop":"username"}},[_c('el-input',{staticClass:"name",attrs:{"maxlength":"30","placeholder":"请输入客人称呼"},model:{value:(_vm.ruleForm.username),callback:function ($$v) {_vm.$set(_vm.ruleForm, "username", $$v)},expression:"ruleForm.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"客户性别"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.gender),callback:function ($$v) {_vm.$set(_vm.ruleForm, "gender", $$v)},expression:"ruleForm.gender"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("男")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("女")])],1)],1),_vm._v(" "),(_vm.ruleForm.isLeader && _vm.ruleForm.status!=0)?_c('el-form-item',{attrs:{"label":"评价"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.assess),callback:function ($$v) {_vm.$set(_vm.ruleForm, "assess", $$v)},expression:"ruleForm.assess"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("暂不评价")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("不合格")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("合格")])],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.isLeader && _vm.ruleForm.assess==1 && _vm.ruleForm.status!=0)?_c('el-form-item',{attrs:{"label":"责任人"}},[_c('el-select',{staticClass:"search-input search-select activity-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"责任人"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.perInCharge),callback:function ($$v) {_vm.$set(_vm.ruleForm, "perInCharge", $$v)},expression:"ruleForm.perInCharge"}},_vm._l((_vm.ruleForm.editors),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.isLeader && _vm.ruleForm.assess==1 && _vm.ruleForm.status!=0)?_c('el-form-item',{attrs:{"label":"不合格理由"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入不合格理由","maxlength":"255"},model:{value:(_vm.ruleForm.unquReason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "unquReason", $$v)},expression:"ruleForm.unquReason"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求单分类"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.level),callback:function ($$v) {_vm.$set(_vm.ruleForm, "level", $$v)},expression:"ruleForm.level"}},[_c('el-radio',{attrs:{"border":"","label":0,"value":"0"}},[_vm._v("暂无")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("A级客户")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("B级客户")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":3,"value":"3"}},[_vm._v("C级客户")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"联系方式"}},[_c('el-input',{style:(_vm.ruleForm.userId==0&&(_vm.ruleForm.type==1||_vm.ruleForm.type==3)&&_vm.ruleForm.contact?'width:400px;':''),attrs:{"suffix-icon":"el-icon-phone","placeholder":"请输入客人联系电话（会自动关联并展示是否已经提过需求单）","maxlength":"30"},on:{"blur":_vm.serchRelationOrder},model:{value:(_vm.ruleForm.contact),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contact", $$v)},expression:"ruleForm.contact"}}),_vm._v(" "),(_vm.ruleForm.userId==0&&(_vm.ruleForm.type==1||_vm.ruleForm.type==3)&&_vm.ruleForm.contact)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-refresh"},on:{"click":_vm.matchuser}},[_vm._v("匹配用户")]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogTableVisible),expression:"dialogTableVisible"}],staticClass:"relation-table",attrs:{"title":"已提交过咨询需求单"}},[_c('el-table',{attrs:{"max-height":"250","border":"","size":"mini","data":_vm.gridData}},[_c('el-table-column',{attrs:{"prop":"origin","label":"需求来源"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t\t\t\t\t\t\t\t\t\t"+_vm._s(_vm.origins[scope.row.origin])+"\n\t\t\t\t\t\t\t\t\t")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"houseType","label":"房源类型"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t\t\t\t\t\t\t\t\t\t"+_vm._s(_vm.houseTypes[scope.row.houseType])+"\n\t\t\t\t\t\t\t\t\t")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"","label":"价格"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t\t\t\t\t\t\t\t\t\t"+_vm._s(scope.row.lprice)+"-"+_vm._s(scope.row.gprice)+"\n\t\t\t\t\t\t\t\t\t")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"areaName","label":"区域"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t\t\t\t\t\t\t\t\t\t"+_vm._s(scope.row.areaName)+"-"+_vm._s(scope.row.districtName)+"\n\t\t\t\t\t\t\t\t\t")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"houseId","label":"房源编号"}})],1)],1)],1),_vm._v(" "),(_vm.ruleForm.status!=0&&_vm.ruleForm.id)?_c('el-form-item',{attrs:{"label":"需求单创建时间"}},[_c('el-input',{attrs:{"readonly":""},model:{value:(_vm.ruleForm.createTime),callback:function ($$v) {_vm.$set(_vm.ruleForm, "createTime", $$v)},expression:"ruleForm.createTime"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求类型","prop":"type"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择需求类型"},on:{"change":_vm.changehousetype},model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-option',{attrs:{"label":"求租","value":"1"}},[_vm._v(" 求租")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出租","value":"2"}},[_vm._v(" 出租")]),_vm._v(" "),_c('el-option',{attrs:{"label":"求购","value":"3"}},[_vm._v(" 求购")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出售","value":"4"}},[_vm._v(" 出售")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求来源","prop":"origin"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择需求来源"},model:{value:(_vm.ruleForm.origin),callback:function ($$v) {_vm.$set(_vm.ruleForm, "origin", $$v)},expression:"ruleForm.origin"}},[_c('el-option',{attrs:{"label":"直租(委托平台)","value":"1"}},[_vm._v(" 直租(委托平台)")]),_vm._v(" "),_c('el-option',{attrs:{"label":"看房日程","value":"2"}},[_vm._v(" 看房日程")]),_vm._v(" "),_c('el-option',{attrs:{"label":"开店管理","value":"3"}},[_vm._v(" 开店管理")]),_vm._v(" "),_c('el-option',{attrs:{"label":"发布房源","value":"4"}},[_vm._v(" 发布房源")]),_vm._v(" "),_c('el-option',{attrs:{"label":"砍价单","value":"5"}},[_vm._v(" 砍价单")]),_vm._v(" "),_c('el-option',{attrs:{"label":"模拟开店","value":"6"}},[_vm._v(" 模拟开店")]),_vm._v(" "),_c('el-option',{attrs:{"label":"订制找房","value":"7"}},[_vm._v(" 订制找房")]),_vm._v(" "),_c('el-option',{attrs:{"label":"页面强制弹窗","value":"8"}},[_vm._v(" 页面强制弹窗")]),_vm._v(" "),_c('el-option',{attrs:{"label":"美洽","value":"9"}},[_vm._v(" 美洽")]),_vm._v(" "),_c('el-option',{attrs:{"label":"400电话","value":"10"}},[_vm._v(" 400电话")]),_vm._v(" "),_c('el-option',{attrs:{"label":"需求中心","value":"12"}},[_vm._v(" 需求中心")]),_vm._v(" "),_c('el-option',{attrs:{"label":"找房令","value":"13"}},[_vm._v(" 找房令")]),_vm._v(" "),_c('el-option',{attrs:{"label":"闲鱼","value":"14"}},[_vm._v(" 闲鱼")]),_vm._v(" "),_c('el-option',{attrs:{"label":"抖音","value":"15"}},[_vm._v(" 抖音")]),_vm._v(" "),_c('el-option',{attrs:{"label":"立即选址","value":"16"}},[_vm._v(" 立即选址")]),_vm._v(" "),_c('el-option',{attrs:{"label":"置换增值","value":"17"}},[_vm._v(" 置换增值")]),_vm._v(" "),_c('el-option',{attrs:{"label":"毕业季活动","value":"18"}},[_vm._v(" 毕业季活动")]),_vm._v(" "),_c('el-option',{attrs:{"label":"运营中心获客","value":"19"}},[_vm._v(" 运营中心获客")]),_vm._v(" "),_c('el-option',{attrs:{"label":"幸福里","value":"20"}},[_vm._v(" 幸福里")]),_vm._v(" "),_c('el-option',{attrs:{"label":"其他","value":"11"}},[_vm._v(" 其他")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源编号"}},[_c('el-input',{attrs:{"placeholder":"输入客人有意向的房源id","maxlength":"10"},model:{value:(_vm.ruleForm.houseId),callback:function ($$v) {_vm.$set(_vm.ruleForm, "houseId", $$v)},expression:"ruleForm.houseId"}}),_vm._v(" "),(_vm.ruleForm.house_id)?_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.fetchHouse()}}},[_vm._v("确定")]):_vm._e(),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],attrs:{"type":"primary"},on:{"click":function($event){_vm.cancelRequire()}}},[_vm._v("取消")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源类型","prop":"houseType"}},[_c('el-select',{attrs:{"placeholder":"请选择房源类型"},model:{value:(_vm.ruleForm.houseType),callback:function ($$v) {_vm.$set(_vm.ruleForm, "houseType", $$v)},expression:"ruleForm.houseType"}},[(_vm.ruleForm.type==1||_vm.ruleForm.type==2||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"商铺","value":60}},[_vm._v("商铺")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==1||_vm.ruleForm.type==2||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"写字楼","value":61}},[_vm._v("写字楼")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==1||_vm.ruleForm.type==2||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"住宅","value":62}},[_vm._v("住宅")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==1||_vm.ruleForm.type==2||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"商业综合体","value":65}},[_vm._v("商业综合体")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==1||_vm.ruleForm.type==2||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"产业园","value":66}},[_vm._v("产业园")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==1||_vm.ruleForm.type==2||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"厂房仓库","value":67}},[_vm._v("厂房仓库")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==3||_vm.ruleForm.type==4||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"二手房买卖","value":70}},[_vm._v("二手房住宅")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==3||_vm.ruleForm.type==4||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"出售商铺","value":71}},[_vm._v("出售商铺")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==3||_vm.ruleForm.type==4||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"出售写字楼","value":72}},[_vm._v("出售写字楼")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.type==3||_vm.ruleForm.type==4||!_vm.ruleForm.type)?_c('el-option',{attrs:{"border":"","label":"出售厂房","value":73}},[_vm._v("出售厂房")]):_vm._e()],1)],1),_vm._v(" "),(_vm.ruleForm.origin==17)?_c('el-form-item',{attrs:{"label":"我要换","prop":"houseType2"}},[_c('el-select',{attrs:{"placeholder":"请选择房源类型"},model:{value:(_vm.ruleForm.houseType2),callback:function ($$v) {_vm.$set(_vm.ruleForm, "houseType2", $$v)},expression:"ruleForm.houseType2"}},[_c('el-option',{attrs:{"border":"","label":"商铺","value":60}},[_vm._v("商铺")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"写字楼","value":61}},[_vm._v("写字楼")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"住宅","value":62}},[_vm._v("住宅")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"商业综合体","value":65}},[_vm._v("商业综合体")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"产业园","value":66}},[_vm._v("产业园")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"厂房仓库","value":67}},[_vm._v("厂房仓库")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"二手房买卖","value":70}},[_vm._v("二手房住宅")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"出售商铺","value":71}},[_vm._v("出售商铺")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"出售写字楼","value":72}},[_vm._v("出售写字楼")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"出售厂房","value":73}},[_vm._v("出售厂房")])],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"期望价格范围"}},[_c('el-input',{staticClass:"price_range",model:{value:(_vm.ruleForm.lprice),callback:function ($$v) {_vm.$set(_vm.ruleForm, "lprice", $$v)},expression:"ruleForm.lprice"}}),_vm._v(" "),_c('span',[_vm._v(" - ")]),_vm._v(" "),_c('el-input',{staticClass:"price_range",model:{value:(_vm.ruleForm.gprice),callback:function ($$v) {_vm.$set(_vm.ruleForm, "gprice", $$v)},expression:"ruleForm.gprice"}}),_vm._v(" "),_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"140px"},attrs:{"placeholder":"请选择价格单位"},model:{value:(_vm.ruleForm.unitType),callback:function ($$v) {_vm.$set(_vm.ruleForm, "unitType", $$v)},expression:"ruleForm.unitType"}},[_c('el-option',{attrs:{"label":"元/月","value":"1"}},[_vm._v(" 元/月")]),_vm._v(" "),_c('el-option',{attrs:{"label":"元/平米/天","value":"2"}},[_vm._v(" 元/平米/天")]),_vm._v(" "),_c('el-option',{attrs:{"label":"万元","value":"3"}},[_vm._v(" 万元")]),_vm._v(" "),_c('el-option',{attrs:{"label":"元/平米","value":"4"}},[_vm._v(" 元/平米")])],1)],1),_vm._v(" "),(_vm.ruleForm.type==1&&_vm.ruleForm.houseType==62)?_c('el-form-item',{attrs:{"label":"求租类型"}},[_c('el-select',{staticStyle:{"width":"140px"},attrs:{"placeholder":"请选择租房类型"},model:{value:(_vm.ruleForm.rentType),callback:function ($$v) {_vm.$set(_vm.ruleForm, "rentType", $$v)},expression:"ruleForm.rentType"}},[_c('el-option',{attrs:{"border":"","label":"不限","value":0}},[_vm._v("不限")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"整租","value":1}},[_vm._v("整租")]),_vm._v(" "),_c('el-option',{attrs:{"border":"","label":"合租","value":2}},[_vm._v("合租")])],1),_vm._v(" "),_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"1","placeholder":""},model:{value:(_vm.ruleForm.room),callback:function ($$v) {_vm.$set(_vm.ruleForm, "room", $$v)},expression:"ruleForm.room"}}),_vm._v(" 室\n                        "),_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"1","placeholder":""},model:{value:(_vm.ruleForm.ting),callback:function ($$v) {_vm.$set(_vm.ruleForm, "ting", $$v)},expression:"ruleForm.ting"}}),_vm._v(" 厅\n                        "),_c('el-input',{staticClass:"name",staticStyle:{"width":"80px"},attrs:{"type":"number","maxlength":"1","placeholder":""},model:{value:(_vm.ruleForm.wei),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wei", $$v)},expression:"ruleForm.wei"}}),_vm._v(" 卫\n\t\t\t\t\t")],1):_c('el-form-item',{attrs:{"label":"期望面积范围"}},[_c('el-input',{staticClass:"price_range",model:{value:(_vm.ruleForm.lmianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "lmianji", $$v)},expression:"ruleForm.lmianji"}}),_vm._v(" "),_c('span',[_vm._v(" - ")]),_vm._v(" "),_c('el-input',{staticClass:"price_range",model:{value:(_vm.ruleForm.gmianji),callback:function ($$v) {_vm.$set(_vm.ruleForm, "gmianji", $$v)},expression:"ruleForm.gmianji"}}),_vm._v("\n                        平方米\n\t\t\t\t\t")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房源区域"}},[_c('el-col',{staticStyle:{"width":"214px"},attrs:{"span":12}},[_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select activity-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"房源区域"},on:{"change":_vm.changeArea},model:{value:(_vm.ruleForm.areaCode),callback:function ($$v) {_vm.$set(_vm.ruleForm, "areaCode", $$v)},expression:"ruleForm.areaCode"}},_vm._l((_vm.areas),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"214px"},attrs:{"span":12}},[_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select activity-select",staticStyle:{"width":"140px"},attrs:{"clearable":"","placeholder":"房源街道"},model:{value:(_vm.ruleForm.districtCode),callback:function ($$v) {_vm.$set(_vm.ruleForm, "districtCode", $$v)},expression:"ruleForm.districtCode"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.code,attrs:{"label":item.name,"value":item.code}},[_vm._v(" "+_vm._s(item.name))])}))],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细地址"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入地理位置","maxlength":"255"},model:{value:(_vm.ruleForm.location),callback:function ($$v) {_vm.$set(_vm.ruleForm, "location", $$v)},expression:"ruleForm.location"}})],1),_vm._v(" "),(_vm.ruleForm.subwayInfo&&_vm.ruleForm.subwayInfo.length>0)?_c('el-form-item',{attrs:{"label":"地铁信息"}},_vm._l((_vm.ruleForm.subwayInfo),function(item){return _c('el-tag',{key:item.sub,attrs:{"type":"success"}},[_vm._v(_vm._s(item.main)+"-"+_vm._s(item.sub))])})):_vm._e(),_vm._v(" "),(_vm.ruleForm.areaInfo&&_vm.ruleForm.areaInfo.length>0)?_c('el-form-item',{attrs:{"label":"区域信息"}},_vm._l((_vm.ruleForm.areaInfo),function(item){return _c('el-tag',{key:item.sub,attrs:{"type":"warning"}},[_vm._v(_vm._s(item.main)+"-"+_vm._s(item.sub))])})):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"品牌"}},[_c('el-input',{attrs:{"placeholder":"请输入品牌"},model:{value:(_vm.ruleForm.brand),callback:function ($$v) {_vm.$set(_vm.ruleForm, "brand", $$v)},expression:"ruleForm.brand"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业费"}},[_c('el-input',{attrs:{"placeholder":"请输入物业费"},model:{value:(_vm.ruleForm.wuyeFee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuyeFee", $$v)},expression:"ruleForm.wuyeFee"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"水电费"}},[_c('el-input',{attrs:{"placeholder":"请输入水电费"},model:{value:(_vm.ruleForm.waterEleFee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "waterEleFee", $$v)},expression:"ruleForm.waterEleFee"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"物业"}},[_c('el-input',{attrs:{"placeholder":"请输入物业"},model:{value:(_vm.ruleForm.wuye),callback:function ($$v) {_vm.$set(_vm.ruleForm, "wuye", $$v)},expression:"ruleForm.wuye"}})],1),_vm._v(" "),(_vm.ruleForm.type==1&&_vm.ruleForm.houseType==60)?_c('div',[_c('el-form-item',{attrs:{"label":"转让费"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.zhuanrangFee),callback:function ($$v) {_vm.$set(_vm.ruleForm, "zhuanrangFee", $$v)},expression:"ruleForm.zhuanrangFee"}},[_c('el-radio',{attrs:{"border":"","label":1,"value":"1"}},[_vm._v("接受")]),_vm._v(" "),_c('el-radio',{attrs:{"border":"","label":2,"value":"2"}},[_vm._v("不接受")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"经营业态"}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择经营业态"},model:{value:(_vm.ruleForm.businessFormat),callback:function ($$v) {_vm.$set(_vm.ruleForm, "businessFormat", $$v)},expression:"ruleForm.businessFormat"}},_vm._l((_vm.businessFormat),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"租约年限"}},[_c('el-input',{attrs:{"placeholder":"请输入租约年限"},model:{value:(_vm.ruleForm.leaseYear),callback:function ($$v) {_vm.$set(_vm.ruleForm, "leaseYear", $$v)},expression:"ruleForm.leaseYear"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"办证需要"}},[_c('el-input',{attrs:{"placeholder":"请输入办证需要"},model:{value:(_vm.ruleForm.need),callback:function ($$v) {_vm.$set(_vm.ruleForm, "need", $$v)},expression:"ruleForm.need"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"意向楼层"}},[_c('el-input',{attrs:{"placeholder":"请输入办证需要"},model:{value:(_vm.ruleForm.intentionFloor),callback:function ($$v) {_vm.$set(_vm.ruleForm, "intentionFloor", $$v)},expression:"ruleForm.intentionFloor"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"其他要求"}},[_c('el-input',{attrs:{"placeholder":"请输入其他要求"},model:{value:(_vm.ruleForm.otherRequirement),callback:function ($$v) {_vm.$set(_vm.ruleForm, "otherRequirement", $$v)},expression:"ruleForm.otherRequirement"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"意向商铺类型"}},[_c('el-select',{attrs:{"multiple":"","placeholder":"请选择意向商铺类型"},model:{value:(_vm.ruleForm.shopType),callback:function ($$v) {_vm.$set(_vm.ruleForm, "shopType", $$v)},expression:"ruleForm.shopType"}},_vm._l((_vm.shopType),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.name,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"需求硬件配套"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.peitao),callback:function ($$v) {_vm.$set(_vm.ruleForm, "peitao", $$v)},expression:"ruleForm.peitao"}},_vm._l((_vm.peitao),function(item){return _c('el-checkbox',{key:item.name,attrs:{"name":item.name,"label":item.id}},[_vm._v(_vm._s(item.name))])}))],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简单描述","prop":"title"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"255字以内简短描述","maxlength":"255"},model:{value:(_vm.ruleForm.title),callback:function ($$v) {_vm.$set(_vm.ruleForm, "title", $$v)},expression:"ruleForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"真实性","prop":"isReal"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择真实性"},model:{value:(_vm.ruleForm.isReal),callback:function ($$v) {_vm.$set(_vm.ruleForm, "isReal", $$v)},expression:"ruleForm.isReal"}},[_c('el-option',{attrs:{"label":"真实","value":"1"}},[_vm._v(" 真实")]),_vm._v(" "),_c('el-option',{attrs:{"label":"不真实","value":"2"}},[_vm._v(" 不真实")]),_vm._v(" "),_c('el-option',{attrs:{"label":"无法核实真实性","value":"3"}},[_vm._v(" 无法核实真实性，交由下一步审核")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"推广渠道"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择推广渠道"},model:{value:(_vm.ruleForm.source),callback:function ($$v) {_vm.$set(_vm.ruleForm, "source", $$v)},expression:"ruleForm.source"}},[_c('el-option',{attrs:{"label":"360","value":"360"}},[_vm._v(" 360")]),_vm._v(" "),_c('el-option',{attrs:{"label":"baidu","value":"baidu"}},[_vm._v(" baidu")])],1)],1),_vm._v(" "),(_vm.ruleForm.status==0)?_c('div',[_c('el-form-item',{attrs:{"prop":"next","label":"处理方式"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择处理方式"},model:{value:(_vm.ruleForm.next),callback:function ($$v) {_vm.$set(_vm.ruleForm, "next", $$v)},expression:"ruleForm.next"}},[_c('el-option',{attrs:{"label":"暂不处理","value":"1"}},[_vm._v(" 暂不处理")]),_vm._v(" "),_c('el-option',{attrs:{"label":"转交其他部门","value":"2"}},[_vm._v(" 转交其他部门")]),_vm._v(" "),_c('el-option',{attrs:{"label":"自行处理","value":"4"}},[_vm._v(" 自行处理")]),_vm._v(" "),_c('el-option',{attrs:{"label":"关闭","value":"3"}},[_vm._v(" 关闭")])],1)],1),_vm._v(" "),(_vm.ruleForm.next==3)?_c('el-form-item',{attrs:{"label":"结束原因备注"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"结束原因备注","maxlength":"255"},model:{value:(_vm.ruleForm.remark),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remark", $$v)},expression:"ruleForm.remark"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"参与活动"}},[_c('el-col',{staticStyle:{"width":"214px"},attrs:{"span":12}},[_c('el-form-item',[_c('el-select',{staticClass:"search-input search-select activity-select",attrs:{"clearable":"","placeholder":"请选择参与活动"},model:{value:(_vm.ruleForm.isActivity),callback:function ($$v) {_vm.$set(_vm.ruleForm, "isActivity", $$v)},expression:"ruleForm.isActivity"}},[_c('el-option',{attrs:{"label":"是","value":"1"}},[_vm._v(" 是")]),_vm._v(" "),_c('el-option',{attrs:{"label":"否","value":"0"}},[_vm._v(" 否")])],1)],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"width":"214px"},attrs:{"span":12}},[(_vm.ruleForm.isActivity==1)?_c('el-form-item',{attrs:{"prop":_vm.ruleForm.isActivity==1?'activityId':''}},[_c('el-select',{staticClass:"search-input search-select activity-select",attrs:{"clearable":"","placeholder":"请选择活动"},model:{value:(_vm.ruleForm.activityId),callback:function ($$v) {_vm.$set(_vm.ruleForm, "activityId", $$v)},expression:"ruleForm.activityId"}},_vm._l((_vm.activities),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}},[_vm._v(" "+_vm._s(item.name))])}))],1):_vm._e()],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"奖励发放状态"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择奖励发放状态"},model:{value:(_vm.ruleForm.isReward),callback:function ($$v) {_vm.$set(_vm.ruleForm, "isReward", $$v)},expression:"ruleForm.isReward"}},[_c('el-option',{attrs:{"label":"未发放","value":"0"}},[_vm._v(" 未发放")]),_vm._v(" "),_c('el-option',{attrs:{"label":"已发放","value":"1"}},[_vm._v(" 已发放")])],1)],1)],1):_vm._e(),_vm._v(" "),_c('div',[(_vm.ruleForm.status!=0)?_c('el-form-item',{attrs:{"prop":"status","label":"跟进状态"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"placeholder":"请选择"},model:{value:(_vm.ruleForm.status),callback:function ($$v) {_vm.$set(_vm.ruleForm, "status", $$v)},expression:"ruleForm.status"}},[_c('el-option',{attrs:{"label":"未跟进","value":"1"}},[_vm._v(" 未跟进")]),_vm._v(" "),_c('el-option',{attrs:{"label":"已跟进","value":"2"}},[_vm._v(" 已跟进")]),_vm._v(" "),_c('el-option',{attrs:{"label":"关闭","value":"3"}},[_vm._v(" 关闭")])],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{key:'agt'+_vm.ruleForm.status,attrs:{"prop":_vm.ruleForm.isReal!=2&&_vm.ruleForm.next==2?'agentId':'',"label":"跟进人"}},[_c('el-select',{style:(_vm.ruleForm.canUrge?'width:400px;':''),attrs:{"multiple":"","filterable":"","remote":"","placeholder":"请输入跟进人名称","remote-method":_vm.fetchManager,"loading":_vm.loading},model:{value:(_vm.agentId),callback:function ($$v) {_vm.agentId=$$v},expression:"agentId"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),(_vm.ruleForm.canUrge)?_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.getCanUrgeAgents}},[_vm._v("催办")]):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"跟进方式"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择跟进方式"},model:{value:(_vm.ruleForm.method),callback:function ($$v) {_vm.$set(_vm.ruleForm, "method", $$v)},expression:"ruleForm.method"}},[_c('el-option',{attrs:{"label":"自营","value":"0"}},[_vm._v(" 自营")]),_vm._v(" "),_c('el-option',{attrs:{"label":"合作","value":"1"}},[_vm._v(" 合作")])],1)],1),_vm._v(" "),(_vm.ruleForm.method==1&&_vm.ruleForm.isReal==1)?_c('div',[(_vm.ruleForm.type==1||_vm.ruleForm.type==3)?_c('el-form-item',{key:'coop'+_vm.ruleForm.status,attrs:{"label":"合作方联系人","prop":_vm.ruleForm.method==1?'cooperaterName':''}},[(_vm.ruleForm.cooperaterName.length>0)?_c('div',{staticStyle:{"max-height":"100px","overflow":"auto"}},_vm._l((_vm.ruleForm.cooperaterName),function(item){return _c('el-tag',{key:item.value,staticStyle:{"margin-left":"10px"},attrs:{"size":"small","closable":item.value==_vm.ruleForm.retainAgentId?false:true,"label":item.label,"value":item.value},on:{"close":function($event){_vm.removeTag(1,item.value)}}},[_vm._v(_vm._s(item.label))])})):_c('div',[_c('el-tag',{attrs:{"size":"small"}},[_vm._v("请选择合作方联系人")])],1)]):_c('el-form-item',{key:'cprt'+_vm.ruleForm.status,attrs:{"label":"合作方联系人","prop":_vm.ruleForm.method==1?'cooperater':''}},[_c('el-select',{attrs:{"multiple":"","filterable":"","remote":"","placeholder":"请输入合作方联系人","remote-method":_vm.searchExtension,"loading":_vm.loading},model:{value:(_vm.ruleForm.cooperater),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cooperater", $$v)},expression:"ruleForm.cooperater"}},_vm._l((_vm.parteners1),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),(_vm.ruleForm.type==1||_vm.ruleForm.type==3)?_c('el-form-item',{attrs:{"label":""}},[_c('el-select',{staticStyle:{"padding-right":"230px"},attrs:{"multiple":"","reserve-keyword":"","filterable":"","remote":"","placeholder":"请输入姓名联系方式等模糊搜索","remote-method":_vm.fetchPartener,"loading":_vm.loading},on:{"change":_vm.changecor,"focus":_vm.hideAreaSearch,"remove-tag":_vm.removeTag},model:{value:(_vm.ruleForm.cooperaterSelect),callback:function ($$v) {_vm.$set(_vm.ruleForm, "cooperaterSelect", $$v)},expression:"ruleForm.cooperaterSelect"}},_vm._l((_vm.parteners),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('el-button',{staticClass:"locationBtn",attrs:{"type":"primary","icon":"el-icon-location-outline"},on:{"click":function($event){_vm.areaSearch("0")}}},[_vm._v("按地区搜索")]),_vm._v(" "),_c('el-button',{staticClass:"locationBtn1",attrs:{"type":"warning"},on:{"click":function($event){_vm.areaSearch("1")}}},[_vm._v("匹配合作人")]),_vm._v(" "),(_vm.areaSearchShow)?_c('el-card',{staticClass:"box-card areaSearch",staticStyle:{"margin-top":"10px"}},[_c('div',{staticClass:"borderBottom"},[_c('span',[_vm._v("区域:")]),_vm._l((_vm.areas1),function(item){return _c('el-radio',{key:item.code,attrs:{"size":"mini","label":item.code},on:{"change":function (value){ return _vm.changeAreaSearch(value,item.name); }},model:{value:(_vm.areas1Code),callback:function ($$v) {_vm.areas1Code=$$v},expression:"areas1Code"}},[_vm._v(_vm._s(item.name))])})],2),_vm._v(" "),_c('div',{staticClass:"borderBottom"},[_c('span',[_vm._v("街道:")]),_vm._l((_vm.districts1),function(item){return _c('el-radio',{key:item.code,attrs:{"size":"mini","label":item.code},on:{"change":function (value){ return _vm.changeDistrictsSearch(value,item.name); }},model:{value:(_vm.districts1Code),callback:function ($$v) {_vm.districts1Code=$$v},expression:"districts1Code"}},[_vm._v(_vm._s(item.name))])})],2),_vm._v(" "),(_vm.parteners.length>0)?_c('div',{staticStyle:{"margin-top":"10px","max-height":"300px","overflow":"auto"}},_vm._l((_vm.parteners),function(item){return _c('div',{key:item.value,staticClass:"text item areaSearchList",on:{"click":function($event){_vm.changeAreaSearchCor(item.value,item.label)}}},[_vm._v("\n                                       "+_vm._s(item.label+' '+ item.mobile)+"\n                                   ")])})):_c('div',{staticStyle:{"text-align":"center","margin-top":"10px"}},[_vm._v("\n                                      此区域暂无合作方联系人\n                                  ")]),_vm._v(" "),_c('div',{staticStyle:{"border-top":"1px solid #eee"}},[(_vm.parteners.length>0)?_c('el-checkbox',{on:{"change":_vm.changeparteners},model:{value:(_vm.checkedallparteners),callback:function ($$v) {_vm.checkedallparteners=$$v},expression:"checkedallparteners"}},[_vm._v("全选")]):_vm._e()],1)]):_vm._e()],1):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status==3)?_c('div',[_c('el-form-item',{attrs:{"label":"结束原因","prop":"fReason"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.ruleForm.fReason),callback:function ($$v) {_vm.$set(_vm.ruleForm, "fReason", $$v)},expression:"ruleForm.fReason"}},[_c('el-option',{attrs:{"label":"成交","value":"4"}},[_vm._v(" 成交")]),_vm._v(" "),_c('el-option',{attrs:{"label":"未成交","value":"1"}},[_vm._v(" 未成交")]),_vm._v(" "),_c('el-option',{attrs:{"label":"需求已过期","value":"2"}},[_vm._v(" 需求已过期")]),_vm._v(" "),_c('el-option',{attrs:{"label":"非真实需求","value":"3"}},[_vm._v(" 非真实需求")]),_vm._v(" "),_c('el-option',{attrs:{"label":"其他","value":"5"}},[_vm._v(" 其他")]),_vm._v(" "),_c('el-option',{attrs:{"label":"暂无","value":"0"}},[_vm._v(" 暂无")]),_vm._v(" "),_c('el-option',{attrs:{"label":"需求更改","value":"6"}},[_vm._v(" 需求更改")]),_vm._v(" "),_c('el-option',{attrs:{"label":"需求重复","value":"7"}},[_vm._v(" 需求重复")]),_vm._v(" "),_c('el-option',{attrs:{"label":"客服审核关闭","value":"8"}},[_vm._v(" 客服审核关闭")])],1)],1),_vm._v(" "),(_vm.ruleForm.fReason==1 || _vm.ruleForm.fReason==5)?_c('el-form-item',{key:"1",attrs:{"prop":"remark","label":"结束原因备注"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"结束原因备注"},model:{value:(_vm.ruleForm.remark),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remark", $$v)},expression:"ruleForm.remark"}})],1):_c('el-form-item',{key:"2",attrs:{"label":"结束原因备注"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"结束原因备注"},model:{value:(_vm.ruleForm.remark),callback:function ($$v) {_vm.$set(_vm.ruleForm, "remark", $$v)},expression:"ruleForm.remark"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status==3&&_vm.ruleForm.fReason==4&&_vm.ruleForm.isNew==1)?_c('el-form-item',{key:'div1'+_vm.ruleForm.status,attrs:{"prop":"divideBase","label":"分成基数"}},[_c('el-input',{attrs:{"maxlength":"12","placeholder":"例：30000，单位默认元"},model:{value:(_vm.ruleForm.divideBase),callback:function ($$v) {_vm.$set(_vm.ruleForm, "divideBase", $$v)},expression:"ruleForm.divideBase"}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status==3&&_vm.ruleForm.fReason==4&&_vm.ruleForm.isNew==1)?_c('el-form-item',{key:'div2'+_vm.ruleForm.status,attrs:{"label":"分成比例","prop":"divideProportion"}},[_c('el-input',{staticClass:"price_range",attrs:{"maxlength":"5","placeholder":"请输入分成比例"},model:{value:(_vm.ruleForm.divideProportion),callback:function ($$v) {_vm.$set(_vm.ruleForm, "divideProportion", $$v)},expression:"ruleForm.divideProportion"}}),_vm._v("%\n\t\t\t\t\t    ")],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status==3&&_vm.ruleForm.fReason==4&&_vm.ruleForm.isNew==1)?_c('el-form-item',{key:'deal'+_vm.ruleForm.status,attrs:{"prop":_vm.ruleForm.status==3?'dealAgentId':'',"label":"成交人"}},[_c('el-select',{attrs:{"clearable":"","filterable":"","remote":"","placeholder":"请输入成交人名称","remote-method":_vm.fetchManager,"loading":_vm.loading},model:{value:(_vm.ruleForm.dealAgentId),callback:function ($$v) {_vm.$set(_vm.ruleForm, "dealAgentId", $$v)},expression:"ruleForm.dealAgentId"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.method==1&&_vm.routeStatus==2&&_vm.ruleForm.isNew==1&&_vm.ruleForm.isReal==1)?_c('el-form-item',{attrs:{"label":"独享状态","prop":"exclusive"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},on:{"change":_vm.changeDuxiangStatus},model:{value:(_vm.ruleForm.exclusive),callback:function ($$v) {_vm.$set(_vm.ruleForm, "exclusive", $$v)},expression:"ruleForm.exclusive"}},_vm._l((_vm.exclusiveDayoptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value,"disabled":item.disabled}})}))],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.overtimeFlag ==1&&_vm.ruleForm.exclusive==1)?_c('el-form-item',{staticStyle:{"color":"red"},attrs:{"label":""}},[_vm._v("\n\t\t\t\t\t\t\t   * 独享状态已过期，请更改独享状态\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t")]):_vm._e(),_vm._v(" "),(_vm.ruleForm.method==1&&_vm.routeStatus==2&&_vm.ruleForm.isNew==1)?_c('el-form-item',{attrs:{"label":"当前独享人"}},[_c('el-input',{attrs:{"readonly":"","suffix-icon":"el-icon-menu","placeholder":"独享人姓名","maxlength":"20"},model:{value:(_vm.ruleForm.retainAgentName),callback:function ($$v) {_vm.$set(_vm.ruleForm, "retainAgentName", $$v)},expression:"ruleForm.retainAgentName"}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.retainAgentName&&_vm.ruleForm.method==1&&_vm.routeStatus==2&&_vm.ruleForm.isNew==1)?_c('el-form-item',{attrs:{"label":"延长保留时间"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.ruleForm.retainDay),callback:function ($$v) {_vm.$set(_vm.ruleForm, "retainDay", $$v)},expression:"ruleForm.retainDay"}},_vm._l((_vm.retainDayoptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status!=0)?_c('el-form-item',{staticClass:"bold",attrs:{"label":"备注"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"备注","maxlength":"255"},model:{value:(_vm.ruleForm.contentRmark),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contentRmark", $$v)},expression:"ruleForm.contentRmark"}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.status==0)?_c('el-form-item',{staticClass:"bold",attrs:{"label":"客服备注"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"客服备注","maxlength":"255"},model:{value:(_vm.ruleForm.contentRmark),callback:function ($$v) {_vm.$set(_vm.ruleForm, "contentRmark", $$v)},expression:"ruleForm.contentRmark"}})],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.callbackTime)?_c('el-form-item',{attrs:{"label":"回访时间"}},[_c('el-input',{attrs:{"placeholder":"请输入回访时间"},model:{value:(_vm.ruleForm.callbackTime),callback:function ($$v) {_vm.$set(_vm.ruleForm, "callbackTime", $$v)},expression:"ruleForm.callbackTime"}})],1):_vm._e()],1),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{attrs:{"type":_vm.ruleForm.id&&_vm.ruleForm.nextId?'success':'info',"disabled":_vm.ruleForm.id&&_vm.ruleForm.nextId?false:true},on:{"click":function($event){_vm.handleEdit(_vm.ruleForm.nextId,_vm.ruleForm.status,2)}}},[_vm._v("保存进入下一条")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.resetForm('ruleForm')}}},[_vm._v("取消")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"offset":1,"span":7}},[(_vm.ruleForm.url)?_c('el-button',{staticStyle:{"width":"100%","margin-bottom":"20px"},attrs:{"type":"success"},on:{"click":function($event){_vm.activeOriginDetail(_vm.ruleForm.url)}}},[_vm._v("点击查看详细原数据"),_c('i',{staticClass:"el-icon-arrow-right el-icon--right"})]):_vm._e(),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("历史需求单")]),_vm._v(" "),(_vm.relationOrders&&_vm.relationOrders.length>1)?_c('ol',_vm._l((_vm.relationOrders),function(item){return (item.id != _vm.ruleForm.id)?_c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.createTime)+"，该号码通过 "),_c('b',[_vm._v(_vm._s(_vm.origins[item.origin]))]),_vm._v("，"+_vm._s(item.type?_vm.types[item.type]:'求租')+","+_vm._s(item.lprice)+"-"+_vm._s(item.gprice)+"元的 "),_c('b',[_vm._v(_vm._s(_vm.houseTypes[item.houseType]))]),_vm._v("。\n\t\t\t\t\t\t")]):_vm._e()})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史需求单")])]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("历史记录")]),_vm._v(" "),(_vm.remarkList && _vm.remarkList.length>0)?_c('ol',_vm._l((_vm.remarkList),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无历史操作")])]),_vm._v(" "),_c('fieldset',[_c('legend',[_vm._v("评价记录")]),_vm._v(" "),(_vm.assessLog && _vm.assessLog.length>0)?_c('ol',_vm._l((_vm.assessLog),function(item){return _c('li',{key:item.id},[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(item.create_time)+"，由 "),_c('b',[_vm._v(_vm._s(item.user_name))]),_vm._v(" 修改，"+_vm._s(item.content)+"。\n\t\t\t\t\t\t")])})):_c('div',{staticStyle:{"padding":"10px"}},[_vm._v("暂无评价记录")])])],1)],1),_vm._v(" "),(_vm.routeStatus==2)?_c('el-row',{attrs:{"id":"aaaaa"}},[_c('el-col',{attrs:{"offset":1,"span":22}},[_c('div',[_c('span',[_vm._v("推送房源")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.changeHousePush}},[_vm._v("点击查看"),_c('i',{class:_vm.housePush?'el-icon-arrow-up el-icon--right':'el-icon-arrow-down el-icon--right'})])],1),_vm._v(" "),(_vm.housePush)?_c('div',{staticClass:"houseList"},[_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeName1),callback:function ($$v) {_vm.activeName1=$$v},expression:"activeName1"}},[_c('el-tab-pane',{attrs:{"label":"已审核","name":"getRecHouseList-1"}}),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"未审核","name":"getRecHouseList-0"}})],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.getRecHouseLists}},[_c('el-table-column',{attrs:{"label":"房源名称","width":"380"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticClass:"houseImg",attrs:{"src":scope.row.img,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"houseContent"},[_c('p',{staticStyle:{"color":"#409EFF"},attrs:{"title":"scope.row.title"}},[_c('a',{attrs:{"href":scope.row.url,"target":"_blank"}},[(scope.row.agent_flag==0)?_c('span',{staticClass:"ziying"},[_vm._v("自营")]):_vm._e(),_vm._v(_vm._s(scope.row.title))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(scope.row.area_name || '暂无区域')+" "+_vm._s(scope.row.address || '暂无地址')+" | "+_vm._s(scope.row.chaoxiang || '暂无朝向'))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(scope.row.zhuangxiu || '暂无装修')+" | "+_vm._s(scope.row.mianji || '暂无面积')+" | "+_vm._s(scope.row.price)+_vm._s(scope.row.price_unit))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提供中介"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.agent_name?scope.row.agent_name:'暂无'))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提供时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.create_time))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"是否有效"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.is_invalid==1?'有效':'已失效'))]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"审核结果"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-select',{staticStyle:{"width":"100px"},attrs:{"placeholder":"未审核"},on:{"change":function($event){_vm.getShenheStatus(scope.$index)}},model:{value:(scope.row.is_pass),callback:function ($$v) {_vm.$set(scope.row, "is_pass", $$v)},expression:"scope.row.is_pass"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))]}}])}),_vm._v(" "),(_vm.getRecHouseListsShow)?_c('el-table-column',{attrs:{"label":"用户反馈"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.is_interest==1?'感兴趣':'等待用户确认'))]}}])}):_vm._e(),_vm._v(" "),(_vm.getRecHouseListsShow)?_c('el-table-column',{attrs:{"label":"看房时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.see_time?scope.row.see_time:'暂无'))]}}])}):_vm._e(),_vm._v(" "),(_vm.getRecHouseListsShow)?_c('el-table-column',{attrs:{"label":"是否已带看"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v(_vm._s(scope.row.is_see_plan==0?'否':'是'))]}}])}):_vm._e()],1),_vm._v(" "),_c('el-row',{staticStyle:{"margin-top":"10px"}},[_c('el-col',{attrs:{"span":20}},[(_vm.getRecHouseListsPage>0)?_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage1,"layout":"prev, pager, next","page-size":5,"total":_vm.getRecHouseListsPage},on:{"current-change":_vm.handleCurrentChange1}})],1):_vm._e()]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[(_vm.getRecHouseLists.length>0)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.checkoutHouseStatus}},[_vm._v("推送")]):_vm._e()],1)],1)],1):_vm._e(),_vm._v(" "),_c('div',[_c('span',[_vm._v("用户感兴趣房源")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.changeUserLike}},[_vm._v("点击查看"),_c('i',{class:_vm.userLike?'el-icon-arrow-up el-icon--right':'el-icon-arrow-down el-icon--right'})])],1),_vm._v(" "),(_vm.userLike)?_c('div',{staticClass:"houseList"},[_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeName2),callback:function ($$v) {_vm.activeName2=$$v},expression:"activeName2"}},[_c('el-tab-pane',{attrs:{"label":"已预约带看","name":"getMeetingHouseList-0"}}),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"未预约带看","name":"getMeetingHouseList-1"}})],1),_vm._v(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.getMeetingHouseLists}},[_c('el-table-column',{attrs:{"label":"房源名称","width":"380"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticClass:"houseImg",attrs:{"src":scope.row.img,"alt":""}}),_vm._v(" "),_c('div',{staticClass:"houseContent"},[_c('p',{staticStyle:{"color":"#409EFF"},attrs:{"title":"scope.row.title"}},[_c('a',{attrs:{"href":scope.row.url,"target":"_blank"}},[(scope.row.agent_flag==0)?_c('span',{staticClass:"ziying"},[_vm._v("自营")]):_vm._e(),_vm._v(_vm._s(scope.row.title))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(scope.row.area_name)+" "+_vm._s(scope.row.address)+"|"+_vm._s(scope.row.chaoxiang))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(scope.row.zhuangxiu)+"|"+_vm._s(scope.row.mianji)+"|"+_vm._s(scope.row.price)+_vm._s(scope.row.price_unit))])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"提供中介"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',[_vm._v(_vm._s(scope.row.agent_name?scope.row.agent_name:'暂无'))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(scope.row.agent_mobile?scope.row.agent_mobile:''))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"预约时间"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('div',{staticClass:"block"},[_c('el-date-picker',{staticStyle:{"width":"150px"},attrs:{"picker-options":_vm.pickerOptions0,"type":"datetime","placeholder":"选择日期时间"},on:{"change":function (value) { return _vm.changeTime(value, scope.$index); }},model:{value:(scope.row.order_time),callback:function ($$v) {_vm.$set(scope.row, "order_time", $$v)},expression:"scope.row.order_time"}})],1)]}}])}),_vm._v(" "),(_vm.getMeetingHouseListsShow==0)?_c('el-table-column',{attrs:{"label":"是否已带看"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-select',{staticStyle:{"width":"100px"},attrs:{"placeholder":"带看状态"},model:{value:(scope.row.status),callback:function ($$v) {_vm.$set(scope.row, "status", $$v)},expression:"scope.row.status"}},_vm._l((_vm.options2),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))]}}])}):_vm._e(),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){_vm.submitHouse(scope.$index)}}},[_vm._v("确定")])]}}])})],1),_vm._v(" "),_c('el-row',{staticStyle:{"margin-top":"10px"}},[_c('el-col',{attrs:{"span":24}},[(_vm.getMeetingHouseListsPage>0)?_c('div',{staticClass:"block"},[_c('el-pagination',{attrs:{"current-page":_vm.currentPage2,"layout":"prev, pager, next","page-size":5,"total":_vm.getMeetingHouseListsPage},on:{"current-change":_vm.handleCurrentChange2}})],1):_vm._e()])],1)],1):_vm._e()])],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.id > 0)?_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":22}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.recordDialog=true}}},[_vm._v("新增带看记录")])],1)],1):_vm._e(),_vm._v(" "),(_vm.ruleForm.id > 0)?_c('el-row',[_c('el-col',{attrs:{"offset":1,"span":22}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.seelogs}},[_c('el-table-column',{attrs:{"label":"序号","type":"index"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"house_id","label":"房源编号","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"agent_name","label":"带看人","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"look_time","label":"带看时间"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"带看单"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticClass:"houseImg",staticStyle:{"cursor":"pointer"},attrs:{"src":scope.row.img,"alt":""},on:{"click":function($event){_vm.showbigimg(scope.row.img_big)}}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"remark","label":"备注"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.editlog(scope.row.id)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"type":"warn"},on:{"click":function($event){_vm.deletelog(scope.row.id)}}},[_vm._v("删除")])]}}])})],1),_vm._v(" "),(_vm.seelogTotal>_vm.seepagesize)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.seelogTotal,"page-size":this.seepagesize,"current-page":_vm.seelogPage},on:{"update:currentPage":function($event){_vm.seelogPage=$event},"current-change":_vm.handleseelogChange}}):_vm._e()],1)],1):_vm._e(),_vm._v(" "),_c('el-dialog',{attrs:{"title":"带看记录","visible":_vm.recordDialog,"width":"730px","center":""},on:{"update:visible":function($event){_vm.recordDialog=$event}}},[_c('el-form',{ref:"recordform",staticClass:"require-form",attrs:{"model":_vm.recordform,"rules":_vm.rules,"label-width":"20%","size":"small"}},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"租售类型"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择租售类型"},on:{"change":_vm.changerecordhousetype},model:{value:(_vm.recordform.type),callback:function ($$v) {_vm.$set(_vm.recordform, "type", $$v)},expression:"recordform.type"}},[_c('el-option',{attrs:{"label":"出租","value":2}},[_vm._v(" 出租")]),_vm._v(" "),_c('el-option',{attrs:{"label":"出售","value":4}},[_vm._v(" 出售")])],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"房源类型"}},[_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择房源类型"},on:{"change":_vm.changehouse_type},model:{value:(_vm.recordform.house_type),callback:function ($$v) {_vm.$set(_vm.recordform, "house_type", $$v)},expression:"recordform.house_type"}},[(_vm.recordform.type==1||_vm.recordform.type==2||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"商铺","value":60}},[_vm._v("商铺")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==1||_vm.recordform.type==2||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"写字楼","value":61}},[_vm._v("写字楼")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==1||_vm.recordform.type==2||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"住宅","value":62}},[_vm._v("住宅")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==1||_vm.recordform.type==2||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"厂房仓库","value":67}},[_vm._v("厂房仓库")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==3||_vm.recordform.type==4||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"二手房买卖","value":70}},[_vm._v("二手房住宅")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==3||_vm.recordform.type==4||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"出售商铺","value":71}},[_vm._v("出售商铺")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==3||_vm.recordform.type==4||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"出售写字楼","value":72}},[_vm._v("出售写字楼")]):_vm._e(),_vm._v(" "),(_vm.recordform.type==3||_vm.recordform.type==4||!_vm.recordform.type)?_c('el-option',{attrs:{"border":"","label":"出售厂房","value":73}},[_vm._v("出售厂房")]):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"带看人"}},[_c('el-select',{attrs:{"filterable":"","remote":"","placeholder":"请输入带看人名称","remote-method":_vm.fetchManager,"loading":_vm.loading},model:{value:(_vm.recordform.agent_id),callback:function ($$v) {_vm.$set(_vm.recordform, "agent_id", $$v)},expression:"recordform.agent_id"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"带看时间"}},[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期时间"},model:{value:(_vm.recordform.look_time),callback:function ($$v) {_vm.$set(_vm.recordform, "look_time", $$v)},expression:"recordform.look_time"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"房源编号"}},[_c('el-input',{attrs:{"maxlength":"30"},on:{"blur":_vm.checkhouseNo},model:{value:(_vm.recordform.house_id),callback:function ($$v) {_vm.$set(_vm.recordform, "house_id", $$v)},expression:"recordform.house_id"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":"备注"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.recordform.remark),callback:function ($$v) {_vm.$set(_vm.recordform, "remark", $$v)},expression:"recordform.remark"}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":13}},[_c('el-form-item',{attrs:{"label":"上传带看单"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"data":{isPublic: 0},"action":_vm.host+'/upload/uploadFile',"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload}},[(_vm.recordform.img)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.recordform.img}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.recordDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addrecord}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"请选择催办人员","visible":_vm.centerDialogVisible,"width":"30%","center":""},on:{"update:visible":function($event){_vm.centerDialogVisible=$event}}},[_c('el-checkbox-group',{model:{value:(_vm.remindcode),callback:function ($$v) {_vm.remindcode=$$v},expression:"remindcode"}},_vm._l((_vm.remindlist),function(item){return _c('el-checkbox',{key:item.agent_name,attrs:{"label":item.agent_id}},[_vm._v(_vm._s(item.agent_name))])})),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.centerDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.urgeAgents}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"带看单","visible":_vm.bigimg,"center":""},on:{"update:visible":function($event){_vm.bigimg=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var collect_Collect = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/collect/Collect.vue
function injectStyle (ssrContext) {
  __webpack_require__("9MaL")
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
  Collect,
  collect_Collect,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_collect_Collect = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sj0C":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.collect-form {\n  padding: 20px;\n}\nfieldset {\n  margin-bottom: 15px;\n  border: 1px solid #e5e5e5;\n  padding-left: 15px;\n  overflow: auto;\n  max-height: 560px;\n}\nfieldset legend {\n    width: auto;\n    margin: 0 0 0 -5px;\n    font-size: 13px;\n    font-weight: bold;\n    border-bottom: 0;\n    padding: 0 5px;\n}\nfieldset ol {\n    padding-left: 25px;\n}\nfieldset li {\n    font-size: 13px;\n    color: #141414;\n    line-height: 20px;\n    margin-top: 3px;\n}\n.relation-table .el-table--mini td,\n.relation-table .el-table--mini th {\n  padding: 0;\n}\n.houseList {\n  padding: 20px;\n  background: #fafafa;\n  margin-bottom: 15px;\n}\n.el-pagination .btn-next, .el-pagination .btn-prev {\n  background: center center no-repeat #fafafa;\n}\n.el-pager li, .el-table__body-wrapper, .el-pagination button.disabled, .el-table th, .el-table tr {\n  background: #fafafa;\n}\n.locationBtn {\n  position: absolute;\n  right: 0;\n  top: 2px;\n  height: 32px;\n}\n.locationBtn1 {\n  position: absolute;\n  right: 120px;\n  top: 2px;\n  height: 32px;\n}\n.areaSearch .el-radio__inner {\n  border: none;\n  width: 0;\n  height: 0;\n}\n.areaSearch .el-radio + .el-radio {\n  margin-left: 0;\n}\n.areaSearch .el-radio:hover {\n  color: #409EFF;\n}\n.areaSearch .borderBottom {\n  border-bottom: 1px solid #eee;\n}\n.areaSearch .areaSearchList {\n  cursor: pointer;\n  padding-left: 14px;\n}\n.areaSearch .areaSearchList:hover {\n  background: #409EFF;\n  color: #fff;\n}\n.areaSearch .el-tag--small {\n  margin-left: 10px;\n}\n.houseImg {\n  border: 1px solid #eee;\n  width: 110px;\n  height: 78px;\n  display: block;\n  float: left;\n}\n.houseContent {\n  float: left;\n  margin-left: 20px;\n  width: 230px;\n}\n.houseContent p {\n  text-align: left;\n  margin: 0;\n  width: 230px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.ziying {\n  display: inline-block;\n  padding: 0px 5px;\n  color: #fff;\n  background: #ff7500;\n  border-radius: 3px;\n  margin-right: 3px;\n}\n.collect-form .el-tag + .el-tag {\n  margin-left: 10px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409EFF;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 178px;\n  height: 178px;\n  line-height: 178px;\n  text-align: center;\n}\n.avatar {\n  width: 178px;\n  height: 178px;\n  display: block;\n}\n.check-flag {\n  margin-right: 3px;\n}\n", ""]);

// exports


/***/ })

});
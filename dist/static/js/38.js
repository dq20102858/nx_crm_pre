webpackJsonp([38],{

/***/ "2jIk":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("oB0u");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("a492c506", content, true);

/***/ }),

/***/ "QxAK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/requirement/index.js
var requirement = __webpack_require__("3sUq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/zufang/AgentDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AgentDetail = ({
    data: function data() {
        return {
            data: {
                is_self: 0,
                start_time: '', //套餐开始时间
                address: '', //具体地址
                location: '', //坐标
                main_work: [], //主营方向
                agent_id: '', //对接人id
                package_id: '', //套餐id
                d_id: '', //保证金id
                num: '', //套餐份数
                qulifi_code: null,
                qulification: null,
                area_info: []
            },
            choosearea: [],
            areas1: [],
            areas1Code: 0,
            areas1Name: null,
            districts1: [],
            districts1Code: [],
            dialogImageUrl1: "",
            dialogVisible1: false,
            loading: false,
            user_id: this.$route.query.user_id,
            total: 1,
            pagesize: 10,
            page: 1,
            last_page: 1,
            applyLists: [],
            agents: [],
            serviceOptions: [{
                value: 1,
                label: '住宅'
            }, {
                value: 2,
                label: '商铺'
            }, {
                value: 3,
                label: '写字楼'
            }, {
                value: 4,
                label: '商业体'
            }, {
                value: 5,
                label: '产业园'
            }, {
                value: 6,
                label: '厂房仓库'
            }],
            numlist: [{
                value: 1,
                label: '一份'
            }, {
                value: 2,
                label: '二份'
            }, {
                value: 3,
                label: '三份'
            }, {
                value: 4,
                label: '四份'
            }, {
                value: 5,
                label: '五份'
            }, {
                value: 6,
                label: '六份'
            }, {
                value: 7,
                label: '七份'
            }, {
                value: 8,
                label: '八份'
            }, {
                value: 9,
                label: '九份'
            }, {
                value: 10,
                label: '十份'
            }],
            userstatus: 0,
            package_list: [], //套餐列表
            deposit_list: [], //套餐列表
            rules: {
                start_time: [{
                    required: true,
                    message: "请选择套餐开始时间",
                    trigger: "change"
                }],
                address: [{
                    required: true,
                    message: "请填写具体地址",
                    trigger: "blur"
                }],
                main_work: [{
                    required: true,
                    message: "请选择主营方向",
                    trigger: "change"
                }],
                location: [{
                    required: true,
                    message: "请填写坐标",
                    trigger: "change"
                }],
                agent_id: [{
                    required: true,
                    message: "请填写对接人",
                    trigger: "change"
                }],
                package_id: [{
                    required: true,
                    message: "请选择套餐",
                    trigger: "change"
                }],
                d_id: [{
                    required: true,
                    message: "请选择保证金",
                    trigger: "change"
                }],
                num: [{
                    required: true,
                    message: "请选择套餐份数",
                    trigger: "change"
                }]
            }
        };
    },

    created: function created() {
        this.agentDetail();
        this.getApplyLists();
        this.getAreaLists();
    },
    mounted: function mounted() {
        var roles = this.$store.state.user.roles;
        if (roles[0] == '财务') {
            this.userstatus = 0;
        } else {
            this.userstatus = 1;
        }
    },

    methods: {
        handleCheckedCitiesChange: function handleCheckedCitiesChange(item) {
            var _this = this;

            var flag = 0,
                itemindex = -1;
            if (item == 0 && this.districts1Code.indexOf(item) > -1) {
                this.districts1Code = [];
                this.districts1.map(function (item) {
                    _this.districts1Code.push(item.code);
                });
            }
            if (item == 0 && this.districts1Code.indexOf(item) == -1) {
                this.districts1Code = [];
            }
            this.data.area_info.map(function (item, index) {
                if (item.main.code == _this.areas1Code && _this.districts1Code.length > 0) {
                    item.sub = [];
                    _this.districts1.map(function (item1) {
                        _this.districts1Code.map(function (item2) {
                            if (item2 == item1.code) {
                                item.sub.push(item1);
                            }
                        });
                    });

                    flag = 1;
                } else if (item.main.code == _this.areas1Code && _this.districts1Code.length == 0) {
                    flag = 1;
                    itemindex = index;
                }
            });
            if (itemindex != -1) {
                this.data.area_info.splice(itemindex, 1);
            }
            if (flag == 0) {
                var nerwarr = [];
                this.districts1.map(function (item1) {
                    _this.districts1Code.map(function (item2) {
                        if (item2 == item1.code) {
                            nerwarr.push(item1);
                        }
                    });
                });
                this.data.area_info.push({
                    "main": {
                        "name": this.areas1Name,
                        "code": this.areas1Code
                    },
                    "sub": nerwarr
                });
            }
            this.choosearea = [];
            this.data.area_info.map(function (item3) {
                item3.sub.map(function (item4) {
                    _this.choosearea.push(item4);
                });
            });
        },
        changeAreaSearch: function changeAreaSearch(value, name) {
            var that = this;
            that.choosearea = [];
            that.districts1Code = [];
            that.areas1Name = name;
            if (that.data.area_info && that.data.area_info.length > 0) {
                that.data.area_info.map(function (item) {
                    if (item.main.code == that.areas1Code) {
                        item.sub.map(function (item1) {
                            that.districts1Code.push(parseInt(item1.code));
                        });
                    }
                    item.sub.map(function (item2) {
                        that.choosearea.push(item2);
                    });
                });
            }
            that.changeDistrictLists();
        },
        getAreaLists: function getAreaLists() {
            var _this2 = this;

            Object(requirement["o" /* getAreaLists */])().then(function (response) {
                var data = response.data.data;
                if (data) {
                    _this2.areas = data;
                    _this2.areas1 = data.splice(1, data.length - 1);
                    // this.areas1Code=this.areas1[0].code
                } else {
                    _this2.$message({
                        message: response.data.msg,
                        type: "warning"
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        changeDistrictLists: function changeDistrictLists() {
            var _this3 = this;

            Object(requirement["s" /* getDistrictLists */])(this.areas1Code).then(function (response) {
                var data = response.data.data;
                data.splice(0, 1);
                if (data) {
                    _this3.districts1 = data;
                } else {
                    _this3.$message({
                        message: response.data.msg,
                        type: "warning"
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        handlePictureCardPreview1: function handlePictureCardPreview1(url) {
            this.dialogImageUrl1 = url;
            this.dialogVisible1 = true;
        },
        changeTaocan: function changeTaocan(val) {
            var that = this;
            that.package_list.map(function (item) {
                if (item.id == val) {
                    if (item.level == 1) {
                        that.data.d_id = 0;
                    } else if (item.level == 2) {
                        that.data.d_id = 6;
                    }
                }
            });
        },
        getLocation: function getLocation() {
            window.open('http://api.map.baidu.com/lbsapi/getpoint/');
        },
        fetchManager: function fetchManager(query) {
            var _this4 = this;

            if (query !== "") {
                this.loading = true;
                Object(requirement["m" /* fetchManager */])(query, 1).then(function (response) {
                    var data = response.data.data;
                    if (data) {
                        _this4.loading = false;
                        _this4.agents = data.map(function (item) {
                            return { value: item.id, label: item.name };
                        });
                    } else {
                        _this4.$message({
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
        agentDetail: function agentDetail() {
            var _this5 = this;

            var user_id = this.user_id;
            this.request({
                url: "/zufang/agentDetail",
                method: "get",
                params: { user_id: user_id }
            }).then(function (response) {
                var data = response.data.data;
                if (data.agent_id && data.agent_id != 0 && data.agent_id != '') {
                    _this5.agents = [{ value: data.agent_id, label: data.agent_name }];
                }
                if (data) {
                    _this5.data = data;
                    if (data.package_list) {
                        _this5.package_list = data.package_list;
                    }
                    if (data.deposit_list) {
                        _this5.deposit_list = data.deposit_list;
                    }
                    if (data.area_info && data.area_info.length > 0) {
                        _this5.areas1Code = parseInt(data.area_info[0].main.code);
                        _this5.areas1Name = data.area_info[0].main.name;
                        _this5.data.area_info = data.area_info;
                        _this5.changeAreaSearch(_this5.areas1Code, _this5.areas1Name);
                    } else {
                        _this5.data.area_info = [];
                        _this5.changeDistrictLists();
                    }
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        onSubmit: function onSubmit(formName) {
            var _this6 = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    var data = {
                        id: _this6.data.extend_id,
                        status: _this6.data.status,
                        remark: _this6.data.remark,
                        mobile: _this6.data.mobile,
                        user_id: _this6.data.user_id,
                        start_time: _this6.data.start_time,
                        address: _this6.data.address,
                        location: _this6.data.location,
                        main_work: _this6.data.main_work,
                        agent_id: _this6.data.agent_id,
                        package_id: _this6.data.package_id, //套餐id
                        d_id: _this6.data.d_id, //保证金id
                        num: _this6.data.num,
                        area_info: _this6.data.area_info,
                        is_self: _this6.data.is_self,
                        service: _this6.data.service.join(',')
                    };
                    if (_this6.data.status == 3 && (_this6.data.remark == null || _this6.data.remark == "")) {
                        _this6.$message.error('请填写拒绝理由');
                        return false;
                    }

                    if (_this6.data.needCheck) {
                        _this6.$message.error('请先审核该用户的公司门店信息');
                        return false;
                    }

                    _this6.request({
                        url: '/zufang/agentEditDo',
                        method: 'post',
                        data: data
                    }).then(function (response) {
                        if (response.data.status) {
                            _this6.$message({
                                message: '编辑成功',
                                type: 'success',
                                duration: 3 * 1000
                            });
                            _this6.agentDetail();
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        getApplyLists: function getApplyLists() {
            var _this7 = this;

            var user_id = this.user_id;
            this.request({
                url: '/zufang/getApplyLists',
                method: 'get',
                params: { user_id: user_id }
            }).then(function (response) {
                if (response.data) {
                    _this7.applyLists = response.data.data.data;
                    _this7.total = response.data.data.total;
                    _this7.pagesize = parseInt(response.data.data.per_page);
                    _this7.page = parseInt(response.data.data.current_page);
                    _this7.last_page = response.data.data.last_page;
                } else {
                    _this7.applyLists = [];
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.page = val;
            this.getApplyLists();
        },
        applyDetail: function applyDetail(index, row) {
            this.$router.push({ name: 'applyDetail', query: { id: row.id } });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ac74baa0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/zufang/AgentDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"rules":_vm.rules,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":"经纪人姓名：","prop":"real_name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.real_name),callback:function ($$v) {_vm.$set(_vm.data, "real_name", $$v)},expression:"data.real_name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"手机号：","prop":"mobile"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.mobile),callback:function ($$v) {_vm.$set(_vm.data, "mobile", $$v)},expression:"data.mobile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"type","label":"经纪人类型"}},[(_vm.data.type==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("独立经纪人")]):_vm._e(),_vm._v(" "),(_vm.data.type==2)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("公司经纪人")]):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"城市：","prop":"area"}},[_c('span',[_vm._v(_vm._s(_vm.data.city_name))])]),_vm._v(" "),_c('el-form-item',{key:'adr'+_vm.userstatus,attrs:{"label":"具体地址：","prop":_vm.userstatus==1&&_vm.data.type==2?'address':''}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input"},model:{value:(_vm.data.address),callback:function ($$v) {_vm.$set(_vm.data, "address", $$v)},expression:"data.address"}})],1),_vm._v(" "),_c('el-form-item',{key:'lca'+_vm.userstatus,attrs:{"label":"坐标：","prop":_vm.userstatus==1&&_vm.data.type==2?'location':''}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"116.486482,40.022874"},model:{value:(_vm.data.location),callback:function ($$v) {_vm.$set(_vm.data, "location", $$v)},expression:"data.location"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","icon":"el-icon-location-outline"},on:{"click":_vm.getLocation}},[_vm._v("\n                获取经纬度\n            ")])],1),_vm._v(" "),_c('el-form-item',{key:'agid'+_vm.userstatus,attrs:{"label":"对接人","prop":_vm.userstatus==1&&_vm.data.type==2?'agent_id':''}},[_c('el-select',{staticStyle:{"width":"300px"},attrs:{"clearable":"","filterable":"","remote":"","placeholder":"请输入对接人名称","remote-method":_vm.fetchManager,"loading":_vm.loading},model:{value:(_vm.data.agent_id),callback:function ($$v) {_vm.$set(_vm.data, "agent_id", $$v)},expression:"data.agent_id"}},_vm._l((_vm.agents),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1),_vm._v(" "),(_vm.data.type==2)?_c('el-form-item',{attrs:{"label":"公司：","prop":"company"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.company),callback:function ($$v) {_vm.$set(_vm.data, "company", $$v)},expression:"data.company"}})],1):_vm._e(),_vm._v(" "),(_vm.data.type==2)?_c('el-form-item',{attrs:{"label":"门店：","prop":"shop"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","disabled":true},model:{value:(_vm.data.shop),callback:function ($$v) {_vm.$set(_vm.data, "shop", $$v)},expression:"data.shop"}})],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"企业代码："}},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.data.qulifi_code)+"\n\t\t\t")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"证明图片："}},[(_vm.data.qulification!='')?_c('div',{staticClass:"el-upload-list-box"},[_c('ul',{staticClass:"el-upload-list el-upload-list--picture-card"},[_c('li',{staticClass:"el-upload-list__item is-success",staticStyle:{"cursor":"pointer"},on:{"click":function($event){_vm.handlePictureCardPreview1(_vm.data.qulification)}}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":_vm.data.qulification,"alt":""}})])])]):_vm._e(),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible1},on:{"update:visible":function($event){_vm.dialogVisible1=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl1,"alt":""}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"主营业务：","prop":"service"}},[[_c('el-checkbox-group',{model:{value:(_vm.data.service),callback:function ($$v) {_vm.$set(_vm.data, "service", $$v)},expression:"data.service"}},_vm._l((_vm.serviceOptions),function(item){return _c('el-checkbox',{key:item.value,attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])}))]],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":"主营方向：","prop":"main_work"}},[_c('el-radio-group',{model:{value:(_vm.data.main_work),callback:function ($$v) {_vm.$set(_vm.data, "main_work", $$v)},expression:"data.main_work"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("不限")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("出租")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("出售")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"areaSearch",attrs:{"label":"主营区域："}},[_vm._l((_vm.choosearea),function(item,index){return _c('el-tag',{key:index,staticStyle:{"margin-right":"5px"}},[_vm._v(_vm._s(item.name))])}),_vm._v(" "),_c('div',{staticClass:"borderBottom"},[_c('span',[_vm._v("区域:")]),_vm._l((_vm.areas1),function(item){return _c('el-radio',{key:item.code,attrs:{"size":"mini","label":item.code},on:{"change":function (value){ return _vm.changeAreaSearch(value,item.name); }},model:{value:(_vm.areas1Code),callback:function ($$v) {_vm.areas1Code=$$v},expression:"areas1Code"}},[_vm._v(_vm._s(item.name))])})],2),_vm._v(" "),_c('div',[[_c('el-checkbox-group',{model:{value:(_vm.districts1Code),callback:function ($$v) {_vm.districts1Code=$$v},expression:"districts1Code"}},[_c('span',[_vm._v("街道:")]),_vm._v(" "),_vm._l((_vm.districts1),function( item ,index){return _c('el-checkbox',{key:index,attrs:{"label":item.code,"value":item.code},on:{"change":function($event){_vm.handleCheckedCitiesChange(item.code)}}},[_vm._v(_vm._s(item.name))])})],2)]],2)],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":"自营经纪人：","prop":"is_self"}},[_c('el-radio-group',{model:{value:(_vm.data.is_self),callback:function ($$v) {_vm.$set(_vm.data, "is_self", $$v)},expression:"data.is_self"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("否")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("是")])],1)],1),_vm._v(" "),(_vm.userstatus==0)?_c('el-form-item',{key:'pid'+_vm.userstatus,attrs:{"label":"套餐类型：","prop":_vm.userstatus==0?'package_id':''}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择套餐类型"},on:{"change":_vm.changeTaocan},model:{value:(_vm.data.package_id),callback:function ($$v) {_vm.$set(_vm.data, "package_id", $$v)},expression:"data.package_id"}},_vm._l((_vm.package_list),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name+'('+item.price+')',"value":item.id}})}))],1):_vm._e(),_vm._v(" "),(_vm.userstatus==0)?_c('el-form-item',{key:'did'+_vm.userstatus,attrs:{"label":"保证金：","prop":_vm.userstatus==0?'d_id':''}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择保证金类型"},model:{value:(_vm.data.d_id),callback:function ($$v) {_vm.$set(_vm.data, "d_id", $$v)},expression:"data.d_id"}},_vm._l((_vm.deposit_list),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name+'('+item.price+')',"value":item.id}})}))],1):_vm._e(),_vm._v(" "),(_vm.userstatus==0)?_c('el-form-item',{key:'num'+_vm.userstatus,attrs:{"label":"套餐份数：","prop":_vm.userstatus==0?'num':''}},[_c('el-select',{staticClass:"search-input search-select",staticStyle:{"width":"300px"},attrs:{"clearable":"","placeholder":"请选择套餐份数"},model:{value:(_vm.data.num),callback:function ($$v) {_vm.$set(_vm.data, "num", $$v)},expression:"data.num"}},_vm._l((_vm.numlist),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1):_vm._e(),_vm._v(" "),(_vm.userstatus==0)?_c('el-form-item',{key:'stt'+_vm.userstatus,attrs:{"label":"套餐开始时间：","prop":_vm.userstatus==0?'start_time':''}},[_c('div',{staticClass:"block"},[_c('el-date-picker',{staticStyle:{"width":"300px"},attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.data.start_time),callback:function ($$v) {_vm.$set(_vm.data, "start_time", $$v)},expression:"data.start_time"}})],1)]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v("拒绝")])],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"bold",attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"业务员备忘、主要提醒等"},model:{value:(_vm.data.remark),callback:function ($$v) {_vm.$set(_vm.data, "remark", $$v)},expression:"data.remark"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"申请时间：","prop":"create_time"}},[_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(_vm.data.create_time)))])]),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),(this.applyLists&&_vm.userstatus==1)?_c('div',[_c('el-table',{ref:"multipleTable",staticClass:"userLists-tab",attrs:{"data":_vm.applyLists}},[_c('el-table-column',{attrs:{"prop":"id","label":"id","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"company","label":"公司","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"shop","label":"门店","width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"status","label":"状态","width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.status==-1)?_c('el-tag',{attrs:{"type":"danger"}},[_vm._v("待审")]):_vm._e(),_vm._v(" "),(scope.row.status==1)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("通过")]):_vm._e(),_vm._v(" "),(scope.row.status==0)?_c('el-tag',{attrs:{"type":"success"}},[_vm._v("拒绝")]):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"申请时间","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('span',[_vm._v(_vm._s(_vm._f("formatTime")(scope.row.create_time)))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){_vm.applyDetail(scope.$index, scope.row)}}},[_vm._v("详情")])]}}])})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var zufang_AgentDetail = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/zufang/AgentDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("2jIk")
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
  AgentDetail,
  zufang_AgentDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_zufang_AgentDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "oB0u":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.areaSearch .el-radio {\n  margin-right: 8px;\n}\n.areaSearch .el-radio__inner {\n  border: none;\n  width: 0;\n  height: 0;\n}\n.areaSearch .el-radio + .el-radio {\n  margin-left: 0;\n}\n.areaSearch .el-radio:hover {\n  color: #409EFF;\n}\n", ""]);

// exports


/***/ })

});
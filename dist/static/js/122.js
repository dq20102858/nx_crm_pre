webpackJsonp([122],{

/***/ "CnAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/AddExtension.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AddExtension = ({
    data: function data() {
        return {
            data: {
                thirdSoft: []
            },
            pickerOptions2: common["a" /* publicData */].pickerOptions2,
            remark: '',
            rules: {
                name: [{
                    required: true,
                    message: "门店名称",
                    trigger: "blur"
                }],
                companyNum: [{
                    required: true,
                    message: "门店人数",
                    trigger: "blur"
                }],
                address: [{
                    required: true,
                    message: "请输入详细地址",
                    trigger: "blur"
                }],
                broker: [{
                    required: true,
                    message: "请输入对接人",
                    trigger: "blur"
                }]
            }
        };
    },

    created: function created() {},
    methods: {
        addThird: function addThird() {
            this.data.thirdSoft.push({
                name: '',
                time: ''
            });
        },
        onSubmit: function onSubmit(formName) {
            var _this = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    var data = {
                        name: _this.data.name || '',
                        address: _this.data.address || '',
                        map: _this.data.map || '',
                        chargeId: '',
                        chargeMap: [],
                        companyNum: _this.data.companyNum || 0,
                        softNum: _this.data.softNum || 0,
                        thirdSoft: _this.data.thirdSoft || [],
                        fjlUseNum: _this.data.fjlUseNum || 0,
                        fjlEndTime: _this.data.fjlEndTime || '',
                        nextTime: _this.data.nextTime || '',
                        broker: _this.data.broker || '',
                        hour: _this.data.hour || 0,
                        remindInfo: _this.data.remindInfo || '',
                        addTime: _this.data.addTime || '',
                        remark: _this.remark || ''
                    };

                    _this.request({
                        url: '/fjingling/companyAdd',
                        method: 'post',
                        data: data
                    }).then(function (response) {
                        if (response.data.status) {
                            _this.$message({
                                message: '新增成功',
                                type: 'success',
                                duration: 3 * 1000
                            });
                            _this.$router.push({ name: 'ExtensionRecord' });
                        }
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ea9e3ba0","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/AddExtension.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"rules":_vm.rules,"label-width":"200px"}},[_c('el-form-item',{attrs:{"label":"门店名称 ","prop":"name"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"门店名称"},model:{value:(_vm.data.name),callback:function ($$v) {_vm.$set(_vm.data, "name", $$v)},expression:"data.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"详细地址","prop":"address"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"详细地址"},model:{value:(_vm.data.address),callback:function ($$v) {_vm.$set(_vm.data, "address", $$v)},expression:"data.address"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"经纬度","prop":"map"}},[_c('a',{staticStyle:{"color":"red","margin-left":"230px"},attrs:{"href":"http://api.map.baidu.com/lbsapi/getpoint/","target":"_blank"}},[_vm._v("获取经纬度")]),_c('br'),_vm._v(" "),_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"116.486482,40.022874"},model:{value:(_vm.data.map),callback:function ($$v) {_vm.$set(_vm.data, "map", $$v)},expression:"data.map"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"负责人","prop":"chargeId"}},[_c('el-select',{staticStyle:{"width":"300px"},attrs:{"multiple":"","filterable":"","remote":"","placeholder":"请输入负责人名称"},model:{value:(_vm.data.agentId),callback:function ($$v) {_vm.$set(_vm.data, "agentId", $$v)},expression:"data.agentId"}},_vm._l((_vm.data.chargeList),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.label,"value":item.id}})}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"门店人数","prop":"companyNum"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"门店人数"},model:{value:(_vm.data.companyNum),callback:function ($$v) {_vm.$set(_vm.data, "companyNum", $$v)},expression:"data.companyNum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"第三方软件使用人数","prop":"softNum"}},[_c('el-input',{staticStyle:{"width":"170px"},attrs:{"type":"input","placeholder":"第三方软件使用人数"},model:{value:(_vm.data.softNum),callback:function ($$v) {_vm.$set(_vm.data, "softNum", $$v)},expression:"data.softNum"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"其他第三方软件使用情况","prop":"addThird"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addThird}},[_vm._v("新增")])],1),_vm._v(" "),_vm._l((_vm.data.thirdSoft),function(item,index){return _c('el-form-item',{key:index,attrs:{"label":"","prop":"content"}},[_c('el-input',{staticStyle:{"width":"170px"},attrs:{"type":"input","placeholder":"第三方软件名称"},model:{value:(item.name),callback:function ($$v) {_vm.$set(item, "name", $$v)},expression:"item.name"}}),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"请选择到期时间"},model:{value:(item.time),callback:function ($$v) {_vm.$set(item, "time", $$v)},expression:"item.time"}})],1)}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"使用房鲸灵人数","prop":"fjlUseNum"}},[_c('el-input',{staticStyle:{"width":"170px"},attrs:{"type":"input","placeholder":"使用房鲸灵人数"},model:{value:(_vm.data.fjlUseNum),callback:function ($$v) {_vm.$set(_vm.data, "fjlUseNum", $$v)},expression:"data.fjlUseNum"}}),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"date","placeholder":"请选择到期时间"},model:{value:(_vm.data.fjlEndTime),callback:function ($$v) {_vm.$set(_vm.data, "fjlEndTime", $$v)},expression:"data.fjlEndTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"下次拜访时间","prop":"nextTime"}},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.data.nextTime),callback:function ($$v) {_vm.$set(_vm.data, "nextTime", $$v)},expression:"data.nextTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"对接人","prop":"broker"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"对接人"},model:{value:(_vm.data.broker),callback:function ($$v) {_vm.$set(_vm.data, "broker", $$v)},expression:"data.broker"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"花费时间","prop":"hour"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"花费时间（h）"},model:{value:(_vm.data.hour),callback:function ($$v) {_vm.$set(_vm.data, "hour", $$v)},expression:"data.hour"}}),_vm._v(" 小时\n        ")],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提醒内容","prop":"remindInfo"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"input","placeholder":"提醒内容"},model:{value:(_vm.data.remindInfo),callback:function ($$v) {_vm.$set(_vm.data, "remindInfo", $$v)},expression:"data.remindInfo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"记录时间","prop":"addTime"}},[_c('span',[_vm._v(_vm._s(_vm.data.addTime))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"备注","prop":"remark"}},[_c('el-input',{attrs:{"type":"textarea","rows":"4","placeholder":"客服备注","maxlength":"255"},model:{value:(_vm.remark),callback:function ($$v) {_vm.remark=$$v},expression:"remark"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_AddExtension = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/AddExtension.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  AddExtension,
  fjingling_AddExtension,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_AddExtension = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
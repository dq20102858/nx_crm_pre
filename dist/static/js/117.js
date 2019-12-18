webpackJsonp([117],{

/***/ "BnFc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fjingling/Estate.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Estate = ({
    data: function data() {
        return {
            keyword1: "",
            keyword2: "",
            keyword3: "",
            lists1: [],
            lists2: [],
            lists3: [],
            loading: false
        };
    },


    methods: {
        reset: function reset() {
            this.keyword1 = "";
            this.keyword2 = "";
            this.keyword3 = "";
        },
        load365All: function load365All(query) {
            if (query !== '') {
                this.loading = true;
                this.loadAll(query, 1);
            } else {
                this.lists1 = [];
            }
        },
        loadAll: function loadAll(query, webId) {
            var _this = this;

            setTimeout(function () {
                _this.loading = false;
                var data = {
                    keyword: query,
                    webId: webId
                };
                _this.request({
                    url: '/fjingling/searchEstateInfo',
                    method: 'post',
                    data: data
                }).then(function (response) {
                    if (webId == 1) {
                        _this.lists1 = response.data.data;
                    } else if (webId == 3) {
                        _this.lists2 = response.data.data;
                    } else if (webId == 5) {
                        _this.lists3 = response.data.data;
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }, 300);
        },
        load3All: function load3All(query) {
            if (query !== '') {
                this.loading = true;
                this.loadAll(query, 3);
            } else {
                this.lists2 = [];
            }
        },
        loadfangAll: function loadfangAll(query) {
            if (query !== '') {
                this.loading = true;
                this.loadAll(query, 5);
            } else {
                this.lists3 = [];
            }
        },
        handleSelect: function handleSelect(item) {
            console.log(item);
        },
        onSubmit: function onSubmit() {
            var _this2 = this;

            var data = {
                wbId: this.keyword2['id'],
                wbName: this.keyword2['nameOrg'],
                wbCode: this.keyword2['mappingCode'],
                slwId: this.keyword1['id'],
                slwName: this.keyword1['nameOrg'],
                slwCode: this.keyword1['mappingCode'],
                fangId: this.keyword3['id'],
                fangName: this.keyword3['nameOrg'],
                fangCode: this.keyword3['mappingCode']
            };
            this.request({
                url: '/fjingling/saveEstateMapping',
                method: 'post',
                data: data
            }).then(function (response) {
                if (response.data.status) {
                    _this2.$message({
                        message: '小区新增成功',
                        type: 'success'
                    });
                } else {
                    _this2.$message({
                        message: '小区新增失败',
                        type: 'error'
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-18c4f806","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fjingling/Estate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"inline":true,"id":"searchForm"}},[_c('el-form-item',{attrs:{"label":"三网小区名称：","prop":"type"}},[_c('el-select',{staticStyle:{"width":"500px"},attrs:{"value-key":"id","filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入小区名称","remote-method":_vm.load3All,"loading":_vm.loading},model:{value:(_vm.keyword2),callback:function ($$v) {_vm.keyword2=$$v},expression:"keyword2"}},_vm._l((_vm.lists2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item}})}))],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"label":"365小区名称：","prop":"type"}},[_c('el-select',{staticStyle:{"width":"500px"},attrs:{"value-key":"id","filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入小区名称","remote-method":_vm.load365All,"loading":_vm.loading},model:{value:(_vm.keyword1),callback:function ($$v) {_vm.keyword1=$$v},expression:"keyword1"}},_vm._l((_vm.lists1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item}})}))],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',{attrs:{"label":"房天下小区名称：","prop":"type"}},[_c('el-select',{staticStyle:{"width":"500px"},attrs:{"value-key":"id","filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入小区名称","remote-method":_vm.loadfangAll,"loading":_vm.loading},model:{value:(_vm.keyword3),callback:function ($$v) {_vm.keyword3=$$v},expression:"keyword3"}},_vm._l((_vm.lists3),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item}})}))],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.reset}},[_vm._v("重置")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var fjingling_Estate = (esExports);
// CONCATENATED MODULE: ./src/views/fjingling/Estate.vue
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
  Estate,
  fjingling_Estate,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_fjingling_Estate = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
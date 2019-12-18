webpackJsonp([135],{

/***/ "9vBe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/api/customized/index.js
var customized = __webpack_require__("TWI9");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912hf/customized/PushList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var PushList = ({
    name: 'pushList',
    components: {
        Refresh: Refresh["a" /* default */]
    },
    data: function data() {
        return {
            pushList: [],
            total: 0,
            pagesize: 0,
            currentPage: 0,
            page: 1,
            last_page: 1,
            searchForm: {}, //搜索框数据
            agentLists: [],
            pickerOptions2: common["a" /* publicData */].pickerOptions2,
            role_id: 0
        };
    },

    created: function created() {
        var _this = this;

        this.fetchPushLists();
        Object(common["b" /* queryAgentList */])(function (p) {
            _this.agentLists = p;
        });
    },
    methods: {
        fetchPushLists: function fetchPushLists(param) {
            var _this2 = this;

            if (param) {
                this.page = 1;
            }
            Object(customized["b" /* fetchPushLists */])(this.page, this.searchForm).then(function (response) {
                var data = response.data.data;
                if (data) {
                    _this2.pushList = data.data;
                    _this2.total = data.total;
                    _this2.pagesize = data.per_page;
                    _this2.currentPage = Number(data.current_page);
                    _this2.last_page = data.last_page;
                    _this2.role_id = data.role_id;
                } else {
                    _this2.pushList = [];
                    console.log(response.data.msg);
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        handleCurrentChange: function handleCurrentChange(val) {
            this.page = val;
            this.fetchPushLists();
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-512bad80","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912hf/customized/PushList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap-individual"}},[_c('el-form',{attrs:{"model":_vm.searchForm,"id":"searchForm"}},[_c('label',{staticClass:"search-label"},[_vm._v("关键字：")]),_c('el-input',{staticClass:"keywords search-input",attrs:{"placeholder":"id/房源id/需求单号 "},model:{value:(_vm.searchForm.keyword),callback:function ($$v) {_vm.$set(_vm.searchForm, "keyword", $$v)},expression:"searchForm.keyword"}}),_vm._v(" "),(this.role_id == 8)?_c('label',{staticClass:"search-label"},[_vm._v("业务员：")]):_vm._e(),_vm._v(" "),(this.role_id == 8)?_c('el-select',{staticClass:"search-input search-select",attrs:{"clearable":"","placeholder":"请选择"},model:{value:(_vm.searchForm.agent_id),callback:function ($$v) {_vm.$set(_vm.searchForm, "agent_id", $$v)},expression:"searchForm.agent_id"}},_vm._l((_vm.agentLists),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.chinesename,"value":item.id}})})):_vm._e(),_vm._v(" "),_c('label',{staticClass:"search-label"},[_vm._v("时间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},model:{value:(_vm.searchForm.time_range),callback:function ($$v) {_vm.$set(_vm.searchForm, "time_range", $$v)},expression:"searchForm.time_range"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.fetchPushLists(_vm.searchForm)}}},[_vm._v("搜索")])],1),_vm._v(" "),_c('el-table',{staticClass:"pushList-tab",attrs:{"data":_vm.pushList}},[_c('el-table-column',{attrs:{"prop":"id","label":"id"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"order_no","label":"需求单号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user_name","label":"会员名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"rental_id","label":"房源编号"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"title","label":"房源"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"agent_name","label":"操作员"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"create_time","label":"推送时间"}})],1),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var customized_PushList = (esExports);
// CONCATENATED MODULE: ./src/views/912hf/customized/PushList.vue
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
  PushList,
  customized_PushList,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12hf_customized_PushList = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
webpackJsonp([3],{

/***/ "24uF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/fchaob/product/setTmpDetail.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var setTmpDetail = ({
  name: 'setTmpDetail',
  data: function data() {
    return {
      tmpId: this.$route.query.tmpId, //模板的id
      spaces: this.$route.query.spaces, //该模板选择的空间
      selectSpaces: [],
      faterLists: [],
      search: "",
      productLists: [],
      page: 1,
      cateId: 0,
      index: -1,
      setSpace: [],
      min: 0,
      selectList: [],
      makesureLists: []
    };
  },
  created: function created() {
    this.getFatherCate();
    // this.getProductLists();
    this.getInitTmpSet();
  },

  methods: {
    openSpace: function openSpace(key) {
      var productLists = this.productLists;
      var that = this;
      productLists.forEach(function (item, index) {
        if (index == key) {
          that.$set(item, "isShow", !item['isShow']);
        } else {
          that.$set(item, "isShow", false);
        }
      });
      this.productLists = productLists;
    },
    delectMakeSure: function delectMakeSure(key, k) {
      if (this.makesureLists[key]['selectSpaces'].length > 1) {
        this.makesureLists[key]['selectSpaces'].splice(k, 1);
      } else {
        if (this.makesureLists > 1) {
          this.makesureLists.splice(key, 1);
        } else {
          this.makesureLists = [];
        }
      }
    },
    submit: function submit() {
      var _this = this;

      var data = {
        tmpId: this.tmpId,
        lists: this.makesureLists
      };
      this.request({
        url: '/product/setTmp',
        method: 'post',
        data: data
      }).then(function (response) {
        var data = response.data;
        if (data.status == 1) {
          _this.$message({
            type: "success",
            message: "设置成功"
          });
        } else {
          _this.$message({
            type: "success",
            message: "设置失败"
          });
        }
      });
    },
    comfirmSelection: function comfirmSelection(product) {
      product['isShow'] = false;
      if (this.setSpace.length == 0) {
        return false;
      }
      this.setSpace.forEach(function (item, key) {
        var selectSpaces = item.selectSpaces.filter(function (s) {
          if (s.num > 0) {
            return s;
          }
        });
        item.selectSpaces = selectSpaces;
      });
      this.makesureLists = JSON.parse(stringify_default()(this.setSpace));
    },
    cancel: function cancel(product) {
      product['isShow'] = false;
    },
    selectCate: function selectCate(cateId, key) {
      this.cateId = cateId;
      this.page = 1;
      this.getProductLists();
      this.index = key;
    },
    searchPro: function searchPro() {
      this.page = 1;
      this.getProductLists();
    },
    getProductLists: function getProductLists() {
      var _this2 = this;

      var data = {
        page: this.page,
        status: 1,
        keyword: this.search,
        topCateId: this.cateId
      };
      this.request({
        url: '/product/lists',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        var productLists = data.data.data;
        var that = _this2;

        productLists.forEach(function (item, key) {
          that.$set(item, "isShow", false);
        });
        _this2.productLists = productLists;
        _this2.page = parseInt(data.data.current_page);
        _this2.total = data.data.total;
        return productLists;
      }).then(function (product) {
        _this2.getProductSpaces(product);
        return product;
      });
    },
    getProductSpaces: function getProductSpaces(product) {
      var _this3 = this;

      this.request({
        url: '/product/getProductSpaces',
        method: 'get'
      }).then(function (response) {
        var data = response.data.data;
        if (data.length > 1) {
          var selectSpaces = [];
          var spaces = _this3.spaces;
          var that = _this3;
          data.forEach(function (item, index) {
            var aa = spaces.find(function (c) {
              return c == item.id;
            });
            if (aa) {
              that.$set(item, "num", 0);
              selectSpaces.push(item);
            }
          });
          product.forEach(function (item, index) {
            item.selectSpaces = JSON.parse(stringify_default()(selectSpaces));
          });
          var makesure = _this3.makesureLists;
          var proIds = makesure.map(function (obj) {
            return obj.id;
          });
          product.forEach(function (item, key) {
            var index = proIds.indexOf(item.id);
            if (index !== -1) {
              var _spaces = makesure[index]["selectSpaces"];
              item['selectSpaces'].forEach(function (pSpace, k) {
                _spaces.forEach(function (mSpace, t) {
                  if (mSpace.id == pSpace.id) {
                    pSpace.num = mSpace.num;
                  }
                });
              });
            }
          });
        }
      });
    },
    selectedSpace: function selectedSpace(item) {
      var proIds = this.setSpace.map(function (obj) {
        return obj.id;
      });
      var index = proIds.indexOf(item.id);
      var data = {
        id: item.id,
        top_cate_id: item.top_cate_id,
        top_cate_name: item.top_cate_name,
        name: item.name,
        selectSpaces: item.selectSpaces
      };

      if (index !== -1) {
        this.setSpace[index] = data;
      } else {
        this.setSpace.push(data);
      }
    },
    getFatherCate: function getFatherCate() {
      var _this4 = this;

      this.request({
        url: '/product/getFatherCate',
        method: 'get'
      }).then(function (response) {
        var data = response.data;
        if (data.data.length > 1) {
          _this4.faterLists = data.data;
        }
      });
    },
    getInitTmpSet: function getInitTmpSet() {
      var _this5 = this;

      var data = {
        tmpId: this.tmpId
      };
      this.request({
        url: '/product/getInitTmpSet',
        method: 'get',
        params: data
      }).then(function (response) {
        var data = response.data;
        if (data.data.length > 1) {
          var makesureLists = data.data;
          _this5.makesureLists = makesureLists;
          _this5.setSpace = JSON.parse(stringify_default()(makesureLists));
          return makesureLists;
        }
      }).then(function (makesure) {
        _this5.getProductLists();
      });
    },
    pageChange: function pageChange(value) {
      this.page = value;
      this.getProductLists();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ef5ffe3c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/fchaob/product/setTmpDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"settmp-detail"}},[_c('el-input',{staticClass:"serach-input",attrs:{"placeholder":"请输入内容","suffix-icon":"el-icon-search"},on:{"blur":_vm.searchPro},model:{value:(_vm.search),callback:function ($$v) {_vm.search=$$v},expression:"search"}}),_vm._v(" "),_c('div',{attrs:{"id":"tmp-wapper"}},[_c('ul',{attrs:{"id":"spaces-ul"}},_vm._l((_vm.faterLists),function(item,key){return _c('li',{class:key==_vm.index?'active':'',on:{"click":function($event){_vm.selectCate(item.id,key)}}},[_vm._v(" "+_vm._s(item.name))])})),_vm._v(" "),_c('ul',{attrs:{"id":"product-ul"}},_vm._l((_vm.productLists),function(item,key){return _c('li',{staticClass:"product-li"},[_c('span',{staticClass:"product-name"},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('span',{staticClass:"spec"},[_vm._v(_vm._s(item.spec))]),_vm._v(" "),_c('i',{staticClass:"el-icon-circle-plus-outline icon",on:{"click":function($event){_vm.openSpace(key)}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(item.isShow),expression:"item.isShow"}],staticClass:"small-icon"}),_vm._v(" "),_c('el-dialog',{attrs:{"visible":item.isShow},on:{"update:visible":function($event){_vm.$set(item, "isShow", $event)}}},[_c('ul',{staticClass:"product-space-ul"},[_vm._l((item.selectSpaces),function(item1,k){return _c('li',{staticClass:"product-space-li",class:_vm.setSpace.indexOf(item1.id) === -1?'':'active'},[_c('span',[_vm._v(_vm._s(item1.name))]),_vm._v(" "),_c('div',[_c('el-input-number',{attrs:{"size":"mini","min":_vm.min},on:{"change":function($event){_vm.selectedSpace(item)}},model:{value:(item1.num),callback:function ($$v) {_vm.$set(item1, "num", $$v)},expression:"item1.num"}})],1),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}),_vm._v(" "),_c('div',{staticClass:"btn"},[_c('el-button',{attrs:{"plain":"","size":"mini"},on:{"click":function($event){_vm.cancel(item)}}},[_vm._v("取消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","plain":"","size":"mini"},on:{"click":function($event){_vm.comfirmSelection(item)}}},[_vm._v("确定")])],1),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})],2)])],1)})),_vm._v(" "),_c('div',{attrs:{"id":"pagination"}},[(_vm.productLists.length !== 0)?_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","current-page":this.page,"total":this.total},on:{"current-change":_vm.pageChange}}):_vm._e()],1),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}}),_vm._v(" "),_c('ul',{attrs:{"id":"makesure-ul"}},[_vm._l((_vm.makesureLists),function(item,key){return _c('li',[_c('span',{staticClass:"top-cate-name"},[_vm._v(_vm._s(item.top_cate_name))]),_vm._v(" "),_c('span',{staticClass:"product-name"},[_vm._v(_vm._s(item.name)+" ")]),_vm._v(" "),_c('ul',{staticClass:"sub-marksure-ul"},[_vm._l((item.selectSpaces),function(one,k){return _c('li',[_c('span',[_vm._v(" "+_vm._s(one.name))]),_vm._v(" "),_c('span',[_vm._v(" X"+_vm._s(one.num))]),_vm._v(" "),_c('i',{staticClass:"el-icon-circle-close",on:{"click":function($event){_vm.delectMakeSure(key,k)}}})])}),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})],2)])}),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})],2),_vm._v(" "),(_vm.makesureLists.length>0)?_c('el-button',{staticClass:"submit-btn",attrs:{"type":"primary","plain":"","size":"mini"},on:{"click":_vm.submit}},[_vm._v("确定")]):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var product_setTmpDetail = (esExports);
// CONCATENATED MODULE: ./src/views/fchaob/product/setTmpDetail.vue
function injectStyle (ssrContext) {
  __webpack_require__("JEye")
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
  setTmpDetail,
  product_setTmpDetail,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var fchaob_product_setTmpDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JEye":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("NyV+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("06f6ca2e", content, true);

/***/ }),

/***/ "NyV+":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n#settmp-detail{\r\n  width: 90%;\r\n  margin: 10px auto;\n}\n#settmp-detail .serach-input{\r\n  width: 50%;\n}\n#tmp-wapper{\r\n  position: relative;\r\n  margin-top: 20px;\n}\nul,li{\r\n  list-style: none;\r\n  padding: 0;\n}\n#spaces-ul{\r\n  list-style: none;\r\n  width: 15%;\r\n  padding: 0;\r\n  float: left;\n}\n#spaces-ul li{\r\n  height: 40px;\r\n  line-height: 40px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #ccc;\r\n  border-left: 1px solid #ccc;\r\n  border-right: 1px solid #ccc;\r\n  cursor: pointer;\r\n  border-radius: 5px;\n}\n#spaces-ul .active , .product-space-ul .active{\r\n  color: #409EFF !important;\n}\n#spaces-ul li:hover{\r\n  color: #409EFF;\n}\n.product-space-ul li:hover{\r\n  color: #409EFF;\n}\n#product-ul{\r\n  list-style: none;\r\n  width: 70%;\r\n  padding: 0;\r\n  float: left;\r\n  margin-left: 50px;\n}\n#product-ul .product-li{\r\n  height: 40px;\r\n  cursor: pointer;\r\n  position: relative;\n}\n#product-ul li .spec{\r\n  font-size: 14px;\r\n  color: #190808;\n}\n#product-ul .product-space-ul{\r\n  list-style: none;\r\n  padding: 10px;\r\n  font-size: 12px;\n}\n#product-ul .product-space-li{\r\n  float: left;\r\n  width: 24%;\r\n  height: 70px;\r\n  line-height: 30px;\r\n  border: 1px solid #d0d0d0;\r\n  margin: 8px 5px 8px 0px;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  color: #5a5353\n}\n#product-ul .product-space-ul :nth-child(4n){\r\n  margin-right: 0px;\n}\n#product-ul .icon{\r\n  position: relative;\r\n  float: right;\r\n  left: -30%;\n}\n#product-ul .small-icon{\r\n  width: 10px;\r\n  height: 10px;\r\n  background-color: rgb(243, 243, 243);\r\n  position: absolute;\r\n  left: 56%;\r\n  top:0;\r\n  -webkit-transform: rotate(-45deg) translateX(-50%);\r\n          transform: rotate(-45deg) translateX(-50%);\n}\n#product-ul li .product-name{\r\n  font-weight: 999;\r\n  color: #c33c3c;\n}\n#spaces-ul :nth-child(1){\r\n  border-top: 1px solid #ccc;\n}\n.btn{\r\n  margin-top: 50px;\r\n  float: right;\n}\n#settmp-detail #pagination {\r\n  position: absolute;\r\n  left: 55%;\r\n  top: 405px;\n}\n#makesure-ul{\r\n  margin-top: 30px;\n}\n#settmp-detail .el-input-number{\r\n  width: 100px !important;\n}\n#settmp-detail .el-input-number--mini .el-input-number__decrease, .el-input-number--mini .el-input-number__increase{\r\n  width: 20px !important;\n}\n.sub-marksure-ul li{\r\n  padding: 15px;\r\n  float: left;\r\n  width: 135px;\r\n  font-size: 14px;\n}\n.submit-btn{\r\n  float: right;\r\n  margin-bottom: 30px;\n}\n#tmp-wapper .top-cate-name{\r\n  font-size: 14px;\r\n  font-weight: 999;\r\n  color: #9e6060;\r\n  display: inline-block;\r\n  width: 60px;\n}\n#tmp-wapper .product-name{\r\n    font-size: 14px;\r\n    display: inline-block;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("qkKv"), __esModule: true };

/***/ }),

/***/ "qkKv":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ })

});
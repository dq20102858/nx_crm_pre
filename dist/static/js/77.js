webpackJsonp([77],{

/***/ "WsQL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/912cms/baike.js
var baike = __webpack_require__("9j6o");

// EXTERNAL MODULE: ./src/components/ImageCropper/index.vue + 6 modules
var ImageCropper = __webpack_require__("Oakg");

// EXTERNAL MODULE: ./node_modules/_vuedraggable@2.23.0@vuedraggable/dist/vuedraggable.common.js
var vuedraggable_common = __webpack_require__("VsiF");
var vuedraggable_common_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_common);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/baike/QuestionEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var QuestionEdit = ({
    name: 'QuestionEdit',
    components: { ImageCropper: ImageCropper["a" /* default */], draggable: vuedraggable_common_default.a },
    data: function data() {
        var _this = this;

        return {
            data: {
                id: this.$route.params.id,
                title: null,
                update_time: null,
                content: null,
                sub_cate_id: null,
                cate_id: null,
                banner: null,
                type: 1,
                ordid: null,
                option: null,
                status: null,
                is_rec: null,
                is_img_text: null,
                answer: [{
                    name: '',
                    is_show: 0,
                    content: '',
                    type: 2
                }]
            },
            imagecropperShow: false,
            id: this.$route.params.id,
            catelist1: [],
            catelist2: [],
            cateId1: null,
            dialogImageUrl: null,
            dialogVisible: false,
            imagecropperKey: 0,
            arr: [],
            list1: [],
            host: "http://" + location.host,
            // host: "http://boss.912zufang.com",
            total: 0,
            pagesize: 0,
            currentPage: 0,
            page: 1,
            last_page: 1,
            rules: {
                banner: [{
                    validator: function validator(rule, value, callback) {
                        console.log(_this.data.is_img_text);
                        if (_this.data.is_img_text == 1 && !_this.data.banner) {
                            callback(new Error("选择图文展示，banner为必填"));
                        } else {
                            callback();
                        }
                    },
                    trigger: "blur"
                }],
                title: [{
                    required: true,
                    message: "请填写标题",
                    trigger: "blur"
                }]
            }
        };
    },

    created: function created() {
        this.getAskCateList();
        if (this.$route.params.id != 0) {
            this.getQuestionDetail();
            this.getUserAnswerLists();
        }
    },
    methods: {
        handleCurrentChange: function handleCurrentChange(val) {
            this.page = val;
            this.getUserAnswerLists();
        },
        changearr: function changearr(index) {
            var _this2 = this;

            var drag = 0;
            this.arr.map(function (item, index1) {
                if (item.id == _this2.list1[index].id) {
                    _this2.arr.splice(index1, 1, _this2.list1[index]);
                    drag = 1;
                }
            });
            if (drag == 0) {
                this.arr.push(this.list1[index]);
            }
            console.log(this.arr);
        },
        editUserAnsers: function editUserAnsers() {
            var _this3 = this;

            Object(baike["j" /* editUserAnsers */])(this.arr).then(function (res) {
                if (res.data.status) {
                    _this3.$message({
                        type: "success",
                        message: res.data.msg
                    });
                } else {
                    _this3.$message({
                        type: "error",
                        message: res.data.msg
                    });
                }
            });
        },
        deleteAnswer: function deleteAnswer(index) {
            this.data.answer.splice(index, 1);
        },
        changeguanfang: function changeguanfang(index, type) {
            if (type == 1) {
                this.data.answer.map(function (item, index1) {
                    if (index1 == index) {
                        item.type = 1;
                        item.is_show = 1;
                    } else {
                        item.type = 2;
                    }
                });
            }
            if (this.data.answer[index].id) {
                this.data.answer[index].is_change = 1;
            }
            console.log(this.data.answer);
        },
        addAnswer: function addAnswer() {
            if (this.data.answer && this.data.answer.length && this.data.answer.length > 0) {
                if (!this.data.answer[this.data.answer.length - 1].user_name || !this.data.answer[this.data.answer.length - 1].content) {
                    this.$message({
                        type: "error",
                        message: '请先完善上一条回答内容和回答人'
                    });
                    return;
                }
                if (this.data.answer.length == 10) {
                    this.$message({
                        type: "error",
                        message: '最多只能增加十条回答'
                    });
                    return;
                }
            }
            this.data.answer.push({
                name: '',
                is_show: 0,
                content: '',
                type: 2
            });
        },
        handlePictureCardPreview: function handlePictureCardPreview() {
            this.dialogImageUrl = this.data.banner;
            this.dialogVisible = true;
        },
        cropSuccess: function cropSuccess(resData) {
            this.imagecropperShow = false;
            this.imagecropperKey = this.imagecropperKey + 1;
            this.data.banner = resData.data.show_url;
        },
        close: function close() {
            this.imagecropperShow = false;
        },
        showBigImg: function showBigImg() {
            this.dialogImageUrl = this.data.banner;
            this.dialogVisible = true;
        },
        uploadimg: function uploadimg() {
            this.imagecropperShow = true;
            this.dialogVisible = false;
        },
        getAskCateList: function getAskCateList() {
            var _this4 = this;

            Object(baike["k" /* getAskCateList */])().then(function (response) {
                var data = response.data.data;
                if (data) {
                    _this4.catelist1 = data;
                }
            }).catch(function (err) {
                console.log(err);
            });
        },
        changecate1: function changecate1(first) {
            var _this5 = this;

            if (!first) {
                this.data.sub_cate_id = null;
            }
            this.catelist1.map(function (item, index) {
                if (item.id == _this5.data.cate_id) {
                    if (item.sub) {
                        _this5.catelist2 = item.sub;
                    } else {
                        _this5.catelist2 = [];
                    }
                }
            });
        },
        getQuestionDetail: function getQuestionDetail() {
            var _this6 = this;

            Object(baike["o" /* getQuestionDetail */])(this.id).then(function (response) {
                response.data.data.update_time = _this6.$options.filters.formatTime(response.data.data.update_time);
                _this6.data = response.data.data;
                if (!_this6.data.answer) {
                    _this6.data.answer = [];
                }
                _this6.changecate1(1);
            }).catch(function (err) {
                console.log(err);
            });
        },
        getUserAnswerLists: function getUserAnswerLists() {
            var _this7 = this;

            Object(baike["q" /* getUserAnswerLists */])(this.page, this.id).then(function (response) {
                _this7.list1 = response.data.data.data;
                _this7.total = response.data.data.total;
                _this7.pagesize = response.data.data.per_page;
            }).catch(function (err) {
                console.log(err);
            });
        },
        onSubmit: function onSubmit(formName) {
            var _this8 = this;

            this.$refs[formName].validate(function (valid) {
                if (valid) {
                    Object(baike["d" /* addOrEditAnswer */])(_this8.data).then(function (res) {
                        if (res.data.status) {
                            _this8.$message({
                                type: "success",
                                message: res.data.msg
                            });
                            if (!_this8.data.id) {
                                setTimeout(function () {
                                    _this8.$store.dispatch("delView", _this8.$route);
                                    _this8.$router.go(-1);
                                }, 500);
                            }
                        } else {
                            _this8.$message({
                                type: "error",
                                message: res.data.msg
                            });
                        }
                    });
                } else {
                    setTimeout(function () {
                        var isError = document.getElementsByClassName("is-error");
                        if (isError[0].querySelector("input")) {
                            isError[0].querySelector("input").focus();
                        }
                    }, 100);
                    return false;
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4115e566","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/baike/QuestionEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-form',{ref:"data",attrs:{"model":_vm.data,"label-width":"150px","rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"提问标题：","prop":"title"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.data.title),callback:function ($$v) {_vm.$set(_vm.data, "title", $$v)},expression:"data.title"}},[_c('i',{staticClass:"el-icon-edit el-input__icon",attrs:{"slot":"suffix"},slot:"suffix"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提问时间：","prop":"update_time"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"text","disabled":""},model:{value:(_vm.data.create_time),callback:function ($$v) {_vm.$set(_vm.data, "create_time", $$v)},expression:"data.create_time"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提问内容：","prop":"content"}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"textarea","rows":3},model:{value:(_vm.data.content),callback:function ($$v) {_vm.$set(_vm.data, "content", $$v)},expression:"data.content"}},[_c('i',{staticClass:"el-icon-edit el-input__icon",attrs:{"slot":"suffix"},slot:"suffix"})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"问题类型："}},[_c('el-select',{attrs:{"clearable":""},on:{"change":_vm.changecate1},model:{value:(_vm.data.cate_id),callback:function ($$v) {_vm.$set(_vm.data, "cate_id", $$v)},expression:"data.cate_id"}},_vm._l((_vm.catelist1),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})),_vm._v(" "),(_vm.data.cate_id&&this.catelist2.length>0)?_c('el-select',{attrs:{"clearable":""},model:{value:(_vm.data.sub_cate_id),callback:function ($$v) {_vm.$set(_vm.data, "sub_cate_id", $$v)},expression:"data.sub_cate_id"}},_vm._l((_vm.catelist2),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.name,"value":item.id}})})):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"line"}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"30px","margin-right":"10px"},attrs:{"type":"primary"},on:{"click":_vm.addAnswer}},[_vm._v("新增回答")]),_vm._v("*最多添加十条回答内容\n            "),_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.data.answer,"group":"article"}},_vm._l((_vm.data.answer),function(item,index){return _c('div',{key:index,staticClass:"list1"},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-radio',{attrs:{"label":1},on:{"change":function($event){_vm.changeguanfang(index,1)}},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},[_vm._v("官方回答")]),_vm._v("\n                回答人："),_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"text","rows":3},on:{"change":function($event){_vm.changeguanfang(index)}},model:{value:(item.user_name),callback:function ($$v) {_vm.$set(item, "user_name", $$v)},expression:"item.user_name"}}),_vm._v(" "),_c('el-input',{staticStyle:{"width":"100%","margin":"10px 0"},attrs:{"type":"textarea","rows":3},on:{"change":function($event){_vm.changeguanfang(index)}},model:{value:(item.content),callback:function ($$v) {_vm.$set(item, "content", $$v)},expression:"item.content"}}),_vm._v(" "),(item.type!=1)?_c('el-checkbox',{attrs:{"true-label":1,"false-label":0},on:{"change":function($event){_vm.changeguanfang(index)}},model:{value:(item.is_show),callback:function ($$v) {_vm.$set(item, "is_show", $$v)},expression:"item.is_show"}},[_vm._v("前台展示")]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"el-icon-delete",on:{"click":function($event){_vm.deleteAnswer(index)}}})],1)})),_vm._v(" "),_c('div',{staticClass:"line"}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"审核状态：","prop":"status"}},[_c('el-radio-group',{model:{value:(_vm.data.status),callback:function ($$v) {_vm.$set(_vm.data, "status", $$v)},expression:"data.status"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":-1}},[_vm._v("待审")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否解决：","prop":"option"}},[_c('el-radio-group',{model:{value:(_vm.data.option),callback:function ($$v) {_vm.$set(_vm.data, "option", $$v)},expression:"data.option"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("已解决")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("待解决")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"是否推荐："}},[_c('el-radio-group',{model:{value:(_vm.data.is_rec),callback:function ($$v) {_vm.$set(_vm.data, "is_rec", $$v)},expression:"data.is_rec"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("推荐")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("不推荐")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图文展示："}},[_c('el-radio-group',{model:{value:(_vm.data.is_img_text),callback:function ($$v) {_vm.$set(_vm.data, "is_img_text", $$v)},expression:"data.is_img_text"}},[_c('el-radio',{attrs:{"label":1}},[_vm._v("是")]),_vm._v(" "),_c('el-radio',{attrs:{"label":0}},[_vm._v("否")])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"上传banner：","prop":"banner"}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":_vm.uploadimg}},[(_vm.data.banner)?_c('img',{staticClass:"avatar",staticStyle:{"width":"200px"},attrs:{"src":_vm.data.banner}}):_vm._e(),_vm._v(" "),(_vm.data.banner)?_c('span',{staticStyle:{"position":"absolute","top":"5%","margin-left":"70px","height":"22px","line-height":"22px","border-radius":"2px","font-size":"20px","background":"#fff"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview($event)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])])]),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow),expression:"imagecropperShow"}],key:"'imagecropperKey",attrs:{"width":547,"height":263,"step":1,"params":{isPublic: 0,noWater:1},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序："}},[_c('el-input',{staticStyle:{"width":"300px"},attrs:{"type":"number"},model:{value:(_vm.data.ordid),callback:function ($$v) {_vm.$set(_vm.data, "ordid", $$v)},expression:"data.ordid"}}),_vm._v("*数字越小越靠前\n            ")],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onSubmit('data')}}},[_vm._v("提交")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"line"}),_vm._v(" "),_c('div',{staticStyle:{"width":"800px","margin":"30px auto"}},[_c('el-badge',{staticClass:"item",staticStyle:{"margin-left":"30px"},attrs:{"value":_vm.total}},[_c('el-button',{attrs:{"size":"small"}},[_vm._v("用户回答")])],1),_vm._v(" "),(_vm.list1.length>0)?_c('div',[_vm._l((_vm.list1),function(item,index){return _c('div',{key:item.id,staticClass:"list1"},[_vm._v("\n            回答人："),_c('el-input',{staticStyle:{"width":"200px"},attrs:{"type":"text","rows":3},on:{"change":function($event){_vm.changearr(index)}},model:{value:(item.user_name),callback:function ($$v) {_vm.$set(item, "user_name", $$v)},expression:"item.user_name"}}),_vm._v("\n            回答时间："),_c('el-input',{staticStyle:{"width":"200px"},attrs:{"type":"text","disabled":""},model:{value:(item.create_time),callback:function ($$v) {_vm.$set(item, "create_time", $$v)},expression:"item.create_time"}}),_vm._v(" "),_c('el-input',{staticStyle:{"width":"100%","margin":"10px 0"},attrs:{"type":"textarea","rows":3},on:{"change":function($event){_vm.changearr(index)}},model:{value:(item.content),callback:function ($$v) {_vm.$set(item, "content", $$v)},expression:"item.content"}}),_vm._v(" "),_c('el-checkbox',{attrs:{"true-label":1,"false-label":0},on:{"change":function($event){_vm.changearr(index)}},model:{value:(item.is_show),callback:function ($$v) {_vm.$set(item, "is_show", $$v)},expression:"item.is_show"}},[_vm._v("前台展示")]),_vm._v("\n            状态："),_c('el-radio-group',{on:{"change":function($event){_vm.changearr(index)}},model:{value:(item.status),callback:function ($$v) {_vm.$set(item, "status", $$v)},expression:"item.status"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v("删除")]),_vm._v(" "),_c('el-radio',{attrs:{"label":-1}},[_vm._v("待审")]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v("审核通过")]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v("审核中")]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v("不通过")])],1)],1)}),_vm._v(" "),(_vm.total>_vm.pagesize)?_c('div',{attrs:{"id":"pagination"}},[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":this.total,"page-size":this.pagesize,"current-page":_vm.page},on:{"update:currentPage":function($event){_vm.page=$event},"current-change":_vm.handleCurrentChange}})],1):_vm._e(),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"30px"},attrs:{"type":"primary"},on:{"click":function($event){_vm.editUserAnsers()}}},[_vm._v("确定")])],2):_c('div',{staticStyle:{"padding":"30px 0","text-align":"center"}},[_vm._v("暂无用户回答")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var baike_QuestionEdit = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/baike/QuestionEdit.vue
function injectStyle (ssrContext) {
  __webpack_require__("ujps")
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
  QuestionEdit,
  baike_QuestionEdit,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_baike_QuestionEdit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hCta":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\ninput {\n  width: 300px;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.list1 {\n  border: 1px solid #eee;\n  padding: 15px 30px;\n  margin: 10px 30px;\n  border-radius: 5px;\n  position: relative;\n}\n.el-icon-rank {\n  position: absolute;\n  left: -25px;\n  top: 25px;\n  display: none;\n}\n.list1:hover .el-icon-rank {\n  display: inline;\n}\n.el-icon-delete {\n  position: absolute;\n  right: -25px;\n  top: 25px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "ujps":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("hCta");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("931152e6", content, true);

/***/ })

});
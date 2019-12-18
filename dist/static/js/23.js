webpackJsonp([23],{

/***/ "2v7Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/912cms/information.js
var information = __webpack_require__("O6uv");

// EXTERNAL MODULE: ./src/utils/common.js
var common = __webpack_require__("X2Oc");

// EXTERNAL MODULE: ./src/utils/auth.js
var auth = __webpack_require__("TIfe");

// EXTERNAL MODULE: ./src/components/Refresh/index.vue + 2 modules
var Refresh = __webpack_require__("pLWS");

// EXTERNAL MODULE: ./node_modules/_vuedraggable@2.23.0@vuedraggable/dist/vuedraggable.common.js
var vuedraggable_common = __webpack_require__("VsiF");
var vuedraggable_common_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_common);

// EXTERNAL MODULE: ./src/components/ImageCropper/index.vue + 6 modules
var ImageCropper = __webpack_require__("Oakg");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/912cms/information/Toutiao.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







// import colorpicker from 'colorpicker'
/* harmony default export */ var Toutiao = ({
    name: "Toutiao",
    components: { draggable: vuedraggable_common_default.a, ImageCropper: ImageCropper["a" /* default */] },
    data: function data() {
        return {
            ruleForm: {
                color: '#000',
                pic_headlines: [], //图片头条
                recommend: [], //首页推荐	
                article_headlines: [], //头条文章 
                advertise: [], //资讯广告
                hot_guide: [], //热门导购
                list_banner: [] //列表页banner
            },
            cells: [],
            rules: {},
            loading: false,
            imagecropperKey: 0,
            host: "http://" + location.host,
            // host: "http://boss.912zufang.com",
            imagecropperShow: {
                list_banner: false,
                hot_guide: false,
                advertise: false,
                pic_headlines: false
            },
            dialogImageUrl: "",
            dialogVisible: false,
            type: null,
            index: null
        };
    },

    created: function created() {
        this.newsSetDetail();
    },
    methods: {
        getdata: function getdata(evt) {
            console.log(evt);
            //这里evt.draggedContext后续的内容根据具体的定义变量而定
        },
        datadragEnd: function datadragEnd(evt) {
            console.log('拖动前的索引 :' + evt.oldIndex);
            console.log('拖动后的索引 :' + evt.newIndex);
            console.log(evt);

            // let filters = this.filters;
            // for(let a=0;a<filters.length;a++){
            //     filters[a].index = a;
            // }
            // vm.report.filter = filters;
        },
        uploadimg: function uploadimg(type, index) {
            if (type) {
                this.type = type;
                this.index = index;
            }
            this.imagecropperShow[this.type] = true;
            this.dialogVisible = false;
        },
        handlePictureCardPreview: function handlePictureCardPreview(type, index) {
            this.dialogImageUrl = this.ruleForm[type][index].img;
            this.dialogVisible = true;
        },
        cropSuccess: function cropSuccess(resData) {
            this.imagecropperShow[this.type] = false;
            this.imagecropperKey = this.imagecropperKey + 1;
            this.ruleForm[this.type][this.index].img = resData.data.show_url;
        },
        close: function close() {
            this.imagecropperShow[this.type] = false;
        },
        showBigImg: function showBigImg(name, index) {
            this.type = name;
            this.index = index;
            this.dialogImageUrl = this.ruleForm[name][index].img;
            this.dialogVisible = true;
        },
        showBigImg1: function showBigImg1(name, index) {
            this.type = name;
            this.index = index;
            this.imagecropperShow[this.type] = true;
        },
        additem: function additem(name) {
            this.ruleForm[name].unshift({ id: '', title: '', img: '', url: '' });
        },
        removeitem: function removeitem(name, index) {
            this.ruleForm[name].splice(index, 1);
        },
        changeitem: function changeitem(name, index, e) {
            if (e.id) {
                if (name == 'pic_headlines' || name == 'article_headlines') {
                    if (this.ruleForm[name][index].title == '' || !this.ruleForm[name][index].title) {
                        this.ruleForm[name].splice(index, 1, e);
                        this.ruleForm[name][index].url = e.title;
                    } else {
                        this.ruleForm[name][index].id = e.id;
                        this.ruleForm[name][index].url = e.title;
                        this.ruleForm[name][index].img = e.img;
                    }
                } else {
                    this.ruleForm[name].splice(index, 1, e);
                }
            } else {
                this.ruleForm[name][index].url = e;
                this.ruleForm[name][index].id = '';
            }
            this.getNewsListsByName();
        },
        getNewsListsByName: function getNewsListsByName(query) {
            var _this = this;

            if (query != '') {
                this.loading = true;
                Object(information["g" /* getNewsListsByName */])(query).then(function (response) {
                    _this.loading = false;
                    var data = response.data.data;
                    if (data) {
                        _this.cells = data;
                    }
                });
            } else {
                this.cells = [];
            }
        },
        submitForm: function submitForm() {
            var _this2 = this;

            if (this.ruleForm.pic_headlines.length < 3 || this.ruleForm.pic_headlines.length > 5) {
                this.$message({
                    type: "error",
                    message: '图片头条必须为三到五条'
                });
                return;
            }
            if (!this.ruleForm.pic_headlines[0].title || !this.ruleForm.pic_headlines[1].title || !this.ruleForm.pic_headlines[2].title || this.ruleForm.pic_headlines[0].title == '' || this.ruleForm.pic_headlines[1].title == '' || this.ruleForm.pic_headlines[2].title == '') {
                this.$message({
                    type: "error",
                    message: '图片头条前三条title不可以为空'
                });
                return;
            }
            if (!this.ruleForm.pic_headlines[0].url || !this.ruleForm.pic_headlines[1].url || !this.ruleForm.pic_headlines[2].url || this.ruleForm.pic_headlines[0].url == '' || this.ruleForm.pic_headlines[1].url == '' || this.ruleForm.pic_headlines[2].url == '') {
                this.$message({
                    type: "error",
                    message: '图片头条前三条url不可以为空'
                });
                return;
            }
            if (this.ruleForm.recommend.length < 3 || this.ruleForm.recommend.length > 5) {
                this.$message({
                    type: "error",
                    message: '首页推荐必须为三到五条'
                });
                return;
            }
            if (!this.ruleForm.recommend[0].title || !this.ruleForm.recommend[1].title || !this.ruleForm.recommend[2].title || this.ruleForm.recommend[0].title == '' || this.ruleForm.recommend[1].title == '' || this.ruleForm.recommend[2].title == '') {
                this.$message({
                    type: "error",
                    message: '首页推荐前三条title不可以为空'
                });
                return;
            }
            if (!this.ruleForm.recommend[0].url || !this.ruleForm.recommend[1].url || !this.ruleForm.recommend[2].url || this.ruleForm.recommend[0].url == '' || this.ruleForm.recommend[1].url == '' || this.ruleForm.recommend[2].url == '') {
                this.$message({
                    type: "error",
                    message: '首页推荐前三条url不可以为空'
                });
                return;
            }
            if (this.ruleForm.article_headlines.length < 1 || this.ruleForm.article_headlines.length > 5) {
                this.$message({
                    type: "error",
                    message: '头条文章必须为一到五条'
                });
                return;
            }
            if (!this.ruleForm.article_headlines[0].title || this.ruleForm.article_headlines[0].title == '') {
                this.$message({
                    type: "error",
                    message: '头条文章第一条title为必填'
                });
                return;
            }
            if (!this.ruleForm.article_headlines[0].url || this.ruleForm.article_headlines[0].url == '') {
                this.$message({
                    type: "error",
                    message: '头条文章第一条url为必填'
                });
                return;
            }
            if (this.ruleForm.advertise.length < 1 || this.ruleForm.advertise.length > 5) {
                this.$message({
                    type: "error",
                    message: '资讯广告必须为一到五条'
                });
                return;
            }
            if (!this.ruleForm.advertise[0].url || !this.ruleForm.advertise[0].img || this.ruleForm.advertise[0].url == '' || this.ruleForm.advertise[0].img == '') {
                this.$message({
                    type: "error",
                    message: '资讯广告第一条为必填'
                });
                return;
            }
            if (this.ruleForm.hot_guide.length < 3 || this.ruleForm.hot_guide.length > 5) {
                this.$message({
                    type: "error",
                    message: '热门导购必须为三到五条'
                });
                return;
            }
            if (!this.ruleForm.hot_guide[0].id || !this.ruleForm.hot_guide[1].id || !this.ruleForm.hot_guide[2].id || this.ruleForm.hot_guide[0].id == '' || this.ruleForm.hot_guide[1].id == '' || this.ruleForm.hot_guide[2].id == '') {
                this.$message({
                    type: "error",
                    message: '热门导购前三条不可以为空'
                });
                return;
            }
            if (this.ruleForm.list_banner.length < 3 || this.ruleForm.list_banner.length > 5) {
                this.$message({
                    type: "error",
                    message: '列表页banner必须为三到五条'
                });
                return;
            }
            if (!this.ruleForm.list_banner[0].id || !this.ruleForm.list_banner[1].id || !this.ruleForm.list_banner[2].id || this.ruleForm.list_banner[0].id == '' || this.ruleForm.list_banner[1].id == '' || this.ruleForm.list_banner[2].id == '') {
                this.$message({
                    type: "error",
                    message: '列表页banner前三条不可以为空'
                });
                return;
            }
            this.ruleForm.pic_headlines = this.ruleForm.pic_headlines.filter(function (item) {
                return item.title && item.title != '';
            });
            this.ruleForm.article_headlines = this.ruleForm.article_headlines.filter(function (item) {
                return item.title && item.title != '';
            });
            this.ruleForm.hot_guide = this.ruleForm.hot_guide.filter(function (item) {
                return item.id && item.id != '';
            });
            this.ruleForm.list_banner = this.ruleForm.list_banner.filter(function (item) {
                return item.id && item.id != '';
            });
            this.ruleForm.advertise = this.ruleForm.advertise.filter(function (item) {
                return item.img != '' || item.url != '';
            });
            this.ruleForm.recommend = this.ruleForm.recommend.filter(function (item) {
                console.log(item);
                return item.title != '' || item.url != '';
            });
            console.log(this.ruleForm.recommend);
            Object(information["i" /* set912News */])(this.ruleForm).then(function (response) {
                if (response.data.status) {
                    _this2.$message({
                        type: "success",
                        message: response.data.msg
                    });
                } else {
                    _this2.$message({
                        type: "error",
                        message: response.data.msg
                    });
                }
            });
        },
        newsSetDetail: function newsSetDetail() {
            var _this3 = this;

            Object(information["h" /* newsSetDetail */])().then(function (response) {
                if (response.data.data) {
                    _this3.ruleForm = response.data.data;
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ec45a3e6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/912cms/information/Toutiao.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"20px"}},[_c('el-row',[_c('el-col',{attrs:{"span":18}},[_c('el-form',{ref:"ruleForm",staticClass:"require-form",attrs:{"model":_vm.ruleForm,"rules":_vm.rules,"label-width":"15%","id":"consult-form","size":"small"}},[_c('el-form-item',{attrs:{"label":"图片头条"}},[_c('el-row',[(_vm.ruleForm.pic_headlines.length<5)?_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){_vm.additem("pic_headlines")}}},[_vm._v("新增图片头条")]):_vm._e(),_vm._v("    "),_c('span',{staticClass:"msg-info"},[_vm._v("* 请不要超过五条，少于三条")])],1),_vm._v(" "),_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.ruleForm.pic_headlines,"group":"article1","move":_vm.getdata},on:{"update":_vm.datadragEnd}},_vm._l((_vm.ruleForm.pic_headlines),function(item,index){return _c('el-row',{key:index,staticClass:"foundhover",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"maxlength":"20","placeholder":"请输入资讯名称，18字为佳"},model:{value:(item.title),callback:function ($$v) {_vm.$set(item, "title", $$v)},expression:"item.title"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":10}},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-select',{staticStyle:{"display":"inline"},attrs:{"value-key":"id","filterable":"","allow-create":"","remote":"","reserve-keyword":"","placeholder":"请输入资讯标题","remote-method":_vm.getNewsListsByName,"loading":_vm.loading},on:{"change":function($event){_vm.changeitem("pic_headlines",index,$event)}},model:{value:(item.url),callback:function ($$v) {_vm.$set(item, "url", $$v)},expression:"item.url"}},_vm._l((_vm.cells),function(item1){return _c('el-option',{key:item1.id,attrs:{"label":item1.title,"value":item1}})}))],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[(item.img&&item.img!=='')?_c('el-button',{attrs:{"plain":""},on:{"click":function($event){_vm.showBigImg("pic_headlines",index)}}},[_vm._v("查看首图")]):_c('el-button',{attrs:{"plain":""},on:{"click":function($event){_vm.showBigImg1("pic_headlines",index)}}},[_vm._v("上传首图")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","plain":"","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.removeitem("pic_headlines",index)}}})],1)],1)}))],1),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow.pic_headlines),expression:"imagecropperShow.pic_headlines"}],key:'pic_headlines'+_vm.imagecropperKey,attrs:{"width":296,"height":158,"step":1,"params":{isPublic: 0,noWater:1},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"头条文章"}},[_c('el-row',[(_vm.ruleForm.article_headlines.length<5)?_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){_vm.additem("article_headlines")}}},[_vm._v("新增头条文章")]):_vm._e(),_vm._v("    "),_c('span',{staticClass:"msg-info"},[_vm._v("* 请不要超过五条,少于一条")])],1),_vm._v(" "),_c('el-row',[_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.ruleForm.article_headlines,"group":"article2"}},_vm._l((_vm.ruleForm.article_headlines),function(item,index){return _c('el-row',{key:index,staticClass:"foundhover",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-input',{staticStyle:{"width":"100%"},attrs:{"maxlength":"20","placeholder":"请输入文章名称"},model:{value:(item.title),callback:function ($$v) {_vm.$set(item, "title", $$v)},expression:"item.title"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":10}},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-select',{staticStyle:{"display":"inline"},attrs:{"value-key":"id","filterable":"","allow-create":"","remote":"","reserve-keyword":"","placeholder":"请输入头条文章标题","remote-method":_vm.getNewsListsByName,"loading":_vm.loading},on:{"change":function($event){_vm.changeitem("article_headlines",index,$event)}},model:{value:(item.url),callback:function ($$v) {_vm.$set(item, "url", $$v)},expression:"item.url"}},_vm._l((_vm.cells),function(item1){return _c('el-option',{key:item1.id,attrs:{"label":item1.title,"value":item1}})}))],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-button',{attrs:{"type":"danger","plain":"","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.removeitem("article_headlines",index)}}})],1)],1)}))],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首页推荐"}},[_c('el-row',[(_vm.ruleForm.recommend.length<5)?_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){_vm.additem("recommend")}}},[_vm._v("新增首页推荐")]):_vm._e(),_vm._v("    "),_c('span',{staticClass:"msg-info"},[_vm._v("* 请不要超过五条，少于三条")])],1),_vm._v(" "),_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.ruleForm.recommend,"group":"article3"}},_vm._l((_vm.ruleForm.recommend),function(item,index){return _c('el-row',{key:index,staticClass:"foundhover",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-input',{staticStyle:{"width":"100%"},attrs:{"maxlength":"6","placeholder":"请输入推荐标题，不超过六个字"},model:{value:(item.title),callback:function ($$v) {_vm.$set(item, "title", $$v)},expression:"item.title"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":9}},[_c('el-input',{attrs:{"type":"url","maxlength":"100","placeholder":"请输入网址"},model:{value:(item.url),callback:function ($$v) {_vm.$set(item, "url", $$v)},expression:"item.url"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-select',{staticStyle:{"display":"inline"},attrs:{"clearable":"","placeholder":"是否加粗"},model:{value:(item.bold),callback:function ($$v) {_vm.$set(item, "bold", $$v)},expression:"item.bold"}},[_c('el-option',{attrs:{"label":"不加粗","value":"100"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"加粗","value":"600"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":1}},[_c('el-color-picker',{staticClass:"theme-picker",attrs:{"predefine":['#4A4A4A', '#FF7500', '#FF0000','#F9BE00','#4A90E2'],"popper-class":"theme-picker-dropdown"},model:{value:(item.color),callback:function ($$v) {_vm.$set(item, "color", $$v)},expression:"item.color"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-button',{attrs:{"type":"danger","plain":"","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.removeitem("recommend",index)}}})],1)],1)}))],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"资讯广告"}},[_c('el-row',[(_vm.ruleForm.advertise.length<5)?_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){_vm.additem("advertise")}}},[_vm._v("新增资讯广告")]):_vm._e(),_vm._v("    "),_c('span',{staticClass:"msg-info"},[_vm._v("* 请不要超过五条,少于一条")])],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":18}},[_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.ruleForm.advertise,"group":"article4"}},_vm._l((_vm.ruleForm.advertise),function(item,index){return _c('el-row',{key:index,staticClass:"foundhover",attrs:{"gutter":20}},[_c('div',{staticClass:"avatar-uploader"},[_c('div',{staticClass:"el-upload el-upload--text",attrs:{"tabindex":"0"},on:{"click":function($event){_vm.uploadimg('advertise',index)}}},[(item.img)?_c('img',{staticClass:"avatar",staticStyle:{"width":"200px"},attrs:{"src":item.img}}):_vm._e(),_vm._v(" "),(item.img)?_c('span',{staticStyle:{"position":"absolute","top":"5%","margin-left":"70px","font-size":"20px"},on:{"click":function($event){$event.stopPropagation();_vm.handlePictureCardPreview('advertise',index)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"})])]),_vm._v(" "),_c('el-col',{attrs:{"span":18}},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-input',{staticStyle:{"width":"100%"},attrs:{"type":"url","maxlength":"100","placeholder":"请输入广告页URL"},model:{value:(item.url),callback:function ($$v) {_vm.$set(item, "url", $$v)},expression:"item.url"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-button',{attrs:{"type":"danger","plain":"","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.removeitem("advertise",index)}}})],1)],1)}))],1)],1)],1),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow.advertise),expression:"imagecropperShow.advertise"}],key:'advertise'+_vm.imagecropperKey,attrs:{"width":380,"height":148,"step":1,"params":{isPublic: 0,noWater:1},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.uploadimg()}}},[_vm._v("重新上传")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"热门导购"}},[_c('el-row',[(_vm.ruleForm.hot_guide.length<5)?_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){_vm.additem("hot_guide")}}},[_vm._v("新增热门导购")]):_vm._e(),_vm._v("    "),_c('span',{staticClass:"msg-info"},[_vm._v("* 请不要超过五条，少于三条")])],1),_vm._v(" "),_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.ruleForm.hot_guide,"group":"article5"}},_vm._l((_vm.ruleForm.hot_guide),function(item,index){return _c('el-row',{key:index,staticClass:"foundhover",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":18}},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入资讯标题","remote-method":_vm.getNewsListsByName,"loading":_vm.loading},on:{"change":function($event){_vm.changeitem("hot_guide",index,$event)}},model:{value:(item.title),callback:function ($$v) {_vm.$set(item, "title", $$v)},expression:"item.title"}},_vm._l((_vm.cells),function(item1){return _c('el-option',{key:item1.id,attrs:{"label":item1.title,"value":item1}})}))],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[(item.img&&item.img!=='')?_c('el-button',{attrs:{"plain":""},on:{"click":function($event){_vm.showBigImg("hot_guide",index)}}},[_vm._v("查看首图")]):_c('el-button',{attrs:{"plain":""},on:{"click":function($event){_vm.showBigImg1("hot_guide",index)}}},[_vm._v("上传首图")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","plain":"","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.removeitem("hot_guide",index)}}})],1)],1)}))],1),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow.hot_guide),expression:"imagecropperShow.hot_guide"}],key:'hot_guide'+_vm.imagecropperKey,attrs:{"width":80,"height":66,"step":1,"params":{isPublic: 0,noWater:1},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"列表页banner"}},[_c('el-row',[(_vm.ruleForm.list_banner.length<5)?_c('el-button',{attrs:{"type":"primary","plain":""},on:{"click":function($event){_vm.additem("list_banner")}}},[_vm._v("新增列表页banner")]):_vm._e(),_vm._v("    "),_c('span',{staticClass:"msg-info"},[_vm._v("* 请不要超过五条，少于三条")])],1),_vm._v(" "),_c('draggable',{staticClass:"dragArea",attrs:{"list":_vm.ruleForm.list_banner,"group":"article6"}},_vm._l((_vm.ruleForm.list_banner),function(item,index){return _c('el-row',{key:index,staticClass:"foundhover",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":18}},[_c('i',{staticClass:"el-icon-rank"}),_vm._v(" "),_c('el-select',{attrs:{"value-key":"id","filterable":"","remote":"","reserve-keyword":"","placeholder":"请输入资讯标题","remote-method":_vm.getNewsListsByName,"loading":_vm.loading},on:{"change":function($event){_vm.changeitem("list_banner",index,$event)}},model:{value:(item.title),callback:function ($$v) {_vm.$set(item, "title", $$v)},expression:"item.title"}},_vm._l((_vm.cells),function(item1){return _c('el-option',{key:item1.id,attrs:{"label":item1.title,"value":item1}})}))],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[(item.img&&item.img!=='')?_c('el-button',{attrs:{"plain":""},on:{"click":function($event){_vm.showBigImg("list_banner",index)}}},[_vm._v("查看首图")]):_c('el-button',{attrs:{"plain":""},on:{"click":function($event){_vm.showBigImg1("list_banner",index)}}},[_vm._v("上传首图")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","plain":"","icon":"el-icon-delete","circle":""},on:{"click":function($event){_vm.removeitem("list_banner",index)}}})],1)],1)}))],1),_vm._v(" "),_c('image-cropper',{directives:[{name:"show",rawName:"v-show",value:(_vm.imagecropperShow.list_banner),expression:"imagecropperShow.list_banner"}],key:'list_banner'+_vm.imagecropperKey,attrs:{"width":595,"height":400,"step":1,"params":{isPublic: 0,noWater:1},"field":"file","url":_vm.host+'/upload/uploadFile'},on:{"close":_vm.close,"crop-upload-success":_vm.cropSuccess}}),_vm._v(" "),_c('el-form-item',{staticClass:"submit-btn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.submitForm('ruleForm')}}},[_vm._v("提交")])],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var information_Toutiao = (esExports);
// CONCATENATED MODULE: ./src/views/912cms/information/Toutiao.vue
function injectStyle (ssrContext) {
  __webpack_require__("dlqg")
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
  Toutiao,
  information_Toutiao,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _12cms_information_Toutiao = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "J+Ts":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.el-row {\n  margin-bottom: 20px;\n}\n.el-row:last-child {\n    margin-bottom: 0;\n}\n.router-link {\n  font-size: 14px;\n  color: #ffffff;\n  padding: 15px;\n}\n.el-icon-rank {\n  position: absolute;\n  z-index: 11;\n  margin-top: 9px;\n  margin-left: -20px;\n  display: none;\n}\n.foundhover:hover .el-icon-rank {\n  display: inline;\n}\n.msg-info {\n  color: #aaa;\n}\n.router-link a {\n  width: 30px;\n  height: 20px;\n  background: #409eff;\n  padding: 5px 10px;\n  border-radius: 2px;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 148px;\n  height: 148px;\n  line-height: 148px;\n  text-align: center;\n}\n.theme-message,\n.theme-picker-dropdown {\n  z-index: 99999 !important;\n}\n.theme-picker .el-color-picker__trigger {\n  height: 26px !important;\n  width: 26px !important;\n  padding: 2px;\n}\n.theme-picker-dropdown .el-color-dropdown__link-btn {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "dlqg":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("J+Ts");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("rjj0")("556c002b", content, true);

/***/ })

});
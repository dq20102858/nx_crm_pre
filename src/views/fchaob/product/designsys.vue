<template>
  <div id="template">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">设计模板</el-menu-item>
      <el-menu-item index="2">系统方案</el-menu-item>
    </el-menu>
    <div v-if="activeIndex == 1" class="main-wapper">
      <el-button size="small" type="danger" icon="el-icon-edit" @click="getDetail(0)">新增</el-button>
      <el-table :data="templateList" >
          <el-table-column prop="title" label="名称" align="center"></el-table-column>
          <el-table-column label="图片" align="center">
              <template slot-scope="scope">
                <img :src="scope.row.img" style="width: 100px;height: 80px;">
              </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                  <el-button size="mini" @click="getDetail(scope.row.id)">编辑</el-button>
                  <el-button size="mini" type="danger"  @click="deleteTmp(scope.row.id)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>
    </div>
    <div v-else class="main-wapper">
      <el-button size="small" type="danger" icon="el-icon-edit" @click="getDetail(0)">新增</el-button>
      <el-table :data="sysList" >
        <el-table-column prop="title" label="名称" align="center"></el-table-column>
        <el-table-column label="图片" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.img" style="width: 100px;height: 80px;">
            </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
            <template slot-scope="scope">
                <el-button size="mini" @click="getDetail(scope.row.id)">编辑</el-button>
                <el-button size="mini" type="danger" @click="deleteTmp(scope.row.id)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="detail">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="detail.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload class="avatar-uploader"
          :action="host+'/upload/uploadFile'"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :show-file-list="false">
            <img v-if="detail.img" :src="detail.img" class="avatar">
            <span v-if="detail.img" style="position:absolute;top: 5%;right:10%;font-size:20px;" @click.stop="handlePictureCardPreview(detail)"><i class="el-icon-zoom-in"></i></span>
            <i v-if="!detail.img" class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="详情介绍" :label-width="formLabelWidth" v-if="activeIndex == 2">
          <el-upload
            :action="host+'/upload/uploadFile'"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview2"
            :on-success="handleFileSuccess"
            :on-remove="handleRemove"
            :file-list="fileOriginList">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible1">
            <img width="100%" :src="dialogImageUrl1" alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="空间" :label-width="formLabelWidth" v-if="activeIndex == 1">
          <el-checkbox-group v-model="detail.spaces" size="mini">
            <el-checkbox  border v-for="item in spaces" :label="item.id">{{item.name}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
         <el-form-item :label-width="formLabelWidth" v-if="activeIndex == 1 && detail.spaces.length>0 && detail.id>0">
            <router-link :to="{path:'setTmpDetail', query: {tmpId:detail.id,spaces:detail.spaces}}">设置模板初始数据</router-link>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    name: 'designsys',
    data() {
      return {
        activeIndex:"1",
        templateList:[],
        sysList:[],
        detail:{
          id:0,
          img:"",
          spaces:[],
          file:[]
        },
        title:"设计模板",
        dialogFormVisible:false,
        formLabelWidth:"80px",
        host:"http://boss.nething.com/",
        dialogVisible:false,
        dialogImageUrl: '',
        spaces:[],
        dialogImageUrl1:"",
        dialogVisible1:false,
        fileOriginList:[]

      }
    },
    created() {
      this.getTemplateLists();
    },
    methods:{
      handleSelect(key, keyPath){
        this.activeIndex = key;
      },
      getTemplateLists() {
        this.request({
          url: '/product/getTmpAndSysLists',
          method: 'get',
        }).then(response => {
          let data = response.data.data;
          this.templateList = data.templates;
          this.sysList = data.sysDesign
        })
      },
      getDetail(id){
        this.fileOriginList=[];
        let param = {
          id:id
        };
        this.request({
          url: '/product/getTemplateDetail',
          method: 'get',
          params: param
        }).then(response => {
          let data = response.data;
          if(data.msg == "ok"){
            this.detail = data.data
            let originFileLists = [];
            if(this.detail.file.length>0){
              this.detail.file.forEach(function(item,key){
                let one = {
                  response:{
                    data:{
                      url:item
                    }
                  },
                  url:item,
                  uid:key
                };
                originFileLists.push(one);
              })
              this.fileOriginList= originFileLists;
            }
          }else{
            this.detail={
              id:0,
              img:"",
              spaces:[],
            }
          }
        })
        this.dialogFormVisible = true;
        if(this.activeIndex == 1){
          this.title = "设计模板"
        }else{
          this.title = "系统方案"
        }
        this.getProductSpaces();
      },
      deleteTmp(id){
        let data = {
          id:id
        }
        this.request({
          url: '/product/deteteTemplate',
          method: 'post',
          data
        }).then(response => {
          var data = response.data;
          if(data.status == 1){
            this.getTemplateLists();
          }
        })
      },

      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        var isJPG = false;
        switch (file.type) {
            case "image/png":
                isJPG = true;
                break;
            case "image/jpeg":
                isJPG = true;
                break;
            default:
                isJPG = false;
                break;
          }

          if (!isJPG) {
              this.$message.error("上传图片只能是 JPG/PNG 格式!");
          }

        if (!isLt2M) {
          this.$message.error("上传图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.$nextTick(function() {
          this.detail.img= res.data.url;
        })
      },
      handleFileSuccess(res, file) {
        this.$nextTick(function() {
          this.detail.file.push(res.data.url);
        })
      },
      handlePictureCardPreview(file){
        this.dialogImageUrl = file.img;
        this.dialogVisible = true;
      },
      handlePictureCardPreview2(file){
        this.dialogImageUrl1 = file.response.data.url;
        this.dialogVisible1 = true;
      },
      handleRemove(file, fileList) {
        let detailFile = [];
        fileList.forEach(function(item){
          detailFile.push(item.response.data.url);
        });
        this.detail.file = detailFile;
      },
      getProductSpaces() {
        this.request({
          url: '/product/getProductSpaces',
          method: 'get',
        }).then(response => {
          let data = response.data.data;
          if(data.length>1){
            this.spaces = data
          }
        })
      },
      submit(){

        let data = this.detail;
        if(this.activeIndex == "1"){
          data['type'] = 2;
        }else{
          data['type'] = 1;
        }
        this.request({
          url: '/product/addOrEditTmp',
          method: 'post',
          data
        }).then(response => {
          var data = response.data;
          if(data.status == 1){
            this.dialogFormVisible = false;
            this.getTemplateLists();
          }else{
            let msg = "";
            if(this.detail.id == 0 || this.detail.id == "" || typeof(this.detail.id)=="undefined"){
              msg ="新增失败"
            }else{
              msg ="更新失败"
            }
            this.$message({
              "type":"success",
              "message":msg
            })
          }

        })
      },

    },
  }
</script>

<style>
  #template{
    width: 90%;
    margin: 0 auto;
  }
  .avatar-uploader .el-upload {
  	border: 1px dashed #d9d9d9;
  	border-radius: 6px;
  	cursor: pointer;
  	position: relative;
  	overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
  	border-color: #409eff;
  }
  .avatar-uploader-icon {
  	font-size: 28px;
  	color: #8c939d;
  	width: 148px;
  	height: 148px;
  	line-height: 148px;
  	text-align: center;
  }
  .avatar {
  	width: 148px;
  	height: 148px;
  	display: block;
  }
   #template .main-wapper{
     margin-top: 20px;
   }
   #template a {
    text-decoration: underline !important;
    color: #076ed8;

   }
</style>

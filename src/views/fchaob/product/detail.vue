<template>
  <div id="product-detail">
    <el-form ref="product_form" :model="product" label-width="80px">
      <el-form-item label="产品名">
        <el-input v-model="product.name" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="编码">
        <el-input v-model="product.code" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="规格">
        <el-input v-model="product.spec" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="型号">
        <el-input v-model="product.model" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="分类">
        <el-select v-model="product.cateId" placeholder="请选择">
            <el-option v-for="item in cateList" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
      </el-form-item>

      <el-form-item label="SN">
        <el-input v-model="product.sn" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="条形码">
        <el-input v-model="product.barcode" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="市场指导价">
        <el-input v-model="product.price" class="detail-prod-input"></el-input>元
      </el-form-item>

      <el-form-item label="成本价" >
        <el-input v-model="product.costPrice" class="detail-prod-input"></el-input>元
      </el-form-item>

      <el-form-item label="计量单位">
        <el-input v-model="product.unit" class="detail-prod-input"></el-input>
      </el-form-item>

      <el-form-item label="封面图片">
        <el-upload class="avatar-uploader"
        :action="host+'/upload/uploadFile'"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :show-file-list="false">
          <img v-if="product.imgUrl" :src="product.imgUrl" class="avatar">
          <span v-if="product.imgUrl" style="position:absolute;top: 5%;right:10%;font-size:20px;" @click.stop="handlePictureCardPreview(product)"><i class="el-icon-zoom-in"></i></span>
          <i v-if="!product.imgUrl" class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="审核状态">
        <el-radio-group v-model="product.status">
          <el-radio border :label="-1" value="-1">待审</el-radio>
          <el-radio border :label="1" value="1">通过</el-radio>
          <el-radio border :label="2" value="2">不通过</el-radio>
          <el-radio border :label="5" value="5">审核中</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="submit-btn">
      		<el-button type="primary" @click="submitForm">提交</el-button>
      		<el-button @click="resetForm">取消</el-button>
      	</el-form-item>
      </el-form>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'productDetail',
    data() {
      return {
        id: this.$route.query.id,
        product:{
          imgUrl:"",
          id:this.$route.query.id
        },
        // host: "http://" + location.host,
        host:"http://boss.nething.com/",
        dialogVisible:false,
        dialogImageUrl: '',
        cateList:[]
      }
    },
    created() {
      this.detail();
      this.getProductCateLists();
    },
    methods:{
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("上传图片大小不能超过 2MB!");
        }
        return isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.$nextTick(function() {
          this.product.imgUrl= res.data.url;
        })
      },
      handlePictureCardPreview(file){
        this.dialogImageUrl = file.imgUrl;
        this.dialogVisible = true;
      },
      detail() {
        if(this.id == 0){
           return false;
        }
        var data = {
            id: this.id
        }
        this.request({
          url: '/product/detail',
          method: 'get',
          params: data
        }).then(response => {
          let data = response.data;
          if(data.status==1){
            this.product= data.data;
          }
        })
      },
      getProductCateLists() {
        this.request({
          url: '/product/getProductCateLists',
          method: 'get',
        }).then(response => {
          let data = response.data;
          this.cateList= data.data;
        })
      },
      submitForm(){
        let data = this.product;
        this.request({
          url: '/product/addOrUpdateProd',
          method: 'post',
          data
        }).then(response => {
          let result = response.data;
          let msg = "";
          if(result.status==1){
            if(this.id == 0 || this.id == "" || typeof(this.id)=="undefined"){
              msg ="新增成功"
            }else{
              msg ="更新成功"
            }
            this.$message({
              "type":"success",
              "message":msg
            })
          }else{
            if(this.id == 0 || this.id == "" || typeof(this.id)=="undefined"){
              msg ="新增失败"
            }else{
              msg ="更新失败"
            }
            this.$message({
              "type":"error",
              "message":msg
            })
          }
        })
      },
      resetForm() {
      	this.$refs["product_form"].resetFields();
        // this.product = {};
      },
    },
  }
</script>

<style>
  #product-detail {
    width: 100%;
    margin-top: 30px;
  }
  #product-detail .el-form{
    width: 90%;
    margin: 0 auto;
  }
  #product-detail .el-form .el-form-item{

  }

  #product-detail .detail-prod-input{
    width: 300px;
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
</style>

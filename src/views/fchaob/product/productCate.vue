<template>
 <div id="product-cate">
   <ul id="first-cate">
     <li v-for="item in data" class="first-cate-li">
       <span class="cate-name">{{item.name}}</span>
       <div class="operate">
         <span class="sub-operate" @click="addCate(item.id)">新增</span>
         <span class="sub-operate" @click="editCate(item.id)">修改</span>
         <span class="sub-operate" @click="deleteCate(item.id)">删除</span>
       </div>

       <ul v-if="item.children" class="sub-cate">
         <li v-for="one in item.children">
         <span class="cate-name">{{one.name}}</span>
         <div class="operate">
           <span class="sub-operate" @click="editCate(one.id)">修改</span>
           <span class="sub-operate" @click="deleteCate(one.id)">删除</span>
         </div>
         </li>
       </ul>
     </li>
   </ul>
  <el-dialog :title="title" :visible.sync="dialogFormVisible">
    <el-form :model="detail">
      <el-form-item label="名称" :label-width="formLabelWidth">
        <el-input v-model="detail.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="分类" v-if="detail.pid || isAdd" :label-width="formLabelWidth">
        <el-select v-model="detail.pid" placeholder="请选择">
            <el-option v-for="item in faterLists" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
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
    name: 'productCate',
    data() {
      return {
        data: [],
        title:"",
        dialogFormVisible:false,
        detail:{
          id:0,
          name:"",
          pid:""
        },
        formLabelWidth:"80px",
        faterLists:[],
        isAdd : false

      }
    },
  created() {
      this.getProductCate4Trees();
      this.getFatherCate();
    },
    methods: {
      getProductCate4Trees(){
        this.request({
          url: '/product/getProdctCateTree',
          method: 'get'
        }).then(response => {
          var data = response.data;
          if(data.data.length> 1){
            this.data = data.data
          }
        })
      },
      addCate(id){
        this.isAdd = true;
        this.dialogFormVisible = true;
        this.detail.id = 0;
        this.detail.pid = id;
        this.getProductCateDetail();
      },
      editCate(id){
        this.isAdd = false;
        this.dialogFormVisible = true;
        this.detail.id = id;
        this.getProductCateDetail();
      },
      deleteCate(id){
        this.isAdd = false;
        let data = {
          id :id
        };
        this.request({
          url: '/product/delectCate',
          method: 'post',
          data
        }).then(response => {
          let data = response.data;
          if(data.status==1){
            this.$message({
              "type":"success",
              "message":"删除成功"
            })
            this.getProductCate4Trees();
          }else{
            this.$message({
              "type":"error",
              "message":"删除失败"
            })
          }
        })
      },
      submit(){
        let data = this.detail;
        this.request({
          url: '/product/addOrEditCate',
          method: 'post',
          data
        }).then(response => {
          let result = response.data;
          let msg = "";
          if(result.status==1){
            if(this.detail.id == 0 || this.detail.id == "" || typeof(this.detail.id)=="undefined"){
              msg ="新增成功"
            }else{
              msg ="更新成功"
            }
            this.$message({
              "type":"success",
              "message":msg
            })
          }else{
            if(this.detail.id == 0 || this.detail.id == "" || typeof(this.detail.id)=="undefined"){
              msg ="新增失败"
            }else{
              msg ="更新失败"
            }
            this.$message({
              "type":"error",
              "message":msg
            })
          }
          this.getProductCate4Trees();
          this.isAdd = false;
          this.dialogFormVisible = false;
          this.detail = {};
        })
      },
      getProductCateDetail(){
        let data = {
          id:this.detail.id
        }
        this.request({
          url: '/product/getProductCateDetail',
          method: 'get',
          params:data
        }).then(response => {
          var data = response.data;
          if(data.msg == "ok"){
            this.detail = data.data
          }
        })
      },
      getFatherCate(){
        this.request({
          url: '/product/getFatherCate',
          method: 'get'
        }).then(response => {
          var data = response.data;
          if(data.data.length >  1){
            this.faterLists = data.data
          }
        })
      },
    }
  };

</script>


<style>
  #product-cate {
    margin: 0 auto;
    width: 50%;
    padding: 50px;
  }
  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #first-cate{
    /* border: 1px solid #0A76A4; */
  }
  #first-cate .first-cate-li {
    padding: 10px;
    /* border-top: 1px solid #0A76A4; */
  }
 #first-cate:nth-child(1){
    /* border-top: 0; */
  }
  .sub-cate{
    margin-left: 65px;
    margin-top: 20px;
  }
  .sub-cate li{
    padding: 10px 0;
  }
  .operate {
    width: 150px;
    float: right
  }
  .cate-name{
    color: #231f1f;
  }
  .sub-operate{
    font-size: 14px;
    color: #1943de;
    cursor: pointer
  }
</style>

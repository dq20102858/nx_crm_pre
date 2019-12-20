<template>
  <div id="spaces">
    <el-button size="small" class="filter-item" style="margin-left: 10px;" type="danger" icon="el-icon-edit" @click="goDetail(0)">新增</el-button>
    <el-table :data="spaces"  ref="multipleTable" align="center">
      <el-table-column prop="id" label="ID"  align="center"></el-table-column>
      <el-table-column prop="name" label="空间名称" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
          <template slot-scope="scope">
              <el-button size="mini" @click="goDetail(scope.row.id)">编辑</el-button>
              <el-button size="mini" type="danger" @click="delSpace(scope.row.id)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
    <div id="pagination">
        <el-pagination v-if="spaces.length !== 0" background layout="prev, pager, next" :current-page="this.page" :total="this.total"  @current-change="pageChange">
        </el-pagination>
    </div>
    <el-dialog title="空间详情" :visible.sync="dialogFormVisible">
      <el-form :model="detail" ref="detail-form">
        <el-form-item label="空间名称" :label-width="formLabelWidth">
          <el-input v-model="detail.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="reset">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'spaces',
    data() {
      return {
        spaces:[],
        page:1,
        total:0,
        dialogFormVisible: false,
        detail:{
          id:0,
          name:""
        },
        formLabelWidth:"80px",
      }
    },

    created() {
      this.getSpacePages();
    },
    methods:{
      getSpacePages(){
        let data = {
          page:this.page
        }
        this.request({
          url: '/product/getSpacePages',
          method: 'get',
          params:data
        }).then(response => {
          var data = response.data;
          if(data.data.data.length> 1){
            this.spaces = data.data.data
          }
          this.page = parseInt(data.data.current_page);
          this.total = data.data.total;
        })
      },
      pageChange(value){
        this.page = value;
        this.getSpacePages();
      },
      goDetail(id){
        this.dialogFormVisible = true;
        let data = {
          id:id
        }
        this.request({
          url: '/product/getSpaceDetail',
          method: 'get',
          params:data
        }).then(response => {
          var data = response.data;
          if(data.msg == "ok"){
            this.detail = data.data
          }else{
            this.detail = {
              id : 0,
              name:""
            }
          }
        })
      },
      submit(){
        this.dialogFormVisible = false;
        let data = this.detail;
        this.request({
          url: '/product/addOrEditSpace',
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
            this.getSpacePages();
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
        })
      },
      delSpace(id){
        let data = {
          id : id
        };
        this.request({
          url: '/product/deleteSpace',
          method: 'post',
          data
        }).then(response => {
          var data = response.data;
          if(data.status == 1){
            this.getSpacePages();
          }else{
            this.$message({
              "type":"error",
              "message":"删除失败"
            })
          }
        })
      },

      reset(){
        this.dialogFormVisible = false;
        this.$refs["detail-form"].resetFields();
      }
    },
}
</script>

<style>
  #spaces{
      width: 100%;
      padding: 20px;
  }
  #spaces .el-table{
    width: 80%;
    margin: 0 auto;
  }
  #spaces .el-table-column{
    width: 33% !important;
  }
</style>

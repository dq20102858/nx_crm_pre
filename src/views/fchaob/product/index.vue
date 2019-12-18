<template>
  <div id="productLists">
    <el-form :model="searchForm" id="searchForm">
        <label class="search-label">关键字：</label>
        <el-input v-model="searchForm.keyword" placeholder="用户id" class="keywords search-input"></el-input>
        <label class="search-label">状态：</label>
        <el-select v-model="searchForm.status" clearable placeholder="请选择" class="search-input search-select">
                <el-option label="待分配" value="0"></el-option>
                <el-option label="正常" value="1"></el-option>
                <el-option label="已完成" value="2"></el-option>
                <el-option label="已取消" value="-1"></el-option>
        </el-select>
        <label class="search-label">发布时间：</label>
        <el-date-picker v-model="searchForm.time_range" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" class=""> </el-date-picker>
        <el-button type="primary" @click="getProductLists">搜索</el-button>
    </el-form>
    <el-table :data="productLists"  ref="multipleTable" @selection-change="">
        <el-table-column type="selection" width="100"> </el-table-column>
        <el-table-column prop="id" label="ID" width="100"></el-table-column>
        <el-table-column prop="name" label="产品名称" width="300"></el-table-column>
        <el-table-column prop="cate_name" label="产品类型" width="200"></el-table-column>
        <el-table-column prop="price" label="价格" width="200"></el-table-column>
        <el-table-column prop="status_des" label="状态" width="200">
          <template slot-scope="scope">
                <el-tag v-if="scope.row.status == 0">已删除</el-tag>
                <el-tag type="warning" v-if="scope.row.status == 1">审核通过</el-tag>
                <el-tag type="success" v-if="scope.row.status == 2">审核未通过</el-tag>
                <el-tag type="info" v-if="scope.row.status == '-1'">待审</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="添加时间" width="200"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="">编辑</el-button>
                <el-button size="mini" type="danger" @click="">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div id="pagination">
        <el-pagination v-if="productLists.length !== 0" background layout="prev, pager, next" :current-page="this.page" :total="this.total"  @current-change="pageChange">
        </el-pagination>
    </div>
  </div>

</template>

<script>
import { publicData } from "@/utils/common";
export default {

  name: 'productList',
  data() {
    return {
      productLists:[],
      page:1,
      total:1,
      searchForm:{},
      pickerOptions2: publicData.pickerOptions2

    }
  },

  created() {
    this.getProductLists();
  },
  methods:{
    getProductLists() {
      var data = {
          page: this.page,
          status: this.searchForm.status,
          keyword : this.searchForm.keyword,
          timeRange : this.searchForm.time_range,
          cateId : this.searchForm.cateId
      }
      this.request({
        url: '/product/lists',
        method: 'get',
        params: data
      }).then(response => {
        let data = response.data;
        this.productLists= data.data.data;
        this.page = parseInt(data.data.current_page);
        this.total = data.data.total;
      })
    },
    pageChange(value){
      this.page = value;
      this.getProductLists();
    }
  }
}
</script>

<style>
</style>

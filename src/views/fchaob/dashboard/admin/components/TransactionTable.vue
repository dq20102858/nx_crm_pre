<template>
    <div class="box" style="padding:20px;">
      <el-table :data="listData" style="padding-top: 15px">
        <el-table-column label="推荐来源">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="PV" align="center">
          <template slot-scope="scope">
            {{ scope.row.pv }}
          </template>
        </el-table-column>
        <el-table-column label="提交量" align="center">
          <template slot-scope="scope">
            {{ scope.row.total }}
          </template>
        </el-table-column>
        <el-table-column label="真实量" align="center">
          <template slot-scope="scope">
            {{ scope.row.real }}
          </template>
        </el-table-column>
        <el-table-column label="跟进量" align="center">
          <template slot-scope="scope">
            {{ scope.row.follow }}
          </template>
        </el-table-column>
        <el-table-column label="成交量" align="center">
            <template slot-scope="scope">
            {{ scope.row.finish }}
            </template>
         <!--  <template slot-scope="scope">
            <div class="progress-item">
                <el-progress :percentage="scope.row.total"/>
              </div>
          </template> -->
        </el-table-column>
      </el-table>
    </div>
</template>

<script>

export default {
   props: {
     listData: {
       type: Array,
     }
   }
}
</script>

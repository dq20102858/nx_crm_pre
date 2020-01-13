<template>
  <div class="dashboard-container">
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <div class="calendar-wapper">
          <p class="date">{{ data.day.split('-').slice(2).join('-') }}</p>
          <p class="calendar-operate add">添加</p>
          <p class="calendar-operate detail">详情</p>
          <p class="calendar-show plan-finished">计划完成：</p>
          <p class="calendar-show act-finished">实际完成：</p>
          <p class="calendar-show remark">备注：</p>
        </div>

      </template>
    </el-calendar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard',
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {

  }
}
</script>
<style>
  .date{
    text-align: center;
    /* line-height: 80px; */
    font-size: 30px;
    color: #72acce;
  }
  .calendar-wapper{
    position: relative;
  }
  .calendar-operate{
    position: absolute;
    top: -40px;
    font-size: 10px;
    cursor: pointer;
  }
  .add{
    right: 34px;
    color: red;
  }
  .detail{
    right: 0px;
    color: #72acce;
  }
  .calendar-show{
    position: absolute;
    font-size: 10px;
    left: -5px;
  }
  .plan-finished{
    top: -30px;
  }
  .act-finished{
    top: 0px;
  }
  .remark{
    top: 30px;
  }
  .el-calendar-table td{
    height: 100px !important;
  }
</style>

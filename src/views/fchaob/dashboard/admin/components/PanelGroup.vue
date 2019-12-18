<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(0)">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">需求总数</div>
          <count-to :start-val="0" :end-val="count['-1']" :duration="1000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(1)">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">未核实</div>
          <count-to :start-val="0" :end-val="count['0']" :duration="1000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <!-- <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(2)">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已核实</div>
          <count-to :start-val="0" :end-val="count['1']" :duration="1000" class="card-panel-num"/>
        </div>
      </div>
    </el-col> -->
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(3)">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">跟进中</div>
          <count-to :start-val="0" :end-val="count['2']" :duration="3600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(4)">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已完成</div>
          <count-to :start-val="0" :end-val="count['3']" :duration="3000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="4" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData(4,4)">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">成交量</div>
          <count-to :start-val="0" :end-val="count['4'] || 0" :duration="3600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  props: {
    count: {
			type: Object,
			default: "0"
		}
  },
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type,reason) {
      this.$router.push({
        name: 'Individual',
        query: {tab: type, reason: reason}
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &.active {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 36px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>

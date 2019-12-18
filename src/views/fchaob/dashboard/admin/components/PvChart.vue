<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }

    this.chart.dispose()
    this.chart = null
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  methods: {
    setOptions({ pv_counts, uv_counts, ip_counts, ip_date } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ip_date,
          boundaryGap: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            rotate: 30,
          }
        },
        grid: {
          left: 20,
          right: 20,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        toolbox: {
            show: true,
            feature: {
                // dataZoom: {
                //     yAxisIndex: 'none'
                // },
                dataView: {readOnly: false},
                // magicType: {type: ['line', 'bar']},
                // restore: {},
                saveAsImage: {}
            }
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['PV统计数','UV统计数','IP统计数']
        },
        series: [
            {
          name: 'PV统计数', 
          itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              },
              label: {
                show: true,
                position: 'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          smooth: true,
          type: 'line',
          data: pv_counts,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'UV统计数',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#058DC7',
              lineStyle: {
                color: '#058DC7',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              },
              label: {
                show: true,
                position: 'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: uv_counts,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        },
        {
          name: 'IP统计数',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#5FCBB4',
              lineStyle: {
                color: '#5FCBB4',
                width: 2,
              },
              areaStyle: {
                color: '#f3f8ff'
              },
              label: {
                show: true,
                position: 'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: ip_counts,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>

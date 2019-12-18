<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
require('echarts/theme/macarons') // echarts theme

export default {
  mixins: [resize],
  props: {
    type:{
      type: String,
      default: '0',
    },
    mixChartData: {
      type: Object,
      default: {},
    },
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '480px'
    }
  },
  data() {
    return {
      chart: null,
      legends: [['求租需求单', '出租需求单','求购需求单', '出售需求单', '需求单总量'],['求租需求单'],['出租需求单'],['求购需求单'],['出售需求单']]
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
    mixChartData: {
      deep: true,
      handler(val) {
        this.setOptions()
      }
    }
  },
  methods: {
    setOptions() {
      this.chart.setOption({
        backgroundColor: '#fff',
        title: {
          text: '需求单统计图表',
          x: '20',
          top: '30',
          textStyle: {
            color: '#333',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#058DC7',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#fff'
            },
            type: 'cross'
          }
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
        grid: {
          left: '3%',
          right: '2%',
          borderWidth: 0,
          top: 120,
          bottom: 95,
          textStyle: {
            color: '#fff'
          },
        },
        legend: {
          x: 'center',
          top: '10%',
          textStyle: {
            color: '#058DC7'
          },
          data: this.legends[this.type]
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#058DC7'
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisLabel: {
            interval: 0

          },
          data: this.mixChartData.x
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#058DC7'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          splitArea: {
            show: false
          }
        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [
            0
          ],
          bottom: 30,
          start: 2,
          end: 95,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: {
            color: '#fff' },
            borderColor: '#90979c'

        }, {
          type: 'slider',
          show: true,
          height: 5,
          start: 1,
          end: 35
        }],
        series: [
        //   {
        //   name: '未知类型',
        //   type: 'bar',
        //   stack: 'total',
        //   barMaxWidth: 35,
        //   barGap: '10%',
        //   itemStyle: {
        //     normal: {
        //       color: '#fadb71',
        //       label: {
        //         show: true,
        //         textStyle: {
        //           color: '#fff'
        //         },
        //         position: 'insideTop',
        //         formatter(p) {
        //           return p.value > 0 ? p.value : ''
        //         }
        //       }
        //     }
        //   },
        //   data: this.mixChartData.option[0]
        // },
        {
          name: '求租需求单',
          type: this.type==0?'bar':'line',
          stack: 'total',
          barMaxWidth: 35,
          barGap: '10%',
          smooth: true,
          itemStyle: {
            normal: {
              color: '#54a1d5',
              label: {
                show: true,
                position: this.type==0?'insideTop':'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: this.type!=2?this.mixChartData.option[1]:[]
        },

        {
          name: '出租需求单',
          type: this.type==0?'bar':'line',
          stack: 'total',
          smooth: true,
          itemStyle: {
            normal: {
              color: 'rgba(0,191,183,1)',
              barBorderRadius: 0,
              label: {
                show: true,
                position: this.type==0?'insideTop':'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: this.type!=1?this.mixChartData.option[2]:[]
        },
        {
          name: '求购需求单',
          type: this.type==0?'bar':'line',
          stack: 'total',
          smooth: true,
          itemStyle: {
            normal: {
              color: 'rgba(64, 158, 255,1)',
              barBorderRadius: 0,
              label: {
                show: true,
                position: this.type==0?'insideTop':'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: this.type!=1?this.mixChartData.option[3]:[]
        },
        {
          name: '出售需求单',
          type: this.type==0?'bar':'line',
          stack: 'total',
          smooth: true,
          itemStyle: {
            normal: {
              color: 'rgba(255, 64, 245,1)',
              barBorderRadius: 0,
              label: {
                show: true,
                position: this.type==0?'insideTop':'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: this.type!=1?this.mixChartData.option[4]:[]
        },
         {
          name: '需求单总量',
          type: 'line',
          stack: 'total',
          symbolSize: 10,
          symbol: 'circle',
          smooth: true,
          itemStyle: {
            normal: {
              // color: '#058DC7',
              color: 'rgba(255,144,128,1)',
              barBorderRadius: 0,
              label: {
                show: true,
                position: 'top',
                formatter(p) {
                  return p.value > 0 ? p.value : ''
                }
              }
            }
          },
          data: this.type==0?this.mixChartData.option[5]:[],
          // markPoint: {
          //     data: [
          //         {type: 'max', name: '最大值'},
          //         {type: 'min', name: '最小值'}
          //     ]
          // },
          lineStyle: {
            normal: {
              width: 2,
            }
          },
          // areaStyle: {
          //   normal: {
          //       color: '#f3f8ff'
          //     }
          // },
        }
        ]
      })
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.setOptions()
    }
  }
}
</script>

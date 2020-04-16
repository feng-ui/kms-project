<template>
  <div id="chartsTemperatureChange" class="myCharts" :style="{height:'100%'}"></div>
</template>

<script>
  export default {
    name: 'myCharts',
    data () {
      return {}
    },
    mounted () {
      this.getTemperatureChange()
    },
    methods: {
      getTemperatureChange () {
        var echarts = require('echarts')
        var myEcharts = echarts.init(document.getElementById('chartsTemperatureChange'))
        myEcharts.setOption({
          title: {
            text: '最近一个星期的各地的气温变化',
            subtext: '°C'
          },
          baseOption: {
            timeline: {
              axisType: 'category',
              show: true,
              autoPlay: true,
              playInterval: '1000',
              data: [
                '北京', '上海', '天津']
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['最高气温', '最低气温']
            },
            toolbox: {
              show: true,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
              type: 'value',
              name: '°C',
              max: 30
            },
            series: [{
              type: 'line'
            }]
          },
          options: [
            {
              series: [
                {
                  name: '最高气温',
                  type: 'line',
                  data: [11, 11, 15, 13, 12, 13, 10]
                },
                {
                  name: '最低气温',
                  type: 'line',
                  data: [1, -2, 2, 1, -7, -5, 0]
                }
              ]
            },
            {
              series: [
                {
                  name: '最高气温',
                  type: 'line',
                  data: [11, 23, 25, 27, 20, 21, 15],
                  markPoint: {
                    data: [
                      {
                        type: 'max',
                        name: '最大值'
                      },
                      {
                        type: 'min',
                        name: '最小值'
                      }
                    ]
                  },
                  markLine: {
                    data: [
                      {
                        type: 'average',
                        name: '平均值'
                      }
                    ]
                  }
                },
                {
                  name: '最低气温',
                  type: 'line',
                  data: [1, -2, -2, -5, -3, -2, 0],
                  markPoint: {
                    data: [
                      {
                        name: '周最低',
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                      }
                    ]
                  },
                  markLine: {
                    data: [
                      {
                        type: 'average',
                        name: '平均值'
                      },
                      [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                      }, {
                        symbol: 'circle',
                        label: {
                          position: 'start',
                          formatter: '最大值'
                        },
                        type: 'max',
                        name: '最高点'
                      }]
                    ]
                  }
                }
              ]
            },
            {
              series: [
                {
                  name: '最高气温',
                  type: 'line',
                  data: [21, 21, 25, 23, 22, 23, 20],
                  markPoint: {
                    data: [
                      {
                        type: 'max',
                        name: '最大值'
                      },
                      {
                        type: 'min',
                        name: '最小值'
                      }
                    ]
                  },
                  markLine: {
                    data: [
                      {
                        type: 'average',
                        name: '平均值'
                      }
                    ]
                  }
                },
                {
                  name: '最低气温',
                  type: 'line',
                  data: [-11, -11, -15, -13, -12, -3, -10],
                  markPoint: {
                    data: [
                      {
                        name: '周最低',
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                      }
                    ]
                  },
                  markLine: {
                    data: [
                      {
                        type: 'average',
                        name: '平均值'
                      },
                      [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                      }, {
                        symbol: 'circle',
                        label: {
                          position: 'start',
                          formatter: '最大值'
                        },
                        type: 'max',
                        name: '最高点'
                      }]
                    ]
                  }
                }
              ]
            }

          ]

        })
      }
    }
  }
</script>

<style scoped>

</style>

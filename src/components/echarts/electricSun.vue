<template>
  <div id="electricChart" class="myChart" :style="{height: '100%'}">
  </div>
</template>

<script>
  export default {
    name: 'myChart',
    data () {
      return {}
    },
    mounted () {
      this.getPillar()
    },
    methods: {
      getPillar () {
        var echarts = require('echarts')
        const myChart = echarts.init(document.getElementById('electricChart'))
        myChart.setOption({
          title: {
            text: '电量使用总计',
            subtext: '单位:Mwh'
          },
          baseOption: {
            timeline: {
              show: true,
              axisType: 'categrory',
              autoPlay: true,
              playInterval: 1000,
              data: ['1', '2', '3']
            },
            grid: { containLabel: true },
            xAxis: [{
              type: 'category',
              name: '企业',
              data: ['能化国际电力股份有限公司', '大唐国际发电公司', '北京华夏发电公司']
            }],
            yAxis: {
              type: 'value',
              name: 'Mwh'
            },
            series: [
              {
                type: 'line'
              }
            ],
            tooltip: {}

          },
          options: [
            {
              series: [
                {
                  data: [120, 450, 140]
                }
              ]
            },
            {
              series: [
                {
                  data: [130, 130, 180]
                }
              ]
},
            {
              series: [
                {
                  data: [160, 350, 110]
                }
              ]
            }

          ]
        })
      }
    }
  }
</script>
<style>
  .chart {
    width: 100%;
    height: 100%
  }
</style>

<template>
    <div  id="myChart" class="chart"  :style="{width: '300px', height: '300px'}">
    </div>
</template>

<script>
  export default {
    name: 'chart',
    data () {
      return {
      }
    },
    mounted () {
      this.getPillar()
    },
    methods: {
      getPillar () {
        var echarts = require('echarts')
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表2
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          },
          yAxis: {
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
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

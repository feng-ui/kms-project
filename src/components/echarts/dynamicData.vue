<template>
  <div class="myChart" id="chartLine" :style="{width: '300Px',height:'300px'}"></div>
</template>

<script>
  export default {
    name: 'myChart',
    data () {
      return {}
    },
    mounted () {
      this.getLineChange()
    },
    methods: {
      getLineChange () {
        var echarts = require('echarts')
        var myChart = echarts.init(document.getElementById('chartLine'))

        function randomData () {
          now = new Date(+now + oneDay)
          value = value + Math.random() * 21 - 10
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value)

            ]
          }
        }

        var data = []
        var now = +new Date(1997, 9, 3)
        var oneDay = 24 * 3600 * 1000
        var value = Math.random() * 1000
        for (var i = 0; i < 1000; i++) {
          data.push(randomData())
        }
        setInterval(function () {
          for (var i = 0; i < 5; i++) {
            data.shift()
            data.push(randomData())
          }
          myChart.setOption({
            title: {
              text: '时间坐标轴的实时变化效果图'
            },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0]
                var date = new Date(params.name)
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
              },
              axisPointer: {
                animation: false
              }
            },
            xAxis: {
              type: 'time',
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                show: false
              }
            },
            series: [{
              name: '模拟数据',
              type: 'line',
              showSymbol: false,
              hoverAnimation: false,
              data: data
            }]
          })
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>

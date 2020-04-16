<template>
  <div class="chartPie" ref="myChartPie" :style="{width: '300px', height: '300px' }"></div>
</template>

<script>
  export default {
    name: 'chartPie',
    data () {
      return {}
    },
    mounted () {
      this.getChartPie()
    },
    methods: {
      getChartPie () {
        var echarts = require('echarts')
        echarts.init(this.$refs.myChartPie).setOption({
          title: {
            left: '16.67%',
            top: '75%',
            textAlign: 'center'
          },
          series: {
            type: 'pie',
            radius: '25%',
            center: ['50%', '50%'],
            data: [{
              name: 'Apples',
              value: 70
            }, {
              name: 'Strawberries',
              value: 68
            }, {
              name: 'Bananas',
              value: 48
            }, {
              name: 'Oranges',
              value: 40
            }, {
              name: 'Pears',
              value: 32
            }, {
              name: 'Pineapples',
              value: 27
            }, {
              name: 'Grapes',
              value: 18
            }],
            animation: false,
            label: {
              position: 'outer',
              alignTo: 'none',
              bleedMargin: 5
            }
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>

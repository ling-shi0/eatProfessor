<template>
  <div>
    <div style="padding: 10px">
    <van-panel>
      <div style="background: greenyellow;color: darkorange;">人体每日的营养所需可以分为七大类</div>
    </van-panel>
    </div>
    <div id="BarChart" style="margin:10px 2.5rem;height: 300px;width:auto;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "todayEat",
        mounted() {
          var myChart = echarts.init(document.getElementById('BarChart'))
          var option = {
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              x : 'center',
              data:['脂肪','维生素','微量元素','水分','蛋白质','氨基酸','糖类']
            },
            calculable : true,
            series : [
              {
                name:'访问来源',
                type:'pie',
                radius : '50%',
                center: ['50%','50%'],
                data:[
                  {value:335, name:'脂肪'},
                  {value:310, name:'维生素'},
                  {value:234, name:'微量元素'},
                  {value:135, name:'水分'},
                  {value:1548, name:'蛋白质'},
                  {value:1548, name:'氨基酸'},
                  {value:1548, name:'糖类'}
                ]
              }
            ]
          }
          myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>

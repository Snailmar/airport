<!--
 * @Author: vigorzhang
 * @Date: 2020-03-10 16:19:59
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-11 17:51:42
 * @Description: 
 -->
<template>
    <div id="line" style="width:4.98rem;height:2.6rem">
    </div>
</template>
 
<script>
    import echarts from 'echarts'
    export default {
        mounted() {
            this.drawChart()
        },
        methods: {
            drawChart() {
                let chart = echarts.init(document.getElementById('line'))
                var option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                };
                chart.setOption(option)
            }
        }
    }
</script>
 
<style lang="scss" scoped>

</style>

<!--
 * @Author: vigorzhang
 * @Date: 2020-03-10 16:19:59
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-12 11:05:53
 * @Description: 
 -->
<template>
    <div ref="donut" style="width:100%;height:100%">
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
                let chart = echarts.init(this.$refs.donut)
                var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'center',
        top:'center',
        data: ['直接访问', '']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {value: 35, name: '直接访问'},
                {value: 310, name: '邮件营销'},
               
            ]
        }
    ]
};

                chart.setOption(option)
            }
        }
    }
</script>
 
<style lang="scss" scoped>

</style>

<!--
 * @Author: vigorzhang
 * @Date: 2020-03-10 16:19:59
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-12 11:05:24
 * @Description: 
 -->
<template>

    <div  style="width:100%;height:100%" ref="category">
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
                let chart = echarts.init(this.$refs.category)
                chart.setOption({
                     grid:{
                        bottom:'0',
                        left:'-10',
                        right:'-10'
                    },
                    xAxis: {
                        type: 'category',
                        
                        // nameGap:150,
                        offset:-30,
                        boundaryGap: false,
                        data: [' ', '12月', '1月', '2月', '3月', '4月', ' '],
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff', //更改坐标轴文字颜色
                                fontSize: 15 //更改坐标轴文字大小
                            }
                        },
                    },
                    yAxis: {
                        "show": false,
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {
                            normal: {
                                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(201,145,126,1)'
                                }, {
                                    offset: .34,
                                    color: 'rgba(192,129,227,1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(186,95,205,1)'
                                }])
                            }
                        },
                        smooth: true,
                        symbolSize: 4,
                        color: 'transparent',
                        label:{
                            show:true,
                            position:'bottom'
                        }
                    }]
                })
            }
        }
    }
</script>
 
<style lang="scss" scoped>

</style>

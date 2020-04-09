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
    import echarts from "echarts";
    export default {
        data() {
            return {
                correctRate: '30'
            };
        },
        props: {},
        mounted() {
            this.drawChart();
        },
        methods: {
            drawChart() {
                let that = this;
                let chart = echarts.init(this.$refs.donut);
                var option = {
                    tooltip: {
                        show: false
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        name: "完成率",
                        type: "pie",
                        radius: ["60%", "87%"],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: "center",
                                    formatter: this.correctRate,
                                    textStyle: {
                                        color: "#fff",
                                        fontSize: "30",
                                        fontFamily: "微软雅黑",
                                        fontWeight: "bold"
                                    }
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: [{
                                value: this.correctRate,
                                name: "完成",
                                itemStyle: {
                                    normal: {
                                        //颜色渐变
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0,
                                                color: "#7558F0"
                                            },
                                            // {
                                            //     offset: 0.5,
                                            //     color: "#0CB9FF"
                                            // },
                                            {
                                                offset: 1,
                                                color: "#6ACAFC"
                                            }
                                        ])
                                    }
                                }
                            },
                            {
                                value: 100 - this.correctRate,
                                name: "未完成",
                                itemStyle:{
                                    normal:{
                                        color:'#435382'
                                    }
                                }
                            }
                        ]
                    }]
                };
                chart.setOption(option);
            }
        }
    };
</script>
 
<style lang="scss" scoped>

</style>

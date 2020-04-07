<!--
 * @Author: vigorzhang
 * @Date: 2020-03-11 22:51:52
 * @LastEditors: Riddick
 * @LastEditTime: 2020-04-01 09:36:54
 * @Description: 
 -->
<template>
    <div ref="range" style="width:100%;height:100%" class="range">
        <div class="barWrap flex f-between f-align">
            <span class="barTitle">吃饭</span>
            <div class="bar">
                <div class="barNum"></div>
            </div>
            <span class="barVal"></span>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "RangeChart",
        data() {
            return {
                chart: null
            }
        },
        methods: {
        },
        mounted() {
        }
    }
</script>
 
<style scoped lang='scss'>
    .range {
        .barWrap {
            padding: 0 .3rem 0 .5rem;
            .bar {
                width: 3.1rem;
                height: .14rem;
                border-radius: .14rem;
                background: #435382;
            }
            .barNum {
                height: 100%;
                width: 50%;
                border-radius: .14rem;
                background: linear-gradient(90deg, rgba(108, 111, 202, 1), rgba(97, 177, 224, 1));
            }
        }
    }
</style>
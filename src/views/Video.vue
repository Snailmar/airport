<!--
 * @Author: vigorzhang
 * @Date: 2020-03-10 09:44:22
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-16 11:17:31
 * @Description: 
 -->
<template>
    <div class="viewVideo">
        <TopBar />
        <div class="vChoose">
            选择类型
            <el-select v-model="cvalue" placeholder="请选择" size="medium" style="margin-left:.1rem">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <el-row class="sContent">
            <div class="contentChoose">
                商铺租赁率
                <el-select v-model="cvalue" placeholder="请选择" size="small" style="margin-left:.1rem">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <el-col class="ccWrap">
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
            </el-col>
            <el-col class="ccWrap" style="margin:0 .3rem">
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
            </el-col>
            <el-col class="ccWrap">
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
                <el-row class="chartcell">
                    <VideoCom></VideoCom>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar.vue";
    import VideoCom from "@/components/VideoCom.vue";
    export default {
        data() {
            return {
                cvalue: "选项1",
                options: [{
                        value: "选项1",
                        label: "商铺租赁情况"
                    },
                    {
                        value: "选项2",
                        label: "商铺状态"
                    }
                ]
            };
        },
        components: {
            TopBar,
            VideoCom
        }
    };
</script>

<style lang="scss">
    .viewVideo {
        .vChoose {
            color: #9eadda;
            font-size: 0.16rem;
            margin: 0.6rem 0 0 0.8rem;
            .el-input--suffix .el-input__inner {
                height: 0.44rem;
                text-align: center;
                font-size: 0.18rem;
                color: #fff;
                background: linear-gradient( 90deg, rgba(97, 189, 148, 1), rgba(147, 188, 85, 1)) !important;
                border: none;
                border-radius: 0.44rem;
            }
            .el-input__icon {
                position: relative;
                &::before {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        .sContent {
            margin: 0.4rem 0.4rem 0.2rem 0.5rem;
            padding: .3rem;
            background: linear-gradient( 0deg, rgba(18, 35, 81, 1), rgba(46, 66, 126, 1));
            border-radius: 0.05rem;
            .contentChoose {
                color: #9eadda;
                font-size: 0.14rem;
                margin: 0rem 0 .2rem 0;
                .el-input--suffix .el-input__inner {
                    height: 0.44rem;
                    font-size: 0.18rem;
                    text-align: center;
                    color: #fff;
                    background: linear-gradient( 90deg, rgba(97, 189, 148, 1), rgba(147, 188, 85, 1)) !important;
                    border: none;
                    border-radius: 0.44rem;
                }
                .el-input__icon {
                    position: relative;
                    &::before {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }
        .ccWrap {
            width: 4.98rem;
        }
        .chartcell {
            width: 4.98rem;
            height: 2.4rem;
            background: linear-gradient(184deg, rgba(56, 79, 132, 1), rgba(43, 62, 122, 1));
            border-radius: .06rem;
            margin-bottom: .2rem;
        }
    }
</style>
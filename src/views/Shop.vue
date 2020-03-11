<!--
 * @Author: vigorzhang
 * @Date: 2020-03-10 09:44:22
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-11 17:56:25
 * @Description: 
 -->
<template>
    <div class="viewShop">
        <TopBar />
        <div class="vChoose">
            选择类型
            <el-select v-model="cvalue" placeholder="请选择" size="medium" style="margin-left:.1rem">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </div>
        <div class="capital flex">
            <div class="cCell">
                <div class="cTile">总计营收</div>
                <div class="cMoney">
                    2000
                    <i>万</i>
                </div>
                <div class="ccpare">
                    <img src="../assets/img/down.png" alt />+130万
                </div>
            </div>
            <div class="cCell">
                <div class="cTile">总计营收</div>
                <div class="cMoney">
                    2000
                    <i>万</i>
                </div>
                <div class="ccpare">
                    <img src="../assets/img/down.png" alt />+130万
                </div>
            </div>
            <div class="cCell">
                <div class="cTile">总计营收</div>
                <div class="cMoney">
                    2000
                    <i>万</i>
                </div>
                <div class="ccpare">
                    <img src="../assets/img/down.png" alt />+130万
                </div>
            </div>
            <div class="cCell">
                <div class="cTile">总计营收</div>
                <div class="cMoney">
                    2000
                    <i>万</i>
                </div>
                <div class="ccpare">
                    <img src="../assets/img/down.png" alt />+130万
                </div>
            </div>
        </div>
        <el-row class="sContent">
            <div class="contentChoose">
                商铺租赁率
                <el-select v-model="cvalue" placeholder="请选择" size="small" style="margin-left:.1rem">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </div>
            <el-col class="ccWrap">
                <el-row class="chartcell" style="margin-bottom:.2rem">
                    <CategoryChart/>
                </el-row>
                <el-row class="chartcell">
                    <LineChart/>
                </el-row>
                <el-row></el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar.vue";
    import CategoryChart from "@/components/CategoryChart.vue";
    import LineChart from "@/components/LineChart.vue";
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
            CategoryChart,LineChart
        }
    };
</script>

<style lang="scss">
    .viewShop {
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
        .capital {
            margin-left: 0.8rem;
            margin-top: 0.5rem;
            .cCell {
                margin-right: 1.2rem;
                .cTile {
                    font-size: 0.15rem;
                    color: #9eadda;
                }
                .cMoney {
                    font-size: 0.5rem;
                    color: #fff;
                    i {
                        font-size: 0.28rem;
                        margin-left: 0.14rem;
                    }
                }
                .ccpare {
                    color: #9eadda;
                    font-size: 0.15rem;
                    img {
                        width: 0.14rem;
                        margin-right: 0.14rem;
                    }
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
                margin: 0.3rem 0 .2rem 0;
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
        .ccWrap{
             width: 4.98rem;
        }
        .chartcell{
            width: 4.98rem;
            height: 2.6rem;
            background: linear-gradient(184deg, rgba(56, 79, 132, 1), rgba(43, 62, 122, 1));
            box-shadow: 4px 5px 21px 0px rgba(13, 5, 10, 0.08);
            border-radius: .06rem;
        }
    }
</style>
<!--
 * @Author: vigorzhang
 * @Date: 2020-03-09 17:36:55
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-11 18:12:52
 * @Description: 
 -->
<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="2">
        <Sider />
      </el-col>
      <el-col :span='22'>
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import Sider from '@/components/Sider.vue'
  import TopBar from '@/components/TopBar.vue'
  export default {
    name: 'Home',
    components: {
      Sider,
      TopBar
    }
  }
</script>

<style lang="scss">
  .home {
    height: 100%;
    overflow: hidden;
    position: relative;
      color: #2c3e50;
  background: url('../assets/img/airport_bg.png') no-repeat;
  background-size: cover;
    .tac {
      height: 100%;
      .el-col-2{
        height: 100%;
      }
    }
  }
</style>

<!--
 * @Author: vigorzhang
 * @Date: 2020-03-09 17:36:55
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-10 10:13:49
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
    .tac {
      height: 100%;
    }
  }
</style>

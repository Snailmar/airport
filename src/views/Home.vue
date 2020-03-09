<template>
  <div class="home">
    <el-row class="tac">
      <Sider />
      <TopBar />
      
    <router-view/>
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
  Sider
  }
}
</script>
<style lang="scss">
    .home{
        
    }
</style>

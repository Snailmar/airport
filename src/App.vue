<!--
 * @Author: vigorzhang
 * @Date: 2020-03-09 17:19:47
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-10 10:15:52
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>


export default {
  data() {
    return { 
    }
  },

methods: {
  
},
}
</script>
<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  height: 100%;
  background: url('./assets/img/airport_bg.png') no-repeat;
  background-size: cover;
 
}


</style>

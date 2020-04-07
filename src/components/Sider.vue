<!--
 * @Author: vigorzhang
 * @Date: 2020-03-09 17:18:13
 * @LastEditors: Riddick
 * @LastEditTime: 2020-04-02 14:49:39
 * @Description: 
 -->
<template>
  <div class="view_sider">
    <div class="logo">
      <img src="../assets/img/logo.png" alt />
    </div>
    <div class="vs_content">
      <el-menu :default-active="acInd" class="el-menu-vertical" @open="handleOpen" @close="handleClose" @select="handleSelect" background-color="#12234B" text-color="#9EADDA" active-text-color="#fff">
        <div class="visonIcon flex column f-center f-align"><img src="../assets/img/bar.png" alt=""> <span>数据可视化</span></div>
        <el-menu-item index="1" class="navMenu">
          <i class="el-icon-menu"></i>
          <span slot="title">商铺</span>
        </el-menu-item>
        <el-menu-item index="2" class="navMenu">
          <i class="el-icon-menu"></i>
          <span slot="title">贵宾卡</span>
        </el-menu-item>
        <el-menu-item index="3" class="navMenu">
          <i class="el-icon-menu"></i>
          <span slot="title">航食</span>
        </el-menu-item>
        <el-menu-item index="4" class="navMenu">
          <i class="el-icon-menu"></i>
          <span slot="title">汽运</span>
        </el-menu-item>
        <el-menu-item index="5" class="navMenu">
          <i class="el-icon-menu"></i>
          <span slot="title">停车</span>
        </el-menu-item>
           <el-menu-item index="8" style="width:0;height:0">
        </el-menu-item>
      </el-menu>
      <div class="iconVideo flex f-align f-center column" @click="showVideo">
        <img src="../assets/img/video.png" alt=""><span>视频监控</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        acInd:'1'
      }
    },
    created() {
      this.handleRouter();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showVideo(){
            
        var navMenu=   document.querySelectorAll('.navMenu')
        navMenu.forEach(el=>{
          el.classList.remove('is-active')
        })
        console.log(navMenu)
            this.$router.push({name:'video'}).catch(err => {
    console.log('输出报错',err)})

            
      },
      handleRouter(){
        console.log(this.$route.name)
      var key=this.$route.name
        switch (key) {
          case 'shop':
            this.acInd='1'
            break;
         case 'vip':
            this.acInd='2'
            break;
         case 'food':
            this.acInd='3'
            break;
         case 'transport':
            this.acInd='4'
            break;
         case 'parking':
            this.acInd='5'
            break;
        
          default:
            this.acInd='0'
            break;
        }
      },
      handleSelect(key) {
        var that=this
        switch (key*1) {
          case 1:
            that.$router.push({name:'shop'}).catch(err => {
    console.log('输出报错',err)})
            break;
          case 2:
            that.$router.push({name:'vip'}).catch(err => {
    console.log('输出报错',err)})
            break;
          case 3:
            that.$router.push({name:'food'}).catch(err => {
    console.log('输出报错',err)})
            break;
          case 4:
            that.$router.push({name:'transport'}).catch(err => {
    console.log('输出报错',err)})
            break;
          case 5:
            that.$router.push({name:'parking'}).catch(err => {
    console.log('输出报错',err)})
            break;
          default:
            break;
        }
      }
    },
   
  };
</script>

<style lang="scss">
  .logo {
    background: linear-gradient( 52deg, rgba(109, 174, 142, 1), rgba(182, 213, 145, 1));
    img {
      width: 100%;
    }
  }
  .view_sider {
    height: 100%;
    text-align: center;
    .el-col {
      height: 100%;
    }
    .vs_content {
      height: 100%;
      background: linear-gradient(0deg, rgba(45, 64, 123, 1), rgba(10, 24, 61, 1));
    }
    .visonIcon {
      color: #fff;
      background: #0D1C3E;
      font-size: .14rem;
      padding: .2rem;
      img {
        width: .3rem;
        margin-bottom: .05rem;
      }
    }
    ul {
      margin: .4rem 0 0 .2rem;
      border-right: none;
    }
    .el-menu-item.is-active {
      background: #87BC65 !important;
    }
    .el-submenu__title.is-active {
      background: #87BC65 !important;
    }
  }
  .iconVideo {
    color: #9EADDA;
    font-size: .14rem;
    margin-top: .22rem;
    img {
      width: .28rem;
      margin-bottom: .08rem;
    }
  }
</style>

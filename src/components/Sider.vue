<!--
 * @Author: vigorzhang
 * @Date: 2020-03-09 17:18:13
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-10 10:16:13
 * @Description: 
 -->
<template>
  <div class="view_sider">
      <div class="logo">
        <img src="../assets/img/logo.png" alt />
      </div>
      <div class="vs_content">
      <el-menu
        default-active="1"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        background-color="#12234B"
        text-color="#9EADDA"
        active-text-color="#fff"
      >
      <div class="visonIcon flex column f-center f-align"><img src="../assets/img/bar.png" alt=""> <span>数据可视化</span></div>
       
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
         <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
         <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
         <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
      </el-menu>
      <div class="iconVideo flex f-align f-center column">
        <img src="../assets/img/video.png" alt=""><span>视频监控</span>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss">
.logo {
  background: linear-gradient(
    52deg,
    rgba(109, 174, 142, 1),
    rgba(182, 213, 145, 1)
  );
  img {
    width: 100%;
  }
}
.view_sider{
  height: 100%;
  text-align: center;
  .el-col{
    height: 100%;
  }
  .vs_content{
    height: 100%;
   background:linear-gradient(0deg,rgba(45,64,123,1),rgba(10,24,61,1));
  }
  .visonIcon{
    color: #fff;
    background: #0D1C3E;
    font-size: .14rem;
    padding: .2rem;
    img{
      width: .3rem;
      margin-bottom: .05rem;
    }
  }
  ul{
    margin: .4rem 0 0 .2rem;
    border-right:none;
  }
   .el-menu-item.is-active {
  background: #87BC65 !important;
}
 .el-submenu__title.is-active {
  background: #87BC65 !important;
}
}
.iconVideo{
  color: #9EADDA;
  font-size: .14rem;
  margin-top: .22rem;
  img{
    width: .28rem;
    margin-bottom: .08rem;
  }
}
</style>

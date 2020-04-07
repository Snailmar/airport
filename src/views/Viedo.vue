<!--
 * @Author: vigorzhang
 * @Date: 2020-03-16 10:58:11
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-16 11:12:08
 * @Description: 
 -->
 <template>
     <div class="viedo" ref="myvideo">
 
     </div>
 </template>
 
 <script>

import "../assets/css/DPlayer.min.css";
import DPlayer from '../assets/js/DPlayer.min.js';
     export default {
         data() {
             return {
                 player:null
             }
         },
         mounted() {
             this.initPlayer();
         },
         methods: {
             initPlayer(){
                 this.player=new DPlayer({
                     container:this.$refs.myvideo,
                     video:{
                         url:'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&amp;userId=17&amp;ext=.mp4'
                     }
                 })
             }
         },
     }
 </script>
 
 <style lang="scss" scoped>
 
 </style>

<!--
 * @Author: vigorzhang
 * @Date: 2020-03-12 11:41:37
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-16 11:16:27
 * @Description: 
 -->
 <template>
 
     <div ref="comvideo" class="comVideo">
         
     </div>
 
 </template>
 
 <script>
//  import 'dplayer/dist/DPlayer.min.css';
//  import  Dplayer from 'dplayer';
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
                         container:this.$refs.comvideo,
                         screenshot:false,
                         hotkey:false,
                         loop:false
                     })
             }
         },
     }
 </script>
 
 <style lang="scss" scoped>
 
 </style>

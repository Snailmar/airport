<!--
 * @Author: vigorzhang
 * @Date: 2020-03-09 17:16:19
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-10 09:39:18
 * @Description: 
 -->
<template>
    <div class="com_topbar">
        <input type="text">
        <span class="email"><img src="../assets/img/email.png" alt=""></span>
        <span class="message"><img src="../assets/img/message.png" alt=""></span>
        <span class="login"><img src="../assets/img/login.png" alt=""></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>
.com_topbar{
    position: absolute;
    right: .8rem;
    top: .3rem;
    input{
        width: 2rem;
        height: .28rem;
        border-radius: .28rem;
        padding-left: .2rem;
        line-height: .28rem;
        background: #112344;
        box-shadow:6px 8px 10px 0px rgba(13,5,10,0.13);
    }
    span{
        margin-left: .3rem;
        img{
            width: .2rem;
        }
    }
    .email{
        width: .24rem
    }
}
</style>
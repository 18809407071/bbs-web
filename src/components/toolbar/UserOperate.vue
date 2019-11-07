<!--
 * @Author: lrp
 * @Date: 2019-10-31 14:51:45
 * @Last Modified by: lrp
 * @Last Modified time: Do not edit
 -->
<template>
  <div class="user-oprate">
      <div><a @click="gotoLogin">登录</a></div>
      <div><a>注册</a></div>
      <div><a>个人中心</a></div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    gotoLogin:function (){
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
  .user-oprate{
    float:right;
    overflow: hidden;
    div{
      float: left;
      padding: 0 5px;
      cursor: pointer;
      a{
        color: #333;
      }
      &:hover{
          color: #ff0000;
        }
    }
  }
</style>

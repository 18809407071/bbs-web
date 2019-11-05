<!--
 * @Author: lrp
 * @Date: 2019-10-31 11:36:11
 * @Last Modified by: lrp
 * @Last Modified time: Do not edit
 -->
<template>
  <div id="app">
      <el-container>
        <!-- <i class="header-bg"></i> -->
        <!-- 头部 -->
        <el-header>
          <h1><img src="./assets/img/Medical Information Forum.png" alt="医疗信息论坛" class="logo"></h1>
          <useroperate ></useroperate>
        </el-header>
        <!-- 菜单 -->
        <nav-box></nav-box>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>

<script>
import ToolBar from './components/toolbar/ToolBar.vue';
import UserOperate from './components/toolbar/UserOperate.vue'
import Navigation from './components/nav/Navigation.vue'
import Content from './components/content/Content.vue'
export default {
  name: 'App',
  components:{
    "toolbar-box":ToolBar,
    'useroperate':UserOperate,
    'nav-box':Navigation,
    'content-box':Content
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
  .el-header {
    margin-top: 10px;
    text-align: center;
    line-height: 60px;
    padding: 0 10px;
    background: url('./assets/img/2.jpg') no-repeat;
    background-size: cover;
    h1{
      float: left;
    }
    .logo{
      margin-top: 7px;
    }
  }

  body > .el-container {
    margin-bottom: 40px;
  }

}
</style>

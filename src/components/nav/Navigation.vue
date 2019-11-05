<!--
 * @Author: lrp
 * @Date: 2019-10-31 16:54:38
 * @Last Modified by: lrp
 * @Last Modified time: Do not edit
 -->
<template>
  <div>
      <ul class="menu-item" id="menu_item">
        <li v-for="menu in menulist" :key="menu.code" :class="'level-one level-'+menu.code">
          <a class="app-item" @click.stop="gotoPage(menu.code,menu.url)"><i class="el-icon-star-on"></i>&nbsp;{{menu.name}}</a>
        </li>
      </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        menulist:[
          {
            name:'首页',
            code:'SY',
            url:'/sy'
          },
          {
            name:'热门帖子',
            code:'RMTZ',
            url:'/rmtz'
          },
           {
            name:'精品帖子',
            code:'JPTZ',
            url:'/jptz'
          },
          {
            name:'模块',
            code:'MK',
            url:'/mk'
          },
          {
            name:'帮助',
            code:'BZ',
            url:'/bz'
          }

        ],
        flag:'KJLK'
      }
    },
    mounted(){
      $(".level-one.level-SY").addClass('active');
    },
    methods:{
      //菜单栏的展示隐藏
      gotoPage(code,url){
        $(".level-one.level-"+ code).addClass('active').siblings('li').removeClass('active');
         this.$router.push(url);
      }
    },

  }
</script>
<style lang="scss" scoped>
  div{
    text-align: center;
    .menu-item{
      border-bottom: 2px solid #2d8cf0;
      .level-one {
        position: relative;
        display: inline-block;
        *display: inline;
        width: 14%;
         &.active{
           background: #ddecf7;
            a{
              color: #2d8cf0
            }
          }
        a {
          display: block;
          padding: 10px 0;
          text-decoration: none;
          color: #333;
          cursor:pointer;
          font-size: 16px;

        }
    }
  }
  }

</style>

<!--
 * @Author: lrp
 * @Date: 2019-10-31 11:54:40
 * @Last Modified by: lrp
 * @Last Modified time: Do not edit
 -->
<template>
  <div class="toolbar">
    <ul>
      <li v-for="item in toolbars" :key="item" class="toolbar-item">
        <a> {{item}}</a>
      </li>
    </ul>
    <ul class="user-info">
      <li class="self"><a>个人中心</a></li>
      <li>
          <slot name="userOperate"></slot>
          <slot name="userInfo"></slot>
      </li>

    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      toolbars:['设为首页','收藏本站','将本站放到桌面']
    }
  }
}
</script>
<style lang="scss" scoped>
  .toolbar{
    font-size: 12px;
    padding: 10px;
    display: flex;
    ul{
      flex: 1;
      overflow: hidden;
      li{
        padding: 0 5px;
        cursor: pointer;
        &.toolbar-item {
        float: left;
        border-right: 1px solid #999;
        a{
          display: block;
        }
        &:hover{
          color: #ff0000;
        }
      }
      }

      &.user-info{
        li {
          text-align: right;
          float: right;
          &.self:hover{
            color: #ff0000;
          }
        }
      }
    }


  }

</style>

<!--
 * @Author: lrp
 * @Date: 2019-11-01 09:19:58
 * @Last Modified by: lrp
 * @Last Modified time: Do not edit
 -->
<template>
  <div class="wrap">
    <div class="main-cont-outer">
       <div class="main-cont" v-for="item in data" :key="item.name">
        <div class="container">
          <div class="title">
            <div class="tile-name">{{item.name}} TOP 10</div>
            <div class="more"> 更多</div>
          </div>
          <div class="main">
            <div class="topic-data"  v-for="msg in item.post" :key="msg.id" @click.stop="viewDeatil(item.code,msg.id)">
                <p class="user-topic">{{msg.id}} &nbsp;&nbsp;{{msg.topic}}</p>
              <p class="user-name">{{msg.user}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 友情导航 -->
    <div class="show-info">
      <friend-nav>
        <el-button type="primary" slot="publish" size="small" @click="publicArtical">我要发帖</el-button>
      </friend-nav>
    </div>
  </div>

</template>
<script>
import FriendNav from '../content/FriendNav.vue';
export default {
  data(){
    return{
      data:[
        {
          name:'热帖榜',
          code:'rbt',
          post:[
            {
              id:1,
              topic:'找免费发帖网站大全?投融界信息发布及时更新,注册即可与投资人面对面,海量商机,马上点击注册,实现财富梦想免费发帖网站大全,就上投融界',
              user:'花花'
            },
            {
              id:2,
              topic:'帖子 tiězi，主要有以下几个意思:(1) [invitation]∶请柬--喜帖(2) [card]',
              user:'草草'
            },
            {
              id:3,
              topic:'你好，发帖子的步骤如下 首先进入你要发帖子的贴吧里 把页面拉到最下面',
              user:'树树'
            }
          ]
        },
        {
          name:'新帖榜',
          code:'xbt',
           post:[
            {
              id:1,
              topic:'无无语了是原创类高清视频,画面清晰,播放流畅,发布时间:2018-08-15。视频简介:无无语了',
              user:'兔兔'
            },
             {
              id:2,
              topic:'中控智慧服服 服服云平台 服服优品 服服智能设备 服服,全方位覆盖您的企业管理 为老板省',
              user:'的荷花的函数'
            },
             {
              id:3,
              topic:'现在的ST保壳公司,实在太会 玩 儿了,上市公司——宁波圣莱达电器股份有限公司 ',
              user:'了吃撒可怜的'
            }
          ]
        },
        {
          name:'精帖榜',
          code:'jbt',
          post:[
            {
              id:1,
              topic:'王国保卫战4复仇,最新简中破解版,无限钻石内购英雄和塔网易',
              user:'哈哈是多大的'
            },
             {
              id:2,
              topic:'这是《红色警戒2:尤里的复仇》v1.001共和国之辉新世纪MOD。阵营更加分化,从1.0的四个到',
              user:'发生大傻傻的水电费改水电费'
            },
             {
              id:3,
              topic:' 我要收藏立即下载 新手建议先购买2个基础装备,进入专属练功房练到',
              user:'第三方舒服舒服'
            }
          ]
        }
      ]
    }
  },
  components:{
    'friend-nav' : FriendNav
  },
  methods:{
    //查看发帖详情页
    viewDeatil(code,id){
      this.$router.push('view/detailPost/'+code+'/'+id);
    },
    //发帖
    publicArtical(){
      this.$router.push('publicPost');
    }
  }

}
</script>
<style lang="scss"  scoped>
  .wrap,.title,.topic-data{
    display:flex;
  }
  .main-cont-outer,.tile-name,.user-topic{
     flex: 3;
  }
  .show-info,.more,.user-name{
    flex:1;
  }
  .user-topic,.user-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .more,.user-name{
    text-align: right;
  }

  .wrap {
    .main-cont{
      margin-bottom: 20px;
    }
    .container{
      border: 1px dashed #ccc;
      .title{
        .tile-name {
          font-size: 15px;
          font-weight: 600;
        }
        .more {
          cursor: pointer;
        }
      }
      .main{
        padding:0 10px;
        .topic-data{
          padding: 10px 0;
          border-bottom: 1px dashed #ccc;
          cursor: pointer;
          &:last-child{
            border-bottom: 0;
          }
        }
      }
    }
  }
  .el-button--small, .el-button--small.is-round{
    width: 100%;
    margin-bottom: 20px;
  }
</style>

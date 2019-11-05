<template>
  <div class="friend-nav">
    <slot name="publish"></slot>
    <div class="nav-wrap" v-for=" item in forumsData" :key="item.title">
      <h3>{{item.title}}</h3>
      <div v-for="list in item.artical" :key="list.public_time" class="info-show" @click="viewDetail(list.id)">
        <p>{{list.cont}}</p>
        <p>{{list.public_time}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      forumsData:[
        {
          title:'论坛公告',

          artical:[
            {
              cont:'隐私和版权',
              "public_time":'2019/11/01',
              id:'djasdjashdajfhhf'
            },
            {
              cont:'关于论坛',
              "public_time":'2019/10/01',
              id:'fffdyhtyuuruu7tu'
            },
            {
              cont:'关于版权',
              "public_time":'2019/05/01',
              id:'bhry567we543'
            }
          ]
        },
        {
          title:'论坛帮助',
          artical:[
            {
              cont:'登录与注册',
              "public_time":'2019/07/01',
              id:'243546vhytur7inyit'
            },
            {
              cont:'密码注意事项',
              "public_time":'2019/04/01',
              id:'hbyk68795t5435rvfe'
            },
            {
              cont:'联系我们',
              "public_time":'2019/02/02',
              id:'hbtyur6789364vttrg'
            }
          ]
        },
        {
          title:'友情链接',
          artical:[
            {
              cont:'隐私和版权',
              "public_time":'2019/11/1'
            }
          ]
        },
      ]
    }
  },
  methods:{
    viewDetail(id){
      this.$router.push('/view/friendNavInfo/'+id);
    },
  }
}
</script>
<style lang="scss" scoped>
.friend-nav {
  margin-left: 20px;
  .nav-wrap{
    margin-bottom: 20px;
    border: 1px solid #ccc;
    h3 {
      padding: 5px;
      background: #ddecf7;
      color: #2d8cf0;
      font-size: 14px;
      font-weight: 400;
    }
    .info-show {
    display: flex;
    border-bottom: 1px dashed #ccc;
    cursor: pointer;
    &:last-child{
      border-bottom: 0;
    }
    &:hover {
      color: #2d8cf0;
    }
    p{
      padding: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:nth-child(1){
        flex: 3;
      }
      &:nth-child(2){
        flex: 1;
      }
    }
  }
  }

}

</style>

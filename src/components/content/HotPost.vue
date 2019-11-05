<template>
  <div>
    <post-box :topic='hotTopic'></post-box>
  </div>
</template>
<script>
import Post from './Post.vue';
export default {
  data(){
    return {
      hotTopic:[
        {
          type:'是地方GV个',
          title:'这是热门帖子的个梵蒂冈让他这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的 ',
          author:'反反复复',
          score:'打的赌',
          answer:'方法是大家风范山东济南',
          time:'2019-09-30'
        },
        {
          type:'是地方GV个',
          title:'个梵蒂冈让他这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的 ',
          author:'反反复复这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的',
          score:'打的赌',
          answer:'方法是大家风范山东济南',
          time:'2019-09-31'
        },
        {
          type:'是地方GV个',
          title:'个梵蒂冈让他这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的 ',
          author:'反反复复',
          score:'打的赌',
          answer:'方法是大家风范山东济南',
          time:'2019-08-30'
        },
        {
          type:'是地方GV个',
          title:'个梵蒂冈让他这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的 ',
          author:'反反复复',
          score:'打的赌',
          answer:'方法是大家风范山东济南',
          time:'2019-08-27'
        },
        {
          type:'是地方GV个',
          title:'个梵蒂冈让他这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的这是热门帖子的 ',
          author:'反反复复',
          score:'打的赌',
          answer:'方法是大家风范山东济南',
          time:'2019-07-30'
        }
      ]
    }
  },
  components:{
    "post-box":Post
  }
}
</script>

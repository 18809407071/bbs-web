<template>
  <div class="wrap">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <h2>{{id}}</h2>
          <p>关于论坛</p>
          <p>关于版权</p>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <h1 class="text-c">{{id}}</h1>
          <p class="content">
            关于论坛更新

            本论坛旨在为从事医疗行业和医学信息建设行业的广大用户提供知识传播、经验交流和发展兴趣社交的服务平台。在开放、包容和高互动性的氛围带动下，结合严谨的隐私和版权管理体制，本论坛吸引了大量具有专业知识或相关兴趣的用户群，并拥有高质量的精品原创内容，形成了独具特色的论坛文化，拥有一定的舆论影响力。

          目前本论坛还在初步建设中，还有很多功能会陆续推出，敬请期待，谢谢大家的支持！

            <p class="text-r">发布于： 2018-05-24 06:59:30</p>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      id:this.$route.params.id
    }
  },
  props:['msg']
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 80%;
  margin:0 auto;
  .content {
    font-size: 18px;
    line-height: 35px;;
  }
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple {
    border: 1px solid #ccc;
    padding: 15px;
  }

</style>

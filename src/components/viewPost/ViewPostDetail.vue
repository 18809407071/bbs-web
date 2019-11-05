<template>
  <div>
    <div class="view-wrap">
      <el-row>
        <el-button plain class="el-icon-back" @click="bakcList">返回列表</el-button>
        <el-button type="primary">发帖</el-button>
        <el-button type="warning">回复</el-button>
      </el-row>
      <div class="title post-head">摘要标题</div>
      <table class="table post-table">
        <tr>
          <td width="200" rowspan="20">
            <div>
              <p>{{code}}++{{id}}</p>
              <p class="user-photo">
                <img src="../../assets/img/photo.png" alt="用户头像" />
              </p>
              <p>
                <table class="table">
                  <tr>
                    <td>主题</td>
                    <td>帖子</td>
                    <td>积分</td>
                  </tr>
                  <tr class="blue-text">
                    <td>110</td>
                    <td>33</td>
                    <td>3244</td>
                  </tr>
                </table>
              </p>
            </div>
          </td>
          <td>
            <div class="public-time">发表时间：2019/11/4  <el-button type="danger" class="fr" size="mini">删 除</el-button></div>
          </td>
        </tr>
        <tr>
          <td rowspan="19">
            <div class="public-content">{{code}}<br>{{id}}<br>发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容发帖的内容</div>
          </td>
        </tr>
      </table>
    </div>
    <Page :total="100" show-elevator  show-total></Page>
  </div>
</template>
<script>
export default {
  data(){
    return{
      id:this.$route.params.id,
      code:this.$route.params.code
    }
  },
  methods:{
    bakcList(){
      this.$router.push('/sy')
    }
  }

}
</script>
<style lang="scss" scoped>
  .title.post-head {
    margin-top: 10px;
    border: 0;
  }
  .table {
    td {
      border: 1px solid #ccc;
      padding: 5px;
      text-align: center;
      .user-photo {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin: 0 auto;
      }
      .public-time {
        height: 28px;
        line-height: 28px;
      }
      .public-time,.public-content{
          text-align: left;
        }
      p{
        padding: 5px 0;
        .table {
          td{
            border: 0;
            padding: 0;
            font-size: 12px;
            border-right: 1px solid #ccc;
            &:last-child{
              border: 0;
            }
          }
        }
      }
    }
  }
</style>

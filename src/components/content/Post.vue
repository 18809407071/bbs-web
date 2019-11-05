<template>
  <div>
    <div class="post-info">
        <table>
          <thead>
            <tr>
              <th width="10%">类型</th>
              <th width="50%">标题</th>
              <th width="10%">作者</th>
              <th width="10%">积分</th>
              <th width="10%">回复</th>
              <th width="10%">发布时间</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in topic" :key="item.time">
              <td>{{item.type}}</td>
              <td>{{item.title}}</td>
              <td>{{item.author}}</td>
              <td>{{item.score}}</td>
              <td>{{item.answer}}</td>
              <td>{{item.time}}</td>
            </tr>
          </tbody>
        </table>
    </div>
    <Page :total="100" show-elevator  show-total></Page>
  </div>
</template>
<script>
export default {
  props:['topic']
}
</script>
<style lang="scss" scoped>
  .post-info {
    table{
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed!important;
      th{
        background: #ddecf7;
      }
      th,td {
        height: 38px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      td {
        border-bottom: 1px dashed #ccc;
      }
    }
  }
</style>

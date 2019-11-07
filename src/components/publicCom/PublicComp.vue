<template>
  <div class="post-wrap">
     <div class="title">发布帖子  <el-button type="danger" size="mini" class="fr" @click="createTopic();">发 布</el-button></div>
     <table class="table">
       <tr>
         <th width="160">文章标题</th>
         <td>
             <i-input v-model.sync="topic.title" placeholder="请输入..." ></i-input>
         </td>
       </tr>
       <tr>
         <th>文章内容</th>
         <td>
             <div id="editor" type="text/plain" style="width:100%;min-height:300px;">
             </div>
         </td>
       </tr>
       <tr>
         <th>选择板块</th>
         <td>
            <select style="height:26px;width: 200px;font-size:14px">
                <option value="0">--请选择大版块--</option>

                  <option value="1">
                    前沿技术
                  </option>

                  <option value="2">
                    户外急救
                  </option>

                  <option value="3">
                    普通疾病
                  </option>

                  <option value="4">
                    医疗设备
                  </option>

                  <option value="5">
                    疑难杂症
                  </option>

                  <option value="6">
                    全民健康
                  </option>

                  <option value="7">
                    医信建设
                  </option>

                  <option value="8">
                    论坛杂谈
                  </option>

                  <option value="9">
                    共享专区
                  </option>
            </select>
            <select style="height:26px;width: 200px;font-size:14px">
                <option value="0">--请选择小版块--</option>

                  <option value="1">
                    前沿技术
                  </option>

                  <option value="2">
                    户外急救
                  </option>

                  <option value="3">
                    普通疾病
                  </option>

                  <option value="4">
                    医疗设备
                  </option>

                  <option value="5">
                    疑难杂症
                  </option>

                  <option value="6">
                    全民健康
                  </option>

                  <option value="7">
                    医信建设
                  </option>

                  <option value="8">
                    论坛杂谈
                  </option>

                  <option value="9">
                    共享专区
                  </option>
            </select>
         </td>
       </tr>
       <tr>
         <th>友好提示</th>
         <td>
            <ol>
              <li>1、这里发言，表示您接受了医学信息化论坛的用户<a href="" target="_blank">行为准则</a>。</li>
              <li>2、请对您的言行负责，并遵守中华人民共和国有关法律法规,尊重网上道德。</li>
              <li>3、转载文章请注明出自出处。如是商业用途请联系原作者。</li>
            </ol>
         </td>
       </tr>
     </table>
  </div>
</template>
<script>
import '../../../static/ueditor/utf8/themes/default/css/ueditor.min.css'
import '../../../static/ueditor/utf8/ueditor.config.js'
import '../../../static/ueditor/utf8/ueditor.all.js'
import '../../../static/ueditor/utf8/ueditor.parse.js'
import '../../../static/ueditor/utf8/lang/zh-cn/zh-cn.js'

import {post} from "../../api/http";

export default {
    data(){
      return{
        ue:null,
        topic:{
          id : '',
          title : '',
          content : '',
          userId : '',
          typeId : ''
        }
      }
    },
    mounted(){
      this.ue = UE.getEditor('editor');
    },
    methods:{
      createTopic:function () {
        this.topic.content = this.ue.getPlainTxt();
        post('/topic/create',this.topic).then(res=>{

        }).catch(error=>{

        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .post-wrap {
    width: 80%;
    margin: 0 auto;
    .title {
      border: 0;
        height: 48px;
        line-height: 28px;
    }
  }

</style>

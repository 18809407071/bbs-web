<template>
  <div>
    <div class="partten-wrap">
      <el-row :gutter="20" v-for="item in partData" :key="item.title">
        <el-col :span="24"><div class="grid-content bg-purple-dark">{{item.title}}</div></el-col>
        <el-col :span="6" v-for="list in item.sub" :key="list.sub_title">
          <div class="grid-content bg-purple">
            <h3>{{list.sub_title}}</h3>
            <p>共{{list.theme_counts}}主题/{{list.ask}}回复</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      partData:[
        {
          title:'前沿技术',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              },
              {
                'sub_title':'打的赌',
                'theme_counts':3,
                'ask':4
              },
              {
                'sub_title':'法国队会',
                'theme_counts':3,
                'ask':4
              },
              {
                'sub_title':'富贵荣华',
                'theme_counts':3,
                'ask':4
              },
              {
                'sub_title':'梵蒂冈烦得很',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'户外急救',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'普通疾病',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'医疗设备',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'疑难杂症',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'全民健康',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'医信建设',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'论坛杂谈',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        },
        {
          title:'共享专区',
          sub:[
              {
                'sub_title':'最新研究',
                'theme_counts':3,
                'ask':4
              }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    border:1px solid #ccc;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    &.el-col-24{
      background: #ddecf7;
      border-bottom:1px solid #2d8cf0;
    }
  }
  .bg-purple-dark {
    padding: 8px 0;
    font-size: 16px;
    font-weight: 700;
    color: #2d8cf0;
  }
  .bg-purple {
    background: #fff;
    box-shadow: 4px 4px 7px #ccc;
    margin: 5px;
    padding: 5px;
    h3 {
      color: #2d8cf0;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .grid-content {
    border-radius: 4px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #ddecf7;
  }
</style>

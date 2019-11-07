<template>
  <div>
      <div class="login-wrap">
          <i-form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80">
            <Form-item prop="user" label="用户名">
                <i-input type="text" :value.sync="formInline.user" placeholder="Username">
                </i-input>
            </Form-item>
            <Form-item prop="password" label="密　码">
                <i-input type="password" :value.sync="formInline.password" placeholder="Password">
                </i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary" long @click="handleSubmit(formInline)">登录</i-button>
            </Form-item>
        </i-form>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      formInline:{
        user:'zhangsan',
        password:'123456'
      },
      ruleInline: {
          user: [
              { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
              { required: true, message: '请填写密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
      }

    }
  },
  methods:{
   handleSubmit(formInline) {
      //  this.$refs[formInline].validate((valid) => {
      //      if (valid) {
      //          this.$Message.success('提交成功!');
      //      } else {
      //          this.$Message.error('表单验证失败!');
      //      }
      //  });
      this.$router.push('/sy')
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-wrap{
    width: 500px;
    margin: 0 auto;
    .ivu-input-wrapper.ivu-input-wrapper-default {
      margin-bottom: 20px;
    }
  }
</style>

<template>
  <div class="login">
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/111.jpg"
             alt />
      </div>
      <!-- 登录 -->
      <el-form class="login_form"
               ref="loginFormRef"
               :rules="loginFormRules"
               :model="loginForm">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid"
                    v-model="loginForm.username"
                    placeholder="请输入昵称"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password"
                    prefix-icon="iconfont icon-3702mima"
                    v-model="loginForm.password"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary"
                     @click="login">登录</el-button>
          <el-button type="info"
                     @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        useename: '',
        password: ''
      },
      // 表单验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 6, message: '长度在 3 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置登录表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    // 表单登录前验证
    login () {
      // 发起登录请求
      this.$router.push('/home')
    }
  }
}

</script>

<style scoped lang="less">
.login {
  background-color: #2b4b6b;
  height: 100%;
  background: url(../assets/111.jpg) no-repeat center;
  background-size: cover;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);

  .avater_box {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>

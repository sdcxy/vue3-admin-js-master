<template>
  <div class="login">
    <div class="login-wrap">
      <el-form :model="loginForm" status-icon>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            placeholder="请输入账号/手机号码"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入6~16位有效密码"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <!-- 登录验证码 -->
        <el-form-item class="captcha_wrap">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input  type="text" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="12">
              <captcha :options="options"></captcha>
            </el-col>
          </el-row>
        </el-form-item>
         <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <swipe-verify-code></swipe-verify-code>
    </div>
  </div>
</template>
<script>
import Captcha from "../../components/Captcha/Captcha.vue";
import SwipeVerifyCode from '../../components/SwipeVerifyCode/SwipeVerifyCode.vue'
import { reactive, toRefs } from "vue";
export default {
  name: "Login",
  components: {
    Captcha, SwipeVerifyCode
  },
  setup() {
    const dataForm = reactive({
      loginForm: {
        username: "",
        password: ""
      },
      options: {
        code: "u4N5L3",
        width: 100,
        height: 40,
        line: 70,
        point: 1000
      }
    });
    const data = toRefs(dataForm);
    return {
      ...data
    };
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
.captcha_wrap{
  .el-form-item__content{
    line-height: 0
  }
}
</style>

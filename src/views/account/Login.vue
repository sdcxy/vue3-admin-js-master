<template>
  <div class="login">
    <div class="login-wrap">
      <el-form :model="loginForm" status-icon>
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入账号/手机号码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入6~16位有效密码"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <sliding-captcha></sliding-captcha>
          <!-- <div id="captcha" class="login-captcha">
            <i class="el-icon-right" id="captcha-icon"></i>
            <span>向右滑动验证码</span>
          </div> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import SlidingCaptcha from "../../components/Captcha/SlidingCaptcha.vue"
import { reactive } from "vue";
export default {
  name: "Login",
  components: {
    SlidingCaptcha
  },
  setup() {
    const loginForm = reactive({
      username: "",
      password: ""
    });

    return {
      loginForm
    };
  }
};
</script>
<style lang="sass">
@import "./index.scss"

</style>

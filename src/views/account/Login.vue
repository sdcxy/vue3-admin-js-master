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
        <el-form-item>
          <slider-verify-code @onSuccess="success" :options="sliderVerifyCodeOptions"></slider-verify-code>
        </el-form-item>
         <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
      <picture-verify-code></picture-verify-code>
    </div>
  </div>
</template>
<script>
import Captcha from "../../components/Captcha/Captcha.vue";
import SliderVerifyCode from '../../components/SliderVerifyCode/SliderVerifyCode.vue'
import { reactive, toRefs } from "vue";
import PictureVerifyCode from '../../components/PictureVerifyCode/PictureVerifyCode.vue';
export default {
  name: "Login",
  components: {
    Captcha, SliderVerifyCode,
    PictureVerifyCode
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
      },
      sliderVerifyCodeOptions: {
        text: "请向右滑动验证",
        successText: "验证成功", // 验证成功文字
        sliderTextColor: "#54e346", // 滑块验证成功的文本颜色
        sliderBackground: "#54e346", // 滑块滑动时背景颜色
        sliderColor: "#fff", // 滑块颜色
        height: 40, // 高度默认40
        color: "#fff", // 初始化的字体颜色
        backgroud: "#cfd3ce", // 背景颜色
        fontSize: 12, // 字体大小
      }
    });
    const success = (e) => {
      console.log(e);
    }
    const data = toRefs(dataForm);
    return {
      ...data,
      success
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

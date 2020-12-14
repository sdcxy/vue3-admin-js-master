<template>
  <div class="login">
     <!-- 账户和密码 -->
    <div class="login-wrap">
      <el-form :model="loginForm" status-icon>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            placeholder="请输入账号/手机号码"
            autocomplete="off"
          >
            <!--  前置图标 -->
            <template #prefix>
              <svg-icon icon-class="account" class-name="v-icon"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入6~16位有效密码"
            autocomplete="off"
          >
            <!--  前置图标 -->
            <template #prefix>
              <svg-icon icon-class="password" class-name="v-icon"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 登录验证码 -->
        <el-form-item>
          <slider-verify-code
            class="v-base"
            @onVerify="success"
            :options="sliderVerifyCodeOptions"
          >
            <template #icon>
              <svg-icon v-if="sliderVerifyCodeOptions.icon && isSuccess" icon-class="slider-success" class-name="v-success v-large"></svg-icon>
              <svg-icon v-else icon-class="slider" class-name="v-black v-large"></svg-icon>
            </template>
          </slider-verify-code>
        </el-form-item>
        <el-form-item>
          <sms-verify-code></sms-verify-code>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="success">登录</el-button>
        </el-form-item>
        <el-form-item class="forget_wrap">
          <span class="v-mini v-default v-hover" @click="router.push('/forget')">忘记密码</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import SliderVerifyCode from "../../components/SliderVerifyCode/SliderVerifyCode.vue";
import { reactive, toRefs } from "vue";
import { useRouter  } from "vue-router";
import SvgIcon from '../../components/Icons/SvgIcon.vue';
import SmsVerifyCode from '../../components/SmsVerifyCode/SmsVerifyCode.vue';
export default {
  name: "Login",
  components: {
    SliderVerifyCode,
    SvgIcon,
    SmsVerifyCode
  },
  setup() {
    const dataForm = reactive({
      loginForm: {
        username: "",
        password: "",
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
        icon: true, // 是否使用自定义的图标文件
      },
      isSuccess: false
    });
    const success = (e) => {
      dataForm.isSuccess = e;
    };
    const data = toRefs(dataForm);

    // 定义 router
    const  router  = useRouter()

    return {
      ...data,
      success,
      router,
    };
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #71707c;
  display: flex;
  align-items: center;
  background-image: url("../../assets/bg/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.login-wrap {
  width: 400px;
  margin: auto;
  background-color: transparent;
}
.login-wrap button{
  width: 100%;
}
.login-wrap label {
  font-size: 16px;
  color: white;
}
.captcha_wrap {
  .el-form-item__content {
    line-height: 0;
  }
}
.forget_wrap{
  display: flex;
  margin-right: 10px;
  justify-content: flex-end;
}
</style>

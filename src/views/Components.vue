<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="12">
        <picture-verify-code @onVerify="success"></picture-verify-code>
      </el-col>
      <el-col :span="12">
        <slider-verify-code></slider-verify-code>
      </el-col>
      <el-row :gutter="20" style="margin-top: 60px;padding-left:10px">
        <el-col :span="6">
          <el-input type="text" v-model="code" autocomplete="off"></el-input>
        </el-col>
        <el-col :span="12">
          <captcha :options="options"></captcha>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import Captcha from "../components/Captcha/Captcha.vue";
import PictureVerifyCode from "../components/PictureVerifyCode/PictureVerifyCode.vue";
import SliderVerifyCode from "../components/SliderVerifyCode/SliderVerifyCode.vue";
export default {
  name: "Components",
  components: {
    Captcha,
    PictureVerifyCode,
    SliderVerifyCode
  },
  setup() {
    const data = toRefs(
      reactive({
        code: "",
        options: {
          code: "238771", // 验证码
          width: 100, // 验证码宽度
          height: 40, // 验证码高度
          line: 20, // 干扰线
          point: 100, // 干扰点
        },
      })
    );

    // 暂未完成的功能
    watch(data.code, () => {
      if (data.code.value === data.options.value.code) {
        alert("验证成功");
      }
    });

    const success = (e) => {
      console.log(e);
      if (e) {
        alert("验证成功");
      }
    };
    return {
      ...data,
      success,
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #71707c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

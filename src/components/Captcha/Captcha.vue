<template>
  <canvas id="captcha" class="canvas_captcha"></canvas>
</template>
<script>
import { drawCode } from "./captcha";
import { onMounted, watch } from "vue";
export default {
  name: "Captcha",
  props: {
    options: {
      type: Object,
      required: true,
      default: function() {
        return {
          code: "123456", // 验证码
          width: 100, // 验证码宽度
          height: 40, // 验证码高度
          line: 20, // 干扰线
          point: 100, // 干扰点
        };
      },
    },
  },
  setup(props) {
    // 加载完成之后，绘制验证码
    onMounted(() => {
      drawCode(props.options);
    }),
      // 监听属性，当options发生变化时，重新绘制验证码
      watch(props.options, () => {
        drawCode(props.options);
      });
    return {};
  },
};
</script>
<style lang="scss" scoped>
.canvas_captcha {
  border-radius: 4px;
  cursor: pointer;
}
</style>

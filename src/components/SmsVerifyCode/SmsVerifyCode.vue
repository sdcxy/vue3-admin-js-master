<template>
  <el-row :gutter="20">
    <el-col :span="14">
      <el-input v-model="code"></el-input>
    </el-col>
    <el-col :span="10" class="verify-code-button">
      <el-button type="primary">获取验证码</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: "SmsVerifyCode",
  props: {
    
  },
  setup() {
    const data = toRefs(reactive({
      code: ""
    }))
    return {
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>
.verify-code-button{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>>
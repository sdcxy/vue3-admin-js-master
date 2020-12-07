<template>
  <div class="captcha" ref="captcha">
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup(){
    const captcha = ref(null)

    onMounted(()=> {
      console.log(captcha)
    })

    return {
      captcha
    }
  }
}
</script>

<style lang="scss">

</style>
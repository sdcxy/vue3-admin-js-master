<template>
  <div class="swipe_verify_code">
    <div class="content">请滑动解锁</div>
    <div class="icon" ref="swipe" >
      &gt;&gt;
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
export default {
  name: "SwipeVerifyCode",
  setup(){
    const swipe = ref(null)
    onMounted(()=>{
      console.log(swipe)
      swipe.value.onmousedown  = (e) => {
        console.log(e.target)
      }
    })
    return {
      swipe
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe_verify_code{
  position: relative;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  background-color: #e8e8e8;
  border-radius: 4px;
}
.swipe_verify_code .content {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  animation: falshing 5s;

}
.swipe_verify_code .icon {
  position: absolute;
  width: 38px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  cursor: move;
  background-color: rgba(255,255,255,0.8);
  border-radius: 10%;
  border: 1px solid rgba(255, 255, 255, 0.3)
}
// 动画
@keyframes falshing {
  from {
    background:linear-gradient(to right, rgba(255,255,255, 0.3), rgba(255,255,255, 1));
  }
  to {
    background:linear-gradient(to right, rgba(255,255,255, 0.8), rgba(255,255,255, 0.3));
  }
}
</style>>
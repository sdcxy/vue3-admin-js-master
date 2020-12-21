<template>
  <div class="v-collapse-button-wrapper" @click="onCollapseHandle">
    <!--  如果isActive为true  显示向右图标，如果为false 显示向左图标 -->
    <svg-icon v-if="!isActive" icon-class="collapse-left" ></svg-icon>
    <svg-icon v-else icon-class="collapse-right" ></svg-icon>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import SvgIcon from '../Icons/SvgIcon.vue'
export default {
  components: { SvgIcon },
  name: "CollapseButton",
  setup(_,{ emit }) {
    let data = toRefs(reactive({
      isActive: false
    }))
    const onCollapseHandle = () => {
      data.isActive.value = !data.isActive.value;
      emit("onCollapse", data.isActive.value);
    }
    return {
      onCollapseHandle,
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>
.v-collapse-button-wrapper{
  cursor: pointer;
}
</style>
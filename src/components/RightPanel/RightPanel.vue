<template>
  <el-drawer
    :with-header="false"
    v-model="show"
    @close="closedHandle"
  >
    <slot/>
  </el-drawer>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore }  from "@/store/modules/layout/store";
export default {
  name: "RightPanel",
  props: {
    show: false,
  },
  setup() {
    const store = useStore();
    const closedHandle = (e) => {
      store.actions.updateShowSettings()
    }
    return {
     closedHandle
    }
  }
}
</script>

<style>

</style>
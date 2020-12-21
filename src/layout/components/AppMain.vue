<template>
  <!-- 包裹在区域内 -->
  <section>
    <!-- vue-router 4.0 使用v-slot方式 -->
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in" >
         <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
// import { useRoute }  from "vue-router"
export default {
  name: "AppMain",
  setup() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>>
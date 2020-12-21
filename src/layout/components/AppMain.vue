<template>
  <!-- 包裹在区域内 -->
  <section class="app-main-container">
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
.app-main-container {
  min-height: calc(100vh - 56px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 10px;
}

.fixed-header+.app-main-container {
  margin-top: 56px;
}

// 显示TagsView时样式
.showTagsView{
  .app-main-container {
    min-height: calc(100vh - 90px);
  }
  .fixed-header+.app-main-container {
    margin-top: 90px;
  }
}
</style>>
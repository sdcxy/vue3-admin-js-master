<template>
  <!-- 判断是否折叠，如果折叠取消图片logo的margin值 -->
  <div class="sidebar-log-wrapper" :class="{ collapse : collapse }" >
    <!-- 设置过渡 -->
    <transition-group name="sidebarLogo">
      <!-- 折叠时显示的信息 -->
      <router-link v-if="collapse" to="/" class="sidebar-link" key="collapse" >
        <img
          v-if="logo"
          class="sidebar-logo-img"
          :src="logo"
        />
        <h1 v-else class="sidebar-logo-title"> {{ title }}</h1>
      </router-link>
      <!-- 不折叠时显示的信息 -->
      <router-link v-else to="/"  class="sidebar-link" key="extend">
        <img
          v-if="logo"
          class="sidebar-logo-img"
          :src="logo"
        />
        <h1 class="sidebar-logo-title"> {{ title }}</h1>
      </router-link>
    </transition-group>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: "SideBarLogo",
  props: {
    collapse: Boolean
  },
  setup() {
    const data = toRefs(reactive({
      title: "V-Admin",
      logo: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    }))
    return {
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>

// 设置折叠后显示的动画  
.sidebarLogo-enter-active {
  transition: opacity 1.5s;
}

// vue 3.0 对初始状态进行了修改，参考 https://v3.cn.vuejs.org/guide/migration/transition.html#%E6%A6%82%E8%A7%88
.sidebarLogo-enter-from,
.sidebarLogo-leave-to  {
  opacity: 0;
}

.sidebar-log-wrapper{
  position: relative;
  height: 56px;
  text-align: center;
  line-height: 56px;
  overflow: hidden;
  background-color: #0a043c;

  & .sidebar-link{

    width: 100%;
    height: 100%;

    & .sidebar-logo-img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-logo-title {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      line-height: 56px;
      font-weight: 400px;
      margin: 0px;
      vertical-align: middle;
    }
  }
 
  &.collapse {
    .sidebar-logo-img {
      margin: 0;
    }
  }
  
}
</style>
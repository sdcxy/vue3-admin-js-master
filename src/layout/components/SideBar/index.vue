<template>
  <div>
    <!--侧边栏logo标题 -->
    <side-bar-logo v-if="showLogo" :collapse="isCollapse"></side-bar-logo>  
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- 侧边菜单 -->
      <el-menu 
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :background-color="sideBarColor.menuBackgroud"
        :active-text="sideBarColor.menuActiveText"
        :text-color="sideBarColor.menuText"
        mode="vertical"
        router
      >
      <!--遍历菜单 -->
        <side-bar-item v-for="menu in menus" :key="menu.path" :item="menu"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";
import SideBarLogo from "./Logo"
import { computed, reactive, toRefs } from 'vue'
import { useRoute } from "vue-router";
import { useStore } from  "@/store/modules/layout/store";
const sideBarColor = require("@/styles/sidebar/variables.scss");

export default {
  name: "SideBar",
  components: {
    SideBarLogo, SideBarItem
  },
  setup() {
    // 获取route 和 store对象
    const route = useRoute();
    const store = useStore();
    // 定义响应式对象
    const data = toRefs(reactive({
      menus: computed(()=>store.state.menus), // 对应的侧边栏菜单数组
      activeMenu: computed(()=>route.fullPath), // 用计算机属性监测路由当前fullPath的变化
      isCollapse: computed(()=>store.state.collapse),  // 是否折叠菜单
      showLogo: computed(()=>store.state.showLogo), // 是否显示图标
      sideBarColor: sideBarColor,  // 侧边栏颜色定义

    }))
    return {
      ...data
    }
  }
}
</script>

<style>

</style>
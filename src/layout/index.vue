<template>
  <!-- 整个容器区域 -->
  <div class="wrapper" :class="classObj">
    <!-- 侧边菜单栏 -->
    <side-bar class="side-container"></side-bar>
    <!-- 右侧内容区域 -->
    <div class="main-container"> 
      <!-- 头部导航 -->   
      <div>
        <nav-bar></nav-bar>
      </div>
      <!-- 主容器区域 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue"
import SideBar from "./components/SideBar/index.vue";
import NavBar from "./components/NavBar/index.vue";
import { useStore }  from "@/store/modules/layout/store";
import { computed, reactive, toRefs } from 'vue';
export default {
  name: "Layout",
  components: {
    NavBar,
    SideBar,
    AppMain
  },
  setup() {
    const store = useStore();
    let collaspe = computed(()=>store.state.collapse);
    const data = toRefs(reactive({
      collapse: collaspe,
      //定义样式
      classObj: {
        normalSideBar: !collaspe,
        collapseSideBar: collaspe
      }
    }))
    return {
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
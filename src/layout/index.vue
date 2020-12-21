<template>
  <!-- 整个容器区域 -->
  <div class="wrapper" :class="classObj">
    <!-- 侧边菜单栏 -->
    <side-bar class="side-container"></side-bar>
    <!-- 右侧内容区域 -->
    <div :class="{ showTagsView: showTagsView }" class="main-container"> 
      <!-- 头部导航 -->   
      <div :class="{ 'fixed-header': fixedHeader  }">
        <nav-bar></nav-bar>
        <tags v-if="showTagsView" :tags="menus"></tags>
      </div>
      <!-- 主容器区域 -->
      <app-main></app-main>
      <right-panel :show="showSettings">
        <settings/>
      </right-panel>
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue"
import SideBar from "./components/SideBar/index.vue";
import NavBar from "./components/NavBar/index.vue";
import Tags from "./components/Tags/index.vue";
import Settings from "./components/Settings/index";
import RightPanel from "@/components/RightPanel/RightPanel.vue";
import { useStore }  from "@/store/modules/layout/store";
import { computed, reactive, toRefs } from 'vue';
export default {
  name: "Layout",
  components: {
    Tags,
    NavBar,
    SideBar,
    AppMain,
    RightPanel,
    Settings,
    RightPanel
  },
  setup() {
    const store = useStore();
    let collaspe = computed(()=>store.state.collapse);
    let fixedHeader = computed(()=> store.state.fixedHeader);
    let showSettings = computed(()=> store.state.showSettings);
    let showTagsView = computed(()=> store.state.showTagsView);
    const data = toRefs(reactive({
      collapse: collaspe, // 折叠状态
      fixedHeader: fixedHeader, // 固定头部显示
      showSettings: showSettings, // 显示设置
      showTagsView: showTagsView, // 显示TagsView
      menus: computed(()=>store.state.menus),
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
@import '~@/styles/sidebar/variables.scss';
.wrapper{
  height: 100%;
  width: 100%;
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.collapseSideBar .fixed-header {
  width: calc(100% - 54px);
}
</style>
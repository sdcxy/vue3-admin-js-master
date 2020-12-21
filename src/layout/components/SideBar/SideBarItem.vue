<template>
  <!--判断是否隐藏  -->
  <div v-if="!item.hidden">
    <!-- 判断是否只包含一个项，并且 (onlyOneChild.children = false 或者 onlyOneChild.showChildren = true) -->
    <template v-if="hasOneChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.showChildren)">
      <!-- 判断 onlyOneChild.meta 是否存在 再渲染 -->
      <el-menu-item v-if="onlyOneChild.meta" :index="onlyOneChild.path">
        <menu-item  :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" :title="onlyOneChild.meta.title" ></menu-item>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="item.path">
      <template #title>
        <menu-item v-if="item.meta" :icon=" item.meta && item.meta.icon" :title="item.meta.title" ></menu-item>
      </template>
      <!-- 循环遍历 -->
      <side-bar-item
        v-for="child in item.children"
        :item="child"
        :key="child.path"
      ></side-bar-item>
    </el-submenu>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import MenuItem from "./Item";
export default {
  name: "SideBarItem",
  props: {
    item: Object
  },
  components: {
    MenuItem
  },
  setup(props) {
    // 初始化onlyOneChild
    let onlyOneChild = null;
    // 判断是否只有一个
    const hasOneChild = (children = [], parent) => {
      // 过滤不需要显示的项
      const showChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          onlyOneChild = item;
          return true;
        }
      })
      // 判断是否只有一个，返回true
      if (showChildren.length == 1) {
        return true;
      }
      if (showChildren.length == 0) {
        onlyOneChild = reactive({...parent, showChildren: true });
        return true;
      }
      return false;
    }
    // 不知为何需要在这里先执行，才能获取到值
    hasOneChild(props.item.children, props.item);

    return {
      onlyOneChild,
      hasOneChild,
    }
  }
}
</script>

<style>

</style>
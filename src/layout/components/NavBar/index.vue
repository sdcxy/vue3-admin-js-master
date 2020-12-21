<template>
  <div class="v-nav-bar">
    <el-row type="flex" align="middle">
      <!-- 左侧折叠按钮 -->
      <el-col :span="1" class="v-nav-bar-item" >
        <collapse-button @onCollapse="onCollapseHandle"></collapse-button>  
      </el-col>
       <!-- 右侧菜单显示信息 -->
      <el-col :span="23" class="v-navbar-right-menu">
          <!-- 人员头像显示-->
          <el-dropdown>
            <!-- 头像显示 -->
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- 个人信息 -->
                <el-dropdown-item>个人信息</el-dropdown-item>
                <!-- 退出登录 -->
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>   
            </template>
          </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CollapseButton from '@/components/CollapseButton/CollapseButton.vue'
import { useStore } from "@/store/modules/layout/store";
export default {
  components: { CollapseButton },
  name: "NavBar",
  setup() {
    const store = useStore();

    // 回调设置collapse状态
    const onCollapseHandle = (e) => { 
      store.actions.updateCollapse(e);
    }
    return {
      onCollapseHandle
    }
  }
  
}
</script>

<style lang="scss" scoped>
.v-nav-bar {
  background-color: #99ffef;
  width: 100%;
}

.v-nav-bar-item {
  display: flex;
  align-items: center;
  padding: 10px;
}
.v-navbar-right-menu{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}
</style>
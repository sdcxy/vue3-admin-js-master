<template>
  <div class="navbar-container" :style="{ backgroundColor: backgroundColor }">
    <el-row class="navbar-wrapper">
      <!-- 左侧折叠按钮 -->
      <el-col :span="1" class="navbar-collapse-button" >
        <collapse-button @onCollapse="onCollapseHandle"></collapse-button>  
      </el-col>
       <!-- 右侧菜单显示信息 -->
      <el-col :span="23" class="navbar-right-menu">
          <!-- 人员头像显示-->
          <el-dropdown @command="commandHandle">
            <!-- 头像显示 -->
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <template #dropdown>
              <el-dropdown-menu>
                <!-- 个人信息 -->
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <!-- 个人信息 -->
                <el-dropdown-item command="settings">设置参数</el-dropdown-item>
                <!-- 退出登录 -->
                <el-dropdown-item command="exit">退出登录</el-dropdown-item>
              </el-dropdown-menu>   
            </template>
          </el-dropdown>
          <!-- 设置参数-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CollapseButton from '@/components/CollapseButton/CollapseButton.vue'
import { useStore } from "@/store/modules/layout/store";
import { useRouter } from  "vue-router"
export default {
  components: { CollapseButton },
  name: "NavBar",
  props: {
    backgroundColor: { type: String, default: '#a6a9b6' }
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    // 回调设置collapse状态
    const onCollapseHandle = (e) => { 
      store.actions.updateCollapse(e);
    }
    // 打开设置界面
    const openSettings = () => {
      store.actions.updateShowSettings()
    }
    // 退出系统
    const exitSystem = () => {
      router.push("/login");
    }
    const commandHandle = (e) => {
      if (e === 'settings') {
        openSettings();
      }
      if (e == "exit") {
        exitSystem();
      }
    }
    return {
      onCollapseHandle,
      commandHandle
    }
  }
  
}
</script>

<style lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 56px;
  display: flex;
  justify-items: center;
}
.navbar-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}
.navbar-collapse-button {
  display: flex;
  align-items: center;
}
.navbar-right-menu{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
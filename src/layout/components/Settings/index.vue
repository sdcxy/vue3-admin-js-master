<template>
  <div class="settings-wrapper">
    <div>
      <div class="settings-item">
        <span>固定头部</span>
        <el-switch class="settings-switch" v-model="fixedHeader" @change="fixedChangeHandle"></el-switch>
      </div>
      <div class="settings-item">
        <span>显示TagsView</span>
        <el-switch class="settings-switch" v-model="showTagsView" @change="tagsViewChangeHandle"></el-switch>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useStore } from  "@/store/modules/layout/store";
export default {
  name: "Settings",
  setup() {
    const store = useStore();
    const fixedHeader = store.state.fixedHeader;
    const fixedChangeHandle = () => {
      store.actions.updateFixedHeader()
    }

    const showTagsView = store.state.showTagsView;
    const tagsViewChangeHandle = () => {
      store.actions.updateShowTagsView()
    }

    const data = toRefs(reactive({
      fixedHeader: fixedHeader,
      showTagsView: showTagsView,
    }))
    return {
      ...data,
      fixedChangeHandle,
      tagsViewChangeHandle,
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-wrapper {
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  .settings-item {
    height: 36px;
    line-height: 36px;
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .settings-switch{
    display: block;
    float: right;
    line-height: 36px;
  }
}
</style>
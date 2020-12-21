<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link 
        v-for="tag in tags"
        :key="tag.path"
        :to="{ path: tag.path }"
        class="tags-view-item"
      >
         {{ tag.meta.titile }}
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useRoute } from "vue-router";
export default {
  naem: "Tags",
  props: {
    tags: Array
  },
  setup() {
    
    const route = useRoute();

    const addTags = () => {
      const { name } = route
      console.log(name)
    }

    onMounted(()=> addTags());

    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.tags-view-container{
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
}
</style>
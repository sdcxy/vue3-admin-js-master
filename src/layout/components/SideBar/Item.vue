<template>
  <div>
    <svg-icon :icon-class="icon" ></svg-icon>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    icon: String,
    title: String
  }
}
</script>

<style>

</style>
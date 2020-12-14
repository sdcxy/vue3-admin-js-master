<template>
   <canvas id="canvas" class="cavs"></canvas>
</template>

<script>
import "./index";
export default {
  name: "BackGroundStyle"
}
</script>

<style lang="scss" scoped>
.cavs{
    z-index:1;
    position: fixed;
    width:95%;
    margin-left: 20px;
    margin-right: 20px;
}
</style>>
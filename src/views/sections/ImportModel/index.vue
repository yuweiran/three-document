<template>
  <div class="flex h-full overflow-auto">
    <el-menu class="h-full overflow-auto w-72" @select="handleSelectGeometry">
      <el-menu-item index="gltf">gltf/glb模型加载</el-menu-item>
    </el-menu>
    <div class="flex-1 overflow-auto">
      <SceneFrame></SceneFrame>
    </div>
  </div>
</template>

<script setup>
import SceneFrame from "./components/SceneFrame.vue"
</script>

<style lang="scss" scoped></style>

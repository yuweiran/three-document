<template>
  <el-menu class="h-full overflow-auto w-72" @select="handleSelectGeometry">
    <el-menu-item v-for="geometry in sections" :index="geometry">{{
      geometry
    }}</el-menu-item>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>

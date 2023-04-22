<template>
  <div color-model="light" class="flex flex-col h-full overflow-auto">
    <el-menu :default-active="activeIndex" class="el-menu-demo overflow-auto" mode="horizontal" :ellipsis="false"
      @select="handleSelect">
      <el-menu-item index="home">THREEJS</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item>
        <el-switch v-model="isLight"></el-switch>
      </el-menu-item>
      <el-menu-item index="Sections">Sections</el-menu-item>
      <el-menu-item index="Effects">Effects</el-menu-item>
    </el-menu>
    <div class="flex-1 overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import { ref } from "vue";
const activeIndex = "home";
const router = useRouter()
const isLight = ref(true);
const handleSelect = (menuItem) => {
  if (menuItem === "home") {
    router.replace('/')
  }
}
</script>
<style lang="scss"></style>

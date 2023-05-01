<template>
  <div class="flex flex-col h-full overflow-auto">
    <el-menu
      :default-active="activeIndex"
      class="overflow-auto el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <div
        class="flex items-center px-2 font-bold cursor-pointer hover:text-yellow-600"
        @click="router.push('/')"
      >
        THREEJS
      </div>
      <div class="flex-grow" />
      <el-menu-item>
        <el-switch
          @change="handleChangeColorMode"
          :active-icon="Sunny"
          :inactive-icon="Moon"
          inline-prompt
          v-model="isLight"
        ></el-switch>
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
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
const activeIndex = "home";
const router = useRouter();
const isLight = ref(true);
const handleSelect = (menuItem) => {
  if (menuItem === "home") {
    router.replace("/");
  }
};
onMounted(() => {
  if (localStorage.getItem("color-mode")) {
    isLight.value = localStorage.getItem("color-mode") === "true";
  } else {
    isLight.value = true;
  }
  if (isLight.value) {
    document.documentElement.setAttribute("class", "");
  } else {
    document.documentElement.setAttribute("class", "dark");
  }
});
const handleChangeColorMode = (isLight) => {
  if (isLight) {
    document.documentElement.setAttribute("class", "");
  } else {
    document.documentElement.setAttribute("class", "dark");
  }
  localStorage.setItem("color-mode", isLight);
};
</script>
<style lang="scss"></style>

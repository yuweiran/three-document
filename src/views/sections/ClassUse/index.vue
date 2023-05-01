<template>
  <div class="h-full" ref="threeUseClass"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import Experience from "./class/Experience"

const threeUseClass = ref()
let threeInstance = ref()
onMounted(() => {
  threeInstance.value = new Experience(threeUseClass.value)
})
onBeforeUnmount(() => {
  console.log('销毁')
  threeInstance.value.destroy()
})
</script>

<style scoped></style>
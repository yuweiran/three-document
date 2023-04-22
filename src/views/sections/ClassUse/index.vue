<template>
  <div class="h-full" ref="threeUseClass"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import Experience from "./class/Experience"

const threeUseClass = ref()

onMounted(() => {
  new Experience(threeUseClass.value)
})
</script>

<style scoped></style>
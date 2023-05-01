<template>
  <div ref="demoGeometry" style="height:100%;width:100%"></div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue"
import { renderGeometry, reRenderGeometry, removeGui } from "./index"
const props = defineProps({
  geometry: {
    type: String,
  }
})
const demoGeometry = ref()
onMounted(() => {
  renderGeometry(demoGeometry.value, props.geometry)
})
const setGeometry = async (geometry) => {
  await nextTick()
  reRenderGeometry(geometry)
}
defineExpose({ setGeometry })
onBeforeUnmount(() => {
  removeGui()
})
</script>

<style scoped lang="scss"></style>
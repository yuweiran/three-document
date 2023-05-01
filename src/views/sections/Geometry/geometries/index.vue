<template>
  <div ref="demoGeometry" class="geometry-demo"></div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import { GeometryDemo } from "./index";
const props = defineProps({
  geometry: {
    type: String,
  },
});
const demoGeometry = ref();
let instance = null;
onMounted(() => {
  instance = new GeometryDemo(demoGeometry.value, props.geometry);
});
const setGeometry = async (geometry) => {
  await nextTick();
  instance.loadGeometry(geometry);
};
defineExpose({ setGeometry });
onBeforeUnmount(() => {
  instance.removeGui();
});
</script>

<style scoped lang="scss">
.geometry-demo {
  height: 100%;
  width: 100%;
  position: relative;

  :deep(.dg.main.a) {
    position: absolute;
    right: 0;
  }
}
</style>

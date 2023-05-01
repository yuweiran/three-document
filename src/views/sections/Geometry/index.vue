<template>
  <div class="flex h-full overflow-auto">
    <el-menu class="h-full overflow-auto w-72" @select="handleSelectGeometry">
      <el-menu-item :key="geometry" v-for="geometry in sections" :index="geometry">{{
        geometry
      }}</el-menu-item>
    </el-menu>
    <div class="flex-1 overflow-auto">
      <DemoGeometry ref="demoGeometry" :geometry="seletedGeometry" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DemoGeometry from "./geometries/index.vue";
const seletedGeometry = ref("BoxGeometry");
const demoGeometry = ref();
const sections = [
  "BoxGeometry",
  "CapsuleGeometry",
  "CircleGeometry",
  "ConeGeometry",
  "CylinderGeometry",
  "DodecahedronGeometry",
  "EdgesGeometry",
  "ExtrudeGeometry",
  "IcosahedronGeometry",
  "LatheGeometry",
  "OctahedronGeometry",
  "PlaneGeometry",
  "PolyhedronGeometry",
  "RingGeometry",
  "ShapeGeometry",
  "SphereGeometry",
  "TetrahedronGeometry",
  "TorusGeometry",
  "TorusKnotGeometry",
  "TubeGeometry",
  "WireframeGeometry",
];
const handleSelectGeometry = (geometry) => {
  seletedGeometry.value = geometry;
  demoGeometry.value.setGeometry(geometry);
};
onMounted(() => { });
</script>

<style lang="scss" scoped></style>

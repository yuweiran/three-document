<template>
  <div class="flex h-full overflow-auto">
    <el-menu class="h-full overflow-auto w-72" @select="handleSelectShader">
      <el-menu-item index="shader1">着色器demo1</el-menu-item>
      <el-menu-item index="shader2">着色器demo2</el-menu-item>
    </el-menu>
    <div class="flex-1 overflow-auto">
      <SceneFrame ref="sceneContainer"></SceneFrame>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import SceneFrame from "@/components/scene/SceneFrame.vue"
import { GLTFLoader, } from "three/examples/jsm/loaders/GLTFLoader"
import { PlaneBufferGeometry, Mesh, MeshStandardMaterial, Clock, RawShaderMaterial, BufferAttribute } from "three"
//后面接?raw  通过字符串形式引入
import fragmentShader from "./shaderjs/fragment.frag?raw"
import vertexShader from "./shaderjs/vertex.vert?raw"

const sceneContainer = ref()
let scene = ref()


const handleSelectShader = (index) => {
  if (index === 'shader1') {
    
  } else if (index === 'shader2') {

  }
}
const loadInstance = () => {
  // sceneContainer.value.useTestCube()

  const planeGeometry = new PlaneBufferGeometry(15, 15, 32, 32)
  const count = planeGeometry.attributes.position.count
  const randomPoints = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    randomPoints[i] = Math.random()
  }
  planeGeometry.setAttribute('aRandom', new BufferAttribute(randomPoints, 1))
  const material = new RawShaderMaterial({
    vertexShader: vertexShader,//顶点着色器
    fragmentShader: fragmentShader,//片元着色器
    // transparent: true
    // wireframe: true
  })
  const mesh = new Mesh(planeGeometry, material)
  scene.value.add(mesh)
}
onMounted(() => {
  scene.value = sceneContainer.value.getScene()
  loadInstance()
})
</script>

<style lang="scss" scoped></style>

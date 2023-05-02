<template>
  <div class="flex h-full overflow-auto">
    <el-menu class="h-full overflow-auto w-72" @select="handleSelectGeometry">
      <el-menu-item index="gltf">gltf/glb模型加载</el-menu-item>
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
import { BoxGeometry, Mesh, MeshStandardMaterial, AnimationMixer, Clock } from "three"
const sceneContainer = ref()
let scene = ref()

const loadGltf = () => {
  //放入物体
  sceneContainer.value.clearScene()
  const gltfloader = new GLTFLoader()
  gltfloader.load('/gltf/Fox.glb',
    (gltf) => {
      console.log(gltf)
      const mixer = new AnimationMixer(gltf.scene)
      let Index = Math.floor(Math.random() * 3)
      const action = mixer.clipAction(gltf.animations[Index])
      action.play()
      gltf.scene.scale.x = 0.12
      gltf.scene.scale.y = 0.12
      gltf.scene.scale.z = 0.12
      gltf.scene.position.y = -10
      gltf.scene.rotation.y = -Math.PI * 0.3
      scene.value.add(gltf.scene)
      let clock = new Clock()
      let previousTime = 0
      const tick = () => {
        let elapsedTime = clock.getElapsedTime()
        let detalTime = elapsedTime - previousTime
        previousTime = elapsedTime
        requestAnimationFrame(tick)
        mixer.update(detalTime)
      }
      tick()
    })
}
onMounted(() => {
  scene.value = sceneContainer.value.getScene()
  loadGltf()
})
</script>

<style lang="scss" scoped></style>

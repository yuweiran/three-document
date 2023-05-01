<template>
  <div ref="sceneFrame"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Scene, PointLight, PerspectiveCamera, Clock, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const sceneFrame = ref()
const initScene = (ele) => {
  const eleOptions = ele.getBoundingClientRect()
  let scene = new Scene();
  const controls = new OrbitControls()
  // 相机
  let camera = new PerspectiveCamera(75, eleOptions.width / eleOptions.height, 0.1, 50);
  camera.position.z = 30;
  //渲染器
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(eleOptions.width, eleOptions.height);
  ele.append(renderer.domElement)
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableZoom = false;//关闭阻尼..默认就是关闭的
  const lights = [];
  lights[0] = new PointLight(0xffffff, 1, 0);
  lights[1] = new PointLight(0xffffff, 1, 0);
  lights[2] = new PointLight(0xffffff, 1, 0);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(- 100, - 200, - 100);
  scene.add(lights[0])
  scene.add(lights[1])
  scene.add(lights[2])
  //相机
  const clock = new Clock();
  function tick() {
    const time = clock.getElapsedTime();
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
    controls.update();
  }
  tick();
}
onMounted(() => {
  initScene(sceneFrame.value)
})
</script>

<style lang="scss" scoped></style>

<template>
  <div style="height: 100%" ref="sceneFrame"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import {
  Scene,
  PointLight,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Light,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const sceneFrame = ref();
let scene = ref();
const initScene = (ele) => {
  const eleOptions = ele.getBoundingClientRect();
  let scene = new Scene();
  // 相机
  let camera = new PerspectiveCamera(
    75,
    eleOptions.width / eleOptions.height,
    0.1,
    50
  );
  camera.position.z = 30;

  //渲染器
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(eleOptions.width, eleOptions.height);
  ele.append(renderer.domElement);
  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableZoom = false; //关闭阻尼..默认就是关闭的
  const lights = [];
  lights[0] = new PointLight(0xffffff, 1, 0);
  lights[1] = new PointLight(0xffffff, 1, 0);
  lights[2] = new PointLight(0xffffff, 1, 0);

  lights[0].position.set(0, 200, 0);
  lights[1].position.set(100, 200, 100);
  lights[2].position.set(-100, -200, -100);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);

  function tick() {
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
    orbit.update();
  }
  tick();
  return scene;
};
//#region Scene
//得到scene实例
const getScene = () => {
  return scene.value;
};
//清空scene
const clearScene = () => {
  let objects = scene.value.children;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i] instanceof Mesh) {
      scene.value.remove(objects[i]);
    }
  }
};
//#endregion
const clearLight = () => {
  let objects = scene.value.children;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i] instanceof Light) {
      scene.value.remove(objects[i]);
    }
  }
}
//#region Light
const useTestCube = () => {
  //放入物体
  let geometry = new BoxGeometry(10, 10, 10);
  let material = new MeshStandardMaterial();
  let mesh = new Mesh(geometry, material);
  scene.value.add(mesh);
}
//#endregion

onMounted(() => {
  scene.value = initScene(sceneFrame.value);
  //加载模型
});
defineExpose({
  getScene,//拿到scene实例
  clearScene,//清空场景中的mesh
  clearLight,//清空光线
  useTestCube//测试用例
});
</script>

<style lang="scss" scoped></style>

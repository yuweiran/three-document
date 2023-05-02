<template>
  <div>
    <div class="inline-flex w-1/5" v-for="item in sections">
      <el-card @click="() => { handleToSection(item.name) }" class="w-full h-full m-1">
        <template #header>
          <div>
            {{ item.name }}
          </div>
        </template>
        <div>
          {{ item.desciption }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
const router = useRouter()
const sections = ref([
  { name: "Geometry", desciption: "形状" },
  // { name: "Lights", desciption: "光线" },
  // { name: "Audio", desciption: "音频" },
  // { name: "Cameras", desciption: "摄像机" },
  // { name: "Helpers", desciption: "辅助线" },
  // { name: "Loader", desciption: "程序" },
  // { name: "Materials", desciption: "材质" },
  // { name: "Math", desciption: "数学方法" },
  // { name: "Renderers", desciption: "渲染器" },
  // { name: "Textures", desciption: "纹理" },
  { name: "ClassUse", desciption: "使用Class" },
  { name: "ImportModel", desciption: "模型导入" },
  { name: "Shader", desciption: "着色器" },
]);

const handleToSection = (sectionName) => {
  router.push({
    path: '/section/' + sectionName
  })
}
</script>

<style lang="scss" scoped></style>

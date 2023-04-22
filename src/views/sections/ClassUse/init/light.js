import {
  //光
  DirectionalLight, AmbientLight, SpotLight, HemisphereLight, PointLight, RectAreaLight
} from "three"

const lightReflect = {
  'DirectionalLight': DirectionalLight,//直线光
  'AmbientLight': AmbientLight,//自然光
  'SpotLight': SpotLight,//聚光灯光源
  'PointLight': PointLight,//点光源
  'RectAreaLight': RectAreaLight,//矩形光源
  'HemisphereLight': HemisphereLight//半球光源
}
export default class InitLight {
  // const scene = new Scene()
}
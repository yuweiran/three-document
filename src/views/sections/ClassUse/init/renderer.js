import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping, PCFSoftShadowMap } from "three"
import Experience from "../class/Experience"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default class InitRenderer {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
    this.setInstance()
    this.setOrbitControls()
  }
  setInstance = () => {
    this.instance = new WebGLRenderer({
      antialias: true//平滑，反锯齿
    })
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
    this.instance.setClearColor('#000000')
    // this.instance.useLegacyLights = true//物理校正光照值，解决不同设备间光照值效果不一样的问题？
    // //渲染器设置outputEncoding让其更加显得真实，默认为线性编码，这里换成sRGBEncoding。
    // //单独设置渲染器会让整体显得偏灰。这里可以在环境贴图时设置encoding为THREE.sRGBEncoding解决
    // this.instance.outputEncoding = sRGBEncoding
    // //色调映射
    // this.instance.toneMapping = ACESFilmicToneMapping
    // this.instance.toneMappingExposure = 2//曝光
    // //阴影
    // this.instance.shadowMap.enabled = true
    // this.instance.shadowMap.type = PCFSoftShadowMap
    this.canvas.append(this.instance.domElement)
  }
  setOrbitControls() {
    this.controls = new OrbitControls(this.camera.instance, this.instance.domElement);
    this.controls.enableDamping = true//阻尼
  }
  update = () => {
    this.instance.render(this.scene, this.camera)
  }
}
import { PerspectiveCamera } from "three"
import Experience from "../class/Experience"
//
export default class InitCamera {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.setInstance()

  }
  setInstance = () => {
    this.instance = new PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
    this.instance.position.set(6, 4, 8)//相机放置的点位,放太远会看不见
    // camera.lookAt(0, 0)//从放置点对准这个点
    // camera.add(light)//加这个，光线和视角相对不变
    this.scene.add(this.instance)//记得加上这个，相当于把眼睛加上，不然看不见啊
  }

}
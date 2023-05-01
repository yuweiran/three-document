import { Scene } from "three"
import { Sizes } from "../utils/size"
import { Time } from "../utils/time"
import InitCamera from "../init/camera"
import InitRenderer from "../init/renderer"
import InitWorld from "../world"
import InitLight from "../init/light"

let instance = null

export default class Experience {
  constructor(container) {
    if (instance) return instance
    instance = this
    this.canvas = container
    this.scene = new Scene()
    this.sizes = new Sizes(container)
    this.camera = new InitCamera()
    this.renderer = new InitRenderer()
    this.world = new InitWorld()
    this.time = new Time()

    // this.light = new InitLight()

  }
  destroy = () => {
    if (this.scene.children.length > 0) {
      for (let item of this.scene.children) {
        this.scene.remove(item)
      }
    }
    this.renderer.instance.dispose()
    this.scene.remove(this.scene)
    instance = null
  }
}


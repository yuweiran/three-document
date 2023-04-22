
import Experience from "../class/Experience"

export class Time {
  constructor() {
    this.experience = new Experience()
    this.camera = this.experience.camera
    this.scene = this.experience.scene
    this.renderer = this.experience.renderer
    this.start = Date.now()
    this.current = this.start//当前时间
    this.elapsed = 0 //经过的时间
    this.delta = 16 //每一帧间隔

    window.requestAnimationFrame(this.tick)
  }
  tick = () => {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.elapsed = currentTime - this.start
    this.current = currentTime
    //instance属性才是renderer实例
    this.renderer.instance.render(this.scene, this.camera.instance)
    window.requestAnimationFrame(this.tick)
  }
}
export class Sizes {
  constructor(container) {
    let containerInfo = container.getBoundingClientRect()
    console.log(containerInfo)
    this.width = containerInfo.width
    this.height = containerInfo.height
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }
  windowReSize = () => {
    window.addEventListener('resize', () => {
      let containerInfo = container.getBoundingClientRect()
      this.width = containerInfo.width
      this.height = containerInfo.height
    })
  }
}
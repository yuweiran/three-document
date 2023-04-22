import Experience from "./class/Experience";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three"

export default class InitWorld {
  constructor(container) {
    this.experience = new Experience(container)
    this.scene = this.experience.scene
    const test = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshBasicMaterial({ wireframe: true })
    )
    this.scene.add(test)
  }
}
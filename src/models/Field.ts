import Drawable from "./abstract/Drawable"

class Field extends Drawable {
  image: any
  contents: any[]

  constructor(
    xPos: number,
    yPos: number,
    w: number,
    h: number,
    initialContents: any[] = []
  ) {
    super()
    this.width = w
    this.height = h
    this.x = xPos
    this.y = yPos
    this.contents = initialContents
  }

  public draw() {
    this.p5.stroke("#7c4011")
    this.p5.strokeWeight(3)
    this.p5.fill("#b58969")
    this.p5.rect(this.x, this.y, this.width, this.height, 10)

    for (var item of this.contents) { 
      item.draw()
    }
  }

  plant(x: number, y: number) {
    console.log("new plant")
    // Get the crop name from the field name
    // var cropName = this.name.split(" ") // => e.g. "Wheat"
    // // Add a new crop to the field's list of crops
    // this.crops.push(new Crop(cropName[0], this, x, y))
  }
}

export default Field

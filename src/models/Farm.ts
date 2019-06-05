import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
class Farm extends Drawable {
  fields: Field[] = []
  width: number = 700
  height: number = 710
  cows: any
  pigs: any
  chickens: any
  trees: any
  sunflowers: any
  beans: any
  feed: any
  water: any
  constructor(
    cows: any = {
      name: "Cows",
      total: 42,
      objects: []
    },
    pigs: any = {
      name: "Pigs",
      total: 42,
      objects: []
    },
    chickens: any = {
      name: "Chickens",
      total: 142,
      objects: []
    },
    trees: any = {
      name: "Trees",
      total: 3,
      objects: []
    },
    sunflowers: any = {
      name: "Sunflowers",
      total: 1,
      objects: []
    },
    beans: any = {
      name: "Beans",
      total: 2,
      objects: []
    },
    feed: any = {
      name: "Feed",
      total: 1000,
      unit: "KG"
    },
    water: any = {
      name: "Water",
      total: 900,
      unit: "ML"
    }
  ) {
    super()
    this.cows = cows
    this.pigs = pigs
    this.chickens = chickens
    this.trees = trees
    this.sunflowers = sunflowers
    this.beans = beans
    this.feed = feed
    this.water = water
  }

  public preload() {
    this.createBasicFarm()
  }

  private createBasicFarm = () => {
    let firstFieldX = 25
    let firstFieldY = 25
    let firstFieldW = 350
    let firstFieldH = 175

    for (let i = 0; i < this.cows.total; i++) {
      let cow = new Cow(this)
      cow.p5 = this.p5
      cow.preload()
      cow.setRandomPositionInField(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH
      )
      this.cows.objects.push(cow)
    }
    this.fields.push(
      new Field(
        firstFieldX,
        firstFieldY,
        firstFieldW,
        firstFieldH,
        this.cows.objects
      )
    )
    this.fields.push(new Field(25, 275, 350, 125))
    this.fields.push(new Field(475, 25, 200, 325))
    this.fields.push(new Field(25, 450, 300, 125))
    for (let field of this.fields) {
      field.p5 = this.p5
      field.setHandleUpdate = this.updateUI
    }
  }

  public draw() {
    for (let field of this.fields) {
      field.draw()
    }
  }
}

export default Farm

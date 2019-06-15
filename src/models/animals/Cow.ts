import Animal from "../abstract/Animal"
import Farm from "../Farm";
class Cow extends Animal {
  name: string = "Cow"
  genus: string = "Cows"
  imgUrl: string = "/img/twtr/1f404.png"
  eats: string = "feed"
  hunger: number = 5
  farm: Farm
  
  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if cow is thin, yield less beef
  yieldBeef(): number {
    return this.hunger > 0 ? 100 / this.hunger : 120
  }

  eatFeed() {
    if (this.hunger <= 5 && this.hunger !== 0) {
      if (this.farm.feed.total > 0) {
        this.farm.feed.total--
        this.hunger = this.hunger - 1
      } else {
        if (this.hunger < 5) {
          this.hunger = this.hunger + 1
        } 
        
      }
    } 
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    //console.log(this.p5Img)
  }

  makeSound() {
    return "Moooo"
  }

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.eatFeed())
    this.stopForFarmer()

  }
}

export default Cow

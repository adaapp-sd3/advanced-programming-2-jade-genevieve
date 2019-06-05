import Crop from "../abstract/Crop"
import Farm from "../Farm";
import Game from "../Game";
import Farmer from "../Farmer";


class Bean extends Crop {
  name: string = "Bean"
  genus: string = "Legume"
  imgUrl: string = "/img/twtr/1f331.png"
  eats: string = "water"
  thirst: number = 5
  farm: Farm
  farmer!: Farmer
  game!: Game;
  
  constructor(farm: Farm) {
    super()
    this.farm = farm
  }

  // if not watered, reduce crop total
  dieWhenDry() {
    if ( this.thirst === 0 ) {

    }
  }

  // if plant is thirsty, yield less beans
  yieldBeans(): number {
    return this.thirst > 0 ? 100 / this.thirst : 300
  }

  drinkWater() {
    if (this.thirst <= 5 && this.thirst !== 0) {
      if (this.game.temp > 1.0) {
        this.thirst = this.thirst - 1
        
      }
    } 
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
    //console.log(this.p5Img)
  }

 

  public draw(): any {

    this.constrainItem()
    this.doSomethingOccasionally(() => this.drinkWater())
    this.stopForFarmer()

  }
}

export default Bean

import Drawable from "./abstract/Drawable"
import Farm from "./Farm"
import Farmer from "./Farmer"
import Market from "./Market"


class Game extends Drawable {
  myFarm!: Farm
  localMarket!: Market
  thisFarmer!: Farmer
  farmerName: string = ''
  budget: number = 1000
  showUI: boolean = true
  currentLocation: any
  year: number = 2019
  temp: number = 0.0;
  yearImgUrl = "/img/twtr/1f4c5.png"
  tempImgUrl = "/img/twtr/1f321.png"
  imgUrl = "/img/farmer.png"
  constructor() {
    super()
    this.x = 100
    this.y = 100
    this.width = 72
    this.height = 72
        // increment 3 years/minute
        setInterval(() => {if (this.year < 2050)
          this.year = this.year + 1;}, 2000)
        // increment temp by 0.1/40s
        setInterval(() => {if (this.temp < 1.5)
          this.temp = (this.temp + 0.1);}, 40000)
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl)
  }

  public keyPressed() {
    if (this.p5.keyCode === this.p5.ENTER) {
      this.showUI = true
    }
  }

  private update() {
    if (this.p5.keyIsDown(this.p5.RIGHT_ARROW)) {
      this.x = this.x + 5
    }
    if (this.p5.keyIsDown(this.p5.LEFT_ARROW)) {
      this.x = this.x - 5
    }
    if (this.p5.keyIsDown(this.p5.DOWN_ARROW)) {
      this.y = this.y + 5
    }
    if (this.p5.keyIsDown(this.p5.UP_ARROW)) {
      this.y = this.y - 5
    }
  }

  set farmerCurrentLocation(location: any) {
    this.currentLocation = location
  }

  private getCurrentLocation() {
    for (let field of this.myFarm.fields) {
      if (field.containsPoint(this.x + this.height, this.y + this.width)) {
        this.farmerCurrentLocation = field
        field.farmerPresent = true
      } else {
        field.farmerPresent = false
      }
    }
    if (
      this.localMarket.containsPoint(this.x + this.height, this.y + this.width)
    ) {
      this.farmerCurrentLocation = this.localMarket
      this.localMarket.farmerPresent = true
    } else {
      this.localMarket.farmerPresent = false
    }
    if (this.currentLocation && this.currentLocation.contents) {
      for (var item of this.currentLocation.contents) {
        if (item.containsPoint(this.x + this.height, this.y + this.width)) {
          item.farmerPresent = true
        } else {
          item.farmerPresent = false
        }
      }
    }
  }

  public draw() {
    this.update()
    this.getCurrentLocation()
    // var bobAmount = Math.sin(this.p5.millis() / 60) * 3
    let that = this
    this.updateUI({ farmer: that })
    this.p5.image(
      this.p5Img,
      this.x,
      // this.y + bobAmount, - see p5 animation
      this.y,
      this.width,
      this.height
    )
  }

  set farm(farm: Farm) {
    this.myFarm = farm
  }

  set market(market: Market) {
    this.localMarket = market
  }
}



// import Drawable from "./abstract/Drawable"
// import Farm from "./Farm"
// import Farmer from "./Farmer"
// import Market from "./Market"

// abstract class Game extends Drawable {
//     myFarm!: Farm
//     localMarket!: Market
//     currentFarmer!: Farmer
//     farmerName: string = ''
//     year: number = 2020
//     temp: number = 0.0;
//     yearImgUrl = "/img/twtr/1f4c5.png"
//     tempImgUrl = "/img/twtr/1f321.png"


//     constructor() {
//         super()
//         // increment 3 years/minute
//         setInterval(() => {if (this.year < 2050)
//           this.year = this.year + 1;}, 2000)
//         // increment temp by 0.1/40s
//         setInterval(() => {if (this.temp < 1.5)
//           this.temp = (this.temp + 0.1);}, 40000)
//       }

    
    
//       public preload() {
//         this.p5Img = this.p5.loadImage(this.yearImgUrl, this.tempImgUrl)
//       }


//       set farm(farm: Farm) {
//         this.myFarm = farm
//       }
    
//       set market(market: Market) {
//         this.localMarket = market
//       }
    
    
//     //include alert to get name for farmer

//     //option to save game locally

//     //if year = 2050 and temp < 1.5 game win
//     // elseif year = 2050 and temp > 1.5 game lose
//         // it('on each new year, get total cows, etc vs total trees,etc and increment temp')


//     // include weather randomiser







// }

export default Game






import Drawable from "./abstract/Drawable";
import Farmer from "./Farmer";

class Market extends Drawable {
  imgUrl = "/img/twtr/1f3e2.png";
  currentFarmer!: Farmer;

  // greenGasDemand: number = 100;
  // beefDemand: number = 75;
  // porkDemand: number = 25;
  // chickenDemand: number = 25;
  // woodDemand: number = 50;
  // sunflowerDemand: number = 15;
  // beanDemand: number = 15;

  //Animals
  cowPrice: number = 250;
  pigPrice: number = 100;
  chickenPrice: number = 5;

  beefPrice: number = 25;
  porkPrice: number = 25;
  eggsPrice: number = 25;

  feedPrice: number = 10

  //Crops
  treePrice: number = 10;
  sunflowerPrice: number = 30;
  beanPrice: number = 50;
  woodPrice: number = 50;
  

  greenGasPrice: number = 10;

  solarPanelPrice: number = 5000;

  grassSeedPrice: number = 10;

  constructor() {
    super();
    this.x = 600;
    this.y = 500;
    this.width = 60;
    this.height = 60;
  }

  set farmer(farmer: Farmer) {
    this.currentFarmer = farmer;
  }

  public preload() {
    this.p5Img = this.p5.loadImage(this.imgUrl);
  }

  public draw() {
    this.p5.image(this.p5Img, this.x, this.y, this.width, this.height);
  }
}

export default Market;

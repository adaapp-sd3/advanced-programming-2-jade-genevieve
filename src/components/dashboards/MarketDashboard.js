import React, { Component } from "react"

class MarketDashboard extends Component {

  // buyItem = item => {
  //   let budget = this.props.market.currentFarmer.budget
  //     // console.log(this.props.market.currentFarmer.myFarm.item)
  //     if (budget > `this.props.market.${item}Price` )
  //     budget = budget - `this.props.market.${item}Price`

  //     `this.props.market.currentFarmer.myFarm.${item}.total` = `this.props.market.currentFarmer.myFarm.${item}.total` +1

  //   }
  // }


  buyItem = item => {
    switch (item) {
      case 'solarPanel':
        this.props.market.currentFarmer.myFarm.solarPanel.total = this.props.market.currentFarmer.myFarm.solarPanel.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.solarPanelPrice;
        console.log("I got solar panel",  this.props.market.currentFarmer.myFarm.solarPanel.total)
        break;
      case 'cows':
        this.props.market.currentFarmer.myFarm.cows.total = this.props.market.currentFarmer.myFarm.cows.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.cowPrice;
        break; 
      case 'pigs':
        this.props.market.currentFarmer.myFarm.pigs.total = this.props.market.currentFarmer.myFarm.pigs.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.pigPrice;

        break;
      case 'chickens':
        this.props.market.currentFarmer.myFarm.chickens.total = this.props.market.currentFarmer.myFarm.chickens.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.chickenPrice;

        break;
      case 'feed':
        this.props.market.currentFarmer.myFarm.feed.total = this.props.market.currentFarmer.myFarm.feed.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.feedPrice;

        break;
      case 'trees':
        this.props.market.currentFarmer.myFarm.trees.total = this.props.market.currentFarmer.myFarm.trees.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.treePrice;

        break;
      case 'sunflowers':
        this.props.market.currentFarmer.myFarm.sunflowers.total = this.props.market.currentFarmer.myFarm.sunflowers.total + 1;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.sunflowerPrice;

        break;
      case 'beans':
        this.props.market.currentFarmer.myFarm.beans.total = this.props.market.currentFarmer.myFarm.beans.total + 1 ;
        this.props.market.currentFarmer.budget = this.props.market.currentFarmer.budget - this.props.market.beanPrice;
        break;
      default:
        return null;
    }
  }








  //   if (item === "seeds") {
  //     this.props.market.currentFarmer.myFarm.seeds.total =
  //       this.props.market.currentFarmer.budget *
  //       this.props.market.grassSeedPrice
  //     console.log(this.props.market.currentFarmer.myFarm.seeds)
  //     this.props.market.currentFarmer.budget = 0
  //   }
  // }

  sellItem = item => {
    if (item === "seeds") {
      this.props.market.currentFarmer.myFarm.seeds.total =
        this.props.market.currentFarmer.budget *
        this.props.market.grassSeedPrice
      console.log(this.props.market.currentFarmer.myFarm.seeds)
      this.props.market.currentFarmer.budget = 0
    }
  }



  render() {
    return (

      <section class="MarketDashboard">

        <div class="title is-4 is-fullwidth">Market</div>
        <div class="container">
          <div class="notification">'Ere we can buy and sell all the things!</div>
        </div>

        <div class="column">
          <table class="table-container">

            <thead>
              <tr>
                <th colspan="2" class="has-text-centered">Buy</th>
                <th>Qty</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td colspan="2" class="has-text-centered">Solar panels</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("solarPanel")}>
                    Buy for {this.props.market.solarPanelPrice}
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="2" class="has-text-centered">Cows</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("cows")}>
                    Buy for {this.props.market.cowPrice}
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="2" class="has-text-centered">Pigs</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("pigs")}>
                    Buy for {this.props.market.pigPrice}
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="2" class="has-text-centered">Chickens</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("chickens")}>
                    Buy for {this.props.market.chickenPrice}
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="2" class="has-text-centered">Trees</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("trees")}>
                    Buy for {this.props.market.treePrice}
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="2" class="has-text-centered">Sunflowers</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("sunflowers")}>
                    Buy for {this.props.market.sunflowerPrice}
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="2" class="has-text-centered">Beans</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("beans")}>
                    Buy for {this.props.market.beanPrice}
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <div class="column">

          <table class="table-container">

            <thead>
              <tr>
                <th colspan="2" class="has-text-centered">Sell</th>
                <th>Qty</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2" class="has-text-centered">Beef</td>
                <td>
                  <small class="tag">1</small>
                </td>
                <td>
                  <button class="button" onClick={() => this.buyItem("seeds")}>
                    Sell for {this.props.market.beefPrice}
                  </button>
                </td>
              </tr>


            </tbody>
          </table>
        </div>



      </section>
    )
  }
}

export default MarketDashboard

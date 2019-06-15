import React, { Component } from "react"
import FarmManager from "./components/FarmManager"
import "./App.css"
import p5 from "p5"
import makeFarm from "./p5Setup"
import Farm from "./models/Farm"
import Farmer from "./models/Farmer"
import Market from "./models/Market"

class App extends Component {
  // all instances live on the state
  state = {
    farmer: new Farmer(),
    farm: new Farm(),
    market: new Market(),
  }

  // allow instances to tell us when they change
  handleUpdateState = newThing => {
    this.setState(newThing)
  }

  //
  componentDidMount() {
    let sketch = makeFarm(
      this.state.farm,
      this.state.farmer,
      this.state.market,
      this.handleUpdateState
    )
    this.setState({
      myP5: new p5(sketch, "sketch")
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <img src="/img/farmer.png" className="App-logo" alt="logo" />{" "}
            Grow Zero
          </h2>
        </header>
        <FarmManager farmer={this.state.farmer} farm={this.state.farm} market={this.state.market} />
      </div>

    )
  }
}

export default App

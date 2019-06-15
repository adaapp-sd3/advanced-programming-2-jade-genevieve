import React, { Component } from "react"

class FieldDashboard extends Component {

  killForMeat = () => {
    if (this.props.field.contents.length > 0) {
      if (this.props.field.contents[0].name === "Cow"){
        this.farm.cows.total= this.farm.cows.total -1
        this.farm.beef = this.farm.beef + 400 
        console.log("Total beef", this.farm.beef)
      } else if (this.props.field.contents[0].name === "Pig"){
          this.farm.pigs.total= this.farm.cows.total -1
          this.farm.pork = this.farm.pork + 50 
          console.log("Total pork", this.farm.pork)

      }
    } 
  }

  // collectEggs = () => {
  //   if (this.props.field.contents.length > 0) {
  //     for (var i=0; i<this.props.field.contents.length; i++) {
  //       this.farm.eggs = this.farm.eggs + 3
  //     }
  //   }

  render() {
    return (
      <div className="FieldDashboard">
        <h2>Field</h2>
        {this.props.field.contents[0] && (
          <p>
            In this field you have {this.props.field.contents.length}{" "}
            {this.props.field.contents[0].name}s 

            {this.props.field.contents[0].name === "Cow" && (
              <button class="button" onClick={this.killForMeat}>Slaughter one</button>
            )}
            {this.props.field.contents[0].name === "Pig" && (
              <button class="button" onClick={this.killForMeat}>Slaughter one</button>
            )}
            {/* {this.props.field.contents[0].name === "Chicken" && (
              <button class="button" onClick={this.collectEggs}>Collect eggs</button>
            )} */}
          </p>

        )}
        {this.props.field.contents.map((item, i) => (
          <>
            {item.showUI && (
              <div className="fieldItem">
                <h3><img src={item.imgUrl} alt={item.name} /> {item.name}</h3>
                <dl>
                  <dt>Hunger</dt><dd>{item.hunger}</dd>
                </dl>
              </div>
            )}
          </>
        ))}
      </div>
    )
  }
}

export default FieldDashboard

/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

class FarmerDashboard extends Component {

  hideUI = () => {
    this.props.farmer.showUI = false
  }

  render() {
    return (
      <div className="FarmerDashboard">
        <dl className="dashboard">
          
        <div className="dashboard-stats">
          <dt>Year</dt><dd>{this.props.farmer.year}</dd>
          </div>

          <div className="dashboard-stats">
          <dt>Temp</dt><dd>{this.props.farmer.temp.toFixed(1)}</dd>
          </div>

          <div className="dashboard-stats">
          <dt>Current budget</dt><dd>{this.props.farmer.budget}</dd>
          </div>
          
          {this.props.farmer.myFarm && (<>

            <div className="dashboard-stats">
              <dt>Total cows</dt>
              <dd>{this.props.farmer.myFarm.cows.total}</dd>
            </div>

            <div className="dashboard-stats">
              <dt>Total straw</dt>
              <dd>{this.props.farmer.myFarm.straw.total} bails</dd>
            </div>

            <div className="dashboard-stats">            
              <dt>Total milk</dt>
              <dd>{this.props.farmer.myFarm.milk.total} pints</dd>
            </div>

            <div className="dashboard-stats">
              <dt>Total seeds</dt>
              <dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
            </div>

            </>
          )}
        </dl>
        <button onClick={this.hideUI}>Hide UI</button>
      </div>
    )
  }
}

export default FarmerDashboard;
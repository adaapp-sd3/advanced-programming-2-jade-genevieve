/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

const axios = require('axios');

class FarmerDashboard extends Component {

  constructor(){
    super()
    
    this.state = {
    hideResources: false,
    carbonIntensity: 100,
    }
    this.hideResources = this.hideResources.bind(this);
  }

  hideResources() {
    this.setState({hideResources: this.state.hideResources ? false : true})
  }
 

  componentDidMount() {
    const authToken = "461a43437cb43fc4";

    const options = {
        method: 'GET',
        url: `https://cors-anywhere.herokuapp.com/https://api.co2signal.com/v1/latest?countryCode=GB`,
        mode: '',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth-token' : authToken
          },
    };

    axios(options)
    .then(response => {
        
      this.setState({ carbonIntensity: response.data.data.carbonIntensity });
      console.log(response.data);
      
    })
    .catch(error => {
      console.log(error);
    });

  }




  render() {

    const style = this.state.hideResources ? { display : "none"} : { display : "block"}

    return (

      <section class="section has-background-light">
        <section class="section">
          <div class="container">
            <article class="media">
              <figure class="media-left">
                <figure class="image is-64x64">
                  <img src="img/farmerV.png" alt="farmer" />
                </figure>
              </figure>
              <div class="media-content">
                <div class="content notification">
                  'Ey up... Welcome t' thee farm!
                </div>
              </div>
            </article>
          </div>
        </section>


        <section class="section is-paddingless">
          <div class="columns is-multiline">
            <div class="column">
              <article class="media box">
                <figure class="media-left">
                  <span class="icon is-medium has-text-warning tooltip">
                    <i class="fas fa-2x fa-calendar-day"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="subtitle is-size-7 has-text-grey">Year</h1>
                    {this.props.farmer.year}
                  </div>
                  <progress class="progress is-warning" value={this.props.farmer.year - 2020} max="30"></progress>
                </div>
              </article>
            </div>

            <div class="column">
              <article class="media box">
                <figure class="media-left">
                  <span class="icon is-medium has-text-danger tooltip">
                    <i class="fas fa-2x fa-temperature-high" data-tooltip="temp"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="subtitle is-size-7 has-text-grey">Temp</h1>
                    {this.props.farmer.temp.toFixed(1)}°C
                  </div>
                  <progress class="progress is-danger" value={this.props.farmer.year - 2020} max="30"></progress>
                </div>
              </article>
            </div>

            <div class="column">
              <article class="media box">
                <figure class="media-left">
                  <span class="icon fa-2x is-medium has-text-primary tooltip">
                    <i class="fas fa-money-bill-alt" data-tooltip="cash"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="subtitle is-size-7 has-text-grey">Cash</h1>
                    {this.props.farmer.budget} <span class="is-size-7">Spondulix</span>
                  </div>
                </div>
              </article>
            </div>

            <div class="column">
              <article class="media box">
                <figure class="media-left">
                  <span class="icon fa-2x is-medium is-black tooltip">
                    <i class="fas fa-spray-can" data-tooltip="GHGs"></i>
                  </span>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <h1 class="subtitle is-size-7 has-text-grey">GHG's</h1>
                    {this.state.carbonIntensity.toFixed(0)} kWh <span class="is-size-7">CO2e/yr</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section class="section" style={style}>
          <div class="columns is-multiline">
            {this.props.farmer.myFarm && (<>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32">
                      <img src="img/twtr/1F42E.png" alt="cow-face" />
                    </figure>
                    {this.props.farmer.myFarm.cows.total}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32">
                      <img src="img/twtr/1F437.png" alt="pig-face" />
                    </figure>
                    {this.props.farmer.myFarm.pigs.total}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32">
                      <img src="img/twtr/1F414.png" alt="chick-face" />
                    </figure>
                    {this.props.farmer.myFarm.chickens.total}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32 tooltip" tooltip-title="feed">
                      <img src="img/twtr/1F372.png" alt="feed" />
                    </figure>
                    {this.props.farmer.myFarm.feed.total} KG
									</div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32">
                      <img src="img/twtr/1F333.png" alt="trees" />
                    </figure>
                    {this.props.farmer.myFarm.trees.total}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32">
                      <img src="img/twtr/1F33B.png" alt="sunflowers" />
                    </figure>
                    {this.props.farmer.myFarm.sunflowers.total}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32 tooltip" tooltip-title="beans">
                      <img src="img/twtr/1F33F.png" alt="beans" />
                    </figure>
                    {this.props.farmer.myFarm.beans.total}
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="notification">
                  <div class="content">
                    <figure class="image is-32x32 tooltip" tooltip-title="water">
                      <img src="img/twtr/1F6B0.png" alt="water" />
                    </figure>
                    {this.props.farmer.myFarm.water.total} ML
                </div>
                </div>
              </div>

            </>
            )}
          </div>
        </section>

        <div class="section">
          <button class="button is-warning" onClick={this.hideResources}>
          {this.state.hideResources === false ? "Hide Resources" : "Show Resources" }</button>
        </div>

      </section>

    )
  }
}

export default FarmerDashboard;
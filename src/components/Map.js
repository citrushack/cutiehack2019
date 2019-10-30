import React, { Component } from 'react';
import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './css/Map.css';

const campusMap = require('./assets/CUTIE_maps.png');

class Map extends Component {

  render(){
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
        <div className="mapBG">
          <div className="mapLeft">
            <div className="container innerMap">
              <h4 className="mapHeader">HACKATHON MAP</h4>
              <div style={{width: '16%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
              <div style={{marginBottom: '2%', height: '88%', textAlign: 'center'}}>
                <img className="liveMapImage" src={campusMap}></img>
              </div>
            </div>
          </div>
          <SideNav/>
        </div>
      </Animated>
    )
  }
}

export default Map;

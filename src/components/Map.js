import React, { Component } from 'react';
import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './css/Map.css';
import LiveMobileNavbar from './LiveMobileNavbar';

const campusMap = require('./assets/CUTIE_maps.png');

class Map extends Component {

  render(){
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
         <div className = "livemobilenavbar"><LiveMobileNavbar /></div>
        <div className="mapBG">
          <div className="mapLeft">
            <div className="container innerMap">
              <h4 className="mapHeader">HACKATHON MAP</h4>
              <div style={{width: '16%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
              <div className="actMapImage">
                <img className="liveMapImage" src={campusMap}></img>
              </div>
            </div>
          </div>
          <div className="removeMobile">
            <SideNav/>
          </div>
        </div>
      </Animated>
    )
  }
}

export default Map;

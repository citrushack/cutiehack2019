import React, { Component } from 'react';
import SideNav from './SideNav';
import Countdown from './Countdown';
import { Icon } from 'antd';
import { Animated } from 'react-animated-css';
import './css/Live.css';

const devPost = require('./assets/devpost.svg');
const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();


class Live extends Component {

  state = {
  }

  render(){
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
        <div className="liveSec1">
          <div className="liveLeft">
            <div className="liveUpperFooter">
              <div className="liveClockWrapper">
                <Countdown date={`${year}-11-09T00:00:00`}/>
                <div className="liveFooter">
                  <div className="iconWrapper">
                    <Icon className="liveIcon" type="slack" />
                  </div>
                  <div className="iconWrapper">
                    <Icon className="liveIcon" type="facebook" />
                  </div>
                  <div className="iconWrapper">
                    <Icon className="liveIcon" type="instagram" />
                  </div>
                  <div className="iconWrapper">
                    <Icon className="liveIcon" type="twitter" />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <SideNav/>
        </div>
      </Animated>
    )
  }



}

export default Live;

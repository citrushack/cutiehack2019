import React, { Component } from 'react';
import SideNav from './SideNav';
import Countdown from './Countdown';
import { Icon } from 'antd';
import { Animated } from 'react-animated-css';
import './css/Live.css';
import LiveMobileNavbar from './LiveMobileNavbar';

const devPost = require('./assets/devpost.svg');
const currentDate = new Date();
const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

class Live extends Component {

  state = {
  }

  render(){
    return(

      <Animated animationIn="fadeIn" isVisible={true}>
        <div className = "livemobilenavbar"><LiveMobileNavbar /></div>
        <div className="mobilePadder"></div>
        <div className="liveSec1">
          <div className="liveLeft">
            <div className="liveUpperFooter">
              <div className="liveClockWrapper">
                <div className="clockBorder">
                <Countdown date={`${year}-11-09T00:00:00`}/>
                </div>
              </div>
            </div>
            <div className="liveBottomFooter">
              <div className="liveIconWrapper">
                <div className="liveFooter">
                  <div className="iconWrapper">
                    <a href="https://join.slack.com/t/cutiehack2019/shared_invite/enQtODE5ODU3MDQ5NjA2LTc1MjY1ZjgxZGJjOGY1MzM1NzNiZjUxMTlmZmQzZGRjNWY2ZmYxYjU0OWFmNGZlY2U0OGE0NWM0NmIxY2QzMTU"><Icon className="liveIcon" type="slack" /></a>
                  </div>
                  <div className="iconWrapper">
                    <a href="https://www.facebook.com/cutiehack/"><Icon className="liveIcon" type="facebook" /></a>
                  </div>
                  <div className="iconWrapper">
                    <a href="https://www.instagram.com/cutiehack_ucr/?hl=en"><Icon className="liveIcon" type="instagram" /></a>
                  </div>
                  <div className="iconWrapper">
                    <a href="https://twitter.com/citrushack"><Icon className="liveIcon" type="twitter" /></a>
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

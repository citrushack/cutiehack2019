import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Animated } from 'react-animated-css';

const cbIcon = require('./assets/bIcon.png');

class SideNav extends Component {

  redirectLive = () => {
    window.location.assign('#/live')
  }

  redirectHome = () => {
    window.location.assign('/')
  }

  redirectSchedule = () => {
    window.location.assign('#/schedule')
  }

  redirectMap = () => {
    window.location.assign('#/map')
  }

  redirectJudges = () => {
    window.location.assign('#/judges')
  }

  render(){
    return(
      <div>
        <div className="liveSec2">
          <div className="liveNav">
            <img className="liveCutieIcon" src={cbIcon}></img>
            <h4 className="liveHeaders">CUTIE HACK</h4>
            <Animated animationInDelay={ 300 }animationIn="fadeIn" isVisible={true}>
              <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
            </Animated>
            <div className="liveTitleCont">
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectLive}>HOME</h1>
              </div>
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectSchedule}>SCHEDULE</h1>
              </div>
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectMap}>MAP</h1>
              </div>
              <div>
                <a href="https://github.com/citrushack/CutieHack19-HackerResources" className="liveSubTitle">RESOURCES</a>
              </div>
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectJudges}>JUDGING</h1>
              </div>
              <div>
                <a href="https://cutiehack2019.devpost.com/"className="liveSubTitle">DEVPOST</a>
              </div>
              <div>
                <h1 className="liveSubTitle" onClick={this.redirectHome}>BACK TO EVENT SITE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideNav;

import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import './css/LiveMobileNavbar.css'


class LiveMobileNavbar extends Component {
  state = {
  }

  handleSchedule = () => {
    window.location.assign('#/schedule')
  }

  handleHome = () => {
    window.location.assign('#/live')
  }

  handleMap = () => {
    window.location.assign('#/map')
  }

  handleJudges = () => {
    window.location.assign('#/judges')
  }

  render() {
    return(
        <div className="LMN">
        <button className="schedbutton" onClick={this.handleHome}>Home</button>
        <button className="schedbutton" onClick={this.handleSchedule}>Schedule</button>
        <button className="schedbutton" onClick={this.handleMap}>Map</button>
        <a href="https://github.com/citrushack/CutieHack19-HackerResources"><button className="schedbutton" onClick={this.handleResources}>Resources</button></a>
        <button className="schedbutton" onClick={this.handleJudges}>Judging</button>
      </div>
    )
  }



}

export default LiveMobileNavbar;

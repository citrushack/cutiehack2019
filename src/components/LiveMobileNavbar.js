import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import './css/LiveMobileNavbar.css'


class LiveMobileNavbar extends Component {
  state = {
  }

  render() {
    return(
        <div className="LMN">
        <button className="schedbutton" onClick={this.handleProfile}>Home</button>
        <button className="schedbutton" onClick={this.handleLogout}>Schedule</button>
        <button className="schedbutton" onClick={this.handleLogout}>Map</button>
        <button className="schedbutton" onClick={this.handleLogout}>Resources</button>
        <button className="schedbutton" onClick={this.handleLogout}>Judging</button>
      </div>
    )
  }



}

export default LiveMobileNavbar;

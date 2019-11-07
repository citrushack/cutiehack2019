import React, { Component } from 'react';
import SideNav from './SideNav';
import { Animated } from 'react-animated-css';
import './css/Schedule.css'
import LiveMobileNavbar from './LiveMobileNavbar';


class Schedule extends Component {
  state = {
  }

  render() {
    return(
      <Animated animationIn="fadeIn" isVisible={true}>
         <div className = "livemobilenavbar"><LiveMobileNavbar /></div>
        <div className="scheduleBG">
          <div className="scheduleLeft">
            <div className="container innerSchedule">
              <div className="row" style={{height: '100%'}}>
                <div className="col-4 scheduleSec1">
                  <h4 className="scheduleHeaders">LOGISTICS</h4>
                  <Animated animationIn="fadeIn" isVisible={true}>
                  <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
                  </Animated>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Registration</div>
                        <div className="innerRightSchedule">7:00AM-8:00AM</div>
                      </div>
                      <div className="scheduleLoc">Bytes</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Opening Ceremony</div>
                        <div className="innerRightSchedule">8:00AM-9:00AM</div>
                        </div>
                      <div className="scheduleLoc">MSE 104</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Hacking</div>
                        <div className="innerRightSchedule">9:00AM-9:00PM</div>
                      </div>
                      <div className="scheduleLoc">MSE 104</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Lunch</div>
                        <div className="innerRightSchedule">12:30PM-2:00PM</div>
                      </div>
                      <div className="scheduleLoc">TBD</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Dinner</div>
                        <div className="innerRightSchedule">6:00PM-7:30PM</div>
                      </div>
                      <div className="scheduleLoc">TBD</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Demos</div>
                        <div className="innerRightSchedule">9:00PM-9:30PM</div>
                      </div>
                      <div className="scheduleLoc">WCH 205/206</div>
                    </div>
                    <div className="scheduleSlot">
                      <div className="scheduleSection">
                        <div className="innerLeftSchedule">Closing Ceremony</div>
                        <div className="innerRightSchedule">10:30PM-11:00PM</div>
                      </div>
                      <div className="scheduleLoc">WCH 205/206</div>
                    </div>
                </div>
                <div className="col-4 scheduleSec2">
                  <h4 className="scheduleHeaders">WORKSHOPS</h4>
                  <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Team Building</div>
                      <div className="innerRightSchedule">9:00AM-9:30AM</div>
                    </div>
                    <div className="scheduleLoc">MSE 104</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Intro to Arduino</div>
                      <div className="innerRightSchedule">10:00AM-11:00AM</div>
                    </div>
                    <div className="scheduleLoc">A125</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Intro to Git</div>
                      <div className="innerRightSchedule">10:00AM-11:00AM</div>
                    </div>
                    <div className="scheduleLoc">WCH 110</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Front end web dev.</div>
                      <div className="innerRightSchedule">11:30AM-12:30PM</div>
                    </div>
                    <div className="scheduleLoc">A125</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Intro Google API's</div>
                      <div className="innerRightSchedule">11:30AM-12:30PM</div>
                    </div>
                    <div className="scheduleLoc">WCH 110</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Intro to Flask</div>
                      <div className="innerRightSchedule">1:30PM-2:00PM</div>
                    </div>
                    <div className="scheduleLoc">A125</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">IOS App Dev.</div>
                      <div className="innerRightSchedule">1:30PM-2:30PM</div>
                    </div>
                    <div className="scheduleLoc">WCH 110</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Intro to Linux</div>
                      <div className="innerRightSchedule">3:00PM-4:00PM</div>
                    </div>
                    <div className="scheduleLoc">A125</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">MLH Workshop</div>
                      <div className="innerRightSchedule">3:00PM-4:00PM</div>
                    </div>
                    <div className="scheduleLoc">WCH 110</div>
                  </div>
                </div>
                <div className="col-4 scheduleSec3">
                <h4 className="scheduleHeaders">ACTIVITIES</h4>
                <div style={{width: '35%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Cutest Cutie</div>
                      <div className="innerRightSchedule">9:00AM-9:30PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Game Room</div>
                      <div className="innerRightSchedule">11:30AM-9:00PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Meme Slides</div>
                      <div className="innerRightSchedule">12:00PM-7:00PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Scout Scotty</div>
                      <div className="innerRightSchedule">1:00PM-1:30PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Raffle Time</div>
                      <div className="innerRightSchedule">2:30PM-3:00PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Typing Contest</div>
                      <div className="innerRightSchedule">5:00PM-5:30PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
                  </div>
                  <div className="scheduleSlot">
                    <div className="scheduleSection">
                      <div className="innerLeftSchedule">Boba Time</div>
                      <div className="innerRightSchedule">10:00PM-10:30PM</div>
                    </div>
                    <div className="scheduleLoc">Bytes</div>
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

export default Schedule;

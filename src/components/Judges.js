import React, { Component } from 'react';
import SideNav from './SideNav';
import './css/Judges.css';

class Judges extends Component {
  render(){
    return(
      <div className="judgesBG">
        <div className="judgesLeft">
          <div className="container innerJudges">
            <h4 className="judgesHeader">ESTEEMED JUDGES</h4>
            <div style={{width: '16%', border: '1px solid #F7DE98', margin: 'auto', marginTop: '-4px', marginBottom: '12px'}}></div>
            <div className="row judgeRow">
              <div className="col-4 judgeCol">
                <div className="craigImgContainer">
                </div>
                <h4 className="judgeImgHeader craig">Craig Schroeder</h4>
                <p className="judgeImgSub">Assistant Professor in CSE Department</p>
              </div>
              <div className="col-4 judgeCol">
                <div className="mariamImgContainer">
                </div>
                <h4 className="judgeImgHeader mariam">Mariam Salloum</h4>
                <p className="judgeImgSub">Assistant Professor in CSE Department</p>
              </div>
              <div className="col-4 judgeCol">
                <div className="lependuImgContainer">
                </div>
                <h4 className="judgeImgHeader paea">Paea LePendu</h4>
                <p className="judgeImgSub">Assistant Professor in CSE Department</p>
              </div>
            </div>
            <div className="row judgeRow">
              <div className="col-4 judgeCol">
                <div className="papaImgContainer">
                </div>
                <h4 className="judgeImgHeader vagelis">Vagelis Papalexakis</h4>
                <p className="judgeImgSub">Assistant Professor in CSE Department</p>
              </div>
              <div className="col-4 judgeCol">
                <div className="jedImgContainer">
                </div>
                <h4 className="judgeImgHeader jed">Jed Schwendiman</h4>
                <p className="judgeImgSub">Assistant Dean for Development, BCOE</p>
              </div>
              <div className="col-4 judgeCol">
                <div className="defaultImgContainer">
                </div>
                <h4 className="judgeImgHeader">Zybooks Representative</h4>
                <p className="judgeImgSub">TBD</p>
              </div>
            </div>
            <div className="row judgeRow">
              <div className="col-4 judgeCol">
                <div className="defaultImgContainer">
                </div>
                <h4 className="judgeImgHeader">Zybooks Representative</h4>
                <p className="judgeImgSub">TBD</p>
              </div>
            </div>
          </div>
        </div>
        <SideNav/>
      </div>
    )
  }
}

export default Judges;

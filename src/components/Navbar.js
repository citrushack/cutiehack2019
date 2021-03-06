import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { logoutUser } from '../redux/actions';
import './css/Navbar.css';

const Icon = require('./assets/Icon.png');

const noScroll = {
}

const yesScroll = {
  backgroundColor: '#2E3E4F'
}

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectLogin: false,
      redirectToHome: false,
      redirectProfile: false,
      isTop: true
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 40;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll = (isTop) => {
    this.setState({ isTop });
  }

  LoginRedirect = () => {
    //window.location.assign('#/login')
    this.setState({
      redirectLogin: true
    })
  }

  HomeRedirect = () => {
    window.location.assign('/')
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    window.location.assign('/')
  }

  handleProfile = () => {
    this.setState({
      redirectProfile: true
    })
  }

  retProfile = () => {
    return (
      <div>
        <button className="buttons" onClick={this.handleProfile}>PROFILE</button>
        <button className="buttons" onClick={this.handleLogout}>LOGOUT</button>
      </div>
    )
  }

  retProfile2 = () => {
    return (
      <div>
        <button className="buttons" onClick={this.LoginRedirect}>LOGIN</button>
      </div>
    )
  }

  render(){
    let nav;
    if (this.state.isTop){
      nav = noScroll
    }
    else {
      nav = yesScroll
    }
    if (this.state.redirectLogin){
      return <Redirect push to="/login" />
    }
    if (this.state.redirectProfile){
      return <Redirect push to ="/profile" />
    }

    return(
      <div>
        <div className="nav" style={nav}>
          <button style={nav} className="buttons" onClick={this.HomeRedirect}>HOME</button>
           {this.props.currentUser.profile ? (this.retProfile()):(this.retProfile2())}
         </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

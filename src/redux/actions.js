import { Redirect } from 'react-router-dom';
import React from 'react';

export const userPostFetch = (user) => {
  return dispatch => {
    return fetch("https://cutie-hack-19.herokuapp.com/api/apply", {
      headers: {
        'Content-Type': 'application/json',
      },
      method: "POST",
      body: JSON.stringify({
        "email": user.email,
        "password": user.password1,
        "profile":{
            "first_name": user.first_name,
            "last_name": user.last_name,
            "school": user.school,
            "level_of_study": user.level_of_study,
            "graduation_year": user.graduation_year,
            "major": user.major,
            "gender": user.gender,
            "date_of_birth": user.date_of_birth,
            "ethnicity": user.ethnicity,
            "phone_number": user.phone_number,
            "dietary_restrictions": user.dietary_restrictions,
            "linkedin": user.linkedin,
            "github": user.github,
            "resume": user.resume,
            "share_box": user.share_box
        }
      }),
    })
      .then(resp => resp.json())
  }
}

export const userLoginFetch = (user, handleDispatch) => {
  return dispatch => {
    return fetch("https://cutie-hack-19.herokuapp.com/api/login", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user}),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.Message === "Login Successful") {
          localStorage.setItem("token", resp.jwt)
          dispatch(loginUser(resp.user));
          handleDispatch(resp.Message);
        }
        else {
          handleDispatch(resp.Message);
        }
      })
      .catch(err => console.log(err))
  }
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("https://cutie-hack-19.herokuapp.com/api/validateToken", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(resp => {
          if (resp.message) {
            console.log("removing token")
            // An error will occur if the token is invalid.
            localStorage.removeItem("token")
          } else {
            dispatch(loginUser(resp.user))
          }
        })
        .catch(err => console.log(err))
    }
    else {
      console.log("no token available")
    }
  }
}

export const loginUser = (userObj) => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

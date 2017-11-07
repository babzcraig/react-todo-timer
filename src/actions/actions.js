import { LOG_IN_SUCCESS, VALIDATE_SUCCESS, LOGOUT_SUCCESS } from './types';  
import axios from 'axios';
import api from '../api';

export function logInUser(credentials) {  
  return dispatch => {
    return api.login(credentials)
      .then(user => {
        dispatch(loginSuccess(user));
      })
      .catch(err => {
        //handle login errors
      })
  }
}

export function validateToken() {
  return dispatch => {
    return api.validateToken()
      .then(user => {
        dispatch(validateSuccss(user));
      })
      .catch(err => {
        //handle login errors
      })
  }
}

export function logoutUser() {
  return dispatch => {
    return api.logout()
      .then(user => {
        dispatch(logoutSuccess());
      })
      .catch(err => {
        //handle login errors
      })
  }
}



// HELPER FUNCTIONS
function loginSuccess(userData) {
  return {
    type: LOG_IN_SUCCESS,
    payload: userData
  }
}

function validateSuccss(userData) {
  return {
    type: VALIDATE_SUCCESS,
    payload: userData
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  }
}


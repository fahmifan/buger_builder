import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCsiOl-aJogaeBXJe2OkW8EskcOhr9olVU';
    isSignup && (url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCsiOl-aJogaeBXJe2OkW8EskcOhr9olVU');
    axios.post(url, authData)
      .then(res => {
        console.log(res.data);
        dispatch(authSuccess(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error))
      })
  }
}


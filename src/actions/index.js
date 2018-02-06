import * as firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED, payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED, payload: text
    };
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        // Signal starting auth
        dispatch({ type: LOGIN_USER });
        // Auth logic
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFailed(dispatch));
        });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
};

const loginUserFailed = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_FAILED });
};
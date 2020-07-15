import {ActionConst, Actions} from 'react-native-router-flux';
import {all, put, takeEvery} from 'redux-saga/effects'
import io from 'socket.io-client';
import {eventChannel, delay} from 'redux-saga';
import {take, call, fork, race, cancelled} from 'redux-saga/effects';
import {createSelector} from 'reselect';
import AsyncStorage from '@react-native-community/async-storage';

import user from '../data/login.js';
import config from '../../app.config';
import initSocket from '../socketIo';

export function login() {
  return {
    type: "GET_ALL_STOCK"
  }
}

export function fetchQuotes(pList){
  return{
    type: "GET_QUOTE",
    pList
  }
}

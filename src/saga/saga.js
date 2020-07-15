import config from '../../app.config';

import { put, takeLatest, takeEvery ,all } from "redux-saga/effects";

export function* fetchAllStocks(){
  const data = yield fetch(config.api.hostname + "/getlistallstock").then(res => res.json());
  return data
}

export function* fetchQuotes(pList) {
  const data = yield fetch(config.api.hostname + "/getliststockdata/" + pList).then(res => res.json());
  return data
}

// fetch list stocks
export function* getAllStocks(){
  try{
    const allStocks = yield fetchAllStocks();
    yield put({type : "GET_ALL_STOCK", allStocks})
  }
  catch(err){
    yield console.log("err: " , err)
  }
}

// export function* watchFetchAllStock(){
//   yield takeLatest("GET_ALL_STOCK", getAllStocks)
// }

// fetch quotes
export function* getQuotes(){
  try{
    const quotes = yield fetchQuotes();
    yield put({type : "GET_QUOTE", quotes})
  }
  catch(err){
    yield console.log("err: " , err)
  }
}

// export function* watchFetchQuotes(){
//   yield takeEvery("GET_QUOTE", getQuotes)
// }

// rootSaga
export default function* rootSaga(){
  yield all([
    watchFetchAllStock(),
    watchFetchQuotes()
  ])
}
import { createStore, applyMiddleWare } from 'redux';
import createSagaMiddleWare from "redux-saga";

import rootReducer from './reducers/index';
import rootSaga from './saga/saga';

const sagaMiddleWare = createSagaMiddleWare();
export default createStore(rootReducer, applyMiddleWare(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
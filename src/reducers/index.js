import {combineReducers} from "redux";

let dataState = {
  quotes = [],
  loading: true
};

export function quoteReducer(state = dataState, action){
  
  switch(action.type) {
    case "GET_ALL_STOCK": {
      return {
        ...state,
        loading : false,
        allStocks: action.allStock
      }
    }
    case "GET_QUOTE": {
      return{
        ...state,
        loading: false,
        quotes: action.quote
      }
    }
    default:
      return state
  }
};

const rootReducer = combineReducers({quoteReducer});

export default rootReducer;
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState ={
    theme: 'light',
    category: "general",
    newsList:[],
    linkId:1,
    count:0,
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "TOGGLE_THEME": {
        return {
          ...state,
          theme: action.payload,
        };
      }
      case "TOGGLE_CATEGORY": {
        return {
          ...state,
          category: action.payload,
        };
      }
      case "SET_NEWS_LIST": {
        return {
          ...state,
          newsList: action.payload,
        };
      }
      case "SET_TOTAL_COUNT": {
        return {
          ...state,
          count: action.payload,
        };
      }
      default:
        return state;
    }
  };
  const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));
  
  export default store;
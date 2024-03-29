import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState ={
    category: "general",
    newsList:[],
    linkId:1,
    count:0,
    modalView:{
      isOpenModal:false,
      item:{}
    },
    searchNews:[],
    activeBurger:'',
    isLoading:false,
    theme:'light',
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
      case "SET_SEARCH_NEWS": {
        return {
          ...state,
          searchNews: action.payload,
        };
      }
      case "TOGGLE_BURGER_MENU": {
        return {
          ...state,
          activeBurger: action.payload,
        };
      }
      case "SET_LOADING": {
        return {
          ...state,
          isLoading: !state.isLoading,
        };
      }
      case "TOGGLE_THEME": {
        return {
          ...state,
          theme: action.payload,
        };
      }
      default:
        return state;
    }
  };
  const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)));
  
  export default store;
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import instance from "../store/axiosConfig";

export const GET_NEWS = (category: string, page: number) => {
   
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });
        try {
            instance.get(`/top-headlines?category=${category}&country=us&apikey=f23ba73edd67d1a8191a22425256d0e7`)
                .then((data) => {
                    const newsList = data.data.articles
                    console.log(data)
                    dispatch({ type: "SET_NEWS_LIST", payload: newsList });
                    // dispatch({ type: "SET_TOTAL_COUNT", payload: data.data.totalArticles });
                })
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};
export const GET_SEARCH_NEWS = (categorySearch: string) => {
   
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            instance.get(`/top-headlines?category=${categorySearch}&lang=en&country=us&apikey=f23ba73edd67d1a8191a22425256d0e7&pageSize=100`)
                .then((data) => {
                    console.log(data.data.articles)
                    const searchNews = data.data.articles
                    
                    dispatch({ type: "SET_SEARCH_NEWS", payload: searchNews });
                })
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};
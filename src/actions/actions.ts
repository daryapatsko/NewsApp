import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import instance from "../store/axiosConfig";

export const GET_NEWS = (category: string, page: number) => {
   
    return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
        dispatch({ type: "SET_LOADING" });

        try {
            instance.get(`/top-headlines?country=us&category=${category}&apiKey=542e32be1e794c138b9585c2394f2515&pageSize=10&page=${page}`)
                .then((data) => {
                    const newsList = data.data.articles
                    dispatch({ type: "SET_NEWS_LIST", payload: newsList });
                    dispatch({ type: "SET_TOTAL_COUNT", payload: data.data.totalResults });
                })
        } catch (err) {
            console.log(err);
        } finally {
            dispatch({ type: "SET_LOADING" });
        }
    };
};
import { GET_NEWS_SUCCESS, GET_NEWS_FAIL } from "./types"
import NewsListService from "../services/newsListService"

export const getNewsList = () => (dispatch) => {
  return NewsListService.getNewsList().then(
    (res) => {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: res,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: GET_NEWS_FAIL,
      });

      return Promise.reject();
    }
  );
};
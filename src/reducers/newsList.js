import { GET_NEWS_SUCCESS, GET_NEWS_FAIL } from "../actions/types";

const initialState = { results: [] };

export default function newsList(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS_SUCCESS:
      return {
        ...payload,
      };
    case GET_NEWS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
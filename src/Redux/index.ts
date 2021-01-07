import { combineReducers } from "redux"

import { newsReducer } from "./store/news/news.reducer"

export default combineReducers({
  news: newsReducer,
})

import { put, takeEvery } from "redux-saga/effects"
import { ActionTypes, getFailureAction, setNewsInStore } from "./news.actions"
import ServiceNews from "../../../services/news"

function* getCatalogNews(actions: any) {
  try {
    // const catalogNews = yield ServiceNews.getCatalogNews(actions.payload)
    // yield put(setNewsInStore(catalogNews))
    console.log("hi1")
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* newsSaga() {
  yield takeEvery(ActionTypes.GET_NEWS, getCatalogNews)
}

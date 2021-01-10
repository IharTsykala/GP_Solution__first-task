import { put, takeEvery } from "redux-saga/effects"
import {
  ActionTypes,
  getFailureAction,
  setNewsInStore,
  setCountNewsID,
} from "./news.actions"
import ServiceNews from "../../../services/news"
import getDate from "../../../services/getDate"

function* getCatalogNews(actions: any) {
  try {
    const response = yield ServiceNews.getCatalogNews(getDate(actions.payload))
    const catalogNews = yield response.map((item: any, index: number) => {
      return {
        title: item.title,
        date: item.date,
        explanation: item.explanation,
        url: item.url,
        id: index + 1,
      }
    })
    yield put(setNewsInStore(catalogNews))
    yield put(setCountNewsID(catalogNews.length))
    console.log(response)
    console.log(catalogNews)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* newsSaga() {
  yield takeEvery(ActionTypes.GET_NEWS, getCatalogNews)
}

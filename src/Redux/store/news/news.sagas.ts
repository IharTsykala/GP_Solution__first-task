import { put, takeEvery } from "redux-saga/effects"
import {
  ActionTypes,
  getFailureAction,
  setNewsInStore,
  setCountNewsID,
} from "./news.actions"
import ServiceNews from "../../../services/news"
import getDate from "../../../services/getDate"
import { newsInterface } from "./../../InterfacesEntity/news.interface"

function* getCatalogNews(actions: any) {
  try {
    const response = yield ServiceNews.getCatalogNews(getDate(actions.payload))
    const catalogNews = yield response
      .map((item: newsInterface, index: number) => {
        return {
          title: item.title,
          date: item.date,
          explanation: item.explanation,
          url: item.url,
          id: index + 1,
        }
      })
      .reverse()
    yield put(setNewsInStore(catalogNews))
    yield put(setCountNewsID(catalogNews.length))
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* newsSaga() {
  yield takeEvery(ActionTypes.GET_NEWS, getCatalogNews)
}

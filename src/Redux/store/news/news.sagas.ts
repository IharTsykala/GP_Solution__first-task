import { put, takeEvery } from "redux-saga/effects"
import {
  ActionTypes,
  getFailureAction,
  setNewsInStore,
  setCountNewsID,
} from "./news.actions"
import ServiceNews from "../../../services/news"
import { title } from "process"

const getDate = (objectDate: any) => {
  const year = objectDate.getFullYear()
  let mouth = objectDate.getMonth() + 1
  if (mouth < 10) mouth = `0${mouth}`
  let day = objectDate.getDate()
  if (day < 10) day = `0${day}`
  return `${year}-${mouth}-${day}`
}

function* getCatalogNews(actions: any) {
  try {
    const responce = yield ServiceNews.getCatalogNews(getDate(actions.payload))
    const catalogNews = yield responce.map((item: any, index: number) => {
      return {
        title: item.title,
        date: item.date,
        explanation: item.explanation,
        url: item.url,
        id: index,
      }
    })
    yield put(setNewsInStore(catalogNews))
    yield put(setCountNewsID(catalogNews.length))
    console.log(responce)
    console.log(catalogNews)
  } catch (e) {
    yield put(getFailureAction(e))
  }
}

export default function* newsSaga() {
  yield takeEvery(ActionTypes.GET_NEWS, getCatalogNews)
}

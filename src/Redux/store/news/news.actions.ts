import { Action } from "../../interfacesAction/action.interface"
import { newsInterface } from "../../InterfacesEntity/news.interface"

export const ActionTypes = {
  GET_NEWS: "[Photo] Get news",
  SET_NEWS_IN_STORE: "[Photo] Set news in store",

  GET_FAILURE: "[getFailure] Get failure",
}

export const getNews = (currentDate: Date): Action<Date> => ({
  type: ActionTypes.GET_NEWS,
  payload: currentDate,
})

export const setNewsInStore = (
  arrayNews: newsInterface
): Action<newsInterface> => ({
  type: ActionTypes.SET_NEWS_IN_STORE,
  payload: arrayNews,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})

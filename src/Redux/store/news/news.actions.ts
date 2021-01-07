import { Action } from "../../interfacesAction/action.interface"
import { newsInterface } from "../../InterfacesEntity/news.interface"

export const ActionTypes = {
  GET_NEWS: "[News] Get news",
  SET_NEWS_IN_STORE: "[News] Set news in store",
  SET_COUNT_NEWS_ID: "[News] Set count news id",

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

export const setCountNewsID = (amount: number): Action<number> => ({
  type: ActionTypes.SET_COUNT_NEWS_ID,
  payload: amount,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})

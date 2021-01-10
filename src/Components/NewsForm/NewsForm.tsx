import React from "react"
import { Formik } from "formik"
import NewsFormRender from "./NewsFormRender/NewsFormRender"
import { NewsFormModes } from "../../shared/constants/user-from-view-mode.enum"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"
import getDate from "../../services/getDate"
import {
  editNewsByID,
  addNewsInCatalog,
  toggleModalNews,
  setCountNewsID,
} from "../../Redux/store/news/news.actions"

type NewsFormProps = {
  chosenNews: newsInterface,
  modalNewsToggle: string | null,
  countNewsID: number,
  dispatch: any,
}

const NewsForm: React.FC<NewsFormProps> = ({
  chosenNews,
  modalNewsToggle,
  countNewsID,
  dispatch,
}) => {
  const idNews = chosenNews.id || countNewsID + 1
  const editStatus = modalNewsToggle === NewsFormModes.EditNews

  return (
    <>
      <Formik
        initialValues={{
          title: editStatus ? chosenNews.title : "",
          date: editStatus ? chosenNews.date : getDate(new Date()),
          explanation: editStatus ? chosenNews.explanation : "",
          url: editStatus ? chosenNews.url : "",
        }}
        onSubmit={(values: any) => {
          if (modalNewsToggle === NewsFormModes.EditNews)
            dispatch(editNewsByID({ ...values, id: idNews }))
          if (modalNewsToggle === NewsFormModes.AddNews) {
            dispatch(addNewsInCatalog({ ...values, id: idNews }))
            dispatch(setCountNewsID(countNewsID + 1))
          }
          dispatch(toggleModalNews(null))
        }}
      >
        <NewsFormRender modalNewsToggle={modalNewsToggle} />
      </Formik>
    </>
  )
}

export default NewsForm

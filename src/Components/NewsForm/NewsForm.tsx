import React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import { connect } from "react-redux"

import NewsFormRender from "./NewsFormRender/NewsFormRender"
import {
  NewsFormButtons,
  NewsFormModes,
} from "../../shared/constants/user-from-view-mode.enum"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"

type NewsFormProps = {
  news: newsInterface,
  submitHandler: any,
  namePage: NewsFormButtons,
  nameButton: NewsFormModes,
}

const NewsForm: React.FC<NewsFormProps> = ({
  news,
  submitHandler,
  namePage,
  nameButton,
}) => {
  return (
    <Formik
      initialValues={{
        titleNews: "",
        dateNews: "",
        descriptionNews: "",
        urlNews: "",
      }}
      validationSchema={Yup.object({
        titleNews: Yup.string().max(15, "Must be 15 characters or less"),
        // .required("You need fill this field"),
        dateNews: Yup.string().max(10, "Must be 10 characters or less"),
        descriptionNews: Yup.string().max(10, "Must be 10 characters or less"),
        urlNews: Yup.string().email("Invalid email address"),
        // phone: Yup.string().phone<string>("Invalid email address")
      })}
      onSubmit={(values: {}) => {
        submitHandler(news ? news.id : undefined, values)
      }}
    >
      <NewsFormRender news={news} namePage={namePage} nameButton={nameButton} />
    </Formik>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user.user,
})

export default connect(mapStateToProps)(NewsForm)

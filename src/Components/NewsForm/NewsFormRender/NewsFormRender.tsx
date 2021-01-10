import React from "react"
import { Field, Form, ErrorMessage } from "formik"
import {
  NewsFormButtons,
  NewsFormModes,
} from "../../../shared/constants/user-from-view-mode.enum"
import FormDataUsersRenderCSS from "./FormDataUsersRender.module.css"
import { newsInterface } from "../../../Redux/InterfacesEntity/news.interface"
import { Button } from "@material-ui/core"
import useStyles from "./NewsFormUseStyles"
import { TextField } from "formik-material-ui"

type FormDataUsersRenderProps = {
  news: newsInterface,
  namePage: NewsFormModes,
  nameButton: NewsFormButtons,
}

const FormDataUsersRender: React.FC<FormDataUsersRenderProps> = ({
  news,
  namePage,
  nameButton,
}) => {
  const classes = useStyles()
  return (
    <Form className={`${classes.root}`}>
      <Field
        name="TitleNews"
        // required
        label="TitleNews"
        component={TextField}
        // className={FormDataUsersRenderCSS.form_logIn__fields_container}
      />
      <ErrorMessage name="TitleNews" />
      <Field
        name="DateNews"
        // id="standard-password-input"
        label="DateNews"
        // type="password"
        // autoComplete="current-password"
        component={TextField}
        // className={FormDataUsersRenderCSS.form_logIn__fields_container}
      />
      <ErrorMessage name="DateNews" />

      <Field
        name="descriptionNews"
        label="descriptionNews"
        component={TextField}
        // className={FormDataUsersRenderCSS.form_logIn__fields_container}
      />
      <ErrorMessage name="descriptionNews" />
      <Field
        name="urlNews"
        label="urlNews"
        component={TextField}
        // className={FormDataUsersRenderCSS.form_logIn__fields_container}
      />
      <ErrorMessage name="urlNews" />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >{`${nameButton}`}</Button>
    </Form>
  )
}

export default FormDataUsersRender

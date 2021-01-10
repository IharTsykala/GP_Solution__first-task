import React from "react"
import { Field, Form, ErrorMessage } from "formik"
import { Button } from "@material-ui/core"
import useStyles from "./NewsFormUseStyles"
import { TextField } from "formik-material-ui"

type NewsFormRenderProps = {
  modalNewsToggle: string | null,
}

const NewsFormRender: React.FC<NewsFormRenderProps> = ({ modalNewsToggle }) => {
  const classes = useStyles()

  return (
    <Form className={`${classes.root}`}>
      <Field name="title" label="title" component={TextField} />
      <ErrorMessage name="title" />
      <Field name="date" label="date" disabled component={TextField} />
      <ErrorMessage name="date" />
      <Field name="explanation" label="explanation" component={TextField} />
      <ErrorMessage name="explanation" />
      <Field name="url" label="url" component={TextField} />
      <ErrorMessage name="url" />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >{`${modalNewsToggle}`}</Button>
    </Form>
  )
}

export default NewsFormRender

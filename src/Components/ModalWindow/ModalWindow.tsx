import React from "react"
import { Box, Typography } from "@material-ui/core"
import { setModalValueInReducer } from "../../Redux/store/Modal/Modal.action"
import { connect } from "react-redux"

type ModalWindowProps = {
  locale: string,
  fontSize: boolean,
  modalValue: boolean,
  countryForModalWindow: {},
  dispatch: any,
}

const ModalWindow: React.FunctionComponent<ModalWindowProps> = ({
  locale,
  fontSize,
  modalValue,
  countryForModalWindow,
  dispatch,
}) => {
  return (
    <>
      {modalValue && (
        <Box
          component={"div"}
          className={`modal__window__container`}
          onClick={(e) => dispatch(setModalValueInReducer(false))}
        >
          <Typography
            variant="h4"
            className={`modal__window__close_text ${
              (fontSize && "big_font_size") || "normal_font_size"
            }`}
          >
            {(locale === "En" && "Click here to close the modal window") ||
              "Кликните здесь что бы закрыть модальное окно"}
          </Typography>
          <Box
            component={"div"}
            className={"modal__window__container__info"}
            onClick={(e) => e.stopPropagation()}
          >
            <pre>
              <code
                className={(fontSize && "big_font_size") || "normal_font_size"}
              >
                {JSON.stringify(countryForModalWindow, null, 2)}
              </code>
            </pre>
          </Box>
        </Box>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  locale: state.locale.locale,
  fontSize: state.styles.fontSize,
  modalValue: state.modal.modalValue,
  countryForModalWindow: state.request.countryForModalWindow,
})

export default connect(mapStateToProps)(ModalWindow)

import React from "react"
import { Box, Typography } from "@material-ui/core"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"
import { connect } from "react-redux"
import { toggleModalNews } from "../../Redux/store/news/news.actions"
import NewsForm from "../../Components/NewsForm/NewsForm"

type ModalWindowProps = {
  // id: number,
  modalNewsToggle: string | null,
  chosenNews: newsInterface,
  countNewsID: number,

  dispatch: any,
}

const ModalWindow: React.FunctionComponent<ModalWindowProps> = ({
  // id,
  modalNewsToggle,
  chosenNews,
  countNewsID,
  dispatch,
}) => {
  return (
    <>
      {modalNewsToggle && (
        <Box
          component={"div"}
          className={`modal-window-container`}
          onClick={() => dispatch(toggleModalNews(null))}
        >
          <Box
            component={"div"}
            className={"modal-news-container"}
            onClick={(e) => e.stopPropagation()}
          >
            <Box component={"div"} className={"modal-news-container__header"}>
              <Typography variant="h6" gutterBottom>
                {modalNewsToggle}
              </Typography>
            </Box>
            <Box
              component={"div"}
              className={"modal-news-container__form-container"}
            >
              <NewsForm
                chosenNews={chosenNews}
                modalNewsToggle={modalNewsToggle}
                countNewsID={countNewsID}
                dispatch={dispatch}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  modalNewsToggle: state.news.modalNewsToggle,
  chosenNews: state.news.chosenNews,
  countNewsID: state.news.countNewsID,
})

export default connect(mapStateToProps)(ModalWindow)

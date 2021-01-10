import React from "react"
import { Box, Typography } from "@material-ui/core"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"
import { connect } from "react-redux"
import { toggleModalNews } from "../../Redux/store/news/news.actions"

type ModalWindowProps = {
  id: number,
  modalNewsToggle: boolean,
  chosenNews: newsInterface,

  dispatch: any,
}

const ModalWindow: React.FunctionComponent<ModalWindowProps> = ({
  id,
  modalNewsToggle,
  chosenNews,

  dispatch,
}) => {
  return (
    <>
      {modalNewsToggle && (
        <Box
          component={"div"}
          className={`modal__window__container`}
          onClick={(e) => dispatch(toggleModalNews())}
        >
          <Box></Box>
          <Box></Box>
          <Box>
            
          </Box>

        </Box>
      )}
    </>
  )
}

const mapStateToProps = (state: any) => ({
  modalNewsToggle: state.news.modalNewsToggle,
  chosenNews: state.news.chosenNews,
})

export default connect(mapStateToProps)(ModalWindow)

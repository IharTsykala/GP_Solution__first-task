import React from "react"
import { Box, Avatar, Typography } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"
import {
  toggleModalNews,
  setChosenItem,
  removeItemByID,
} from "../../Redux/store/news/news.actions"

type NewsBoxProps = {
  item: newsInterface,
  dispatch: any,
}

const NewsBox: React.FunctionComponent<NewsBoxProps> = ({ item, dispatch }) => {
  const handleClickEdit = (id: number) => {
    dispatch(toggleModalNews())
    dispatch(setChosenItem(id))
  }

  const handleClickRemove = (id: number) => {
    dispatch(removeItemByID(id))
  }

  return (
    <Box component={"div"} className={"news-box"}>
      <Box component={"div"} className={"news-box__image"}>
        <Avatar variant={"rounded"} alt={item.title} src={item.url} />
      </Box>
      <Box component={"div"} className={"news-box__description-container"}>
        <Box component={"div"} className={"news-box__description-header"}>
          <Typography variant="h6" gutterBottom>
            {item.title}
          </Typography>
        </Box>
        <Box component={"div"} className={"news-box__description-main"}>
          <Typography variant="body2" gutterBottom>
            {item.explanation}
          </Typography>
        </Box>
        <Box component={"div"} className={"edit-tools edit-tools_right"}>
          <EditIcon
            onClick={() => {
              handleClickEdit(item.id)
            }}
          />
          <CloseIcon
            onClick={() => {
              handleClickRemove(item.id)
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default NewsBox

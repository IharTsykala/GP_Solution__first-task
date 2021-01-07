import React, { useEffect } from "react"
import { Box, FormControlLabel, Checkbox } from "@material-ui/core"
// import { getCatalogByDay } from "../../Redux/store/Photo/Photo.actions"

// import { setCatalogValue } from "../../Redux/store/Catalog/Catalog.actions"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"

type NewsBoxProps = {
  item: newsInterface,
  dispatch: any,
}

const NewsBox: React.FunctionComponent<NewsBoxProps> = ({ item, dispatch }) => {
  return (
    <Box component={"div"} className={"catalog"}>
      {item.title}
    </Box>
  )
}

export default NewsBox

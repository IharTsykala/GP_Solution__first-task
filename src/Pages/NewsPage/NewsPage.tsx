import { Box } from "@material-ui/core"
import React from "react"
import NewsBox from "../../Components/NewsBox/NewsBox"
import NewsFilter from "../../Components/NewsFilter/NewsFilter"

const NewsPage: React.FunctionComponent = () => {
  return (
    <Box className={"news-page"}>
      <NewsFilter />
      <NewsBox />
    </Box>
  )
}

export default NewsPage

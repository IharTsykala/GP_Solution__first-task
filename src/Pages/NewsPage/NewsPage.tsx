import { Box } from "@material-ui/core"
import React from "react"
import NewsCatalog from "../../Components/NewsCatalog/NewsCatalog"
import NewsFilter from "../../Components/NewsFilter/NewsFilter"

const NewsPage: React.FunctionComponent = () => {
  return (
    <Box className={"news-page"}>
      <NewsFilter />
      <NewsCatalog />
    </Box>
  )
}

export default NewsPage

import React, { useEffect } from "react"
import { Box, FormControlLabel, Checkbox } from "@material-ui/core"
import { connect } from "react-redux"
import NewsBox from "../NewsBox/NewsBox"
// import { useId } from "react-id-generator"
import { newsInterface } from "../../Redux/InterfacesEntity/news.interface"

type NewsCatalogProps = {
  catalogNews: [newsInterface],
  dispatch: any,
}

const NewsCatalog: React.FunctionComponent<NewsCatalogProps> = ({
  catalogNews,
  dispatch,
}) => {
  return (
    <Box component={"div"} className={"catalog"}>
      {catalogNews &&
        catalogNews.length &&
        catalogNews.map((item: newsInterface, index: number) => (
          <NewsBox key={index + 1} item={item} dispatch={dispatch} />
        ))}
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  catalogNews: state.news.catalogNews,
})

export default connect(mapStateToProps)(NewsCatalog)
